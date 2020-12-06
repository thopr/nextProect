module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./contexts/auth.js":
/*!**************************!*\
  !*** ./contexts/auth.js ***!
  \**************************/
/*! exports provided: AuthProvider, default, ProtectRoute, ProtectRouteCompany, ProtectRouteMandobe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthProvider", function() { return AuthProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProtectRoute", function() { return ProtectRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProtectRouteCompany", function() { return ProtectRouteCompany; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProtectRouteMandobe", function() { return ProtectRouteMandobe; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_Api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/Api */ "./services/Api.js");
var _jsxFileName = "C:\\xampp\\htdocs\\next\\contexts\\auth.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



 //api here is an axios instance


const AuthContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});
const AuthProvider = ({
  children
}) => {
  const {
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: toggler,
    1: settoggler
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function loadUserFromCookies() {
      let data = false;
      const token = js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get("token");

      if (token) {
        console.log("Got a token in the cookies, let's see if it is valid");
        _services_Api__WEBPACK_IMPORTED_MODULE_3__["default"].defaults.headers.Authorization = `Bearer ${token}`;
        await _services_Api__WEBPACK_IMPORTED_MODULE_3__["default"].post("jwt-auth/v1/token/validate").then(res => {
          data = res;
        }).catch(err => {
          js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove("token");
          js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove("user_nicename");
          js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove("user_email");
          js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove("UserType");
          js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove("BracnhCode");
          js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove("CompanyCode");
          js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove("profile_pic");
          js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove("first_name");
          js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove("last_name");
          _services_Api__WEBPACK_IMPORTED_MODULE_3__["default"].defaults.headers.Authorization = ``;
          next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/Management");
        }); //  const { data: data } = await api.post("jwt-auth/v1/token/validate");

        if (data) {
          console.log("old token is valid");
          setUser({
            user_nicename: js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get("user_nicename"),
            user_email: js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get("user_email"),
            UserType: js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get("UserType"),
            CompanyCode: js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get("CompanyCode"),
            BracnhCode: js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get("BracnhCode"),
            profile_pic: js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get("profile_pic"),
            first_name: js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get("first_name"),
            last_name: js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get("last_name")
          });
        } else {}
      }

      setLoading(false);
    }

    loadUserFromCookies();
  }, []);

  const Sendcond = async phone => {
    let tempres = await _services_Api__WEBPACK_IMPORTED_MODULE_3__["default"].get("rabwa/getUserCode?phone=" + phone, {});
    return tempres;
  };

  const phoneLogin = async (phone, code) => {
    const {
      data: data
    } = await _services_Api__WEBPACK_IMPORTED_MODULE_3__["default"].get("rabwa/singUserIN?phone=" + phone + "&code=" + code, {});

    if (data) {
      console.log(data);
      console.log("Got new token" + data.token);
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set("token", data.token, {
        expires: 60
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set("user_nicename", data.user_nicename, {
        expires: 60
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set("user_email", data.user_email, {
        expires: 60
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set("UserType", data.UserType, {
        expires: 60
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set("BracnhCode", data.BracnhCode, {
        expires: 60
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set("CompanyCode", data.CompanyCode, {
        expires: 60
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set("profile_pic", data.profile_pic, {
        expires: 60
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set("first_name", data.first_name, {
        expires: 60
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set("last_name", data.last_name, {
        expires: 60
      });
      _services_Api__WEBPACK_IMPORTED_MODULE_3__["default"].defaults.headers.Authorization = `Bearer ${data.token}`;
      setUser({
        user_nicename: data.user_nicename,
        user_email: data.user_email,
        UserType: data.UserType,
        CompanyCode: data.CompanyCode,
        BracnhCode: data.BracnhCode,
        profile_pic: data.profile_pic,
        first_name: data.first_name,
        last_name: data.last_name
      });
      console.log("Got user", user);

      if (data.UserType == "Company") {
        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/CompanyStatistics"); //return "Company";
      } else if (data.UserType == "mandobe") {
        // return "Company";
        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/MyUsers");
      }

      return true;
    } else {
      return false;
    }
  };

  const login = async (username, password) => {
    const {
      data: data
    } = await _services_Api__WEBPACK_IMPORTED_MODULE_3__["default"].post("jwt-auth/v1/token", {
      username,
      password
    });

    if (data) {
      console.log(data);
      console.log("Got new token" + data.token);
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set("token", data.token, {
        expires: 60
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set("user_nicename", data.user_nicename, {
        expires: 60
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set("user_email", data.user_email, {
        expires: 60
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set("UserType", data.UserType, {
        expires: 60
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set("BracnhCode", data.BracnhCode, {
        expires: 60
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set("CompanyCode", data.CompanyCode, {
        expires: 60
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set("profile_pic", data.profile_pic, {
        expires: 60
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set("first_name", data.first_name, {
        expires: 60
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set("last_name", data.last_name, {
        expires: 60
      });
      _services_Api__WEBPACK_IMPORTED_MODULE_3__["default"].defaults.headers.Authorization = `Bearer ${data.token}`;
      setUser({
        user_nicename: data.user_nicename,
        user_email: data.user_email,
        UserType: data.UserType,
        CompanyCode: data.CompanyCode,
        BracnhCode: data.BracnhCode,
        profile_pic: data.profile_pic,
        first_name: data.first_name,
        last_name: data.last_name
      });
      console.log("Got user", user);
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove("token");
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove("user_nicename");
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove("user_email");
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove("UserType");
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove("BracnhCode");
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove("CompanyCode");
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove("profile_pic");
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove("first_name");
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove("last_name");
    _services_Api__WEBPACK_IMPORTED_MODULE_3__["default"].defaults.headers.Authorization = ``;
    setUser(null);
  };

  return __jsx(AuthContext.Provider, {
    value: {
      isAuthenticated: !!user,
      user,
      login,
      logout,
      Sendcond,
      phoneLogin,
      loading,
      logout,
      toggler,
      settoggler
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 5
    }
  }, children);
};
function useAuth() {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(AuthContext);
  return context;
}
function ProtectRoute(Component) {
  return () => {
    const {
      user,
      isAuthenticated,
      loading
    } = useAuth();
    const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
      if (!isAuthenticated && !loading) {
        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/Management");
      } else if (isAuthenticated) {
        if (user.UserType != "admin") next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/");
      }
    }, [loading, isAuthenticated]);
    return __jsx(Component, _extends({}, arguments, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 12
      }
    }));
  };
}
function ProtectRouteCompany(Component) {
  return () => {
    const {
      user,
      isAuthenticated,
      loading
    } = useAuth();
    const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
      if (!isAuthenticated && !loading) {
        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/login");
      } else if (isAuthenticated) {
        if (user.UserType != "Company") next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/");
      }
    }, [loading, isAuthenticated]);
    return __jsx(Component, _extends({}, arguments, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 12
      }
    }));
  };
}
function ProtectRouteMandobe(Component) {
  return () => {
    const {
      user,
      isAuthenticated,
      loading
    } = useAuth();
    const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
      if (!isAuthenticated && !loading) {
        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/login");
      } else if (isAuthenticated) {
        if (user.UserType != "mandobe") next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/");
      }
    }, [loading, isAuthenticated]);
    return __jsx(Component, _extends({}, arguments, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 12
      }
    }));
  };
}

/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_auth_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/auth.js */ "./contexts/auth.js");
/* harmony import */ var react_verification_code_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-verification-code-input */ "react-verification-code-input");
/* harmony import */ var react_verification_code_input__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_verification_code_input__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_loading_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-loading-overlay */ "react-loading-overlay");
/* harmony import */ var react_loading_overlay__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_loading_overlay__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\xampp\\htdocs\\next\\pages\\login.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 //





function login() {
  const {
    login,
    Sendcond,
    phoneLogin
  } = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const {
    0: email,
    1: setemail
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: password,
    1: setPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: alert,
    1: setalert
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: phone,
    1: setphone
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: code,
    1: setcode
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  console.log(code);
  const {
    0: step,
    1: setStep
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const {
    0: isLoading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: spinner,
    1: setspinner
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: pageup,
    1: setpageup
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const {
    0: errorMessage,
    1: seterrorMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const phoneSendcond = async phone => {
    setspinner(true);
    console.log(email, password);
    setLoading(true);
    const res = await Sendcond(phone);
    console.log(res);

    if (res.data) {
      setspinner(false);
      setStep(2);
      seterrorMessage(false);
    } else {
      setspinner(false);
      seterrorMessage(true);
    }
  };

  const loguser = async () => {
    setspinner(true);
    console.log("" + code);
    const res = await phoneLogin(phone, code);

    if (res) {
      setspinner(false); //Router.push("/CompanyStatistics");
    } else {
      setspinner(false);
    }
  };

  return __jsx(react_loading_overlay__WEBPACK_IMPORTED_MODULE_3___default.a, {
    active: spinner,
    spinner: true,
    text: "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644...",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }, __jsx("div", {
    class: "main-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx("div", {
    class: "header bg-gradient-primary py-7 py-lg-8 pt-lg-9",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx("div", {
    class: "separator separator-bottom separator-skew zindex-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, __jsx("svg", {
    x: "0",
    y: "0",
    viewBox: "0 0 2560 100",
    preserveAspectRatio: "none",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx("polygon", {
    class: "fill-default",
    points: "2560 0 2560 100 0 100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  })))), step == 2 ? __jsx("div", {
    class: "container mt--8 pb-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }, __jsx("div", {
    class: "row justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, __jsx("div", {
    class: "col-lg-5 col-md-7",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }, __jsx("div", {
    class: "card bg-secondary border-0 mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, __jsx("div", {
    class: "card-body px-lg-5 py-lg-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 19
    }
  }, __jsx("div", {
    class: "text-center text-muted mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 21
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 23
    }
  }, "\u0627\u0644\u0631\u062C\u0627\u0621 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644"), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 23
    }
  }, "\u0623\u062F\u062E\u0644 \u0631\u0645\u0632 \u0627\u0644\u062F\u062E\u0648\u0644 \u0627\u0644\u0645\u0624\u0642\u062A")), __jsx("div", {
    dir: "ltr",
    style: {
      align: "center",
      marginLeft: "59px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 21
    }
  }, __jsx(react_verification_code_input__WEBPACK_IMPORTED_MODULE_2___default.a, {
    fields: 4,
    onChange: e => {
      if (e.length >= 4) {
        setcode(e);
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 23
    }
  })), __jsx("div", {
    class: "text-center text-muted mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 21
    }
  }, __jsx("button", {
    style: {
      align: "center"
    },
    type: "button",
    type: "submit",
    class: "btn btn-primary my-4",
    onClick: () => {
      loguser();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 23
    }
  }, "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644")))), __jsx("div", {
    class: "row mt-3",
    style: {
      display: "none"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 17
    }
  }, __jsx("div", {
    class: "col-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "#",
    class: "text-light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 21
    }
  }, __jsx("small", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 23
    }
  }, "\u0647\u0644 \u0646\u0633\u064A\u062A \u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0633\u0631\u064A \u061F"))), __jsx("div", {
    class: "col-6 text-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "#",
    class: "text-light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 21
    }
  }, __jsx("small", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 23
    }
  }, "\u062A\u0633\u062C\u064A\u0644 \u062D\u0633\u0627\u0628 \u062C\u062F\u064A\u062F"))))))) : __jsx("div", {
    class: "container mt--8 pb-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 11
    }
  }, __jsx("div", {
    class: "row justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }
  }, __jsx("div", {
    class: "col-lg-5 col-md-7",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 15
    }
  }, __jsx("div", {
    class: "card bg-secondary border-0 mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 17
    }
  }, __jsx("div", {
    class: "card-body px-lg-5 py-lg-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 19
    }
  }, __jsx("div", {
    class: "text-center text-muted mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 21
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 23
    }
  }, "\u0627\u0644\u0631\u062C\u0627\u0621 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644")), __jsx("form", {
    onSubmit: e => {
      phoneSendcond(phone);
      e.preventDefault();
    },
    role: "form",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 21
    }
  }, __jsx("div", {
    class: "form-group mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 23
    }
  }, __jsx("div", {
    class: "input-group input-group-merge input-group-alternative",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 25
    }
  }, __jsx("div", {
    class: "input-group-prepend",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 27
    }
  }, __jsx("span", {
    class: "input-group-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 29
    }
  }, __jsx("i", {
    class: "ni ni-mobile-button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 31
    }
  }))), __jsx("input", {
    value: phone,
    onChange: e => setphone(e.target.value),
    class: "form-control",
    placeholder: "\u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0644",
    type: "text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 27
    }
  }))), __jsx("div", {
    class: "text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 23
    }
  }, __jsx("button", {
    type: "button",
    type: "submit",
    class: "btn btn-primary my-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 25
    }
  }, "\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0645\u0632 \u0627\u0644\u0645\u0624\u0642\u062A"))), errorMessage ? __jsx("h2", {
    style: {
      color: "red"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 23
    }
  }, "\u0644\u0627 \u064A\u0648\u062C\u062F \u062D\u0633\u0627\u0628") : "")), __jsx("div", {
    class: "row mt-3",
    style: {
      display: "none"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 17
    }
  }, __jsx("div", {
    class: "col-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "#",
    class: "text-light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 21
    }
  }, __jsx("small", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 23
    }
  }, "\u0647\u0644 \u0646\u0633\u064A\u062A \u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0633\u0631\u064A \u061F"))), __jsx("div", {
    class: "col-6 text-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "#",
    class: "text-light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 21
    }
  }, __jsx("small", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 23
    }
  }, "\u062A\u0633\u062C\u064A\u0644 \u062D\u0633\u0627\u0628 \u062C\u062F\u064A\u062F")))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (login);

/***/ }),

/***/ "./services/Api.js":
/*!*************************!*\
  !*** ./services/Api.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);


const siteUrl = js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get("siteUrl");

if (!siteUrl) {
  js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set("siteUrl", "https://api.rabowah.com/wp-json/", {
    expires: 60
  });
}

let urls = {
  development: "https://api.rabowah.com/wp-json/",
  production: "https://api.rabowah.com/wp-json/"
};
const api = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: urls["development"],
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (api);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/login.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\next\pages\login.js */"./pages/login.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-loading-overlay":
/*!****************************************!*\
  !*** external "react-loading-overlay" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-loading-overlay");

/***/ }),

/***/ "react-verification-code-input":
/*!************************************************!*\
  !*** external "react-verification-code-input" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-verification-code-input");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dHMvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9BcGkuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtbG9hZGluZy1vdmVybGF5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdmVyaWZpY2F0aW9uLWNvZGUtaW5wdXRcIiJdLCJuYW1lcyI6WyJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInRvZ2dsZXIiLCJzZXR0b2dnbGVyIiwidXNlRWZmZWN0IiwibG9hZFVzZXJGcm9tQ29va2llcyIsImRhdGEiLCJ0b2tlbiIsIkNvb2tpZXMiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiYXBpIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInBvc3QiLCJ0aGVuIiwicmVzIiwiY2F0Y2giLCJlcnIiLCJyZW1vdmUiLCJSb3V0ZXIiLCJwdXNoIiwidXNlcl9uaWNlbmFtZSIsInVzZXJfZW1haWwiLCJVc2VyVHlwZSIsIkNvbXBhbnlDb2RlIiwiQnJhY25oQ29kZSIsInByb2ZpbGVfcGljIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsIlNlbmRjb25kIiwicGhvbmUiLCJ0ZW1wcmVzIiwicGhvbmVMb2dpbiIsImNvZGUiLCJzZXQiLCJleHBpcmVzIiwibG9naW4iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwibG9nb3V0IiwiaXNBdXRoZW50aWNhdGVkIiwidXNlQXV0aCIsImNvbnRleHQiLCJ1c2VDb250ZXh0IiwiUHJvdGVjdFJvdXRlIiwiQ29tcG9uZW50Iiwicm91dGVyIiwidXNlUm91dGVyIiwiYXJndW1lbnRzIiwiUHJvdGVjdFJvdXRlQ29tcGFueSIsIlByb3RlY3RSb3V0ZU1hbmRvYmUiLCJlbWFpbCIsInNldGVtYWlsIiwic2V0UGFzc3dvcmQiLCJhbGVydCIsInNldGFsZXJ0Iiwic2V0cGhvbmUiLCJzZXRjb2RlIiwic3RlcCIsInNldFN0ZXAiLCJpc0xvYWRpbmciLCJzcGlubmVyIiwic2V0c3Bpbm5lciIsInBhZ2V1cCIsInNldHBhZ2V1cCIsImVycm9yTWVzc2FnZSIsInNldGVycm9yTWVzc2FnZSIsInBob25lU2VuZGNvbmQiLCJsb2d1c2VyIiwiYWxpZ24iLCJtYXJnaW5MZWZ0IiwiZSIsImxlbmd0aCIsImRpc3BsYXkiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInZhbHVlIiwiY29sb3IiLCJzaXRlVXJsIiwidXJscyIsImRldmVsb3BtZW50IiwicHJvZHVjdGlvbiIsIkF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsIkFjY2VwdCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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QURGLENBREYsQ0F6RUosQ0FERixDQURGO0FBZ0pEOztBQUVjckMsb0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDck1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsTUFBTTBDLE9BQU8sR0FBR3pFLGdEQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLENBQWhCOztBQUNBLElBQUksQ0FBQ3dFLE9BQUwsRUFBYztBQUNaekUsa0RBQU8sQ0FBQzZCLEdBQVIsQ0FBWSxTQUFaLEVBQXVCLGtDQUF2QixFQUEyRDtBQUN6REMsV0FBTyxFQUFFO0FBRGdELEdBQTNEO0FBR0Q7O0FBQ0QsSUFBSTRDLElBQUksR0FBRztBQUNUQyxhQUFXLEVBQUUsa0NBREo7QUFFVEMsWUFBVSxFQUFFO0FBRkgsQ0FBWDtBQUlBLE1BQU14RSxHQUFHLEdBQUd5RSw0Q0FBSyxDQUFDQyxNQUFOLENBQWE7QUFDdkJDLFNBQU8sRUFBRUwsSUFBSSxlQURVO0FBRXZCcEUsU0FBTyxFQUFFO0FBQ1AwRSxVQUFNLEVBQUUsa0JBREQ7QUFFUCxvQkFBZ0I7QUFGVDtBQUZjLENBQWIsQ0FBWjtBQVFlNUUsa0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsMEQiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGxvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgUm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuLy9hcGkgaGVyZSBpcyBhbiBheGlvcyBpbnN0YW5jZVxyXG5pbXBvcnQgYXBpIGZyb20gXCIuLi9zZXJ2aWNlcy9BcGlcIjtcclxuXHJcbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSk7XHJcblxyXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFt0b2dnbGVyLCBzZXR0b2dnbGVyXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gbG9hZFVzZXJGcm9tQ29va2llcygpIHtcclxuICAgICAgbGV0IGRhdGEgPSBmYWxzZTtcclxuICAgICAgY29uc3QgdG9rZW4gPSBDb29raWVzLmdldChcInRva2VuXCIpO1xyXG4gICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkdvdCBhIHRva2VuIGluIHRoZSBjb29raWVzLCBsZXQncyBzZWUgaWYgaXQgaXMgdmFsaWRcIik7XHJcbiAgICAgICAgYXBpLmRlZmF1bHRzLmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IGBCZWFyZXIgJHt0b2tlbn1gO1xyXG4gICAgICAgIGF3YWl0IGFwaVxyXG4gICAgICAgICAgLnBvc3QoXCJqd3QtYXV0aC92MS90b2tlbi92YWxpZGF0ZVwiKVxyXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBkYXRhID0gcmVzO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIENvb2tpZXMucmVtb3ZlKFwidG9rZW5cIik7XHJcbiAgICAgICAgICAgIENvb2tpZXMucmVtb3ZlKFwidXNlcl9uaWNlbmFtZVwiKTtcclxuICAgICAgICAgICAgQ29va2llcy5yZW1vdmUoXCJ1c2VyX2VtYWlsXCIpO1xyXG4gICAgICAgICAgICBDb29raWVzLnJlbW92ZShcIlVzZXJUeXBlXCIpO1xyXG4gICAgICAgICAgICBDb29raWVzLnJlbW92ZShcIkJyYWNuaENvZGVcIik7XHJcbiAgICAgICAgICAgIENvb2tpZXMucmVtb3ZlKFwiQ29tcGFueUNvZGVcIik7XHJcbiAgICAgICAgICAgIENvb2tpZXMucmVtb3ZlKFwicHJvZmlsZV9waWNcIik7XHJcbiAgICAgICAgICAgIENvb2tpZXMucmVtb3ZlKFwiZmlyc3RfbmFtZVwiKTtcclxuICAgICAgICAgICAgQ29va2llcy5yZW1vdmUoXCJsYXN0X25hbWVcIik7XHJcblxyXG4gICAgICAgICAgICBhcGkuZGVmYXVsdHMuaGVhZGVycy5BdXRob3JpemF0aW9uID0gYGA7XHJcblxyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9NYW5hZ2VtZW50XCIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gIGNvbnN0IHsgZGF0YTogZGF0YSB9ID0gYXdhaXQgYXBpLnBvc3QoXCJqd3QtYXV0aC92MS90b2tlbi92YWxpZGF0ZVwiKTtcclxuICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJvbGQgdG9rZW4gaXMgdmFsaWRcIik7XHJcbiAgICAgICAgICBzZXRVc2VyKHtcclxuICAgICAgICAgICAgdXNlcl9uaWNlbmFtZTogQ29va2llcy5nZXQoXCJ1c2VyX25pY2VuYW1lXCIpLFxyXG4gICAgICAgICAgICB1c2VyX2VtYWlsOiBDb29raWVzLmdldChcInVzZXJfZW1haWxcIiksXHJcbiAgICAgICAgICAgIFVzZXJUeXBlOiBDb29raWVzLmdldChcIlVzZXJUeXBlXCIpLFxyXG4gICAgICAgICAgICBDb21wYW55Q29kZTogQ29va2llcy5nZXQoXCJDb21wYW55Q29kZVwiKSxcclxuICAgICAgICAgICAgQnJhY25oQ29kZTogQ29va2llcy5nZXQoXCJCcmFjbmhDb2RlXCIpLFxyXG4gICAgICAgICAgICBwcm9maWxlX3BpYzogQ29va2llcy5nZXQoXCJwcm9maWxlX3BpY1wiKSxcclxuICAgICAgICAgICAgZmlyc3RfbmFtZTogQ29va2llcy5nZXQoXCJmaXJzdF9uYW1lXCIpLFxyXG4gICAgICAgICAgICBsYXN0X25hbWU6IENvb2tpZXMuZ2V0KFwibGFzdF9uYW1lXCIpLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBsb2FkVXNlckZyb21Db29raWVzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBTZW5kY29uZCA9IGFzeW5jIChwaG9uZSkgPT4ge1xyXG4gICAgbGV0IHRlbXByZXMgPSBhd2FpdCBhcGkuZ2V0KFwicmFid2EvZ2V0VXNlckNvZGU/cGhvbmU9XCIgKyBwaG9uZSwge30pO1xyXG5cclxuICAgIHJldHVybiB0ZW1wcmVzO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHBob25lTG9naW4gPSBhc3luYyAocGhvbmUsIGNvZGUpID0+IHtcclxuICAgIGNvbnN0IHsgZGF0YTogZGF0YSB9ID0gYXdhaXQgYXBpLmdldChcclxuICAgICAgXCJyYWJ3YS9zaW5nVXNlcklOP3Bob25lPVwiICsgcGhvbmUgKyBcIiZjb2RlPVwiICsgY29kZSxcclxuICAgICAge31cclxuICAgICk7XHJcblxyXG4gICAgaWYgKGRhdGEpIHtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhcIkdvdCBuZXcgdG9rZW5cIiArIGRhdGEudG9rZW4pO1xyXG4gICAgICBDb29raWVzLnNldChcInRva2VuXCIsIGRhdGEudG9rZW4sIHsgZXhwaXJlczogNjAgfSk7XHJcbiAgICAgIENvb2tpZXMuc2V0KFwidXNlcl9uaWNlbmFtZVwiLCBkYXRhLnVzZXJfbmljZW5hbWUsIHsgZXhwaXJlczogNjAgfSk7XHJcbiAgICAgIENvb2tpZXMuc2V0KFwidXNlcl9lbWFpbFwiLCBkYXRhLnVzZXJfZW1haWwsIHsgZXhwaXJlczogNjAgfSk7XHJcbiAgICAgIENvb2tpZXMuc2V0KFwiVXNlclR5cGVcIiwgZGF0YS5Vc2VyVHlwZSwgeyBleHBpcmVzOiA2MCB9KTtcclxuICAgICAgQ29va2llcy5zZXQoXCJCcmFjbmhDb2RlXCIsIGRhdGEuQnJhY25oQ29kZSwgeyBleHBpcmVzOiA2MCB9KTtcclxuICAgICAgQ29va2llcy5zZXQoXCJDb21wYW55Q29kZVwiLCBkYXRhLkNvbXBhbnlDb2RlLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG4gICAgICBDb29raWVzLnNldChcInByb2ZpbGVfcGljXCIsIGRhdGEucHJvZmlsZV9waWMsIHsgZXhwaXJlczogNjAgfSk7XHJcbiAgICAgIENvb2tpZXMuc2V0KFwiZmlyc3RfbmFtZVwiLCBkYXRhLmZpcnN0X25hbWUsIHsgZXhwaXJlczogNjAgfSk7XHJcbiAgICAgIENvb2tpZXMuc2V0KFwibGFzdF9uYW1lXCIsIGRhdGEubGFzdF9uYW1lLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG5cclxuICAgICAgYXBpLmRlZmF1bHRzLmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IGBCZWFyZXIgJHtkYXRhLnRva2VufWA7XHJcblxyXG4gICAgICBzZXRVc2VyKHtcclxuICAgICAgICB1c2VyX25pY2VuYW1lOiBkYXRhLnVzZXJfbmljZW5hbWUsXHJcbiAgICAgICAgdXNlcl9lbWFpbDogZGF0YS51c2VyX2VtYWlsLFxyXG4gICAgICAgIFVzZXJUeXBlOiBkYXRhLlVzZXJUeXBlLFxyXG4gICAgICAgIENvbXBhbnlDb2RlOiBkYXRhLkNvbXBhbnlDb2RlLFxyXG4gICAgICAgIEJyYWNuaENvZGU6IGRhdGEuQnJhY25oQ29kZSxcclxuICAgICAgICBwcm9maWxlX3BpYzogZGF0YS5wcm9maWxlX3BpYyxcclxuICAgICAgICBmaXJzdF9uYW1lOiBkYXRhLmZpcnN0X25hbWUsXHJcbiAgICAgICAgbGFzdF9uYW1lOiBkYXRhLmxhc3RfbmFtZSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiR290IHVzZXJcIiwgdXNlcik7XHJcbiAgICAgIGlmIChkYXRhLlVzZXJUeXBlID09IFwiQ29tcGFueVwiKSB7XHJcbiAgICAgICAgUm91dGVyLnB1c2goXCIvQ29tcGFueVN0YXRpc3RpY3NcIik7XHJcbiAgICAgICAgLy9yZXR1cm4gXCJDb21wYW55XCI7XHJcbiAgICAgIH0gZWxzZSBpZiAoZGF0YS5Vc2VyVHlwZSA9PSBcIm1hbmRvYmVcIikge1xyXG4gICAgICAgIC8vIHJldHVybiBcIkNvbXBhbnlcIjtcclxuICAgICAgICBSb3V0ZXIucHVzaChcIi9NeVVzZXJzXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvZ2luID0gYXN5bmMgKHVzZXJuYW1lLCBwYXNzd29yZCkgPT4ge1xyXG4gICAgY29uc3QgeyBkYXRhOiBkYXRhIH0gPSBhd2FpdCBhcGkucG9zdChcImp3dC1hdXRoL3YxL3Rva2VuXCIsIHtcclxuICAgICAgdXNlcm5hbWUsXHJcbiAgICAgIHBhc3N3b3JkLFxyXG4gICAgfSk7XHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiR290IG5ldyB0b2tlblwiICsgZGF0YS50b2tlbik7XHJcbiAgICAgIENvb2tpZXMuc2V0KFwidG9rZW5cIiwgZGF0YS50b2tlbiwgeyBleHBpcmVzOiA2MCB9KTtcclxuICAgICAgQ29va2llcy5zZXQoXCJ1c2VyX25pY2VuYW1lXCIsIGRhdGEudXNlcl9uaWNlbmFtZSwgeyBleHBpcmVzOiA2MCB9KTtcclxuICAgICAgQ29va2llcy5zZXQoXCJ1c2VyX2VtYWlsXCIsIGRhdGEudXNlcl9lbWFpbCwgeyBleHBpcmVzOiA2MCB9KTtcclxuICAgICAgQ29va2llcy5zZXQoXCJVc2VyVHlwZVwiLCBkYXRhLlVzZXJUeXBlLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG4gICAgICBDb29raWVzLnNldChcIkJyYWNuaENvZGVcIiwgZGF0YS5CcmFjbmhDb2RlLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG4gICAgICBDb29raWVzLnNldChcIkNvbXBhbnlDb2RlXCIsIGRhdGEuQ29tcGFueUNvZGUsIHsgZXhwaXJlczogNjAgfSk7XHJcbiAgICAgIENvb2tpZXMuc2V0KFwicHJvZmlsZV9waWNcIiwgZGF0YS5wcm9maWxlX3BpYywgeyBleHBpcmVzOiA2MCB9KTtcclxuICAgICAgQ29va2llcy5zZXQoXCJmaXJzdF9uYW1lXCIsIGRhdGEuZmlyc3RfbmFtZSwgeyBleHBpcmVzOiA2MCB9KTtcclxuICAgICAgQ29va2llcy5zZXQoXCJsYXN0X25hbWVcIiwgZGF0YS5sYXN0X25hbWUsIHsgZXhwaXJlczogNjAgfSk7XHJcblxyXG4gICAgICBhcGkuZGVmYXVsdHMuaGVhZGVycy5BdXRob3JpemF0aW9uID0gYEJlYXJlciAke2RhdGEudG9rZW59YDtcclxuXHJcbiAgICAgIHNldFVzZXIoe1xyXG4gICAgICAgIHVzZXJfbmljZW5hbWU6IGRhdGEudXNlcl9uaWNlbmFtZSxcclxuICAgICAgICB1c2VyX2VtYWlsOiBkYXRhLnVzZXJfZW1haWwsXHJcbiAgICAgICAgVXNlclR5cGU6IGRhdGEuVXNlclR5cGUsXHJcbiAgICAgICAgQ29tcGFueUNvZGU6IGRhdGEuQ29tcGFueUNvZGUsXHJcbiAgICAgICAgQnJhY25oQ29kZTogZGF0YS5CcmFjbmhDb2RlLFxyXG4gICAgICAgIHByb2ZpbGVfcGljOiBkYXRhLnByb2ZpbGVfcGljLFxyXG4gICAgICAgIGZpcnN0X25hbWU6IGRhdGEuZmlyc3RfbmFtZSxcclxuICAgICAgICBsYXN0X25hbWU6IGRhdGEubGFzdF9uYW1lLFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2coXCJHb3QgdXNlclwiLCB1c2VyKTtcclxuXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICAgIENvb2tpZXMucmVtb3ZlKFwidG9rZW5cIik7XHJcbiAgICBDb29raWVzLnJlbW92ZShcInVzZXJfbmljZW5hbWVcIik7XHJcbiAgICBDb29raWVzLnJlbW92ZShcInVzZXJfZW1haWxcIik7XHJcbiAgICBDb29raWVzLnJlbW92ZShcIlVzZXJUeXBlXCIpO1xyXG4gICAgQ29va2llcy5yZW1vdmUoXCJCcmFjbmhDb2RlXCIpO1xyXG4gICAgQ29va2llcy5yZW1vdmUoXCJDb21wYW55Q29kZVwiKTtcclxuICAgIENvb2tpZXMucmVtb3ZlKFwicHJvZmlsZV9waWNcIik7XHJcbiAgICBDb29raWVzLnJlbW92ZShcImZpcnN0X25hbWVcIik7XHJcbiAgICBDb29raWVzLnJlbW92ZShcImxhc3RfbmFtZVwiKTtcclxuXHJcbiAgICBhcGkuZGVmYXVsdHMuaGVhZGVycy5BdXRob3JpemF0aW9uID0gYGA7XHJcblxyXG4gICAgc2V0VXNlcihudWxsKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgaXNBdXRoZW50aWNhdGVkOiAhIXVzZXIsXHJcbiAgICAgICAgdXNlcixcclxuICAgICAgICBsb2dpbixcclxuICAgICAgICBsb2dvdXQsXHJcbiAgICAgICAgU2VuZGNvbmQsXHJcbiAgICAgICAgcGhvbmVMb2dpbixcclxuICAgICAgICBsb2FkaW5nLFxyXG4gICAgICAgIGxvZ291dCxcclxuICAgICAgICB0b2dnbGVyLFxyXG4gICAgICAgIHNldHRvZ2dsZXIsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUF1dGgoKSB7XHJcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG5cclxuICByZXR1cm4gY29udGV4dDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFByb3RlY3RSb3V0ZShDb21wb25lbnQpIHtcclxuICByZXR1cm4gKCkgPT4ge1xyXG4gICAgY29uc3QgeyB1c2VyLCBpc0F1dGhlbnRpY2F0ZWQsIGxvYWRpbmcgfSA9IHVzZUF1dGgoKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGlmICghaXNBdXRoZW50aWNhdGVkICYmICFsb2FkaW5nKSB7XHJcbiAgICAgICAgUm91dGVyLnB1c2goXCIvTWFuYWdlbWVudFwiKTtcclxuICAgICAgfSBlbHNlIGlmIChpc0F1dGhlbnRpY2F0ZWQpIHtcclxuICAgICAgICBpZiAodXNlci5Vc2VyVHlwZSAhPSBcImFkbWluXCIpIFJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgfVxyXG4gICAgfSwgW2xvYWRpbmcsIGlzQXV0aGVudGljYXRlZF0pO1xyXG5cclxuICAgIHJldHVybiA8Q29tcG9uZW50IHsuLi5hcmd1bWVudHN9IC8+O1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQcm90ZWN0Um91dGVDb21wYW55KENvbXBvbmVudCkge1xyXG4gIHJldHVybiAoKSA9PiB7XHJcbiAgICBjb25zdCB7IHVzZXIsIGlzQXV0aGVudGljYXRlZCwgbG9hZGluZyB9ID0gdXNlQXV0aCgpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgaWYgKCFpc0F1dGhlbnRpY2F0ZWQgJiYgIWxvYWRpbmcpIHtcclxuICAgICAgICBSb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuICAgICAgfSBlbHNlIGlmIChpc0F1dGhlbnRpY2F0ZWQpIHtcclxuICAgICAgICBpZiAodXNlci5Vc2VyVHlwZSAhPSBcIkNvbXBhbnlcIikgUm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICB9XHJcbiAgICB9LCBbbG9hZGluZywgaXNBdXRoZW50aWNhdGVkXSk7XHJcblxyXG4gICAgcmV0dXJuIDxDb21wb25lbnQgey4uLmFyZ3VtZW50c30gLz47XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFByb3RlY3RSb3V0ZU1hbmRvYmUoQ29tcG9uZW50KSB7XHJcbiAgcmV0dXJuICgpID0+IHtcclxuICAgIGNvbnN0IHsgdXNlciwgaXNBdXRoZW50aWNhdGVkLCBsb2FkaW5nIH0gPSB1c2VBdXRoKCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBpZiAoIWlzQXV0aGVudGljYXRlZCAmJiAhbG9hZGluZykge1xyXG4gICAgICAgIFJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKGlzQXV0aGVudGljYXRlZCkge1xyXG4gICAgICAgIGlmICh1c2VyLlVzZXJUeXBlICE9IFwibWFuZG9iZVwiKSBSb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgIH1cclxuICAgIH0sIFtsb2FkaW5nLCBpc0F1dGhlbnRpY2F0ZWRdKTtcclxuXHJcbiAgICByZXR1cm4gPENvbXBvbmVudCB7Li4uYXJndW1lbnRzfSAvPjtcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7IC8vXHJcbmltcG9ydCB1c2VBdXRoLCB7IFByb3RlY3RSb3V0ZSB9IGZyb20gXCIuLi9jb250ZXh0cy9hdXRoLmpzXCI7XHJcbmltcG9ydCBSZWFjdENvZGVJbnB1dCBmcm9tIFwicmVhY3QtdmVyaWZpY2F0aW9uLWNvZGUtaW5wdXRcIjtcclxuaW1wb3J0IExvYWRpbmdPdmVybGF5IGZyb20gXCJyZWFjdC1sb2FkaW5nLW92ZXJsYXlcIjtcclxuXHJcbmZ1bmN0aW9uIGxvZ2luKCkge1xyXG4gIGNvbnN0IHsgbG9naW4sIFNlbmRjb25kLCBwaG9uZUxvZ2luIH0gPSB1c2VBdXRoKCk7XHJcblxyXG4gIGNvbnN0IFtlbWFpbCwgc2V0ZW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYWxlcnQsIHNldGFsZXJ0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcGhvbmUsIHNldHBob25lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb2RlLCBzZXRjb2RlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnNvbGUubG9nKGNvZGUpO1xyXG5cclxuICBjb25zdCBbc3RlcCwgc2V0U3RlcF0gPSB1c2VTdGF0ZSgxKTtcclxuXHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3NwaW5uZXIsIHNldHNwaW5uZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtwYWdldXAsIHNldHBhZ2V1cF0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRlcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBwaG9uZVNlbmRjb25kID0gYXN5bmMgKHBob25lKSA9PiB7XHJcbiAgICBzZXRzcGlubmVyKHRydWUpO1xyXG4gICAgY29uc29sZS5sb2coZW1haWwsIHBhc3N3b3JkKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBTZW5kY29uZChwaG9uZSk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgaWYgKHJlcy5kYXRhKSB7XHJcbiAgICAgIHNldHNwaW5uZXIoZmFsc2UpO1xyXG4gICAgICBzZXRTdGVwKDIpO1xyXG4gICAgICBzZXRlcnJvck1lc3NhZ2UoZmFsc2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0c3Bpbm5lcihmYWxzZSk7XHJcbiAgICAgIHNldGVycm9yTWVzc2FnZSh0cnVlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBsb2d1c2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0c3Bpbm5lcih0cnVlKTtcclxuICAgIGNvbnNvbGUubG9nKFwiXCIgKyBjb2RlKTtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHBob25lTG9naW4ocGhvbmUsIGNvZGUpO1xyXG5cclxuICAgIGlmIChyZXMpIHtcclxuICAgICAgc2V0c3Bpbm5lcihmYWxzZSk7XHJcbiAgICAgIC8vUm91dGVyLnB1c2goXCIvQ29tcGFueVN0YXRpc3RpY3NcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRzcGlubmVyKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExvYWRpbmdPdmVybGF5IGFjdGl2ZT17c3Bpbm5lcn0gc3Bpbm5lciB0ZXh0PVwi2KzYp9ix2Yog2KfZhNiq2K3ZhdmK2YQuLi5cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1haW4tY29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXIgYmctZ3JhZGllbnQtcHJpbWFyeSBweS03IHB5LWxnLTggcHQtbGctOVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNlcGFyYXRvciBzZXBhcmF0b3ItYm90dG9tIHNlcGFyYXRvci1za2V3IHppbmRleC0xMDBcIj5cclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgIHg9XCIwXCJcclxuICAgICAgICAgICAgICB5PVwiMFwiXHJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNTYwIDEwMFwiXHJcbiAgICAgICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgIHZlcnNpb249XCIxLjFcIlxyXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHBvbHlnb25cclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZmlsbC1kZWZhdWx0XCJcclxuICAgICAgICAgICAgICAgIHBvaW50cz1cIjI1NjAgMCAyNTYwIDEwMCAwIDEwMFwiXHJcbiAgICAgICAgICAgICAgPjwvcG9seWdvbj5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7c3RlcCA9PSAyID8gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBtdC0tOCBwYi01XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNSBjb2wtbWQtN1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgYmctc2Vjb25kYXJ5IGJvcmRlci0wIG1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keSBweC1sZy01IHB5LWxnLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgdGV4dC1tdXRlZCBtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDM+2KfZhNix2KzYp9ihINiq2LPYrNmK2YQg2KfZhNiv2K7ZiNmEPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMj7Yo9iv2K7ZhCDYsdmF2LIg2KfZhNiv2K7ZiNmEINin2YTZhdik2YLYqjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlyPVwibHRyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGFsaWduOiBcImNlbnRlclwiLCBtYXJnaW5MZWZ0OiBcIjU5cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdENvZGVJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHM9ezR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmxlbmd0aCA+PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRjb2RlKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIHRleHQtbXV0ZWQgbWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBhbGlnbjogXCJjZW50ZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IG15LTRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbG9ndXNlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDYqtiz2KzZitmEINin2YTYr9iu2YjZhFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBtdC0zXCIgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ0ZXh0LWxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+2YfZhCDZhtiz2YrYqiDYp9mE2LHZgtmFINin2YTYs9ix2Yog2J88L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNiB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cInRleHQtbGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD7Yqtiz2KzZitmEINit2LPYp9ioINis2K/ZitivPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgbXQtLTggcGItNVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTUgY29sLW1kLTdcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGJnLXNlY29uZGFyeSBib3JkZXItMCBtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgcHgtbGctNSBweS1sZy01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIHRleHQtbXV0ZWQgbWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGgzPtin2YTYsdis2KfYoSDYqtiz2KzZitmEINin2YTYr9iu2YjZhDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwaG9uZVNlbmRjb25kKHBob25lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJmb3JtXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBpbnB1dC1ncm91cC1tZXJnZSBpbnB1dC1ncm91cC1hbHRlcm5hdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJuaSBuaS1tb2JpbGUtYnV0dG9uXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bob25lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRwaG9uZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItix2YLZhSDYp9mE2KzZiNin2YRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBteS00XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgINil2LHYs9in2YQg2KfZhNix2YXYsiDYp9mE2YXYpNmC2KpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAge2Vycm9yTWVzc2FnZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT7ZhNinINmK2YjYrNivINit2LPYp9ioPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBtdC0zXCIgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ0ZXh0LWxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+2YfZhCDZhtiz2YrYqiDYp9mE2LHZgtmFINin2YTYs9ix2Yog2J88L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNiB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cInRleHQtbGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD7Yqtiz2KzZitmEINit2LPYp9ioINis2K/ZitivPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xvYWRpbmdPdmVybGF5PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvZ2luO1xyXG4iLCJpbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcbmNvbnN0IHNpdGVVcmwgPSBDb29raWVzLmdldChcInNpdGVVcmxcIik7XHJcbmlmICghc2l0ZVVybCkge1xyXG4gIENvb2tpZXMuc2V0KFwic2l0ZVVybFwiLCBcImh0dHBzOi8vYXBpLnJhYm93YWguY29tL3dwLWpzb24vXCIsIHtcclxuICAgIGV4cGlyZXM6IDYwLFxyXG4gIH0pO1xyXG59XHJcbmxldCB1cmxzID0ge1xyXG4gIGRldmVsb3BtZW50OiBcImh0dHBzOi8vYXBpLnJhYm93YWguY29tL3dwLWpzb24vXCIsXHJcbiAgcHJvZHVjdGlvbjogXCJodHRwczovL2FwaS5yYWJvd2FoLmNvbS93cC1qc29uL1wiLFxyXG59O1xyXG5jb25zdCBhcGkgPSBBeGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IHVybHNbcHJvY2Vzcy5lbnYuTk9ERV9FTlZdLFxyXG4gIGhlYWRlcnM6IHtcclxuICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwaTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWxvYWRpbmctb3ZlcmxheVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC12ZXJpZmljYXRpb24tY29kZS1pbnB1dFwiKTsiXSwic291cmNlUm9vdCI6IiJ9