import React, { createContext, useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";
import Router, { useRouter } from "next/router";

//api here is an axios instance
import api from "../services/Api";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [toggler, settoggler] = useState(true);

  useEffect(() => {
    async function loadUserFromCookies() {
      let data = false;
      const token = Cookies.get("token");
      if (token) {
        console.log("Got a token in the cookies, let's see if it is valid");
        api.defaults.headers.Authorization = `Bearer ${token}`;
        await api
          .post("api/checkToken")
          .then((res) => {
            data = res;
            console.log(data);
          })
          .catch((err) => {
            Cookies.remove("token");
            Cookies.remove("user_nicename");
            Cookies.remove("user_email");
            Cookies.remove("UserType");
            Cookies.remove("BracnhCode");
            Cookies.remove("CompanyCode");
            Cookies.remove("profile_pic");
            Cookies.remove("first_name");
            Cookies.remove("last_name");

            api.defaults.headers.Authorization = ``;

            Router.push("/Management");
          });
        //  const { data: data } = await api.post("api/checkToken");
        if (data) {
          console.log("old token is valid");
          setUser({
            user_nicename: Cookies.get("user_nicename"),
            user_email: Cookies.get("user_email"),
            UserType: Cookies.get("UserType"),
            CompanyCode: Cookies.get("CompanyCode"),
            BracnhCode: Cookies.get("BracnhCode"),
            profile_pic: Cookies.get("profile_pic"),
            first_name: Cookies.get("first_name"),
            last_name: Cookies.get("last_name"),
          });
        } else {
        }
      }
      setLoading(false);
    }
    loadUserFromCookies();
  }, []);

  const Sendcond = async (phone) => {
    let tempres = await api.get("api/getUserCode?phone=" + phone, {});

    return tempres;
  };

  const phoneLogin = async (phone, code) => {
    const { data: data } = await api.get(
      "api/singUserIN?phone=" + phone + "&code=" + code,
      {}
    );

    if (data) {
      console.log(data);

      console.log("Got new token" + data.token);
      Cookies.set("token", data.token, { expires: 60 });
      Cookies.set("user_nicename", data.user_nicename, { expires: 60 });
      Cookies.set("user_email", data.user_email, { expires: 60 });
      Cookies.set("UserType", data.UserType, { expires: 60 });
      Cookies.set("BracnhCode", data.BracnhCode, { expires: 60 });
      Cookies.set("CompanyCode", data.CompanyCode, { expires: 60 });
      Cookies.set("profile_pic", data.profile_pic, { expires: 60 });
      Cookies.set("first_name", data.first_name, { expires: 60 });
      Cookies.set("last_name", data.last_name, { expires: 60 });

      api.defaults.headers.Authorization = `Bearer ${data.token}`;

      setUser({
        user_nicename: data.user_nicename,
        user_email: data.user_email,
        UserType: data.UserType,
        CompanyCode: data.CompanyCode,
        BracnhCode: data.BracnhCode,
        profile_pic: data.profile_pic,
        first_name: data.first_name,
        last_name: data.last_name,
      });
      console.log("Got user", user);
      if (data.UserType == "Company") {
        Router.push("/CompanyStatistics");
        //return "Company";
      } else if (data.UserType == "mandobe") {
        // return "Company";
        Router.push("/MyUsers");
      }
      return true;
    } else {
      return false;
    }
  };

  const login = async (username, password) => {
    const { data: data } = await api.post("api/login", {
      email:username,
      password,
    });
    if (data) {
      console.log(data);

      console.log("Got new token" + data.token);
      Cookies.set("token", data.token, { expires: 60 });
      Cookies.set("user_nicename", data.user_nicename, { expires: 60 });
      Cookies.set("user_email", data.user_email, { expires: 60 });
      Cookies.set("UserType", data.UserType, { expires: 60 });
      Cookies.set("BracnhCode", data.BracnhCode, { expires: 60 });
      Cookies.set("CompanyCode", data.CompanyCode, { expires: 60 });
      Cookies.set("profile_pic", data.profile_pic, { expires: 60 });
      Cookies.set("first_name", data.first_name, { expires: 60 });
      Cookies.set("last_name", data.last_name, { expires: 60 });

      api.defaults.headers.Authorization = `Bearer ${data.token}`;

      setUser({
        user_nicename: data.user_nicename,
        user_email: data.user_email,
        UserType: data.UserType,
        CompanyCode: data.CompanyCode,
        BracnhCode: data.BracnhCode,
        profile_pic: data.profile_pic,
        first_name: data.first_name,
        last_name: data.last_name,
      });
      console.log("Got user", user);

      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("user_nicename");
    Cookies.remove("user_email");
    Cookies.remove("UserType");
    Cookies.remove("BracnhCode");
    Cookies.remove("CompanyCode");
    Cookies.remove("profile_pic");
    Cookies.remove("first_name");
    Cookies.remove("last_name");

    api.defaults.headers.Authorization = ``;

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        login,
        logout,
        Sendcond,
        phoneLogin,
        loading,
        logout,
        toggler,
        settoggler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export function ProtectRoute(Component) {
  return () => {
    const { user, isAuthenticated, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated && !loading) {
        Router.push("/Management");
      } else if (isAuthenticated) {
        if (user.UserType != "admin") Router.push("/");
      }
    }, [loading, isAuthenticated]);

    return <Component {...arguments} />;
  };
}

export function ProtectRouteCompany(Component) {
  return () => {
    const { user, isAuthenticated, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated && !loading) {
        Router.push("/login");
      } else if (isAuthenticated) {
        if (user.UserType != "Company") Router.push("/");
      }
    }, [loading, isAuthenticated]);

    return <Component {...arguments} />;
  };
}

export function ProtectRouteMandobe(Component) {
  return () => {
    const { user, isAuthenticated, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated && !loading) {
        Router.push("/login");
      } else if (isAuthenticated) {
        if (user.UserType != "mandobe") Router.push("/");
      }
    }, [loading, isAuthenticated]);

    return <Component {...arguments} />;
  };
}
