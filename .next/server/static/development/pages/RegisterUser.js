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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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
  }, "\u062C\u0645\u064A\u0639 \u0627\u0644\u062C\u0645\u0639\u064A\u0627\u062A")))), __jsx("li", {
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
  }, "\u062A\u0633\u062C\u064A\u0644 \u062C\u0645\u0639\u064A\u0629")))), __jsx("li", {
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
  }, "\u0625\u0639\u062A\u0645\u0627\u062F \u062C\u0645\u0639\u064A\u0629")))), __jsx("li", {
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
  }, "\u062C\u0645\u0639\u064A\u0629"), __jsx("div", {
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

/***/ "./components/ListMandobes.js":
/*!************************************!*\
  !*** ./components/ListMandobes.js ***!
  \************************************/
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
var _jsxFileName = "C:\\xampp\\htdocs\\next\\components\\ListMandobes.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function ListMandobes({
  user_id,
  mandobe_id,
  setNewMandobe_id
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
    0: firstime,
    1: setfirstTime
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: MandobeName,
    1: setMandobeName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    data,
    isLoading,
    isError
  } = Object(_services_api_get__WEBPACK_IMPORTED_MODULE_1__["GetAllMandobes"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log("test2]]]]]]]]]]]]]");
    setfirstTime(true);
    setMandobeName("");
    setNewMandobe_id(false);
    localStorage.mandobeCity = "";
  }, [user_id]);
  const results = isLoading ? false : data.data;
  console.log(results);
  const showSkeleton = isLoading || loading;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, results ? results.length > 0 ? __jsx("div", {
    dir: "rtl",
    style: {
      textAlign: "right"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, MandobeName != "" ? __jsx("p", {
    style: {
      fontSize: 20
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, "\u0627\u0644\u0645\u0646\u062F\u0648\u0628 \u0627\u0644\u062D\u0627\u0644\u064A : ", MandobeName, " ") : __jsx("p", {
    style: {
      fontSize: 20
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }, "\u0644\u0645 \u064A\u062A\u0645 \u062A\u062D\u062F\u064A\u062F \u0627\u0644\u0645\u0646\u062F\u0648\u0628"), results.map((mandobe, index) => {
    if (mandobe_id == mandobe.id && firstime) {
      setMandobeName(mandobe.Name);
      setfirstTime(false);
    }

    if (localStorage.mandobeCity == mandobe.city) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
        class: "custom-control custom-radio mb-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 27
        }
      }, __jsx("input", {
        type: "radio",
        id: mandobe.Name + mandobe.id,
        name: "customRadio",
        class: "custom-control-input",
        onChange: e => {
          // console.log(mandobe.id);
          setNewMandobe_id(mandobe.id);
          console.log(e.target.value);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 29
        }
      }), __jsx("label", {
        class: "custom-control-label",
        for: mandobe.Name + mandobe.id,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 29
        }
      }, " ", mandobe.Name)));
    } else {
      localStorage.mandobeCity = mandobe.city;
      console.log("triggerd");
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 27
        }
      }, mandobe.city), __jsx("div", {
        class: "custom-control custom-radio mb-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 27
        }
      }, __jsx("input", {
        type: "radio",
        id: mandobe.Name + mandobe.id,
        name: "customRadio",
        class: "custom-control-input",
        onChange: e => {
          setNewMandobe_id(mandobe.id);
          console.log(e.target.value);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 29
        }
      }), __jsx("label", {
        class: "custom-control-label",
        for: mandobe.Name + mandobe.id,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 29
        }
      }, " ", mandobe.Name)));
    }
  })) : __jsx("h1", {
    style: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }
  }, "\u0644\u0627 \u064A\u0648\u062C\u062F \u0645\u0646\u062F\u0648\u0628\u064A\u0646 ") : ""))), showSkeleton ? __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2___default.a, {
    height: 40,
    count: 10,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 23
    }
  }) : "");
}

/* harmony default export */ __webpack_exports__["default"] = (ListMandobes);

/***/ }),

/***/ "./components/PersonNeeds.js":
/*!***********************************!*\
  !*** ./components/PersonNeeds.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\xampp\\htdocs\\next\\components\\PersonNeeds.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function PersonNeeds({
  data,
  updateArray,
  removeUser
}) {
  return __jsx("tr", {
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
      lineNumber: 4,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "media align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "media-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "name mb-0 text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, data.name, " ")))), __jsx("td", {
    className: "budget",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("input", {
    type: "checkbox",
    className: "messageCheckbox",
    name: "sport",
    onChange: e => {
      if (e.target.checked) {
        updateArray(data);
      } else {
        removeUser(data.id);
      }
    },
    value: data.id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (PersonNeeds);

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

/***/ "./pages/RegisterUser.js":
/*!*******************************!*\
  !*** ./pages/RegisterUser.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Admin_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Admin_nav */ "./components/Admin_nav.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_HeaderNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/HeaderNav */ "./components/HeaderNav.js");
/* harmony import */ var _components_ListMandobes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ListMandobes */ "./components/ListMandobes.js");
/* harmony import */ var _components_PersonNeeds__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PersonNeeds */ "./components/PersonNeeds.js");
/* harmony import */ var _components_ButtonUpload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ButtonUpload */ "./components/ButtonUpload.js");
/* harmony import */ var react_counter_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-counter-input */ "react-counter-input");
/* harmony import */ var react_counter_input__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_counter_input__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_Api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/Api */ "./services/Api.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _services_api_get__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/api_get */ "./services/api_get.js");
/* harmony import */ var _contexts_auth_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../contexts/auth.js */ "./contexts/auth.js");
/* harmony import */ var react_alert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-alert */ "react-alert");
/* harmony import */ var react_alert__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_alert__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_14__);
var _jsxFileName = "C:\\xampp\\htdocs\\next\\pages\\RegisterUser.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
















function Table() {
  const alert = Object(react_alert__WEBPACK_IMPORTED_MODULE_11__["useAlert"])(); //const [project,setProject] = useState(false);

  const {
    0: SelectedMembers,
    1: setSelectedMembers
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([{
    Member_id: 99999999999,
    Member_Name: "",
    Member_img: false,
    Member_Number: ""
  }]);
  const {
    toggler,
    settoggler,
    loading
  } = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_10__["default"])();
  const {
    0: spinner,
    1: setspinner
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: NewMandobe_id,
    1: setNewMandobe_id
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: pagedown,
    1: setpagedown
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  console.log(NewMandobe_id);
  const {
    data,
    isLoading,
    isError
  } = Object(_services_api_get__WEBPACK_IMPORTED_MODULE_9__["GetFullCCAs"])();
  const results = isLoading ? false : data.data;
  console.log(results);
  const showSkeleton = isLoading || loading;
  const {
    0: CCAs,
    1: setCCAs
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: citys,
    1: setcitys
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: aeras,
    1: setaeras
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: des,
    1: setdes
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: TheSelectedCountry,
    1: setTheSelectedCountry
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: TheSelectedCity,
    1: setTheSelectedCity
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: TheSelectedaera,
    1: setTheSelectedaera
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("all");
  const {
    0: firstTime,
    1: setfirstTime
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const {
    0: categories,
    1: setcategories
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);

  if (firstTime && results) {
    setCCAs(results.options.CCAs);
    setTheSelectedCity(results.options.CCAs[0].data[0].name);
    setTheSelectedCountry(results.options.CCAs[0].name);
    setcitys(results.options.CCAs[0].data);
    setaeras(results.options.CCAs[0].data[0].data);
    setcategories(results.options.categories);
    setfirstTime(false);
  }

  const {
    0: familyType,
    1: setfamilyType
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("family");
  const {
    0: priority,
    1: setpriority
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("normal");
  const {
    0: FirstName,
    1: setFirstName
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: LastName,
    1: setLastName
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: email,
    1: setemail
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: phone,
    1: setphone
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: mempersCount,
    1: setmempersCount
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: share,
    1: setshare
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
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
  const {
    0: widows,
    1: setWidows
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: girl,
    1: setgirl
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: boy,
    1: setboy
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: PhoneField,
    1: setPhoneField
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: address,
    1: setaddress
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: personNeeds,
    1: setPersonNeeds
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: step,
    1: setStep
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1);
  const {
    0: list,
    1: updateList
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: allowed,
    1: setallowed
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

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

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    recalc();
  }, [oldWoman, oldMan, accibilityPerson, baby, orphanGirls, orphanBoys, widows, girls, guys, women, men, girl, boy]);

  function mysubmit() {
    let checke = true;
    let mycalc = 0 + parseInt(oldWoman) + parseInt(oldMan) + parseInt(accibilityPerson) + parseInt(baby) + parseInt(orphanGirls) + parseInt(orphanBoys) + parseInt(widows) + parseInt(girls) + parseInt(guys) + parseInt(women) + parseInt(men) + parseInt(girl) + parseInt(boy);
    console.log(mycalc);
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
      mempersCount: mycalc,
      categories: list,
      des,
      mandobe_id: NewMandobe_id,
      address,
      SelectedMembers
    };
    console.log(data);
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

    if (address == "") {
      checke = false;
      alert.show("الرجاء كتابة عنوان المستفيد", {
        timeout: 2000,
        type: "error"
      });
    }

    if (NewMandobe_id == 0) {
      checke = false;
      alert.show("الرجاء إختيار مندوب", {
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

    if (SelectedMembers.length < NumberOfmembers) {
      checke = false;
      alert.show("الرجاء إضافة هويات جميع أفراد العائلة", {
        timeout: 2000,
        type: "error"
      });
    }

    setspinner(true);

    if (checke) {
      _services_Api__WEBPACK_IMPORTED_MODULE_7__["default"].post("api/CreatNewUser", data).then(res => {
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

        if (res.data == "email") {
          alert.show("الإيميل مستخدم مسبقا", {
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
          next_router__WEBPACK_IMPORTED_MODULE_12___default.a.push("/Users"); //GoBackAndTriggerMutation();
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

  function ThePhone(value) {
    for (let index = 0; index < CCAs.length; index++) {
      if (CCAs[index].name == TheSelectedCountry) {
        let element = CCAs[index].code;
        setphone(element + "" + value);
        setPhoneField(value);
      } else {
        let element = "";
      }
    }
  }

  function testc() {
    let mycalc = 0 + parseInt(oldWoman) + parseInt(oldMan) + parseInt(accibilityPerson) + parseInt(baby) + parseInt(orphanGirls) + parseInt(orphanBoys) + parseInt(widows) + parseInt(girls) + parseInt(guys) + parseInt(women) + parseInt(men) + parseInt(girl) + parseInt(boy);
    console.log("tttt");
    console.log(mycalc);
    return mycalc;
  }

  async function recalc() {
    let tt = await testc();
    console.log("tt");
    console.log(tt);
    setshare(tt);
  }

  function getNumberOfmembers() {
    let mycalc = 0 + parseInt(oldWoman) + parseInt(oldMan) + parseInt(accibilityPerson) + parseInt(baby) + parseInt(orphanGirls) + parseInt(orphanBoys) + parseInt(widows) + parseInt(girls) + parseInt(guys) + parseInt(women) + parseInt(men) + parseInt(girl) + parseInt(boy);
    return mycalc;
  }

  const NumberOfmembers = getNumberOfmembers();

  function removeMeber(QMember) {
    let mydata = SelectedMembers;
    let newdata = [];

    for (let index = 0; index < mydata.length; index++) {
      const element = mydata[index];

      if (element.Member_id != QMember.Member_id) {
        newdata.push(element);
      }
    }

    setSelectedMembers(newdata);
    setpagedown(pagedown + 1);
  }

  function removeMember_img(QMember) {
    let mydata = SelectedMembers;
    let newdata = [];

    for (let index = 0; index < mydata.length; index++) {
      const element = mydata[index];

      if (element.Member_id == QMember.Member_id) {
        element.Member_img = "";
      }

      newdata.push(element);
    }

    setSelectedMembers(newdata);
  }

  function UpdateMembereName(QMember, NewName) {
    let mydata = SelectedMembers;
    let newdata = [];

    for (let index = 0; index < mydata.length; index++) {
      const element = mydata[index];

      if (element.Member_id == QMember.Member_id) {
        element.Member_Name = NewName;
      }

      newdata.push(element);
    }

    setSelectedMembers(newdata);
  }

  function UpdateMembereNumber(QMember, NewName) {
    let mydata = SelectedMembers;
    let newdata = [];

    for (let index = 0; index < mydata.length; index++) {
      const element = mydata[index];

      if (element.Member_id == QMember.Member_id) {
        element.Member_Number = NewName;
      }

      newdata.push(element);
    }

    setSelectedMembers(newdata);
  }

  let step2 = step;
  const token = js_cookie__WEBPACK_IMPORTED_MODULE_13___default.a.get("token");
  const siteUrl = js_cookie__WEBPACK_IMPORTED_MODULE_13___default.a.get("siteUrl");

  function NewMember() {
    let mydata = SelectedMembers;
    let random_id = Math.random();
    let newdata = {
      Member_id: random_id,
      Member_Name: "",
      Member_img: false,
      Member_Number: ""
    };
    mydata.push(newdata);
    setSelectedMembers(mydata);
    setpagedown(pagedown + 1);
  }

  function handleThumbnailProduct(file, QMember) {
    let formData = new FormData();
    let myimg = "";
    formData.append("file", file);
    axios__WEBPACK_IMPORTED_MODULE_14___default.a.post(siteUrl + "wp/v2/media", formData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(result => {
      console.log(result.data.source_url);
      myimg = result.data.source_url; //add it here

      let mydata = SelectedMembers;
      let newdata = [];

      for (let index = 0; index < mydata.length; index++) {
        const element = mydata[index];

        if (element.Member_id == QMember.Member_id) {
          element.Member_img = myimg;
        }

        newdata.push(element);
      }

      setSelectedMembers(newdata);
    });
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("body", {
    className: "rtl g-sidenav-show g-sidenav-pinned",
    dir: "rtl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 492,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 493,
      columnNumber: 9
    }
  }, __jsx(_components_Admin_nav__WEBPACK_IMPORTED_MODULE_0__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 495,
      columnNumber: 11
    }
  }), __jsx("div", {
    class: "main-content",
    id: "panel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498,
      columnNumber: 11
    }
  }, __jsx(_components_HeaderNav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500,
      columnNumber: 13
    }
  }), __jsx("div", {
    class: "container-fluid mt--6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504,
      columnNumber: 13
    }
  }, __jsx("div", {
    class: "row justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505,
      columnNumber: 15
    }
  }, __jsx("div", {
    class: " col ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506,
      columnNumber: 17
    }
  }, __jsx("div", {
    class: "card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507,
      columnNumber: 19
    }
  }, __jsx("div", {
    class: "card-header bg-transparent",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508,
      columnNumber: 21
    }
  }, __jsx("h3", {
    class: "mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509,
      columnNumber: 23
    }
  }, "\u062A\u0633\u062C\u064A\u0644 \u0645\u0633\u062A\u0641\u064A\u062F \u062C\u062F\u064A\u062F")), __jsx("div", {
    class: "card-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511,
      columnNumber: 21
    }
  }, step == 1 ? __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 514,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 515,
      columnNumber: 27
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 516,
      columnNumber: 29
    }
  }, __jsx("label", {
    className: "form-control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 517,
      columnNumber: 31
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
      lineNumber: 520,
      columnNumber: 31
    }
  }, CCAs ? CCAs.map((county, index) => {
    return __jsx("option", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 552,
        columnNumber: 46
      }
    }, county.name);
  }) : ""))), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558,
      columnNumber: 27
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 559,
      columnNumber: 29
    }
  }, __jsx("label", {
    className: "form-control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 560,
      columnNumber: 31
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
      lineNumber: 563,
      columnNumber: 31
    }
  }, citys.length > 0 ? citys.map((city, index) => {
    return __jsx("option", {
      value: city.name,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 588,
        columnNumber: 41
      }
    }, city.name);
  }) : ""))), __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 597,
      columnNumber: 27
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 598,
      columnNumber: 29
    }
  }, __jsx("label", {
    className: "form-control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 599,
      columnNumber: 31
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
      lineNumber: 602,
      columnNumber: 31
    }
  }, __jsx("option", {
    value: "0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 609,
      columnNumber: 33
    }
  }, "\u0627\u0644\u0643\u0644"), aeras.length > 0 ? aeras.map((aeras, index) => {
    return __jsx("option", {
      value: aeras.name,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 613,
        columnNumber: 41
      }
    }, aeras.name);
  }) : ""))), __jsx("h6", {
    className: "heading-small text-muted mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 622,
      columnNumber: 27
    }
  }, "\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u0641\u064A\u062F"), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 625,
      columnNumber: 27
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 626,
      columnNumber: 29
    }
  }, __jsx("label", {
    className: "form-control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 627,
      columnNumber: 31
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
      lineNumber: 630,
      columnNumber: 31
    }
  }))), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 642,
      columnNumber: 27
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 643,
      columnNumber: 29
    }
  }, __jsx("label", {
    className: "form-control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 644,
      columnNumber: 31
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
      lineNumber: 647,
      columnNumber: 31
    }
  }))), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 660,
      columnNumber: 27
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 661,
      columnNumber: 29
    }
  }, __jsx("label", {
    className: "form-control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 662,
      columnNumber: 31
    }
  }, "\u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0644"), __jsx("div", {
    class: "input-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 665,
      columnNumber: 31
    }
  }, __jsx("input", {
    type: "number",
    name: "PhoneField",
    onChange: e => {
      ThePhone(e.target.value);
    },
    value: PhoneField,
    className: "form-control",
    placeholder: "50xxxxx",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 666,
      columnNumber: 33
    }
  }), TheSelectedCountry ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, CCAs.length > 0 ? CCAs.map((data, i) => {
    if (data.name == TheSelectedCountry) {
      return __jsx("div", {
        class: "input-group-prepend",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 682,
          columnNumber: 47
        }
      }, __jsx("span", {
        class: "input-group-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 683,
          columnNumber: 49
        }
      }, data.code, "+"));
    }
  }) : "") : __jsx("div", {
    class: "input-group-prepend",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 693,
      columnNumber: 35
    }
  }, __jsx("span", {
    class: "input-group-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 694,
      columnNumber: 37
    }
  }, "+")), " "))), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 700,
      columnNumber: 27
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 701,
      columnNumber: 29
    }
  }, __jsx("label", {
    className: "form-control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 702,
      columnNumber: 31
    }
  }, "\u0627\u0644\u0639\u0646\u0648\u0627\u0646"), __jsx("input", {
    type: "text",
    name: "address",
    onChange: e => {
      setaddress(e.target.value);
    },
    value: address,
    className: "form-control",
    placeholder: "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0633\u062A\u0641\u064A\u062F",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 705,
      columnNumber: 31
    }
  }))), __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 718,
      columnNumber: 27
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 719,
      columnNumber: 29
    }
  }, __jsx("label", {
    className: "form-control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 720,
      columnNumber: 31
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
      lineNumber: 723,
      columnNumber: 31
    }
  }))), __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 736,
      columnNumber: 27
    }
  }, __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 737,
      columnNumber: 29
    }
  })), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 739,
      columnNumber: 27
    }
  }, "\u0646\u0648\u0639 \u0627\u0644\u0645\u062D\u062A\u0627\u062C:"), __jsx("div", {
    style: {
      marginRight: "15px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 740,
      columnNumber: 27
    }
  }, __jsx("div", {
    class: "custom-control custom-radio mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 741,
      columnNumber: 29
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
    checked: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 742,
      columnNumber: 31
    }
  }), __jsx("label", {
    class: "custom-control-label",
    for: "customRadio1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 754,
      columnNumber: 31
    }
  }, "\u0639\u0627\u0626\u0644\u0629")), __jsx("div", {
    class: "custom-control custom-radio",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 761,
      columnNumber: 29
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
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 762,
      columnNumber: 31
    }
  }), __jsx("label", {
    class: "custom-control-label",
    for: "customRadio2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 773,
      columnNumber: 31
    }
  }, "\u0641\u0631\u062F"))), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 781,
      columnNumber: 27
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 782,
      columnNumber: 27
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 783,
      columnNumber: 29
    }
  }, "\u062D\u0627\u0644\u0629 \u0627\u0644\u0645\u062D\u062A\u0627\u062C:"), __jsx("div", {
    class: "custom-control custom-radio custom-control-inline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 785,
      columnNumber: 29
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
    checked: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 786,
      columnNumber: 31
    }
  }), __jsx("label", {
    class: "custom-control-label",
    for: "customRadioInline1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 798,
      columnNumber: 31
    }
  }, "\u0639\u0627\u062F\u064A", " ")), __jsx("div", {
    class: "custom-control custom-radio custom-control-inline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 805,
      columnNumber: 29
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
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 806,
      columnNumber: 31
    }
  }), __jsx("label", {
    class: "custom-control-label",
    for: "customRadioInline2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 817,
      columnNumber: 31
    }
  }, "\u062D\u0631\u062C\u0629", " ")), __jsx("div", {
    class: "custom-control custom-radio custom-control-inline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 824,
      columnNumber: 29
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
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 825,
      columnNumber: 31
    }
  }), __jsx("label", {
    class: "custom-control-label",
    for: "customRadioInline3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 836,
      columnNumber: 31
    }
  }, "\u062D\u0631\u062C\u0629 \u062C\u062F\u0627")))) : "", step == 2 ? __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 850,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "table-responsive",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 851,
      columnNumber: 27
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 852,
      columnNumber: 29
    }
  }, __jsx("table", {
    className: "table align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 853,
      columnNumber: 31
    }
  }, __jsx("thead", {
    className: "thead-light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 854,
      columnNumber: 33
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 855,
      columnNumber: 35
    }
  }, __jsx("th", {
    scope: "col",
    className: "sort",
    "data-sort": "budget",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 856,
      columnNumber: 37
    }
  }), __jsx("th", {
    scope: "col",
    className: "sort",
    "data-sort": "budget",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 861,
      columnNumber: 37
    }
  }), __jsx("th", {
    scope: "col",
    className: "sort",
    "data-sort": "budget",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 866,
      columnNumber: 37
    }
  }), __jsx("th", {
    scope: "col",
    className: "sort",
    "data-sort": "budget",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 871,
      columnNumber: 37
    }
  }), " ", __jsx("th", {
    scope: "col",
    className: "sort",
    "data-sort": "budget",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 876,
      columnNumber: 37
    }
  }), " ", __jsx("th", {
    scope: "col",
    className: "sort",
    "data-sort": "budget",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 881,
      columnNumber: 37
    }
  }))), __jsx("tbody", {
    className: "list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 888,
      columnNumber: 33
    }
  }, __jsx("tr", {
    style: {
      color: "white"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 889,
      columnNumber: 35
    }
  }, __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 894,
      columnNumber: 37
    }
  }, __jsx("img", {
    width: 50,
    height: 50,
    src: "/assets/img/icons/old-woman.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 895,
      columnNumber: 39
    }
  })), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 902,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "text-lg",
    style: {
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 903,
      columnNumber: 39
    }
  }, "\u0627\u0645\u0631\u0623\u0629 \u0645\u0633\u0646\u0629")), __jsx("td", {
    style: {
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 911,
      columnNumber: 37
    }
  }, __jsx(react_counter_input__WEBPACK_IMPORTED_MODULE_6___default.a, {
    min: 0,
    onCountChange: count => {
      setOldWoman(count);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 912,
      columnNumber: 39
    }
  })), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 919,
      columnNumber: 37
    }
  }, __jsx("img", {
    width: 50,
    height: 50,
    src: "/assets/img/icons/old-man.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 920,
      columnNumber: 39
    }
  })), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 927,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "text-lg",
    style: {
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 928,
      columnNumber: 39
    }
  }, "\u0631\u062C\u0644 \u0645\u0633\u0646")), __jsx("td", {
    style: {
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 935,
      columnNumber: 37
    }
  }, __jsx(react_counter_input__WEBPACK_IMPORTED_MODULE_6___default.a, {
    min: 0,
    onCountChange: count => {
      setOldMan(count);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 936,
      columnNumber: 39
    }
  }))), __jsx("tr", {
    style: {
      color: "white"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 944,
      columnNumber: 35
    }
  }, __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 949,
      columnNumber: 37
    }
  }, __jsx("img", {
    width: 50,
    height: 50,
    src: "/assets/img/icons/wheel.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 950,
      columnNumber: 39
    }
  })), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 957,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "text-lg",
    style: {
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 958,
      columnNumber: 39
    }
  }, "\u0627\u062D\u062A\u064A\u0627\u062C\u0627\u062A \u062E\u0627\u0635\u0629")), __jsx("td", {
    style: {
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 965,
      columnNumber: 37
    }
  }, __jsx(react_counter_input__WEBPACK_IMPORTED_MODULE_6___default.a, {
    min: 0,
    onCountChange: count => {
      setAccibilityPerson(count);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 966,
      columnNumber: 39
    }
  })), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 974,
      columnNumber: 37
    }
  }, __jsx("img", {
    width: 50,
    height: 50,
    src: "/assets/img/icons/baby.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 975,
      columnNumber: 39
    }
  })), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 982,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "text-lg",
    style: {
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 983,
      columnNumber: 39
    }
  }, "\u0637\u0641\u0644 \u0631\u0636\u064A\u0639")), __jsx("td", {
    style: {
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 990,
      columnNumber: 37
    }
  }, __jsx(react_counter_input__WEBPACK_IMPORTED_MODULE_6___default.a, {
    min: 0,
    onCountChange: count => {
      setBaby(count);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 991,
      columnNumber: 39
    }
  }))), __jsx("tr", {
    style: {
      color: "white"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 999,
      columnNumber: 35
    }
  }, __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1004,
      columnNumber: 37
    }
  }, __jsx("img", {
    width: 50,
    height: 50,
    src: "/assets/img/icons/orphan_girl.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1005,
      columnNumber: 39
    }
  })), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1012,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "text-lg",
    style: {
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1013,
      columnNumber: 39
    }
  }, "\u0628\u0646\u0627\u062A \u0623\u064A\u062A\u0627\u0645")), __jsx("td", {
    style: {
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1020,
      columnNumber: 37
    }
  }, __jsx(react_counter_input__WEBPACK_IMPORTED_MODULE_6___default.a, {
    min: 0,
    onCountChange: count => {
      setOrphanGirls(count);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1021,
      columnNumber: 39
    }
  })), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1029,
      columnNumber: 37
    }
  }, __jsx("img", {
    width: 50,
    height: 50,
    src: "/assets/img/icons/orphan_boy.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1030,
      columnNumber: 39
    }
  })), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1037,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "text-lg",
    style: {
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1038,
      columnNumber: 39
    }
  }, "\u0623\u0648\u0644\u0627\u062F \u0623\u064A\u062A\u0627\u0645")), __jsx("td", {
    style: {
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1045,
      columnNumber: 37
    }
  }, __jsx(react_counter_input__WEBPACK_IMPORTED_MODULE_6___default.a, {
    min: 0,
    onCountChange: count => {
      setOrphanBoys(count);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1046,
      columnNumber: 39
    }
  }))), __jsx("tr", {
    style: {
      color: "white"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1054,
      columnNumber: 35
    }
  }, __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1059,
      columnNumber: 37
    }
  }, __jsx("img", {
    width: 50,
    height: 50,
    src: "/assets/img/icons/woman.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1060,
      columnNumber: 39
    }
  })), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1067,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "text-lg",
    style: {
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1068,
      columnNumber: 39
    }
  }, "\u0623\u0631\u0627\u0645\u0644")), __jsx("td", {
    style: {
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1075,
      columnNumber: 37
    }
  }, __jsx(react_counter_input__WEBPACK_IMPORTED_MODULE_6___default.a, {
    min: 0,
    onCountChange: count => {
      setWidows(count);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1076,
      columnNumber: 39
    }
  })), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1084,
      columnNumber: 37
    }
  }, __jsx("img", {
    width: 50,
    height: 50,
    src: "/assets/img/icons/youth-woman.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1085,
      columnNumber: 39
    }
  })), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1092,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "text-lg",
    style: {
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1093,
      columnNumber: 39
    }
  }, "\u0634\u0627\u0628\u0627\u062A")), __jsx("td", {
    style: {
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1100,
      columnNumber: 37
    }
  }, __jsx(react_counter_input__WEBPACK_IMPORTED_MODULE_6___default.a, {
    min: 0,
    onCountChange: count => {
      setGirls(count);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1101,
      columnNumber: 39
    }
  }))), __jsx("tr", {
    style: {
      color: "white"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1109,
      columnNumber: 35
    }
  }, __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1114,
      columnNumber: 37
    }
  }, __jsx("img", {
    width: 50,
    height: 50,
    src: "/assets/img/icons/youth.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1115,
      columnNumber: 39
    }
  })), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1122,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "text-lg",
    style: {
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1123,
      columnNumber: 39
    }
  }, "\u0634\u0628\u0627\u0628")), __jsx("td", {
    style: {
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1130,
      columnNumber: 37
    }
  }, __jsx(react_counter_input__WEBPACK_IMPORTED_MODULE_6___default.a, {
    min: 0,
    onCountChange: count => {
      setGuys(count);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1131,
      columnNumber: 39
    }
  })), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1139,
      columnNumber: 37
    }
  }, __jsx("img", {
    width: 50,
    height: 50,
    src: "/assets/img/icons/girl.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1140,
      columnNumber: 39
    }
  })), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1147,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "text-lg",
    style: {
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1148,
      columnNumber: 39
    }
  }, "\u0628\u0646\u0627\u062A")), __jsx("td", {
    style: {
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1155,
      columnNumber: 37
    }
  }, __jsx(react_counter_input__WEBPACK_IMPORTED_MODULE_6___default.a, {
    min: 0,
    onCountChange: count => {
      setgirl(count);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1156,
      columnNumber: 39
    }
  }))), __jsx("tr", {
    style: {
      color: "white"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1164,
      columnNumber: 35
    }
  }, __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1169,
      columnNumber: 37
    }
  }, __jsx("img", {
    width: 50,
    height: 50,
    src: "/assets/img/icons/boy.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1170,
      columnNumber: 39
    }
  })), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1177,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "text-lg",
    style: {
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1178,
      columnNumber: 39
    }
  }, "\u0623\u0648\u0644\u0627\u062F")), __jsx("td", {
    style: {
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1185,
      columnNumber: 37
    }
  }, __jsx(react_counter_input__WEBPACK_IMPORTED_MODULE_6___default.a, {
    min: 0,
    onCountChange: count => {
      setboy(count);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1186,
      columnNumber: 39
    }
  })), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1194,
      columnNumber: 37
    }
  }, __jsx("img", {
    width: 50,
    height: 50,
    src: "/assets/img/icons/woman.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1195,
      columnNumber: 39
    }
  })), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1202,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "text-lg",
    style: {
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1203,
      columnNumber: 39
    }
  }, "\u0646\u0633\u0627\u0621")), __jsx("td", {
    style: {
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1210,
      columnNumber: 37
    }
  }, __jsx(react_counter_input__WEBPACK_IMPORTED_MODULE_6___default.a, {
    min: 0,
    onCountChange: count => {
      setWomen(count);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1211,
      columnNumber: 39
    }
  }))), __jsx("tr", {
    style: {
      color: "white"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1219,
      columnNumber: 35
    }
  }, __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1224,
      columnNumber: 37
    }
  }, __jsx("img", {
    width: 50,
    height: 50,
    src: "/assets/img/icons/man.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1225,
      columnNumber: 39
    }
  })), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1232,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "text-lg",
    style: {
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1233,
      columnNumber: 39
    }
  }, "\u0631\u062C\u0627\u0644")), __jsx("td", {
    style: {
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1240,
      columnNumber: 37
    }
  }, __jsx(react_counter_input__WEBPACK_IMPORTED_MODULE_6___default.a, {
    min: 0,
    onCountChange: count => {
      setMen(count);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1241,
      columnNumber: 39
    }
  })), __jsx("td", {
    colspan: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1249,
      columnNumber: 37
    }
  })))), __jsx("div", {
    style: {
      marginTop: "30px",
      display: "inline-flex"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1354,
      columnNumber: 31
    }
  }, __jsx("span", {
    className: "text-lg",
    style: {
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1360,
      columnNumber: 33
    }
  }, "\u062D\u0635\u0629 \u0627\u0644\u0639\u0627\u0626\u0644\u0629 \u0645\u0646 \u0627\u0644\u0643\u0648\u0628\u0648\u0646\u0627\u062A (\u0641\u0642\u0637 \u0644\u0644\u062A\u0633\u0647\u064A\u0644 \u064A\u0645\u0643\u0646 \u062A\u063A\u064A\u0631 \u0627\u0644\u0643\u0645\u064A\u0629 \u0648\u0642\u062A \u0627\u0644\u0635\u0631\u0641)"), __jsx("div", {
    style: {
      marginRight: "60px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1367,
      columnNumber: 33
    }
  }, __jsx("input", {
    type: "text",
    onChange: e => {
      setshare(e.target.value);
    },
    className: "form-control numher-person-type",
    style: {
      textAlign: "center"
    },
    value: share,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1372,
      columnNumber: 35
    }
  })))))) : "", step == 3 ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h1", {
    style: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1391,
      columnNumber: 27
    }
  }, "\u0625\u0636\u0627\u0641\u0629 \u0647\u0648\u064A\u0627\u062A \u0627\u0641\u0631\u0627\u062F \u0627\u0644\u0639\u0627\u0626\u0644\u0629 ", NumberOfmembers, " \u0641\u0631\u062F"), SelectedMembers.length > 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, SelectedMembers.map((Member, index) => {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
      className: "card",
      key: pagedown,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1399,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "card-body",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1400,
        columnNumber: 39
      }
    }, __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1401,
        columnNumber: 41
      }
    }, __jsx("div", {
      className: "col-md-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1402,
        columnNumber: 43
      }
    }, __jsx("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1403,
        columnNumber: 45
      }
    }, __jsx("label", {
      className: "form-control-label",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1404,
        columnNumber: 47
      }
    }, "\u0627\u0644\u0625\u0633\u0645 \u0639\u0644\u0649 \u0627\u0644\u0647\u0648\u064A\u0629"), __jsx("input", {
      type: "text",
      name: Member.Member_Name + "index",
      onChange: e => {
        UpdateMembereName(Member, e.target.value);
      },
      value: Member.Member_Name,
      placeholder: "\u0627\u0644\u0625\u0633\u0645 \u0639\u0644\u0649 \u0627\u0644\u0647\u0648\u064A\u0629 ",
      className: "form-control",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1408,
        columnNumber: 47
      }
    }))), __jsx("div", {
      className: "col-md-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1425,
        columnNumber: 43
      }
    }, " ", __jsx("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1427,
        columnNumber: 45
      }
    }, __jsx("label", {
      className: "form-control-label",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1428,
        columnNumber: 47
      }
    }, "\u0631\u0642\u0645 \u0627\u0644\u0647\u0648\u064A\u0629 \u0623\u0648 \u0627\u0644\u0625\u0642\u0627\u0645\u0629"), __jsx("input", {
      type: "number",
      name: Member.Member_Number + "index",
      onChange: e => {
        UpdateMembereNumber(Member, e.target.value);
      },
      value: Member.Member_Number,
      placeholder: "\u0631\u0642\u0645 \u0627\u0644\u0647\u0648\u064A\u0629",
      className: "form-control",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1432,
        columnNumber: 47
      }
    }))), false ? undefined : "", __jsx("div", {
      className: "col-md-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1495,
        columnNumber: 43
      }
    }, __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1496,
        columnNumber: 45
      }
    }), __jsx("button", {
      type: "button",
      class: "btn btn-outline-danger",
      style: {
        float: "left"
      },
      onClick: () => {
        removeMeber(Member);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1497,
        columnNumber: 45
      }
    }, __jsx("span", {
      class: "btn-inner--text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1505,
        columnNumber: 47
      }
    }, " "), __jsx("span", {
      class: "btn-inner--icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1508,
        columnNumber: 47
      }
    }, __jsx("i", {
      class: "ni ni-fat-remove",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1509,
        columnNumber: 49
      }
    }))))))));
  })) : "", __jsx("button", {
    type: "button",
    class: "btn btn-outline-warning",
    style: {
      float: "right"
    },
    onClick: () => {
      NewMember();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1523,
      columnNumber: 27
    }
  }, __jsx("span", {
    class: "btn-inner--text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1531,
      columnNumber: 29
    }
  }, " \u0625\u0636\u0627\u0641\u0629 \u0641\u0631\u062F \u062C\u062F\u064A\u062F"), __jsx("span", {
    class: "btn-inner--icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1532,
      columnNumber: 29
    }
  }, __jsx("i", {
    class: "ni ni-fat-add",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1533,
      columnNumber: 31
    }
  })))) : "", step == 4 ? __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1542,
      columnNumber: 25
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1543,
      columnNumber: 27
    }
  }, __jsx("div", {
    className: "table-responsive",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1544,
      columnNumber: 29
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1545,
      columnNumber: 31
    }
  }, __jsx("table", {
    className: "table align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1546,
      columnNumber: 33
    }
  }, __jsx("thead", {
    className: "thead-light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1547,
      columnNumber: 35
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1548,
      columnNumber: 37
    }
  }, __jsx("th", {
    scope: "col",
    className: "sort",
    "data-sort": "name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1549,
      columnNumber: 39
    }
  }, "\u0627\u0644\u0625\u062D\u062A\u064A\u0627\u062C"), __jsx("th", {
    scope: "col",
    className: "sort",
    "data-sort": "budget",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1556,
      columnNumber: 39
    }
  }, "\u0627\u062E\u062A\u064A\u0627\u0631"))), __jsx("tbody", {
    className: "list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1565,
      columnNumber: 35
    }
  }, categories.length > 0 ? categories.map((data, i) => {
    return __jsx(_components_PersonNeeds__WEBPACK_IMPORTED_MODULE_4__["default"], {
      data: data,
      updateArray: updateArray,
      removeUser: removeUser,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1569,
        columnNumber: 45
      }
    });
  }) : ""))))), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1582,
      columnNumber: 27
    }
  }), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1583,
      columnNumber: 27
    }
  }), __jsx("h2", {
    style: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1584,
      columnNumber: 27
    }
  }, "\u0627\u0644\u0645\u0646\u062F\u0648\u0628"), __jsx(_components_ListMandobes__WEBPACK_IMPORTED_MODULE_3__["default"], {
    user_id: 0,
    mandobe_id: 0,
    setNewMandobe_id: setNewMandobe_id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1585,
      columnNumber: 27
    }
  })) : "", __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1595,
      columnNumber: 23
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
      lineNumber: 1596,
      columnNumber: 25
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
      lineNumber: 1606,
      columnNumber: 29
    }
  }, "\u0627\u0644\u0633\u0627\u0628\u0642"), "     ", step == 4 ? "" : __jsx("button", {
    type: "button",
    class: "btn btn-lg btn-primary",
    disabled: step == 4 ? true : false,
    onClick: () => {
      step == 4 ? false : setStep(step + 1);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1621,
      columnNumber: 29
    }
  }, "\u0627\u0644\u062A\u0627\u0644\u064A"))), step == 4 ? __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1636,
      columnNumber: 25
    }
  }, __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1637,
      columnNumber: 27
    }
  }), personNeeds, __jsx("div", {
    style: {
      textAlign: "left"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1639,
      columnNumber: 27
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
      lineNumber: 1640,
      columnNumber: 29
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
      lineNumber: 1647,
      columnNumber: 31
    }
  }, "\u0625\u0646\u0634\u0627\u0621"), "     ", __jsx("span", {
    class: "btn-inner--icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1657,
      columnNumber: 31
    }
  }, __jsx("i", {
    class: "ni ni-send",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1658,
      columnNumber: 33
    }
  }))))) : "")))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1671,
      columnNumber: 15
    }
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_10__["ProtectRoute"])(Table));

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
  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "api/getCompany?name=" + name, _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
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
  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "api/getSponsors?phone=" + phone + "&getType=" + getType, _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
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
  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "api/GetFullCCAs?pageup=" + pageup, _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
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
  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "api/GetAllMandobes", _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
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
  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "api/GetC", _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
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
  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "api/CompanysStatistic?name=" + name, _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  };
}
function UserStatistics(user_id, pageup) {
  const {
    loading
  } = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    data,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "api/UserStatistics?user_id=" + user_id + "&pageup=" + pageup, _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
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
  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "api/GetApproveMandobes", _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
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
  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "api/GetApproveuserssM", _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
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
  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "api/GetApproveuserss", _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
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
  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "api/CompanysStatistics", _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
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
  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "api/getUserCards?user_id=" + user_id, _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
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
    } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "api/GetMandobes", _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
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
    } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "api/OrderGetMandobes?page=" + page + "&name=" + name + "&Scity=" + Scity + "&Saera=" + Saera + "&RsName=" + RsName + "&RsPhone=" + RsPhone, _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
    return {
      data: data,
      isLoading: !error && !data,
      isError: error
    };
  }
}
function Getuserss2(request, name, members, last_coubon, total_coubons, piority, page, Scity, Saera, Scat, RsName, RsPhone, Spaiority, SType, SNumber) {
  if (request == "firstTime") {
    const {
      loading
    } = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    const {
      data,
      error
    } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "api/Getuserss2", _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
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
    } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "api/OrderGetuserss2?page=" + page + "&name=" + name + "&members=" + members + "&last_coubon=" + last_coubon + "&total_coubons=" + total_coubons + "&Scity=" + Scity + "&Saera=" + Saera + "&Scat=" + Scat + "&piority=" + piority + "&RsName=" + RsName + "&RsPhone=" + RsPhone + "&Spaiority=" + Spaiority + "&SType=" + SType + "&SNumber=" + SNumber, _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
    return {
      data: data,
      isLoading: !error && !data,
      isError: error
    };
  }
}
function GetMandobUsers(request, name, members, last_coubon, total_coubons, piority, page, Scity, Saera, Scat, RsName, RsPhone, mandobe_id, Spaiority, SType, SNumber) {
  if (request == "firstTime") {
    const {
      loading
    } = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    const {
      data,
      error
    } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "api/GetMandobUsers?mandobe_id=" + mandobe_id, _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
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
    } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "api/OrderGetMandobUsers?page=" + page + "&name=" + name + "&members=" + members + "&last_coubon=" + last_coubon + "&total_coubons=" + total_coubons + "&Scity=" + Scity + "&Saera=" + Saera + "&Scat=" + Scat + "&piority=" + piority + "&RsName=" + RsName + "&RsPhone=" + RsPhone + "&mandobe_id=" + mandobe_id + "&Spaiority=" + Spaiority + "&SType=" + SType + "&SNumber=" + SNumber, _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
    return {
      data: data,
      isLoading: !error && !data,
      isError: error
    };
  }
}
function Getuserss(request, name, members, last_coubon, total_coubons, piority, page, Scity, Saera, Scat, RsName, RsPhone, hide, Spaiority, SType, SNumber) {
  if (request == "firstTime") {
    const {
      loading
    } = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    const {
      data,
      error
    } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "api/Getuserss", _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
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
    } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "api/OrderGetuserss?page=" + page + "&name=" + name + "&members=" + members + "&last_coubon=" + last_coubon + "&total_coubons=" + total_coubons + "&Scity=" + Scity + "&Saera=" + Saera + "&Scat=" + Scat + "&piority=" + piority + "&RsName=" + RsName + "&RsPhone=" + RsPhone + "&hide=" + hide + "&Spaiority=" + Spaiority + "&SType=" + SType + "&SNumber=" + SNumber, _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
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
  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "api/GetCouponsByBracnhCat?Branchid=" + Branchid + "&Categoryid=" + Categoryid, _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
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
  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "api/GetCouponBranches?Section_id=" + Section_id, _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
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
  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "api/GetUserMeta?TheUser_id=" + TheUser_id, _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
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
  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "api/GetCategories", _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
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
  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "api/GetCompanys", _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
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
  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "api/GetCategorysByCity?city=" + city, _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
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
  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "api/GetCouponsBySection?section_id=" + section_id, _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
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
  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "api/GetCouponsBybranch?Id=" + Id + "&getType=" + getType, _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
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
  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(loading ? false : "api/GetCCAs", _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  };
}
/* harmony default export */ __webpack_exports__["default"] = (api_get);

/***/ }),

/***/ 6:
/*!*************************************!*\
  !*** multi ./pages/RegisterUser.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\next\pages\RegisterUser.js */"./pages/RegisterUser.js");


/***/ }),

/***/ "@material-ui/icons/AddCircleOutline":
/*!******************************************************!*\
  !*** external "@material-ui/icons/AddCircleOutline" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AddCircleOutline");

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

/***/ "react-counter-input":
/*!**************************************!*\
  !*** external "react-counter-input" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-counter-input");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FkbWluX25hdi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0J1dHRvblVwbG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlck5hdi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xpc3RNYW5kb2Jlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BlcnNvbk5lZWRzLmpzIiwid2VicGFjazovLy8uL2NvbnRleHRzL2F1dGguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL1JlZ2lzdGVyVXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9BcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvYXBpX2dldC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkQ2lyY2xlT3V0bGluZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlcy1leGFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYWxlcnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jb3VudGVyLWlucHV0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1sb2FkaW5nLXNrZWxldG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3dyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXJsXCIiXSwibmFtZXMiOlsiQWRtaW5fbmF2Iiwicm91dGVyIiwidXNlUm91dGVyIiwiaXNNb2JpbGUiLCJzZXRJc01vYmlsZSIsInVzZVN0YXRlIiwidG9nZ2xlciIsInNldHRvZ2dsZXIiLCJsb2FkaW5nIiwibG9nb3V0IiwidXNlQXV0aCIsInVzZUVmZmVjdCIsInRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkaXNwbGF5IiwiQ29va2llcyIsImdldCIsInRleHRBbGlnbiIsInB1c2giLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5SaWdodCIsImJvcmRlclJhZGl1cyIsImZvbnRXZWlnaHQiLCJjb2xvciIsIm1hcmdpblRvcCIsInBhdGhuYW1lIiwid2lkdGgiLCJmbG9hdCIsIkJ1dHRvblVwbG9hZEltYWdlIiwidHlwZUltYWdlIiwib25DaGFuZ2UiLCJpbnB1dEtleSIsImUiLCJGb290ZXIiLCJIZWFkZXIiLCJ6SW5kZXgiLCJwb3NpdGlvbiIsImhlaWdodCIsInBhZGRpbmciLCJMaXN0TWFuZG9iZXMiLCJ1c2VyX2lkIiwibWFuZG9iZV9pZCIsInNldE5ld01hbmRvYmVfaWQiLCJzcGlubmVyIiwic2V0c3Bpbm5lciIsImZpcnN0aW1lIiwic2V0Zmlyc3RUaW1lIiwiTWFuZG9iZU5hbWUiLCJzZXRNYW5kb2JlTmFtZSIsImRhdGEiLCJpc0xvYWRpbmciLCJpc0Vycm9yIiwiR2V0QWxsTWFuZG9iZXMiLCJjb25zb2xlIiwibG9nIiwibG9jYWxTdG9yYWdlIiwibWFuZG9iZUNpdHkiLCJyZXN1bHRzIiwic2hvd1NrZWxldG9uIiwibGVuZ3RoIiwiZm9udFNpemUiLCJtYXAiLCJtYW5kb2JlIiwiaW5kZXgiLCJpZCIsIk5hbWUiLCJjaXR5IiwidGFyZ2V0IiwidmFsdWUiLCJQZXJzb25OZWVkcyIsInVwZGF0ZUFycmF5IiwicmVtb3ZlVXNlciIsIm5hbWUiLCJjaGVja2VkIiwiQXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsInNldExvYWRpbmciLCJsb2FkVXNlckZyb21Db29raWVzIiwidG9rZW4iLCJhcGkiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwicG9zdCIsInRoZW4iLCJyZXMiLCJjYXRjaCIsImVyciIsInJlbW92ZSIsIlJvdXRlciIsInVzZXJfbmljZW5hbWUiLCJ1c2VyX2VtYWlsIiwiVXNlclR5cGUiLCJDb21wYW55Q29kZSIsIkJyYWNuaENvZGUiLCJwcm9maWxlX3BpYyIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJTZW5kY29uZCIsInBob25lIiwidGVtcHJlcyIsInBob25lTG9naW4iLCJjb2RlIiwic2V0IiwiZXhwaXJlcyIsImxvZ2luIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImVtYWlsIiwiaXNBdXRoZW50aWNhdGVkIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJQcm90ZWN0Um91dGUiLCJDb21wb25lbnQiLCJhcmd1bWVudHMiLCJQcm90ZWN0Um91dGVDb21wYW55IiwiUHJvdGVjdFJvdXRlTWFuZG9iZSIsInVybCIsIm9yaWdpbiIsImxhc3RIcmVmIiwibGFzdEFzIiwibGFzdFJlc3VsdCIsImhyZWYiLCJhcyIsInJlc3VsdCIsImZvcm1hdEZ1bmMiLCJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJvYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsImdldE9ic2VydmVyIiwiY29uc3RydWN0b3IiLCJwIiwibWVtb2l6ZWRGb3JtYXRVcmwiLCJmb3JtYXRVcmwiLCJhc0hyZWYiLCJub2RlTmFtZSIsImlzTG9jYWwiLCJzY3JvbGwiLCJzaGFsbG93Iiwic3VjY2VzcyIsImRvY3VtZW50IiwicHJvcHMiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImdldFBhdGhzIiwicmVzb2x2ZWRIcmVmIiwicGFyc2VkQXMiLCJoYW5kbGVSZWYiLCJyZWYiLCJpc1ByZWZldGNoZWQiLCJwcmVmZXRjaCIsInBhdGhzIiwicmVuZGVyIiwiY2hpbGQiLCJDaGlsZHJlbiIsImVsIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJvbkNsaWNrIiwicHJvY2VzcyIsIlJlYWN0Iiwid2FybiIsIlByb3BUeXBlcyIsInJlcXVpcmUiLCJleGFjdCIsIkxpbmsiLCJyZXBsYWNlIiwicGFzc0hyZWYiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiT2JqZWN0IiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudCIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJwYXRoIiwicHJlcGFyZVJvdXRlIiwidG9Sb3V0ZSIsImF0dGVtcHRzIiwiaXNTZXJ2ZXJSZW5kZXIiLCJhZGRCYXNlUGF0aCIsIl9fTkVYVF9EQVRBX18iLCJidWlsZElkIiwiZGVsQmFzZVBhdGgiLCJjcmVkZW50aWFscyIsImdldFJlc3BvbnNlIiwicm91dGUiLCJxdWVyeSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiUHJvbWlzZSIsImZldGNoTmV4dERhdGEiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsInVwZGF0ZSIsIm1vZCIsIm5ld0RhdGEiLCJyZWxvYWQiLCJiYWNrIiwib3B0aW9ucyIsImNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJyZXNvbHZlIiwibWV0aG9kIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJtaXNzaW5nUGFyYW1zIiwicGFyYW0iLCJyZWplY3QiLCJhc1BhdGhuYW1lIiwicm91dGVJbmZvIiwiZXJyb3IiLCJhcHBDb21wIiwiY2hhbmdlU3RhdGUiLCJnZXRSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJoYW5kbGVFcnJvciIsInBhZ2UiLCJnaXBFcnIiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsImNhbmNlbGxlZCIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5IiwiVEVTVF9ST1VURSIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGFyYW1zIiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsImVzY2FwZWRSb3V0ZSIsImVzY2FwZVJlZ2V4Iiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsImlzT3B0aW9uYWwiLCIkMSIsImlzQ2F0Y2hBbGwiLCJwb3MiLCJyZXBlYXQiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImtleSIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicHJvdG9jb2wiLCJob3N0bmFtZSIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsIlRhYmxlIiwiYWxlcnQiLCJ1c2VBbGVydCIsIlNlbGVjdGVkTWVtYmVycyIsInNldFNlbGVjdGVkTWVtYmVycyIsIk1lbWJlcl9pZCIsIk1lbWJlcl9OYW1lIiwiTWVtYmVyX2ltZyIsIk1lbWJlcl9OdW1iZXIiLCJOZXdNYW5kb2JlX2lkIiwicGFnZWRvd24iLCJzZXRwYWdlZG93biIsIkdldEZ1bGxDQ0FzIiwiQ0NBcyIsInNldENDQXMiLCJjaXR5cyIsInNldGNpdHlzIiwiYWVyYXMiLCJzZXRhZXJhcyIsImRlcyIsInNldGRlcyIsIlRoZVNlbGVjdGVkQ291bnRyeSIsInNldFRoZVNlbGVjdGVkQ291bnRyeSIsIlRoZVNlbGVjdGVkQ2l0eSIsInNldFRoZVNlbGVjdGVkQ2l0eSIsIlRoZVNlbGVjdGVkYWVyYSIsInNldFRoZVNlbGVjdGVkYWVyYSIsImZpcnN0VGltZSIsImNhdGVnb3JpZXMiLCJzZXRjYXRlZ29yaWVzIiwiZmFtaWx5VHlwZSIsInNldGZhbWlseVR5cGUiLCJzZXRwcmlvcml0eSIsIkZpcnN0TmFtZSIsInNldEZpcnN0TmFtZSIsIkxhc3ROYW1lIiwic2V0TGFzdE5hbWUiLCJzZXRlbWFpbCIsInNldHBob25lIiwibWVtcGVyc0NvdW50Iiwic2V0bWVtcGVyc0NvdW50Iiwic2hhcmUiLCJzZXRzaGFyZSIsIm9sZFdvbWFuIiwic2V0T2xkV29tYW4iLCJvbGRNYW4iLCJzZXRPbGRNYW4iLCJhY2NpYmlsaXR5UGVyc29uIiwic2V0QWNjaWJpbGl0eVBlcnNvbiIsImJhYnkiLCJzZXRCYWJ5Iiwib3JwaGFuR2lybHMiLCJzZXRPcnBoYW5HaXJscyIsIm9ycGhhbkJveXMiLCJzZXRPcnBoYW5Cb3lzIiwiZ2lybHMiLCJzZXRHaXJscyIsImd1eXMiLCJzZXRHdXlzIiwid29tZW4iLCJzZXRXb21lbiIsIm1lbiIsInNldE1lbiIsIndpZG93cyIsInNldFdpZG93cyIsImdpcmwiLCJzZXRnaXJsIiwiYm95Iiwic2V0Ym95IiwiUGhvbmVGaWVsZCIsInNldFBob25lRmllbGQiLCJhZGRyZXNzIiwic2V0YWRkcmVzcyIsInBlcnNvbk5lZWRzIiwic2V0UGVyc29uTmVlZHMiLCJzdGVwIiwic2V0U3RlcCIsImxpc3QiLCJ1cGRhdGVMaXN0IiwiYWxsb3dlZCIsInNldGFsbG93ZWQiLCJmYXZvcml0ZSIsImZpbHRlciIsInJlY2FsYyIsIm15c3VibWl0IiwiY2hlY2tlIiwibXljYWxjIiwicGFyc2VJbnQiLCJzaG93IiwidGltZW91dCIsInR5cGUiLCJOdW1iZXJPZm1lbWJlcnMiLCJUaGVQaG9uZSIsImVsZW1lbnQiLCJ0ZXN0YyIsInR0IiwiZ2V0TnVtYmVyT2ZtZW1iZXJzIiwicmVtb3ZlTWViZXIiLCJRTWVtYmVyIiwibXlkYXRhIiwibmV3ZGF0YSIsInJlbW92ZU1lbWJlcl9pbWciLCJVcGRhdGVNZW1iZXJlTmFtZSIsIk5ld05hbWUiLCJVcGRhdGVNZW1iZXJlTnVtYmVyIiwic3RlcDIiLCJzaXRlVXJsIiwiTmV3TWVtYmVyIiwicmFuZG9tX2lkIiwiTWF0aCIsInJhbmRvbSIsImhhbmRsZVRodW1ibmFpbFByb2R1Y3QiLCJmaWxlIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsIm15aW1nIiwiYXBwZW5kIiwiYXhpb3MiLCJzb3VyY2VfdXJsIiwic2VsZWN0ZWRDb3VudHkiLCJ0ZW1wY29udW50eSIsImNvdW50eSIsInNlbGVjdGVkY2l0eSIsInRlbXBjaXR5IiwiaSIsImNvdW50IiwiTWVtYmVyIiwibWFyZ2luIiwibWFyZ2luTGVmdCIsInVybHMiLCJkZXZlbG9wbWVudCIsInByb2R1Y3Rpb24iLCJBeGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJBY2NlcHQiLCJhcGlfZ2V0IiwiZ2V0Q29tcGFueSIsInVzZVNXUiIsImdldFNwb25zb3JzIiwiZ2V0VHlwZSIsInBhZ2V1cCIsIkdldEMiLCJDb21wYW55c1N0YXRpc3RpYyIsIlVzZXJTdGF0aXN0aWNzIiwiVXNlclN0YXRpc3RpY3NEYXRhIiwiVXNlclN0YXRpc3RpY3NlcnJvcmlzTG9hZGluZyIsIlVzZXJTdGF0aXN0aWNzZXJyb3Jpc0Vycm9yIiwiR2V0QXBwcm92ZU1hbmRvYmVzIiwiR2V0QXBwcm92ZXVzZXJzc00iLCJHZXRBcHByb3ZldXNlcnNzIiwiQ29tcGFueXNTdGF0aXN0aWNzIiwiZ2V0VXNlckNhcmRzIiwiR2V0TWFuZG9iZXMiLCJyZXF1ZXN0IiwiU2NpdHkiLCJTYWVyYSIsIlJzTmFtZSIsIlJzUGhvbmUiLCJHZXR1c2Vyc3MyIiwibWVtYmVycyIsImxhc3RfY291Ym9uIiwidG90YWxfY291Ym9ucyIsInBpb3JpdHkiLCJTY2F0IiwiU3BhaW9yaXR5IiwiU1R5cGUiLCJTTnVtYmVyIiwiR2V0TWFuZG9iVXNlcnMiLCJHZXR1c2Vyc3MiLCJoaWRlIiwiR2V0Q291cG9uc0J5QnJhY25oQ2F0IiwiQnJhbmNoaWQiLCJDYXRlZ29yeWlkIiwiR2V0Q291cG9uQnJhbmNoZXMiLCJTZWN0aW9uX2lkIiwiQ291cG9uQnJhbmNoZXMiLCJDb3Vwb25CcmFuY2hlc2lzTG9hZGluZyIsIkNvdXBvbkJyYW5jaGVzaXNFcnJvciIsIkdldFVzZXJNZXRhIiwiVGhlVXNlcl9pZCIsIlVzZXJNZXRhIiwiVXNlck1ldGFpc0xvYWRpbmciLCJVc2VyTWV0YWlzRXJyb3IiLCJHZXRDYXRlZ29yaWVzIiwiR2V0Q29tcGFueXMiLCJHZXRDYXRlZ29yeXNCeUNpdHkiLCJHZXRDb3Vwb25zQnlTZWN0aW9uIiwic2VjdGlvbl9pZCIsIkdldENvdXBvbnNCeWJyYW5jaCIsIklkIiwiR2V0Q0NBcyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Es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QUEzQjtBQUNBLFFBQU07QUFBRXlDLFFBQUY7QUFBUTJNO0FBQVIsTUFBa0J5TSwwQ0FBTSxDQUFDL2IsT0FBTyxHQUFHLEtBQUgsR0FBVyxhQUFuQixFQUFrQzZFLHFEQUFHLENBQUNuRSxHQUF0QyxDQUE5QjtBQUNBLFNBQU87QUFDTGlDLFFBQUksRUFBRUEsSUFERDtBQUVMQyxhQUFTLEVBQUUsQ0FBQzBNLEtBQUQsSUFBVSxDQUFDM00sSUFGakI7QUFHTEUsV0FBTyxFQUFFeU07QUFISixHQUFQO0FBS0Q7QUFFY3VNLHNFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNWlCQSxnRTs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxnQzs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcUmVnaXN0ZXJVc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XHJcblxyXG5pbXBvcnQgdXNlQXV0aCwgeyBQcm90ZWN0Um91dGUgfSBmcm9tIFwiLi4vY29udGV4dHMvYXV0aC5qc1wiO1xyXG5cclxuZnVuY3Rpb24gQWRtaW5fbmF2KCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtpc01vYmlsZSwgc2V0SXNNb2JpbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHsgdG9nZ2xlciwgc2V0dG9nZ2xlciwgbG9hZGluZywgbG9nb3V0IH0gPSB1c2VBdXRoKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBkZXZpY2UgZGV0ZWN0aW9uXHJcbiAgICBpZiAoXHJcbiAgICAgIC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChcclxuICAgICAgICBuYXZpZ2F0b3IudXNlckFnZW50XHJcbiAgICAgIClcclxuICAgICkge1xyXG4gICAgICAvLyBzZXR0b2dnbGVyKGZhbHNlKTtcclxuICAgIH1cclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPG5hdlxyXG4gICAgICBjbGFzc05hbWU9XCJhYWZhIHNpZGVuYXYgbmF2YmFyIG5hdmJhci12ZXJ0aWNhbCAgZml4ZWQtcmlnaHQgIG5hdmJhci1leHBhbmQteHMgbmF2YmFyLWxpZ2h0IGJnLXdoaXRlXCJcclxuICAgICAgaWQ9XCJzaWRlbmF2LW1haW5cIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcm9sbGJhci1pbm5lclwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjRjVGNkY4XCIgfX0+XHJcbiAgICAgICAgey8qIEJyYW5kICovfVxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzaWRlbmF2LWhlYWRlciAgYWxpZ24taXRlbXMtY2VudGVyXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCI+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9XCIuLi9hc3NldHMvaW1nL2JyYW5kL2JsdWUucG5nXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmQtaW1nXCJcclxuICAgICAgICAgICAgICBhbHQ9XCIuLi5cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWlubmVyXCI+XHJcbiAgICAgICAgICB7LyogQ29sbGFwc2UgKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwic2lkZW5hdi1jb2xsYXBzZS1tYWluXCI+XHJcbiAgICAgICAgICAgIHsvKiBOYXYgaXRlbXMgKi99XHJcbiAgICAgICAgICAgIHtDb29raWVzLmdldChcIlVzZXJUeXBlXCIpID09IFwiYWRtaW5cIiA/IChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXZcIiBzdHlsZT17eyB0ZXh0QWxpZ246IFwicmlnaHRcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGxvZ291dCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL01hbmFnZW1lbnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBzcmM9e1wiL2xvZ28ucG5nXCJ9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0gY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTAlXCIsIGJvcmRlclJhZGl1czogXCIzMHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtDb29raWVzLmdldChcInByb2ZpbGVfcGljXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiLTFweFwiLCBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Q29va2llcy5nZXQoXCJmaXJzdF9uYW1lXCIpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvb2tpZXMuZ2V0KFwibGFzdF9uYW1lXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6IFwiIzRDQUY1MFwiIH19IGNsYXNzTmFtZT1cImNvbC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAg2YXYr9mK2LFcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWF1dG9cIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMyVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vaHJlZj17eyBwYXRobmFtZTogXCIvYWJvdXRcIiwgcXVlcnk6IHsgbmFtZTogXCJ0ZXN0XCIgfSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9VcGRhdGVQcm9maWxlQVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZXBsYWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwibmkgbmktc2V0dGluZ3MtZ2Vhci02NVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAvL2hyZWY9e3sgcGF0aG5hbWU6IFwiL2Fib3V0XCIsIHF1ZXJ5OiB7IG5hbWU6IFwidGVzdFwiIH0gfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvQ29tcGFueXNTdGF0aXN0aWNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8vIHJlcGxhY2VcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSBcIi9Db21wYW55c1N0YXRpc3RpY3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIm5hdi1saW5rIGFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibmF2LWxpbmsgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09IFwiL0NvbXBhbnlzU3RhdGlzdGljc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHsgYmFja2dyb3VuZENvbG9yOiBcIiNjN2U0YWVcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibmkgbmktY2hhcnQtcGllLTM1IHRleHQtb3JhbmdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LWxpbmstdGV4dFwiPtil2K3Ytdin2KbZitin2Kog2KfZhNi02LHZg9in2Ko8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbXBhbnlzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSBcIi9jb21wYW55c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwibmF2LWxpbmsgYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJuYXYtbGluayBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvY29tcGFueXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7IGJhY2tncm91bmRDb2xvcjogXCIjYzdlNGFlXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm5pIG5pLWJ1aWxkaW5nIHRleHQtaW5mb1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi1saW5rLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAg2KXYr9in2LHYqSDYp9mE2LTYsdmD2KfYqiDZiNin2YTZg9mI2KjZiNmG2KfYqlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL0Rpc3RyaWJ1dGVDb3Vwb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSBcIi9EaXN0cmlidXRlQ291cG9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwibmF2LWxpbmsgYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJuYXYtbGluayBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvRGlzdHJpYnV0ZUNvdXBvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7IGJhY2tncm91bmRDb2xvcjogXCIjYzdlNGFlXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm5pIG5pLXRhZyB0ZXh0LWRhbmdlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi1saW5rLXRleHRcIj7Ytdix2YEg2KfZhNmD2YjYqNmI2YbYp9iqPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9OZWVkc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvTmVlZHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIm5hdi1saW5rIGFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibmF2LWxpbmsgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09IFwiL05lZWRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8geyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2M3ZTRhZVwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoge31cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJuaSBuaS1hcmNoaXZlLTIgXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LWxpbmstdGV4dFwiPtil2K/Yp9ix2Kkg2KfZhNil2K3YqtmK2KfYrNin2Ko8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1VzZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSBcIi9Vc2Vyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwibmF2LWxpbmsgYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJuYXYtbGluayBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvVXNlcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7IGJhY2tncm91bmRDb2xvcjogXCIjYzdlNGFlXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm5pIG5pLXNpbmdsZS0wMiB0ZXh0LXByaW1hcnlcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtbGluay10ZXh0XCI+2KzZhdmK2Lkg2KfZhNmF2LPYqtmB2YrYr9mK2YY8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1JlZ2lzdGVyVXNlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvUmVnaXN0ZXJVc2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJuYXYtbGluayBhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5hdi1saW5rIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSBcIi9SZWdpc3RlclVzZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7IGJhY2tncm91bmRDb2xvcjogXCIjYzdlNGFlXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm5pIG5pLWNpcmNsZS0wOCBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtbGluay10ZXh0XCI+2KrYs9is2YrZhCDZhdiz2KrZgdmK2K88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL0NDQVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvQ0NBXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJuYXYtbGluayBhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5hdi1saW5rIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSBcIi9DQ0FcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7IGJhY2tncm91bmRDb2xvcjogXCIjYzdlNGFlXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm5pIG5pLWNpcmNsZS0wOCBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtbGluay10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAg2KfZhNiv2YjZhCDZiNin2YTZhdiv2YYg2YjYp9mE2YXZhtin2LfZglxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL0FwcHJvdmVVc2Vyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvQXBwcm92ZVVzZXJzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJuYXYtbGluayBhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5hdi1saW5rIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSBcIi9BcHByb3ZlVXNlcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7IGJhY2tncm91bmRDb2xvcjogXCIjYzdlNGFlXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm5pIG5pLWNpcmNsZS0wOCBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtbGluay10ZXh0XCI+2KXYudiq2YXYp9ivINin2YTZhdiz2KrZgdmK2K/ZitmGPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9NYW5kb2Jlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvTWFuZG9iZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIm5hdi1saW5rIGFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibmF2LWxpbmsgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09IFwiL01hbmRvYmVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8geyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2M3ZTRhZVwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoge31cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJuaSBuaS1icmllZmNhc2UtMjQgdGV4dC1wcmltYXJ5IFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi1saW5rLXRleHRcIj7YrNmF2YrYuSDYp9mE2KzZhdi52YrYp9iqPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9SZWdpc3Rlck1hbmRvYmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09IFwiL1JlZ2lzdGVyTWFuZG9iZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwibmF2LWxpbmsgYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJuYXYtbGluayBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvUmVnaXN0ZXJNYW5kb2JlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8geyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2M3ZTRhZVwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoge31cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJuaSBuaS1icmllZmNhc2UtMjQgXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LWxpbmstdGV4dFwiPtiq2LPYrNmK2YQg2KzZhdi52YrYqTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvQXBwcm92ZU1hbmRvYmVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSBcIi9BcHByb3ZlTWFuZG9iZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIm5hdi1saW5rIGFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibmF2LWxpbmsgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09IFwiL0FwcHJvdmVNYW5kb2Jlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHsgYmFja2dyb3VuZENvbG9yOiBcIiNjN2U0YWVcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibmkgbmktYnJpZWZjYXNlLTI0IFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi1saW5rLXRleHRcIj7Ypdi52KrZhdin2K8g2KzZhdi52YrYqTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvU3BvbnNvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvU3BvbnNvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwibmF2LWxpbmsgYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJuYXYtbGluayBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvU3BvbnNvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHsgYmFja2dyb3VuZENvbG9yOiBcIiNjN2U0YWVcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibmkgbmktYnJpZWZjYXNlLTI0IFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi1saW5rLXRleHRcIj7Yp9mE2K/Yp9i52YXZitmGPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGxvZ291dCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL01hbmFnZW1lbnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBzcmM9e1wiL2xvZ28ucG5nXCJ9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYigyNDUsMjQ2LDI0OClcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+2KfZhNiv2LnZhSDYp9mE2YHZhtmKPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPklORk9AR1VUVVJFU0FHRVMuQ09NPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkgOiBDb29raWVzLmdldChcIlVzZXJUeXBlXCIpID09IFwiQ29tcGFueVwiID8gKFxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17XCIvbG9nby5wbmdcIn0gLz5cclxuICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTAlXCIsIGJvcmRlclJhZGl1czogXCIzMHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17Q29va2llcy5nZXQoXCJwcm9maWxlX3BpY1wiKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiLTFweFwiLCBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge0Nvb2tpZXMuZ2V0KFwiZmlyc3RfbmFtZVwiKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIENvb2tpZXMuZ2V0KFwibGFzdF9uYW1lXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiBcIiM0Q0FGNTBcIiB9fSBjbGFzc05hbWU9XCJjb2wtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDYtNix2YPYqVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvL2hyZWY9e3sgcGF0aG5hbWU6IFwiL2Fib3V0XCIsIHF1ZXJ5OiB7IG5hbWU6IFwidGVzdFwiIH0gfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL1VwZGF0ZVByb2ZpbGVDXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZXBsYWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YT7Yqti52K/ZitmEPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgIC8vaHJlZj17eyBwYXRobmFtZTogXCIvYWJvdXRcIiwgcXVlcnk6IHsgbmFtZTogXCJ0ZXN0XCIgfSB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvQ29tcGFueVN0YXRpc3RpY3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlcGxhY2VcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvQ29tcGFueVN0YXRpc3RpY3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJuYXYtbGluayBhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJuYXYtbGluayBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvQ29tcGFueVN0YXRpc3RpY3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8geyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2M3ZTRhZVwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IHt9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibmkgbmktY2hhcnQtcGllLTM1IHRleHQtb3JhbmdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi1saW5rLXRleHRcIj7Ypdit2LXYp9im2YrYp9iqPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbXBhbnlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09IFwiL2NvbXBhbnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJuYXYtbGluayBhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJuYXYtbGluayBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvY29tcGFueVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7IGJhY2tncm91bmRDb2xvcjogXCIjYzdlNGFlXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDoge31cclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJuaSBuaS1idWlsZGluZyB0ZXh0LWluZm9cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LWxpbmstdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINil2K/Yp9ix2Kkg2KfZhNmB2LHZiNi5INmI2KfZhNmD2YjYqNmI2YbYp9iqXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvQ29tcGFueVNwb25zb3JzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSBcIi9Db21wYW55U3BvbnNvcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJuYXYtbGluayBhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJuYXYtbGluayBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvQ29tcGFueVNwb25zb3JzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IHsgYmFja2dyb3VuZENvbG9yOiBcIiNjN2U0YWVcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7fVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm5pIG5pLWJ1aWxkaW5nIHRleHQtaW5mb1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtbGluay10ZXh0XCI+INin2YTYr9in2LnZhdmK2YY8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjk1JVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjUzcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBcInJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGxvZ291dCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICDYqtiz2KzZitmEINin2YTYrtix2YjYrFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdlwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e1wiL2xvZ28ucG5nXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fSBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwJVwiLCBib3JkZXJSYWRpdXM6IFwiMzBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e0Nvb2tpZXMuZ2V0KFwicHJvZmlsZV9waWNcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLThcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIi0xcHhcIiwgZm9udFdlaWdodDogXCJib2xkXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtDb29raWVzLmdldChcImZpcnN0X25hbWVcIikgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBDb29raWVzLmdldChcImxhc3RfbmFtZVwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogXCIjNENBRjUwXCIgfX0gY2xhc3NOYW1lPVwiY29sLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAg2KzZhdi52YrYqVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvL2hyZWY9e3sgcGF0aG5hbWU6IFwiL2Fib3V0XCIsIHF1ZXJ5OiB7IG5hbWU6IFwidGVzdFwiIH0gfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL1VwZGF0ZVByb2ZpbGVNXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZXBsYWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YT7Yqti52K/ZitmEPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgIC8vaHJlZj17eyBwYXRobmFtZTogXCIvYWJvdXRcIiwgcXVlcnk6IHsgbmFtZTogXCJ0ZXN0XCIgfSB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvTXlVc2Vyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVwbGFjZVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSBcIi9NeVVzZXJzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwibmF2LWxpbmsgYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibmF2LWxpbmsgXCJcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09IFwiL015VXNlcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8geyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2M3ZTRhZVwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IHt9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibmkgbmktY2hhcnQtcGllLTM1IHRleHQtb3JhbmdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi1saW5rLXRleHRcIj7Yp9mE2YXYs9iq2YHZitiv2YrZhjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9SZWdpc3Rlcl9Vc2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSBcIi9SZWdpc3Rlcl9Vc2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwibmF2LWxpbmsgYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibmF2LWxpbmsgXCJcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09IFwiL1JlZ2lzdGVyX1VzZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8geyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2M3ZTRhZVwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IHt9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibmkgbmktYnVpbGRpbmcgdGV4dC1pbmZvXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi1saW5rLXRleHRcIj4g2KrYs9is2YrZhCDZhdiz2KrZgdmK2K88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvQXBwcm92ZVVzZXJzTVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvQXBwcm92ZVVzZXJzTVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIm5hdi1saW5rIGFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5hdi1saW5rIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSBcIi9BcHByb3ZlVXNlcnNNXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IHsgYmFja2dyb3VuZENvbG9yOiBcIiNjN2U0YWVcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7fVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm5pIG5pLWJ1aWxkaW5nIHRleHQtaW5mb1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtbGluay10ZXh0XCI+INil2LnYqtmF2KfYryDYp9mE2YXYs9iq2YHZitiv2YrZhjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiOTUlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiNTNweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IFwicmlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbG9nb3V0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgINiq2LPYrNmK2YQg2KfZhNiu2LHZiNisXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7LyogRGl2aWRlciAqL31cclxuXHJcbiAgICAgICAgICAgIHsvKiBIZWFkaW5nICovfVxyXG5cclxuICAgICAgICAgICAgey8qIE5hdmlnYXRpb24gKi99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZG1pbl9uYXY7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFkZENpcmNsZU91dGxpbmVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkQ2lyY2xlT3V0bGluZVwiO1xyXG5cclxuY29uc3QgQnV0dG9uVXBsb2FkSW1hZ2UgPSAoeyB0eXBlSW1hZ2UsIG9uQ2hhbmdlIH0pID0+IHtcclxuICBjb25zdCBpbnB1dEtleSA9IFwidXBsb2FkLXByb2R1Y3QtaW1hZ2UtXCIgKyB0eXBlSW1hZ2U7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInVwbG9hZC1pbWFnZS1ob2xkZXJcIj5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgaWQ9e2lucHV0S2V5fVxyXG4gICAgICAgIG11bHRpcGxlPXt0eXBlSW1hZ2UgIT09IFwidGh1bWJuYWlsXCJ9XHJcbiAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImhpZGUtdXBsb2FkLWlucHV0XCJcclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlICYmIG9uQ2hhbmdlKGUpfVxyXG4gICAgICAvPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJhZGQtaWNvblwiPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPXtpbnB1dEtleX0+XHJcbiAgICAgICAgICA8QWRkQ2lyY2xlT3V0bGluZUljb24gZm9udFNpemU9XCJsYXJnZVwiIGNvbG9yPVwicHJpbWFyeVwiIC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblVwbG9hZEltYWdlO1xyXG4iLCJmdW5jdGlvbiBGb290ZXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxmb290ZXIgY2xhc3M9XCJmb290ZXIgcHQtMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtbGctYmV0d2VlblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNlwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNlwiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9vdGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7IC8vXHJcbmltcG9ydCB1c2VBdXRoIGZyb20gXCIuLi9jb250ZXh0cy9hdXRoLmpzXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gIGNvbnN0IHsgdG9nZ2xlciwgc2V0dG9nZ2xlciB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLXRvcCBuYXZiYXItZXhwYW5kIG5hdmJhci1kYXJrIGJnLXByaW1hcnkgYm9yZGVyLWJvdHRvbVwiPlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBjbGFzcz1cIm5hdi1saW5rXCJcclxuICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICAgICAgICAgICAgekluZGV4OiBcIjk5OTk5OTk5OTk5OTk5OTk5XCIsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICAgIGhlaWdodDogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0dG9nZ2xlcighdG9nZ2xlcik7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm5pIG5pLWFsaWduLWxlZnQtMlwiPjwvaT5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgICB7LyogSGVhZGVyICovfVxyXG4gICAgICB7LyogSGVhZGVyICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlciBiZy1wcmltYXJ5IHBiLTZcIj48L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IEdldEFsbE1hbmRvYmVzIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaV9nZXRcIjtcclxuaW1wb3J0IFNrZWxldG9uIGZyb20gXCJyZWFjdC1sb2FkaW5nLXNrZWxldG9uXCI7XHJcblxyXG5pbXBvcnQgdXNlQXV0aCBmcm9tIFwiLi4vY29udGV4dHMvYXV0aC5qc1wiO1xyXG5cclxuZnVuY3Rpb24gTGlzdE1hbmRvYmVzKHsgdXNlcl9pZCwgbWFuZG9iZV9pZCwgc2V0TmV3TWFuZG9iZV9pZCB9KSB7XHJcbiAgY29uc3QgeyB0b2dnbGVyLCBzZXR0b2dnbGVyLCBsb2FkaW5nIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgW3NwaW5uZXIsIHNldHNwaW5uZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtmaXJzdGltZSwgc2V0Zmlyc3RUaW1lXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtNYW5kb2JlTmFtZSwgc2V0TWFuZG9iZU5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IHsgZGF0YSwgaXNMb2FkaW5nLCBpc0Vycm9yIH0gPSBHZXRBbGxNYW5kb2JlcygpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInRlc3QyXV1dXV1dXV1dXV1dXVwiKTtcclxuICAgIHNldGZpcnN0VGltZSh0cnVlKTtcclxuICAgIHNldE1hbmRvYmVOYW1lKFwiXCIpO1xyXG4gICAgc2V0TmV3TWFuZG9iZV9pZChmYWxzZSk7XHJcbiAgICBsb2NhbFN0b3JhZ2UubWFuZG9iZUNpdHkgPSBcIlwiO1xyXG4gIH0sIFt1c2VyX2lkXSk7XHJcblxyXG4gIGNvbnN0IHJlc3VsdHMgPSBpc0xvYWRpbmcgPyBmYWxzZSA6IGRhdGEuZGF0YTtcclxuICBjb25zb2xlLmxvZyhyZXN1bHRzKTtcclxuXHJcbiAgY29uc3Qgc2hvd1NrZWxldG9uID0gaXNMb2FkaW5nIHx8IGxvYWRpbmc7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICB7cmVzdWx0cyA/IChcclxuICAgICAgICAgICAgICByZXN1bHRzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGRpcj1cInJ0bFwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJyaWdodFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICB7TWFuZG9iZU5hbWUgIT0gXCJcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogMjAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICDYp9mE2YXZhtiv2YjYqCDYp9mE2K3Yp9mE2YogOiB7TWFuZG9iZU5hbWV9e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogMjAgfX0+2YTZhSDZitiq2YUg2KrYrdiv2YrYryDYp9mE2YXZhtiv2YjYqDwvcD5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAge3Jlc3VsdHMubWFwKChtYW5kb2JlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYW5kb2JlX2lkID09IG1hbmRvYmUuaWQgJiYgZmlyc3RpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldE1hbmRvYmVOYW1lKG1hbmRvYmUuTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRmaXJzdFRpbWUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLm1hbmRvYmVDaXR5ID09IG1hbmRvYmUuY2l0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLXJhZGlvIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17bWFuZG9iZS5OYW1lICsgbWFuZG9iZS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImN1c3RvbVJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjdXN0b20tY29udHJvbC1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG1hbmRvYmUuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE5ld01hbmRvYmVfaWQobWFuZG9iZS5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImN1c3RvbS1jb250cm9sLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yPXttYW5kb2JlLk5hbWUgKyBtYW5kb2JlLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttYW5kb2JlLk5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5tYW5kb2JlQ2l0eSA9IG1hbmRvYmUuY2l0eTtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJpZ2dlcmRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57bWFuZG9iZS5jaXR5fTwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjdXN0b20tY29udHJvbCBjdXN0b20tcmFkaW8gbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXttYW5kb2JlLk5hbWUgKyBtYW5kb2JlLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY3VzdG9tUmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImN1c3RvbS1jb250cm9sLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TmV3TWFuZG9iZV9pZChtYW5kb2JlLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3I9e21hbmRvYmUuTmFtZSArIG1hbmRvYmUuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21hbmRvYmUuTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+2YTYpyDZitmI2KzYryDZhdmG2K/ZiNio2YrZhiA8L2gxPlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7c2hvd1NrZWxldG9uID8gPFNrZWxldG9uIGhlaWdodD17NDB9IGNvdW50PXsxMH0gLz4gOiBcIlwifVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlzdE1hbmRvYmVzO1xyXG4iLCJmdW5jdGlvbiBQZXJzb25OZWVkcyh7IGRhdGEsIHVwZGF0ZUFycmF5LCByZW1vdmVVc2VyIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHRyPlxyXG4gICAgICA8dGggc2NvcGU9XCJyb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hbWUgbWItMCB0ZXh0LXNtXCI+e2RhdGEubmFtZX0gPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvdGg+XHJcbiAgICAgIDx0ZCBjbGFzc05hbWU9XCJidWRnZXRcIj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtZXNzYWdlQ2hlY2tib3hcIlxyXG4gICAgICAgICAgbmFtZT1cInNwb3J0XCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgIHVwZGF0ZUFycmF5KGRhdGEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHJlbW92ZVVzZXIoZGF0YS5pZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICB2YWx1ZT17ZGF0YS5pZH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L3RkPlxyXG4gICAgPC90cj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQZXJzb25OZWVkcztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgUm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuLy9hcGkgaGVyZSBpcyBhbiBheGlvcyBpbnN0YW5jZVxyXG5pbXBvcnQgYXBpIGZyb20gXCIuLi9zZXJ2aWNlcy9BcGlcIjtcclxuXHJcbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSk7XHJcblxyXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFt0b2dnbGVyLCBzZXR0b2dnbGVyXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gbG9hZFVzZXJGcm9tQ29va2llcygpIHtcclxuICAgICAgbGV0IGRhdGEgPSBmYWxzZTtcclxuICAgICAgY29uc3QgdG9rZW4gPSBDb29raWVzLmdldChcInRva2VuXCIpO1xyXG4gICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkdvdCBhIHRva2VuIGluIHRoZSBjb29raWVzLCBsZXQncyBzZWUgaWYgaXQgaXMgdmFsaWRcIik7XHJcbiAgICAgICAgYXBpLmRlZmF1bHRzLmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IGBCZWFyZXIgJHt0b2tlbn1gO1xyXG4gICAgICAgIGF3YWl0IGFwaVxyXG4gICAgICAgICAgLnBvc3QoXCJhcGkvY2hlY2tUb2tlblwiKVxyXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBkYXRhID0gcmVzO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBDb29raWVzLnJlbW92ZShcInRva2VuXCIpO1xyXG4gICAgICAgICAgICBDb29raWVzLnJlbW92ZShcInVzZXJfbmljZW5hbWVcIik7XHJcbiAgICAgICAgICAgIENvb2tpZXMucmVtb3ZlKFwidXNlcl9lbWFpbFwiKTtcclxuICAgICAgICAgICAgQ29va2llcy5yZW1vdmUoXCJVc2VyVHlwZVwiKTtcclxuICAgICAgICAgICAgQ29va2llcy5yZW1vdmUoXCJCcmFjbmhDb2RlXCIpO1xyXG4gICAgICAgICAgICBDb29raWVzLnJlbW92ZShcIkNvbXBhbnlDb2RlXCIpO1xyXG4gICAgICAgICAgICBDb29raWVzLnJlbW92ZShcInByb2ZpbGVfcGljXCIpO1xyXG4gICAgICAgICAgICBDb29raWVzLnJlbW92ZShcImZpcnN0X25hbWVcIik7XHJcbiAgICAgICAgICAgIENvb2tpZXMucmVtb3ZlKFwibGFzdF9uYW1lXCIpO1xyXG5cclxuICAgICAgICAgICAgYXBpLmRlZmF1bHRzLmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IGBgO1xyXG5cclxuICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvTWFuYWdlbWVudFwiKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIC8vICBjb25zdCB7IGRhdGE6IGRhdGEgfSA9IGF3YWl0IGFwaS5wb3N0KFwiYXBpL2NoZWNrVG9rZW5cIik7XHJcbiAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwib2xkIHRva2VuIGlzIHZhbGlkXCIpO1xyXG4gICAgICAgICAgc2V0VXNlcih7XHJcbiAgICAgICAgICAgIHVzZXJfbmljZW5hbWU6IENvb2tpZXMuZ2V0KFwidXNlcl9uaWNlbmFtZVwiKSxcclxuICAgICAgICAgICAgdXNlcl9lbWFpbDogQ29va2llcy5nZXQoXCJ1c2VyX2VtYWlsXCIpLFxyXG4gICAgICAgICAgICBVc2VyVHlwZTogQ29va2llcy5nZXQoXCJVc2VyVHlwZVwiKSxcclxuICAgICAgICAgICAgQ29tcGFueUNvZGU6IENvb2tpZXMuZ2V0KFwiQ29tcGFueUNvZGVcIiksXHJcbiAgICAgICAgICAgIEJyYWNuaENvZGU6IENvb2tpZXMuZ2V0KFwiQnJhY25oQ29kZVwiKSxcclxuICAgICAgICAgICAgcHJvZmlsZV9waWM6IENvb2tpZXMuZ2V0KFwicHJvZmlsZV9waWNcIiksXHJcbiAgICAgICAgICAgIGZpcnN0X25hbWU6IENvb2tpZXMuZ2V0KFwiZmlyc3RfbmFtZVwiKSxcclxuICAgICAgICAgICAgbGFzdF9uYW1lOiBDb29raWVzLmdldChcImxhc3RfbmFtZVwiKSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgbG9hZFVzZXJGcm9tQ29va2llcygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgU2VuZGNvbmQgPSBhc3luYyAocGhvbmUpID0+IHtcclxuICAgIGxldCB0ZW1wcmVzID0gYXdhaXQgYXBpLmdldChcImFwaS9nZXRVc2VyQ29kZT9waG9uZT1cIiArIHBob25lLCB7fSk7XHJcblxyXG4gICAgcmV0dXJuIHRlbXByZXM7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcGhvbmVMb2dpbiA9IGFzeW5jIChwaG9uZSwgY29kZSkgPT4ge1xyXG4gICAgY29uc3QgeyBkYXRhOiBkYXRhIH0gPSBhd2FpdCBhcGkuZ2V0KFxyXG4gICAgICBcImFwaS9zaW5nVXNlcklOP3Bob25lPVwiICsgcGhvbmUgKyBcIiZjb2RlPVwiICsgY29kZSxcclxuICAgICAge31cclxuICAgICk7XHJcblxyXG4gICAgaWYgKGRhdGEpIHtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhcIkdvdCBuZXcgdG9rZW5cIiArIGRhdGEudG9rZW4pO1xyXG4gICAgICBDb29raWVzLnNldChcInRva2VuXCIsIGRhdGEudG9rZW4sIHsgZXhwaXJlczogNjAgfSk7XHJcbiAgICAgIENvb2tpZXMuc2V0KFwidXNlcl9uaWNlbmFtZVwiLCBkYXRhLnVzZXJfbmljZW5hbWUsIHsgZXhwaXJlczogNjAgfSk7XHJcbiAgICAgIENvb2tpZXMuc2V0KFwidXNlcl9lbWFpbFwiLCBkYXRhLnVzZXJfZW1haWwsIHsgZXhwaXJlczogNjAgfSk7XHJcbiAgICAgIENvb2tpZXMuc2V0KFwiVXNlclR5cGVcIiwgZGF0YS5Vc2VyVHlwZSwgeyBleHBpcmVzOiA2MCB9KTtcclxuICAgICAgQ29va2llcy5zZXQoXCJCcmFjbmhDb2RlXCIsIGRhdGEuQnJhY25oQ29kZSwgeyBleHBpcmVzOiA2MCB9KTtcclxuICAgICAgQ29va2llcy5zZXQoXCJDb21wYW55Q29kZVwiLCBkYXRhLkNvbXBhbnlDb2RlLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG4gICAgICBDb29raWVzLnNldChcInByb2ZpbGVfcGljXCIsIGRhdGEucHJvZmlsZV9waWMsIHsgZXhwaXJlczogNjAgfSk7XHJcbiAgICAgIENvb2tpZXMuc2V0KFwiZmlyc3RfbmFtZVwiLCBkYXRhLmZpcnN0X25hbWUsIHsgZXhwaXJlczogNjAgfSk7XHJcbiAgICAgIENvb2tpZXMuc2V0KFwibGFzdF9uYW1lXCIsIGRhdGEubGFzdF9uYW1lLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG5cclxuICAgICAgYXBpLmRlZmF1bHRzLmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IGBCZWFyZXIgJHtkYXRhLnRva2VufWA7XHJcblxyXG4gICAgICBzZXRVc2VyKHtcclxuICAgICAgICB1c2VyX25pY2VuYW1lOiBkYXRhLnVzZXJfbmljZW5hbWUsXHJcbiAgICAgICAgdXNlcl9lbWFpbDogZGF0YS51c2VyX2VtYWlsLFxyXG4gICAgICAgIFVzZXJUeXBlOiBkYXRhLlVzZXJUeXBlLFxyXG4gICAgICAgIENvbXBhbnlDb2RlOiBkYXRhLkNvbXBhbnlDb2RlLFxyXG4gICAgICAgIEJyYWNuaENvZGU6IGRhdGEuQnJhY25oQ29kZSxcclxuICAgICAgICBwcm9maWxlX3BpYzogZGF0YS5wcm9maWxlX3BpYyxcclxuICAgICAgICBmaXJzdF9uYW1lOiBkYXRhLmZpcnN0X25hbWUsXHJcbiAgICAgICAgbGFzdF9uYW1lOiBkYXRhLmxhc3RfbmFtZSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiR290IHVzZXJcIiwgdXNlcik7XHJcbiAgICAgIGlmIChkYXRhLlVzZXJUeXBlID09IFwiQ29tcGFueVwiKSB7XHJcbiAgICAgICAgUm91dGVyLnB1c2goXCIvQ29tcGFueVN0YXRpc3RpY3NcIik7XHJcbiAgICAgICAgLy9yZXR1cm4gXCJDb21wYW55XCI7XHJcbiAgICAgIH0gZWxzZSBpZiAoZGF0YS5Vc2VyVHlwZSA9PSBcIm1hbmRvYmVcIikge1xyXG4gICAgICAgIC8vIHJldHVybiBcIkNvbXBhbnlcIjtcclxuICAgICAgICBSb3V0ZXIucHVzaChcIi9NeVVzZXJzXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvZ2luID0gYXN5bmMgKHVzZXJuYW1lLCBwYXNzd29yZCkgPT4ge1xyXG4gICAgY29uc3QgeyBkYXRhOiBkYXRhIH0gPSBhd2FpdCBhcGkucG9zdChcImFwaS9sb2dpblwiLCB7XHJcbiAgICAgIGVtYWlsOnVzZXJuYW1lLFxyXG4gICAgICBwYXNzd29yZCxcclxuICAgIH0pO1xyXG4gICAgaWYgKGRhdGEpIHtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhcIkdvdCBuZXcgdG9rZW5cIiArIGRhdGEudG9rZW4pO1xyXG4gICAgICBDb29raWVzLnNldChcInRva2VuXCIsIGRhdGEudG9rZW4sIHsgZXhwaXJlczogNjAgfSk7XHJcbiAgICAgIENvb2tpZXMuc2V0KFwidXNlcl9uaWNlbmFtZVwiLCBkYXRhLnVzZXJfbmljZW5hbWUsIHsgZXhwaXJlczogNjAgfSk7XHJcbiAgICAgIENvb2tpZXMuc2V0KFwidXNlcl9lbWFpbFwiLCBkYXRhLnVzZXJfZW1haWwsIHsgZXhwaXJlczogNjAgfSk7XHJcbiAgICAgIENvb2tpZXMuc2V0KFwiVXNlclR5cGVcIiwgZGF0YS5Vc2VyVHlwZSwgeyBleHBpcmVzOiA2MCB9KTtcclxuICAgICAgQ29va2llcy5zZXQoXCJCcmFjbmhDb2RlXCIsIGRhdGEuQnJhY25oQ29kZSwgeyBleHBpcmVzOiA2MCB9KTtcclxuICAgICAgQ29va2llcy5zZXQoXCJDb21wYW55Q29kZVwiLCBkYXRhLkNvbXBhbnlDb2RlLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG4gICAgICBDb29raWVzLnNldChcInByb2ZpbGVfcGljXCIsIGRhdGEucHJvZmlsZV9waWMsIHsgZXhwaXJlczogNjAgfSk7XHJcbiAgICAgIENvb2tpZXMuc2V0KFwiZmlyc3RfbmFtZVwiLCBkYXRhLmZpcnN0X25hbWUsIHsgZXhwaXJlczogNjAgfSk7XHJcbiAgICAgIENvb2tpZXMuc2V0KFwibGFzdF9uYW1lXCIsIGRhdGEubGFzdF9uYW1lLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG5cclxuICAgICAgYXBpLmRlZmF1bHRzLmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IGBCZWFyZXIgJHtkYXRhLnRva2VufWA7XHJcblxyXG4gICAgICBzZXRVc2VyKHtcclxuICAgICAgICB1c2VyX25pY2VuYW1lOiBkYXRhLnVzZXJfbmljZW5hbWUsXHJcbiAgICAgICAgdXNlcl9lbWFpbDogZGF0YS51c2VyX2VtYWlsLFxyXG4gICAgICAgIFVzZXJUeXBlOiBkYXRhLlVzZXJUeXBlLFxyXG4gICAgICAgIENvbXBhbnlDb2RlOiBkYXRhLkNvbXBhbnlDb2RlLFxyXG4gICAgICAgIEJyYWNuaENvZGU6IGRhdGEuQnJhY25oQ29kZSxcclxuICAgICAgICBwcm9maWxlX3BpYzogZGF0YS5wcm9maWxlX3BpYyxcclxuICAgICAgICBmaXJzdF9uYW1lOiBkYXRhLmZpcnN0X25hbWUsXHJcbiAgICAgICAgbGFzdF9uYW1lOiBkYXRhLmxhc3RfbmFtZSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiR290IHVzZXJcIiwgdXNlcik7XHJcblxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBDb29raWVzLnJlbW92ZShcInRva2VuXCIpO1xyXG4gICAgQ29va2llcy5yZW1vdmUoXCJ1c2VyX25pY2VuYW1lXCIpO1xyXG4gICAgQ29va2llcy5yZW1vdmUoXCJ1c2VyX2VtYWlsXCIpO1xyXG4gICAgQ29va2llcy5yZW1vdmUoXCJVc2VyVHlwZVwiKTtcclxuICAgIENvb2tpZXMucmVtb3ZlKFwiQnJhY25oQ29kZVwiKTtcclxuICAgIENvb2tpZXMucmVtb3ZlKFwiQ29tcGFueUNvZGVcIik7XHJcbiAgICBDb29raWVzLnJlbW92ZShcInByb2ZpbGVfcGljXCIpO1xyXG4gICAgQ29va2llcy5yZW1vdmUoXCJmaXJzdF9uYW1lXCIpO1xyXG4gICAgQ29va2llcy5yZW1vdmUoXCJsYXN0X25hbWVcIik7XHJcblxyXG4gICAgYXBpLmRlZmF1bHRzLmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IGBgO1xyXG5cclxuICAgIHNldFVzZXIobnVsbCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICB2YWx1ZT17e1xyXG4gICAgICAgIGlzQXV0aGVudGljYXRlZDogISF1c2VyLFxyXG4gICAgICAgIHVzZXIsXHJcbiAgICAgICAgbG9naW4sXHJcbiAgICAgICAgbG9nb3V0LFxyXG4gICAgICAgIFNlbmRjb25kLFxyXG4gICAgICAgIHBob25lTG9naW4sXHJcbiAgICAgICAgbG9hZGluZyxcclxuICAgICAgICBsb2dvdXQsXHJcbiAgICAgICAgdG9nZ2xlcixcclxuICAgICAgICBzZXR0b2dnbGVyLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VBdXRoKCkge1xyXG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcclxuXHJcbiAgcmV0dXJuIGNvbnRleHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQcm90ZWN0Um91dGUoQ29tcG9uZW50KSB7XHJcbiAgcmV0dXJuICgpID0+IHtcclxuICAgIGNvbnN0IHsgdXNlciwgaXNBdXRoZW50aWNhdGVkLCBsb2FkaW5nIH0gPSB1c2VBdXRoKCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBpZiAoIWlzQXV0aGVudGljYXRlZCAmJiAhbG9hZGluZykge1xyXG4gICAgICAgIFJvdXRlci5wdXNoKFwiL01hbmFnZW1lbnRcIik7XHJcbiAgICAgIH0gZWxzZSBpZiAoaXNBdXRoZW50aWNhdGVkKSB7XHJcbiAgICAgICAgaWYgKHVzZXIuVXNlclR5cGUgIT0gXCJhZG1pblwiKSBSb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgIH1cclxuICAgIH0sIFtsb2FkaW5nLCBpc0F1dGhlbnRpY2F0ZWRdKTtcclxuXHJcbiAgICByZXR1cm4gPENvbXBvbmVudCB7Li4uYXJndW1lbnRzfSAvPjtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUHJvdGVjdFJvdXRlQ29tcGFueShDb21wb25lbnQpIHtcclxuICByZXR1cm4gKCkgPT4ge1xyXG4gICAgY29uc3QgeyB1c2VyLCBpc0F1dGhlbnRpY2F0ZWQsIGxvYWRpbmcgfSA9IHVzZUF1dGgoKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGlmICghaXNBdXRoZW50aWNhdGVkICYmICFsb2FkaW5nKSB7XHJcbiAgICAgICAgUm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgICAgIH0gZWxzZSBpZiAoaXNBdXRoZW50aWNhdGVkKSB7XHJcbiAgICAgICAgaWYgKHVzZXIuVXNlclR5cGUgIT0gXCJDb21wYW55XCIpIFJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgfVxyXG4gICAgfSwgW2xvYWRpbmcsIGlzQXV0aGVudGljYXRlZF0pO1xyXG5cclxuICAgIHJldHVybiA8Q29tcG9uZW50IHsuLi5hcmd1bWVudHN9IC8+O1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQcm90ZWN0Um91dGVNYW5kb2JlKENvbXBvbmVudCkge1xyXG4gIHJldHVybiAoKSA9PiB7XHJcbiAgICBjb25zdCB7IHVzZXIsIGlzQXV0aGVudGljYXRlZCwgbG9hZGluZyB9ID0gdXNlQXV0aCgpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgaWYgKCFpc0F1dGhlbnRpY2F0ZWQgJiYgIWxvYWRpbmcpIHtcclxuICAgICAgICBSb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuICAgICAgfSBlbHNlIGlmIChpc0F1dGhlbnRpY2F0ZWQpIHtcclxuICAgICAgICBpZiAodXNlci5Vc2VyVHlwZSAhPSBcIm1hbmRvYmVcIikgUm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICB9XHJcbiAgICB9LCBbbG9hZGluZywgaXNBdXRoZW50aWNhdGVkXSk7XHJcblxyXG4gICAgcmV0dXJuIDxDb21wb25lbnQgey4uLmFyZ3VtZW50c30gLz47XHJcbiAgfTtcclxufVxyXG4iLCJkZWNsYXJlIGNvbnN0IF9fTkVYVF9EQVRBX186IGFueVxuXG5pbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcGFyc2UsIHJlc29sdmUsIFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFByZWZldGNoT3B0aW9ucyB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHtcbiAgZXhlY09uY2UsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IFJvdXRlciBmcm9tICcuL3JvdXRlcidcbmltcG9ydCB7IGFkZEJhc2VQYXRoIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5cbmZ1bmN0aW9uIGlzTG9jYWwoaHJlZjogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGNvbnN0IHVybCA9IHBhcnNlKGhyZWYsIGZhbHNlLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBwYXJzZShnZXRMb2NhdGlvbk9yaWdpbigpLCBmYWxzZSwgdHJ1ZSlcblxuICByZXR1cm4gKFxuICAgICF1cmwuaG9zdCB8fCAodXJsLnByb3RvY29sID09PSBvcmlnaW4ucHJvdG9jb2wgJiYgdXJsLmhvc3QgPT09IG9yaWdpbi5ob3N0KVxuICApXG59XG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIEZvcm1hdFJlc3VsdCA9IHsgaHJlZjogc3RyaW5nOyBhcz86IHN0cmluZyB9XG5cbmZ1bmN0aW9uIG1lbW9pemVkRm9ybWF0VXJsKGZvcm1hdEZ1bmM6IChocmVmOiBVcmwsIGFzPzogVXJsKSA9PiBGb3JtYXRSZXN1bHQpIHtcbiAgbGV0IGxhc3RIcmVmOiBudWxsIHwgVXJsID0gbnVsbFxuICBsZXQgbGFzdEFzOiB1bmRlZmluZWQgfCBudWxsIHwgVXJsID0gbnVsbFxuICBsZXQgbGFzdFJlc3VsdDogbnVsbCB8IEZvcm1hdFJlc3VsdCA9IG51bGxcbiAgcmV0dXJuIChocmVmOiBVcmwsIGFzPzogVXJsKSA9PiB7XG4gICAgaWYgKGxhc3RSZXN1bHQgJiYgaHJlZiA9PT0gbGFzdEhyZWYgJiYgYXMgPT09IGxhc3RBcykge1xuICAgICAgcmV0dXJuIGxhc3RSZXN1bHRcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBmb3JtYXRGdW5jKGhyZWYsIGFzKVxuICAgIGxhc3RIcmVmID0gaHJlZlxuICAgIGxhc3RBcyA9IGFzXG4gICAgbGFzdFJlc3VsdCA9IHJlc3VsdFxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5mdW5jdGlvbiBmb3JtYXRVcmwodXJsOiBVcmwpOiBzdHJpbmcge1xuICByZXR1cm4gdXJsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsKSA6IHVybFxufVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cblxubGV0IG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKG9ic2VydmVyKSB7XG4gICAgcmV0dXJuIG9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAob2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuY2xhc3MgTGluayBleHRlbmRzIENvbXBvbmVudDxMaW5rUHJvcHM+IHtcbiAgcDogYm9vbGVhblxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBMaW5rUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHByb3BzLnByZWZldGNoKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG4gIH1cblxuICBjbGVhblVwTGlzdGVuZXJzID0gKCkgPT4ge31cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKVxuICB9XG5cbiAgZ2V0UGF0aHMoKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHdpbmRvdy5sb2NhdGlvblxuICAgIGNvbnN0IHsgaHJlZjogcGFyc2VkSHJlZiwgYXM6IHBhcnNlZEFzIH0gPSB0aGlzLmZvcm1hdFVybHMoXG4gICAgICB0aGlzLnByb3BzLmhyZWYsXG4gICAgICB0aGlzLnByb3BzLmFzXG4gICAgKVxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmUocGF0aG5hbWUsIHBhcnNlZEhyZWYpXG4gICAgcmV0dXJuIFtyZXNvbHZlZEhyZWYsIHBhcnNlZEFzID8gcmVzb2x2ZShwYXRobmFtZSwgcGFyc2VkQXMpIDogcmVzb2x2ZWRIcmVmXVxuICB9XG5cbiAgaGFuZGxlUmVmKHJlZjogRWxlbWVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnAgJiYgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiYgcmVmICYmIHJlZi50YWdOYW1lKSB7XG4gICAgICB0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKVxuXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgICBwcmVmZXRjaGVkW1xuICAgICAgICAgIHRoaXMuZ2V0UGF0aHMoKS5qb2luKFxuICAgICAgICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgICAgICAgICclJ1xuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzID0gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKHJlZiwgKCkgPT4ge1xuICAgICAgICAgIHRoaXMucHJlZmV0Y2goKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFRoZSBmdW5jdGlvbiBpcyBtZW1vaXplZCBzbyB0aGF0IG5vIGV4dHJhIGxpZmVjeWNsZXMgYXJlIG5lZWRlZFxuICAvLyBhcyBwZXIgaHR0cHM6Ly9yZWFjdGpzLm9yZy9ibG9nLzIwMTgvMDYvMDcveW91LXByb2JhYmx5LWRvbnQtbmVlZC1kZXJpdmVkLXN0YXRlLmh0bWxcbiAgZm9ybWF0VXJscyA9IG1lbW9pemVkRm9ybWF0VXJsKChocmVmLCBhc0hyZWYpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogYWRkQmFzZVBhdGgoZm9ybWF0VXJsKGhyZWYpKSxcbiAgICAgIGFzOiBhc0hyZWYgPyBhZGRCYXNlUGF0aChmb3JtYXRVcmwoYXNIcmVmKSkgOiBhc0hyZWYsXG4gICAgfVxuICB9KVxuXG4gIGxpbmtDbGlja2VkID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCB7IG5vZGVOYW1lLCB0YXJnZXQgfSA9IGUuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICAgIGlmIChcbiAgICAgIG5vZGVOYW1lID09PSAnQScgJiZcbiAgICAgICgodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICAgICAgZS5tZXRhS2V5IHx8XG4gICAgICAgIGUuY3RybEtleSB8fFxuICAgICAgICBlLnNoaWZ0S2V5IHx8XG4gICAgICAgIChlLm5hdGl2ZUV2ZW50ICYmIGUubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpKVxuICAgICkge1xuICAgICAgLy8gaWdub3JlIGNsaWNrIGZvciBuZXcgdGFiIC8gbmV3IHdpbmRvdyBiZWhhdmlvclxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IHsgaHJlZiwgYXMgfSA9IHRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsIHRoaXMucHJvcHMuYXMpXG5cbiAgICBpZiAoIWlzTG9jYWwoaHJlZikpIHtcbiAgICAgIC8vIGlnbm9yZSBjbGljayBpZiBpdCdzIG91dHNpZGUgb3VyIHNjb3BlIChlLmcuIGh0dHBzOi8vZ29vZ2xlLmNvbSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHdpbmRvdy5sb2NhdGlvblxuICAgIGhyZWYgPSByZXNvbHZlKHBhdGhuYW1lLCBocmVmKVxuICAgIGFzID0gYXMgPyByZXNvbHZlKHBhdGhuYW1lLCBhcykgOiBocmVmXG5cbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICAgIGxldCB7IHNjcm9sbCB9ID0gdGhpcy5wcm9wc1xuICAgIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICAgIH1cblxuICAgIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICAgIFJvdXRlclt0aGlzLnByb3BzLnJlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgICBzaGFsbG93OiB0aGlzLnByb3BzLnNoYWxsb3csXG4gICAgfSkudGhlbigoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBwcmVmZXRjaChvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnAgfHwgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICAgIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgICBjb25zdCBwYXRocyA9IHRoaXMuZ2V0UGF0aHMoKVxuICAgIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgICBSb3V0ZXIucHJlZmV0Y2gocGF0aHNbLyogaHJlZiAqLyAwXSwgcGF0aHNbLyogYXNQYXRoICovIDFdLCBvcHRpb25zKS5jYXRjaChcbiAgICAgIChlcnIpID0+IHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICAgICAgdGhyb3cgZXJyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApXG4gICAgcHJlZmV0Y2hlZFtcbiAgICAgIHBhdGhzLmpvaW4oXG4gICAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICAgICclJ1xuICAgICAgKVxuICAgIF0gPSB0cnVlXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGhyZWYsIGFzIH0gPSB0aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLCB0aGlzLnByb3BzLmFzKVxuICAgIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gICAgfVxuXG4gICAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gICAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gICAgY29uc3QgcHJvcHM6IHtcbiAgICAgIG9uTW91c2VFbnRlcjogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgICBocmVmPzogc3RyaW5nXG4gICAgICByZWY/OiBhbnlcbiAgICB9ID0ge1xuICAgICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmhhbmRsZVJlZihlbClcblxuICAgICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25Nb3VzZUVudGVyOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJlZmV0Y2goeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgICAgfSxcbiAgICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgIHRoaXMubGlua0NsaWNrZWQoZSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9XG5cbiAgICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgICBpZiAoXG4gICAgICB0aGlzLnByb3BzLnBhc3NIcmVmIHx8XG4gICAgICAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSlcbiAgICApIHtcbiAgICAgIHByb3BzLmhyZWYgPSBhcyB8fCBocmVmXG4gICAgfVxuXG4gICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseS5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgIGlmIChcbiAgICAgICAgcHJvcHMuaHJlZiAmJlxuICAgICAgICB0eXBlb2YgX19ORVhUX0RBVEFfXyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0XG4gICAgICApIHtcbiAgICAgICAgcHJvcHMuaHJlZiA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHByb3BzLmhyZWYpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgcHJvcHMpXG4gIH1cbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gIGNvbnN0IHdhcm4gPSBleGVjT25jZShjb25zb2xlLmVycm9yKVxuXG4gIC8vIFRoaXMgbW9kdWxlIGdldHMgcmVtb3ZlZCBieSB3ZWJwYWNrLklnbm9yZVBsdWdpblxuICBjb25zdCBQcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJylcbiAgY29uc3QgZXhhY3QgPSByZXF1aXJlKCdwcm9wLXR5cGVzLWV4YWN0JylcbiAgLy8gQHRzLWlnbm9yZSB0aGUgcHJvcGVydHkgaXMgc3VwcG9ydGVkLCB3aGVuIGRlY2xhcmluZyBpdCBvbiB0aGUgY2xhc3MgaXQgb3V0cHV0cyBhbiBleHRyYSBiaXQgb2YgY29kZSB3aGljaCBpcyBub3QgbmVlZGVkLlxuICBMaW5rLnByb3BUeXBlcyA9IGV4YWN0KHtcbiAgICBocmVmOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSkuaXNSZXF1aXJlZCxcbiAgICBhczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuICAgIHByZWZldGNoOiBQcm9wVHlwZXMuYm9vbCxcbiAgICByZXBsYWNlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaGFsbG93OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBwYXNzSHJlZjogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2Nyb2xsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICAgIChwcm9wczogYW55LCBwcm9wTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcHJvcHNbcHJvcE5hbWVdXG5cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgYFdhcm5pbmc6IFlvdSdyZSB1c2luZyBhIHN0cmluZyBkaXJlY3RseSBpbnNpZGUgPExpbms+LiBUaGlzIHVzYWdlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSBhZGQgYW4gPGE+IHRhZyBhcyBjaGlsZCBvZiA8TGluaz5gXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH0sXG4gICAgXSkuaXNSZXF1aXJlZCxcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oe30sIF9yb3V0ZXJbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcGFyc2UsIFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgIT09IDAgPyBiYXNlUGF0aCArIHBhdGggOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSA9PT0gMFxuICAgID8gcGF0aC5zdWJzdHIoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbiAgICA6IHBhdGhcbn1cblxuZnVuY3Rpb24gdG9Sb3V0ZShwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJ1xufVxuXG5jb25zdCBwcmVwYXJlUm91dGUgPSAocGF0aDogc3RyaW5nKSA9PlxuICB0b1JvdXRlKCFwYXRoIHx8IHBhdGggPT09ICcvJyA/ICcvaW5kZXgnIDogcGF0aClcblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxudHlwZSBDb21wb25lbnRSZXMgPSB7IHBhZ2U6IENvbXBvbmVudFR5cGU7IG1vZDogYW55IH1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbnR5cGUgUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBhbnlcbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUm91dGVJbmZvLCBBcHA/OiBDb21wb25lbnRUeXBlKSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogYW55KSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnkgfCBudWxsLFxuICBpc1NlcnZlclJlbmRlcjogYm9vbGVhbixcbiAgY2I/OiAoLi4uYXJnczogYW55KSA9PiBhbnlcbikge1xuICBsZXQgYXR0ZW1wdHMgPSBpc1NlcnZlclJlbmRlciA/IDMgOiAxXG4gIGZ1bmN0aW9uIGdldFJlc3BvbnNlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGZldGNoKFxuICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgoXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBfX05FWFRfREFUQV9fXG4gICAgICAgICAgYC9fbmV4dC9kYXRhLyR7X19ORVhUX0RBVEFfXy5idWlsZElkfSR7ZGVsQmFzZVBhdGgocGF0aG5hbWUpfS5qc29uYFxuICAgICAgICApLFxuICAgICAgICBxdWVyeSxcbiAgICAgIH0pLFxuICAgICAge1xuICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgIH1cbiAgICApLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgaWYgKC0tYXR0ZW1wdHMgPiAwICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgICAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZ2V0UmVzcG9uc2UoKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICByZXR1cm4gY2IgPyBjYihkYXRhKSA6IGRhdGFcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgLy8gbG9vcC5cbiAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgOyhlcnIgYXMgYW55KS5jb2RlID0gJ1BBR0VfTE9BRF9FUlJPUidcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBDb21wb25lbnRUeXBlKSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBDb21wb25lbnRUeXBlXG4gICAgICB3cmFwQXBwOiAoQXBwOiBDb21wb25lbnRUeXBlKSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7IENvbXBvbmVudDogQXBwIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGFzXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuICAgIH1cbiAgfVxuXG4gIC8vIEBkZXByZWNhdGVkIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGV2ZW4gdGhvdWdoIGl0J3MgYSBwcml2YXRlIG1ldGhvZC5cbiAgc3RhdGljIF9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICByZXR1cm4gcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdXJsXG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgaWYgKCFlLnN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmIChcbiAgICAgIGUuc3RhdGUgJiZcbiAgICAgIHRoaXMuaXNTc3IgJiZcbiAgICAgIGUuc3RhdGUuYXMgPT09IHRoaXMuYXNQYXRoICYmXG4gICAgICBwYXJzZShlLnN0YXRlLnVybCkucGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWVcbiAgICApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhlLnN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBlLnN0YXRlXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2YgdXJsID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgYXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnYHBvcHN0YXRlYCBldmVudCB0cmlnZ2VyZWQgYnV0IGBldmVudC5zdGF0ZWAgZGlkIG5vdCBoYXZlIGB1cmxgIG9yIGBhc2AgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcG9wc3RhdGUtc3RhdGUtZW1wdHknXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5yZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICB1cGRhdGUocm91dGU6IHN0cmluZywgbW9kOiBhbnkpIHtcbiAgICBjb25zdCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUgPSBtb2QuZGVmYXVsdCB8fCBtb2RcbiAgICBjb25zdCBkYXRhID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuICAgIGlmICghZGF0YSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgdXBkYXRlIHVuYXZhaWxhYmxlIHJvdXRlOiAke3JvdXRlfWApXG4gICAgfVxuXG4gICAgY29uc3QgbmV3RGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIF9fTl9TU0c6IG1vZC5fX05fU1NHLFxuICAgICAgX19OX1NTUDogbW9kLl9fTl9TU1AsXG4gICAgfSlcbiAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gbmV3RGF0YVxuXG4gICAgLy8gcGFnZXMvX2FwcC5qcyB1cGRhdGVkXG4gICAgaWYgKHJvdXRlID09PSAnL19hcHAnKSB7XG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAocm91dGUgPT09IHRoaXMucm91dGUpIHtcbiAgICAgIHRoaXMubm90aWZ5KG5ld0RhdGEpXG4gICAgfVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIF91cmw6IFVybCxcbiAgICBfYXM6IFVybCxcbiAgICBvcHRpb25zOiBhbnlcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICAgIH1cbiAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgIGlmIChTVCkge1xuICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgICB9XG5cbiAgICAgIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAgICAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgICAgIGxldCB1cmwgPSB0eXBlb2YgX3VybCA9PT0gJ29iamVjdCcgPyBmb3JtYXRXaXRoVmFsaWRhdGlvbihfdXJsKSA6IF91cmxcbiAgICAgIGxldCBhcyA9IHR5cGVvZiBfYXMgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24oX2FzKSA6IF9hc1xuXG4gICAgICB1cmwgPSBhZGRCYXNlUGF0aCh1cmwpXG4gICAgICBhcyA9IGFkZEJhc2VQYXRoKGFzKVxuXG4gICAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkgZm9yIHRoZSBTU1IgcGFnZS5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICBpZiAoX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KSB7XG4gICAgICAgICAgYXMgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChhcylcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZChhcylcblxuICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoYXMpKSB7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGFzKVxuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKVxuICAgICAgfVxuXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSwgcHJvdG9jb2wgfSA9IHBhcnNlKHVybCwgdHJ1ZSlcblxuICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGFzKSkge1xuICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpXG4gICAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IGFzUGF0aG5hbWUgfSA9IHBhcnNlKGFzKVxuICAgICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICAgIClcblxuICAgICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlamVjdChcbiAgICAgICAgICAgICAgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgIGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW5jb21wYXRpYmxlLWhyZWYtYXNgXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgICAvLyBJZiBzaGFsbG93IGlzIHRydWUgYW5kIHRoZSByb3V0ZSBleGlzdHMgaW4gdGhlIHJvdXRlciBjYWNoZSB3ZSByZXVzZSB0aGUgcHJldmlvdXMgcmVzdWx0XG4gICAgICB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdykudGhlbihcbiAgICAgICAgKHJvdXRlSW5mbykgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZUluZm8pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBhcylcbiAgICAgICAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIHJlamVjdFxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgfSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFJvdXRlSW5mbz4ge1xuICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgIC8vIElmIHRoZXJlIGlzIGEgc2hhbGxvdyByb3V0ZSB0cmFuc2l0aW9uIHBvc3NpYmxlXG4gICAgLy8gSWYgdGhlIHJvdXRlIGlzIGFscmVhZHkgcmVuZGVyZWQgb24gdGhlIHNjcmVlbi5cbiAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY2FjaGVkUm91dGVJbmZvKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUVycm9yID0gKFxuICAgICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICAgKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgaWYgKGVyci5jb2RlID09PSAnUEFHRV9MT0FEX0VSUk9SJyB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAvLyBTbywgd2UgbmVlZCB0byBtYXJrIGl0IGFzIGEgY2FuY2VsbGVkIGVycm9yIGFuZCBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmVzb2x2ZShcbiAgICAgICAgICB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJylcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQgfSA9IHJlc1xuICAgICAgICAgICAgICBjb25zdCByb3V0ZUluZm86IFJvdXRlSW5mbyA9IHsgQ29tcG9uZW50LCBlcnIgfVxuICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgfSBhcyBhbnkpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAocHJvcHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIChnaXBFcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAnRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJyxcbiAgICAgICAgICAgICAgICAgICAgICBnaXBFcnJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gaGFuZGxlRXJyb3IoZXJyLCB0cnVlKSlcbiAgICAgICAgKVxuICAgICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+XG4gICAgfVxuXG4gICAgcmV0dXJuIChuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoY2FjaGVkUm91dGVJbmZvKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlKGNhY2hlZFJvdXRlSW5mbylcbiAgICAgIH1cblxuICAgICAgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihcbiAgICAgICAgKHJlcykgPT5cbiAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSksXG4gICAgICAgIHJlamVjdFxuICAgICAgKVxuICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPilcbiAgICAgIC50aGVuKChyb3V0ZUluZm86IFJvdXRlSW5mbykgPT4ge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXREYXRhPFJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgICBfX05fU1NHXG4gICAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoYXMpXG4gICAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShhcylcbiAgICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgICAgKVxuICAgICAgICApLnRoZW4oKHByb3BzKSA9PiB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChoYW5kbGVFcnJvcilcbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBwcm90b2NvbCB9ID0gcGFyc2UodXJsKVxuXG4gICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgY29uc3Qgcm91dGUgPSBkZWxCYXNlUGF0aCh0b1JvdXRlKHBhdGhuYW1lKSlcbiAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGRlbEJhc2VQYXRoKGFzUGF0aCkpLFxuICAgICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgICBdKS50aGVuKCgpID0+IHJlc29sdmUoKSwgcmVqZWN0KVxuICAgIH0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxDb21wb25lbnRSZXM+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcbiAgICByb3V0ZSA9IGRlbEJhc2VQYXRoKHJvdXRlKVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhID0gKGFzUGF0aDogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+ID0+IHtcbiAgICBjb25zdCBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZShwYXJzZShhc1BhdGgpLnBhdGhuYW1lISlcblxuICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW3BhdGhuYW1lXVxuICAgICAgPyBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbcGF0aG5hbWVdKVxuICAgICAgOiBmZXRjaE5leHREYXRhKFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgdGhpcy5pc1NzcixcbiAgICAgICAgICAoZGF0YSkgPT4gKHRoaXMuc2RjW3BhdGhuYW1lXSA9IGRhdGEpXG4gICAgICAgIClcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhID0gKGFzUGF0aDogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+ID0+IHtcbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlKGFzUGF0aCwgdHJ1ZSlcbiAgICBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZShwYXRobmFtZSEpXG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBjb25zdCBlID0gbmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKVxuICAgICAgOyhlIGFzIGFueSkuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCIvLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiB7IHBvczogbnVtYmVyOyByZXBlYXQ6IGJvb2xlYW4gfSB9XG59IHtcbiAgLy8gRXNjYXBlIGFsbCBjaGFyYWN0ZXJzIHRoYXQgY291bGQgYmUgY29uc2lkZXJlZCBSZWdFeFxuICBjb25zdCBlc2NhcGVkUm91dGUgPSBlc2NhcGVSZWdleChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IHsgcG9zOiBudW1iZXI7IHJlcGVhdDogYm9vbGVhbiB9IH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcblxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZShcbiAgICAvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLFxuICAgIChfLCAkMSkgPT4ge1xuICAgICAgY29uc3QgaXNPcHRpb25hbCA9IC9eXFxcXFxcWy4qXFxcXFxcXSQvLnRlc3QoJDEpXG4gICAgICBpZiAoaXNPcHRpb25hbCkge1xuICAgICAgICAkMSA9ICQxLnNsaWNlKDIsIC0yKVxuICAgICAgfVxuICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKVxuICAgICAgaWYgKGlzQ2F0Y2hBbGwpIHtcbiAgICAgICAgJDEgPSAkMS5zbGljZSg2KVxuICAgICAgfVxuICAgICAgZ3JvdXBzW1xuICAgICAgICAkMVxuICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICBdID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0OiBpc0NhdGNoQWxsIH1cbiAgICAgIHJldHVybiBpc0NhdGNoQWxsID8gKGlzT3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICB9XG4gIClcblxuICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKFxuICAgICAgL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZyxcbiAgICAgIChfLCAkMSkgPT4ge1xuICAgICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpXG4gICAgICAgIGNvbnN0IGtleSA9ICQxXG4gICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgICAgLnJlcGxhY2UoL15cXC57M30vLCAnJylcblxuICAgICAgICByZXR1cm4gaXNDYXRjaEFsbFxuICAgICAgICAgID8gYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9Pi4rPylgXG4gICAgICAgICAgOiBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+W14vXSs/KWBcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKCdeJyArIHBhcmFtZXRlcml6ZWRSb3V0ZSArICcoPzovKT8kJywgJ2knKSxcbiAgICBncm91cHMsXG4gICAgbmFtZWRSZWdleDogbmFtZWRQYXJhbWV0ZXJpemVkUm91dGVcbiAgICAgID8gYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgXG4gICAgICA6IHVuZGVmaW5lZCxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZm9ybWF0LCBVUkxGb3JtYXRPcHRpb25zLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJy4uLy4uL2xpYi9sb2FkLWVudi1jb25maWcnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IGFueVxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIGludGVyZmFjZS1uYW1lXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIHN0YXRpY01hcmt1cDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGRldkZpbGVzOiBzdHJpbmdbXVxuICBmaWxlczogc3RyaW5nW11cbiAgbG93UHJpb3JpdHlGaWxlczogc3RyaW5nW11cbiAgcG9seWZpbGxGaWxlczogc3RyaW5nW11cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBodG1sUHJvcHM6IGFueVxuICBib2R5VGFnczogYW55W11cbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gIHVybDogVXJsT2JqZWN0LFxuICBvcHRpb25zPzogVVJMRm9ybWF0T3B0aW9uc1xuKTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdCh1cmwgYXMgVVJMLCBvcHRpb25zKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IEFkbWluX25hdiBmcm9tIFwiLi4vY29tcG9uZW50cy9BZG1pbl9uYXZcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWRlck5hdiBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJOYXZcIjtcclxuaW1wb3J0IExpc3RNYW5kb2JlcyBmcm9tIFwiLi4vY29tcG9uZW50cy9MaXN0TWFuZG9iZXNcIjtcclxuXHJcbmltcG9ydCBQZXJzb25OZWVkcyBmcm9tIFwiLi4vY29tcG9uZW50cy9QZXJzb25OZWVkc1wiO1xyXG5pbXBvcnQgQnV0dG9uVXBsb2FkSW1hZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvQnV0dG9uVXBsb2FkXCI7XHJcbmltcG9ydCBDb3VudGVySW5wdXQgZnJvbSBcInJlYWN0LWNvdW50ZXItaW5wdXRcIjtcclxuXHJcbmltcG9ydCBhcGkgZnJvbSBcIi4uL3NlcnZpY2VzL0FwaVwiO1xyXG5cclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXJcIjtcclxuaW1wb3J0IHsgR2V0RnVsbENDQXMgfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpX2dldFwiO1xyXG5pbXBvcnQgdXNlQXV0aCwgeyBQcm90ZWN0Um91dGUgfSBmcm9tIFwiLi4vY29udGV4dHMvYXV0aC5qc1wiO1xyXG5pbXBvcnQgeyB1c2VBbGVydCB9IGZyb20gXCJyZWFjdC1hbGVydFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZnVuY3Rpb24gVGFibGUoKSB7XHJcbiAgY29uc3QgYWxlcnQgPSB1c2VBbGVydCgpO1xyXG5cclxuICAvL2NvbnN0IFtwcm9qZWN0LHNldFByb2plY3RdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBbU2VsZWN0ZWRNZW1iZXJzLCBzZXRTZWxlY3RlZE1lbWJlcnNdID0gdXNlU3RhdGUoW1xyXG4gICAge1xyXG4gICAgICBNZW1iZXJfaWQ6IDk5OTk5OTk5OTk5LFxyXG4gICAgICBNZW1iZXJfTmFtZTogXCJcIixcclxuICAgICAgTWVtYmVyX2ltZzogZmFsc2UsXHJcbiAgICAgIE1lbWJlcl9OdW1iZXI6IFwiXCIsXHJcbiAgICB9LFxyXG4gIF0pO1xyXG5cclxuICBjb25zdCB7IHRvZ2dsZXIsIHNldHRvZ2dsZXIsIGxvYWRpbmcgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zdCBbc3Bpbm5lciwgc2V0c3Bpbm5lcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW05ld01hbmRvYmVfaWQsIHNldE5ld01hbmRvYmVfaWRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3BhZ2Vkb3duLCBzZXRwYWdlZG93bl0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgY29uc29sZS5sb2coTmV3TWFuZG9iZV9pZCk7XHJcblxyXG4gIGNvbnN0IHsgZGF0YSwgaXNMb2FkaW5nLCBpc0Vycm9yIH0gPSBHZXRGdWxsQ0NBcygpO1xyXG5cclxuICBjb25zdCByZXN1bHRzID0gaXNMb2FkaW5nID8gZmFsc2UgOiBkYXRhLmRhdGE7XHJcbiAgY29uc29sZS5sb2cocmVzdWx0cyk7XHJcblxyXG4gIGNvbnN0IHNob3dTa2VsZXRvbiA9IGlzTG9hZGluZyB8fCBsb2FkaW5nO1xyXG4gIGNvbnN0IFtDQ0FzLCBzZXRDQ0FzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgW2NpdHlzLCBzZXRjaXR5c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2FlcmFzLCBzZXRhZXJhc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2Rlcywgc2V0ZGVzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBbVGhlU2VsZWN0ZWRDb3VudHJ5LCBzZXRUaGVTZWxlY3RlZENvdW50cnldID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW1RoZVNlbGVjdGVkQ2l0eSwgc2V0VGhlU2VsZWN0ZWRDaXR5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtUaGVTZWxlY3RlZGFlcmEsIHNldFRoZVNlbGVjdGVkYWVyYV0gPSB1c2VTdGF0ZShcImFsbFwiKTtcclxuICBjb25zdCBbZmlyc3RUaW1lLCBzZXRmaXJzdFRpbWVdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2NhdGVnb3JpZXMsIHNldGNhdGVnb3JpZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBpZiAoZmlyc3RUaW1lICYmIHJlc3VsdHMpIHtcclxuICAgIHNldENDQXMocmVzdWx0cy5vcHRpb25zLkNDQXMpO1xyXG5cclxuICAgIHNldFRoZVNlbGVjdGVkQ2l0eShyZXN1bHRzLm9wdGlvbnMuQ0NBc1swXS5kYXRhWzBdLm5hbWUpO1xyXG5cclxuICAgIHNldFRoZVNlbGVjdGVkQ291bnRyeShyZXN1bHRzLm9wdGlvbnMuQ0NBc1swXS5uYW1lKTtcclxuXHJcbiAgICBzZXRjaXR5cyhyZXN1bHRzLm9wdGlvbnMuQ0NBc1swXS5kYXRhKTtcclxuICAgIHNldGFlcmFzKHJlc3VsdHMub3B0aW9ucy5DQ0FzWzBdLmRhdGFbMF0uZGF0YSk7XHJcbiAgICBzZXRjYXRlZ29yaWVzKHJlc3VsdHMub3B0aW9ucy5jYXRlZ29yaWVzKTtcclxuXHJcbiAgICBzZXRmaXJzdFRpbWUoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgW2ZhbWlseVR5cGUsIHNldGZhbWlseVR5cGVdID0gdXNlU3RhdGUoXCJmYW1pbHlcIik7XHJcbiAgY29uc3QgW3ByaW9yaXR5LCBzZXRwcmlvcml0eV0gPSB1c2VTdGF0ZShcIm5vcm1hbFwiKTtcclxuICBjb25zdCBbRmlyc3ROYW1lLCBzZXRGaXJzdE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW0xhc3ROYW1lLCBzZXRMYXN0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZW1haWwsIHNldGVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwaG9uZSwgc2V0cGhvbmVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW21lbXBlcnNDb3VudCwgc2V0bWVtcGVyc0NvdW50XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtzaGFyZSwgc2V0c2hhcmVdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGNvbnN0IFtvbGRXb21hbiwgc2V0T2xkV29tYW5dID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW29sZE1hbiwgc2V0T2xkTWFuXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFthY2NpYmlsaXR5UGVyc29uLCBzZXRBY2NpYmlsaXR5UGVyc29uXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtiYWJ5LCBzZXRCYWJ5XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtvcnBoYW5HaXJscywgc2V0T3JwaGFuR2lybHNdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW29ycGhhbkJveXMsIHNldE9ycGhhbkJveXNdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2dpcmxzLCBzZXRHaXJsc10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbZ3V5cywgc2V0R3V5c10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbd29tZW4sIHNldFdvbWVuXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFttZW4sIHNldE1lbl0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbd2lkb3dzLCBzZXRXaWRvd3NdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2dpcmwsIHNldGdpcmxdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2JveSwgc2V0Ym95XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtQaG9uZUZpZWxkLCBzZXRQaG9uZUZpZWxkXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIGNvbnN0IFthZGRyZXNzLCBzZXRhZGRyZXNzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBbcGVyc29uTmVlZHMsIHNldFBlcnNvbk5lZWRzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBbc3RlcCwgc2V0U3RlcF0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbbGlzdCwgdXBkYXRlTGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2FsbG93ZWQsIHNldGFsbG93ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBmdW5jdGlvbiB1cGRhdGVBcnJheShkYXRhKSB7XHJcbiAgICBsZXQgZmF2b3JpdGUgPSBsaXN0O1xyXG4gICAgZmF2b3JpdGUucHVzaChkYXRhKTtcclxuXHJcbiAgICB1cGRhdGVMaXN0KGZhdm9yaXRlKTtcclxuICAgIHNldGFsbG93ZWQodHJ1ZSk7XHJcblxyXG4gICAgLy8gIHNldFBlcnNvbk5lZWRzKChQZXJzb25OZWVkcykgPT4gUGVyc29uTmVlZHMuY29uY2F0KGRhdGEpKTtcclxuICAgIC8vIHNldFBlcnNvbk5lZWRzKChQZXJzb25OZWVkcykgPT4gWy4uLlBlcnNvbk5lZWRzLCBkYXRhXSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiByZW1vdmVVc2VyKGlkKSB7XHJcbiAgICBsZXQgZmF2b3JpdGUgPSBsaXN0O1xyXG4gICAgaWYgKGxpc3QubGVuZ3RoID09IDEpIHtcclxuICAgICAgc2V0YWxsb3dlZChmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBmYXZvcml0ZSA9IGF3YWl0IGZhdm9yaXRlLmZpbHRlcigoZSkgPT4gZS5pZCAhPT0gaWQpO1xyXG4gICAgdXBkYXRlTGlzdChmYXZvcml0ZSk7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcmVjYWxjKCk7XHJcbiAgfSwgW1xyXG4gICAgb2xkV29tYW4sXHJcbiAgICBvbGRNYW4sXHJcbiAgICBhY2NpYmlsaXR5UGVyc29uLFxyXG4gICAgYmFieSxcclxuICAgIG9ycGhhbkdpcmxzLFxyXG4gICAgb3JwaGFuQm95cyxcclxuICAgIHdpZG93cyxcclxuICAgIGdpcmxzLFxyXG4gICAgZ3V5cyxcclxuICAgIHdvbWVuLFxyXG4gICAgbWVuLFxyXG4gICAgZ2lybCxcclxuICAgIGJveSxcclxuICBdKTtcclxuXHJcbiAgZnVuY3Rpb24gbXlzdWJtaXQoKSB7XHJcbiAgICBsZXQgY2hlY2tlID0gdHJ1ZTtcclxuICAgIGxldCBteWNhbGMgPVxyXG4gICAgICAwICtcclxuICAgICAgcGFyc2VJbnQob2xkV29tYW4pICtcclxuICAgICAgcGFyc2VJbnQob2xkTWFuKSArXHJcbiAgICAgIHBhcnNlSW50KGFjY2liaWxpdHlQZXJzb24pICtcclxuICAgICAgcGFyc2VJbnQoYmFieSkgK1xyXG4gICAgICBwYXJzZUludChvcnBoYW5HaXJscykgK1xyXG4gICAgICBwYXJzZUludChvcnBoYW5Cb3lzKSArXHJcbiAgICAgIHBhcnNlSW50KHdpZG93cykgK1xyXG4gICAgICBwYXJzZUludChnaXJscykgK1xyXG4gICAgICBwYXJzZUludChndXlzKSArXHJcbiAgICAgIHBhcnNlSW50KHdvbWVuKSArXHJcbiAgICAgIHBhcnNlSW50KG1lbikgK1xyXG4gICAgICBwYXJzZUludChnaXJsKSArXHJcbiAgICAgIHBhcnNlSW50KGJveSk7XHJcbiAgICBjb25zb2xlLmxvZyhteWNhbGMpO1xyXG5cclxuICAgIGxldCBkYXRhID0ge1xyXG4gICAgICBUaGVTZWxlY3RlZENpdHksXHJcbiAgICAgIFRoZVNlbGVjdGVkYWVyYSxcclxuICAgICAgRmlyc3ROYW1lLFxyXG4gICAgICBMYXN0TmFtZSxcclxuICAgICAgZW1haWwsXHJcbiAgICAgIHBob25lLFxyXG4gICAgICBmYW1pbHlUeXBlLFxyXG4gICAgICBwcmlvcml0eSxcclxuICAgICAgb2xkV29tYW4sXHJcbiAgICAgIG9sZE1hbixcclxuICAgICAgYWNjaWJpbGl0eVBlcnNvbixcclxuICAgICAgYmFieSxcclxuICAgICAgb3JwaGFuR2lybHMsXHJcbiAgICAgIG9ycGhhbkJveXMsXHJcbiAgICAgIHdpZG93cyxcclxuICAgICAgZ2lybHMsXHJcbiAgICAgIGd1eXMsXHJcbiAgICAgIHdvbWVuLFxyXG4gICAgICBtZW4sXHJcbiAgICAgIFRoZVNlbGVjdGVkQ291bnRyeSxcclxuICAgICAgZ2lybCxcclxuICAgICAgYm95LFxyXG4gICAgICBzaGFyZSxcclxuICAgICAgbWVtcGVyc0NvdW50OiBteWNhbGMsXHJcblxyXG4gICAgICBjYXRlZ29yaWVzOiBsaXN0LFxyXG4gICAgICBkZXMsXHJcbiAgICAgIG1hbmRvYmVfaWQ6IE5ld01hbmRvYmVfaWQsXHJcbiAgICAgIGFkZHJlc3MsXHJcbiAgICAgIFNlbGVjdGVkTWVtYmVycyxcclxuICAgIH07XHJcblxyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICBzZXRtZW1wZXJzQ291bnQobXljYWxjKTtcclxuICAgIGlmIChteWNhbGMgPT0gMCkge1xyXG4gICAgICBjaGVja2UgPSBmYWxzZTtcclxuICAgICAgYWxlcnQuc2hvdyhcIiDYp9mE2LHYrNin2KEg2KrYrdiv2YrYryDYudiv2K8g2KfZhNin2YHYsdin2K8gXCIsIHtcclxuICAgICAgICB0aW1lb3V0OiAyMDAwLFxyXG4gICAgICAgIHR5cGU6IFwiZXJyb3JcIixcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgfVxyXG4gICAgaWYgKGRhdGEuY2F0ZWdvcmllcy5sZW5ndGggPT0gMCkge1xyXG4gICAgICBjaGVja2UgPSBmYWxzZTtcclxuICAgICAgYWxlcnQuc2hvdyhcItin2YTYsdis2KfYoSDYpdiu2KrZitin2LEg2KXYrdiq2YrYp9isINmI2KfYrdivINij2Ygg2KPZg9ir2LEgXCIsIHtcclxuICAgICAgICB0aW1lb3V0OiAyMDAwLFxyXG4gICAgICAgIHR5cGU6IFwiZXJyb3JcIixcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoRmlyc3ROYW1lID09IFwiXCIpIHtcclxuICAgICAgY2hlY2tlID0gZmFsc2U7XHJcbiAgICAgIGFsZXJ0LnNob3coXCLYp9mE2LHYrNin2KEg2YPYqtin2KjYqSDYp9mE2KXYs9mFINin2YTYo9mI2YRcIiwge1xyXG4gICAgICAgIHRpbWVvdXQ6IDIwMDAsXHJcbiAgICAgICAgdHlwZTogXCJlcnJvclwiLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWRkcmVzcyA9PSBcIlwiKSB7XHJcbiAgICAgIGNoZWNrZSA9IGZhbHNlO1xyXG4gICAgICBhbGVydC5zaG93KFwi2KfZhNix2KzYp9ihINmD2KrYp9io2Kkg2LnZhtmI2KfZhiDYp9mE2YXYs9iq2YHZitivXCIsIHtcclxuICAgICAgICB0aW1lb3V0OiAyMDAwLFxyXG4gICAgICAgIHR5cGU6IFwiZXJyb3JcIixcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKE5ld01hbmRvYmVfaWQgPT0gMCkge1xyXG4gICAgICBjaGVja2UgPSBmYWxzZTtcclxuICAgICAgYWxlcnQuc2hvdyhcItin2YTYsdis2KfYoSDYpdiu2KrZitin2LEg2YXZhtiv2YjYqFwiLCB7XHJcbiAgICAgICAgdGltZW91dDogMjAwMCxcclxuICAgICAgICB0eXBlOiBcImVycm9yXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChMYXN0TmFtZSA9PSBcIlwiKSB7XHJcbiAgICAgIGNoZWNrZSA9IGZhbHNlO1xyXG4gICAgICBhbGVydC5zaG93KFwi2KfZhNix2KzYp9ihINmD2KrYp9io2Kkg2KfZhNil2LPZhSDYp9mE2KfYrtmK2LFcIiwge1xyXG4gICAgICAgIHRpbWVvdXQ6IDIwMDAsXHJcbiAgICAgICAgdHlwZTogXCJlcnJvclwiLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocGhvbmUgPT0gXCJcIikge1xyXG4gICAgICBjaGVja2UgPSBmYWxzZTtcclxuICAgICAgYWxlcnQuc2hvdyhcItin2YTYsdis2KfYoSDZg9iq2KfYqNipINix2YLZhSDYp9mE2KzZiNin2YRcIiwge1xyXG4gICAgICAgIHRpbWVvdXQ6IDIwMDAsXHJcbiAgICAgICAgdHlwZTogXCJlcnJvclwiLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoU2VsZWN0ZWRNZW1iZXJzLmxlbmd0aCA8IE51bWJlck9mbWVtYmVycykge1xyXG4gICAgICBjaGVja2UgPSBmYWxzZTtcclxuICAgICAgYWxlcnQuc2hvdyhcItin2YTYsdis2KfYoSDYpdi22KfZgdipINmH2YjZitin2Kog2KzZhdmK2Lkg2KPZgdix2KfYryDYp9mE2LnYp9im2YTYqVwiLCB7XHJcbiAgICAgICAgdGltZW91dDogMjAwMCxcclxuICAgICAgICB0eXBlOiBcImVycm9yXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc2V0c3Bpbm5lcih0cnVlKTtcclxuICAgIGlmIChjaGVja2UpIHtcclxuICAgICAgYXBpXHJcbiAgICAgICAgLnBvc3QoXCJhcGkvQ3JlYXROZXdVc2VyXCIsIGRhdGEpXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgc2V0c3Bpbm5lcihmYWxzZSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcblxyXG4gICAgICAgICAgaWYgKHJlcy5kYXRhID09IFwiYWxyZWFkeSBleGlzdHNcIikge1xyXG4gICAgICAgICAgICBhbGVydC5zaG93KFwi2KXYs9mFINin2YTZg9mI2KjZiNmGINmF2YjYrNmI2K8g2YXYs9io2YLYpyBcIiwge1xyXG4gICAgICAgICAgICAgIHRpbWVvdXQ6IDIwMDAsXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJlcnJvclwiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChyZXMuZGF0YSA9PSBcInBob25lXCIpIHtcclxuICAgICAgICAgICAgYWxlcnQuc2hvdyhcItix2YLZhSDYp9mE2KzZiNin2YQg2YXYs9iq2K7Yr9mFINmF2LPYqNmC2KdcIiwge1xyXG4gICAgICAgICAgICAgIHRpbWVvdXQ6IDIwMDAsXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJlcnJvclwiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChyZXMuZGF0YSA9PSBcImVtYWlsXCIpIHtcclxuICAgICAgICAgICAgYWxlcnQuc2hvdyhcItin2YTYpdmK2YXZitmEINmF2LPYqtiu2K/ZhSDZhdiz2KjZgtinXCIsIHtcclxuICAgICAgICAgICAgICB0aW1lb3V0OiAyMDAwLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwiZXJyb3JcIixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAocmVzLmRhdGEgPT0gXCJOb3RFbWFpbFwiKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0LnNob3coXCLYp9mE2LHYrNin2KEg2KXYr9iu2KfZhCDYpdmK2YXZitmEINi12K3ZititXCIsIHtcclxuICAgICAgICAgICAgICB0aW1lb3V0OiAyMDAwLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwiZXJyb3JcIixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKHJlcy5kYXRhID4gMCkge1xyXG4gICAgICAgICAgICBhbGVydC5zaG93KFwi2KrZhSDYqNmG2KzYp9itXCIsIHtcclxuICAgICAgICAgICAgICB0aW1lb3V0OiAyMDAwLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvVXNlcnNcIik7XHJcbiAgICAgICAgICAgIC8vR29CYWNrQW5kVHJpZ2dlck11dGF0aW9uKCk7XHJcbiAgICAgICAgICAgIC8vcm91dGVyLnB1c2goXCIvY29tcGFueXMvW25hbWVdXCIsIFwiL2NvbXBhbnlzL1wiICsgZm9ybWRhdGEuY29tcGFueU5hbWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGFsZXJ0LnNob3coXCLYrdi12YQg2K7Yt9ijXCIsIHtcclxuICAgICAgICAgICAgdGltZW91dDogMjAwMCxcclxuICAgICAgICAgICAgdHlwZTogXCJlcnJvclwiLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBzZXRzcGlubmVyKGZhbHNlKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBUaGVQaG9uZSh2YWx1ZSkge1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IENDQXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgIGlmIChDQ0FzW2luZGV4XS5uYW1lID09IFRoZVNlbGVjdGVkQ291bnRyeSkge1xyXG4gICAgICAgIGxldCBlbGVtZW50ID0gQ0NBc1tpbmRleF0uY29kZTtcclxuICAgICAgICBzZXRwaG9uZShlbGVtZW50ICsgXCJcIiArIHZhbHVlKTtcclxuICAgICAgICBzZXRQaG9uZUZpZWxkKHZhbHVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgZWxlbWVudCA9IFwiXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHRlc3RjKCkge1xyXG4gICAgbGV0IG15Y2FsYyA9XHJcbiAgICAgIDAgK1xyXG4gICAgICBwYXJzZUludChvbGRXb21hbikgK1xyXG4gICAgICBwYXJzZUludChvbGRNYW4pICtcclxuICAgICAgcGFyc2VJbnQoYWNjaWJpbGl0eVBlcnNvbikgK1xyXG4gICAgICBwYXJzZUludChiYWJ5KSArXHJcbiAgICAgIHBhcnNlSW50KG9ycGhhbkdpcmxzKSArXHJcbiAgICAgIHBhcnNlSW50KG9ycGhhbkJveXMpICtcclxuICAgICAgcGFyc2VJbnQod2lkb3dzKSArXHJcbiAgICAgIHBhcnNlSW50KGdpcmxzKSArXHJcbiAgICAgIHBhcnNlSW50KGd1eXMpICtcclxuICAgICAgcGFyc2VJbnQod29tZW4pICtcclxuICAgICAgcGFyc2VJbnQobWVuKSArXHJcbiAgICAgIHBhcnNlSW50KGdpcmwpICtcclxuICAgICAgcGFyc2VJbnQoYm95KTtcclxuICAgIGNvbnNvbGUubG9nKFwidHR0dFwiKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhteWNhbGMpO1xyXG4gICAgcmV0dXJuIG15Y2FsYztcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIHJlY2FsYygpIHtcclxuICAgIGxldCB0dCA9IGF3YWl0IHRlc3RjKCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJ0dFwiKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyh0dCk7XHJcblxyXG4gICAgc2V0c2hhcmUodHQpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0TnVtYmVyT2ZtZW1iZXJzKCkge1xyXG4gICAgbGV0IG15Y2FsYyA9XHJcbiAgICAgIDAgK1xyXG4gICAgICBwYXJzZUludChvbGRXb21hbikgK1xyXG4gICAgICBwYXJzZUludChvbGRNYW4pICtcclxuICAgICAgcGFyc2VJbnQoYWNjaWJpbGl0eVBlcnNvbikgK1xyXG4gICAgICBwYXJzZUludChiYWJ5KSArXHJcbiAgICAgIHBhcnNlSW50KG9ycGhhbkdpcmxzKSArXHJcbiAgICAgIHBhcnNlSW50KG9ycGhhbkJveXMpICtcclxuICAgICAgcGFyc2VJbnQod2lkb3dzKSArXHJcbiAgICAgIHBhcnNlSW50KGdpcmxzKSArXHJcbiAgICAgIHBhcnNlSW50KGd1eXMpICtcclxuICAgICAgcGFyc2VJbnQod29tZW4pICtcclxuICAgICAgcGFyc2VJbnQobWVuKSArXHJcbiAgICAgIHBhcnNlSW50KGdpcmwpICtcclxuICAgICAgcGFyc2VJbnQoYm95KTtcclxuXHJcbiAgICByZXR1cm4gbXljYWxjO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgTnVtYmVyT2ZtZW1iZXJzID0gZ2V0TnVtYmVyT2ZtZW1iZXJzKCk7XHJcblxyXG4gIGZ1bmN0aW9uIHJlbW92ZU1lYmVyKFFNZW1iZXIpIHtcclxuICAgIGxldCBteWRhdGEgPSBTZWxlY3RlZE1lbWJlcnM7XHJcbiAgICBsZXQgbmV3ZGF0YSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG15ZGF0YS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IG15ZGF0YVtpbmRleF07XHJcblxyXG4gICAgICBpZiAoZWxlbWVudC5NZW1iZXJfaWQgIT0gUU1lbWJlci5NZW1iZXJfaWQpIHtcclxuICAgICAgICBuZXdkYXRhLnB1c2goZWxlbWVudCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHNldFNlbGVjdGVkTWVtYmVycyhuZXdkYXRhKTtcclxuICAgIHNldHBhZ2Vkb3duKHBhZ2Vkb3duICsgMSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZW1vdmVNZW1iZXJfaW1nKFFNZW1iZXIpIHtcclxuICAgIGxldCBteWRhdGEgPSBTZWxlY3RlZE1lbWJlcnM7XHJcbiAgICBsZXQgbmV3ZGF0YSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG15ZGF0YS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IG15ZGF0YVtpbmRleF07XHJcblxyXG4gICAgICBpZiAoZWxlbWVudC5NZW1iZXJfaWQgPT0gUU1lbWJlci5NZW1iZXJfaWQpIHtcclxuICAgICAgICBlbGVtZW50Lk1lbWJlcl9pbWcgPSBcIlwiO1xyXG4gICAgICB9XHJcbiAgICAgIG5ld2RhdGEucHVzaChlbGVtZW50KTtcclxuICAgIH1cclxuICAgIHNldFNlbGVjdGVkTWVtYmVycyhuZXdkYXRhKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIFVwZGF0ZU1lbWJlcmVOYW1lKFFNZW1iZXIsIE5ld05hbWUpIHtcclxuICAgIGxldCBteWRhdGEgPSBTZWxlY3RlZE1lbWJlcnM7XHJcbiAgICBsZXQgbmV3ZGF0YSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG15ZGF0YS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IG15ZGF0YVtpbmRleF07XHJcblxyXG4gICAgICBpZiAoZWxlbWVudC5NZW1iZXJfaWQgPT0gUU1lbWJlci5NZW1iZXJfaWQpIHtcclxuICAgICAgICBlbGVtZW50Lk1lbWJlcl9OYW1lID0gTmV3TmFtZTtcclxuICAgICAgfVxyXG4gICAgICBuZXdkYXRhLnB1c2goZWxlbWVudCk7XHJcbiAgICB9XHJcbiAgICBzZXRTZWxlY3RlZE1lbWJlcnMobmV3ZGF0YSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBVcGRhdGVNZW1iZXJlTnVtYmVyKFFNZW1iZXIsIE5ld05hbWUpIHtcclxuICAgIGxldCBteWRhdGEgPSBTZWxlY3RlZE1lbWJlcnM7XHJcbiAgICBsZXQgbmV3ZGF0YSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG15ZGF0YS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IG15ZGF0YVtpbmRleF07XHJcblxyXG4gICAgICBpZiAoZWxlbWVudC5NZW1iZXJfaWQgPT0gUU1lbWJlci5NZW1iZXJfaWQpIHtcclxuICAgICAgICBlbGVtZW50Lk1lbWJlcl9OdW1iZXIgPSBOZXdOYW1lO1xyXG4gICAgICB9XHJcbiAgICAgIG5ld2RhdGEucHVzaChlbGVtZW50KTtcclxuICAgIH1cclxuICAgIHNldFNlbGVjdGVkTWVtYmVycyhuZXdkYXRhKTtcclxuICB9XHJcblxyXG4gIGxldCBzdGVwMiA9IHN0ZXA7XHJcblxyXG4gIGNvbnN0IHRva2VuID0gQ29va2llcy5nZXQoXCJ0b2tlblwiKTtcclxuICBjb25zdCBzaXRlVXJsID0gQ29va2llcy5nZXQoXCJzaXRlVXJsXCIpO1xyXG5cclxuICBmdW5jdGlvbiBOZXdNZW1iZXIoKSB7XHJcbiAgICBsZXQgbXlkYXRhID0gU2VsZWN0ZWRNZW1iZXJzO1xyXG4gICAgbGV0IHJhbmRvbV9pZCA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICBsZXQgbmV3ZGF0YSA9IHtcclxuICAgICAgTWVtYmVyX2lkOiByYW5kb21faWQsXHJcbiAgICAgIE1lbWJlcl9OYW1lOiBcIlwiLFxyXG4gICAgICBNZW1iZXJfaW1nOiBmYWxzZSxcclxuICAgICAgTWVtYmVyX051bWJlcjogXCJcIixcclxuICAgIH07XHJcblxyXG4gICAgbXlkYXRhLnB1c2gobmV3ZGF0YSk7XHJcblxyXG4gICAgc2V0U2VsZWN0ZWRNZW1iZXJzKG15ZGF0YSk7XHJcblxyXG4gICAgc2V0cGFnZWRvd24ocGFnZWRvd24gKyAxKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZVRodW1ibmFpbFByb2R1Y3QoZmlsZSwgUU1lbWJlcikge1xyXG4gICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBsZXQgbXlpbWcgPSBcIlwiO1xyXG5cclxuICAgIGZvcm1EYXRhLmFwcGVuZChcImZpbGVcIiwgZmlsZSk7XHJcblxyXG4gICAgYXhpb3NcclxuICAgICAgLnBvc3Qoc2l0ZVVybCArIFwid3AvdjIvbWVkaWFcIiwgZm9ybURhdGEsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEuc291cmNlX3VybCk7XHJcbiAgICAgICAgbXlpbWcgPSByZXN1bHQuZGF0YS5zb3VyY2VfdXJsO1xyXG4gICAgICAgIC8vYWRkIGl0IGhlcmVcclxuXHJcbiAgICAgICAgbGV0IG15ZGF0YSA9IFNlbGVjdGVkTWVtYmVycztcclxuICAgICAgICBsZXQgbmV3ZGF0YSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBteWRhdGEubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICBjb25zdCBlbGVtZW50ID0gbXlkYXRhW2luZGV4XTtcclxuXHJcbiAgICAgICAgICBpZiAoZWxlbWVudC5NZW1iZXJfaWQgPT0gUU1lbWJlci5NZW1iZXJfaWQpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5NZW1iZXJfaW1nID0gbXlpbWc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBuZXdkYXRhLnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFNlbGVjdGVkTWVtYmVycyhuZXdkYXRhKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGJvZHkgY2xhc3NOYW1lPVwicnRsIGctc2lkZW5hdi1zaG93IGctc2lkZW5hdi1waW5uZWRcIiBkaXI9XCJydGxcIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgey8qIFNpZGVuYXYgKi99XHJcbiAgICAgICAgICA8QWRtaW5fbmF2IC8+XHJcbiAgICAgICAgICB7LyogTWFpbiBjb250ZW50ICovfVxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluLWNvbnRlbnRcIiBpZD1cInBhbmVsXCI+XHJcbiAgICAgICAgICAgIHsvKiBUb3BuYXYgKi99XHJcbiAgICAgICAgICAgIDxIZWFkZXJOYXYgLz5cclxuICAgICAgICAgICAgey8qIEhlYWRlciAqL31cclxuICAgICAgICAgICAgey8qIEhlYWRlciAqL31cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWQgbXQtLTZcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIgY29sIFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlciBiZy10cmFuc3BhcmVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwibWItMFwiPtiq2LPYrNmK2YQg2YXYs9iq2YHZitivINis2K/ZitivPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7LyogTGlnaHQgdGFibGUgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICB7c3RlcCA9PSAxID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg2KfZhNiv2YjZhNipXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY291bnR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZENvdW50eSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGhlU2VsZWN0ZWRDb3VudHJ5KHNlbGVjdGVkQ291bnR5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qaWYgKGZpcnN0VGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldGZpcnN0VGltZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0qL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPCBDQ0FzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXgrK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlbXBjb251bnR5ID0gQ0NBc1tpbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZW1wY29udW50eS5uYW1lID09PSBzZWxlY3RlZENvdW50eSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldGNpdHlzKHRlbXBjb251bnR5LmRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGVtcGNvbnVudHkuZGF0YVswXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGhlU2VsZWN0ZWRDaXR5KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wY29udW50eS5kYXRhWzBdLm5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRhZXJhcyh0ZW1wY29udW50eS5kYXRhWzBdLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRhZXJhcyhbXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Q0NBc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBDQ0FzLm1hcCgoY291bnR5LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8b3B0aW9uPntjb3VudHkubmFtZX08L29wdGlvbj47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDYp9mE2YXYr9mK2YbYqVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJteWNpdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjaXR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZGNpdHkgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRoZVNlbGVjdGVkQ2l0eShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKmlmIChmaXJzdFRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRmaXJzdFRpbWUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9Ki9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4IDwgY2l0eXMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCsrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVtcGNpdHkgPSBjaXR5c1tpbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZW1wY2l0eS5uYW1lID09PSBzZWxlY3RlZGNpdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRhZXJhcyh0ZW1wY2l0eS5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NpdHlzLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY2l0eXMubWFwKChjaXR5LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtjaXR5Lm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2l0eS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINin2YTZhdmG2LfZgtipXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYWVyYXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGhlU2VsZWN0ZWRhZXJhKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIwXCI+2KfZhNmD2YQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWVyYXMubGVuZ3RoID4gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBhZXJhcy5tYXAoKGFlcmFzLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXthZXJhcy5uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FlcmFzLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJoZWFkaW5nLXNtYWxsIHRleHQtbXV0ZWQgbWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg2YXYudmE2YjZhdin2Kog2KfZhNmF2LPYqtmB2YrYr1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDYp9mE2KXYs9mFINin2YTYo9mI2YRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJGaXJzdE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Rmlyc3ROYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtGaXJzdE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItin2YTYpdiz2YUg2KfZhNij2YjZhFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINin2YTYpdiz2YUg2KfZhNil2K7ZitixXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiTGFzdE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TGFzdE5hbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0xhc3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLYp9mE2KXYs9mFINin2YTYpdiu2YrYsVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDYsdmC2YUg2KfZhNis2YjYp9mEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiUGhvbmVGaWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlUGhvbmUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtQaG9uZUZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiNTB4eHh4eFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7VGhlU2VsZWN0ZWRDb3VudHJ5ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge0NDQXMubGVuZ3RoID4gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gQ0NBcy5tYXAoKGRhdGEsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubmFtZSA9PSBUaGVTZWxlY3RlZENvdW50cnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuY29kZX0rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPis8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINin2YTYudmG2YjYp9mGXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRhZGRyZXNzKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLYudmG2YjYp9mGINin2YTZhdiz2KrZgdmK2K9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINmI2LXZgSDYp9mE2K3Yp9mE2KlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0ZGVzKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPVwiNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIg2YjYtdmBINit2KfZhNipINin2YTZhdiz2KrZgdmK2K9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz7ZhtmI2Lkg2KfZhNmF2K3Yqtin2Kw6PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjE1cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjdXN0b20tY29udHJvbCBjdXN0b20tcmFkaW8gbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY3VzdG9tUmFkaW8xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY3VzdG9tUmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID09IFwib25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRmYW1pbHlUeXBlKFwiZmFtaWx5XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImN1c3RvbS1jb250cm9sLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3I9XCJjdXN0b21SYWRpbzFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg2LnYp9im2YTYqVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLXJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjdXN0b21SYWRpbzJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjdXN0b21SYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjdXN0b20tY29udHJvbC1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPT0gXCJvblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldGZhbWlseVR5cGUoXCJzaW5nbGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjdXN0b20tY29udHJvbC1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yPVwiY3VzdG9tUmFkaW8yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINmB2LHYr1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz7Yrdin2YTYqSDYp9mE2YXYrdiq2KfYrDo8L2gzPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjdXN0b20tY29udHJvbCBjdXN0b20tcmFkaW8gY3VzdG9tLWNvbnRyb2wtaW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjdXN0b21SYWRpb0lubGluZTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID09IFwib25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRwcmlvcml0eShcIm5vcm1hbFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjdXN0b20tY29udHJvbC1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yPVwiY3VzdG9tUmFkaW9JbmxpbmUxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINi52KfYr9mKe1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLXJhZGlvIGN1c3RvbS1jb250cm9sLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY3VzdG9tUmFkaW9JbmxpbmUyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3NzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImN1c3RvbS1jb250cm9sLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PSBcIm9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0cHJpb3JpdHkoXCJjcml0aWNhbFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImN1c3RvbS1jb250cm9sLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3I9XCJjdXN0b21SYWRpb0lubGluZTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg2K3Ysdis2Kl7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjdXN0b20tY29udHJvbCBjdXN0b20tcmFkaW8gY3VzdG9tLWNvbnRyb2wtaW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjdXN0b21SYWRpb0lubGluZTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID09IFwib25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRwcmlvcml0eShcInN1cGVyQ3JpdGljYWxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjdXN0b20tY29udHJvbC1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yPVwiY3VzdG9tUmFkaW9JbmxpbmUzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINit2LHYrNipINis2K/Yp1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICB7c3RlcCA9PSAyID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtcmVzcG9uc2l2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9XCJ0aGVhZC1saWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic29ydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zb3J0PVwiYnVkZ2V0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzb3J0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXNvcnQ9XCJidWRnZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNvcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtc29ydD1cImJ1ZGdldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic29ydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zb3J0PVwiYnVkZ2V0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvdGg+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic29ydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zb3J0PVwiYnVkZ2V0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvdGg+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic29ydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zb3J0PVwiYnVkZ2V0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cImxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0clxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWcvaWNvbnMvb2xkLXdvbWFuLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1sZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg2KfZhdix2KPYqSDZhdiz2YbYqVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3VudGVySW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ291bnRDaGFuZ2U9eyhjb3VudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRPbGRXb21hbihjb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWcvaWNvbnMvb2xkLW1hbi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINix2KzZhCDZhdiz2YZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3VudGVySW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ291bnRDaGFuZ2U9eyhjb3VudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRPbGRNYW4oY291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0clxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWcvaWNvbnMvd2hlZWwucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWxnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDYp9it2KrZitin2KzYp9iqINiu2KfYtdipXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q291bnRlcklucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNvdW50Q2hhbmdlPXsoY291bnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWNjaWJpbGl0eVBlcnNvbihjb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezUwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1nL2ljb25zL2JhYnkucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWxnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDYt9mB2YQg2LHYttmK2LlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3VudGVySW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ291bnRDaGFuZ2U9eyhjb3VudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRCYWJ5KGNvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezUwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1nL2ljb25zL29ycGhhbl9naXJsLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1sZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg2KjZhtin2Kog2KPZitiq2KfZhVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvdW50ZXJJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Db3VudENoYW5nZT17KGNvdW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE9ycGhhbkdpcmxzKGNvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWcvaWNvbnMvb3JwaGFuX2JveS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINij2YjZhNin2K8g2KPZitiq2KfZhVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvdW50ZXJJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Db3VudENoYW5nZT17KGNvdW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE9ycGhhbkJveXMoY291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0clxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWcvaWNvbnMvd29tYW4ucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWxnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDYo9ix2KfZhdmEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q291bnRlcklucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNvdW50Q2hhbmdlPXsoY291bnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0V2lkb3dzKGNvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWcvaWNvbnMveW91dGgtd29tYW4ucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWxnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDYtNin2KjYp9iqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q291bnRlcklucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNvdW50Q2hhbmdlPXsoY291bnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0R2lybHMoY291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0clxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWcvaWNvbnMveW91dGgucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWxnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDYtNio2KfYqFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvdW50ZXJJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Db3VudENoYW5nZT17KGNvdW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEd1eXMoY291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltZy9pY29ucy9naXJsLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1sZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg2KjZhtin2KpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3VudGVySW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ291bnRDaGFuZ2U9eyhjb3VudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRnaXJsKGNvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezUwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1nL2ljb25zL2JveS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINij2YjZhNin2K9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3VudGVySW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ291bnRDaGFuZ2U9eyhjb3VudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRib3koY291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltZy9pY29ucy93b21hbi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINmG2LPYp9ihXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q291bnRlcklucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNvdW50Q2hhbmdlPXsoY291bnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0V29tZW4oY291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0clxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWcvaWNvbnMvbWFuLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1sZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg2LHYrNin2YRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3VudGVySW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ291bnRDaGFuZ2U9eyhjb3VudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRNZW4oY291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbHNwYW49XCIzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPFBlcnNvblR5cGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cItin2YXYsdij2Kkg2YXYs9mG2KlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVTdGF0ZT17b2xkV29tYW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvbWVmPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE9sZFdvbWFuKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyc29uVHlwZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwi2LHYrNmEINmF2LPZhlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZVN0YXRlPXtvbGRNYW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvbWVmPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE9sZE1hbihlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBlcnNvblR5cGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cItin2K3YqtmK2KfYrNin2Kog2K7Yp9i12KlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVTdGF0ZT17YWNjaWJpbGl0eVBlcnNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29tZWY9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWNjaWJpbGl0eVBlcnNvbihlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBlcnNvblR5cGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIti32YHZhCDYsdi22YrYuVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZVN0YXRlPXtiYWJ5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb21lZj17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRCYWJ5KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyc29uVHlwZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwi2KjZhtin2Kog2KPZitiq2KfZhVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZVN0YXRlPXtvcnBoYW5HaXJsc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29tZWY9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0T3JwaGFuR2lybHMoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQZXJzb25UeXBlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCLYo9mI2YTYp9ivINij2YrYqtin2YVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVTdGF0ZT17b3JwaGFuQm95c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29tZWY9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0T3JwaGFuQm95cyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBlcnNvblR5cGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cItij2LHYp9mF2YRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVTdGF0ZT17d2lkb3dzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb21lZj17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRXaWRvd3MoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQZXJzb25UeXBlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCLYtNin2KjYp9iqIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZVN0YXRlPXtnaXJsc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29tZWY9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0R2lybHMoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQZXJzb25UeXBlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCLYtNio2KfYqFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZVN0YXRlPXtndXlzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb21lZj17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRHdXlzKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyc29uVHlwZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwi2KjZhtin2KpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVTdGF0ZT17Z2lybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29tZWY9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Z2lybChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBlcnNvblR5cGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cItij2YjZhNin2K9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVTdGF0ZT17Ym95fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb21lZj17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRib3koZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQZXJzb25UeXBlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCLZhtiz2KfYoVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZVN0YXRlPXt3b21lbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29tZWY9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0V29tZW4oZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQZXJzb25UeXBlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCLYsdis2KfZhFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZVN0YXRlPXttZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvbWVmPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE1lbihlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQZXJzb25UeXBlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCLYrdi12Kkg2KfZhNi52KfYptmE2Kkg2YXZhiDYp9mE2YPZiNio2YjZhtin2KogKNmB2YLYtyDZhNmE2KrYs9mH2YrZhCDZitmF2YPZhiDYqti62YrYsSDYp9mE2YPZhdmK2Kkg2YjZgtiqINin2YTYtdix2YEpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlU3RhdGU9e3NoYXJlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb21lZj17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRzaGFyZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIzMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1mbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWxnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDYrdi12Kkg2KfZhNi52KfYptmE2Kkg2YXZhiDYp9mE2YPZiNio2YjZhtin2KogKNmB2YLYtyDZhNmE2KrYs9mH2YrZhCDZitmF2YPZhlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg2KrYutmK2LEg2KfZhNmD2YXZitipINmI2YLYqiDYp9mE2LXYsdmBKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCI2MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHNoYXJlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG51bWhlci1wZXJzb24tdHlwZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2hhcmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB7c3RlcCA9PSAzID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDYpdi22KfZgdipINmH2YjZitin2Kog2KfZgdix2KfYryDYp9mE2LnYp9im2YTYqSB7TnVtYmVyT2ZtZW1iZXJzfSDZgdix2K9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtTZWxlY3RlZE1lbWJlcnMubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtTZWxlY3RlZE1lbWJlcnMubWFwKChNZW1iZXIsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIGtleT17cGFnZWRvd259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINin2YTYpdiz2YUg2LnZhNmJINin2YTZh9mI2YrYqVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZW1iZXIuTWVtYmVyX05hbWUgKyBcImluZGV4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVcGRhdGVNZW1iZXJlTmFtZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lbWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e01lbWJlci5NZW1iZXJfTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLYp9mE2KXYs9mFINi52YTZiSDYp9mE2YfZiNmK2KkgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDYsdmC2YUg2KfZhNmH2YjZitipINij2Ygg2KfZhNil2YLYp9mF2KlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZW1iZXIuTWVtYmVyX051bWJlciArIFwiaW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVwZGF0ZU1lbWJlcmVOdW1iZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtNZW1iZXIuTWVtYmVyX051bWJlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLYsdmC2YUg2KfZhNmH2YjZitipXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmFsc2UgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDYtdmI2LHYqSDYp9mE2YfZiNmK2Kkg2KfZiCDYp9mE2KXZgtin2YXYqVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge01lbWJlci5NZW1iZXJfaW1nID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e01lbWJlci5NZW1iZXJfaW1nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg2LXZiNix2Kkg2KfZhNmH2YjZitipXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBtci0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zdHlsZT17eyBmbG9hdDogXCJyaWdodFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVNZW1iZXJfaW1nKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVtYmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJidG4taW5uZXItLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg2KrYudiv2YrZhFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uVXBsb2FkSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVJbWFnZT1cInRodW1ibmFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHRodW1ibmFpbCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlVGh1bWJuYWlsUHJvZHVjdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHVtYm5haWwudGFyZ2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsZXNbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVtYmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZmxvYXQ6IFwibGVmdFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZU1lYmVyKE1lbWJlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnRuLWlubmVyLS10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnRuLWlubmVyLS1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwibmkgbmktZmF0LXJlbW92ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXdhcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZmxvYXQ6IFwicmlnaHRcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZXdNZW1iZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJidG4taW5uZXItLXRleHRcIj4g2KXYttin2YHYqSDZgdix2K8g2KzYr9mK2K88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ0bi1pbm5lci0taWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIm5pIG5pLWZhdC1hZGRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICB7c3RlcCA9PSA0ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLXJlc3BvbnNpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPVwidGhlYWQtbGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic29ydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXNvcnQ9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDYp9mE2KXYrdiq2YrYp9isXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNvcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zb3J0PVwiYnVkZ2V0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDYp9iu2KrZitin2LFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keSBjbGFzc05hbWU9XCJsaXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yaWVzLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNhdGVnb3JpZXMubWFwKChkYXRhLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBlcnNvbk5lZWRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlQXJyYXk9e3VwZGF0ZUFycmF5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlVXNlcj17cmVtb3ZlVXNlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT7Yp9mE2YXZhtiv2YjYqDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RNYW5kb2Jlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcl9pZD17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hbmRvYmVfaWQ9ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXROZXdNYW5kb2JlX2lkPXtzZXROZXdNYW5kb2JlX2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIwIGF1dG9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCI5ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3N0ZXAgPT0gMSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWxnIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3N0ZXAgPT0gMSA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXAgPT0gMSA/IGZhbHNlIDogc2V0U3RlcChzdGVwIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINin2YTYs9in2KjZglxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgICAgIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGVwID09IDQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1sZyBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtzdGVwID09IDQgPyB0cnVlIDogZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwID09IDQgPyBmYWxzZSA6IHNldFN0ZXAoc3RlcCArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICDYp9mE2KrYp9mE2YpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAge3N0ZXAgPT0gNCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cGVyc29uTmVlZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwibGVmdFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4taWNvbiBidG4tc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBteXN1Ym1pdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIuNzVlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiYXV0b1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4taW5uZXItLXRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg2KXZhti02KfYoVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiAgICAgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnRuLWlubmVyLS1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJuaSBuaS1zZW5kXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgey8qIEFyZ29uIFNjcmlwdHMgKi99XHJcbiAgICAgICAgICB7LyogQ29yZSAqL31cclxuICAgICAgICAgIHsvKiBPcHRpb25hbCBKUyAqL31cclxuICAgICAgICAgIHsvKiBBcmdvbiBKUyAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9ib2R5PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvdGVjdFJvdXRlKFRhYmxlKTtcclxuIiwiaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XHJcblxyXG5jb25zdCBzaXRlVXJsID0gQ29va2llcy5nZXQoXCJzaXRlVXJsXCIpO1xyXG5pZiAoIXNpdGVVcmwpIHtcclxuICBDb29raWVzLnNldChcInNpdGVVcmxcIiwgXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvXCIsIHtcclxuICAgIGV4cGlyZXM6IDYwLFxyXG4gIH0pO1xyXG59XHJcbmxldCB1cmxzID0ge1xyXG4gIGRldmVsb3BtZW50OiBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9cIixcclxuICBwcm9kdWN0aW9uOiBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9cIixcclxufTtcclxuY29uc3QgYXBpID0gQXhpb3MuY3JlYXRlKHtcclxuICBiYXNlVVJMOiB1cmxzW3Byb2Nlc3MuZW52Lk5PREVfRU5WXSxcclxuICBoZWFkZXJzOiB7XHJcbiAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcGk7XHJcbiIsImltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xyXG5pbXBvcnQgYXBpIGZyb20gXCIuLi9zZXJ2aWNlcy9BcGlcIjtcclxuaW1wb3J0IHVzZUF1dGgsIHsgUHJvdGVjdFJvdXRlIH0gZnJvbSBcIi4uL2NvbnRleHRzL2F1dGguanNcIjtcclxuXHJcbmZ1bmN0aW9uIGFwaV9nZXQoKSB7XHJcbiAgLy8gY29uc3QgW3Rlc3RzLCBzZXR0ZXN0c10gPSB1c2VTdGF0ZSgpO1xyXG4gIC8vIGNvbnN0IFtzaG93U2tlbGV0b24sIHNldHNob3dTa2VsZXRvbl0gPSB1c2VTdGF0ZSgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29tcGFueShuYW1lKSB7XHJcbiAgY29uc3QgeyBsb2FkaW5nIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgbG9hZGluZyA/IGZhbHNlIDogXCJhcGkvZ2V0Q29tcGFueT9uYW1lPVwiICsgbmFtZSxcclxuICAgIGFwaS5nZXRcclxuICApO1xyXG4gIHJldHVybiB7XHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gICAgaXNMb2FkaW5nOiAhZXJyb3IgJiYgIWRhdGEsXHJcbiAgICBpc0Vycm9yOiBlcnJvcixcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3BvbnNvcnMocGhvbmUsIGdldFR5cGUpIHtcclxuICBjb25zdCB7IGxvYWRpbmcgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICBsb2FkaW5nXHJcbiAgICAgID8gZmFsc2VcclxuICAgICAgOiBcImFwaS9nZXRTcG9uc29ycz9waG9uZT1cIiArIHBob25lICsgXCImZ2V0VHlwZT1cIiArIGdldFR5cGUsXHJcbiAgICBhcGkuZ2V0XHJcbiAgKTtcclxuICByZXR1cm4ge1xyXG4gICAgZGF0YTogZGF0YSxcclxuICAgIGlzTG9hZGluZzogIWVycm9yICYmICFkYXRhLFxyXG4gICAgaXNFcnJvcjogZXJyb3IsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdldEZ1bGxDQ0FzKHBhZ2V1cCkge1xyXG4gIGNvbnN0IHsgbG9hZGluZyB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcclxuICAgIGxvYWRpbmcgPyBmYWxzZSA6IFwiYXBpL0dldEZ1bGxDQ0FzP3BhZ2V1cD1cIiArIHBhZ2V1cCxcclxuICAgIGFwaS5nZXRcclxuICApO1xyXG4gIHJldHVybiB7XHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gICAgaXNMb2FkaW5nOiAhZXJyb3IgJiYgIWRhdGEsXHJcbiAgICBpc0Vycm9yOiBlcnJvcixcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2V0QWxsTWFuZG9iZXMoKSB7XHJcbiAgY29uc3QgeyBsb2FkaW5nIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgbG9hZGluZyA/IGZhbHNlIDogXCJhcGkvR2V0QWxsTWFuZG9iZXNcIixcclxuICAgIGFwaS5nZXRcclxuICApO1xyXG4gIHJldHVybiB7XHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gICAgaXNMb2FkaW5nOiAhZXJyb3IgJiYgIWRhdGEsXHJcbiAgICBpc0Vycm9yOiBlcnJvcixcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2V0QygpIHtcclxuICBjb25zdCB7IGxvYWRpbmcgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IobG9hZGluZyA/IGZhbHNlIDogXCJhcGkvR2V0Q1wiLCBhcGkuZ2V0KTtcclxuICByZXR1cm4ge1xyXG4gICAgZGF0YTogZGF0YSxcclxuICAgIGlzTG9hZGluZzogIWVycm9yICYmICFkYXRhLFxyXG4gICAgaXNFcnJvcjogZXJyb3IsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENvbXBhbnlzU3RhdGlzdGljKG5hbWUpIHtcclxuICBjb25zdCB7IGxvYWRpbmcgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICBsb2FkaW5nID8gZmFsc2UgOiBcImFwaS9Db21wYW55c1N0YXRpc3RpYz9uYW1lPVwiICsgbmFtZSxcclxuICAgIGFwaS5nZXRcclxuICApO1xyXG4gIHJldHVybiB7XHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gICAgaXNMb2FkaW5nOiAhZXJyb3IgJiYgIWRhdGEsXHJcbiAgICBpc0Vycm9yOiBlcnJvcixcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVXNlclN0YXRpc3RpY3ModXNlcl9pZCwgcGFnZXVwKSB7XHJcbiAgY29uc3QgeyBsb2FkaW5nIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgbG9hZGluZ1xyXG4gICAgICA/IGZhbHNlXHJcbiAgICAgIDogXCJhcGkvVXNlclN0YXRpc3RpY3M/dXNlcl9pZD1cIiArIHVzZXJfaWQgKyBcIiZwYWdldXA9XCIgKyBwYWdldXAsXHJcbiAgICBhcGkuZ2V0XHJcbiAgKTtcclxuICByZXR1cm4ge1xyXG4gICAgVXNlclN0YXRpc3RpY3NEYXRhOiBkYXRhLFxyXG4gICAgVXNlclN0YXRpc3RpY3NlcnJvcmlzTG9hZGluZzogIWVycm9yICYmICFkYXRhLFxyXG4gICAgVXNlclN0YXRpc3RpY3NlcnJvcmlzRXJyb3I6IGVycm9yLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRBcHByb3ZlTWFuZG9iZXMoKSB7XHJcbiAgY29uc3QgeyBsb2FkaW5nIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgbG9hZGluZyA/IGZhbHNlIDogXCJhcGkvR2V0QXBwcm92ZU1hbmRvYmVzXCIsXHJcbiAgICBhcGkuZ2V0XHJcbiAgKTtcclxuICByZXR1cm4ge1xyXG4gICAgZGF0YTogZGF0YSxcclxuICAgIGlzTG9hZGluZzogIWVycm9yICYmICFkYXRhLFxyXG4gICAgaXNFcnJvcjogZXJyb3IsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdldEFwcHJvdmV1c2Vyc3NNKCkge1xyXG4gIGNvbnN0IHsgbG9hZGluZyB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcclxuICAgIGxvYWRpbmcgPyBmYWxzZSA6IFwiYXBpL0dldEFwcHJvdmV1c2Vyc3NNXCIsXHJcbiAgICBhcGkuZ2V0XHJcbiAgKTtcclxuICByZXR1cm4ge1xyXG4gICAgZGF0YTogZGF0YSxcclxuICAgIGlzTG9hZGluZzogIWVycm9yICYmICFkYXRhLFxyXG4gICAgaXNFcnJvcjogZXJyb3IsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdldEFwcHJvdmV1c2Vyc3MoKSB7XHJcbiAgY29uc3QgeyBsb2FkaW5nIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgbG9hZGluZyA/IGZhbHNlIDogXCJhcGkvR2V0QXBwcm92ZXVzZXJzc1wiLFxyXG4gICAgYXBpLmdldFxyXG4gICk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgICBpc0xvYWRpbmc6ICFlcnJvciAmJiAhZGF0YSxcclxuICAgIGlzRXJyb3I6IGVycm9yLFxyXG4gIH07XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIENvbXBhbnlzU3RhdGlzdGljcygpIHtcclxuICBjb25zdCB7IGxvYWRpbmcgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICBsb2FkaW5nID8gZmFsc2UgOiBcImFwaS9Db21wYW55c1N0YXRpc3RpY3NcIixcclxuICAgIGFwaS5nZXRcclxuICApO1xyXG4gIHJldHVybiB7XHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gICAgaXNMb2FkaW5nOiAhZXJyb3IgJiYgIWRhdGEsXHJcbiAgICBpc0Vycm9yOiBlcnJvcixcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlckNhcmRzKHVzZXJfaWQpIHtcclxuICBjb25zdCB7IGxvYWRpbmcgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICBsb2FkaW5nID8gZmFsc2UgOiBcImFwaS9nZXRVc2VyQ2FyZHM/dXNlcl9pZD1cIiArIHVzZXJfaWQsXHJcbiAgICBhcGkuZ2V0XHJcbiAgKTtcclxuICByZXR1cm4ge1xyXG4gICAgZGF0YTogZGF0YSxcclxuICAgIGlzTG9hZGluZzogIWVycm9yICYmICFkYXRhLFxyXG4gICAgaXNFcnJvcjogZXJyb3IsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdldE1hbmRvYmVzKFxyXG4gIHJlcXVlc3QsXHJcbiAgbmFtZSxcclxuICBwYWdlLFxyXG4gIFNjaXR5LFxyXG4gIFNhZXJhLFxyXG4gIFJzTmFtZSxcclxuICBSc1Bob25lXHJcbikge1xyXG4gIGlmIChyZXF1ZXN0ID09IFwiZmlyc3RUaW1lXCIpIHtcclxuICAgIGNvbnN0IHsgbG9hZGluZyB9ID0gdXNlQXV0aCgpO1xyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgICBsb2FkaW5nID8gZmFsc2UgOiBcImFwaS9HZXRNYW5kb2Jlc1wiLFxyXG4gICAgICBhcGkuZ2V0XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgaXNMb2FkaW5nOiAhZXJyb3IgJiYgIWRhdGEsXHJcbiAgICAgIGlzRXJyb3I6IGVycm9yLFxyXG4gICAgfTtcclxuICB9IGVsc2UgaWYgKHJlcXVlc3QgPT0gXCJjdXN0b21cIikge1xyXG4gICAgY29uc3QgeyBsb2FkaW5nIH0gPSB1c2VBdXRoKCk7XHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICAgIGxvYWRpbmdcclxuICAgICAgICA/IGZhbHNlXHJcbiAgICAgICAgOiBcImFwaS9PcmRlckdldE1hbmRvYmVzP3BhZ2U9XCIgK1xyXG4gICAgICAgICAgICBwYWdlICtcclxuICAgICAgICAgICAgXCImbmFtZT1cIiArXHJcbiAgICAgICAgICAgIG5hbWUgK1xyXG4gICAgICAgICAgICBcIiZTY2l0eT1cIiArXHJcbiAgICAgICAgICAgIFNjaXR5ICtcclxuICAgICAgICAgICAgXCImU2FlcmE9XCIgK1xyXG4gICAgICAgICAgICBTYWVyYSArXHJcbiAgICAgICAgICAgIFwiJlJzTmFtZT1cIiArXHJcbiAgICAgICAgICAgIFJzTmFtZSArXHJcbiAgICAgICAgICAgIFwiJlJzUGhvbmU9XCIgK1xyXG4gICAgICAgICAgICBSc1Bob25lLFxyXG5cclxuICAgICAgYXBpLmdldFxyXG4gICAgKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgIGlzTG9hZGluZzogIWVycm9yICYmICFkYXRhLFxyXG4gICAgICBpc0Vycm9yOiBlcnJvcixcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2V0dXNlcnNzMihcclxuICByZXF1ZXN0LFxyXG4gIG5hbWUsXHJcbiAgbWVtYmVycyxcclxuICBsYXN0X2NvdWJvbixcclxuICB0b3RhbF9jb3Vib25zLFxyXG4gIHBpb3JpdHksXHJcbiAgcGFnZSxcclxuICBTY2l0eSxcclxuICBTYWVyYSxcclxuICBTY2F0LFxyXG4gIFJzTmFtZSxcclxuICBSc1Bob25lLFxyXG4gIFNwYWlvcml0eSxcclxuICBTVHlwZSxcclxuICBTTnVtYmVyXHJcbikge1xyXG4gIGlmIChyZXF1ZXN0ID09IFwiZmlyc3RUaW1lXCIpIHtcclxuICAgIGNvbnN0IHsgbG9hZGluZyB9ID0gdXNlQXV0aCgpO1xyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgICBsb2FkaW5nID8gZmFsc2UgOiBcImFwaS9HZXR1c2Vyc3MyXCIsXHJcbiAgICAgIGFwaS5nZXRcclxuICAgICk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICBpc0xvYWRpbmc6ICFlcnJvciAmJiAhZGF0YSxcclxuICAgICAgaXNFcnJvcjogZXJyb3IsXHJcbiAgICB9O1xyXG4gIH0gZWxzZSBpZiAocmVxdWVzdCA9PSBcImN1c3RvbVwiKSB7XHJcbiAgICBjb25zdCB7IGxvYWRpbmcgfSA9IHVzZUF1dGgoKTtcclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcclxuICAgICAgbG9hZGluZ1xyXG4gICAgICAgID8gZmFsc2VcclxuICAgICAgICA6IFwiYXBpL09yZGVyR2V0dXNlcnNzMj9wYWdlPVwiICtcclxuICAgICAgICAgICAgcGFnZSArXHJcbiAgICAgICAgICAgIFwiJm5hbWU9XCIgK1xyXG4gICAgICAgICAgICBuYW1lICtcclxuICAgICAgICAgICAgXCImbWVtYmVycz1cIiArXHJcbiAgICAgICAgICAgIG1lbWJlcnMgK1xyXG4gICAgICAgICAgICBcIiZsYXN0X2NvdWJvbj1cIiArXHJcbiAgICAgICAgICAgIGxhc3RfY291Ym9uICtcclxuICAgICAgICAgICAgXCImdG90YWxfY291Ym9ucz1cIiArXHJcbiAgICAgICAgICAgIHRvdGFsX2NvdWJvbnMgK1xyXG4gICAgICAgICAgICBcIiZTY2l0eT1cIiArXHJcbiAgICAgICAgICAgIFNjaXR5ICtcclxuICAgICAgICAgICAgXCImU2FlcmE9XCIgK1xyXG4gICAgICAgICAgICBTYWVyYSArXHJcbiAgICAgICAgICAgIFwiJlNjYXQ9XCIgK1xyXG4gICAgICAgICAgICBTY2F0ICtcclxuICAgICAgICAgICAgXCImcGlvcml0eT1cIiArXHJcbiAgICAgICAgICAgIHBpb3JpdHkgK1xyXG4gICAgICAgICAgICBcIiZSc05hbWU9XCIgK1xyXG4gICAgICAgICAgICBSc05hbWUgK1xyXG4gICAgICAgICAgICBcIiZSc1Bob25lPVwiICtcclxuICAgICAgICAgICAgUnNQaG9uZSArXHJcbiAgICAgICAgICAgIFwiJlNwYWlvcml0eT1cIiArXHJcbiAgICAgICAgICAgIFNwYWlvcml0eSArXHJcbiAgICAgICAgICAgIFwiJlNUeXBlPVwiICtcclxuICAgICAgICAgICAgU1R5cGUgK1xyXG4gICAgICAgICAgICBcIiZTTnVtYmVyPVwiICtcclxuICAgICAgICAgICAgU051bWJlcixcclxuXHJcbiAgICAgIGFwaS5nZXRcclxuICAgICk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICBpc0xvYWRpbmc6ICFlcnJvciAmJiAhZGF0YSxcclxuICAgICAgaXNFcnJvcjogZXJyb3IsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdldE1hbmRvYlVzZXJzKFxyXG4gIHJlcXVlc3QsXHJcbiAgbmFtZSxcclxuICBtZW1iZXJzLFxyXG4gIGxhc3RfY291Ym9uLFxyXG4gIHRvdGFsX2NvdWJvbnMsXHJcbiAgcGlvcml0eSxcclxuICBwYWdlLFxyXG4gIFNjaXR5LFxyXG4gIFNhZXJhLFxyXG4gIFNjYXQsXHJcbiAgUnNOYW1lLFxyXG4gIFJzUGhvbmUsXHJcbiAgbWFuZG9iZV9pZCxcclxuICBTcGFpb3JpdHksXHJcbiAgU1R5cGUsXHJcbiAgU051bWJlclxyXG4pIHtcclxuICBpZiAocmVxdWVzdCA9PSBcImZpcnN0VGltZVwiKSB7XHJcbiAgICBjb25zdCB7IGxvYWRpbmcgfSA9IHVzZUF1dGgoKTtcclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcclxuICAgICAgbG9hZGluZyA/IGZhbHNlIDogXCJhcGkvR2V0TWFuZG9iVXNlcnM/bWFuZG9iZV9pZD1cIiArIG1hbmRvYmVfaWQsXHJcbiAgICAgIGFwaS5nZXRcclxuICAgICk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICBpc0xvYWRpbmc6ICFlcnJvciAmJiAhZGF0YSxcclxuICAgICAgaXNFcnJvcjogZXJyb3IsXHJcbiAgICB9O1xyXG4gIH0gZWxzZSBpZiAocmVxdWVzdCA9PSBcImN1c3RvbVwiKSB7XHJcbiAgICBjb25zdCB7IGxvYWRpbmcgfSA9IHVzZUF1dGgoKTtcclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcclxuICAgICAgbG9hZGluZ1xyXG4gICAgICAgID8gZmFsc2VcclxuICAgICAgICA6IFwiYXBpL09yZGVyR2V0TWFuZG9iVXNlcnM/cGFnZT1cIiArXHJcbiAgICAgICAgICAgIHBhZ2UgK1xyXG4gICAgICAgICAgICBcIiZuYW1lPVwiICtcclxuICAgICAgICAgICAgbmFtZSArXHJcbiAgICAgICAgICAgIFwiJm1lbWJlcnM9XCIgK1xyXG4gICAgICAgICAgICBtZW1iZXJzICtcclxuICAgICAgICAgICAgXCImbGFzdF9jb3Vib249XCIgK1xyXG4gICAgICAgICAgICBsYXN0X2NvdWJvbiArXHJcbiAgICAgICAgICAgIFwiJnRvdGFsX2NvdWJvbnM9XCIgK1xyXG4gICAgICAgICAgICB0b3RhbF9jb3Vib25zICtcclxuICAgICAgICAgICAgXCImU2NpdHk9XCIgK1xyXG4gICAgICAgICAgICBTY2l0eSArXHJcbiAgICAgICAgICAgIFwiJlNhZXJhPVwiICtcclxuICAgICAgICAgICAgU2FlcmEgK1xyXG4gICAgICAgICAgICBcIiZTY2F0PVwiICtcclxuICAgICAgICAgICAgU2NhdCArXHJcbiAgICAgICAgICAgIFwiJnBpb3JpdHk9XCIgK1xyXG4gICAgICAgICAgICBwaW9yaXR5ICtcclxuICAgICAgICAgICAgXCImUnNOYW1lPVwiICtcclxuICAgICAgICAgICAgUnNOYW1lICtcclxuICAgICAgICAgICAgXCImUnNQaG9uZT1cIiArXHJcbiAgICAgICAgICAgIFJzUGhvbmUgK1xyXG4gICAgICAgICAgICBcIiZtYW5kb2JlX2lkPVwiICtcclxuICAgICAgICAgICAgbWFuZG9iZV9pZCArXHJcbiAgICAgICAgICAgIFwiJlNwYWlvcml0eT1cIiArXHJcbiAgICAgICAgICAgIFNwYWlvcml0eSArXHJcbiAgICAgICAgICAgIFwiJlNUeXBlPVwiICtcclxuICAgICAgICAgICAgU1R5cGUgK1xyXG4gICAgICAgICAgICBcIiZTTnVtYmVyPVwiICtcclxuICAgICAgICAgICAgU051bWJlcixcclxuXHJcbiAgICAgIGFwaS5nZXRcclxuICAgICk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICBpc0xvYWRpbmc6ICFlcnJvciAmJiAhZGF0YSxcclxuICAgICAgaXNFcnJvcjogZXJyb3IsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdldHVzZXJzcyhcclxuICByZXF1ZXN0LFxyXG4gIG5hbWUsXHJcbiAgbWVtYmVycyxcclxuICBsYXN0X2NvdWJvbixcclxuICB0b3RhbF9jb3Vib25zLFxyXG4gIHBpb3JpdHksXHJcbiAgcGFnZSxcclxuICBTY2l0eSxcclxuICBTYWVyYSxcclxuICBTY2F0LFxyXG4gIFJzTmFtZSxcclxuICBSc1Bob25lLFxyXG4gIGhpZGUsXHJcbiAgU3BhaW9yaXR5LFxyXG4gIFNUeXBlLFxyXG4gIFNOdW1iZXJcclxuKSB7XHJcbiAgaWYgKHJlcXVlc3QgPT0gXCJmaXJzdFRpbWVcIikge1xyXG4gICAgY29uc3QgeyBsb2FkaW5nIH0gPSB1c2VBdXRoKCk7XHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICAgIGxvYWRpbmcgPyBmYWxzZSA6IFwiYXBpL0dldHVzZXJzc1wiLFxyXG4gICAgICBhcGkuZ2V0XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgaXNMb2FkaW5nOiAhZXJyb3IgJiYgIWRhdGEsXHJcbiAgICAgIGlzRXJyb3I6IGVycm9yLFxyXG4gICAgfTtcclxuICB9IGVsc2UgaWYgKHJlcXVlc3QgPT0gXCJjdXN0b21cIikge1xyXG4gICAgY29uc3QgeyBsb2FkaW5nIH0gPSB1c2VBdXRoKCk7XHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICAgIGxvYWRpbmdcclxuICAgICAgICA/IGZhbHNlXHJcbiAgICAgICAgOiBcImFwaS9PcmRlckdldHVzZXJzcz9wYWdlPVwiICtcclxuICAgICAgICAgICAgcGFnZSArXHJcbiAgICAgICAgICAgIFwiJm5hbWU9XCIgK1xyXG4gICAgICAgICAgICBuYW1lICtcclxuICAgICAgICAgICAgXCImbWVtYmVycz1cIiArXHJcbiAgICAgICAgICAgIG1lbWJlcnMgK1xyXG4gICAgICAgICAgICBcIiZsYXN0X2NvdWJvbj1cIiArXHJcbiAgICAgICAgICAgIGxhc3RfY291Ym9uICtcclxuICAgICAgICAgICAgXCImdG90YWxfY291Ym9ucz1cIiArXHJcbiAgICAgICAgICAgIHRvdGFsX2NvdWJvbnMgK1xyXG4gICAgICAgICAgICBcIiZTY2l0eT1cIiArXHJcbiAgICAgICAgICAgIFNjaXR5ICtcclxuICAgICAgICAgICAgXCImU2FlcmE9XCIgK1xyXG4gICAgICAgICAgICBTYWVyYSArXHJcbiAgICAgICAgICAgIFwiJlNjYXQ9XCIgK1xyXG4gICAgICAgICAgICBTY2F0ICtcclxuICAgICAgICAgICAgXCImcGlvcml0eT1cIiArXHJcbiAgICAgICAgICAgIHBpb3JpdHkgK1xyXG4gICAgICAgICAgICBcIiZSc05hbWU9XCIgK1xyXG4gICAgICAgICAgICBSc05hbWUgK1xyXG4gICAgICAgICAgICBcIiZSc1Bob25lPVwiICtcclxuICAgICAgICAgICAgUnNQaG9uZSArXHJcbiAgICAgICAgICAgIFwiJmhpZGU9XCIgK1xyXG4gICAgICAgICAgICBoaWRlICtcclxuICAgICAgICAgICAgXCImU3BhaW9yaXR5PVwiICtcclxuICAgICAgICAgICAgU3BhaW9yaXR5ICtcclxuICAgICAgICAgICAgXCImU1R5cGU9XCIgK1xyXG4gICAgICAgICAgICBTVHlwZSArXHJcbiAgICAgICAgICAgIFwiJlNOdW1iZXI9XCIgK1xyXG4gICAgICAgICAgICBTTnVtYmVyLFxyXG5cclxuICAgICAgYXBpLmdldFxyXG4gICAgKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgIGlzTG9hZGluZzogIWVycm9yICYmICFkYXRhLFxyXG4gICAgICBpc0Vycm9yOiBlcnJvcixcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2V0Q291cG9uc0J5QnJhY25oQ2F0KEJyYW5jaGlkLCBDYXRlZ29yeWlkKSB7XHJcbiAgY29uc3QgeyBsb2FkaW5nIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgbG9hZGluZ1xyXG4gICAgICA/IGZhbHNlXHJcbiAgICAgIDogXCJhcGkvR2V0Q291cG9uc0J5QnJhY25oQ2F0P0JyYW5jaGlkPVwiICtcclxuICAgICAgICAgIEJyYW5jaGlkICtcclxuICAgICAgICAgIFwiJkNhdGVnb3J5aWQ9XCIgK1xyXG4gICAgICAgICAgQ2F0ZWdvcnlpZCxcclxuICAgIGFwaS5nZXRcclxuICApO1xyXG4gIHJldHVybiB7XHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gICAgaXNMb2FkaW5nOiAhZXJyb3IgJiYgIWRhdGEsXHJcbiAgICBpc0Vycm9yOiBlcnJvcixcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2V0Q291cG9uQnJhbmNoZXMoU2VjdGlvbl9pZCkge1xyXG4gIGNvbnN0IHsgbG9hZGluZyB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcclxuICAgIGxvYWRpbmcgPyBmYWxzZSA6IFwiYXBpL0dldENvdXBvbkJyYW5jaGVzP1NlY3Rpb25faWQ9XCIgKyBTZWN0aW9uX2lkLFxyXG4gICAgYXBpLmdldFxyXG4gICk7XHJcbiAgcmV0dXJuIHtcclxuICAgIENvdXBvbkJyYW5jaGVzOiBkYXRhLFxyXG4gICAgQ291cG9uQnJhbmNoZXNpc0xvYWRpbmc6ICFlcnJvciAmJiAhZGF0YSxcclxuICAgIENvdXBvbkJyYW5jaGVzaXNFcnJvcjogZXJyb3IsXHJcbiAgfTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gR2V0VXNlck1ldGEoVGhlVXNlcl9pZCkge1xyXG4gIGNvbnN0IHsgbG9hZGluZyB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcclxuICAgIGxvYWRpbmcgPyBmYWxzZSA6IFwiYXBpL0dldFVzZXJNZXRhP1RoZVVzZXJfaWQ9XCIgKyBUaGVVc2VyX2lkLFxyXG4gICAgYXBpLmdldFxyXG4gICk7XHJcbiAgcmV0dXJuIHtcclxuICAgIFVzZXJNZXRhOiBkYXRhLFxyXG4gICAgVXNlck1ldGFpc0xvYWRpbmc6ICFlcnJvciAmJiAhZGF0YSxcclxuICAgIFVzZXJNZXRhaXNFcnJvcjogZXJyb3IsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdldENhdGVnb3JpZXMoKSB7XHJcbiAgY29uc3QgeyBsb2FkaW5nIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgbG9hZGluZyA/IGZhbHNlIDogXCJhcGkvR2V0Q2F0ZWdvcmllc1wiLFxyXG4gICAgYXBpLmdldFxyXG4gICk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgICBpc0xvYWRpbmc6ICFlcnJvciAmJiAhZGF0YSxcclxuICAgIGlzRXJyb3I6IGVycm9yLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRDb21wYW55cygpIHtcclxuICBjb25zdCB7IGxvYWRpbmcgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICBsb2FkaW5nID8gZmFsc2UgOiBcImFwaS9HZXRDb21wYW55c1wiLFxyXG4gICAgYXBpLmdldFxyXG4gICk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgICBpc0xvYWRpbmc6ICFlcnJvciAmJiAhZGF0YSxcclxuICAgIGlzRXJyb3I6IGVycm9yLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRDYXRlZ29yeXNCeUNpdHkoY2l0eSkge1xyXG4gIGNvbnN0IHsgbG9hZGluZyB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcclxuICAgIGxvYWRpbmcgPyBmYWxzZSA6IFwiYXBpL0dldENhdGVnb3J5c0J5Q2l0eT9jaXR5PVwiICsgY2l0eSxcclxuICAgIGFwaS5nZXRcclxuICApO1xyXG4gIHJldHVybiB7XHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gICAgaXNMb2FkaW5nOiAhZXJyb3IgJiYgIWRhdGEsXHJcbiAgICBpc0Vycm9yOiBlcnJvcixcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2V0Q291cG9uc0J5U2VjdGlvbihzZWN0aW9uX2lkKSB7XHJcbiAgY29uc3QgeyBsb2FkaW5nIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgbG9hZGluZyA/IGZhbHNlIDogXCJhcGkvR2V0Q291cG9uc0J5U2VjdGlvbj9zZWN0aW9uX2lkPVwiICsgc2VjdGlvbl9pZCxcclxuICAgIGFwaS5nZXRcclxuICApO1xyXG4gIHJldHVybiB7XHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gICAgaXNMb2FkaW5nOiAhZXJyb3IgJiYgIWRhdGEsXHJcbiAgICBpc0Vycm9yOiBlcnJvcixcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2V0Q291cG9uc0J5YnJhbmNoKElkLCBnZXRUeXBlKSB7XHJcbiAgY29uc3QgeyBsb2FkaW5nIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgbG9hZGluZ1xyXG4gICAgICA/IGZhbHNlXHJcbiAgICAgIDogXCJhcGkvR2V0Q291cG9uc0J5YnJhbmNoP0lkPVwiICsgSWQgKyBcIiZnZXRUeXBlPVwiICsgZ2V0VHlwZSxcclxuXHJcbiAgICBhcGkuZ2V0XHJcbiAgKTtcclxuICByZXR1cm4ge1xyXG4gICAgZGF0YTogZGF0YSxcclxuICAgIGlzTG9hZGluZzogIWVycm9yICYmICFkYXRhLFxyXG4gICAgaXNFcnJvcjogZXJyb3IsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdldENDQXMoKSB7XHJcbiAgY29uc3QgeyBsb2FkaW5nIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKGxvYWRpbmcgPyBmYWxzZSA6IFwiYXBpL0dldENDQXNcIiwgYXBpLmdldCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgICBpc0xvYWRpbmc6ICFlcnJvciAmJiAhZGF0YSxcclxuICAgIGlzRXJyb3I6IGVycm9yLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwaV9nZXQ7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9BZGRDaXJjbGVPdXRsaW5lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXMtZXhhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYWxlcnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY291bnRlci1pbnB1dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1sb2FkaW5nLXNrZWxldG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3clwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==