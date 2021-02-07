import React, { useState, useEffect, useContext } from "react"; //
import Router from "next/router";
import useAuth from "../../contexts/auth.js";
import LoadingOverlay from "react-loading-overlay";

function Admin() {
  const { login, isAuthenticated, user } = useAuth();
  console.log(isAuthenticated);
  useEffect(() => {
    if (isAuthenticated) {
      if (user.UserType != "admin") {
        Router.push("/");
      }
    }
  }, []);
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setalert] = useState(false);

  const [isLoading, setLoading] = useState(false);
  const [pageup, setpageup] = useState(1);
  const [spinner, setspinner] = useState(false);

  const loguser = async (email, password) => {
    setspinner(true);
    console.log(email, password);
    setLoading(true);
    const res = await login(email, password);
    if (res) {
      setspinner(false);
      Router.push("/CompanysStatistics");
    } else {
      setspinner(false);
    }
  };

  return (
    <LoadingOverlay active={spinner} spinner text="جاري التحميل...">
      <div class="main-content">
        <div class="header bg-gradient-primary py-7 py-lg-8 pt-lg-9">
          <div class="separator separator-bottom separator-skew zindex-100">
            <svg
              x="0"
              y="0"
              viewBox="0 0 2560 100"
              preserveAspectRatio="none"
              version="1.1"
              xmlns="https://www.w3.org/2000/svg"
            >
              <polygon
                class="fill-default"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <div class="container mt--8 pb-5">
          <div class="row justify-content-center">
            <div class="col-lg-5 col-md-7">
              <div class="card bg-secondary border-0 mb-0">
                <div class="card-body px-lg-5 py-lg-5">
                  <div class="text-center text-muted mb-4">
                    <h3>الرجاء تسجيل الدخول</h3>
                  </div>
                  <form
                    onSubmit={(e) => {
                      loguser(email, password);
                      e.preventDefault();
                    }}
                    role="form"
                  >
                    <div class="form-group mb-3">
                      <div class="input-group input-group-merge input-group-alternative">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="ni ni-email-83"></i>
                          </span>
                        </div>
                        <input
                          value={email}
                          onChange={(e) => setemail(e.target.value)}
                          class="form-control"
                          placeholder="الإيميل"
                          type="text"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="input-group input-group-merge input-group-alternative">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="ni ni-lock-circle-open"></i>
                          </span>
                        </div>
                        <input
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          class="form-control"
                          placeholder="الرقم السري"
                          type="password"
                        />
                      </div>
                    </div>

                    <div class="text-center">
                      <button
                        type="button"
                        type="submit"
                        class="btn btn-primary my-4"
                      >
                        تسجيل الدخول
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div class="row mt-3">
                <div class="col-6">
                  <a href="#" class="text-light">
                    <small>هل نسيت الرقم السري ؟</small>
                  </a>
                </div>
                <div class="col-6 text-right">
                  <a href="#" class="text-light">
                    <small>تسجيل حساب جديد</small>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LoadingOverlay>
  );
}

export default Admin;
