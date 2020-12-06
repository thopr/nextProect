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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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

/***/ "./components/Admin_nav.js":
/*!*********************************!*\
  !*** ./components/Admin_nav.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _contexts_auth_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/auth.js */ "./contexts/auth.js");
var _jsxFileName = "C:\\xampp\\htdocs\\next\\components\\Admin_nav.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Admin_nav() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    0: isMobile,
    1: setIsMobile
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    toggler,
    settoggler,
    loading,
    logout
  } = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // device detection
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {// settoggler(false);
    }
  });
  return __jsx("nav", {
    className: "aafa sidenav navbar navbar-vertical  fixed-right  navbar-expand-xs navbar-light bg-white",
    id: "sidenav-main",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "scrollbar-inner",
    style: {
      backgroundColor: "#F5F6F8"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      display: "none"
    },
    className: "sidenav-header  align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "navbar-brand",
    href: "javascript:void(0)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "../assets/img/brand/blue.png",
    className: "navbar-brand-img",
    alt: "...",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: "navbar-inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "collapse navbar-collapse",
    id: "sidenav-collapse-main",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get("UserType") == "admin" ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("ul", {
    className: "navbar-nav",
    style: {
      textAlign: "right"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, __jsx("img", {
    onClick: () => {
      logout();
      router.push("/Management");
    },
    src: "/logo.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 19
    }
  }), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 19
    }
  }), __jsx("div", {
    style: {
      marginBottom: "10px"
    },
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "col-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  }, __jsx("img", {
    width: "100%",
    height: "100%",
    style: {
      marginRight: "10%",
      borderRadius: "30px"
    },
    src: js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get("profile_pic"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "col-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 23
    }
  }, __jsx("p", {
    style: {
      marginBottom: "-1px",
      fontWeight: "bold"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 25
    }
  }, js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get("first_name") + " " + js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get("last_name"))), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 23
    }
  }, __jsx("div", {
    style: {
      color: "#4CAF50"
    },
    className: "col-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 25
    }
  }, "\u0645\u062F\u064A\u0631"), __jsx("div", {
    className: "col-auto",
    style: {
      marginTop: "3%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 25
    }
  }, " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a //href={{ pathname: "/about", query: { name: "test" } }}
  , {
    href: "/UpdateProfileA" // replace
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 27
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 29
    }
  }, __jsx("i", {
    class: "ni ni-settings-gear-65",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 31
    }
  }))))))), __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a //href={{ pathname: "/about", query: { name: "test" } }}
  , {
    href: "/CompanysStatistics" // replace
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: router.pathname == "/CompanysStatistics" ? "nav-link active" : "nav-link ",
    style: router.pathname == "/CompanysStatistics" ? {
      backgroundColor: "#c7e4ae"
    } : {},
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 23
    }
  }, __jsx("i", {
    className: "ni ni-chart-pie-35 text-orange",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "nav-link-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 25
    }
  }, "\u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A \u0627\u0644\u0634\u0631\u0643\u0627\u062A")))), __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/companys",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: router.pathname == "/companys" ? "nav-link active" : "nav-link ",
    style: router.pathname == "/companys" ? {
      backgroundColor: "#c7e4ae"
    } : {},
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 23
    }
  }, __jsx("i", {
    className: "ni ni-building text-info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "nav-link-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 25
    }
  }, " ", "\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0648\u0627\u0644\u0643\u0648\u0628\u0648\u0646\u0627\u062A")))), __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/DistributeCoupons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: router.pathname == "/DistributeCoupons" ? "nav-link active" : "nav-link ",
    style: router.pathname == "/DistributeCoupons" ? {
      backgroundColor: "#c7e4ae"
    } : {},
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 23
    }
  }, __jsx("i", {
    className: "ni ni-tag text-danger",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "nav-link-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 25
    }
  }, "\u0635\u0631\u0641 \u0627\u0644\u0643\u0648\u0628\u0648\u0646\u0627\u062A")))), __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/Needs",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: router.pathname == "/Needs" ? "nav-link active" : "nav-link ",
    style: router.pathname == "/Needs" ? {
      backgroundColor: "#c7e4ae"
    } : {},
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 23
    }
  }, __jsx("i", {
    className: "ni ni-archive-2 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "nav-link-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 25
    }
  }, "\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0625\u062D\u062A\u064A\u0627\u062C\u0627\u062A")))), __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/Users",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: router.pathname == "/Users" ? "nav-link active" : "nav-link ",
    style: router.pathname == "/Users" ? {
      backgroundColor: "#c7e4ae"
    } : {},
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 23
    }
  }, __jsx("i", {
    className: "ni ni-single-02 text-primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "nav-link-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 25
    }
  }, "\u062C\u0645\u064A\u0639 \u0627\u0644\u0645\u0633\u062A\u0641\u064A\u062F\u064A\u0646")))), __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/RegisterUser",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: router.pathname == "/RegisterUser" ? "nav-link active" : "nav-link ",
    style: router.pathname == "/RegisterUser" ? {
      backgroundColor: "#c7e4ae"
    } : {},
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 23
    }
  }, __jsx("i", {
    className: "ni ni-circle-08 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "nav-link-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 25
    }
  }, "\u062A\u0633\u062C\u064A\u0644 \u0645\u0633\u062A\u0641\u064A\u062F")))), __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/CCA",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: router.pathname == "/CCA" ? "nav-link active" : "nav-link ",
    style: router.pathname == "/CCA" ? {
      backgroundColor: "#c7e4ae"
    } : {},
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 23
    }
  }, __jsx("i", {
    className: "ni ni-circle-08 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "nav-link-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 25
    }
  }, "\u0627\u0644\u062F\u0648\u0644 \u0648\u0627\u0644\u0645\u062F\u0646 \u0648\u0627\u0644\u0645\u0646\u0627\u0637\u0642")))), __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/ApproveUsers",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: router.pathname == "/ApproveUsers" ? "nav-link active" : "nav-link ",
    style: router.pathname == "/ApproveUsers" ? {
      backgroundColor: "#c7e4ae"
    } : {},
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 23
    }
  }, __jsx("i", {
    className: "ni ni-circle-08 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "nav-link-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 25
    }
  }, "\u0625\u0639\u062A\u0645\u0627\u062F \u0627\u0644\u0645\u0633\u062A\u0641\u064A\u062F\u064A\u0646")))), __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/Mandobes",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: router.pathname == "/Mandobes" ? "nav-link active" : "nav-link ",
    style: router.pathname == "/Mandobes" ? {
      backgroundColor: "#c7e4ae"
    } : {},
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 23
    }
  }, __jsx("i", {
    className: "ni ni-briefcase-24 text-primary ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "nav-link-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 25
    }
  }, "\u062C\u0645\u064A\u0639 \u0627\u0644\u0645\u0646\u062F\u0648\u0628\u064A\u0646")))), __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/RegisterMandobe",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: router.pathname == "/RegisterMandobe" ? "nav-link active" : "nav-link ",
    style: router.pathname == "/RegisterMandobe" ? {
      backgroundColor: "#c7e4ae"
    } : {},
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 23
    }
  }, __jsx("i", {
    className: "ni ni-briefcase-24 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "nav-link-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 25
    }
  }, "\u062A\u0633\u062C\u064A\u0644 \u0645\u0646\u062F\u0648\u0628")))), __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/ApproveMandobes",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: router.pathname == "/ApproveMandobes" ? "nav-link active" : "nav-link ",
    style: router.pathname == "/ApproveMandobes" ? {
      backgroundColor: "#c7e4ae"
    } : {},
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 23
    }
  }, __jsx("i", {
    className: "ni ni-briefcase-24 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "nav-link-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 25
    }
  }, "\u0625\u0639\u062A\u0645\u0627\u062F \u0645\u0646\u062F\u0648\u0628")))), __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/Sponsor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: router.pathname == "/Sponsor" ? "nav-link active" : "nav-link ",
    style: router.pathname == "/Sponsor" ? {
      backgroundColor: "#c7e4ae"
    } : {},
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 23
    }
  }, __jsx("i", {
    className: "ni ni-briefcase-24 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "nav-link-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 25
    }
  }, "\u0627\u0644\u062F\u0627\u0639\u0645\u064A\u0646")))), __jsx("img", {
    onClick: () => {
      logout();
      router.push("/Management");
    },
    src: "/logo.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 19
    }
  }), __jsx("div", {
    style: {
      textAlign: "center",
      backgroundColor: "rgb(245,246,248)"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 19
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 21
    }
  }, "\u0627\u0644\u062F\u0639\u0645 \u0627\u0644\u0641\u0646\u064A"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 21
    }
  }, "INFO@GUTURESAGES.COM")))) : js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get("UserType") == "Company" ? __jsx("ul", {
    className: "navbar-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/logo.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 17
    }
  }), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 17
    }
  }), __jsx("div", {
    style: {
      marginBottom: "10px"
    },
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "col-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 19
    }
  }, __jsx("img", {
    width: "100%",
    height: "100%",
    style: {
      marginRight: "10%",
      borderRadius: "30px"
    },
    src: js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get("profile_pic"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "col-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 21
    }
  }, __jsx("p", {
    style: {
      marginBottom: "-1px",
      fontWeight: "bold"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 23
    }
  }, js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get("first_name") + " " + js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get("last_name"))), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 21
    }
  }, __jsx("div", {
    style: {
      color: "#4CAF50"
    },
    className: "col-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 23
    }
  }, "\u0634\u0631\u0643\u0629"), __jsx("div", {
    className: "col-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 23
    }
  }, " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a //href={{ pathname: "/about", query: { name: "test" } }}
  , {
    href: "/UpdateProfileC" // replace
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 25
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384,
      columnNumber: 27
    }
  }, "\u062A\u0639\u062F\u064A\u0644")))))), __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a //href={{ pathname: "/about", query: { name: "test" } }}
  , {
    href: "/CompanyStatistics" // replace
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 19
    }
  }, __jsx("a", {
    className: router.pathname == "/CompanyStatistics" ? "nav-link active" : "nav-link ",
    style: router.pathname == "/CompanyStatistics" ? {
      backgroundColor: "#c7e4ae"
    } : {},
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "ni ni-chart-pie-35 text-orange",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408,
      columnNumber: 23
    }
  }), __jsx("span", {
    className: "nav-link-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409,
      columnNumber: 23
    }
  }, "\u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A")))), __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/company",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
      columnNumber: 19
    }
  }, __jsx("a", {
    className: router.pathname == "/company" ? "nav-link active" : "nav-link ",
    style: router.pathname == "/company" ? {
      backgroundColor: "#c7e4ae"
    } : {},
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "ni ni-building text-info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427,
      columnNumber: 23
    }
  }), __jsx("span", {
    className: "nav-link-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428,
      columnNumber: 23
    }
  }, " ", "\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0641\u0631\u0648\u0639 \u0648\u0627\u0644\u0643\u0648\u0628\u0648\u0646\u0627\u062A")))), __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/CompanySponsors",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 19
    }
  }, __jsx("a", {
    className: router.pathname == "/CompanySponsors" ? "nav-link active" : "nav-link ",
    style: router.pathname == "/CompanySponsors" ? {
      backgroundColor: "#c7e4ae"
    } : {},
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "ni ni-building text-info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449,
      columnNumber: 23
    }
  }), __jsx("span", {
    className: "nav-link-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450,
      columnNumber: 23
    }
  }, " \u0627\u0644\u062F\u0627\u0639\u0645\u064A\u0646")))), __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455,
      columnNumber: 17
    }
  }, __jsx("button", {
    style: {
      width: "95%",
      marginTop: "53px",
      float: "right",
      marginRight: "5px"
    },
    type: "button",
    type: "submit",
    class: "btn btn-danger",
    onClick: () => {
      logout();
      router.push("/login");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456,
      columnNumber: 19
    }
  }, "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C"))) : __jsx("ul", {
    className: "navbar-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/logo.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478,
      columnNumber: 17
    }
  }), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479,
      columnNumber: 17
    }
  }), __jsx("div", {
    style: {
      marginBottom: "10px"
    },
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "col-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481,
      columnNumber: 19
    }
  }, __jsx("img", {
    width: "100%",
    height: "100%",
    style: {
      marginRight: "10%",
      borderRadius: "30px"
    },
    src: js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get("profile_pic"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "col-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 489,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 490,
      columnNumber: 21
    }
  }, __jsx("p", {
    style: {
      marginBottom: "-1px",
      fontWeight: "bold"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 491,
      columnNumber: 23
    }
  }, js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get("first_name") + " " + js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get("last_name"))), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497,
      columnNumber: 21
    }
  }, __jsx("div", {
    style: {
      color: "#4CAF50"
    },
    className: "col-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498,
      columnNumber: 23
    }
  }, "\u0645\u0646\u062F\u0648\u0628"), __jsx("div", {
    className: "col-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 501,
      columnNumber: 23
    }
  }, " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a //href={{ pathname: "/about", query: { name: "test" } }}
  , {
    href: "/UpdateProfileM" // replace
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 503,
      columnNumber: 25
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508,
      columnNumber: 27
    }
  }, "\u062A\u0639\u062F\u064A\u0644")))))), __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 514,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a //href={{ pathname: "/about", query: { name: "test" } }}
  , {
    href: "/MyUsers" // replace
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 515,
      columnNumber: 19
    }
  }, __jsx("a", {
    className: router.pathname == "/MyUsers" ? "nav-link active" : "nav-link ",
    style: router.pathname == "/MyUsers" ? {
      backgroundColor: "#c7e4ae"
    } : {},
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 520,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "ni ni-chart-pie-35 text-orange",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 532,
      columnNumber: 23
    }
  }), __jsx("span", {
    className: "nav-link-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 533,
      columnNumber: 23
    }
  }, "\u0627\u0644\u0645\u0633\u062A\u0641\u064A\u062F\u064A\u0646")))), __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/Register_User",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538,
      columnNumber: 19
    }
  }, __jsx("a", {
    className: router.pathname == "/Register_User" ? "nav-link active" : "nav-link ",
    style: router.pathname == "/Register_User" ? {
      backgroundColor: "#c7e4ae"
    } : {},
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "ni ni-building text-info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 551,
      columnNumber: 23
    }
  }), __jsx("span", {
    className: "nav-link-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 552,
      columnNumber: 23
    }
  }, " \u062A\u0633\u062C\u064A\u0644 \u0645\u0633\u062A\u0641\u064A\u062F")))), __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/ApproveUsersM",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 557,
      columnNumber: 19
    }
  }, __jsx("a", {
    className: router.pathname == "/ApproveUsersM" ? "nav-link active" : "nav-link ",
    style: router.pathname == "/ApproveUsersM" ? {
      backgroundColor: "#c7e4ae"
    } : {},
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "ni ni-building text-info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 570,
      columnNumber: 23
    }
  }), __jsx("span", {
    className: "nav-link-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 571,
      columnNumber: 23
    }
  }, " \u0625\u0639\u062A\u0645\u0627\u062F \u0627\u0644\u0645\u0633\u062A\u0641\u064A\u062F\u064A\u0646")))), __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 576,
      columnNumber: 17
    }
  }, __jsx("button", {
    style: {
      width: "95%",
      marginTop: "53px",
      float: "right",
      marginRight: "5px"
    },
    type: "button",
    type: "submit",
    class: "btn btn-danger",
    onClick: () => {
      logout();
      router.push("/login");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 577,
      columnNumber: 19
    }
  }, "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C")))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Admin_nav);

/***/ }),

/***/ "./components/ButtonUpload.js":
/*!************************************!*\
  !*** ./components/ButtonUpload.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/AddCircleOutline */ "@material-ui/icons/AddCircleOutline");
/* harmony import */ var _material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\xampp\\htdocs\\next\\components\\ButtonUpload.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ButtonUploadImage = ({
  typeImage,
  onChange
}) => {
  const inputKey = "upload-product-image-" + typeImage;
  return __jsx("div", {
    className: "upload-image-holder",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("input", {
    accept: "image/*",
    id: inputKey,
    multiple: typeImage !== "thumbnail",
    type: "file",
    className: "hide-upload-input",
    onChange: e => onChange && onChange(e),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }), __jsx("span", {
    className: "add-icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("label", {
    htmlFor: inputKey,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_1___default.a, {
    fontSize: "large",
    color: "primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ButtonUploadImage);

/***/ }),

/***/ "./components/EditUser.js":
/*!********************************!*\
  !*** ./components/EditUser.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PersonType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PersonType */ "./components/PersonType.js");
/* harmony import */ var _UserPersonNeeds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserPersonNeeds */ "./components/UserPersonNeeds.js");
/* harmony import */ var _services_Api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/Api */ "./services/Api.js");
/* harmony import */ var _services_api_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api_get */ "./services/api_get.js");
/* harmony import */ var _contexts_auth_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/auth.js */ "./contexts/auth.js");
/* harmony import */ var react_alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-alert */ "react-alert");
/* harmony import */ var react_alert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_alert__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\xampp\\htdocs\\next\\components\\EditUser.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function EditUser({
  TheUser,
  updatesetstep
}) {
  const User = TheUser;
  console.log("here");
  console.log(User);
  console.log("hereqqqqqqqqqqqqqqq");
  const alert = Object(react_alert__WEBPACK_IMPORTED_MODULE_6__["useAlert"])();
  const {
    0: TheSelectedCountry,
    1: setTheSelectedCountry
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(User.city);
  const {
    0: TheSelectedCity,
    1: setTheSelectedCity
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(User.county);
  const {
    0: TheSelectedaera,
    1: setTheSelectedaera
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(User.area);
  const {
    0: familyType,
    1: setfamilyType
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(User.type);
  const {
    0: priority,
    1: setpriority
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(User.priority);
  const {
    0: FirstName,
    1: setFirstName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(User.firstName);
  const {
    0: LastName,
    1: setLastName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(User.lastName);
  const {
    0: email,
    1: setemail
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(User.email);
  const {
    0: phone,
    1: setphone
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(User.phone);
  const {
    0: des,
    1: setdes
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(User.des);
  const {
    0: mempersCount,
    1: setmempersCount
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(User.mempersCount);
  const {
    0: share,
    1: setshare
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(User.share);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log(User.type);
    setfamilyType(User.type);
  }, []); //const [project,setProject] = useState(false);

  const {
    toggler,
    settoggler,
    loading
  } = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const {
    0: spinner,
    1: setspinner
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    UserMeta,
    UserMetaisLoading,
    UserMetaisError
  } = Object(_services_api_get__WEBPACK_IMPORTED_MODULE_4__["GetUserMeta"])(User.id); //const UserNeeds = isLoading ? false : UserMeta.data.needs;

  /* const UserNeeds = isLoading ? false : UserMeta;
  console.log(UserNeeds);
  //const UserMembers = isLoading ? false : UserMeta.data.members;
  /* const UserMembers = isLoading ? false : UserMeta.data.members;
  console.log(UserMembers);*/

  console.log(UserMeta);
  const {
    data,
    isLoading,
    isError
  } = Object(_services_api_get__WEBPACK_IMPORTED_MODULE_4__["GetFullCCAs"])();
  const results = isLoading ? false : data.data;
  console.log(results);
  const showSkeleton = isLoading || loading;
  const {
    0: CCAs,
    1: setCCAs
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: citys,
    1: setcitys
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: aeras,
    1: setaeras
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: list,
    1: updateList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: firstTime,
    1: setfirstTime
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: firstTime2,
    1: setfirstTime2
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: categories,
    1: setcategories
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);

  if (firstTime && results) {
    setCCAs(results.options.CCAs);
    setTheSelectedCity(User.city);
    setTheSelectedCountry(User.county);
    setcitys(results.options.CCAs[0].data);
    setaeras(results.options.CCAs[0].data[0].data);
    setcategories(results.options.categories);
    setfirstTime(false);
  }

  const {
    0: oldWoman,
    1: setOldWoman
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: oldMan,
    1: setOldMan
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: accibilityPerson,
    1: setAccibilityPerson
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: baby,
    1: setBaby
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: orphanGirls,
    1: setOrphanGirls
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: orphanBoys,
    1: setOrphanBoys
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: girls,
    1: setGirls
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: guys,
    1: setGuys
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: women,
    1: setWomen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: men,
    1: setMen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: widows,
    1: setWidows
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: girl,
    1: setgirl
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: boy,
    1: setboy
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);

  if (firstTime2 && UserMeta) {
    let UserMetaNeeds = UserMeta.data.needs;
    let favorite = [];

    for (let i = 0; i < UserMetaNeeds.length; i++) {
      let temp = {
        id: UserMetaNeeds[i].Category_id,
        name: ""
      };
      favorite.push(temp);
    }

    console.log("السلام عليكم ورحمة الله وبركاتة");
    console.log(favorite);
    updateList(favorite);
    let UserMembers = UserMeta.data.members[0];
    setOldMan(UserMembers.old_man);
    setOldWoman(UserMembers.old_women);
    setAccibilityPerson(UserMembers.Special_needs);
    setBaby(UserMembers.infant);
    setOrphanGirls(UserMembers.orphan_girl);
    setOrphanBoys(UserMembers.orphan_boy);
    setGirls(UserMembers.young_women);
    setGuys(UserMembers.young_men);
    setWomen(UserMembers.women);
    setMen(UserMembers.man);
    setWidows(UserMembers.widow);
    setgirl(UserMembers.girl);
    setboy(UserMembers.boy);
    setfirstTime2(false);
  }

  const {
    0: step,
    1: setStep
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const {
    0: allowed,
    1: setallowed
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  function updateArray(data) {
    let favorite = list;
    favorite.push(data);
    updateList(favorite);
    setallowed(true); //  setPersonNeeds((PersonNeeds) => PersonNeeds.concat(data));
    // setPersonNeeds((PersonNeeds) => [...PersonNeeds, data]);
  }

  async function removeUser(id) {
    let favorite = list;

    if (list.length == 1) {
      setallowed(false);
    }

    favorite = await favorite.filter(e => e.id !== id);
    updateList(favorite);
  }

  function mysubmit() {
    let data = {
      TheSelectedCity,
      TheSelectedaera,
      FirstName,
      LastName,
      email,
      phone,
      familyType,
      priority,
      oldWoman,
      oldMan,
      accibilityPerson,
      baby,
      orphanGirls,
      orphanBoys,
      widows,
      girls,
      guys,
      women,
      men,
      TheSelectedCountry,
      girl,
      boy,
      share,
      mempersCount,
      categories: list,
      oldPhone: User.phone,
      oldemail: User.email,
      TheUser_id: User.id,
      des
    };
    console.log(data);
    let checke = true;
    let mycalc = 0 + parseInt(oldWoman) + parseInt(oldMan) + parseInt(accibilityPerson) + parseInt(baby) + parseInt(orphanGirls) + parseInt(orphanBoys) + parseInt(widows) + parseInt(girls) + parseInt(guys) + parseInt(women) + parseInt(men) + parseInt(girl) + parseInt(boy);
    console.log(mycalc);
    setmempersCount(mycalc);

    if (mycalc == 0) {
      checke = false;
      alert.show(" الرجاء تحديد عدد الافراد ", {
        timeout: 2000,
        type: "error"
      });
    } else {}

    if (data.categories.length == 0) {
      checke = false;
      alert.show("الرجاء إختيار إحتياج واحد أو أكثر ", {
        timeout: 2000,
        type: "error"
      });
    }

    if (FirstName == "") {
      checke = false;
      alert.show("الرجاء كتابة الإسم الأول", {
        timeout: 2000,
        type: "error"
      });
    }

    if (LastName == "") {
      checke = false;
      alert.show("الرجاء كتابة الإسم الاخير", {
        timeout: 2000,
        type: "error"
      });
    }

    if (phone == "") {
      checke = false;
      alert.show("الرجاء كتابة رقم الجوال", {
        timeout: 2000,
        type: "error"
      });
    }

    setspinner(true);

    if (checke) {
      _services_Api__WEBPACK_IMPORTED_MODULE_3__["default"].post("rabwa/UpdateUser", data).then(res => {
        setspinner(false);
        console.log(res.data);

        if (res.data == "already exists") {
          alert.show("إسم الكوبون موجود مسبقا ", {
            timeout: 2000,
            type: "error"
          });
        }

        if (res.data == "phone") {
          alert.show("رقم الجوال مستخدم مسبقا", {
            timeout: 2000,
            type: "error"
          });
        }

        if (res.data == "NotEmail") {
          alert.show("الرجاء إدخال إيميل صحيح", {
            timeout: 2000,
            type: "error"
          });
        }

        if (res.data > 0) {
          alert.show("تم بنجاح", {
            timeout: 2000,
            type: "success"
          });
          updatesetstep(1); //GoBackAndTriggerMutation();
          //router.push("/companys/[name]", "/companys/" + formdata.companyName);
        }
      }).catch(err => {
        alert.show("حصل خطأ", {
          timeout: 2000,
          type: "error"
        });
        setspinner(false);
        console.log(err);
      });
    }
  }

  let step2 = step;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    style: {
      float: "right"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 7
    }
  }, __jsx("button", {
    onClick: () => {
      updatesetstep(1);
    },
    class: "btn btn-icon btn-primary",
    type: "button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 9
    }
  }, __jsx("span", {
    class: "btn-inner--icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 11
    }
  }, __jsx("i", {
    class: "fa fa-arrow-right",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 13
    }
  }))), __jsx("h2", {
    style: {
      marginRight: "0.8em",
      display: "inline"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 9
    }
  }, "\u0627\u0644\u0639\u0648\u062F\u0629 \u0627\u0644\u0649 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u0633\u062A\u0641\u064A\u062F\u064A\u0646")), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 7
    }
  }), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 7
    }
  }), step == 1 ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, familyType == "" ? "" : __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 17
    }
  }, __jsx("label", {
    className: "form-control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 19
    }
  }, "\u0627\u0644\u062F\u0648\u0644\u0629"), __jsx("select", {
    name: "county",
    onChange: e => {
      let selectedCounty = e.target.value;
      setTheSelectedCountry(selectedCounty);
      /*if (firstTime) {
                      setfirstTime(false);
                    }*/

      for (let index = 0; index < CCAs.length; index++) {
        const tempconunty = CCAs[index];

        if (tempconunty.name === selectedCounty) {
          setcitys(tempconunty.data);

          if (tempconunty.data[0]) {
            setTheSelectedCity(tempconunty.data[0].name);
            setaeras(tempconunty.data[0].data);
          } else {
            setaeras([]);
          }
        }
      }
    },
    class: "form-control",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 19
    }
  }, CCAs ? CCAs.map((county, index) => {
    return __jsx("option", {
      selected: User.county == county.name ? true : false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 358,
        columnNumber: 29
      }
    }, county.name);
  }) : ""))), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 17
    }
  }, __jsx("label", {
    className: "form-control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 19
    }
  }, "\u0627\u0644\u0645\u062F\u064A\u0646\u0629"), __jsx("select", {
    id: "mycity",
    name: "city",
    onChange: e => {
      let selectedcity = e.target.value;
      setTheSelectedCity(e.target.value);
      /*if (firstTime) {
                      setfirstTime(false);
                    }*/

      for (let index = 0; index < citys.length; index++) {
        const tempcity = citys[index];

        if (tempcity.name === selectedcity) {
          setaeras(tempcity.data);
        }
      }
    },
    class: "form-control",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 19
    }
  }, citys.length > 0 ? citys.map((city, index) => {
    return __jsx("option", {
      selected: User.city == city.name ? true : false,
      value: city.name,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 396,
        columnNumber: 29
      }
    }, city.name);
  }) : ""))), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409,
      columnNumber: 17
    }
  }, __jsx("label", {
    className: "form-control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410,
      columnNumber: 19
    }
  }, "\u0627\u0644\u0645\u0646\u0637\u0642\u0629"), __jsx("select", {
    name: "aeras",
    onChange: e => {
      setTheSelectedaera(e.target.value);
    },
    class: "form-control",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411,
      columnNumber: 19
    }
  }, __jsx("option", {
    selected: User.area == "all" ? true : false,
    value: "0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 21
    }
  }, "\u0627\u0644\u0643\u0644"), aeras.length > 0 ? aeras.map((aeras, index) => {
    return __jsx("option", {
      selected: User.area == aeras.name ? true : false,
      value: aeras.name,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 427,
        columnNumber: 29
      }
    }, aeras.name);
  }) : ""))), __jsx("h6", {
    className: "heading-small text-muted mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439,
      columnNumber: 15
    }
  }, "\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u0641\u064A\u062F"), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444,
      columnNumber: 17
    }
  }, __jsx("label", {
    className: "form-control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 19
    }
  }, "\u0627\u0644\u0625\u0633\u0645 \u0627\u0644\u0623\u0648\u0644"), __jsx("input", {
    type: "text",
    name: "FirstName",
    onChange: e => {
      setFirstName(e.target.value);
    },
    value: FirstName,
    className: "form-control",
    placeholder: "\u0627\u0644\u0625\u0633\u0645 \u0627\u0644\u0623\u0648\u0644",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459,
      columnNumber: 17
    }
  }, __jsx("label", {
    className: "form-control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460,
      columnNumber: 19
    }
  }, "\u0627\u0644\u0625\u0633\u0645 \u0627\u0644\u0625\u062E\u064A\u0631"), __jsx("input", {
    type: "text",
    name: "LastName",
    onChange: e => {
      setLastName(e.target.value);
    },
    value: LastName,
    className: "form-control",
    placeholder: "\u0627\u0644\u0625\u0633\u0645 \u0627\u0644\u0625\u062E\u064A\u0631",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 461,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 474,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 475,
      columnNumber: 17
    }
  }, __jsx("label", {
    className: "form-control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 476,
      columnNumber: 19
    }
  }, "\u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0644"), __jsx("input", {
    type: "number",
    name: "phone",
    onChange: e => {
      setphone(e.target.value);
    },
    value: phone,
    className: "form-control",
    placeholder: "96650xxxxx",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 490,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 491,
      columnNumber: 17
    }
  }, __jsx("label", {
    className: "form-control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 492,
      columnNumber: 19
    }
  }, "\u0648\u0635\u0641 \u0627\u0644\u062D\u0627\u0644\u0629"), __jsx("textarea", {
    type: "text",
    name: "des",
    onChange: e => {
      setdes(e.target.value);
    },
    value: des,
    className: "form-control",
    rows: "4",
    placeholder: " \u0648\u0635\u0641 \u062D\u0627\u0644\u0629 \u0627\u0644\u0645\u0633\u062A\u0641\u064A\u062F",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 493,
      columnNumber: 19
    }
  }))), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507,
      columnNumber: 15
    }
  }), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508,
      columnNumber: 15
    }
  }, "\u0646\u0648\u0639 \u0627\u0644\u0645\u062D\u062A\u0627\u062C:"), __jsx("div", {
    style: {
      marginRight: "15px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509,
      columnNumber: 15
    }
  }, __jsx("div", {
    class: "custom-control custom-radio mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 510,
      columnNumber: 17
    }
  }, __jsx("input", {
    type: "radio",
    id: "customRadio1",
    name: "customRadio",
    class: "custom-control-input",
    onChange: e => {
      if (e.target.value == "on") {
        setfamilyType("family");
      }
    },
    checked: familyType == "family" ? true : true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511,
      columnNumber: 19
    }
  }), __jsx("label", {
    class: "custom-control-label",
    for: "customRadio1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523,
      columnNumber: 19
    }
  }, "\u0639\u0627\u0626\u0644\u0629")), __jsx("div", {
    class: "custom-control custom-radio",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 527,
      columnNumber: 17
    }
  }, __jsx("input", {
    type: "radio",
    id: "customRadio2",
    name: "customRadio",
    class: "custom-control-input",
    onChange: e => {
      if (e.target.value == "on") {
        setfamilyType("single");
      }
    },
    checked: familyType == "single" ? true : false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 528,
      columnNumber: 19
    }
  }), __jsx("label", {
    class: "custom-control-label",
    for: "customRadio2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540,
      columnNumber: 19
    }
  }, "\u0641\u0631\u062F"))), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 546,
      columnNumber: 15
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 548,
      columnNumber: 15
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 549,
      columnNumber: 17
    }
  }, "\u062D\u0627\u0644\u0629 \u0627\u0644\u0645\u062D\u062A\u0627\u062C:"), __jsx("div", {
    class: "custom-control custom-radio custom-control-inline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 551,
      columnNumber: 17
    }
  }, __jsx("input", {
    type: "radio",
    id: "customRadioInline1",
    name: "sss",
    class: "custom-control-input",
    onChange: e => {
      if (e.target.value == "on") {
        setpriority("normal");
      }
    },
    checked: priority == "normal" ? true : false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 552,
      columnNumber: 19
    }
  }), __jsx("label", {
    class: "custom-control-label",
    for: "customRadioInline1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 564,
      columnNumber: 19
    }
  }, "\u0639\u0627\u062F\u064A", " ")), __jsx("div", {
    class: "custom-control custom-radio custom-control-inline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 568,
      columnNumber: 17
    }
  }, __jsx("input", {
    type: "radio",
    id: "customRadioInline2",
    name: "sss",
    class: "custom-control-input",
    onChange: e => {
      if (e.target.value == "on") {
        setpriority("critical");
      }
    },
    checked: priority == "critical" ? true : false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 569,
      columnNumber: 19
    }
  }), __jsx("label", {
    class: "custom-control-label",
    for: "customRadioInline2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 581,
      columnNumber: 19
    }
  }, "\u062D\u0631\u062C\u0629", " ")), __jsx("div", {
    class: "custom-control custom-radio custom-control-inline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 585,
      columnNumber: 17
    }
  }, __jsx("input", {
    type: "radio",
    id: "customRadioInline3",
    name: "sss",
    class: "custom-control-input",
    onChange: e => {
      if (e.target.value == "on") {
        setpriority("superCritical");
      }
    },
    checked: User.priority == "superCritical" ? true : false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 586,
      columnNumber: 19
    }
  }), __jsx("label", {
    class: "custom-control-label",
    for: "customRadioInline3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 598,
      columnNumber: 19
    }
  }, "\u062D\u0631\u062C\u0629 \u062C\u062F\u0627")))), " ") : "", step == 2 ? __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 611,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "table-responsive",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 612,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 613,
      columnNumber: 13
    }
  }, __jsx("table", {
    className: "table align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 614,
      columnNumber: 15
    }
  }, __jsx("thead", {
    className: "thead-light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 615,
      columnNumber: 17
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 616,
      columnNumber: 19
    }
  }, __jsx("th", {
    scope: "col",
    className: "sort",
    "data-sort": "name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 617,
      columnNumber: 21
    }
  }, "\u0627\u0644\u062D\u0627\u0644\u0629"), __jsx("th", {
    scope: "col",
    className: "sort",
    "data-sort": "budget",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 620,
      columnNumber: 21
    }
  }, "\u0627\u0644\u0639\u062F\u062F"))), __jsx("tbody", {
    className: "list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 625,
      columnNumber: 17
    }
  }, __jsx(_PersonType__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: "\u0627\u0645\u0631\u0623\u0629 \u0645\u0633\u0646\u0629",
    theState: oldWoman,
    somef: e => {
      setOldWoman(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 626,
      columnNumber: 19
    }
  }), __jsx(_PersonType__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: "\u0631\u062C\u0644 \u0645\u0633\u0646",
    theState: oldMan,
    somef: e => {
      setOldMan(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 633,
      columnNumber: 19
    }
  }), __jsx(_PersonType__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: "\u0627\u062D\u062A\u064A\u0627\u062C\u0627\u062A \u062E\u0627\u0635\u0629",
    theState: accibilityPerson,
    somef: e => {
      setAccibilityPerson(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 640,
      columnNumber: 19
    }
  }), __jsx(_PersonType__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: "\u0637\u0641\u0644 \u0631\u0636\u064A\u0639",
    theState: baby,
    somef: e => {
      setBaby(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 647,
      columnNumber: 19
    }
  }), __jsx(_PersonType__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: "\u0628\u0646\u0627\u062A \u0623\u064A\u062A\u0627\u0645",
    theState: orphanGirls,
    somef: e => {
      setOrphanGirls(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 654,
      columnNumber: 19
    }
  }), __jsx(_PersonType__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: "\u0623\u0648\u0644\u0627\u062F \u0623\u064A\u062A\u0627\u0645",
    theState: orphanBoys,
    somef: e => {
      setOrphanBoys(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 661,
      columnNumber: 19
    }
  }), __jsx(_PersonType__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: "\u0623\u0631\u0627\u0645\u0644",
    theState: widows,
    somef: e => {
      setWidows(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 668,
      columnNumber: 19
    }
  }), __jsx(_PersonType__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: "\u0634\u0627\u0628\u0627\u062A ",
    theState: girls,
    somef: e => {
      setGirls(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 675,
      columnNumber: 19
    }
  }), __jsx(_PersonType__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: "\u0634\u0628\u0627\u0628",
    theState: guys,
    somef: e => {
      setGuys(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 682,
      columnNumber: 19
    }
  }), __jsx(_PersonType__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: "\u0628\u0646\u0627\u062A",
    theState: girl,
    somef: e => {
      setgirl(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 689,
      columnNumber: 19
    }
  }), __jsx(_PersonType__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: "\u0623\u0648\u0644\u0627\u062F",
    theState: boy,
    somef: e => {
      setboy(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 696,
      columnNumber: 19
    }
  }), __jsx(_PersonType__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: "\u0646\u0633\u0627\u0621",
    theState: women,
    somef: e => {
      setWomen(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 703,
      columnNumber: 19
    }
  }), __jsx(_PersonType__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: "\u0631\u062C\u0627\u0644",
    theState: men,
    somef: e => {
      setMen(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 710,
      columnNumber: 19
    }
  }), __jsx(_PersonType__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: "\u062D\u0635\u0629 \u0627\u0644\u0639\u0627\u0626\u0644\u0629 \u0645\u0646 \u0627\u0644\u0643\u0648\u0628\u0648\u0646\u0627\u062A (\u0641\u0642\u0637 \u0644\u0644\u062A\u0633\u0647\u064A\u0644 \u064A\u0645\u0643\u0646 \u062A\u063A\u064A\u0631 \u0627\u0644\u0643\u0645\u064A\u0629 \u0648\u0642\u062A \u0627\u0644\u0635\u0631\u0641)",
    theState: share,
    somef: e => {
      setshare(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 718,
      columnNumber: 19
    }
  })))))) : "", step == 3 ? __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 734,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "table-responsive",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 735,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 736,
      columnNumber: 13
    }
  }, __jsx("table", {
    className: "table align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 737,
      columnNumber: 15
    }
  }, __jsx("thead", {
    className: "thead-light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 738,
      columnNumber: 17
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 739,
      columnNumber: 19
    }
  }, __jsx("th", {
    scope: "col",
    className: "sort",
    "data-sort": "name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 740,
      columnNumber: 21
    }
  }, "\u0627\u0644\u0625\u062D\u062A\u064A\u0627\u062C"), __jsx("th", {
    scope: "col",
    className: "sort",
    "data-sort": "budget",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 743,
      columnNumber: 21
    }
  }, "\u0627\u062E\u062A\u064A\u0627\u0631"))), __jsx("tbody", {
    className: "list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 748,
      columnNumber: 17
    }
  }, categories.length > 0 ? categories.map((data, i) => {
    return __jsx(_UserPersonNeeds__WEBPACK_IMPORTED_MODULE_2__["default"], {
      data: data,
      updateArray: updateArray,
      removeUser: removeUser,
      UserMeta: UserMeta ? UserMeta : [],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 752,
        columnNumber: 27
      }
    });
  }) : ""))))) : "", __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 770,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      margin: "0 auto",
      textAlign: "center",
      marginTop: "9em"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 771,
      columnNumber: 9
    }
  }, step == 1 ? "" : __jsx("button", {
    type: "button",
    class: "btn btn-lg btn-primary",
    disabled: step == 1 ? true : false,
    onClick: () => {
      step == 1 ? false : setStep(step - 1);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 781,
      columnNumber: 13
    }
  }, "\u0627\u0644\u0633\u0627\u0628\u0642"), "     ", step == 3 ? "" : __jsx("button", {
    type: "button",
    class: "btn btn-lg btn-primary",
    disabled: step == 3 ? true : false,
    onClick: () => {
      step == 3 ? false : setStep(step + 1);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 796,
      columnNumber: 13
    }
  }, "\u0627\u0644\u062A\u0627\u0644\u064A"))), step == 3 ? __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 811,
      columnNumber: 9
    }
  }, __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 812,
      columnNumber: 11
    }
  }), __jsx("div", {
    style: {
      textAlign: "left"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 814,
      columnNumber: 11
    }
  }, __jsx("button", {
    class: "btn btn-icon btn-success",
    onClick: () => {
      mysubmit();
    },
    type: "button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 815,
      columnNumber: 13
    }
  }, __jsx("span", {
    style: {
      marginLeft: ".75em",
      marginRight: "auto"
    },
    class: "btn-inner--text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 822,
      columnNumber: 15
    }
  }, "\u062A\u062D\u062F\u064A\u062B"), "     ", __jsx("span", {
    class: "btn-inner--icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 832,
      columnNumber: 15
    }
  }, __jsx("i", {
    class: "ni ni-send",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 833,
      columnNumber: 17
    }
  }))))) : "");
}

/* harmony default export */ __webpack_exports__["default"] = (EditUser);

/***/ }),

/***/ "./components/EditableImage2.js":
/*!**************************************!*\
  !*** ./components/EditableImage2.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editable_image_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editable-image.module.scss */ "./components/editable-image.module.scss");
/* harmony import */ var _editable_image_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_editable_image_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_RemoveCircleOutline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/RemoveCircleOutline */ "@material-ui/icons/RemoveCircleOutline");
/* harmony import */ var _material_ui_icons_RemoveCircleOutline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_RemoveCircleOutline__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\xampp\\htdocs\\next\\components\\EditableImage2.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 //import Icon from "@material-ui/core/icons";



const EditableImage = ({
  imageObject,
  removeImageFunc
}) => {
  let imagePreview;

  if (typeof imageObject === "string") {
    imagePreview = imageObject;
  } else {
    if ("sourceUrl" in imageObject) imagePreview = imageObject.sourceUrl;else if ("imageObject" in imageObject) imagePreview = URL.createObjectURL(imageObject.imageObject);
  }

  let imgUrl = imageObject ? imagePreview : `${process.env.PUBLIC_URL}/img/logo.png`;
  return __jsx("div", {
    id: "product-editable-image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "product-image " + imageObject.isUloading === false ? "image-uploaded" : "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "product-img-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "remove-image",
    onClick: removeImageFunc,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_RemoveCircleOutline__WEBPACK_IMPORTED_MODULE_2___default.a, {
    fontSize: "large",
    color: "danger",
    stlyle: {
      backgroundColor: "red"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  })), __jsx("img", {
    className: `${imageObject.isUloading ? "image-loading" : ""}`,
    src: imgUrl,
    alt: "",
    width: "308",
    height: "197",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (EditableImage);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\xampp\\htdocs\\next\\components\\Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Footer() {
  return __jsx("footer", {
    class: "footer pt-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }, __jsx("div", {
    class: "row align-items-center justify-content-lg-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }
  }, __jsx("div", {
    class: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }), __jsx("div", {
    class: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/HeaderNav.js":
/*!*********************************!*\
  !*** ./components/HeaderNav.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_auth_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/auth.js */ "./contexts/auth.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\xampp\\htdocs\\next\\components\\HeaderNav.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 //





function Header() {
  const {
    toggler,
    settoggler
  } = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("nav", {
    className: "navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("a", {
    class: "nav-link",
    role: "button",
    href: "#",
    "aria-haspopup": "true",
    "aria-expanded": "false",
    style: {
      display: "block",
      zIndex: "99999999999999999",
      position: "relative",
      height: "40px",
      backgroundColor: "white",
      padding: "10px",
      marginRight: "10px"
    },
    onClick: () => {
      settoggler(!toggler);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "ni ni-align-left-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: "header bg-primary pb-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/NeedyCheckUsers.js":
/*!***************************************!*\
  !*** ./components/NeedyCheckUsers.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\xampp\\htdocs\\next\\components\\NeedyCheckUsers.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function NeedyCheckUsers({
  data,
  myEditUser,
  myDisUser,
  openModal
}) {
  console.log(data);
  return __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("th", {
    scope: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "media align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "media-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "name mb-0 text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, data.Name)))), __jsx("td", {
    className: "budget",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, data.mempersCount), __jsx("td", {
    className: "budget",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, data.lastCoubon == "0000-00-00" ? "لم يستلم" : data.lastCoubon), __jsx("td", {
    className: "budget",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, data.totalCoubons), __jsx("td", {
    className: "budget",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, data.priority == "normal" ? "عايدي" : data.priority == "critical" ? "حرجة" : data.priority == "superCritical" ? "حرجة جدا" : data.priority), __jsx("td", {
    className: "budget",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx("button", {
    type: "button",
    class: "btn",
    "data-toggle": "modal",
    "data-target": "#modal-default",
    onClick: () => {
      openModal(data, "cards");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, "\u0627\u0644\u0628\u0637\u0627\u0642\u0627\u062A")), __jsx("td", {
    className: "budget",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx("button", {
    type: "button",
    class: "btn",
    onClick: () => {
      openModal(data, "stats");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, "\u0645\u0639\u0644\u0648\u0645\u0627\u062A")), __jsx("td", {
    className: "budget",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, data.approvalStatus == 1 ? __jsx("p", {
    style: {
      color: "green"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, "\u0641\u0639\u0627\u0644") : __jsx("p", {
    style: {
      color: "red"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, "\u0639\u0627\u0637\u0644")), __jsx("td", {
    className: "budget",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, __jsx("div", {
    class: "dropdown",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx("a", {
    class: "btn btn-sm btn-icon-only text-light",
    href: "#",
    role: "button",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, __jsx("i", {
    class: "fas fa-ellipsis-v",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "dropdown-menu dropdown-menu-right dropdown-menu-arrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, __jsx("a", {
    onClick: () => {
      console.log(data);
      myEditUser(data);
    },
    class: "dropdown-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, "\u062A\u0639\u062F\u064A\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u0641\u064A\u062F"), js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get("UserType") == "admin" ? __jsx("a", {
    onClick: () => {
      openModal(data, "updateMandobe");
    },
    class: "dropdown-item",
    "data-toggle": "modal",
    "data-target": "#modal-default",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  }, "\u062A\u063A\u064A\u0631 \u0627\u0644\u0645\u0646\u062F\u0648\u0628") : "", js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get("UserType") == "admin" ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, data.approvalStatus == 1 ? __jsx("a", {
    onClick: () => {
      myDisUser(data.user_id, 2);
    },
    class: "dropdown-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 19
    }
  }, "\u062A\u0639\u0637\u064A\u0644 \u062D\u0633\u0627\u0628 \u0627\u0644\u0645\u0633\u062A\u0641\u064A\u062F") : __jsx("a", {
    onClick: () => {
      myDisUser(data.user_id, 1);
    },
    class: "dropdown-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 19
    }
  }, "\u062A\u0641\u0639\u064A\u0644 \u062D\u0633\u0627\u0628 \u0627\u0644\u0645\u0633\u062A\u0641\u064A\u062F")) : ""))));
}

/* harmony default export */ __webpack_exports__["default"] = (NeedyCheckUsers);

/***/ }),

/***/ "./components/NewCardForm.js":
/*!***********************************!*\
  !*** ./components/NewCardForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_Api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/Api */ "./services/Api.js");
/* harmony import */ var _services_api_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api_get */ "./services/api_get.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-loading-skeleton */ "react-loading-skeleton");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-alert */ "react-alert");
/* harmony import */ var react_alert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_alert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _EditableImage2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EditableImage2 */ "./components/EditableImage2.js");
/* harmony import */ var _ButtonUpload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ButtonUpload */ "./components/ButtonUpload.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _contexts_auth_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../contexts/auth.js */ "./contexts/auth.js");
var _jsxFileName = "C:\\xampp\\htdocs\\next\\components\\NewCardForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 //













function NewCardForm({
  user_id,
  username,
  GoBackAndTriggerMutation
}) {
  const alert = Object(react_alert__WEBPACK_IMPORTED_MODULE_5__["useAlert"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"])();
  const token = js_cookie__WEBPACK_IMPORTED_MODULE_8___default.a.get("token");
  const siteUrl = js_cookie__WEBPACK_IMPORTED_MODULE_8___default.a.get("siteUrl");
  const {
    0: XML,
    1: setXML
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: ProductImage,
    1: setProductImage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    toggler,
    settoggler,
    loading
  } = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_11__["default"])();
  const {
    0: spinner,
    1: setspinner
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: InputTypedis,
    1: setInputTypedis
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: InputTypecode,
    1: setInputTypecode
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  /*
  const { data, isLoading, isError } = GetCategories();
    const results = isLoading ? false : data.data;
  const showSkeleton = isLoading || loading;
  */

  const {
    register,
    handleSubmit,
    errors
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["useForm"])({//mode: "onChange",
  });

  function handleThumbnailProduct(file) {
    let imageObj = {
      id: file.name,
      name: file.name,
      isUloading: true,
      imageObject: file
    };
    console.log(imageObj);
    setProductImage(imageObj);
    let formData = new FormData();
    formData.append("file", file);
    axios__WEBPACK_IMPORTED_MODULE_9___default.a.post(siteUrl + "wp/v2/media", formData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(result => {
      console.log(result.data.source_url);
      setXML(result.data.source_url);
    });
  }

  const onSubmit = formdata => {
    formdata = _objectSpread(_objectSpread({}, formdata), {}, {
      user_id,
      XML
    });
    setspinner(true);
    console.log(formdata);
    _services_Api__WEBPACK_IMPORTED_MODULE_2__["default"].post("rabwa/newUserCard", formdata).then(res => {
      console.log(res.data);
      setspinner(false);

      if (res.data > 0) {
        alert.show("تم بنجاح", {
          timeout: 2000,
          type: "success"
        });
        GoBackAndTriggerMutation(); //router.push("/companys/[name]", "/companys/" + formdata.companyName);
      }
    }).catch(err => {
      console.log(err);
      setspinner(false);
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }, __jsx("h1", {
    style: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, " \u0627\u0636\u0627\u0641\u0629 \u0628\u0637\u0627\u0642\u0629 \u0627\u0644\u0649 : ", username), __jsx("div", {
    dir: "rtl",
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }, __jsx("label", {
    style: {
      float: "right"
    },
    className: "form-control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 15
    }
  }, "\u0625\u0633\u0645 \u0627\u0644\u0628\u0637\u0627\u0642\u0629"), __jsx("input", {
    type: "text",
    name: "name",
    ref: register({
      required: true,
      minLength: 3
    }),
    className: "form-control",
    placeholder: "\u0625\u0633\u0645 \u0627\u0644\u0643\u0648\u0628\u0648\u0646",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 15
    }
  })), errors.name && errors.name.type === "required" && __jsx("p", {
    style: {
      color: "red"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 15
    }
  }, "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628"), errors.name && errors.name.type === "minLength" && __jsx("p", {
    style: {
      color: "red"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 15
    }
  }, "\u0627\u0644\u0625\u0633\u0645 \u0627\u0644\u0645\u062F\u062E\u0644 \u0642\u0635\u064A\u0631 \u0644\u0644\u063A\u0627\u064A\u0629")), __jsx("div", {
    className: "col-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }
  }, __jsx("label", {
    style: {
      float: "right"
    },
    className: "form-control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 15
    }
  }, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0625\u0646\u062A\u0647\u0627\u0621"), __jsx("input", {
    type: "date",
    name: "end",
    ref: register({
      required: true
    }),
    className: "form-control",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 15
    }
  })), errors.name && errors.name.type === "required" && __jsx("p", {
    style: {
      color: "red"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 15
    }
  }, "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628")), __jsx("div", {
    className: "col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 13
    }
  }, __jsx("label", {
    style: {
      float: "right"
    },
    className: "form-control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 15
    }
  }, "\u0627\u0644\u0628\u0637\u0627\u0642\u0629"), __jsx("div", {
    style: {
      width: "140px",
      margin: "2em auto"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 15
    }
  }, ProductImage ? __jsx(_EditableImage2__WEBPACK_IMPORTED_MODULE_6__["default"], {
    imageObject: ProductImage,
    removeImageFunc: () => setProductImage(false),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 19
    }
  }) : __jsx(_ButtonUpload__WEBPACK_IMPORTED_MODULE_7__["default"], {
    typeImage: "thumbnail",
    onChange: thumbnail => handleThumbnailProduct(thumbnail.target.files[0]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 19
    }
  })))), __jsx("div", {
    className: "col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 11
    }
  }, __jsx("div", {
    class: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 13
    }
  }, __jsx("label", {
    style: {
      float: "right"
    },
    class: "form-control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 15
    }
  }, " ", "\u0627\u0644\u0648\u0635\u0641"), __jsx("textarea", {
    rows: "4",
    class: "form-control",
    name: "des",
    ref: register({
      minLength: 3
    }),
    placeholder: "\u0648\u0635\u0641 \u0627\u0648 \u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u0625\u0633\u062A\u062E\u062F\u0627\u0645 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 15
    }
  }), errors.des && errors.des.type === "minLength" && __jsx("p", {
    style: {
      color: "red"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 17
    }
  }, "\u0627\u0644\u0648\u0635\u0641 \u0627\u0644\u0645\u062F\u062E\u0644\u0629 \u0642\u0635\u064A\u0631\u0629 \u0644\u0644\u063A\u0627\u064A\u0629")))), spinner ? __jsx("button", {
    className: "btn btn-default",
    disabled: true,
    style: {
      float: "left"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "spinner-grow spinner-grow-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 13
    }
  }), "\u062C\u0627\u0631\u064A \u0627\u0644\u0625\u0631\u0633\u0627\u0644 ..") : __jsx("input", {
    style: {
      float: "left"
    },
    type: "submit",
    className: "btn btn-default",
    value: loading ? "Loading..." : "إرسال",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 11
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (NewCardForm);

/***/ }),

/***/ "./components/PersonType.js":
/*!**********************************!*\
  !*** ./components/PersonType.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\xampp\\htdocs\\next\\components\\PersonType.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function PersonType(props) {
  return __jsx("tr", {
    style: props.name == "حصة العائلة من الكوبونات (فقط للتسهيل يمكن تغير الكمية وقت الصرف)" ? {
      backgroundColor: "#5E72E4",
      color: "white"
    } : {},
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }, __jsx("th", {
    scope: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "media align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "media-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "name mb-0 text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, props.name, " ")))), __jsx("td", {
    className: "budget",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("input", {
    type: "text",
    onChange: e => {
      props.somef(e);
    },
    className: "form-control numher-person-type",
    style: {
      textAlign: "center"
    },
    value: props.theState,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (PersonType);

/***/ }),

/***/ "./components/UserCards.js":
/*!*********************************!*\
  !*** ./components/UserCards.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_api_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api_get */ "./services/api_get.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-loading-skeleton */ "react-loading-skeleton");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_auth_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/auth.js */ "./contexts/auth.js");
var _jsxFileName = "C:\\xampp\\htdocs\\next\\components\\UserCards.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function UserCards({
  user_id
}) {
  const {
    toggler,
    settoggler,
    loading
  } = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const {
    0: spinner,
    1: setspinner
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: InputTypedis,
    1: setInputTypedis
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: InputTypecode,
    1: setInputTypecode
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    data,
    isLoading,
    isError
  } = Object(_services_api_get__WEBPACK_IMPORTED_MODULE_1__["getUserCards"])(user_id);
  const results = isLoading ? false : data.data;
  console.log(results);
  const showSkeleton = isLoading || loading;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, results.length > 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, results.map((card, index) => {
    var d = new Date();
    var myd = new Date(card.end);
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      key: index,
      class: "card",
      style: {
        width: "100%"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 23
      }
    }, __jsx("img", {
      class: "card-img-top",
      src: card.img,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 25
      }
    }), __jsx("div", {
      class: "card-body",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 25
      }
    }, __jsx("h5", {
      class: "card-title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 27
      }
    }, card.name, " "), __jsx("p", {
      class: "card-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 27
      }
    }, card.des), myd.getTime() >= d.getTime() ? __jsx("p", {
      style: {
        color: "green"
      },
      class: "card-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 29
      }
    }, " ", "\u062A\u0646\u062A\u0647\u064A : ", card.end) : __jsx("p", {
      style: {
        color: "red"
      },
      class: "card-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 29
      }
    }, " ", "\u0645\u0646\u062A\u0647\u064A\u0629 : ", card.end))));
  })) : __jsx("h1", {
    style: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0628\u0637\u0627\u0642\u0627\u062A ")))), showSkeleton ? __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2___default.a, {
    height: 40,
    count: 10,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 23
    }
  }) : "");
}

/* harmony default export */ __webpack_exports__["default"] = (UserCards);

/***/ }),

/***/ "./components/UserInfo.js":
/*!********************************!*\
  !*** ./components/UserInfo.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bit_primefaces_primereact_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bit/primefaces.primereact.chart */ "@bit/primefaces.primereact.chart");
/* harmony import */ var _bit_primefaces_primereact_chart__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_bit_primefaces_primereact_chart__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_api_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api_get */ "./services/api_get.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-loading-skeleton */ "react-loading-skeleton");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _contexts_auth_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/auth.js */ "./contexts/auth.js");
/* harmony import */ var react_alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-alert */ "react-alert");
/* harmony import */ var react_alert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_alert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\xampp\\htdocs\\next\\components\\UserInfo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









function UserInfo({
  id,
  setuserInfoMode
}) {
  const {
    0: PieCartDataNumbers,
    1: setPieCartDataNumbers
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: PieCartDataMoney,
    1: setPieCartDataMoney
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: BarChartDataNumbers,
    1: setBarChartDataNumbers
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: BarChartDataMoney,
    1: setBarChartDataMoney
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])(); //const [project,setProject] = useState(false);

  const {
    0: request,
    1: setrequest
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("firstTime");
  console.log(id);
  const alert = Object(react_alert__WEBPACK_IMPORTED_MODULE_5__["useAlert"])();
  const {
    0: name,
    1: setname
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: members,
    1: setmembers
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: last_coubon,
    1: setlast_coubon
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: total_coubons,
    1: settotal_coubons
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: piority,
    1: setpiority
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: page,
    1: setpage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1);
  const {
    0: Scity,
    1: setScity
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("جدة");
  const {
    0: Saera,
    1: setSaera
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("all");
  const {
    0: Scat,
    1: setScat
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(8);
  const {
    0: SsearchName,
    1: setSsearchName
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: SsearchPhone,
    1: setSsearchPhone
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: RsName,
    1: setRsName
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: RsPhone,
    1: setRsPhone
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: spinner,
    1: setspinner
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: TheSelectedcategory,
    1: setTheSelectedcategory
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(8);
  const {
    0: TheUser,
    1: setTheUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: user_info,
    1: setuser_info
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: Mandobe_info,
    1: setMandobe_info
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    user,
    isAuthenticated,
    loading
  } = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const {
    UserStatisticsData,
    UserStatisticsisLoading,
    UserStatisticsisError
  } = Object(_services_api_get__WEBPACK_IMPORTED_MODULE_2__["UserStatistics"])(id);
  const UserStatisticsresults = UserStatisticsData == false ? false : UserStatisticsData;
  const showSkeleton2 = UserStatisticsisLoading || loading;
  const {
    0: firstTime,
    1: setfirstTime
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const {
    0: newState,
    1: setnewState
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const {
    0: statAll,
    1: setstatAll
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: coubons,
    1: setcoubons
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: user_sent_coubons,
    1: setuser_sent_coubons
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: user_used_coubons,
    1: setuser_used_coubons
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: Aluser_over_coubonsl,
    1: setAluser_over_coubonsl
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: list,
    1: updateList
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: allowed,
    1: setallowed
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  function GoBackAndTriggerMutation() {
    setmodalType("cards");
  }

  if (UserStatisticsresults && newState) {
    let testState = UserStatisticsresults.data;
    console.log(testState);
    setuser_info(testState.user_info);
    setMandobe_info(testState.Mandobe_info);
    setuser_sent_coubons(testState.user_sent_coubons);
    setuser_used_coubons(testState.user_used_coubons);
    setAluser_over_coubonsl(testState.Aluser_over_coubonsl);
    let TheYear = testState.theYear;
    setstatAll(testState.All);
    let months = TheYear.months;
    setPieCartDataNumbers({
      labels: ["المرسلة", "المستخدمة", "المنتهية "],
      datasets: [{
        data: [TheYear.sentTotalCount, TheYear.usedTotalCount, TheYear.overTotalCount],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
      }]
    });
    setPieCartDataMoney({
      labels: ["المرسلة", "المستخدمة", "المنتهية "],
      datasets: [{
        data: [TheYear.sentTotal, TheYear.usedTotal, TheYear.overTotal],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
      }]
    });
    setBarChartDataNumbers({
      labels: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
      datasets: [{
        label: "الكوبونات المصروفة السنة الحالية",
        backgroundColor: "#42A5F5",
        data: [months.JanuaryTotalCount, months.FebruaryTotalCount, months.MarchTotalCount, months.AprilTotalCount, months.MayTotalCount, months.JuneTotalCount, months.JulyTotalCount, months.AugustTotalCount, months.SeptemberTotalCount, months.OctoberTotalCount, months.NovemberTotalCount, months.DecemberTotalCount]
      }]
    });
    setBarChartDataMoney({
      labels: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
      datasets: [{
        label: "الكوبونات المصروفة السنة الحالية",
        backgroundColor: "#42A5F5",
        data: [months.JanuaryTotal, months.FebruaryTotal, months.MarchTotal, months.AprilTotal, months.MayTotal, months.JuneTotal, months.JulyTotal, months.AugustTotal, months.SeptemberTotal, months.OctoberTotal, months.NovemberTotal, months.DecemberTotal]
      }]
    });
    setnewState(false);
  }
  /*
    const { data, isLoading, isError } = GetCCAs();
      const results = isLoading ? false : data.data;
    */


  const {
    0: project,
    1: setProject
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: choose,
    1: setChoose
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("category");
  const {
    0: category,
    1: setCategory
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: company,
    1: setCompany
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: branch,
    1: setBranch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: pool,
    1: setpool
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: coubonName,
    1: setcoubonName
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: pool_total,
    1: setpool_total
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);

  function UpdatePool(amount, section, scoubonName) {
    setpool(section);
    setcoubonName(scoubonName);
    setpool_total(amount);
  }

  function updatesetstep(thes) {
    setStep(thes);
  }

  function myEditUser(theSelectedUser) {
    console.log(theSelectedUser);
    setTheUser(theSelectedUser);
    setStep(2);
  }

  function order() {
    if (request == "firstTime") {
      setrequest("custom");
    }

    setRsName("false");
    setRsPhone("false");
  }

  function filter() {
    if (request == "firstTime") {
      setrequest("custom");
    }

    setRsName("false");
    setRsPhone("false");
    setScity(TheSelectedCity);
    setSaera(TheSelectedaera);
    setScat(TheSelectedcategory);
  }

  function phoneS() {
    if (request == "firstTime") {
      setrequest("custom");
    }

    setRsName("false");
    setRsPhone(SsearchPhone);
  }

  function NameS() {
    if (request == "firstTime") {
      setrequest("custom");
    }

    setRsName(SsearchName);
    setRsPhone("false");
  }

  function updateArrayall() {
    console.log("here");
    updateList(users);
    setallowed(true);
    $.each($("input[name='sport']"), function () {
      $(this).prop("checked", true);
    });
  }

  function updateArray(data) {
    let favorite = list;
    favorite.push(data);
    updateList(favorite);
    setallowed(true); //  setPersonNeeds((PersonNeeds) => PersonNeeds.concat(data));
    // setPersonNeeds((PersonNeeds) => [...PersonNeeds, data]);
  }

  function removeUserall() {
    updateList([]);
    setallowed(false);
    $.each($("input[name='sport']"), function () {
      $(this).prop("checked", false);
    });
  }

  const options = [{
    name: "Swedish",
    value: "sv"
  }, {
    name: "English",
    value: "en"
  }, {
    type: "group",
    name: "Group name",
    items: [{
      name: "Spanish",
      value: "es"
    }]
  }];
  const {
    0: step,
    1: setStep
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1);
  let step2 = step;
  return __jsx("div", {
    className: "container mt-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 5
    }
  }, UserStatisticsresults ? user_info.length > 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 13
    }
  }, __jsx("div", {
    style: {
      float: "right"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 15
    }
  }, __jsx("button", {
    onClick: () => {
      // setChoose("company");
      setuserInfoMode(false);
    },
    class: "btn btn-icon btn-primary",
    type: "button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 17
    }
  }, __jsx("span", {
    class: "btn-inner--icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 19
    }
  }, __jsx("i", {
    class: "fa fa-arrow-right",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 21
    }
  }))), __jsx("h2", {
    style: {
      marginRight: "0.8em",
      display: "inline"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 17
    }
  }, "\u0627\u0644\u0639\u0648\u062F\u0629 \u0627\u0644\u0649 \u0627\u0644\u062E\u0644\u0641"), __jsx("div", {
    style: {
      clear: "both"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 17
    }
  })), __jsx("div", {
    class: "col-xl-12 col-md-12",
    style: {
      height: "50px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 15
    }
  })), __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    class: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 15
    }
  }, __jsx("div", {
    class: "col-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 17
    }
  }, " ", __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 19
    }
  }, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u0641\u064A\u062F")), __jsx("div", {
    class: "col-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 17
    }
  }, user_info[0].Name), __jsx("div", {
    class: "col-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 17
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 19
    }
  }, "\u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0644")), __jsx("div", {
    class: "col-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 17
    }
  }, user_info[0].phone)), __jsx("div", {
    class: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 15
    }
  }, __jsx("div", {
    class: "col-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 17
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 19
    }
  }, "\u0623\u062E\u0631 \u0643\u0648\u0628\u0648\u0646")), __jsx("div", {
    class: "col-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 17
    }
  }, " ", user_info[0].lastCoubon == "0000-00-00" ? "لم يستلم" : user_info[0].lastCoubon), __jsx("div", {
    class: "col-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 17
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 19
    }
  }, "\u0627\u0644\u0645\u0635\u0631\u0648\u0641")), __jsx("div", {
    class: "col-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 17
    }
  }, user_info[0].totalCoubons)), __jsx("div", {
    class: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 15
    }
  }, __jsx("div", {
    class: "col-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 17
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 19
    }
  }, "\u0627\u0644\u0623\u0648\u0644\u0648\u064A\u0629")), __jsx("div", {
    class: "col-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 17
    }
  }, " ", user_info[0].priority == "normal" ? "عايدي" : user_info[0].priority == "critical" ? "حرجة" : user_info[0].priority == "superCritical" ? "حرجة جدا" : user_info[0].priority), __jsx("div", {
    class: "col-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 17
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 19
    }
  }, "\u0639\u062F\u062F \u0627\u0644\u0623\u0641\u0631\u0627\u062F")), __jsx("div", {
    class: "col-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 17
    }
  }, user_info[0].mempersCount)), __jsx("div", {
    class: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 15
    }
  }, __jsx("div", {
    class: "col-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 17
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 19
    }
  }, "\u0627\u0644\u0645\u0646\u062F\u0648\u0628")), __jsx("div", {
    class: "col-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 17
    }
  }, Mandobe_info ? Mandobe_info.length > 0 ? Mandobe_info[0].MandobeName : "لم يتم تعين مندوب" : "لم يتم تعين مندوب"), __jsx("div", {
    class: "col-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385,
      columnNumber: 17
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
      columnNumber: 19
    }
  }, "\u0627\u0644\u062D\u0635\u0629")), __jsx("div", {
    class: "col-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 17
    }
  }, user_info[0].share)), __jsx("div", {
    class: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 15
    }
  }, __jsx("div", {
    class: "col-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 17
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 19
    }
  }, "\u0627\u0644\u0639\u0646\u0648\u0627\u0646")), __jsx("div", {
    class: "col-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 17
    }
  }, user_info[0].address)), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 15
    }
  }), __jsx("div", {
    class: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
      columnNumber: 15
    }
  }, __jsx("div", {
    class: "col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 17
    }
  }, __jsx("h3", {
    style: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 19
    }
  }, "\u0648\u0635\u0641 \u0627\u0644\u062D\u0627\u0644\u0629")), __jsx("div", {
    class: "col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 17
    }
  }, user_info[0].des)), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403,
      columnNumber: 15
    }
  }), __jsx("div", {
    class: "card card-stats",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
      columnNumber: 15
    }
  }, __jsx("div", {
    class: "card-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 17
    }
  }, __jsx("div", {
    style: {
      verticalAlign: "top",
      display: "inline-block",
      textAlign: "center",
      width: "76px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "/assets/img/icons/man.png",
    height: "70px",
    width: "70px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 21
    }
  }), __jsx("h1", {
    style: {
      display: "block"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 21
    }
  }, user_info[0].man), __jsx("span", {
    style: {
      display: "block"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421,
      columnNumber: 21
    }
  }, "\u0631\u062C\u0627\u0644")), " ", __jsx("div", {
    style: {
      verticalAlign: "top",
      display: "inline-block",
      textAlign: "center",
      width: "76px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "/assets/img/icons/woman.png",
    height: "70px",
    width: "70px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 21
    }
  }), __jsx("h1", {
    style: {
      display: "block"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 21
    }
  }, user_info[0].women), __jsx("span", {
    style: {
      display: "block"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437,
      columnNumber: 21
    }
  }, "\u0646\u0633\u0627\u0621")), " ", __jsx("div", {
    style: {
      verticalAlign: "top",
      display: "inline-block",
      textAlign: "center",
      width: "76px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "/assets/img/icons/empty.png",
    height: "70px",
    width: "70px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447,
      columnNumber: 21
    }
  }), __jsx("h1", {
    style: {
      display: "block"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452,
      columnNumber: 21
    }
  }, user_info[0].young_men), __jsx("span", {
    style: {
      display: "block"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455,
      columnNumber: 21
    }
  }, "\u0634\u0628\u0627\u0628")), " ", __jsx("div", {
    style: {
      verticalAlign: "top",
      display: "inline-block",
      textAlign: "center",
      width: "76px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 457,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "/assets/img/icons/empty.png",
    height: "70px",
    width: "70px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 465,
      columnNumber: 21
    }
  }), __jsx("h1", {
    style: {
      display: "block"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470,
      columnNumber: 21
    }
  }, user_info[0].young_women), __jsx("span", {
    style: {
      display: "block"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 473,
      columnNumber: 21
    }
  }, "\u0634\u0627\u0628\u0627\u062A")), " ", __jsx("div", {
    style: {
      verticalAlign: "top",
      display: "inline-block",
      textAlign: "center",
      width: "76px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 475,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "/assets/img/icons/boy.png",
    height: "70px",
    width: "70px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 483,
      columnNumber: 21
    }
  }), __jsx("h1", {
    style: {
      display: "block"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 488,
      columnNumber: 21
    }
  }, user_info[0].boy), __jsx("span", {
    style: {
      display: "block"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 489,
      columnNumber: 21
    }
  }, "\u0623\u0648\u0644\u0627\u062F")), " ", __jsx("div", {
    style: {
      verticalAlign: "top",
      display: "inline-block",
      textAlign: "center",
      width: "76px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 491,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "/assets/img/icons/girl.png",
    height: "70px",
    width: "70px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499,
      columnNumber: 21
    }
  }), __jsx("h1", {
    style: {
      display: "block"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504,
      columnNumber: 21
    }
  }, user_info[0].girl), __jsx("span", {
    style: {
      display: "block"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505,
      columnNumber: 21
    }
  }, "\u0628\u0646\u0627\u062A")), " ", __jsx("div", {
    style: {
      verticalAlign: "top",
      display: "inline-block",
      textAlign: "center",
      width: "76px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "/assets/img/icons/empty.png",
    height: "70px",
    width: "70px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 515,
      columnNumber: 21
    }
  }), __jsx("h1", {
    style: {
      display: "block"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 520,
      columnNumber: 21
    }
  }, user_info[0].widow), __jsx("span", {
    style: {
      display: "block"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521,
      columnNumber: 21
    }
  }, "\u0623\u0631\u0627\u0645\u0644")), " ", __jsx("div", {
    style: {
      verticalAlign: "top",
      display: "inline-block",
      textAlign: "center",
      width: "76px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "/assets/img/icons/empty.png",
    height: "70px",
    width: "70px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 531,
      columnNumber: 21
    }
  }), __jsx("h1", {
    style: {
      display: "block"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 536,
      columnNumber: 21
    }
  }, user_info[0].orphan_boy), __jsx("span", {
    style: {
      display: "block"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539,
      columnNumber: 21
    }
  }, "\u0623\u0648\u0644\u0627\u062F \u0623\u064A\u062A\u0627\u0645 ")), " ", __jsx("div", {
    style: {
      verticalAlign: "top",
      display: "inline-block",
      textAlign: "center",
      width: "76px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 541,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "/assets/img/icons/empty.png",
    height: "70px",
    width: "70px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 549,
      columnNumber: 21
    }
  }), __jsx("h1", {
    style: {
      display: "block"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 554,
      columnNumber: 21
    }
  }, user_info[0].orphan_girl), __jsx("span", {
    style: {
      display: "block"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 557,
      columnNumber: 21
    }
  }, "\u0628\u0646\u0627\u062A \u0623\u064A\u062A\u0627\u0645 ")), " ", __jsx("div", {
    style: {
      verticalAlign: "top",
      display: "inline-block",
      textAlign: "center",
      width: "76px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 559,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "/assets/img/icons/baby.png",
    height: "70px",
    width: "70px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 567,
      columnNumber: 21
    }
  }), __jsx("h1", {
    style: {
      display: "block"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 572,
      columnNumber: 21
    }
  }, user_info[0].infant), __jsx("span", {
    style: {
      display: "block"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 573,
      columnNumber: 21
    }
  }, "\u0637\u0641\u0644 \u0631\u0636\u064A\u0639 ")), " ", __jsx("div", {
    style: {
      verticalAlign: "top",
      display: "inline-block",
      textAlign: "center",
      width: "76px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 575,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "/assets/img/icons/wheel.png",
    height: "70px",
    width: "70px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 583,
      columnNumber: 21
    }
  }), __jsx("h1", {
    style: {
      display: "block"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 588,
      columnNumber: 21
    }
  }, user_info[0].Special_needs), __jsx("span", {
    style: {
      display: "block"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 591,
      columnNumber: 21
    }
  }, "\u0627\u062D\u062A\u064A\u0627\u062C\u0627\u062A \u062E\u0627\u0635\u0629 ")), " ", __jsx("div", {
    style: {
      verticalAlign: "top",
      display: "inline-block",
      textAlign: "center",
      width: "76px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 593,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "/assets/img/icons/old-man.png",
    height: "70px",
    width: "70px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 601,
      columnNumber: 21
    }
  }), __jsx("h1", {
    style: {
      display: "block"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 606,
      columnNumber: 21
    }
  }, user_info[0].old_man), __jsx("span", {
    style: {
      display: "block"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 607,
      columnNumber: 21
    }
  }, "\u0631\u062C\u0644 \u0645\u0633\u0646 ")), " ", __jsx("div", {
    style: {
      verticalAlign: "top",
      display: "inline-block",
      textAlign: "center",
      width: "76px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 609,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "/assets/img/icons/old-woman.png",
    height: "70px",
    width: "70px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 617,
      columnNumber: 21
    }
  }), __jsx("h1", {
    style: {
      display: "block"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 622,
      columnNumber: 21
    }
  }, user_info[0].old_women), __jsx("span", {
    style: {
      display: "block"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 625,
      columnNumber: 21
    }
  }, "\u0627\u0645\u0631\u0623\u0629 \u0645\u0633\u0646\u0629 ")), " ")), UserStatisticsresults ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, " ", __jsx("div", {
    class: "row",
    dir: "rtl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 633,
      columnNumber: 19
    }
  }, __jsx("div", {
    class: "col-xl-12 col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 634,
      columnNumber: 21
    }
  }, __jsx("div", {
    class: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 635,
      columnNumber: 23
    }
  }, __jsx("div", {
    class: "col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 636,
      columnNumber: 25
    }
  }, __jsx("h1", {
    style: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 637,
      columnNumber: 27
    }
  }, "\u0627\u0644\u0625\u062D\u0635\u0627\u0621\u0627\u062A"))), __jsx("div", {
    class: "col-xl-6 col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 640,
      columnNumber: 23
    }
  }, __jsx("div", {
    class: "card card-stats",
    style: {
      backgroundColor: "#8bc34aa6"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 641,
      columnNumber: 25
    }
  }, __jsx("div", {
    class: "card-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 645,
      columnNumber: 27
    }
  }, __jsx("div", {
    class: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 646,
      columnNumber: 29
    }
  }, __jsx("div", {
    class: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 647,
      columnNumber: 31
    }
  }, __jsx("h5", {
    class: "card-title text-uppercase text-muted mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 648,
      columnNumber: 33
    }
  }, "\u0627\u0644\u0643\u0648\u0628\u0648\u0646\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u0629"), __jsx("span", {
    class: "h2  font-weight-bold mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 651,
      columnNumber: 33
    }
  }, statAll.usedTotalCountAll, " \u0643\u0648\u0628\u0648\u0646"), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 654,
      columnNumber: 33
    }
  }), __jsx("span", {
    style: {
      color: "green"
    },
    class: "h3 font-weight-bold mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 655,
      columnNumber: 33
    }
  }, statAll.usedTotalAll, " \u0631.\u0633")), __jsx("div", {
    class: "col-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 662,
      columnNumber: 31
    }
  }, __jsx("div", {
    class: "icon icon-shape bg-gradient-info text-white rounded-circle shadow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 663,
      columnNumber: 33
    }
  }, __jsx("i", {
    class: "ni ni-chart-bar-32",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 664,
      columnNumber: 35
    }
  }))))))), __jsx("div", {
    class: "col-xl-6 col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 671,
      columnNumber: 23
    }
  }, __jsx("div", {
    class: "card card-stats",
    style: {
      backgroundColor: "hsl(187deg 100% 42% / 36%)"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 672,
      columnNumber: 25
    }
  }, __jsx("div", {
    class: "card-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 678,
      columnNumber: 27
    }
  }, __jsx("div", {
    class: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 679,
      columnNumber: 29
    }
  }, __jsx("div", {
    class: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 680,
      columnNumber: 31
    }
  }, __jsx("h5", {
    class: "card-title text-uppercase text-muted mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 681,
      columnNumber: 33
    }
  }, "\u0627\u0644\u0643\u0648\u0628\u0648\u0646\u0627\u062A \u0627\u0644\u0645\u0631\u0633\u0644\u0629"), __jsx("span", {
    class: "h2  font-weight-bold mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 684,
      columnNumber: 33
    }
  }, statAll.sentTotalCountAll, " \u0643\u0648\u0628\u0648\u0646"), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 687,
      columnNumber: 33
    }
  }), __jsx("span", {
    style: {
      color: "green"
    },
    class: "h3 font-weight-bold mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 688,
      columnNumber: 33
    }
  }, statAll.sentTotalAll, " \u0631.\u0633")), __jsx("div", {
    class: "col-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 695,
      columnNumber: 31
    }
  }, __jsx("div", {
    class: "icon icon-shape bg-gradient-info text-white rounded-circle shadow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 696,
      columnNumber: 33
    }
  }, __jsx("i", {
    class: "ni ni-chart-bar-32",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 697,
      columnNumber: 35
    }
  }))))))), __jsx("div", {
    class: "col-xl-6 col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 704,
      columnNumber: 23
    }
  }, __jsx("div", {
    class: "card card-stats",
    style: {
      backgroundColor: "hsl(187deg 100% 42% / 36%)"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 705,
      columnNumber: 25
    }
  }, __jsx("div", {
    class: "card-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 711,
      columnNumber: 27
    }
  }, __jsx("div", {
    class: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 712,
      columnNumber: 29
    }
  }, __jsx("div", {
    class: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 713,
      columnNumber: 31
    }
  }, __jsx("h5", {
    class: "card-title text-uppercase text-muted mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 714,
      columnNumber: 33
    }
  }, "\u0627\u0644\u0643\u0648\u0628\u0648\u0646\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u0647\u064A\u0629"), __jsx("span", {
    class: "h2  font-weight-bold mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 717,
      columnNumber: 33
    }
  }, statAll.overTotalCountAll, " \u0643\u0648\u0628\u0648\u0646"), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 720,
      columnNumber: 33
    }
  }), __jsx("span", {
    style: {
      color: "green"
    },
    class: "h3 font-weight-bold mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 721,
      columnNumber: 33
    }
  }, statAll.overTotalAll, " \u0631.\u0633")), __jsx("div", {
    class: "col-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 728,
      columnNumber: 31
    }
  }, __jsx("div", {
    class: "icon icon-shape bg-gradient-info text-white rounded-circle shadow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 729,
      columnNumber: 33
    }
  }, __jsx("i", {
    class: "ni ni-chart-bar-32",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 730,
      columnNumber: 35
    }
  }))))))), __jsx("div", {
    class: "col-xl-6 col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 738,
      columnNumber: 23
    }
  }, __jsx("div", {
    class: "card card-stats",
    style: {
      backgroundColor: "hsl(187deg 100% 42% / 36%)"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 739,
      columnNumber: 25
    }
  }, __jsx("div", {
    class: "card-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 745,
      columnNumber: 27
    }
  }, __jsx("div", {
    class: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 746,
      columnNumber: 29
    }
  }, __jsx("div", {
    class: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 747,
      columnNumber: 31
    }
  }, __jsx("h5", {
    class: "card-title text-uppercase text-muted mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 748,
      columnNumber: 33
    }
  }, "\u0645\u062C\u0645\u0648\u0639 \u0627\u0644\u0643\u0648\u0628\u0648\u0646\u0627\u062A"), __jsx("span", {
    class: "h2  font-weight-bold mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 751,
      columnNumber: 33
    }
  }, statAll.usedTotalCountAll + statAll.sentTotalCountAll + statAll.overTotalCountAll, " ", "\u0643\u0648\u0628\u0648\u0646"), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 757,
      columnNumber: 33
    }
  }), __jsx("span", {
    style: {
      color: "green"
    },
    class: "h3 font-weight-bold mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 758,
      columnNumber: 33
    }
  }, statAll.usedTotalAll + statAll.sentTotalAll + statAll.overTotalAll, " ", "\u0631.\u0633")), __jsx("div", {
    class: "col-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 768,
      columnNumber: 31
    }
  }, __jsx("div", {
    class: "icon icon-shape bg-gradient-info text-white rounded-circle shadow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 769,
      columnNumber: 33
    }
  }, __jsx("i", {
    class: "ni ni-chart-bar-32",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 770,
      columnNumber: 35
    }
  })))))), __jsx("div", {
    class: "col-xl-12 col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 777,
      columnNumber: 25
    }
  }, __jsx("div", {
    class: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 778,
      columnNumber: 27
    }
  }, __jsx("div", {
    class: "card-body  rounded",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 779,
      columnNumber: 29
    }
  }, __jsx("div", {
    class: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 780,
      columnNumber: 31
    }
  }, __jsx("div", {
    class: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 781,
      columnNumber: 33
    }
  }, __jsx("h1", {
    style: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 782,
      columnNumber: 35
    }
  }, "\u0643\u0648\u0628\u0648\u0646\u0627\u062A \u0627\u0644\u0633\u0646\u0629 \u0627\u0644\u062D\u0627\u0644\u064A\u0629"))))))), __jsx("div", {
    class: "row",
    dir: "rtl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 792,
      columnNumber: 23
    }
  }, __jsx("div", {
    class: "col-xl-6 col-md-6 col-sm-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 793,
      columnNumber: 25
    }
  }, __jsx("div", {
    class: "nav-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 794,
      columnNumber: 27
    }
  }, __jsx("ul", {
    class: "nav nav-pills nav-fill flex-column flex-md-row",
    id: "tabs-icons-text",
    role: "tablist",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 795,
      columnNumber: 29
    }
  }, __jsx("li", {
    class: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 800,
      columnNumber: 31
    }
  }, __jsx("a", {
    class: "nav-link mb-sm-3 mb-md-0 active",
    id: "tabs-icons-text-1-tab",
    "data-toggle": "tab",
    href: "#tabs-icons-text-1",
    role: "tab",
    "aria-controls": "tabs-icons-text-1",
    "aria-selected": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 801,
      columnNumber: 33
    }
  }, __jsx("i", {
    class: "ni ni-cloud-upload-96 mr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 810,
      columnNumber: 35
    }
  }), "\u0627\u0644\u0643\u0645\u064A\u0629")), __jsx("li", {
    class: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 814,
      columnNumber: 31
    }
  }, __jsx("a", {
    class: "nav-link mb-sm-3 mb-md-0",
    id: "tabs-icons-text-2-tab",
    "data-toggle": "tab",
    href: "#tabs-icons-text-2",
    role: "tab",
    "aria-controls": "tabs-icons-text-2",
    "aria-selected": "false",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 815,
      columnNumber: 33
    }
  }, __jsx("i", {
    class: "ni ni-bell-55 mr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 824,
      columnNumber: 35
    }
  }), " \u0627\u0644\u0642\u064A\u0645\u0629 \u0628\u0627\u0644\u0631\u064A\u0627\u0644")))), __jsx("div", {
    class: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 830,
      columnNumber: 27
    }
  }, __jsx("div", {
    class: "card-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 831,
      columnNumber: 29
    }
  }, __jsx("div", {
    class: "tab-content",
    id: "myTabContent",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 832,
      columnNumber: 31
    }
  }, __jsx("div", {
    class: "tab-pane fade show active",
    id: "tabs-icons-text-1",
    role: "tabpanel",
    "aria-labelledby": "tabs-icons-text-1-tab",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 833,
      columnNumber: 33
    }
  }, __jsx(_bit_primefaces_primereact_chart__WEBPACK_IMPORTED_MODULE_0__["Chart"], {
    type: "bar",
    data: BarChartDataNumbers,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 839,
      columnNumber: 35
    }
  })), __jsx("div", {
    class: "tab-pane fade",
    id: "tabs-icons-text-2",
    role: "tabpanel",
    "aria-labelledby": "tabs-icons-text-2-tab",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 844,
      columnNumber: 33
    }
  }, __jsx(_bit_primefaces_primereact_chart__WEBPACK_IMPORTED_MODULE_0__["Chart"], {
    type: "bar",
    data: BarChartDataMoney,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 850,
      columnNumber: 35
    }
  })))))), __jsx("div", {
    class: "col-xl-6 col-md-6 col-sm-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 856,
      columnNumber: 25
    }
  }, __jsx("div", {
    class: "nav-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 857,
      columnNumber: 27
    }
  }, __jsx("ul", {
    class: "nav nav-pills nav-fill flex-column flex-md-row",
    id: "tabs-icons-text",
    role: "tablist",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 858,
      columnNumber: 29
    }
  }, __jsx("li", {
    class: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 863,
      columnNumber: 31
    }
  }, __jsx("a", {
    class: "nav-link mb-sm-3 mb-md-0 active",
    id: "tabs-icons-text-4-tab",
    "data-toggle": "tab",
    href: "#tabs-icons-text-4",
    role: "tab",
    "aria-controls": "tabs-icons-text-4",
    "aria-selected": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 864,
      columnNumber: 33
    }
  }, __jsx("i", {
    class: "ni ni-cloud-upload-96 mr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 873,
      columnNumber: 35
    }
  }), "\u0627\u0644\u0643\u0645\u064A\u0629")), __jsx("li", {
    class: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 877,
      columnNumber: 31
    }
  }, __jsx("a", {
    class: "nav-link mb-sm-3 mb-md-0",
    id: "tabs-icons-text-3-tab",
    "data-toggle": "tab",
    href: "#tabs-icons-text-3",
    role: "tab",
    "aria-controls": "tabs-icons-text-3",
    "aria-selected": "false",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 878,
      columnNumber: 33
    }
  }, __jsx("i", {
    class: "ni ni-bell-55 mr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 887,
      columnNumber: 35
    }
  }), " \u0627\u0644\u0642\u064A\u0645\u0629 \u0628\u0627\u0644\u0631\u064A\u0627\u0644")))), __jsx("div", {
    class: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 893,
      columnNumber: 27
    }
  }, __jsx("div", {
    class: "card-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 894,
      columnNumber: 29
    }
  }, __jsx("div", {
    class: "tab-content",
    id: "myTabContent",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 895,
      columnNumber: 31
    }
  }, __jsx("div", {
    class: "tab-pane fade show active",
    id: "tabs-icons-text-4",
    role: "tabpanel",
    "aria-labelledby": "tabs-icons-text-4-tab",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 896,
      columnNumber: 33
    }
  }, __jsx(_bit_primefaces_primereact_chart__WEBPACK_IMPORTED_MODULE_0__["Chart"], {
    type: "doughnut",
    data: PieCartDataNumbers,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 902,
      columnNumber: 35
    }
  })), __jsx("div", {
    class: "tab-pane fade",
    id: "tabs-icons-text-3",
    role: "tabpanel",
    "aria-labelledby": "tabs-icons-text-3-tab",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 907,
      columnNumber: 33
    }
  }, __jsx(_bit_primefaces_primereact_chart__WEBPACK_IMPORTED_MODULE_0__["Chart"], {
    type: "doughnut",
    data: PieCartDataMoney,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 913,
      columnNumber: 35
    }
  }))))))))), " ") : ""), __jsx("div", {
    class: "row",
    dir: "rtl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 931,
      columnNumber: 13
    }
  }, __jsx("div", {
    class: "col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 932,
      columnNumber: 15
    }
  }, __jsx("div", {
    class: "nav-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 934,
      columnNumber: 17
    }
  }, __jsx("ul", {
    class: "nav nav-pills nav-fill flex-column flex-md-row",
    id: "xx",
    role: "tablist",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 935,
      columnNumber: 19
    }
  }, __jsx("li", {
    class: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 940,
      columnNumber: 21
    }
  }, __jsx("a", {
    class: "nav-link mb-sm-3 mb-md-0 active",
    id: "xx-1-tab",
    "data-toggle": "tab",
    href: "#xx-1",
    role: "tab",
    "aria-controls": "xx-1",
    "aria-selected": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 941,
      columnNumber: 23
    }
  }, __jsx("i", {
    class: "ni ni-cloud-upload-96 mr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 950,
      columnNumber: 25
    }
  }), "\u0627\u0644\u0643\u0648\u0628\u0648\u0646\u0627\u062A \u0627\u0644\u0641\u0639\u0627\u0644\u0629")), __jsx("li", {
    class: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 954,
      columnNumber: 21
    }
  }, __jsx("a", {
    class: "nav-link mb-sm-3 mb-md-0",
    id: "xx-2-tab",
    "data-toggle": "tab",
    href: "#xx-2",
    role: "tab",
    "aria-controls": "xx-2",
    "aria-selected": "false",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 955,
      columnNumber: 23
    }
  }, __jsx("i", {
    class: "ni ni-bell-55 mr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 964,
      columnNumber: 25
    }
  }), "\u0627\u0644\u0643\u0648\u0628\u0648\u0646\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u0629")), __jsx("li", {
    class: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 967,
      columnNumber: 21
    }
  }, __jsx("a", {
    class: "nav-link mb-sm-3 mb-md-0",
    id: "xx-3-tab",
    "data-toggle": "tab",
    href: "#xx-3",
    role: "tab",
    "aria-controls": "xx-3",
    "aria-selected": "false",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 968,
      columnNumber: 23
    }
  }, __jsx("i", {
    class: "ni ni-calendar-grid-58 mr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 977,
      columnNumber: 25
    }
  }), "\u0627\u0644\u0643\u0648\u0628\u0648\u0646\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u0647\u064A\u0629")))), __jsx("div", {
    class: "card shadow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 983,
      columnNumber: 17
    }
  }, __jsx("div", {
    class: "card-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 984,
      columnNumber: 19
    }
  }, __jsx("div", {
    class: "tab-content",
    id: "myTabContent",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 985,
      columnNumber: 21
    }
  }, __jsx("div", {
    class: "tab-pane fade show active",
    id: "xx-1",
    role: "tabpanel",
    "aria-labelledby": "xx-1-tab",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 986,
      columnNumber: 23
    }
  }, __jsx("table", {
    dir: "rtl",
    className: "table align-items-center table-flush",
    style: {
      textAlign: "right"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 992,
      columnNumber: 25
    }
  }, __jsx("thead", {
    className: "thead-light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 997,
      columnNumber: 27
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 998,
      columnNumber: 29
    }
  }, __jsx("th", {
    scope: "col",
    "data-sort": "name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 999,
      columnNumber: 31
    }
  }, "\u0627\u0644\u0625\u0633\u0645"), __jsx("th", {
    scope: "col",
    "data-sort": "status",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1003,
      columnNumber: 31
    }
  }, "\u0627\u0644\u0646\u0648\u0639"), __jsx("th", {
    scope: "col",
    "data-sort": "completion",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1007,
      columnNumber: 31
    }
  }, "\u0627\u0644\u0642\u064A\u0645\u0629"), __jsx("th", {
    scope: "col",
    "data-sort": "completion",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1011,
      columnNumber: 31
    }
  }, "\u0645\u0631\u0633\u0644"), __jsx("th", {
    scope: "col",
    "data-sort": "completion",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1014,
      columnNumber: 31
    }
  }, "\u064A\u0646\u062A\u0647\u064A"), __jsx("th", {
    scope: "col",
    "data-sort": "completion",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1017,
      columnNumber: 31
    }
  }, "\u062D\u0627\u0644\u0629 \u0627\u0644\u0625\u0631\u0633\u0627\u0644"))), __jsx("tbody", {
    className: "list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1022,
      columnNumber: 27
    }
  }, " ", user_sent_coubons.map((coubon, index) => {
    let d1 = new Date();
    let d2 = new Date(coubon.Assigned_at);
    let sentChe = true;

    if (d1.getTime() < d2.getTime()) {
      sentChe = false;
    }

    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, coubon.type == "one_code" ? __jsx("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1034,
        columnNumber: 37
      }
    }, __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1035,
        columnNumber: 39
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1036,
        columnNumber: 41
      }
    }, coubon.name)), __jsx("td", {
      colspan: "2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1038,
        columnNumber: 39
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1039,
        columnNumber: 41
      }
    }, "\u0643\u0648\u062F \u0645\u0646\u0635\u0627\u062A (\u0625\u0633\u062A\u062E\u062F\u0627\u0645 \u0645\u0631\u0629 \u0648\u0627\u062D\u062F\u0629)")), __jsx("td", {
      className: "name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1042,
        columnNumber: 39
      }
    }, __jsx("p", {
      className: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1043,
        columnNumber: 41
      }
    }, coubon.Assigned_at, " ")), __jsx("td", {
      colspan: "1",
      className: "name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1047,
        columnNumber: 39
      }
    }), __jsx("td", {
      className: "name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1048,
        columnNumber: 39
      }
    }, __jsx("p", {
      className: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1049,
        columnNumber: 41
      }
    }, sentChe ? __jsx("p", {
      style: {
        color: "green"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1051,
        columnNumber: 45
      }
    }, "\u0645\u0631\u0633\u0644") : __jsx("p", {
      style: {
        color: "orange"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1055,
        columnNumber: 45
      }
    }, "\u063A\u064A\u0631 \u0645\u0631\u0633\u0644")))) : coubon.type == "all_code" ? __jsx("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1063,
        columnNumber: 37
      }
    }, __jsx("td", {
      style: {
        backgroundColor: "rgb(194 224 160)"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1064,
        columnNumber: 39
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1069,
        columnNumber: 41
      }
    }, coubon.name)), __jsx("td", {
      colspan: "3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1071,
        columnNumber: 39
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1072,
        columnNumber: 41
      }
    }, "\u0643\u0648\u062F \u0645\u0646\u0635\u0627\u062A ")), __jsx("td", {
      className: "name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1074,
        columnNumber: 39
      }
    }, __jsx("p", {
      className: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1075,
        columnNumber: 41
      }
    }, coubon.Assigned_at, " ")), __jsx("td", {
      colspan: "1",
      className: "name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1079,
        columnNumber: 39
      }
    }), __jsx("td", {
      className: "name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1080,
        columnNumber: 39
      }
    }, __jsx("p", {
      className: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1081,
        columnNumber: 41
      }
    }, sentChe ? __jsx("p", {
      style: {
        color: "green"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1083,
        columnNumber: 45
      }
    }, "\u0645\u0631\u0633\u0644") : __jsx("p", {
      style: {
        color: "orange"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1087,
        columnNumber: 45
      }
    }, "\u063A\u064A\u0631 \u0645\u0631\u0633\u0644")))) : __jsx("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1095,
        columnNumber: 37
      }
    }, __jsx("td", {
      className: "name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1096,
        columnNumber: 39
      }
    }, __jsx("p", {
      className: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1097,
        columnNumber: 41
      }
    }, coubon.name)), __jsx("td", {
      className: "name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1100,
        columnNumber: 39
      }
    }, coubon.type == "cash" ? __jsx("span", {
      class: "badge badge-pill badge-lg badge-secondary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1102,
        columnNumber: 43
      }
    }, __jsx("img", {
      className: "avatar avatar-sm rounded-circle",
      src: "/assets/img/icons/cash.jpg",
      height: "40",
      width: "40",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1103,
        columnNumber: 45
      }
    })) : coubon.type == "basket" ? __jsx("span", {
      class: "badge badge-pill badge-lg badge-secondary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1111,
        columnNumber: 43
      }
    }, __jsx("img", {
      className: "avatar avatar-sm rounded-circle",
      src: "/assets/img/icons/basket.jpg",
      height: "40",
      width: "40",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1112,
        columnNumber: 45
      }
    })) : coubon.type == "discount" ? __jsx("span", {
      class: "badge badge-pill badge-lg badge-secondary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1120,
        columnNumber: 43
      }
    }, __jsx("img", {
      className: "avatar avatar-sm rounded-circle",
      src: "/assets/img/icons/discount.jpg",
      height: "40",
      width: "40",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1121,
        columnNumber: 45
      }
    })) : ""), __jsx("td", {
      className: "name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1132,
        columnNumber: 39
      }
    }, coubon.type == "cash" ? __jsx("p", {
      className: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1134,
        columnNumber: 43
      }
    }, coubon.value) : coubon.type == "basket" ? __jsx("p", {
      className: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1136,
        columnNumber: 43
      }
    }, coubon.value) : coubon.type == "discount" ? __jsx("p", {
      className: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1138,
        columnNumber: 43
      }
    }, coubon.value, "%") : ""), __jsx("td", {
      className: "name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1144,
        columnNumber: 39
      }
    }, __jsx("p", {
      className: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1145,
        columnNumber: 41
      }
    }, coubon.Assigned_at, " ")), __jsx("td", {
      className: "name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1149,
        columnNumber: 39
      }
    }, __jsx("p", {
      className: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1150,
        columnNumber: 41
      }
    }, coubon.Ends_At, " ")), __jsx("td", {
      className: "name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1152,
        columnNumber: 39
      }
    }, __jsx("p", {
      className: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1153,
        columnNumber: 41
      }
    }, sentChe ? __jsx("p", {
      style: {
        color: "green"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1155,
        columnNumber: 45
      }
    }, "\u0645\u0631\u0633\u0644") : __jsx("p", {
      style: {
        color: "orange"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1159,
        columnNumber: 45
      }
    }, "\u063A\u064A\u0631 \u0645\u0631\u0633\u0644")))));
  })))), __jsx("div", {
    class: "tab-pane fade",
    id: "xx-2",
    role: "tabpanel",
    "aria-labelledby": "xx-2-tab",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1173,
      columnNumber: 23
    }
  }, __jsx("table", {
    dir: "rtl",
    className: "table align-items-center table-flush",
    style: {
      textAlign: "right"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1179,
      columnNumber: 25
    }
  }, __jsx("thead", {
    className: "thead-light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1184,
      columnNumber: 27
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1185,
      columnNumber: 29
    }
  }, __jsx("th", {
    scope: "col",
    "data-sort": "name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1186,
      columnNumber: 31
    }
  }, "\u0627\u0644\u0625\u0633\u0645"), __jsx("th", {
    scope: "col",
    "data-sort": "status",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1190,
      columnNumber: 31
    }
  }, "\u0627\u0644\u0646\u0648\u0639"), __jsx("th", {
    scope: "col",
    "data-sort": "completion",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1194,
      columnNumber: 31
    }
  }, "\u0627\u0644\u0642\u064A\u0645\u0629"), __jsx("th", {
    scope: "col",
    "data-sort": "completion",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1198,
      columnNumber: 31
    }
  }, "\u0645\u0631\u0633\u0644"), __jsx("th", {
    scope: "col",
    "data-sort": "completion",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1201,
      columnNumber: 31
    }
  }, "\u064A\u0646\u062A\u0647\u064A"))), __jsx("tbody", {
    className: "list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1206,
      columnNumber: 27
    }
  }, " ", user_used_coubons.map((coubon, index) => {
    let d1 = new Date();
    let d2 = new Date(coubon.Assigned_at);
    let sentChe = true;

    if (d1.getTime() < d2.getTime()) {
      sentChe = false;
    }

    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, coubon.type == "one_code" ? __jsx("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1218,
        columnNumber: 37
      }
    }, __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1219,
        columnNumber: 39
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1220,
        columnNumber: 41
      }
    }, coubon.name)), __jsx("td", {
      colspan: "2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1222,
        columnNumber: 39
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1223,
        columnNumber: 41
      }
    }, "\u0643\u0648\u062F \u0645\u0646\u0635\u0627\u062A (\u0625\u0633\u062A\u062E\u062F\u0627\u0645 \u0645\u0631\u0629 \u0648\u0627\u062D\u062F\u0629)")), __jsx("td", {
      className: "name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1226,
        columnNumber: 39
      }
    }, __jsx("p", {
      className: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1227,
        columnNumber: 41
      }
    }, coubon.Assigned_at, " ")), __jsx("td", {
      colspan: "1",
      className: "name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1231,
        columnNumber: 39
      }
    })) : coubon.type == "all_code" ? __jsx("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1234,
        columnNumber: 37
      }
    }, __jsx("td", {
      style: {
        backgroundColor: "rgb(194 224 160)"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1235,
        columnNumber: 39
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1240,
        columnNumber: 41
      }
    }, coubon.name)), __jsx("td", {
      colspan: "3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1242,
        columnNumber: 39
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1243,
        columnNumber: 41
      }
    }, "\u0643\u0648\u062F \u0645\u0646\u0635\u0627\u062A ")), __jsx("td", {
      className: "name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1245,
        columnNumber: 39
      }
    }, __jsx("p", {
      className: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1246,
        columnNumber: 41
      }
    }, coubon.Assigned_at, " ")), __jsx("td", {
      colspan: "1",
      className: "name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1250,
        columnNumber: 39
      }
    })) : __jsx("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1253,
        columnNumber: 37
      }
    }, __jsx("td", {
      className: "name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1254,
        columnNumber: 39
      }
    }, __jsx("p", {
      className: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1255,
        columnNumber: 41
      }
    }, coubon.name)), __jsx("td", {
      className: "name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1258,
        columnNumber: 39
      }
    }, coubon.type == "cash" ? __jsx("span", {
      class: "badge badge-pill badge-lg badge-secondary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1260,
        columnNumber: 43
      }
    }, __jsx("img", {
      className: "avatar avatar-sm rounded-circle",
      src: "/assets/img/icons/cash.jpg",
      height: "40",
      width: "40",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1261,
        columnNumber: 45
      }
    })) : coubon.type == "basket" ? __jsx("span", {
      class: "badge badge-pill badge-lg badge-secondary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1269,
        columnNumber: 43
      }
    }, __jsx("img", {
      className: "avatar avatar-sm rounded-circle",
      src: "/assets/img/icons/basket.jpg",
      height: "40",
      width: "40",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1270,
        columnNumber: 45
      }
    })) : coubon.type == "discount" ? __jsx("span", {
      class: "badge badge-pill badge-lg badge-secondary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1278,
        columnNumber: 43
      }
    }, __jsx("img", {
      className: "avatar avatar-sm rounded-circle",
      src: "/assets/img/icons/discount.jpg",
      height: "40",
      width: "40",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1279,
        columnNumber: 45
      }
    })) : ""), __jsx("td", {
      className: "name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1290,
        columnNumber: 39
      }
    }, coubon.type == "cash" ? __jsx("p", {
      className: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1292,
        columnNumber: 43
      }
    }, coubon.value) : coubon.type == "basket" ? __jsx("p", {
      className: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1294,
        columnNumber: 43
      }
    }, coubon.value) : coubon.type == "discount" ? __jsx("p", {
      className: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1296,
        columnNumber: 43
      }
    }, coubon.value, "%") : ""), __jsx("td", {
      className: "name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1302,
        columnNumber: 39
      }
    }, __jsx("p", {
      className: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1303,
        columnNumber: 41
      }
    }, coubon.Assigned_at, " ")), __jsx("td", {
      className: "name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1307,
        columnNumber: 39
      }
    }, __jsx("p", {
      className: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1308,
        columnNumber: 41
      }
    }, coubon.Ends_At, " "))));
  })))), __jsx("div", {
    class: "tab-pane fade",
    id: "xx-3",
    role: "tabpanel",
    "aria-labelledby": "xx-3-tab",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1318,
      columnNumber: 23
    }
  }, __jsx("table", {
    dir: "rtl",
    className: "table align-items-center table-flush",
    style: {
      textAlign: "right"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1324,
      columnNumber: 25
    }
  }, __jsx("thead", {
    className: "thead-light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1329,
      columnNumber: 27
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1330,
      columnNumber: 29
    }
  }, __jsx("th", {
    scope: "col",
    "data-sort": "name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1331,
      columnNumber: 31
    }
  }, "\u0627\u0644\u0625\u0633\u0645"), __jsx("th", {
    scope: "col",
    "data-sort": "status",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1335,
      columnNumber: 31
    }
  }, "\u0627\u0644\u0646\u0648\u0639"), __jsx("th", {
    scope: "col",
    "data-sort": "completion",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1339,
      columnNumber: 31
    }
  }, "\u0627\u0644\u0642\u064A\u0645\u0629"), __jsx("th", {
    scope: "col",
    "data-sort": "completion",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1343,
      columnNumber: 31
    }
  }, "\u0645\u0631\u0633\u0644"), __jsx("th", {
    scope: "col",
    "data-sort": "completion",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1346,
      columnNumber: 31
    }
  }, "\u064A\u0646\u062A\u0647\u064A"))), __jsx("tbody", {
    className: "list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1351,
      columnNumber: 27
    }
  }, " ", Aluser_over_coubonsl.map((coubon, index) => {
    let d1 = new Date();
    let d2 = new Date(coubon.Assigned_at);
    let sentChe = true;

    if (d1.getTime() < d2.getTime()) {
      sentChe = false;
    }

    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, coubon.type == "one_code" ? __jsx("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1363,
        columnNumber: 37
      }
    }, __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1364,
        columnNumber: 39
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1365,
        columnNumber: 41
      }
    }, coubon.name)), __jsx("td", {
      colspan: "2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1367,
        columnNumber: 39
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1368,
        columnNumber: 41
      }
    }, "\u0643\u0648\u062F \u0645\u0646\u0635\u0627\u062A (\u0625\u0633\u062A\u062E\u062F\u0627\u0645 \u0645\u0631\u0629 \u0648\u0627\u062D\u062F\u0629)")), __jsx("td", {
      className: "name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1371,
        columnNumber: 39
      }
    }, __jsx("p", {
      className: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1372,
        columnNumber: 41
      }
    }, coubon.Assigned_at, " ")), __jsx("td", {
      colspan: "1",
      className: "name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1376,
        columnNumber: 39
      }
    })) : coubon.type == "all_code" ? __jsx("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1379,
        columnNumber: 37
      }
    }, __jsx("td", {
      style: {
        backgroundColor: "rgb(194 224 160)"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1380,
        columnNumber: 39
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1385,
        columnNumber: 41
      }
    }, coubon.name)), __jsx("td", {
      colspan: "3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1387,
        columnNumber: 39
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1388,
        columnNumber: 41
      }
    }, "\u0643\u0648\u062F \u0645\u0646\u0635\u0627\u062A ")), __jsx("td", {
      className: "name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1390,
        columnNumber: 39
      }
    }, __jsx("p", {
      className: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1391,
        columnNumber: 41
      }
    }, coubon.Assigned_at, " ")), __jsx("td", {
      colspan: "1",
      className: "name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1395,
        columnNumber: 39
      }
    })) : __jsx("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1398,
        columnNumber: 37
      }
    }, __jsx("td", {
      className: "name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1399,
        columnNumber: 39
      }
    }, __jsx("p", {
      className: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1400,
        columnNumber: 41
      }
    }, coubon.name)), __jsx("td", {
      className: "name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1403,
        columnNumber: 39
      }
    }, coubon.type == "cash" ? __jsx("span", {
      class: "badge badge-pill badge-lg badge-secondary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1405,
        columnNumber: 43
      }
    }, __jsx("img", {
      className: "avatar avatar-sm rounded-circle",
      src: "/assets/img/icons/cash.jpg",
      height: "40",
      width: "40",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1406,
        columnNumber: 45
      }
    })) : coubon.type == "basket" ? __jsx("span", {
      class: "badge badge-pill badge-lg badge-secondary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1414,
        columnNumber: 43
      }
    }, __jsx("img", {
      className: "avatar avatar-sm rounded-circle",
      src: "/assets/img/icons/basket.jpg",
      height: "40",
      width: "40",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1415,
        columnNumber: 45
      }
    })) : coubon.type == "discount" ? __jsx("span", {
      class: "badge badge-pill badge-lg badge-secondary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1423,
        columnNumber: 43
      }
    }, __jsx("img", {
      className: "avatar avatar-sm rounded-circle",
      src: "/assets/img/icons/discount.jpg",
      height: "40",
      width: "40",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1424,
        columnNumber: 45
      }
    })) : ""), __jsx("td", {
      className: "name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1435,
        columnNumber: 39
      }
    }, coubon.type == "cash" ? __jsx("p", {
      className: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1437,
        columnNumber: 43
      }
    }, coubon.value) : coubon.type == "basket" ? __jsx("p", {
      className: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1439,
        columnNumber: 43
      }
    }, coubon.value) : coubon.type == "discount" ? __jsx("p", {
      className: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1441,
        columnNumber: 43
      }
    }, coubon.value, "%") : ""), __jsx("td", {
      className: "name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1447,
        columnNumber: 39
      }
    }, __jsx("p", {
      className: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1448,
        columnNumber: 41
      }
    }, coubon.Assigned_at, " ")), __jsx("td", {
      className: "name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1452,
        columnNumber: 39
      }
    }, __jsx("p", {
      className: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1453,
        columnNumber: 41
      }
    }, coubon.Ends_At, " "))));
  })))))))))) : "" : "", showSkeleton2 ? __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3___default.a, {
    height: 200,
    count: 10,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1476,
      columnNumber: 24
    }
  }) : "");
}

/* harmony default export */ __webpack_exports__["default"] = (UserInfo);

/***/ }),

/***/ "./components/UserPersonNeeds.js":
/*!***************************************!*\
  !*** ./components/UserPersonNeeds.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\xampp\\htdocs\\next\\components\\UserPersonNeeds.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function PersonNeeds({
  data,
  updateArray,
  removeUser,
  UserMeta
}) {
  const {
    0: state,
    1: setstate
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let UserNeeds = UserMeta.data.needs;
    let temps = false;

    for (let i = 0; i < UserNeeds.length; i++) {
      if (UserNeeds[i].Category_id == data.id) {
        console.log("onec"); //  temps = true;

        setstate(true); //
      }
    }
  }, []);
  /*if (temps) {
    setstate(true);
  }*/

  return __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx("th", {
    scope: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "media align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "media-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "name mb-0 text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, data.name, " ")))), __jsx("td", {
    className: "budget",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx("input", {
    type: "checkbox",
    className: "messageCheckbox",
    name: "sport",
    onChange: e => {
      setstate(!state);
      console.log("فحص التشييك مستخدم");
      console.log(state);

      if (state) {
        removeUser(data.id);
      } else {
        updateArray(data);
      }
    },
    value: data.id,
    checked: state,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (PersonNeeds);

/***/ }),

/***/ "./components/editable-image.module.scss":
/*!***********************************************!*\
  !*** ./components/editable-image.module.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"product-editable-image": "editable-image_product-editable-image__1QtqP",
	"product-image": "editable-image_product-image__2j2pd",
	"product-img-container": "editable-image_product-img-container__3a602",
	"remove-image": "editable-image_remove-image__2b5rE",
	"image-loading": "editable-image_image-loading__3ydhj",
	"loadingFadeIn": "editable-image_loadingFadeIn__2wULl",
	"image-uploaded": "editable-image_image-uploaded__1EFnc",
	"imageUploaded": "editable-image_imageUploaded__2ifw2"
};


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

/***/ "./pages/MyUsers.js":
/*!**************************!*\
  !*** ./pages/MyUsers.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Admin_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Admin_nav */ "./components/Admin_nav.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_HeaderNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/HeaderNav */ "./components/HeaderNav.js");
/* harmony import */ var _components_UserCards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/UserCards */ "./components/UserCards.js");
/* harmony import */ var _components_NewCardForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/NewCardForm */ "./components/NewCardForm.js");
/* harmony import */ var _components_EditUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/EditUser */ "./components/EditUser.js");
/* harmony import */ var _components_UserInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/UserInfo */ "./components/UserInfo.js");
/* harmony import */ var _services_Api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/Api */ "./services/Api.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_NeedyCheckUsers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/NeedyCheckUsers */ "./components/NeedyCheckUsers.js");
/* harmony import */ var _services_api_get__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/api_get */ "./services/api_get.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-loading-skeleton */ "react-loading-skeleton");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _contexts_auth_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../contexts/auth.js */ "./contexts/auth.js");
/* harmony import */ var react_alert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-alert */ "react-alert");
/* harmony import */ var react_alert__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_alert__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_14__);
var _jsxFileName = "C:\\xampp\\htdocs\\next\\pages\\MyUsers.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
















function MyUsers() {
  const {
    0: PieCartDataNumbers,
    1: setPieCartDataNumbers
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: PieCartDataMoney,
    1: setPieCartDataMoney
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: BarChartDataNumbers,
    1: setBarChartDataNumbers
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: BarChartDataMoney,
    1: setBarChartDataMoney
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]); //const [project,setProject] = useState(false);

  const {
    0: request,
    1: setrequest
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("firstTime");
  const alert = Object(react_alert__WEBPACK_IMPORTED_MODULE_13__["useAlert"])();
  const {
    0: name,
    1: setname
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: members,
    1: setmembers
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: last_coubon,
    1: setlast_coubon
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: total_coubons,
    1: settotal_coubons
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: piority,
    1: setpiority
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: page,
    1: setpage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1);
  const {
    0: Scity,
    1: setScity
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("جدة");
  const {
    0: Saera,
    1: setSaera
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("all");
  const {
    0: Scat,
    1: setScat
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(8);
  const {
    0: SsearchName,
    1: setSsearchName
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: SsearchPhone,
    1: setSsearchPhone
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: RsName,
    1: setRsName
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: RsPhone,
    1: setRsPhone
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: spinner,
    1: setspinner
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: TheSelectedcategory,
    1: setTheSelectedcategory
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(8);
  const {
    0: TheUser,
    1: setTheUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    user,
    isAuthenticated,
    loading
  } = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_12__["default"])();
  const {
    0: MUuserID,
    1: setMUuserID
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    data,
    isLoading,
    isError
  } = Object(_services_api_get__WEBPACK_IMPORTED_MODULE_10__["GetMandobUsers"])(request, name, members, last_coubon, total_coubons, piority, page, Scity, Saera, Scat, RsName, RsPhone);
  const results = isLoading ? false : data.data;
  console.log(results);
  const users = isLoading ? false : results.users;
  const numberOfPages = isLoading ? false : results.numberOfPages;
  const showSkeleton = isLoading || loading;
  if (isLoading) console.log(numberOfPages);
  const {
    0: citys,
    1: setcitys
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: aeras,
    1: setaeras
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: TheSelectedCity,
    1: setTheSelectedCity
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: TheSelectedaera,
    1: setTheSelectedaera
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("all");
  console.log("the selected city : " + TheSelectedCity);
  const {
    0: coubonTotal,
    1: setcoubonTotal
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: CCAs,
    1: setCCAs
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: categories,
    1: setcategories
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: firstTime,
    1: setfirstTime
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const {
    0: newState,
    1: setnewState
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const {
    0: statAll,
    1: setstatAll
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: list,
    1: updateList
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: allowed,
    1: setallowed
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: userInfoMode,
    1: setuserInfoMode
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  function GoBackAndTriggerMutation() {
    setmodalType("cards");
  }

  if (firstTime && numberOfPages) {
    setCCAs(results.options.CCAs);
    setTheSelectedCity(results.options.CCAs[0].data[0].name);
    setcitys(results.options.CCAs[0].data);
    setaeras(results.options.CCAs[0].data[0].data);
    setcategories(results.options.categories);
    setfirstTime(false);
  }
  /*
    const { data, isLoading, isError } = GetCCAs();
      const results = isLoading ? false : data.data;
    */


  const {
    0: project,
    1: setProject
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: choose,
    1: setChoose
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("category");
  const {
    0: category,
    1: setCategory
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: company,
    1: setCompany
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: branch,
    1: setBranch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: pool,
    1: setpool
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: coubonName,
    1: setcoubonName
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: pool_total,
    1: setpool_total
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);

  function UpdatePool(amount, section, scoubonName) {
    setpool(section);
    setcoubonName(scoubonName);
    setpool_total(amount);
  }

  function updatesetstep(thes) {
    setStep(thes);

    if (request == "firstTime") {
      Object(swr__WEBPACK_IMPORTED_MODULE_14__["mutate"])("rabwa/GetMandobUsers");
    } else {
      Object(swr__WEBPACK_IMPORTED_MODULE_14__["mutate"])("rabwa/OrderGetMandobUsers?page=" + page + "&name=" + name + "&members=" + members + "&last_coubon=" + last_coubon + "&total_coubons=" + total_coubons + "&Scity=" + Scity + "&Saera=" + Saera + "&Scat=" + Scat + "&piority=" + piority + "&RsName=" + RsName + "&RsPhone=" + RsPhone);
    }
  }

  function myEditUser(theSelectedUser) {
    console.log("----------------------");
    console.log(theSelectedUser);
    console.log("----------------------");
    setTheUser(theSelectedUser);
    setStep(2);
  }

  function myDisUser(theSelectedDisUserId, sStatus) {
    let approve = sStatus;
    let theUserid = theSelectedDisUserId;
    let mydd = {
      approve,
      theUserid
    };
    console.log(mydd);
    _services_Api__WEBPACK_IMPORTED_MODULE_7__["default"].post("rabwa/ApproveUser", mydd).then(res => {
      if (request == "firstTime") {
        Object(swr__WEBPACK_IMPORTED_MODULE_14__["mutate"])("rabwa/GetMandobUsers");
      } else {
        Object(swr__WEBPACK_IMPORTED_MODULE_14__["mutate"])("rabwa/OrderGetMandobUsers?page=" + page + "&name=" + name + "&members=" + members + "&last_coubon=" + last_coubon + "&total_coubons=" + total_coubons + "&Scity=" + Scity + "&Saera=" + Saera + "&Scat=" + Scat + "&piority=" + piority + "&RsName=" + RsName + "&RsPhone=" + RsPhone);
      }

      alert.show("تم بنجاح", {
        timeout: 2000,
        type: "success"
      });
    });
  }

  function order() {
    if (request == "firstTime") {
      setrequest("custom");
    }

    setRsName("false");
    setRsPhone("false");
  }

  function filter() {
    if (request == "firstTime") {
      setrequest("custom");
    }

    setRsName("false");
    setRsPhone("false");
    setScity(TheSelectedCity);
    setSaera(TheSelectedaera);
    setScat(TheSelectedcategory);
  }

  function phoneS() {
    if (request == "firstTime") {
      setrequest("custom");
    }

    setRsName("false");
    setRsPhone(SsearchPhone);
  }

  function NameS() {
    if (request == "firstTime") {
      setrequest("custom");
    }

    setRsName(SsearchName);
    setRsPhone("false");
  }

  function updateArrayall() {
    console.log("here");
    updateList(users);
    setallowed(true);
    $.each($("input[name='sport']"), function () {
      $(this).prop("checked", true);
    });
  }

  function updateArray(data) {
    let favorite = list;
    favorite.push(data);
    updateList(favorite);
    setallowed(true); //  setPersonNeeds((PersonNeeds) => PersonNeeds.concat(data));
    // setPersonNeeds((PersonNeeds) => [...PersonNeeds, data]);
  }

  function removeUserall() {
    updateList([]);
    setallowed(false);
    $.each($("input[name='sport']"), function () {
      $(this).prop("checked", false);
    });
  }

  function myDistributeCoupons(pool, coubonName, list) {
    setspinner(true);
    _services_Api__WEBPACK_IMPORTED_MODULE_7__["default"].post("rabwa/DistributeCoupons", {
      pool,
      coubonName,
      list
    }).then(res => {
      setspinner(false);
      console.log(res.data);

      if (res.data == "already exists") {
        alert.show("إسم الكوبون موجود مسبقا ", {
          timeout: 2000,
          type: "error"
        });
      }

      if (res.data == "email") {
        alert.show("الإيميل مستخدم مسبقا", {
          timeout: 2000,
          type: "error"
        });
      }

      if (res.data > 0) {
        alert.show("تم بنجاح", {
          timeout: 2000,
          type: "success"
        }); //GoBackAndTriggerMutation();
        //router.push("/companys/[name]", "/companys/" + formdata.companyName);
      }
    }).catch(err => {
      setspinner(false);
      console.log(err);
    });
  }

  async function removeUser(id) {
    let favorite = list;

    if (list.length == 1) {
      setallowed(false);
    }

    favorite = await favorite.filter(e => e.id !== id);
    updateList(favorite);
    /* let favorite = personNeeds;
    console.log(favorite);
      favorite = await favorite.filter((user) => user.id !== id);
    console.log(favorite);
      setPersonNeeds(favorite);*/
    // setPersonNeeds([]);
    //
    // myset(favorite);
    //setJoinList(joinList.filter((e) => e !== id));
    // setPersonNeeds(personNeeds.filter((user) => user.id !== id));
  }
  /*
  function settheNeedyNames() {
    let favorite = [];
    $.each($("input[name='sport']"), function () {
      $(this)..prop('checked', true);
    });
      setPersonNeeds(favorite.join(", "));
  }*/


  const {
    0: ModelData,
    1: setModelData
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: modalType,
    1: setmodalType
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");

  function openModal(myuserData, type) {
    if (type == "stats") {
      // setnewState(true);
      let tempUserID = myuserData.id;
      setMUuserID(tempUserID);
      setuserInfoMode(true);
      console.log("----here---" + tempUserID);
      console.log(myuserData);
      console.log("here");
    } else {
      setmodalType(type);
      setModelData(myuserData);
    }
  }

  function calculate() {
    let mydata = list;
    let startcount = 0;

    for (let index = 0; index < mydata.length; index++) {
      let myuser = mydata[index];
      startcount = startcount + parseInt(myuser.share);
    }

    setcoubonTotal(startcount);
  }

  function recalculate(value, id) {
    /* let favorite2 = [];
    $.each($("input[name='sport2']"), function () {
      favorite.push($(this).val());
    });*/
    let mydata = list;
    let startcount = 0;

    for (let index = 0; index < mydata.length; index++) {
      let myuser = mydata[index];

      if (myuser.id == id) {
        myuser.share = value;
        updateList(list);
        startcount = startcount + parseInt(value);
      } else {
        startcount = startcount + parseInt(myuser.share);
      }
    }

    setcoubonTotal(startcount); //setPersonNeeds(favorite.join(", "));
  }

  function myFunction() {
    console.log("hele");
    document.getElementById("myDropdown").classList.toggle("show");
  }

  function filterFunction() {
    console.log("here");
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");

    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;

      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }

  console.log("---------a-------------");
  console.log(list);
  console.log("----------b------------");
  const {
    0: oldWoman,
    1: setOldWoman
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: oldMan,
    1: setOldMan
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: accibilityPerson,
    1: setAccibilityPerson
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: baby,
    1: setBaby
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: orphanGirls,
    1: setOrphanGirls
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: orphanBoys,
    1: setOrphanBoys
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: girls,
    1: setGirls
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: guys,
    1: setGuys
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: women,
    1: setWomen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: men,
    1: setMen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const options = [{
    name: "Swedish",
    value: "sv"
  }, {
    name: "English",
    value: "en"
  }, {
    type: "group",
    name: "Group name",
    items: [{
      name: "Spanish",
      value: "es"
    }]
  }];
  const {
    0: step,
    1: setStep
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1);
  let step2 = step;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("body", {
    className: "rtl g-sidenav-show g-sidenav-pinned",
    dir: "rtl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 457,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458,
      columnNumber: 9
    }
  }, __jsx(_components_Admin_nav__WEBPACK_IMPORTED_MODULE_0__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460,
      columnNumber: 11
    }
  }), __jsx("div", {
    class: "main-content",
    id: "panel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463,
      columnNumber: 11
    }
  }, __jsx(_components_HeaderNav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 465,
      columnNumber: 13
    }
  }), userInfoMode ? __jsx(_components_UserInfo__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: MUuserID,
    setuserInfoMode: setuserInfoMode,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470,
      columnNumber: 15
    }
  }) : __jsx("div", {
    class: "container-fluid mt--6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472,
      columnNumber: 15
    }
  }, __jsx("div", {
    class: "row justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 473,
      columnNumber: 17
    }
  }, __jsx("div", {
    class: " col ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 474,
      columnNumber: 19
    }
  }, __jsx("div", {
    class: "card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 475,
      columnNumber: 21
    }
  }, __jsx("div", {
    class: "card-header bg-transparent",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 476,
      columnNumber: 23
    }
  }, __jsx("h3", {
    class: "mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477,
      columnNumber: 25
    }
  }, "\u0627\u0644\u0645\u0633\u062A\u0641\u064A\u062F\u064A\u0646")), __jsx("div", {
    class: "card-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480,
      columnNumber: 23
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 483,
      columnNumber: 25
    }
  }, step == 1 ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 486,
      columnNumber: 31
    }
  }, " \u0641\u0644\u0627\u062A\u0631 \u0648 \u0628\u062D\u062B"), __jsx("div", {
    className: "col-lg-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 487,
      columnNumber: 31
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 488,
      columnNumber: 33
    }
  }, " ", __jsx("label", {
    className: "form-control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 490,
      columnNumber: 35
    }
  }, "\u0627\u0644\u0625\u0633\u0645"), __jsx("input", {
    type: "text",
    id: "input-username",
    class: "form-control",
    placeholder: "\u0627\u0644\u0625\u0633\u0645",
    value: SsearchName,
    onChange: e => {
      setSsearchName(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 493,
      columnNumber: 35
    }
  }))), __jsx("div", {
    className: "col-lg-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505,
      columnNumber: 31
    }
  }, " ", __jsx("button", {
    class: "btn btn-lg btn-primary",
    onClick: () => {
      NameS();
    },
    style: {
      marginBottom: "-83px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507,
      columnNumber: 33
    }
  }, "\u0628\u062D\u062B")), __jsx("div", {
    className: "col-lg-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 517,
      columnNumber: 31
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 518,
      columnNumber: 33
    }
  }, " ", __jsx("label", {
    className: "form-control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 520,
      columnNumber: 35
    }
  }, "\u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0644"), __jsx("input", {
    type: "text",
    id: "input-username",
    class: "form-control",
    placeholder: "9665xxxxxx",
    value: SsearchPhone,
    onChange: e => {
      setSsearchPhone(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523,
      columnNumber: 35
    }
  }))), __jsx("div", {
    className: "col-lg-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 535,
      columnNumber: 31
    }
  }, " ", __jsx("button", {
    class: "btn btn-lg btn-primary",
    onClick: () => {
      phoneS();
    },
    style: {
      marginBottom: "-83px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537,
      columnNumber: 33
    }
  }, "\u0628\u062D\u062B")), __jsx("div", {
    className: "col-lg-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 548,
      columnNumber: 31
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 549,
      columnNumber: 33
    }
  }, __jsx("label", {
    className: "form-control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550,
      columnNumber: 35
    }
  }, "\u0627\u0644\u062F\u0648\u0644\u0629"), __jsx("select", {
    name: "county",
    onChange: e => {
      let selectedCounty = e.target.value;
      /*if (firstTime) {
      setfirstTime(false);
      }*/

      for (let index = 0; index < CCAs.length; index++) {
        const tempconunty = CCAs[index];

        if (tempconunty.name === selectedCounty) {
          setcitys(tempconunty.data);

          if (tempconunty.data[0]) {
            setTheSelectedCity(tempconunty.data[0].name);
            setaeras(tempconunty.data[0].data);
          } else {
            setaeras([]);
          }
        }
      }
    },
    class: "form-control",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 553,
      columnNumber: 35
    }
  }, CCAs ? CCAs.map((county, index) => {
    return __jsx("option", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 586,
        columnNumber: 50
      }
    }, county.name);
  }) : ""))), __jsx("div", {
    className: "col-lg-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 593,
      columnNumber: 31
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 594,
      columnNumber: 33
    }
  }, __jsx("label", {
    className: "form-control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 595,
      columnNumber: 35
    }
  }, "\u0627\u0644\u0645\u062F\u064A\u0646\u0629"), __jsx("select", {
    id: "mycity",
    name: "city",
    onChange: e => {
      let selectedcity = e.target.value;
      setTheSelectedCity(e.target.value);
      /*if (firstTime) {
      setfirstTime(false);
      }*/

      for (let index = 0; index < citys.length; index++) {
        const tempcity = citys[index];

        if (tempcity.name === selectedcity) {
          setaeras(tempcity.data);
        }
      }
    },
    class: "form-control",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 598,
      columnNumber: 35
    }
  }, citys.length > 0 ? citys.map((city, index) => {
    return __jsx("option", {
      value: city.name,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 623,
        columnNumber: 45
      }
    }, city.name);
  }) : ""))), __jsx("div", {
    className: "col-lg-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 632,
      columnNumber: 31
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 633,
      columnNumber: 33
    }
  }, __jsx("label", {
    className: "form-control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 634,
      columnNumber: 35
    }
  }, "\u0627\u0644\u0645\u0646\u0637\u0642\u0629"), __jsx("select", {
    name: "aeras",
    onChange: e => {
      setTheSelectedaera(e.target.value);
    },
    class: "form-control",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 637,
      columnNumber: 35
    }
  }, __jsx("option", {
    value: "all",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 644,
      columnNumber: 37
    }
  }, "\u0627\u0644\u0643\u0644"), aeras.length > 0 ? aeras.map((aeras, index) => {
    return __jsx("option", {
      value: aeras.name,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 648,
        columnNumber: 45
      }
    }, aeras.name);
  }) : ""))), __jsx("div", {
    className: "col-lg-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 657,
      columnNumber: 31
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 658,
      columnNumber: 33
    }
  }, __jsx("label", {
    className: "form-control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 659,
      columnNumber: 35
    }
  }, "\u0627\u0644\u0625\u062D\u062A\u064A\u0627\u062C"), __jsx("select", {
    name: "category",
    onChange: e => {
      setTheSelectedcategory(e.target.value);
    },
    class: "form-control",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 662,
      columnNumber: 35
    }
  }, categories.length > 0 ? categories.map((category, index) => {
    return __jsx("option", {
      value: category.id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 672,
        columnNumber: 45
      }
    }, category.name);
  }) : ""))), __jsx("div", {
    className: "col-lg-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 681,
      columnNumber: 31
    }
  }, __jsx("button", {
    class: "btn btn-lg btn-primary",
    onClick: () => {
      filter();
    },
    style: {
      marginBottom: "-83px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 682,
      columnNumber: 33
    }
  }, "\u0641\u0644\u062A\u0631\u0629")), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 693,
      columnNumber: 31
    }
  })) : "", __jsx("div", {
    className: "table-responsive",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 698,
      columnNumber: 27
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 699,
      columnNumber: 29
    }
  }, __jsx("table", {
    className: "table align-items-center",
    style: {
      display: step == 1 ? "" : "none"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 700,
      columnNumber: 31
    }
  }, __jsx("thead", {
    className: "thead-light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 704,
      columnNumber: 33
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 705,
      columnNumber: 35
    }
  }, __jsx("th", {
    scope: "col",
    className: "sort",
    "data-sort": "name",
    onClick: () => {
      if (name == 0) {
        setname(1);
        order();
      }

      if (name == 1) {
        setname(2);
        order();
      }

      if (name == 2) {
        setname(1);
        order();
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 706,
      columnNumber: 37
    }
  }, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u0641\u064A\u062F", " ", name == 0 ? "" : name == 1 ? __jsx("i", {
    class: "fa fa-arrow-up",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 729,
      columnNumber: 41
    }
  }) : __jsx("i", {
    class: "fa fa-arrow-down",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 734,
      columnNumber: 41
    }
  })), __jsx("th", {
    scope: "col",
    className: "sort",
    "data-sort": "name",
    onClick: () => {
      if (members == 0) {
        setmembers(1);
        order();
      }

      if (members == 1) {
        setmembers(2);
        order();
      }

      if (members == 2) {
        setmembers(1);
        order();
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 740,
      columnNumber: 37
    }
  }, "\u0639\u062F\u062F \u0627\u0644\u0623\u0641\u0631\u0627\u062F", " ", members == 0 ? "" : members == 1 ? __jsx("i", {
    class: "fa fa-arrow-up",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 763,
      columnNumber: 41
    }
  }) : __jsx("i", {
    class: "fa fa-arrow-down",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 768,
      columnNumber: 41
    }
  })), __jsx("th", {
    scope: "col",
    className: "sort",
    "data-sort": "name",
    onClick: () => {
      if (last_coubon == 0) {
        setlast_coubon(1);
        order();
      }

      if (last_coubon == 1) {
        setlast_coubon(2);
        order();
      }

      if (last_coubon == 2) {
        setlast_coubon(1);
        order();
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 775,
      columnNumber: 37
    }
  }, "\u0623\u062E\u0631 \u0643\u0648\u0628\u0648\u0646", " ", last_coubon == 0 ? "" : last_coubon == 1 ? __jsx("i", {
    class: "fa fa-arrow-up",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 798,
      columnNumber: 41
    }
  }) : __jsx("i", {
    class: "fa fa-arrow-down",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 803,
      columnNumber: 41
    }
  })), __jsx("th", {
    scope: "col",
    className: "sort",
    "data-sort": "name",
    onClick: () => {
      if (total_coubons == 0) {
        settotal_coubons(1);
        order();
      }

      if (total_coubons == 1) {
        settotal_coubons(2);
        order();
      }

      if (total_coubons == 2) {
        settotal_coubons(1);
        order();
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 810,
      columnNumber: 37
    }
  }, "\u0627\u0644\u0645\u0635\u0631\u0648\u0641", " ", total_coubons == 0 ? "" : total_coubons == 1 ? __jsx("i", {
    class: "fa fa-arrow-up",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 833,
      columnNumber: 41
    }
  }) : __jsx("i", {
    class: "fa fa-arrow-down",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 838,
      columnNumber: 41
    }
  })), __jsx("th", {
    scope: "col",
    className: "sort",
    "data-sort": "name",
    onClick: () => {
      if (piority == 0) {
        setpiority(1);
        order();
      }

      if (piority == 1) {
        setpiority(2);
        order();
      }

      if (piority == 2) {
        setpiority(1);
        order();
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 845,
      columnNumber: 37
    }
  }, "\u0627\u0644\u0623\u0648\u0644\u0648\u064A\u0629", " ", piority == 0 ? "" : piority == 1 ? __jsx("i", {
    class: "fa fa-arrow-up",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 868,
      columnNumber: 41
    }
  }) : __jsx("i", {
    class: "fa fa-arrow-down",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 873,
      columnNumber: 41
    }
  })), __jsx("th", {
    scope: "col",
    className: "sort",
    "data-sort": "name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 879,
      columnNumber: 37
    }
  }, "\u0627\u0644\u0628\u0637\u0627\u0642\u0627\u062A"), __jsx("th", {
    scope: "col",
    className: "sort",
    "data-sort": "name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 886,
      columnNumber: 37
    }
  }, "\u0645\u0639\u0644\u0648\u0645\u0627\u062A"), __jsx("th", {
    scope: "col",
    className: "sort",
    "data-sort": "budget",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 893,
      columnNumber: 37
    }
  }))), __jsx("tbody", {
    className: "list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 900,
      columnNumber: 33
    }
  }, users.length > 0 ? users.map((data, i) => {
    return __jsx(_components_NeedyCheckUsers__WEBPACK_IMPORTED_MODULE_9__["default"], {
      data: data,
      myEditUser: myEditUser,
      myDisUser: myDisUser,
      openModal: openModal,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 904,
        columnNumber: 43
      }
    });
  }) : "")), showSkeleton ? __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_11___default.a, {
    height: 40,
    count: 10,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 916,
      columnNumber: 33
    }
  }) : "")), step == 2 ? __jsx(_components_EditUser__WEBPACK_IMPORTED_MODULE_5__["default"], {
    TheUser: TheUser,
    updatesetstep: updatesetstep,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 923,
      columnNumber: 29
    }
  }) : ""), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 932,
      columnNumber: 25
    }
  }, __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 933,
      columnNumber: 27
    }
  })))))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 940,
      columnNumber: 17
    }
  })))), __jsx("div", {
    class: "modal fade",
    id: "modal-default",
    tabindex: "-1",
    role: "dialog",
    "aria-labelledby": "modal-default",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 951,
      columnNumber: 9
    }
  }, __jsx("div", {
    class: "modal-dialog modal- modal-dialog-centered modal-",
    role: "document",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 959,
      columnNumber: 11
    }
  }, modalType == "stats" ? __jsx("div", {
    class: "modal-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 964,
      columnNumber: 15
    }
  }) : modalType == "cards" ? __jsx("div", {
    class: "modal-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 966,
      columnNumber: 15
    }
  }, __jsx("div", {
    class: "modal-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 967,
      columnNumber: 17
    }
  }, __jsx("h6", {
    class: "modal-title",
    id: "modal-title-default",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 968,
      columnNumber: 19
    }
  }, "\u0628\u0637\u0627\u0642\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u0641\u064A\u062F"), __jsx("button", {
    type: "button",
    class: "close",
    "data-dismiss": "modal",
    "aria-label": "Close",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 971,
      columnNumber: 19
    }
  }, __jsx("span", {
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 977,
      columnNumber: 21
    }
  }, "\xD7"))), __jsx("div", {
    class: "modal-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 981,
      columnNumber: 17
    }
  }, ModelData ? __jsx(_components_UserCards__WEBPACK_IMPORTED_MODULE_3__["default"], {
    user_id: ModelData.id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 982,
      columnNumber: 32
    }
  }) : ""), __jsx("button", {
    type: "button",
    class: "btn btn-danger ",
    style: {
      float: "right"
    },
    onClick: () => {
      setmodalType("newCard");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 984,
      columnNumber: 17
    }
  }, "\u0628\u0637\u0627\u0642\u0629 \u062C\u062F\u064A\u062F\u0629"), __jsx("div", {
    class: "modal-footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 994,
      columnNumber: 17
    }
  }, __jsx("button", {
    type: "button",
    class: "btn btn-link ",
    "data-dismiss": "modal",
    style: {
      float: "left"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 995,
      columnNumber: 19
    }
  }, "\u0625\u063A\u0644\u0627\u0642"))) : __jsx("div", {
    class: "modal-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1006,
      columnNumber: 15
    }
  }, __jsx("div", {
    class: "modal-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1007,
      columnNumber: 17
    }
  }, __jsx("h6", {
    class: "modal-title",
    id: "modal-title-default",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1008,
      columnNumber: 19
    }
  }, "\u0628\u0637\u0627\u0642\u0629 \u062C\u062F\u064A\u062F\u0629"), __jsx("button", {
    type: "button",
    class: "close",
    "data-dismiss": "modal",
    "aria-label": "Close",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1011,
      columnNumber: 19
    }
  }, __jsx("span", {
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1017,
      columnNumber: 21
    }
  }, "\xD7"))), __jsx("div", {
    class: "modal-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1021,
      columnNumber: 17
    }
  }, ModelData ? __jsx(_components_NewCardForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    user_id: ModelData.id,
    username: ModelData.Name,
    GoBackAndTriggerMutation: GoBackAndTriggerMutation,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1023,
      columnNumber: 21
    }
  }) : ""), __jsx("div", {
    class: "modal-footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1033,
      columnNumber: 17
    }
  }, __jsx("button", {
    type: "button",
    class: "btn btn-link ",
    "data-dismiss": "modal",
    style: {
      float: "left"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1034,
      columnNumber: 19
    }
  }, "\u0625\u063A\u0644\u0627\u0642")))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_12__["ProtectRouteMandobe"])(MyUsers));

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

/***/ 5:
/*!********************************!*\
  !*** multi ./pages/MyUsers.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\next\pages\MyUsers.js */"./pages/MyUsers.js");


/***/ }),

/***/ "@bit/primefaces.primereact.chart":
/*!***************************************************!*\
  !*** external "@bit/primefaces.primereact.chart" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@bit/primefaces.primereact.chart");

/***/ }),

/***/ "@material-ui/icons/AddCircleOutline":
/*!******************************************************!*\
  !*** external "@material-ui/icons/AddCircleOutline" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AddCircleOutline");

/***/ }),

/***/ "@material-ui/icons/RemoveCircleOutline":
/*!*********************************************************!*\
  !*** external "@material-ui/icons/RemoveCircleOutline" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/RemoveCircleOutline");

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

/***/ "react-alert":
/*!******************************!*\
  !*** external "react-alert" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-alert");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-hook-form");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FkbWluX25hdi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0J1dHRvblVwbG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0VkaXRVc2VyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRWRpdGFibGVJbWFnZTIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXJOYXYuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OZWVkeUNoZWNrVXNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OZXdDYXJkRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BlcnNvblR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Vc2VyQ2FyZHMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Vc2VySW5mby5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VzZXJQZXJzb25OZWVkcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2VkaXRhYmxlLWltYWdlLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbnRleHRzL2F1dGguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL015VXNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvQXBpLmpzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL2FwaV9nZXQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJpdC9wcmltZWZhY2VzLnByaW1lcmVhY3QuY2hhcnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkQ2lyY2xlT3V0bGluZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9SZW1vdmVDaXJjbGVPdXRsaW5lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4YWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hbGVydFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWhvb2stZm9ybVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtbG9hZGluZy1za2VsZXRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN3clwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybFwiIl0sIm5hbWVzIjpbIkFkbWluX25hdiIsInJvdXRlciIsInVzZVJvdXRlciIsImlzTW9iaWxlIiwic2V0SXNNb2JpbGUiLCJ1c2VTdGF0ZSIsInRvZ2dsZXIiLCJzZXR0b2dnbGVyIiwibG9hZGluZyIsImxvZ291dCIsInVzZUF1dGgiLCJ1c2VFZmZlY3QiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiYmFja2dyb3VuZENvbG9yIiwiZGlzcGxheSIsIkNvb2tpZXMiLCJnZXQiLCJ0ZXh0QWxpZ24iLCJwdXNoIiwibWFyZ2luQm90dG9tIiwibWFyZ2luUmlnaHQiLCJib3JkZXJSYWRpdXMiLCJmb250V2VpZ2h0IiwiY29sb3IiLCJtYXJnaW5Ub3AiLCJwYXRobmFtZSIsIndpZHRoIiwiZmxvYXQiLCJCdXR0b25VcGxvYWRJbWFnZSIsInR5cGVJbWFnZSIsIm9uQ2hhbmdlIiwiaW5wdXRLZXkiLCJlIiwiRWRpdFVzZXIiLCJUaGVVc2VyIiwidXBkYXRlc2V0c3RlcCIsIlVzZXIiLCJjb25zb2xlIiwibG9nIiwiYWxlcnQiLCJ1c2VBbGVydCIsIlRoZVNlbGVjdGVkQ291bnRyeSIsInNldFRoZVNlbGVjdGVkQ291bnRyeSIsImNpdHkiLCJUaGVTZWxlY3RlZENpdHkiLCJzZXRUaGVTZWxlY3RlZENpdHkiLCJjb3VudHkiLCJUaGVTZWxlY3RlZGFlcmEiLCJzZXRUaGVTZWxlY3RlZGFlcmEiLCJhcmVhIiwiZmFtaWx5VHlwZSIsInNldGZhbWlseVR5cGUiLCJ0eXBlIiwicHJpb3JpdHkiLCJzZXRwcmlvcml0eSIsIkZpcnN0TmFtZSIsInNldEZpcnN0TmFtZSIsImZpcnN0TmFtZSIsIkxhc3ROYW1lIiwic2V0TGFzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwic2V0ZW1haWwiLCJwaG9uZSIsInNldHBob25lIiwiZGVzIiwic2V0ZGVzIiwibWVtcGVyc0NvdW50Iiwic2V0bWVtcGVyc0NvdW50Iiwic2hhcmUiLCJzZXRzaGFyZSIsInNwaW5uZXIiLCJzZXRzcGlubmVyIiwiVXNlck1ldGEiLCJVc2VyTWV0YWlzTG9hZGluZyIsIlVzZXJNZXRhaXNFcnJvciIsIkdldFVzZXJNZXRhIiwiaWQiLCJkYXRhIiwiaXNMb2FkaW5nIiwiaXNFcnJvciIsIkdldEZ1bGxDQ0FzIiwicmVzdWx0cyIsInNob3dTa2VsZXRvbiIsIkNDQXMiLCJzZXRDQ0FzIiwiY2l0eXMiLCJzZXRjaXR5cyIsImFlcmFzIiwic2V0YWVyYXMiLCJsaXN0IiwidXBkYXRlTGlzdCIsImZpcnN0VGltZSIsInNldGZpcnN0VGltZSIsImZpcnN0VGltZTIiLCJzZXRmaXJzdFRpbWUyIiwiY2F0ZWdvcmllcyIsInNldGNhdGVnb3JpZXMiLCJvcHRpb25zIiwib2xkV29tYW4iLCJzZXRPbGRXb21hbiIsIm9sZE1hbiIsInNldE9sZE1hbiIsImFjY2liaWxpdHlQZXJzb24iLCJzZXRBY2NpYmlsaXR5UGVyc29uIiwiYmFieSIsInNldEJhYnkiLCJvcnBoYW5HaXJscyIsInNldE9ycGhhbkdpcmxzIiwib3JwaGFuQm95cyIsInNldE9ycGhhbkJveXMiLCJnaXJscyIsInNldEdpcmxzIiwiZ3V5cyIsInNldEd1eXMiLCJ3b21lbiIsInNldFdvbWVuIiwibWVuIiwic2V0TWVuIiwid2lkb3dzIiwic2V0V2lkb3dzIiwiZ2lybCIsInNldGdpcmwiLCJib3kiLCJzZXRib3kiLCJVc2VyTWV0YU5lZWRzIiwibmVlZHMiLCJmYXZvcml0ZSIsImkiLCJsZW5ndGgiLCJ0ZW1wIiwiQ2F0ZWdvcnlfaWQiLCJuYW1lIiwiVXNlck1lbWJlcnMiLCJtZW1iZXJzIiwib2xkX21hbiIsIm9sZF93b21lbiIsIlNwZWNpYWxfbmVlZHMiLCJpbmZhbnQiLCJvcnBoYW5fZ2lybCIsIm9ycGhhbl9ib3kiLCJ5b3VuZ193b21lbiIsInlvdW5nX21lbiIsIm1hbiIsIndpZG93Iiwic3RlcCIsInNldFN0ZXAiLCJhbGxvd2VkIiwic2V0YWxsb3dlZCIsInVwZGF0ZUFycmF5IiwicmVtb3ZlVXNlciIsImZpbHRlciIsIm15c3VibWl0Iiwib2xkUGhvbmUiLCJvbGRlbWFpbCIsIlRoZVVzZXJfaWQiLCJjaGVja2UiLCJteWNhbGMiLCJwYXJzZUludCIsInNob3ciLCJ0aW1lb3V0IiwiYXBpIiwicG9zdCIsInRoZW4iLCJyZXMiLCJjYXRjaCIsImVyciIsInN0ZXAyIiwic2VsZWN0ZWRDb3VudHkiLCJ0YXJnZXQiLCJ2YWx1ZSIsImluZGV4IiwidGVtcGNvbnVudHkiLCJtYXAiLCJzZWxlY3RlZGNpdHkiLCJ0ZW1wY2l0eSIsIm1hcmdpbiIsIm1hcmdpbkxlZnQiLCJFZGl0YWJsZUltYWdlIiwiaW1hZ2VPYmplY3QiLCJyZW1vdmVJbWFnZUZ1bmMiLCJpbWFnZVByZXZpZXciLCJzb3VyY2VVcmwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJpbWdVcmwiLCJwcm9jZXNzIiwiZW52IiwiUFVCTElDX1VSTCIsImlzVWxvYWRpbmciLCJGb290ZXIiLCJIZWFkZXIiLCJ6SW5kZXgiLCJwb3NpdGlvbiIsImhlaWdodCIsInBhZGRpbmciLCJOZWVkeUNoZWNrVXNlcnMiLCJteUVkaXRVc2VyIiwibXlEaXNVc2VyIiwib3Blbk1vZGFsIiwiTmFtZSIsImxhc3RDb3Vib24iLCJ0b3RhbENvdWJvbnMiLCJhcHByb3ZhbFN0YXR1cyIsInVzZXJfaWQiLCJOZXdDYXJkRm9ybSIsInVzZXJuYW1lIiwiR29CYWNrQW5kVHJpZ2dlck11dGF0aW9uIiwidG9rZW4iLCJzaXRlVXJsIiwiWE1MIiwic2V0WE1MIiwiUHJvZHVjdEltYWdlIiwic2V0UHJvZHVjdEltYWdlIiwiSW5wdXRUeXBlZGlzIiwic2V0SW5wdXRUeXBlZGlzIiwiSW5wdXRUeXBlY29kZSIsInNldElucHV0VHlwZWNvZGUiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImVycm9ycyIsInVzZUZvcm0iLCJoYW5kbGVUaHVtYm5haWxQcm9kdWN0IiwiZmlsZSIsImltYWdlT2JqIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImF4aW9zIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJyZXN1bHQiLCJzb3VyY2VfdXJsIiwib25TdWJtaXQiLCJmb3JtZGF0YSIsInJlcXVpcmVkIiwibWluTGVuZ3RoIiwidGh1bWJuYWlsIiwiZmlsZXMiLCJQZXJzb25UeXBlIiwicHJvcHMiLCJzb21lZiIsInRoZVN0YXRlIiwiVXNlckNhcmRzIiwiZ2V0VXNlckNhcmRzIiwiY2FyZCIsImQiLCJEYXRlIiwibXlkIiwiZW5kIiwiaW1nIiwiZ2V0VGltZSIsIlVzZXJJbmZvIiwic2V0dXNlckluZm9Nb2RlIiwiUGllQ2FydERhdGFOdW1iZXJzIiwic2V0UGllQ2FydERhdGFOdW1iZXJzIiwiUGllQ2FydERhdGFNb25leSIsInNldFBpZUNhcnREYXRhTW9uZXkiLCJCYXJDaGFydERhdGFOdW1iZXJzIiwic2V0QmFyQ2hhcnREYXRhTnVtYmVycyIsIkJhckNoYXJ0RGF0YU1vbmV5Iiwic2V0QmFyQ2hhcnREYXRhTW9uZXkiLCJyZXF1ZXN0Iiwic2V0cmVxdWVzdCIsInNldG5hbWUiLCJzZXRtZW1iZXJzIiwibGFzdF9jb3Vib24iLCJzZXRsYXN0X2NvdWJvbiIsInRvdGFsX2NvdWJvbnMiLCJzZXR0b3RhbF9jb3Vib25zIiwicGlvcml0eSIsInNldHBpb3JpdHkiLCJwYWdlIiwic2V0cGFnZSIsIlNjaXR5Iiwic2V0U2NpdHkiLCJTYWVyYSIsInNldFNhZXJhIiwiU2NhdCIsInNldFNjYXQiLCJTc2VhcmNoTmFtZSIsInNldFNzZWFyY2hOYW1lIiwiU3NlYXJjaFBob25lIiwic2V0U3NlYXJjaFBob25lIiwiUnNOYW1lIiwic2V0UnNOYW1lIiwiUnNQaG9uZSIsInNldFJzUGhvbmUiLCJUaGVTZWxlY3RlZGNhdGVnb3J5Iiwic2V0VGhlU2VsZWN0ZWRjYXRlZ29yeSIsInNldFRoZVVzZXIiLCJ1c2VyX2luZm8iLCJzZXR1c2VyX2luZm8iLCJNYW5kb2JlX2luZm8iLCJzZXRNYW5kb2JlX2luZm8iLCJ1c2VyIiwiaXNBdXRoZW50aWNhdGVkIiwiVXNlclN0YXRpc3RpY3NEYXRhIiwiVXNlclN0YXRpc3RpY3Npc0xvYWRpbmciLCJVc2VyU3RhdGlzdGljc2lzRXJyb3IiLCJVc2VyU3RhdGlzdGljcyIsIlVzZXJTdGF0aXN0aWNzcmVzdWx0cyIsInNob3dTa2VsZXRvbjIiLCJuZXdTdGF0ZSIsInNldG5ld1N0YXRlIiwic3RhdEFsbCIsInNldHN0YXRBbGwiLCJjb3Vib25zIiwic2V0Y291Ym9ucyIsInVzZXJfc2VudF9jb3Vib25zIiwic2V0dXNlcl9zZW50X2NvdWJvbnMiLCJ1c2VyX3VzZWRfY291Ym9ucyIsInNldHVzZXJfdXNlZF9jb3Vib25zIiwiQWx1c2VyX292ZXJfY291Ym9uc2wiLCJzZXRBbHVzZXJfb3Zlcl9jb3Vib25zbCIsInNldG1vZGFsVHlwZSIsInRlc3RTdGF0ZSIsIlRoZVllYXIiLCJ0aGVZZWFyIiwiQWxsIiwibW9udGhzIiwibGFiZWxzIiwiZGF0YXNldHMiLCJzZW50VG90YWxDb3VudCIsInVzZWRUb3RhbENvdW50Iiwib3ZlclRvdGFsQ291bnQiLCJob3ZlckJhY2tncm91bmRDb2xvciIsInNlbnRUb3RhbCIsInVzZWRUb3RhbCIsIm92ZXJUb3RhbCIsImxhYmVsIiwiSmFudWFyeVRvdGFsQ291bnQiLCJGZWJydWFyeVRvdGFsQ291bnQiLCJNYXJjaFRvdGFsQ291bnQiLCJBcHJpbFRvdGFsQ291bnQiLCJNYXlUb3RhbENvdW50IiwiSnVuZVRvdGFsQ291bnQiLCJKdWx5VG90YWxDb3VudCIsIkF1Z3VzdFRvdGFsQ291bnQiLCJTZXB0ZW1iZXJUb3RhbENvdW50IiwiT2N0b2JlclRvdGFsQ291bnQiLCJOb3ZlbWJlclRvdGFsQ291bnQiLCJEZWNlbWJlclRvdGFsQ291bnQiLCJKYW51YXJ5VG90YWwiLCJGZWJydWFyeVRvdGFsIiwiTWFyY2hUb3RhbCIsIkFwcmlsVG90YWwiLCJNYXlUb3RhbCIsIkp1bmVUb3RhbCIsIkp1bHlUb3RhbCIsIkF1Z3VzdFRvdGFsIiwiU2VwdGVtYmVyVG90YWwiLCJPY3RvYmVyVG90YWwiLCJOb3ZlbWJlclRvdGFsIiwiRGVjZW1iZXJUb3RhbCIsInByb2plY3QiLCJzZXRQcm9qZWN0IiwiY2hvb3NlIiwic2V0Q2hvb3NlIiwiY2F0ZWdvcnkiLCJzZXRDYXRlZ29yeSIsImNvbXBhbnkiLCJzZXRDb21wYW55IiwiYnJhbmNoIiwic2V0QnJhbmNoIiwicG9vbCIsInNldHBvb2wiLCJjb3Vib25OYW1lIiwic2V0Y291Ym9uTmFtZSIsInBvb2xfdG90YWwiLCJzZXRwb29sX3RvdGFsIiwiVXBkYXRlUG9vbCIsImFtb3VudCIsInNlY3Rpb24iLCJzY291Ym9uTmFtZSIsInRoZXMiLCJ0aGVTZWxlY3RlZFVzZXIiLCJvcmRlciIsInBob25lUyIsIk5hbWVTIiwidXBkYXRlQXJyYXlhbGwiLCJ1c2VycyIsIiQiLCJlYWNoIiwicHJvcCIsInJlbW92ZVVzZXJhbGwiLCJpdGVtcyIsImNsZWFyIiwiTWFuZG9iZU5hbWUiLCJhZGRyZXNzIiwidmVydGljYWxBbGlnbiIsInVzZWRUb3RhbENvdW50QWxsIiwidXNlZFRvdGFsQWxsIiwic2VudFRvdGFsQ291bnRBbGwiLCJzZW50VG90YWxBbGwiLCJvdmVyVG90YWxDb3VudEFsbCIsIm92ZXJUb3RhbEFsbCIsImNvdWJvbiIsImQxIiwiZDIiLCJBc3NpZ25lZF9hdCIsInNlbnRDaGUiLCJFbmRzX0F0IiwiUGVyc29uTmVlZHMiLCJzdGF0ZSIsInNldHN0YXRlIiwiVXNlck5lZWRzIiwidGVtcHMiLCJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInNldFVzZXIiLCJzZXRMb2FkaW5nIiwibG9hZFVzZXJGcm9tQ29va2llcyIsImRlZmF1bHRzIiwicmVtb3ZlIiwiUm91dGVyIiwidXNlcl9uaWNlbmFtZSIsInVzZXJfZW1haWwiLCJVc2VyVHlwZSIsIkNvbXBhbnlDb2RlIiwiQnJhY25oQ29kZSIsInByb2ZpbGVfcGljIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsIlNlbmRjb25kIiwidGVtcHJlcyIsInBob25lTG9naW4iLCJjb2RlIiwic2V0IiwiZXhwaXJlcyIsImxvZ2luIiwicGFzc3dvcmQiLCJjb250ZXh0IiwidXNlQ29udGV4dCIsIlByb3RlY3RSb3V0ZSIsIkNvbXBvbmVudCIsImFyZ3VtZW50cyIsIlByb3RlY3RSb3V0ZUNvbXBhbnkiLCJQcm90ZWN0Um91dGVNYW5kb2JlIiwidXJsIiwib3JpZ2luIiwibGFzdEhyZWYiLCJsYXN0QXMiLCJsYXN0UmVzdWx0IiwiaHJlZiIsImFzIiwiZm9ybWF0RnVuYyIsImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsIm9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwiZ2V0T2JzZXJ2ZXIiLCJjb25zdHJ1Y3RvciIsInAiLCJtZW1vaXplZEZvcm1hdFVybCIsImZvcm1hdFVybCIsImFzSHJlZiIsIm5vZGVOYW1lIiwiaXNMb2NhbCIsInNjcm9sbCIsInNoYWxsb3ciLCJzdWNjZXNzIiwiZG9jdW1lbnQiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImdldFBhdGhzIiwicmVzb2x2ZWRIcmVmIiwicGFyc2VkQXMiLCJoYW5kbGVSZWYiLCJyZWYiLCJpc1ByZWZldGNoZWQiLCJwcmVmZXRjaCIsInBhdGhzIiwicmVuZGVyIiwiY2hpbGQiLCJDaGlsZHJlbiIsImVsIiwib25Nb3VzZUVudGVyIiwib25DbGljayIsIlJlYWN0Iiwid2FybiIsIlByb3BUeXBlcyIsInJlcXVpcmUiLCJleGFjdCIsIkxpbmsiLCJyZXBsYWNlIiwicGFzc0hyZWYiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiT2JqZWN0IiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudCIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJwYXRoIiwicHJlcGFyZVJvdXRlIiwidG9Sb3V0ZSIsImF0dGVtcHRzIiwiaXNTZXJ2ZXJSZW5kZXIiLCJhZGRCYXNlUGF0aCIsIl9fTkVYVF9EQVRBX18iLCJidWlsZElkIiwiZGVsQmFzZVBhdGgiLCJjcmVkZW50aWFscyIsImdldFJlc3BvbnNlIiwicm91dGUiLCJxdWVyeSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiUHJvbWlzZSIsImZldGNoTmV4dERhdGEiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsInVwZGF0ZSIsIm1vZCIsIm5ld0RhdGEiLCJyZWxvYWQiLCJiYWNrIiwiY2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsInJlc29sdmUiLCJtZXRob2QiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsIm1pc3NpbmdQYXJhbXMiLCJwYXJhbSIsInJlamVjdCIsImFzUGF0aG5hbWUiLCJyb3V0ZUluZm8iLCJlcnJvciIsImFwcENvbXAiLCJjaGFuZ2VTdGF0ZSIsImdldFJvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsImhhbmRsZUVycm9yIiwiZ2lwRXJyIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImhhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJjYW5jZWxsZWQiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsIlRFU1RfUk9VVEUiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInBhcmFtcyIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJlc2NhcGVkUm91dGUiLCJlc2NhcGVSZWdleCIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJpc09wdGlvbmFsIiwiJDEiLCJpc0NhdGNoQWxsIiwicG9zIiwicmVwZWF0IiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJrZXkiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInByb3RvY29sIiwiaG9zdG5hbWUiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJNeVVzZXJzIiwiTVV1c2VySUQiLCJzZXRNVXVzZXJJRCIsIkdldE1hbmRvYlVzZXJzIiwibnVtYmVyT2ZQYWdlcyIsImNvdWJvblRvdGFsIiwic2V0Y291Ym9uVG90YWwiLCJ1c2VySW5mb01vZGUiLCJtdXRhdGUiLCJ0aGVTZWxlY3RlZERpc1VzZXJJZCIsInNTdGF0dXMiLCJhcHByb3ZlIiwidGhlVXNlcmlkIiwibXlkZCIsIm15RGlzdHJpYnV0ZUNvdXBvbnMiLCJNb2RlbERhdGEiLCJzZXRNb2RlbERhdGEiLCJtb2RhbFR5cGUiLCJteXVzZXJEYXRhIiwidGVtcFVzZXJJRCIsImNhbGN1bGF0ZSIsIm15ZGF0YSIsInN0YXJ0Y291bnQiLCJteXVzZXIiLCJyZWNhbGN1bGF0ZSIsIm15RnVuY3Rpb24iLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImZpbHRlckZ1bmN0aW9uIiwiaW5wdXQiLCJ1bCIsImxpIiwiYSIsInRvVXBwZXJDYXNlIiwiZGl2IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJ0eHRWYWx1ZSIsInRleHRDb250ZW50IiwiaW5uZXJUZXh0IiwiaW5kZXhPZiIsInN0eWxlIiwidXJscyIsImRldmVsb3BtZW50IiwicHJvZHVjdGlvbiIsIkF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsIkFjY2VwdCIsImFwaV9nZXQiLCJnZXRDb21wYW55IiwidXNlU1dSIiwiZ2V0U3BvbnNvcnMiLCJnZXRUeXBlIiwicGFnZXVwIiwiR2V0QWxsTWFuZG9iZXMiLCJHZXRDIiwiQ29tcGFueXNTdGF0aXN0aWMiLCJVc2VyU3RhdGlzdGljc2Vycm9yaXNMb2FkaW5nIiwiVXNlclN0YXRpc3RpY3NlcnJvcmlzRXJyb3IiLCJHZXRBcHByb3ZlTWFuZG9iZXMiLCJHZXRBcHByb3ZldXNlcnNzTSIsIkdldEFwcHJvdmV1c2Vyc3MiLCJDb21wYW55c1N0YXRpc3RpY3MiLCJHZXRNYW5kb2JlcyIsIkdldHVzZXJzczIiLCJtYW5kb2JlX2lkIiwiR2V0dXNlcnNzIiwiaGlkZSIsIkdldENvdXBvbnNCeUJyYWNuaENhdCIsIkJyYW5jaGlkIiwiQ2F0ZWdvcnlpZCIsIkdldENvdXBvbkJyYW5jaGVzIiwiU2VjdGlvbl9pZCIsIkNvdXBvbkJyYW5jaGVzIiwiQ291cG9uQnJhbmNoZXNpc0xvYWRpbmciLCJDb3Vwb25CcmFuY2hlc2lzRXJyb3IiLCJHZXRDYXRlZ29yaWVzIiwiR2V0Q29tcGFueXMiLCJHZXRDYXRlZ29yeXNCeUNpdHkiLCJHZXRDb3Vwb25zQnlTZWN0aW9uIiwic2VjdGlvbl9pZCIsIkdldENvdXBvbnNCeWJyYW5jaCIsIklkIiwiR2V0Q0NBcyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHdFOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUVBO0FBQ0E7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QUNscUIsT0FBTyxHQUFHLEtBQUgsR0FBVyxlQUFuQixFQUFvQzJKLHFEQUFHLENBQUNqSixHQUF4QyxDQUE5QjtBQUNBLFNBQU87QUFDTDhELFFBQUksRUFBRUEsSUFERDtBQUVMQyxhQUFTLEVBQUUsQ0FBQ3dlLEtBQUQsSUFBVSxDQUFDemUsSUFGakI7QUFHTEUsV0FBTyxFQUFFdWU7QUFISixHQUFQO0FBS0Q7QUFFYytHLHNFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL2dCQSw2RDs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSxtRTs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxnQzs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcTXlVc2Vycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxuaW1wb3J0IHVzZUF1dGgsIHsgUHJvdGVjdFJvdXRlIH0gZnJvbSBcIi4uL2NvbnRleHRzL2F1dGguanNcIjtcclxuXHJcbmZ1bmN0aW9uIEFkbWluX25hdigpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbaXNNb2JpbGUsIHNldElzTW9iaWxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB7IHRvZ2dsZXIsIHNldHRvZ2dsZXIsIGxvYWRpbmcsIGxvZ291dCB9ID0gdXNlQXV0aCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gZGV2aWNlIGRldGVjdGlvblxyXG4gICAgaWYgKFxyXG4gICAgICAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QoXHJcbiAgICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudFxyXG4gICAgICApXHJcbiAgICApIHtcclxuICAgICAgLy8gc2V0dG9nZ2xlcihmYWxzZSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXZcclxuICAgICAgY2xhc3NOYW1lPVwiYWFmYSBzaWRlbmF2IG5hdmJhciBuYXZiYXItdmVydGljYWwgIGZpeGVkLXJpZ2h0ICBuYXZiYXItZXhwYW5kLXhzIG5hdmJhci1saWdodCBiZy13aGl0ZVwiXHJcbiAgICAgIGlkPVwic2lkZW5hdi1tYWluXCJcclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JvbGxiYXItaW5uZXJcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiI0Y1RjZGOFwiIH19PlxyXG4gICAgICAgIHsvKiBCcmFuZCAqL31cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic2lkZW5hdi1oZWFkZXIgIGFsaWduLWl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPVwiLi4vYXNzZXRzL2ltZy9icmFuZC9ibHVlLnBuZ1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kLWltZ1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwiLi4uXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1pbm5lclwiPlxyXG4gICAgICAgICAgey8qIENvbGxhcHNlICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cInNpZGVuYXYtY29sbGFwc2UtbWFpblwiPlxyXG4gICAgICAgICAgICB7LyogTmF2IGl0ZW1zICovfVxyXG4gICAgICAgICAgICB7Q29va2llcy5nZXQoXCJVc2VyVHlwZVwiKSA9PSBcImFkbWluXCIgPyAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2XCIgc3R5bGU9e3sgdGV4dEFsaWduOiBcInJpZ2h0XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsb2dvdXQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9NYW5hZ2VtZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtcIi9sb2dvLnBuZ1wifVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwJVwiLCBib3JkZXJSYWRpdXM6IFwiMzBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Q29va2llcy5nZXQoXCJwcm9maWxlX3BpY1wiKX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIi0xcHhcIiwgZm9udFdlaWdodDogXCJib2xkXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge0Nvb2tpZXMuZ2V0KFwiZmlyc3RfbmFtZVwiKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb29raWVzLmdldChcImxhc3RfbmFtZVwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiBcIiM0Q0FGNTBcIiB9fSBjbGFzc05hbWU9XCJjb2wtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgINmF2K/ZitixXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1hdXRvXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjMlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2hyZWY9e3sgcGF0aG5hbWU6IFwiL2Fib3V0XCIsIHF1ZXJ5OiB7IG5hbWU6IFwidGVzdFwiIH0gfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvVXBkYXRlUHJvZmlsZUFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVwbGFjZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIm5pIG5pLXNldHRpbmdzLWdlYXItNjVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgLy9ocmVmPXt7IHBhdGhuYW1lOiBcIi9hYm91dFwiLCBxdWVyeTogeyBuYW1lOiBcInRlc3RcIiB9IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL0NvbXBhbnlzU3RhdGlzdGljc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyByZXBsYWNlXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvQ29tcGFueXNTdGF0aXN0aWNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJuYXYtbGluayBhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5hdi1saW5rIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSBcIi9Db21wYW55c1N0YXRpc3RpY3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7IGJhY2tncm91bmRDb2xvcjogXCIjYzdlNGFlXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm5pIG5pLWNoYXJ0LXBpZS0zNSB0ZXh0LW9yYW5nZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi1saW5rLXRleHRcIj7Ypdit2LXYp9im2YrYp9iqINin2YTYtNix2YPYp9iqPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb21wYW55c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvY29tcGFueXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIm5hdi1saW5rIGFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibmF2LWxpbmsgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09IFwiL2NvbXBhbnlzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8geyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2M3ZTRhZVwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoge31cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJuaSBuaS1idWlsZGluZyB0ZXh0LWluZm9cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtbGluay10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgINil2K/Yp9ix2Kkg2KfZhNi02LHZg9in2Kog2YjYp9mE2YPZiNio2YjZhtin2KpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9EaXN0cmlidXRlQ291cG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvRGlzdHJpYnV0ZUNvdXBvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIm5hdi1saW5rIGFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibmF2LWxpbmsgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09IFwiL0Rpc3RyaWJ1dGVDb3Vwb25zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8geyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2M3ZTRhZVwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoge31cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJuaSBuaS10YWcgdGV4dC1kYW5nZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtbGluay10ZXh0XCI+2LXYsdmBINin2YTZg9mI2KjZiNmG2KfYqjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvTmVlZHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09IFwiL05lZWRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJuYXYtbGluayBhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5hdi1saW5rIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSBcIi9OZWVkc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHsgYmFja2dyb3VuZENvbG9yOiBcIiNjN2U0YWVcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibmkgbmktYXJjaGl2ZS0yIFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi1saW5rLXRleHRcIj7Ypdiv2KfYsdipINin2YTYpdit2KrZitin2KzYp9iqPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9Vc2Vyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvVXNlcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIm5hdi1saW5rIGFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibmF2LWxpbmsgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09IFwiL1VzZXJzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8geyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2M3ZTRhZVwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoge31cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJuaSBuaS1zaW5nbGUtMDIgdGV4dC1wcmltYXJ5XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LWxpbmstdGV4dFwiPtis2YXZiti5INin2YTZhdiz2KrZgdmK2K/ZitmGPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9SZWdpc3RlclVzZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09IFwiL1JlZ2lzdGVyVXNlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwibmF2LWxpbmsgYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJuYXYtbGluayBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvUmVnaXN0ZXJVc2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8geyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2M3ZTRhZVwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoge31cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJuaSBuaS1jaXJjbGUtMDggXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LWxpbmstdGV4dFwiPtiq2LPYrNmK2YQg2YXYs9iq2YHZitivPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9DQ0FcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09IFwiL0NDQVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwibmF2LWxpbmsgYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJuYXYtbGluayBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvQ0NBXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8geyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2M3ZTRhZVwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoge31cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJuaSBuaS1jaXJjbGUtMDggXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LWxpbmstdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgINin2YTYr9mI2YQg2YjYp9mE2YXYr9mGINmI2KfZhNmF2YbYp9i32YJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9BcHByb3ZlVXNlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09IFwiL0FwcHJvdmVVc2Vyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwibmF2LWxpbmsgYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJuYXYtbGluayBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvQXBwcm92ZVVzZXJzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8geyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2M3ZTRhZVwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoge31cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJuaSBuaS1jaXJjbGUtMDggXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LWxpbmstdGV4dFwiPtil2LnYqtmF2KfYryDYp9mE2YXYs9iq2YHZitiv2YrZhjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvTWFuZG9iZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09IFwiL01hbmRvYmVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJuYXYtbGluayBhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5hdi1saW5rIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSBcIi9NYW5kb2Jlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHsgYmFja2dyb3VuZENvbG9yOiBcIiNjN2U0YWVcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibmkgbmktYnJpZWZjYXNlLTI0IHRleHQtcHJpbWFyeSBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtbGluay10ZXh0XCI+2KzZhdmK2Lkg2KfZhNmF2YbYr9mI2KjZitmGPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9SZWdpc3Rlck1hbmRvYmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09IFwiL1JlZ2lzdGVyTWFuZG9iZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwibmF2LWxpbmsgYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJuYXYtbGluayBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvUmVnaXN0ZXJNYW5kb2JlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8geyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2M3ZTRhZVwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoge31cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJuaSBuaS1icmllZmNhc2UtMjQgXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LWxpbmstdGV4dFwiPtiq2LPYrNmK2YQg2YXZhtiv2YjYqDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvQXBwcm92ZU1hbmRvYmVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSBcIi9BcHByb3ZlTWFuZG9iZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIm5hdi1saW5rIGFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibmF2LWxpbmsgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09IFwiL0FwcHJvdmVNYW5kb2Jlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHsgYmFja2dyb3VuZENvbG9yOiBcIiNjN2U0YWVcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibmkgbmktYnJpZWZjYXNlLTI0IFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi1saW5rLXRleHRcIj7Ypdi52KrZhdin2K8g2YXZhtiv2YjYqDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvU3BvbnNvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvU3BvbnNvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwibmF2LWxpbmsgYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJuYXYtbGluayBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvU3BvbnNvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHsgYmFja2dyb3VuZENvbG9yOiBcIiNjN2U0YWVcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibmkgbmktYnJpZWZjYXNlLTI0IFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi1saW5rLXRleHRcIj7Yp9mE2K/Yp9i52YXZitmGPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGxvZ291dCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL01hbmFnZW1lbnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBzcmM9e1wiL2xvZ28ucG5nXCJ9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYigyNDUsMjQ2LDI0OClcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+2KfZhNiv2LnZhSDYp9mE2YHZhtmKPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPklORk9AR1VUVVJFU0FHRVMuQ09NPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkgOiBDb29raWVzLmdldChcIlVzZXJUeXBlXCIpID09IFwiQ29tcGFueVwiID8gKFxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17XCIvbG9nby5wbmdcIn0gLz5cclxuICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTAlXCIsIGJvcmRlclJhZGl1czogXCIzMHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17Q29va2llcy5nZXQoXCJwcm9maWxlX3BpY1wiKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiLTFweFwiLCBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge0Nvb2tpZXMuZ2V0KFwiZmlyc3RfbmFtZVwiKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIENvb2tpZXMuZ2V0KFwibGFzdF9uYW1lXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiBcIiM0Q0FGNTBcIiB9fSBjbGFzc05hbWU9XCJjb2wtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDYtNix2YPYqVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvL2hyZWY9e3sgcGF0aG5hbWU6IFwiL2Fib3V0XCIsIHF1ZXJ5OiB7IG5hbWU6IFwidGVzdFwiIH0gfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL1VwZGF0ZVByb2ZpbGVDXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZXBsYWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YT7Yqti52K/ZitmEPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgIC8vaHJlZj17eyBwYXRobmFtZTogXCIvYWJvdXRcIiwgcXVlcnk6IHsgbmFtZTogXCJ0ZXN0XCIgfSB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvQ29tcGFueVN0YXRpc3RpY3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlcGxhY2VcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvQ29tcGFueVN0YXRpc3RpY3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJuYXYtbGluayBhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJuYXYtbGluayBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvQ29tcGFueVN0YXRpc3RpY3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8geyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2M3ZTRhZVwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IHt9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibmkgbmktY2hhcnQtcGllLTM1IHRleHQtb3JhbmdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi1saW5rLXRleHRcIj7Ypdit2LXYp9im2YrYp9iqPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbXBhbnlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09IFwiL2NvbXBhbnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJuYXYtbGluayBhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJuYXYtbGluayBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvY29tcGFueVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7IGJhY2tncm91bmRDb2xvcjogXCIjYzdlNGFlXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDoge31cclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJuaSBuaS1idWlsZGluZyB0ZXh0LWluZm9cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LWxpbmstdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINil2K/Yp9ix2Kkg2KfZhNmB2LHZiNi5INmI2KfZhNmD2YjYqNmI2YbYp9iqXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvQ29tcGFueVNwb25zb3JzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSBcIi9Db21wYW55U3BvbnNvcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJuYXYtbGluayBhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJuYXYtbGluayBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvQ29tcGFueVNwb25zb3JzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IHsgYmFja2dyb3VuZENvbG9yOiBcIiNjN2U0YWVcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7fVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm5pIG5pLWJ1aWxkaW5nIHRleHQtaW5mb1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtbGluay10ZXh0XCI+INin2YTYr9in2LnZhdmK2YY8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjk1JVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjUzcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBcInJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGxvZ291dCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICDYqtiz2KzZitmEINin2YTYrtix2YjYrFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdlwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e1wiL2xvZ28ucG5nXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fSBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwJVwiLCBib3JkZXJSYWRpdXM6IFwiMzBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e0Nvb2tpZXMuZ2V0KFwicHJvZmlsZV9waWNcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLThcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIi0xcHhcIiwgZm9udFdlaWdodDogXCJib2xkXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtDb29raWVzLmdldChcImZpcnN0X25hbWVcIikgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBDb29raWVzLmdldChcImxhc3RfbmFtZVwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogXCIjNENBRjUwXCIgfX0gY2xhc3NOYW1lPVwiY29sLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAg2YXZhtiv2YjYqFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvL2hyZWY9e3sgcGF0aG5hbWU6IFwiL2Fib3V0XCIsIHF1ZXJ5OiB7IG5hbWU6IFwidGVzdFwiIH0gfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL1VwZGF0ZVByb2ZpbGVNXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZXBsYWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YT7Yqti52K/ZitmEPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgIC8vaHJlZj17eyBwYXRobmFtZTogXCIvYWJvdXRcIiwgcXVlcnk6IHsgbmFtZTogXCJ0ZXN0XCIgfSB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvTXlVc2Vyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVwbGFjZVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSBcIi9NeVVzZXJzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwibmF2LWxpbmsgYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibmF2LWxpbmsgXCJcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09IFwiL015VXNlcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8geyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2M3ZTRhZVwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IHt9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibmkgbmktY2hhcnQtcGllLTM1IHRleHQtb3JhbmdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi1saW5rLXRleHRcIj7Yp9mE2YXYs9iq2YHZitiv2YrZhjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9SZWdpc3Rlcl9Vc2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSBcIi9SZWdpc3Rlcl9Vc2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwibmF2LWxpbmsgYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibmF2LWxpbmsgXCJcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09IFwiL1JlZ2lzdGVyX1VzZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8geyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2M3ZTRhZVwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IHt9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibmkgbmktYnVpbGRpbmcgdGV4dC1pbmZvXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi1saW5rLXRleHRcIj4g2KrYs9is2YrZhCDZhdiz2KrZgdmK2K88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvQXBwcm92ZVVzZXJzTVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvQXBwcm92ZVVzZXJzTVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIm5hdi1saW5rIGFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5hdi1saW5rIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSBcIi9BcHByb3ZlVXNlcnNNXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IHsgYmFja2dyb3VuZENvbG9yOiBcIiNjN2U0YWVcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7fVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm5pIG5pLWJ1aWxkaW5nIHRleHQtaW5mb1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtbGluay10ZXh0XCI+INil2LnYqtmF2KfYryDYp9mE2YXYs9iq2YHZitiv2YrZhjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiOTUlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiNTNweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IFwicmlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbG9nb3V0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgINiq2LPYrNmK2YQg2KfZhNiu2LHZiNisXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7LyogRGl2aWRlciAqL31cclxuXHJcbiAgICAgICAgICAgIHsvKiBIZWFkaW5nICovfVxyXG5cclxuICAgICAgICAgICAgey8qIE5hdmlnYXRpb24gKi99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZG1pbl9uYXY7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFkZENpcmNsZU91dGxpbmVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkQ2lyY2xlT3V0bGluZVwiO1xyXG5cclxuY29uc3QgQnV0dG9uVXBsb2FkSW1hZ2UgPSAoeyB0eXBlSW1hZ2UsIG9uQ2hhbmdlIH0pID0+IHtcclxuICBjb25zdCBpbnB1dEtleSA9IFwidXBsb2FkLXByb2R1Y3QtaW1hZ2UtXCIgKyB0eXBlSW1hZ2U7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInVwbG9hZC1pbWFnZS1ob2xkZXJcIj5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgaWQ9e2lucHV0S2V5fVxyXG4gICAgICAgIG11bHRpcGxlPXt0eXBlSW1hZ2UgIT09IFwidGh1bWJuYWlsXCJ9XHJcbiAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImhpZGUtdXBsb2FkLWlucHV0XCJcclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlICYmIG9uQ2hhbmdlKGUpfVxyXG4gICAgICAvPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJhZGQtaWNvblwiPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPXtpbnB1dEtleX0+XHJcbiAgICAgICAgICA8QWRkQ2lyY2xlT3V0bGluZUljb24gZm9udFNpemU9XCJsYXJnZVwiIGNvbG9yPVwicHJpbWFyeVwiIC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblVwbG9hZEltYWdlO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUGVyc29uVHlwZSBmcm9tIFwiLi9QZXJzb25UeXBlXCI7XHJcbmltcG9ydCBVc2VyUGVyc29uTmVlZHMgZnJvbSBcIi4vVXNlclBlcnNvbk5lZWRzXCI7XHJcbmltcG9ydCBhcGkgZnJvbSBcIi4uL3NlcnZpY2VzL0FwaVwiO1xyXG5cclxuaW1wb3J0IHsgR2V0RnVsbENDQXMsIEdldFVzZXJNZXRhIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaV9nZXRcIjtcclxuaW1wb3J0IHVzZUF1dGgsIHsgUHJvdGVjdFJvdXRlIH0gZnJvbSBcIi4uL2NvbnRleHRzL2F1dGguanNcIjtcclxuaW1wb3J0IHsgdXNlQWxlcnQgfSBmcm9tIFwicmVhY3QtYWxlcnRcIjtcclxuZnVuY3Rpb24gRWRpdFVzZXIoeyBUaGVVc2VyLCB1cGRhdGVzZXRzdGVwIH0pIHtcclxuICBjb25zdCBVc2VyID0gVGhlVXNlcjtcclxuICBjb25zb2xlLmxvZyhcImhlcmVcIik7XHJcbiAgY29uc29sZS5sb2coVXNlcik7XHJcbiAgY29uc29sZS5sb2coXCJoZXJlcXFxcXFxcXFxcXFxcXFxXCIpO1xyXG5cclxuICBjb25zdCBhbGVydCA9IHVzZUFsZXJ0KCk7XHJcblxyXG4gIGNvbnN0IFtUaGVTZWxlY3RlZENvdW50cnksIHNldFRoZVNlbGVjdGVkQ291bnRyeV0gPSB1c2VTdGF0ZShVc2VyLmNpdHkpO1xyXG4gIGNvbnN0IFtUaGVTZWxlY3RlZENpdHksIHNldFRoZVNlbGVjdGVkQ2l0eV0gPSB1c2VTdGF0ZShVc2VyLmNvdW50eSk7XHJcbiAgY29uc3QgW1RoZVNlbGVjdGVkYWVyYSwgc2V0VGhlU2VsZWN0ZWRhZXJhXSA9IHVzZVN0YXRlKFVzZXIuYXJlYSk7XHJcblxyXG4gIGNvbnN0IFtmYW1pbHlUeXBlLCBzZXRmYW1pbHlUeXBlXSA9IHVzZVN0YXRlKFVzZXIudHlwZSk7XHJcbiAgY29uc3QgW3ByaW9yaXR5LCBzZXRwcmlvcml0eV0gPSB1c2VTdGF0ZShVc2VyLnByaW9yaXR5KTtcclxuICBjb25zdCBbRmlyc3ROYW1lLCBzZXRGaXJzdE5hbWVdID0gdXNlU3RhdGUoVXNlci5maXJzdE5hbWUpO1xyXG4gIGNvbnN0IFtMYXN0TmFtZSwgc2V0TGFzdE5hbWVdID0gdXNlU3RhdGUoVXNlci5sYXN0TmFtZSk7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRlbWFpbF0gPSB1c2VTdGF0ZShVc2VyLmVtYWlsKTtcclxuICBjb25zdCBbcGhvbmUsIHNldHBob25lXSA9IHVzZVN0YXRlKFVzZXIucGhvbmUpO1xyXG4gIGNvbnN0IFtkZXMsIHNldGRlc10gPSB1c2VTdGF0ZShVc2VyLmRlcyk7XHJcbiAgY29uc3QgW21lbXBlcnNDb3VudCwgc2V0bWVtcGVyc0NvdW50XSA9IHVzZVN0YXRlKFVzZXIubWVtcGVyc0NvdW50KTtcclxuICBjb25zdCBbc2hhcmUsIHNldHNoYXJlXSA9IHVzZVN0YXRlKFVzZXIuc2hhcmUpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coVXNlci50eXBlKTtcclxuICAgIHNldGZhbWlseVR5cGUoVXNlci50eXBlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vY29uc3QgW3Byb2plY3Qsc2V0UHJvamVjdF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHsgdG9nZ2xlciwgc2V0dG9nZ2xlciwgbG9hZGluZyB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IFtzcGlubmVyLCBzZXRzcGlubmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgeyBVc2VyTWV0YSwgVXNlck1ldGFpc0xvYWRpbmcsIFVzZXJNZXRhaXNFcnJvciB9ID0gR2V0VXNlck1ldGEoVXNlci5pZCk7XHJcblxyXG4gIC8vY29uc3QgVXNlck5lZWRzID0gaXNMb2FkaW5nID8gZmFsc2UgOiBVc2VyTWV0YS5kYXRhLm5lZWRzO1xyXG4gIC8qIGNvbnN0IFVzZXJOZWVkcyA9IGlzTG9hZGluZyA/IGZhbHNlIDogVXNlck1ldGE7XHJcbiAgY29uc29sZS5sb2coVXNlck5lZWRzKTtcclxuICAvL2NvbnN0IFVzZXJNZW1iZXJzID0gaXNMb2FkaW5nID8gZmFsc2UgOiBVc2VyTWV0YS5kYXRhLm1lbWJlcnM7XHJcbiAvKiBjb25zdCBVc2VyTWVtYmVycyA9IGlzTG9hZGluZyA/IGZhbHNlIDogVXNlck1ldGEuZGF0YS5tZW1iZXJzO1xyXG4gIGNvbnNvbGUubG9nKFVzZXJNZW1iZXJzKTsqL1xyXG5cclxuICBjb25zb2xlLmxvZyhVc2VyTWV0YSk7XHJcblxyXG4gIGNvbnN0IHsgZGF0YSwgaXNMb2FkaW5nLCBpc0Vycm9yIH0gPSBHZXRGdWxsQ0NBcygpO1xyXG5cclxuICBjb25zdCByZXN1bHRzID0gaXNMb2FkaW5nID8gZmFsc2UgOiBkYXRhLmRhdGE7XHJcbiAgY29uc29sZS5sb2cocmVzdWx0cyk7XHJcblxyXG4gIGNvbnN0IHNob3dTa2VsZXRvbiA9IGlzTG9hZGluZyB8fCBsb2FkaW5nO1xyXG4gIGNvbnN0IFtDQ0FzLCBzZXRDQ0FzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgW2NpdHlzLCBzZXRjaXR5c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2FlcmFzLCBzZXRhZXJhc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2xpc3QsIHVwZGF0ZUxpc3RdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBbZmlyc3RUaW1lLCBzZXRmaXJzdFRpbWVdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2ZpcnN0VGltZTIsIHNldGZpcnN0VGltZTJdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2NhdGVnb3JpZXMsIHNldGNhdGVnb3JpZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBpZiAoZmlyc3RUaW1lICYmIHJlc3VsdHMpIHtcclxuICAgIHNldENDQXMocmVzdWx0cy5vcHRpb25zLkNDQXMpO1xyXG5cclxuICAgIHNldFRoZVNlbGVjdGVkQ2l0eShVc2VyLmNpdHkpO1xyXG5cclxuICAgIHNldFRoZVNlbGVjdGVkQ291bnRyeShVc2VyLmNvdW50eSk7XHJcblxyXG4gICAgc2V0Y2l0eXMocmVzdWx0cy5vcHRpb25zLkNDQXNbMF0uZGF0YSk7XHJcbiAgICBzZXRhZXJhcyhyZXN1bHRzLm9wdGlvbnMuQ0NBc1swXS5kYXRhWzBdLmRhdGEpO1xyXG4gICAgc2V0Y2F0ZWdvcmllcyhyZXN1bHRzLm9wdGlvbnMuY2F0ZWdvcmllcyk7XHJcblxyXG4gICAgc2V0Zmlyc3RUaW1lKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IFtvbGRXb21hbiwgc2V0T2xkV29tYW5dID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW29sZE1hbiwgc2V0T2xkTWFuXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFthY2NpYmlsaXR5UGVyc29uLCBzZXRBY2NpYmlsaXR5UGVyc29uXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtiYWJ5LCBzZXRCYWJ5XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtvcnBoYW5HaXJscywgc2V0T3JwaGFuR2lybHNdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW29ycGhhbkJveXMsIHNldE9ycGhhbkJveXNdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2dpcmxzLCBzZXRHaXJsc10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbZ3V5cywgc2V0R3V5c10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbd29tZW4sIHNldFdvbWVuXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFttZW4sIHNldE1lbl0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbd2lkb3dzLCBzZXRXaWRvd3NdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2dpcmwsIHNldGdpcmxdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2JveSwgc2V0Ym95XSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBpZiAoZmlyc3RUaW1lMiAmJiBVc2VyTWV0YSkge1xyXG4gICAgbGV0IFVzZXJNZXRhTmVlZHMgPSBVc2VyTWV0YS5kYXRhLm5lZWRzO1xyXG4gICAgbGV0IGZhdm9yaXRlID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IFVzZXJNZXRhTmVlZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IHRlbXAgPSB7XHJcbiAgICAgICAgaWQ6IFVzZXJNZXRhTmVlZHNbaV0uQ2F0ZWdvcnlfaWQsXHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgfTtcclxuICAgICAgZmF2b3JpdGUucHVzaCh0ZW1wKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKFwi2KfZhNiz2YTYp9mFINi52YTZitmD2YUg2YjYsdit2YXYqSDYp9mE2YTZhyDZiNio2LHZg9in2KrYqVwiKTtcclxuICAgIGNvbnNvbGUubG9nKGZhdm9yaXRlKTtcclxuICAgIHVwZGF0ZUxpc3QoZmF2b3JpdGUpO1xyXG5cclxuICAgIGxldCBVc2VyTWVtYmVycyA9IFVzZXJNZXRhLmRhdGEubWVtYmVyc1swXTtcclxuICAgIHNldE9sZE1hbihVc2VyTWVtYmVycy5vbGRfbWFuKTtcclxuICAgIHNldE9sZFdvbWFuKFVzZXJNZW1iZXJzLm9sZF93b21lbik7XHJcbiAgICBzZXRBY2NpYmlsaXR5UGVyc29uKFVzZXJNZW1iZXJzLlNwZWNpYWxfbmVlZHMpO1xyXG4gICAgc2V0QmFieShVc2VyTWVtYmVycy5pbmZhbnQpO1xyXG4gICAgc2V0T3JwaGFuR2lybHMoVXNlck1lbWJlcnMub3JwaGFuX2dpcmwpO1xyXG4gICAgc2V0T3JwaGFuQm95cyhVc2VyTWVtYmVycy5vcnBoYW5fYm95KTtcclxuICAgIHNldEdpcmxzKFVzZXJNZW1iZXJzLnlvdW5nX3dvbWVuKTtcclxuICAgIHNldEd1eXMoVXNlck1lbWJlcnMueW91bmdfbWVuKTtcclxuICAgIHNldFdvbWVuKFVzZXJNZW1iZXJzLndvbWVuKTtcclxuICAgIHNldE1lbihVc2VyTWVtYmVycy5tYW4pO1xyXG4gICAgc2V0V2lkb3dzKFVzZXJNZW1iZXJzLndpZG93KTtcclxuICAgIHNldGdpcmwoVXNlck1lbWJlcnMuZ2lybCk7XHJcbiAgICBzZXRib3koVXNlck1lbWJlcnMuYm95KTtcclxuICAgIHNldGZpcnN0VGltZTIoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgW3N0ZXAsIHNldFN0ZXBdID0gdXNlU3RhdGUoMSk7XHJcblxyXG4gIGNvbnN0IFthbGxvd2VkLCBzZXRhbGxvd2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgZnVuY3Rpb24gdXBkYXRlQXJyYXkoZGF0YSkge1xyXG4gICAgbGV0IGZhdm9yaXRlID0gbGlzdDtcclxuICAgIGZhdm9yaXRlLnB1c2goZGF0YSk7XHJcblxyXG4gICAgdXBkYXRlTGlzdChmYXZvcml0ZSk7XHJcbiAgICBzZXRhbGxvd2VkKHRydWUpO1xyXG5cclxuICAgIC8vICBzZXRQZXJzb25OZWVkcygoUGVyc29uTmVlZHMpID0+IFBlcnNvbk5lZWRzLmNvbmNhdChkYXRhKSk7XHJcbiAgICAvLyBzZXRQZXJzb25OZWVkcygoUGVyc29uTmVlZHMpID0+IFsuLi5QZXJzb25OZWVkcywgZGF0YV0pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gcmVtb3ZlVXNlcihpZCkge1xyXG4gICAgbGV0IGZhdm9yaXRlID0gbGlzdDtcclxuICAgIGlmIChsaXN0Lmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgIHNldGFsbG93ZWQoZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgZmF2b3JpdGUgPSBhd2FpdCBmYXZvcml0ZS5maWx0ZXIoKGUpID0+IGUuaWQgIT09IGlkKTtcclxuICAgIHVwZGF0ZUxpc3QoZmF2b3JpdGUpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbXlzdWJtaXQoKSB7XHJcbiAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgVGhlU2VsZWN0ZWRDaXR5LFxyXG4gICAgICBUaGVTZWxlY3RlZGFlcmEsXHJcbiAgICAgIEZpcnN0TmFtZSxcclxuICAgICAgTGFzdE5hbWUsXHJcbiAgICAgIGVtYWlsLFxyXG4gICAgICBwaG9uZSxcclxuICAgICAgZmFtaWx5VHlwZSxcclxuICAgICAgcHJpb3JpdHksXHJcbiAgICAgIG9sZFdvbWFuLFxyXG4gICAgICBvbGRNYW4sXHJcbiAgICAgIGFjY2liaWxpdHlQZXJzb24sXHJcbiAgICAgIGJhYnksXHJcbiAgICAgIG9ycGhhbkdpcmxzLFxyXG4gICAgICBvcnBoYW5Cb3lzLFxyXG4gICAgICB3aWRvd3MsXHJcbiAgICAgIGdpcmxzLFxyXG4gICAgICBndXlzLFxyXG4gICAgICB3b21lbixcclxuICAgICAgbWVuLFxyXG4gICAgICBUaGVTZWxlY3RlZENvdW50cnksXHJcbiAgICAgIGdpcmwsXHJcbiAgICAgIGJveSxcclxuICAgICAgc2hhcmUsXHJcbiAgICAgIG1lbXBlcnNDb3VudCxcclxuXHJcbiAgICAgIGNhdGVnb3JpZXM6IGxpc3QsXHJcbiAgICAgIG9sZFBob25lOiBVc2VyLnBob25lLFxyXG4gICAgICBvbGRlbWFpbDogVXNlci5lbWFpbCxcclxuICAgICAgVGhlVXNlcl9pZDogVXNlci5pZCxcclxuICAgICAgZGVzLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICBsZXQgY2hlY2tlID0gdHJ1ZTtcclxuICAgIGxldCBteWNhbGMgPVxyXG4gICAgICAwICtcclxuICAgICAgcGFyc2VJbnQob2xkV29tYW4pICtcclxuICAgICAgcGFyc2VJbnQob2xkTWFuKSArXHJcbiAgICAgIHBhcnNlSW50KGFjY2liaWxpdHlQZXJzb24pICtcclxuICAgICAgcGFyc2VJbnQoYmFieSkgK1xyXG4gICAgICBwYXJzZUludChvcnBoYW5HaXJscykgK1xyXG4gICAgICBwYXJzZUludChvcnBoYW5Cb3lzKSArXHJcbiAgICAgIHBhcnNlSW50KHdpZG93cykgK1xyXG4gICAgICBwYXJzZUludChnaXJscykgK1xyXG4gICAgICBwYXJzZUludChndXlzKSArXHJcbiAgICAgIHBhcnNlSW50KHdvbWVuKSArXHJcbiAgICAgIHBhcnNlSW50KG1lbikgK1xyXG4gICAgICBwYXJzZUludChnaXJsKSArXHJcbiAgICAgIHBhcnNlSW50KGJveSk7XHJcbiAgICBjb25zb2xlLmxvZyhteWNhbGMpO1xyXG4gICAgc2V0bWVtcGVyc0NvdW50KG15Y2FsYyk7XHJcbiAgICBpZiAobXljYWxjID09IDApIHtcclxuICAgICAgY2hlY2tlID0gZmFsc2U7XHJcbiAgICAgIGFsZXJ0LnNob3coXCIg2KfZhNix2KzYp9ihINiq2K3Yr9mK2K8g2LnYr9ivINin2YTYp9mB2LHYp9ivIFwiLCB7XHJcbiAgICAgICAgdGltZW91dDogMjAwMCxcclxuICAgICAgICB0eXBlOiBcImVycm9yXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgIH1cclxuICAgIGlmIChkYXRhLmNhdGVnb3JpZXMubGVuZ3RoID09IDApIHtcclxuICAgICAgY2hlY2tlID0gZmFsc2U7XHJcbiAgICAgIGFsZXJ0LnNob3coXCLYp9mE2LHYrNin2KEg2KXYrtiq2YrYp9ixINil2K3YqtmK2KfYrCDZiNin2K3YryDYo9mIINij2YPYq9ixIFwiLCB7XHJcbiAgICAgICAgdGltZW91dDogMjAwMCxcclxuICAgICAgICB0eXBlOiBcImVycm9yXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKEZpcnN0TmFtZSA9PSBcIlwiKSB7XHJcbiAgICAgIGNoZWNrZSA9IGZhbHNlO1xyXG4gICAgICBhbGVydC5zaG93KFwi2KfZhNix2KzYp9ihINmD2KrYp9io2Kkg2KfZhNil2LPZhSDYp9mE2KPZiNmEXCIsIHtcclxuICAgICAgICB0aW1lb3V0OiAyMDAwLFxyXG4gICAgICAgIHR5cGU6IFwiZXJyb3JcIixcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKExhc3ROYW1lID09IFwiXCIpIHtcclxuICAgICAgY2hlY2tlID0gZmFsc2U7XHJcbiAgICAgIGFsZXJ0LnNob3coXCLYp9mE2LHYrNin2KEg2YPYqtin2KjYqSDYp9mE2KXYs9mFINin2YTYp9iu2YrYsVwiLCB7XHJcbiAgICAgICAgdGltZW91dDogMjAwMCxcclxuICAgICAgICB0eXBlOiBcImVycm9yXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwaG9uZSA9PSBcIlwiKSB7XHJcbiAgICAgIGNoZWNrZSA9IGZhbHNlO1xyXG4gICAgICBhbGVydC5zaG93KFwi2KfZhNix2KzYp9ihINmD2KrYp9io2Kkg2LHZgtmFINin2YTYrNmI2KfZhFwiLCB7XHJcbiAgICAgICAgdGltZW91dDogMjAwMCxcclxuICAgICAgICB0eXBlOiBcImVycm9yXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldHNwaW5uZXIodHJ1ZSk7XHJcbiAgICBpZiAoY2hlY2tlKSB7XHJcbiAgICAgIGFwaVxyXG4gICAgICAgIC5wb3N0KFwicmFid2EvVXBkYXRlVXNlclwiLCBkYXRhKVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgIHNldHNwaW5uZXIoZmFsc2UpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG5cclxuICAgICAgICAgIGlmIChyZXMuZGF0YSA9PSBcImFscmVhZHkgZXhpc3RzXCIpIHtcclxuICAgICAgICAgICAgYWxlcnQuc2hvdyhcItil2LPZhSDYp9mE2YPZiNio2YjZhiDZhdmI2KzZiNivINmF2LPYqNmC2KcgXCIsIHtcclxuICAgICAgICAgICAgICB0aW1lb3V0OiAyMDAwLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwiZXJyb3JcIixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAocmVzLmRhdGEgPT0gXCJwaG9uZVwiKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0LnNob3coXCLYsdmC2YUg2KfZhNis2YjYp9mEINmF2LPYqtiu2K/ZhSDZhdiz2KjZgtinXCIsIHtcclxuICAgICAgICAgICAgICB0aW1lb3V0OiAyMDAwLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwiZXJyb3JcIixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKHJlcy5kYXRhID09IFwiTm90RW1haWxcIikge1xyXG4gICAgICAgICAgICBhbGVydC5zaG93KFwi2KfZhNix2KzYp9ihINil2K/Yrtin2YQg2KXZitmF2YrZhCDYtdit2YrYrVwiLCB7XHJcbiAgICAgICAgICAgICAgdGltZW91dDogMjAwMCxcclxuICAgICAgICAgICAgICB0eXBlOiBcImVycm9yXCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmIChyZXMuZGF0YSA+IDApIHtcclxuICAgICAgICAgICAgYWxlcnQuc2hvdyhcItiq2YUg2KjZhtis2KfYrVwiLCB7XHJcbiAgICAgICAgICAgICAgdGltZW91dDogMjAwMCxcclxuICAgICAgICAgICAgICB0eXBlOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB1cGRhdGVzZXRzdGVwKDEpO1xyXG5cclxuICAgICAgICAgICAgLy9Hb0JhY2tBbmRUcmlnZ2VyTXV0YXRpb24oKTtcclxuICAgICAgICAgICAgLy9yb3V0ZXIucHVzaChcIi9jb21wYW55cy9bbmFtZV1cIiwgXCIvY29tcGFueXMvXCIgKyBmb3JtZGF0YS5jb21wYW55TmFtZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgYWxlcnQuc2hvdyhcItit2LXZhCDYrti32KNcIiwge1xyXG4gICAgICAgICAgICB0aW1lb3V0OiAyMDAwLFxyXG4gICAgICAgICAgICB0eXBlOiBcImVycm9yXCIsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHNldHNwaW5uZXIoZmFsc2UpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxldCBzdGVwMiA9IHN0ZXA7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgZmxvYXQ6IFwicmlnaHRcIiB9fT5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHVwZGF0ZXNldHN0ZXAoMSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWljb24gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJidG4taW5uZXItLWljb25cIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1hcnJvdy1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8aDJcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjAuOGVtXCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgINin2YTYudmI2K/YqSDYp9mE2Ykg2YLYp9im2YXYqSDYp9mE2YXYs9iq2YHZitiv2YrZhlxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPGhyIC8+XHJcbiAgICAgIHsvKiBMaWdodCB0YWJsZSAqL31cclxuICAgICAge3N0ZXAgPT0gMSA/IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAge2ZhbWlseVR5cGUgPT0gXCJcIiA/IChcclxuICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1sYWJlbFwiPtin2YTYr9mI2YTYqTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY291bnR5XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZENvdW50eSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0VGhlU2VsZWN0ZWRDb3VudHJ5KHNlbGVjdGVkQ291bnR5KTtcclxuICAgICAgICAgICAgICAgICAgICAgIC8qaWYgKGZpcnN0VGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldGZpcnN0VGltZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0qL1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IENDQXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlbXBjb251bnR5ID0gQ0NBc1tpbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZW1wY29udW50eS5uYW1lID09PSBzZWxlY3RlZENvdW50eSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldGNpdHlzKHRlbXBjb251bnR5LmRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGVtcGNvbnVudHkuZGF0YVswXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGhlU2VsZWN0ZWRDaXR5KHRlbXBjb251bnR5LmRhdGFbMF0ubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRhZXJhcyh0ZW1wY29udW50eS5kYXRhWzBdLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRhZXJhcyhbXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7Q0NBc1xyXG4gICAgICAgICAgICAgICAgICAgICAgPyBDQ0FzLm1hcCgoY291bnR5LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VyLmNvdW50eSA9PSBjb3VudHkubmFtZSA/IHRydWUgOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudHkubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLWxhYmVsXCI+2KfZhNmF2K/ZitmG2Kk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJteWNpdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjaXR5XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZGNpdHkgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFRoZVNlbGVjdGVkQ2l0eShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAvKmlmIChmaXJzdFRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRmaXJzdFRpbWUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9Ki9cclxuICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjaXR5cy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVtcGNpdHkgPSBjaXR5c1tpbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZW1wY2l0eS5uYW1lID09PSBzZWxlY3RlZGNpdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRhZXJhcyh0ZW1wY2l0eS5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2NpdHlzLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgICAgICAgICAgID8gY2l0eXMubWFwKChjaXR5LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtVc2VyLmNpdHkgPT0gY2l0eS5uYW1lID8gdHJ1ZSA6IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y2l0eS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2l0eS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1sYWJlbFwiPtin2YTZhdmG2LfZgtipPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhZXJhc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRUaGVTZWxlY3RlZGFlcmEoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e1VzZXIuYXJlYSA9PSBcImFsbFwiID8gdHJ1ZSA6IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICDYp9mE2YPZhFxyXG4gICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHthZXJhcy5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IGFlcmFzLm1hcCgoYWVyYXMsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e1VzZXIuYXJlYSA9PSBhZXJhcy5uYW1lID8gdHJ1ZSA6IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YWVyYXMubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FlcmFzLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJoZWFkaW5nLXNtYWxsIHRleHQtbXV0ZWQgbWItNFwiPlxyXG4gICAgICAgICAgICAgICAg2YXYudmE2YjZhdin2Kog2KfZhNmF2LPYqtmB2YrYr1xyXG4gICAgICAgICAgICAgIDwvaDY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLWxhYmVsXCI+2KfZhNil2LPZhSDYp9mE2KPZiNmEPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJGaXJzdE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0Rmlyc3ROYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtGaXJzdE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItin2YTYpdiz2YUg2KfZhNij2YjZhFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1sYWJlbFwiPtin2YTYpdiz2YUg2KfZhNil2K7ZitixPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJMYXN0TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRMYXN0TmFtZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17TGFzdE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItin2YTYpdiz2YUg2KfZhNil2K7ZitixXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtbGFiZWxcIj7YsdmC2YUg2KfZhNis2YjYp9mEPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBob25lXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldHBob25lKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwaG9uZX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiOTY2NTB4eHh4eFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLWxhYmVsXCI+2YjYtdmBINin2YTYrdin2YTYqTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldGRlcyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGVzfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcm93cz1cIjRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiINmI2LXZgSDYrdin2YTYqSDYp9mE2YXYs9iq2YHZitivXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICA8aDM+2YbZiNi5INin2YTZhdit2KrYp9isOjwvaDM+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxNXB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLXJhZGlvIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImN1c3RvbVJhZGlvMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImN1c3RvbVJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImN1c3RvbS1jb250cm9sLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PSBcIm9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0ZmFtaWx5VHlwZShcImZhbWlseVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2ZhbWlseVR5cGUgPT0gXCJmYW1pbHlcIiA/IHRydWUgOiB0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjdXN0b20tY29udHJvbC1sYWJlbFwiIGZvcj1cImN1c3RvbVJhZGlvMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgINi52KfYptmE2KlcclxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImN1c3RvbS1jb250cm9sIGN1c3RvbS1yYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY3VzdG9tUmFkaW8yXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY3VzdG9tUmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID09IFwib25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRmYW1pbHlUeXBlKFwic2luZ2xlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17ZmFtaWx5VHlwZSA9PSBcInNpbmdsZVwiID8gdHJ1ZSA6IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjdXN0b20tY29udHJvbC1sYWJlbFwiIGZvcj1cImN1c3RvbVJhZGlvMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgINmB2LHYr1xyXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxociAvPlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgzPtit2KfZhNipINin2YTZhdit2KrYp9isOjwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImN1c3RvbS1jb250cm9sIGN1c3RvbS1yYWRpbyBjdXN0b20tY29udHJvbC1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImN1c3RvbVJhZGlvSW5saW5lMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjdXN0b20tY29udHJvbC1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPT0gXCJvblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHByaW9yaXR5KFwibm9ybWFsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17cHJpb3JpdHkgPT0gXCJub3JtYWxcIiA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIiBmb3I9XCJjdXN0b21SYWRpb0lubGluZTFcIj5cclxuICAgICAgICAgICAgICAgICAgICDYudin2K/ZintcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImN1c3RvbS1jb250cm9sIGN1c3RvbS1yYWRpbyBjdXN0b20tY29udHJvbC1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImN1c3RvbVJhZGlvSW5saW5lMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjdXN0b20tY29udHJvbC1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPT0gXCJvblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHByaW9yaXR5KFwiY3JpdGljYWxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtwcmlvcml0eSA9PSBcImNyaXRpY2FsXCIgPyB0cnVlIDogZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImN1c3RvbS1jb250cm9sLWxhYmVsXCIgZm9yPVwiY3VzdG9tUmFkaW9JbmxpbmUyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAg2K3Ysdis2Kl7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjdXN0b20tY29udHJvbCBjdXN0b20tcmFkaW8gY3VzdG9tLWNvbnRyb2wtaW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjdXN0b21SYWRpb0lubGluZTNcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID09IFwib25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRwcmlvcml0eShcInN1cGVyQ3JpdGljYWxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtVc2VyLnByaW9yaXR5ID09IFwic3VwZXJDcml0aWNhbFwiID8gdHJ1ZSA6IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjdXN0b20tY29udHJvbC1sYWJlbFwiIGZvcj1cImN1c3RvbVJhZGlvSW5saW5lM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgINit2LHYrNipINis2K/Yp1xyXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX17XCIgXCJ9XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgXCJcIlxyXG4gICAgICApfVxyXG5cclxuICAgICAge3N0ZXAgPT0gMiA/IChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1yZXNwb25zaXZlXCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT1cInRoZWFkLWxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJzb3J0XCIgZGF0YS1zb3J0PVwibmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAg2KfZhNit2KfZhNipXHJcbiAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJzb3J0XCIgZGF0YS1zb3J0PVwiYnVkZ2V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICDYp9mE2LnYr9ivXHJcbiAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHkgY2xhc3NOYW1lPVwibGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICA8UGVyc29uVHlwZVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCLYp9mF2LHYo9ipINmF2LPZhtipXCJcclxuICAgICAgICAgICAgICAgICAgICB0aGVTdGF0ZT17b2xkV29tYW59XHJcbiAgICAgICAgICAgICAgICAgICAgc29tZWY9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRPbGRXb21hbihlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPFBlcnNvblR5cGVcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwi2LHYrNmEINmF2LPZhlwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGhlU3RhdGU9e29sZE1hbn1cclxuICAgICAgICAgICAgICAgICAgICBzb21lZj17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldE9sZE1hbihlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPFBlcnNvblR5cGVcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwi2KfYrdiq2YrYp9is2KfYqiDYrtin2LXYqVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGhlU3RhdGU9e2FjY2liaWxpdHlQZXJzb259XHJcbiAgICAgICAgICAgICAgICAgICAgc29tZWY9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRBY2NpYmlsaXR5UGVyc29uKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8UGVyc29uVHlwZVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCLYt9mB2YQg2LHYttmK2LlcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRoZVN0YXRlPXtiYWJ5fVxyXG4gICAgICAgICAgICAgICAgICAgIHNvbWVmPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0QmFieShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPFBlcnNvblR5cGVcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwi2KjZhtin2Kog2KPZitiq2KfZhVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGhlU3RhdGU9e29ycGhhbkdpcmxzfVxyXG4gICAgICAgICAgICAgICAgICAgIHNvbWVmPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0T3JwaGFuR2lybHMoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxQZXJzb25UeXBlXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cItij2YjZhNin2K8g2KPZitiq2KfZhVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGhlU3RhdGU9e29ycGhhbkJveXN9XHJcbiAgICAgICAgICAgICAgICAgICAgc29tZWY9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRPcnBoYW5Cb3lzKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8UGVyc29uVHlwZVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCLYo9ix2KfZhdmEXCJcclxuICAgICAgICAgICAgICAgICAgICB0aGVTdGF0ZT17d2lkb3dzfVxyXG4gICAgICAgICAgICAgICAgICAgIHNvbWVmPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0V2lkb3dzKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8UGVyc29uVHlwZVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCLYtNin2KjYp9iqIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGhlU3RhdGU9e2dpcmxzfVxyXG4gICAgICAgICAgICAgICAgICAgIHNvbWVmPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0R2lybHMoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxQZXJzb25UeXBlXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIti02KjYp9ioXCJcclxuICAgICAgICAgICAgICAgICAgICB0aGVTdGF0ZT17Z3V5c31cclxuICAgICAgICAgICAgICAgICAgICBzb21lZj17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldEd1eXMoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxQZXJzb25UeXBlXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cItio2YbYp9iqXCJcclxuICAgICAgICAgICAgICAgICAgICB0aGVTdGF0ZT17Z2lybH1cclxuICAgICAgICAgICAgICAgICAgICBzb21lZj17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldGdpcmwoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxQZXJzb25UeXBlXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cItij2YjZhNin2K9cIlxyXG4gICAgICAgICAgICAgICAgICAgIHRoZVN0YXRlPXtib3l9XHJcbiAgICAgICAgICAgICAgICAgICAgc29tZWY9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRib3koZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxQZXJzb25UeXBlXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cItmG2LPYp9ihXCJcclxuICAgICAgICAgICAgICAgICAgICB0aGVTdGF0ZT17d29tZW59XHJcbiAgICAgICAgICAgICAgICAgICAgc29tZWY9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRXb21lbihlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPFBlcnNvblR5cGVcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwi2LHYrNin2YRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRoZVN0YXRlPXttZW59XHJcbiAgICAgICAgICAgICAgICAgICAgc29tZWY9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRNZW4oZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8UGVyc29uVHlwZVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCLYrdi12Kkg2KfZhNi52KfYptmE2Kkg2YXZhiDYp9mE2YPZiNio2YjZhtin2KogKNmB2YLYtyDZhNmE2KrYs9mH2YrZhCDZitmF2YPZhiDYqti62YrYsSDYp9mE2YPZhdmK2Kkg2YjZgtiqINin2YTYtdix2YEpXCJcclxuICAgICAgICAgICAgICAgICAgICB0aGVTdGF0ZT17c2hhcmV9XHJcbiAgICAgICAgICAgICAgICAgICAgc29tZWY9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRzaGFyZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICBcIlwiXHJcbiAgICAgICl9XHJcbiAgICAgIHtzdGVwID09IDMgPyAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtcmVzcG9uc2l2ZVwiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9XCJ0aGVhZC1saWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwic29ydFwiIGRhdGEtc29ydD1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgINin2YTYpdit2KrZitin2KxcclxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInNvcnRcIiBkYXRhLXNvcnQ9XCJidWRnZXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgINin2K7YqtmK2KfYsVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cImxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAge2NhdGVnb3JpZXMubGVuZ3RoID4gMFxyXG4gICAgICAgICAgICAgICAgICAgID8gY2F0ZWdvcmllcy5tYXAoKGRhdGEsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VXNlclBlcnNvbk5lZWRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlQXJyYXk9e3VwZGF0ZUFycmF5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlVXNlcj17cmVtb3ZlVXNlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJNZXRhPXtVc2VyTWV0YSA/IFVzZXJNZXRhIDogW119XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIFwiXCJcclxuICAgICAgKX1cclxuXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgbWFyZ2luOiBcIjAgYXV0b1wiLFxyXG4gICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIG1hcmdpblRvcDogXCI5ZW1cIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3N0ZXAgPT0gMSA/IChcclxuICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1sZyBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e3N0ZXAgPT0gMSA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzdGVwID09IDEgPyBmYWxzZSA6IHNldFN0ZXAoc3RlcCAtIDEpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICDYp9mE2LPYp9io2YJcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge1wiICAgICBcIn1cclxuICAgICAgICAgIHtzdGVwID09IDMgPyAoXHJcbiAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tbGcgYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtzdGVwID09IDMgPyB0cnVlIDogZmFsc2V9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3RlcCA9PSAzID8gZmFsc2UgOiBzZXRTdGVwKHN0ZXAgKyAxKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAg2KfZhNiq2KfZhNmKXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7c3RlcCA9PSAzID8gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aHIgLz5cclxuXHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJsZWZ0XCIgfX0+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4taWNvbiBidG4tc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbXlzdWJtaXQoKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiLjc1ZW1cIixcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiYXV0b1wiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuLWlubmVyLS10ZXh0XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICDYqtit2K/ZitirXHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIHtcIiAgICAgXCJ9XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJidG4taW5uZXItLWljb25cIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwibmkgbmktc2VuZFwiPjwvaT5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgXCJcIlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWRpdFVzZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFwiLi9lZGl0YWJsZS1pbWFnZS5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuLy9pbXBvcnQgSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvaWNvbnNcIjtcclxuaW1wb3J0IFJlbW92ZUNpcmNsZU91dGxpbmVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUmVtb3ZlQ2lyY2xlT3V0bGluZVwiO1xyXG5jb25zdCBFZGl0YWJsZUltYWdlID0gKHsgaW1hZ2VPYmplY3QsIHJlbW92ZUltYWdlRnVuYyB9KSA9PiB7XHJcbiAgbGV0IGltYWdlUHJldmlldztcclxuICBpZiAodHlwZW9mIGltYWdlT2JqZWN0ID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICBpbWFnZVByZXZpZXcgPSBpbWFnZU9iamVjdDtcclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKFwic291cmNlVXJsXCIgaW4gaW1hZ2VPYmplY3QpIGltYWdlUHJldmlldyA9IGltYWdlT2JqZWN0LnNvdXJjZVVybDtcclxuICAgIGVsc2UgaWYgKFwiaW1hZ2VPYmplY3RcIiBpbiBpbWFnZU9iamVjdClcclxuICAgICAgaW1hZ2VQcmV2aWV3ID0gVVJMLmNyZWF0ZU9iamVjdFVSTChpbWFnZU9iamVjdC5pbWFnZU9iamVjdCk7XHJcbiAgfVxyXG4gIGxldCBpbWdVcmwgPSBpbWFnZU9iamVjdFxyXG4gICAgPyBpbWFnZVByZXZpZXdcclxuICAgIDogYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vaW1nL2xvZ28ucG5nYDtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD1cInByb2R1Y3QtZWRpdGFibGUtaW1hZ2VcIj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICBcInByb2R1Y3QtaW1hZ2UgXCIgKyBpbWFnZU9iamVjdC5pc1Vsb2FkaW5nID09PSBmYWxzZVxyXG4gICAgICAgICAgICA/IFwiaW1hZ2UtdXBsb2FkZWRcIlxyXG4gICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICB9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtaW1nLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVtb3ZlLWltYWdlXCIgb25DbGljaz17cmVtb3ZlSW1hZ2VGdW5jfT5cclxuICAgICAgICAgICAgPFJlbW92ZUNpcmNsZU91dGxpbmVJY29uXHJcbiAgICAgICAgICAgICAgZm9udFNpemU9e1wibGFyZ2VcIn1cclxuICAgICAgICAgICAgICBjb2xvcj1cImRhbmdlclwiXHJcbiAgICAgICAgICAgICAgc3RseWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCJyZWRcIiB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake2ltYWdlT2JqZWN0LmlzVWxvYWRpbmcgPyBcImltYWdlLWxvYWRpbmdcIiA6IFwiXCJ9YH1cclxuICAgICAgICAgICAgc3JjPXtpbWdVcmx9XHJcbiAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgIHdpZHRoPVwiMzA4XCJcclxuICAgICAgICAgICAgaGVpZ2h0PVwiMTk3XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXRhYmxlSW1hZ2U7XHJcbiIsImZ1bmN0aW9uIEZvb3RlcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGZvb3RlciBjbGFzcz1cImZvb3RlciBwdC0wXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1sZy1iZXR3ZWVuXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy02XCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy02XCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9mb290ZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjsgLy9cclxuaW1wb3J0IHVzZUF1dGggZnJvbSBcIi4uL2NvbnRleHRzL2F1dGguanNcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5mdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgY29uc3QgeyB0b2dnbGVyLCBzZXR0b2dnbGVyIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItdG9wIG5hdmJhci1leHBhbmQgbmF2YmFyLWRhcmsgYmctcHJpbWFyeSBib3JkZXItYm90dG9tXCI+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGNsYXNzPVwibmF2LWxpbmtcIlxyXG4gICAgICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXHJcbiAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxyXG4gICAgICAgICAgICB6SW5kZXg6IFwiOTk5OTk5OTk5OTk5OTk5OTlcIixcclxuICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICAgICAgaGVpZ2h0OiBcIjQwcHhcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICBtYXJnaW5SaWdodDogXCIxMHB4XCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXR0b2dnbGVyKCF0b2dnbGVyKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwibmkgbmktYWxpZ24tbGVmdC0yXCI+PC9pPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9uYXY+XHJcbiAgICAgIHsvKiBIZWFkZXIgKi99XHJcbiAgICAgIHsvKiBIZWFkZXIgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyIGJnLXByaW1hcnkgcGItNlwiPjwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iLCJpbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XHJcblxyXG5mdW5jdGlvbiBOZWVkeUNoZWNrVXNlcnMoeyBkYXRhLCBteUVkaXRVc2VyLCBteURpc1VzZXIsIG9wZW5Nb2RhbCB9KSB7XHJcbiAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDx0cj5cclxuICAgICAgPHRoIHNjb3BlPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYSBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYW1lIG1iLTAgdGV4dC1zbVwiPntkYXRhLk5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvdGg+XHJcbiAgICAgIDx0ZCBjbGFzc05hbWU9XCJidWRnZXRcIj57ZGF0YS5tZW1wZXJzQ291bnR9PC90ZD5cclxuICAgICAgPHRkIGNsYXNzTmFtZT1cImJ1ZGdldFwiPlxyXG4gICAgICAgIHtkYXRhLmxhc3RDb3Vib24gPT0gXCIwMDAwLTAwLTAwXCIgPyBcItmE2YUg2YrYs9iq2YTZhVwiIDogZGF0YS5sYXN0Q291Ym9ufVxyXG4gICAgICA8L3RkPlxyXG4gICAgICA8dGQgY2xhc3NOYW1lPVwiYnVkZ2V0XCI+e2RhdGEudG90YWxDb3Vib25zfTwvdGQ+XHJcblxyXG4gICAgICA8dGQgY2xhc3NOYW1lPVwiYnVkZ2V0XCI+XHJcbiAgICAgICAge2RhdGEucHJpb3JpdHkgPT0gXCJub3JtYWxcIlxyXG4gICAgICAgICAgPyBcIti52KfZitiv2YpcIlxyXG4gICAgICAgICAgOiBkYXRhLnByaW9yaXR5ID09IFwiY3JpdGljYWxcIlxyXG4gICAgICAgICAgPyBcItit2LHYrNipXCJcclxuICAgICAgICAgIDogZGF0YS5wcmlvcml0eSA9PSBcInN1cGVyQ3JpdGljYWxcIlxyXG4gICAgICAgICAgPyBcItit2LHYrNipINis2K/Yp1wiXHJcbiAgICAgICAgICA6IGRhdGEucHJpb3JpdHl9XHJcbiAgICAgIDwvdGQ+XHJcbiAgICAgIDx0ZCBjbGFzc05hbWU9XCJidWRnZXRcIj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgIGNsYXNzPVwiYnRuXCJcclxuICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgZGF0YS10YXJnZXQ9XCIjbW9kYWwtZGVmYXVsdFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIG9wZW5Nb2RhbChkYXRhLCBcImNhcmRzXCIpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICDYp9mE2KjYt9in2YLYp9iqXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvdGQ+XHJcbiAgICAgIDx0ZCBjbGFzc05hbWU9XCJidWRnZXRcIj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgIGNsYXNzPVwiYnRuXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgb3Blbk1vZGFsKGRhdGEsIFwic3RhdHNcIik7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgINmF2LnZhNmI2YXYp9iqXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvdGQ+XHJcblxyXG4gICAgICA8dGQgY2xhc3NOYW1lPVwiYnVkZ2V0XCI+XHJcbiAgICAgICAge2RhdGEuYXBwcm92YWxTdGF0dXMgPT0gMSA/IChcclxuICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcImdyZWVuXCIgfX0+2YHYudin2YQ8L3A+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19Pti52KfYt9mEPC9wPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvdGQ+XHJcblxyXG4gICAgICA8dGQgY2xhc3NOYW1lPVwiYnVkZ2V0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duXCI+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tc20gYnRuLWljb24tb25seSB0ZXh0LWxpZ2h0XCJcclxuICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXHJcbiAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcclxuICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtZWxsaXBzaXMtdlwiPjwvaT5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LXJpZ2h0IGRyb3Bkb3duLW1lbnUtYXJyb3dcIj5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIG15RWRpdFVzZXIoZGF0YSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAg2KrYudiv2YrZhCDYqNmK2KfZhtin2Kog2KfZhNmF2LPYqtmB2YrYr1xyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIHtDb29raWVzLmdldChcIlVzZXJUeXBlXCIpID09IFwiYWRtaW5cIiA/IChcclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBvcGVuTW9kYWwoZGF0YSwgXCJ1cGRhdGVNYW5kb2JlXCIpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI21vZGFsLWRlZmF1bHRcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgINiq2LrZitixINin2YTZhdmG2K/ZiNioXHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge0Nvb2tpZXMuZ2V0KFwiVXNlclR5cGVcIikgPT0gXCJhZG1pblwiID8gKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YS5hcHByb3ZhbFN0YXR1cyA9PSAxID8gKFxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIG15RGlzVXNlcihkYXRhLnVzZXJfaWQsIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgINiq2LnYt9mK2YQg2K3Ys9in2Kgg2KfZhNmF2LPYqtmB2YrYr1xyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIG15RGlzVXNlcihkYXRhLnVzZXJfaWQsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgINiq2YHYudmK2YQg2K3Ys9in2Kgg2KfZhNmF2LPYqtmB2YrYr1xyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3RkPlxyXG4gICAgPC90cj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZWVkeUNoZWNrVXNlcnM7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7IC8vXHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XHJcbmltcG9ydCBhcGkgZnJvbSBcIi4uL3NlcnZpY2VzL0FwaVwiO1xyXG5pbXBvcnQgeyBHZXRDYXRlZ29yaWVzIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaV9nZXRcIjtcclxuaW1wb3J0IFNrZWxldG9uIGZyb20gXCJyZWFjdC1sb2FkaW5nLXNrZWxldG9uXCI7XHJcbmltcG9ydCB7IHVzZUFsZXJ0IH0gZnJvbSBcInJlYWN0LWFsZXJ0XCI7XHJcbmltcG9ydCBFZGl0YWJsZUltYWdlMiBmcm9tIFwiLi9FZGl0YWJsZUltYWdlMlwiO1xyXG5pbXBvcnQgQnV0dG9uVXBsb2FkSW1hZ2UgZnJvbSBcIi4vQnV0dG9uVXBsb2FkXCI7XHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgdXNlQXV0aCwgeyBQcm90ZWN0Um91dGUgfSBmcm9tIFwiLi4vY29udGV4dHMvYXV0aC5qc1wiO1xyXG5cclxuZnVuY3Rpb24gTmV3Q2FyZEZvcm0oeyB1c2VyX2lkLCB1c2VybmFtZSwgR29CYWNrQW5kVHJpZ2dlck11dGF0aW9uIH0pIHtcclxuICBjb25zdCBhbGVydCA9IHVzZUFsZXJ0KCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgdG9rZW4gPSBDb29raWVzLmdldChcInRva2VuXCIpO1xyXG4gIGNvbnN0IHNpdGVVcmwgPSBDb29raWVzLmdldChcInNpdGVVcmxcIik7XHJcbiAgY29uc3QgW1hNTCwgc2V0WE1MXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBbUHJvZHVjdEltYWdlLCBzZXRQcm9kdWN0SW1hZ2VdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgY29uc3QgeyB0b2dnbGVyLCBzZXR0b2dnbGVyLCBsb2FkaW5nIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgW3NwaW5uZXIsIHNldHNwaW5uZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtJbnB1dFR5cGVkaXMsIHNldElucHV0VHlwZWRpc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW0lucHV0VHlwZWNvZGUsIHNldElucHV0VHlwZWNvZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIC8qXHJcbiAgY29uc3QgeyBkYXRhLCBpc0xvYWRpbmcsIGlzRXJyb3IgfSA9IEdldENhdGVnb3JpZXMoKTtcclxuXHJcbiAgY29uc3QgcmVzdWx0cyA9IGlzTG9hZGluZyA/IGZhbHNlIDogZGF0YS5kYXRhO1xyXG4gIGNvbnN0IHNob3dTa2VsZXRvbiA9IGlzTG9hZGluZyB8fCBsb2FkaW5nO1xyXG4qL1xyXG5cclxuICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIGVycm9ycyB9ID0gdXNlRm9ybSh7XHJcbiAgICAvL21vZGU6IFwib25DaGFuZ2VcIixcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlVGh1bWJuYWlsUHJvZHVjdChmaWxlKSB7XHJcbiAgICBsZXQgaW1hZ2VPYmogPSB7XHJcbiAgICAgIGlkOiBmaWxlLm5hbWUsXHJcbiAgICAgIG5hbWU6IGZpbGUubmFtZSxcclxuICAgICAgaXNVbG9hZGluZzogdHJ1ZSxcclxuICAgICAgaW1hZ2VPYmplY3Q6IGZpbGUsXHJcbiAgICB9O1xyXG4gICAgY29uc29sZS5sb2coaW1hZ2VPYmopO1xyXG4gICAgc2V0UHJvZHVjdEltYWdlKGltYWdlT2JqKTtcclxuXHJcbiAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuXHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJmaWxlXCIsIGZpbGUpO1xyXG5cclxuICAgIGF4aW9zXHJcbiAgICAgIC5wb3N0KHNpdGVVcmwgKyBcIndwL3YyL21lZGlhXCIsIGZvcm1EYXRhLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhLnNvdXJjZV91cmwpO1xyXG4gICAgICAgIHNldFhNTChyZXN1bHQuZGF0YS5zb3VyY2VfdXJsKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IChmb3JtZGF0YSkgPT4ge1xyXG4gICAgZm9ybWRhdGEgPSB7IC4uLmZvcm1kYXRhLCB1c2VyX2lkLCBYTUwgfTtcclxuICAgIHNldHNwaW5uZXIodHJ1ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhmb3JtZGF0YSk7XHJcblxyXG4gICAgYXBpXHJcbiAgICAgIC5wb3N0KFwicmFid2EvbmV3VXNlckNhcmRcIiwgZm9ybWRhdGEpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgc2V0c3Bpbm5lcihmYWxzZSk7XHJcblxyXG4gICAgICAgIGlmIChyZXMuZGF0YSA+IDApIHtcclxuICAgICAgICAgIGFsZXJ0LnNob3coXCLYqtmFINio2YbYrNin2K1cIiwge1xyXG4gICAgICAgICAgICB0aW1lb3V0OiAyMDAwLFxyXG4gICAgICAgICAgICB0eXBlOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgR29CYWNrQW5kVHJpZ2dlck11dGF0aW9uKCk7XHJcbiAgICAgICAgICAvL3JvdXRlci5wdXNoKFwiL2NvbXBhbnlzL1tuYW1lXVwiLCBcIi9jb21wYW55cy9cIiArIGZvcm1kYXRhLmNvbXBhbnlOYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICBzZXRzcGlubmVyKGZhbHNlKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cclxuICAgICAgICA8aDEgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PiDYp9i22KfZgdipINio2LfYp9mC2Kkg2KfZhNmJIDoge3VzZXJuYW1lfTwvaDE+XHJcblxyXG4gICAgICAgIDxkaXYgZGlyPVwicnRsXCIgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17eyBmbG9hdDogXCJyaWdodFwiIH19IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAg2KXYs9mFINin2YTYqNi32KfZgtipXHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXIoe1xyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoOiAzLFxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLYpdiz2YUg2KfZhNmD2YjYqNmI2YZcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7ZXJyb3JzLm5hbWUgJiYgZXJyb3JzLm5hbWUudHlwZSA9PT0gXCJyZXF1aXJlZFwiICYmIChcclxuICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT7Zh9iw2Kcg2KfZhNit2YLZhCDZhdi32YTZiNioPC9wPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7ZXJyb3JzLm5hbWUgJiYgZXJyb3JzLm5hbWUudHlwZSA9PT0gXCJtaW5MZW5ndGhcIiAmJiAoXHJcbiAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIgfX0+2KfZhNil2LPZhSDYp9mE2YXYr9iu2YQg2YLYtdmK2LEg2YTZhNi62KfZitipPC9wPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3sgZmxvYXQ6IFwicmlnaHRcIiB9fSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgINiq2KfYsdmK2K4g2KfZhNil2YbYqtmH2KfYoVxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZW5kXCJcclxuICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXIoe1xyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2Vycm9ycy5uYW1lICYmIGVycm9ycy5uYW1lLnR5cGUgPT09IFwicmVxdWlyZWRcIiAmJiAoXHJcbiAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIgfX0+2YfYsNinINin2YTYrdmC2YQg2YXYt9mE2YjYqDwvcD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17eyBmbG9hdDogXCJyaWdodFwiIH19IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAg2KfZhNio2LfYp9mC2KlcclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTQwcHhcIiwgbWFyZ2luOiBcIjJlbSBhdXRvXCIgfX0+XHJcbiAgICAgICAgICAgICAgICB7UHJvZHVjdEltYWdlID8gKFxyXG4gICAgICAgICAgICAgICAgICA8RWRpdGFibGVJbWFnZTJcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZU9iamVjdD17UHJvZHVjdEltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUltYWdlRnVuYz17KCkgPT4gc2V0UHJvZHVjdEltYWdlKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25VcGxvYWRJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVJbWFnZT1cInRodW1ibmFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh0aHVtYm5haWwpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVUaHVtYm5haWxQcm9kdWN0KHRodW1ibmFpbC50YXJnZXQuZmlsZXNbMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17eyBmbG9hdDogXCJyaWdodFwiIH19IGNsYXNzPVwiZm9ybS1jb250cm9sLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICDYp9mE2YjYtdmBXHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgIHJvd3M9XCI0XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNcIlxyXG4gICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcih7XHJcbiAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aDogMyxcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLZiNi12YEg2KfZiCDYt9ix2YrZgtipINin2YTYpdiz2KrYrtiv2KfZhSBcIlxyXG4gICAgICAgICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgIHtlcnJvcnMuZGVzICYmIGVycm9ycy5kZXMudHlwZSA9PT0gXCJtaW5MZW5ndGhcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT7Yp9mE2YjYtdmBINin2YTZhdiv2K7ZhNipINmC2LXZitix2Kkg2YTZhNi62KfZitipPC9wPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHtzcGlubmVyID8gKFxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIlxyXG4gICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICBzdHlsZT17eyBmbG9hdDogXCJsZWZ0XCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Bpbm5lci1ncm93IHNwaW5uZXItZ3Jvdy1zbVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAg2KzYp9ix2Yog2KfZhNil2LHYs9in2YQgLi5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgc3R5bGU9e3sgZmxvYXQ6IFwibGVmdFwiIH19XHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17bG9hZGluZyA/IFwiTG9hZGluZy4uLlwiIDogXCLYpdix2LPYp9mEXCJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld0NhcmRGb3JtO1xyXG4iLCJmdW5jdGlvbiBQZXJzb25UeXBlKHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDx0clxyXG4gICAgICBzdHlsZT17XHJcbiAgICAgICAgcHJvcHMubmFtZSA9PVxyXG4gICAgICAgIFwi2K3YtdipINin2YTYudin2KbZhNipINmF2YYg2KfZhNmD2YjYqNmI2YbYp9iqICjZgdmC2Lcg2YTZhNiq2LPZh9mK2YQg2YrZhdmD2YYg2KrYutmK2LEg2KfZhNmD2YXZitipINmI2YLYqiDYp9mE2LXYsdmBKVwiXHJcbiAgICAgICAgICA/IHsgYmFja2dyb3VuZENvbG9yOiBcIiM1RTcyRTRcIiwgY29sb3I6IFwid2hpdGVcIiB9XHJcbiAgICAgICAgICA6IHt9XHJcbiAgICAgIH1cclxuICAgID5cclxuICAgICAgPHRoIHNjb3BlPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYSBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYW1lIG1iLTAgdGV4dC1zbVwiPntwcm9wcy5uYW1lfSA8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC90aD5cclxuICAgICAgPHRkIGNsYXNzTmFtZT1cImJ1ZGdldFwiPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIHByb3BzLnNvbWVmKGUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBudW1oZXItcGVyc29uLXR5cGVcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19XHJcbiAgICAgICAgICB2YWx1ZT17cHJvcHMudGhlU3RhdGV9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC90ZD5cclxuICAgIDwvdHI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGVyc29uVHlwZTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyBnZXRVc2VyQ2FyZHMgfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpX2dldFwiO1xyXG5pbXBvcnQgU2tlbGV0b24gZnJvbSBcInJlYWN0LWxvYWRpbmctc2tlbGV0b25cIjtcclxuXHJcbmltcG9ydCB1c2VBdXRoIGZyb20gXCIuLi9jb250ZXh0cy9hdXRoLmpzXCI7XHJcblxyXG5mdW5jdGlvbiBVc2VyQ2FyZHMoeyB1c2VyX2lkIH0pIHtcclxuICBjb25zdCB7IHRvZ2dsZXIsIHNldHRvZ2dsZXIsIGxvYWRpbmcgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zdCBbc3Bpbm5lciwgc2V0c3Bpbm5lcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW0lucHV0VHlwZWRpcywgc2V0SW5wdXRUeXBlZGlzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbSW5wdXRUeXBlY29kZSwgc2V0SW5wdXRUeXBlY29kZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHsgZGF0YSwgaXNMb2FkaW5nLCBpc0Vycm9yIH0gPSBnZXRVc2VyQ2FyZHModXNlcl9pZCk7XHJcblxyXG4gIGNvbnN0IHJlc3VsdHMgPSBpc0xvYWRpbmcgPyBmYWxzZSA6IGRhdGEuZGF0YTtcclxuXHJcbiAgY29uc29sZS5sb2cocmVzdWx0cyk7XHJcbiAgY29uc3Qgc2hvd1NrZWxldG9uID0gaXNMb2FkaW5nIHx8IGxvYWRpbmc7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICB7cmVzdWx0cy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICB7cmVzdWx0cy5tYXAoKGNhcmQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHZhciBkID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgdmFyIG15ZCA9IG5ldyBEYXRlKGNhcmQuZW5kKTtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzcz1cImNhcmRcIiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJjYXJkLWltZy10b3BcIiBzcmM9e2NhcmQuaW1nfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwiY2FyZC10aXRsZVwiPntjYXJkLm5hbWV9IDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHRcIj57Y2FyZC5kZXN9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtteWQuZ2V0VGltZSgpID49IGQuZ2V0VGltZSgpID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwiZ3JlZW5cIiB9fSBjbGFzcz1cImNhcmQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINiq2YbYqtmH2YogOiB7Y2FyZC5lbmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19IGNsYXNzPVwiY2FyZC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg2YXZhtiq2YfZitipIDoge2NhcmQuZW5kfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PtmE2Kcg2KrZiNis2K8g2KjYt9in2YLYp9iqIDwvaDE+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7c2hvd1NrZWxldG9uID8gPFNrZWxldG9uIGhlaWdodD17NDB9IGNvdW50PXsxMH0gLz4gOiBcIlwifVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlckNhcmRzO1xyXG4iLCJpbXBvcnQgeyBDaGFydCB9IGZyb20gXCJAYml0L3ByaW1lZmFjZXMucHJpbWVyZWFjdC5jaGFydFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgR2V0dXNlcnNzMiwgVXNlclN0YXRpc3RpY3MgfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpX2dldFwiO1xyXG5pbXBvcnQgU2tlbGV0b24gZnJvbSBcInJlYWN0LWxvYWRpbmctc2tlbGV0b25cIjtcclxuaW1wb3J0IHVzZUF1dGgsIHsgUHJvdGVjdFJvdXRlIH0gZnJvbSBcIi4uL2NvbnRleHRzL2F1dGguanNcIjtcclxuaW1wb3J0IHsgdXNlQWxlcnQgfSBmcm9tIFwicmVhY3QtYWxlcnRcIjtcclxuaW1wb3J0IHsgbXV0YXRlIH0gZnJvbSBcInN3clwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmZ1bmN0aW9uIFVzZXJJbmZvKHsgaWQsIHNldHVzZXJJbmZvTW9kZSB9KSB7XHJcbiAgY29uc3QgW1BpZUNhcnREYXRhTnVtYmVycywgc2V0UGllQ2FydERhdGFOdW1iZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbUGllQ2FydERhdGFNb25leSwgc2V0UGllQ2FydERhdGFNb25leV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW0JhckNoYXJ0RGF0YU51bWJlcnMsIHNldEJhckNoYXJ0RGF0YU51bWJlcnNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtCYXJDaGFydERhdGFNb25leSwgc2V0QmFyQ2hhcnREYXRhTW9uZXldID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAvL2NvbnN0IFtwcm9qZWN0LHNldFByb2plY3RdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtyZXF1ZXN0LCBzZXRyZXF1ZXN0XSA9IHVzZVN0YXRlKFwiZmlyc3RUaW1lXCIpO1xyXG5cclxuICBjb25zb2xlLmxvZyhpZCk7XHJcblxyXG4gIGNvbnN0IGFsZXJ0ID0gdXNlQWxlcnQoKTtcclxuXHJcbiAgY29uc3QgW25hbWUsIHNldG5hbWVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW21lbWJlcnMsIHNldG1lbWJlcnNdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2xhc3RfY291Ym9uLCBzZXRsYXN0X2NvdWJvbl0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbdG90YWxfY291Ym9ucywgc2V0dG90YWxfY291Ym9uc10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbcGlvcml0eSwgc2V0cGlvcml0eV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbcGFnZSwgc2V0cGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbU2NpdHksIHNldFNjaXR5XSA9IHVzZVN0YXRlKFwi2KzYr9ipXCIpO1xyXG4gIGNvbnN0IFtTYWVyYSwgc2V0U2FlcmFdID0gdXNlU3RhdGUoXCJhbGxcIik7XHJcbiAgY29uc3QgW1NjYXQsIHNldFNjYXRdID0gdXNlU3RhdGUoOCk7XHJcbiAgY29uc3QgW1NzZWFyY2hOYW1lLCBzZXRTc2VhcmNoTmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbU3NlYXJjaFBob25lLCBzZXRTc2VhcmNoUGhvbmVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW1JzTmFtZSwgc2V0UnNOYW1lXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbUnNQaG9uZSwgc2V0UnNQaG9uZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFtzcGlubmVyLCBzZXRzcGlubmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW1RoZVNlbGVjdGVkY2F0ZWdvcnksIHNldFRoZVNlbGVjdGVkY2F0ZWdvcnldID0gdXNlU3RhdGUoOCk7XHJcbiAgY29uc3QgW1RoZVVzZXIsIHNldFRoZVVzZXJdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFt1c2VyX2luZm8sIHNldHVzZXJfaW5mb10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW01hbmRvYmVfaW5mbywgc2V0TWFuZG9iZV9pbmZvXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgeyB1c2VyLCBpc0F1dGhlbnRpY2F0ZWQsIGxvYWRpbmcgfSA9IHVzZUF1dGgoKTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgVXNlclN0YXRpc3RpY3NEYXRhLFxyXG4gICAgVXNlclN0YXRpc3RpY3Npc0xvYWRpbmcsXHJcbiAgICBVc2VyU3RhdGlzdGljc2lzRXJyb3IsXHJcbiAgfSA9IFVzZXJTdGF0aXN0aWNzKGlkKTtcclxuXHJcbiAgY29uc3QgVXNlclN0YXRpc3RpY3NyZXN1bHRzID1cclxuICAgIFVzZXJTdGF0aXN0aWNzRGF0YSA9PSBmYWxzZSA/IGZhbHNlIDogVXNlclN0YXRpc3RpY3NEYXRhO1xyXG5cclxuICBjb25zdCBzaG93U2tlbGV0b24yID0gVXNlclN0YXRpc3RpY3Npc0xvYWRpbmcgfHwgbG9hZGluZztcclxuXHJcbiAgY29uc3QgW2ZpcnN0VGltZSwgc2V0Zmlyc3RUaW1lXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtuZXdTdGF0ZSwgc2V0bmV3U3RhdGVdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3N0YXRBbGwsIHNldHN0YXRBbGxdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtjb3Vib25zLCBzZXRjb3Vib25zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbdXNlcl9zZW50X2NvdWJvbnMsIHNldHVzZXJfc2VudF9jb3Vib25zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbdXNlcl91c2VkX2NvdWJvbnMsIHNldHVzZXJfdXNlZF9jb3Vib25zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbQWx1c2VyX292ZXJfY291Ym9uc2wsIHNldEFsdXNlcl9vdmVyX2NvdWJvbnNsXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgW2xpc3QsIHVwZGF0ZUxpc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFthbGxvd2VkLCBzZXRhbGxvd2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgZnVuY3Rpb24gR29CYWNrQW5kVHJpZ2dlck11dGF0aW9uKCkge1xyXG4gICAgc2V0bW9kYWxUeXBlKFwiY2FyZHNcIik7XHJcbiAgfVxyXG5cclxuICBpZiAoVXNlclN0YXRpc3RpY3NyZXN1bHRzICYmIG5ld1N0YXRlKSB7XHJcbiAgICBsZXQgdGVzdFN0YXRlID0gVXNlclN0YXRpc3RpY3NyZXN1bHRzLmRhdGE7XHJcblxyXG4gICAgY29uc29sZS5sb2codGVzdFN0YXRlKTtcclxuXHJcbiAgICBzZXR1c2VyX2luZm8odGVzdFN0YXRlLnVzZXJfaW5mbyk7XHJcbiAgICBzZXRNYW5kb2JlX2luZm8odGVzdFN0YXRlLk1hbmRvYmVfaW5mbyk7XHJcblxyXG4gICAgc2V0dXNlcl9zZW50X2NvdWJvbnModGVzdFN0YXRlLnVzZXJfc2VudF9jb3Vib25zKTtcclxuICAgIHNldHVzZXJfdXNlZF9jb3Vib25zKHRlc3RTdGF0ZS51c2VyX3VzZWRfY291Ym9ucyk7XHJcbiAgICBzZXRBbHVzZXJfb3Zlcl9jb3Vib25zbCh0ZXN0U3RhdGUuQWx1c2VyX292ZXJfY291Ym9uc2wpO1xyXG5cclxuICAgIGxldCBUaGVZZWFyID0gdGVzdFN0YXRlLnRoZVllYXI7XHJcbiAgICBzZXRzdGF0QWxsKHRlc3RTdGF0ZS5BbGwpO1xyXG4gICAgbGV0IG1vbnRocyA9IFRoZVllYXIubW9udGhzO1xyXG5cclxuICAgIHNldFBpZUNhcnREYXRhTnVtYmVycyh7XHJcbiAgICAgIGxhYmVsczogW1wi2KfZhNmF2LHYs9mE2KlcIiwgXCLYp9mE2YXYs9iq2K7Yr9mF2KlcIiwgXCLYp9mE2YXZhtiq2YfZitipIFwiXSxcclxuICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICAgIFRoZVllYXIuc2VudFRvdGFsQ291bnQsXHJcbiAgICAgICAgICAgIFRoZVllYXIudXNlZFRvdGFsQ291bnQsXHJcbiAgICAgICAgICAgIFRoZVllYXIub3ZlclRvdGFsQ291bnQsXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXCIjRkY2Mzg0XCIsIFwiIzM2QTJFQlwiLCBcIiNGRkNFNTZcIl0sXHJcbiAgICAgICAgICBob3ZlckJhY2tncm91bmRDb2xvcjogW1wiI0ZGNjM4NFwiLCBcIiMzNkEyRUJcIiwgXCIjRkZDRTU2XCJdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBzZXRQaWVDYXJ0RGF0YU1vbmV5KHtcclxuICAgICAgbGFiZWxzOiBbXCLYp9mE2YXYsdiz2YTYqVwiLCBcItin2YTZhdiz2KrYrtiv2YXYqVwiLCBcItin2YTZhdmG2KrZh9mK2KkgXCJdLFxyXG4gICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGRhdGE6IFtUaGVZZWFyLnNlbnRUb3RhbCwgVGhlWWVhci51c2VkVG90YWwsIFRoZVllYXIub3ZlclRvdGFsXSxcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW1wiI0ZGNjM4NFwiLCBcIiMzNkEyRUJcIiwgXCIjRkZDRTU2XCJdLFxyXG4gICAgICAgICAgaG92ZXJCYWNrZ3JvdW5kQ29sb3I6IFtcIiNGRjYzODRcIiwgXCIjMzZBMkVCXCIsIFwiI0ZGQ0U1NlwiXSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSk7XHJcbiAgICBzZXRCYXJDaGFydERhdGFOdW1iZXJzKHtcclxuICAgICAgbGFiZWxzOiBbXHJcbiAgICAgICAgXCLZitmG2KfZitixXCIsXHJcbiAgICAgICAgXCLZgdio2LHYp9mK2LFcIixcclxuICAgICAgICBcItmF2KfYsdizXCIsXHJcbiAgICAgICAgXCLYo9io2LHZitmEXCIsXHJcbiAgICAgICAgXCLZhdin2YrZiFwiLFxyXG4gICAgICAgIFwi2YrZiNmG2YrZiFwiLFxyXG4gICAgICAgIFwi2YrZiNmE2YrZiFwiLFxyXG4gICAgICAgIFwi2KPYutiz2LfYs1wiLFxyXG4gICAgICAgIFwi2LPYqNiq2YXYqNixXCIsXHJcbiAgICAgICAgXCLYo9mD2KrZiNio2LFcIixcclxuICAgICAgICBcItmG2YjZgdmF2KjYsVwiLFxyXG4gICAgICAgIFwi2K/Zitiz2YXYqNixXCIsXHJcbiAgICAgIF0sXHJcbiAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwi2KfZhNmD2YjYqNmI2YbYp9iqINin2YTZhdi12LHZiNmB2Kkg2KfZhNiz2YbYqSDYp9mE2K3Yp9mE2YrYqVwiLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM0MkE1RjVcIixcclxuICAgICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgICAgbW9udGhzLkphbnVhcnlUb3RhbENvdW50LFxyXG4gICAgICAgICAgICBtb250aHMuRmVicnVhcnlUb3RhbENvdW50LFxyXG4gICAgICAgICAgICBtb250aHMuTWFyY2hUb3RhbENvdW50LFxyXG4gICAgICAgICAgICBtb250aHMuQXByaWxUb3RhbENvdW50LFxyXG4gICAgICAgICAgICBtb250aHMuTWF5VG90YWxDb3VudCxcclxuICAgICAgICAgICAgbW9udGhzLkp1bmVUb3RhbENvdW50LFxyXG4gICAgICAgICAgICBtb250aHMuSnVseVRvdGFsQ291bnQsXHJcbiAgICAgICAgICAgIG1vbnRocy5BdWd1c3RUb3RhbENvdW50LFxyXG4gICAgICAgICAgICBtb250aHMuU2VwdGVtYmVyVG90YWxDb3VudCxcclxuICAgICAgICAgICAgbW9udGhzLk9jdG9iZXJUb3RhbENvdW50LFxyXG4gICAgICAgICAgICBtb250aHMuTm92ZW1iZXJUb3RhbENvdW50LFxyXG4gICAgICAgICAgICBtb250aHMuRGVjZW1iZXJUb3RhbENvdW50LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSk7XHJcblxyXG4gICAgc2V0QmFyQ2hhcnREYXRhTW9uZXkoe1xyXG4gICAgICBsYWJlbHM6IFtcclxuICAgICAgICBcItmK2YbYp9mK2LFcIixcclxuICAgICAgICBcItmB2KjYsdin2YrYsVwiLFxyXG4gICAgICAgIFwi2YXYp9ix2LNcIixcclxuICAgICAgICBcItij2KjYsdmK2YRcIixcclxuICAgICAgICBcItmF2KfZitmIXCIsXHJcbiAgICAgICAgXCLZitmI2YbZitmIXCIsXHJcbiAgICAgICAgXCLZitmI2YTZitmIXCIsXHJcbiAgICAgICAgXCLYo9i62LPYt9izXCIsXHJcbiAgICAgICAgXCLYs9io2KrZhdio2LFcIixcclxuICAgICAgICBcItij2YPYqtmI2KjYsVwiLFxyXG4gICAgICAgIFwi2YbZiNmB2YXYqNixXCIsXHJcbiAgICAgICAgXCLYr9mK2LPZhdio2LFcIixcclxuICAgICAgXSxcclxuICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogXCLYp9mE2YPZiNio2YjZhtin2Kog2KfZhNmF2LXYsdmI2YHYqSDYp9mE2LPZhtipINin2YTYrdin2YTZitipXCIsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzQyQTVGNVwiLFxyXG4gICAgICAgICAgZGF0YTogW1xyXG4gICAgICAgICAgICBtb250aHMuSmFudWFyeVRvdGFsLFxyXG4gICAgICAgICAgICBtb250aHMuRmVicnVhcnlUb3RhbCxcclxuICAgICAgICAgICAgbW9udGhzLk1hcmNoVG90YWwsXHJcbiAgICAgICAgICAgIG1vbnRocy5BcHJpbFRvdGFsLFxyXG4gICAgICAgICAgICBtb250aHMuTWF5VG90YWwsXHJcbiAgICAgICAgICAgIG1vbnRocy5KdW5lVG90YWwsXHJcbiAgICAgICAgICAgIG1vbnRocy5KdWx5VG90YWwsXHJcbiAgICAgICAgICAgIG1vbnRocy5BdWd1c3RUb3RhbCxcclxuICAgICAgICAgICAgbW9udGhzLlNlcHRlbWJlclRvdGFsLFxyXG4gICAgICAgICAgICBtb250aHMuT2N0b2JlclRvdGFsLFxyXG4gICAgICAgICAgICBtb250aHMuTm92ZW1iZXJUb3RhbCxcclxuICAgICAgICAgICAgbW9udGhzLkRlY2VtYmVyVG90YWwsXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9KTtcclxuICAgIHNldG5ld1N0YXRlKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICBjb25zdCB7IGRhdGEsIGlzTG9hZGluZywgaXNFcnJvciB9ID0gR2V0Q0NBcygpO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdHMgPSBpc0xvYWRpbmcgPyBmYWxzZSA6IGRhdGEuZGF0YTtcclxuICAgICovXHJcbiAgY29uc3QgW3Byb2plY3QsIHNldFByb2plY3RdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtjaG9vc2UsIHNldENob29zZV0gPSB1c2VTdGF0ZShcImNhdGVnb3J5XCIpO1xyXG4gIGNvbnN0IFtjYXRlZ29yeSwgc2V0Q2F0ZWdvcnldID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NvbXBhbnksIHNldENvbXBhbnldID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2JyYW5jaCwgc2V0QnJhbmNoXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwb29sLCBzZXRwb29sXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY291Ym9uTmFtZSwgc2V0Y291Ym9uTmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcG9vbF90b3RhbCwgc2V0cG9vbF90b3RhbF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgZnVuY3Rpb24gVXBkYXRlUG9vbChhbW91bnQsIHNlY3Rpb24sIHNjb3Vib25OYW1lKSB7XHJcbiAgICBzZXRwb29sKHNlY3Rpb24pO1xyXG4gICAgc2V0Y291Ym9uTmFtZShzY291Ym9uTmFtZSk7XHJcbiAgICBzZXRwb29sX3RvdGFsKGFtb3VudCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB1cGRhdGVzZXRzdGVwKHRoZXMpIHtcclxuICAgIHNldFN0ZXAodGhlcyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBteUVkaXRVc2VyKHRoZVNlbGVjdGVkVXNlcikge1xyXG4gICAgY29uc29sZS5sb2codGhlU2VsZWN0ZWRVc2VyKTtcclxuICAgIHNldFRoZVVzZXIodGhlU2VsZWN0ZWRVc2VyKTtcclxuICAgIHNldFN0ZXAoMik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBvcmRlcigpIHtcclxuICAgIGlmIChyZXF1ZXN0ID09IFwiZmlyc3RUaW1lXCIpIHtcclxuICAgICAgc2V0cmVxdWVzdChcImN1c3RvbVwiKTtcclxuICAgIH1cclxuICAgIHNldFJzTmFtZShcImZhbHNlXCIpO1xyXG4gICAgc2V0UnNQaG9uZShcImZhbHNlXCIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZmlsdGVyKCkge1xyXG4gICAgaWYgKHJlcXVlc3QgPT0gXCJmaXJzdFRpbWVcIikge1xyXG4gICAgICBzZXRyZXF1ZXN0KFwiY3VzdG9tXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFJzTmFtZShcImZhbHNlXCIpO1xyXG4gICAgc2V0UnNQaG9uZShcImZhbHNlXCIpO1xyXG4gICAgc2V0U2NpdHkoVGhlU2VsZWN0ZWRDaXR5KTtcclxuICAgIHNldFNhZXJhKFRoZVNlbGVjdGVkYWVyYSk7XHJcbiAgICBzZXRTY2F0KFRoZVNlbGVjdGVkY2F0ZWdvcnkpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcGhvbmVTKCkge1xyXG4gICAgaWYgKHJlcXVlc3QgPT0gXCJmaXJzdFRpbWVcIikge1xyXG4gICAgICBzZXRyZXF1ZXN0KFwiY3VzdG9tXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFJzTmFtZShcImZhbHNlXCIpO1xyXG4gICAgc2V0UnNQaG9uZShTc2VhcmNoUGhvbmUpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gTmFtZVMoKSB7XHJcbiAgICBpZiAocmVxdWVzdCA9PSBcImZpcnN0VGltZVwiKSB7XHJcbiAgICAgIHNldHJlcXVlc3QoXCJjdXN0b21cIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UnNOYW1lKFNzZWFyY2hOYW1lKTtcclxuICAgIHNldFJzUGhvbmUoXCJmYWxzZVwiKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHVwZGF0ZUFycmF5YWxsKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJoZXJlXCIpO1xyXG4gICAgdXBkYXRlTGlzdCh1c2Vycyk7XHJcbiAgICBzZXRhbGxvd2VkKHRydWUpO1xyXG4gICAgJC5lYWNoKCQoXCJpbnB1dFtuYW1lPSdzcG9ydCddXCIpLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQodGhpcykucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHVwZGF0ZUFycmF5KGRhdGEpIHtcclxuICAgIGxldCBmYXZvcml0ZSA9IGxpc3Q7XHJcbiAgICBmYXZvcml0ZS5wdXNoKGRhdGEpO1xyXG5cclxuICAgIHVwZGF0ZUxpc3QoZmF2b3JpdGUpO1xyXG4gICAgc2V0YWxsb3dlZCh0cnVlKTtcclxuXHJcbiAgICAvLyAgc2V0UGVyc29uTmVlZHMoKFBlcnNvbk5lZWRzKSA9PiBQZXJzb25OZWVkcy5jb25jYXQoZGF0YSkpO1xyXG4gICAgLy8gc2V0UGVyc29uTmVlZHMoKFBlcnNvbk5lZWRzKSA9PiBbLi4uUGVyc29uTmVlZHMsIGRhdGFdKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gcmVtb3ZlVXNlcmFsbCgpIHtcclxuICAgIHVwZGF0ZUxpc3QoW10pO1xyXG4gICAgc2V0YWxsb3dlZChmYWxzZSk7XHJcbiAgICAkLmVhY2goJChcImlucHV0W25hbWU9J3Nwb3J0J11cIiksIGZ1bmN0aW9uICgpIHtcclxuICAgICAgJCh0aGlzKS5wcm9wKFwiY2hlY2tlZFwiLCBmYWxzZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG9wdGlvbnMgPSBbXHJcbiAgICB7IG5hbWU6IFwiU3dlZGlzaFwiLCB2YWx1ZTogXCJzdlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRW5nbGlzaFwiLCB2YWx1ZTogXCJlblwiIH0sXHJcbiAgICB7XHJcbiAgICAgIHR5cGU6IFwiZ3JvdXBcIixcclxuICAgICAgbmFtZTogXCJHcm91cCBuYW1lXCIsXHJcbiAgICAgIGl0ZW1zOiBbeyBuYW1lOiBcIlNwYW5pc2hcIiwgdmFsdWU6IFwiZXNcIiB9XSxcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgW3N0ZXAsIHNldFN0ZXBdID0gdXNlU3RhdGUoMSk7XHJcblxyXG4gIGxldCBzdGVwMiA9IHN0ZXA7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG10LTRcIj5cclxuICAgICAge1VzZXJTdGF0aXN0aWNzcmVzdWx0cyA/IChcclxuICAgICAgICB1c2VyX2luZm8ubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmbG9hdDogXCJyaWdodFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc2V0Q2hvb3NlKFwiY29tcGFueVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXR1c2VySW5mb01vZGUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4taWNvbiBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ0bi1pbm5lci0taWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYXJyb3ctcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIwLjhlbVwiLCBkaXNwbGF5OiBcImlubGluZVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICDYp9mE2LnZiNiv2Kkg2KfZhNmJINin2YTYrtmE2YFcclxuICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNsZWFyOiBcImJvdGhcIiB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhsLTEyIGNvbC1tZC0xMlwiIHN0eWxlPXt7IGhlaWdodDogXCI1MHB4XCIgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxoMz7Yp9iz2YUg2KfZhNmF2LPYqtmB2YrYrzwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTNcIj57dXNlcl9pbmZvWzBdLk5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTNcIj5cclxuICAgICAgICAgICAgICAgICAgPGgzPtix2YLZhSDYp9mE2KzZiNin2YQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTNcIj57dXNlcl9pbmZvWzBdLnBob25lfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aDM+2KPYrtixINmD2YjYqNmI2YY8L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTNcIj5cclxuICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICB7dXNlcl9pbmZvWzBdLmxhc3RDb3Vib24gPT0gXCIwMDAwLTAwLTAwXCJcclxuICAgICAgICAgICAgICAgICAgICA/IFwi2YTZhSDZitiz2KrZhNmFXCJcclxuICAgICAgICAgICAgICAgICAgICA6IHVzZXJfaW5mb1swXS5sYXN0Q291Ym9ufVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTNcIj5cclxuICAgICAgICAgICAgICAgICAgPGgzPtin2YTZhdi12LHZiNmBPC9oMz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zXCI+e3VzZXJfaW5mb1swXS50b3RhbENvdWJvbnN9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMz7Yp9mE2KPZiNmE2YjZitipPC9oMz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAge3VzZXJfaW5mb1swXS5wcmlvcml0eSA9PSBcIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcIti52KfZitiv2YpcIlxyXG4gICAgICAgICAgICAgICAgICAgIDogdXNlcl9pbmZvWzBdLnByaW9yaXR5ID09IFwiY3JpdGljYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgID8gXCLYrdix2KzYqVwiXHJcbiAgICAgICAgICAgICAgICAgICAgOiB1c2VyX2luZm9bMF0ucHJpb3JpdHkgPT0gXCJzdXBlckNyaXRpY2FsXCJcclxuICAgICAgICAgICAgICAgICAgICA/IFwi2K3Ysdis2Kkg2KzYr9inXCJcclxuICAgICAgICAgICAgICAgICAgICA6IHVzZXJfaW5mb1swXS5wcmlvcml0eX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aDM+2LnYr9ivINin2YTYo9mB2LHYp9ivPC9oMz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zXCI+e3VzZXJfaW5mb1swXS5tZW1wZXJzQ291bnR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMz7Yp9mE2YXZhtiv2YjYqDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7TWFuZG9iZV9pbmZvXHJcbiAgICAgICAgICAgICAgICAgICAgPyBNYW5kb2JlX2luZm8ubGVuZ3RoID4gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBNYW5kb2JlX2luZm9bMF0uTWFuZG9iZU5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgIDogXCLZhNmFINmK2KrZhSDYqti52YrZhiDZhdmG2K/ZiNioXCJcclxuICAgICAgICAgICAgICAgICAgICA6IFwi2YTZhSDZitiq2YUg2KrYudmK2YYg2YXZhtiv2YjYqFwifVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTNcIj5cclxuICAgICAgICAgICAgICAgICAgPGgzPtin2YTYrdi12Kk8L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTNcIj57dXNlcl9pbmZvWzBdLnNoYXJlfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aDM+2KfZhNi52YbZiNin2YY8L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTNcIj57dXNlcl9pbmZvWzBdLmFkZHJlc3N9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PtmI2LXZgSDYp9mE2K3Yp9mE2Kk8L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+e3VzZXJfaW5mb1swXS5kZXN9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGhyIC8+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGNhcmQtc3RhdHNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcInRvcFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjc2cHhcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWcvaWNvbnMvbWFuLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI3MHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNzBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgZGlzcGxheTogXCJibG9ja1wiIH19Pnt1c2VyX2luZm9bMF0ubWFufTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZGlzcGxheTogXCJibG9ja1wiIH19Ptix2KzYp9mEPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogXCJ0b3BcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI3NnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1nL2ljb25zL3dvbWFuLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI3MHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNzBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgZGlzcGxheTogXCJibG9ja1wiIH19Pnt1c2VyX2luZm9bMF0ud29tZW59PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBkaXNwbGF5OiBcImJsb2NrXCIgfX0+2YbYs9in2KE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcInRvcFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjc2cHhcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWcvaWNvbnMvZW1wdHkucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjcwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI3MHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBkaXNwbGF5OiBcImJsb2NrXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dXNlcl9pbmZvWzBdLnlvdW5nX21lbn1cclxuICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGRpc3BsYXk6IFwiYmxvY2tcIiB9fT7YtNio2KfYqDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246IFwidG9wXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNzZweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltZy9pY29ucy9lbXB0eS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNzBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjcwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IGRpc3BsYXk6IFwiYmxvY2tcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIHt1c2VyX2luZm9bMF0ueW91bmdfd29tZW59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBkaXNwbGF5OiBcImJsb2NrXCIgfX0+2LTYp9io2KfYqjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246IFwidG9wXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNzZweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltZy9pY29ucy9ib3kucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjcwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI3MHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBkaXNwbGF5OiBcImJsb2NrXCIgfX0+e3VzZXJfaW5mb1swXS5ib3l9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBkaXNwbGF5OiBcImJsb2NrXCIgfX0+2KPZiNmE2KfYrzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246IFwidG9wXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNzZweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltZy9pY29ucy9naXJsLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI3MHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNzBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgZGlzcGxheTogXCJibG9ja1wiIH19Pnt1c2VyX2luZm9bMF0uZ2lybH08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGRpc3BsYXk6IFwiYmxvY2tcIiB9fT7YqNmG2KfYqjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246IFwidG9wXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNzZweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltZy9pY29ucy9lbXB0eS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNzBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjcwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IGRpc3BsYXk6IFwiYmxvY2tcIiB9fT57dXNlcl9pbmZvWzBdLndpZG93fTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZGlzcGxheTogXCJibG9ja1wiIH19Ptij2LHYp9mF2YQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcInRvcFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjc2cHhcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWcvaWNvbnMvZW1wdHkucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjcwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI3MHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBkaXNwbGF5OiBcImJsb2NrXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dXNlcl9pbmZvWzBdLm9ycGhhbl9ib3l9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBkaXNwbGF5OiBcImJsb2NrXCIgfX0+2KPZiNmE2KfYryDYo9mK2KrYp9mFIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246IFwidG9wXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNzZweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltZy9pY29ucy9lbXB0eS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNzBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjcwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IGRpc3BsYXk6IFwiYmxvY2tcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIHt1c2VyX2luZm9bMF0ub3JwaGFuX2dpcmx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBkaXNwbGF5OiBcImJsb2NrXCIgfX0+2KjZhtin2Kog2KPZitiq2KfZhSA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcInRvcFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjc2cHhcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWcvaWNvbnMvYmFieS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNzBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjcwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IGRpc3BsYXk6IFwiYmxvY2tcIiB9fT57dXNlcl9pbmZvWzBdLmluZmFudH08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGRpc3BsYXk6IFwiYmxvY2tcIiB9fT7Yt9mB2YQg2LHYttmK2LkgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogXCJ0b3BcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI3NnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1nL2ljb25zL3doZWVsLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI3MHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNzBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgZGlzcGxheTogXCJibG9ja1wiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAge3VzZXJfaW5mb1swXS5TcGVjaWFsX25lZWRzfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZGlzcGxheTogXCJibG9ja1wiIH19Ptin2K3YqtmK2KfYrNin2Kog2K7Yp9i12KkgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogXCJ0b3BcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI3NnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1nL2ljb25zL29sZC1tYW4ucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjcwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI3MHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBkaXNwbGF5OiBcImJsb2NrXCIgfX0+e3VzZXJfaW5mb1swXS5vbGRfbWFufTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZGlzcGxheTogXCJibG9ja1wiIH19Ptix2KzZhCDZhdiz2YYgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogXCJ0b3BcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI3NnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1nL2ljb25zL29sZC13b21hbi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNzBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjcwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IGRpc3BsYXk6IFwiYmxvY2tcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIHt1c2VyX2luZm9bMF0ub2xkX3dvbWVufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZGlzcGxheTogXCJibG9ja1wiIH19Ptin2YXYsdij2Kkg2YXYs9mG2KkgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAge1VzZXJTdGF0aXN0aWNzcmVzdWx0cyA/IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiIGRpcj1cInJ0bFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteGwtMTIgY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19Ptin2YTYpdit2LXYp9ih2KfYqjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhsLTYgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2FyZCBjYXJkLXN0YXRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzhiYzM0YWE2XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cImNhcmQtdGl0bGUgdGV4dC11cHBlcmNhc2UgdGV4dC1tdXRlZCBtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDYp9mE2YPZiNio2YjZhtin2Kog2KfZhNmF2LPYqtiu2K/ZhdipXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImgyICBmb250LXdlaWdodC1ib2xkIG1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0QWxsLnVzZWRUb3RhbENvdW50QWxsfSDZg9mI2KjZiNmGXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJncmVlblwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImgzIGZvbnQtd2VpZ2h0LWJvbGQgbWItMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRBbGwudXNlZFRvdGFsQWxsfSDYsS7Ys1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpY29uIGljb24tc2hhcGUgYmctZ3JhZGllbnQtaW5mbyB0ZXh0LXdoaXRlIHJvdW5kZWQtY2lyY2xlIHNoYWRvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJuaSBuaS1jaGFydC1iYXItMzJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhsLTYgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2FyZCBjYXJkLXN0YXRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImhzbCgxODdkZWcgMTAwJSA0MiUgLyAzNiUpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cImNhcmQtdGl0bGUgdGV4dC11cHBlcmNhc2UgdGV4dC1tdXRlZCBtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDYp9mE2YPZiNio2YjZhtin2Kog2KfZhNmF2LHYs9mE2KlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaDIgIGZvbnQtd2VpZ2h0LWJvbGQgbWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRBbGwuc2VudFRvdGFsQ291bnRBbGx9INmD2YjYqNmI2YZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcImdyZWVuXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaDMgZm9udC13ZWlnaHQtYm9sZCBtYi0wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdEFsbC5zZW50VG90YWxBbGx9INixLtizXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImljb24gaWNvbi1zaGFwZSBiZy1ncmFkaWVudC1pbmZvIHRleHQtd2hpdGUgcm91bmRlZC1jaXJjbGUgc2hhZG93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIm5pIG5pLWNoYXJ0LWJhci0zMlwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteGwtNiBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjYXJkIGNhcmQtc3RhdHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiaHNsKDE4N2RlZyAxMDAlIDQyJSAvIDM2JSlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwiY2FyZC10aXRsZSB0ZXh0LXVwcGVyY2FzZSB0ZXh0LW11dGVkIG1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINin2YTZg9mI2KjZiNmG2KfYqiDYp9mE2YXZhtiq2YfZitipXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImgyICBmb250LXdlaWdodC1ib2xkIG1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0QWxsLm92ZXJUb3RhbENvdW50QWxsfSDZg9mI2KjZiNmGXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJncmVlblwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImgzIGZvbnQtd2VpZ2h0LWJvbGQgbWItMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRBbGwub3ZlclRvdGFsQWxsfSDYsS7Ys1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpY29uIGljb24tc2hhcGUgYmctZ3JhZGllbnQtaW5mbyB0ZXh0LXdoaXRlIHJvdW5kZWQtY2lyY2xlIHNoYWRvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJuaSBuaS1jaGFydC1iYXItMzJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14bC02IGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNhcmQgY2FyZC1zdGF0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJoc2woMTg3ZGVnIDEwMCUgNDIlIC8gMzYlKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJjYXJkLXRpdGxlIHRleHQtdXBwZXJjYXNlIHRleHQtbXV0ZWQgbWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg2YXYrNmF2YjYuSDYp9mE2YPZiNio2YjZhtin2KpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaDIgIGZvbnQtd2VpZ2h0LWJvbGQgbWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRBbGwudXNlZFRvdGFsQ291bnRBbGwgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0QWxsLnNlbnRUb3RhbENvdW50QWxsICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdEFsbC5vdmVyVG90YWxDb3VudEFsbH17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDZg9mI2KjZiNmGXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJncmVlblwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImgzIGZvbnQtd2VpZ2h0LWJvbGQgbWItMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRBbGwudXNlZFRvdGFsQWxsICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdEFsbC5zZW50VG90YWxBbGwgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0QWxsLm92ZXJUb3RhbEFsbH17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDYsS7Ys1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpY29uIGljb24tc2hhcGUgYmctZ3JhZGllbnQtaW5mbyB0ZXh0LXdoaXRlIHJvdW5kZWQtY2lyY2xlIHNoYWRvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJuaSBuaS1jaGFydC1iYXItMzJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14bC0xMiBjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5ICByb3VuZGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDZg9mI2KjZiNmG2KfYqiDYp9mE2LPZhtipINin2YTYrdin2YTZitipXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiBkaXI9XCJydGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14bC02IGNvbC1tZC02IGNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdi13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJuYXYgbmF2LXBpbGxzIG5hdi1maWxsIGZsZXgtY29sdW1uIGZsZXgtbWQtcm93XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0YWJzLWljb25zLXRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwidGFibGlzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibmF2LWxpbmsgbWItc20tMyBtYi1tZC0wIGFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRhYnMtaWNvbnMtdGV4dC0xLXRhYlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRhYlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI3RhYnMtaWNvbnMtdGV4dC0xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJ0YWJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cInRhYnMtaWNvbnMtdGV4dC0xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtc2VsZWN0ZWQ9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIm5pIG5pLWNsb3VkLXVwbG9hZC05NiBtci0yXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg2KfZhNmD2YXZitipXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm5hdi1saW5rIG1iLXNtLTMgbWItbWQtMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRhYnMtaWNvbnMtdGV4dC0yLXRhYlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRhYlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI3RhYnMtaWNvbnMtdGV4dC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJ0YWJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cInRhYnMtaWNvbnMtdGV4dC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtc2VsZWN0ZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJuaSBuaS1iZWxsLTU1IG1yLTJcIj48L2k+INin2YTZgtmK2YXYqVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg2KjYp9mE2LHZitin2YRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYi1jb250ZW50XCIgaWQ9XCJteVRhYkNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRhYi1wYW5lIGZhZGUgc2hvdyBhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0YWJzLWljb25zLXRleHQtMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwidGFicGFuZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwidGFicy1pY29ucy10ZXh0LTEtdGFiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hhcnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e0JhckNoYXJ0RGF0YU51bWJlcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGFiLXBhbmUgZmFkZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRhYnMtaWNvbnMtdGV4dC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJ0YWJwYW5lbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJ0YWJzLWljb25zLXRleHQtMi10YWJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGFydCB0eXBlPVwiYmFyXCIgZGF0YT17QmFyQ2hhcnREYXRhTW9uZXl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhsLTYgY29sLW1kLTYgY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm5hdiBuYXYtcGlsbHMgbmF2LWZpbGwgZmxleC1jb2x1bW4gZmxleC1tZC1yb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRhYnMtaWNvbnMtdGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJ0YWJsaXN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJuYXYtbGluayBtYi1zbS0zIG1iLW1kLTAgYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidGFicy1pY29ucy10ZXh0LTQtdGFiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidGFiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjdGFicy1pY29ucy10ZXh0LTRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cInRhYlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwidGFicy1pY29ucy10ZXh0LTRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1zZWxlY3RlZD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwibmkgbmktY2xvdWQtdXBsb2FkLTk2IG1yLTJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDYp9mE2YPZhdmK2KlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibmF2LWxpbmsgbWItc20tMyBtYi1tZC0wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidGFicy1pY29ucy10ZXh0LTMtdGFiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidGFiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjdGFicy1pY29ucy10ZXh0LTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cInRhYlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwidGFicy1pY29ucy10ZXh0LTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1zZWxlY3RlZD1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIm5pIG5pLWJlbGwtNTUgbXItMlwiPjwvaT4g2KfZhNmC2YrZhdipXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDYqNin2YTYsdmK2KfZhFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiLWNvbnRlbnRcIiBpZD1cIm15VGFiQ29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGFiLXBhbmUgZmFkZSBzaG93IGFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRhYnMtaWNvbnMtdGV4dC00XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJ0YWJwYW5lbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJ0YWJzLWljb25zLXRleHQtNC10YWJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGFydFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZG91Z2hudXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtQaWVDYXJ0RGF0YU51bWJlcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGFiLXBhbmUgZmFkZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRhYnMtaWNvbnMtdGV4dC0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJ0YWJwYW5lbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJ0YWJzLWljb25zLXRleHQtMy10YWJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGFydFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZG91Z2hudXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtQaWVDYXJ0RGF0YU1vbmV5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8Lz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiBkaXI9XCJydGxcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICB7LyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdi13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDx1bFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibmF2IG5hdi1waWxscyBuYXYtZmlsbCBmbGV4LWNvbHVtbiBmbGV4LW1kLXJvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ4eFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcm9sZT1cInRhYmxpc3RcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibmF2LWxpbmsgbWItc20tMyBtYi1tZC0wIGFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwieHgtMS10YWJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRhYlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjeHgtMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJ0YWJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwieHgtMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtc2VsZWN0ZWQ9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJuaSBuaS1jbG91ZC11cGxvYWQtOTYgbXItMlwiPjwvaT7Yp9mE2YPZiNio2YjZhtin2KpcclxuICAgICAgICAgICAgICAgICAgICAgICAg2KfZhNmB2LnYp9mE2KlcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm5hdi1saW5rIG1iLXNtLTMgbWItbWQtMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwieHgtMi10YWJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRhYlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjeHgtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJ0YWJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwieHgtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtc2VsZWN0ZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwibmkgbmktYmVsbC01NSBtci0yXCI+PC9pPtin2YTZg9mI2KjZiNmG2KfYqiDYp9mE2YXYs9iq2K7Yr9mF2KlcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm5hdi1saW5rIG1iLXNtLTMgbWItbWQtMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwieHgtMy10YWJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRhYlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjeHgtM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJ0YWJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwieHgtM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtc2VsZWN0ZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwibmkgbmktY2FsZW5kYXItZ3JpZC01OCBtci0yXCI+PC9pPtin2YTZg9mI2KjZiNmG2KfYqlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDYp9mE2YXZhtiq2YfZitipXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgc2hhZG93XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiLWNvbnRlbnRcIiBpZD1cIm15VGFiQ29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRhYi1wYW5lIGZhZGUgc2hvdyBhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInh4LTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwidGFicGFuZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJ4eC0xLXRhYlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcj1cInJ0bFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFibGUgYWxpZ24taXRlbXMtY2VudGVyIHRhYmxlLWZsdXNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB0ZXh0QWxpZ246IFwicmlnaHRcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT1cInRoZWFkLWxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGRhdGEtc29ydD1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDYp9mE2KXYs9mFXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBkYXRhLXNvcnQ9XCJzdGF0dXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDYp9mE2YbZiNi5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBkYXRhLXNvcnQ9XCJjb21wbGV0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg2KfZhNmC2YrZhdipXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBkYXRhLXNvcnQ9XCJjb21wbGV0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg2YXYsdiz2YRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgZGF0YS1zb3J0PVwiY29tcGxldGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINmK2YbYqtmH2YpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgZGF0YS1zb3J0PVwiY29tcGxldGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINit2KfZhNipINin2YTYpdix2LPYp9mEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cImxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyX3NlbnRfY291Ym9ucy5tYXAoKGNvdWJvbiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGQxID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGQyID0gbmV3IERhdGUoY291Ym9uLkFzc2lnbmVkX2F0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlbnRDaGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZDEuZ2V0VGltZSgpIDwgZDIuZ2V0VGltZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VudENoZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3Vib24udHlwZSA9PSBcIm9uZV9jb2RlXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57Y291Ym9uLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbHNwYW49XCIyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD7Zg9mI2K8g2YXZhti12KfYqiAo2KXYs9iq2K7Yr9in2YUg2YXYsdipINmI2KfYrdiv2KkpPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdWJvbi5Bc3NpZ25lZF9hdH17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cIjFcIiBjbGFzc05hbWU9XCJuYW1lXCI+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZW50Q2hlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcImdyZWVuXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDZhdix2LPZhFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogXCJvcmFuZ2VcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINi62YrYsSDZhdix2LPZhFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IGNvdWJvbi50eXBlID09IFwiYWxsX2NvZGVcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYigxOTQgMjI0IDE2MClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2NvdWJvbi5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+2YPZiNivINmF2YbYtdin2KogPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291Ym9uLkFzc2lnbmVkX2F0fXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiMVwiIGNsYXNzTmFtZT1cIm5hbWVcIj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbnRDaGUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwiZ3JlZW5cIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINmF2LHYs9mEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcIm9yYW5nZVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg2LrZitixINmF2LHYs9mEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiPntjb3Vib24ubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3Vib24udHlwZSA9PSBcImNhc2hcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZSBiYWRnZS1waWxsIGJhZGdlLWxnIGJhZGdlLXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImF2YXRhciBhdmF0YXItc20gcm91bmRlZC1jaXJjbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWcvaWNvbnMvY2FzaC5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI0MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IGNvdWJvbi50eXBlID09IFwiYmFza2V0XCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtcGlsbCBiYWRnZS1sZyBiYWRnZS1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhdmF0YXIgYXZhdGFyLXNtIHJvdW5kZWQtY2lyY2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1nL2ljb25zL2Jhc2tldC5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI0MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IGNvdWJvbi50eXBlID09IFwiZGlzY291bnRcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZSBiYWRnZS1waWxsIGJhZGdlLWxnIGJhZGdlLXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImF2YXRhciBhdmF0YXItc20gcm91bmRlZC1jaXJjbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWcvaWNvbnMvZGlzY291bnQuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjQwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdWJvbi50eXBlID09IFwiY2FzaFwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIj57Y291Ym9uLnZhbHVlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBjb3Vib24udHlwZSA9PSBcImJhc2tldFwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIj57Y291Ym9uLnZhbHVlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBjb3Vib24udHlwZSA9PSBcImRpc2NvdW50XCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiPntjb3Vib24udmFsdWV9JTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291Ym9uLkFzc2lnbmVkX2F0fXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIj57Y291Ym9uLkVuZHNfQXR9IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbnRDaGUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwiZ3JlZW5cIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINmF2LHYs9mEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcIm9yYW5nZVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg2LrZitixINmF2LHYs9mEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRhYi1wYW5lIGZhZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInh4LTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwidGFicGFuZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJ4eC0yLXRhYlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcj1cInJ0bFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFibGUgYWxpZ24taXRlbXMtY2VudGVyIHRhYmxlLWZsdXNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB0ZXh0QWxpZ246IFwicmlnaHRcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT1cInRoZWFkLWxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGRhdGEtc29ydD1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDYp9mE2KXYs9mFXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBkYXRhLXNvcnQ9XCJzdGF0dXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDYp9mE2YbZiNi5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBkYXRhLXNvcnQ9XCJjb21wbGV0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg2KfZhNmC2YrZhdipXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBkYXRhLXNvcnQ9XCJjb21wbGV0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg2YXYsdiz2YRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgZGF0YS1zb3J0PVwiY29tcGxldGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINmK2YbYqtmH2YpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHkgY2xhc3NOYW1lPVwibGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJfdXNlZF9jb3Vib25zLm1hcCgoY291Ym9uLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZDEgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZDIgPSBuZXcgRGF0ZShjb3Vib24uQXNzaWduZWRfYXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VudENoZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkMS5nZXRUaW1lKCkgPCBkMi5nZXRUaW1lKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW50Q2hlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdWJvbi50eXBlID09IFwib25lX2NvZGVcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntjb3Vib24ubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cIjJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPtmD2YjYryDZhdmG2LXYp9iqICjYpdiz2KrYrtiv2KfZhSDZhdix2Kkg2YjYp9it2K/YqSk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291Ym9uLkFzc2lnbmVkX2F0fXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiMVwiIGNsYXNzTmFtZT1cIm5hbWVcIj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IGNvdWJvbi50eXBlID09IFwiYWxsX2NvZGVcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYigxOTQgMjI0IDE2MClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2NvdWJvbi5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+2YPZiNivINmF2YbYtdin2KogPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291Ym9uLkFzc2lnbmVkX2F0fXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiMVwiIGNsYXNzTmFtZT1cIm5hbWVcIj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIj57Y291Ym9uLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291Ym9uLnR5cGUgPT0gXCJjYXNoXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtcGlsbCBiYWRnZS1sZyBiYWRnZS1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhdmF0YXIgYXZhdGFyLXNtIHJvdW5kZWQtY2lyY2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1nL2ljb25zL2Nhc2guanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjQwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBjb3Vib24udHlwZSA9PSBcImJhc2tldFwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLXBpbGwgYmFkZ2UtbGcgYmFkZ2Utc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXZhdGFyIGF2YXRhci1zbSByb3VuZGVkLWNpcmNsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltZy9pY29ucy9iYXNrZXQuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjQwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBjb3Vib24udHlwZSA9PSBcImRpc2NvdW50XCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtcGlsbCBiYWRnZS1sZyBiYWRnZS1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhdmF0YXIgYXZhdGFyLXNtIHJvdW5kZWQtY2lyY2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1nL2ljb25zL2Rpc2NvdW50LmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI0MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjQwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3Vib24udHlwZSA9PSBcImNhc2hcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiXCI+e2NvdWJvbi52YWx1ZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogY291Ym9uLnR5cGUgPT0gXCJiYXNrZXRcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiXCI+e2NvdWJvbi52YWx1ZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogY291Ym9uLnR5cGUgPT0gXCJkaXNjb3VudFwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIj57Y291Ym9uLnZhbHVlfSU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdWJvbi5Bc3NpZ25lZF9hdH17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiXCI+e2NvdWJvbi5FbmRzX0F0fSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGFiLXBhbmUgZmFkZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwieHgtM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJ0YWJwYW5lbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cInh4LTMtdGFiXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyPVwicnRsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YWJsZSBhbGlnbi1pdGVtcy1jZW50ZXIgdGFibGUtZmx1c2hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRleHRBbGlnbjogXCJyaWdodFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPVwidGhlYWQtbGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgZGF0YS1zb3J0PVwibmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINin2YTYpdiz2YVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGRhdGEtc29ydD1cInN0YXR1c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINin2YTZhtmI2LlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGRhdGEtc29ydD1cImNvbXBsZXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDYp9mE2YLZitmF2KlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGRhdGEtc29ydD1cImNvbXBsZXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDZhdix2LPZhFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBkYXRhLXNvcnQ9XCJjb21wbGV0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg2YrZhtiq2YfZilxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keSBjbGFzc05hbWU9XCJsaXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7QWx1c2VyX292ZXJfY291Ym9uc2wubWFwKChjb3Vib24sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkMSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkMiA9IG5ldyBEYXRlKGNvdWJvbi5Bc3NpZ25lZF9hdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZW50Q2hlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQxLmdldFRpbWUoKSA8IGQyLmdldFRpbWUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbnRDaGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291Ym9uLnR5cGUgPT0gXCJvbmVfY29kZVwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2NvdWJvbi5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+2YPZiNivINmF2YbYtdin2KogKNil2LPYqtiu2K/Yp9mFINmF2LHYqSDZiNin2K3Yr9ipKTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3Vib24uQXNzaWduZWRfYXR9e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbHNwYW49XCIxXCIgY2xhc3NOYW1lPVwibmFtZVwiPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogY291Ym9uLnR5cGUgPT0gXCJhbGxfY29kZVwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDE5NCAyMjQgMTYwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57Y291Ym9uLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbHNwYW49XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD7Zg9mI2K8g2YXZhti12KfYqiA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3Vib24uQXNzaWduZWRfYXR9e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbHNwYW49XCIxXCIgY2xhc3NOYW1lPVwibmFtZVwiPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiPntjb3Vib24ubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3Vib24udHlwZSA9PSBcImNhc2hcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZSBiYWRnZS1waWxsIGJhZGdlLWxnIGJhZGdlLXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImF2YXRhciBhdmF0YXItc20gcm91bmRlZC1jaXJjbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWcvaWNvbnMvY2FzaC5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI0MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IGNvdWJvbi50eXBlID09IFwiYmFza2V0XCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtcGlsbCBiYWRnZS1sZyBiYWRnZS1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhdmF0YXIgYXZhdGFyLXNtIHJvdW5kZWQtY2lyY2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1nL2ljb25zL2Jhc2tldC5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI0MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IGNvdWJvbi50eXBlID09IFwiZGlzY291bnRcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZSBiYWRnZS1waWxsIGJhZGdlLWxnIGJhZGdlLXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImF2YXRhciBhdmF0YXItc20gcm91bmRlZC1jaXJjbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWcvaWNvbnMvZGlzY291bnQuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjQwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdWJvbi50eXBlID09IFwiY2FzaFwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIj57Y291Ym9uLnZhbHVlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBjb3Vib24udHlwZSA9PSBcImJhc2tldFwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIj57Y291Ym9uLnZhbHVlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBjb3Vib24udHlwZSA9PSBcImRpc2NvdW50XCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiPntjb3Vib24udmFsdWV9JTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291Ym9uLkFzc2lnbmVkX2F0fXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIj57Y291Ym9uLkVuZHNfQXR9IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi99XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIFwiXCJcclxuICAgICAgICApXHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgXCJcIlxyXG4gICAgICApfVxyXG4gICAgICB7c2hvd1NrZWxldG9uMiA/IDxTa2VsZXRvbiBoZWlnaHQ9ezIwMH0gY291bnQ9ezEwfSAvPiA6IFwiXCJ9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VySW5mbztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIFBlcnNvbk5lZWRzKHsgZGF0YSwgdXBkYXRlQXJyYXksIHJlbW92ZVVzZXIsIFVzZXJNZXRhIH0pIHtcclxuICBjb25zdCBbc3RhdGUsIHNldHN0YXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBVc2VyTmVlZHMgPSBVc2VyTWV0YS5kYXRhLm5lZWRzO1xyXG4gICAgbGV0IHRlbXBzID0gZmFsc2U7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IFVzZXJOZWVkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoVXNlck5lZWRzW2ldLkNhdGVnb3J5X2lkID09IGRhdGEuaWQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm9uZWNcIik7XHJcbiAgICAgICAgLy8gIHRlbXBzID0gdHJ1ZTtcclxuICAgICAgICBzZXRzdGF0ZSh0cnVlKTtcclxuICAgICAgICAvL1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICAvKmlmICh0ZW1wcykge1xyXG4gICAgc2V0c3RhdGUodHJ1ZSk7XHJcbiAgfSovXHJcbiAgcmV0dXJuIChcclxuICAgIDx0cj5cclxuICAgICAgPHRoIHNjb3BlPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYSBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYW1lIG1iLTAgdGV4dC1zbVwiPntkYXRhLm5hbWV9IDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3RoPlxyXG4gICAgICA8dGQgY2xhc3NOYW1lPVwiYnVkZ2V0XCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibWVzc2FnZUNoZWNrYm94XCJcclxuICAgICAgICAgIG5hbWU9XCJzcG9ydFwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgc2V0c3RhdGUoIXN0YXRlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLZgdit2LUg2KfZhNiq2LTZitmK2YMg2YXYs9iq2K7Yr9mFXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZSk7XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZSkge1xyXG4gICAgICAgICAgICAgIHJlbW92ZVVzZXIoZGF0YS5pZCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdXBkYXRlQXJyYXkoZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICB2YWx1ZT17ZGF0YS5pZH1cclxuICAgICAgICAgIGNoZWNrZWQ9e3N0YXRlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvdGQ+XHJcbiAgICA8L3RyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBlcnNvbk5lZWRzO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJwcm9kdWN0LWVkaXRhYmxlLWltYWdlXCI6IFwiZWRpdGFibGUtaW1hZ2VfcHJvZHVjdC1lZGl0YWJsZS1pbWFnZV9fMVF0cVBcIixcblx0XCJwcm9kdWN0LWltYWdlXCI6IFwiZWRpdGFibGUtaW1hZ2VfcHJvZHVjdC1pbWFnZV9fMmoycGRcIixcblx0XCJwcm9kdWN0LWltZy1jb250YWluZXJcIjogXCJlZGl0YWJsZS1pbWFnZV9wcm9kdWN0LWltZy1jb250YWluZXJfXzNhNjAyXCIsXG5cdFwicmVtb3ZlLWltYWdlXCI6IFwiZWRpdGFibGUtaW1hZ2VfcmVtb3ZlLWltYWdlX18yYjVyRVwiLFxuXHRcImltYWdlLWxvYWRpbmdcIjogXCJlZGl0YWJsZS1pbWFnZV9pbWFnZS1sb2FkaW5nX18zeWRoalwiLFxuXHRcImxvYWRpbmdGYWRlSW5cIjogXCJlZGl0YWJsZS1pbWFnZV9sb2FkaW5nRmFkZUluX18yd1VMbFwiLFxuXHRcImltYWdlLXVwbG9hZGVkXCI6IFwiZWRpdGFibGUtaW1hZ2VfaW1hZ2UtdXBsb2FkZWRfXzFFRm5jXCIsXG5cdFwiaW1hZ2VVcGxvYWRlZFwiOiBcImVkaXRhYmxlLWltYWdlX2ltYWdlVXBsb2FkZWRfXzJpZncyXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XHJcbmltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG4vL2FwaSBoZXJlIGlzIGFuIGF4aW9zIGluc3RhbmNlXHJcbmltcG9ydCBhcGkgZnJvbSBcIi4uL3NlcnZpY2VzL0FwaVwiO1xyXG5cclxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3RvZ2dsZXIsIHNldHRvZ2dsZXJdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBsb2FkVXNlckZyb21Db29raWVzKCkge1xyXG4gICAgICBsZXQgZGF0YSA9IGZhbHNlO1xyXG4gICAgICBjb25zdCB0b2tlbiA9IENvb2tpZXMuZ2V0KFwidG9rZW5cIik7XHJcbiAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiR290IGEgdG9rZW4gaW4gdGhlIGNvb2tpZXMsIGxldCdzIHNlZSBpZiBpdCBpcyB2YWxpZFwiKTtcclxuICAgICAgICBhcGkuZGVmYXVsdHMuaGVhZGVycy5BdXRob3JpemF0aW9uID0gYEJlYXJlciAke3Rva2VufWA7XHJcbiAgICAgICAgYXdhaXQgYXBpXHJcbiAgICAgICAgICAucG9zdChcImp3dC1hdXRoL3YxL3Rva2VuL3ZhbGlkYXRlXCIpXHJcbiAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGRhdGEgPSByZXM7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgQ29va2llcy5yZW1vdmUoXCJ0b2tlblwiKTtcclxuICAgICAgICAgICAgQ29va2llcy5yZW1vdmUoXCJ1c2VyX25pY2VuYW1lXCIpO1xyXG4gICAgICAgICAgICBDb29raWVzLnJlbW92ZShcInVzZXJfZW1haWxcIik7XHJcbiAgICAgICAgICAgIENvb2tpZXMucmVtb3ZlKFwiVXNlclR5cGVcIik7XHJcbiAgICAgICAgICAgIENvb2tpZXMucmVtb3ZlKFwiQnJhY25oQ29kZVwiKTtcclxuICAgICAgICAgICAgQ29va2llcy5yZW1vdmUoXCJDb21wYW55Q29kZVwiKTtcclxuICAgICAgICAgICAgQ29va2llcy5yZW1vdmUoXCJwcm9maWxlX3BpY1wiKTtcclxuICAgICAgICAgICAgQ29va2llcy5yZW1vdmUoXCJmaXJzdF9uYW1lXCIpO1xyXG4gICAgICAgICAgICBDb29raWVzLnJlbW92ZShcImxhc3RfbmFtZVwiKTtcclxuXHJcbiAgICAgICAgICAgIGFwaS5kZWZhdWx0cy5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSBgYDtcclxuXHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL01hbmFnZW1lbnRcIik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAvLyAgY29uc3QgeyBkYXRhOiBkYXRhIH0gPSBhd2FpdCBhcGkucG9zdChcImp3dC1hdXRoL3YxL3Rva2VuL3ZhbGlkYXRlXCIpO1xyXG4gICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIm9sZCB0b2tlbiBpcyB2YWxpZFwiKTtcclxuICAgICAgICAgIHNldFVzZXIoe1xyXG4gICAgICAgICAgICB1c2VyX25pY2VuYW1lOiBDb29raWVzLmdldChcInVzZXJfbmljZW5hbWVcIiksXHJcbiAgICAgICAgICAgIHVzZXJfZW1haWw6IENvb2tpZXMuZ2V0KFwidXNlcl9lbWFpbFwiKSxcclxuICAgICAgICAgICAgVXNlclR5cGU6IENvb2tpZXMuZ2V0KFwiVXNlclR5cGVcIiksXHJcbiAgICAgICAgICAgIENvbXBhbnlDb2RlOiBDb29raWVzLmdldChcIkNvbXBhbnlDb2RlXCIpLFxyXG4gICAgICAgICAgICBCcmFjbmhDb2RlOiBDb29raWVzLmdldChcIkJyYWNuaENvZGVcIiksXHJcbiAgICAgICAgICAgIHByb2ZpbGVfcGljOiBDb29raWVzLmdldChcInByb2ZpbGVfcGljXCIpLFxyXG4gICAgICAgICAgICBmaXJzdF9uYW1lOiBDb29raWVzLmdldChcImZpcnN0X25hbWVcIiksXHJcbiAgICAgICAgICAgIGxhc3RfbmFtZTogQ29va2llcy5nZXQoXCJsYXN0X25hbWVcIiksXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICAgIGxvYWRVc2VyRnJvbUNvb2tpZXMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IFNlbmRjb25kID0gYXN5bmMgKHBob25lKSA9PiB7XHJcbiAgICBsZXQgdGVtcHJlcyA9IGF3YWl0IGFwaS5nZXQoXCJyYWJ3YS9nZXRVc2VyQ29kZT9waG9uZT1cIiArIHBob25lLCB7fSk7XHJcblxyXG4gICAgcmV0dXJuIHRlbXByZXM7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcGhvbmVMb2dpbiA9IGFzeW5jIChwaG9uZSwgY29kZSkgPT4ge1xyXG4gICAgY29uc3QgeyBkYXRhOiBkYXRhIH0gPSBhd2FpdCBhcGkuZ2V0KFxyXG4gICAgICBcInJhYndhL3NpbmdVc2VySU4/cGhvbmU9XCIgKyBwaG9uZSArIFwiJmNvZGU9XCIgKyBjb2RlLFxyXG4gICAgICB7fVxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiR290IG5ldyB0b2tlblwiICsgZGF0YS50b2tlbik7XHJcbiAgICAgIENvb2tpZXMuc2V0KFwidG9rZW5cIiwgZGF0YS50b2tlbiwgeyBleHBpcmVzOiA2MCB9KTtcclxuICAgICAgQ29va2llcy5zZXQoXCJ1c2VyX25pY2VuYW1lXCIsIGRhdGEudXNlcl9uaWNlbmFtZSwgeyBleHBpcmVzOiA2MCB9KTtcclxuICAgICAgQ29va2llcy5zZXQoXCJ1c2VyX2VtYWlsXCIsIGRhdGEudXNlcl9lbWFpbCwgeyBleHBpcmVzOiA2MCB9KTtcclxuICAgICAgQ29va2llcy5zZXQoXCJVc2VyVHlwZVwiLCBkYXRhLlVzZXJUeXBlLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG4gICAgICBDb29raWVzLnNldChcIkJyYWNuaENvZGVcIiwgZGF0YS5CcmFjbmhDb2RlLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG4gICAgICBDb29raWVzLnNldChcIkNvbXBhbnlDb2RlXCIsIGRhdGEuQ29tcGFueUNvZGUsIHsgZXhwaXJlczogNjAgfSk7XHJcbiAgICAgIENvb2tpZXMuc2V0KFwicHJvZmlsZV9waWNcIiwgZGF0YS5wcm9maWxlX3BpYywgeyBleHBpcmVzOiA2MCB9KTtcclxuICAgICAgQ29va2llcy5zZXQoXCJmaXJzdF9uYW1lXCIsIGRhdGEuZmlyc3RfbmFtZSwgeyBleHBpcmVzOiA2MCB9KTtcclxuICAgICAgQ29va2llcy5zZXQoXCJsYXN0X25hbWVcIiwgZGF0YS5sYXN0X25hbWUsIHsgZXhwaXJlczogNjAgfSk7XHJcblxyXG4gICAgICBhcGkuZGVmYXVsdHMuaGVhZGVycy5BdXRob3JpemF0aW9uID0gYEJlYXJlciAke2RhdGEudG9rZW59YDtcclxuXHJcbiAgICAgIHNldFVzZXIoe1xyXG4gICAgICAgIHVzZXJfbmljZW5hbWU6IGRhdGEudXNlcl9uaWNlbmFtZSxcclxuICAgICAgICB1c2VyX2VtYWlsOiBkYXRhLnVzZXJfZW1haWwsXHJcbiAgICAgICAgVXNlclR5cGU6IGRhdGEuVXNlclR5cGUsXHJcbiAgICAgICAgQ29tcGFueUNvZGU6IGRhdGEuQ29tcGFueUNvZGUsXHJcbiAgICAgICAgQnJhY25oQ29kZTogZGF0YS5CcmFjbmhDb2RlLFxyXG4gICAgICAgIHByb2ZpbGVfcGljOiBkYXRhLnByb2ZpbGVfcGljLFxyXG4gICAgICAgIGZpcnN0X25hbWU6IGRhdGEuZmlyc3RfbmFtZSxcclxuICAgICAgICBsYXN0X25hbWU6IGRhdGEubGFzdF9uYW1lLFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2coXCJHb3QgdXNlclwiLCB1c2VyKTtcclxuICAgICAgaWYgKGRhdGEuVXNlclR5cGUgPT0gXCJDb21wYW55XCIpIHtcclxuICAgICAgICBSb3V0ZXIucHVzaChcIi9Db21wYW55U3RhdGlzdGljc1wiKTtcclxuICAgICAgICAvL3JldHVybiBcIkNvbXBhbnlcIjtcclxuICAgICAgfSBlbHNlIGlmIChkYXRhLlVzZXJUeXBlID09IFwibWFuZG9iZVwiKSB7XHJcbiAgICAgICAgLy8gcmV0dXJuIFwiQ29tcGFueVwiO1xyXG4gICAgICAgIFJvdXRlci5wdXNoKFwiL015VXNlcnNcIik7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9naW4gPSBhc3luYyAodXNlcm5hbWUsIHBhc3N3b3JkKSA9PiB7XHJcbiAgICBjb25zdCB7IGRhdGE6IGRhdGEgfSA9IGF3YWl0IGFwaS5wb3N0KFwiand0LWF1dGgvdjEvdG9rZW5cIiwge1xyXG4gICAgICB1c2VybmFtZSxcclxuICAgICAgcGFzc3dvcmQsXHJcbiAgICB9KTtcclxuICAgIGlmIChkYXRhKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coXCJHb3QgbmV3IHRva2VuXCIgKyBkYXRhLnRva2VuKTtcclxuICAgICAgQ29va2llcy5zZXQoXCJ0b2tlblwiLCBkYXRhLnRva2VuLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG4gICAgICBDb29raWVzLnNldChcInVzZXJfbmljZW5hbWVcIiwgZGF0YS51c2VyX25pY2VuYW1lLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG4gICAgICBDb29raWVzLnNldChcInVzZXJfZW1haWxcIiwgZGF0YS51c2VyX2VtYWlsLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG4gICAgICBDb29raWVzLnNldChcIlVzZXJUeXBlXCIsIGRhdGEuVXNlclR5cGUsIHsgZXhwaXJlczogNjAgfSk7XHJcbiAgICAgIENvb2tpZXMuc2V0KFwiQnJhY25oQ29kZVwiLCBkYXRhLkJyYWNuaENvZGUsIHsgZXhwaXJlczogNjAgfSk7XHJcbiAgICAgIENvb2tpZXMuc2V0KFwiQ29tcGFueUNvZGVcIiwgZGF0YS5Db21wYW55Q29kZSwgeyBleHBpcmVzOiA2MCB9KTtcclxuICAgICAgQ29va2llcy5zZXQoXCJwcm9maWxlX3BpY1wiLCBkYXRhLnByb2ZpbGVfcGljLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG4gICAgICBDb29raWVzLnNldChcImZpcnN0X25hbWVcIiwgZGF0YS5maXJzdF9uYW1lLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG4gICAgICBDb29raWVzLnNldChcImxhc3RfbmFtZVwiLCBkYXRhLmxhc3RfbmFtZSwgeyBleHBpcmVzOiA2MCB9KTtcclxuXHJcbiAgICAgIGFwaS5kZWZhdWx0cy5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSBgQmVhcmVyICR7ZGF0YS50b2tlbn1gO1xyXG5cclxuICAgICAgc2V0VXNlcih7XHJcbiAgICAgICAgdXNlcl9uaWNlbmFtZTogZGF0YS51c2VyX25pY2VuYW1lLFxyXG4gICAgICAgIHVzZXJfZW1haWw6IGRhdGEudXNlcl9lbWFpbCxcclxuICAgICAgICBVc2VyVHlwZTogZGF0YS5Vc2VyVHlwZSxcclxuICAgICAgICBDb21wYW55Q29kZTogZGF0YS5Db21wYW55Q29kZSxcclxuICAgICAgICBCcmFjbmhDb2RlOiBkYXRhLkJyYWNuaENvZGUsXHJcbiAgICAgICAgcHJvZmlsZV9waWM6IGRhdGEucHJvZmlsZV9waWMsXHJcbiAgICAgICAgZmlyc3RfbmFtZTogZGF0YS5maXJzdF9uYW1lLFxyXG4gICAgICAgIGxhc3RfbmFtZTogZGF0YS5sYXN0X25hbWUsXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkdvdCB1c2VyXCIsIHVzZXIpO1xyXG5cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgQ29va2llcy5yZW1vdmUoXCJ0b2tlblwiKTtcclxuICAgIENvb2tpZXMucmVtb3ZlKFwidXNlcl9uaWNlbmFtZVwiKTtcclxuICAgIENvb2tpZXMucmVtb3ZlKFwidXNlcl9lbWFpbFwiKTtcclxuICAgIENvb2tpZXMucmVtb3ZlKFwiVXNlclR5cGVcIik7XHJcbiAgICBDb29raWVzLnJlbW92ZShcIkJyYWNuaENvZGVcIik7XHJcbiAgICBDb29raWVzLnJlbW92ZShcIkNvbXBhbnlDb2RlXCIpO1xyXG4gICAgQ29va2llcy5yZW1vdmUoXCJwcm9maWxlX3BpY1wiKTtcclxuICAgIENvb2tpZXMucmVtb3ZlKFwiZmlyc3RfbmFtZVwiKTtcclxuICAgIENvb2tpZXMucmVtb3ZlKFwibGFzdF9uYW1lXCIpO1xyXG5cclxuICAgIGFwaS5kZWZhdWx0cy5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSBgYDtcclxuXHJcbiAgICBzZXRVc2VyKG51bGwpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6ICEhdXNlcixcclxuICAgICAgICB1c2VyLFxyXG4gICAgICAgIGxvZ2luLFxyXG4gICAgICAgIGxvZ291dCxcclxuICAgICAgICBTZW5kY29uZCxcclxuICAgICAgICBwaG9uZUxvZ2luLFxyXG4gICAgICAgIGxvYWRpbmcsXHJcbiAgICAgICAgbG9nb3V0LFxyXG4gICAgICAgIHRvZ2dsZXIsXHJcbiAgICAgICAgc2V0dG9nZ2xlcixcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQXV0aCgpIHtcclxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcblxyXG4gIHJldHVybiBjb250ZXh0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUHJvdGVjdFJvdXRlKENvbXBvbmVudCkge1xyXG4gIHJldHVybiAoKSA9PiB7XHJcbiAgICBjb25zdCB7IHVzZXIsIGlzQXV0aGVudGljYXRlZCwgbG9hZGluZyB9ID0gdXNlQXV0aCgpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgaWYgKCFpc0F1dGhlbnRpY2F0ZWQgJiYgIWxvYWRpbmcpIHtcclxuICAgICAgICBSb3V0ZXIucHVzaChcIi9NYW5hZ2VtZW50XCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKGlzQXV0aGVudGljYXRlZCkge1xyXG4gICAgICAgIGlmICh1c2VyLlVzZXJUeXBlICE9IFwiYWRtaW5cIikgUm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICB9XHJcbiAgICB9LCBbbG9hZGluZywgaXNBdXRoZW50aWNhdGVkXSk7XHJcblxyXG4gICAgcmV0dXJuIDxDb21wb25lbnQgey4uLmFyZ3VtZW50c30gLz47XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFByb3RlY3RSb3V0ZUNvbXBhbnkoQ29tcG9uZW50KSB7XHJcbiAgcmV0dXJuICgpID0+IHtcclxuICAgIGNvbnN0IHsgdXNlciwgaXNBdXRoZW50aWNhdGVkLCBsb2FkaW5nIH0gPSB1c2VBdXRoKCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBpZiAoIWlzQXV0aGVudGljYXRlZCAmJiAhbG9hZGluZykge1xyXG4gICAgICAgIFJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKGlzQXV0aGVudGljYXRlZCkge1xyXG4gICAgICAgIGlmICh1c2VyLlVzZXJUeXBlICE9IFwiQ29tcGFueVwiKSBSb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgIH1cclxuICAgIH0sIFtsb2FkaW5nLCBpc0F1dGhlbnRpY2F0ZWRdKTtcclxuXHJcbiAgICByZXR1cm4gPENvbXBvbmVudCB7Li4uYXJndW1lbnRzfSAvPjtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUHJvdGVjdFJvdXRlTWFuZG9iZShDb21wb25lbnQpIHtcclxuICByZXR1cm4gKCkgPT4ge1xyXG4gICAgY29uc3QgeyB1c2VyLCBpc0F1dGhlbnRpY2F0ZWQsIGxvYWRpbmcgfSA9IHVzZUF1dGgoKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGlmICghaXNBdXRoZW50aWNhdGVkICYmICFsb2FkaW5nKSB7XHJcbiAgICAgICAgUm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgICAgIH0gZWxzZSBpZiAoaXNBdXRoZW50aWNhdGVkKSB7XHJcbiAgICAgICAgaWYgKHVzZXIuVXNlclR5cGUgIT0gXCJtYW5kb2JlXCIpIFJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgfVxyXG4gICAgfSwgW2xvYWRpbmcsIGlzQXV0aGVudGljYXRlZF0pO1xyXG5cclxuICAgIHJldHVybiA8Q29tcG9uZW50IHsuLi5hcmd1bWVudHN9IC8+O1xyXG4gIH07XHJcbn1cclxuIiwiZGVjbGFyZSBjb25zdCBfX05FWFRfREFUQV9fOiBhbnlcblxuaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHBhcnNlLCByZXNvbHZlLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQcmVmZXRjaE9wdGlvbnMgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7XG4gIGV4ZWNPbmNlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyBhZGRCYXNlUGF0aCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuXG5mdW5jdGlvbiBpc0xvY2FsKGhyZWY6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBjb25zdCB1cmwgPSBwYXJzZShocmVmLCBmYWxzZSwgdHJ1ZSlcbiAgY29uc3Qgb3JpZ2luID0gcGFyc2UoZ2V0TG9jYXRpb25PcmlnaW4oKSwgZmFsc2UsIHRydWUpXG5cbiAgcmV0dXJuIChcbiAgICAhdXJsLmhvc3QgfHwgKHVybC5wcm90b2NvbCA9PT0gb3JpZ2luLnByb3RvY29sICYmIHVybC5ob3N0ID09PSBvcmlnaW4uaG9zdClcbiAgKVxufVxuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBGb3JtYXRSZXN1bHQgPSB7IGhyZWY6IHN0cmluZzsgYXM/OiBzdHJpbmcgfVxuXG5mdW5jdGlvbiBtZW1vaXplZEZvcm1hdFVybChmb3JtYXRGdW5jOiAoaHJlZjogVXJsLCBhcz86IFVybCkgPT4gRm9ybWF0UmVzdWx0KSB7XG4gIGxldCBsYXN0SHJlZjogbnVsbCB8IFVybCA9IG51bGxcbiAgbGV0IGxhc3RBczogdW5kZWZpbmVkIHwgbnVsbCB8IFVybCA9IG51bGxcbiAgbGV0IGxhc3RSZXN1bHQ6IG51bGwgfCBGb3JtYXRSZXN1bHQgPSBudWxsXG4gIHJldHVybiAoaHJlZjogVXJsLCBhcz86IFVybCkgPT4ge1xuICAgIGlmIChsYXN0UmVzdWx0ICYmIGhyZWYgPT09IGxhc3RIcmVmICYmIGFzID09PSBsYXN0QXMpIHtcbiAgICAgIHJldHVybiBsYXN0UmVzdWx0XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gZm9ybWF0RnVuYyhocmVmLCBhcylcbiAgICBsYXN0SHJlZiA9IGhyZWZcbiAgICBsYXN0QXMgPSBhc1xuICAgIGxhc3RSZXN1bHQgPSByZXN1bHRcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0VXJsKHVybDogVXJsKTogc3RyaW5nIHtcbiAgcmV0dXJuIHVybCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCkgOiB1cmxcbn1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG5cbmxldCBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChvYnNlcnZlcikge1xuICAgIHJldHVybiBvYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmNsYXNzIExpbmsgZXh0ZW5kcyBDb21wb25lbnQ8TGlua1Byb3BzPiB7XG4gIHA6IGJvb2xlYW5cblxuICBjb25zdHJ1Y3Rvcihwcm9wczogTGlua1Byb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChwcm9wcy5wcmVmZXRjaCkge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuICB9XG5cbiAgY2xlYW5VcExpc3RlbmVycyA9ICgpID0+IHt9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzKClcbiAgfVxuXG4gIGdldFBhdGhzKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgICBjb25zdCB7IGhyZWY6IHBhcnNlZEhyZWYsIGFzOiBwYXJzZWRBcyB9ID0gdGhpcy5mb3JtYXRVcmxzKFxuICAgICAgdGhpcy5wcm9wcy5ocmVmLFxuICAgICAgdGhpcy5wcm9wcy5hc1xuICAgIClcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlKHBhdGhuYW1lLCBwYXJzZWRIcmVmKVxuICAgIHJldHVybiBbcmVzb2x2ZWRIcmVmLCBwYXJzZWRBcyA/IHJlc29sdmUocGF0aG5hbWUsIHBhcnNlZEFzKSA6IHJlc29sdmVkSHJlZl1cbiAgfVxuXG4gIGhhbmRsZVJlZihyZWY6IEVsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wICYmIEludGVyc2VjdGlvbk9ic2VydmVyICYmIHJlZiAmJiByZWYudGFnTmFtZSkge1xuICAgICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzKClcblxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID1cbiAgICAgICAgcHJlZmV0Y2hlZFtcbiAgICAgICAgICB0aGlzLmdldFBhdGhzKCkuam9pbihcbiAgICAgICAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICAgICAgICAnJSdcbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycyA9IGxpc3RlblRvSW50ZXJzZWN0aW9ucyhyZWYsICgpID0+IHtcbiAgICAgICAgICB0aGlzLnByZWZldGNoKClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBUaGUgZnVuY3Rpb24gaXMgbWVtb2l6ZWQgc28gdGhhdCBubyBleHRyYSBsaWZlY3ljbGVzIGFyZSBuZWVkZWRcbiAgLy8gYXMgcGVyIGh0dHBzOi8vcmVhY3Rqcy5vcmcvYmxvZy8yMDE4LzA2LzA3L3lvdS1wcm9iYWJseS1kb250LW5lZWQtZGVyaXZlZC1zdGF0ZS5odG1sXG4gIGZvcm1hdFVybHMgPSBtZW1vaXplZEZvcm1hdFVybCgoaHJlZiwgYXNIcmVmKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IGFkZEJhc2VQYXRoKGZvcm1hdFVybChocmVmKSksXG4gICAgICBhczogYXNIcmVmID8gYWRkQmFzZVBhdGgoZm9ybWF0VXJsKGFzSHJlZikpIDogYXNIcmVmLFxuICAgIH1cbiAgfSlcblxuICBsaW5rQ2xpY2tlZCA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3QgeyBub2RlTmFtZSwgdGFyZ2V0IH0gPSBlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgICBpZiAoXG4gICAgICBub2RlTmFtZSA9PT0gJ0EnICYmXG4gICAgICAoKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgICAgIGUubWV0YUtleSB8fFxuICAgICAgICBlLmN0cmxLZXkgfHxcbiAgICAgICAgZS5zaGlmdEtleSB8fFxuICAgICAgICAoZS5uYXRpdmVFdmVudCAmJiBlLm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKSlcbiAgICApIHtcbiAgICAgIC8vIGlnbm9yZSBjbGljayBmb3IgbmV3IHRhYiAvIG5ldyB3aW5kb3cgYmVoYXZpb3JcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCB7IGhyZWYsIGFzIH0gPSB0aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLCB0aGlzLnByb3BzLmFzKVxuXG4gICAgaWYgKCFpc0xvY2FsKGhyZWYpKSB7XG4gICAgICAvLyBpZ25vcmUgY2xpY2sgaWYgaXQncyBvdXRzaWRlIG91ciBzY29wZSAoZS5nLiBodHRwczovL2dvb2dsZS5jb20pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgICBocmVmID0gcmVzb2x2ZShwYXRobmFtZSwgaHJlZilcbiAgICBhcyA9IGFzID8gcmVzb2x2ZShwYXRobmFtZSwgYXMpIDogaHJlZlxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgICBsZXQgeyBzY3JvbGwgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgICB9XG5cbiAgICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgICBSb3V0ZXJbdGhpcy5wcm9wcy5yZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgICAgc2hhbGxvdzogdGhpcy5wcm9wcy5zaGFsbG93LFxuICAgIH0pLnRoZW4oKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcHJlZmV0Y2gob3B0aW9ucz86IFByZWZldGNoT3B0aW9ucyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wIHx8IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gICAgY29uc3QgcGF0aHMgPSB0aGlzLmdldFBhdGhzKClcbiAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gICAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gICAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gICAgUm91dGVyLnByZWZldGNoKHBhdGhzWy8qIGhyZWYgKi8gMF0sIHBhdGhzWy8qIGFzUGF0aCAqLyAxXSwgb3B0aW9ucykuY2F0Y2goXG4gICAgICAoZXJyKSA9PiB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgICAgIHRocm93IGVyclxuICAgICAgICB9XG4gICAgICB9XG4gICAgKVxuICAgIHByZWZldGNoZWRbXG4gICAgICBwYXRocy5qb2luKFxuICAgICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgICAnJSdcbiAgICAgIClcbiAgICBdID0gdHJ1ZVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBocmVmLCBhcyB9ID0gdGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZiwgdGhpcy5wcm9wcy5hcylcbiAgICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICAgIH1cblxuICAgIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICAgIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICAgIGNvbnN0IHByb3BzOiB7XG4gICAgICBvbk1vdXNlRW50ZXI6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgICAgaHJlZj86IHN0cmluZ1xuICAgICAgcmVmPzogYW55XG4gICAgfSA9IHtcbiAgICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5oYW5kbGVSZWYoZWwpXG5cbiAgICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uTW91c2VFbnRlcjogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByZWZldGNoKHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICAgIH0sXG4gICAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICB0aGlzLmxpbmtDbGlja2VkKGUpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfVxuXG4gICAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gICAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gICAgaWYgKFxuICAgICAgdGhpcy5wcm9wcy5wYXNzSHJlZiB8fFxuICAgICAgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpXG4gICAgKSB7XG4gICAgICBwcm9wcy5ocmVmID0gYXMgfHwgaHJlZlxuICAgIH1cblxuICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICBpZiAoXG4gICAgICAgIHByb3BzLmhyZWYgJiZcbiAgICAgICAgdHlwZW9mIF9fTkVYVF9EQVRBX18gIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydFxuICAgICAgKSB7XG4gICAgICAgIHByb3BzLmhyZWYgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChwcm9wcy5ocmVmKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHByb3BzKVxuICB9XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICBjb25zdCB3YXJuID0gZXhlY09uY2UoY29uc29sZS5lcnJvcilcblxuICAvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbiAgY29uc3QgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpXG4gIGNvbnN0IGV4YWN0ID0gcmVxdWlyZSgncHJvcC10eXBlcy1leGFjdCcpXG4gIC8vIEB0cy1pZ25vcmUgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgd2hlbiBkZWNsYXJpbmcgaXQgb24gdGhlIGNsYXNzIGl0IG91dHB1dHMgYW4gZXh0cmEgYml0IG9mIGNvZGUgd2hpY2ggaXMgbm90IG5lZWRlZC5cbiAgTGluay5wcm9wVHlwZXMgPSBleGFjdCh7XG4gICAgaHJlZjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWQsXG4gICAgYXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgICBwcmVmZXRjaDogUHJvcFR5cGVzLmJvb2wsXG4gICAgcmVwbGFjZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hhbGxvdzogUHJvcFR5cGVzLmJvb2wsXG4gICAgcGFzc0hyZWY6IFByb3BUeXBlcy5ib29sLFxuICAgIHNjcm9sbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAocHJvcHM6IGFueSwgcHJvcE5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHByb3BzW3Byb3BOYW1lXVxuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgIGBXYXJuaW5nOiBZb3UncmUgdXNpbmcgYSBzdHJpbmcgZGlyZWN0bHkgaW5zaWRlIDxMaW5rPi4gVGhpcyB1c2FnZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgYWRkIGFuIDxhPiB0YWcgYXMgY2hpbGQgb2YgPExpbms+YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9LFxuICAgIF0pLmlzUmVxdWlyZWQsXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKHt9LCBfcm91dGVyW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHBhcnNlLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpICE9PSAwID8gYmFzZVBhdGggKyBwYXRoIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgPT09IDBcbiAgICA/IHBhdGguc3Vic3RyKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG4gICAgOiBwYXRoXG59XG5cbmZ1bmN0aW9uIHRvUm91dGUocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLydcbn1cblxuY29uc3QgcHJlcGFyZVJvdXRlID0gKHBhdGg6IHN0cmluZykgPT5cbiAgdG9Sb3V0ZSghcGF0aCB8fCBwYXRoID09PSAnLycgPyAnL2luZGV4JyA6IHBhdGgpXG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbnR5cGUgQ29tcG9uZW50UmVzID0geyBwYWdlOiBDb21wb25lbnRUeXBlOyBtb2Q6IGFueSB9XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG50eXBlIFJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogYW55XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFJvdXRlSW5mbywgQXBwPzogQ29tcG9uZW50VHlwZSkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IGFueSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5IHwgbnVsbCxcbiAgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4sXG4gIGNiPzogKC4uLmFyZ3M6IGFueSkgPT4gYW55XG4pIHtcbiAgbGV0IGF0dGVtcHRzID0gaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMVxuICBmdW5jdGlvbiBnZXRSZXNwb25zZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBmZXRjaChcbiAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKFxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgX19ORVhUX0RBVEFfX1xuICAgICAgICAgIGAvX25leHQvZGF0YS8ke19fTkVYVF9EQVRBX18uYnVpbGRJZH0ke2RlbEJhc2VQYXRoKHBhdGhuYW1lKX0uanNvbmBcbiAgICAgICAgKSxcbiAgICAgICAgcXVlcnksXG4gICAgICB9KSxcbiAgICAgIHtcbiAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICB9XG4gICAgKS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgIGlmICgtLWF0dGVtcHRzID4gMCAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIGNiID8gY2IoZGF0YSkgOiBkYXRhXG4gICAgfSlcbiAgICAuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgIC8vIGxvb3AuXG4gICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgIDsoZXJyIGFzIGFueSkuY29kZSA9ICdQQUdFX0xPQURfRVJST1InXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQ29tcG9uZW50VHlwZVxuICAgICAgd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0geyBDb21wb25lbnQ6IEFwcCB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBhc1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcbiAgICB9XG4gIH1cblxuICAvLyBAZGVwcmVjYXRlZCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBldmVuIHRob3VnaCBpdCdzIGEgcHJpdmF0ZSBtZXRob2QuXG4gIHN0YXRpYyBfcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgcmV0dXJuIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHVybFxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGlmICghZS5zdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAoXG4gICAgICBlLnN0YXRlICYmXG4gICAgICB0aGlzLmlzU3NyICYmXG4gICAgICBlLnN0YXRlLmFzID09PSB0aGlzLmFzUGF0aCAmJlxuICAgICAgcGFyc2UoZS5zdGF0ZS51cmwpLnBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lXG4gICAgKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoZS5zdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gZS5zdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ2Bwb3BzdGF0ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ1dCBgZXZlbnQuc3RhdGVgIGRpZCBub3QgaGF2ZSBgdXJsYCBvciBgYXNgIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3BvcHN0YXRlLXN0YXRlLWVtcHR5J1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgdXBkYXRlKHJvdXRlOiBzdHJpbmcsIG1vZDogYW55KSB7XG4gICAgY29uc3QgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlID0gbW9kLmRlZmF1bHQgfHwgbW9kXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKVxuICAgIH1cblxuICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBDb21wb25lbnQsXG4gICAgICBfX05fU1NHOiBtb2QuX19OX1NTRyxcbiAgICAgIF9fTl9TU1A6IG1vZC5fX05fU1NQLFxuICAgIH0pXG4gICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGFcblxuICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgIGlmIChyb3V0ZSA9PT0gJy9fYXBwJykge1xuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKVxuICAgIH1cbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICBfdXJsOiBVcmwsXG4gICAgX2FzOiBVcmwsXG4gICAgb3B0aW9uczogYW55XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgICB9XG4gICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICBpZiAoU1QpIHtcbiAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgICAgfVxuXG4gICAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgICBsZXQgdXJsID0gdHlwZW9mIF91cmwgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24oX3VybCkgOiBfdXJsXG4gICAgICBsZXQgYXMgPSB0eXBlb2YgX2FzID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKF9hcykgOiBfYXNcblxuICAgICAgdXJsID0gYWRkQmFzZVBhdGgodXJsKVxuICAgICAgYXMgPSBhZGRCYXNlUGF0aChhcylcblxuICAgICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5IGZvciB0aGUgU1NSIHBhZ2UuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgICAgaWYgKF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCkge1xuICAgICAgICAgIGFzID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQoYXMpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQoYXMpXG5cbiAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGFzKSkge1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChhcylcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnksIHByb3RvY29sIH0gPSBwYXJzZSh1cmwsIHRydWUpXG5cbiAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSlcbiAgICAgIH1cblxuICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgIGlmICghdGhpcy51cmxJc05ldyhhcykpIHtcbiAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKVxuICAgICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSBwYXJzZShhcylcbiAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgICApXG5cbiAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZWplY3QoXG4gICAgICAgICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgICAgLy8gSWYgc2hhbGxvdyBpcyB0cnVlIGFuZCB0aGUgcm91dGUgZXhpc3RzIGluIHRoZSByb3V0ZXIgY2FjaGUgd2UgcmV1c2UgdGhlIHByZXZpb3VzIHJlc3VsdFxuICAgICAgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cpLnRoZW4oXG4gICAgICAgIChyb3V0ZUluZm8pID0+IHtcbiAgICAgICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm9cblxuICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVJbmZvKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgYXMpXG4gICAgICAgICAgICAgIHRocm93IGVycm9yXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSlcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICByZWplY3RcbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxSb3V0ZUluZm8+IHtcbiAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAvLyBJZiB0aGVyZSBpcyBhIHNoYWxsb3cgcm91dGUgdHJhbnNpdGlvbiBwb3NzaWJsZVxuICAgIC8vIElmIHRoZSByb3V0ZSBpcyBhbHJlYWR5IHJlbmRlcmVkIG9uIHRoZSBzY3JlZW4uXG4gICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNhY2hlZFJvdXRlSW5mbylcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVFcnJvciA9IChcbiAgICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICAgICkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ1BBR0VfTE9BRF9FUlJPUicgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgLy8gU28sIHdlIG5lZWQgdG8gbWFyayBpdCBhcyBhIGNhbmNlbGxlZCBlcnJvciBhbmQgc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc29sdmUoXG4gICAgICAgICAgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSByZXNcbiAgICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvOiBSb3V0ZUluZm8gPSB7IENvbXBvbmVudCwgZXJyIH1cbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIH0gYXMgYW55KS50aGVuKFxuICAgICAgICAgICAgICAgICAgKHByb3BzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVyclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbylcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAoZ2lwRXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsXG4gICAgICAgICAgICAgICAgICAgICAgZ2lwRXJyXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGhhbmRsZUVycm9yKGVyciwgdHJ1ZSkpXG4gICAgICAgIClcbiAgICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPlxuICAgIH1cblxuICAgIHJldHVybiAobmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKGNhY2hlZFJvdXRlSW5mbykge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oXG4gICAgICAgIChyZXMpID0+XG4gICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pLFxuICAgICAgICByZWplY3RcbiAgICAgIClcbiAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz4pXG4gICAgICAudGhlbigocm91dGVJbmZvOiBSb3V0ZUluZm8pID0+IHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0RGF0YTxSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgICAgX19OX1NTR1xuICAgICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGFzKVxuICAgICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoYXMpXG4gICAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICAgIClcbiAgICAgICAgKS50aGVuKChwcm9wcykgPT4ge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpXG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcHJvdG9jb2wgfSA9IHBhcnNlKHVybClcblxuICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGNvbnN0IHJvdXRlID0gZGVsQmFzZVBhdGgodG9Sb3V0ZShwYXRobmFtZSkpXG4gICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBkZWxCYXNlUGF0aChhc1BhdGgpKSxcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgICAgXSkudGhlbigoKSA9PiByZXNvbHZlKCksIHJlamVjdClcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Q29tcG9uZW50UmVzPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG4gICAgcm91dGUgPSBkZWxCYXNlUGF0aChyb3V0ZSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YSA9IChhc1BhdGg6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiA9PiB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGFyc2UoYXNQYXRoKS5wYXRobmFtZSEpXG5cbiAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1twYXRobmFtZV1cbiAgICAgID8gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW3BhdGhuYW1lXSlcbiAgICAgIDogZmV0Y2hOZXh0RGF0YShcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIHRoaXMuaXNTc3IsXG4gICAgICAgICAgKGRhdGEpID0+ICh0aGlzLnNkY1twYXRobmFtZV0gPSBkYXRhKVxuICAgICAgICApXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YSA9IChhc1BhdGg6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiA9PiB7XG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZShhc1BhdGgsIHRydWUpXG4gICAgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGF0aG5hbWUhKVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHApXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgY29uc3QgZSA9IG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJylcbiAgICAgIDsoZSBhcyBhbnkpLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGUsIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogeyBwb3M6IG51bWJlcjsgcmVwZWF0OiBib29sZWFuIH0gfVxufSB7XG4gIC8vIEVzY2FwZSBhbGwgY2hhcmFjdGVycyB0aGF0IGNvdWxkIGJlIGNvbnNpZGVyZWQgUmVnRXhcbiAgY29uc3QgZXNjYXBlZFJvdXRlID0gZXNjYXBlUmVnZXgobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiB7IHBvczogbnVtYmVyOyByZXBlYXQ6IGJvb2xlYW4gfSB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG5cbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoXG4gICAgL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZyxcbiAgICAoXywgJDEpID0+IHtcbiAgICAgIGNvbnN0IGlzT3B0aW9uYWwgPSAvXlxcXFxcXFsuKlxcXFxcXF0kLy50ZXN0KCQxKVxuICAgICAgaWYgKGlzT3B0aW9uYWwpIHtcbiAgICAgICAgJDEgPSAkMS5zbGljZSgyLCAtMilcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSlcbiAgICAgIGlmIChpc0NhdGNoQWxsKSB7XG4gICAgICAgICQxID0gJDEuc2xpY2UoNilcbiAgICAgIH1cbiAgICAgIGdyb3Vwc1tcbiAgICAgICAgJDFcbiAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgXSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdDogaXNDYXRjaEFsbCB9XG4gICAgICByZXR1cm4gaXNDYXRjaEFsbCA/IChpc09wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgfVxuICApXG5cbiAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZShcbiAgICAgIC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csXG4gICAgICAoXywgJDEpID0+IHtcbiAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKVxuICAgICAgICBjb25zdCBrZXkgPSAkMVxuICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpXG5cbiAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGxcbiAgICAgICAgICA/IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT4uKz8pYFxuICAgICAgICAgIDogYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9PlteL10rPylgXG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cCgnXicgKyBwYXJhbWV0ZXJpemVkUm91dGUgKyAnKD86Lyk/JCcsICdpJyksXG4gICAgZ3JvdXBzLFxuICAgIG5hbWVkUmVnZXg6IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlXG4gICAgICA/IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYFxuICAgICAgOiB1bmRlZmluZWQsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGZvcm1hdCwgVVJMRm9ybWF0T3B0aW9ucywgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICcuLi8uLi9saWIvbG9hZC1lbnYtY29uZmlnJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBhbnlcbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBpbnRlcmZhY2UtbmFtZVxuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBzdGF0aWNNYXJrdXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkZXZGaWxlczogc3RyaW5nW11cbiAgZmlsZXM6IHN0cmluZ1tdXG4gIGxvd1ByaW9yaXR5RmlsZXM6IHN0cmluZ1tdXG4gIHBvbHlmaWxsRmlsZXM6IHN0cmluZ1tdXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaHRtbFByb3BzOiBhbnlcbiAgYm9keVRhZ3M6IGFueVtdXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICB1cmw6IFVybE9iamVjdCxcbiAgb3B0aW9ucz86IFVSTEZvcm1hdE9wdGlvbnNcbik6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXQodXJsIGFzIFVSTCwgb3B0aW9ucylcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBBZG1pbl9uYXYgZnJvbSBcIi4uL2NvbXBvbmVudHMvQWRtaW5fbmF2XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkZXJOYXYgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyTmF2XCI7XHJcbmltcG9ydCBVc2VyQ2FyZHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlckNhcmRzXCI7XHJcbmltcG9ydCBOZXdDYXJkRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9OZXdDYXJkRm9ybVwiO1xyXG5cclxuaW1wb3J0IEVkaXRVc2VyIGZyb20gXCIuLi9jb21wb25lbnRzL0VkaXRVc2VyXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VySW5mb1wiO1xyXG5cclxuaW1wb3J0IGFwaSBmcm9tIFwiLi4vc2VydmljZXMvQXBpXCI7XHJcblxyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiO1xyXG5pbXBvcnQgTmVlZHlDaGVja1VzZXJzIGZyb20gXCIuLi9jb21wb25lbnRzL05lZWR5Q2hlY2tVc2Vyc1wiO1xyXG5pbXBvcnQgeyBHZXRNYW5kb2JVc2VycyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGlfZ2V0XCI7XHJcbmltcG9ydCBTa2VsZXRvbiBmcm9tIFwicmVhY3QtbG9hZGluZy1za2VsZXRvblwiO1xyXG5pbXBvcnQgdXNlQXV0aCwgeyBQcm90ZWN0Um91dGVNYW5kb2JlIH0gZnJvbSBcIi4uL2NvbnRleHRzL2F1dGguanNcIjtcclxuaW1wb3J0IHsgdXNlQWxlcnQgfSBmcm9tIFwicmVhY3QtYWxlcnRcIjtcclxuaW1wb3J0IHsgbXV0YXRlIH0gZnJvbSBcInN3clwiO1xyXG5cclxuZnVuY3Rpb24gTXlVc2VycygpIHtcclxuICBjb25zdCBbUGllQ2FydERhdGFOdW1iZXJzLCBzZXRQaWVDYXJ0RGF0YU51bWJlcnNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtQaWVDYXJ0RGF0YU1vbmV5LCBzZXRQaWVDYXJ0RGF0YU1vbmV5XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbQmFyQ2hhcnREYXRhTnVtYmVycywgc2V0QmFyQ2hhcnREYXRhTnVtYmVyc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW0JhckNoYXJ0RGF0YU1vbmV5LCBzZXRCYXJDaGFydERhdGFNb25leV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgLy9jb25zdCBbcHJvamVjdCxzZXRQcm9qZWN0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcmVxdWVzdCwgc2V0cmVxdWVzdF0gPSB1c2VTdGF0ZShcImZpcnN0VGltZVwiKTtcclxuICBjb25zdCBhbGVydCA9IHVzZUFsZXJ0KCk7XHJcblxyXG4gIGNvbnN0IFtuYW1lLCBzZXRuYW1lXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFttZW1iZXJzLCBzZXRtZW1iZXJzXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtsYXN0X2NvdWJvbiwgc2V0bGFzdF9jb3Vib25dID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3RvdGFsX2NvdWJvbnMsIHNldHRvdGFsX2NvdWJvbnNdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3Bpb3JpdHksIHNldHBpb3JpdHldID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3BhZ2UsIHNldHBhZ2VdID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW1NjaXR5LCBzZXRTY2l0eV0gPSB1c2VTdGF0ZShcItis2K/YqVwiKTtcclxuICBjb25zdCBbU2FlcmEsIHNldFNhZXJhXSA9IHVzZVN0YXRlKFwiYWxsXCIpO1xyXG4gIGNvbnN0IFtTY2F0LCBzZXRTY2F0XSA9IHVzZVN0YXRlKDgpO1xyXG4gIGNvbnN0IFtTc2VhcmNoTmFtZSwgc2V0U3NlYXJjaE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW1NzZWFyY2hQaG9uZSwgc2V0U3NlYXJjaFBob25lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtSc05hbWUsIHNldFJzTmFtZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW1JzUGhvbmUsIHNldFJzUGhvbmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBbc3Bpbm5lciwgc2V0c3Bpbm5lcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFtUaGVTZWxlY3RlZGNhdGVnb3J5LCBzZXRUaGVTZWxlY3RlZGNhdGVnb3J5XSA9IHVzZVN0YXRlKDgpO1xyXG4gIGNvbnN0IFtUaGVVc2VyLCBzZXRUaGVVc2VyXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgeyB1c2VyLCBpc0F1dGhlbnRpY2F0ZWQsIGxvYWRpbmcgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zdCBbTVV1c2VySUQsIHNldE1VdXNlcklEXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCB7IGRhdGEsIGlzTG9hZGluZywgaXNFcnJvciB9ID0gR2V0TWFuZG9iVXNlcnMoXHJcbiAgICByZXF1ZXN0LFxyXG4gICAgbmFtZSxcclxuICAgIG1lbWJlcnMsXHJcbiAgICBsYXN0X2NvdWJvbixcclxuICAgIHRvdGFsX2NvdWJvbnMsXHJcbiAgICBwaW9yaXR5LFxyXG4gICAgcGFnZSxcclxuICAgIFNjaXR5LFxyXG4gICAgU2FlcmEsXHJcbiAgICBTY2F0LFxyXG4gICAgUnNOYW1lLFxyXG4gICAgUnNQaG9uZVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHJlc3VsdHMgPSBpc0xvYWRpbmcgPyBmYWxzZSA6IGRhdGEuZGF0YTtcclxuICBjb25zb2xlLmxvZyhyZXN1bHRzKTtcclxuXHJcbiAgY29uc3QgdXNlcnMgPSBpc0xvYWRpbmcgPyBmYWxzZSA6IHJlc3VsdHMudXNlcnM7XHJcbiAgY29uc3QgbnVtYmVyT2ZQYWdlcyA9IGlzTG9hZGluZyA/IGZhbHNlIDogcmVzdWx0cy5udW1iZXJPZlBhZ2VzO1xyXG5cclxuICBjb25zdCBzaG93U2tlbGV0b24gPSBpc0xvYWRpbmcgfHwgbG9hZGluZztcclxuXHJcbiAgaWYgKGlzTG9hZGluZykgY29uc29sZS5sb2cobnVtYmVyT2ZQYWdlcyk7XHJcblxyXG4gIGNvbnN0IFtjaXR5cywgc2V0Y2l0eXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFthZXJhcywgc2V0YWVyYXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtUaGVTZWxlY3RlZENpdHksIHNldFRoZVNlbGVjdGVkQ2l0eV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbVGhlU2VsZWN0ZWRhZXJhLCBzZXRUaGVTZWxlY3RlZGFlcmFdID0gdXNlU3RhdGUoXCJhbGxcIik7XHJcblxyXG4gIGNvbnNvbGUubG9nKFwidGhlIHNlbGVjdGVkIGNpdHkgOiBcIiArIFRoZVNlbGVjdGVkQ2l0eSk7XHJcbiAgY29uc3QgW2NvdWJvblRvdGFsLCBzZXRjb3Vib25Ub3RhbF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgY29uc3QgW0NDQXMsIHNldENDQXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtjYXRlZ29yaWVzLCBzZXRjYXRlZ29yaWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgW2ZpcnN0VGltZSwgc2V0Zmlyc3RUaW1lXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtuZXdTdGF0ZSwgc2V0bmV3U3RhdGVdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3N0YXRBbGwsIHNldHN0YXRBbGxdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBbbGlzdCwgdXBkYXRlTGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2FsbG93ZWQsIHNldGFsbG93ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt1c2VySW5mb01vZGUsIHNldHVzZXJJbmZvTW9kZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGZ1bmN0aW9uIEdvQmFja0FuZFRyaWdnZXJNdXRhdGlvbigpIHtcclxuICAgIHNldG1vZGFsVHlwZShcImNhcmRzXCIpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGZpcnN0VGltZSAmJiBudW1iZXJPZlBhZ2VzKSB7XHJcbiAgICBzZXRDQ0FzKHJlc3VsdHMub3B0aW9ucy5DQ0FzKTtcclxuXHJcbiAgICBzZXRUaGVTZWxlY3RlZENpdHkocmVzdWx0cy5vcHRpb25zLkNDQXNbMF0uZGF0YVswXS5uYW1lKTtcclxuXHJcbiAgICBzZXRjaXR5cyhyZXN1bHRzLm9wdGlvbnMuQ0NBc1swXS5kYXRhKTtcclxuICAgIHNldGFlcmFzKHJlc3VsdHMub3B0aW9ucy5DQ0FzWzBdLmRhdGFbMF0uZGF0YSk7XHJcbiAgICBzZXRjYXRlZ29yaWVzKHJlc3VsdHMub3B0aW9ucy5jYXRlZ29yaWVzKTtcclxuXHJcbiAgICBzZXRmaXJzdFRpbWUoZmFsc2UpO1xyXG4gIH1cclxuICAvKlxyXG4gICAgY29uc3QgeyBkYXRhLCBpc0xvYWRpbmcsIGlzRXJyb3IgfSA9IEdldENDQXMoKTtcclxuXHJcbiAgICBjb25zdCByZXN1bHRzID0gaXNMb2FkaW5nID8gZmFsc2UgOiBkYXRhLmRhdGE7XHJcbiAgICAqL1xyXG4gIGNvbnN0IFtwcm9qZWN0LCBzZXRQcm9qZWN0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY2hvb3NlLCBzZXRDaG9vc2VdID0gdXNlU3RhdGUoXCJjYXRlZ29yeVwiKTtcclxuICBjb25zdCBbY2F0ZWdvcnksIHNldENhdGVnb3J5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb21wYW55LCBzZXRDb21wYW55XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFticmFuY2gsIHNldEJyYW5jaF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcG9vbCwgc2V0cG9vbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2NvdWJvbk5hbWUsIHNldGNvdWJvbk5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bvb2xfdG90YWwsIHNldHBvb2xfdG90YWxdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGZ1bmN0aW9uIFVwZGF0ZVBvb2woYW1vdW50LCBzZWN0aW9uLCBzY291Ym9uTmFtZSkge1xyXG4gICAgc2V0cG9vbChzZWN0aW9uKTtcclxuICAgIHNldGNvdWJvbk5hbWUoc2NvdWJvbk5hbWUpO1xyXG4gICAgc2V0cG9vbF90b3RhbChhbW91bnQpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdXBkYXRlc2V0c3RlcCh0aGVzKSB7XHJcbiAgICBzZXRTdGVwKHRoZXMpO1xyXG4gICAgaWYgKHJlcXVlc3QgPT0gXCJmaXJzdFRpbWVcIikge1xyXG4gICAgICBtdXRhdGUoXCJyYWJ3YS9HZXRNYW5kb2JVc2Vyc1wiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG11dGF0ZShcclxuICAgICAgICBcInJhYndhL09yZGVyR2V0TWFuZG9iVXNlcnM/cGFnZT1cIiArXHJcbiAgICAgICAgICBwYWdlICtcclxuICAgICAgICAgIFwiJm5hbWU9XCIgK1xyXG4gICAgICAgICAgbmFtZSArXHJcbiAgICAgICAgICBcIiZtZW1iZXJzPVwiICtcclxuICAgICAgICAgIG1lbWJlcnMgK1xyXG4gICAgICAgICAgXCImbGFzdF9jb3Vib249XCIgK1xyXG4gICAgICAgICAgbGFzdF9jb3Vib24gK1xyXG4gICAgICAgICAgXCImdG90YWxfY291Ym9ucz1cIiArXHJcbiAgICAgICAgICB0b3RhbF9jb3Vib25zICtcclxuICAgICAgICAgIFwiJlNjaXR5PVwiICtcclxuICAgICAgICAgIFNjaXR5ICtcclxuICAgICAgICAgIFwiJlNhZXJhPVwiICtcclxuICAgICAgICAgIFNhZXJhICtcclxuICAgICAgICAgIFwiJlNjYXQ9XCIgK1xyXG4gICAgICAgICAgU2NhdCArXHJcbiAgICAgICAgICBcIiZwaW9yaXR5PVwiICtcclxuICAgICAgICAgIHBpb3JpdHkgK1xyXG4gICAgICAgICAgXCImUnNOYW1lPVwiICtcclxuICAgICAgICAgIFJzTmFtZSArXHJcbiAgICAgICAgICBcIiZSc1Bob25lPVwiICtcclxuICAgICAgICAgIFJzUGhvbmVcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG15RWRpdFVzZXIodGhlU2VsZWN0ZWRVc2VyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XHJcbiAgICBjb25zb2xlLmxvZyh0aGVTZWxlY3RlZFVzZXIpO1xyXG4gICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpO1xyXG5cclxuICAgIHNldFRoZVVzZXIodGhlU2VsZWN0ZWRVc2VyKTtcclxuICAgIHNldFN0ZXAoMik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBteURpc1VzZXIodGhlU2VsZWN0ZWREaXNVc2VySWQsIHNTdGF0dXMpIHtcclxuICAgIGxldCBhcHByb3ZlID0gc1N0YXR1cztcclxuICAgIGxldCB0aGVVc2VyaWQgPSB0aGVTZWxlY3RlZERpc1VzZXJJZDtcclxuICAgIGxldCBteWRkID0ge1xyXG4gICAgICBhcHByb3ZlLFxyXG4gICAgICB0aGVVc2VyaWQsXHJcbiAgICB9O1xyXG4gICAgY29uc29sZS5sb2cobXlkZCk7XHJcbiAgICBhcGkucG9zdChcInJhYndhL0FwcHJvdmVVc2VyXCIsIG15ZGQpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBpZiAocmVxdWVzdCA9PSBcImZpcnN0VGltZVwiKSB7XHJcbiAgICAgICAgbXV0YXRlKFwicmFid2EvR2V0TWFuZG9iVXNlcnNcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbXV0YXRlKFxyXG4gICAgICAgICAgXCJyYWJ3YS9PcmRlckdldE1hbmRvYlVzZXJzP3BhZ2U9XCIgK1xyXG4gICAgICAgICAgICBwYWdlICtcclxuICAgICAgICAgICAgXCImbmFtZT1cIiArXHJcbiAgICAgICAgICAgIG5hbWUgK1xyXG4gICAgICAgICAgICBcIiZtZW1iZXJzPVwiICtcclxuICAgICAgICAgICAgbWVtYmVycyArXHJcbiAgICAgICAgICAgIFwiJmxhc3RfY291Ym9uPVwiICtcclxuICAgICAgICAgICAgbGFzdF9jb3Vib24gK1xyXG4gICAgICAgICAgICBcIiZ0b3RhbF9jb3Vib25zPVwiICtcclxuICAgICAgICAgICAgdG90YWxfY291Ym9ucyArXHJcbiAgICAgICAgICAgIFwiJlNjaXR5PVwiICtcclxuICAgICAgICAgICAgU2NpdHkgK1xyXG4gICAgICAgICAgICBcIiZTYWVyYT1cIiArXHJcbiAgICAgICAgICAgIFNhZXJhICtcclxuICAgICAgICAgICAgXCImU2NhdD1cIiArXHJcbiAgICAgICAgICAgIFNjYXQgK1xyXG4gICAgICAgICAgICBcIiZwaW9yaXR5PVwiICtcclxuICAgICAgICAgICAgcGlvcml0eSArXHJcbiAgICAgICAgICAgIFwiJlJzTmFtZT1cIiArXHJcbiAgICAgICAgICAgIFJzTmFtZSArXHJcbiAgICAgICAgICAgIFwiJlJzUGhvbmU9XCIgK1xyXG4gICAgICAgICAgICBSc1Bob25lXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBhbGVydC5zaG93KFwi2KrZhSDYqNmG2KzYp9itXCIsIHtcclxuICAgICAgICB0aW1lb3V0OiAyMDAwLFxyXG4gICAgICAgIHR5cGU6IFwic3VjY2Vzc1wiLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gb3JkZXIoKSB7XHJcbiAgICBpZiAocmVxdWVzdCA9PSBcImZpcnN0VGltZVwiKSB7XHJcbiAgICAgIHNldHJlcXVlc3QoXCJjdXN0b21cIik7XHJcbiAgICB9XHJcbiAgICBzZXRSc05hbWUoXCJmYWxzZVwiKTtcclxuICAgIHNldFJzUGhvbmUoXCJmYWxzZVwiKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGZpbHRlcigpIHtcclxuICAgIGlmIChyZXF1ZXN0ID09IFwiZmlyc3RUaW1lXCIpIHtcclxuICAgICAgc2V0cmVxdWVzdChcImN1c3RvbVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRSc05hbWUoXCJmYWxzZVwiKTtcclxuICAgIHNldFJzUGhvbmUoXCJmYWxzZVwiKTtcclxuICAgIHNldFNjaXR5KFRoZVNlbGVjdGVkQ2l0eSk7XHJcbiAgICBzZXRTYWVyYShUaGVTZWxlY3RlZGFlcmEpO1xyXG4gICAgc2V0U2NhdChUaGVTZWxlY3RlZGNhdGVnb3J5KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHBob25lUygpIHtcclxuICAgIGlmIChyZXF1ZXN0ID09IFwiZmlyc3RUaW1lXCIpIHtcclxuICAgICAgc2V0cmVxdWVzdChcImN1c3RvbVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRSc05hbWUoXCJmYWxzZVwiKTtcclxuICAgIHNldFJzUGhvbmUoU3NlYXJjaFBob25lKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIE5hbWVTKCkge1xyXG4gICAgaWYgKHJlcXVlc3QgPT0gXCJmaXJzdFRpbWVcIikge1xyXG4gICAgICBzZXRyZXF1ZXN0KFwiY3VzdG9tXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFJzTmFtZShTc2VhcmNoTmFtZSk7XHJcbiAgICBzZXRSc1Bob25lKFwiZmFsc2VcIik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB1cGRhdGVBcnJheWFsbCgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiaGVyZVwiKTtcclxuICAgIHVwZGF0ZUxpc3QodXNlcnMpO1xyXG4gICAgc2V0YWxsb3dlZCh0cnVlKTtcclxuICAgICQuZWFjaCgkKFwiaW5wdXRbbmFtZT0nc3BvcnQnXVwiKSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKHRoaXMpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB1cGRhdGVBcnJheShkYXRhKSB7XHJcbiAgICBsZXQgZmF2b3JpdGUgPSBsaXN0O1xyXG4gICAgZmF2b3JpdGUucHVzaChkYXRhKTtcclxuXHJcbiAgICB1cGRhdGVMaXN0KGZhdm9yaXRlKTtcclxuICAgIHNldGFsbG93ZWQodHJ1ZSk7XHJcblxyXG4gICAgLy8gIHNldFBlcnNvbk5lZWRzKChQZXJzb25OZWVkcykgPT4gUGVyc29uTmVlZHMuY29uY2F0KGRhdGEpKTtcclxuICAgIC8vIHNldFBlcnNvbk5lZWRzKChQZXJzb25OZWVkcykgPT4gWy4uLlBlcnNvbk5lZWRzLCBkYXRhXSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHJlbW92ZVVzZXJhbGwoKSB7XHJcbiAgICB1cGRhdGVMaXN0KFtdKTtcclxuICAgIHNldGFsbG93ZWQoZmFsc2UpO1xyXG4gICAgJC5lYWNoKCQoXCJpbnB1dFtuYW1lPSdzcG9ydCddXCIpLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQodGhpcykucHJvcChcImNoZWNrZWRcIiwgZmFsc2UpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBteURpc3RyaWJ1dGVDb3Vwb25zKHBvb2wsIGNvdWJvbk5hbWUsIGxpc3QpIHtcclxuICAgIHNldHNwaW5uZXIodHJ1ZSk7XHJcbiAgICBhcGlcclxuICAgICAgLnBvc3QoXCJyYWJ3YS9EaXN0cmlidXRlQ291cG9uc1wiLCB7IHBvb2wsIGNvdWJvbk5hbWUsIGxpc3QgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHNldHNwaW5uZXIoZmFsc2UpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuXHJcbiAgICAgICAgaWYgKHJlcy5kYXRhID09IFwiYWxyZWFkeSBleGlzdHNcIikge1xyXG4gICAgICAgICAgYWxlcnQuc2hvdyhcItil2LPZhSDYp9mE2YPZiNio2YjZhiDZhdmI2KzZiNivINmF2LPYqNmC2KcgXCIsIHtcclxuICAgICAgICAgICAgdGltZW91dDogMjAwMCxcclxuICAgICAgICAgICAgdHlwZTogXCJlcnJvclwiLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZXMuZGF0YSA9PSBcImVtYWlsXCIpIHtcclxuICAgICAgICAgIGFsZXJ0LnNob3coXCLYp9mE2KXZitmF2YrZhCDZhdiz2KrYrtiv2YUg2YXYs9io2YLYp1wiLCB7XHJcbiAgICAgICAgICAgIHRpbWVvdXQ6IDIwMDAsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiZXJyb3JcIixcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHJlcy5kYXRhID4gMCkge1xyXG4gICAgICAgICAgYWxlcnQuc2hvdyhcItiq2YUg2KjZhtis2KfYrVwiLCB7XHJcbiAgICAgICAgICAgIHRpbWVvdXQ6IDIwMDAsXHJcbiAgICAgICAgICAgIHR5cGU6IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICAvL0dvQmFja0FuZFRyaWdnZXJNdXRhdGlvbigpO1xyXG4gICAgICAgICAgLy9yb3V0ZXIucHVzaChcIi9jb21wYW55cy9bbmFtZV1cIiwgXCIvY29tcGFueXMvXCIgKyBmb3JtZGF0YS5jb21wYW55TmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIHNldHNwaW5uZXIoZmFsc2UpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gcmVtb3ZlVXNlcihpZCkge1xyXG4gICAgbGV0IGZhdm9yaXRlID0gbGlzdDtcclxuICAgIGlmIChsaXN0Lmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgIHNldGFsbG93ZWQoZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgZmF2b3JpdGUgPSBhd2FpdCBmYXZvcml0ZS5maWx0ZXIoKGUpID0+IGUuaWQgIT09IGlkKTtcclxuICAgIHVwZGF0ZUxpc3QoZmF2b3JpdGUpO1xyXG5cclxuICAgIC8qIGxldCBmYXZvcml0ZSA9IHBlcnNvbk5lZWRzO1xyXG4gICAgY29uc29sZS5sb2coZmF2b3JpdGUpO1xyXG5cclxuICAgIGZhdm9yaXRlID0gYXdhaXQgZmF2b3JpdGUuZmlsdGVyKCh1c2VyKSA9PiB1c2VyLmlkICE9PSBpZCk7XHJcbiAgICBjb25zb2xlLmxvZyhmYXZvcml0ZSk7XHJcblxyXG4gICAgc2V0UGVyc29uTmVlZHMoZmF2b3JpdGUpOyovXHJcblxyXG4gICAgLy8gc2V0UGVyc29uTmVlZHMoW10pO1xyXG4gICAgLy9cclxuXHJcbiAgICAvLyBteXNldChmYXZvcml0ZSk7XHJcbiAgICAvL3NldEpvaW5MaXN0KGpvaW5MaXN0LmZpbHRlcigoZSkgPT4gZSAhPT0gaWQpKTtcclxuXHJcbiAgICAvLyBzZXRQZXJzb25OZWVkcyhwZXJzb25OZWVkcy5maWx0ZXIoKHVzZXIpID0+IHVzZXIuaWQgIT09IGlkKSk7XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gIGZ1bmN0aW9uIHNldHRoZU5lZWR5TmFtZXMoKSB7XHJcbiAgICBsZXQgZmF2b3JpdGUgPSBbXTtcclxuICAgICQuZWFjaCgkKFwiaW5wdXRbbmFtZT0nc3BvcnQnXVwiKSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKHRoaXMpLi5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBzZXRQZXJzb25OZWVkcyhmYXZvcml0ZS5qb2luKFwiLCBcIikpO1xyXG4gIH0qL1xyXG5cclxuICBjb25zdCBbTW9kZWxEYXRhLCBzZXRNb2RlbERhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFttb2RhbFR5cGUsIHNldG1vZGFsVHlwZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgZnVuY3Rpb24gb3Blbk1vZGFsKG15dXNlckRhdGEsIHR5cGUpIHtcclxuICAgIGlmICh0eXBlID09IFwic3RhdHNcIikge1xyXG4gICAgICAvLyBzZXRuZXdTdGF0ZSh0cnVlKTtcclxuXHJcbiAgICAgIGxldCB0ZW1wVXNlcklEID0gbXl1c2VyRGF0YS5pZDtcclxuICAgICAgc2V0TVV1c2VySUQodGVtcFVzZXJJRCk7XHJcbiAgICAgIHNldHVzZXJJbmZvTW9kZSh0cnVlKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiLS0tLWhlcmUtLS1cIiArIHRlbXBVc2VySUQpO1xyXG4gICAgICBjb25zb2xlLmxvZyhteXVzZXJEYXRhKTtcclxuICAgICAgY29uc29sZS5sb2coXCJoZXJlXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0bW9kYWxUeXBlKHR5cGUpO1xyXG4gICAgICBzZXRNb2RlbERhdGEobXl1c2VyRGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGNhbGN1bGF0ZSgpIHtcclxuICAgIGxldCBteWRhdGEgPSBsaXN0O1xyXG4gICAgbGV0IHN0YXJ0Y291bnQgPSAwO1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG15ZGF0YS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgbGV0IG15dXNlciA9IG15ZGF0YVtpbmRleF07XHJcbiAgICAgIHN0YXJ0Y291bnQgPSBzdGFydGNvdW50ICsgcGFyc2VJbnQobXl1c2VyLnNoYXJlKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRjb3Vib25Ub3RhbChzdGFydGNvdW50KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlY2FsY3VsYXRlKHZhbHVlLCBpZCkge1xyXG4gICAgLyogbGV0IGZhdm9yaXRlMiA9IFtdO1xyXG4gICAgJC5lYWNoKCQoXCJpbnB1dFtuYW1lPSdzcG9ydDInXVwiKSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBmYXZvcml0ZS5wdXNoKCQodGhpcykudmFsKCkpO1xyXG4gICAgfSk7Ki9cclxuICAgIGxldCBteWRhdGEgPSBsaXN0O1xyXG4gICAgbGV0IHN0YXJ0Y291bnQgPSAwO1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG15ZGF0YS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgbGV0IG15dXNlciA9IG15ZGF0YVtpbmRleF07XHJcblxyXG4gICAgICBpZiAobXl1c2VyLmlkID09IGlkKSB7XHJcbiAgICAgICAgbXl1c2VyLnNoYXJlID0gdmFsdWU7XHJcbiAgICAgICAgdXBkYXRlTGlzdChsaXN0KTtcclxuICAgICAgICBzdGFydGNvdW50ID0gc3RhcnRjb3VudCArIHBhcnNlSW50KHZhbHVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzdGFydGNvdW50ID0gc3RhcnRjb3VudCArIHBhcnNlSW50KG15dXNlci5zaGFyZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRjb3Vib25Ub3RhbChzdGFydGNvdW50KTtcclxuXHJcbiAgICAvL3NldFBlcnNvbk5lZWRzKGZhdm9yaXRlLmpvaW4oXCIsIFwiKSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBteUZ1bmN0aW9uKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJoZWxlXCIpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteURyb3Bkb3duXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZmlsdGVyRnVuY3Rpb24oKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImhlcmVcIik7XHJcbiAgICB2YXIgaW5wdXQsIGZpbHRlciwgdWwsIGxpLCBhLCBpO1xyXG4gICAgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15SW5wdXRcIik7XHJcbiAgICBmaWx0ZXIgPSBpbnB1dC52YWx1ZS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteURyb3Bkb3duXCIpO1xyXG4gICAgYSA9IGRpdi5nZXRFbGVtZW50c0J5VGFnTmFtZShcImFcIik7XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xyXG4gICAgICB0eHRWYWx1ZSA9IGFbaV0udGV4dENvbnRlbnQgfHwgYVtpXS5pbm5lclRleHQ7XHJcbiAgICAgIGlmICh0eHRWYWx1ZS50b1VwcGVyQ2FzZSgpLmluZGV4T2YoZmlsdGVyKSA+IC0xKSB7XHJcbiAgICAgICAgYVtpXS5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhW2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc29sZS5sb2coXCItLS0tLS0tLS1hLS0tLS0tLS0tLS0tLVwiKTtcclxuICBjb25zb2xlLmxvZyhsaXN0KTtcclxuICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS1iLS0tLS0tLS0tLS0tXCIpO1xyXG5cclxuICBjb25zdCBbb2xkV29tYW4sIHNldE9sZFdvbWFuXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtvbGRNYW4sIHNldE9sZE1hbl0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbYWNjaWJpbGl0eVBlcnNvbiwgc2V0QWNjaWJpbGl0eVBlcnNvbl0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbYmFieSwgc2V0QmFieV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbb3JwaGFuR2lybHMsIHNldE9ycGhhbkdpcmxzXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtvcnBoYW5Cb3lzLCBzZXRPcnBoYW5Cb3lzXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtnaXJscywgc2V0R2lybHNdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2d1eXMsIHNldEd1eXNdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3dvbWVuLCBzZXRXb21lbl0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbbWVuLCBzZXRNZW5dID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGNvbnN0IG9wdGlvbnMgPSBbXHJcbiAgICB7IG5hbWU6IFwiU3dlZGlzaFwiLCB2YWx1ZTogXCJzdlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRW5nbGlzaFwiLCB2YWx1ZTogXCJlblwiIH0sXHJcbiAgICB7XHJcbiAgICAgIHR5cGU6IFwiZ3JvdXBcIixcclxuICAgICAgbmFtZTogXCJHcm91cCBuYW1lXCIsXHJcbiAgICAgIGl0ZW1zOiBbeyBuYW1lOiBcIlNwYW5pc2hcIiwgdmFsdWU6IFwiZXNcIiB9XSxcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgW3N0ZXAsIHNldFN0ZXBdID0gdXNlU3RhdGUoMSk7XHJcblxyXG4gIGxldCBzdGVwMiA9IHN0ZXA7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxib2R5IGNsYXNzTmFtZT1cInJ0bCBnLXNpZGVuYXYtc2hvdyBnLXNpZGVuYXYtcGlubmVkXCIgZGlyPVwicnRsXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHsvKiBTaWRlbmF2ICovfVxyXG4gICAgICAgICAgPEFkbWluX25hdiAvPlxyXG4gICAgICAgICAgey8qIE1haW4gY29udGVudCAqL31cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbi1jb250ZW50XCIgaWQ9XCJwYW5lbFwiPlxyXG4gICAgICAgICAgICB7LyogVG9wbmF2ICovfVxyXG4gICAgICAgICAgICA8SGVhZGVyTmF2IC8+XHJcbiAgICAgICAgICAgIHsvKiBIZWFkZXIgKi99XHJcbiAgICAgICAgICAgIHsvKiBIZWFkZXIgKi99XHJcblxyXG4gICAgICAgICAgICB7dXNlckluZm9Nb2RlID8gKFxyXG4gICAgICAgICAgICAgIDxVc2VySW5mbyBpZD17TVV1c2VySUR9IHNldHVzZXJJbmZvTW9kZT17c2V0dXNlckluZm9Nb2RlfSAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWQgbXQtLTZcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiIGNvbCBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyIGJnLXRyYW5zcGFyZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cIm1iLTBcIj7Yp9mE2YXYs9iq2YHZitiv2YrZhjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBMaWdodCB0YWJsZSAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3N0ZXAgPT0gMSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj4g2YHZhNin2KrYsSDZiCDYqNit2Ks8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINin2YTYpdiz2YVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImlucHV0LXVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItin2YTYpdiz2YVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17U3NlYXJjaE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNzZWFyY2hOYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tbGcgYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOYW1lUygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCItODNweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg2KjYrdirXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINix2YLZhSDYp9mE2KzZiNin2YRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImlucHV0LXVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjk2NjV4eHh4eHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17U3NlYXJjaFBob25lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTc2VhcmNoUGhvbmUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1sZyBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBob25lUygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCItODNweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg2KjYrdirXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDYp9mE2K/ZiNmE2KlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb3VudHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWRDb3VudHkgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKmlmIChmaXJzdFRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRmaXJzdFRpbWUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9Ki9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4IDwgQ0NBcy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCsrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZW1wY29udW50eSA9IENDQXNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wY29udW50eS5uYW1lID09PSBzZWxlY3RlZENvdW50eVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldGNpdHlzKHRlbXBjb251bnR5LmRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRlbXBjb251bnR5LmRhdGFbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaGVTZWxlY3RlZENpdHkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wY29udW50eS5kYXRhWzBdLm5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldGFlcmFzKHRlbXBjb251bnR5LmRhdGFbMF0uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0YWVyYXMoW10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtDQ0FzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBDQ0FzLm1hcCgoY291bnR5LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPG9wdGlvbj57Y291bnR5Lm5hbWV9PC9vcHRpb24+O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINin2YTZhdiv2YrZhtipXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm15Y2l0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjaXR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkY2l0eSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRoZVNlbGVjdGVkQ2l0eShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyppZiAoZmlyc3RUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Zmlyc3RUaW1lKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCA8IGNpdHlzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4KytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlbXBjaXR5ID0gY2l0eXNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRlbXBjaXR5Lm5hbWUgPT09IHNlbGVjdGVkY2l0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRhZXJhcyh0ZW1wY2l0eS5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NpdHlzLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNpdHlzLm1hcCgoY2l0eSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtjaXR5Lm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NpdHkubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINin2YTZhdmG2LfZgtipXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYWVyYXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaGVTZWxlY3RlZGFlcmEoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhbGxcIj7Yp9mE2YPZhDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWVyYXMubGVuZ3RoID4gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYWVyYXMubWFwKChhZXJhcywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXthZXJhcy5uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthZXJhcy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg2KfZhNil2K3YqtmK2KfYrFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNhdGVnb3J5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGhlU2VsZWN0ZWRjYXRlZ29yeShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3JpZXMubGVuZ3RoID4gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2NhdGVnb3J5LmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tbGcgYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiLTgzcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINmB2YTYqtix2KlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLXJlc3BvbnNpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhYmxlIGFsaWduLWl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogc3RlcCA9PSAxID8gXCJcIiA6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPVwidGhlYWQtbGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNvcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtc29ydD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuYW1lID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0bmFtZSgxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuYW1lID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0bmFtZSgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuYW1lID09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0bmFtZSgxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg2KfYs9mFINin2YTZhdiz2KrZgdmK2K97XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25hbWUgPT0gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbmFtZSA9PSAxID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmYSBmYS1hcnJvdy11cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZhIGZhLWFycm93LWRvd25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic29ydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zb3J0PVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lbWJlcnMgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRtZW1iZXJzKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lbWJlcnMgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRtZW1iZXJzKDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lbWJlcnMgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRtZW1iZXJzKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDYudiv2K8g2KfZhNij2YHYsdin2K97XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21lbWJlcnMgPT0gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbWVtYmVycyA9PSAxID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmYSBmYS1hcnJvdy11cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZhIGZhLWFycm93LWRvd25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNvcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtc29ydD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXN0X2NvdWJvbiA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldGxhc3RfY291Ym9uKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RfY291Ym9uID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0bGFzdF9jb3Vib24oMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFzdF9jb3Vib24gPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRsYXN0X2NvdWJvbigxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg2KPYrtixINmD2YjYqNmI2YZ7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhc3RfY291Ym9uID09IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IGxhc3RfY291Ym9uID09IDEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZhIGZhLWFycm93LXVwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmEgZmEtYXJyb3ctZG93blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic29ydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zb3J0PVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvdGFsX2NvdWJvbnMgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0b3RhbF9jb3Vib25zKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvdGFsX2NvdWJvbnMgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0b3RhbF9jb3Vib25zKDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvdGFsX2NvdWJvbnMgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0b3RhbF9jb3Vib25zKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDYp9mE2YXYtdix2YjZgXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dG90YWxfY291Ym9ucyA9PSAwID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiB0b3RhbF9jb3Vib25zID09IDEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZhIGZhLWFycm93LXVwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmEgZmEtYXJyb3ctZG93blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic29ydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zb3J0PVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBpb3JpdHkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRwaW9yaXR5KDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBpb3JpdHkgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRwaW9yaXR5KDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBpb3JpdHkgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRwaW9yaXR5KDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDYp9mE2KPZiNmE2YjZitipe1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwaW9yaXR5ID09IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IHBpb3JpdHkgPT0gMSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmEgZmEtYXJyb3ctdXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmYSBmYS1hcnJvdy1kb3duXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNvcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtc29ydD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg2KfZhNio2LfYp9mC2KfYqlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic29ydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zb3J0PVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDZhdi52YTZiNmF2KfYqlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic29ydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zb3J0PVwiYnVkZ2V0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cImxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2Vycy5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdXNlcnMubWFwKChkYXRhLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmVlZHlDaGVja1VzZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBteUVkaXRVc2VyPXtteUVkaXRVc2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15RGlzVXNlcj17bXlEaXNVc2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5Nb2RhbD17b3Blbk1vZGFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dTa2VsZXRvbiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2tlbGV0b24gaGVpZ2h0PXs0MH0gY291bnQ9ezEwfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGVwID09IDIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdFVzZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlVXNlcj17VGhlVXNlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlc2V0c3RlcD17dXBkYXRlc2V0c3RlcH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgey8qIEFyZ29uIFNjcmlwdHMgKi99XHJcbiAgICAgICAgICB7LyogQ29yZSAqL31cclxuICAgICAgICAgIHsvKiBPcHRpb25hbCBKUyAqL31cclxuICAgICAgICAgIHsvKiBBcmdvbiBKUyAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogQXJnb24gTU9ERUwgKi99XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3M9XCJtb2RhbCBmYWRlXCJcclxuICAgICAgICAgIGlkPVwibW9kYWwtZGVmYXVsdFwiXHJcbiAgICAgICAgICB0YWJpbmRleD1cIi0xXCJcclxuICAgICAgICAgIHJvbGU9XCJkaWFsb2dcIlxyXG4gICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtZGVmYXVsdFwiXHJcbiAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3M9XCJtb2RhbC1kaWFsb2cgbW9kYWwtIG1vZGFsLWRpYWxvZy1jZW50ZXJlZCBtb2RhbC1cIlxyXG4gICAgICAgICAgICByb2xlPVwiZG9jdW1lbnRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bW9kYWxUeXBlID09IFwic3RhdHNcIiA/IChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPjwvZGl2PlxyXG4gICAgICAgICAgICApIDogbW9kYWxUeXBlID09IFwiY2FyZHNcIiA/IChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDYgY2xhc3M9XCJtb2RhbC10aXRsZVwiIGlkPVwibW9kYWwtdGl0bGUtZGVmYXVsdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgINio2LfYp9mC2KfYqiDYp9mE2YXYs9iq2YHZitivXHJcbiAgICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNsb3NlXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPsOXPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgIHtNb2RlbERhdGEgPyA8VXNlckNhcmRzIHVzZXJfaWQ9e01vZGVsRGF0YS5pZH0gLz4gOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIFwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZsb2F0OiBcInJpZ2h0XCIgfX1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldG1vZGFsVHlwZShcIm5ld0NhcmRcIik7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgINio2LfYp9mC2Kkg2KzYr9mK2K/YqVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tbGluayBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmbG9hdDogXCJsZWZ0XCIgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgINil2LrZhNin2YJcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDYgY2xhc3M9XCJtb2RhbC10aXRsZVwiIGlkPVwibW9kYWwtdGl0bGUtZGVmYXVsdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgINio2LfYp9mC2Kkg2KzYr9mK2K/YqVxyXG4gICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjbG9zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj7Dlzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICB7TW9kZWxEYXRhID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxOZXdDYXJkRm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgdXNlcl9pZD17TW9kZWxEYXRhLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU9e01vZGVsRGF0YS5OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgR29CYWNrQW5kVHJpZ2dlck11dGF0aW9uPXtHb0JhY2tBbmRUcmlnZ2VyTXV0YXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tbGluayBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmbG9hdDogXCJsZWZ0XCIgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgINil2LrZhNin2YJcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsvKiBBcmdvbiBNT0RFTCAqL31cclxuICAgICAgPC9ib2R5PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvdGVjdFJvdXRlTWFuZG9iZShNeVVzZXJzKTtcclxuIiwiaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XHJcblxyXG5jb25zdCBzaXRlVXJsID0gQ29va2llcy5nZXQoXCJzaXRlVXJsXCIpO1xyXG5pZiAoIXNpdGVVcmwpIHtcclxuICBDb29raWVzLnNldChcInNpdGVVcmxcIiwgXCJodHRwczovL2FwaS5yYWJvd2FoLmNvbS93cC1qc29uL1wiLCB7XHJcbiAgICBleHBpcmVzOiA2MCxcclxuICB9KTtcclxufVxyXG5sZXQgdXJscyA9IHtcclxuICBkZXZlbG9wbWVudDogXCJodHRwczovL2FwaS5yYWJvd2FoLmNvbS93cC1qc29uL1wiLFxyXG4gIHByb2R1Y3Rpb246IFwiaHR0cHM6Ly9hcGkucmFib3dhaC5jb20vd3AtanNvbi9cIixcclxufTtcclxuY29uc3QgYXBpID0gQXhpb3MuY3JlYXRlKHtcclxuICBiYXNlVVJMOiB1cmxzW3Byb2Nlc3MuZW52Lk5PREVfRU5WXSxcclxuICBoZWFkZXJzOiB7XHJcbiAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcGk7XHJcbiIsImltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xyXG5pbXBvcnQgYXBpIGZyb20gXCIuLi9zZXJ2aWNlcy9BcGlcIjtcclxuaW1wb3J0IHVzZUF1dGgsIHsgUHJvdGVjdFJvdXRlIH0gZnJvbSBcIi4uL2NvbnRleHRzL2F1dGguanNcIjtcclxuXHJcbmZ1bmN0aW9uIGFwaV9nZXQoKSB7XHJcbiAgLy8gY29uc3QgW3Rlc3RzLCBzZXR0ZXN0c10gPSB1c2VTdGF0ZSgpO1xyXG4gIC8vIGNvbnN0IFtzaG93U2tlbGV0b24sIHNldHNob3dTa2VsZXRvbl0gPSB1c2VTdGF0ZSgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29tcGFueShuYW1lKSB7XHJcbiAgY29uc3QgeyBsb2FkaW5nIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgbG9hZGluZyA/IGZhbHNlIDogXCJyYWJ3YS9nZXRDb21wYW55P25hbWU9XCIgKyBuYW1lLFxyXG4gICAgYXBpLmdldFxyXG4gICk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgICBpc0xvYWRpbmc6ICFlcnJvciAmJiAhZGF0YSxcclxuICAgIGlzRXJyb3I6IGVycm9yLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTcG9uc29ycyhwaG9uZSwgZ2V0VHlwZSkge1xyXG4gIGNvbnN0IHsgbG9hZGluZyB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcclxuICAgIGxvYWRpbmdcclxuICAgICAgPyBmYWxzZVxyXG4gICAgICA6IFwicmFid2EvZ2V0U3BvbnNvcnM/cGhvbmU9XCIgKyBwaG9uZSArIFwiJmdldFR5cGU9XCIgKyBnZXRUeXBlLFxyXG4gICAgYXBpLmdldFxyXG4gICk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgICBpc0xvYWRpbmc6ICFlcnJvciAmJiAhZGF0YSxcclxuICAgIGlzRXJyb3I6IGVycm9yLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRGdWxsQ0NBcyhwYWdldXApIHtcclxuICBjb25zdCB7IGxvYWRpbmcgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICBsb2FkaW5nID8gZmFsc2UgOiBcInJhYndhL0dldEZ1bGxDQ0FzP3BhZ2V1cD1cIiArIHBhZ2V1cCxcclxuICAgIGFwaS5nZXRcclxuICApO1xyXG4gIHJldHVybiB7XHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gICAgaXNMb2FkaW5nOiAhZXJyb3IgJiYgIWRhdGEsXHJcbiAgICBpc0Vycm9yOiBlcnJvcixcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2V0QWxsTWFuZG9iZXMoKSB7XHJcbiAgY29uc3QgeyBsb2FkaW5nIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgbG9hZGluZyA/IGZhbHNlIDogXCJyYWJ3YS9HZXRBbGxNYW5kb2Jlc1wiLFxyXG4gICAgYXBpLmdldFxyXG4gICk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgICBpc0xvYWRpbmc6ICFlcnJvciAmJiAhZGF0YSxcclxuICAgIGlzRXJyb3I6IGVycm9yLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRDKCkge1xyXG4gIGNvbnN0IHsgbG9hZGluZyB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihsb2FkaW5nID8gZmFsc2UgOiBcInJhYndhL0dldENcIiwgYXBpLmdldCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgICBpc0xvYWRpbmc6ICFlcnJvciAmJiAhZGF0YSxcclxuICAgIGlzRXJyb3I6IGVycm9yLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDb21wYW55c1N0YXRpc3RpYyhuYW1lKSB7XHJcbiAgY29uc3QgeyBsb2FkaW5nIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgbG9hZGluZyA/IGZhbHNlIDogXCJyYWJ3YS9Db21wYW55c1N0YXRpc3RpYz9uYW1lPVwiICsgbmFtZSxcclxuICAgIGFwaS5nZXRcclxuICApO1xyXG4gIHJldHVybiB7XHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gICAgaXNMb2FkaW5nOiAhZXJyb3IgJiYgIWRhdGEsXHJcbiAgICBpc0Vycm9yOiBlcnJvcixcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVXNlclN0YXRpc3RpY3ModXNlcl9pZCkge1xyXG4gIGNvbnN0IHsgbG9hZGluZyB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcclxuICAgIGxvYWRpbmcgPyBmYWxzZSA6IFwicmFid2EvVXNlclN0YXRpc3RpY3M/dXNlcl9pZD1cIiArIHVzZXJfaWQsXHJcbiAgICBhcGkuZ2V0XHJcbiAgKTtcclxuICByZXR1cm4ge1xyXG4gICAgVXNlclN0YXRpc3RpY3NEYXRhOiBkYXRhLFxyXG4gICAgVXNlclN0YXRpc3RpY3NlcnJvcmlzTG9hZGluZzogIWVycm9yICYmICFkYXRhLFxyXG4gICAgVXNlclN0YXRpc3RpY3NlcnJvcmlzRXJyb3I6IGVycm9yLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRBcHByb3ZlTWFuZG9iZXMoKSB7XHJcbiAgY29uc3QgeyBsb2FkaW5nIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgbG9hZGluZyA/IGZhbHNlIDogXCJyYWJ3YS9HZXRBcHByb3ZlTWFuZG9iZXNcIixcclxuICAgIGFwaS5nZXRcclxuICApO1xyXG4gIHJldHVybiB7XHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gICAgaXNMb2FkaW5nOiAhZXJyb3IgJiYgIWRhdGEsXHJcbiAgICBpc0Vycm9yOiBlcnJvcixcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2V0QXBwcm92ZXVzZXJzc00oKSB7XHJcbiAgY29uc3QgeyBsb2FkaW5nIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgbG9hZGluZyA/IGZhbHNlIDogXCJyYWJ3YS9HZXRBcHByb3ZldXNlcnNzTVwiLFxyXG4gICAgYXBpLmdldFxyXG4gICk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgICBpc0xvYWRpbmc6ICFlcnJvciAmJiAhZGF0YSxcclxuICAgIGlzRXJyb3I6IGVycm9yLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRBcHByb3ZldXNlcnNzKCkge1xyXG4gIGNvbnN0IHsgbG9hZGluZyB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcclxuICAgIGxvYWRpbmcgPyBmYWxzZSA6IFwicmFid2EvR2V0QXBwcm92ZXVzZXJzc1wiLFxyXG4gICAgYXBpLmdldFxyXG4gICk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgICBpc0xvYWRpbmc6ICFlcnJvciAmJiAhZGF0YSxcclxuICAgIGlzRXJyb3I6IGVycm9yLFxyXG4gIH07XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIENvbXBhbnlzU3RhdGlzdGljcygpIHtcclxuICBjb25zdCB7IGxvYWRpbmcgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICBsb2FkaW5nID8gZmFsc2UgOiBcInJhYndhL0NvbXBhbnlzU3RhdGlzdGljc1wiLFxyXG4gICAgYXBpLmdldFxyXG4gICk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgICBpc0xvYWRpbmc6ICFlcnJvciAmJiAhZGF0YSxcclxuICAgIGlzRXJyb3I6IGVycm9yLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyQ2FyZHModXNlcl9pZCkge1xyXG4gIGNvbnN0IHsgbG9hZGluZyB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcclxuICAgIGxvYWRpbmcgPyBmYWxzZSA6IFwicmFid2EvZ2V0VXNlckNhcmRzP3VzZXJfaWQ9XCIgKyB1c2VyX2lkLFxyXG4gICAgYXBpLmdldFxyXG4gICk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgICBpc0xvYWRpbmc6ICFlcnJvciAmJiAhZGF0YSxcclxuICAgIGlzRXJyb3I6IGVycm9yLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRNYW5kb2JlcyhcclxuICByZXF1ZXN0LFxyXG4gIG5hbWUsXHJcbiAgcGFnZSxcclxuICBTY2l0eSxcclxuICBTYWVyYSxcclxuICBSc05hbWUsXHJcbiAgUnNQaG9uZVxyXG4pIHtcclxuICBpZiAocmVxdWVzdCA9PSBcImZpcnN0VGltZVwiKSB7XHJcbiAgICBjb25zdCB7IGxvYWRpbmcgfSA9IHVzZUF1dGgoKTtcclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcclxuICAgICAgbG9hZGluZyA/IGZhbHNlIDogXCJyYWJ3YS9HZXRNYW5kb2Jlc1wiLFxyXG4gICAgICBhcGkuZ2V0XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgaXNMb2FkaW5nOiAhZXJyb3IgJiYgIWRhdGEsXHJcbiAgICAgIGlzRXJyb3I6IGVycm9yLFxyXG4gICAgfTtcclxuICB9IGVsc2UgaWYgKHJlcXVlc3QgPT0gXCJjdXN0b21cIikge1xyXG4gICAgY29uc3QgeyBsb2FkaW5nIH0gPSB1c2VBdXRoKCk7XHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICAgIGxvYWRpbmdcclxuICAgICAgICA/IGZhbHNlXHJcbiAgICAgICAgOiBcInJhYndhL09yZGVyR2V0TWFuZG9iZXM/cGFnZT1cIiArXHJcbiAgICAgICAgICAgIHBhZ2UgK1xyXG4gICAgICAgICAgICBcIiZuYW1lPVwiICtcclxuICAgICAgICAgICAgbmFtZSArXHJcbiAgICAgICAgICAgIFwiJlNjaXR5PVwiICtcclxuICAgICAgICAgICAgU2NpdHkgK1xyXG4gICAgICAgICAgICBcIiZTYWVyYT1cIiArXHJcbiAgICAgICAgICAgIFNhZXJhICtcclxuICAgICAgICAgICAgXCImUnNOYW1lPVwiICtcclxuICAgICAgICAgICAgUnNOYW1lICtcclxuICAgICAgICAgICAgXCImUnNQaG9uZT1cIiArXHJcbiAgICAgICAgICAgIFJzUGhvbmUsXHJcblxyXG4gICAgICBhcGkuZ2V0XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgaXNMb2FkaW5nOiAhZXJyb3IgJiYgIWRhdGEsXHJcbiAgICAgIGlzRXJyb3I6IGVycm9yLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXR1c2Vyc3MyKFxyXG4gIHJlcXVlc3QsXHJcbiAgbmFtZSxcclxuICBtZW1iZXJzLFxyXG4gIGxhc3RfY291Ym9uLFxyXG4gIHRvdGFsX2NvdWJvbnMsXHJcbiAgcGlvcml0eSxcclxuICBwYWdlLFxyXG4gIFNjaXR5LFxyXG4gIFNhZXJhLFxyXG4gIFNjYXQsXHJcbiAgUnNOYW1lLFxyXG4gIFJzUGhvbmVcclxuKSB7XHJcbiAgaWYgKHJlcXVlc3QgPT0gXCJmaXJzdFRpbWVcIikge1xyXG4gICAgY29uc3QgeyBsb2FkaW5nIH0gPSB1c2VBdXRoKCk7XHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICAgIGxvYWRpbmcgPyBmYWxzZSA6IFwicmFid2EvR2V0dXNlcnNzMlwiLFxyXG4gICAgICBhcGkuZ2V0XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgaXNMb2FkaW5nOiAhZXJyb3IgJiYgIWRhdGEsXHJcbiAgICAgIGlzRXJyb3I6IGVycm9yLFxyXG4gICAgfTtcclxuICB9IGVsc2UgaWYgKHJlcXVlc3QgPT0gXCJjdXN0b21cIikge1xyXG4gICAgY29uc3QgeyBsb2FkaW5nIH0gPSB1c2VBdXRoKCk7XHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICAgIGxvYWRpbmdcclxuICAgICAgICA/IGZhbHNlXHJcbiAgICAgICAgOiBcInJhYndhL09yZGVyR2V0dXNlcnNzMj9wYWdlPVwiICtcclxuICAgICAgICAgICAgcGFnZSArXHJcbiAgICAgICAgICAgIFwiJm5hbWU9XCIgK1xyXG4gICAgICAgICAgICBuYW1lICtcclxuICAgICAgICAgICAgXCImbWVtYmVycz1cIiArXHJcbiAgICAgICAgICAgIG1lbWJlcnMgK1xyXG4gICAgICAgICAgICBcIiZsYXN0X2NvdWJvbj1cIiArXHJcbiAgICAgICAgICAgIGxhc3RfY291Ym9uICtcclxuICAgICAgICAgICAgXCImdG90YWxfY291Ym9ucz1cIiArXHJcbiAgICAgICAgICAgIHRvdGFsX2NvdWJvbnMgK1xyXG4gICAgICAgICAgICBcIiZTY2l0eT1cIiArXHJcbiAgICAgICAgICAgIFNjaXR5ICtcclxuICAgICAgICAgICAgXCImU2FlcmE9XCIgK1xyXG4gICAgICAgICAgICBTYWVyYSArXHJcbiAgICAgICAgICAgIFwiJlNjYXQ9XCIgK1xyXG4gICAgICAgICAgICBTY2F0ICtcclxuICAgICAgICAgICAgXCImcGlvcml0eT1cIiArXHJcbiAgICAgICAgICAgIHBpb3JpdHkgK1xyXG4gICAgICAgICAgICBcIiZSc05hbWU9XCIgK1xyXG4gICAgICAgICAgICBSc05hbWUgK1xyXG4gICAgICAgICAgICBcIiZSc1Bob25lPVwiICtcclxuICAgICAgICAgICAgUnNQaG9uZSxcclxuXHJcbiAgICAgIGFwaS5nZXRcclxuICAgICk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICBpc0xvYWRpbmc6ICFlcnJvciAmJiAhZGF0YSxcclxuICAgICAgaXNFcnJvcjogZXJyb3IsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdldE1hbmRvYlVzZXJzKFxyXG4gIHJlcXVlc3QsXHJcbiAgbmFtZSxcclxuICBtZW1iZXJzLFxyXG4gIGxhc3RfY291Ym9uLFxyXG4gIHRvdGFsX2NvdWJvbnMsXHJcbiAgcGlvcml0eSxcclxuICBwYWdlLFxyXG4gIFNjaXR5LFxyXG4gIFNhZXJhLFxyXG4gIFNjYXQsXHJcbiAgUnNOYW1lLFxyXG4gIFJzUGhvbmUsXHJcbiAgbWFuZG9iZV9pZFxyXG4pIHtcclxuICBpZiAocmVxdWVzdCA9PSBcImZpcnN0VGltZVwiKSB7XHJcbiAgICBjb25zdCB7IGxvYWRpbmcgfSA9IHVzZUF1dGgoKTtcclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcclxuICAgICAgbG9hZGluZyA/IGZhbHNlIDogXCJyYWJ3YS9HZXRNYW5kb2JVc2Vycz9tYW5kb2JlX2lkPVwiICsgbWFuZG9iZV9pZCxcclxuICAgICAgYXBpLmdldFxyXG4gICAgKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgIGlzTG9hZGluZzogIWVycm9yICYmICFkYXRhLFxyXG4gICAgICBpc0Vycm9yOiBlcnJvcixcclxuICAgIH07XHJcbiAgfSBlbHNlIGlmIChyZXF1ZXN0ID09IFwiY3VzdG9tXCIpIHtcclxuICAgIGNvbnN0IHsgbG9hZGluZyB9ID0gdXNlQXV0aCgpO1xyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgICBsb2FkaW5nXHJcbiAgICAgICAgPyBmYWxzZVxyXG4gICAgICAgIDogXCJyYWJ3YS9PcmRlckdldE1hbmRvYlVzZXJzP3BhZ2U9XCIgK1xyXG4gICAgICAgICAgICBwYWdlICtcclxuICAgICAgICAgICAgXCImbmFtZT1cIiArXHJcbiAgICAgICAgICAgIG5hbWUgK1xyXG4gICAgICAgICAgICBcIiZtZW1iZXJzPVwiICtcclxuICAgICAgICAgICAgbWVtYmVycyArXHJcbiAgICAgICAgICAgIFwiJmxhc3RfY291Ym9uPVwiICtcclxuICAgICAgICAgICAgbGFzdF9jb3Vib24gK1xyXG4gICAgICAgICAgICBcIiZ0b3RhbF9jb3Vib25zPVwiICtcclxuICAgICAgICAgICAgdG90YWxfY291Ym9ucyArXHJcbiAgICAgICAgICAgIFwiJlNjaXR5PVwiICtcclxuICAgICAgICAgICAgU2NpdHkgK1xyXG4gICAgICAgICAgICBcIiZTYWVyYT1cIiArXHJcbiAgICAgICAgICAgIFNhZXJhICtcclxuICAgICAgICAgICAgXCImU2NhdD1cIiArXHJcbiAgICAgICAgICAgIFNjYXQgK1xyXG4gICAgICAgICAgICBcIiZwaW9yaXR5PVwiICtcclxuICAgICAgICAgICAgcGlvcml0eSArXHJcbiAgICAgICAgICAgIFwiJlJzTmFtZT1cIiArXHJcbiAgICAgICAgICAgIFJzTmFtZSArXHJcbiAgICAgICAgICAgIFwiJlJzUGhvbmU9XCIgK1xyXG4gICAgICAgICAgICBSc1Bob25lICtcclxuICAgICAgICAgICAgXCImbWFuZG9iZV9pZD1cIiArXHJcbiAgICAgICAgICAgIG1hbmRvYmVfaWQsXHJcblxyXG4gICAgICBhcGkuZ2V0XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgaXNMb2FkaW5nOiAhZXJyb3IgJiYgIWRhdGEsXHJcbiAgICAgIGlzRXJyb3I6IGVycm9yLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXR1c2Vyc3MoXHJcbiAgcmVxdWVzdCxcclxuICBuYW1lLFxyXG4gIG1lbWJlcnMsXHJcbiAgbGFzdF9jb3Vib24sXHJcbiAgdG90YWxfY291Ym9ucyxcclxuICBwaW9yaXR5LFxyXG4gIHBhZ2UsXHJcbiAgU2NpdHksXHJcbiAgU2FlcmEsXHJcbiAgU2NhdCxcclxuICBSc05hbWUsXHJcbiAgUnNQaG9uZSxcclxuICBoaWRlXHJcbikge1xyXG4gIGlmIChyZXF1ZXN0ID09IFwiZmlyc3RUaW1lXCIpIHtcclxuICAgIGNvbnN0IHsgbG9hZGluZyB9ID0gdXNlQXV0aCgpO1xyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgICBsb2FkaW5nID8gZmFsc2UgOiBcInJhYndhL0dldHVzZXJzc1wiLFxyXG4gICAgICBhcGkuZ2V0XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgaXNMb2FkaW5nOiAhZXJyb3IgJiYgIWRhdGEsXHJcbiAgICAgIGlzRXJyb3I6IGVycm9yLFxyXG4gICAgfTtcclxuICB9IGVsc2UgaWYgKHJlcXVlc3QgPT0gXCJjdXN0b21cIikge1xyXG4gICAgY29uc3QgeyBsb2FkaW5nIH0gPSB1c2VBdXRoKCk7XHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICAgIGxvYWRpbmdcclxuICAgICAgICA/IGZhbHNlXHJcbiAgICAgICAgOiBcInJhYndhL09yZGVyR2V0dXNlcnNzP3BhZ2U9XCIgK1xyXG4gICAgICAgICAgICBwYWdlICtcclxuICAgICAgICAgICAgXCImbmFtZT1cIiArXHJcbiAgICAgICAgICAgIG5hbWUgK1xyXG4gICAgICAgICAgICBcIiZtZW1iZXJzPVwiICtcclxuICAgICAgICAgICAgbWVtYmVycyArXHJcbiAgICAgICAgICAgIFwiJmxhc3RfY291Ym9uPVwiICtcclxuICAgICAgICAgICAgbGFzdF9jb3Vib24gK1xyXG4gICAgICAgICAgICBcIiZ0b3RhbF9jb3Vib25zPVwiICtcclxuICAgICAgICAgICAgdG90YWxfY291Ym9ucyArXHJcbiAgICAgICAgICAgIFwiJlNjaXR5PVwiICtcclxuICAgICAgICAgICAgU2NpdHkgK1xyXG4gICAgICAgICAgICBcIiZTYWVyYT1cIiArXHJcbiAgICAgICAgICAgIFNhZXJhICtcclxuICAgICAgICAgICAgXCImU2NhdD1cIiArXHJcbiAgICAgICAgICAgIFNjYXQgK1xyXG4gICAgICAgICAgICBcIiZwaW9yaXR5PVwiICtcclxuICAgICAgICAgICAgcGlvcml0eSArXHJcbiAgICAgICAgICAgIFwiJlJzTmFtZT1cIiArXHJcbiAgICAgICAgICAgIFJzTmFtZSArXHJcbiAgICAgICAgICAgIFwiJlJzUGhvbmU9XCIgK1xyXG4gICAgICAgICAgICBSc1Bob25lICtcclxuICAgICAgICAgICAgXCImaGlkZT1cIiArXHJcbiAgICAgICAgICAgIGhpZGUsXHJcblxyXG4gICAgICBhcGkuZ2V0XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgaXNMb2FkaW5nOiAhZXJyb3IgJiYgIWRhdGEsXHJcbiAgICAgIGlzRXJyb3I6IGVycm9yLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRDb3Vwb25zQnlCcmFjbmhDYXQoQnJhbmNoaWQsIENhdGVnb3J5aWQpIHtcclxuICBjb25zdCB7IGxvYWRpbmcgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICBsb2FkaW5nXHJcbiAgICAgID8gZmFsc2VcclxuICAgICAgOiBcInJhYndhL0dldENvdXBvbnNCeUJyYWNuaENhdD9CcmFuY2hpZD1cIiArXHJcbiAgICAgICAgICBCcmFuY2hpZCArXHJcbiAgICAgICAgICBcIiZDYXRlZ29yeWlkPVwiICtcclxuICAgICAgICAgIENhdGVnb3J5aWQsXHJcbiAgICBhcGkuZ2V0XHJcbiAgKTtcclxuICByZXR1cm4ge1xyXG4gICAgZGF0YTogZGF0YSxcclxuICAgIGlzTG9hZGluZzogIWVycm9yICYmICFkYXRhLFxyXG4gICAgaXNFcnJvcjogZXJyb3IsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdldENvdXBvbkJyYW5jaGVzKFNlY3Rpb25faWQpIHtcclxuICBjb25zdCB7IGxvYWRpbmcgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICBsb2FkaW5nID8gZmFsc2UgOiBcInJhYndhL0dldENvdXBvbkJyYW5jaGVzP1NlY3Rpb25faWQ9XCIgKyBTZWN0aW9uX2lkLFxyXG4gICAgYXBpLmdldFxyXG4gICk7XHJcbiAgcmV0dXJuIHtcclxuICAgIENvdXBvbkJyYW5jaGVzOiBkYXRhLFxyXG4gICAgQ291cG9uQnJhbmNoZXNpc0xvYWRpbmc6ICFlcnJvciAmJiAhZGF0YSxcclxuICAgIENvdXBvbkJyYW5jaGVzaXNFcnJvcjogZXJyb3IsXHJcbiAgfTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gR2V0VXNlck1ldGEoVGhlVXNlcl9pZCkge1xyXG4gIGNvbnN0IHsgbG9hZGluZyB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcclxuICAgIGxvYWRpbmcgPyBmYWxzZSA6IFwicmFid2EvR2V0VXNlck1ldGE/VGhlVXNlcl9pZD1cIiArIFRoZVVzZXJfaWQsXHJcbiAgICBhcGkuZ2V0XHJcbiAgKTtcclxuICByZXR1cm4ge1xyXG4gICAgVXNlck1ldGE6IGRhdGEsXHJcbiAgICBVc2VyTWV0YWlzTG9hZGluZzogIWVycm9yICYmICFkYXRhLFxyXG4gICAgVXNlck1ldGFpc0Vycm9yOiBlcnJvcixcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2V0Q2F0ZWdvcmllcygpIHtcclxuICBjb25zdCB7IGxvYWRpbmcgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICBsb2FkaW5nID8gZmFsc2UgOiBcInJhYndhL0dldENhdGVnb3JpZXNcIixcclxuICAgIGFwaS5nZXRcclxuICApO1xyXG4gIHJldHVybiB7XHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gICAgaXNMb2FkaW5nOiAhZXJyb3IgJiYgIWRhdGEsXHJcbiAgICBpc0Vycm9yOiBlcnJvcixcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2V0Q29tcGFueXMoKSB7XHJcbiAgY29uc3QgeyBsb2FkaW5nIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgbG9hZGluZyA/IGZhbHNlIDogXCJyYWJ3YS9HZXRDb21wYW55c1wiLFxyXG4gICAgYXBpLmdldFxyXG4gICk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgICBpc0xvYWRpbmc6ICFlcnJvciAmJiAhZGF0YSxcclxuICAgIGlzRXJyb3I6IGVycm9yLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRDYXRlZ29yeXNCeUNpdHkoY2l0eSkge1xyXG4gIGNvbnN0IHsgbG9hZGluZyB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcclxuICAgIGxvYWRpbmcgPyBmYWxzZSA6IFwicmFid2EvR2V0Q2F0ZWdvcnlzQnlDaXR5P2NpdHk9XCIgKyBjaXR5LFxyXG4gICAgYXBpLmdldFxyXG4gICk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgICBpc0xvYWRpbmc6ICFlcnJvciAmJiAhZGF0YSxcclxuICAgIGlzRXJyb3I6IGVycm9yLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRDb3Vwb25zQnlTZWN0aW9uKHNlY3Rpb25faWQpIHtcclxuICBjb25zdCB7IGxvYWRpbmcgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICBsb2FkaW5nID8gZmFsc2UgOiBcInJhYndhL0dldENvdXBvbnNCeVNlY3Rpb24/c2VjdGlvbl9pZD1cIiArIHNlY3Rpb25faWQsXHJcbiAgICBhcGkuZ2V0XHJcbiAgKTtcclxuICByZXR1cm4ge1xyXG4gICAgZGF0YTogZGF0YSxcclxuICAgIGlzTG9hZGluZzogIWVycm9yICYmICFkYXRhLFxyXG4gICAgaXNFcnJvcjogZXJyb3IsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdldENvdXBvbnNCeWJyYW5jaChJZCwgZ2V0VHlwZSkge1xyXG4gIGNvbnN0IHsgbG9hZGluZyB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcclxuICAgIGxvYWRpbmdcclxuICAgICAgPyBmYWxzZVxyXG4gICAgICA6IFwicmFid2EvR2V0Q291cG9uc0J5YnJhbmNoP0lkPVwiICsgSWQgKyBcIiZnZXRUeXBlPVwiICsgZ2V0VHlwZSxcclxuXHJcbiAgICBhcGkuZ2V0XHJcbiAgKTtcclxuICByZXR1cm4ge1xyXG4gICAgZGF0YTogZGF0YSxcclxuICAgIGlzTG9hZGluZzogIWVycm9yICYmICFkYXRhLFxyXG4gICAgaXNFcnJvcjogZXJyb3IsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdldENDQXMoKSB7XHJcbiAgY29uc3QgeyBsb2FkaW5nIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKGxvYWRpbmcgPyBmYWxzZSA6IFwicmFid2EvR2V0Q0NBc1wiLCBhcGkuZ2V0KTtcclxuICByZXR1cm4ge1xyXG4gICAgZGF0YTogZGF0YSxcclxuICAgIGlzTG9hZGluZzogIWVycm9yICYmICFkYXRhLFxyXG4gICAgaXNFcnJvcjogZXJyb3IsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBpX2dldDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJpdC9wcmltZWZhY2VzLnByaW1lcmVhY3QuY2hhcnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0FkZENpcmNsZU91dGxpbmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1JlbW92ZUNpcmNsZU91dGxpbmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlcy1leGFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1hbGVydFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ob29rLWZvcm1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbG9hZGluZy1za2VsZXRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzd3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=