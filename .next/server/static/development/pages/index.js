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

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\work\\xampp2020\\htdocs\\new_rabwa_project\\rabwa-coubon\\nexttt\\nextProect\\components\\header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Header = () => __jsx("header", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 3
  }
}, __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 7
  }
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 11
  }
}, "Home"))), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 7
  }
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/about",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 11
  }
}, "About"))), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 7
  }
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/post/[id]",
  as: "/post/first",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 11
  }
}, "First Post"))), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 7
  }
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/post/[id]",
  as: "/post/second",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 9
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 11
  }
}, "Second Post"))), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 7
  }
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/Dash",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 11
  }
}, "Dash")))));

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

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

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    const {
      pathname
    } = window.location;
    const {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    const resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      const isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn(`Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>`);
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.default = void 0;

var _url2 = __webpack_require__(/*! url */ "url");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch((0, _utils.formatWithValidation)({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as2, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname,
          query
        }), (0, _utils.getURL)());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && (0, _url2.parse)(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/vercel/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute((0, _url2.parse)(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = (0, _url2.parse)(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as2;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (_utils.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? (0, _utils.formatWithValidation)(_url) : _url;
      let as = typeof _as === 'object' ? (0, _utils.formatWithValidation)(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = (0, _url2.parse)(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if ((0, _isDynamic.isDynamicRoute)(route)) {
        const {
          pathname: asPathname
        } = (0, _url2.parse)(as);
        const routeRegex = (0, _routeRegex.getRouteRegex)(route);
        const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo).then(() => {
          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        });
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = (0, _url2.parse)(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isOptional = /^\\\[.*\\\]$/.test($1);

    if (isOptional) {
      $1 = $1.slice(2, -2);
    }

    const isCatchAll = /^(\\\.){3}/.test($1);

    if (isCatchAll) {
      $1 = $1.slice(6);
    }

    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? isOptional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups,
    namedRegex: namedParameterizedRoute ? `^${namedParameterizedRoute}(?:/)?$` : undefined
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _url = __webpack_require__(/*! url */ "url");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _url.format)(url, options);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/auth.js */ "./contexts/auth.js");
/* harmony import */ var _services_api_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api_get */ "./services/api_get.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-loading-skeleton */ "react-loading-skeleton");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\work\\xampp2020\\htdocs\\new_rabwa_project\\rabwa-coubon\\nexttt\\nextProect\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function Home() {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {//Router.push("/CompanysStatistics");
    //login("b6447333@gmail.com", "123");
  }, []);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx("link", {
    rel: "shortcut icon",
    href: "../assets/favicon.png",
    type: "image/x-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "../assets/css/maicons.css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "../assets/vendor/animate/animate.css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "../assets/vendor/owl-carousel/css/owl.carousel.min.css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "../assets/css/bootstrap.css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "../assets/css/mobster.css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }), __jsx("script", {
    src: "../assets/js/jquery-3.5.1.min.js",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }), __jsx("script", {
    src: "../assets/js/bootstrap.bundle.min.js",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }), __jsx("script", {
    src: "../assets/vendor/owl-carousel/js/owl.carousel.min.js",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }), __jsx("script", {
    src: "../assets/vendor/wow/wow.min.js",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }), __jsx("script", {
    src: "../assets/js/mobster.js",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }), __jsx("nav", {
    className: "navbar navbar-expand-lg navbar-dark navbar-floating",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "navbar-brand",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "../assets/favicon-light.png",
    alt: "",
    width: 40,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  })), __jsx("button", {
    className: "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarToggler",
    "aria-controls": "navbarToggler",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "navbar-toggler-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "collapse navbar-collapse",
    id: "navbarToggler",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, __jsx("ul", {
    className: "navbar-nav ml-auto mt-3 mt-lg-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "nav-item dropdown active",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "nav-link",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, "\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629")), __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "nav-link",
    href: "#ourvav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, "\u0645\u0627\u064A\u0645\u064A\u0632\u0646\u0627")), __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "nav-link",
    href: "#strength",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, "\u0646\u0642\u0627\u0637 \u0627\u0644\u0642\u0648\u0629")), __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "nav-link",
    href: "#contact",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }, "\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627"))), __jsx("div", {
    className: "ml-auto my-2 my-lg-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, __jsx("button", {
    style: {
      display: 'none'
    },
    className: "btn btn-primary rounded-pill",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }, "Download Now"))))), __jsx("div", {
    className: "page-hero-section bg-image hero-home-2",
    style: {
      backgroundImage: "url(../assets/img/bg_hero_2.svg)"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "hero-caption",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container fg-white h-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "row align-items-center h-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-lg-6 wow fadeInUp text-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "badge badge-soft mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }), __jsx("h1", {
    className: "mb-4 fw-normal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  }, "\u0645\u0646 \u0646\u062D\u0646"), __jsx("p", {
    className: "mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }
  }, "\u0645\u0624\u0633\u0633\u0629 \u062D\u0643\u0645\u0627\u0621 \u0627\u0644\u0645\u0633\u062A\u0642\u0628\u0644 \u0644\u0644\u0627\u062A\u0635\u0627\u0644\u0627\u062A \u0648\u062A\u0642\u0646\u064A\u0629 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0645\u062A\u062E\u0635\u0635\u0648\u0646 \u0641\u064A \u0627\u0644\u062A\u0633\u0648\u064A\u0642 \u0627\u0644\u062A\u062C\u0627\u0631\u064A \u0648\u0627\u0644\u062E\u064A\u0631\u064A \u0645\u0646 \u062E\u0644\u0627\u0644 \u0627\u0644\u0648\u0633\u0627\u0626\u0644 \u0627\u0644\u062A\u0642\u0646\u064A\u0629\u060C \u0648\u0642\u0645\u0646\u0627 \u0628\u0625\u0646\u0634\u0627\u0621 \u0647\u0630\u0627 \u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u0648\u0642\u0641\u064A \u0627\u0646\u0637\u0644\u0627\u0642\u0627\u064B \u0645\u0646 \u0645\u0633\u0626\u0648\u0644\u064A\u062A\u0646\u0627 \u0623\u0645\u0627\u0645 \u0627\u0644\u062F\u064A\u0646 \u062B\u0645 \u0627\u0644\u0648\u0637\u0646 \u062B\u0645 \u0627\u0644\u0645\u062C\u062A\u0645\u0639\u060C \u0648\u0631\u0627\u0639\u064A\u0646\u0627 \u0641\u064A\u0647 \u0633\u064A\u0627\u0633\u0629 \u062A\u062C\u0633\u064A\u0631 \u0627\u0644\u0623\u062F\u0648\u0627\u0631 \u0648\u0627\u0628\u062A\u0639\u062F\u0646\u0627 \u062A\u0645\u0627\u0645\u0627\u064B \u0639\u0646 \u0645\u0647\u0645\u0629 \u062C\u0645\u0639 \u0627\u0644\u062A\u0628\u0631\u0639\u0627\u062A \u0628\u0623\u064A \u0634\u0643\u0644 \u0645\u0646 \u0623\u0634\u0643\u0627\u0644\u0647\u0627\u060C \u0641\u0646\u062D\u0646 \u0641\u0642\u0637 \u0645\u0646\u0635\u0629 \u0625\u0639\u0644\u0627\u0646 \u0648\u062A\u0646\u0633\u064A\u0642 \u0648\u062A\u0633\u0648\u064A\u0642 \u062E\u064A\u0631\u064A \u0646\u062C\u0645\u0639 \u0628\u064A\u0646 \u0623\u0635\u062D\u0627\u0628 \u0627\u0644\u062D\u0627\u062C\u0627\u062A \u0645\u0648\u0627\u0637\u0646\u0648\u0646 \u0623\u0648 \u0645\u0642\u064A\u0645\u0648\u0646 \u0628\u0646\u0638\u0627\u0645 \u0631\u0633\u0645\u064A \u062F\u0627\u062E\u0644 \u0627\u0644\u062F\u0648\u0644\u0629 \u0648\u0628\u064A\u0646 \u0627\u0644\u062C\u0645\u0639\u064A\u0627\u062A \u0627\u0644\u0645\u0633\u062C\u0644\u0648\u0646 \u0631\u0633\u0645\u064A\u0627\u064B \u0641\u064A \u0627\u0644\u0648\u0632\u0627\u0631\u0629 \u0648\u0628\u064A\u0646 \u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0627\u0644\u062F\u0627\u0639\u0645\u0629 \u0627\u0644\u0645\u0635\u0631\u062D \u0644\u0647\u0627 \u0631\u0633\u0645\u064A\u0627\u064B \u0628\u0645\u0632\u0627\u0648\u0644\u0629 \u0627\u0644\u062A\u062C\u0627\u0631\u0629 \u0628\u0623\u0646\u0648\u0627\u0639\u0647\u0627."), __jsx("a", {
    href: "#",
    download: true,
    className: "btn btn-dark",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }
  }, "\u062D\u0645\u0644 \u0627\u0644\u0627\u0646")), __jsx("div", {
    className: "col-lg-6 d-none d-lg-block wow zoomIn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "img-place mobile-preview shadow floating-animate",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "../assets/img/app_showcase.png",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 19
    }
  }))))))), __jsx("div", {
    className: "page-section no-scroll",
    id: "ourvav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "text-center wow fadeIn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 11
    }
  }, "\u0645\u0627\u064A\u0645\u064A\u0632\u0646\u0627"), __jsx("div", {
    className: "row justify-content-center mt-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-lg-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "row justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-md-6 col-lg-3 py-3 wow fadeInLeft",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "card card-body border-0 text-center shadow pt-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "svg-icon mx-auto mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 21
    }
  }, __jsx("i", {
    class: "fas fa-shield-alt color-iconn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 21
    }
  })), __jsx("h5", {
    className: "fg-gray",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 21
    }
  }, "\u0627\u0644\u062E\u0635\u0648\u0635\u064A\u0629"), __jsx("p", {
    className: "fs-small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 21
    }
  }, " \u0627\u0644\u062E\u0635\u0648\u0635\u064A\u0629 \u0627\u0644\u0643\u0627\u0645\u0644\u0629 \u0644\u0623\u0635\u062D\u0627\u0628 \u0627\u0644\u062D\u0633\u0627\u0628\u0627\u062A \u0633\u0648\u0627\u0621 \u0643\u0627\u0646 \u0645\u0633\u062A\u0641\u064A\u062F\u0627\u064B \u0623\u0648 \u062C\u0645\u0639\u064A\u0629 \u0623\u0648 \u0634\u0631\u0643\u0629."))), __jsx("div", {
    className: "col-md-6 col-lg-3 py-3 wow fadeInUp",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "card card-body border-0 text-center shadow pt-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "svg-icon mx-auto mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 21
    }
  }, __jsx("i", {
    class: "fas fa-print color-iconn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 21
    }
  })), __jsx("h5", {
    className: "fg-gray",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 21
    }
  }, "\u062A\u0642\u0627\u0631\u064A\u0631"), __jsx("p", {
    className: "fs-small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 21
    }
  }, "\u062A\u0642\u0627\u0631\u064A\u0631 \u062A\u0641\u0635\u064A\u0644\u064A\u0629 \u0628\u062C\u0645\u064A\u0639 \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u062A\u064A \u062A\u062A\u0645."))), __jsx("div", {
    className: "col-md-6 col-lg-3 py-3 wow fadeInRight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "card card-body border-0 text-center shadow pt-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "svg-icon mx-auto mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 21
    }
  }, __jsx("i", {
    class: "fas fa-bullseye color-iconn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 21
    }
  })), __jsx("h5", {
    className: "fg-gray",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 21
    }
  }, "\u0627\u0644\u0645\u0631\u0648\u0646\u0629"), __jsx("p", {
    className: "fs-small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 21
    }
  }, "\u0627\u0644\u0645\u0631\u0648\u0646\u0629 \u0627\u0644\u0639\u0627\u0644\u064A\u0629 \u0641\u064A \u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0648\u0627\u0644\u062E\u0635\u0627\u0626\u0635."))), __jsx("div", {
    className: "col-md-6 col-lg-3 py-3 wow fadeInRight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "card card-body border-0 text-center shadow pt-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "svg-icon mx-auto mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 21
    }
  }, __jsx("i", {
    class: "fas fa-eye color-iconn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 21
    }
  })), __jsx("h5", {
    className: "fg-gray",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 21
    }
  }, "\u0627\u0644\u0634\u0641\u0627\u0641\u064A\u0629"), __jsx("p", {
    className: "fs-small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 21
    }
  }, "\u0627\u0644\u0634\u0641\u0627\u0641\u064A\u0629 \u0627\u0644\u0643\u0627\u0645\u0644\u0629 \u062D\u064A\u062B \u0623\u0646 \u0645\u0648\u0642\u0639 \u0631\u0628\u0648\u0629 \u0644\u064A\u0633\u062A \u0644\u0647 \u0623\u064A \u062D\u0633\u0627\u0628 \u0628\u0646\u0643\u064A \u0648\u0644\u0627 \u064A\u062A\u0644\u0642\u0649 \u0623\u064A \u062A\u0628\u0631\u0639\u0627\u062A \u0645\u0646 \u0623\u064A \u0646\u0648\u0639 \u0643\u0627\u0646.")))))))), __jsx("div", {
    className: "page-section no-scroll",
    id: "strength",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-lg-7 wow fadeIn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "img-place",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "../assets/img/app_preview_4.png",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "col-lg-5 pl-lg-5 wow fadeInUp text-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 15
    }
  }, "\u0635\u0631\u0641 \u0633\u0647\u0644 \u0644\u0644\u062A\u0628\u0631\u0639\u0627\u062A"), __jsx("p", {
    className: "mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 15
    }
  }, "\u0633\u0647\u0648\u0644\u0629 \u0635\u0631\u0641 \u0627\u0644\u062A\u0628\u0631\u0639\u0627\u062A \u0644\u0644\u0645\u062D\u062A\u0627\u062C\u064A\u0646 \u0628\u0623\u0628\u0633\u0637 \u0627\u0644\u0637\u0631\u0642"), __jsx("a", {
    href: "#",
    style: {
      display: "none"
    },
    className: "btn btn-outline-primary rounded-pill",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 15
    }
  }, "See Addons"))))), __jsx("div", {
    className: "page-section",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row",
    style: {
      textAlign: 'right !important'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-lg-6 py-3",
    dir: "rtl",
    style: {
      textAlign: 'right'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 11
    }
  }, __jsx("h3", {
    style: {
      textAlign: 'right'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 15
    }
  }, "\u0646\u0642\u0627\u0637 \u0627\u0644\u0642\u0648\u0629:"), __jsx("ul", {
    style: {
      textAlign: 'right',
      listStyle: 'none'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 17
    }
  }, "1. \u062D\u0627\u062C\u0629 \u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u062E\u064A\u0631\u064A \u0625\u0644\u0649 \u0645\u0646\u0635\u0629 \u062A\u0646\u0633\u064A\u0642 \u0628\u064A\u0646 \u0623\u0637\u0631\u0627\u0641\u0647 \u0627\u0644\u0623\u0631\u0628\u0639\u0629 (\u0627\u0644\u062C\u0647\u0627\u062A \u0627\u0644\u0625\u0634\u0631\u0627\u0641\u064A\u0629 \u0648\u0627\u0644\u062C\u0645\u0639\u064A\u0627\u062A \u0627\u0644\u062E\u064A\u0631\u064A\u0629 \u0648\u0627\u0644\u062F\u0627\u0639\u0645\u064A\u0646 \u0648\u0627\u0644\u0645\u0633\u062A\u0641\u064A\u062F\u064A\u0646)."), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 17
    }
  }, "2. \u0625\u062A\u0627\u062D\u0629 \u0641\u0631\u0635\u0629 \u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0629 \u0641\u064A \u0627\u0644\u0639\u0645\u0644 \u0644\u0644\u062E\u064A\u0631\u064A \u0644\u062C\u0645\u064A\u0639 \u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0628\u0627\u062E\u062A\u0644\u0627\u0641 \u0645\u0633\u062A\u0648\u064A\u0627\u062A\u0647\u0627 \u0627\u0644\u0645\u0627\u062F\u064A\u0629."), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 17
    }
  }, "3. \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0642\u0648\u0627\u0639\u062F \u0628\u064A\u0627\u0646\u0627\u062A \u0623\u0643\u062B\u0631 \u062F\u0642\u0629 \u0648\u0634\u0645\u0648\u0644\u064A\u0629 \u0648\u062A\u0641\u0635\u064A\u0644."), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 17
    }
  }, "4. \u0625\u0645\u0643\u0627\u0646\u064A\u0629 \u0627\u0633\u062A\u062B\u0645\u0627\u0631 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0648\u062C\u0648\u062F\u0629 \u0641\u064A \u0628\u0646\u0627\u0621 \u062E\u0637\u0637 \u0639\u0645\u0644 \u0648\u0645\u0634\u0627\u0631\u064A\u0639 \u062A\u0637\u0648\u064A\u0631 \u0639\u0644\u0649 \u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u0645\u0646\u0637\u0642\u0629."))), __jsx("div", {
    className: "col-lg-6 py-3",
    dir: "rtl",
    style: {
      textAlign: 'right'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 11
    }
  }, __jsx("h3", {
    style: {
      textAlign: 'right'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 15
    }
  }, "\u0623\u0647\u062F\u0627\u0641\u0646\u0627:"), __jsx("ul", {
    style: {
      textAlign: 'right',
      listStyle: 'none'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 17
    }
  }, "1. \u062A\u062D\u0642\u064A\u0642 \u0627\u0644\u062A\u0643\u0627\u0645\u0644 \u0628\u064A\u0646 \u0623\u0635\u062D\u0627\u0628 \u0627\u0644\u0645\u0635\u0644\u062D\u0629 \u0648\u0627\u0644\u062C\u0645\u0639\u064A\u0627\u062A \u0648\u0628\u064A\u0646 \u0627\u0644\u0645\u062A\u0628\u0631\u0639\u064A\u0646 \u0648\u0627\u0644\u0645\u0633\u062A\u0641\u064A\u062F\u064A\u0646."), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 17
    }
  }, "2. \u0625\u064A\u062C\u0627\u062F \u0628\u064A\u0626\u0629 \u062A\u0646\u0627\u0641\u0633\u064A\u0629 \u0641\u064A \u0639\u0645\u0644 \u0627\u0644\u062E\u064A\u0631 \u062A\u062D\u062A\u0636\u0646 \u0627\u0644\u062C\u0645\u064A\u0639 \u0628\u0627\u062E\u062A\u0644\u0627\u0641 \u0648\u0638\u0627\u0626\u0641\u0647\u0645 \u0648\u0645\u0633\u062A\u0648\u064A\u0627\u062A\u0647\u0645."), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 17
    }
  }, "3. \u062E\u062F\u0645\u0629 \u0627\u0644\u0645\u0633\u062A\u0641\u064A\u062F\u064A\u0646 \u0628\u0623\u0633\u0644\u0648\u0628 \u064A\u062C\u0645\u0639 \u0628\u064A\u0646 \u0627\u0644\u062C\u0648\u062F\u0629 \u0648\u0627\u0644\u062E\u0635\u0648\u0635\u064A\u0629."), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 17
    }
  }, "4. \u0627\u0644\u0645\u0633\u0627\u0647\u0645\u0629 \u0641\u064A \u062A\u062D\u0633\u064A\u0646 \u062C\u0648\u062F\u0629 \u0627\u0644\u062D\u064A\u0627\u0629 \u0644\u062C\u0645\u064A\u0639 \u0623\u0641\u0631\u0627\u062F \u0627\u0644\u0645\u062C\u062A\u0645\u0639 \u0628\u0643\u0627\u0641\u0629 \u0645\u0633\u062A\u0648\u064A\u0627\u062A\u0647\u0645 \u0627\u0644\u0645\u0639\u064A\u0634\u064A\u0629."))), __jsx("div", {
    className: "col-lg-12 py-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 1
    }
  }, __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 33
    }
  }), " "), __jsx("div", {
    className: "col-lg-12 py-3",
    dir: "rtl",
    style: {
      textAlign: 'right'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 11
    }
  }, __jsx("h3", {
    style: {
      textAlign: 'right'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 15
    }
  }, "\u0623\u0633\u0644\u0648\u0628 \u0627\u0644\u0639\u0645\u0644:"), __jsx("ul", {
    style: {
      textAlign: 'right',
      listStyle: 'none'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 17
    }
  }, "1. \u0645\u0646\u0635\u0629 \u062A\u0641\u0627\u0639\u0644\u064A\u0629 \u062A\u062C\u0645\u0639 \u0628\u064A\u0646 \u0627\u0644\u0633\u0647\u0648\u0644\u0629 \u0648\u0627\u0644\u0633\u0631\u0639\u0629 \u0641\u064A \u062A\u0642\u062F\u064A\u0645 \u0627\u0644\u062E\u062F\u0645\u0627\u062A."), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 17
    }
  }, "2. \u062A\u0646\u0633\u064A\u0642 \u0628\u064A\u0646 \u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0627\u0644\u062A\u064A \u062A\u0631\u063A\u0628 \u0641\u064A \u0627\u0644\u062F\u0639\u0645 \u0648\u0628\u064A\u0646 \u0627\u0644\u062C\u0645\u0639\u064A\u0627\u062A \u0627\u0644\u062A\u064A \u0644\u062F\u064A\u0647\u0627 \u0645\u0633\u062A\u0641\u064A\u062F\u064A\u0646."), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 17
    }
  }, "3. \u0644\u0627 \u064A\u062A\u0645 \u0627\u0633\u062A\u0642\u0628\u0627\u0644 \u0627\u0644\u062A\u0628\u0631\u0639\u0627\u062A \u0645\u0646 \u0623\u064A \u0646\u0648\u0639 \u0643\u0627\u0646 \u0645\u0627\u062F\u064A \u0623\u0648 \u0639\u064A\u0646\u064A."), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 17
    }
  }, "4. \u062C\u0645\u064A\u0639 \u0642\u0648\u0627\u0639\u062F \u0628\u064A\u0627\u0646\u0627\u062A \u062A\u062E\u0636\u0639 \u0644\u0644\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u0631\u0633\u0645\u064A\u0629.")))))), __jsx("div", {
    className: "page-section",
    style: {
      display: "none"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-lg-4 py-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "iconic-list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "iconic-item wow fadeInUp",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "iconic-content text-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 19
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 21
    }
  }, "\u062A\u062C\u0631\u0628\u0629 \u0633\u0647\u0644\u0629 \u0648\u0633\u0631\u064A\u0639\u0629"), __jsx("p", {
    className: "fs-small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 21
    }
  }, "\u0633\u0647\u0648\u0644\u0629 \u0627\u0644\u062A\u0628\u0631\u0639 \u0648\u0633\u0647\u0648\u0644\u0629 \u0635\u0631\u0641 \u0627\u0644\u0643\u0648\u0628\u0648\u0646\u0627\u062A \u0633\u0647\u0648\u0644\u0629 \u0627\u0644\u062A\u0628\u0631\u0639 \u0648\u0633\u0647\u0648\u0644\u0629 \u0635\u0631\u0641 \u0627\u0644\u0643\u0648\u0628\u0648\u0646\u0627\u062A \u0633\u0647\u0648\u0644\u0629 \u0627\u0644\u062A\u0628\u0631\u0639 \u0648\u0633\u0647\u0648\u0644\u0629 \u0635\u0631\u0641 \u0627\u0644\u0643\u0648\u0628\u0648\u0646\u0627\u062A \u0633\u0647\u0648\u0644\u0629 \u0627\u0644\u062A\u0628\u0631\u0639 \u0648\u0633\u0647\u0648\u0644\u0629 \u0635\u0631\u0641 \u0627\u0644\u0643\u0648\u0628\u0648\u0646\u0627\u062A \u0633\u0647\u0648\u0644\u0629 \u0627\u0644\u062A\u0628\u0631\u0639 \u0648\u0633\u0647\u0648\u0644\u0629 \u0635\u0631\u0641 \u0627\u0644\u0643\u0648\u0628\u0648\u0646\u0627\u062A \u0633\u0647\u0648\u0644\u0629 \u0627\u0644\u062A\u0628\u0631\u0639 \u0648\u0633\u0647\u0648\u0644\u0629 \u0635\u0631\u0641 \u0627\u0644\u0643\u0648\u0628\u0648\u0646\u0627\u062A")), __jsx("div", {
    className: "iconic-md iconic-text bg-warning fg-white rounded-circle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 19
    }
  }, __jsx("span", {
    className: "mai-analytics",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "iconic-item wow fadeInUp",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "iconic-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 19
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 21
    }
  }, "\u0635\u0631\u0641 \u0627\u0645\u0646 \u0644\u0644\u062A\u0628\u0631\u0639\u0627\u062A"), __jsx("p", {
    className: "fs-small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 21
    }
  }, "\u0635\u0631\u0641 \u0633\u0647\u0644 \u0644\u0644\u062A\u0628\u0631\u0639\u0627\u062A \u0645\u0646 \u0642\u0628\u0644 \u0627\u0644\u0645\u062D\u062A\u0627\u062C \u0635\u0631\u0641 \u0633\u0647\u0644 \u0644\u0644\u062A\u0628\u0631\u0639\u0627\u062A \u0645\u0646 \u0642\u0628\u0644 \u0627\u0644\u0645\u062D\u062A\u0627\u062C \u0635\u0631\u0641 \u0633\u0647\u0644 \u0644\u0644\u062A\u0628\u0631\u0639\u0627\u062A \u0645\u0646 \u0642\u0628\u0644 \u0627\u0644\u0645\u062D\u062A\u0627\u062C \u0635\u0631\u0641 \u0633\u0647\u0644 \u0644\u0644\u062A\u0628\u0631\u0639\u0627\u062A \u0645\u0646 \u0642\u0628\u0644 \u0627\u0644\u0645\u062D\u062A\u0627\u062C")), __jsx("div", {
    className: "iconic-md iconic-text bg-info fg-white rounded-circle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 19
    }
  }, __jsx("span", {
    className: "mai-shield-checkmark",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "iconic-item wow fadeInUp",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "iconic-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 19
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 21
    }
  }, "\u062A\u0642\u0627\u0631\u064A\u0631 \u0628\u062A\u0628\u0631\u0639\u0627\u062A\u0643"), __jsx("p", {
    className: "fs-small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 21
    }
  }, "\u062A\u0648\u0641\u064A\u0631 \u062A\u0642\u0627\u0631\u064A\u0631 \u0644\u062A\u0628\u0631\u0639\u0627\u062A\u0643 \u062A\u0648\u0641\u064A\u0631 \u062A\u0642\u0627\u0631\u064A\u0631 \u0644\u062A\u0628\u0631\u0639\u0627\u062A\u0643 \u062A\u0648\u0641\u064A\u0631 \u062A\u0642\u0627\u0631\u064A\u0631 \u0644\u062A\u0628\u0631\u0639\u0627\u062A\u0643 \u062A\u0648\u0641\u064A\u0631 \u062A\u0642\u0627\u0631\u064A\u0631 \u0644\u062A\u0628\u0631\u0639\u0627\u062A\u0643")), __jsx("div", {
    className: "iconic-md iconic-text bg-indigo fg-white rounded-circle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 19
    }
  }, __jsx("span", {
    className: "mai-desktop-outline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 21
    }
  }))))), __jsx("div", {
    className: "col-lg-4 py-3 wow zoomIn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "img-place mobile-preview shadow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "../assets/img/app_preview_2.png",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "col-lg-4 py-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "iconic-list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "iconic-item wow fadeInUp",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "iconic-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 19
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 21
    }
  }, "\u0633\u0631\u0639\u0629 \u062A\u0648\u0635\u064A\u0644 \u0627\u0644\u062A\u0628\u0631\u0639\u0627\u062A"), __jsx("p", {
    className: "fs-small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 21
    }
  }, "\u0633\u0631\u0639\u0629 \u062A\u0648\u0635\u064A\u0644 \u0627\u0644\u062A\u0628\u0631\u0639\u0627\u062A \u0633\u0631\u0639\u0629 \u062A\u0648\u0635\u064A\u0644 \u0627\u0644\u062A\u0628\u0631\u0639\u0627\u062A\u0633\u0631\u0639\u0629 \u062A\u0648\u0635\u064A\u0644 \u0627\u0644\u062A\u0628\u0631\u0639\u0627\u062A\u0633\u0631\u0639\u0629 \u062A\u0648\u0635\u064A\u0644 \u0627\u0644\u062A\u0628\u0631\u0639\u0627\u062A\u0633\u0631\u0639\u0629 \u062A\u0648\u0635\u064A\u0644 \u0627\u0644\u062A\u0628\u0631\u0639\u0627\u062A\u0633\u0631\u0639\u0629 \u062A\u0648\u0635\u064A\u0644 \u0627\u0644\u062A\u0628\u0631\u0639\u0627\u062A\u0633\u0631\u0639\u0629 \u062A\u0648\u0635\u064A\u0644 \u0627\u0644\u062A\u0628\u0631\u0639\u0627\u062A\u0633\u0631\u0639\u0629 \u062A\u0648\u0635\u064A\u0644 \u0627\u0644\u062A\u0628\u0631\u0639\u0627\u062A")), __jsx("div", {
    className: "iconic-md iconic-text bg-warning fg-white rounded-circle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 19
    }
  }, __jsx("span", {
    className: "mai-speedometer-outline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "iconic-item wow fadeInUp",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "iconic-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 19
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 21
    }
  }, "\u0627\u0645\u0646 \u062A\u0645\u0627\u0645\u0627"), __jsx("p", {
    className: "fs-small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 21
    }
  }, "\u062A\u062C\u0631\u0628\u0629 \u0627\u0645\u0646\u0629 \u0641\u064A \u0627\u0644\u062A\u0628\u0631\u0639 \u0648\u0635\u0631\u0641 \u0627\u0644\u062A\u0628\u0631\u0639\u0627\u062A\u062A\u062C\u0631\u0628\u0629 \u0627\u0645\u0646\u0629 \u0641\u064A \u0627\u0644\u062A\u0628\u0631\u0639 \u0648\u0635\u0631\u0641 \u0627\u0644\u062A\u0628\u0631\u0639\u0627\u062A\u062A\u062C\u0631\u0628\u0629 \u0627\u0645\u0646\u0629 \u0641\u064A \u0627\u0644\u062A\u0628\u0631\u0639 \u0648\u0635\u0631\u0641 \u0627\u0644\u062A\u0628\u0631\u0639\u0627\u062A\u062A\u062C\u0631\u0628\u0629 \u0627\u0645\u0646\u0629 \u0641\u064A \u0627\u0644\u062A\u0628\u0631\u0639 \u0648\u0635\u0631\u0641 \u0627\u0644\u062A\u0628\u0631\u0639\u0627\u062A\u062A\u062C\u0631\u0628\u0629 \u0627\u0645\u0646\u0629 \u0641\u064A \u0627\u0644\u062A\u0628\u0631\u0639 \u0648\u0635\u0631\u0641 \u0627\u0644\u062A\u0628\u0631\u0639\u0627\u062A")), __jsx("div", {
    className: "iconic-md iconic-text bg-success fg-white rounded-circle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 19
    }
  }, __jsx("span", {
    className: "mai-aperture",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "iconic-item wow fadeInUp",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "iconic-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 19
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 21
    }
  }, "\u0645\u062A\u0627\u0628\u0639\u0629 \u0627\u062F\u0627\u0621 \u0627\u0644\u062A\u0628\u0631\u0639\u0627\u062A"), __jsx("p", {
    className: "fs-small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 21
    }
  }, "\u0645\u062A\u0627\u0628\u0639\u0629 \u0627\u062F\u0627\u0621 \u0627\u0644\u062A\u0628\u0631\u0639\u0627\u062A \u0628\u0643\u0644 \u0633\u0647\u0648\u0644\u0629 \u0645\u062A\u0627\u0628\u0639\u0629 \u0627\u062F\u0627\u0621 \u0627\u0644\u062A\u0628\u0631\u0639\u0627\u062A \u0628\u0643\u0644 \u0633\u0647\u0648\u0644\u0629 \u0645\u062A\u0627\u0628\u0639\u0629 \u0627\u062F\u0627\u0621 \u0627\u0644\u062A\u0628\u0631\u0639\u0627\u062A \u0628\u0643\u0644 \u0633\u0647\u0648\u0644\u0629 \u0645\u062A\u0627\u0628\u0639\u0629 \u0627\u062F\u0627\u0621 \u0627\u0644\u062A\u0628\u0631\u0639\u0627\u062A \u0628\u0643\u0644 \u0633\u0647\u0648\u0644\u0629 \u0645\u062A\u0627\u0628\u0639\u0629 \u0627\u062F\u0627\u0621 \u0627\u0644\u062A\u0628\u0631\u0639\u0627\u062A \u0628\u0643\u0644 \u0633\u0647\u0648\u0644\u0629", " ")), __jsx("div", {
    className: "iconic-md iconic-text bg-indigo fg-white rounded-circle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 19
    }
  }, __jsx("span", {
    className: "mai-stats-chart-outline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 21
    }
  })))))))), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "page-section",
    style: {
      display: "none"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row justify-content-center text-center wow fadeInUp",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 15
    }
  }, "Get awesome features, without extra charges"), __jsx("p", {
    className: "mb-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 15
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores non magnam, quis aliquid dolor magni"), __jsx("div", {
    className: "btn-group btn-group-toggle rounded-pill btn-switch",
    "data-toggle": "buttons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 15
    }
  }, __jsx("label", {
    className: "btn active",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 17
    }
  }, __jsx("input", {
    type: "radio",
    name: "options",
    id: "option1",
    defaultChecked: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 19
    }
  }), " ", "Monthly"), __jsx("label", {
    className: "btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 17
    }
  }, __jsx("input", {
    type: "radio",
    name: "options",
    id: "option2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 19
    }
  }), " Annually")))), __jsx("div", {
    className: "pricing-table mt-5 wow fadeInUp",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "pricing-item active no-transform",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "pricing-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 15
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 17
    }
  }, "Business Plan"), __jsx("h1", {
    className: "fw-normal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 17
    }
  }, "$49.00")), __jsx("div", {
    className: "pricing-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 15
    }
  }, __jsx("ul", {
    className: "theme-list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 17
    }
  }, __jsx("li", {
    className: "list-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 19
    }
  }, "Push Notification"), __jsx("li", {
    className: "list-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 19
    }
  }, "Unlimited Bandwith"), __jsx("li", {
    className: "list-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 19
    }
  }, "Realtime Database"), __jsx("li", {
    className: "list-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 19
    }
  }, "Monthly Backup"), __jsx("li", {
    className: "list-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 19
    }
  }, "24/7 Support"))), __jsx("button", {
    className: "btn btn-dark",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 15
    }
  }, "Choose Plan")), __jsx("div", {
    className: "pricing-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "pricing-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 15
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 17
    }
  }, "Starter Plan"), __jsx("h1", {
    className: "fw-normal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 17
    }
  }, "$24.00")), __jsx("div", {
    className: "pricing-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 15
    }
  }, __jsx("ul", {
    className: "theme-list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 17
    }
  }, __jsx("li", {
    className: "list-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384,
      columnNumber: 19
    }
  }, "Push Notification"), __jsx("li", {
    className: "list-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385,
      columnNumber: 19
    }
  }, "Unlimited Bandwith"), __jsx("li", {
    className: "list-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
      columnNumber: 19
    }
  }, "Realtime Database"), __jsx("li", {
    className: "list-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 19
    }
  }, "Monthly Backup"), __jsx("li", {
    className: "list-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 19
    }
  }, "24/7 Support"))), __jsx("button", {
    className: "btn btn-dark",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 15
    }
  }, "Choose Plan"))))), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "page-section bg-light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row justify-content-center align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-lg-5 py-3 wow fadeInUp",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 15
    }
  }, "\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629 "), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
      columnNumber: 15
    }
  }, "\u0647\u0646\u0627 \u0646\u062C\u0627\u0648\u0628 \u0639\u0644\u0649 \u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629."), __jsx("p", {
    className: "fg-primary fw-medium",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403,
      columnNumber: 15
    }
  }, "\u062A\u0631\u064A\u062F \u0627\u0644\u0645\u0632\u064A\u062F \u0645\u0646 \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629?"), __jsx("a", {
    href: "#",
    className: "btn btn-gradient btn-split-icon rounded-pill",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "icon mai-call-outline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408,
      columnNumber: 17
    }
  }), " \u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627")), __jsx("div", {
    className: "col-lg-7 py-3 no-scroll-x",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "accordion accordion-gap",
    id: "accordionFAQ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "accordion-item wow fadeInRight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "accordion-trigger",
    id: "headingFour",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
      columnNumber: 19
    }
  }, __jsx("button", {
    className: "btn collapsed",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#collapse1",
    "aria-expanded": "false",
    "aria-controls": "collapse1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 21
    }
  }, "1. \u0647\u0644 (\u0645\u0646\u0635\u0629 \u0631\u0628\u0648\u0629) \u062C\u0645\u0639\u064A\u0629 \u062E\u064A\u0631\u064A\u0629\u061F")), __jsx("div", {
    id: "collapse1",
    className: "collapse",
    "aria-labelledby": "headingFour",
    "data-parent": "#accordionFAQ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "accordion-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433,
      columnNumber: 23
    }
  }, "1. (\u0645\u0646\u0635\u0629 \u0631\u0628\u0648\u0629) \u0645\u0634\u0631\u0648\u0639 \u0648\u0642\u0641\u064A \u064A\u062A\u0628\u0639 \u0644\u0645\u0624\u0633\u0633\u0629 \u062A\u062C\u0627\u0631\u064A\u0629 \u0627\u0633\u0645\u0647\u0627 (\u0645\u0624\u0633\u0633\u0629 \u062D\u0643\u0645\u0627\u0621 \u0627\u0644\u0645\u0633\u062A\u0642\u0628\u0644 \u0644\u0644\u0627\u062A\u0635\u0627\u0644\u0627\u062A \u0648\u062A\u0642\u0646\u064A\u0629 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A) \u0648\u0645\u0642\u0631\u0647\u0627 \u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629 \u2013 \u062C\u062F\u0629.")))), __jsx("div", {
    className: "accordion-item wow fadeInRight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "accordion-trigger",
    id: "headingEight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439,
      columnNumber: 19
    }
  }, __jsx("button", {
    className: "btn collapsed",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#collapse2",
    "aria-expanded": "false",
    "aria-controls": "collapse2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 21
    }
  }, "2. \u0647\u0644 (\u0645\u0646\u0635\u0629 \u0631\u0628\u0648\u0629) \u062A\u0639\u0645\u0644 \u0639\u0644\u0649 \u0645\u0633\u062A\u0648\u0649 \u0645\u062D\u0644\u064A \u0623\u0645 \u062F\u0648\u0644\u064A\u061F")), __jsx("div", {
    id: "collapse2",
    className: "collapse",
    "aria-labelledby": "headingEight",
    "data-parent": "#accordionFAQ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "accordion-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 457,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458,
      columnNumber: 23
    }
  }, "2. (\u0645\u0646\u0635\u0629 \u0631\u0628\u0648\u0629) \u062A\u0642\u062F\u0645 \u062E\u062F\u0645\u0627\u062A\u0647\u0627 \u0628\u0625\u0634\u0631\u0627\u0641 \u0627\u0644\u062C\u0647\u0627\u062A \u0627\u0644\u0631\u0633\u0645\u064A\u0629 \u062F\u0627\u062E\u0644 \u0643\u0644 \u062F\u0648\u0644\u0629 \u064A\u062A\u0645 \u0642\u0628\u0648\u0644\u0647\u0627 \u0641\u064A\u0647.")))), __jsx("div", {
    className: "accordion-item wow fadeInRight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "accordion-trigger",
    id: "headingEight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 468,
      columnNumber: 19
    }
  }, __jsx("button", {
    className: "btn collapsed",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#collapse3",
    "aria-expanded": "false",
    "aria-controls": "collapse3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469,
      columnNumber: 21
    }
  }, "3. \u0645\u0646 \u0647\u0645 \u0627\u0644\u0645\u0633\u062A\u0641\u064A\u062F\u0648\u0646 \u0645\u0646 \u0645\u0646\u0635\u0629 \u0631\u0628\u0648\u0629\u061F")), __jsx("div", {
    id: "collapse3",
    className: "collapse",
    "aria-labelledby": "headingEight",
    "data-parent": "#accordionFAQ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "accordion-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 486,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 487,
      columnNumber: 23
    }
  }, "3. \u0627\u0644\u0645\u0633\u062A\u0641\u064A\u062F\u0648\u0646 \u0647\u0645 \u062C\u0645\u064A\u0639 \u0623\u0635\u062D\u0627\u0628 \u0627\u0644\u062D\u0627\u062C\u0627\u062A \u0628\u0623\u0646\u0648\u0627\u0639\u0647\u0627.")))), __jsx("div", {
    className: "accordion-item wow fadeInRight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "accordion-trigger",
    id: "headingEight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497,
      columnNumber: 19
    }
  }, __jsx("button", {
    className: "btn collapsed",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#collapse33",
    "aria-expanded": "false",
    "aria-controls": "collapse33",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498,
      columnNumber: 21
    }
  }, "4. \u0645\u0627 \u062F\u0648\u0631 \u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0627\u0644\u062A\u062C\u0627\u0631\u064A\u0629\u061F")), __jsx("div", {
    id: "collapse33",
    className: "collapse",
    "aria-labelledby": "headingEight",
    "data-parent": "#accordionFAQ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "accordion-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 515,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 516,
      columnNumber: 23
    }
  }, "4. \u064A\u062A\u0645 \u0627\u0644\u062A\u0646\u0633\u064A\u0642 \u0645\u0639 \u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0627\u0644\u0631\u0627\u063A\u0628\u0629 \u0641\u064A \u062F\u0639\u0645 \u0627\u0644\u0645\u062D\u062A\u0627\u062C\u064A\u0646 \u0645\u0646 \u062E\u0644\u0627\u0644 (\u0645\u0646\u0635\u0629 \u0631\u0628\u0648\u0629) \u0644\u062A\u0642\u062F\u064A\u0645 \u0628\u0637\u0627\u0642\u0627\u062A \u062E\u0635\u0645 \u0623\u0648 \u0628\u0637\u0627\u0642\u0627\u062A \u0634\u0631\u0627\u0621 \u0645\u062C\u0627\u0646\u064A\u0629 \u0644\u0644\u0645\u0633\u062A\u0641\u064A\u062F\u064A\u0646.")))), __jsx("div", {
    className: "accordion-item wow fadeInRight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "accordion-trigger",
    id: "headingEight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 526,
      columnNumber: 19
    }
  }, __jsx("button", {
    className: "btn collapsed",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#collapse4",
    "aria-expanded": "false",
    "aria-controls": "collapse4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 527,
      columnNumber: 21
    }
  }, "5. \u0645\u0627 \u062F\u0648\u0631 \u0627\u0644\u062C\u0645\u0639\u064A\u0627\u062A \u0627\u0644\u062E\u064A\u0631\u064A\u0629\u061F")), __jsx("div", {
    id: "collapse4",
    className: "collapse",
    "aria-labelledby": "headingEight",
    "data-parent": "#accordionFAQ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "accordion-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 544,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 545,
      columnNumber: 23
    }
  }, "5. \u062A\u0642\u0648\u0645 \u0627\u0644\u062C\u0645\u0639\u064A\u0627\u062A \u0627\u0644\u062E\u064A\u0631\u064A\u0629 \u0628\u062F\u0648\u0631 \u0627\u0644\u0628\u062D\u062B \u0644\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0635\u062D\u0629 \u0628\u064A\u0627\u0646\u0627\u062A \u0623\u0635\u062D\u0627\u0628 \u0627\u0644\u062D\u0627\u062C\u0627\u062A \u0627\u0644\u0645\u0633\u062C\u0644\u064A\u0646 \u0641\u064A \u0631\u0628\u0648\u0629.")))), __jsx("div", {
    className: "accordion-item wow fadeInRight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 552,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "accordion-trigger",
    id: "headingNine",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 553,
      columnNumber: 19
    }
  }, __jsx("button", {
    className: "btn collapsed",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#collapse46",
    "aria-expanded": "false",
    "aria-controls": "collapse46",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 554,
      columnNumber: 21
    }
  }, "6. \u0645\u0627\u0630\u0627 \u062A\u0633\u062A\u0641\u064A\u062F \u0627\u0644\u062C\u0645\u0639\u064A\u0627\u062A\u061F")), __jsx("div", {
    id: "collapse46",
    className: "collapse",
    "aria-labelledby": "headingNine",
    "data-parent": "#accordionFAQ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 565,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "accordion-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 571,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 572,
      columnNumber: 23
    }
  }, "6. (\u0645\u0646\u0635\u0629 \u0631\u0628\u0648\u0629) \u064A\u0648\u0641\u0631 \u0634\u0631\u064A\u062D\u0629 \u0648\u0627\u0633\u0639\u0629 \u0645\u0646 \u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0627\u0644\u062A\u062C\u0627\u0631\u064A\u0629 \u0627\u0644\u0631\u0627\u063A\u0628\u0629 \u0641\u064A \u062F\u0639\u0645 \u0627\u0644\u0645\u062D\u062A\u0627\u062C\u064A\u0646 \u0625\u0645\u0627 \u0628\u0643\u0648\u0628\u0648\u0646\u0627\u062A \u0634\u0631\u0627\u0626\u064A\u0629 \u0645\u062C\u0627\u0646\u064A\u0629 \u0623\u0648 \u0643\u0648\u0628\u0648\u0646\u0627\u062A \u062E\u0635\u0645 \u0648\u062A\u0648\u0641\u0631 \u0623\u0646\u0648\u0627\u0639 \u0645\u062A\u0639\u062F\u062F\u0629 \u0645\u0646 \u0627\u0644\u062E\u064A\u0627\u0631\u0627\u062A \u0648\u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0644\u0644\u0645\u062D\u062A\u0627\u062C\u064A\u0646 \u0627\u0644\u0645\u0633\u062C\u0644\u064A\u0646 \u0644\u062F\u064A\u0647\u0645.")))), __jsx("div", {
    className: "accordion-item wow fadeInRight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 592,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "accordion-trigger",
    id: "headingEight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 593,
      columnNumber: 19
    }
  }, __jsx("button", {
    className: "btn collapsed",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#collapse45",
    "aria-expanded": "false",
    "aria-controls": "collapse45",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 594,
      columnNumber: 21
    }
  }, "7. \u0645\u0627\u0630\u0627 \u062A\u0633\u062A\u0641\u064A\u062F \u0627\u0644\u0634\u0631\u0643\u0627\u062A\u061F")), __jsx("div", {
    id: "collapse45",
    className: "collapse",
    "aria-labelledby": "headingEight",
    "data-parent": "#accordionFAQ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 605,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "accordion-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 611,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 612,
      columnNumber: 23
    }
  }, "7. (\u0645\u0646\u0635\u0629 \u0631\u0628\u0648\u0629) \u064A\u0648\u0641\u0631 \u0644\u0644\u0634\u0631\u0643\u0627\u062A \u0641\u0631\u0635 \u0627\u0644\u0648\u0635\u0648\u0644 \u0627\u0644\u0633\u0631\u064A\u0639 \u0625\u0644\u0649 \u0627\u0644\u0645\u062D\u062A\u0627\u062C\u064A\u0646 \u0627\u0644\u0641\u0639\u0644\u064A\u064A\u0646 \u0648\u064A\u062A\u064A\u062D \u0644\u0647\u0627 \u0627\u0644\u062A\u0628\u0631\u0639 \u0627\u0644\u0622\u0645\u0646 \u0644\u0647\u0645 \u0648\u064A\u0633\u0645\u062D \u0644\u0644\u0634\u0631\u0643\u0629 \u0628\u062A\u0642\u062F\u064A\u0645 \u0627\u0644\u0645\u062A\u0648\u0641\u0631 \u0644\u062F\u064A\u0647\u0627 \u0645\u0646 \u0645\u0646\u062A\u062C\u0627\u062A \u062D\u0633\u0628 \u0625\u0645\u0643\u0627\u0646\u064A\u0627\u062A \u0627\u0644\u0634\u0631\u0643\u0629 \u0645\u0647\u0645\u0627 \u0643\u0627\u0646 \u062D\u062C\u0645\u0647\u0627 \u0648\u0645\u0633\u062A\u0648\u0627\u0647\u0627\u060C \u0648\u064A\u0633\u0647\u0644 \u0644\u0647\u0645 \u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u062A\u0628\u0631\u0639 \u0625\u0645\u0627 \u0628\u0627\u0644\u0645\u0646\u062D \u0627\u0644\u0643\u0627\u0645\u0644 \u0623\u0648 \u0627\u0644\u062E\u0635\u0645.                      ")))), __jsx("div", {
    className: "accordion-item wow fadeInRight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 623,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "accordion-trigger",
    id: "headingEight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 624,
      columnNumber: 19
    }
  }, __jsx("button", {
    className: "btn collapsed",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#collapse5",
    "aria-expanded": "false",
    "aria-controls": "collapse5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 625,
      columnNumber: 21
    }
  }, "8. \u0647\u0644 \u062A\u062D\u0635\u0644 \u0627\u0644\u062C\u0645\u0639\u064A\u0627\u062A \u0648\u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0639\u0644\u0649 \u062A\u0642\u0627\u0631\u064A\u0631 \u062E\u0627\u0635\u0629 \u0628\u0647\u0645.")), __jsx("div", {
    id: "collapse5",
    className: "collapse",
    "aria-labelledby": "headingEight",
    "data-parent": "#accordionFAQ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 636,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "accordion-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 642,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 643,
      columnNumber: 23
    }
  }, "8. \u0646\u0639\u0645 \u0648\u0645\u0646 \u062E\u0644\u0627\u0644 \u0644\u0648\u062D\u0629 \u062A\u062D\u0643\u0645 \u062E\u0627\u0635\u0629 \u064A\u0645\u0643\u0646 \u0644\u0644\u062C\u0645\u0639\u064A\u0629 \u0623\u0648 \u0627\u0644\u0634\u0631\u0643\u0629 \u0627\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u062A\u0642\u0627\u0631\u064A\u0631 \u062A\u0641\u0635\u064A\u0644\u064A\u0629 \u0648\u0645\u0634\u0627\u0631\u0643\u062A\u0647\u0627 \u0645\u0639 \u0627\u0644\u062C\u0647\u0627\u062A \u0627\u0644\u0631\u0633\u0645\u064A\u0629 \u0644\u0644\u062F\u0644\u0627\u0644\u0629 \u0639\u0644\u0649 \u0625\u0646\u062C\u0627\u0632\u0627\u062A\u0647\u0645 \u0628\u0634\u0643\u0644 \u0645\u062A\u0645\u064A\u0632.")))), __jsx("div", {
    className: "accordion-item wow fadeInRight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 653,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "accordion-trigger",
    id: "headingEight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 654,
      columnNumber: 19
    }
  }, __jsx("button", {
    className: "btn collapsed",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#collapse6",
    "aria-expanded": "false",
    "aria-controls": "collapse6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 655,
      columnNumber: 21
    }
  }, "9. \u0645\u0627 \u0647\u064A \u0634\u0631\u0648\u0637 \u0627\u0644\u062A\u0633\u062C\u064A\u0644 \u0641\u064A \u0627\u0644\u0645\u0646\u0635\u0629\u061F")), __jsx("div", {
    id: "collapse6",
    className: "collapse",
    "aria-labelledby": "headingEight",
    "data-parent": "#accordionFAQ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 666,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "accordion-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 672,
      columnNumber: 21
    }
  }, __jsx("p", {
    dir: "RTL",
    style: {
      marginTop: '0cm',
      marginRight: '0cm',
      marginBottom: '0cm',
      marginLeft: '0cm',
      textAlign: 'right',
      lineHeight: 'normal',
      fontSize: 15,
      fontFamily: '"Calibri",sans-serif'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 673,
      columnNumber: 21
    }
  }, __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 673,
      columnNumber: 213
    }
  }, __jsx("span", {
    style: {
      fontSize: 19,
      fontFamily: '"Sakkal Majalla"',
      color: '#0033CC'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 673,
      columnNumber: 221
    }
  }, "- \u0634\u0631\u0648\u0637 \u0627\u0644\u062A\u0633\u062C\u064A\u0644 \u0644\u0644\u0645\u0633\u062A\u0641\u064A\u062F\u064A\u0646:"))), __jsx("p", {
    dir: "RTL",
    style: {
      marginTop: '0cm',
      marginRight: '0cm',
      marginBottom: '0cm',
      marginLeft: '0cm',
      textAlign: 'right',
      lineHeight: 'normal',
      fontSize: 15,
      fontFamily: '"Calibri",sans-serif'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 674,
      columnNumber: 3
    }
  }, __jsx("span", {
    style: {
      fontFamily: '"Sakkal Majalla"'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 674,
      columnNumber: 195
    }
  }, "1. \u0623\u0646 \u064A\u0643\u0648\u0646 \u0644\u062F\u0649 \u0627\u0644\u0645\u0633\u062A\u0641\u064A\u062F \u0625\u062B\u0628\u0627\u062A \u0647\u0648\u064A\u0629 \u0631\u0633\u0645\u064A\u0629 \u0623\u0648 \u0625\u0642\u0627\u0645\u0629 \u0633\u0627\u0631\u064A\u0629 \u0627\u0644\u0645\u0641\u0639\u0648\u0644.")), __jsx("p", {
    dir: "RTL",
    style: {
      marginTop: '0cm',
      marginRight: '0cm',
      marginBottom: '0cm',
      marginLeft: '0cm',
      textAlign: 'right',
      lineHeight: 'normal',
      fontSize: 15,
      fontFamily: '"Calibri",sans-serif'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 675,
      columnNumber: 3
    }
  }, __jsx("span", {
    style: {
      fontFamily: '"Sakkal Majalla"'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 675,
      columnNumber: 195
    }
  }, "2. \u0623\u0646 \u064A\u0643\u0648\u0646 \u0645\u0633\u062A\u062D\u0642\u0627\u064B \u0644\u0644\u0645\u0633\u0627\u0639\u062F\u0629.")), __jsx("p", {
    dir: "RTL",
    style: {
      marginTop: '0cm',
      marginRight: '0cm',
      marginBottom: '0cm',
      marginLeft: '0cm',
      textAlign: 'right',
      lineHeight: 'normal',
      fontSize: 15,
      fontFamily: '"Calibri",sans-serif'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 676,
      columnNumber: 3
    }
  }, __jsx("span", {
    style: {
      fontFamily: '"Sakkal Majalla"'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 676,
      columnNumber: 195
    }
  }, "\xA0")), __jsx("p", {
    dir: "RTL",
    style: {
      marginTop: '0cm',
      marginRight: '0cm',
      marginBottom: '0cm',
      marginLeft: '0cm',
      textAlign: 'right',
      lineHeight: 'normal',
      fontSize: 15,
      fontFamily: '"Calibri",sans-serif'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 677,
      columnNumber: 3
    }
  }, __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 677,
      columnNumber: 195
    }
  }, __jsx("span", {
    style: {
      fontSize: 19,
      fontFamily: '"Sakkal Majalla"',
      color: '#0033CC'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 677,
      columnNumber: 203
    }
  }, "- \u0634\u0631\u0648\u0637 \u0627\u0644\u062A\u0633\u062C\u064A\u0644 \u0644\u0644\u0634\u0631\u0643\u0627\u062A:"))), __jsx("p", {
    dir: "RTL",
    style: {
      marginTop: '0cm',
      marginRight: '0cm',
      marginBottom: '0cm',
      marginLeft: '0cm',
      textAlign: 'right',
      lineHeight: 'normal',
      fontSize: 15,
      fontFamily: '"Calibri",sans-serif'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 678,
      columnNumber: 3
    }
  }, __jsx("span", {
    style: {
      fontFamily: '"Sakkal Majalla"'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 678,
      columnNumber: 195
    }
  }, "1. \u0623\u0646 \u064A\u0643\u0648\u0646 \u0644\u062F\u064A\u0647\u0627 \u0646\u0638\u0627\u0645 \u0645\u062D\u0627\u0633\u0628\u064A \u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0645\u0646 \u0623\u064A \u0646\u0648\u0639 \u0643\u0627\u0646\u060C \u0623\u0648 \u0645\u0646\u0635\u0629 \u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0629.")), __jsx("p", {
    dir: "RTL",
    style: {
      marginTop: '0cm',
      marginRight: '0cm',
      marginBottom: '0cm',
      marginLeft: '0cm',
      textAlign: 'right',
      lineHeight: 'normal',
      fontSize: 15,
      fontFamily: '"Calibri",sans-serif'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 679,
      columnNumber: 3
    }
  }, __jsx("span", {
    style: {
      fontFamily: '"Sakkal Majalla"'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 679,
      columnNumber: 195
    }
  }, "\xA0")), __jsx("p", {
    dir: "RTL",
    style: {
      marginTop: '0cm',
      marginRight: '0cm',
      marginBottom: '0cm',
      marginLeft: '0cm',
      textAlign: 'right',
      lineHeight: 'normal',
      fontSize: 15,
      fontFamily: '"Calibri",sans-serif'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 680,
      columnNumber: 3
    }
  }, __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 680,
      columnNumber: 195
    }
  }, __jsx("span", {
    style: {
      fontSize: 19,
      fontFamily: '"Sakkal Majalla"',
      color: '#0033CC'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 680,
      columnNumber: 203
    }
  }, "- \u0634\u0631\u0648\u0637 \u0627\u0644\u062A\u0633\u062C\u064A\u0644 \u0644\u0633\u0641\u0631\u0627\u0621 \u0627\u0644\u0645\u0646\u0635\u0629 (\u0623\u0641\u0631\u0627\u062F) \u0623\u0648 (\u062C\u0645\u0639\u064A\u0627\u062A):"))), __jsx("p", {
    dir: "RTL",
    style: {
      marginTop: '0cm',
      marginRight: '0cm',
      marginBottom: '0cm',
      marginLeft: '0cm',
      textAlign: 'right',
      lineHeight: 'normal',
      fontSize: 15,
      fontFamily: '"Calibri",sans-serif'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 681,
      columnNumber: 3
    }
  }, __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 681,
      columnNumber: 195
    }
  }, __jsx("span", {
    style: {
      fontFamily: '"Sakkal Majalla"',
      color: 'green'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 681,
      columnNumber: 203
    }
  }, "\u0644\u0644\u062C\u0645\u0639\u064A\u0627\u062A:"))), __jsx("p", {
    dir: "RTL",
    style: {
      marginTop: '0cm',
      marginRight: '0cm',
      marginBottom: '0cm',
      marginLeft: '0cm',
      textAlign: 'right',
      lineHeight: 'normal',
      fontSize: 15,
      fontFamily: '"Calibri",sans-serif'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 682,
      columnNumber: 3
    }
  }, __jsx("span", {
    style: {
      fontFamily: '"Sakkal Majalla"'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 682,
      columnNumber: 195
    }
  }, "1. \u0623\u0646 \u062A\u0643\u0648\u0646 \u0627\u0644\u062C\u0645\u0639\u064A\u0629 \u0645\u0633\u062C\u0644\u0629 \u0631\u0633\u0645\u064A\u0627\u064B \u0641\u064A \u0627\u0644\u0648\u0632\u0627\u0631\u0629 \u0628\u062A\u0635\u0631\u064A\u062D \u0633\u0627\u0631\u064A \u0627\u0644\u0645\u0641\u0639\u0648\u0644.")), __jsx("p", {
    dir: "RTL",
    style: {
      marginTop: '0cm',
      marginRight: '0cm',
      marginBottom: '0cm',
      marginLeft: '0cm',
      textAlign: 'right',
      lineHeight: 'normal',
      fontSize: 15,
      fontFamily: '"Calibri",sans-serif'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 683,
      columnNumber: 3
    }
  }, __jsx("span", {
    style: {
      fontFamily: '"Sakkal Majalla"'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 683,
      columnNumber: 195
    }
  }, "2. \u0623\u0646 \u062A\u0643\u0648\u0646 \u0627\u0644\u062C\u0645\u0639\u064A\u0629 \u0645\u062A\u062E\u0635\u0635\u0629 \u0641\u064A \u0645\u062C\u0627\u0644 \u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u0625\u063A\u0627\u062B\u064A.")), __jsx("p", {
    dir: "RTL",
    style: {
      marginTop: '0cm',
      marginRight: '0cm',
      marginBottom: '0cm',
      marginLeft: '0cm',
      textAlign: 'right',
      lineHeight: 'normal',
      fontSize: 15,
      fontFamily: '"Calibri",sans-serif'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 684,
      columnNumber: 3
    }
  }, __jsx("span", {
    style: {
      fontFamily: '"Sakkal Majalla"'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 684,
      columnNumber: 195
    }
  }, "\xA0")), __jsx("p", {
    dir: "RTL",
    style: {
      marginTop: '0cm',
      marginRight: '0cm',
      marginBottom: '0cm',
      marginLeft: '0cm',
      textAlign: 'right',
      lineHeight: 'normal',
      fontSize: 15,
      fontFamily: '"Calibri",sans-serif'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 685,
      columnNumber: 3
    }
  }, __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 685,
      columnNumber: 195
    }
  }, __jsx("span", {
    style: {
      fontFamily: '"Sakkal Majalla"',
      color: 'green'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 685,
      columnNumber: 203
    }
  }, "\u0644\u0644\u0623\u0641\u0631\u0627\u062F:"))), __jsx("p", {
    dir: "RTL",
    style: {
      marginTop: '0cm',
      marginRight: '0cm',
      marginBottom: '0cm',
      marginLeft: '0cm',
      textAlign: 'right',
      lineHeight: 'normal',
      fontSize: 15,
      fontFamily: '"Calibri",sans-serif'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 686,
      columnNumber: 3
    }
  }, __jsx("span", {
    style: {
      fontFamily: '"Sakkal Majalla"'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 686,
      columnNumber: 195
    }
  }, "1. \u0623\u0646 \u064A\u0643\u0648\u0646 \u0644\u0644\u0641\u0631\u062F \u0625\u062B\u0628\u0627\u062A \u0647\u0648\u064A\u0629 \u0631\u0633\u0645\u064A\u0629 \u0623\u0648 \u0625\u0642\u0627\u0645\u0629 \u0633\u0627\u0631\u064A\u0629 \u0627\u0644\u0645\u0641\u0639\u0648\u0644.")), __jsx("p", {
    dir: "RTL",
    style: {
      marginTop: '0cm',
      marginRight: '0cm',
      marginBottom: '0cm',
      marginLeft: '0cm',
      textAlign: 'right',
      lineHeight: 'normal',
      fontSize: 15,
      fontFamily: '"Calibri",sans-serif'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 687,
      columnNumber: 3
    }
  }, __jsx("span", {
    style: {
      fontFamily: '"Sakkal Majalla"'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 687,
      columnNumber: 195
    }
  }, "2. \u0627\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u062A\u0641\u0648\u064A\u0636 \u0631\u0633\u0645\u064A \u0645\u0646 \u062C\u0645\u0639\u064A\u0629 \u062E\u064A\u0631\u064A\u0629 \u0645\u0633\u062C\u0644\u0629 \u0631\u0633\u0645\u064A\u0627\u064B."))))), __jsx("div", {
    className: "accordion-item wow fadeInRight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 695,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "accordion-trigger",
    id: "headingEight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 696,
      columnNumber: 19
    }
  }, __jsx("button", {
    className: "btn collapsed",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#collapse7",
    "aria-expanded": "false",
    "aria-controls": "collapse7",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 697,
      columnNumber: 21
    }
  }, "10. \u0647\u0644 \u062A\u0633\u062A\u0642\u0628\u0644 (\u0645\u0646\u0635\u0629 \u0631\u0628\u0648\u0629) \u062A\u0628\u0631\u0639\u0627\u062A \u0645\u0627\u062F\u064A\u0629 \u0623\u0648 \u0639\u064A\u0646\u064A\u0629\u061F")), __jsx("div", {
    id: "collapse7",
    className: "collapse",
    "aria-labelledby": "headingEight",
    "data-parent": "#accordionFAQ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 708,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "accordion-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 714,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 715,
      columnNumber: 23
    }
  }, "10. \u0644\u0627 \u062A\u0633\u062A\u0642\u0628\u0644 (\u0645\u0646\u0635\u0629 \u0631\u0628\u0648\u0629) \u0623\u064A \u062A\u0628\u0631\u0639\u0627\u062A \u0645\u0646 \u0623\u064A \u0646\u0648\u0639 \u0643\u0627\u0646 \u0648\u0644\u0627 \u062A\u0645\u062A\u0644\u0643 \u062D\u0633\u0627\u0628\u0627\u064B \u0628\u0646\u0643\u064A\u0627\u064B \u062E\u0627\u0635 \u0628\u0647\u0627 \u0648\u0625\u0646\u0645\u0627 \u064A\u0642\u062A\u0635\u0631 \u062F\u0648\u0631\u0647\u0627 \u0639\u0644\u0649 \u062A\u062C\u0633\u064A\u0631 \u0627\u0644\u0623\u062F\u0648\u0627\u0631 \u0628\u064A\u0646 \u0627\u0644\u0645\u062D\u062A\u0627\u062C\u064A\u0646 \u0648\u0627\u0644\u062C\u0645\u0639\u064A\u0627\u062A \u0648\u0627\u0644\u0634\u0631\u0643\u0627\u062A.")))), __jsx("div", {
    className: "accordion-item wow fadeInRight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 726,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "accordion-trigger",
    id: "headingEight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 727,
      columnNumber: 19
    }
  }, __jsx("button", {
    className: "btn collapsed",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#collapse8",
    "aria-expanded": "false",
    "aria-controls": "collapse8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 728,
      columnNumber: 21
    }
  }, "11. \u0645\u0627 \u0645\u0635\u064A\u0631 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062A\u064A \u064A\u062A\u0645 \u062A\u0633\u062C\u064A\u0644\u0647\u0627 \u0633\u0648\u0627\u0621 \u0644\u0644\u0645\u0633\u062A\u0641\u064A\u062F \u0623\u0648 \u0644\u0644\u062C\u0645\u0639\u064A\u0629 \u0623\u0648 \u0644\u0644\u0634\u0631\u0643\u0629.")), __jsx("div", {
    id: "collapse8",
    className: "collapse",
    "aria-labelledby": "headingEight",
    "data-parent": "#accordionFAQ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 739,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "accordion-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 745,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 746,
      columnNumber: 23
    }
  }, "11. \u062A\u0636\u0645\u0646 (\u0645\u0646\u0635\u0629 \u0631\u0628\u0648\u0629) \u0633\u0631\u064A\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0633\u062C\u0644\u0629 \u0644\u062C\u0645\u064A\u0639 \u0623\u0646\u0648\u0627\u0639 \u0627\u0644\u062D\u0633\u0627\u0628\u0627\u062A")))), __jsx("div", {
    className: "accordion-item wow fadeInRight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 756,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "accordion-trigger",
    id: "headingEight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 757,
      columnNumber: 19
    }
  }, __jsx("button", {
    className: "btn collapsed",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#collapse9",
    "aria-expanded": "false",
    "aria-controls": "collapse9",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 758,
      columnNumber: 21
    }
  }, "12. \u0647\u0644 \u064A\u0645\u0643\u0646 \u0644\u0644\u0634\u0631\u0643\u0629 \u0623\u0648 \u0627\u0644\u062C\u0645\u0639\u064A\u0629 \u0627\u0644\u0627\u062D\u062A\u0641\u0627\u0638 \u0628\u0646\u0633\u062E\u0629 \u0645\u0646 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0647\u0627\u061F")), __jsx("div", {
    id: "collapse9",
    className: "collapse",
    "aria-labelledby": "headingEight",
    "data-parent": "#accordionFAQ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 769,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "accordion-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 775,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 776,
      columnNumber: 23
    }
  }, "12. \u0646\u0639\u0645 \u064A\u0645\u0643\u0646 \u0644\u0644\u0634\u0631\u0643\u0629 \u0648\u0643\u0630\u0644\u0643 \u0627\u0644\u062C\u0645\u0639\u064A\u0629 \u0627\u0644\u0627\u062D\u062A\u0641\u0627\u0638 \u0628\u0646\u0633\u062E\u0629 \u0645\u0646 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0647\u0627.")))), __jsx("div", {
    className: "accordion-item wow fadeInRight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 787,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "accordion-trigger",
    id: "headingEight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 788,
      columnNumber: 19
    }
  }, __jsx("button", {
    className: "btn collapsed",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#collapse10",
    "aria-expanded": "false",
    "aria-controls": "collapse10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 789,
      columnNumber: 21
    }
  }, "13. \u0645\u0627 \u0647\u064A \u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u0628\u062D\u062B \u0648\u0627\u0644\u062A\u0623\u0643\u062F \u0645\u0646 \u0635\u062D\u0629 \u062D\u0627\u0644\u0629 \u0627\u0644\u0645\u0633\u062A\u0641\u064A\u062F \u0648\u0647\u0644 \u0647\u0648 \u0645\u062D\u062A\u0627\u062C \u0641\u0639\u0644\u0627\u064B \u0623\u0648 \u0644\u0627\u061F")), __jsx("div", {
    id: "collapse10",
    className: "collapse",
    "aria-labelledby": "headingEight",
    "data-parent": "#accordionFAQ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 800,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "accordion-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 806,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 807,
      columnNumber: 23
    }
  }, "13. \u0645\u0646 \u064A\u0642\u0648\u0645 \u0628\u062F\u0648\u0631 \u0627\u0644\u0628\u0627\u062D\u062B \u0641\u064A (\u0645\u0646\u0635\u0629 \u0631\u0628\u0648\u0629) \u0647\u0645 \u0627\u0644\u062C\u0645\u0639\u064A\u0627\u062A \u0623\u0648 \u0627\u0644\u0628\u0627\u062D\u062B\u0648\u0646 \u0627\u0644\u0645\u062A\u0637\u0648\u0639\u0648\u0646 \u0645\u0646 \u062C\u0647\u0627\u062A \u0631\u0633\u0645\u064A\u0629 \u0648\u0647\u0645 \u0645\u062A\u0645\u0631\u0633\u0648\u0646 \u0639\u0644\u0649 \u0647\u0630\u0627 \u0627\u0644\u0639\u0645\u0644 \u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0623\u0646\u0646\u0627 \u0641\u064A (\u0645\u0646\u0635\u0629 \u0631\u0628\u0648\u0629) \u0646\u0648\u0641\u0631 \u0644\u0647\u0645 \u0646\u0645\u0627\u0630\u062C \u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0629 \u0644\u0644\u062A\u062D\u0642\u0642 \u0648\u0627\u0644\u062A\u0623\u0643\u062F \u0645\u0646 \u0635\u062D\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0633\u062C\u0644\u0629 \u0645\u0646 \u062C\u0647\u0629 \u0627\u0644\u0645\u0633\u062A\u0641\u064A\u062F \u2013 \u0627\u0644\u0645\u062D\u062A\u0627\u062C - \u0645\u0639 \u062A\u0635\u0646\u064A\u0641 \u0645\u0633\u062A\u0648\u0649 \u0648\u0646\u0648\u0639 \u0627\u0644\u0627\u062D\u062A\u064A\u0627\u062C.")))), __jsx("div", {
    className: "accordion-item wow fadeInRight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 817,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "accordion-trigger",
    id: "headingEight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 818,
      columnNumber: 19
    }
  }, __jsx("button", {
    className: "btn collapsed",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#collapse11",
    "aria-expanded": "false",
    "aria-controls": "collapse11",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 819,
      columnNumber: 21
    }
  }, "14. \u0645\u0627 \u0647\u064A \u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u062A\u0633\u062C\u064A\u0644 \u0641\u064A \u0627\u0644\u0645\u0646\u0635\u0629\u061F")), __jsx("div", {
    id: "collapse11",
    className: "collapse",
    "aria-labelledby": "headingEight",
    "data-parent": "#accordionFAQ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 830,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "accordion-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 836,
      columnNumber: 21
    }
  }, __jsx("p", {
    dir: "RTL",
    style: {
      marginTop: '0cm',
      marginRight: '0cm',
      marginBottom: '0cm',
      marginLeft: '0cm',
      textAlign: 'right',
      lineHeight: 'normal',
      fontSize: 15,
      fontFamily: '"Calibri",sans-serif'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 837,
      columnNumber: 21
    }
  }, __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 837,
      columnNumber: 213
    }
  }, __jsx("span", {
    style: {
      fontSize: 19,
      fontFamily: '"Sakkal Majalla"',
      color: '#0033CC'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 837,
      columnNumber: 221
    }
  }, "- \u0644\u0644\u0645\u0633\u062A\u0641\u064A\u062F:"))), __jsx("p", {
    dir: "RTL",
    style: {
      marginTop: '0cm',
      marginRight: '0cm',
      marginBottom: '0cm',
      marginLeft: '0cm',
      textAlign: 'right',
      lineHeight: 'normal',
      fontSize: 15,
      fontFamily: '"Calibri",sans-serif'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 838,
      columnNumber: 3
    }
  }, __jsx("span", {
    style: {
      fontFamily: '"Sakkal Majalla"'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 838,
      columnNumber: 195
    }
  }, "1. \u0628\u0639\u062F \u0642\u0631\u0627\u0621\u062A\u0643 \u0644\u0634\u0631\u0648\u0637 \u0627\u0644\u0627\u0646\u0636\u0645\u0627\u0645 \u0644\u0645\u0646\u0635\u0629 \u0631\u0628\u0648\u0629 \u0643\u0645\u0633\u062A\u0641\u064A\u062F \u0642\u0645 \u0628\u0627\u062E\u062A\u064A\u0627\u0631 (\u0625\u0646\u0634\u0627\u0621 \u062D\u0633\u0627\u0628 \u062C\u062F\u064A\u062F).")), __jsx("p", {
    dir: "RTL",
    style: {
      marginTop: '0cm',
      marginRight: '0cm',
      marginBottom: '0cm',
      marginLeft: '0cm',
      textAlign: 'right',
      lineHeight: 'normal',
      fontSize: 15,
      fontFamily: '"Calibri",sans-serif'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 839,
      columnNumber: 3
    }
  }, __jsx("span", {
    style: {
      fontFamily: '"Sakkal Majalla"'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 839,
      columnNumber: 195
    }
  }, "2. \u0633\u064A\u062A\u0645 \u062F\u0631\u0627\u0633\u0629 \u0637\u0644\u0628 \u0627\u0646\u0636\u0645\u0627\u0645\u0643 \u0644\u0644\u0645\u0646\u0635\u0629 \u0643\u0645\u0633\u062A\u0641\u064A\u062F \u0645\u0646 \u0627\u0644\u062A\u0628\u0631\u0639\u0627\u062A \u0648\u0627\u0644\u062E\u0635\u0648\u0645\u0627\u062A \u0648\u0627\u0644\u0631\u062F \u0639\u0644\u064A\u0643 \u0628\u0631\u0633\u0627\u0644\u0629\xA0"), __jsx("span", {
    dir: "LTR",
    style: {
      fontFamily: '"Sakkal Majalla"'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 839,
      columnNumber: 335
    }
  }, "SMS"), __jsx("span", {
    style: {
      fontFamily: '"Sakkal Majalla"'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 839,
      columnNumber: 402
    }
  }, ".")), __jsx("p", {
    dir: "RTL",
    style: {
      marginTop: '0cm',
      marginRight: '0cm',
      marginBottom: '0cm',
      marginLeft: '0cm',
      textAlign: 'right',
      lineHeight: 'normal',
      fontSize: 15,
      fontFamily: '"Calibri",sans-serif'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 840,
      columnNumber: 3
    }
  }, __jsx("span", {
    style: {
      fontFamily: '"Sakkal Majalla"'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 840,
      columnNumber: 195
    }
  }, "3. \u0633\u064A\u062A\u0645 \u062F\u0631\u0627\u0633\u0629 \u062D\u0627\u0644\u062A\u0643 \u0645\u0646 \u0642\u0628\u0644 \u0627\u0644\u0628\u0627\u062D\u062B \u0627\u0644\u0645\u062E\u062A\u0635.")), __jsx("p", {
    dir: "RTL",
    style: {
      marginTop: '0cm',
      marginRight: '0cm',
      marginBottom: '0cm',
      marginLeft: '0cm',
      textAlign: 'right',
      lineHeight: 'normal',
      fontSize: 15,
      fontFamily: '"Calibri",sans-serif'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 841,
      columnNumber: 3
    }
  }, __jsx("span", {
    style: {
      fontFamily: '"Sakkal Majalla"'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 841,
      columnNumber: 195
    }
  }, "5. \u0641\u064A \u062D\u0627\u0644\u0629 \u0642\u0628\u0648\u0644\u0643 \u0633\u064A\u0645\u0643\u0646\u0643 \u0627\u0644\u062F\u062E\u0648\u0644 \u0645\u0646 \u062E\u0644\u0627\u0644 \u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0644 \u0648\u0633\u064A\u062A\u0645 \u0625\u0631\u0633\u0627\u0644 \u0631\u0645\u0632 \u0627\u0644\u062F\u062E\u0648\u0644 \u0623\u064A\u0636\u0627\u064B \u0645\u0646 \u062E\u0644\u0627\u0644 \u0631\u0633\u0627\u0644\u0629\xA0"), __jsx("span", {
    dir: "LTR",
    style: {
      fontFamily: '"Sakkal Majalla"'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 841,
      columnNumber: 347
    }
  }, "SMS"), __jsx("span", {
    style: {
      fontFamily: '"Sakkal Majalla"'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 841,
      columnNumber: 414
    }
  }, ".")), __jsx("p", {
    dir: "RTL",
    style: {
      marginTop: '0cm',
      marginRight: '0cm',
      marginBottom: '0cm',
      marginLeft: '0cm',
      textAlign: 'right',
      lineHeight: 'normal',
      fontSize: 15,
      fontFamily: '"Calibri",sans-serif'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 842,
      columnNumber: 3
    }
  }, __jsx("span", {
    style: {
      fontFamily: '"Sakkal Majalla"'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 842,
      columnNumber: 195
    }
  }, "6. \u0642\u0645 \u0628\u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u062A\u064A \u062A\u062D\u062A\u0627\u062C\u0647\u0627.")), __jsx("p", {
    dir: "RTL",
    style: {
      marginTop: '0cm',
      marginRight: '0cm',
      marginBottom: '0cm',
      marginLeft: '0cm',
      textAlign: 'right',
      lineHeight: 'normal',
      fontSize: 15,
      fontFamily: '"Calibri",sans-serif'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 843,
      columnNumber: 3
    }
  }, __jsx("span", {
    style: {
      fontFamily: '"Sakkal Majalla"'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 843,
      columnNumber: 195
    }
  }, "7. \u0633\u062A\u0642\u0648\u0645 \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u0646\u0635\u0629 \u0628\u0625\u064A\u0635\u0627\u0644 \u0637\u0644\u0628\u0643 \u0625\u0644\u0649 \u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0627\u0644\u0645\u0633\u062C\u0644\u0629 \u0644\u062F\u064A\u0647\u0627.")), __jsx("p", {
    dir: "RTL",
    style: {
      marginTop: '0cm',
      marginRight: '0cm',
      marginBottom: '0cm',
      marginLeft: '0cm',
      textAlign: 'right',
      lineHeight: 'normal',
      fontSize: 15,
      fontFamily: '"Calibri",sans-serif'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 844,
      columnNumber: 3
    }
  }, __jsx("span", {
    style: {
      fontFamily: '"Sakkal Majalla"'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 844,
      columnNumber: 195
    }
  }, "8. \u0641\u064A \u062D\u0627\u0644 \u0631\u063A\u0628\u0629 \u0625\u062D\u062F\u0649 \u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0628\u062A\u0644\u0628\u064A\u0629 \u0627\u062D\u062A\u064A\u0627\u062C\u0627\u062A\u0643 \u0633\u064A\u062A\u0645 \u0625\u0631\u0633\u0627\u0644 \u0631\u0633\u0627\u0644\u0629 \u0625\u0644\u064A\u0643 \u062A\u0641\u064A\u062F\u0643 \u0628\u0627\u0644\u0627\u062D\u062A\u064A\u0627\u062C\u0627\u062A \u0627\u0644\u062A\u064A \u062A\u0645 \u062A\u0623\u0645\u064A\u0646\u0647\u0627 \u0645\u0639 \u0639\u0646\u0627\u0648\u064A\u0646 \u0627\u0644\u0634\u0631\u0643\u0629.")), __jsx("p", {
    dir: "RTL",
    style: {
      marginTop: '0cm',
      marginRight: '0cm',
      marginBottom: '0cm',
      marginLeft: '0cm',
      textAlign: 'right',
      lineHeight: 'normal',
      fontSize: 15,
      fontFamily: '"Calibri",sans-serif'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 845,
      columnNumber: 3
    }
  }, __jsx("span", {
    style: {
      fontFamily: '"Sakkal Majalla"'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 845,
      columnNumber: 195
    }
  }, "9. \u064A\u0645\u0643\u0646\u0643 \u0628\u0639\u062F\u0647\u0627 \u0627\u0644\u0630\u0647\u0627\u0628 \u0625\u0644\u0649 \u0641\u0631\u0648\u0639 \u0627\u0644\u0634\u0631\u0643\u0629 \u0627\u0644\u0645\u0639\u062A\u0645\u062F\u0629 \u0644\u0634\u0631\u0627\u0621 \u0637\u0644\u0628\u0643 \u0628\u0646\u0633\u0628\u0629 \u062E\u0635\u0645 \u0623\u0648 \u0627\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u064A\u0647 \u0645\u062C\u0627\u0646\u0627\u064B.")), __jsx("p", {
    dir: "RTL",
    style: {
      marginTop: '0cm',
      marginRight: '0cm',
      marginBottom: '0cm',
      marginLeft: '0cm',
      textAlign: 'right',
      lineHeight: 'normal',
      fontSize: 15,
      fontFamily: '"Calibri",sans-serif'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 846,
      columnNumber: 3
    }
  }, __jsx("span", {
    style: {
      fontFamily: '"Sakkal Majalla"'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 846,
      columnNumber: 195
    }
  }, "10. \u064A\u062C\u062F\u0631 \u0627\u0644\u0625\u0634\u0627\u0631\u0629 \u0625\u0644\u0649 \u0623\u0646 \u0645\u0646\u0635\u0629 \u0631\u0628\u0648\u0629 \u062A\u0642\u062F\u0645 \u062E\u062F\u0645\u0627\u062A\u0647\u0627 \u0645\u062C\u0627\u0646\u0627\u064B \u0648\u0644\u0627 \u064A\u0648\u062C\u062F \u0644\u0647\u0627 \u0623\u064A \u062D\u0633\u0627\u0628 \u0628\u0646\u0643\u064A \u0644\u0627\u0633\u062A\u0642\u0628\u0627\u0644 \u0623\u064A \u0646\u0648\u0639 \u0645\u0646 \u0627\u0644\u062A\u0628\u0631\u0639\u0627\u062A.")), __jsx("p", {
    dir: "RTL",
    style: {
      marginTop: '0cm',
      marginRight: '0cm',
      marginBottom: '0cm',
      marginLeft: '0cm',
      textAlign: 'right',
      lineHeight: 'normal',
      fontSize: 15,
      fontFamily: '"Calibri",sans-serif'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 847,
      columnNumber: 3
    }
  }, __jsx("span", {
    style: {
      fontFamily: '"Sakkal Majalla"'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 847,
      columnNumber: 195
    }
  }, "\xA0")), __jsx("p", {
    dir: "RTL",
    style: {
      marginTop: '0cm',
      marginRight: '0cm',
      marginBottom: '0cm',
      marginLeft: '0cm',
      textAlign: 'right',
      lineHeight: 'normal',
      fontSize: 15,
      fontFamily: '"Calibri",sans-serif'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 848,
      columnNumber: 3
    }
  }, __jsx("span", {
    style: {
      fontFamily: '"Sakkal Majalla"'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 848,
      columnNumber: 195
    }
  }, "\xA0")), __jsx("p", {
    dir: "RTL",
    style: {
      marginTop: '0cm',
      marginRight: '0cm',
      marginBottom: '0cm',
      marginLeft: '0cm',
      textAlign: 'right',
      lineHeight: 'normal',
      fontSize: 15,
      fontFamily: '"Calibri",sans-serif'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 849,
      columnNumber: 3
    }
  }, __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 849,
      columnNumber: 195
    }
  }, __jsx("span", {
    style: {
      fontSize: 19,
      fontFamily: '"Sakkal Majalla"',
      color: '#0033CC'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 849,
      columnNumber: 203
    }
  }, "- \u0644\u0644\u0634\u0631\u0643\u0627\u062A:"))), __jsx("p", {
    dir: "RTL",
    style: {
      marginTop: '0cm',
      marginRight: '0cm',
      marginBottom: '0cm',
      marginLeft: '0cm',
      textAlign: 'right',
      lineHeight: 'normal',
      fontSize: 15,
      fontFamily: '"Calibri",sans-serif'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 850,
      columnNumber: 3
    }
  }, __jsx("span", {
    style: {
      fontFamily: '"Sakkal Majalla"'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 850,
      columnNumber: 195
    }
  }, "1. \u0628\u0639\u062F \u0642\u0631\u0627\u0621\u062A\u0643 \u0644\u0634\u0631\u0648\u0637 \u0627\u0644\u0627\u0646\u0636\u0645\u0627\u0645 \u0644\u0645\u0646\u0635\u0629 \u0631\u0628\u0648\u0629 \u0643\u0634\u0631\u064A\u0643 \u0642\u0645 \u0628\u0627\u062E\u062A\u064A\u0627\u0631 \u0625\u0646\u0634\u0627\u0621 \u062D\u0633\u0627\u0628 \u062C\u062F\u064A\u062F.")), __jsx("p", {
    dir: "RTL",
    style: {
      marginTop: '0cm',
      marginRight: '0cm',
      marginBottom: '0cm',
      marginLeft: '0cm',
      textAlign: 'right',
      lineHeight: 'normal',
      fontSize: 15,
      fontFamily: '"Calibri",sans-serif'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 851,
      columnNumber: 3
    }
  }, __jsx("span", {
    style: {
      fontFamily: '"Sakkal Majalla"'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 851,
      columnNumber: 195
    }
  }, "2. \u0633\u064A\u062A\u0645 \u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0643\u0645 \u0645\u0646 \u0642\u0628\u0644 \u0645\u0646\u062F\u0648\u0628 \u0627\u0644\u0645\u0646\u0635\u0629 \u0644\u0627\u0633\u062A\u0643\u0645\u0627\u0644 \u0628\u0627\u0642\u064A \u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0648\u0627\u0644\u062A\u0646\u0633\u064A\u0642\u0627\u062A.")), __jsx("p", {
    dir: "RTL",
    style: {
      marginTop: '0cm',
      marginRight: '0cm',
      marginBottom: '0cm',
      marginLeft: '0cm',
      textAlign: 'right',
      lineHeight: 'normal',
      fontSize: 15,
      fontFamily: '"Calibri",sans-serif'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 852,
      columnNumber: 3
    }
  }, __jsx("span", {
    style: {
      fontFamily: '"Sakkal Majalla"'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 852,
      columnNumber: 195
    }
  }, "3. \u064A\u062C\u062F\u0631 \u0627\u0644\u0625\u0634\u0627\u0631\u0629 \u0625\u0644\u0649 \u0623\u0646 \u0645\u0646\u0635\u0629 \u0631\u0628\u0648\u0629 \u062A\u0642\u062F\u0645 \u062E\u062F\u0645\u0627\u062A\u0647\u0627 \u0645\u062C\u0627\u0646\u0627\u064B \u0648\u0644\u0627 \u064A\u0648\u062C\u062F \u0644\u0647\u0627 \u0623\u064A \u062D\u0633\u0627\u0628 \u0628\u0646\u0643\u064A \u0644\u0627\u0633\u062A\u0642\u0628\u0627\u0644 \u0623\u064A \u0646\u0648\u0639 \u0645\u0646 \u0627\u0644\u062A\u0628\u0631\u0639\u0627\u062A.")), __jsx("p", {
    dir: "RTL",
    style: {
      marginTop: '0cm',
      marginRight: '0cm',
      marginBottom: '0cm',
      marginLeft: '0cm',
      textAlign: 'right',
      lineHeight: 'normal',
      fontSize: 15,
      fontFamily: '"Calibri",sans-serif'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 853,
      columnNumber: 3
    }
  }, __jsx("span", {
    style: {
      fontFamily: '"Sakkal Majalla"'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 853,
      columnNumber: 195
    }
  }, "\xA0")), __jsx("p", {
    dir: "RTL",
    style: {
      marginTop: '0cm',
      marginRight: '0cm',
      marginBottom: '0cm',
      marginLeft: '0cm',
      textAlign: 'right',
      lineHeight: 'normal',
      fontSize: 15,
      fontFamily: '"Calibri",sans-serif'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 854,
      columnNumber: 3
    }
  }, __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 854,
      columnNumber: 195
    }
  }, __jsx("span", {
    style: {
      fontSize: 19,
      fontFamily: '"Sakkal Majalla"',
      color: '#0033CC'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 854,
      columnNumber: 203
    }
  }, "- \u0644\u0633\u0641\u0631\u0627\u0621 \u0627\u0644\u0645\u0646\u0635\u0629 (\u0623\u0641\u0631\u0627\u062F) \u0623\u0648 (\u062C\u0645\u0639\u064A\u0627\u062A):"))), __jsx("p", {
    dir: "RTL",
    style: {
      marginTop: '0cm',
      marginRight: '0cm',
      marginBottom: '0cm',
      marginLeft: '0cm',
      textAlign: 'right',
      lineHeight: 'normal',
      fontSize: 15,
      fontFamily: '"Calibri",sans-serif'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 855,
      columnNumber: 3
    }
  }, __jsx("span", {
    style: {
      fontFamily: '"Sakkal Majalla"'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 855,
      columnNumber: 195
    }
  }, "1. \u0628\u0639\u062F \u0642\u0631\u0627\u0621\u062A\u0643 \u0644\u0634\u0631\u0648\u0637 \u0627\u0644\u0627\u0646\u0636\u0645\u0627\u0645 \u0644\u0645\u0646\u0635\u0629 \u0631\u0628\u0648\u0629 \u0643\u0633\u0641\u064A\u0631 \u0642\u0645 \u0628\u0627\u062E\u062A\u064A\u0627\u0631 \u0625\u0646\u0634\u0627\u0621 \u062D\u0633\u0627\u0628 \u062C\u062F\u064A\u062F.")), __jsx("p", {
    dir: "RTL",
    style: {
      marginTop: '0cm',
      marginRight: '0cm',
      marginBottom: '0cm',
      marginLeft: '0cm',
      textAlign: 'right',
      lineHeight: 'normal',
      fontSize: 15,
      fontFamily: '"Calibri",sans-serif'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 856,
      columnNumber: 3
    }
  }, __jsx("span", {
    style: {
      fontFamily: '"Sakkal Majalla"'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 856,
      columnNumber: 195
    }
  }, "2. \u0633\u064A\u062A\u0645 \u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0643\u0645 \u0645\u0646 \u0642\u0628\u0644 \u0645\u0646\u062F\u0648\u0628 \u0627\u0644\u0645\u0646\u0635\u0629 \u0644\u0627\u0633\u062A\u0643\u0645\u0627\u0644 \u0628\u0627\u0642\u064A \u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0648\u0627\u0644\u062A\u0646\u0633\u064A\u0642\u0627\u062A.")), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 857,
      columnNumber: 3
    }
  }, __jsx("span", {
    dir: "RTL",
    style: {
      fontSize: 15,
      lineHeight: '107%',
      fontFamily: '"Sakkal Majalla"'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 857,
      columnNumber: 6
    }
  }, "3. \u064A\u062C\u062F\u0631 \u0627\u0644\u0625\u0634\u0627\u0631\u0629 \u0625\u0644\u0649 \u0623\u0646 \u0645\u0646\u0635\u0629 \u0631\u0628\u0648\u0629 \u062A\u0642\u062F\u0645 \u062E\u062F\u0645\u0627\u062A\u0647\u0627 \u0645\u062C\u0627\u0646\u0627\u064B \u0648\u0644\u0627 \u064A\u0648\u062C\u062F \u0644\u0647\u0627 \u0623\u064A \u062D\u0633\u0627\u0628 \u0628\u0646\u0643\u064A \u0644\u0627\u0633\u062A\u0642\u0628\u0627\u0644 \u0623\u064A \u0646\u0648\u0639 \u0645\u0646 \u0627\u0644\u062A\u0628\u0631\u0639\u0627\u062A."))))), __jsx("div", {
    className: "accordion-item wow fadeInRight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 866,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "accordion-trigger",
    id: "headingEight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 867,
      columnNumber: 19
    }
  }, __jsx("button", {
    className: "btn collapsed",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#collapse12",
    "aria-expanded": "false",
    "aria-controls": "collapse12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 868,
      columnNumber: 21
    }
  }, "15. \u0645\u0627 \u0646\u0648\u0639 \u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u062A\u064A \u064A\u0645\u0643\u0646 \u0644\u0644\u0645\u0633\u062A\u0641\u064A\u062F \u0623\u0646 \u064A\u062D\u0635\u0644 \u0639\u0644\u064A\u0647\u0627\u061F")), __jsx("div", {
    id: "collapse12",
    className: "collapse",
    "aria-labelledby": "headingEight",
    "data-parent": "#accordionFAQ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 879,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "accordion-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 885,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 886,
      columnNumber: 23
    }
  }, "15. \u062C\u0645\u064A\u0639 \u0623\u0646\u0648\u0627\u0639 \u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0625\u0639\u0627\u0634\u064A\u0629 \u0648\u0627\u0644\u0635\u062D\u064A\u0629 \u0648\u0627\u0644\u0633\u0643\u0646\u064A\u0629 \u0648\u063A\u064A\u0631\u0647\u0627 \u0644\u0643\u0646 \u0630\u0644\u0643 \u064A\u0639\u062A\u0645\u062F \u0639\u0644\u0649 \u0639\u062F\u062F \u0648\u0646\u0648\u0639 \u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0627\u0644\u0645\u0633\u062C\u0644\u0629 \u0641\u064A (\u0645\u0646\u0635\u0629 \u0631\u0628\u0648\u0629).")))), __jsx("div", {
    className: "accordion-item wow fadeInRight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 897,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "accordion-trigger",
    id: "headingEight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 898,
      columnNumber: 19
    }
  }, __jsx("button", {
    className: "btn collapsed",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#collapse13",
    "aria-expanded": "false",
    "aria-controls": "collapse13",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 899,
      columnNumber: 21
    }
  }, "16. \u0645\u062A\u0649 \u064A\u0645\u0643\u0646 \u0644\u0644\u0645\u0633\u062A\u0641\u064A\u062F \u0627\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u0627\u0644\u062A\u0628\u0631\u0639 \u0627\u0644\u0645\u0642\u0631\u0631 \u0644\u0647 \u0645\u0646 \u0627\u0644\u0634\u0631\u0643\u0627\u062A\u061F")), __jsx("div", {
    id: "collapse13",
    className: "collapse",
    "aria-labelledby": "headingEight",
    "data-parent": "#accordionFAQ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 910,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "accordion-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 916,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 917,
      columnNumber: 23
    }
  }, "16. \u0628\u0639\u062F \u0627\u0639\u062A\u0645\u0627\u062F \u0627\u0644\u0645\u0633\u062A\u0641\u064A\u062F \u0641\u064A (\u0645\u0646\u0635\u0629 \u0631\u0628\u0648\u0629) \u0633\u062A\u0642\u0648\u0645 \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u0646\u0635\u0629 \u0628\u0627\u0644\u0628\u062D\u062B \u0639\u0646 \u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0627\u0644\u0631\u0627\u063A\u0628\u0629 \u0641\u064A \u062F\u0639\u0645\u0647 \u0648\u0641\u064A \u062D\u0627\u0644 \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0627\u0644\u0634\u0631\u0643\u0629 \u0627\u0644\u0645\u0646\u0627\u0633\u0628\u0629 \u0633\u062A\u0635\u0644 \u0631\u0633\u0627\u0644\u0629 \u0625\u0644\u0649 \u062C\u0648\u0627\u0644 \u0627\u0644\u0645\u0633\u062A\u0641\u064A\u062F SMS \u062A\u0641\u064A\u062F\u0647 \u0628\u0623\u0646 \u0644\u062F\u064A\u0647 \u0628\u0637\u0627\u0642\u0629 \u062E\u0635\u0645 \u0623\u0648 \u0628\u0637\u0627\u0642\u0629 \u0634\u0631\u0627\u0621 \u0645\u062C\u0627\u0646\u064A \u0645\u0639 \u062A\u0648\u0636\u064A\u062D \u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0627\u0644\u062A\u064A \u062A\u0633\u0645\u062D \u0644\u0647\u0627 \u0628\u0635\u0631\u0641 \u0627\u0644\u0628\u0637\u0627\u0642\u0629 \u0644\u062F\u064A\u0647\u0627.")))), __jsx("div", {
    className: "accordion-item wow fadeInRight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 927,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "accordion-trigger",
    id: "headingEight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 928,
      columnNumber: 19
    }
  }, __jsx("button", {
    className: "btn collapsed",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#collapse14",
    "aria-expanded": "false",
    "aria-controls": "collapse14",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 929,
      columnNumber: 21
    }
  }, "17. \u0645\u0627 \u0647\u064A \u0622\u0644\u064A\u0629 \u0627\u0644\u0627\u0633\u062A\u0641\u0627\u062F\u0629 \u0645\u0646 \u0628\u0637\u0627\u0642\u0629 \u0627\u0644\u062E\u0635\u0645 \u0623\u0648 \u0628\u0637\u0627\u0642\u0629 \u0627\u0644\u0634\u0631\u0627\u0621 \u0627\u0644\u0645\u062C\u0627\u0646\u064A\u0629\u061F")), __jsx("div", {
    id: "collapse14",
    className: "collapse",
    "aria-labelledby": "headingEight",
    "data-parent": "#accordionFAQ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 940,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "accordion-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 946,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 947,
      columnNumber: 23
    }
  }, "17. \u0628\u0639\u062F \u0648\u0635\u0648\u0644 \u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u0627\u0644\u062A\u064A \u062A\u0641\u064A\u062F \u0628\u062A\u0648\u0641\u0631 \u0627\u0644\u0628\u0637\u0627\u0642\u0629 \u0641\u064A \u062D\u0633\u0627\u0628 \u0627\u0644\u0645\u0633\u062A\u0641\u064A\u062F \u064A\u0642\u0648\u0645 \u0627\u0644\u0645\u0633\u062A\u0641\u064A\u062F \u0628\u0627\u0644\u062F\u062E\u0648\u0644 \u0639\u0644\u0649 \u062D\u0633\u0627\u0628\u0647 \u0641\u064A \u062A\u0637\u0628\u064A\u0642 \u0627\u0644\u062C\u0648\u0627\u0644 \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0640 (\u0645\u0646\u0635\u0629 \u0631\u0628\u0648\u0629) \u062B\u0645 \u0634\u0627\u0634\u0629 \u0627\u0644\u0628\u0637\u0627\u0642\u0627\u062A \u0648\u0639\u0646\u062F \u0648\u0635\u0648\u0644\u0647 \u0625\u0644\u0649 \u0627\u0644\u0628\u0627\u0626\u0639 \u064A\u0642\u0648\u0645 \u0628\u0639\u0631\u0636\u0647\u0627 \u0639\u0644\u064A\u0647 \u0648\u0633\u0648\u0641 \u064A\u0642\u0648\u0645 \u0627\u0644\u0628\u0627\u0626\u0639 \u0628\u062A\u0633\u062C\u064A\u0644 \u0631\u0642\u0645 \u0627\u0644\u0628\u0637\u0627\u0642\u0629 \u0648\u0645\u0646\u062D \u0627\u0644\u0645\u0633\u062A\u0641\u064A\u062F \u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A \u0628\u0627\u0644\u062E\u0635\u0645 \u0627\u0644\u0645\u0642\u0631\u0631 \u0623\u0648 \u0645\u062C\u0627\u0646\u0627\u064B (\u062D\u0633\u0628 \u0646\u0648\u0639 \u0627\u0644\u0628\u0637\u0627\u0642\u0629).")))), __jsx("div", {
    className: "accordion-item wow fadeInRight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 957,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "accordion-trigger",
    id: "headingEight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 958,
      columnNumber: 19
    }
  }, __jsx("button", {
    className: "btn collapsed",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#collapse15",
    "aria-expanded": "false",
    "aria-controls": "collapse15",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 959,
      columnNumber: 21
    }
  }, "18. \u0647\u0644 \u064A\u0644\u0632\u0645 \u0627\u0644\u0645\u0633\u062A\u0641\u064A\u062F \u0623\u0646 \u064A\u0642\u0648\u0645 \u0628\u062A\u062D\u0645\u064A\u0644 \u062A\u0637\u0628\u064A\u0642 (\u0645\u0646\u0635\u0629 \u0631\u0628\u0648\u0629) \u0645\u0646 \u0645\u062A\u062C\u0631 \u0627\u0644\u062A\u0637\u0628\u064A\u0642\u0627\u062A\u061F")), __jsx("div", {
    id: "collapse15",
    className: "collapse",
    "aria-labelledby": "headingEight",
    "data-parent": "#accordionFAQ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 970,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "accordion-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 976,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 977,
      columnNumber: 23
    }
  }, "18. \u0647\u0646\u0627\u0643 \u062E\u064A\u0627\u0631\u0627\u0646 \u0644\u0635\u0631\u0641 \u0627\u0644\u0643\u0648\u0628\u0648\u0646\u0627\u062A\u060C \u0625\u0645\u0627 \u0628\u0639\u0631\u0636\u0647\u0627 \u0645\u0646 \u062E\u0644\u0627\u0644 \u062A\u0637\u0628\u064A\u0642 \u0627\u0644\u062C\u0648\u0627\u0644 \u0623\u0648 \u0645\u0646 \u062E\u0644\u0627\u0644 \u0631\u0642\u0645 \u0627\u0644\u0643\u0648\u0628\u0648\u0646 \u0627\u0644\u0645\u0631\u0633\u0644 \u0639\u0628\u0631 \u0631\u0633\u0627\u0626\u0644 \u0627\u0644\u0640 SMS \u0625\u0644\u0649 \u062C\u0648\u0627\u0644 \u0627\u0644\u0645\u0633\u062A\u0641\u064A\u062F.")))), __jsx("div", {
    className: "accordion-item wow fadeInRight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 987,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "accordion-trigger",
    id: "headingEight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 988,
      columnNumber: 19
    }
  }, __jsx("button", {
    className: "btn collapsed",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#collapse16",
    "aria-expanded": "false",
    "aria-controls": "collapse16",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 989,
      columnNumber: 21
    }
  }, "19. \u0645\u0627\u0630\u0627 \u0644\u0648 \u0642\u0627\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0633\u0648\u0627\u0621 \u0643\u0627\u0646 \u0645\u0633\u062A\u0641\u064A\u062F \u0623\u0648 \u0634\u0631\u0643\u0629 \u0623\u0648 \u062C\u0645\u0639\u064A\u0629 \u0623\u0648 \u0633\u0641\u064A\u0631 \u0628\u062A\u063A\u064A\u064A\u0631 \u0631\u0642\u0645 \u062C\u0648\u0627\u0644\u0647 \u0641\u0647\u0644 \u0633\u064A\u062A\u0645\u0643\u0646 \u0645\u0646 \u0627\u0644\u062F\u062E\u0648\u0644 \u0628\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u062C\u062F\u064A\u062F\u061F")), __jsx("div", {
    id: "collapse16",
    className: "collapse",
    "aria-labelledby": "headingEight",
    "data-parent": "#accordionFAQ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1000,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "accordion-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1006,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1007,
      columnNumber: 23
    }
  }, "19. \u0644\u0627 \u0628\u062F \u0623\u0648\u0644\u0627\u064B \u0645\u0646 \u0627\u0644\u062F\u062E\u0648\u0644 \u0628\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0642\u062F\u064A\u0645 \u062B\u0645 \u0627\u062E\u062A\u064A\u0627\u0631 \u062A\u063A\u064A\u064A\u0631 \u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0644 \u0648\u0628\u0639\u062F \u0630\u0644\u0643 \u0633\u064A\u062A\u0645 \u0627\u0639\u062A\u0645\u0627\u062F \u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u062C\u062F\u064A\u062F \u0648\u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u0633\u0627\u0628\u0642.")))), __jsx("div", {
    className: "accordion-item wow fadeInRight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1017,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "accordion-trigger",
    id: "headingEight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1018,
      columnNumber: 19
    }
  }, __jsx("button", {
    className: "btn collapsed",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#collapse17",
    "aria-expanded": "false",
    "aria-controls": "collapse17",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1019,
      columnNumber: 21
    }
  }, "20. \u0647\u0644 \u0647\u0646\u0627\u0643 \u062A\u0627\u0631\u064A\u062E \u0627\u0646\u062A\u0647\u0627\u0621 \u0644\u0635\u0644\u0627\u062D\u064A\u0629 \u0627\u0644\u0628\u0637\u0627\u0642\u0629 \u0627\u0644\u0645\u0631\u0633\u0644\u0629 \u0644\u0644\u0645\u0633\u062A\u0641\u064A\u062F\u061F")), __jsx("div", {
    id: "collapse17",
    className: "collapse",
    "aria-labelledby": "headingEight",
    "data-parent": "#accordionFAQ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1030,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "accordion-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1036,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1037,
      columnNumber: 23
    }
  }, "20. \u0646\u0639\u0645 \u0644\u0643\u0644 \u0628\u0637\u0627\u0642\u0629 \u062A\u0627\u0631\u064A\u062E \u0635\u0644\u0627\u062D\u064A\u0629 \u0648\u0633\u064A\u062A\u0645 \u0625\u0639\u0644\u0627\u0645 \u0627\u0644\u0645\u0633\u062A\u0641\u064A\u062F \u0628\u0642\u0631\u0628 \u0627\u0646\u062A\u0647\u0627\u0621 \u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0629 \u0642\u0628\u0644 \u0627\u0644\u062A\u0627\u0631\u064A\u062E \u0628\u0623\u0633\u0628\u0648\u0639\u060C \u0648\u0641\u064A \u062D\u0627\u0644 \u0627\u0646\u062A\u0647\u062A \u0635\u0644\u0627\u062D\u064A\u0629 \u0627\u0644\u0628\u0637\u0627\u0642\u0629 \u0642\u0628\u0644 \u0627\u0644\u0635\u0631\u0641 \u0641\u0633\u064A\u062A\u0645 \u062A\u062D\u0648\u064A\u0644 \u0627\u0644\u0628\u0637\u0627\u0642\u0629 \u0644\u0645\u0633\u062A\u0641\u064A\u062F \u0622\u062E\u0631.")))), __jsx("div", {
    className: "accordion-item wow fadeInRight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1047,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "accordion-trigger",
    id: "headingEight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1048,
      columnNumber: 19
    }
  }, __jsx("button", {
    className: "btn collapsed",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#collapse18",
    "aria-expanded": "false",
    "aria-controls": "collapse18",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1049,
      columnNumber: 21
    }
  }, "21. \u0625\u0630\u0627 \u0643\u0646\u062A\u064F \u0645\u0646 \u0623\u0635\u062D\u0627\u0628 \u0627\u0644\u062D\u0627\u062C\u0627\u062A \u0648\u0644\u0645 \u062A\u0633\u062C\u064A\u0644\u064A \u0641\u064A \u0623\u064A \u062C\u0645\u0639\u064A\u0629 \u0641\u0647\u0644 \u0645\u0645\u0643\u0646 \u0623\u0633\u062A\u0641\u064A\u062F \u0645\u0646 (\u0645\u0646\u0635\u0629 \u0631\u0628\u0648\u0629)\u061F")), __jsx("div", {
    id: "collapse18",
    className: "collapse",
    "aria-labelledby": "headingEight",
    "data-parent": "#accordionFAQ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1060,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "accordion-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1066,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1067,
      columnNumber: 23
    }
  }, "21. \u0646\u0639\u0645 \u064A\u0645\u0643\u0646\u0643 \u0630\u0644\u0643 \u0645\u0646 \u062E\u0644\u0627\u0644 \u0627\u0644\u062A\u0633\u062C\u064A\u0644 \u0641\u064A (\u0645\u0646\u0635\u0629 \u0631\u0628\u0648\u0629) \u0628\u0639\u062F \u0627\u0633\u062A\u064A\u0641\u0627\u0621\u0643 \u0644\u0644\u0634\u0631\u0648\u0637 \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0627\u0644\u0645\u0633\u062A\u0641\u064A\u062F\u064A\u0646."))))))))), __jsx("div", {
    className: "page-section",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1112,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1113,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "text-center wow fadeIn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1114,
      columnNumber: 11
    }
  }, __jsx("h2", {
    className: "mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1115,
      columnNumber: 13
    }
  }, "Our partners"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1116,
      columnNumber: 13
    }
  }, "Become a ", __jsx("a", {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1117,
      columnNumber: 24
    }
  }, "partners?"))), __jsx("div", {
    className: "row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 justify-content-center align-items-center mt-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1120,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "p-3 wow zoomIn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1121,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "img-place client-img",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1122,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "../assets/img/clients/alter_sport.png",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1123,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "p-3 wow zoomIn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1126,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "img-place client-img",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1127,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "../assets/img/clients/cleaning_service.png",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1128,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "p-3 wow zoomIn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1131,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "img-place client-img",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1132,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "../assets/img/clients/creative_photo.png",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1133,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "p-3 wow zoomIn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1136,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "img-place client-img",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1137,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "../assets/img/clients/global_tv.png",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1138,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "p-3 wow zoomIn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1141,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "img-place client-img",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1142,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "../assets/img/clients/net_sport_tv.png",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1143,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "p-3 wow zoomIn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1146,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "img-place client-img",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1147,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "../assets/img/clients/news_digital_tv.png",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1148,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "p-3 wow zoomIn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1151,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "img-place client-img",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1152,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "../assets/img/clients/spa_beauty.png",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1153,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "p-3 wow zoomIn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1156,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "img-place client-img",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1157,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "../assets/img/clients/trivier_group.png",
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1158,
      columnNumber: 17
    }
  })))))), __jsx("div", {
    className: "page-footer-section bg-dark fg-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1164,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container mb-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1165,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row justify-content-center text-center wow fadeInUp",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1166,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-lg-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1167,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "text-center mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1168,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "../assets/favicon-light.png",
    alt: "",
    height: 80,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1169,
      columnNumber: 17
    }
  }))))), __jsx("div", {
    className: "page-section",
    id: "contact",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1174,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1175,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "row justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1176,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-lg-10 my-3 wow fadeInUp",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1177,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "card-page text-right",
    style: {
      textAlign: "right"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1178,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row row-beam-md",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1182,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "col-md-4 text-center py-3 py-md-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1183,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "mai-location-outline h3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1184,
      columnNumber: 23
    }
  }), __jsx("p", {
    className: "fg-primary fw-medium fs-vlarge",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1185,
      columnNumber: 23
    }
  }, "Location"), __jsx("p", {
    className: "mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1186,
      columnNumber: 23
    }
  }, "3 East Ridgewood Avenue Los Angeles, CA 90022")), __jsx("div", {
    className: "col-md-4 text-center py-3 py-md-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1190,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "mai-call-outline h3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1191,
      columnNumber: 23
    }
  }), __jsx("p", {
    className: "fg-primary fw-medium fs-vlarge",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1192,
      columnNumber: 23
    }
  }, "Contact"), __jsx("p", {
    className: "mb-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1193,
      columnNumber: 23
    }
  }, "+213 908 92034"), __jsx("p", {
    className: "mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1194,
      columnNumber: 23
    }
  }, "+415 123 89245")), __jsx("div", {
    className: "col-md-4 text-center py-3 py-md-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1196,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "mai-mail-open-outline h3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1197,
      columnNumber: 23
    }
  }), __jsx("p", {
    className: "fg-primary fw-medium fs-vlarge",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1198,
      columnNumber: 23
    }
  }, "Email"), __jsx("p", {
    className: "mb-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1199,
      columnNumber: 23
    }
  }, "support@mobster.com"), __jsx("p", {
    className: "mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1200,
      columnNumber: 23
    }
  }, "support@macodeid.com"))))), __jsx("div", {
    className: "col-md-12 col-lg-12 my-3 wow fadeInUp",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1205,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "card-page",
    style: {
      textAlign: "right",
      display: "none"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1206,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "fw-normal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1207,
      columnNumber: 19
    }
  }, "\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627"), __jsx("form", {
    method: "POST",
    className: "mt-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1208,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1209,
      columnNumber: 21
    }
  }, __jsx("label", {
    htmlFor: "name",
    className: "fw-medium fg-grey",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1210,
      columnNumber: 23
    }
  }, "\u0627\u0644\u0625\u0633\u0645"), __jsx("input", {
    type: "text",
    className: "form-control",
    id: "name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1213,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1215,
      columnNumber: 21
    }
  }, __jsx("label", {
    htmlFor: "email",
    className: "fw-medium fg-grey",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1216,
      columnNumber: 23
    }
  }, "\u0627\u0644\u0625\u064A\u0645\u064A\u0644"), __jsx("input", {
    type: "text",
    className: "form-control",
    id: "email",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1219,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1221,
      columnNumber: 21
    }
  }, __jsx("label", {
    htmlFor: "phone",
    className: "fw-medium fg-grey",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1222,
      columnNumber: 23
    }
  }, "\u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0644"), __jsx("input", {
    type: "number",
    className: "form-control",
    id: "phone",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1225,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1231,
      columnNumber: 21
    }
  }, __jsx("label", {
    htmlFor: "message",
    className: "fw-medium fg-grey",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1232,
      columnNumber: 23
    }
  }, "\u0627\u0644\u0631\u0633\u0627\u0644\u0629"), __jsx("textarea", {
    rows: 6,
    className: "form-control",
    id: "message",
    defaultValue: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1235,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "form-group mt-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1242,
      columnNumber: 21
    }
  }, __jsx("button", {
    type: "submit",
    className: "btn btn-primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1243,
      columnNumber: 23
    }
  }, "\u0623\u0631\u0633\u0644 \u0627\u0644\u0631\u0633\u0627\u0644\u0629")))))))), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1253,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

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

/***/ "./services/api_get.js":
/*!*****************************!*\
  !*** ./services/api_get.js ***!
  \*****************************/
/*! exports provided: getCompany, getSponsors, GetFullCCAs, GetAllMandobes, GetC, CompanysStatistic, UserStatistics, GetApproveMandobes, GetApproveuserssM, GetApproveuserss, CompanysStatistics, getUserCards, GetMandobes, Getuserss2, GetMandobUsers, Getuserss, GetCouponsByBracnhCat, GetCouponBranches, GetUserMeta, GetCategories, GetCompanys, GetCategorysByCity, GetCouponsBySection, GetCouponsBybranch, GetCCAs, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCompany", function() { return getCompany; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSponsors", function() { return getSponsors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFullCCAs", function() { return GetFullCCAs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllMandobes", function() { return GetAllMandobes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetC", function() { return GetC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanysStatistic", function() { return CompanysStatistic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserStatistics", function() { return UserStatistics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetApproveMandobes", function() { return GetApproveMandobes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetApproveuserssM", function() { return GetApproveuserssM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetApproveuserss", function() { return GetApproveuserss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanysStatistics", function() { return CompanysStatistics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserCards", function() { return getUserCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetMandobes", function() { return GetMandobes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Getuserss2", function() { return Getuserss2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetMandobUsers", function() { return GetMandobUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Getuserss", function() { return Getuserss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCouponsByBracnhCat", function() { return GetCouponsByBracnhCat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCouponBranches", function() { return GetCouponBranches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserMeta", function() { return GetUserMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCategories", function() { return GetCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCompanys", function() { return GetCompanys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCategorysByCity", function() { return GetCategorysByCity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCouponsBySection", function() { return GetCouponsBySection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCouponsBybranch", function() { return GetCouponsBybranch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCCAs", function() { return GetCCAs; });
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_Api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/Api */ "./services/Api.js");
/* harmony import */ var _contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/auth.js */ "./contexts/auth.js");




function api_get() {// const [tests, settests] = useState();
  // const [showSkeleton, setshowSkeleton] = useState();
}

function getCompany(name) {
  const {
    loading
  } = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    data,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "rabwa/getCompany?name=" + name, _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  };
}
function getSponsors(phone, getType) {
  const {
    loading
  } = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    data,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "rabwa/getSponsors?phone=" + phone + "&getType=" + getType, _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  };
}
function GetFullCCAs(pageup) {
  const {
    loading
  } = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    data,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "rabwa/GetFullCCAs?pageup=" + pageup, _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  };
}
function GetAllMandobes() {
  const {
    loading
  } = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    data,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "rabwa/GetAllMandobes", _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  };
}
function GetC() {
  const {
    loading
  } = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    data,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "rabwa/GetC", _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  };
}
function CompanysStatistic(name) {
  const {
    loading
  } = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    data,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "rabwa/CompanysStatistic?name=" + name, _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  };
}
function UserStatistics(user_id) {
  const {
    loading
  } = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    data,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "rabwa/UserStatistics?user_id=" + user_id, _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
  return {
    UserStatisticsData: data,
    UserStatisticserrorisLoading: !error && !data,
    UserStatisticserrorisError: error
  };
}
function GetApproveMandobes() {
  const {
    loading
  } = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    data,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "rabwa/GetApproveMandobes", _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  };
}
function GetApproveuserssM() {
  const {
    loading
  } = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    data,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "rabwa/GetApproveuserssM", _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  };
}
function GetApproveuserss() {
  const {
    loading
  } = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    data,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "rabwa/GetApproveuserss", _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  };
}
function CompanysStatistics() {
  const {
    loading
  } = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    data,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "rabwa/CompanysStatistics", _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  };
}
function getUserCards(user_id) {
  const {
    loading
  } = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    data,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "rabwa/getUserCards?user_id=" + user_id, _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  };
}
function GetMandobes(request, name, page, Scity, Saera, RsName, RsPhone) {
  if (request == "firstTime") {
    const {
      loading
    } = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    const {
      data,
      error
    } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "rabwa/GetMandobes", _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
    return {
      data: data,
      isLoading: !error && !data,
      isError: error
    };
  } else if (request == "custom") {
    const {
      loading
    } = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    const {
      data,
      error
    } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "rabwa/OrderGetMandobes?page=" + page + "&name=" + name + "&Scity=" + Scity + "&Saera=" + Saera + "&RsName=" + RsName + "&RsPhone=" + RsPhone, _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
    return {
      data: data,
      isLoading: !error && !data,
      isError: error
    };
  }
}
function Getuserss2(request, name, members, last_coubon, total_coubons, piority, page, Scity, Saera, Scat, RsName, RsPhone) {
  if (request == "firstTime") {
    const {
      loading
    } = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    const {
      data,
      error
    } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "rabwa/Getuserss2", _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
    return {
      data: data,
      isLoading: !error && !data,
      isError: error
    };
  } else if (request == "custom") {
    const {
      loading
    } = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    const {
      data,
      error
    } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "rabwa/OrderGetuserss2?page=" + page + "&name=" + name + "&members=" + members + "&last_coubon=" + last_coubon + "&total_coubons=" + total_coubons + "&Scity=" + Scity + "&Saera=" + Saera + "&Scat=" + Scat + "&piority=" + piority + "&RsName=" + RsName + "&RsPhone=" + RsPhone, _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
    return {
      data: data,
      isLoading: !error && !data,
      isError: error
    };
  }
}
function GetMandobUsers(request, name, members, last_coubon, total_coubons, piority, page, Scity, Saera, Scat, RsName, RsPhone, mandobe_id) {
  if (request == "firstTime") {
    const {
      loading
    } = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    const {
      data,
      error
    } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "rabwa/GetMandobUsers?mandobe_id=" + mandobe_id, _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
    return {
      data: data,
      isLoading: !error && !data,
      isError: error
    };
  } else if (request == "custom") {
    const {
      loading
    } = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    const {
      data,
      error
    } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "rabwa/OrderGetMandobUsers?page=" + page + "&name=" + name + "&members=" + members + "&last_coubon=" + last_coubon + "&total_coubons=" + total_coubons + "&Scity=" + Scity + "&Saera=" + Saera + "&Scat=" + Scat + "&piority=" + piority + "&RsName=" + RsName + "&RsPhone=" + RsPhone + "&mandobe_id=" + mandobe_id, _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
    return {
      data: data,
      isLoading: !error && !data,
      isError: error
    };
  }
}
function Getuserss(request, name, members, last_coubon, total_coubons, piority, page, Scity, Saera, Scat, RsName, RsPhone, hide) {
  if (request == "firstTime") {
    const {
      loading
    } = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    const {
      data,
      error
    } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "rabwa/Getuserss", _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
    return {
      data: data,
      isLoading: !error && !data,
      isError: error
    };
  } else if (request == "custom") {
    const {
      loading
    } = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    const {
      data,
      error
    } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "rabwa/OrderGetuserss?page=" + page + "&name=" + name + "&members=" + members + "&last_coubon=" + last_coubon + "&total_coubons=" + total_coubons + "&Scity=" + Scity + "&Saera=" + Saera + "&Scat=" + Scat + "&piority=" + piority + "&RsName=" + RsName + "&RsPhone=" + RsPhone + "&hide=" + hide, _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
    return {
      data: data,
      isLoading: !error && !data,
      isError: error
    };
  }
}
function GetCouponsByBracnhCat(Branchid, Categoryid) {
  const {
    loading
  } = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    data,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "rabwa/GetCouponsByBracnhCat?Branchid=" + Branchid + "&Categoryid=" + Categoryid, _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  };
}
function GetCouponBranches(Section_id) {
  const {
    loading
  } = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    data,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "rabwa/GetCouponBranches?Section_id=" + Section_id, _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
  return {
    CouponBranches: data,
    CouponBranchesisLoading: !error && !data,
    CouponBranchesisError: error
  };
}
function GetUserMeta(TheUser_id) {
  const {
    loading
  } = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    data,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "rabwa/GetUserMeta?TheUser_id=" + TheUser_id, _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
  return {
    UserMeta: data,
    UserMetaisLoading: !error && !data,
    UserMetaisError: error
  };
}
function GetCategories() {
  const {
    loading
  } = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    data,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "rabwa/GetCategories", _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  };
}
function GetCompanys() {
  const {
    loading
  } = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    data,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "rabwa/GetCompanys", _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  };
}
function GetCategorysByCity(city) {
  const {
    loading
  } = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    data,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "rabwa/GetCategorysByCity?city=" + city, _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  };
}
function GetCouponsBySection(section_id) {
  const {
    loading
  } = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    data,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "rabwa/GetCouponsBySection?section_id=" + section_id, _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  };
}
function GetCouponsBybranch(Id, getType) {
  const {
    loading
  } = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    data,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "rabwa/GetCouponsBybranch?Id=" + Id + "&getType=" + getType, _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  };
}
function GetCCAs() {
  const {
    loading
  } = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    data,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "rabwa/GetCCAs", _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  };
}
/* harmony default export */ __webpack_exports__["default"] = (api_get);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\work\xampp2020\htdocs\new_rabwa_project\rabwa-coubon\nexttt\nextProect\pages\index.js */"./pages/index.js");


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

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-loading-skeleton":
/*!*****************************************!*\
  !*** external "react-loading-skeleton" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-loading-skeleton");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("swr");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0cy9hdXRoLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9BcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvYXBpX2dldC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXMtZXhhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtbG9hZGluZy1za2VsZXRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN3clwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybFwiIl0sIm5hbWVzIjpbIkhlYWRlciIsIkF1dGhDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidG9nZ2xlciIsInNldHRvZ2dsZXIiLCJ1c2VFZmZlY3QiLCJsb2FkVXNlckZyb21Db29raWVzIiwiZGF0YSIsInRva2VuIiwiQ29va2llcyIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJhcGkiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwicG9zdCIsInRoZW4iLCJyZXMiLCJjYXRjaCIsImVyciIsInJlbW92ZSIsIlJvdXRlciIsInB1c2giLCJ1c2VyX25pY2VuYW1lIiwidXNlcl9lbWFpbCIsIlVzZXJUeXBlIiwiQ29tcGFueUNvZGUiLCJCcmFjbmhDb2RlIiwicHJvZmlsZV9waWMiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiU2VuZGNvbmQiLCJwaG9uZSIsInRlbXByZXMiLCJwaG9uZUxvZ2luIiwiY29kZSIsInNldCIsImV4cGlyZXMiLCJsb2dpbiIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJsb2dvdXQiLCJpc0F1dGhlbnRpY2F0ZWQiLCJ1c2VBdXRoIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJQcm90ZWN0Um91dGUiLCJDb21wb25lbnQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJhcmd1bWVudHMiLCJQcm90ZWN0Um91dGVDb21wYW55IiwiUHJvdGVjdFJvdXRlTWFuZG9iZSIsInVybCIsIm9yaWdpbiIsImxhc3RIcmVmIiwibGFzdEFzIiwibGFzdFJlc3VsdCIsImhyZWYiLCJhcyIsInJlc3VsdCIsImZvcm1hdEZ1bmMiLCJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJvYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsImdldE9ic2VydmVyIiwiY29uc3RydWN0b3IiLCJwIiwibWVtb2l6ZWRGb3JtYXRVcmwiLCJmb3JtYXRVcmwiLCJhc0hyZWYiLCJlIiwibm9kZU5hbWUiLCJ0YXJnZXQiLCJpc0xvY2FsIiwic2Nyb2xsIiwic2hhbGxvdyIsInN1Y2Nlc3MiLCJkb2N1bWVudCIsInByb3BzIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJnZXRQYXRocyIsInJlc29sdmVkSHJlZiIsInBhcnNlZEFzIiwiaGFuZGxlUmVmIiwicmVmIiwiaXNQcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJwYXRocyIsInJlbmRlciIsImNoaWxkIiwiQ2hpbGRyZW4iLCJlbCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5Iiwib25DbGljayIsInByb2Nlc3MiLCJSZWFjdCIsIndhcm4iLCJQcm9wVHlwZXMiLCJyZXF1aXJlIiwiZXhhY3QiLCJMaW5rIiwicmVwbGFjZSIsInBhc3NIcmVmIiwidmFsdWUiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiT2JqZWN0IiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudCIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJuYW1lIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwicGF0aCIsInByZXBhcmVSb3V0ZSIsInRvUm91dGUiLCJhdHRlbXB0cyIsImlzU2VydmVyUmVuZGVyIiwicGF0aG5hbWUiLCJhZGRCYXNlUGF0aCIsIl9fTkVYVF9EQVRBX18iLCJidWlsZElkIiwiZGVsQmFzZVBhdGgiLCJjcmVkZW50aWFscyIsImdldFJlc3BvbnNlIiwicm91dGUiLCJxdWVyeSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiUHJvbWlzZSIsImZldGNoTmV4dERhdGEiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsInVwZGF0ZSIsIm1vZCIsIm5ld0RhdGEiLCJyZWxvYWQiLCJiYWNrIiwib3B0aW9ucyIsImNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJyZXNvbHZlIiwibWV0aG9kIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJtaXNzaW5nUGFyYW1zIiwicGFyYW0iLCJyZWplY3QiLCJhc1BhdGhuYW1lIiwicm91dGVJbmZvIiwiZXJyb3IiLCJhcHBDb21wIiwiY2hhbmdlU3RhdGUiLCJnZXRSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJoYW5kbGVFcnJvciIsInBhZ2UiLCJnaXBFcnIiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsImNhbmNlbGxlZCIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5IiwiVEVTVF9ST1VURSIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGFyYW1zIiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsImVzY2FwZWRSb3V0ZSIsImVzY2FwZVJlZ2V4Iiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsImlzT3B0aW9uYWwiLCIkMSIsImlzQ2F0Y2hBbGwiLCJwb3MiLCJyZXBlYXQiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImtleSIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicHJvdG9jb2wiLCJob3N0bmFtZSIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsIkhvbWUiLCJkaXNwbGF5IiwiYmFja2dyb3VuZEltYWdlIiwidGV4dEFsaWduIiwibGlzdFN0eWxlIiwibWFyZ2luVG9wIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5MZWZ0IiwibGluZUhlaWdodCIsImZvbnRTaXplIiwiZm9udEZhbWlseSIsImNvbG9yIiwic2l0ZVVybCIsInVybHMiLCJkZXZlbG9wbWVudCIsInByb2R1Y3Rpb24iLCJBeGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJBY2NlcHQiLCJhcGlfZ2V0IiwiZ2V0Q29tcGFueSIsInVzZVNXUiIsImlzTG9hZGluZyIsImlzRXJyb3IiLCJnZXRTcG9uc29ycyIsImdldFR5cGUiLCJHZXRGdWxsQ0NBcyIsInBhZ2V1cCIsIkdldEFsbE1hbmRvYmVzIiwiR2V0QyIsIkNvbXBhbnlzU3RhdGlzdGljIiwiVXNlclN0YXRpc3RpY3MiLCJ1c2VyX2lkIiwiVXNlclN0YXRpc3RpY3NEYXRhIiwiVXNlclN0YXRpc3RpY3NlcnJvcmlzTG9hZGluZyIsIlVzZXJTdGF0aXN0aWNzZXJyb3Jpc0Vycm9yIiwiR2V0QXBwcm92ZU1hbmRvYmVzIiwiR2V0QXBwcm92ZXVzZXJzc00iLCJHZXRBcHByb3ZldXNlcnNzIiwiQ29tcGFueXNTdGF0aXN0aWNzIiwiZ2V0VXNlckNhcmRzIiwiR2V0TWFuZG9iZXMiLCJyZXF1ZXN0IiwiU2NpdHkiLCJTYWVyYSIsIlJzTmFtZSIsIlJzUGhvbmUiLCJHZXR1c2Vyc3MyIiwibWVtYmVycyIsImxhc3RfY291Ym9uIiwidG90YWxfY291Ym9ucyIsInBpb3JpdHkiLCJTY2F0IiwiR2V0TWFuZG9iVXNlcnMiLCJtYW5kb2JlX2lkIiwiR2V0dXNlcnNzIiwiaGlkZSIsIkdldENvdXBvbnNCeUJyYWNuaENhdCIsIkJyYW5jaGlkIiwiQ2F0ZWdvcnlpZCIsIkdldENvdXBvbkJyYW5jaGVzIiwiU2VjdGlvbl9pZCIsIkNvdXBvbkJyYW5jaGVzIiwiQ291cG9uQnJhbmNoZXNpc0xvYWRpbmciLCJDb3Vwb25CcmFuY2hlc2lzRXJyb3IiLCJHZXRVc2VyTWV0YSIsIlRoZVVzZXJfaWQiLCJVc2VyTWV0YSIsIlVzZXJNZXRhaXNMb2FkaW5nIiwiVXNlck1ldGFpc0Vycm9yIiwiR2V0Q2F0ZWdvcmllcyIsIkdldENvbXBhbnlzIiwiR2V0Q2F0ZWdvcnlzQnlDaXR5IiwiY2l0eSIsIkdldENvdXBvbnNCeVNlY3Rpb24iLCJzZWN0aW9uX2lkIiwiR2V0Q291cG9uc0J5YnJhbmNoIiwiSWQiLCJHZXRDQ0FzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsd0U7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLE1BQ2I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0UsTUFBQyxn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QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnSEFERixFQUVFO0FBQUcsYUFBUyxFQUFDLFVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5MEJBRkYsQ0FERixFQVNFO0FBQUssYUFBUyxFQUFDLDBEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBQyx5QkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBVEYsQ0FERixFQWNFO0FBQUssYUFBUyxFQUFDLDBCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5REFERixFQUVFO0FBQUcsYUFBUyxFQUFDLFVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1NEJBRkYsQ0FERixFQVNFO0FBQUssYUFBUyxFQUFDLDBEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBQyxjQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FURixDQWRGLEVBMkJFO0FBQUssYUFBUyxFQUFDLDBCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzSEFERixFQUVFO0FBQUcsYUFBUyxFQUFDLFVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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c3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IChcclxuICA8aGVhZGVyPlxyXG4gICAgPHVsPlxyXG4gICAgICA8bGk+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxhPkhvbWU8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bGk+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxyXG4gICAgICAgICAgPGE+QWJvdXQ8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bGk+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9wb3N0L1tpZF1cIiBhcz1cIi9wb3N0L2ZpcnN0XCI+XHJcbiAgICAgICAgICA8YT5GaXJzdCBQb3N0PC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9saT5cclxuICAgICAgPGxpPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdC9baWRdXCIgYXM9XCIvcG9zdC9zZWNvbmRcIj5cclxuICAgICAgICAgIDxhPlNlY29uZCBQb3N0PC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9saT5cclxuICAgICAgPGxpPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvRGFzaFwiPlxyXG4gICAgICAgICAgPGE+RGFzaDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L3VsPlxyXG4gIDwvaGVhZGVyPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XHJcbmltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG4vL2FwaSBoZXJlIGlzIGFuIGF4aW9zIGluc3RhbmNlXHJcbmltcG9ydCBhcGkgZnJvbSBcIi4uL3NlcnZpY2VzL0FwaVwiO1xyXG5cclxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3RvZ2dsZXIsIHNldHRvZ2dsZXJdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBsb2FkVXNlckZyb21Db29raWVzKCkge1xyXG4gICAgICBsZXQgZGF0YSA9IGZhbHNlO1xyXG4gICAgICBjb25zdCB0b2tlbiA9IENvb2tpZXMuZ2V0KFwidG9rZW5cIik7XHJcbiAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiR290IGEgdG9rZW4gaW4gdGhlIGNvb2tpZXMsIGxldCdzIHNlZSBpZiBpdCBpcyB2YWxpZFwiKTtcclxuICAgICAgICBhcGkuZGVmYXVsdHMuaGVhZGVycy5BdXRob3JpemF0aW9uID0gYEJlYXJlciAke3Rva2VufWA7XHJcbiAgICAgICAgYXdhaXQgYXBpXHJcbiAgICAgICAgICAucG9zdChcImp3dC1hdXRoL3YxL3Rva2VuL3ZhbGlkYXRlXCIpXHJcbiAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGRhdGEgPSByZXM7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgQ29va2llcy5yZW1vdmUoXCJ0b2tlblwiKTtcclxuICAgICAgICAgICAgQ29va2llcy5yZW1vdmUoXCJ1c2VyX25pY2VuYW1lXCIpO1xyXG4gICAgICAgICAgICBDb29raWVzLnJlbW92ZShcInVzZXJfZW1haWxcIik7XHJcbiAgICAgICAgICAgIENvb2tpZXMucmVtb3ZlKFwiVXNlclR5cGVcIik7XHJcbiAgICAgICAgICAgIENvb2tpZXMucmVtb3ZlKFwiQnJhY25oQ29kZVwiKTtcclxuICAgICAgICAgICAgQ29va2llcy5yZW1vdmUoXCJDb21wYW55Q29kZVwiKTtcclxuICAgICAgICAgICAgQ29va2llcy5yZW1vdmUoXCJwcm9maWxlX3BpY1wiKTtcclxuICAgICAgICAgICAgQ29va2llcy5yZW1vdmUoXCJmaXJzdF9uYW1lXCIpO1xyXG4gICAgICAgICAgICBDb29raWVzLnJlbW92ZShcImxhc3RfbmFtZVwiKTtcclxuXHJcbiAgICAgICAgICAgIGFwaS5kZWZhdWx0cy5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSBgYDtcclxuXHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL01hbmFnZW1lbnRcIik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAvLyAgY29uc3QgeyBkYXRhOiBkYXRhIH0gPSBhd2FpdCBhcGkucG9zdChcImp3dC1hdXRoL3YxL3Rva2VuL3ZhbGlkYXRlXCIpO1xyXG4gICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIm9sZCB0b2tlbiBpcyB2YWxpZFwiKTtcclxuICAgICAgICAgIHNldFVzZXIoe1xyXG4gICAgICAgICAgICB1c2VyX25pY2VuYW1lOiBDb29raWVzLmdldChcInVzZXJfbmljZW5hbWVcIiksXHJcbiAgICAgICAgICAgIHVzZXJfZW1haWw6IENvb2tpZXMuZ2V0KFwidXNlcl9lbWFpbFwiKSxcclxuICAgICAgICAgICAgVXNlclR5cGU6IENvb2tpZXMuZ2V0KFwiVXNlclR5cGVcIiksXHJcbiAgICAgICAgICAgIENvbXBhbnlDb2RlOiBDb29raWVzLmdldChcIkNvbXBhbnlDb2RlXCIpLFxyXG4gICAgICAgICAgICBCcmFjbmhDb2RlOiBDb29raWVzLmdldChcIkJyYWNuaENvZGVcIiksXHJcbiAgICAgICAgICAgIHByb2ZpbGVfcGljOiBDb29raWVzLmdldChcInByb2ZpbGVfcGljXCIpLFxyXG4gICAgICAgICAgICBmaXJzdF9uYW1lOiBDb29raWVzLmdldChcImZpcnN0X25hbWVcIiksXHJcbiAgICAgICAgICAgIGxhc3RfbmFtZTogQ29va2llcy5nZXQoXCJsYXN0X25hbWVcIiksXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICAgIGxvYWRVc2VyRnJvbUNvb2tpZXMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IFNlbmRjb25kID0gYXN5bmMgKHBob25lKSA9PiB7XHJcbiAgICBsZXQgdGVtcHJlcyA9IGF3YWl0IGFwaS5nZXQoXCJyYWJ3YS9nZXRVc2VyQ29kZT9waG9uZT1cIiArIHBob25lLCB7fSk7XHJcblxyXG4gICAgcmV0dXJuIHRlbXByZXM7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcGhvbmVMb2dpbiA9IGFzeW5jIChwaG9uZSwgY29kZSkgPT4ge1xyXG4gICAgY29uc3QgeyBkYXRhOiBkYXRhIH0gPSBhd2FpdCBhcGkuZ2V0KFxyXG4gICAgICBcInJhYndhL3NpbmdVc2VySU4/cGhvbmU9XCIgKyBwaG9uZSArIFwiJmNvZGU9XCIgKyBjb2RlLFxyXG4gICAgICB7fVxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiR290IG5ldyB0b2tlblwiICsgZGF0YS50b2tlbik7XHJcbiAgICAgIENvb2tpZXMuc2V0KFwidG9rZW5cIiwgZGF0YS50b2tlbiwgeyBleHBpcmVzOiA2MCB9KTtcclxuICAgICAgQ29va2llcy5zZXQoXCJ1c2VyX25pY2VuYW1lXCIsIGRhdGEudXNlcl9uaWNlbmFtZSwgeyBleHBpcmVzOiA2MCB9KTtcclxuICAgICAgQ29va2llcy5zZXQoXCJ1c2VyX2VtYWlsXCIsIGRhdGEudXNlcl9lbWFpbCwgeyBleHBpcmVzOiA2MCB9KTtcclxuICAgICAgQ29va2llcy5zZXQoXCJVc2VyVHlwZVwiLCBkYXRhLlVzZXJUeXBlLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG4gICAgICBDb29raWVzLnNldChcIkJyYWNuaENvZGVcIiwgZGF0YS5CcmFjbmhDb2RlLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG4gICAgICBDb29raWVzLnNldChcIkNvbXBhbnlDb2RlXCIsIGRhdGEuQ29tcGFueUNvZGUsIHsgZXhwaXJlczogNjAgfSk7XHJcbiAgICAgIENvb2tpZXMuc2V0KFwicHJvZmlsZV9waWNcIiwgZGF0YS5wcm9maWxlX3BpYywgeyBleHBpcmVzOiA2MCB9KTtcclxuICAgICAgQ29va2llcy5zZXQoXCJmaXJzdF9uYW1lXCIsIGRhdGEuZmlyc3RfbmFtZSwgeyBleHBpcmVzOiA2MCB9KTtcclxuICAgICAgQ29va2llcy5zZXQoXCJsYXN0X25hbWVcIiwgZGF0YS5sYXN0X25hbWUsIHsgZXhwaXJlczogNjAgfSk7XHJcblxyXG4gICAgICBhcGkuZGVmYXVsdHMuaGVhZGVycy5BdXRob3JpemF0aW9uID0gYEJlYXJlciAke2RhdGEudG9rZW59YDtcclxuXHJcbiAgICAgIHNldFVzZXIoe1xyXG4gICAgICAgIHVzZXJfbmljZW5hbWU6IGRhdGEudXNlcl9uaWNlbmFtZSxcclxuICAgICAgICB1c2VyX2VtYWlsOiBkYXRhLnVzZXJfZW1haWwsXHJcbiAgICAgICAgVXNlclR5cGU6IGRhdGEuVXNlclR5cGUsXHJcbiAgICAgICAgQ29tcGFueUNvZGU6IGRhdGEuQ29tcGFueUNvZGUsXHJcbiAgICAgICAgQnJhY25oQ29kZTogZGF0YS5CcmFjbmhDb2RlLFxyXG4gICAgICAgIHByb2ZpbGVfcGljOiBkYXRhLnByb2ZpbGVfcGljLFxyXG4gICAgICAgIGZpcnN0X25hbWU6IGRhdGEuZmlyc3RfbmFtZSxcclxuICAgICAgICBsYXN0X25hbWU6IGRhdGEubGFzdF9uYW1lLFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2coXCJHb3QgdXNlclwiLCB1c2VyKTtcclxuICAgICAgaWYgKGRhdGEuVXNlclR5cGUgPT0gXCJDb21wYW55XCIpIHtcclxuICAgICAgICBSb3V0ZXIucHVzaChcIi9Db21wYW55U3RhdGlzdGljc1wiKTtcclxuICAgICAgICAvL3JldHVybiBcIkNvbXBhbnlcIjtcclxuICAgICAgfSBlbHNlIGlmIChkYXRhLlVzZXJUeXBlID09IFwibWFuZG9iZVwiKSB7XHJcbiAgICAgICAgLy8gcmV0dXJuIFwiQ29tcGFueVwiO1xyXG4gICAgICAgIFJvdXRlci5wdXNoKFwiL015VXNlcnNcIik7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9naW4gPSBhc3luYyAodXNlcm5hbWUsIHBhc3N3b3JkKSA9PiB7XHJcbiAgICBjb25zdCB7IGRhdGE6IGRhdGEgfSA9IGF3YWl0IGFwaS5wb3N0KFwiand0LWF1dGgvdjEvdG9rZW5cIiwge1xyXG4gICAgICB1c2VybmFtZSxcclxuICAgICAgcGFzc3dvcmQsXHJcbiAgICB9KTtcclxuICAgIGlmIChkYXRhKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coXCJHb3QgbmV3IHRva2VuXCIgKyBkYXRhLnRva2VuKTtcclxuICAgICAgQ29va2llcy5zZXQoXCJ0b2tlblwiLCBkYXRhLnRva2VuLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG4gICAgICBDb29raWVzLnNldChcInVzZXJfbmljZW5hbWVcIiwgZGF0YS51c2VyX25pY2VuYW1lLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG4gICAgICBDb29raWVzLnNldChcInVzZXJfZW1haWxcIiwgZGF0YS51c2VyX2VtYWlsLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG4gICAgICBDb29raWVzLnNldChcIlVzZXJUeXBlXCIsIGRhdGEuVXNlclR5cGUsIHsgZXhwaXJlczogNjAgfSk7XHJcbiAgICAgIENvb2tpZXMuc2V0KFwiQnJhY25oQ29kZVwiLCBkYXRhLkJyYWNuaENvZGUsIHsgZXhwaXJlczogNjAgfSk7XHJcbiAgICAgIENvb2tpZXMuc2V0KFwiQ29tcGFueUNvZGVcIiwgZGF0YS5Db21wYW55Q29kZSwgeyBleHBpcmVzOiA2MCB9KTtcclxuICAgICAgQ29va2llcy5zZXQoXCJwcm9maWxlX3BpY1wiLCBkYXRhLnByb2ZpbGVfcGljLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG4gICAgICBDb29raWVzLnNldChcImZpcnN0X25hbWVcIiwgZGF0YS5maXJzdF9uYW1lLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG4gICAgICBDb29raWVzLnNldChcImxhc3RfbmFtZVwiLCBkYXRhLmxhc3RfbmFtZSwgeyBleHBpcmVzOiA2MCB9KTtcclxuXHJcbiAgICAgIGFwaS5kZWZhdWx0cy5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSBgQmVhcmVyICR7ZGF0YS50b2tlbn1gO1xyXG5cclxuICAgICAgc2V0VXNlcih7XHJcbiAgICAgICAgdXNlcl9uaWNlbmFtZTogZGF0YS51c2VyX25pY2VuYW1lLFxyXG4gICAgICAgIHVzZXJfZW1haWw6IGRhdGEudXNlcl9lbWFpbCxcclxuICAgICAgICBVc2VyVHlwZTogZGF0YS5Vc2VyVHlwZSxcclxuICAgICAgICBDb21wYW55Q29kZTogZGF0YS5Db21wYW55Q29kZSxcclxuICAgICAgICBCcmFjbmhDb2RlOiBkYXRhLkJyYWNuaENvZGUsXHJcbiAgICAgICAgcHJvZmlsZV9waWM6IGRhdGEucHJvZmlsZV9waWMsXHJcbiAgICAgICAgZmlyc3RfbmFtZTogZGF0YS5maXJzdF9uYW1lLFxyXG4gICAgICAgIGxhc3RfbmFtZTogZGF0YS5sYXN0X25hbWUsXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkdvdCB1c2VyXCIsIHVzZXIpO1xyXG5cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgQ29va2llcy5yZW1vdmUoXCJ0b2tlblwiKTtcclxuICAgIENvb2tpZXMucmVtb3ZlKFwidXNlcl9uaWNlbmFtZVwiKTtcclxuICAgIENvb2tpZXMucmVtb3ZlKFwidXNlcl9lbWFpbFwiKTtcclxuICAgIENvb2tpZXMucmVtb3ZlKFwiVXNlclR5cGVcIik7XHJcbiAgICBDb29raWVzLnJlbW92ZShcIkJyYWNuaENvZGVcIik7XHJcbiAgICBDb29raWVzLnJlbW92ZShcIkNvbXBhbnlDb2RlXCIpO1xyXG4gICAgQ29va2llcy5yZW1vdmUoXCJwcm9maWxlX3BpY1wiKTtcclxuICAgIENvb2tpZXMucmVtb3ZlKFwiZmlyc3RfbmFtZVwiKTtcclxuICAgIENvb2tpZXMucmVtb3ZlKFwibGFzdF9uYW1lXCIpO1xyXG5cclxuICAgIGFwaS5kZWZhdWx0cy5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSBgYDtcclxuXHJcbiAgICBzZXRVc2VyKG51bGwpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6ICEhdXNlcixcclxuICAgICAgICB1c2VyLFxyXG4gICAgICAgIGxvZ2luLFxyXG4gICAgICAgIGxvZ291dCxcclxuICAgICAgICBTZW5kY29uZCxcclxuICAgICAgICBwaG9uZUxvZ2luLFxyXG4gICAgICAgIGxvYWRpbmcsXHJcbiAgICAgICAgbG9nb3V0LFxyXG4gICAgICAgIHRvZ2dsZXIsXHJcbiAgICAgICAgc2V0dG9nZ2xlcixcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQXV0aCgpIHtcclxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcblxyXG4gIHJldHVybiBjb250ZXh0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUHJvdGVjdFJvdXRlKENvbXBvbmVudCkge1xyXG4gIHJldHVybiAoKSA9PiB7XHJcbiAgICBjb25zdCB7IHVzZXIsIGlzQXV0aGVudGljYXRlZCwgbG9hZGluZyB9ID0gdXNlQXV0aCgpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgaWYgKCFpc0F1dGhlbnRpY2F0ZWQgJiYgIWxvYWRpbmcpIHtcclxuICAgICAgICBSb3V0ZXIucHVzaChcIi9NYW5hZ2VtZW50XCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKGlzQXV0aGVudGljYXRlZCkge1xyXG4gICAgICAgIGlmICh1c2VyLlVzZXJUeXBlICE9IFwiYWRtaW5cIikgUm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICB9XHJcbiAgICB9LCBbbG9hZGluZywgaXNBdXRoZW50aWNhdGVkXSk7XHJcblxyXG4gICAgcmV0dXJuIDxDb21wb25lbnQgey4uLmFyZ3VtZW50c30gLz47XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFByb3RlY3RSb3V0ZUNvbXBhbnkoQ29tcG9uZW50KSB7XHJcbiAgcmV0dXJuICgpID0+IHtcclxuICAgIGNvbnN0IHsgdXNlciwgaXNBdXRoZW50aWNhdGVkLCBsb2FkaW5nIH0gPSB1c2VBdXRoKCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBpZiAoIWlzQXV0aGVudGljYXRlZCAmJiAhbG9hZGluZykge1xyXG4gICAgICAgIFJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKGlzQXV0aGVudGljYXRlZCkge1xyXG4gICAgICAgIGlmICh1c2VyLlVzZXJUeXBlICE9IFwiQ29tcGFueVwiKSBSb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgIH1cclxuICAgIH0sIFtsb2FkaW5nLCBpc0F1dGhlbnRpY2F0ZWRdKTtcclxuXHJcbiAgICByZXR1cm4gPENvbXBvbmVudCB7Li4uYXJndW1lbnRzfSAvPjtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUHJvdGVjdFJvdXRlTWFuZG9iZShDb21wb25lbnQpIHtcclxuICByZXR1cm4gKCkgPT4ge1xyXG4gICAgY29uc3QgeyB1c2VyLCBpc0F1dGhlbnRpY2F0ZWQsIGxvYWRpbmcgfSA9IHVzZUF1dGgoKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGlmICghaXNBdXRoZW50aWNhdGVkICYmICFsb2FkaW5nKSB7XHJcbiAgICAgICAgUm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgICAgIH0gZWxzZSBpZiAoaXNBdXRoZW50aWNhdGVkKSB7XHJcbiAgICAgICAgaWYgKHVzZXIuVXNlclR5cGUgIT0gXCJtYW5kb2JlXCIpIFJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgfVxyXG4gICAgfSwgW2xvYWRpbmcsIGlzQXV0aGVudGljYXRlZF0pO1xyXG5cclxuICAgIHJldHVybiA8Q29tcG9uZW50IHsuLi5hcmd1bWVudHN9IC8+O1xyXG4gIH07XHJcbn1cclxuIiwiZGVjbGFyZSBjb25zdCBfX05FWFRfREFUQV9fOiBhbnlcblxuaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHBhcnNlLCByZXNvbHZlLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQcmVmZXRjaE9wdGlvbnMgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7XG4gIGV4ZWNPbmNlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyBhZGRCYXNlUGF0aCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuXG5mdW5jdGlvbiBpc0xvY2FsKGhyZWY6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBjb25zdCB1cmwgPSBwYXJzZShocmVmLCBmYWxzZSwgdHJ1ZSlcbiAgY29uc3Qgb3JpZ2luID0gcGFyc2UoZ2V0TG9jYXRpb25PcmlnaW4oKSwgZmFsc2UsIHRydWUpXG5cbiAgcmV0dXJuIChcbiAgICAhdXJsLmhvc3QgfHwgKHVybC5wcm90b2NvbCA9PT0gb3JpZ2luLnByb3RvY29sICYmIHVybC5ob3N0ID09PSBvcmlnaW4uaG9zdClcbiAgKVxufVxuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBGb3JtYXRSZXN1bHQgPSB7IGhyZWY6IHN0cmluZzsgYXM/OiBzdHJpbmcgfVxuXG5mdW5jdGlvbiBtZW1vaXplZEZvcm1hdFVybChmb3JtYXRGdW5jOiAoaHJlZjogVXJsLCBhcz86IFVybCkgPT4gRm9ybWF0UmVzdWx0KSB7XG4gIGxldCBsYXN0SHJlZjogbnVsbCB8IFVybCA9IG51bGxcbiAgbGV0IGxhc3RBczogdW5kZWZpbmVkIHwgbnVsbCB8IFVybCA9IG51bGxcbiAgbGV0IGxhc3RSZXN1bHQ6IG51bGwgfCBGb3JtYXRSZXN1bHQgPSBudWxsXG4gIHJldHVybiAoaHJlZjogVXJsLCBhcz86IFVybCkgPT4ge1xuICAgIGlmIChsYXN0UmVzdWx0ICYmIGhyZWYgPT09IGxhc3RIcmVmICYmIGFzID09PSBsYXN0QXMpIHtcbiAgICAgIHJldHVybiBsYXN0UmVzdWx0XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gZm9ybWF0RnVuYyhocmVmLCBhcylcbiAgICBsYXN0SHJlZiA9IGhyZWZcbiAgICBsYXN0QXMgPSBhc1xuICAgIGxhc3RSZXN1bHQgPSByZXN1bHRcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0VXJsKHVybDogVXJsKTogc3RyaW5nIHtcbiAgcmV0dXJuIHVybCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCkgOiB1cmxcbn1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG5cbmxldCBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChvYnNlcnZlcikge1xuICAgIHJldHVybiBvYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmNsYXNzIExpbmsgZXh0ZW5kcyBDb21wb25lbnQ8TGlua1Byb3BzPiB7XG4gIHA6IGJvb2xlYW5cblxuICBjb25zdHJ1Y3Rvcihwcm9wczogTGlua1Byb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChwcm9wcy5wcmVmZXRjaCkge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuICB9XG5cbiAgY2xlYW5VcExpc3RlbmVycyA9ICgpID0+IHt9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzKClcbiAgfVxuXG4gIGdldFBhdGhzKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgICBjb25zdCB7IGhyZWY6IHBhcnNlZEhyZWYsIGFzOiBwYXJzZWRBcyB9ID0gdGhpcy5mb3JtYXRVcmxzKFxuICAgICAgdGhpcy5wcm9wcy5ocmVmLFxuICAgICAgdGhpcy5wcm9wcy5hc1xuICAgIClcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlKHBhdGhuYW1lLCBwYXJzZWRIcmVmKVxuICAgIHJldHVybiBbcmVzb2x2ZWRIcmVmLCBwYXJzZWRBcyA/IHJlc29sdmUocGF0aG5hbWUsIHBhcnNlZEFzKSA6IHJlc29sdmVkSHJlZl1cbiAgfVxuXG4gIGhhbmRsZVJlZihyZWY6IEVsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wICYmIEludGVyc2VjdGlvbk9ic2VydmVyICYmIHJlZiAmJiByZWYudGFnTmFtZSkge1xuICAgICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzKClcblxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID1cbiAgICAgICAgcHJlZmV0Y2hlZFtcbiAgICAgICAgICB0aGlzLmdldFBhdGhzKCkuam9pbihcbiAgICAgICAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICAgICAgICAnJSdcbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycyA9IGxpc3RlblRvSW50ZXJzZWN0aW9ucyhyZWYsICgpID0+IHtcbiAgICAgICAgICB0aGlzLnByZWZldGNoKClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBUaGUgZnVuY3Rpb24gaXMgbWVtb2l6ZWQgc28gdGhhdCBubyBleHRyYSBsaWZlY3ljbGVzIGFyZSBuZWVkZWRcbiAgLy8gYXMgcGVyIGh0dHBzOi8vcmVhY3Rqcy5vcmcvYmxvZy8yMDE4LzA2LzA3L3lvdS1wcm9iYWJseS1kb250LW5lZWQtZGVyaXZlZC1zdGF0ZS5odG1sXG4gIGZvcm1hdFVybHMgPSBtZW1vaXplZEZvcm1hdFVybCgoaHJlZiwgYXNIcmVmKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IGFkZEJhc2VQYXRoKGZvcm1hdFVybChocmVmKSksXG4gICAgICBhczogYXNIcmVmID8gYWRkQmFzZVBhdGgoZm9ybWF0VXJsKGFzSHJlZikpIDogYXNIcmVmLFxuICAgIH1cbiAgfSlcblxuICBsaW5rQ2xpY2tlZCA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3QgeyBub2RlTmFtZSwgdGFyZ2V0IH0gPSBlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgICBpZiAoXG4gICAgICBub2RlTmFtZSA9PT0gJ0EnICYmXG4gICAgICAoKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgICAgIGUubWV0YUtleSB8fFxuICAgICAgICBlLmN0cmxLZXkgfHxcbiAgICAgICAgZS5zaGlmdEtleSB8fFxuICAgICAgICAoZS5uYXRpdmVFdmVudCAmJiBlLm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKSlcbiAgICApIHtcbiAgICAgIC8vIGlnbm9yZSBjbGljayBmb3IgbmV3IHRhYiAvIG5ldyB3aW5kb3cgYmVoYXZpb3JcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCB7IGhyZWYsIGFzIH0gPSB0aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLCB0aGlzLnByb3BzLmFzKVxuXG4gICAgaWYgKCFpc0xvY2FsKGhyZWYpKSB7XG4gICAgICAvLyBpZ25vcmUgY2xpY2sgaWYgaXQncyBvdXRzaWRlIG91ciBzY29wZSAoZS5nLiBodHRwczovL2dvb2dsZS5jb20pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgICBocmVmID0gcmVzb2x2ZShwYXRobmFtZSwgaHJlZilcbiAgICBhcyA9IGFzID8gcmVzb2x2ZShwYXRobmFtZSwgYXMpIDogaHJlZlxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgICBsZXQgeyBzY3JvbGwgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgICB9XG5cbiAgICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgICBSb3V0ZXJbdGhpcy5wcm9wcy5yZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgICAgc2hhbGxvdzogdGhpcy5wcm9wcy5zaGFsbG93LFxuICAgIH0pLnRoZW4oKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcHJlZmV0Y2gob3B0aW9ucz86IFByZWZldGNoT3B0aW9ucyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wIHx8IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gICAgY29uc3QgcGF0aHMgPSB0aGlzLmdldFBhdGhzKClcbiAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gICAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gICAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gICAgUm91dGVyLnByZWZldGNoKHBhdGhzWy8qIGhyZWYgKi8gMF0sIHBhdGhzWy8qIGFzUGF0aCAqLyAxXSwgb3B0aW9ucykuY2F0Y2goXG4gICAgICAoZXJyKSA9PiB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgICAgIHRocm93IGVyclxuICAgICAgICB9XG4gICAgICB9XG4gICAgKVxuICAgIHByZWZldGNoZWRbXG4gICAgICBwYXRocy5qb2luKFxuICAgICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgICAnJSdcbiAgICAgIClcbiAgICBdID0gdHJ1ZVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBocmVmLCBhcyB9ID0gdGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZiwgdGhpcy5wcm9wcy5hcylcbiAgICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICAgIH1cblxuICAgIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICAgIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICAgIGNvbnN0IHByb3BzOiB7XG4gICAgICBvbk1vdXNlRW50ZXI6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgICAgaHJlZj86IHN0cmluZ1xuICAgICAgcmVmPzogYW55XG4gICAgfSA9IHtcbiAgICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5oYW5kbGVSZWYoZWwpXG5cbiAgICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uTW91c2VFbnRlcjogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByZWZldGNoKHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICAgIH0sXG4gICAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICB0aGlzLmxpbmtDbGlja2VkKGUpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfVxuXG4gICAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gICAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gICAgaWYgKFxuICAgICAgdGhpcy5wcm9wcy5wYXNzSHJlZiB8fFxuICAgICAgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpXG4gICAgKSB7XG4gICAgICBwcm9wcy5ocmVmID0gYXMgfHwgaHJlZlxuICAgIH1cblxuICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICBpZiAoXG4gICAgICAgIHByb3BzLmhyZWYgJiZcbiAgICAgICAgdHlwZW9mIF9fTkVYVF9EQVRBX18gIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydFxuICAgICAgKSB7XG4gICAgICAgIHByb3BzLmhyZWYgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChwcm9wcy5ocmVmKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHByb3BzKVxuICB9XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICBjb25zdCB3YXJuID0gZXhlY09uY2UoY29uc29sZS5lcnJvcilcblxuICAvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbiAgY29uc3QgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpXG4gIGNvbnN0IGV4YWN0ID0gcmVxdWlyZSgncHJvcC10eXBlcy1leGFjdCcpXG4gIC8vIEB0cy1pZ25vcmUgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgd2hlbiBkZWNsYXJpbmcgaXQgb24gdGhlIGNsYXNzIGl0IG91dHB1dHMgYW4gZXh0cmEgYml0IG9mIGNvZGUgd2hpY2ggaXMgbm90IG5lZWRlZC5cbiAgTGluay5wcm9wVHlwZXMgPSBleGFjdCh7XG4gICAgaHJlZjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWQsXG4gICAgYXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgICBwcmVmZXRjaDogUHJvcFR5cGVzLmJvb2wsXG4gICAgcmVwbGFjZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hhbGxvdzogUHJvcFR5cGVzLmJvb2wsXG4gICAgcGFzc0hyZWY6IFByb3BUeXBlcy5ib29sLFxuICAgIHNjcm9sbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAocHJvcHM6IGFueSwgcHJvcE5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHByb3BzW3Byb3BOYW1lXVxuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgIGBXYXJuaW5nOiBZb3UncmUgdXNpbmcgYSBzdHJpbmcgZGlyZWN0bHkgaW5zaWRlIDxMaW5rPi4gVGhpcyB1c2FnZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgYWRkIGFuIDxhPiB0YWcgYXMgY2hpbGQgb2YgPExpbms+YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9LFxuICAgIF0pLmlzUmVxdWlyZWQsXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKHt9LCBfcm91dGVyW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHBhcnNlLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpICE9PSAwID8gYmFzZVBhdGggKyBwYXRoIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgPT09IDBcbiAgICA/IHBhdGguc3Vic3RyKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG4gICAgOiBwYXRoXG59XG5cbmZ1bmN0aW9uIHRvUm91dGUocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLydcbn1cblxuY29uc3QgcHJlcGFyZVJvdXRlID0gKHBhdGg6IHN0cmluZykgPT5cbiAgdG9Sb3V0ZSghcGF0aCB8fCBwYXRoID09PSAnLycgPyAnL2luZGV4JyA6IHBhdGgpXG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbnR5cGUgQ29tcG9uZW50UmVzID0geyBwYWdlOiBDb21wb25lbnRUeXBlOyBtb2Q6IGFueSB9XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG50eXBlIFJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogYW55XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFJvdXRlSW5mbywgQXBwPzogQ29tcG9uZW50VHlwZSkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IGFueSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5IHwgbnVsbCxcbiAgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4sXG4gIGNiPzogKC4uLmFyZ3M6IGFueSkgPT4gYW55XG4pIHtcbiAgbGV0IGF0dGVtcHRzID0gaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMVxuICBmdW5jdGlvbiBnZXRSZXNwb25zZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBmZXRjaChcbiAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKFxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgX19ORVhUX0RBVEFfX1xuICAgICAgICAgIGAvX25leHQvZGF0YS8ke19fTkVYVF9EQVRBX18uYnVpbGRJZH0ke2RlbEJhc2VQYXRoKHBhdGhuYW1lKX0uanNvbmBcbiAgICAgICAgKSxcbiAgICAgICAgcXVlcnksXG4gICAgICB9KSxcbiAgICAgIHtcbiAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICB9XG4gICAgKS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgIGlmICgtLWF0dGVtcHRzID4gMCAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIGNiID8gY2IoZGF0YSkgOiBkYXRhXG4gICAgfSlcbiAgICAuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgIC8vIGxvb3AuXG4gICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgIDsoZXJyIGFzIGFueSkuY29kZSA9ICdQQUdFX0xPQURfRVJST1InXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQ29tcG9uZW50VHlwZVxuICAgICAgd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0geyBDb21wb25lbnQ6IEFwcCB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBhc1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcbiAgICB9XG4gIH1cblxuICAvLyBAZGVwcmVjYXRlZCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBldmVuIHRob3VnaCBpdCdzIGEgcHJpdmF0ZSBtZXRob2QuXG4gIHN0YXRpYyBfcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgcmV0dXJuIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHVybFxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGlmICghZS5zdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAoXG4gICAgICBlLnN0YXRlICYmXG4gICAgICB0aGlzLmlzU3NyICYmXG4gICAgICBlLnN0YXRlLmFzID09PSB0aGlzLmFzUGF0aCAmJlxuICAgICAgcGFyc2UoZS5zdGF0ZS51cmwpLnBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lXG4gICAgKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoZS5zdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gZS5zdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ2Bwb3BzdGF0ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ1dCBgZXZlbnQuc3RhdGVgIGRpZCBub3QgaGF2ZSBgdXJsYCBvciBgYXNgIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3BvcHN0YXRlLXN0YXRlLWVtcHR5J1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgdXBkYXRlKHJvdXRlOiBzdHJpbmcsIG1vZDogYW55KSB7XG4gICAgY29uc3QgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlID0gbW9kLmRlZmF1bHQgfHwgbW9kXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKVxuICAgIH1cblxuICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBDb21wb25lbnQsXG4gICAgICBfX05fU1NHOiBtb2QuX19OX1NTRyxcbiAgICAgIF9fTl9TU1A6IG1vZC5fX05fU1NQLFxuICAgIH0pXG4gICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGFcblxuICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgIGlmIChyb3V0ZSA9PT0gJy9fYXBwJykge1xuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKVxuICAgIH1cbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICBfdXJsOiBVcmwsXG4gICAgX2FzOiBVcmwsXG4gICAgb3B0aW9uczogYW55XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgICB9XG4gICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICBpZiAoU1QpIHtcbiAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgICAgfVxuXG4gICAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgICBsZXQgdXJsID0gdHlwZW9mIF91cmwgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24oX3VybCkgOiBfdXJsXG4gICAgICBsZXQgYXMgPSB0eXBlb2YgX2FzID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKF9hcykgOiBfYXNcblxuICAgICAgdXJsID0gYWRkQmFzZVBhdGgodXJsKVxuICAgICAgYXMgPSBhZGRCYXNlUGF0aChhcylcblxuICAgICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5IGZvciB0aGUgU1NSIHBhZ2UuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgICAgaWYgKF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCkge1xuICAgICAgICAgIGFzID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQoYXMpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQoYXMpXG5cbiAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGFzKSkge1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChhcylcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnksIHByb3RvY29sIH0gPSBwYXJzZSh1cmwsIHRydWUpXG5cbiAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSlcbiAgICAgIH1cblxuICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgIGlmICghdGhpcy51cmxJc05ldyhhcykpIHtcbiAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKVxuICAgICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSBwYXJzZShhcylcbiAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgICApXG5cbiAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZWplY3QoXG4gICAgICAgICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgICAgLy8gSWYgc2hhbGxvdyBpcyB0cnVlIGFuZCB0aGUgcm91dGUgZXhpc3RzIGluIHRoZSByb3V0ZXIgY2FjaGUgd2UgcmV1c2UgdGhlIHByZXZpb3VzIHJlc3VsdFxuICAgICAgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cpLnRoZW4oXG4gICAgICAgIChyb3V0ZUluZm8pID0+IHtcbiAgICAgICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm9cblxuICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVJbmZvKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgYXMpXG4gICAgICAgICAgICAgIHRocm93IGVycm9yXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSlcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICByZWplY3RcbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxSb3V0ZUluZm8+IHtcbiAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAvLyBJZiB0aGVyZSBpcyBhIHNoYWxsb3cgcm91dGUgdHJhbnNpdGlvbiBwb3NzaWJsZVxuICAgIC8vIElmIHRoZSByb3V0ZSBpcyBhbHJlYWR5IHJlbmRlcmVkIG9uIHRoZSBzY3JlZW4uXG4gICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNhY2hlZFJvdXRlSW5mbylcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVFcnJvciA9IChcbiAgICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICAgICkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ1BBR0VfTE9BRF9FUlJPUicgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgLy8gU28sIHdlIG5lZWQgdG8gbWFyayBpdCBhcyBhIGNhbmNlbGxlZCBlcnJvciBhbmQgc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc29sdmUoXG4gICAgICAgICAgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSByZXNcbiAgICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvOiBSb3V0ZUluZm8gPSB7IENvbXBvbmVudCwgZXJyIH1cbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIH0gYXMgYW55KS50aGVuKFxuICAgICAgICAgICAgICAgICAgKHByb3BzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVyclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbylcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAoZ2lwRXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsXG4gICAgICAgICAgICAgICAgICAgICAgZ2lwRXJyXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGhhbmRsZUVycm9yKGVyciwgdHJ1ZSkpXG4gICAgICAgIClcbiAgICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPlxuICAgIH1cblxuICAgIHJldHVybiAobmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKGNhY2hlZFJvdXRlSW5mbykge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oXG4gICAgICAgIChyZXMpID0+XG4gICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pLFxuICAgICAgICByZWplY3RcbiAgICAgIClcbiAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz4pXG4gICAgICAudGhlbigocm91dGVJbmZvOiBSb3V0ZUluZm8pID0+IHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0RGF0YTxSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgICAgX19OX1NTR1xuICAgICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGFzKVxuICAgICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoYXMpXG4gICAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICAgIClcbiAgICAgICAgKS50aGVuKChwcm9wcykgPT4ge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpXG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcHJvdG9jb2wgfSA9IHBhcnNlKHVybClcblxuICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGNvbnN0IHJvdXRlID0gZGVsQmFzZVBhdGgodG9Sb3V0ZShwYXRobmFtZSkpXG4gICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBkZWxCYXNlUGF0aChhc1BhdGgpKSxcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgICAgXSkudGhlbigoKSA9PiByZXNvbHZlKCksIHJlamVjdClcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Q29tcG9uZW50UmVzPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG4gICAgcm91dGUgPSBkZWxCYXNlUGF0aChyb3V0ZSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YSA9IChhc1BhdGg6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiA9PiB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGFyc2UoYXNQYXRoKS5wYXRobmFtZSEpXG5cbiAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1twYXRobmFtZV1cbiAgICAgID8gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW3BhdGhuYW1lXSlcbiAgICAgIDogZmV0Y2hOZXh0RGF0YShcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIHRoaXMuaXNTc3IsXG4gICAgICAgICAgKGRhdGEpID0+ICh0aGlzLnNkY1twYXRobmFtZV0gPSBkYXRhKVxuICAgICAgICApXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YSA9IChhc1BhdGg6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiA9PiB7XG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZShhc1BhdGgsIHRydWUpXG4gICAgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGF0aG5hbWUhKVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHApXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgY29uc3QgZSA9IG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJylcbiAgICAgIDsoZSBhcyBhbnkpLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGUsIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogeyBwb3M6IG51bWJlcjsgcmVwZWF0OiBib29sZWFuIH0gfVxufSB7XG4gIC8vIEVzY2FwZSBhbGwgY2hhcmFjdGVycyB0aGF0IGNvdWxkIGJlIGNvbnNpZGVyZWQgUmVnRXhcbiAgY29uc3QgZXNjYXBlZFJvdXRlID0gZXNjYXBlUmVnZXgobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiB7IHBvczogbnVtYmVyOyByZXBlYXQ6IGJvb2xlYW4gfSB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG5cbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoXG4gICAgL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZyxcbiAgICAoXywgJDEpID0+IHtcbiAgICAgIGNvbnN0IGlzT3B0aW9uYWwgPSAvXlxcXFxcXFsuKlxcXFxcXF0kLy50ZXN0KCQxKVxuICAgICAgaWYgKGlzT3B0aW9uYWwpIHtcbiAgICAgICAgJDEgPSAkMS5zbGljZSgyLCAtMilcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSlcbiAgICAgIGlmIChpc0NhdGNoQWxsKSB7XG4gICAgICAgICQxID0gJDEuc2xpY2UoNilcbiAgICAgIH1cbiAgICAgIGdyb3Vwc1tcbiAgICAgICAgJDFcbiAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgXSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdDogaXNDYXRjaEFsbCB9XG4gICAgICByZXR1cm4gaXNDYXRjaEFsbCA/IChpc09wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgfVxuICApXG5cbiAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZShcbiAgICAgIC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csXG4gICAgICAoXywgJDEpID0+IHtcbiAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKVxuICAgICAgICBjb25zdCBrZXkgPSAkMVxuICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpXG5cbiAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGxcbiAgICAgICAgICA/IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT4uKz8pYFxuICAgICAgICAgIDogYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9PlteL10rPylgXG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cCgnXicgKyBwYXJhbWV0ZXJpemVkUm91dGUgKyAnKD86Lyk/JCcsICdpJyksXG4gICAgZ3JvdXBzLFxuICAgIG5hbWVkUmVnZXg6IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlXG4gICAgICA/IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYFxuICAgICAgOiB1bmRlZmluZWQsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGZvcm1hdCwgVVJMRm9ybWF0T3B0aW9ucywgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICcuLi8uLi9saWIvbG9hZC1lbnYtY29uZmlnJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBhbnlcbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBpbnRlcmZhY2UtbmFtZVxuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBzdGF0aWNNYXJrdXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkZXZGaWxlczogc3RyaW5nW11cbiAgZmlsZXM6IHN0cmluZ1tdXG4gIGxvd1ByaW9yaXR5RmlsZXM6IHN0cmluZ1tdXG4gIHBvbHlmaWxsRmlsZXM6IHN0cmluZ1tdXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaHRtbFByb3BzOiBhbnlcbiAgYm9keVRhZ3M6IGFueVtdXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICB1cmw6IFVybE9iamVjdCxcbiAgb3B0aW9ucz86IFVSTEZvcm1hdE9wdGlvbnNcbik6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXQodXJsIGFzIFVSTCwgb3B0aW9ucylcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcclxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcclxuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xyXG4gICAgXCJkZWZhdWx0XCI6IG9ialxyXG4gIH07XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcclxuXHJcbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcclxuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XHJcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcclxuXHJcbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xyXG4gICAgcmV0dXJuIGNhY2hlO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiBjYWNoZTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XHJcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xyXG4gICAgcmV0dXJuIG9iajtcclxuICB9XHJcblxyXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgXCJkZWZhdWx0XCI6IG9ialxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xyXG5cclxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcclxuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcclxuICB9XHJcblxyXG4gIHZhciBuZXdPYmogPSB7fTtcclxuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XHJcblxyXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcclxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XHJcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xyXG5cclxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcclxuXHJcbiAgaWYgKGNhY2hlKSB7XHJcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG5ld09iajtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xyXG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcclxuXHJcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XHJcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xyXG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcclxuICAgIH07XHJcbiAgfSBlbHNlIHtcclxuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XHJcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkZXJcIjtcclxuaW1wb3J0IHVzZUF1dGgsIHsgUHJvdGVjdFJvdXRlIH0gZnJvbSBcIi4uL2NvbnRleHRzL2F1dGguanNcIjtcclxuXHJcbmltcG9ydCB7IGdldENvbXBhbnkgfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpX2dldFwiO1xyXG5pbXBvcnQgU2tlbGV0b24gZnJvbSBcInJlYWN0LWxvYWRpbmctc2tlbGV0b25cIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vUm91dGVyLnB1c2goXCIvQ29tcGFueXNTdGF0aXN0aWNzXCIpO1xyXG4gICAgLy9sb2dpbihcImI2NDQ3MzMzQGdtYWlsLmNvbVwiLCBcIjEyM1wiKTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxsaW5rXHJcbiAgICAgICAgcmVsPVwic2hvcnRjdXQgaWNvblwiXHJcbiAgICAgICAgaHJlZj1cIi4uL2Fzc2V0cy9mYXZpY29uLnBuZ1wiXHJcbiAgICAgICAgdHlwZT1cImltYWdlL3gtaWNvblwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiLi4vYXNzZXRzL2Nzcy9tYWljb25zLmNzc1wiIC8+XHJcbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiLi4vYXNzZXRzL3ZlbmRvci9hbmltYXRlL2FuaW1hdGUuY3NzXCIgLz5cclxuICAgICAgPGxpbmtcclxuICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICBocmVmPVwiLi4vYXNzZXRzL3ZlbmRvci9vd2wtY2Fyb3VzZWwvY3NzL293bC5jYXJvdXNlbC5taW4uY3NzXCJcclxuICAgICAgLz5cclxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIuLi9hc3NldHMvY3NzL2Jvb3RzdHJhcC5jc3NcIiAvPlxyXG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi4uL2Fzc2V0cy9jc3MvbW9ic3Rlci5jc3NcIiAvPlxyXG4gICAgICA8c2NyaXB0IHNyYz1cIi4uL2Fzc2V0cy9qcy9qcXVlcnktMy41LjEubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgIDxzY3JpcHQgc3JjPVwiLi4vYXNzZXRzL2pzL2Jvb3RzdHJhcC5idW5kbGUubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgIDxzY3JpcHQgc3JjPVwiLi4vYXNzZXRzL3ZlbmRvci9vd2wtY2Fyb3VzZWwvanMvb3dsLmNhcm91c2VsLm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICA8c2NyaXB0IHNyYz1cIi4uL2Fzc2V0cy92ZW5kb3Ivd293L3dvdy5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgPHNjcmlwdCBzcmM9XCIuLi9hc3NldHMvanMvbW9ic3Rlci5qc1wiPjwvc2NyaXB0PlxyXG5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItZGFyayBuYXZiYXItZmxvYXRpbmdcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9hc3NldHMvZmF2aWNvbi1saWdodC5wbmdcIiBhbHQ9XCJcIiB3aWR0aD17NDB9IC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCJcclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxyXG4gICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNuYXZiYXJUb2dnbGVyXCJcclxuICAgICAgICAgICAgYXJpYS1jb250cm9scz1cIm5hdmJhclRvZ2dsZXJcIlxyXG4gICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCIgLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhclRvZ2dsZXJcIj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbWwtYXV0byBtdC0zIG10LWxnLTBcIj5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gZHJvcGRvd24gYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgINin2YTYsdim2YrYs9mK2KlcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiI291cnZhdlwiPlxyXG4gICAgICAgICAgICAgICAgICDZhdin2YrZhdmK2LLZhtinXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIiNzdHJlbmd0aFwiPlxyXG4gICAgICAgICAgICAgICAgICDZhtmC2KfYtyDYp9mE2YLZiNipXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIiNjb250YWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgINiq2YjYp9i12YQg2YXYudmG2KdcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLWF1dG8gbXktMiBteS1sZy0wXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17e2Rpc3BsYXk6ICdub25lJ319IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSByb3VuZGVkLXBpbGxcIj5cclxuICAgICAgICAgICAgICAgIERvd25sb2FkIE5vd1xyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25hdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cInBhZ2UtaGVyby1zZWN0aW9uIGJnLWltYWdlIGhlcm8taG9tZS0yXCJcclxuICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC4uL2Fzc2V0cy9pbWcvYmdfaGVyb18yLnN2ZylcIiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLWNhcHRpb25cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGZnLXdoaXRlIGgtMTAwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlciBoLTEwMFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgd293IGZhZGVJblVwIHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2Utc29mdCBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi00IGZ3LW5vcm1hbFwiPtmF2YYg2YbYrdmGPC9oMT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgINmF2KTYs9iz2Kkg2K3Zg9mF2KfYoSDYp9mE2YXYs9iq2YLYqNmEINmE2YTYp9iq2LXYp9mE2KfYqiDZiNiq2YLZhtmK2Kkg2KfZhNmF2LnZhNmI2YXYp9iqINmF2KrYrti12LXZiNmGINmB2Yog2KfZhNiq2LPZiNmK2YIg2KfZhNiq2KzYp9ix2Yog2YjYp9mE2K7Zitix2Yog2YXZhiDYrtmE2KfZhCDYp9mE2YjYs9in2KbZhCDYp9mE2KrZgtmG2YrYqdiMINmI2YLZhdmG2Kcg2KjYpdmG2LTYp9ihINmH2LDYpyDYp9mE2LnZhdmEINin2YTZiNmC2YHZiiDYp9mG2LfZhNin2YLYp9mLINmF2YYg2YXYs9im2YjZhNmK2KrZhtinINij2YXYp9mFINin2YTYr9mK2YYg2KvZhSDYp9mE2YjYt9mGINir2YUg2KfZhNmF2KzYqtmF2LnYjCDZiNix2KfYudmK2YbYpyDZgdmK2Ycg2LPZitin2LPYqSDYqtis2LPZitixINin2YTYo9iv2YjYp9ixINmI2KfYqNiq2LnYr9mG2Kcg2KrZhdin2YXYp9mLINi52YYg2YXZh9mF2Kkg2KzZhdi5INin2YTYqtio2LHYudin2Kog2KjYo9mKINi02YPZhCDZhdmGINij2LTZg9in2YTZh9in2Iwg2YHZhtit2YYg2YHZgti3INmF2YbYtdipINil2LnZhNin2YYg2YjYqtmG2LPZitmCINmI2KrYs9mI2YrZgiDYrtmK2LHZiiDZhtis2YXYuSDYqNmK2YYg2KPYtdit2KfYqCDYp9mE2K3Yp9is2KfYqiDZhdmI2KfYt9mG2YjZhiDYo9mIINmF2YLZitmF2YjZhiDYqNmG2LjYp9mFINix2LPZhdmKINiv2KfYrtmEINin2YTYr9mI2YTYqSDZiNio2YrZhiDYp9mE2KzZhdi52YrYp9iqINin2YTZhdiz2KzZhNmI2YYg2LHYs9mF2YrYp9mLINmB2Yog2KfZhNmI2LLYp9ix2Kkg2YjYqNmK2YYg2KfZhNi02LHZg9in2Kog2KfZhNiv2KfYudmF2Kkg2KfZhNmF2LXYsditINmE2YfYpyDYsdiz2YXZitin2Ysg2KjZhdiy2KfZiNmE2Kkg2KfZhNiq2KzYp9ix2Kkg2KjYo9mG2YjYp9i52YfYpy5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgZG93bmxvYWQgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrXCI+XHJcbiAgICAgICAgICAgICAgICAgINit2YXZhCDYp9mE2KfZhlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgZC1ub25lIGQtbGctYmxvY2sgd293IHpvb21JblwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctcGxhY2UgbW9iaWxlLXByZXZpZXcgc2hhZG93IGZsb2F0aW5nLWFuaW1hdGVcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9hc3NldHMvaW1nL2FwcF9zaG93Y2FzZS5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2Utc2VjdGlvbiBuby1zY3JvbGxcIiBpZD1cIm91cnZhdlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgd293IGZhZGVJblwiPtmF2KfZitmF2YrYstmG2Kc8L2gyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC01XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEwXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBjb2wtbGctMyBweS0zIHdvdyBmYWRlSW5MZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWJvZHkgYm9yZGVyLTAgdGV4dC1jZW50ZXIgc2hhZG93IHB0LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN2Zy1pY29uIG14LWF1dG8gbWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXNoaWVsZC1hbHQgY29sb3ItaWNvbm5cIj48L2k+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZmctZ3JheVwiPtin2YTYrti12YjYtdmK2Kk8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZzLXNtYWxsXCI+INin2YTYrti12YjYtdmK2Kkg2KfZhNmD2KfZhdmE2Kkg2YTYo9i12K3Yp9ioINin2YTYrdiz2KfYqNin2Kog2LPZiNin2KEg2YPYp9mGINmF2LPYqtmB2YrYr9in2Ysg2KPZiCDYrNmF2LnZitipINij2Ygg2LTYsdmD2KkuPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBjb2wtbGctMyBweS0zIHdvdyBmYWRlSW5VcFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1ib2R5IGJvcmRlci0wIHRleHQtY2VudGVyIHNoYWRvdyBwdC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdmctaWNvbiBteC1hdXRvIG1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1wcmludCBjb2xvci1pY29ublwiPjwvaT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZnLWdyYXlcIj7YqtmC2KfYsdmK2LE8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZzLXNtYWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAg2KrZgtin2LHZitixINiq2YHYtdmK2YTZitipINio2KzZhdmK2Lkg2KfZhNi52YXZhNmK2KfYqiDYp9mE2KrZiiDYqtiq2YUuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBjb2wtbGctMyBweS0zIHdvdyBmYWRlSW5SaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1ib2R5IGJvcmRlci0wIHRleHQtY2VudGVyIHNoYWRvdyBwdC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdmctaWNvbiBteC1hdXRvIG1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1idWxsc2V5ZSBjb2xvci1pY29ublwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZmctZ3JheVwiPtin2YTZhdix2YjZhtipPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmcy1zbWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgINin2YTZhdix2YjZhtipINin2YTYudin2YTZitipINmB2Yog2KfYrtiq2YrYp9ixINin2YTYrtiv2YXYp9iqINmI2KfZhNiu2LXYp9im2LUuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGNvbC1sZy0zIHB5LTMgd293IGZhZGVJblJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWJvZHkgYm9yZGVyLTAgdGV4dC1jZW50ZXIgc2hhZG93IHB0LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN2Zy1pY29uIG14LWF1dG8gbWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWV5ZSBjb2xvci1pY29ublwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZmctZ3JheVwiPtin2YTYtNmB2KfZgdmK2Kk8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZzLXNtYWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAg2KfZhNi02YHYp9mB2YrYqSDYp9mE2YPYp9mF2YTYqSDYrdmK2Ksg2KPZhiDZhdmI2YLYuSDYsdio2YjYqSDZhNmK2LPYqiDZhNmHINij2Yog2K3Ys9in2Kgg2KjZhtmD2Yog2YjZhNinINmK2KrZhNmC2Ykg2KPZiiDYqtio2LHYudin2Kog2YXZhiDYo9mKINmG2YjYuSDZg9in2YYuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLXNlY3Rpb24gbm8tc2Nyb2xsXCIgaWQ9XCJzdHJlbmd0aFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNyB3b3cgZmFkZUluXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctcGxhY2VcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vYXNzZXRzL2ltZy9hcHBfcHJldmlld180LnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy01IHBsLWxnLTUgd293IGZhZGVJblVwIHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWItNFwiPti12LHZgSDYs9mH2YQg2YTZhNiq2KjYsdi52KfYqjwvaDI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNFwiPtiz2YfZiNmE2Kkg2LXYsdmBINin2YTYqtio2LHYudin2Kog2YTZhNmF2K3Yqtin2KzZitmGINio2KPYqNiz2Lcg2KfZhNi32LHZgjwvcD5cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5IHJvdW5kZWQtcGlsbFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgU2VlIEFkZG9uc1xyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2Utc2VjdGlvblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiICBzdHlsZT17e3RleHRBbGlnbjoncmlnaHQgIWltcG9ydGFudCd9fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgcHktM1wiIGRpcj1cInJ0bFwiIHN0eWxlPXt7dGV4dEFsaWduOidyaWdodCd9fT5cclxuICAgICAgICAgICAgICA8aDMgIHN0eWxlPXt7dGV4dEFsaWduOidyaWdodCd9fT7ZhtmC2KfYtyDYp9mE2YLZiNipOjwvaDM+XHJcbiAgICAgICAgICAgICAgPHVsICBzdHlsZT17e3RleHRBbGlnbjoncmlnaHQnLGxpc3RTdHlsZTonbm9uZSd9fT5cclxuICAgICAgICAgICAgICAgIDxsaT4xLiDYrdin2KzYqSDYp9mE2LnZhdmEINin2YTYrtmK2LHZiiDYpdmE2Ykg2YXZhti12Kkg2KrZhtiz2YrZgiDYqNmK2YYg2KPYt9ix2KfZgdmHINin2YTYo9ix2KjYudipICjYp9mE2KzZh9in2Kog2KfZhNil2LTYsdin2YHZitipINmI2KfZhNis2YXYudmK2KfYqiDYp9mE2K7Zitix2YrYqSDZiNin2YTYr9in2LnZhdmK2YYg2YjYp9mE2YXYs9iq2YHZitiv2YrZhikuPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT4yLiDYpdiq2KfYrdipINmB2LHYtdipINin2YTZhdi02KfYsdmD2Kkg2YHZiiDYp9mE2LnZhdmEINmE2YTYrtmK2LHZiiDZhNis2YXZiti5INin2YTYtNix2YPYp9iqINio2KfYrtiq2YTYp9mBINmF2LPYqtmI2YrYp9iq2YfYpyDYp9mE2YXYp9iv2YrYqS48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjMuINin2YTZiNi12YjZhCDYpdmE2Ykg2YLZiNin2LnYryDYqNmK2KfZhtin2Kog2KPZg9ir2LEg2K/ZgtipINmI2LTZhdmI2YTZitipINmI2KrZgdi12YrZhC48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjQuINil2YXZg9in2YbZitipINin2LPYqtir2YXYp9ixINin2YTYqNmK2KfZhtin2Kog2KfZhNmF2YjYrNmI2K/YqSDZgdmKINio2YbYp9ihINiu2LfYtyDYudmF2YQg2YjZhdi02KfYsdmK2Lkg2KrYt9mI2YrYsSDYudmE2Ykg2YXYs9iq2YjZiSDYp9mE2YXZhti32YLYqS48L2xpPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBweS0zXCIgZGlyPVwicnRsXCIgIHN0eWxlPXt7dGV4dEFsaWduOidyaWdodCd9fT5cclxuICAgICAgICAgICAgICA8aDMgIHN0eWxlPXt7dGV4dEFsaWduOidyaWdodCd9fT7Yo9mH2K/Yp9mB2YbYpzo8L2gzPlxyXG4gICAgICAgICAgICAgIDx1bCAgc3R5bGU9e3t0ZXh0QWxpZ246J3JpZ2h0JyxsaXN0U3R5bGU6J25vbmUnfX0+XHJcbiAgICAgICAgICAgICAgICA8bGk+MS4g2KrYrdmC2YrZgiDYp9mE2KrZg9in2YXZhCDYqNmK2YYg2KPYtdit2KfYqCDYp9mE2YXYtdmE2K3YqSDZiNin2YTYrNmF2LnZitin2Kog2YjYqNmK2YYg2KfZhNmF2KrYqNix2LnZitmGINmI2KfZhNmF2LPYqtmB2YrYr9mK2YYuPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT4yLiDYpdmK2KzYp9ivINio2YrYptipINiq2YbYp9mB2LPZitipINmB2Yog2LnZhdmEINin2YTYrtmK2LEg2KrYrdiq2LbZhiDYp9mE2KzZhdmK2Lkg2KjYp9iu2KrZhNin2YEg2YjYuNin2KbZgdmH2YUg2YjZhdiz2KrZiNmK2KfYqtmH2YUuPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT4zLiDYrtiv2YXYqSDYp9mE2YXYs9iq2YHZitiv2YrZhiDYqNij2LPZhNmI2Kgg2YrYrNmF2Lkg2KjZitmGINin2YTYrNmI2K/YqSDZiNin2YTYrti12YjYtdmK2KkuPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT40LiDYp9mE2YXYs9in2YfZhdipINmB2Yog2KrYrdiz2YrZhiDYrNmI2K/YqSDYp9mE2K3Zitin2Kkg2YTYrNmF2YrYuSDYo9mB2LHYp9ivINin2YTZhdis2KrZhdi5INio2YPYp9mB2Kkg2YXYs9iq2YjZitin2KrZh9mFINin2YTZhdi52YrYtNmK2KkuPC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG48ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBweS0zXCI+PGhyIC8+IDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgcHktM1wiIGRpcj1cInJ0bFwiICBzdHlsZT17e3RleHRBbGlnbjoncmlnaHQnfX0+XHJcbiAgICAgICAgICAgICAgPGgzICBzdHlsZT17e3RleHRBbGlnbjoncmlnaHQnfX0+2KPYs9mE2YjYqCDYp9mE2LnZhdmEOjwvaDM+XHJcbiAgICAgICAgICAgICAgPHVsICBzdHlsZT17e3RleHRBbGlnbjoncmlnaHQnLGxpc3RTdHlsZTonbm9uZSd9fT5cclxuICAgICAgICAgICAgICAgIDxsaT4xLiDZhdmG2LXYqSDYqtmB2KfYudmE2YrYqSDYqtis2YXYuSDYqNmK2YYg2KfZhNiz2YfZiNmE2Kkg2YjYp9mE2LPYsdi52Kkg2YHZiiDYqtmC2K/ZitmFINin2YTYrtiv2YXYp9iqLjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+Mi4g2KrZhtiz2YrZgiDYqNmK2YYg2KfZhNi02LHZg9in2Kog2KfZhNiq2Yog2KrYsdi62Kgg2YHZiiDYp9mE2K/YudmFINmI2KjZitmGINin2YTYrNmF2LnZitin2Kog2KfZhNiq2Yog2YTYr9mK2YfYpyDZhdiz2KrZgdmK2K/ZitmGLjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+My4g2YTYpyDZitiq2YUg2KfYs9iq2YLYqNin2YQg2KfZhNiq2KjYsdi52KfYqiDZhdmGINij2Yog2YbZiNi5INmD2KfZhiDZhdin2K/ZiiDYo9mIINi52YrZhtmKLjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+NC4g2KzZhdmK2Lkg2YLZiNin2LnYryDYqNmK2KfZhtin2Kog2KrYrti22Lkg2YTZhNij2YbYuNmF2Kkg2KfZhNix2LPZhdmK2KkuPC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1zZWN0aW9uXCIgc3R5bGU9e3tkaXNwbGF5OiBcIm5vbmVcIiB9fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBweS0zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uaWMtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uaWMtaXRlbSB3b3cgZmFkZUluVXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uaWMtY29udGVudCB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1Ptiq2KzYsdio2Kkg2LPZh9mE2Kkg2YjYs9ix2YrYudipPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmcy1zbWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAg2LPZh9mI2YTYqSDYp9mE2KrYqNix2Lkg2YjYs9mH2YjZhNipINi12LHZgSDYp9mE2YPZiNio2YjZhtin2Kog2LPZh9mI2YTYqSDYp9mE2KrYqNix2Lkg2YjYs9mH2YjZhNipINi12LHZgVxyXG4gICAgICAgICAgICAgICAgICAgICAg2KfZhNmD2YjYqNmI2YbYp9iqINiz2YfZiNmE2Kkg2KfZhNiq2KjYsdi5INmI2LPZh9mI2YTYqSDYtdix2YEg2KfZhNmD2YjYqNmI2YbYp9iqINiz2YfZiNmE2Kkg2KfZhNiq2KjYsdi5XHJcbiAgICAgICAgICAgICAgICAgICAgICDZiNiz2YfZiNmE2Kkg2LXYsdmBINin2YTZg9mI2KjZiNmG2KfYqiDYs9mH2YjZhNipINin2YTYqtio2LHYuSDZiNiz2YfZiNmE2Kkg2LXYsdmBINin2YTZg9mI2KjZiNmG2KfYqlxyXG4gICAgICAgICAgICAgICAgICAgICAg2LPZh9mI2YTYqSDYp9mE2KrYqNix2Lkg2YjYs9mH2YjZhNipINi12LHZgSDYp9mE2YPZiNio2YjZhtin2KpcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25pYy1tZCBpY29uaWMtdGV4dCBiZy13YXJuaW5nIGZnLXdoaXRlIHJvdW5kZWQtY2lyY2xlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWFpLWFuYWx5dGljc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25pYy1pdGVtIHdvdyBmYWRlSW5VcFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25pYy1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1Pti12LHZgSDYp9mF2YYg2YTZhNiq2KjYsdi52KfYqjwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnMtc21hbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgINi12LHZgSDYs9mH2YQg2YTZhNiq2KjYsdi52KfYqiDZhdmGINmC2KjZhCDYp9mE2YXYrdiq2KfYrCDYtdix2YEg2LPZh9mEINmE2YTYqtio2LHYudin2Kog2YXZhiDZgtio2YRcclxuICAgICAgICAgICAgICAgICAgICAgINin2YTZhdit2KrYp9isINi12LHZgSDYs9mH2YQg2YTZhNiq2KjYsdi52KfYqiDZhdmGINmC2KjZhCDYp9mE2YXYrdiq2KfYrCDYtdix2YEg2LPZh9mEINmE2YTYqtio2LHYudin2KpcclxuICAgICAgICAgICAgICAgICAgICAgINmF2YYg2YLYqNmEINin2YTZhdit2KrYp9isXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uaWMtbWQgaWNvbmljLXRleHQgYmctaW5mbyBmZy13aGl0ZSByb3VuZGVkLWNpcmNsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1haS1zaGllbGQtY2hlY2ttYXJrXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbmljLWl0ZW0gd293IGZhZGVJblVwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbmljLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDU+2KrZgtin2LHZitixINio2KrYqNix2LnYp9iq2YM8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZzLXNtYWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICDYqtmI2YHZitixINiq2YLYp9ix2YrYsSDZhNiq2KjYsdi52KfYqtmDINiq2YjZgdmK2LEg2KrZgtin2LHZitixINmE2KrYqNix2LnYp9iq2YMg2KrZiNmB2YrYsSDYqtmC2KfYsdmK2LFcclxuICAgICAgICAgICAgICAgICAgICAgINmE2KrYqNix2LnYp9iq2YMg2KrZiNmB2YrYsSDYqtmC2KfYsdmK2LEg2YTYqtio2LHYudin2KrZg1xyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbmljLW1kIGljb25pYy10ZXh0IGJnLWluZGlnbyBmZy13aGl0ZSByb3VuZGVkLWNpcmNsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1haS1kZXNrdG9wLW91dGxpbmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBweS0zIHdvdyB6b29tSW5cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1wbGFjZSBtb2JpbGUtcHJldmlldyBzaGFkb3dcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vYXNzZXRzL2ltZy9hcHBfcHJldmlld18yLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IHB5LTNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25pYy1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25pYy1pdGVtIHdvdyBmYWRlSW5VcFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25pYy1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1Ptiz2LHYudipINiq2YjYtdmK2YQg2KfZhNiq2KjYsdi52KfYqjwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnMtc21hbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgINiz2LHYudipINiq2YjYtdmK2YQg2KfZhNiq2KjYsdi52KfYqiDYs9ix2LnYqSDYqtmI2LXZitmEINin2YTYqtio2LHYudin2KrYs9ix2LnYqSDYqtmI2LXZitmEXHJcbiAgICAgICAgICAgICAgICAgICAgICDYp9mE2KrYqNix2LnYp9iq2LPYsdi52Kkg2KrZiNi12YrZhCDYp9mE2KrYqNix2LnYp9iq2LPYsdi52Kkg2KrZiNi12YrZhCDYp9mE2KrYqNix2LnYp9iq2LPYsdi52Kkg2KrZiNi12YrZhFxyXG4gICAgICAgICAgICAgICAgICAgICAg2KfZhNiq2KjYsdi52KfYqtiz2LHYudipINiq2YjYtdmK2YQg2KfZhNiq2KjYsdi52KfYqtiz2LHYudipINiq2YjYtdmK2YQg2KfZhNiq2KjYsdi52KfYqlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbmljLW1kIGljb25pYy10ZXh0IGJnLXdhcm5pbmcgZmctd2hpdGUgcm91bmRlZC1jaXJjbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYWktc3BlZWRvbWV0ZXItb3V0bGluZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25pYy1pdGVtIHdvdyBmYWRlSW5VcFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25pYy1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1Ptin2YXZhiDYqtmF2KfZhdinPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmcy1zbWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAg2KrYrNix2KjYqSDYp9mF2YbYqSDZgdmKINin2YTYqtio2LHYuSDZiNi12LHZgSDYp9mE2KrYqNix2LnYp9iq2KrYrNix2KjYqSDYp9mF2YbYqSDZgdmKINin2YTYqtio2LHYuVxyXG4gICAgICAgICAgICAgICAgICAgICAg2YjYtdix2YEg2KfZhNiq2KjYsdi52KfYqtiq2KzYsdio2Kkg2KfZhdmG2Kkg2YHZiiDYp9mE2KrYqNix2Lkg2YjYtdix2YEg2KfZhNiq2KjYsdi52KfYqtiq2KzYsdio2Kkg2KfZhdmG2KlcclxuICAgICAgICAgICAgICAgICAgICAgINmB2Yog2KfZhNiq2KjYsdi5INmI2LXYsdmBINin2YTYqtio2LHYudin2KrYqtis2LHYqNipINin2YXZhtipINmB2Yog2KfZhNiq2KjYsdi5INmI2LXYsdmBINin2YTYqtio2LHYudin2KpcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25pYy1tZCBpY29uaWMtdGV4dCBiZy1zdWNjZXNzIGZnLXdoaXRlIHJvdW5kZWQtY2lyY2xlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWFpLWFwZXJ0dXJlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbmljLWl0ZW0gd293IGZhZGVJblVwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbmljLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDU+2YXYqtin2KjYudipINin2K/Yp9ihINin2YTYqtio2LHYudin2Ko8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZzLXNtYWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICDZhdiq2KfYqNi52Kkg2KfYr9in2KEg2KfZhNiq2KjYsdi52KfYqiDYqNmD2YQg2LPZh9mI2YTYqSDZhdiq2KfYqNi52Kkg2KfYr9in2KEg2KfZhNiq2KjYsdi52KfYqiDYqNmD2YRcclxuICAgICAgICAgICAgICAgICAgICAgINiz2YfZiNmE2Kkg2YXYqtin2KjYudipINin2K/Yp9ihINin2YTYqtio2LHYudin2Kog2KjZg9mEINiz2YfZiNmE2Kkg2YXYqtin2KjYudipINin2K/Yp9ihINin2YTYqtio2LHYudin2KpcclxuICAgICAgICAgICAgICAgICAgICAgINio2YPZhCDYs9mH2YjZhNipINmF2KrYp9io2LnYqSDYp9iv2KfYoSDYp9mE2KrYqNix2LnYp9iqINio2YPZhCDYs9mH2YjZhNipe1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbmljLW1kIGljb25pYy10ZXh0IGJnLWluZGlnbyBmZy13aGl0ZSByb3VuZGVkLWNpcmNsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1haS1zdGF0cy1jaGFydC1vdXRsaW5lXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxociAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2Utc2VjdGlvblwiIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHRleHQtY2VudGVyIHdvdyBmYWRlSW5VcFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICAgICAgICAgIEdldCBhd2Vzb21lIGZlYXR1cmVzLCB3aXRob3V0IGV4dHJhIGNoYXJnZXNcclxuICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTVcIj5cclxuICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxyXG4gICAgICAgICAgICAgICAgTWFpb3JlcyBub24gbWFnbmFtLCBxdWlzIGFsaXF1aWQgZG9sb3IgbWFnbmlcclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLWdyb3VwIGJ0bi1ncm91cC10b2dnbGUgcm91bmRlZC1waWxsIGJ0bi1zd2l0Y2hcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJidXR0b25zXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYnRuIGFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJvcHRpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cIm9wdGlvbjFcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkXHJcbiAgICAgICAgICAgICAgICAgIC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICBNb250aGx5XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cIm9wdGlvbnNcIiBpZD1cIm9wdGlvbjJcIiAvPiBBbm51YWxseVxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2luZy10YWJsZSBtdC01IHdvdyBmYWRlSW5VcFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNpbmctaXRlbSBhY3RpdmUgbm8tdHJhbnNmb3JtXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljaW5nLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGg1PkJ1c2luZXNzIFBsYW48L2g1PlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZ3LW5vcm1hbFwiPiQ0OS4wMDwvaDE+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljaW5nLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0aGVtZS1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWl0ZW1cIj5QdXNoIE5vdGlmaWNhdGlvbjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWl0ZW1cIj5VbmxpbWl0ZWQgQmFuZHdpdGg8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1pdGVtXCI+UmVhbHRpbWUgRGF0YWJhc2U8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1pdGVtXCI+TW9udGhseSBCYWNrdXA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1pdGVtXCI+MjQvNyBTdXBwb3J0PC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhcmtcIj5DaG9vc2UgUGxhbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljaW5nLWl0ZW1cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNpbmctaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDU+U3RhcnRlciBQbGFuPC9oNT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmdy1ub3JtYWxcIj4kMjQuMDA8L2gxPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2luZy1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidGhlbWUtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1pdGVtXCI+UHVzaCBOb3RpZmljYXRpb248L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1pdGVtXCI+VW5saW1pdGVkIEJhbmR3aXRoPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtaXRlbVwiPlJlYWx0aW1lIERhdGFiYXNlPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtaXRlbVwiPk1vbnRobHkgQmFja3VwPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtaXRlbVwiPjI0LzcgU3VwcG9ydDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrXCI+Q2hvb3NlIFBsYW48L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxociAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2Utc2VjdGlvbiBiZy1saWdodFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy01IHB5LTMgd293IGZhZGVJblVwXCI+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1iLTRcIj7Yp9mE2KPYs9im2YTYqSDYp9mE2LTYp9im2LnYqSA8L2gyPlxyXG4gICAgICAgICAgICAgIDxwPtmH2YbYpyDZhtis2KfZiNioINi52YTZiSDYp9mE2KPYs9im2YTYqSDYp9mE2LTYp9im2LnYqS48L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmctcHJpbWFyeSBmdy1tZWRpdW1cIj7Yqtix2YrYryDYp9mE2YXYstmK2K8g2YXZhiDYp9mE2YXYs9in2LnYr9ipPzwvcD5cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1ncmFkaWVudCBidG4tc3BsaXQtaWNvbiByb3VuZGVkLXBpbGxcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gbWFpLWNhbGwtb3V0bGluZVwiIC8+INiq2YjYp9i12YQg2YXYudmG2KdcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy03IHB5LTMgbm8tc2Nyb2xsLXhcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbiBhY2NvcmRpb24tZ2FwXCIgaWQ9XCJhY2NvcmRpb25GQVFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWl0ZW0gd293IGZhZGVJblJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLXRyaWdnZXJcIiBpZD1cImhlYWRpbmdGb3VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGNvbGxhcHNlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjY29sbGFwc2UxXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwiY29sbGFwc2UxXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgIDEuINmH2YQgKNmF2YbYtdipINix2KjZiNipKSDYrNmF2LnZitipINiu2YrYsdmK2KnYn1xyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY29sbGFwc2UxXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2xsYXBzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiaGVhZGluZ0ZvdXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtcGFyZW50PVwiI2FjY29yZGlvbkZBUVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cD4xLiAo2YXZhti12Kkg2LHYqNmI2KkpINmF2LTYsdmI2Lkg2YjZgtmB2Yog2YrYqtio2Lkg2YTZhdik2LPYs9ipINiq2KzYp9ix2YrYqSDYp9iz2YXZh9inICjZhdik2LPYs9ipINit2YPZhdin2KEg2KfZhNmF2LPYqtmC2KjZhCDZhNmE2KfYqti12KfZhNin2Kog2YjYqtmC2YbZitipINin2YTZhdi52YTZiNmF2KfYqikg2YjZhdmC2LHZh9inINin2YTZhdmF2YTZg9ipINin2YTYudix2KjZitipINin2YTYs9i52YjYr9mK2Kkg4oCTINis2K/YqS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb24taXRlbSB3b3cgZmFkZUluUmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb24tdHJpZ2dlclwiIGlkPVwiaGVhZGluZ0VpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGNvbGxhcHNlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjY29sbGFwc2UyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwiY29sbGFwc2UyXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgIDIuINmH2YQgKNmF2YbYtdipINix2KjZiNipKSDYqti52YXZhCDYudmE2Ykg2YXYs9iq2YjZiSDZhdit2YTZiiDYo9mFINiv2YjZhNmK2J9cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImNvbGxhcHNlMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sbGFwc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImhlYWRpbmdFaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1wYXJlbnQ9XCIjYWNjb3JkaW9uRkFRXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgMi4gKNmF2YbYtdipINix2KjZiNipKSDYqtmC2K/ZhSDYrtiv2YXYp9iq2YfYpyDYqNil2LTYsdin2YEg2KfZhNis2YfYp9iqINin2YTYsdiz2YXZitipINiv2KfYrtmEINmD2YQg2K/ZiNmE2Kkg2YrYqtmFINmC2KjZiNmE2YfYpyDZgdmK2YcuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi1pdGVtIHdvdyBmYWRlSW5SaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi10cmlnZ2VyXCIgaWQ9XCJoZWFkaW5nRWlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gY29sbGFwc2VkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNjb2xsYXBzZTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJjb2xsYXBzZTNcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgMy4g2YXZhiDZh9mFINin2YTZhdiz2KrZgdmK2K/ZiNmGINmF2YYg2YXZhti12Kkg2LHYqNmI2KnYn1xyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY29sbGFwc2UzXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2xsYXBzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiaGVhZGluZ0VpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXBhcmVudD1cIiNhY2NvcmRpb25GQVFcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb24tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAzLiDYp9mE2YXYs9iq2YHZitiv2YjZhiDZh9mFINis2YXZiti5INij2LXYrdin2Kgg2KfZhNit2KfYrNin2Kog2KjYo9mG2YjYp9i52YfYpy5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWl0ZW0gd293IGZhZGVJblJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLXRyaWdnZXJcIiBpZD1cImhlYWRpbmdFaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBjb2xsYXBzZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI2NvbGxhcHNlMzNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJjb2xsYXBzZTMzXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgIDQuINmF2Kcg2K/ZiNixINin2YTYtNix2YPYp9iqINin2YTYqtis2KfYsdmK2KnYn1xyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY29sbGFwc2UzM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sbGFwc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImhlYWRpbmdFaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1wYXJlbnQ9XCIjYWNjb3JkaW9uRkFRXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgNC4g2YrYqtmFINin2YTYqtmG2LPZitmCINmF2Lkg2KfZhNi02LHZg9in2Kog2KfZhNix2KfYutio2Kkg2YHZiiDYr9i52YUg2KfZhNmF2K3Yqtin2KzZitmGINmF2YYg2K7ZhNin2YQgKNmF2YbYtdipINix2KjZiNipKSDZhNiq2YLYr9mK2YUg2KjYt9in2YLYp9iqINiu2LXZhSDYo9mIINio2LfYp9mC2KfYqiDYtNix2KfYoSDZhdis2KfZhtmK2Kkg2YTZhNmF2LPYqtmB2YrYr9mK2YYuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi1pdGVtIHdvdyBmYWRlSW5SaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi10cmlnZ2VyXCIgaWQ9XCJoZWFkaW5nRWlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gY29sbGFwc2VkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNjb2xsYXBzZTRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJjb2xsYXBzZTRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgNS4g2YXYpyDYr9mI2LEg2KfZhNis2YXYudmK2KfYqiDYp9mE2K7Zitix2YrYqdifXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb2xsYXBzZTRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbGxhcHNlXCJcclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJoZWFkaW5nRWlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtcGFyZW50PVwiI2FjY29yZGlvbkZBUVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgIDUuINiq2YLZiNmFINin2YTYrNmF2LnZitin2Kog2KfZhNiu2YrYsdmK2Kkg2KjYr9mI2LEg2KfZhNio2K3YqyDZhNmE2KrYrdmC2YIg2YXZhiDYtdit2Kkg2KjZitin2YbYp9iqINij2LXYrdin2Kgg2KfZhNit2KfYrNin2Kog2KfZhNmF2LPYrNmE2YrZhiDZgdmKINix2KjZiNipLlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWl0ZW0gd293IGZhZGVJblJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLXRyaWdnZXJcIiBpZD1cImhlYWRpbmdOaW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGNvbGxhcHNlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjY29sbGFwc2U0NlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cImNvbGxhcHNlNDZcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDYuINmF2KfYsNinINiq2LPYqtmB2YrYryDYp9mE2KzZhdi52YrYp9iq2J9cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImNvbGxhcHNlNDZcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbGxhcHNlXCJcclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJoZWFkaW5nTmluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1wYXJlbnQ9XCIjYWNjb3JkaW9uRkFRXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgNi4gKNmF2YbYtdipINix2KjZiNipKSDZitmI2YHYsSDYtNix2YrYrdipINmI2KfYs9i52Kkg2YXZhiDYp9mE2LTYsdmD2KfYqiDYp9mE2KrYrNin2LHZitipINin2YTYsdin2LrYqNipINmB2Yog2K/YudmFINin2YTZhdit2KrYp9is2YrZhiDYpdmF2Kcg2KjZg9mI2KjZiNmG2KfYqiDYtNix2KfYptmK2Kkg2YXYrNin2YbZitipINij2Ygg2YPZiNio2YjZhtin2Kog2K7YtdmFINmI2KrZiNmB2LEg2KPZhtmI2KfYuSDZhdiq2LnYr9iv2Kkg2YXZhiDYp9mE2K7Zitin2LHYp9iqINmI2KfZhNiu2K/Zhdin2Kog2YTZhNmF2K3Yqtin2KzZitmGINin2YTZhdiz2KzZhNmK2YYg2YTYr9mK2YfZhS5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb24taXRlbSB3b3cgZmFkZUluUmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb24tdHJpZ2dlclwiIGlkPVwiaGVhZGluZ0VpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGNvbGxhcHNlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjY29sbGFwc2U0NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cImNvbGxhcHNlNDVcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgNy4g2YXYp9iw2Kcg2KrYs9iq2YHZitivINin2YTYtNix2YPYp9iq2J9cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImNvbGxhcHNlNDVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbGxhcHNlXCJcclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJoZWFkaW5nRWlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtcGFyZW50PVwiI2FjY29yZGlvbkZBUVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgIDcuICjZhdmG2LXYqSDYsdio2YjYqSkg2YrZiNmB2LEg2YTZhNi02LHZg9in2Kog2YHYsdi1INin2YTZiNi12YjZhCDYp9mE2LPYsdmK2Lkg2KXZhNmJINin2YTZhdit2KrYp9is2YrZhiDYp9mE2YHYudmE2YrZitmGINmI2YrYqtmK2K0g2YTZh9inINin2YTYqtio2LHYuSDYp9mE2KLZhdmGINmE2YfZhSDZiNmK2LPZhditINmE2YTYtNix2YPYqSDYqNiq2YLYr9mK2YUg2KfZhNmF2KrZiNmB2LEg2YTYr9mK2YfYpyDZhdmGINmF2YbYqtis2KfYqiDYrdiz2Kgg2KXZhdmD2KfZhtmK2KfYqiDYp9mE2LTYsdmD2Kkg2YXZh9mF2Kcg2YPYp9mGINit2KzZhdmH2Kcg2YjZhdiz2KrZiNin2YfYp9iMINmI2YrYs9mH2YQg2YTZh9mFINi32LHZitmC2Kkg2KfZhNiq2KjYsdi5INil2YXYpyDYqNin2YTZhdmG2K0g2KfZhNmD2KfZhdmEINij2Ygg2KfZhNiu2LXZhS4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb24taXRlbSB3b3cgZmFkZUluUmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb24tdHJpZ2dlclwiIGlkPVwiaGVhZGluZ0VpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGNvbGxhcHNlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjY29sbGFwc2U1XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwiY29sbGFwc2U1XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgIDguINmH2YQg2KrYrdi12YQg2KfZhNis2YXYudmK2KfYqiDZiNin2YTYtNix2YPYp9iqINi52YTZiSDYqtmC2KfYsdmK2LEg2K7Yp9i12Kkg2KjZh9mFLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY29sbGFwc2U1XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2xsYXBzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiaGVhZGluZ0VpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXBhcmVudD1cIiNhY2NvcmRpb25GQVFcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb24tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA4LiDZhti52YUg2YjZhdmGINiu2YTYp9mEINmE2YjYrdipINiq2K3Zg9mFINiu2KfYtdipINmK2YXZg9mGINmE2YTYrNmF2LnZitipINij2Ygg2KfZhNi02LHZg9ipINin2YTYrdi12YjZhCDYudmE2Ykg2KrZgtin2LHZitixINiq2YHYtdmK2YTZitipINmI2YXYtNin2LHZg9iq2YfYpyDZhdi5INin2YTYrNmH2KfYqiDYp9mE2LHYs9mF2YrYqSDZhNmE2K/ZhNin2YTYqSDYudmE2Ykg2KXZhtis2KfYstin2KrZh9mFINio2LTZg9mEINmF2KrZhdmK2LIuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb24taXRlbSB3b3cgZmFkZUluUmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb24tdHJpZ2dlclwiIGlkPVwiaGVhZGluZ0VpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGNvbGxhcHNlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjY29sbGFwc2U2XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwiY29sbGFwc2U2XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgIDkuINmF2Kcg2YfZiiDYtNix2YjYtyDYp9mE2KrYs9is2YrZhCDZgdmKINin2YTZhdmG2LXYqdifXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb2xsYXBzZTZcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbGxhcHNlXCJcclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJoZWFkaW5nRWlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtcGFyZW50PVwiI2FjY29yZGlvbkZBUVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgZGlyPVwiUlRMXCIgc3R5bGU9e3ttYXJnaW5Ub3A6ICcwY20nLCBtYXJnaW5SaWdodDogJzBjbScsIG1hcmdpbkJvdHRvbTogJzBjbScsIG1hcmdpbkxlZnQ6ICcwY20nLCB0ZXh0QWxpZ246ICdyaWdodCcsIGxpbmVIZWlnaHQ6ICdub3JtYWwnLCBmb250U2l6ZTogMTUsIGZvbnRGYW1pbHk6ICdcIkNhbGlicmlcIixzYW5zLXNlcmlmJ319PjxzdHJvbmc+PHNwYW4gc3R5bGU9e3tmb250U2l6ZTogMTksIGZvbnRGYW1pbHk6ICdcIlNha2thbCBNYWphbGxhXCInLCBjb2xvcjogJyMwMDMzQ0MnfX0+LSDYtNix2YjYtyDYp9mE2KrYs9is2YrZhCDZhNmE2YXYs9iq2YHZitiv2YrZhjo8L3NwYW4+PC9zdHJvbmc+PC9wPlxyXG4gIDxwIGRpcj1cIlJUTFwiIHN0eWxlPXt7bWFyZ2luVG9wOiAnMGNtJywgbWFyZ2luUmlnaHQ6ICcwY20nLCBtYXJnaW5Cb3R0b206ICcwY20nLCBtYXJnaW5MZWZ0OiAnMGNtJywgdGV4dEFsaWduOiAncmlnaHQnLCBsaW5lSGVpZ2h0OiAnbm9ybWFsJywgZm9udFNpemU6IDE1LCBmb250RmFtaWx5OiAnXCJDYWxpYnJpXCIsc2Fucy1zZXJpZid9fT48c3BhbiBzdHlsZT17e2ZvbnRGYW1pbHk6ICdcIlNha2thbCBNYWphbGxhXCInfX0+MS4g2KPZhiDZitmD2YjZhiDZhNiv2Ykg2KfZhNmF2LPYqtmB2YrYryDYpdir2KjYp9iqINmH2YjZitipINix2LPZhdmK2Kkg2KPZiCDYpdmC2KfZhdipINiz2KfYsdmK2Kkg2KfZhNmF2YHYudmI2YQuPC9zcGFuPjwvcD5cclxuICA8cCBkaXI9XCJSVExcIiBzdHlsZT17e21hcmdpblRvcDogJzBjbScsIG1hcmdpblJpZ2h0OiAnMGNtJywgbWFyZ2luQm90dG9tOiAnMGNtJywgbWFyZ2luTGVmdDogJzBjbScsIHRleHRBbGlnbjogJ3JpZ2h0JywgbGluZUhlaWdodDogJ25vcm1hbCcsIGZvbnRTaXplOiAxNSwgZm9udEZhbWlseTogJ1wiQ2FsaWJyaVwiLHNhbnMtc2VyaWYnfX0+PHNwYW4gc3R5bGU9e3tmb250RmFtaWx5OiAnXCJTYWtrYWwgTWFqYWxsYVwiJ319PjIuINij2YYg2YrZg9mI2YYg2YXYs9iq2K3Zgtin2Ysg2YTZhNmF2LPYp9i52K/YqS48L3NwYW4+PC9wPlxyXG4gIDxwIGRpcj1cIlJUTFwiIHN0eWxlPXt7bWFyZ2luVG9wOiAnMGNtJywgbWFyZ2luUmlnaHQ6ICcwY20nLCBtYXJnaW5Cb3R0b206ICcwY20nLCBtYXJnaW5MZWZ0OiAnMGNtJywgdGV4dEFsaWduOiAncmlnaHQnLCBsaW5lSGVpZ2h0OiAnbm9ybWFsJywgZm9udFNpemU6IDE1LCBmb250RmFtaWx5OiAnXCJDYWxpYnJpXCIsc2Fucy1zZXJpZid9fT48c3BhbiBzdHlsZT17e2ZvbnRGYW1pbHk6ICdcIlNha2thbCBNYWphbGxhXCInfX0+Jm5ic3A7PC9zcGFuPjwvcD5cclxuICA8cCBkaXI9XCJSVExcIiBzdHlsZT17e21hcmdpblRvcDogJzBjbScsIG1hcmdpblJpZ2h0OiAnMGNtJywgbWFyZ2luQm90dG9tOiAnMGNtJywgbWFyZ2luTGVmdDogJzBjbScsIHRleHRBbGlnbjogJ3JpZ2h0JywgbGluZUhlaWdodDogJ25vcm1hbCcsIGZvbnRTaXplOiAxNSwgZm9udEZhbWlseTogJ1wiQ2FsaWJyaVwiLHNhbnMtc2VyaWYnfX0+PHN0cm9uZz48c3BhbiBzdHlsZT17e2ZvbnRTaXplOiAxOSwgZm9udEZhbWlseTogJ1wiU2Fra2FsIE1hamFsbGFcIicsIGNvbG9yOiAnIzAwMzNDQyd9fT4tINi02LHZiNi3INin2YTYqtiz2KzZitmEINmE2YTYtNix2YPYp9iqOjwvc3Bhbj48L3N0cm9uZz48L3A+XHJcbiAgPHAgZGlyPVwiUlRMXCIgc3R5bGU9e3ttYXJnaW5Ub3A6ICcwY20nLCBtYXJnaW5SaWdodDogJzBjbScsIG1hcmdpbkJvdHRvbTogJzBjbScsIG1hcmdpbkxlZnQ6ICcwY20nLCB0ZXh0QWxpZ246ICdyaWdodCcsIGxpbmVIZWlnaHQ6ICdub3JtYWwnLCBmb250U2l6ZTogMTUsIGZvbnRGYW1pbHk6ICdcIkNhbGlicmlcIixzYW5zLXNlcmlmJ319PjxzcGFuIHN0eWxlPXt7Zm9udEZhbWlseTogJ1wiU2Fra2FsIE1hamFsbGFcIid9fT4xLiDYo9mGINmK2YPZiNmGINmE2K/ZitmH2Kcg2YbYuNin2YUg2YXYrdin2LPYqNmKINin2YTZg9iq2LHZiNmG2Yog2YXZhiDYo9mKINmG2YjYuSDZg9in2YbYjCDYo9mIINmF2YbYtdipINin2YTZg9iq2LHZiNmG2YrYqS48L3NwYW4+PC9wPlxyXG4gIDxwIGRpcj1cIlJUTFwiIHN0eWxlPXt7bWFyZ2luVG9wOiAnMGNtJywgbWFyZ2luUmlnaHQ6ICcwY20nLCBtYXJnaW5Cb3R0b206ICcwY20nLCBtYXJnaW5MZWZ0OiAnMGNtJywgdGV4dEFsaWduOiAncmlnaHQnLCBsaW5lSGVpZ2h0OiAnbm9ybWFsJywgZm9udFNpemU6IDE1LCBmb250RmFtaWx5OiAnXCJDYWxpYnJpXCIsc2Fucy1zZXJpZid9fT48c3BhbiBzdHlsZT17e2ZvbnRGYW1pbHk6ICdcIlNha2thbCBNYWphbGxhXCInfX0+Jm5ic3A7PC9zcGFuPjwvcD5cclxuICA8cCBkaXI9XCJSVExcIiBzdHlsZT17e21hcmdpblRvcDogJzBjbScsIG1hcmdpblJpZ2h0OiAnMGNtJywgbWFyZ2luQm90dG9tOiAnMGNtJywgbWFyZ2luTGVmdDogJzBjbScsIHRleHRBbGlnbjogJ3JpZ2h0JywgbGluZUhlaWdodDogJ25vcm1hbCcsIGZvbnRTaXplOiAxNSwgZm9udEZhbWlseTogJ1wiQ2FsaWJyaVwiLHNhbnMtc2VyaWYnfX0+PHN0cm9uZz48c3BhbiBzdHlsZT17e2ZvbnRTaXplOiAxOSwgZm9udEZhbWlseTogJ1wiU2Fra2FsIE1hamFsbGFcIicsIGNvbG9yOiAnIzAwMzNDQyd9fT4tINi02LHZiNi3INin2YTYqtiz2KzZitmEINmE2LPZgdix2KfYoSDYp9mE2YXZhti12KkgKNij2YHYsdin2K8pINij2YggKNis2YXYudmK2KfYqik6PC9zcGFuPjwvc3Ryb25nPjwvcD5cclxuICA8cCBkaXI9XCJSVExcIiBzdHlsZT17e21hcmdpblRvcDogJzBjbScsIG1hcmdpblJpZ2h0OiAnMGNtJywgbWFyZ2luQm90dG9tOiAnMGNtJywgbWFyZ2luTGVmdDogJzBjbScsIHRleHRBbGlnbjogJ3JpZ2h0JywgbGluZUhlaWdodDogJ25vcm1hbCcsIGZvbnRTaXplOiAxNSwgZm9udEZhbWlseTogJ1wiQ2FsaWJyaVwiLHNhbnMtc2VyaWYnfX0+PHN0cm9uZz48c3BhbiBzdHlsZT17e2ZvbnRGYW1pbHk6ICdcIlNha2thbCBNYWphbGxhXCInLCBjb2xvcjogJ2dyZWVuJ319PtmE2YTYrNmF2LnZitin2Ko6PC9zcGFuPjwvc3Ryb25nPjwvcD5cclxuICA8cCBkaXI9XCJSVExcIiBzdHlsZT17e21hcmdpblRvcDogJzBjbScsIG1hcmdpblJpZ2h0OiAnMGNtJywgbWFyZ2luQm90dG9tOiAnMGNtJywgbWFyZ2luTGVmdDogJzBjbScsIHRleHRBbGlnbjogJ3JpZ2h0JywgbGluZUhlaWdodDogJ25vcm1hbCcsIGZvbnRTaXplOiAxNSwgZm9udEZhbWlseTogJ1wiQ2FsaWJyaVwiLHNhbnMtc2VyaWYnfX0+PHNwYW4gc3R5bGU9e3tmb250RmFtaWx5OiAnXCJTYWtrYWwgTWFqYWxsYVwiJ319PjEuINij2YYg2KrZg9mI2YYg2KfZhNis2YXYudmK2Kkg2YXYs9is2YTYqSDYsdiz2YXZitin2Ysg2YHZiiDYp9mE2YjYstin2LHYqSDYqNiq2LXYsdmK2K0g2LPYp9ix2Yog2KfZhNmF2YHYudmI2YQuPC9zcGFuPjwvcD5cclxuICA8cCBkaXI9XCJSVExcIiBzdHlsZT17e21hcmdpblRvcDogJzBjbScsIG1hcmdpblJpZ2h0OiAnMGNtJywgbWFyZ2luQm90dG9tOiAnMGNtJywgbWFyZ2luTGVmdDogJzBjbScsIHRleHRBbGlnbjogJ3JpZ2h0JywgbGluZUhlaWdodDogJ25vcm1hbCcsIGZvbnRTaXplOiAxNSwgZm9udEZhbWlseTogJ1wiQ2FsaWJyaVwiLHNhbnMtc2VyaWYnfX0+PHNwYW4gc3R5bGU9e3tmb250RmFtaWx5OiAnXCJTYWtrYWwgTWFqYWxsYVwiJ319PjIuINij2YYg2KrZg9mI2YYg2KfZhNis2YXYudmK2Kkg2YXYqtiu2LXYtdipINmB2Yog2YXYrNin2YQg2KfZhNi52YXZhCDYp9mE2KXYutin2KvZii48L3NwYW4+PC9wPlxyXG4gIDxwIGRpcj1cIlJUTFwiIHN0eWxlPXt7bWFyZ2luVG9wOiAnMGNtJywgbWFyZ2luUmlnaHQ6ICcwY20nLCBtYXJnaW5Cb3R0b206ICcwY20nLCBtYXJnaW5MZWZ0OiAnMGNtJywgdGV4dEFsaWduOiAncmlnaHQnLCBsaW5lSGVpZ2h0OiAnbm9ybWFsJywgZm9udFNpemU6IDE1LCBmb250RmFtaWx5OiAnXCJDYWxpYnJpXCIsc2Fucy1zZXJpZid9fT48c3BhbiBzdHlsZT17e2ZvbnRGYW1pbHk6ICdcIlNha2thbCBNYWphbGxhXCInfX0+Jm5ic3A7PC9zcGFuPjwvcD5cclxuICA8cCBkaXI9XCJSVExcIiBzdHlsZT17e21hcmdpblRvcDogJzBjbScsIG1hcmdpblJpZ2h0OiAnMGNtJywgbWFyZ2luQm90dG9tOiAnMGNtJywgbWFyZ2luTGVmdDogJzBjbScsIHRleHRBbGlnbjogJ3JpZ2h0JywgbGluZUhlaWdodDogJ25vcm1hbCcsIGZvbnRTaXplOiAxNSwgZm9udEZhbWlseTogJ1wiQ2FsaWJyaVwiLHNhbnMtc2VyaWYnfX0+PHN0cm9uZz48c3BhbiBzdHlsZT17e2ZvbnRGYW1pbHk6ICdcIlNha2thbCBNYWphbGxhXCInLCBjb2xvcjogJ2dyZWVuJ319PtmE2YTYo9mB2LHYp9ivOjwvc3Bhbj48L3N0cm9uZz48L3A+XHJcbiAgPHAgZGlyPVwiUlRMXCIgc3R5bGU9e3ttYXJnaW5Ub3A6ICcwY20nLCBtYXJnaW5SaWdodDogJzBjbScsIG1hcmdpbkJvdHRvbTogJzBjbScsIG1hcmdpbkxlZnQ6ICcwY20nLCB0ZXh0QWxpZ246ICdyaWdodCcsIGxpbmVIZWlnaHQ6ICdub3JtYWwnLCBmb250U2l6ZTogMTUsIGZvbnRGYW1pbHk6ICdcIkNhbGlicmlcIixzYW5zLXNlcmlmJ319PjxzcGFuIHN0eWxlPXt7Zm9udEZhbWlseTogJ1wiU2Fra2FsIE1hamFsbGFcIid9fT4xLiDYo9mGINmK2YPZiNmGINmE2YTZgdix2K8g2KXYq9io2KfYqiDZh9mI2YrYqSDYsdiz2YXZitipINij2Ygg2KXZgtin2YXYqSDYs9in2LHZitipINin2YTZhdmB2LnZiNmELjwvc3Bhbj48L3A+XHJcbiAgPHAgZGlyPVwiUlRMXCIgc3R5bGU9e3ttYXJnaW5Ub3A6ICcwY20nLCBtYXJnaW5SaWdodDogJzBjbScsIG1hcmdpbkJvdHRvbTogJzBjbScsIG1hcmdpbkxlZnQ6ICcwY20nLCB0ZXh0QWxpZ246ICdyaWdodCcsIGxpbmVIZWlnaHQ6ICdub3JtYWwnLCBmb250U2l6ZTogMTUsIGZvbnRGYW1pbHk6ICdcIkNhbGlicmlcIixzYW5zLXNlcmlmJ319PjxzcGFuIHN0eWxlPXt7Zm9udEZhbWlseTogJ1wiU2Fra2FsIE1hamFsbGFcIid9fT4yLiDYp9mE2K3YtdmI2YQg2LnZhNmJINiq2YHZiNmK2LYg2LHYs9mF2Yog2YXZhiDYrNmF2LnZitipINiu2YrYsdmK2Kkg2YXYs9is2YTYqSDYsdiz2YXZitin2YsuPC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi1pdGVtIHdvdyBmYWRlSW5SaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi10cmlnZ2VyXCIgaWQ9XCJoZWFkaW5nRWlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gY29sbGFwc2VkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNjb2xsYXBzZTdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJjb2xsYXBzZTdcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgMTAuINmH2YQg2KrYs9iq2YLYqNmEICjZhdmG2LXYqSDYsdio2YjYqSkg2KrYqNix2LnYp9iqINmF2KfYr9mK2Kkg2KPZiCDYudmK2YbZitip2J9cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImNvbGxhcHNlN1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sbGFwc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImhlYWRpbmdFaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1wYXJlbnQ9XCIjYWNjb3JkaW9uRkFRXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgMTAuINmE2Kcg2KrYs9iq2YLYqNmEICjZhdmG2LXYqSDYsdio2YjYqSkg2KPZiiDYqtio2LHYudin2Kog2YXZhiDYo9mKINmG2YjYuSDZg9in2YYg2YjZhNinINiq2YXYqtmE2YMg2K3Ys9in2KjYp9mLINio2YbZg9mK2KfZiyDYrtin2LUg2KjZh9inINmI2KXZhtmF2Kcg2YrZgtiq2LXYsSDYr9mI2LHZh9inINi52YTZiSDYqtis2LPZitixINin2YTYo9iv2YjYp9ixINio2YrZhiDYp9mE2YXYrdiq2KfYrNmK2YYg2YjYp9mE2KzZhdi52YrYp9iqINmI2KfZhNi02LHZg9in2KouXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWl0ZW0gd293IGZhZGVJblJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLXRyaWdnZXJcIiBpZD1cImhlYWRpbmdFaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBjb2xsYXBzZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI2NvbGxhcHNlOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cImNvbGxhcHNlOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAxMS4g2YXYpyDZhdi12YrYsSDYp9mE2KjZitin2YbYp9iqINin2YTYqtmKINmK2KrZhSDYqtiz2KzZitmE2YfYpyDYs9mI2KfYoSDZhNmE2YXYs9iq2YHZitivINij2Ygg2YTZhNis2YXYudmK2Kkg2KPZiCDZhNmE2LTYsdmD2KkuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb2xsYXBzZThcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbGxhcHNlXCJcclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJoZWFkaW5nRWlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtcGFyZW50PVwiI2FjY29yZGlvbkZBUVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgIDExLiDYqti22YXZhiAo2YXZhti12Kkg2LHYqNmI2KkpINiz2LHZitipINin2YTYqNmK2KfZhtin2Kog2KfZhNmF2LPYrNmE2Kkg2YTYrNmF2YrYuSDYo9mG2YjYp9i5INin2YTYrdiz2KfYqNin2KpcclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi1pdGVtIHdvdyBmYWRlSW5SaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi10cmlnZ2VyXCIgaWQ9XCJoZWFkaW5nRWlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gY29sbGFwc2VkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNjb2xsYXBzZTlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJjb2xsYXBzZTlcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgMTIuINmH2YQg2YrZhdmD2YYg2YTZhNi02LHZg9ipINij2Ygg2KfZhNis2YXYudmK2Kkg2KfZhNin2K3YqtmB2KfYuCDYqNmG2LPYrtipINmF2YYg2KfZhNio2YrYp9mG2KfYqiDYp9mE2K7Yp9i12Kkg2KjZh9in2J9cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImNvbGxhcHNlOVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sbGFwc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImhlYWRpbmdFaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1wYXJlbnQ9XCIjYWNjb3JkaW9uRkFRXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgMTIuINmG2LnZhSDZitmF2YPZhiDZhNmE2LTYsdmD2Kkg2YjZg9iw2YTZgyDYp9mE2KzZhdi52YrYqSDYp9mE2KfYrdiq2YHYp9i4INio2YbYs9iu2Kkg2YXZhiDYp9mE2KjZitin2YbYp9iqINin2YTYrtin2LXYqSDYqNmH2KcuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWl0ZW0gd293IGZhZGVJblJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLXRyaWdnZXJcIiBpZD1cImhlYWRpbmdFaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBjb2xsYXBzZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI2NvbGxhcHNlMTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJjb2xsYXBzZTEwXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgMTMuINmF2Kcg2YfZiiDYt9ix2YrZgtipINin2YTYqNit2Ksg2YjYp9mE2KrYo9mD2K8g2YXZhiDYtdit2Kkg2K3Yp9mE2Kkg2KfZhNmF2LPYqtmB2YrYryDZiNmH2YQg2YfZiCDZhdit2KrYp9isINmB2LnZhNin2Ysg2KPZiCDZhNin2J9cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImNvbGxhcHNlMTBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbGxhcHNlXCJcclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJoZWFkaW5nRWlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtcGFyZW50PVwiI2FjY29yZGlvbkZBUVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgIDEzLiDZhdmGINmK2YLZiNmFINio2K/ZiNixINin2YTYqNin2K3YqyDZgdmKICjZhdmG2LXYqSDYsdio2YjYqSkg2YfZhSDYp9mE2KzZhdi52YrYp9iqINij2Ygg2KfZhNio2KfYrdir2YjZhiDYp9mE2YXYqti32YjYudmI2YYg2YXZhiDYrNmH2KfYqiDYsdiz2YXZitipINmI2YfZhSDZhdiq2YXYsdiz2YjZhiDYudmE2Ykg2YfYsNinINin2YTYudmF2YQg2KXYttin2YHYqSDYpdmE2Ykg2KPZhtmG2Kcg2YHZiiAo2YXZhti12Kkg2LHYqNmI2KkpINmG2YjZgdixINmE2YfZhSDZhtmF2KfYsNisINin2YTZg9iq2LHZiNmG2YrYqSDZhNmE2KrYrdmC2YIg2YjYp9mE2KrYo9mD2K8g2YXZhiDYtdit2Kkg2KfZhNio2YrYp9mG2KfYqiDYp9mE2YXYs9is2YTYqSDZhdmGINis2YfYqSDYp9mE2YXYs9iq2YHZitivIOKAkyDYp9mE2YXYrdiq2KfYrCAtINmF2Lkg2KrYtdmG2YrZgSDZhdiz2KrZiNmJINmI2YbZiNi5INin2YTYp9it2KrZitin2KwuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb24taXRlbSB3b3cgZmFkZUluUmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb24tdHJpZ2dlclwiIGlkPVwiaGVhZGluZ0VpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGNvbGxhcHNlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjY29sbGFwc2UxMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cImNvbGxhcHNlMTFcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgMTQuINmF2Kcg2YfZiiDYt9ix2YrZgtipINin2YTYqtiz2KzZitmEINmB2Yog2KfZhNmF2YbYtdip2J9cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImNvbGxhcHNlMTFcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbGxhcHNlXCJcclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJoZWFkaW5nRWlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtcGFyZW50PVwiI2FjY29yZGlvbkZBUVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgZGlyPVwiUlRMXCIgc3R5bGU9e3ttYXJnaW5Ub3A6ICcwY20nLCBtYXJnaW5SaWdodDogJzBjbScsIG1hcmdpbkJvdHRvbTogJzBjbScsIG1hcmdpbkxlZnQ6ICcwY20nLCB0ZXh0QWxpZ246ICdyaWdodCcsIGxpbmVIZWlnaHQ6ICdub3JtYWwnLCBmb250U2l6ZTogMTUsIGZvbnRGYW1pbHk6ICdcIkNhbGlicmlcIixzYW5zLXNlcmlmJ319PjxzdHJvbmc+PHNwYW4gc3R5bGU9e3tmb250U2l6ZTogMTksIGZvbnRGYW1pbHk6ICdcIlNha2thbCBNYWphbGxhXCInLCBjb2xvcjogJyMwMDMzQ0MnfX0+LSDZhNmE2YXYs9iq2YHZitivOjwvc3Bhbj48L3N0cm9uZz48L3A+XHJcbiAgPHAgZGlyPVwiUlRMXCIgc3R5bGU9e3ttYXJnaW5Ub3A6ICcwY20nLCBtYXJnaW5SaWdodDogJzBjbScsIG1hcmdpbkJvdHRvbTogJzBjbScsIG1hcmdpbkxlZnQ6ICcwY20nLCB0ZXh0QWxpZ246ICdyaWdodCcsIGxpbmVIZWlnaHQ6ICdub3JtYWwnLCBmb250U2l6ZTogMTUsIGZvbnRGYW1pbHk6ICdcIkNhbGlicmlcIixzYW5zLXNlcmlmJ319PjxzcGFuIHN0eWxlPXt7Zm9udEZhbWlseTogJ1wiU2Fra2FsIE1hamFsbGFcIid9fT4xLiDYqNi52K8g2YLYsdin2KHYqtmDINmE2LTYsdmI2Lcg2KfZhNin2YbYttmF2KfZhSDZhNmF2YbYtdipINix2KjZiNipINmD2YXYs9iq2YHZitivINmC2YUg2KjYp9iu2KrZitin2LEgKNil2YbYtNin2KEg2K3Ys9in2Kgg2KzYr9mK2K8pLjwvc3Bhbj48L3A+XHJcbiAgPHAgZGlyPVwiUlRMXCIgc3R5bGU9e3ttYXJnaW5Ub3A6ICcwY20nLCBtYXJnaW5SaWdodDogJzBjbScsIG1hcmdpbkJvdHRvbTogJzBjbScsIG1hcmdpbkxlZnQ6ICcwY20nLCB0ZXh0QWxpZ246ICdyaWdodCcsIGxpbmVIZWlnaHQ6ICdub3JtYWwnLCBmb250U2l6ZTogMTUsIGZvbnRGYW1pbHk6ICdcIkNhbGlicmlcIixzYW5zLXNlcmlmJ319PjxzcGFuIHN0eWxlPXt7Zm9udEZhbWlseTogJ1wiU2Fra2FsIE1hamFsbGFcIid9fT4yLiDYs9mK2KrZhSDYr9ix2KfYs9ipINi32YTYqCDYp9mG2LbZhdin2YXZgyDZhNmE2YXZhti12Kkg2YPZhdiz2KrZgdmK2K8g2YXZhiDYp9mE2KrYqNix2LnYp9iqINmI2KfZhNiu2LXZiNmF2KfYqiDZiNin2YTYsdivINi52YTZitmDINio2LHYs9in2YTYqSZuYnNwOzwvc3Bhbj48c3BhbiBkaXI9XCJMVFJcIiBzdHlsZT17e2ZvbnRGYW1pbHk6ICdcIlNha2thbCBNYWphbGxhXCInfX0+U01TPC9zcGFuPjxzcGFuIHN0eWxlPXt7Zm9udEZhbWlseTogJ1wiU2Fra2FsIE1hamFsbGFcIid9fT4uPC9zcGFuPjwvcD5cclxuICA8cCBkaXI9XCJSVExcIiBzdHlsZT17e21hcmdpblRvcDogJzBjbScsIG1hcmdpblJpZ2h0OiAnMGNtJywgbWFyZ2luQm90dG9tOiAnMGNtJywgbWFyZ2luTGVmdDogJzBjbScsIHRleHRBbGlnbjogJ3JpZ2h0JywgbGluZUhlaWdodDogJ25vcm1hbCcsIGZvbnRTaXplOiAxNSwgZm9udEZhbWlseTogJ1wiQ2FsaWJyaVwiLHNhbnMtc2VyaWYnfX0+PHNwYW4gc3R5bGU9e3tmb250RmFtaWx5OiAnXCJTYWtrYWwgTWFqYWxsYVwiJ319PjMuINiz2YrYqtmFINiv2LHYp9iz2Kkg2K3Yp9mE2KrZgyDZhdmGINmC2KjZhCDYp9mE2KjYp9it2Ksg2KfZhNmF2K7Yqti1Ljwvc3Bhbj48L3A+XHJcbiAgPHAgZGlyPVwiUlRMXCIgc3R5bGU9e3ttYXJnaW5Ub3A6ICcwY20nLCBtYXJnaW5SaWdodDogJzBjbScsIG1hcmdpbkJvdHRvbTogJzBjbScsIG1hcmdpbkxlZnQ6ICcwY20nLCB0ZXh0QWxpZ246ICdyaWdodCcsIGxpbmVIZWlnaHQ6ICdub3JtYWwnLCBmb250U2l6ZTogMTUsIGZvbnRGYW1pbHk6ICdcIkNhbGlicmlcIixzYW5zLXNlcmlmJ319PjxzcGFuIHN0eWxlPXt7Zm9udEZhbWlseTogJ1wiU2Fra2FsIE1hamFsbGFcIid9fT41LiDZgdmKINit2KfZhNipINmC2KjZiNmE2YMg2LPZitmF2YPZhtmDINin2YTYr9iu2YjZhCDZhdmGINiu2YTYp9mEINix2YLZhSDYp9mE2KzZiNin2YQg2YjYs9mK2KrZhSDYpdix2LPYp9mEINix2YXYsiDYp9mE2K/YrtmI2YQg2KPZiti22KfZiyDZhdmGINiu2YTYp9mEINix2LPYp9mE2KkmbmJzcDs8L3NwYW4+PHNwYW4gZGlyPVwiTFRSXCIgc3R5bGU9e3tmb250RmFtaWx5OiAnXCJTYWtrYWwgTWFqYWxsYVwiJ319PlNNUzwvc3Bhbj48c3BhbiBzdHlsZT17e2ZvbnRGYW1pbHk6ICdcIlNha2thbCBNYWphbGxhXCInfX0+Ljwvc3Bhbj48L3A+XHJcbiAgPHAgZGlyPVwiUlRMXCIgc3R5bGU9e3ttYXJnaW5Ub3A6ICcwY20nLCBtYXJnaW5SaWdodDogJzBjbScsIG1hcmdpbkJvdHRvbTogJzBjbScsIG1hcmdpbkxlZnQ6ICcwY20nLCB0ZXh0QWxpZ246ICdyaWdodCcsIGxpbmVIZWlnaHQ6ICdub3JtYWwnLCBmb250U2l6ZTogMTUsIGZvbnRGYW1pbHk6ICdcIkNhbGlicmlcIixzYW5zLXNlcmlmJ319PjxzcGFuIHN0eWxlPXt7Zm9udEZhbWlseTogJ1wiU2Fra2FsIE1hamFsbGFcIid9fT42LiDZgtmFINio2KfYrtiq2YrYp9ixINin2YTYrtiv2YXYp9iqINin2YTYqtmKINiq2K3Yqtin2KzZh9inLjwvc3Bhbj48L3A+XHJcbiAgPHAgZGlyPVwiUlRMXCIgc3R5bGU9e3ttYXJnaW5Ub3A6ICcwY20nLCBtYXJnaW5SaWdodDogJzBjbScsIG1hcmdpbkJvdHRvbTogJzBjbScsIG1hcmdpbkxlZnQ6ICcwY20nLCB0ZXh0QWxpZ246ICdyaWdodCcsIGxpbmVIZWlnaHQ6ICdub3JtYWwnLCBmb250U2l6ZTogMTUsIGZvbnRGYW1pbHk6ICdcIkNhbGlicmlcIixzYW5zLXNlcmlmJ319PjxzcGFuIHN0eWxlPXt7Zm9udEZhbWlseTogJ1wiU2Fra2FsIE1hamFsbGFcIid9fT43LiDYs9iq2YLZiNmFINil2K/Yp9ix2Kkg2KfZhNmF2YbYtdipINio2KXZiti12KfZhCDYt9mE2KjZgyDYpdmE2Ykg2KfZhNi02LHZg9in2Kog2KfZhNmF2LPYrNmE2Kkg2YTYr9mK2YfYpy48L3NwYW4+PC9wPlxyXG4gIDxwIGRpcj1cIlJUTFwiIHN0eWxlPXt7bWFyZ2luVG9wOiAnMGNtJywgbWFyZ2luUmlnaHQ6ICcwY20nLCBtYXJnaW5Cb3R0b206ICcwY20nLCBtYXJnaW5MZWZ0OiAnMGNtJywgdGV4dEFsaWduOiAncmlnaHQnLCBsaW5lSGVpZ2h0OiAnbm9ybWFsJywgZm9udFNpemU6IDE1LCBmb250RmFtaWx5OiAnXCJDYWxpYnJpXCIsc2Fucy1zZXJpZid9fT48c3BhbiBzdHlsZT17e2ZvbnRGYW1pbHk6ICdcIlNha2thbCBNYWphbGxhXCInfX0+OC4g2YHZiiDYrdin2YQg2LHYutio2Kkg2KXYrdiv2Ykg2KfZhNi02LHZg9in2Kog2KjYqtmE2KjZitipINin2K3YqtmK2KfYrNin2KrZgyDYs9mK2KrZhSDYpdix2LPYp9mEINix2LPYp9mE2Kkg2KXZhNmK2YMg2KrZgdmK2K/ZgyDYqNin2YTYp9it2KrZitin2KzYp9iqINin2YTYqtmKINiq2YUg2KrYo9mF2YrZhtmH2Kcg2YXYuSDYudmG2KfZiNmK2YYg2KfZhNi02LHZg9ipLjwvc3Bhbj48L3A+XHJcbiAgPHAgZGlyPVwiUlRMXCIgc3R5bGU9e3ttYXJnaW5Ub3A6ICcwY20nLCBtYXJnaW5SaWdodDogJzBjbScsIG1hcmdpbkJvdHRvbTogJzBjbScsIG1hcmdpbkxlZnQ6ICcwY20nLCB0ZXh0QWxpZ246ICdyaWdodCcsIGxpbmVIZWlnaHQ6ICdub3JtYWwnLCBmb250U2l6ZTogMTUsIGZvbnRGYW1pbHk6ICdcIkNhbGlicmlcIixzYW5zLXNlcmlmJ319PjxzcGFuIHN0eWxlPXt7Zm9udEZhbWlseTogJ1wiU2Fra2FsIE1hamFsbGFcIid9fT45LiDZitmF2YPZhtmDINio2LnYr9mH2Kcg2KfZhNiw2YfYp9ioINil2YTZiSDZgdix2YjYuSDYp9mE2LTYsdmD2Kkg2KfZhNmF2LnYqtmF2K/YqSDZhNi02LHYp9ihINi32YTYqNmDINio2YbYs9io2Kkg2K7YtdmFINij2Ygg2KfZhNit2LXZiNmEINi52YTZitmHINmF2KzYp9mG2KfZiy48L3NwYW4+PC9wPlxyXG4gIDxwIGRpcj1cIlJUTFwiIHN0eWxlPXt7bWFyZ2luVG9wOiAnMGNtJywgbWFyZ2luUmlnaHQ6ICcwY20nLCBtYXJnaW5Cb3R0b206ICcwY20nLCBtYXJnaW5MZWZ0OiAnMGNtJywgdGV4dEFsaWduOiAncmlnaHQnLCBsaW5lSGVpZ2h0OiAnbm9ybWFsJywgZm9udFNpemU6IDE1LCBmb250RmFtaWx5OiAnXCJDYWxpYnJpXCIsc2Fucy1zZXJpZid9fT48c3BhbiBzdHlsZT17e2ZvbnRGYW1pbHk6ICdcIlNha2thbCBNYWphbGxhXCInfX0+MTAuINmK2KzYr9ixINin2YTYpdi02KfYsdipINil2YTZiSDYo9mGINmF2YbYtdipINix2KjZiNipINiq2YLYr9mFINiu2K/Zhdin2KrZh9inINmF2KzYp9mG2KfZiyDZiNmE2Kcg2YrZiNis2K8g2YTZh9inINij2Yog2K3Ys9in2Kgg2KjZhtmD2Yog2YTYp9iz2KrZgtio2KfZhCDYo9mKINmG2YjYuSDZhdmGINin2YTYqtio2LHYudin2KouPC9zcGFuPjwvcD5cclxuICA8cCBkaXI9XCJSVExcIiBzdHlsZT17e21hcmdpblRvcDogJzBjbScsIG1hcmdpblJpZ2h0OiAnMGNtJywgbWFyZ2luQm90dG9tOiAnMGNtJywgbWFyZ2luTGVmdDogJzBjbScsIHRleHRBbGlnbjogJ3JpZ2h0JywgbGluZUhlaWdodDogJ25vcm1hbCcsIGZvbnRTaXplOiAxNSwgZm9udEZhbWlseTogJ1wiQ2FsaWJyaVwiLHNhbnMtc2VyaWYnfX0+PHNwYW4gc3R5bGU9e3tmb250RmFtaWx5OiAnXCJTYWtrYWwgTWFqYWxsYVwiJ319PiZuYnNwOzwvc3Bhbj48L3A+XHJcbiAgPHAgZGlyPVwiUlRMXCIgc3R5bGU9e3ttYXJnaW5Ub3A6ICcwY20nLCBtYXJnaW5SaWdodDogJzBjbScsIG1hcmdpbkJvdHRvbTogJzBjbScsIG1hcmdpbkxlZnQ6ICcwY20nLCB0ZXh0QWxpZ246ICdyaWdodCcsIGxpbmVIZWlnaHQ6ICdub3JtYWwnLCBmb250U2l6ZTogMTUsIGZvbnRGYW1pbHk6ICdcIkNhbGlicmlcIixzYW5zLXNlcmlmJ319PjxzcGFuIHN0eWxlPXt7Zm9udEZhbWlseTogJ1wiU2Fra2FsIE1hamFsbGFcIid9fT4mbmJzcDs8L3NwYW4+PC9wPlxyXG4gIDxwIGRpcj1cIlJUTFwiIHN0eWxlPXt7bWFyZ2luVG9wOiAnMGNtJywgbWFyZ2luUmlnaHQ6ICcwY20nLCBtYXJnaW5Cb3R0b206ICcwY20nLCBtYXJnaW5MZWZ0OiAnMGNtJywgdGV4dEFsaWduOiAncmlnaHQnLCBsaW5lSGVpZ2h0OiAnbm9ybWFsJywgZm9udFNpemU6IDE1LCBmb250RmFtaWx5OiAnXCJDYWxpYnJpXCIsc2Fucy1zZXJpZid9fT48c3Ryb25nPjxzcGFuIHN0eWxlPXt7Zm9udFNpemU6IDE5LCBmb250RmFtaWx5OiAnXCJTYWtrYWwgTWFqYWxsYVwiJywgY29sb3I6ICcjMDAzM0NDJ319Pi0g2YTZhNi02LHZg9in2Ko6PC9zcGFuPjwvc3Ryb25nPjwvcD5cclxuICA8cCBkaXI9XCJSVExcIiBzdHlsZT17e21hcmdpblRvcDogJzBjbScsIG1hcmdpblJpZ2h0OiAnMGNtJywgbWFyZ2luQm90dG9tOiAnMGNtJywgbWFyZ2luTGVmdDogJzBjbScsIHRleHRBbGlnbjogJ3JpZ2h0JywgbGluZUhlaWdodDogJ25vcm1hbCcsIGZvbnRTaXplOiAxNSwgZm9udEZhbWlseTogJ1wiQ2FsaWJyaVwiLHNhbnMtc2VyaWYnfX0+PHNwYW4gc3R5bGU9e3tmb250RmFtaWx5OiAnXCJTYWtrYWwgTWFqYWxsYVwiJ319PjEuINio2LnYryDZgtix2KfYodiq2YMg2YTYtNix2YjYtyDYp9mE2KfZhti22YXYp9mFINmE2YXZhti12Kkg2LHYqNmI2Kkg2YPYtNix2YrZgyDZgtmFINio2KfYrtiq2YrYp9ixINil2YbYtNin2KEg2K3Ys9in2Kgg2KzYr9mK2K8uPC9zcGFuPjwvcD5cclxuICA8cCBkaXI9XCJSVExcIiBzdHlsZT17e21hcmdpblRvcDogJzBjbScsIG1hcmdpblJpZ2h0OiAnMGNtJywgbWFyZ2luQm90dG9tOiAnMGNtJywgbWFyZ2luTGVmdDogJzBjbScsIHRleHRBbGlnbjogJ3JpZ2h0JywgbGluZUhlaWdodDogJ25vcm1hbCcsIGZvbnRTaXplOiAxNSwgZm9udEZhbWlseTogJ1wiQ2FsaWJyaVwiLHNhbnMtc2VyaWYnfX0+PHNwYW4gc3R5bGU9e3tmb250RmFtaWx5OiAnXCJTYWtrYWwgTWFqYWxsYVwiJ319PjIuINiz2YrYqtmFINin2YTYqtmI2KfYtdmEINmF2LnZg9mFINmF2YYg2YLYqNmEINmF2YbYr9mI2Kgg2KfZhNmF2YbYtdipINmE2KfYs9iq2YPZhdin2YQg2KjYp9mC2Yog2KfZhNil2KzYsdin2KHYp9iqINmI2KfZhNiq2YbYs9mK2YLYp9iqLjwvc3Bhbj48L3A+XHJcbiAgPHAgZGlyPVwiUlRMXCIgc3R5bGU9e3ttYXJnaW5Ub3A6ICcwY20nLCBtYXJnaW5SaWdodDogJzBjbScsIG1hcmdpbkJvdHRvbTogJzBjbScsIG1hcmdpbkxlZnQ6ICcwY20nLCB0ZXh0QWxpZ246ICdyaWdodCcsIGxpbmVIZWlnaHQ6ICdub3JtYWwnLCBmb250U2l6ZTogMTUsIGZvbnRGYW1pbHk6ICdcIkNhbGlicmlcIixzYW5zLXNlcmlmJ319PjxzcGFuIHN0eWxlPXt7Zm9udEZhbWlseTogJ1wiU2Fra2FsIE1hamFsbGFcIid9fT4zLiDZitis2K/YsSDYp9mE2KXYtNin2LHYqSDYpdmE2Ykg2KPZhiDZhdmG2LXYqSDYsdio2YjYqSDYqtmC2K/ZhSDYrtiv2YXYp9iq2YfYpyDZhdis2KfZhtin2Ysg2YjZhNinINmK2YjYrNivINmE2YfYpyDYo9mKINit2LPYp9ioINio2YbZg9mKINmE2KfYs9iq2YLYqNin2YQg2KPZiiDZhtmI2Lkg2YXZhiDYp9mE2KrYqNix2LnYp9iqLjwvc3Bhbj48L3A+XHJcbiAgPHAgZGlyPVwiUlRMXCIgc3R5bGU9e3ttYXJnaW5Ub3A6ICcwY20nLCBtYXJnaW5SaWdodDogJzBjbScsIG1hcmdpbkJvdHRvbTogJzBjbScsIG1hcmdpbkxlZnQ6ICcwY20nLCB0ZXh0QWxpZ246ICdyaWdodCcsIGxpbmVIZWlnaHQ6ICdub3JtYWwnLCBmb250U2l6ZTogMTUsIGZvbnRGYW1pbHk6ICdcIkNhbGlicmlcIixzYW5zLXNlcmlmJ319PjxzcGFuIHN0eWxlPXt7Zm9udEZhbWlseTogJ1wiU2Fra2FsIE1hamFsbGFcIid9fT4mbmJzcDs8L3NwYW4+PC9wPlxyXG4gIDxwIGRpcj1cIlJUTFwiIHN0eWxlPXt7bWFyZ2luVG9wOiAnMGNtJywgbWFyZ2luUmlnaHQ6ICcwY20nLCBtYXJnaW5Cb3R0b206ICcwY20nLCBtYXJnaW5MZWZ0OiAnMGNtJywgdGV4dEFsaWduOiAncmlnaHQnLCBsaW5lSGVpZ2h0OiAnbm9ybWFsJywgZm9udFNpemU6IDE1LCBmb250RmFtaWx5OiAnXCJDYWxpYnJpXCIsc2Fucy1zZXJpZid9fT48c3Ryb25nPjxzcGFuIHN0eWxlPXt7Zm9udFNpemU6IDE5LCBmb250RmFtaWx5OiAnXCJTYWtrYWwgTWFqYWxsYVwiJywgY29sb3I6ICcjMDAzM0NDJ319Pi0g2YTYs9mB2LHYp9ihINin2YTZhdmG2LXYqSAo2KPZgdix2KfYrykg2KPZiCAo2KzZhdi52YrYp9iqKTo8L3NwYW4+PC9zdHJvbmc+PC9wPlxyXG4gIDxwIGRpcj1cIlJUTFwiIHN0eWxlPXt7bWFyZ2luVG9wOiAnMGNtJywgbWFyZ2luUmlnaHQ6ICcwY20nLCBtYXJnaW5Cb3R0b206ICcwY20nLCBtYXJnaW5MZWZ0OiAnMGNtJywgdGV4dEFsaWduOiAncmlnaHQnLCBsaW5lSGVpZ2h0OiAnbm9ybWFsJywgZm9udFNpemU6IDE1LCBmb250RmFtaWx5OiAnXCJDYWxpYnJpXCIsc2Fucy1zZXJpZid9fT48c3BhbiBzdHlsZT17e2ZvbnRGYW1pbHk6ICdcIlNha2thbCBNYWphbGxhXCInfX0+MS4g2KjYudivINmC2LHYp9ih2KrZgyDZhNi02LHZiNi3INin2YTYp9mG2LbZhdin2YUg2YTZhdmG2LXYqSDYsdio2YjYqSDZg9iz2YHZitixINmC2YUg2KjYp9iu2KrZitin2LEg2KXZhti02KfYoSDYrdiz2KfYqCDYrNiv2YrYry48L3NwYW4+PC9wPlxyXG4gIDxwIGRpcj1cIlJUTFwiIHN0eWxlPXt7bWFyZ2luVG9wOiAnMGNtJywgbWFyZ2luUmlnaHQ6ICcwY20nLCBtYXJnaW5Cb3R0b206ICcwY20nLCBtYXJnaW5MZWZ0OiAnMGNtJywgdGV4dEFsaWduOiAncmlnaHQnLCBsaW5lSGVpZ2h0OiAnbm9ybWFsJywgZm9udFNpemU6IDE1LCBmb250RmFtaWx5OiAnXCJDYWxpYnJpXCIsc2Fucy1zZXJpZid9fT48c3BhbiBzdHlsZT17e2ZvbnRGYW1pbHk6ICdcIlNha2thbCBNYWphbGxhXCInfX0+Mi4g2LPZitiq2YUg2KfZhNiq2YjYp9i12YQg2YXYudmD2YUg2YXZhiDZgtio2YQg2YXZhtiv2YjYqCDYp9mE2YXZhti12Kkg2YTYp9iz2KrZg9mF2KfZhCDYqNin2YLZiiDYp9mE2KXYrNix2KfYodin2Kog2YjYp9mE2KrZhtiz2YrZgtin2KouPC9zcGFuPjwvcD5cclxuICA8cD48c3BhbiBkaXI9XCJSVExcIiBzdHlsZT17e2ZvbnRTaXplOiAxNSwgbGluZUhlaWdodDogJzEwNyUnLCBmb250RmFtaWx5OiAnXCJTYWtrYWwgTWFqYWxsYVwiJ319PjMuINmK2KzYr9ixINin2YTYpdi02KfYsdipINil2YTZiSDYo9mGINmF2YbYtdipINix2KjZiNipINiq2YLYr9mFINiu2K/Zhdin2KrZh9inINmF2KzYp9mG2KfZiyDZiNmE2Kcg2YrZiNis2K8g2YTZh9inINij2Yog2K3Ys9in2Kgg2KjZhtmD2Yog2YTYp9iz2KrZgtio2KfZhCDYo9mKINmG2YjYuSDZhdmGINin2YTYqtio2LHYudin2KouPC9zcGFuPjwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb24taXRlbSB3b3cgZmFkZUluUmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb24tdHJpZ2dlclwiIGlkPVwiaGVhZGluZ0VpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGNvbGxhcHNlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjY29sbGFwc2UxMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cImNvbGxhcHNlMTJcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgMTUuINmF2Kcg2YbZiNi5INin2YTYrtiv2YXYp9iqINin2YTYqtmKINmK2YXZg9mGINmE2YTZhdiz2KrZgdmK2K8g2KPZhiDZitit2LXZhCDYudmE2YrZh9in2J9cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImNvbGxhcHNlMTJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbGxhcHNlXCJcclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJoZWFkaW5nRWlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtcGFyZW50PVwiI2FjY29yZGlvbkZBUVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgIDE1LiDYrNmF2YrYuSDYo9mG2YjYp9i5INin2YTYrtiv2YXYp9iqINin2YTYpdi52KfYtNmK2Kkg2YjYp9mE2LXYrdmK2Kkg2YjYp9mE2LPZg9mG2YrYqSDZiNi62YrYsdmH2Kcg2YTZg9mGINiw2YTZgyDZiti52KrZhdivINi52YTZiSDYudiv2K8g2YjZhtmI2Lkg2KfZhNi02LHZg9in2Kog2KfZhNmF2LPYrNmE2Kkg2YHZiiAo2YXZhti12Kkg2LHYqNmI2KkpLlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi1pdGVtIHdvdyBmYWRlSW5SaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi10cmlnZ2VyXCIgaWQ9XCJoZWFkaW5nRWlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gY29sbGFwc2VkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNjb2xsYXBzZTEzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwiY29sbGFwc2UxM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAxNi4g2YXYqtmJINmK2YXZg9mGINmE2YTZhdiz2KrZgdmK2K8g2KfZhNit2LXZiNmEINi52YTZiSDYp9mE2KrYqNix2Lkg2KfZhNmF2YLYsdixINmE2Ycg2YXZhiDYp9mE2LTYsdmD2KfYqtifXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb2xsYXBzZTEzXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2xsYXBzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiaGVhZGluZ0VpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXBhcmVudD1cIiNhY2NvcmRpb25GQVFcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb24tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAxNi4g2KjYudivINin2LnYqtmF2KfYryDYp9mE2YXYs9iq2YHZitivINmB2YogKNmF2YbYtdipINix2KjZiNipKSDYs9iq2YLZiNmFINil2K/Yp9ix2Kkg2KfZhNmF2YbYtdipINio2KfZhNio2K3YqyDYudmGINin2YTYtNix2YPYp9iqINin2YTYsdin2LrYqNipINmB2Yog2K/YudmF2Ycg2YjZgdmKINit2KfZhCDYp9mE2YjYtdmI2YQg2KXZhNmJINin2YTYtNix2YPYqSDYp9mE2YXZhtin2LPYqNipINiz2KrYtdmEINix2LPYp9mE2Kkg2KXZhNmJINis2YjYp9mEINin2YTZhdiz2KrZgdmK2K8gU01TINiq2YHZitiv2Ycg2KjYo9mGINmE2K/ZitmHINio2LfYp9mC2Kkg2K7YtdmFINij2Ygg2KjYt9in2YLYqSDYtNix2KfYoSDZhdis2KfZhtmKINmF2Lkg2KrZiNi22YrYrSDYudmG2YjYp9mGINin2YTYtNix2YPYp9iqINin2YTYqtmKINiq2LPZhditINmE2YfYpyDYqNi12LHZgSDYp9mE2KjYt9in2YLYqSDZhNiv2YrZh9inLlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWl0ZW0gd293IGZhZGVJblJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLXRyaWdnZXJcIiBpZD1cImhlYWRpbmdFaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBjb2xsYXBzZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI2NvbGxhcHNlMTRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJjb2xsYXBzZTE0XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgIDE3LiDZhdinINmH2Yog2KLZhNmK2Kkg2KfZhNin2LPYqtmB2KfYr9ipINmF2YYg2KjYt9in2YLYqSDYp9mE2K7YtdmFINij2Ygg2KjYt9in2YLYqSDYp9mE2LTYsdin2KEg2KfZhNmF2KzYp9mG2YrYqdifXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb2xsYXBzZTE0XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2xsYXBzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiaGVhZGluZ0VpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXBhcmVudD1cIiNhY2NvcmRpb25GQVFcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb24tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAxNy4g2KjYudivINmI2LXZiNmEINin2YTYsdiz2KfZhNipINin2YTYqtmKINiq2YHZitivINio2KrZiNmB2LEg2KfZhNio2LfYp9mC2Kkg2YHZiiDYrdiz2KfYqCDYp9mE2YXYs9iq2YHZitivINmK2YLZiNmFINin2YTZhdiz2KrZgdmK2K8g2KjYp9mE2K/YrtmI2YQg2LnZhNmJINit2LPYp9io2Ycg2YHZiiDYqti32KjZitmCINin2YTYrNmI2KfZhCDYp9mE2K7Yp9i12Kkg2KjZgCAo2YXZhti12Kkg2LHYqNmI2KkpINir2YUg2LTYp9i02Kkg2KfZhNio2LfYp9mC2KfYqiDZiNi52YbYryDZiNi12YjZhNmHINil2YTZiSDYp9mE2KjYp9im2Lkg2YrZgtmI2YUg2KjYudix2LbZh9inINi52YTZitmHINmI2LPZiNmBINmK2YLZiNmFINin2YTYqNin2KbYuSDYqNiq2LPYrNmK2YQg2LHZgtmFINin2YTYqNi32KfZgtipINmI2YXZhtitINin2YTZhdiz2KrZgdmK2K8g2KfZhNmF2LTYqtix2YrYp9iqINio2KfZhNiu2LXZhSDYp9mE2YXZgtix2LEg2KPZiCDZhdis2KfZhtin2YsgKNit2LPYqCDZhtmI2Lkg2KfZhNio2LfYp9mC2KkpLlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWl0ZW0gd293IGZhZGVJblJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLXRyaWdnZXJcIiBpZD1cImhlYWRpbmdFaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBjb2xsYXBzZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI2NvbGxhcHNlMTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJjb2xsYXBzZTE1XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgIDE4LiDZh9mEINmK2YTYstmFINin2YTZhdiz2KrZgdmK2K8g2KPZhiDZitmC2YjZhSDYqNiq2K3ZhdmK2YQg2KrYt9io2YrZgiAo2YXZhti12Kkg2LHYqNmI2KkpINmF2YYg2YXYqtis2LEg2KfZhNiq2LfYqNmK2YLYp9iq2J9cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImNvbGxhcHNlMTVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbGxhcHNlXCJcclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJoZWFkaW5nRWlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtcGFyZW50PVwiI2FjY29yZGlvbkZBUVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgIDE4LiDZh9mG2KfZgyDYrtmK2KfYsdin2YYg2YTYtdix2YEg2KfZhNmD2YjYqNmI2YbYp9iq2Iwg2KXZhdinINio2LnYsdi22YfYpyDZhdmGINiu2YTYp9mEINiq2LfYqNmK2YIg2KfZhNis2YjYp9mEINij2Ygg2YXZhiDYrtmE2KfZhCDYsdmC2YUg2KfZhNmD2YjYqNmI2YYg2KfZhNmF2LHYs9mEINi52KjYsSDYsdiz2KfYptmEINin2YTZgCBTTVMg2KXZhNmJINis2YjYp9mEINin2YTZhdiz2KrZgdmK2K8uXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb24taXRlbSB3b3cgZmFkZUluUmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb24tdHJpZ2dlclwiIGlkPVwiaGVhZGluZ0VpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGNvbGxhcHNlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjY29sbGFwc2UxNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cImNvbGxhcHNlMTZcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgMTkuINmF2KfYsNinINmE2Ygg2YLYp9mFINin2YTZhdiz2KrYrtiv2YUg2LPZiNin2KEg2YPYp9mGINmF2LPYqtmB2YrYryDYo9mIINi02LHZg9ipINij2Ygg2KzZhdi52YrYqSDYo9mIINiz2YHZitixINio2KrYutmK2YrYsSDYsdmC2YUg2KzZiNin2YTZhyDZgdmH2YQg2LPZitiq2YXZg9mGINmF2YYg2KfZhNiv2K7ZiNmEINio2KfZhNix2YLZhSDYp9mE2KzYr9mK2K/Yn1xyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY29sbGFwc2UxNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sbGFwc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImhlYWRpbmdFaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1wYXJlbnQ9XCIjYWNjb3JkaW9uRkFRXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgMTkuINmE2Kcg2KjYryDYo9mI2YTYp9mLINmF2YYg2KfZhNiv2K7ZiNmEINio2KfZhNix2YLZhSDYp9mE2YLYr9mK2YUg2KvZhSDYp9iu2KrZitin2LEg2KrYutmK2YrYsSDYsdmC2YUg2KfZhNis2YjYp9mEINmI2KjYudivINiw2YTZgyDYs9mK2KrZhSDYp9i52KrZhdin2K8g2KfZhNix2YLZhSDYp9mE2KzYr9mK2K8g2YjYpdmE2LrYp9ihINin2YTYs9in2KjZgi5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi1pdGVtIHdvdyBmYWRlSW5SaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi10cmlnZ2VyXCIgaWQ9XCJoZWFkaW5nRWlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gY29sbGFwc2VkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNjb2xsYXBzZTE3XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwiY29sbGFwc2UxN1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAyMC4g2YfZhCDZh9mG2KfZgyDYqtin2LHZitiuINin2YbYqtmH2KfYoSDZhNi12YTYp9it2YrYqSDYp9mE2KjYt9in2YLYqSDYp9mE2YXYsdiz2YTYqSDZhNmE2YXYs9iq2YHZitiv2J9cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImNvbGxhcHNlMTdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbGxhcHNlXCJcclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJoZWFkaW5nRWlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtcGFyZW50PVwiI2FjY29yZGlvbkZBUVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgIDIwLiDZhti52YUg2YTZg9mEINio2LfYp9mC2Kkg2KrYp9ix2YrYriDYtdmE2KfYrdmK2Kkg2YjYs9mK2KrZhSDYpdi52YTYp9mFINin2YTZhdiz2KrZgdmK2K8g2KjZgtix2Kgg2KfZhtiq2YfYp9ihINin2YTYtdmE2KfYrdmK2Kkg2YLYqNmEINin2YTYqtin2LHZitiuINio2KPYs9io2YjYudiMINmI2YHZiiDYrdin2YQg2KfZhtiq2YfYqiDYtdmE2KfYrdmK2Kkg2KfZhNio2LfYp9mC2Kkg2YLYqNmEINin2YTYtdix2YEg2YHYs9mK2KrZhSDYqtit2YjZitmEINin2YTYqNi32KfZgtipINmE2YXYs9iq2YHZitivINii2K7YsS5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi1pdGVtIHdvdyBmYWRlSW5SaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi10cmlnZ2VyXCIgaWQ9XCJoZWFkaW5nRWlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gY29sbGFwc2VkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNjb2xsYXBzZTE4XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwiY29sbGFwc2UxOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAyMS4g2KXYsNinINmD2YbYqtmPINmF2YYg2KPYtdit2KfYqCDYp9mE2K3Yp9is2KfYqiDZiNmE2YUg2KrYs9is2YrZhNmKINmB2Yog2KPZiiDYrNmF2LnZitipINmB2YfZhCDZhdmF2YPZhiDYo9iz2KrZgdmK2K8g2YXZhiAo2YXZhti12Kkg2LHYqNmI2Kkp2J9cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImNvbGxhcHNlMThcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbGxhcHNlXCJcclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJoZWFkaW5nRWlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtcGFyZW50PVwiI2FjY29yZGlvbkZBUVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgIDIxLiDZhti52YUg2YrZhdmD2YbZgyDYsNmE2YMg2YXZhiDYrtmE2KfZhCDYp9mE2KrYs9is2YrZhCDZgdmKICjZhdmG2LXYqSDYsdio2YjYqSkg2KjYudivINin2LPYqtmK2YHYp9ih2YMg2YTZhNi02LHZiNi3INin2YTYrtin2LXYqSDYqNin2YTZhdiz2KrZgdmK2K/ZitmGLlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1zZWN0aW9uXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgd293IGZhZGVJblwiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWItNFwiPk91ciBwYXJ0bmVyczwvaDI+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIEJlY29tZSBhIDxhIGhyZWY9XCIjXCI+cGFydG5lcnM/PC9hPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy1jb2xzLTEgcm93LWNvbHMtc20tMiByb3ctY29scy1tZC0zIHJvdy1jb2xzLWxnLTUganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgbXQtNVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyB3b3cgem9vbUluXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctcGxhY2UgY2xpZW50LWltZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9hc3NldHMvaW1nL2NsaWVudHMvYWx0ZXJfc3BvcnQucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIHdvdyB6b29tSW5cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1wbGFjZSBjbGllbnQtaW1nXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL2Fzc2V0cy9pbWcvY2xpZW50cy9jbGVhbmluZ19zZXJ2aWNlLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyB3b3cgem9vbUluXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctcGxhY2UgY2xpZW50LWltZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9hc3NldHMvaW1nL2NsaWVudHMvY3JlYXRpdmVfcGhvdG8ucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIHdvdyB6b29tSW5cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1wbGFjZSBjbGllbnQtaW1nXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL2Fzc2V0cy9pbWcvY2xpZW50cy9nbG9iYWxfdHYucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIHdvdyB6b29tSW5cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1wbGFjZSBjbGllbnQtaW1nXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL2Fzc2V0cy9pbWcvY2xpZW50cy9uZXRfc3BvcnRfdHYucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIHdvdyB6b29tSW5cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1wbGFjZSBjbGllbnQtaW1nXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL2Fzc2V0cy9pbWcvY2xpZW50cy9uZXdzX2RpZ2l0YWxfdHYucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIHdvdyB6b29tSW5cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1wbGFjZSBjbGllbnQtaW1nXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL2Fzc2V0cy9pbWcvY2xpZW50cy9zcGFfYmVhdXR5LnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyB3b3cgem9vbUluXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctcGxhY2UgY2xpZW50LWltZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9hc3NldHMvaW1nL2NsaWVudHMvdHJpdmllcl9ncm91cC5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWZvb3Rlci1zZWN0aW9uIGJnLWRhcmsgZmctd2hpdGVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtYi01XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHRleHQtY2VudGVyIHdvdyBmYWRlSW5VcFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy04XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL2Fzc2V0cy9mYXZpY29uLWxpZ2h0LnBuZ1wiIGFsdD1cIlwiIGhlaWdodD17ODB9IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLXNlY3Rpb25cIiBpZD1cImNvbnRhY3RcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMCBteS0zIHdvdyBmYWRlSW5VcFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLXBhZ2UgdGV4dC1yaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRleHRBbGlnbjogXCJyaWdodFwiIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy1iZWFtLW1kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCB0ZXh0LWNlbnRlciBweS0zIHB5LW1kLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1haS1sb2NhdGlvbi1vdXRsaW5lIGgzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZnLXByaW1hcnkgZnctbWVkaXVtIGZzLXZsYXJnZVwiPkxvY2F0aW9uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAzIEVhc3QgUmlkZ2V3b29kIEF2ZW51ZSBMb3MgQW5nZWxlcywgQ0EgOTAwMjJcclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IHRleHQtY2VudGVyIHB5LTMgcHktbWQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWFpLWNhbGwtb3V0bGluZSBoM1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmZy1wcmltYXJ5IGZ3LW1lZGl1bSBmcy12bGFyZ2VcIj5Db250YWN0PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMVwiPisyMTMgOTA4IDkyMDM0PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMFwiPis0MTUgMTIzIDg5MjQ1PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgdGV4dC1jZW50ZXIgcHktMyBweS1tZC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYWktbWFpbC1vcGVuLW91dGxpbmUgaDNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmctcHJpbWFyeSBmdy1tZWRpdW0gZnMtdmxhcmdlXCI+RW1haWw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0xXCI+c3VwcG9ydEBtb2JzdGVyLmNvbTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTBcIj5zdXBwb3J0QG1hY29kZWlkLmNvbTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMiBjb2wtbGctMTIgbXktMyB3b3cgZmFkZUluVXBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1wYWdlXCIgc3R5bGU9e3sgdGV4dEFsaWduOiBcInJpZ2h0XCIsZGlzcGxheTogXCJub25lXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmdy1ub3JtYWxcIj7YqtmI2KfYtdmEINmF2LnZhtinPC9oMz5cclxuICAgICAgICAgICAgICAgICAgPGZvcm0gbWV0aG9kPVwiUE9TVFwiIGNsYXNzTmFtZT1cIm10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiIGNsYXNzTmFtZT1cImZ3LW1lZGl1bSBmZy1ncmV5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINin2YTYpdiz2YVcclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIm5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImZ3LW1lZGl1bSBmZy1ncmV5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINin2YTYpdmK2YXZitmEXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJlbWFpbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBob25lXCIgY2xhc3NOYW1lPVwiZnctbWVkaXVtIGZnLWdyZXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAg2LHZgtmFINin2YTYrNmI2KfZhFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwaG9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtZXNzYWdlXCIgY2xhc3NOYW1lPVwiZnctbWVkaXVtIGZnLWdyZXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAg2KfZhNix2LPYp9mE2KlcclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17Nn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJtZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgbXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINij2LHYs9mEINin2YTYsdiz2KfZhNipXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGhyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIiwiaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XHJcblxyXG5jb25zdCBzaXRlVXJsID0gQ29va2llcy5nZXQoXCJzaXRlVXJsXCIpO1xyXG5pZiAoIXNpdGVVcmwpIHtcclxuICBDb29raWVzLnNldChcInNpdGVVcmxcIiwgXCJodHRwczovL2FwaS5yYWJvd2FoLmNvbS93cC1qc29uL1wiLCB7XHJcbiAgICBleHBpcmVzOiA2MCxcclxuICB9KTtcclxufVxyXG5sZXQgdXJscyA9IHtcclxuICBkZXZlbG9wbWVudDogXCJodHRwczovL2FwaS5yYWJvd2FoLmNvbS93cC1qc29uL1wiLFxyXG4gIHByb2R1Y3Rpb246IFwiaHR0cHM6Ly9hcGkucmFib3dhaC5jb20vd3AtanNvbi9cIixcclxufTtcclxuY29uc3QgYXBpID0gQXhpb3MuY3JlYXRlKHtcclxuICBiYXNlVVJMOiB1cmxzW3Byb2Nlc3MuZW52Lk5PREVfRU5WXSxcclxuICBoZWFkZXJzOiB7XHJcbiAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcGk7XHJcbiIsImltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xyXG5pbXBvcnQgYXBpIGZyb20gXCIuLi9zZXJ2aWNlcy9BcGlcIjtcclxuaW1wb3J0IHVzZUF1dGgsIHsgUHJvdGVjdFJvdXRlIH0gZnJvbSBcIi4uL2NvbnRleHRzL2F1dGguanNcIjtcclxuXHJcbmZ1bmN0aW9uIGFwaV9nZXQoKSB7XHJcbiAgLy8gY29uc3QgW3Rlc3RzLCBzZXR0ZXN0c10gPSB1c2VTdGF0ZSgpO1xyXG4gIC8vIGNvbnN0IFtzaG93U2tlbGV0b24sIHNldHNob3dTa2VsZXRvbl0gPSB1c2VTdGF0ZSgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29tcGFueShuYW1lKSB7XHJcbiAgY29uc3QgeyBsb2FkaW5nIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgbG9hZGluZyA/IGZhbHNlIDogXCJyYWJ3YS9nZXRDb21wYW55P25hbWU9XCIgKyBuYW1lLFxyXG4gICAgYXBpLmdldFxyXG4gICk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgICBpc0xvYWRpbmc6ICFlcnJvciAmJiAhZGF0YSxcclxuICAgIGlzRXJyb3I6IGVycm9yLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTcG9uc29ycyhwaG9uZSwgZ2V0VHlwZSkge1xyXG4gIGNvbnN0IHsgbG9hZGluZyB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcclxuICAgIGxvYWRpbmdcclxuICAgICAgPyBmYWxzZVxyXG4gICAgICA6IFwicmFid2EvZ2V0U3BvbnNvcnM/cGhvbmU9XCIgKyBwaG9uZSArIFwiJmdldFR5cGU9XCIgKyBnZXRUeXBlLFxyXG4gICAgYXBpLmdldFxyXG4gICk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgICBpc0xvYWRpbmc6ICFlcnJvciAmJiAhZGF0YSxcclxuICAgIGlzRXJyb3I6IGVycm9yLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRGdWxsQ0NBcyhwYWdldXApIHtcclxuICBjb25zdCB7IGxvYWRpbmcgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICBsb2FkaW5nID8gZmFsc2UgOiBcInJhYndhL0dldEZ1bGxDQ0FzP3BhZ2V1cD1cIiArIHBhZ2V1cCxcclxuICAgIGFwaS5nZXRcclxuICApO1xyXG4gIHJldHVybiB7XHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gICAgaXNMb2FkaW5nOiAhZXJyb3IgJiYgIWRhdGEsXHJcbiAgICBpc0Vycm9yOiBlcnJvcixcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2V0QWxsTWFuZG9iZXMoKSB7XHJcbiAgY29uc3QgeyBsb2FkaW5nIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgbG9hZGluZyA/IGZhbHNlIDogXCJyYWJ3YS9HZXRBbGxNYW5kb2Jlc1wiLFxyXG4gICAgYXBpLmdldFxyXG4gICk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgICBpc0xvYWRpbmc6ICFlcnJvciAmJiAhZGF0YSxcclxuICAgIGlzRXJyb3I6IGVycm9yLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRDKCkge1xyXG4gIGNvbnN0IHsgbG9hZGluZyB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihsb2FkaW5nID8gZmFsc2UgOiBcInJhYndhL0dldENcIiwgYXBpLmdldCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgICBpc0xvYWRpbmc6ICFlcnJvciAmJiAhZGF0YSxcclxuICAgIGlzRXJyb3I6IGVycm9yLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDb21wYW55c1N0YXRpc3RpYyhuYW1lKSB7XHJcbiAgY29uc3QgeyBsb2FkaW5nIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgbG9hZGluZyA/IGZhbHNlIDogXCJyYWJ3YS9Db21wYW55c1N0YXRpc3RpYz9uYW1lPVwiICsgbmFtZSxcclxuICAgIGFwaS5nZXRcclxuICApO1xyXG4gIHJldHVybiB7XHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gICAgaXNMb2FkaW5nOiAhZXJyb3IgJiYgIWRhdGEsXHJcbiAgICBpc0Vycm9yOiBlcnJvcixcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVXNlclN0YXRpc3RpY3ModXNlcl9pZCkge1xyXG4gIGNvbnN0IHsgbG9hZGluZyB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcclxuICAgIGxvYWRpbmcgPyBmYWxzZSA6IFwicmFid2EvVXNlclN0YXRpc3RpY3M/dXNlcl9pZD1cIiArIHVzZXJfaWQsXHJcbiAgICBhcGkuZ2V0XHJcbiAgKTtcclxuICByZXR1cm4ge1xyXG4gICAgVXNlclN0YXRpc3RpY3NEYXRhOiBkYXRhLFxyXG4gICAgVXNlclN0YXRpc3RpY3NlcnJvcmlzTG9hZGluZzogIWVycm9yICYmICFkYXRhLFxyXG4gICAgVXNlclN0YXRpc3RpY3NlcnJvcmlzRXJyb3I6IGVycm9yLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRBcHByb3ZlTWFuZG9iZXMoKSB7XHJcbiAgY29uc3QgeyBsb2FkaW5nIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgbG9hZGluZyA/IGZhbHNlIDogXCJyYWJ3YS9HZXRBcHByb3ZlTWFuZG9iZXNcIixcclxuICAgIGFwaS5nZXRcclxuICApO1xyXG4gIHJldHVybiB7XHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gICAgaXNMb2FkaW5nOiAhZXJyb3IgJiYgIWRhdGEsXHJcbiAgICBpc0Vycm9yOiBlcnJvcixcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2V0QXBwcm92ZXVzZXJzc00oKSB7XHJcbiAgY29uc3QgeyBsb2FkaW5nIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgbG9hZGluZyA/IGZhbHNlIDogXCJyYWJ3YS9HZXRBcHByb3ZldXNlcnNzTVwiLFxyXG4gICAgYXBpLmdldFxyXG4gICk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgICBpc0xvYWRpbmc6ICFlcnJvciAmJiAhZGF0YSxcclxuICAgIGlzRXJyb3I6IGVycm9yLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRBcHByb3ZldXNlcnNzKCkge1xyXG4gIGNvbnN0IHsgbG9hZGluZyB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcclxuICAgIGxvYWRpbmcgPyBmYWxzZSA6IFwicmFid2EvR2V0QXBwcm92ZXVzZXJzc1wiLFxyXG4gICAgYXBpLmdldFxyXG4gICk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgICBpc0xvYWRpbmc6ICFlcnJvciAmJiAhZGF0YSxcclxuICAgIGlzRXJyb3I6IGVycm9yLFxyXG4gIH07XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIENvbXBhbnlzU3RhdGlzdGljcygpIHtcclxuICBjb25zdCB7IGxvYWRpbmcgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICBsb2FkaW5nID8gZmFsc2UgOiBcInJhYndhL0NvbXBhbnlzU3RhdGlzdGljc1wiLFxyXG4gICAgYXBpLmdldFxyXG4gICk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgICBpc0xvYWRpbmc6ICFlcnJvciAmJiAhZGF0YSxcclxuICAgIGlzRXJyb3I6IGVycm9yLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyQ2FyZHModXNlcl9pZCkge1xyXG4gIGNvbnN0IHsgbG9hZGluZyB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcclxuICAgIGxvYWRpbmcgPyBmYWxzZSA6IFwicmFid2EvZ2V0VXNlckNhcmRzP3VzZXJfaWQ9XCIgKyB1c2VyX2lkLFxyXG4gICAgYXBpLmdldFxyXG4gICk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgICBpc0xvYWRpbmc6ICFlcnJvciAmJiAhZGF0YSxcclxuICAgIGlzRXJyb3I6IGVycm9yLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRNYW5kb2JlcyhcclxuICByZXF1ZXN0LFxyXG4gIG5hbWUsXHJcbiAgcGFnZSxcclxuICBTY2l0eSxcclxuICBTYWVyYSxcclxuICBSc05hbWUsXHJcbiAgUnNQaG9uZVxyXG4pIHtcclxuICBpZiAocmVxdWVzdCA9PSBcImZpcnN0VGltZVwiKSB7XHJcbiAgICBjb25zdCB7IGxvYWRpbmcgfSA9IHVzZUF1dGgoKTtcclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcclxuICAgICAgbG9hZGluZyA/IGZhbHNlIDogXCJyYWJ3YS9HZXRNYW5kb2Jlc1wiLFxyXG4gICAgICBhcGkuZ2V0XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgaXNMb2FkaW5nOiAhZXJyb3IgJiYgIWRhdGEsXHJcbiAgICAgIGlzRXJyb3I6IGVycm9yLFxyXG4gICAgfTtcclxuICB9IGVsc2UgaWYgKHJlcXVlc3QgPT0gXCJjdXN0b21cIikge1xyXG4gICAgY29uc3QgeyBsb2FkaW5nIH0gPSB1c2VBdXRoKCk7XHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICAgIGxvYWRpbmdcclxuICAgICAgICA/IGZhbHNlXHJcbiAgICAgICAgOiBcInJhYndhL09yZGVyR2V0TWFuZG9iZXM/cGFnZT1cIiArXHJcbiAgICAgICAgICAgIHBhZ2UgK1xyXG4gICAgICAgICAgICBcIiZuYW1lPVwiICtcclxuICAgICAgICAgICAgbmFtZSArXHJcbiAgICAgICAgICAgIFwiJlNjaXR5PVwiICtcclxuICAgICAgICAgICAgU2NpdHkgK1xyXG4gICAgICAgICAgICBcIiZTYWVyYT1cIiArXHJcbiAgICAgICAgICAgIFNhZXJhICtcclxuICAgICAgICAgICAgXCImUnNOYW1lPVwiICtcclxuICAgICAgICAgICAgUnNOYW1lICtcclxuICAgICAgICAgICAgXCImUnNQaG9uZT1cIiArXHJcbiAgICAgICAgICAgIFJzUGhvbmUsXHJcblxyXG4gICAgICBhcGkuZ2V0XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgaXNMb2FkaW5nOiAhZXJyb3IgJiYgIWRhdGEsXHJcbiAgICAgIGlzRXJyb3I6IGVycm9yLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXR1c2Vyc3MyKFxyXG4gIHJlcXVlc3QsXHJcbiAgbmFtZSxcclxuICBtZW1iZXJzLFxyXG4gIGxhc3RfY291Ym9uLFxyXG4gIHRvdGFsX2NvdWJvbnMsXHJcbiAgcGlvcml0eSxcclxuICBwYWdlLFxyXG4gIFNjaXR5LFxyXG4gIFNhZXJhLFxyXG4gIFNjYXQsXHJcbiAgUnNOYW1lLFxyXG4gIFJzUGhvbmVcclxuKSB7XHJcbiAgaWYgKHJlcXVlc3QgPT0gXCJmaXJzdFRpbWVcIikge1xyXG4gICAgY29uc3QgeyBsb2FkaW5nIH0gPSB1c2VBdXRoKCk7XHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICAgIGxvYWRpbmcgPyBmYWxzZSA6IFwicmFid2EvR2V0dXNlcnNzMlwiLFxyXG4gICAgICBhcGkuZ2V0XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgaXNMb2FkaW5nOiAhZXJyb3IgJiYgIWRhdGEsXHJcbiAgICAgIGlzRXJyb3I6IGVycm9yLFxyXG4gICAgfTtcclxuICB9IGVsc2UgaWYgKHJlcXVlc3QgPT0gXCJjdXN0b21cIikge1xyXG4gICAgY29uc3QgeyBsb2FkaW5nIH0gPSB1c2VBdXRoKCk7XHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICAgIGxvYWRpbmdcclxuICAgICAgICA/IGZhbHNlXHJcbiAgICAgICAgOiBcInJhYndhL09yZGVyR2V0dXNlcnNzMj9wYWdlPVwiICtcclxuICAgICAgICAgICAgcGFnZSArXHJcbiAgICAgICAgICAgIFwiJm5hbWU9XCIgK1xyXG4gICAgICAgICAgICBuYW1lICtcclxuICAgICAgICAgICAgXCImbWVtYmVycz1cIiArXHJcbiAgICAgICAgICAgIG1lbWJlcnMgK1xyXG4gICAgICAgICAgICBcIiZsYXN0X2NvdWJvbj1cIiArXHJcbiAgICAgICAgICAgIGxhc3RfY291Ym9uICtcclxuICAgICAgICAgICAgXCImdG90YWxfY291Ym9ucz1cIiArXHJcbiAgICAgICAgICAgIHRvdGFsX2NvdWJvbnMgK1xyXG4gICAgICAgICAgICBcIiZTY2l0eT1cIiArXHJcbiAgICAgICAgICAgIFNjaXR5ICtcclxuICAgICAgICAgICAgXCImU2FlcmE9XCIgK1xyXG4gICAgICAgICAgICBTYWVyYSArXHJcbiAgICAgICAgICAgIFwiJlNjYXQ9XCIgK1xyXG4gICAgICAgICAgICBTY2F0ICtcclxuICAgICAgICAgICAgXCImcGlvcml0eT1cIiArXHJcbiAgICAgICAgICAgIHBpb3JpdHkgK1xyXG4gICAgICAgICAgICBcIiZSc05hbWU9XCIgK1xyXG4gICAgICAgICAgICBSc05hbWUgK1xyXG4gICAgICAgICAgICBcIiZSc1Bob25lPVwiICtcclxuICAgICAgICAgICAgUnNQaG9uZSxcclxuXHJcbiAgICAgIGFwaS5nZXRcclxuICAgICk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICBpc0xvYWRpbmc6ICFlcnJvciAmJiAhZGF0YSxcclxuICAgICAgaXNFcnJvcjogZXJyb3IsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdldE1hbmRvYlVzZXJzKFxyXG4gIHJlcXVlc3QsXHJcbiAgbmFtZSxcclxuICBtZW1iZXJzLFxyXG4gIGxhc3RfY291Ym9uLFxyXG4gIHRvdGFsX2NvdWJvbnMsXHJcbiAgcGlvcml0eSxcclxuICBwYWdlLFxyXG4gIFNjaXR5LFxyXG4gIFNhZXJhLFxyXG4gIFNjYXQsXHJcbiAgUnNOYW1lLFxyXG4gIFJzUGhvbmUsXHJcbiAgbWFuZG9iZV9pZFxyXG4pIHtcclxuICBpZiAocmVxdWVzdCA9PSBcImZpcnN0VGltZVwiKSB7XHJcbiAgICBjb25zdCB7IGxvYWRpbmcgfSA9IHVzZUF1dGgoKTtcclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcclxuICAgICAgbG9hZGluZyA/IGZhbHNlIDogXCJyYWJ3YS9HZXRNYW5kb2JVc2Vycz9tYW5kb2JlX2lkPVwiICsgbWFuZG9iZV9pZCxcclxuICAgICAgYXBpLmdldFxyXG4gICAgKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgIGlzTG9hZGluZzogIWVycm9yICYmICFkYXRhLFxyXG4gICAgICBpc0Vycm9yOiBlcnJvcixcclxuICAgIH07XHJcbiAgfSBlbHNlIGlmIChyZXF1ZXN0ID09IFwiY3VzdG9tXCIpIHtcclxuICAgIGNvbnN0IHsgbG9hZGluZyB9ID0gdXNlQXV0aCgpO1xyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgICBsb2FkaW5nXHJcbiAgICAgICAgPyBmYWxzZVxyXG4gICAgICAgIDogXCJyYWJ3YS9PcmRlckdldE1hbmRvYlVzZXJzP3BhZ2U9XCIgK1xyXG4gICAgICAgICAgICBwYWdlICtcclxuICAgICAgICAgICAgXCImbmFtZT1cIiArXHJcbiAgICAgICAgICAgIG5hbWUgK1xyXG4gICAgICAgICAgICBcIiZtZW1iZXJzPVwiICtcclxuICAgICAgICAgICAgbWVtYmVycyArXHJcbiAgICAgICAgICAgIFwiJmxhc3RfY291Ym9uPVwiICtcclxuICAgICAgICAgICAgbGFzdF9jb3Vib24gK1xyXG4gICAgICAgICAgICBcIiZ0b3RhbF9jb3Vib25zPVwiICtcclxuICAgICAgICAgICAgdG90YWxfY291Ym9ucyArXHJcbiAgICAgICAgICAgIFwiJlNjaXR5PVwiICtcclxuICAgICAgICAgICAgU2NpdHkgK1xyXG4gICAgICAgICAgICBcIiZTYWVyYT1cIiArXHJcbiAgICAgICAgICAgIFNhZXJhICtcclxuICAgICAgICAgICAgXCImU2NhdD1cIiArXHJcbiAgICAgICAgICAgIFNjYXQgK1xyXG4gICAgICAgICAgICBcIiZwaW9yaXR5PVwiICtcclxuICAgICAgICAgICAgcGlvcml0eSArXHJcbiAgICAgICAgICAgIFwiJlJzTmFtZT1cIiArXHJcbiAgICAgICAgICAgIFJzTmFtZSArXHJcbiAgICAgICAgICAgIFwiJlJzUGhvbmU9XCIgK1xyXG4gICAgICAgICAgICBSc1Bob25lICtcclxuICAgICAgICAgICAgXCImbWFuZG9iZV9pZD1cIiArXHJcbiAgICAgICAgICAgIG1hbmRvYmVfaWQsXHJcblxyXG4gICAgICBhcGkuZ2V0XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgaXNMb2FkaW5nOiAhZXJyb3IgJiYgIWRhdGEsXHJcbiAgICAgIGlzRXJyb3I6IGVycm9yLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXR1c2Vyc3MoXHJcbiAgcmVxdWVzdCxcclxuICBuYW1lLFxyXG4gIG1lbWJlcnMsXHJcbiAgbGFzdF9jb3Vib24sXHJcbiAgdG90YWxfY291Ym9ucyxcclxuICBwaW9yaXR5LFxyXG4gIHBhZ2UsXHJcbiAgU2NpdHksXHJcbiAgU2FlcmEsXHJcbiAgU2NhdCxcclxuICBSc05hbWUsXHJcbiAgUnNQaG9uZSxcclxuICBoaWRlXHJcbikge1xyXG4gIGlmIChyZXF1ZXN0ID09IFwiZmlyc3RUaW1lXCIpIHtcclxuICAgIGNvbnN0IHsgbG9hZGluZyB9ID0gdXNlQXV0aCgpO1xyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgICBsb2FkaW5nID8gZmFsc2UgOiBcInJhYndhL0dldHVzZXJzc1wiLFxyXG4gICAgICBhcGkuZ2V0XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgaXNMb2FkaW5nOiAhZXJyb3IgJiYgIWRhdGEsXHJcbiAgICAgIGlzRXJyb3I6IGVycm9yLFxyXG4gICAgfTtcclxuICB9IGVsc2UgaWYgKHJlcXVlc3QgPT0gXCJjdXN0b21cIikge1xyXG4gICAgY29uc3QgeyBsb2FkaW5nIH0gPSB1c2VBdXRoKCk7XHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICAgIGxvYWRpbmdcclxuICAgICAgICA/IGZhbHNlXHJcbiAgICAgICAgOiBcInJhYndhL09yZGVyR2V0dXNlcnNzP3BhZ2U9XCIgK1xyXG4gICAgICAgICAgICBwYWdlICtcclxuICAgICAgICAgICAgXCImbmFtZT1cIiArXHJcbiAgICAgICAgICAgIG5hbWUgK1xyXG4gICAgICAgICAgICBcIiZtZW1iZXJzPVwiICtcclxuICAgICAgICAgICAgbWVtYmVycyArXHJcbiAgICAgICAgICAgIFwiJmxhc3RfY291Ym9uPVwiICtcclxuICAgICAgICAgICAgbGFzdF9jb3Vib24gK1xyXG4gICAgICAgICAgICBcIiZ0b3RhbF9jb3Vib25zPVwiICtcclxuICAgICAgICAgICAgdG90YWxfY291Ym9ucyArXHJcbiAgICAgICAgICAgIFwiJlNjaXR5PVwiICtcclxuICAgICAgICAgICAgU2NpdHkgK1xyXG4gICAgICAgICAgICBcIiZTYWVyYT1cIiArXHJcbiAgICAgICAgICAgIFNhZXJhICtcclxuICAgICAgICAgICAgXCImU2NhdD1cIiArXHJcbiAgICAgICAgICAgIFNjYXQgK1xyXG4gICAgICAgICAgICBcIiZwaW9yaXR5PVwiICtcclxuICAgICAgICAgICAgcGlvcml0eSArXHJcbiAgICAgICAgICAgIFwiJlJzTmFtZT1cIiArXHJcbiAgICAgICAgICAgIFJzTmFtZSArXHJcbiAgICAgICAgICAgIFwiJlJzUGhvbmU9XCIgK1xyXG4gICAgICAgICAgICBSc1Bob25lICtcclxuICAgICAgICAgICAgXCImaGlkZT1cIiArXHJcbiAgICAgICAgICAgIGhpZGUsXHJcblxyXG4gICAgICBhcGkuZ2V0XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgaXNMb2FkaW5nOiAhZXJyb3IgJiYgIWRhdGEsXHJcbiAgICAgIGlzRXJyb3I6IGVycm9yLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRDb3Vwb25zQnlCcmFjbmhDYXQoQnJhbmNoaWQsIENhdGVnb3J5aWQpIHtcclxuICBjb25zdCB7IGxvYWRpbmcgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICBsb2FkaW5nXHJcbiAgICAgID8gZmFsc2VcclxuICAgICAgOiBcInJhYndhL0dldENvdXBvbnNCeUJyYWNuaENhdD9CcmFuY2hpZD1cIiArXHJcbiAgICAgICAgICBCcmFuY2hpZCArXHJcbiAgICAgICAgICBcIiZDYXRlZ29yeWlkPVwiICtcclxuICAgICAgICAgIENhdGVnb3J5aWQsXHJcbiAgICBhcGkuZ2V0XHJcbiAgKTtcclxuICByZXR1cm4ge1xyXG4gICAgZGF0YTogZGF0YSxcclxuICAgIGlzTG9hZGluZzogIWVycm9yICYmICFkYXRhLFxyXG4gICAgaXNFcnJvcjogZXJyb3IsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdldENvdXBvbkJyYW5jaGVzKFNlY3Rpb25faWQpIHtcclxuICBjb25zdCB7IGxvYWRpbmcgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICBsb2FkaW5nID8gZmFsc2UgOiBcInJhYndhL0dldENvdXBvbkJyYW5jaGVzP1NlY3Rpb25faWQ9XCIgKyBTZWN0aW9uX2lkLFxyXG4gICAgYXBpLmdldFxyXG4gICk7XHJcbiAgcmV0dXJuIHtcclxuICAgIENvdXBvbkJyYW5jaGVzOiBkYXRhLFxyXG4gICAgQ291cG9uQnJhbmNoZXNpc0xvYWRpbmc6ICFlcnJvciAmJiAhZGF0YSxcclxuICAgIENvdXBvbkJyYW5jaGVzaXNFcnJvcjogZXJyb3IsXHJcbiAgfTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gR2V0VXNlck1ldGEoVGhlVXNlcl9pZCkge1xyXG4gIGNvbnN0IHsgbG9hZGluZyB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcclxuICAgIGxvYWRpbmcgPyBmYWxzZSA6IFwicmFid2EvR2V0VXNlck1ldGE/VGhlVXNlcl9pZD1cIiArIFRoZVVzZXJfaWQsXHJcbiAgICBhcGkuZ2V0XHJcbiAgKTtcclxuICByZXR1cm4ge1xyXG4gICAgVXNlck1ldGE6IGRhdGEsXHJcbiAgICBVc2VyTWV0YWlzTG9hZGluZzogIWVycm9yICYmICFkYXRhLFxyXG4gICAgVXNlck1ldGFpc0Vycm9yOiBlcnJvcixcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2V0Q2F0ZWdvcmllcygpIHtcclxuICBjb25zdCB7IGxvYWRpbmcgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICBsb2FkaW5nID8gZmFsc2UgOiBcInJhYndhL0dldENhdGVnb3JpZXNcIixcclxuICAgIGFwaS5nZXRcclxuICApO1xyXG4gIHJldHVybiB7XHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gICAgaXNMb2FkaW5nOiAhZXJyb3IgJiYgIWRhdGEsXHJcbiAgICBpc0Vycm9yOiBlcnJvcixcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2V0Q29tcGFueXMoKSB7XHJcbiAgY29uc3QgeyBsb2FkaW5nIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgbG9hZGluZyA/IGZhbHNlIDogXCJyYWJ3YS9HZXRDb21wYW55c1wiLFxyXG4gICAgYXBpLmdldFxyXG4gICk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgICBpc0xvYWRpbmc6ICFlcnJvciAmJiAhZGF0YSxcclxuICAgIGlzRXJyb3I6IGVycm9yLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRDYXRlZ29yeXNCeUNpdHkoY2l0eSkge1xyXG4gIGNvbnN0IHsgbG9hZGluZyB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcclxuICAgIGxvYWRpbmcgPyBmYWxzZSA6IFwicmFid2EvR2V0Q2F0ZWdvcnlzQnlDaXR5P2NpdHk9XCIgKyBjaXR5LFxyXG4gICAgYXBpLmdldFxyXG4gICk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgICBpc0xvYWRpbmc6ICFlcnJvciAmJiAhZGF0YSxcclxuICAgIGlzRXJyb3I6IGVycm9yLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRDb3Vwb25zQnlTZWN0aW9uKHNlY3Rpb25faWQpIHtcclxuICBjb25zdCB7IGxvYWRpbmcgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICBsb2FkaW5nID8gZmFsc2UgOiBcInJhYndhL0dldENvdXBvbnNCeVNlY3Rpb24/c2VjdGlvbl9pZD1cIiArIHNlY3Rpb25faWQsXHJcbiAgICBhcGkuZ2V0XHJcbiAgKTtcclxuICByZXR1cm4ge1xyXG4gICAgZGF0YTogZGF0YSxcclxuICAgIGlzTG9hZGluZzogIWVycm9yICYmICFkYXRhLFxyXG4gICAgaXNFcnJvcjogZXJyb3IsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdldENvdXBvbnNCeWJyYW5jaChJZCwgZ2V0VHlwZSkge1xyXG4gIGNvbnN0IHsgbG9hZGluZyB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcclxuICAgIGxvYWRpbmdcclxuICAgICAgPyBmYWxzZVxyXG4gICAgICA6IFwicmFid2EvR2V0Q291cG9uc0J5YnJhbmNoP0lkPVwiICsgSWQgKyBcIiZnZXRUeXBlPVwiICsgZ2V0VHlwZSxcclxuXHJcbiAgICBhcGkuZ2V0XHJcbiAgKTtcclxuICByZXR1cm4ge1xyXG4gICAgZGF0YTogZGF0YSxcclxuICAgIGlzTG9hZGluZzogIWVycm9yICYmICFkYXRhLFxyXG4gICAgaXNFcnJvcjogZXJyb3IsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdldENDQXMoKSB7XHJcbiAgY29uc3QgeyBsb2FkaW5nIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKGxvYWRpbmcgPyBmYWxzZSA6IFwicmFid2EvR2V0Q0NBc1wiLCBhcGkuZ2V0KTtcclxuICByZXR1cm4ge1xyXG4gICAgZGF0YTogZGF0YSxcclxuICAgIGlzTG9hZGluZzogIWVycm9yICYmICFkYXRhLFxyXG4gICAgaXNFcnJvcjogZXJyb3IsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBpX2dldDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlcy1leGFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1sb2FkaW5nLXNrZWxldG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3clwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==