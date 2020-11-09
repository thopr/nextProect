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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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

/***/ "./pages/Management/index.js":
/*!***********************************!*\
  !*** ./pages/Management/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contexts/auth.js */ "./contexts/auth.js");
/* harmony import */ var react_loading_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-loading-overlay */ "react-loading-overlay");
/* harmony import */ var react_loading_overlay__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_loading_overlay__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\work\\xampp2020\\htdocs\\new_rabwa_project\\rabwa-coubon\\nexttt\\nextProect\\pages\\Management\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 //





function Admin() {
  const {
    login,
    isAuthenticated,
    user
  } = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  console.log(isAuthenticated);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (isAuthenticated) {
      if (user.UserType != "admin") {
        next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/");
      }
    }
  }, []);
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
    0: isLoading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: pageup,
    1: setpageup
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const {
    0: spinner,
    1: setspinner
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const loguser = async (email, password) => {
    setspinner(true);
    console.log(email, password);
    setLoading(true);
    const res = await login(email, password);

    if (res) {
      setspinner(false);
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/CompanysStatistics");
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
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx("div", {
    class: "main-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx("div", {
    class: "header bg-gradient-primary py-7 py-lg-8 pt-lg-9",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx("div", {
    class: "separator separator-bottom separator-skew zindex-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, __jsx("svg", {
    x: "0",
    y: "0",
    viewBox: "0 0 2560 100",
    preserveAspectRatio: "none",
    version: "1.1",
    xmlns: "https://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx("polygon", {
    class: "fill-default",
    points: "2560 0 2560 100 0 100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  })))), __jsx("div", {
    class: "container mt--8 pb-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx("div", {
    class: "row justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, __jsx("div", {
    class: "col-lg-5 col-md-7",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, __jsx("div", {
    class: "card bg-secondary border-0 mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }
  }, __jsx("div", {
    class: "card-body px-lg-5 py-lg-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, __jsx("div", {
    class: "text-center text-muted mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 19
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  }, "\u0627\u0644\u0631\u062C\u0627\u0621 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644")), __jsx("form", {
    onSubmit: e => {
      loguser(email, password);
      e.preventDefault();
    },
    role: "form",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 19
    }
  }, __jsx("div", {
    class: "form-group mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 21
    }
  }, __jsx("div", {
    class: "input-group input-group-merge input-group-alternative",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 23
    }
  }, __jsx("div", {
    class: "input-group-prepend",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 25
    }
  }, __jsx("span", {
    class: "input-group-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 27
    }
  }, __jsx("i", {
    class: "ni ni-email-83",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 29
    }
  }))), __jsx("input", {
    value: email,
    onChange: e => setemail(e.target.value),
    class: "form-control",
    placeholder: "\u0627\u0644\u0625\u064A\u0645\u064A\u0644",
    type: "email",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 25
    }
  }))), __jsx("div", {
    class: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 21
    }
  }, __jsx("div", {
    class: "input-group input-group-merge input-group-alternative",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 23
    }
  }, __jsx("div", {
    class: "input-group-prepend",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 25
    }
  }, __jsx("span", {
    class: "input-group-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 27
    }
  }, __jsx("i", {
    class: "ni ni-lock-circle-open",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 29
    }
  }))), __jsx("input", {
    value: password,
    onChange: e => setPassword(e.target.value),
    class: "form-control",
    placeholder: "\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0633\u0631\u064A",
    type: "password",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 25
    }
  }))), __jsx("div", {
    class: "text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 21
    }
  }, __jsx("button", {
    type: "button",
    type: "submit",
    class: "btn btn-primary my-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 23
    }
  }, "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644"))))), __jsx("div", {
    class: "row mt-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 15
    }
  }, __jsx("div", {
    class: "col-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    class: "text-light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 19
    }
  }, __jsx("small", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 21
    }
  }, "\u0647\u0644 \u0646\u0633\u064A\u062A \u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0633\u0631\u064A \u061F"))), __jsx("div", {
    class: "col-6 text-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    class: "text-light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 19
    }
  }, __jsx("small", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 21
    }
  }, "\u062A\u0633\u062C\u064A\u0644 \u062D\u0633\u0627\u0628 \u062C\u062F\u064A\u062F")))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Admin);

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

/***/ 4:
/*!*****************************************!*\
  !*** multi ./pages/Management/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\work\xampp2020\htdocs\new_rabwa_project\rabwa-coubon\nexttt\nextProect\pages\Management\index.js */"./pages/Management/index.js");


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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dHMvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9NYW5hZ2VtZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL0FwaS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1sb2FkaW5nLW92ZXJsYXlcIiJdLCJuYW1lcyI6WyJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInRvZ2dsZXIiLCJzZXR0b2dnbGVyIiwidXNlRWZmZWN0IiwibG9hZFVzZXJGcm9tQ29va2llcyIsImRhdGEiLCJ0b2tlbiIsIkNvb2tpZXMiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiYXBpIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInBvc3QiLCJ0aGVuIiwicmVzIiwiY2F0Y2giLCJlcnIiLCJyZW1vdmUiLCJSb3V0ZXIiLCJwdXNoIiwidXNlcl9uaWNlbmFtZSIsInVzZXJfZW1haWwiLCJVc2VyVHlwZSIsIkNvbXBhbnlDb2RlIiwiQnJhY25oQ29kZSIsInByb2ZpbGVfcGljIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsIlNlbmRjb25kIiwicGhvbmUiLCJ0ZW1wcmVzIiwicGhvbmVMb2dpbiIsImNvZGUiLCJzZXQiLCJleHBpcmVzIiwibG9naW4iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwibG9nb3V0IiwiaXNBdXRoZW50aWNhdGVkIiwidXNlQXV0aCIsImNvbnRleHQiLCJ1c2VDb250ZXh0IiwiUHJvdGVjdFJvdXRlIiwiQ29tcG9uZW50Iiwicm91dGVyIiwidXNlUm91dGVyIiwiYXJndW1lbnRzIiwiUHJvdGVjdFJvdXRlQ29tcGFueSIsIlByb3RlY3RSb3V0ZU1hbmRvYmUiLCJBZG1pbiIsImVtYWlsIiwic2V0ZW1haWwiLCJzZXRQYXNzd29yZCIsImFsZXJ0Iiwic2V0YWxlcnQiLCJpc0xvYWRpbmciLCJwYWdldXAiLCJzZXRwYWdldXAiLCJzcGlubmVyIiwic2V0c3Bpbm5lciIsImxvZ3VzZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNpdGVVcmwiLCJ1cmxzIiwiZGV2ZWxvcG1lbnQiLCJwcm9kdWN0aW9uIiwiQXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwiQWNjZXB0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtR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RTs7Ozs7Ozs7Ozs7O0FDMUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsTUFBTWdCLE9BQU8sR0FBRzlELGdEQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLENBQWhCOztBQUNBLElBQUksQ0FBQzZELE9BQUwsRUFBYztBQUNaOUQsa0RBQU8sQ0FBQzZCLEdBQVIsQ0FBWSxTQUFaLEVBQXVCLGtDQUF2QixFQUEyRDtBQUN6REMsV0FBTyxFQUFFO0FBRGdELEdBQTNEO0FBR0Q7O0FBQ0QsSUFBSWlDLElBQUksR0FBRztBQUNUQyxhQUFXLEVBQUUsa0NBREo7QUFFVEMsWUFBVSxFQUFFO0FBRkgsQ0FBWDtBQUlBLE1BQU03RCxHQUFHLEdBQUc4RCw0Q0FBSyxDQUFDQyxNQUFOLENBQWE7QUFDdkJDLFNBQU8sRUFBRUwsSUFBSSxlQURVO0FBRXZCekQsU0FBTyxFQUFFO0FBQ1ArRCxVQUFNLEVBQUUsa0JBREQ7QUFFUCxvQkFBZ0I7QUFGVDtBQUZjLENBQWIsQ0FBWjtBQVFlakUsa0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXE1hbmFnZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XHJcbmltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG4vL2FwaSBoZXJlIGlzIGFuIGF4aW9zIGluc3RhbmNlXHJcbmltcG9ydCBhcGkgZnJvbSBcIi4uL3NlcnZpY2VzL0FwaVwiO1xyXG5cclxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3RvZ2dsZXIsIHNldHRvZ2dsZXJdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBsb2FkVXNlckZyb21Db29raWVzKCkge1xyXG4gICAgICBsZXQgZGF0YSA9IGZhbHNlO1xyXG4gICAgICBjb25zdCB0b2tlbiA9IENvb2tpZXMuZ2V0KFwidG9rZW5cIik7XHJcbiAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiR290IGEgdG9rZW4gaW4gdGhlIGNvb2tpZXMsIGxldCdzIHNlZSBpZiBpdCBpcyB2YWxpZFwiKTtcclxuICAgICAgICBhcGkuZGVmYXVsdHMuaGVhZGVycy5BdXRob3JpemF0aW9uID0gYEJlYXJlciAke3Rva2VufWA7XHJcbiAgICAgICAgYXdhaXQgYXBpXHJcbiAgICAgICAgICAucG9zdChcImp3dC1hdXRoL3YxL3Rva2VuL3ZhbGlkYXRlXCIpXHJcbiAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGRhdGEgPSByZXM7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgQ29va2llcy5yZW1vdmUoXCJ0b2tlblwiKTtcclxuICAgICAgICAgICAgQ29va2llcy5yZW1vdmUoXCJ1c2VyX25pY2VuYW1lXCIpO1xyXG4gICAgICAgICAgICBDb29raWVzLnJlbW92ZShcInVzZXJfZW1haWxcIik7XHJcbiAgICAgICAgICAgIENvb2tpZXMucmVtb3ZlKFwiVXNlclR5cGVcIik7XHJcbiAgICAgICAgICAgIENvb2tpZXMucmVtb3ZlKFwiQnJhY25oQ29kZVwiKTtcclxuICAgICAgICAgICAgQ29va2llcy5yZW1vdmUoXCJDb21wYW55Q29kZVwiKTtcclxuICAgICAgICAgICAgQ29va2llcy5yZW1vdmUoXCJwcm9maWxlX3BpY1wiKTtcclxuICAgICAgICAgICAgQ29va2llcy5yZW1vdmUoXCJmaXJzdF9uYW1lXCIpO1xyXG4gICAgICAgICAgICBDb29raWVzLnJlbW92ZShcImxhc3RfbmFtZVwiKTtcclxuXHJcbiAgICAgICAgICAgIGFwaS5kZWZhdWx0cy5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSBgYDtcclxuXHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL01hbmFnZW1lbnRcIik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAvLyAgY29uc3QgeyBkYXRhOiBkYXRhIH0gPSBhd2FpdCBhcGkucG9zdChcImp3dC1hdXRoL3YxL3Rva2VuL3ZhbGlkYXRlXCIpO1xyXG4gICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIm9sZCB0b2tlbiBpcyB2YWxpZFwiKTtcclxuICAgICAgICAgIHNldFVzZXIoe1xyXG4gICAgICAgICAgICB1c2VyX25pY2VuYW1lOiBDb29raWVzLmdldChcInVzZXJfbmljZW5hbWVcIiksXHJcbiAgICAgICAgICAgIHVzZXJfZW1haWw6IENvb2tpZXMuZ2V0KFwidXNlcl9lbWFpbFwiKSxcclxuICAgICAgICAgICAgVXNlclR5cGU6IENvb2tpZXMuZ2V0KFwiVXNlclR5cGVcIiksXHJcbiAgICAgICAgICAgIENvbXBhbnlDb2RlOiBDb29raWVzLmdldChcIkNvbXBhbnlDb2RlXCIpLFxyXG4gICAgICAgICAgICBCcmFjbmhDb2RlOiBDb29raWVzLmdldChcIkJyYWNuaENvZGVcIiksXHJcbiAgICAgICAgICAgIHByb2ZpbGVfcGljOiBDb29raWVzLmdldChcInByb2ZpbGVfcGljXCIpLFxyXG4gICAgICAgICAgICBmaXJzdF9uYW1lOiBDb29raWVzLmdldChcImZpcnN0X25hbWVcIiksXHJcbiAgICAgICAgICAgIGxhc3RfbmFtZTogQ29va2llcy5nZXQoXCJsYXN0X25hbWVcIiksXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICAgIGxvYWRVc2VyRnJvbUNvb2tpZXMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IFNlbmRjb25kID0gYXN5bmMgKHBob25lKSA9PiB7XHJcbiAgICBsZXQgdGVtcHJlcyA9IGF3YWl0IGFwaS5nZXQoXCJyYWJ3YS9nZXRVc2VyQ29kZT9waG9uZT1cIiArIHBob25lLCB7fSk7XHJcblxyXG4gICAgcmV0dXJuIHRlbXByZXM7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcGhvbmVMb2dpbiA9IGFzeW5jIChwaG9uZSwgY29kZSkgPT4ge1xyXG4gICAgY29uc3QgeyBkYXRhOiBkYXRhIH0gPSBhd2FpdCBhcGkuZ2V0KFxyXG4gICAgICBcInJhYndhL3NpbmdVc2VySU4/cGhvbmU9XCIgKyBwaG9uZSArIFwiJmNvZGU9XCIgKyBjb2RlLFxyXG4gICAgICB7fVxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiR290IG5ldyB0b2tlblwiICsgZGF0YS50b2tlbik7XHJcbiAgICAgIENvb2tpZXMuc2V0KFwidG9rZW5cIiwgZGF0YS50b2tlbiwgeyBleHBpcmVzOiA2MCB9KTtcclxuICAgICAgQ29va2llcy5zZXQoXCJ1c2VyX25pY2VuYW1lXCIsIGRhdGEudXNlcl9uaWNlbmFtZSwgeyBleHBpcmVzOiA2MCB9KTtcclxuICAgICAgQ29va2llcy5zZXQoXCJ1c2VyX2VtYWlsXCIsIGRhdGEudXNlcl9lbWFpbCwgeyBleHBpcmVzOiA2MCB9KTtcclxuICAgICAgQ29va2llcy5zZXQoXCJVc2VyVHlwZVwiLCBkYXRhLlVzZXJUeXBlLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG4gICAgICBDb29raWVzLnNldChcIkJyYWNuaENvZGVcIiwgZGF0YS5CcmFjbmhDb2RlLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG4gICAgICBDb29raWVzLnNldChcIkNvbXBhbnlDb2RlXCIsIGRhdGEuQ29tcGFueUNvZGUsIHsgZXhwaXJlczogNjAgfSk7XHJcbiAgICAgIENvb2tpZXMuc2V0KFwicHJvZmlsZV9waWNcIiwgZGF0YS5wcm9maWxlX3BpYywgeyBleHBpcmVzOiA2MCB9KTtcclxuICAgICAgQ29va2llcy5zZXQoXCJmaXJzdF9uYW1lXCIsIGRhdGEuZmlyc3RfbmFtZSwgeyBleHBpcmVzOiA2MCB9KTtcclxuICAgICAgQ29va2llcy5zZXQoXCJsYXN0X25hbWVcIiwgZGF0YS5sYXN0X25hbWUsIHsgZXhwaXJlczogNjAgfSk7XHJcblxyXG4gICAgICBhcGkuZGVmYXVsdHMuaGVhZGVycy5BdXRob3JpemF0aW9uID0gYEJlYXJlciAke2RhdGEudG9rZW59YDtcclxuXHJcbiAgICAgIHNldFVzZXIoe1xyXG4gICAgICAgIHVzZXJfbmljZW5hbWU6IGRhdGEudXNlcl9uaWNlbmFtZSxcclxuICAgICAgICB1c2VyX2VtYWlsOiBkYXRhLnVzZXJfZW1haWwsXHJcbiAgICAgICAgVXNlclR5cGU6IGRhdGEuVXNlclR5cGUsXHJcbiAgICAgICAgQ29tcGFueUNvZGU6IGRhdGEuQ29tcGFueUNvZGUsXHJcbiAgICAgICAgQnJhY25oQ29kZTogZGF0YS5CcmFjbmhDb2RlLFxyXG4gICAgICAgIHByb2ZpbGVfcGljOiBkYXRhLnByb2ZpbGVfcGljLFxyXG4gICAgICAgIGZpcnN0X25hbWU6IGRhdGEuZmlyc3RfbmFtZSxcclxuICAgICAgICBsYXN0X25hbWU6IGRhdGEubGFzdF9uYW1lLFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2coXCJHb3QgdXNlclwiLCB1c2VyKTtcclxuICAgICAgaWYgKGRhdGEuVXNlclR5cGUgPT0gXCJDb21wYW55XCIpIHtcclxuICAgICAgICBSb3V0ZXIucHVzaChcIi9Db21wYW55U3RhdGlzdGljc1wiKTtcclxuICAgICAgICAvL3JldHVybiBcIkNvbXBhbnlcIjtcclxuICAgICAgfSBlbHNlIGlmIChkYXRhLlVzZXJUeXBlID09IFwibWFuZG9iZVwiKSB7XHJcbiAgICAgICAgLy8gcmV0dXJuIFwiQ29tcGFueVwiO1xyXG4gICAgICAgIFJvdXRlci5wdXNoKFwiL015VXNlcnNcIik7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9naW4gPSBhc3luYyAodXNlcm5hbWUsIHBhc3N3b3JkKSA9PiB7XHJcbiAgICBjb25zdCB7IGRhdGE6IGRhdGEgfSA9IGF3YWl0IGFwaS5wb3N0KFwiand0LWF1dGgvdjEvdG9rZW5cIiwge1xyXG4gICAgICB1c2VybmFtZSxcclxuICAgICAgcGFzc3dvcmQsXHJcbiAgICB9KTtcclxuICAgIGlmIChkYXRhKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coXCJHb3QgbmV3IHRva2VuXCIgKyBkYXRhLnRva2VuKTtcclxuICAgICAgQ29va2llcy5zZXQoXCJ0b2tlblwiLCBkYXRhLnRva2VuLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG4gICAgICBDb29raWVzLnNldChcInVzZXJfbmljZW5hbWVcIiwgZGF0YS51c2VyX25pY2VuYW1lLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG4gICAgICBDb29raWVzLnNldChcInVzZXJfZW1haWxcIiwgZGF0YS51c2VyX2VtYWlsLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG4gICAgICBDb29raWVzLnNldChcIlVzZXJUeXBlXCIsIGRhdGEuVXNlclR5cGUsIHsgZXhwaXJlczogNjAgfSk7XHJcbiAgICAgIENvb2tpZXMuc2V0KFwiQnJhY25oQ29kZVwiLCBkYXRhLkJyYWNuaENvZGUsIHsgZXhwaXJlczogNjAgfSk7XHJcbiAgICAgIENvb2tpZXMuc2V0KFwiQ29tcGFueUNvZGVcIiwgZGF0YS5Db21wYW55Q29kZSwgeyBleHBpcmVzOiA2MCB9KTtcclxuICAgICAgQ29va2llcy5zZXQoXCJwcm9maWxlX3BpY1wiLCBkYXRhLnByb2ZpbGVfcGljLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG4gICAgICBDb29raWVzLnNldChcImZpcnN0X25hbWVcIiwgZGF0YS5maXJzdF9uYW1lLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG4gICAgICBDb29raWVzLnNldChcImxhc3RfbmFtZVwiLCBkYXRhLmxhc3RfbmFtZSwgeyBleHBpcmVzOiA2MCB9KTtcclxuXHJcbiAgICAgIGFwaS5kZWZhdWx0cy5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSBgQmVhcmVyICR7ZGF0YS50b2tlbn1gO1xyXG5cclxuICAgICAgc2V0VXNlcih7XHJcbiAgICAgICAgdXNlcl9uaWNlbmFtZTogZGF0YS51c2VyX25pY2VuYW1lLFxyXG4gICAgICAgIHVzZXJfZW1haWw6IGRhdGEudXNlcl9lbWFpbCxcclxuICAgICAgICBVc2VyVHlwZTogZGF0YS5Vc2VyVHlwZSxcclxuICAgICAgICBDb21wYW55Q29kZTogZGF0YS5Db21wYW55Q29kZSxcclxuICAgICAgICBCcmFjbmhDb2RlOiBkYXRhLkJyYWNuaENvZGUsXHJcbiAgICAgICAgcHJvZmlsZV9waWM6IGRhdGEucHJvZmlsZV9waWMsXHJcbiAgICAgICAgZmlyc3RfbmFtZTogZGF0YS5maXJzdF9uYW1lLFxyXG4gICAgICAgIGxhc3RfbmFtZTogZGF0YS5sYXN0X25hbWUsXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkdvdCB1c2VyXCIsIHVzZXIpO1xyXG5cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgQ29va2llcy5yZW1vdmUoXCJ0b2tlblwiKTtcclxuICAgIENvb2tpZXMucmVtb3ZlKFwidXNlcl9uaWNlbmFtZVwiKTtcclxuICAgIENvb2tpZXMucmVtb3ZlKFwidXNlcl9lbWFpbFwiKTtcclxuICAgIENvb2tpZXMucmVtb3ZlKFwiVXNlclR5cGVcIik7XHJcbiAgICBDb29raWVzLnJlbW92ZShcIkJyYWNuaENvZGVcIik7XHJcbiAgICBDb29raWVzLnJlbW92ZShcIkNvbXBhbnlDb2RlXCIpO1xyXG4gICAgQ29va2llcy5yZW1vdmUoXCJwcm9maWxlX3BpY1wiKTtcclxuICAgIENvb2tpZXMucmVtb3ZlKFwiZmlyc3RfbmFtZVwiKTtcclxuICAgIENvb2tpZXMucmVtb3ZlKFwibGFzdF9uYW1lXCIpO1xyXG5cclxuICAgIGFwaS5kZWZhdWx0cy5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSBgYDtcclxuXHJcbiAgICBzZXRVc2VyKG51bGwpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6ICEhdXNlcixcclxuICAgICAgICB1c2VyLFxyXG4gICAgICAgIGxvZ2luLFxyXG4gICAgICAgIGxvZ291dCxcclxuICAgICAgICBTZW5kY29uZCxcclxuICAgICAgICBwaG9uZUxvZ2luLFxyXG4gICAgICAgIGxvYWRpbmcsXHJcbiAgICAgICAgbG9nb3V0LFxyXG4gICAgICAgIHRvZ2dsZXIsXHJcbiAgICAgICAgc2V0dG9nZ2xlcixcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQXV0aCgpIHtcclxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcblxyXG4gIHJldHVybiBjb250ZXh0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUHJvdGVjdFJvdXRlKENvbXBvbmVudCkge1xyXG4gIHJldHVybiAoKSA9PiB7XHJcbiAgICBjb25zdCB7IHVzZXIsIGlzQXV0aGVudGljYXRlZCwgbG9hZGluZyB9ID0gdXNlQXV0aCgpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgaWYgKCFpc0F1dGhlbnRpY2F0ZWQgJiYgIWxvYWRpbmcpIHtcclxuICAgICAgICBSb3V0ZXIucHVzaChcIi9NYW5hZ2VtZW50XCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKGlzQXV0aGVudGljYXRlZCkge1xyXG4gICAgICAgIGlmICh1c2VyLlVzZXJUeXBlICE9IFwiYWRtaW5cIikgUm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICB9XHJcbiAgICB9LCBbbG9hZGluZywgaXNBdXRoZW50aWNhdGVkXSk7XHJcblxyXG4gICAgcmV0dXJuIDxDb21wb25lbnQgey4uLmFyZ3VtZW50c30gLz47XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFByb3RlY3RSb3V0ZUNvbXBhbnkoQ29tcG9uZW50KSB7XHJcbiAgcmV0dXJuICgpID0+IHtcclxuICAgIGNvbnN0IHsgdXNlciwgaXNBdXRoZW50aWNhdGVkLCBsb2FkaW5nIH0gPSB1c2VBdXRoKCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBpZiAoIWlzQXV0aGVudGljYXRlZCAmJiAhbG9hZGluZykge1xyXG4gICAgICAgIFJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKGlzQXV0aGVudGljYXRlZCkge1xyXG4gICAgICAgIGlmICh1c2VyLlVzZXJUeXBlICE9IFwiQ29tcGFueVwiKSBSb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgIH1cclxuICAgIH0sIFtsb2FkaW5nLCBpc0F1dGhlbnRpY2F0ZWRdKTtcclxuXHJcbiAgICByZXR1cm4gPENvbXBvbmVudCB7Li4uYXJndW1lbnRzfSAvPjtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUHJvdGVjdFJvdXRlTWFuZG9iZShDb21wb25lbnQpIHtcclxuICByZXR1cm4gKCkgPT4ge1xyXG4gICAgY29uc3QgeyB1c2VyLCBpc0F1dGhlbnRpY2F0ZWQsIGxvYWRpbmcgfSA9IHVzZUF1dGgoKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGlmICghaXNBdXRoZW50aWNhdGVkICYmICFsb2FkaW5nKSB7XHJcbiAgICAgICAgUm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgICAgIH0gZWxzZSBpZiAoaXNBdXRoZW50aWNhdGVkKSB7XHJcbiAgICAgICAgaWYgKHVzZXIuVXNlclR5cGUgIT0gXCJtYW5kb2JlXCIpIFJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgfVxyXG4gICAgfSwgW2xvYWRpbmcsIGlzQXV0aGVudGljYXRlZF0pO1xyXG5cclxuICAgIHJldHVybiA8Q29tcG9uZW50IHsuLi5hcmd1bWVudHN9IC8+O1xyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjsgLy9cclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHVzZUF1dGggZnJvbSBcIi4uLy4uL2NvbnRleHRzL2F1dGguanNcIjtcclxuaW1wb3J0IExvYWRpbmdPdmVybGF5IGZyb20gXCJyZWFjdC1sb2FkaW5nLW92ZXJsYXlcIjtcclxuXHJcbmZ1bmN0aW9uIEFkbWluKCkge1xyXG4gIGNvbnN0IHsgbG9naW4sIGlzQXV0aGVudGljYXRlZCwgdXNlciB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnNvbGUubG9nKGlzQXV0aGVudGljYXRlZCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChpc0F1dGhlbnRpY2F0ZWQpIHtcclxuICAgICAgaWYgKHVzZXIuVXNlclR5cGUgIT0gXCJhZG1pblwiKSB7XHJcbiAgICAgICAgUm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0ZW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYWxlcnQsIHNldGFsZXJ0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3BhZ2V1cCwgc2V0cGFnZXVwXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IFtzcGlubmVyLCBzZXRzcGlubmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgbG9ndXNlciA9IGFzeW5jIChlbWFpbCwgcGFzc3dvcmQpID0+IHtcclxuICAgIHNldHNwaW5uZXIodHJ1ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhlbWFpbCwgcGFzc3dvcmQpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGxvZ2luKGVtYWlsLCBwYXNzd29yZCk7XHJcbiAgICBpZiAocmVzKSB7XHJcbiAgICAgIHNldHNwaW5uZXIoZmFsc2UpO1xyXG4gICAgICBSb3V0ZXIucHVzaChcIi9Db21wYW55c1N0YXRpc3RpY3NcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRzcGlubmVyKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExvYWRpbmdPdmVybGF5IGFjdGl2ZT17c3Bpbm5lcn0gc3Bpbm5lciB0ZXh0PVwi2KzYp9ix2Yog2KfZhNiq2K3ZhdmK2YQuLi5cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1haW4tY29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXIgYmctZ3JhZGllbnQtcHJpbWFyeSBweS03IHB5LWxnLTggcHQtbGctOVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNlcGFyYXRvciBzZXBhcmF0b3ItYm90dG9tIHNlcGFyYXRvci1za2V3IHppbmRleC0xMDBcIj5cclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgIHg9XCIwXCJcclxuICAgICAgICAgICAgICB5PVwiMFwiXHJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNTYwIDEwMFwiXHJcbiAgICAgICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgIHZlcnNpb249XCIxLjFcIlxyXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cHM6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxwb2x5Z29uXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImZpbGwtZGVmYXVsdFwiXHJcbiAgICAgICAgICAgICAgICBwb2ludHM9XCIyNTYwIDAgMjU2MCAxMDAgMCAxMDBcIlxyXG4gICAgICAgICAgICAgID48L3BvbHlnb24+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgbXQtLTggcGItNVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNSBjb2wtbWQtN1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGJnLXNlY29uZGFyeSBib3JkZXItMCBtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IHB4LWxnLTUgcHktbGctNVwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgdGV4dC1tdXRlZCBtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPtin2YTYsdis2KfYoSDYqtiz2KzZitmEINin2YTYr9iu2YjZhDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbG9ndXNlcihlbWFpbCwgcGFzc3dvcmQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgcm9sZT1cImZvcm1cIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIGlucHV0LWdyb3VwLW1lcmdlIGlucHV0LWdyb3VwLWFsdGVybmF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIm5pIG5pLWVtYWlsLTgzXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldGVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLYp9mE2KXZitmF2YrZhFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgaW5wdXQtZ3JvdXAtbWVyZ2UgaW5wdXQtZ3JvdXAtYWx0ZXJuYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwibmkgbmktbG9jay1jaXJjbGUtb3BlblwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi2KfZhNix2YLZhSDYp9mE2LPYsdmKXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IG15LTRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDYqtiz2KzZitmEINin2YTYr9iu2YjZhFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG10LTNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwidGV4dC1saWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbD7Zh9mEINmG2LPZitiqINin2YTYsdmC2YUg2KfZhNiz2LHZiiDYnzwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02IHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cInRleHQtbGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c21hbGw+2KrYs9is2YrZhCDYrdiz2KfYqCDYrNiv2YrYrzwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTG9hZGluZ092ZXJsYXk+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRtaW47XHJcbiIsImltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxuY29uc3Qgc2l0ZVVybCA9IENvb2tpZXMuZ2V0KFwic2l0ZVVybFwiKTtcclxuaWYgKCFzaXRlVXJsKSB7XHJcbiAgQ29va2llcy5zZXQoXCJzaXRlVXJsXCIsIFwiaHR0cHM6Ly9hcGkucmFib3dhaC5jb20vd3AtanNvbi9cIiwge1xyXG4gICAgZXhwaXJlczogNjAsXHJcbiAgfSk7XHJcbn1cclxubGV0IHVybHMgPSB7XHJcbiAgZGV2ZWxvcG1lbnQ6IFwiaHR0cHM6Ly9hcGkucmFib3dhaC5jb20vd3AtanNvbi9cIixcclxuICBwcm9kdWN0aW9uOiBcImh0dHBzOi8vYXBpLnJhYm93YWguY29tL3dwLWpzb24vXCIsXHJcbn07XHJcbmNvbnN0IGFwaSA9IEF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogdXJsc1twcm9jZXNzLmVudi5OT0RFX0VOVl0sXHJcbiAgaGVhZGVyczoge1xyXG4gICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBpO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbG9hZGluZy1vdmVybGF5XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=