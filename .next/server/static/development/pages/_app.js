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
var _jsxFileName = "D:\\work\\xampp2020\\htdocs\\new_rabwa_project\\rabwa-coubon\\nexttt\\nextProect\\contexts\\auth.js";
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
var _jsxFileName = "D:\\work\\xampp2020\\htdocs\\new_rabwa_project\\rabwa-coubon\\nexttt\\nextProect\\pages\\_app.js";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dHMvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL0FwaS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hbGVydFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWFsZXJ0LXRlbXBsYXRlLWJhc2ljXCIiXSwibmFtZXMiOlsiQXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ0b2dnbGVyIiwic2V0dG9nZ2xlciIsInVzZUVmZmVjdCIsImxvYWRVc2VyRnJvbUNvb2tpZXMiLCJkYXRhIiwidG9rZW4iLCJDb29raWVzIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsImFwaSIsImRlZmF1bHRzIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJwb3N0IiwidGhlbiIsInJlcyIsImNhdGNoIiwiZXJyIiwicmVtb3ZlIiwiUm91dGVyIiwicHVzaCIsInVzZXJfbmljZW5hbWUiLCJ1c2VyX2VtYWlsIiwiVXNlclR5cGUiLCJDb21wYW55Q29kZSIsIkJyYWNuaENvZGUiLCJwcm9maWxlX3BpYyIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJTZW5kY29uZCIsInBob25lIiwidGVtcHJlcyIsInBob25lTG9naW4iLCJjb2RlIiwic2V0IiwiZXhwaXJlcyIsImxvZ2luIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImxvZ291dCIsImlzQXV0aGVudGljYXRlZCIsInVzZUF1dGgiLCJjb250ZXh0IiwidXNlQ29udGV4dCIsIlByb3RlY3RSb3V0ZSIsIkNvbXBvbmVudCIsInJvdXRlciIsInVzZVJvdXRlciIsImFyZ3VtZW50cyIsIlByb3RlY3RSb3V0ZUNvbXBhbnkiLCJQcm90ZWN0Um91dGVNYW5kb2JlIiwiTXlBcHAiLCJwYWdlUHJvcHMiLCJvcHRpb25zIiwicG9zaXRpb24iLCJwb3NpdGlvbnMiLCJCT1RUT01fQ0VOVEVSIiwidGltZW91dCIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsIlNDQUxFIiwiQWxlcnRUZW1wbGF0ZSIsInNpdGVVcmwiLCJ1cmxzIiwiZGV2ZWxvcG1lbnQiLCJwcm9kdWN0aW9uIiwiQXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwiQWNjZXB0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNB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RCxnREFBTyxDQUFDQyxHQUFSLENBQVksU0FBWixDQUFoQjs7QUFDQSxJQUFJLENBQUN3RCxPQUFMLEVBQWM7QUFDWnpELGtEQUFPLENBQUM2QixHQUFSLENBQVksU0FBWixFQUF1QixrQ0FBdkIsRUFBMkQ7QUFDekRDLFdBQU8sRUFBRTtBQURnRCxHQUEzRDtBQUdEOztBQUNELElBQUk0QixJQUFJLEdBQUc7QUFDVEMsYUFBVyxFQUFFLGtDQURKO0FBRVRDLFlBQVUsRUFBRTtBQUZILENBQVg7QUFJQSxNQUFNeEQsR0FBRyxHQUFHeUQsNENBQUssQ0FBQ0MsTUFBTixDQUFhO0FBQ3ZCQyxTQUFPLEVBQUVMLElBQUksZUFEVTtBQUV2QnBELFNBQU8sRUFBRTtBQUNQMEQsVUFBTSxFQUFFLGtCQUREO0FBRVAsb0JBQWdCO0FBRlQ7QUFGYyxDQUFiLENBQVo7QUFRZTVELGtFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBLGtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVEIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgUm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuLy9hcGkgaGVyZSBpcyBhbiBheGlvcyBpbnN0YW5jZVxyXG5pbXBvcnQgYXBpIGZyb20gXCIuLi9zZXJ2aWNlcy9BcGlcIjtcclxuXHJcbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSk7XHJcblxyXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFt0b2dnbGVyLCBzZXR0b2dnbGVyXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gbG9hZFVzZXJGcm9tQ29va2llcygpIHtcclxuICAgICAgbGV0IGRhdGEgPSBmYWxzZTtcclxuICAgICAgY29uc3QgdG9rZW4gPSBDb29raWVzLmdldChcInRva2VuXCIpO1xyXG4gICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkdvdCBhIHRva2VuIGluIHRoZSBjb29raWVzLCBsZXQncyBzZWUgaWYgaXQgaXMgdmFsaWRcIik7XHJcbiAgICAgICAgYXBpLmRlZmF1bHRzLmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IGBCZWFyZXIgJHt0b2tlbn1gO1xyXG4gICAgICAgIGF3YWl0IGFwaVxyXG4gICAgICAgICAgLnBvc3QoXCJqd3QtYXV0aC92MS90b2tlbi92YWxpZGF0ZVwiKVxyXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBkYXRhID0gcmVzO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIENvb2tpZXMucmVtb3ZlKFwidG9rZW5cIik7XHJcbiAgICAgICAgICAgIENvb2tpZXMucmVtb3ZlKFwidXNlcl9uaWNlbmFtZVwiKTtcclxuICAgICAgICAgICAgQ29va2llcy5yZW1vdmUoXCJ1c2VyX2VtYWlsXCIpO1xyXG4gICAgICAgICAgICBDb29raWVzLnJlbW92ZShcIlVzZXJUeXBlXCIpO1xyXG4gICAgICAgICAgICBDb29raWVzLnJlbW92ZShcIkJyYWNuaENvZGVcIik7XHJcbiAgICAgICAgICAgIENvb2tpZXMucmVtb3ZlKFwiQ29tcGFueUNvZGVcIik7XHJcbiAgICAgICAgICAgIENvb2tpZXMucmVtb3ZlKFwicHJvZmlsZV9waWNcIik7XHJcbiAgICAgICAgICAgIENvb2tpZXMucmVtb3ZlKFwiZmlyc3RfbmFtZVwiKTtcclxuICAgICAgICAgICAgQ29va2llcy5yZW1vdmUoXCJsYXN0X25hbWVcIik7XHJcblxyXG4gICAgICAgICAgICBhcGkuZGVmYXVsdHMuaGVhZGVycy5BdXRob3JpemF0aW9uID0gYGA7XHJcblxyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9NYW5hZ2VtZW50XCIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gIGNvbnN0IHsgZGF0YTogZGF0YSB9ID0gYXdhaXQgYXBpLnBvc3QoXCJqd3QtYXV0aC92MS90b2tlbi92YWxpZGF0ZVwiKTtcclxuICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJvbGQgdG9rZW4gaXMgdmFsaWRcIik7XHJcbiAgICAgICAgICBzZXRVc2VyKHtcclxuICAgICAgICAgICAgdXNlcl9uaWNlbmFtZTogQ29va2llcy5nZXQoXCJ1c2VyX25pY2VuYW1lXCIpLFxyXG4gICAgICAgICAgICB1c2VyX2VtYWlsOiBDb29raWVzLmdldChcInVzZXJfZW1haWxcIiksXHJcbiAgICAgICAgICAgIFVzZXJUeXBlOiBDb29raWVzLmdldChcIlVzZXJUeXBlXCIpLFxyXG4gICAgICAgICAgICBDb21wYW55Q29kZTogQ29va2llcy5nZXQoXCJDb21wYW55Q29kZVwiKSxcclxuICAgICAgICAgICAgQnJhY25oQ29kZTogQ29va2llcy5nZXQoXCJCcmFjbmhDb2RlXCIpLFxyXG4gICAgICAgICAgICBwcm9maWxlX3BpYzogQ29va2llcy5nZXQoXCJwcm9maWxlX3BpY1wiKSxcclxuICAgICAgICAgICAgZmlyc3RfbmFtZTogQ29va2llcy5nZXQoXCJmaXJzdF9uYW1lXCIpLFxyXG4gICAgICAgICAgICBsYXN0X25hbWU6IENvb2tpZXMuZ2V0KFwibGFzdF9uYW1lXCIpLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBsb2FkVXNlckZyb21Db29raWVzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBTZW5kY29uZCA9IGFzeW5jIChwaG9uZSkgPT4ge1xyXG4gICAgbGV0IHRlbXByZXMgPSBhd2FpdCBhcGkuZ2V0KFwicmFid2EvZ2V0VXNlckNvZGU/cGhvbmU9XCIgKyBwaG9uZSwge30pO1xyXG5cclxuICAgIHJldHVybiB0ZW1wcmVzO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHBob25lTG9naW4gPSBhc3luYyAocGhvbmUsIGNvZGUpID0+IHtcclxuICAgIGNvbnN0IHsgZGF0YTogZGF0YSB9ID0gYXdhaXQgYXBpLmdldChcclxuICAgICAgXCJyYWJ3YS9zaW5nVXNlcklOP3Bob25lPVwiICsgcGhvbmUgKyBcIiZjb2RlPVwiICsgY29kZSxcclxuICAgICAge31cclxuICAgICk7XHJcblxyXG4gICAgaWYgKGRhdGEpIHtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhcIkdvdCBuZXcgdG9rZW5cIiArIGRhdGEudG9rZW4pO1xyXG4gICAgICBDb29raWVzLnNldChcInRva2VuXCIsIGRhdGEudG9rZW4sIHsgZXhwaXJlczogNjAgfSk7XHJcbiAgICAgIENvb2tpZXMuc2V0KFwidXNlcl9uaWNlbmFtZVwiLCBkYXRhLnVzZXJfbmljZW5hbWUsIHsgZXhwaXJlczogNjAgfSk7XHJcbiAgICAgIENvb2tpZXMuc2V0KFwidXNlcl9lbWFpbFwiLCBkYXRhLnVzZXJfZW1haWwsIHsgZXhwaXJlczogNjAgfSk7XHJcbiAgICAgIENvb2tpZXMuc2V0KFwiVXNlclR5cGVcIiwgZGF0YS5Vc2VyVHlwZSwgeyBleHBpcmVzOiA2MCB9KTtcclxuICAgICAgQ29va2llcy5zZXQoXCJCcmFjbmhDb2RlXCIsIGRhdGEuQnJhY25oQ29kZSwgeyBleHBpcmVzOiA2MCB9KTtcclxuICAgICAgQ29va2llcy5zZXQoXCJDb21wYW55Q29kZVwiLCBkYXRhLkNvbXBhbnlDb2RlLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG4gICAgICBDb29raWVzLnNldChcInByb2ZpbGVfcGljXCIsIGRhdGEucHJvZmlsZV9waWMsIHsgZXhwaXJlczogNjAgfSk7XHJcbiAgICAgIENvb2tpZXMuc2V0KFwiZmlyc3RfbmFtZVwiLCBkYXRhLmZpcnN0X25hbWUsIHsgZXhwaXJlczogNjAgfSk7XHJcbiAgICAgIENvb2tpZXMuc2V0KFwibGFzdF9uYW1lXCIsIGRhdGEubGFzdF9uYW1lLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG5cclxuICAgICAgYXBpLmRlZmF1bHRzLmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IGBCZWFyZXIgJHtkYXRhLnRva2VufWA7XHJcblxyXG4gICAgICBzZXRVc2VyKHtcclxuICAgICAgICB1c2VyX25pY2VuYW1lOiBkYXRhLnVzZXJfbmljZW5hbWUsXHJcbiAgICAgICAgdXNlcl9lbWFpbDogZGF0YS51c2VyX2VtYWlsLFxyXG4gICAgICAgIFVzZXJUeXBlOiBkYXRhLlVzZXJUeXBlLFxyXG4gICAgICAgIENvbXBhbnlDb2RlOiBkYXRhLkNvbXBhbnlDb2RlLFxyXG4gICAgICAgIEJyYWNuaENvZGU6IGRhdGEuQnJhY25oQ29kZSxcclxuICAgICAgICBwcm9maWxlX3BpYzogZGF0YS5wcm9maWxlX3BpYyxcclxuICAgICAgICBmaXJzdF9uYW1lOiBkYXRhLmZpcnN0X25hbWUsXHJcbiAgICAgICAgbGFzdF9uYW1lOiBkYXRhLmxhc3RfbmFtZSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiR290IHVzZXJcIiwgdXNlcik7XHJcbiAgICAgIGlmIChkYXRhLlVzZXJUeXBlID09IFwiQ29tcGFueVwiKSB7XHJcbiAgICAgICAgUm91dGVyLnB1c2goXCIvQ29tcGFueVN0YXRpc3RpY3NcIik7XHJcbiAgICAgICAgLy9yZXR1cm4gXCJDb21wYW55XCI7XHJcbiAgICAgIH0gZWxzZSBpZiAoZGF0YS5Vc2VyVHlwZSA9PSBcIm1hbmRvYmVcIikge1xyXG4gICAgICAgIC8vIHJldHVybiBcIkNvbXBhbnlcIjtcclxuICAgICAgICBSb3V0ZXIucHVzaChcIi9NeVVzZXJzXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvZ2luID0gYXN5bmMgKHVzZXJuYW1lLCBwYXNzd29yZCkgPT4ge1xyXG4gICAgY29uc3QgeyBkYXRhOiBkYXRhIH0gPSBhd2FpdCBhcGkucG9zdChcImp3dC1hdXRoL3YxL3Rva2VuXCIsIHtcclxuICAgICAgdXNlcm5hbWUsXHJcbiAgICAgIHBhc3N3b3JkLFxyXG4gICAgfSk7XHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiR290IG5ldyB0b2tlblwiICsgZGF0YS50b2tlbik7XHJcbiAgICAgIENvb2tpZXMuc2V0KFwidG9rZW5cIiwgZGF0YS50b2tlbiwgeyBleHBpcmVzOiA2MCB9KTtcclxuICAgICAgQ29va2llcy5zZXQoXCJ1c2VyX25pY2VuYW1lXCIsIGRhdGEudXNlcl9uaWNlbmFtZSwgeyBleHBpcmVzOiA2MCB9KTtcclxuICAgICAgQ29va2llcy5zZXQoXCJ1c2VyX2VtYWlsXCIsIGRhdGEudXNlcl9lbWFpbCwgeyBleHBpcmVzOiA2MCB9KTtcclxuICAgICAgQ29va2llcy5zZXQoXCJVc2VyVHlwZVwiLCBkYXRhLlVzZXJUeXBlLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG4gICAgICBDb29raWVzLnNldChcIkJyYWNuaENvZGVcIiwgZGF0YS5CcmFjbmhDb2RlLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG4gICAgICBDb29raWVzLnNldChcIkNvbXBhbnlDb2RlXCIsIGRhdGEuQ29tcGFueUNvZGUsIHsgZXhwaXJlczogNjAgfSk7XHJcbiAgICAgIENvb2tpZXMuc2V0KFwicHJvZmlsZV9waWNcIiwgZGF0YS5wcm9maWxlX3BpYywgeyBleHBpcmVzOiA2MCB9KTtcclxuICAgICAgQ29va2llcy5zZXQoXCJmaXJzdF9uYW1lXCIsIGRhdGEuZmlyc3RfbmFtZSwgeyBleHBpcmVzOiA2MCB9KTtcclxuICAgICAgQ29va2llcy5zZXQoXCJsYXN0X25hbWVcIiwgZGF0YS5sYXN0X25hbWUsIHsgZXhwaXJlczogNjAgfSk7XHJcblxyXG4gICAgICBhcGkuZGVmYXVsdHMuaGVhZGVycy5BdXRob3JpemF0aW9uID0gYEJlYXJlciAke2RhdGEudG9rZW59YDtcclxuXHJcbiAgICAgIHNldFVzZXIoe1xyXG4gICAgICAgIHVzZXJfbmljZW5hbWU6IGRhdGEudXNlcl9uaWNlbmFtZSxcclxuICAgICAgICB1c2VyX2VtYWlsOiBkYXRhLnVzZXJfZW1haWwsXHJcbiAgICAgICAgVXNlclR5cGU6IGRhdGEuVXNlclR5cGUsXHJcbiAgICAgICAgQ29tcGFueUNvZGU6IGRhdGEuQ29tcGFueUNvZGUsXHJcbiAgICAgICAgQnJhY25oQ29kZTogZGF0YS5CcmFjbmhDb2RlLFxyXG4gICAgICAgIHByb2ZpbGVfcGljOiBkYXRhLnByb2ZpbGVfcGljLFxyXG4gICAgICAgIGZpcnN0X25hbWU6IGRhdGEuZmlyc3RfbmFtZSxcclxuICAgICAgICBsYXN0X25hbWU6IGRhdGEubGFzdF9uYW1lLFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2coXCJHb3QgdXNlclwiLCB1c2VyKTtcclxuXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICAgIENvb2tpZXMucmVtb3ZlKFwidG9rZW5cIik7XHJcbiAgICBDb29raWVzLnJlbW92ZShcInVzZXJfbmljZW5hbWVcIik7XHJcbiAgICBDb29raWVzLnJlbW92ZShcInVzZXJfZW1haWxcIik7XHJcbiAgICBDb29raWVzLnJlbW92ZShcIlVzZXJUeXBlXCIpO1xyXG4gICAgQ29va2llcy5yZW1vdmUoXCJCcmFjbmhDb2RlXCIpO1xyXG4gICAgQ29va2llcy5yZW1vdmUoXCJDb21wYW55Q29kZVwiKTtcclxuICAgIENvb2tpZXMucmVtb3ZlKFwicHJvZmlsZV9waWNcIik7XHJcbiAgICBDb29raWVzLnJlbW92ZShcImZpcnN0X25hbWVcIik7XHJcbiAgICBDb29raWVzLnJlbW92ZShcImxhc3RfbmFtZVwiKTtcclxuXHJcbiAgICBhcGkuZGVmYXVsdHMuaGVhZGVycy5BdXRob3JpemF0aW9uID0gYGA7XHJcblxyXG4gICAgc2V0VXNlcihudWxsKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgaXNBdXRoZW50aWNhdGVkOiAhIXVzZXIsXHJcbiAgICAgICAgdXNlcixcclxuICAgICAgICBsb2dpbixcclxuICAgICAgICBsb2dvdXQsXHJcbiAgICAgICAgU2VuZGNvbmQsXHJcbiAgICAgICAgcGhvbmVMb2dpbixcclxuICAgICAgICBsb2FkaW5nLFxyXG4gICAgICAgIGxvZ291dCxcclxuICAgICAgICB0b2dnbGVyLFxyXG4gICAgICAgIHNldHRvZ2dsZXIsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUF1dGgoKSB7XHJcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG5cclxuICByZXR1cm4gY29udGV4dDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFByb3RlY3RSb3V0ZShDb21wb25lbnQpIHtcclxuICByZXR1cm4gKCkgPT4ge1xyXG4gICAgY29uc3QgeyB1c2VyLCBpc0F1dGhlbnRpY2F0ZWQsIGxvYWRpbmcgfSA9IHVzZUF1dGgoKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGlmICghaXNBdXRoZW50aWNhdGVkICYmICFsb2FkaW5nKSB7XHJcbiAgICAgICAgUm91dGVyLnB1c2goXCIvTWFuYWdlbWVudFwiKTtcclxuICAgICAgfSBlbHNlIGlmIChpc0F1dGhlbnRpY2F0ZWQpIHtcclxuICAgICAgICBpZiAodXNlci5Vc2VyVHlwZSAhPSBcImFkbWluXCIpIFJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgfVxyXG4gICAgfSwgW2xvYWRpbmcsIGlzQXV0aGVudGljYXRlZF0pO1xyXG5cclxuICAgIHJldHVybiA8Q29tcG9uZW50IHsuLi5hcmd1bWVudHN9IC8+O1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQcm90ZWN0Um91dGVDb21wYW55KENvbXBvbmVudCkge1xyXG4gIHJldHVybiAoKSA9PiB7XHJcbiAgICBjb25zdCB7IHVzZXIsIGlzQXV0aGVudGljYXRlZCwgbG9hZGluZyB9ID0gdXNlQXV0aCgpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgaWYgKCFpc0F1dGhlbnRpY2F0ZWQgJiYgIWxvYWRpbmcpIHtcclxuICAgICAgICBSb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuICAgICAgfSBlbHNlIGlmIChpc0F1dGhlbnRpY2F0ZWQpIHtcclxuICAgICAgICBpZiAodXNlci5Vc2VyVHlwZSAhPSBcIkNvbXBhbnlcIikgUm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICB9XHJcbiAgICB9LCBbbG9hZGluZywgaXNBdXRoZW50aWNhdGVkXSk7XHJcblxyXG4gICAgcmV0dXJuIDxDb21wb25lbnQgey4uLmFyZ3VtZW50c30gLz47XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFByb3RlY3RSb3V0ZU1hbmRvYmUoQ29tcG9uZW50KSB7XHJcbiAgcmV0dXJuICgpID0+IHtcclxuICAgIGNvbnN0IHsgdXNlciwgaXNBdXRoZW50aWNhdGVkLCBsb2FkaW5nIH0gPSB1c2VBdXRoKCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBpZiAoIWlzQXV0aGVudGljYXRlZCAmJiAhbG9hZGluZykge1xyXG4gICAgICAgIFJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKGlzQXV0aGVudGljYXRlZCkge1xyXG4gICAgICAgIGlmICh1c2VyLlVzZXJUeXBlICE9IFwibWFuZG9iZVwiKSBSb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgIH1cclxuICAgIH0sIFtsb2FkaW5nLCBpc0F1dGhlbnRpY2F0ZWRdKTtcclxuXHJcbiAgICByZXR1cm4gPENvbXBvbmVudCB7Li4uYXJndW1lbnRzfSAvPjtcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gXCIuLi9jb250ZXh0cy9hdXRoXCI7XHJcbmltcG9ydCB7IHRyYW5zaXRpb25zLCBwb3NpdGlvbnMsIFByb3ZpZGVyIGFzIEFsZXJ0UHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtYWxlcnRcIjtcclxuaW1wb3J0IEFsZXJ0VGVtcGxhdGUgZnJvbSBcInJlYWN0LWFsZXJ0LXRlbXBsYXRlLWJhc2ljXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbi8qaW1wb3J0IFwiLi9hc3NldHMvdmVuZG9yL251Y2xlby9jc3MvbnVjbGVvLmNzc1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy92ZW5kb3IvQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2FsbC5taW4uY3NzXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9hcmdvbi5jc3M/dj0xLjIuMFwiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvYm9vdHN0cmFwL2Jvb3RzdHJhcC1ydGwuY3NzXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9ib290c3RyYXAtc2VsZWN0Lm1pbi5jc3NcIjsqL1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIC8vIHlvdSBjYW4gYWxzbyBqdXN0IHVzZSAnYm90dG9tIGNlbnRlcidcclxuICAgIHBvc2l0aW9uOiBwb3NpdGlvbnMuQk9UVE9NX0NFTlRFUixcclxuICAgIHRpbWVvdXQ6IDUwMDAsXHJcbiAgICAvLyBvZmZzZXQ6IFwiNXB4XCIsXHJcbiAgICAvLyB5b3UgY2FuIGFsc28ganVzdCB1c2UgJ3NjYWxlJ1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNpdGlvbnMuU0NBTEUsXHJcbiAgfTtcclxuXHJcbiAgLypcclxuICAgYWxlcnQuc2hvdyhcItix2YLZhSDYp9mE2KzZiNin2YQg2YXYs9iq2K7Yr9mFINmF2LPYqNmC2KdcIiwge1xyXG4gICAgIHRpbWVvdXQ6IDIwMDAsXHJcbiAgICAgdHlwZTogXCJzdWNjZXNzXCIsXHJcbiAgICAgdHlwZTogXCJpbmZvXCIsXHJcbiAgICAgdHlwZTogXCJlcnJvclwiLFxyXG5cclxuICAgICAgXHJcbiAgICAgb25PcGVuOiAoKSA9PiB7XHJcbiAgICAgICBjb25zb2xlLmxvZyhcImhleVwiKTtcclxuICAgICB9LCAvLyBjYWxsYmFjayB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgYWZ0ZXIgdGhpcyBhbGVydCBvcGVuXHJcbiAgICAgb25DbG9zZTogKCkgPT4ge1xyXG4gICAgICAgY29uc29sZS5sb2coXCJjbG9zZWRcIik7XHJcbiAgICAgfSxcclxuICAgfSk7Ki9cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuXHJcblxyXG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIi9hc3NldHMvY3NzL2FyZ29uLmNzc1wiIC8+XHJcbiAgICAgIDxsaW5rXHJcbiAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcclxuICAgICAgICBocmVmPVwiL2Fzc2V0cy92ZW5kb3IvbnVjbGVvL2Nzcy9udWNsZW8uY3NzXCJcclxuICAgICAgLz5cclxuICAgICBcclxuICAgICAgPGxpbmtcclxuICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxyXG4gICAgICAgIGhyZWY9XCIvYXNzZXRzL3ZlbmRvci9AZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9jc3MvYWxsLm1pbi5jc3NcIlxyXG4gICAgICAvPlxyXG4gICAgICA8bGlua1xyXG4gICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0L2Nzc1wiXHJcbiAgICAgICAgaHJlZj1cIi9hc3NldHMvY3NzL2Jvb3RzdHJhcC9ib290c3RyYXAtcnRsLmNzc1wiXHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8c2NyaXB0XHJcbiAgICAgICAgc3JjPVwiaHR0cHM6Ly9jb2RlLmpxdWVyeS5jb20vanF1ZXJ5LTMuNS4xLm1pbi5qc1wiXHJcbiAgICAgICAgaW50ZWdyaXR5PVwic2hhMjU2LTkvYWxpVThkR2QydGI2T1NzdXppeGVWNHkvZmFUcWdGdG9oZXRwaGJiajA9XCJcclxuICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgID48L3NjcmlwdD5cclxuXHJcbiAgICAgIDxzY3JpcHQgc3JjPVwiL2Fzc2V0cy92ZW5kb3IvYm9vdHN0cmFwL2Rpc3QvanMvYm9vdHN0cmFwLmJ1bmRsZS5taW4uanNcIj48L3NjcmlwdD5cclxuXHJcbiAgICAgIDxzY3JpcHQgc3JjPVwiL2Fzc2V0cy9qcy9hcmdvbi5qcz92PTEuMi4wXCI+PC9zY3JpcHQ+XHJcbiAgICAgIDxzY3JpcHQgc3JjPVwiL2Fzc2V0cy9mb250YXdlc29tZS1hbGwuanNcIj48L3NjcmlwdD5cclxuICAgICAgPEF1dGhQcm92aWRlcj5cclxuICAgICAgICB7LypcclxuXHJcbiAgICAgICAgXHJcbiAgICBcclxuICAgIFxyXG5cclxuICAgXHJcblxyXG4gICAgIFxyXG4gICBcclxuICAgICAgPHNjcmlwdCBzcmM9XCIvYXNzZXRzL3ZlbmRvci9qcy1jb29raWUvanNjb29raWUuanNcIj48L3NjcmlwdD5cclxuICAgICAgPHNjcmlwdCBzcmM9XCIvYXNzZXRzL3ZlbmRvci9qcXVlcnkuc2Nyb2xsYmFyL2pxdWVyeS5zY3JvbGxiYXIubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgIDxzY3JpcHQgc3JjPVwiL2Fzc2V0cy92ZW5kb3IvY2hhcnQuanMvZGlzdC9DaGFydC5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgPHNjcmlwdCBzcmM9XCIvYXNzZXRzL3ZlbmRvci9jaGFydC5qcy9kaXN0L0NoYXJ0LmV4dGVuc2lvbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICA8c2NyaXB0IHNyYz1cIi9hc3NldHMvanMvY29tcG9uZW50cy9jaGFydHMvY2hhcnQtYmFycy5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwLXNlbGVjdEAxLjEzLjE0L2Rpc3QvanMvYm9vdHN0cmFwLXNlbGVjdC5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcC1zZWxlY3RAMS4xMy4xNC9kaXN0L2pzL2kxOG4vZGVmYXVsdHMtKi5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgPGxpbmtcclxuICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxyXG4gICAgICAgIGhyZWY9XCIvYXNzZXRzL2Nzcy9ib290c3RyYXAtc2VsZWN0Lm1pbi5jc3NcIlxyXG4gICAgICAvPlxyXG4gICAgIFxyXG4gICAgIFxyXG4gICAgICovfVxyXG4gICAgICAgIDxBbGVydFByb3ZpZGVyIHRlbXBsYXRlPXtBbGVydFRlbXBsYXRlfSB7Li4ub3B0aW9uc30+XHJcbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgPC9BbGVydFByb3ZpZGVyPlxyXG4gICAgICA8L0F1dGhQcm92aWRlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iLCJpbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcbmNvbnN0IHNpdGVVcmwgPSBDb29raWVzLmdldChcInNpdGVVcmxcIik7XHJcbmlmICghc2l0ZVVybCkge1xyXG4gIENvb2tpZXMuc2V0KFwic2l0ZVVybFwiLCBcImh0dHBzOi8vYXBpLnJhYm93YWguY29tL3dwLWpzb24vXCIsIHtcclxuICAgIGV4cGlyZXM6IDYwLFxyXG4gIH0pO1xyXG59XHJcbmxldCB1cmxzID0ge1xyXG4gIGRldmVsb3BtZW50OiBcImh0dHBzOi8vYXBpLnJhYm93YWguY29tL3dwLWpzb24vXCIsXHJcbiAgcHJvZHVjdGlvbjogXCJodHRwczovL2FwaS5yYWJvd2FoLmNvbS93cC1qc29uL1wiLFxyXG59O1xyXG5jb25zdCBhcGkgPSBBeGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IHVybHNbcHJvY2Vzcy5lbnYuTk9ERV9FTlZdLFxyXG4gIGhlYWRlcnM6IHtcclxuICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwaTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWFsZXJ0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWFsZXJ0LXRlbXBsYXRlLWJhc2ljXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=