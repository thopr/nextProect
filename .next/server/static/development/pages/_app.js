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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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
        await _services_Api__WEBPACK_IMPORTED_MODULE_3__["default"].post("api/checkToken").then(res => {
          data = res;
          console.log(data);
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
        }); //  const { data: data } = await api.post("api/checkToken");

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
    let tempres = await _services_Api__WEBPACK_IMPORTED_MODULE_3__["default"].get("api/getUserCode?phone=" + phone, {});
    return tempres;
  };

  const phoneLogin = async (phone, code) => {
    const {
      data: data
    } = await _services_Api__WEBPACK_IMPORTED_MODULE_3__["default"].get("api/singUserIN?phone=" + phone + "&code=" + code, {});

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
    } = await _services_Api__WEBPACK_IMPORTED_MODULE_3__["default"].post("api/login", {
      email: username,
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
      lineNumber: 172,
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
        lineNumber: 210,
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
        lineNumber: 227,
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
        lineNumber: 244,
        columnNumber: 12
      }
    }));
  };
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/auth */ "./contexts/auth.js");
/* harmony import */ var react_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-alert */ "react-alert");
/* harmony import */ var react_alert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_alert__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_alert_template_basic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-alert-template-basic */ "react-alert-template-basic");
/* harmony import */ var react_alert_template_basic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_alert_template_basic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\xampp\\htdocs\\next\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





/*import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/css/argon.css?v=1.2.0";
import "./assets/css/bootstrap/bootstrap-rtl.css";
import "./assets/css/bootstrap-select.min.css";*/

function MyApp({
  Component,
  pageProps
}) {
  const options = {
    // you can also just use 'bottom center'
    position: react_alert__WEBPACK_IMPORTED_MODULE_2__["positions"].BOTTOM_CENTER,
    timeout: 5000,
    // offset: "5px",
    // you can also just use 'scale'
    transition: react_alert__WEBPACK_IMPORTED_MODULE_2__["transitions"].SCALE
  };
  /*
   alert.show("رقم الجوال مستخدم مسبقا", {
     timeout: 2000,
     type: "success",
     type: "info",
     type: "error",
        
     onOpen: () => {
       console.log("hey");
     }, // callback that will be executed after this alert open
     onClose: () => {
       console.log("closed");
     },
   });*/

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/assets/css/argon.css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/assets/vendor/nucleo/css/nucleo.css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/assets/css/bootstrap/bootstrap-rtl.css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }), __jsx("script", {
    src: "https://code.jquery.com/jquery-3.5.1.min.js",
    integrity: "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=",
    crossorigin: "anonymous",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }), __jsx("script", {
    src: "/assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }), __jsx("script", {
    src: "/assets/js/argon.js?v=1.2.0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }), __jsx("script", {
    src: "/assets/fontawesome-all.js",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }), __jsx(_contexts_auth__WEBPACK_IMPORTED_MODULE_1__["AuthProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, __jsx(react_alert__WEBPACK_IMPORTED_MODULE_2__["Provider"], _extends({
    template: react_alert_template_basic__WEBPACK_IMPORTED_MODULE_3___default.a
  }, options, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }), __jsx(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

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
  js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set("siteUrl", "http://localhost:8000/", {
    expires: 60
  });
}

let urls = {
  development: "http://localhost:8000/",
  production: "http://localhost:8000/"
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

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


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

/***/ "react-alert":
/*!******************************!*\
  !*** external "react-alert" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-alert");

/***/ }),

/***/ "react-alert-template-basic":
/*!*********************************************!*\
  !*** external "react-alert-template-basic" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-alert-template-basic");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dHMvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL0FwaS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hbGVydFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWFsZXJ0LXRlbXBsYXRlLWJhc2ljXCIiXSwibmFtZXMiOlsiQXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ0b2dnbGVyIiwic2V0dG9nZ2xlciIsInVzZUVmZmVjdCIsImxvYWRVc2VyRnJvbUNvb2tpZXMiLCJkYXRhIiwidG9rZW4iLCJDb29raWVzIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsImFwaSIsImRlZmF1bHRzIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJwb3N0IiwidGhlbiIsInJlcyIsImNhdGNoIiwiZXJyIiwicmVtb3ZlIiwiUm91dGVyIiwicHVzaCIsInVzZXJfbmljZW5hbWUiLCJ1c2VyX2VtYWlsIiwiVXNlclR5cGUiLCJDb21wYW55Q29kZSIsIkJyYWNuaENvZGUiLCJwcm9maWxlX3BpYyIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJTZW5kY29uZCIsInBob25lIiwidGVtcHJlcyIsInBob25lTG9naW4iLCJjb2RlIiwic2V0IiwiZXhwaXJlcyIsImxvZ2luIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImVtYWlsIiwibG9nb3V0IiwiaXNBdXRoZW50aWNhdGVkIiwidXNlQXV0aCIsImNvbnRleHQiLCJ1c2VDb250ZXh0IiwiUHJvdGVjdFJvdXRlIiwiQ29tcG9uZW50Iiwicm91dGVyIiwidXNlUm91dGVyIiwiYXJndW1lbnRzIiwiUHJvdGVjdFJvdXRlQ29tcGFueSIsIlByb3RlY3RSb3V0ZU1hbmRvYmUiLCJNeUFwcCIsInBhZ2VQcm9wcyIsIm9wdGlvbnMiLCJwb3NpdGlvbiIsInBvc2l0aW9ucyIsIkJPVFRPTV9DRU5URVIiLCJ0aW1lb3V0IiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiU0NBTEUiLCJBbGVydFRlbXBsYXRlIiwic2l0ZVVybCIsInVybHMiLCJkZXZlbG9wbWVudCIsInByb2R1Y3Rpb24iLCJBeGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJBY2NlcHQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztR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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsTUFBTVcsT0FBTyxHQUFHMUQsZ0RBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosQ0FBaEI7O0FBQ0EsSUFBSSxDQUFDeUQsT0FBTCxFQUFjO0FBQ1oxRCxrREFBTyxDQUFDNkIsR0FBUixDQUFZLFNBQVosRUFBdUIsd0JBQXZCLEVBQWlEO0FBQy9DQyxXQUFPLEVBQUU7QUFEc0MsR0FBakQ7QUFHRDs7QUFDRCxJQUFJNkIsSUFBSSxHQUFHO0FBQ1RDLGFBQVcsRUFBRSx3QkFESjtBQUVUQyxZQUFVLEVBQUU7QUFGSCxDQUFYO0FBSUEsTUFBTXpELEdBQUcsR0FBRzBELDRDQUFLLENBQUNDLE1BQU4sQ0FBYTtBQUN2QkMsU0FBTyxFQUFFTCxJQUFJLGVBRFU7QUFFdkJyRCxTQUFPLEVBQUU7QUFDUDJELFVBQU0sRUFBRSxrQkFERDtBQUVQLG9CQUFnQjtBQUZUO0FBRmMsQ0FBYixDQUFaO0FBUWU3RCxrRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1RCIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcclxuaW1wb3J0IFJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbi8vYXBpIGhlcmUgaXMgYW4gYXhpb3MgaW5zdGFuY2VcclxuaW1wb3J0IGFwaSBmcm9tIFwiLi4vc2VydmljZXMvQXBpXCI7XHJcblxyXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbdG9nZ2xlciwgc2V0dG9nZ2xlcl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRVc2VyRnJvbUNvb2tpZXMoKSB7XHJcbiAgICAgIGxldCBkYXRhID0gZmFsc2U7XHJcbiAgICAgIGNvbnN0IHRva2VuID0gQ29va2llcy5nZXQoXCJ0b2tlblwiKTtcclxuICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJHb3QgYSB0b2tlbiBpbiB0aGUgY29va2llcywgbGV0J3Mgc2VlIGlmIGl0IGlzIHZhbGlkXCIpO1xyXG4gICAgICAgIGFwaS5kZWZhdWx0cy5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSBgQmVhcmVyICR7dG9rZW59YDtcclxuICAgICAgICBhd2FpdCBhcGlcclxuICAgICAgICAgIC5wb3N0KFwiYXBpL2NoZWNrVG9rZW5cIilcclxuICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgZGF0YSA9IHJlcztcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgQ29va2llcy5yZW1vdmUoXCJ0b2tlblwiKTtcclxuICAgICAgICAgICAgQ29va2llcy5yZW1vdmUoXCJ1c2VyX25pY2VuYW1lXCIpO1xyXG4gICAgICAgICAgICBDb29raWVzLnJlbW92ZShcInVzZXJfZW1haWxcIik7XHJcbiAgICAgICAgICAgIENvb2tpZXMucmVtb3ZlKFwiVXNlclR5cGVcIik7XHJcbiAgICAgICAgICAgIENvb2tpZXMucmVtb3ZlKFwiQnJhY25oQ29kZVwiKTtcclxuICAgICAgICAgICAgQ29va2llcy5yZW1vdmUoXCJDb21wYW55Q29kZVwiKTtcclxuICAgICAgICAgICAgQ29va2llcy5yZW1vdmUoXCJwcm9maWxlX3BpY1wiKTtcclxuICAgICAgICAgICAgQ29va2llcy5yZW1vdmUoXCJmaXJzdF9uYW1lXCIpO1xyXG4gICAgICAgICAgICBDb29raWVzLnJlbW92ZShcImxhc3RfbmFtZVwiKTtcclxuXHJcbiAgICAgICAgICAgIGFwaS5kZWZhdWx0cy5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSBgYDtcclxuXHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL01hbmFnZW1lbnRcIik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAvLyAgY29uc3QgeyBkYXRhOiBkYXRhIH0gPSBhd2FpdCBhcGkucG9zdChcImFwaS9jaGVja1Rva2VuXCIpO1xyXG4gICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIm9sZCB0b2tlbiBpcyB2YWxpZFwiKTtcclxuICAgICAgICAgIHNldFVzZXIoe1xyXG4gICAgICAgICAgICB1c2VyX25pY2VuYW1lOiBDb29raWVzLmdldChcInVzZXJfbmljZW5hbWVcIiksXHJcbiAgICAgICAgICAgIHVzZXJfZW1haWw6IENvb2tpZXMuZ2V0KFwidXNlcl9lbWFpbFwiKSxcclxuICAgICAgICAgICAgVXNlclR5cGU6IENvb2tpZXMuZ2V0KFwiVXNlclR5cGVcIiksXHJcbiAgICAgICAgICAgIENvbXBhbnlDb2RlOiBDb29raWVzLmdldChcIkNvbXBhbnlDb2RlXCIpLFxyXG4gICAgICAgICAgICBCcmFjbmhDb2RlOiBDb29raWVzLmdldChcIkJyYWNuaENvZGVcIiksXHJcbiAgICAgICAgICAgIHByb2ZpbGVfcGljOiBDb29raWVzLmdldChcInByb2ZpbGVfcGljXCIpLFxyXG4gICAgICAgICAgICBmaXJzdF9uYW1lOiBDb29raWVzLmdldChcImZpcnN0X25hbWVcIiksXHJcbiAgICAgICAgICAgIGxhc3RfbmFtZTogQ29va2llcy5nZXQoXCJsYXN0X25hbWVcIiksXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICAgIGxvYWRVc2VyRnJvbUNvb2tpZXMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IFNlbmRjb25kID0gYXN5bmMgKHBob25lKSA9PiB7XHJcbiAgICBsZXQgdGVtcHJlcyA9IGF3YWl0IGFwaS5nZXQoXCJhcGkvZ2V0VXNlckNvZGU/cGhvbmU9XCIgKyBwaG9uZSwge30pO1xyXG5cclxuICAgIHJldHVybiB0ZW1wcmVzO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHBob25lTG9naW4gPSBhc3luYyAocGhvbmUsIGNvZGUpID0+IHtcclxuICAgIGNvbnN0IHsgZGF0YTogZGF0YSB9ID0gYXdhaXQgYXBpLmdldChcclxuICAgICAgXCJhcGkvc2luZ1VzZXJJTj9waG9uZT1cIiArIHBob25lICsgXCImY29kZT1cIiArIGNvZGUsXHJcbiAgICAgIHt9XHJcbiAgICApO1xyXG5cclxuICAgIGlmIChkYXRhKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coXCJHb3QgbmV3IHRva2VuXCIgKyBkYXRhLnRva2VuKTtcclxuICAgICAgQ29va2llcy5zZXQoXCJ0b2tlblwiLCBkYXRhLnRva2VuLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG4gICAgICBDb29raWVzLnNldChcInVzZXJfbmljZW5hbWVcIiwgZGF0YS51c2VyX25pY2VuYW1lLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG4gICAgICBDb29raWVzLnNldChcInVzZXJfZW1haWxcIiwgZGF0YS51c2VyX2VtYWlsLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG4gICAgICBDb29raWVzLnNldChcIlVzZXJUeXBlXCIsIGRhdGEuVXNlclR5cGUsIHsgZXhwaXJlczogNjAgfSk7XHJcbiAgICAgIENvb2tpZXMuc2V0KFwiQnJhY25oQ29kZVwiLCBkYXRhLkJyYWNuaENvZGUsIHsgZXhwaXJlczogNjAgfSk7XHJcbiAgICAgIENvb2tpZXMuc2V0KFwiQ29tcGFueUNvZGVcIiwgZGF0YS5Db21wYW55Q29kZSwgeyBleHBpcmVzOiA2MCB9KTtcclxuICAgICAgQ29va2llcy5zZXQoXCJwcm9maWxlX3BpY1wiLCBkYXRhLnByb2ZpbGVfcGljLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG4gICAgICBDb29raWVzLnNldChcImZpcnN0X25hbWVcIiwgZGF0YS5maXJzdF9uYW1lLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG4gICAgICBDb29raWVzLnNldChcImxhc3RfbmFtZVwiLCBkYXRhLmxhc3RfbmFtZSwgeyBleHBpcmVzOiA2MCB9KTtcclxuXHJcbiAgICAgIGFwaS5kZWZhdWx0cy5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSBgQmVhcmVyICR7ZGF0YS50b2tlbn1gO1xyXG5cclxuICAgICAgc2V0VXNlcih7XHJcbiAgICAgICAgdXNlcl9uaWNlbmFtZTogZGF0YS51c2VyX25pY2VuYW1lLFxyXG4gICAgICAgIHVzZXJfZW1haWw6IGRhdGEudXNlcl9lbWFpbCxcclxuICAgICAgICBVc2VyVHlwZTogZGF0YS5Vc2VyVHlwZSxcclxuICAgICAgICBDb21wYW55Q29kZTogZGF0YS5Db21wYW55Q29kZSxcclxuICAgICAgICBCcmFjbmhDb2RlOiBkYXRhLkJyYWNuaENvZGUsXHJcbiAgICAgICAgcHJvZmlsZV9waWM6IGRhdGEucHJvZmlsZV9waWMsXHJcbiAgICAgICAgZmlyc3RfbmFtZTogZGF0YS5maXJzdF9uYW1lLFxyXG4gICAgICAgIGxhc3RfbmFtZTogZGF0YS5sYXN0X25hbWUsXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkdvdCB1c2VyXCIsIHVzZXIpO1xyXG4gICAgICBpZiAoZGF0YS5Vc2VyVHlwZSA9PSBcIkNvbXBhbnlcIikge1xyXG4gICAgICAgIFJvdXRlci5wdXNoKFwiL0NvbXBhbnlTdGF0aXN0aWNzXCIpO1xyXG4gICAgICAgIC8vcmV0dXJuIFwiQ29tcGFueVwiO1xyXG4gICAgICB9IGVsc2UgaWYgKGRhdGEuVXNlclR5cGUgPT0gXCJtYW5kb2JlXCIpIHtcclxuICAgICAgICAvLyByZXR1cm4gXCJDb21wYW55XCI7XHJcbiAgICAgICAgUm91dGVyLnB1c2goXCIvTXlVc2Vyc1wiKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBsb2dpbiA9IGFzeW5jICh1c2VybmFtZSwgcGFzc3dvcmQpID0+IHtcclxuICAgIGNvbnN0IHsgZGF0YTogZGF0YSB9ID0gYXdhaXQgYXBpLnBvc3QoXCJhcGkvbG9naW5cIiwge1xyXG4gICAgICBlbWFpbDp1c2VybmFtZSxcclxuICAgICAgcGFzc3dvcmQsXHJcbiAgICB9KTtcclxuICAgIGlmIChkYXRhKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coXCJHb3QgbmV3IHRva2VuXCIgKyBkYXRhLnRva2VuKTtcclxuICAgICAgQ29va2llcy5zZXQoXCJ0b2tlblwiLCBkYXRhLnRva2VuLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG4gICAgICBDb29raWVzLnNldChcInVzZXJfbmljZW5hbWVcIiwgZGF0YS51c2VyX25pY2VuYW1lLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG4gICAgICBDb29raWVzLnNldChcInVzZXJfZW1haWxcIiwgZGF0YS51c2VyX2VtYWlsLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG4gICAgICBDb29raWVzLnNldChcIlVzZXJUeXBlXCIsIGRhdGEuVXNlclR5cGUsIHsgZXhwaXJlczogNjAgfSk7XHJcbiAgICAgIENvb2tpZXMuc2V0KFwiQnJhY25oQ29kZVwiLCBkYXRhLkJyYWNuaENvZGUsIHsgZXhwaXJlczogNjAgfSk7XHJcbiAgICAgIENvb2tpZXMuc2V0KFwiQ29tcGFueUNvZGVcIiwgZGF0YS5Db21wYW55Q29kZSwgeyBleHBpcmVzOiA2MCB9KTtcclxuICAgICAgQ29va2llcy5zZXQoXCJwcm9maWxlX3BpY1wiLCBkYXRhLnByb2ZpbGVfcGljLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG4gICAgICBDb29raWVzLnNldChcImZpcnN0X25hbWVcIiwgZGF0YS5maXJzdF9uYW1lLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG4gICAgICBDb29raWVzLnNldChcImxhc3RfbmFtZVwiLCBkYXRhLmxhc3RfbmFtZSwgeyBleHBpcmVzOiA2MCB9KTtcclxuXHJcbiAgICAgIGFwaS5kZWZhdWx0cy5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSBgQmVhcmVyICR7ZGF0YS50b2tlbn1gO1xyXG5cclxuICAgICAgc2V0VXNlcih7XHJcbiAgICAgICAgdXNlcl9uaWNlbmFtZTogZGF0YS51c2VyX25pY2VuYW1lLFxyXG4gICAgICAgIHVzZXJfZW1haWw6IGRhdGEudXNlcl9lbWFpbCxcclxuICAgICAgICBVc2VyVHlwZTogZGF0YS5Vc2VyVHlwZSxcclxuICAgICAgICBDb21wYW55Q29kZTogZGF0YS5Db21wYW55Q29kZSxcclxuICAgICAgICBCcmFjbmhDb2RlOiBkYXRhLkJyYWNuaENvZGUsXHJcbiAgICAgICAgcHJvZmlsZV9waWM6IGRhdGEucHJvZmlsZV9waWMsXHJcbiAgICAgICAgZmlyc3RfbmFtZTogZGF0YS5maXJzdF9uYW1lLFxyXG4gICAgICAgIGxhc3RfbmFtZTogZGF0YS5sYXN0X25hbWUsXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkdvdCB1c2VyXCIsIHVzZXIpO1xyXG5cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgQ29va2llcy5yZW1vdmUoXCJ0b2tlblwiKTtcclxuICAgIENvb2tpZXMucmVtb3ZlKFwidXNlcl9uaWNlbmFtZVwiKTtcclxuICAgIENvb2tpZXMucmVtb3ZlKFwidXNlcl9lbWFpbFwiKTtcclxuICAgIENvb2tpZXMucmVtb3ZlKFwiVXNlclR5cGVcIik7XHJcbiAgICBDb29raWVzLnJlbW92ZShcIkJyYWNuaENvZGVcIik7XHJcbiAgICBDb29raWVzLnJlbW92ZShcIkNvbXBhbnlDb2RlXCIpO1xyXG4gICAgQ29va2llcy5yZW1vdmUoXCJwcm9maWxlX3BpY1wiKTtcclxuICAgIENvb2tpZXMucmVtb3ZlKFwiZmlyc3RfbmFtZVwiKTtcclxuICAgIENvb2tpZXMucmVtb3ZlKFwibGFzdF9uYW1lXCIpO1xyXG5cclxuICAgIGFwaS5kZWZhdWx0cy5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSBgYDtcclxuXHJcbiAgICBzZXRVc2VyKG51bGwpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6ICEhdXNlcixcclxuICAgICAgICB1c2VyLFxyXG4gICAgICAgIGxvZ2luLFxyXG4gICAgICAgIGxvZ291dCxcclxuICAgICAgICBTZW5kY29uZCxcclxuICAgICAgICBwaG9uZUxvZ2luLFxyXG4gICAgICAgIGxvYWRpbmcsXHJcbiAgICAgICAgbG9nb3V0LFxyXG4gICAgICAgIHRvZ2dsZXIsXHJcbiAgICAgICAgc2V0dG9nZ2xlcixcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQXV0aCgpIHtcclxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcblxyXG4gIHJldHVybiBjb250ZXh0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUHJvdGVjdFJvdXRlKENvbXBvbmVudCkge1xyXG4gIHJldHVybiAoKSA9PiB7XHJcbiAgICBjb25zdCB7IHVzZXIsIGlzQXV0aGVudGljYXRlZCwgbG9hZGluZyB9ID0gdXNlQXV0aCgpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgaWYgKCFpc0F1dGhlbnRpY2F0ZWQgJiYgIWxvYWRpbmcpIHtcclxuICAgICAgICBSb3V0ZXIucHVzaChcIi9NYW5hZ2VtZW50XCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKGlzQXV0aGVudGljYXRlZCkge1xyXG4gICAgICAgIGlmICh1c2VyLlVzZXJUeXBlICE9IFwiYWRtaW5cIikgUm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICB9XHJcbiAgICB9LCBbbG9hZGluZywgaXNBdXRoZW50aWNhdGVkXSk7XHJcblxyXG4gICAgcmV0dXJuIDxDb21wb25lbnQgey4uLmFyZ3VtZW50c30gLz47XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFByb3RlY3RSb3V0ZUNvbXBhbnkoQ29tcG9uZW50KSB7XHJcbiAgcmV0dXJuICgpID0+IHtcclxuICAgIGNvbnN0IHsgdXNlciwgaXNBdXRoZW50aWNhdGVkLCBsb2FkaW5nIH0gPSB1c2VBdXRoKCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBpZiAoIWlzQXV0aGVudGljYXRlZCAmJiAhbG9hZGluZykge1xyXG4gICAgICAgIFJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKGlzQXV0aGVudGljYXRlZCkge1xyXG4gICAgICAgIGlmICh1c2VyLlVzZXJUeXBlICE9IFwiQ29tcGFueVwiKSBSb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgIH1cclxuICAgIH0sIFtsb2FkaW5nLCBpc0F1dGhlbnRpY2F0ZWRdKTtcclxuXHJcbiAgICByZXR1cm4gPENvbXBvbmVudCB7Li4uYXJndW1lbnRzfSAvPjtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUHJvdGVjdFJvdXRlTWFuZG9iZShDb21wb25lbnQpIHtcclxuICByZXR1cm4gKCkgPT4ge1xyXG4gICAgY29uc3QgeyB1c2VyLCBpc0F1dGhlbnRpY2F0ZWQsIGxvYWRpbmcgfSA9IHVzZUF1dGgoKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGlmICghaXNBdXRoZW50aWNhdGVkICYmICFsb2FkaW5nKSB7XHJcbiAgICAgICAgUm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgICAgIH0gZWxzZSBpZiAoaXNBdXRoZW50aWNhdGVkKSB7XHJcbiAgICAgICAgaWYgKHVzZXIuVXNlclR5cGUgIT0gXCJtYW5kb2JlXCIpIFJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgfVxyXG4gICAgfSwgW2xvYWRpbmcsIGlzQXV0aGVudGljYXRlZF0pO1xyXG5cclxuICAgIHJldHVybiA8Q29tcG9uZW50IHsuLi5hcmd1bWVudHN9IC8+O1xyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbnRleHRzL2F1dGhcIjtcclxuaW1wb3J0IHsgdHJhbnNpdGlvbnMsIHBvc2l0aW9ucywgUHJvdmlkZXIgYXMgQWxlcnRQcm92aWRlciB9IGZyb20gXCJyZWFjdC1hbGVydFwiO1xyXG5pbXBvcnQgQWxlcnRUZW1wbGF0ZSBmcm9tIFwicmVhY3QtYWxlcnQtdGVtcGxhdGUtYmFzaWNcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuLyppbXBvcnQgXCIuL2Fzc2V0cy92ZW5kb3IvbnVjbGVvL2Nzcy9udWNsZW8uY3NzXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL3ZlbmRvci9AZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9jc3MvYWxsLm1pbi5jc3NcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2FyZ29uLmNzcz92PTEuMi4wXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9ib290c3RyYXAvYm9vdHN0cmFwLXJ0bC5jc3NcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2Jvb3RzdHJhcC1zZWxlY3QubWluLmNzc1wiOyovXHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgLy8geW91IGNhbiBhbHNvIGp1c3QgdXNlICdib3R0b20gY2VudGVyJ1xyXG4gICAgcG9zaXRpb246IHBvc2l0aW9ucy5CT1RUT01fQ0VOVEVSLFxyXG4gICAgdGltZW91dDogNTAwMCxcclxuICAgIC8vIG9mZnNldDogXCI1cHhcIixcclxuICAgIC8vIHlvdSBjYW4gYWxzbyBqdXN0IHVzZSAnc2NhbGUnXHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2l0aW9ucy5TQ0FMRSxcclxuICB9O1xyXG5cclxuICAvKlxyXG4gICBhbGVydC5zaG93KFwi2LHZgtmFINin2YTYrNmI2KfZhCDZhdiz2KrYrtiv2YUg2YXYs9io2YLYp1wiLCB7XHJcbiAgICAgdGltZW91dDogMjAwMCxcclxuICAgICB0eXBlOiBcInN1Y2Nlc3NcIixcclxuICAgICB0eXBlOiBcImluZm9cIixcclxuICAgICB0eXBlOiBcImVycm9yXCIsXHJcblxyXG4gICAgICBcclxuICAgICBvbk9wZW46ICgpID0+IHtcclxuICAgICAgIGNvbnNvbGUubG9nKFwiaGV5XCIpO1xyXG4gICAgIH0sIC8vIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBleGVjdXRlZCBhZnRlciB0aGlzIGFsZXJ0IG9wZW5cclxuICAgICBvbkNsb3NlOiAoKSA9PiB7XHJcbiAgICAgICBjb25zb2xlLmxvZyhcImNsb3NlZFwiKTtcclxuICAgICB9LFxyXG4gICB9KTsqL1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG5cclxuXHJcbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiL2Fzc2V0cy9jc3MvYXJnb24uY3NzXCIgLz5cclxuICAgICAgPGxpbmtcclxuICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxyXG4gICAgICAgIGhyZWY9XCIvYXNzZXRzL3ZlbmRvci9udWNsZW8vY3NzL251Y2xlby5jc3NcIlxyXG4gICAgICAvPlxyXG4gICAgIFxyXG4gICAgICA8bGlua1xyXG4gICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0L2Nzc1wiXHJcbiAgICAgICAgaHJlZj1cIi9hc3NldHMvdmVuZG9yL0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzc1wiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxsaW5rXHJcbiAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcclxuICAgICAgICBocmVmPVwiL2Fzc2V0cy9jc3MvYm9vdHN0cmFwL2Jvb3RzdHJhcC1ydGwuY3NzXCJcclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxzY3JpcHRcclxuICAgICAgICBzcmM9XCJodHRwczovL2NvZGUuanF1ZXJ5LmNvbS9qcXVlcnktMy41LjEubWluLmpzXCJcclxuICAgICAgICBpbnRlZ3JpdHk9XCJzaGEyNTYtOS9hbGlVOGRHZDJ0YjZPU3N1eml4ZVY0eS9mYVRxZ0Z0b2hldHBoYmJqMD1cIlxyXG4gICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgPjwvc2NyaXB0PlxyXG5cclxuICAgICAgPHNjcmlwdCBzcmM9XCIvYXNzZXRzL3ZlbmRvci9ib290c3RyYXAvZGlzdC9qcy9ib290c3RyYXAuYnVuZGxlLm1pbi5qc1wiPjwvc2NyaXB0PlxyXG5cclxuICAgICAgPHNjcmlwdCBzcmM9XCIvYXNzZXRzL2pzL2FyZ29uLmpzP3Y9MS4yLjBcIj48L3NjcmlwdD5cclxuICAgICAgPHNjcmlwdCBzcmM9XCIvYXNzZXRzL2ZvbnRhd2Vzb21lLWFsbC5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICA8QXV0aFByb3ZpZGVyPlxyXG4gICAgICAgIHsvKlxyXG5cclxuICAgICAgICBcclxuICAgIFxyXG4gICAgXHJcblxyXG4gICBcclxuXHJcbiAgICAgXHJcbiAgIFxyXG4gICAgICA8c2NyaXB0IHNyYz1cIi9hc3NldHMvdmVuZG9yL2pzLWNvb2tpZS9qc2Nvb2tpZS5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICA8c2NyaXB0IHNyYz1cIi9hc3NldHMvdmVuZG9yL2pxdWVyeS5zY3JvbGxiYXIvanF1ZXJ5LnNjcm9sbGJhci5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgPHNjcmlwdCBzcmM9XCIvYXNzZXRzL3ZlbmRvci9jaGFydC5qcy9kaXN0L0NoYXJ0Lm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICA8c2NyaXB0IHNyYz1cIi9hc3NldHMvdmVuZG9yL2NoYXJ0LmpzL2Rpc3QvQ2hhcnQuZXh0ZW5zaW9uLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgIDxzY3JpcHQgc3JjPVwiL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NoYXJ0cy9jaGFydC1iYXJzLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXAtc2VsZWN0QDEuMTMuMTQvZGlzdC9qcy9ib290c3RyYXAtc2VsZWN0Lm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwLXNlbGVjdEAxLjEzLjE0L2Rpc3QvanMvaTE4bi9kZWZhdWx0cy0qLm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICA8bGlua1xyXG4gICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0L2Nzc1wiXHJcbiAgICAgICAgaHJlZj1cIi9hc3NldHMvY3NzL2Jvb3RzdHJhcC1zZWxlY3QubWluLmNzc1wiXHJcbiAgICAgIC8+XHJcbiAgICAgXHJcbiAgICAgXHJcbiAgICAgKi99XHJcbiAgICAgICAgPEFsZXJ0UHJvdmlkZXIgdGVtcGxhdGU9e0FsZXJ0VGVtcGxhdGV9IHsuLi5vcHRpb25zfT5cclxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICA8L0FsZXJ0UHJvdmlkZXI+XHJcbiAgICAgIDwvQXV0aFByb3ZpZGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiIsImltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxuY29uc3Qgc2l0ZVVybCA9IENvb2tpZXMuZ2V0KFwic2l0ZVVybFwiKTtcclxuaWYgKCFzaXRlVXJsKSB7XHJcbiAgQ29va2llcy5zZXQoXCJzaXRlVXJsXCIsIFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL1wiLCB7XHJcbiAgICBleHBpcmVzOiA2MCxcclxuICB9KTtcclxufVxyXG5sZXQgdXJscyA9IHtcclxuICBkZXZlbG9wbWVudDogXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvXCIsXHJcbiAgcHJvZHVjdGlvbjogXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvXCIsXHJcbn07XHJcbmNvbnN0IGFwaSA9IEF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogdXJsc1twcm9jZXNzLmVudi5OT0RFX0VOVl0sXHJcbiAgaGVhZGVyczoge1xyXG4gICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBpO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYWxlcnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYWxlcnQtdGVtcGxhdGUtYmFzaWNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==