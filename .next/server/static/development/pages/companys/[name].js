module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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

/***/ "./components/AddCoubonsForm.js":
/*!**************************************!*\
  !*** ./components/AddCoubonsForm.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_Api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/Api */ "./services/Api.js");
/* harmony import */ var react_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-alert */ "react-alert");
/* harmony import */ var react_alert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_alert__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _contexts_auth_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/auth.js */ "./contexts/auth.js");
var _jsxFileName = "C:\\xampp\\htdocs\\next\\components\\AddCoubonsForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 //







function AddCoubonsForm({
  Section_id,
  coubonName,
  BracnhCode,
  value,
  GoBackAndTriggerMutation,
  changenewCompany,
  coubonType
}) {
  const alert = Object(react_alert__WEBPACK_IMPORTED_MODULE_3__["useAlert"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
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
    0: InputTypedis,
    1: setInputTypedis
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    register,
    handleSubmit,
    errors
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["useForm"])({//mode: "onChange",
  });

  const onSubmit = formdata => {
    formdata = _objectSpread(_objectSpread({}, formdata), {}, {
      Section_id,
      coubonName,
      BracnhCode,
      value,
      coubonType
    });
    setspinner(true);
    console.log(formdata);
    _services_Api__WEBPACK_IMPORTED_MODULE_2__["default"].post("api/AddCoubons", formdata).then(res => {
      console.log(res.data);
      setspinner(false);

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
        });
        GoBackAndTriggerMutation(); //router.push("/companys/[name]", "/companys/" + formdata.companyName);
      }
    }).catch(err => {
      console.log(err);
      setspinner(false);
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    style: {
      float: "right"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, __jsx("button", {
    onClick: () => {
      changenewCompany();
    },
    class: "btn btn-icon btn-primary",
    type: "button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, __jsx("span", {
    class: "btn-inner--icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }, __jsx("i", {
    class: "fa fa-arrow-right",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
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
      lineNumber: 88,
      columnNumber: 9
    }
  }, "\u0625\u0636\u0627\u0641\u0629 \u0643\u0648\u0628\u0648\u0646\u0627\u062A :"), __jsx("div", {
    style: {
      clear: "both"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  })), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }), __jsx("div", {
    class: "col-xl-12 col-md-12",
    style: {
      height: "50px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }), __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }, __jsx("h6", {
    className: "heading-small text-muted mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }, "\u0625\u0636\u0627\u0641\u0629 \u0643\u0648\u0628\u0648\u0646\u0627\u062A \u0627\u0644\u0649 : ", coubonName), coubonType == "one_code" ? __jsx("div", {
    className: "pl-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 17
    }
  }, __jsx("label", {
    className: "form-control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 19
    }
  }, "\u0627\u0644\u0643\u0648\u062F"), __jsx("input", {
    type: "text",
    name: "code",
    ref: register({
      required: true
    }),
    className: "form-control",
    placeholder: "Free10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 19
    }
  })), errors.code && errors.code.type === "required" && __jsx("p", {
    style: {
      color: "red"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 19
    }
  }, "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628")))) : __jsx("div", {
    className: "pl-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 17
    }
  }, __jsx("label", {
    className: "form-control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 19
    }
  }, "\u0627\u0644\u0643\u0645\u064A\u0629"), __jsx("input", {
    type: "number",
    name: "coubonsAmount",
    ref: register({
      required: true
    }),
    className: "form-control",
    placeholder: "\u0643\u0645\u064A\u0629 \u0627\u0644\u0643\u0648\u0628\u0648\u0646\u0627\u062A \u0627\u0644\u0645\u0631\u0627\u062F \u0625\u0646\u0634\u0627\u0626\u0647\u0627",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 19
    }
  })), errors.coubonsAmount && errors.coubonsAmount.type === "required" && __jsx("p", {
    style: {
      color: "red"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 21
    }
  }, "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628")))), spinner ? __jsx("button", {
    className: "btn btn-default",
    disabled: true,
    style: {
      float: "left"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "spinner-grow spinner-grow-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 13
    }
  }), "\u062C\u0627\u0631\u064A \u0627\u0644\u0625\u0631\u0633\u0627\u0644 ..") : __jsx("input", {
    style: {
      float: "left"
    },
    type: "submit",
    className: "btn btn-default",
    value: loading ? "Loading..." : "إضافة كوبونات",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 11
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (AddCoubonsForm);

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

/***/ "./components/BranchCoubonTable.js":
/*!*****************************************!*\
  !*** ./components/BranchCoubonTable.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Admin_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Admin_nav */ "./components/Admin_nav.js");
/* harmony import */ var _HeaderNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeaderNav */ "./components/HeaderNav.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony import */ var _NewCoubonForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NewCoubonForm */ "./components/NewCoubonForm.js");
/* harmony import */ var _AddCoubonsForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AddCoubonsForm */ "./components/AddCoubonsForm.js");
/* harmony import */ var _services_Api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/Api */ "./services/Api.js");
/* harmony import */ var _contexts_auth_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../contexts/auth.js */ "./contexts/auth.js");
/* harmony import */ var _services_api_get__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/api_get */ "./services/api_get.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-loading-skeleton */ "react-loading-skeleton");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_alert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-alert */ "react-alert");
/* harmony import */ var react_alert__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_alert__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "C:\\xampp\\htdocs\\next\\components\\BranchCoubonTable.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














const BranchCoubonTable = ({
  branch_id,
  BracnhCode,
  companyName,
  Branchname,
  setChoose,
  listOfBranches,
  FullDesc,
  logo,
  bname,
  bphone
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"])();
  const alert = Object(react_alert__WEBPACK_IMPORTED_MODULE_11__["useAlert"])();
  const {
    user,
    isAuthenticated,
    loading
  } = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    localStorage.Currentcategory = "";
    if (!isAuthenticated && !loading) Router.push("/login");
  }, [loading, isAuthenticated]);
  console.log("heeere");
  console.log(companyName);
  console.log(listOfBranches);
  console.log("company branches");
  const {
    0: theSection_id,
    1: settheSection_id
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const {
    0: uppage,
    1: setuppage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("t");
  const {
    data,
    isLoading,
    isError
  } = Object(_services_api_get__WEBPACK_IMPORTED_MODULE_8__["GetCouponsBybranch"])(branch_id, uppage);
  const results = isLoading ? false : data.data;
  console.log(results);
  const showSkeleton = isLoading || loading;
  const {
    0: newCompany,
    1: setnewCompany
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: Section_id,
    1: setSection_id
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: value,
    1: setvalue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: coubonName,
    1: setcoubonName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: coubonType,
    1: setcoubonType
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: ModelState,
    1: setModelState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: finalBranches,
    1: setfinalBranches
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]); //const [theCouponBranches, settheCouponBranches] = useState([]);

  const {
    0: edit,
    1: setedit
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: editModel,
    1: seteditModel
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: Company,
    1: setCompany
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);

  function GoBackAndTriggerMutation() {
    //mutate("api/GetCouponsBybranch?branch_id=" + branch_id);
    setuppage(uppage + "q");
    setedit(false);
    setnewCompany(false); //setnewCompany(false);
  }

  function changenewCompany() {
    setedit(false);
    setnewCompany(false);
  }

  function changeBranches(value, id) {
    let favorite = finalBranches;
    console.log(favorite);
    let f = [];

    for (let index = 0; index < favorite.length; index++) {
      let ss = favorite[index].status;

      if (favorite[index].id == id) {
        ss = value;
      }

      var tempbranch = {
        id: favorite[index].id,
        branch_name: favorite[index].branch_name,
        status: ss,
        Section_id: favorite[index].Section_id
      };
      f.push(tempbranch);
    }

    setfinalBranches(f);
  }

  function UpdateCoubontName() {
    console.log("-----------------------------");
    console.log(data);
    console.log("-----------------------------");
    let dd = {
      Section_id,
      coubonName
    };
    _services_Api__WEBPACK_IMPORTED_MODULE_6__["default"].post("api/UpdateCoubontName", dd).then(res => {
      console.log(res.data);
      alert.show("تم بنجاح", {
        timeout: 2000,
        type: "success"
      });
      GoBackAndTriggerMutation();
    });
  }

  function SaveBranches(data) {
    console.log("-----------------------------");
    console.log(data);
    console.log("-----------------------------");
    let dd = {
      data: data
    };
    _services_Api__WEBPACK_IMPORTED_MODULE_6__["default"].post("api/ChangeCoubonBranches", dd).then(res => {
      console.log(res.data);
      alert.show("تم بنجاح", {
        timeout: 2000,
        type: "success"
      });
      GoBackAndTriggerMutation();
    });
  }

  async function openModal(ModalData) {
    await _services_Api__WEBPACK_IMPORTED_MODULE_6__["default"].get("api/GetCouponBranches?Section_id=" + ModalData).then(res => {
      let theCouponBranches = res.data;
      let favorite = [];

      for (let index = 0; index < listOfBranches.length; index++) {
        let element = listOfBranches[index];
        let ss = false;

        for (let index2 = 0; index2 < theCouponBranches.length; index2++) {
          let element2 = theCouponBranches[index2];

          if (element2.Branch_id == element.id) {
            ss = true;
          }
        }

        var tempbranch = {
          id: element.id,
          branch_name: element.branch_name,
          status: ss,
          Section_id: ModalData
        };
        favorite.push(tempbranch);
      }

      console.log("thetest");
      console.log(favorite);
      console.log("thetest");
      setfinalBranches(favorite);
      setModelState(true);
      console.log(theCouponBranches);
    });
  }

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "row justify-content-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: " col ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "card",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "card-header bg-transparent",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 13
    }
  }, newCompany == false ? __jsx("div", {
    style: {
      float: "right"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 17
    }
  }, __jsx("button", {
    onClick: () => {
      setChoose("branches");
    },
    class: "btn btn-icon btn-primary",
    type: "button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 19
    }
  }, __jsx("span", {
    class: "btn-inner--icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 21
    }
  }, __jsx("i", {
    class: "fa fa-arrow-right",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 23
    }
  }))), __jsx("h2", {
    style: {
      marginRight: "0.8em",
      display: "inline"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 19
    }
  }, "\u0627\u0644\u0643\u0648\u0628\u0648\u0646\u0627\u062A :"), __jsx("div", {
    style: {
      clear: "both"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 19
    }
  })) : ""), newCompany == false ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "card-body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 17
    }
  }, __jsx("div", {
    style: {
      backgroundColor: "#f4f0f0",
      borderRadius: "20px",
      padding: "10px",
      marginBottom: "5%"
    },
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "col-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: logo,
    style: {
      borderRadius: "8px"
    },
    width: "200",
    height: "200",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "col-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 21
    }
  }, __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 23
    }
  }), __jsx("h1", {
    style: {
      color: "#234B55"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 23
    }
  }, companyName, " (", Branchname, ")"), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 23
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 23
    }
  }, FullDesc)), __jsx("div", {
    className: "col-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 21
    }
  }, __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 23
    }
  }), __jsx("h1", {
    style: {
      color: "#234B55"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 23
    }
  }, " \u0645\u0633\u0624\u0648\u0644 \u0627\u0644\u0641\u0631\u0639"), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 23
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 23
    }
  }, "\u0627\u0644\u0625\u0633\u0645: ", bname), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 23
    }
  }, "\u0627\u0644\u062C\u0648\u0627\u0644: ", bphone))), __jsx("div", {
    style: {
      float: "left"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 19
    }
  }, __jsx("button", {
    onClick: () => {
      setnewCompany(true); // setChoose("branches");
    },
    class: "btn btn-icon btn-danger",
    type: "button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 21
    }
  }, __jsx("span", {
    class: "btn-inner--icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 23
    }
  }, "\u0625\u0646\u0634\u0627\u0621 \u0643\u0648\u0628\u0648\u0646 \u062C\u062F\u064A\u062F"))), results ? results == "No_data" ? __jsx("div", {
    style: {
      float: "right"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 23
    }
  }, __jsx("button", {
    onClick: () => {
      setChoose("branches");
    },
    class: "btn btn-icon btn-primary",
    type: "button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 25
    }
  }, __jsx("span", {
    class: "btn-inner--icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 27
    }
  }, __jsx("i", {
    class: "fa fa-arrow-right",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 29
    }
  }))), __jsx("h2", {
    style: {
      marginRight: "0.8em",
      display: "inline"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 25
    }
  }, "\u0627\u0644\u0643\u0648\u0628\u0648\u0646\u0627\u062A :"), __jsx("div", {
    style: {
      clear: "both"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 25
    }
  }), __jsx("h2", {
    style: {
      marginTop: "0.8em"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 25
    }
  }, "\u0644\u0627 \u064A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A")) : __jsx("table", {
    className: "table align-items-center table-flush",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 23
    }
  }, __jsx("thead", {
    className: "thead-light",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 25
    }
  }, __jsx("tr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 27
    }
  }, __jsx("th", {
    scope: "col",
    "data-sort": "name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 29
    }
  }, "\u0627\u0644\u0625\u0633\u0645"), __jsx("th", {
    scope: "col",
    "data-sort": "status",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 29
    }
  }, "\u0627\u0644\u0646\u0648\u0639"), __jsx("th", {
    scope: "col",
    "data-sort": "completion",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 29
    }
  }, "\u0627\u0644\u0642\u064A\u0645\u0629"), __jsx("th", {
    scope: "col",
    "data-sort": "completion",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 29
    }
  }, "\u0627\u0644\u0643\u0645\u064A\u0629"), __jsx("th", {
    scope: "col",
    "data-sort": "completion",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 29
    }
  }, "\u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0629"), __jsx("th", {
    scope: "col",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 29
    }
  }), __jsx("th", {
    scope: "col",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 29
    }
  }), __jsx("th", {
    scope: "col",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 29
    }
  }))), __jsx("tbody", {
    className: "list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 25
    }
  }, results.map((coubon, index) => {
    if (coubon.category == localStorage.Currentcategory) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, coubon.type == "one_code" ? __jsx("tr", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318,
          columnNumber: 37
        }
      }, __jsx("td", {
        style: {
          backgroundColor: "rgb(194 224 160)"
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319,
          columnNumber: 39
        }
      }, __jsx("h3", {
        style: {
          TextAlign: "center"
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324,
          columnNumber: 41
        }
      }, coubon.name)), __jsx("td", {
        colspan: "2",
        style: {
          backgroundColor: "rgb(194 224 160)"
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328,
          columnNumber: 39
        }
      }, __jsx("h3", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334,
          columnNumber: 41
        }
      }, "\u0643\u0648\u062F \u0645\u0646\u0635\u0627\u062A (\u0625\u0633\u062A\u062E\u062F\u0627\u0645 \u0645\u0631\u0629 \u0648\u0627\u062D\u062F\u0629)")), __jsx("td", {
        className: "name",
        style: {
          backgroundColor: "rgb(194 224 160)"
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336,
          columnNumber: 39
        }
      }, __jsx("span", {
        className: "text-lg",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342,
          columnNumber: 41
        }
      }, coubon.amount - 1)), __jsx("td", {
        className: "name",
        style: {
          backgroundColor: "rgb(194 224 160)"
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346,
          columnNumber: 39
        }
      }, __jsx("span", {
        className: "text-lg",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352,
          columnNumber: 41
        }
      }, coubon.end, " \u0634\u0647\u0631")), __jsx("td", {
        colspan: "2",
        className: "name",
        style: {
          backgroundColor: "rgb(194 224 160)"
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356,
          columnNumber: 39
        }
      }, __jsx("button", {
        type: "button",
        class: "btn btn-default",
        onClick: () => {
          console.log("add new");
          setSection_id(coubon.Section_id);
          setcoubonName(coubon.name);
          setcoubonType(coubon.type);
          setvalue(coubon.value);
          setnewCompany(true);
          setedit(true); //selected(coubon.name, coubon.amount);
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363,
          columnNumber: 41
        }
      }, "\u0625\u0636\u0627\u0641\u0629 \u0643\u0648\u0628\u0648\u0646\u0627\u062A")), __jsx("td", {
        className: "name",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 381,
          columnNumber: 39
        }
      }, __jsx("button", {
        type: "button",
        class: "btn",
        "data-toggle": "modal",
        "data-target": "#modal-default",
        onClick: () => {
          seteditModel(true);
          setSection_id(coubon.Section_id);
          setcoubonName(coubon.name);
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 382,
          columnNumber: 41
        }
      }, "\u062A\u0639\u062F\u064A\u0644"))) : coubon.type == "all_code" ? __jsx("tr", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 398,
          columnNumber: 37
        }
      }, __jsx("td", {
        style: {
          backgroundColor: "rgb(194 224 160)"
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 399,
          columnNumber: 39
        }
      }, __jsx("h3", {
        style: {
          TextAlign: "center"
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404,
          columnNumber: 41
        }
      }, coubon.name)), __jsx("td", {
        colspan: "2",
        style: {
          backgroundColor: "rgb(194 224 160)"
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408,
          columnNumber: 39
        }
      }, __jsx("h3", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414,
          columnNumber: 41
        }
      }, "\u0643\u0648\u062F \u0645\u0646\u0635\u0627\u062A ")), __jsx("td", {
        style: {
          backgroundColor: "rgb(194 224 160)"
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 416,
          columnNumber: 39
        }
      }, __jsx("span", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 421,
          columnNumber: 41
        }
      }, "\u0644\u0627 \u064A\u0646\u062A\u0647\u064A ")), __jsx("td", {
        className: "name",
        style: {
          backgroundColor: "rgb(194 224 160)"
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 423,
          columnNumber: 39
        }
      }, __jsx("span", {
        className: "text-lg",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 429,
          columnNumber: 41
        }
      }, coubon.end, " \u0634\u0647\u0631")), __jsx("td", {
        colspan: "2",
        className: "name",
        style: {
          backgroundColor: "rgb(194 224 160)"
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 433,
          columnNumber: 39
        }
      }), __jsx("td", {
        className: "name",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 440,
          columnNumber: 39
        }
      }, __jsx("button", {
        type: "button",
        class: "btn",
        "data-toggle": "modal",
        "data-target": "#modal-default",
        onClick: () => {
          seteditModel(true);
          setSection_id(coubon.Section_id);
          setcoubonName(coubon.name);
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 441,
          columnNumber: 41
        }
      }, "\u062A\u0639\u062F\u064A\u0644"))) : __jsx("tr", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 457,
          columnNumber: 37
        }
      }, __jsx("td", {
        className: "name",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 458,
          columnNumber: 39
        }
      }, __jsx("span", {
        className: "text-lg",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 459,
          columnNumber: 41
        }
      }, coubon.name)), __jsx("td", {
        className: "name",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 464,
          columnNumber: 39
        }
      }, coubon.type == "cash" ? __jsx("span", {
        class: "badge badge-pill badge-lg badge-secondary",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 466,
          columnNumber: 43
        }
      }, __jsx("img", {
        className: "avatar avatar-sm rounded-circle",
        src: "/assets/img/icons/cash.jpg",
        height: "40",
        width: "40",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 467,
          columnNumber: 45
        }
      })) : coubon.type == "basket" ? __jsx("span", {
        class: "badge badge-pill badge-lg badge-secondary",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 475,
          columnNumber: 43
        }
      }, __jsx("img", {
        className: "avatar avatar-sm rounded-circle",
        src: "/assets/img/icons/basket.jpg",
        height: "40",
        width: "40",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 476,
          columnNumber: 45
        }
      })) : coubon.type == "discount" ? __jsx("span", {
        class: "badge badge-pill badge-lg badge-secondary",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 484,
          columnNumber: 43
        }
      }, __jsx("img", {
        className: "avatar avatar-sm rounded-circle",
        src: "/assets/img/icons/discount.jpg",
        height: "40",
        width: "40",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 485,
          columnNumber: 45
        }
      })) : ""), __jsx("td", {
        className: "name",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 496,
          columnNumber: 39
        }
      }, coubon.type == "cash" ? __jsx("span", {
        className: "text-lg",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 498,
          columnNumber: 43
        }
      }, coubon.value) : coubon.type == "basket" ? __jsx("span", {
        className: "text-lg",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 502,
          columnNumber: 43
        }
      }, coubon.value) : coubon.type == "discount" ? __jsx("span", {
        className: "text-lg",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 506,
          columnNumber: 43
        }
      }, coubon.value, "%") : ""), __jsx("td", {
        className: "name",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 514,
          columnNumber: 39
        }
      }, __jsx("span", {
        className: "text-lg",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 515,
          columnNumber: 41
        }
      }, coubon.amount - 1)), __jsx("td", {
        className: "name",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 520,
          columnNumber: 39
        }
      }, __jsx("span", {
        className: "text-lg",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 521,
          columnNumber: 41
        }
      }, coubon.end, " \u0634\u0647\u0631")), __jsx("td", {
        className: "name",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 526,
          columnNumber: 39
        }
      }, __jsx("button", {
        type: "button",
        class: "btn btn-default",
        onClick: () => {
          console.log("add new");
          setSection_id(coubon.Section_id);
          setcoubonName(coubon.name);
          setcoubonType(coubon.type);
          setvalue(coubon.value);
          setnewCompany(true);
          setedit(true); //selected(coubon.name, coubon.amount);
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 527,
          columnNumber: 41
        }
      }, "\u0625\u0636\u0627\u0641\u0629 \u0643\u0648\u0628\u0648\u0646\u0627\u062A")), __jsx("td", {
        className: "name",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 546,
          columnNumber: 39
        }
      }, __jsx("button", {
        type: "button",
        class: "btn",
        "data-toggle": "modal",
        "data-target": "#modal-default",
        onClick: () => {
          seteditModel(false);
          openModal(coubon.Section_id);
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 547,
          columnNumber: 41
        }
      }, "\u0627\u0644\u0641\u0631\u0648\u0639")), __jsx("td", {
        className: "name",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 560,
          columnNumber: 39
        }
      }, __jsx("button", {
        type: "button",
        class: "btn",
        "data-toggle": "modal",
        "data-target": "#modal-default",
        onClick: () => {
          seteditModel(true);
          setSection_id(coubon.Section_id);
          setcoubonName(coubon.name);
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 561,
          columnNumber: 41
        }
      }, "\u062A\u0639\u062F\u064A\u0644"))));
    } else {
      localStorage.Currentcategory = coubon.category;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("tr", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 583,
          columnNumber: 35
        }
      }, __jsx("td", {
        colspan: "7",
        style: {
          backgroundColor: "#faf8f8"
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 584,
          columnNumber: 37
        }
      }, __jsx("h1", {
        style: {
          TextAlign: "center"
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 588,
          columnNumber: 39
        }
      }, coubon.category))), coubon.type == "one_code" ? __jsx("tr", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 594,
          columnNumber: 37
        }
      }, __jsx("td", {
        style: {
          backgroundColor: "rgb(194 224 160)"
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 595,
          columnNumber: 39
        }
      }, __jsx("h3", {
        style: {
          TextAlign: "center"
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 600,
          columnNumber: 41
        }
      }, coubon.name)), __jsx("td", {
        colspan: "2",
        style: {
          backgroundColor: "rgb(194 224 160)"
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 604,
          columnNumber: 39
        }
      }, __jsx("h3", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 610,
          columnNumber: 41
        }
      }, "\u0643\u0648\u062F \u0645\u0646\u0635\u0627\u062A (\u0625\u0633\u062A\u062E\u062F\u0627\u0645 \u0645\u0631\u0629 \u0648\u0627\u062D\u062F\u0629)")), __jsx("td", {
        className: "name",
        style: {
          backgroundColor: "rgb(194 224 160)"
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 612,
          columnNumber: 39
        }
      }, __jsx("span", {
        className: "text-lg",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 618,
          columnNumber: 41
        }
      }, coubon.amount - 1)), __jsx("td", {
        className: "name",
        style: {
          backgroundColor: "rgb(194 224 160)"
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 622,
          columnNumber: 39
        }
      }, __jsx("span", {
        className: "text-lg",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 628,
          columnNumber: 41
        }
      }, coubon.end, " \u0634\u0647\u0631")), __jsx("td", {
        colspan: "2",
        className: "name",
        style: {
          backgroundColor: "rgb(194 224 160)"
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 632,
          columnNumber: 39
        }
      }, __jsx("button", {
        type: "button",
        class: "btn btn-default",
        onClick: () => {
          console.log("add new");
          setSection_id(coubon.Section_id);
          setcoubonName(coubon.name);
          setcoubonType(coubon.type);
          setvalue(coubon.value);
          setnewCompany(true);
          setedit(true); //selected(coubon.name, coubon.amount);
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 639,
          columnNumber: 41
        }
      }, "\u0625\u0636\u0627\u0641\u0629 \u0643\u0648\u0628\u0648\u0646\u0627\u062A")), __jsx("td", {
        className: "name",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 656,
          columnNumber: 39
        }
      }, __jsx("button", {
        type: "button",
        class: "btn",
        "data-toggle": "modal",
        "data-target": "#modal-default",
        onClick: () => {
          seteditModel(true);
          setSection_id(coubon.Section_id);
          setcoubonName(coubon.name);
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 657,
          columnNumber: 41
        }
      }, "\u062A\u0639\u062F\u064A\u0644"))) : coubon.type == "all_code" ? __jsx("tr", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 673,
          columnNumber: 37
        }
      }, __jsx("td", {
        style: {
          backgroundColor: "rgb(194 224 160)"
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 674,
          columnNumber: 39
        }
      }, __jsx("h3", {
        style: {
          TextAlign: "center"
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 679,
          columnNumber: 41
        }
      }, coubon.name)), __jsx("td", {
        colspan: "2",
        style: {
          backgroundColor: "rgb(194 224 160)"
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 683,
          columnNumber: 39
        }
      }, __jsx("h3", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 689,
          columnNumber: 41
        }
      }, "\u0643\u0648\u062F \u0645\u0646\u0635\u0627\u062A ")), __jsx("td", {
        style: {
          backgroundColor: "rgb(194 224 160)"
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 691,
          columnNumber: 39
        }
      }, __jsx("span", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 696,
          columnNumber: 41
        }
      }, "\u0644\u0627 \u064A\u0646\u062A\u0647\u064A ")), __jsx("td", {
        className: "name",
        style: {
          backgroundColor: "rgb(194 224 160)"
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 698,
          columnNumber: 39
        }
      }, __jsx("span", {
        className: "text-lg",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 704,
          columnNumber: 41
        }
      }, coubon.end, " \u0634\u0647\u0631")), __jsx("td", {
        colspan: "2",
        className: "name",
        style: {
          backgroundColor: "rgb(194 224 160)"
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 708,
          columnNumber: 39
        }
      }), __jsx("td", {
        className: "name",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 715,
          columnNumber: 39
        }
      }, __jsx("button", {
        type: "button",
        class: "btn",
        "data-toggle": "modal",
        "data-target": "#modal-default",
        onClick: () => {
          seteditModel(true);
          setSection_id(coubon.Section_id);
          setcoubonName(coubon.name);
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 716,
          columnNumber: 41
        }
      }, "\u062A\u0639\u062F\u064A\u0644"))) : __jsx("tr", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 732,
          columnNumber: 37
        }
      }, __jsx("td", {
        className: "name",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 733,
          columnNumber: 39
        }
      }, __jsx("span", {
        className: "text-lg",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 734,
          columnNumber: 41
        }
      }, coubon.name)), __jsx("td", {
        className: "name",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 739,
          columnNumber: 39
        }
      }, coubon.type == "cash" ? __jsx("span", {
        class: "badge badge-pill badge-lg badge-secondary",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 741,
          columnNumber: 43
        }
      }, __jsx("img", {
        className: "avatar avatar-sm rounded-circle",
        src: "/assets/img/icons/cash.jpg",
        height: "40",
        width: "40",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 742,
          columnNumber: 45
        }
      })) : coubon.type == "basket" ? __jsx("span", {
        class: "badge badge-pill badge-lg badge-secondary",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 750,
          columnNumber: 43
        }
      }, __jsx("img", {
        className: "avatar avatar-sm rounded-circle",
        src: "/assets/img/icons/basket.jpg",
        height: "40",
        width: "40",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 751,
          columnNumber: 45
        }
      })) : coubon.type == "discount" ? __jsx("span", {
        class: "badge badge-pill badge-lg badge-secondary",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 759,
          columnNumber: 43
        }
      }, __jsx("img", {
        className: "avatar avatar-sm rounded-circle",
        src: "/assets/img/icons/discount.jpg",
        height: "40",
        width: "40",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 760,
          columnNumber: 45
        }
      })) : ""), __jsx("td", {
        className: "name",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 771,
          columnNumber: 39
        }
      }, coubon.type == "cash" ? __jsx("span", {
        className: "text-lg",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 773,
          columnNumber: 43
        }
      }, coubon.value) : coubon.type == "basket" ? __jsx("span", {
        className: "text-lg",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 777,
          columnNumber: 43
        }
      }, coubon.value) : coubon.type == "discount" ? __jsx("span", {
        className: "text-lg",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 781,
          columnNumber: 43
        }
      }, coubon.value, "%") : ""), __jsx("td", {
        className: "name",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 789,
          columnNumber: 39
        }
      }, __jsx("span", {
        className: "text-lg",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 790,
          columnNumber: 41
        }
      }, coubon.amount - 1)), __jsx("td", {
        className: "name",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 794,
          columnNumber: 39
        }
      }, __jsx("span", {
        className: "text-lg",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 795,
          columnNumber: 41
        }
      }, coubon.end, " \u0634\u0647\u0631")), __jsx("td", {
        className: "name",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 799,
          columnNumber: 39
        }
      }, __jsx("button", {
        type: "button",
        class: "btn btn-default",
        onClick: () => {
          console.log("add new");
          setSection_id(coubon.Section_id);
          setcoubonName(coubon.name);
          setcoubonType(coubon.type);
          setvalue(coubon.value);
          setnewCompany(true);
          setedit(true); //selected(coubon.name, coubon.amount);
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 800,
          columnNumber: 41
        }
      }, "\u0625\u0636\u0627\u0641\u0629 \u0643\u0648\u0628\u0648\u0646\u0627\u062A")), __jsx("td", {
        className: "name",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 817,
          columnNumber: 39
        }
      }, __jsx("button", {
        type: "button",
        class: "btn",
        "data-toggle": "modal",
        "data-target": "#modal-default",
        onClick: () => {
          openModal(coubon.Section_id);
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 818,
          columnNumber: 41
        }
      }, "\u0627\u0644\u0641\u0631\u0648\u0639")), __jsx("td", {
        className: "name",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 830,
          columnNumber: 39
        }
      }, __jsx("button", {
        type: "button",
        class: "btn",
        "data-toggle": "modal",
        "data-target": "#modal-default",
        onClick: () => {
          seteditModel(true);
          setSection_id(coubon.Section_id);
          setcoubonName(coubon.name);
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 831,
          columnNumber: 41
        }
      }, "\u062A\u0639\u062F\u064A\u0644"))));
    }
  }))) : "لا يوجد كوبونات", showSkeleton ? __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_10___default.a, {
    height: 40,
    count: 10,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 858,
      columnNumber: 35
    }
  }) : "")) : __jsx("div", {
    className: "card-body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 862,
      columnNumber: 15
    }
  }, " ", edit == false ? __jsx(_NewCoubonForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    Branch_id: branch_id,
    BracnhCode: BracnhCode,
    GoBackAndTriggerMutation: GoBackAndTriggerMutation,
    changenewCompany: changenewCompany,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 865,
      columnNumber: 19
    }
  }) : __jsx(_AddCoubonsForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
    Section_id: Section_id,
    coubonName: coubonName,
    BracnhCode: BracnhCode,
    value: value,
    GoBackAndTriggerMutation: GoBackAndTriggerMutation,
    changenewCompany: changenewCompany,
    coubonType: coubonType,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 872,
      columnNumber: 19
    }
  }))))), editModel ? __jsx("div", {
    class: ModelState ? "modal fade show" : "modal fade ",
    id: "modal-default",
    tabindex: "-1",
    role: "dialog",
    "aria-labelledby": "modal-default",
    "aria-hidden": ModelState ? "false" : "true",
    style: ModelState ? {
      display: "block",
      paddingRight: "14px"
    } : {
      display: "none"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 890,
      columnNumber: 9
    }
  }, __jsx("div", {
    class: "modal-dialog modal- modal-dialog-centered modal-",
    role: "document",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 903,
      columnNumber: 11
    }
  }, __jsx("div", {
    class: "modal-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 907,
      columnNumber: 13
    }
  }, __jsx("div", {
    class: "modal-header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 908,
      columnNumber: 15
    }
  }, __jsx("h6", {
    class: "modal-title",
    id: "modal-title-default",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 909,
      columnNumber: 17
    }
  }, "\u062A\u0639\u062F\u064A\u0644 : ", coubonName), __jsx("button", {
    type: "button",
    class: "close",
    "data-dismiss": "modal",
    "aria-label": "Close",
    onClick: () => {
      setModelState(false);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 912,
      columnNumber: 17
    }
  }, __jsx("span", {
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 921,
      columnNumber: 19
    }
  }, "\xD7"))), __jsx("div", {
    class: "modal-body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 925,
      columnNumber: 15
    }
  }, __jsx("div", {
    dir: "rtl",
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 926,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 927,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "form-group",
    style: {
      textAlign: "right"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 928,
      columnNumber: 21
    }
  }, __jsx("label", {
    className: "form-control-label",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 929,
      columnNumber: 23
    }
  }, "\u0625\u0633\u0645 \u0627\u0644\u0643\u0648\u0628\u0648\u0646"), __jsx("input", {
    type: "text",
    name: "coubonName",
    onChange: e => {
      setcoubonName(e.target.value);
    },
    value: coubonName,
    className: "form-control",
    placeholder: "\u0625\u0633\u0645 \u0627\u0644\u0643\u0648\u0628\u0648\u0646",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 930,
      columnNumber: 23
    }
  }))))), __jsx("div", {
    class: "modal-footer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 945,
      columnNumber: 15
    }
  }, __jsx("button", {
    type: "button",
    class: "btn btn-link ",
    "data-dismiss": "modal",
    style: {
      float: "right"
    },
    onClick: () => {
      setModelState(false);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 946,
      columnNumber: 17
    }
  }, "\u0625\u063A\u0644\u0627\u0642"), __jsx("button", {
    type: "button",
    class: "btn btn-link ",
    "data-dismiss": "modal",
    style: {
      float: "left"
    },
    onClick: () => {
      UpdateCoubontName(Section_id, coubonName);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 957,
      columnNumber: 17
    }
  }, "\u062D\u0641\u0638"))))) : __jsx("div", {
    class: ModelState ? "modal fade show" : "modal fade ",
    id: "modal-default",
    tabindex: "-1",
    role: "dialog",
    "aria-labelledby": "modal-default",
    "aria-hidden": ModelState ? "false" : "true",
    style: ModelState ? {
      display: "block",
      paddingRight: "14px"
    } : {
      display: "none"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 973,
      columnNumber: 9
    }
  }, __jsx("div", {
    class: "modal-dialog modal- modal-dialog-centered modal-",
    role: "document",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 986,
      columnNumber: 11
    }
  }, __jsx("div", {
    class: "modal-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 990,
      columnNumber: 13
    }
  }, __jsx("div", {
    class: "modal-header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 991,
      columnNumber: 15
    }
  }, __jsx("h6", {
    class: "modal-title",
    id: "modal-title-default",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 992,
      columnNumber: 17
    }
  }, "\u0627\u0644\u0641\u0631\u0648\u0639 \u0627\u0644\u062A\u064A \u064A\u0645\u0643\u0646 \u0635\u0631\u0641 \u0627\u0644\u0643\u0648\u0628\u0648\u0646\u0627\u062A \u0628\u0647\u0627"), __jsx("button", {
    type: "button",
    class: "close",
    "data-dismiss": "modal",
    "aria-label": "Close",
    onClick: () => {
      setModelState(false);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 995,
      columnNumber: 17
    }
  }, __jsx("span", {
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1004,
      columnNumber: 19
    }
  }, "\xD7"))), __jsx("div", {
    class: "modal-body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1008,
      columnNumber: 15
    }
  }, finalBranches.length > 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "table-responsive",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1011,
      columnNumber: 21
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1012,
      columnNumber: 23
    }
  }, __jsx("table", {
    className: "table align-items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1013,
      columnNumber: 25
    }
  }, __jsx("thead", {
    className: "thead-light",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1014,
      columnNumber: 27
    }
  }, __jsx("tr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1015,
      columnNumber: 29
    }
  }, __jsx("th", {
    scope: "col",
    className: "sort",
    "data-sort": "name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1016,
      columnNumber: 31
    }
  }, "\u0627\u0633\u0645 \u0627\u0644\u0641\u0631\u0639"), __jsx("th", {
    scope: "col",
    className: "sort",
    "data-sort": "budget",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1019,
      columnNumber: 31
    }
  }))), __jsx("tbody", {
    className: "list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1026,
      columnNumber: 27
    }
  }, finalBranches.map((listBranches, index) => {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, " ", __jsx("tr", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1031,
        columnNumber: 35
      }
    }, __jsx("td", {
      className: "budget",
      style: {
        float: "right"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1032,
        columnNumber: 37
      }
    }, listBranches.branch_name), __jsx("td", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1038,
        columnNumber: 37
      }
    }, listBranches.status ? __jsx("button", {
      type: "button",
      class: "btn btn-danger",
      onClick: () => {
        changeBranches(false, listBranches.id);
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1040,
        columnNumber: 41
      }
    }, "\u0625\u0644\u063A\u0627\u0621") : __jsx("button", {
      type: "button",
      class: "btn btn-primary",
      onClick: () => {
        changeBranches(true, listBranches.id);
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1053,
        columnNumber: 41
      }
    }, "\u062A\u0641\u0639\u064A\u0644"))));
  })))))) : "لا يوجد بيانات", showSkeleton ? __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_10___default.a, {
    height: 40,
    count: 10,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1079,
      columnNumber: 33
    }
  }) : ""), __jsx("div", {
    class: "modal-footer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1082,
      columnNumber: 15
    }
  }, __jsx("button", {
    type: "button",
    class: "btn btn-link ",
    "data-dismiss": "modal",
    style: {
      float: "right"
    },
    onClick: () => {
      setModelState(false);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1083,
      columnNumber: 17
    }
  }, "\u0625\u063A\u0644\u0627\u0642"), __jsx("button", {
    type: "button",
    class: "btn btn-link ",
    "data-dismiss": "modal",
    style: {
      float: "left"
    },
    onClick: () => {
      let test = [];

      for (let index = 0; index < finalBranches.length; index++) {
        const element = finalBranches[index];

        if (element.status == true) {
          test.push(element);
        }
      }

      if (test.length > 0) {
        SaveBranches(finalBranches);
        setModelState(false);
      } else {
        alert.show("يجب تفعيل فرع واحد على الأقل", {
          timeout: 2000,
          type: "danger"
        });
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1094,
      columnNumber: 17
    }
  }, "\u062D\u0641\u0638"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (BranchCoubonTable);

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

/***/ "./components/EditBranchForm.js":
/*!**************************************!*\
  !*** ./components/EditBranchForm.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_Api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/Api */ "./services/Api.js");
/* harmony import */ var react_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-alert */ "react-alert");
/* harmony import */ var react_alert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_alert__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _contexts_auth_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/auth.js */ "./contexts/auth.js");
var _jsxFileName = "C:\\xampp\\htdocs\\next\\components\\EditBranchForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 //







function EditCompanyForm({
  changenewCompany,
  branch,
  GoBackAndTriggerMutation,
  companyName,
  Branchname
}) {
  const alert = Object(react_alert__WEBPACK_IMPORTED_MODULE_3__["useAlert"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
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
    register,
    handleSubmit,
    errors
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["useForm"])({
    defaultValues: {
      branchName: branch.branch_name,
      branchShortDesc: branch.ShortDesc,
      branchAddress: branch.Address
    }
  });
  const id = branch.id;

  const onSubmit = formdata => {
    formdata = _objectSpread(_objectSpread({}, formdata), {}, {
      id
    });
    console.log(formdata);
    setspinner(true);
    _services_Api__WEBPACK_IMPORTED_MODULE_2__["default"].post("api/UpdateBranch", formdata).then(res => {
      console.log(res.data);
      setspinner(false);

      if (res.data == "phone") {
        alert.show("رقم الجوال مستخدم مسبقا", {
          timeout: 2000,
          type: "error"
        });
      }

      if (res.data > 0) {
        alert.show("تم بنجاح", {
          timeout: 2000,
          type: "success"
        });
        GoBackAndTriggerMutation();
      }
    }).catch(err => {
      alert.show(" خطا" + err, {
        timeout: 2000,
        type: "error"
      });
      setspinner(false);
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, " ", companyName + Branchname), __jsx("div", {
    style: {
      float: "right"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, __jsx("button", {
    onClick: () => {
      changenewCompany();
    },
    class: "btn btn-icon btn-primary",
    type: "button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx("span", {
    class: "btn-inner--icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }, __jsx("i", {
    class: "fa fa-arrow-right",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
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
      lineNumber: 82,
      columnNumber: 9
    }
  }, "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0641\u0631\u0639 :"), __jsx("div", {
    style: {
      clear: "both"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  })), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }), __jsx("div", {
    class: "col-xl-12 col-md-12",
    style: {
      height: "50px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }), __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }, __jsx("h6", {
    className: "heading-small text-muted mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, "\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0641\u0631\u0639"), __jsx("div", {
    className: "pl-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 15
    }
  }, __jsx("label", {
    className: "form-control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 17
    }
  }, "\u0625\u0633\u0645 \u0627\u0644\u0641\u0631\u0639"), __jsx("input", {
    type: "text",
    name: "branchName",
    ref: register({
      required: true,
      minLength: 3
    }),
    className: "form-control",
    placeholder: "\u0625\u0633\u0645 \u0627\u0644\u0641\u0631\u0639",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }
  })), errors.branchName && errors.branchName.type === "required" && __jsx("p", {
    style: {
      color: "red"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 17
    }
  }, "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628"), errors.branchName && errors.branchName.type === "minLength" && __jsx("p", {
    style: {
      color: "red"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }
  }, "\u0627\u0644\u0625\u0633\u0645 \u0627\u0644\u0645\u062F\u062E\u0644 \u0642\u0635\u064A\u0631 \u0644\u0644\u063A\u0627\u064A\u0629")), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 15
    }
  }, __jsx("label", {
    className: "form-control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 17
    }
  }, "\u0648\u0635\u0641 \u0642\u0635\u064A\u0631"), __jsx("input", {
    type: "text",
    name: "branchShortDesc",
    ref: register({
      required: true,
      minLength: 3,
      maxLength: 100
    }),
    className: "form-control",
    placeholder: "\u0648\u0635\u0641 \u0642\u0635\u064A\u0631",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 17
    }
  })), errors.branchShortDesc && errors.branchShortDesc.type === "required" && __jsx("p", {
    style: {
      color: "red"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 19
    }
  }, "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628"), errors.branchShortDesc && errors.branchShortDesc.type === "minLength" && __jsx("p", {
    style: {
      color: "red"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 19
    }
  }, "\u0627\u0644\u0648\u0635\u0641 \u0627\u0644\u0645\u062F\u062E\u0644 \u0642\u0635\u064A\u0631 \u0644\u0644\u063A\u0627\u064A\u0629"), errors.branchShortDesc && errors.branchShortDesc.type === "maxLength" && __jsx("p", {
    style: {
      color: "red"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 19
    }
  }, "\u0627\u0644\u0648\u0635\u0641 \u0627\u0644\u0645\u062F\u062E\u0644 \u0637\u0648\u064A\u0644 \u0644\u0644\u063A\u0627\u064A\u0629")), __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 15
    }
  }, __jsx("label", {
    className: "form-control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 17
    }
  }, "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0641\u0631\u0639"), __jsx("input", {
    type: "text",
    name: "branchAddress",
    ref: register({
      required: true,
      minLength: 3
    }),
    className: "form-control",
    placeholder: "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0641\u0631\u0639",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 17
    }
  })), errors.branchAddress && errors.branchAddress.type === "required" && __jsx("p", {
    style: {
      color: "red"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 19
    }
  }, "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628"), errors.branchAddress && errors.branchAddress.type === "minLength" && __jsx("p", {
    style: {
      color: "red"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 19
    }
  }, "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u062F\u062E\u0644 \u0642\u0635\u064A\u0631 \u0644\u0644\u063A\u0627\u064A\u0629")))), spinner ? __jsx("button", {
    className: "btn btn-default",
    disabled: true,
    style: {
      float: "left"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "spinner-grow spinner-grow-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 13
    }
  }), "\u062C\u0627\u0631\u064A \u0627\u0644\u0625\u0631\u0633\u0627\u0644 ..") : __jsx("input", {
    style: {
      float: "left"
    },
    type: "submit",
    className: "btn btn-default",
    value: loading ? "Loading..." : "تعديل",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 11
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (EditCompanyForm);

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

/***/ "./components/NewBranchForm.js":
/*!*************************************!*\
  !*** ./components/NewBranchForm.js ***!
  \*************************************/
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
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _contexts_auth_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../contexts/auth.js */ "./contexts/auth.js");
/* harmony import */ var _ButtonUpload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ButtonUpload */ "./components/ButtonUpload.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\xampp\\htdocs\\next\\components\\NewBranchForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 //












function NewBranchForm({
  company_id,
  GoBackAndTriggerMutation,
  changenewCompany,
  companyName
}) {
  const alert = Object(react_alert__WEBPACK_IMPORTED_MODULE_5__["useAlert"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  const token = js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.get("token");
  const siteUrl = js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.get("siteUrl");
  const {
    toggler,
    settoggler,
    loading
  } = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const {
    0: spinner,
    1: setspinner
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: imeges,
    1: setimeges
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    data,
    isLoading,
    isError
  } = Object(_services_api_get__WEBPACK_IMPORTED_MODULE_3__["GetCCAs"])();
  const results = isLoading ? false : data.data;
  console.log(company_id);
  const showSkeleton = isLoading || loading;
  const {
    0: citys,
    1: setcitys
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: firstTime,
    1: setfirstTime
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);

  if (firstTime && results) {
    setcitys(results[0].data);
    setfirstTime(false);
  }

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
    let formData = new FormData();
    formData.append("file", file);
    axios__WEBPACK_IMPORTED_MODULE_10___default.a.post(siteUrl + "wp/v2/media", formData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(result => {
      console.log(result.data.source_url);
      let tempimegesarray = imeges;
      tempimegesarray.push(result.data.source_url);
      console.log(tempimegesarray);
      setimeges(tempimegesarray);
    });
  }

  const onSubmit = formdata => {
    formdata = _objectSpread(_objectSpread({}, formdata), {}, {
      company_id,
      imeges
    });
    setspinner(true);
    _services_Api__WEBPACK_IMPORTED_MODULE_2__["default"].post("api/newBranch", formdata).then(res => {
      console.log(res.data);
      setspinner(false);

      if (res.data == "phone") {
        alert.show("رقم الجوال مستخدم مسبقا", {
          timeout: 2000,
          type: "error"
        });
      }

      if (res.data > 0 || res.data == true) {
        alert.show("تم بنجاح", {
          timeout: 2000,
          type: "success"
        });
        GoBackAndTriggerMutation();
        changenewCompany(); //router.push("/companys/[name]", "/companys/" + formdata.companyName);
      }
    }).catch(err => {
      console.log(err);
      setspinner(false);
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }
  }, companyName), __jsx("div", {
    style: {
      float: "right"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }
  }, __jsx("button", {
    onClick: () => {
      changenewCompany();
    },
    class: "btn btn-icon btn-primary",
    type: "button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  }, __jsx("span", {
    class: "btn-inner--icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 11
    }
  }, __jsx("i", {
    class: "fa fa-arrow-right",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
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
      lineNumber: 122,
      columnNumber: 9
    }
  }, "\u0625\u0646\u0634\u0627\u0621 \u0641\u0631\u0639 \u062C\u062F\u064A\u062F :"), __jsx("div", {
    style: {
      clear: "both"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 9
    }
  })), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }
  }), __jsx("div", {
    class: "col-xl-12 col-md-12",
    style: {
      height: "50px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }
  }), __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }
  }, __jsx("h6", {
    className: "heading-small text-muted mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 9
    }
  }, "\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0641\u0631\u0639"), __jsx("div", {
    className: "pl-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 15
    }
  }, __jsx("label", {
    className: "form-control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 17
    }
  }, "\u0625\u0633\u0645 \u0627\u0644\u0641\u0631\u0639"), __jsx("input", {
    type: "text",
    name: "branchName",
    ref: register({
      required: true,
      minLength: 3
    }),
    className: "form-control",
    placeholder: "\u0625\u0633\u0645 \u0627\u0644\u0641\u0631\u0639",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 17
    }
  })), errors.branchName && errors.branchName.type === "required" && __jsx("p", {
    style: {
      color: "red"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 17
    }
  }, "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628"), errors.branchName && errors.branchName.type === "minLength" && __jsx("p", {
    style: {
      color: "red"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 17
    }
  }, "\u0627\u0644\u0625\u0633\u0645 \u0627\u0644\u0645\u062F\u062E\u0644 \u0642\u0635\u064A\u0631 \u0644\u0644\u063A\u0627\u064A\u0629")), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 15
    }
  }, __jsx("label", {
    className: "form-control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 17
    }
  }, "\u0648\u0635\u0641 \u0642\u0635\u064A\u0631"), __jsx("input", {
    type: "text",
    name: "branchShortDesc",
    ref: register({
      required: true,
      minLength: 3,
      maxLength: 100
    }),
    className: "form-control",
    placeholder: "\u0648\u0635\u0641 \u0642\u0635\u064A\u0631",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 17
    }
  })), errors.branchShortDesc && errors.branchShortDesc.type === "required" && __jsx("p", {
    style: {
      color: "red"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 19
    }
  }, "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628"), errors.branchShortDesc && errors.branchShortDesc.type === "minLength" && __jsx("p", {
    style: {
      color: "red"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 19
    }
  }, "\u0627\u0644\u0648\u0635\u0641 \u0627\u0644\u0645\u062F\u062E\u0644 \u0642\u0635\u064A\u0631 \u0644\u0644\u063A\u0627\u064A\u0629"), errors.branchShortDesc && errors.branchShortDesc.type === "maxLength" && __jsx("p", {
    style: {
      color: "red"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 19
    }
  }, "\u0627\u0644\u0648\u0635\u0641 \u0627\u0644\u0645\u062F\u062E\u0644 \u0637\u0648\u064A\u0644 \u0644\u0644\u063A\u0627\u064A\u0629")), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 15
    }
  }, __jsx("label", {
    className: "form-control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 17
    }
  }, "\u0627\u0644\u062F\u0648\u0644\u0629"), __jsx("select", {
    name: "county",
    ref: register({
      required: true
    }),
    onChange: e => {
      let selectedCounty = e.target.value;
      /*if (firstTime) {
      setfirstTime(false);
      }*/

      for (let index = 0; index < results.length; index++) {
        const tempconunty = results[index];

        if (tempconunty.name === selectedCounty) {
          setcitys(tempconunty.data);
        }
      }
    },
    class: "form-control",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 17
    }
  }, results ? results.map((county, index) => {
    return __jsx("option", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 32
      }
    }, county.name);
  }) : ""))), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 15
    }
  }, __jsx("label", {
    className: "form-control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 17
    }
  }, "\u0627\u0644\u0645\u062F\u064A\u0646\u0629"), __jsx("select", {
    name: "city",
    ref: register({
      required: true
    }),
    class: "form-control",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 17
    }
  }, citys.length > 0 ? citys.map((city, index) => {
    return __jsx("option", {
      value: city.name,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 32
      }
    }, city.name);
  }) : ""))), showSkeleton ? __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    height: 10,
    count: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 29
    }
  }) : "", __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 15
    }
  }, __jsx("label", {
    className: "form-control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 17
    }
  }, "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0641\u0631\u0639"), __jsx("input", {
    type: "text",
    name: "branchAddress",
    ref: register({
      required: true,
      minLength: 3
    }),
    className: "form-control",
    placeholder: "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0641\u0631\u0639",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 17
    }
  })), errors.branchAddress && errors.branchAddress.type === "required" && __jsx("p", {
    style: {
      color: "red"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 19
    }
  }, "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628"), errors.branchAddress && errors.branchAddress.type === "minLength" && __jsx("p", {
    style: {
      color: "red"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 19
    }
  }, "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u062F\u062E\u0644 \u0642\u0635\u064A\u0631 \u0644\u0644\u063A\u0627\u064A\u0629")), __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 15
    }
  }, __jsx("label", {
    className: "form-control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 17
    }
  }, "\u0631\u0627\u0628\u0637 \u0627\u062D\u062F\u0627\u062B\u064A\u0627\u062A \u062E\u0631\u0627\u0626\u0637 \u063A\u0648\u063A\u0644"), __jsx("input", {
    type: "text",
    name: "direction_url",
    ref: register({
      required: true,
      minLength: 3
    }),
    className: "form-control",
    placeholder: "\u0631\u0627\u0628\u0637",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 17
    }
  })), errors.direction_url && errors.direction_url.type === "required" && __jsx("p", {
    style: {
      color: "red"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 19
    }
  }, "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628"), errors.direction_url && errors.direction_url.type === "minLength" && __jsx("p", {
    style: {
      color: "red"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 19
    }
  }, "\u0631\u0627\u0628\u0637 \u0627\u0644\u0645\u062F\u062E\u0644 \u0642\u0635\u064A\u0631 \u0644\u0644\u063A\u0627\u064A\u0629")), __jsx("div", {
    class: "col-xl-12 col-md-12",
    style: {
      height: "50px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 13
    }
  }, "\u0635\u0648\u0631 \u0627\u0644\u0641\u0631\u0639 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 15
    }
  }), imeges.length > 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, imeges.map((item, index) => {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("a", {
      href: item,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292,
        columnNumber: 25
      }
    }, "\u0635\u0648\u0631\u0629 ", index + 1), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 25
      }
    }));
  })) : "", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 15
    }
  }), __jsx(_ButtonUpload__WEBPACK_IMPORTED_MODULE_9__["default"], {
    typeImage: "thumbnail",
    onChange: thumbnail => handleThumbnailProduct(thumbnail.target.files[0]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 15
    }
  }), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 15
    }
  })), __jsx("div", {
    class: "col-xl-12 col-md-12",
    style: {
      height: "50px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 13
    }
  }))), __jsx("h6", {
    className: "heading-small text-muted mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 9
    }
  }, "\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u062D\u0633\u0627\u0628"), __jsx("div", {
    className: "pl-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 15
    }
  }, __jsx("label", {
    className: "form-control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 17
    }
  }, "\u0627\u0644\u0625\u0633\u0645 \u0627\u0644\u0623\u0648\u0644"), __jsx("input", {
    type: "text",
    name: "FirstName",
    ref: register({
      required: true,
      minLength: 3
    }),
    className: "form-control",
    placeholder: "\u0627\u0644\u0625\u0633\u0645 \u0627\u0644\u0623\u0648\u0644",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 17
    }
  })), errors.FirstName && errors.FirstName.type === "required" && __jsx("p", {
    style: {
      color: "red"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 17
    }
  }, "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628"), errors.FirstName && errors.FirstName.type === "minLength" && __jsx("p", {
    style: {
      color: "red"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 17
    }
  }, "\u0627\u0644\u0625\u0633\u0645 \u0627\u0644\u0645\u062F\u062E\u0644 \u0642\u0635\u064A\u0631 \u0644\u0644\u063A\u0627\u064A\u0629")), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 15
    }
  }, __jsx("label", {
    className: "form-control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 17
    }
  }, "\u0627\u0644\u0625\u0633\u0645 \u0627\u0644\u0623\u062E\u064A\u0631"), __jsx("input", {
    type: "text",
    name: "LastName",
    ref: register({
      required: true,
      minLength: 3
    }),
    className: "form-control",
    placeholder: "\u0627\u0644\u0625\u0633\u0645 \u0627\u0644\u0623\u062E\u064A\u0631",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 17
    }
  })), errors.LastName && errors.LastName.type === "required" && __jsx("p", {
    style: {
      color: "red"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 17
    }
  }, "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628"), errors.LastName && errors.LastName.type === "minLength" && __jsx("p", {
    style: {
      color: "red"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 17
    }
  }, "\u0627\u0644\u0625\u0633\u0645 \u0627\u0644\u0645\u062F\u062E\u0644 \u0642\u0635\u064A\u0631 \u0644\u0644\u063A\u0627\u064A\u0629")), __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 15
    }
  }, __jsx("label", {
    className: "form-control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 17
    }
  }, "\u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0644"), __jsx("input", {
    type: "number",
    name: "Phone",
    ref: register({
      required: true,
      minLength: 12
    }),
    className: "form-control",
    placeholder: "\u0627\u0644\u0631\u062C\u0627\u0621 \u0643\u062A\u0627\u0628\u0629 \u0645\u0641\u062A\u0627\u062D \u0627\u0644\u062F\u0648\u0644\u0629 \u0645\u062B\u0627\u0644 966",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 17
    }
  })), errors.Phone && errors.Phone.type === "required" && __jsx("p", {
    style: {
      color: "red"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 17
    }
  }, "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628"), errors.Phone && errors.Phone.type === "minLength" && __jsx("p", {
    style: {
      color: "red"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 17
    }
  }, "\u064A\u062C\u0628 \u0625\u062F\u062E\u0627\u0644 \u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0644 \u0635\u0627\u0644\u062D")))), spinner ? __jsx("button", {
    className: "btn btn-default",
    disabled: true,
    style: {
      float: "left"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "spinner-grow spinner-grow-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 13
    }
  }), "\u062C\u0627\u0631\u064A \u0627\u0644\u0625\u0631\u0633\u0627\u0644 ..") : __jsx("input", {
    style: {
      float: "left"
    },
    type: "submit",
    className: "btn btn-default",
    value: loading ? "Loading..." : "إنشاء فرع",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 11
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (NewBranchForm);

/***/ }),

/***/ "./components/NewCoubonForm.js":
/*!*************************************!*\
  !*** ./components/NewCoubonForm.js ***!
  \*************************************/
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _contexts_auth_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../contexts/auth.js */ "./contexts/auth.js");
var _jsxFileName = "C:\\xampp\\htdocs\\next\\components\\NewCoubonForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 //









function NewCoubonForm({
  Branch_id,
  BracnhCode,
  GoBackAndTriggerMutation,
  changenewCompany
}) {
  const alert = Object(react_alert__WEBPACK_IMPORTED_MODULE_5__["useAlert"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  const {
    toggler,
    settoggler,
    loading
  } = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const {
    0: spinner,
    1: setspinner
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: sponsors,
    1: setsponsors
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
  } = Object(_services_api_get__WEBPACK_IMPORTED_MODULE_3__["GetCategories"])();
  const results = isLoading ? false : data.data;
  const showSkeleton = isLoading || loading;
  const {
    register,
    handleSubmit,
    errors
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["useForm"])({//mode: "onChange",
  });
  const id = Branch_id;

  const onSubmit = formdata => {
    formdata = _objectSpread(_objectSpread({}, formdata), {}, {
      id,
      BracnhCode,
      sponsors
    });
    setspinner(true);
    console.log(formdata);
    _services_Api__WEBPACK_IMPORTED_MODULE_2__["default"].post("api/newCoubon", formdata).then(res => {
      console.log(res.data);
      setspinner(false);

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
        });
        GoBackAndTriggerMutation(); //router.push("/companys/[name]", "/companys/" + formdata.companyName);
      }
    }).catch(err => {
      console.log(err);
      setspinner(false);
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    style: {
      float: "right"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, __jsx("button", {
    onClick: () => {
      changenewCompany();
    },
    class: "btn btn-icon btn-primary",
    type: "button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, __jsx("span", {
    class: "btn-inner--icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, __jsx("i", {
    class: "fa fa-arrow-right",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
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
      lineNumber: 89,
      columnNumber: 9
    }
  }, "\u0625\u0646\u0634\u0627\u0621 \u0643\u0648\u0628\u0648\u0646\u0627\u062A :"), __jsx("div", {
    style: {
      clear: "both"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  })), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }), __jsx("div", {
    class: "col-xl-12 col-md-12",
    style: {
      height: "50px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }), __jsx("div", {
    style: {
      marginRight: "2%",
      marginBottom: "2%"
    },
    class: "custom-control custom-checkbox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }
  }, __jsx("input", {
    type: "checkbox",
    class: "custom-control-input",
    id: "customCheck1",
    name: "sponsors",
    value: sponsors,
    onChange: e => {
      setsponsors(!sponsors);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }), __jsx("label", {
    class: "custom-control-label",
    for: "customCheck1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }, "\u062A\u0628\u0631\u0639 \u061F", " ")), __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }, sponsors ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, " ", __jsx("h6", {
    className: "heading-small text-muted mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }
  }, "\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u062F\u0627\u0639\u0645 "), __jsx("div", {
    className: "pl-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 19
    }
  }, __jsx("label", {
    className: "form-control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 21
    }
  }, "\u0625\u0633\u0645 \u0627\u0644\u062F\u0627\u0639\u0645"), __jsx("input", {
    type: "text",
    name: "SName",
    ref: register({
      required: true
    }),
    className: "form-control",
    placeholder: "\u0625\u0633\u0645 \u0627\u0644\u062F\u0627\u0639\u0645",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 21
    }
  })), errors.SName && errors.SName.type === "required" && __jsx("p", {
    style: {
      color: "red"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 21
    }
  }, "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628")), " ", __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 19
    }
  }, __jsx("label", {
    className: "form-control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 21
    }
  }, "\u0642\u064A\u0645\u0629 \u0627\u0644\u062A\u0628\u0631\u0639"), __jsx("input", {
    type: "number",
    name: "Svalue",
    ref: register({
      required: true
    }),
    className: "form-control",
    placeholder: "\u0627\u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u062A\u0628\u0631\u0639 \u0628\u0647\u0627 (\u064A\u0645\u0643\u0646 \u0623\u0646 \u062A\u0643\u0648\u0646 \u062C\u0632\u0621 \u0645\u0646 \u0642\u064A\u0645\u0629 \u0627\u0644\u0643\u0648\u0628\u0648\u0646\u0627\u062A)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 21
    }
  })), errors.Svalue && errors.Svalue.type === "required" && __jsx("p", {
    style: {
      color: "red"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 21
    }
  }, "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628")), __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 19
    }
  }, __jsx("label", {
    className: "form-control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 21
    }
  }, "\u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0644"), __jsx("input", {
    type: "number",
    name: "Sphone",
    ref: register({
      required: true
    }),
    className: "form-control",
    placeholder: "\u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0644",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 21
    }
  })), errors.Sphone && errors.Sphone.type === "required" && __jsx("p", {
    style: {
      color: "red"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 21
    }
  }, "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628"))))) : "", __jsx("h6", {
    className: "heading-small text-muted mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 9
    }
  }, "\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0643\u0648\u0628\u0648\u0646"), __jsx("div", {
    className: "pl-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 15
    }
  }, __jsx("label", {
    className: "form-control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 17
    }
  }, "\u0625\u0633\u0645 \u0627\u0644\u0643\u0648\u0628\u0648\u0646"), __jsx("input", {
    type: "text",
    name: "coubonName",
    ref: register({
      required: true,
      minLength: 3
    }),
    className: "form-control",
    placeholder: "\u0625\u0633\u0645 \u0627\u0644\u0643\u0648\u0628\u0648\u0646",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 17
    }
  })), errors.coubonName && errors.coubonName.type === "required" && __jsx("p", {
    style: {
      color: "red"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 17
    }
  }, "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628"), errors.coubonName && errors.coubonName.type === "minLength" && __jsx("p", {
    style: {
      color: "red"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 17
    }
  }, "\u0627\u0644\u0625\u0633\u0645 \u0627\u0644\u0645\u062F\u062E\u0644 \u0642\u0635\u064A\u0631 \u0644\u0644\u063A\u0627\u064A\u0629")), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 15
    }
  }, __jsx("label", {
    className: "form-control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 17
    }
  }, "\u0627\u0644\u0646\u0648\u0639"), __jsx("select", {
    name: "type",
    ref: register({
      required: true
    }),
    onChange: e => {
      if (e.target.value == "discount") {
        setInputTypedis(true);
      } else {
        setInputTypedis(false);
      }

      if (e.target.value == "all_code" || e.target.value == "one_code") {
        setInputTypecode(true);
      } else {
        setInputTypecode(false);
      }
    },
    class: "form-control",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 17
    }
  }, __jsx("option", {
    value: "cash",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 19
    }
  }, "\u0645\u062C\u0627\u0646\u064A"), __jsx("option", {
    value: "basket",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 19
    }
  }, "\u0639\u064A\u0646\u064A"), __jsx("option", {
    value: "discount",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 19
    }
  }, "\u062E\u0635\u0645"), __jsx("option", {
    value: "all_code",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 19
    }
  }, "\u0643\u0648\u062F \u0627\u0644\u0645\u0646\u0635\u0627\u062A"), __jsx("option", {
    value: "one_code",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 19
    }
  }, "\u0643\u0648\u062F \u0627\u0644\u0645\u0646\u0635\u0627\u062A (\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0644\u0645\u0631\u0629 \u0648\u0627\u062D\u062F\u0629)")))), InputTypecode ? __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 17
    }
  }, __jsx("label", {
    className: "form-control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 19
    }
  }, "\u0627\u0644\u0643\u0648\u062F"), __jsx("input", {
    type: "text",
    name: "code",
    ref: register({
      required: true
    }),
    className: "form-control",
    placeholder: "Free10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 19
    }
  })), errors.code && errors.code.type === "required" && __jsx("p", {
    style: {
      color: "red"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 19
    }
  }, "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628")) : __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 17
    }
  }, __jsx("label", {
    className: "form-control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 19
    }
  }, "\u0627\u0644\u0643\u0645\u064A\u0629"), __jsx("input", {
    type: "number",
    name: "coubonsAmount",
    ref: register({
      required: true
    }),
    className: "form-control",
    placeholder: "\u0643\u0645\u064A\u0629 \u0627\u0644\u0643\u0648\u0628\u0648\u0646\u0627\u062A \u0627\u0644\u0645\u0631\u0627\u062F \u0625\u0646\u0634\u0627\u0626\u0647\u0627",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 19
    }
  })), errors.coubonsAmount && errors.coubonsAmount.type === "required" && __jsx("p", {
    style: {
      color: "red"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 21
    }
  }, "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628")), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 15
    }
  }, __jsx("label", {
    className: "form-control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 17
    }
  }, "\u0627\u0644\u062A\u0635\u0646\u064A\u0641"), __jsx("select", {
    name: "category",
    ref: register({
      required: true
    }),
    class: "form-control",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 17
    }
  }, results ? results.map((category, index) => {
    return __jsx("option", {
      value: category.id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 27
      }
    }, category.name);
  }) : ""))), showSkeleton ? __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    height: 10,
    count: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 29
    }
  }) : "", InputTypecode ? __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 17
    }
  }, __jsx("label", {
    className: "form-control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 19
    }
  }, "\u0627\u0644\u0631\u0627\u0628\u0637 "), __jsx("input", {
    type: "text",
    name: "url",
    ref: register({
      required: true
    }),
    className: "form-control",
    placeholder: "\u0631\u0627\u0628\u0637 \u0627\u0644\u0645\u0648\u0642\u0639 , \u0627\u0644\u062A\u0637\u0628\u064A\u0642 \u0627\u0644\u062E ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 19
    }
  })), errors.url && errors.url.type === "required" && __jsx("p", {
    style: {
      color: "red"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 19
    }
  }, "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628")) : __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 17
    }
  }, __jsx("label", {
    className: "form-control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 19
    }
  }, " \u0627\u0644\u0642\u064A\u0645\u0629"), __jsx("div", {
    class: "input-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 19
    }
  }, InputTypedis == true ? __jsx("div", {
    class: "input-group-prepend",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 23
    }
  }, __jsx("span", {
    class: "input-group-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 25
    }
  }, "%")) : __jsx("div", {
    class: "input-group-prepend",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 23
    }
  }, __jsx("span", {
    class: "input-group-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 25
    }
  }, "\u0631.\u0633")), " ", __jsx("input", {
    type: "number",
    name: "value",
    style: {
      float: "left"
    },
    ref: register({
      required: true
    }),
    className: "form-control",
    placeholder: "\u0627\u0644\u0642\u064A\u0645\u0629",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 21
    }
  }))), errors.value && errors.value.type === "required" && __jsx("p", {
    style: {
      color: "red"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 19
    }
  }, "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628")), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 15
    }
  }, __jsx("label", {
    className: "form-control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 17
    }
  }, " \u064A\u0646\u062A\u0647\u064A \u0628\u0639\u062F"), __jsx("div", {
    class: "input-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 17
    }
  }, __jsx("input", {
    type: "number",
    name: "end",
    style: {
      float: "left"
    },
    ref: register({
      required: true
    }),
    className: "form-control",
    placeholder: "\u0639\u062F\u062F \u0627\u0644\u0623\u0634\u0647\u0631",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 19
    }
  }), __jsx("div", {
    class: "input-group-prepend",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 19
    }
  }, __jsx("span", {
    class: "input-group-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 21
    }
  }, "\u0634\u0647\u0631")))), errors.end && errors.end.type === "required" && __jsx("p", {
    style: {
      color: "red"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 17
    }
  }, "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628")), InputTypecode ? __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 15
    }
  }, __jsx("div", {
    class: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 17
    }
  }, __jsx("label", {
    class: "form-control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 19
    }
  }, " \u0627\u0644\u0648\u0635\u0641"), __jsx("textarea", {
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
      lineNumber: 379,
      columnNumber: 19
    }
  }), errors.des && errors.des.type === "minLength" && __jsx("p", {
    style: {
      color: "red"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 21
    }
  }, "\u0627\u0644\u0648\u0635\u0641 \u0627\u0644\u0645\u062F\u062E\u0644\u0629 \u0642\u0635\u064A\u0631\u0629 \u0644\u0644\u063A\u0627\u064A\u0629"))) : "", __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
      columnNumber: 13
    }
  }, __jsx("div", {
    class: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 15
    }
  }, __jsx("label", {
    class: "form-control-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 17
    }
  }, " \u0627\u0644\u0634\u0631\u0648\u0637 \u0648\u0627\u0644\u0623\u062D\u0643\u0627\u0645"), __jsx("textarea", {
    rows: "4",
    class: "form-control",
    name: "Terms",
    ref: register({
      minLength: 3
    }),
    placeholder: "\u0634\u0631\u0648\u0637 \u0648\u0623\u062D\u0643\u0627\u0645 \u0635\u0631\u0641 \u0627\u0644\u0643\u0648\u0628\u0648\u0646\u0627\u062A",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 17
    }
  }), errors.Terms && errors.Terms.type === "minLength" && __jsx("p", {
    style: {
      color: "red"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410,
      columnNumber: 19
    }
  }, "\u0627\u0644\u0634\u0631\u0648\u0637 \u0648\u0627\u0644\u0623\u062D\u0643\u0627\u0645 \u0627\u0644\u0645\u062F\u062E\u0644\u0629 \u0642\u0635\u064A\u0631\u0629 \u0644\u0644\u063A\u0627\u064A\u0629"))))), spinner ? __jsx("button", {
    className: "btn btn-default",
    disabled: true,
    style: {
      float: "left"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "spinner-grow spinner-grow-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 13
    }
  }), "\u062C\u0627\u0631\u064A \u0627\u0644\u0625\u0631\u0633\u0627\u0644 ..") : __jsx("input", {
    style: {
      float: "left"
    },
    type: "submit",
    className: "btn btn-default",
    value: loading ? "Loading..." : "إنشاء كوبون",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429,
      columnNumber: 11
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (NewCoubonForm);

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

/***/ "./pages/companys/[name]/index.js":
/*!****************************************!*\
  !*** ./pages/companys/[name]/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Admin_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/Admin_nav */ "./components/Admin_nav.js");
/* harmony import */ var _components_HeaderNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/HeaderNav */ "./components/HeaderNav.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_BranchCoubonTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/BranchCoubonTable */ "./components/BranchCoubonTable.js");
/* harmony import */ var _components_NewBranchForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/NewBranchForm */ "./components/NewBranchForm.js");
/* harmony import */ var _components_EditBranchForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/EditBranchForm */ "./components/EditBranchForm.js");
/* harmony import */ var _contexts_auth_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../contexts/auth.js */ "./contexts/auth.js");
/* harmony import */ var _services_api_get__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/api_get */ "./services/api_get.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-loading-skeleton */ "react-loading-skeleton");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "C:\\xampp\\htdocs\\next\\pages\\companys\\[name]\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













function company() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"])(); //const [currentCity, setCurrentCity] = useState("");

  const {
    name
  } = router.query;
  const {
    toggler,
    settoggler,
    loading
  } = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const {
    data,
    isLoading,
    isError
  } = Object(_services_api_get__WEBPACK_IMPORTED_MODULE_8__["getCompany"])(name);
  const results = isLoading ? false : data.data;
  const showSkeleton = isLoading || loading;
  const {
    0: choose,
    1: setChoose
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("branches");
  console.log(data);
  const {
    0: branch_id,
    1: setBranch_id
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: BracnhCode,
    1: setBracnhCode
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: bphone,
    1: setbphone
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: bname,
    1: setbname
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: Branch,
    1: setBranch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: edit,
    1: setedit
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: newCompany,
    1: setnewCompany
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  function changeChoose(mychosen) {
    setChoose(mychosen);
  }

  function changenewCompany() {
    setnewCompany(false);
    setedit(false);
  }

  function GoBackAndTriggerMutation() {
    Object(swr__WEBPACK_IMPORTED_MODULE_11__["mutate"])("api/getCompany?name=" + name);
    setnewCompany(false);
    setedit(false);
  }

  const {
    0: Branchname,
    1: setBranchname
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: compname,
    1: setcompname
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");

  function displayCards(results) {
    localStorage.CurrentCity = "";
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, choose == "branches" ? __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }
    }, __jsx("div", {
      style: {
        float: "right"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      }
    }, __jsx("button", {
      onClick: () => {
        router.push("/companys");
      },
      class: "btn btn-icon btn-primary",
      type: "button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 15
      }
    }, __jsx("span", {
      class: "btn-inner--icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }
    }, __jsx("i", {
      class: "fa fa-arrow-right",
      "aria-hidden": "true",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 19
      }
    }))), __jsx("h2", {
      style: {
        marginRight: "0.8em",
        display: "inline"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 15
      }
    }, "\u0627\u062E\u062A\u0631 \u0627\u0644\u0641\u0631\u0639 :"), __jsx("div", {
      style: {
        clear: "both"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 15
      }
    })), __jsx("div", {
      style: {
        clear: "both"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 13
      }
    }), __jsx("div", {
      class: "col-xl-12 col-md-12",
      style: {
        height: "50px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 13
      }
    }), results.map((branch, index) => {
      if (branch.city == localStorage.CurrentCity) {
        return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
          class: "col-xl-3 col-md-6",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 21
          }
        }, __jsx("div", {
          class: "card card-stats",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 23
          }
        }, __jsx("div", {
          class: "btn btn-icon ",
          style: {
            float: "left",
            zIndex: 9999999999,
            position: "absolute",
            left: 0,
            top: 17
          },
          onClick: () => {
            setedit(true);
            setnewCompany(true);
            setChoose("branches");
            setBranch(branch);
            setBranchname(" " + branch.branch_name);
            setcompname(branch.company_name); // event.stopPropagation();
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 25
          }
        }, __jsx("img", {
          width: "20",
          src: "https://image.flaticon.com/icons/png/512/84/84380.png",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 27
          }
        })), __jsx("div", {
          class: "card-body",
          onClick: () => {
            console.log(index);
            setBranch_id(branch.id);
            setBracnhCode(branch.BracnhCode);
            setChoose("coubons");
            setBranchname("  " + branch.branch_name);
            setcompname(branch.company_name);
            setbphone(branch.phone);
            setbname(branch.firstName + " " + branch.lastName); // setCompany(comp.branches);
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 25
          }
        }, __jsx("div", {
          class: "row",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 27
          }
        }, __jsx("div", {
          class: "col-12",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 29
          }
        }, __jsx("div", {
          class: "icon icon-shape bg-gradient-primary text-white rounded-circle shadow",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 31
          }
        }, __jsx("i", {
          class: "ni ni-shop",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 33
          }
        }))), __jsx("div", {
          class: "col-12",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 29
          }
        }, __jsx("span", {
          class: "h2 font-weight-bold mb-0",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 31
          }
        }, branch.branch_name), __jsx("h5", {
          class: "card-title text-uppercase text-muted mb-0",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 31
          }
        }, branch.ShortDesc)))))));
      } else {
        localStorage.CurrentCity = branch.city;
        return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
          class: "col-xl-12 col-md-12",
          style: {
            height: "50px"
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 21
          }
        }, " ", __jsx("h1", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 23
          }
        }, branch.city)), __jsx("div", {
          class: "col-xl-3 col-md-6",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 21
          }
        }, __jsx("div", {
          class: "card card-stats",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 23
          }
        }, __jsx("div", {
          class: "btn btn-icon ",
          style: {
            float: "left",
            zIndex: 9999999999,
            position: "absolute",
            left: 0,
            top: 17
          },
          onClick: () => {
            console.log("hedddddddddddddddddddddddddre");
            setedit(true);
            setnewCompany(true);
            setChoose("branches");
            setBranch(branch);
            setBranchname("  " + branch.branch_name);
            setcompname(branch.company_name); // event.stopPropagation();
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 25
          }
        }, __jsx("img", {
          width: "20",
          src: "https://image.flaticon.com/icons/png/512/84/84380.png",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 27
          }
        })), __jsx("div", {
          class: "card-body",
          onClick: () => {
            setBranch_id(branch.id);
            setBracnhCode(branch.BracnhCode);
            setChoose("coubons");
            setBranchname("  " + branch.branch_name);
            setcompname(branch.company_name);
            setbphone(branch.phone);
            setbname(branch.firstName + " " + branch.lastName);
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 25
          }
        }, __jsx("div", {
          class: "btn btn-icon ",
          style: {
            float: "left",
            zIndex: 99999999,
            opacity: 0
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 27
          }
        }, __jsx("img", {
          width: "20",
          src: "https://image.flaticon.com/icons/png/512/84/84380.png",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 29
          }
        })), __jsx("div", {
          class: "row",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 208,
            columnNumber: 27
          }
        }, __jsx("div", {
          class: "col-12",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 209,
            columnNumber: 29
          }
        }, __jsx("div", {
          class: "icon icon-shape bg-gradient-primary text-white rounded-circle shadow",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 31
          }
        }, __jsx("i", {
          class: "ni ni-shop",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 211,
            columnNumber: 33
          }
        }))), __jsx("div", {
          class: "col-12",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 29
          }
        }, __jsx("span", {
          class: "h2 font-weight-bold mb-0",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 31
          }
        }, branch.branch_name), __jsx("h5", {
          class: "card-title text-uppercase text-muted mb-0",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 218,
            columnNumber: 31
          }
        }, branch.ShortDesc)))))));
      }
    }), " ") : choose == "coubons" ? __jsx(_components_BranchCoubonTable__WEBPACK_IMPORTED_MODULE_4__["default"], {
      branch_id: branch_id,
      companyName: name,
      setChoose: changeChoose,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 11
      }
    }) : "");
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("body", {
    className: "rtl g-sidenav-show g-sidenav-pinned",
    dir: "rtl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 9
    }
  }, toggler ? __jsx(_components_Admin_nav__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 22
    }
  }) : "", __jsx("div", {
    className: "main-content",
    id: "panel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 11
    }
  }, __jsx(_components_HeaderNav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "container-fluid mt--6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 13
    }
  }, choose == "coubons" ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_BranchCoubonTable__WEBPACK_IMPORTED_MODULE_4__["default"], {
    branch_id: branch_id,
    BracnhCode: BracnhCode,
    companyName: compname,
    Branchname: Branchname,
    setChoose: changeChoose,
    listOfBranches: results,
    FullDesc: results[0].FullDesc,
    logo: results[0].logo,
    bname: bname,
    bphone: bphone,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 19
    }
  })) : __jsx("div", {
    className: "row justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: " col ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "card-header bg-transparent",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 23
    }
  }, __jsx("h3", {
    className: "mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 25
    }
  }, "\u0641\u0631\u0648\u0639 \u0627\u0644\u0634\u0631\u0643\u0629"), __jsx("div", {
    style: {
      float: "left"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 25
    }
  }, __jsx("button", {
    onClick: () => {
      setnewCompany(true); // setChoose("branches");
    },
    class: "btn btn-icon btn-danger",
    type: "button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 27
    }
  }, __jsx("span", {
    class: "btn-inner--icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 29
    }
  }, "\u0625\u0646\u0634\u0627\u0621 ", choose == "branches" ? "فرع" : "كوبون", " ", "\u062C\u062F\u064A\u062F")))), newCompany == false ? __jsx("div", {
    className: "card-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 25
    }
  }, results ? __jsx("div", {
    style: {
      backgroundColor: "#f4f0f0",
      borderRadius: "20px",
      padding: "10px",
      marginBottom: "5%"
    },
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "col-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 31
    }
  }, __jsx("img", {
    src: results[0].logo,
    style: {
      borderRadius: "8px"
    },
    width: "200",
    height: "200",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 33
    }
  })), __jsx("div", {
    className: "col-9",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 31
    }
  }, __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 33
    }
  }), __jsx("h1", {
    style: {
      color: "#234B55"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 33
    }
  }, results[0].company_name), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 33
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 33
    }
  }, results[0].FullDesc))) : "", results ? results == "No_data" ? __jsx("div", {
    style: {
      float: "right"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 31
    }
  }, __jsx("button", {
    onClick: () => {
      router.push("/companys");
    },
    class: "btn btn-icon btn-primary",
    type: "button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 33
    }
  }, __jsx("span", {
    class: "btn-inner--icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 35
    }
  }, __jsx("i", {
    class: "fa fa-arrow-right",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 37
    }
  }))), __jsx("h2", {
    style: {
      marginRight: "0.8em",
      display: "inline"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 33
    }
  }, "\u0627\u062E\u062A\u0631 \u0627\u0644\u0641\u0631\u0639 :"), __jsx("div", {
    style: {
      clear: "both"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 33
    }
  }), __jsx("h2", {
    style: {
      marginTop: "0.8em"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 33
    }
  }, "\u0644\u0627 \u064A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A")) : displayCards(results) : "", showSkeleton ? __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_10___default.a, {
    height: 40,
    count: 10,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 29
    }
  }) : "") : __jsx("div", {
    className: "card-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 25
    }
  }, " ", choose == "branches" ? edit == false ? __jsx(_components_NewBranchForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
    company_id: results[0].company_id,
    GoBackAndTriggerMutation: GoBackAndTriggerMutation,
    changenewCompany: changenewCompany,
    companyName: results[0].company_name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 31
    }
  }) : __jsx(_components_EditBranchForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    company_id: results[0].company_id,
    GoBackAndTriggerMutation: GoBackAndTriggerMutation,
    companyName: compname,
    Branchname: Branchname,
    changenewCompany: changenewCompany,
    branch: Branch,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 31
    }
  }) : "")))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409,
      columnNumber: 15
    }
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_7__["ProtectRoute"])(company));

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

/***/ 3:
/*!**********************************************!*\
  !*** multi ./pages/companys/[name]/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\next\pages\companys\[name]\index.js */"./pages/companys/[name]/index.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FkZENvdWJvbnNGb3JtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQWRtaW5fbmF2LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQnJhbmNoQ291Ym9uVGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CdXR0b25VcGxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9FZGl0QnJhbmNoRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlck5hdi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05ld0JyYW5jaEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OZXdDb3Vib25Gb3JtLmpzIiwid2VicGFjazovLy8uL2NvbnRleHRzL2F1dGguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2NvbXBhbnlzL1tuYW1lXS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9BcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvYXBpX2dldC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkQ2lyY2xlT3V0bGluZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlcy1leGFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYWxlcnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ob29rLWZvcm1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWxvYWRpbmctc2tlbGV0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzd3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiJdLCJuYW1lcyI6WyJBZGRDb3Vib25zRm9ybSIsIlNlY3Rpb25faWQiLCJjb3Vib25OYW1lIiwiQnJhY25oQ29kZSIsInZhbHVlIiwiR29CYWNrQW5kVHJpZ2dlck11dGF0aW9uIiwiY2hhbmdlbmV3Q29tcGFueSIsImNvdWJvblR5cGUiLCJhbGVydCIsInVzZUFsZXJ0Iiwicm91dGVyIiwidXNlUm91dGVyIiwidG9nZ2xlciIsInNldHRvZ2dsZXIiLCJsb2FkaW5nIiwidXNlQXV0aCIsInNwaW5uZXIiLCJzZXRzcGlubmVyIiwidXNlU3RhdGUiLCJJbnB1dFR5cGVkaXMiLCJzZXRJbnB1dFR5cGVkaXMiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImVycm9ycyIsInVzZUZvcm0iLCJvblN1Ym1pdCIsImZvcm1kYXRhIiwiY29uc29sZSIsImxvZyIsImFwaSIsInBvc3QiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInNob3ciLCJ0aW1lb3V0IiwidHlwZSIsImNhdGNoIiwiZXJyIiwiZmxvYXQiLCJtYXJnaW5SaWdodCIsImRpc3BsYXkiLCJjbGVhciIsImhlaWdodCIsInJlcXVpcmVkIiwiY29kZSIsImNvbG9yIiwiY291Ym9uc0Ftb3VudCIsIkFkbWluX25hdiIsImlzTW9iaWxlIiwic2V0SXNNb2JpbGUiLCJsb2dvdXQiLCJ1c2VFZmZlY3QiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiYmFja2dyb3VuZENvbG9yIiwiQ29va2llcyIsImdldCIsInRleHRBbGlnbiIsInB1c2giLCJtYXJnaW5Cb3R0b20iLCJib3JkZXJSYWRpdXMiLCJmb250V2VpZ2h0IiwibWFyZ2luVG9wIiwicGF0aG5hbWUiLCJ3aWR0aCIsIkJyYW5jaENvdWJvblRhYmxlIiwiYnJhbmNoX2lkIiwiY29tcGFueU5hbWUiLCJCcmFuY2huYW1lIiwic2V0Q2hvb3NlIiwibGlzdE9mQnJhbmNoZXMiLCJGdWxsRGVzYyIsImxvZ28iLCJibmFtZSIsImJwaG9uZSIsInVzZXIiLCJpc0F1dGhlbnRpY2F0ZWQiLCJsb2NhbFN0b3JhZ2UiLCJDdXJyZW50Y2F0ZWdvcnkiLCJSb3V0ZXIiLCJ0aGVTZWN0aW9uX2lkIiwic2V0dGhlU2VjdGlvbl9pZCIsInNsZWVwIiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJ1cHBhZ2UiLCJzZXR1cHBhZ2UiLCJpc0xvYWRpbmciLCJpc0Vycm9yIiwiR2V0Q291cG9uc0J5YnJhbmNoIiwicmVzdWx0cyIsInNob3dTa2VsZXRvbiIsIm5ld0NvbXBhbnkiLCJzZXRuZXdDb21wYW55Iiwic2V0U2VjdGlvbl9pZCIsInNldHZhbHVlIiwic2V0Y291Ym9uTmFtZSIsInNldGNvdWJvblR5cGUiLCJNb2RlbFN0YXRlIiwic2V0TW9kZWxTdGF0ZSIsImZpbmFsQnJhbmNoZXMiLCJzZXRmaW5hbEJyYW5jaGVzIiwiZWRpdCIsInNldGVkaXQiLCJlZGl0TW9kZWwiLCJzZXRlZGl0TW9kZWwiLCJDb21wYW55Iiwic2V0Q29tcGFueSIsImNoYW5nZUJyYW5jaGVzIiwiaWQiLCJmYXZvcml0ZSIsImYiLCJpbmRleCIsImxlbmd0aCIsInNzIiwic3RhdHVzIiwidGVtcGJyYW5jaCIsImJyYW5jaF9uYW1lIiwiVXBkYXRlQ291Ym9udE5hbWUiLCJkZCIsIlNhdmVCcmFuY2hlcyIsIm9wZW5Nb2RhbCIsIk1vZGFsRGF0YSIsInRoZUNvdXBvbkJyYW5jaGVzIiwiZWxlbWVudCIsImluZGV4MiIsImVsZW1lbnQyIiwiQnJhbmNoX2lkIiwicGFkZGluZyIsIm1hcCIsImNvdWJvbiIsImNhdGVnb3J5IiwiVGV4dEFsaWduIiwibmFtZSIsImFtb3VudCIsImVuZCIsInBhZGRpbmdSaWdodCIsImUiLCJ0YXJnZXQiLCJsaXN0QnJhbmNoZXMiLCJCdXR0b25VcGxvYWRJbWFnZSIsInR5cGVJbWFnZSIsIm9uQ2hhbmdlIiwiaW5wdXRLZXkiLCJFZGl0Q29tcGFueUZvcm0iLCJicmFuY2giLCJkZWZhdWx0VmFsdWVzIiwiYnJhbmNoTmFtZSIsImJyYW5jaFNob3J0RGVzYyIsIlNob3J0RGVzYyIsImJyYW5jaEFkZHJlc3MiLCJBZGRyZXNzIiwibWluTGVuZ3RoIiwibWF4TGVuZ3RoIiwiRm9vdGVyIiwiSGVhZGVyIiwiekluZGV4IiwicG9zaXRpb24iLCJOZXdCcmFuY2hGb3JtIiwiY29tcGFueV9pZCIsInRva2VuIiwic2l0ZVVybCIsImltZWdlcyIsInNldGltZWdlcyIsIkdldENDQXMiLCJjaXR5cyIsInNldGNpdHlzIiwiZmlyc3RUaW1lIiwic2V0Zmlyc3RUaW1lIiwiaGFuZGxlVGh1bWJuYWlsUHJvZHVjdCIsImZpbGUiLCJpbWFnZU9iaiIsImlzVWxvYWRpbmciLCJpbWFnZU9iamVjdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJheGlvcyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwicmVzdWx0Iiwic291cmNlX3VybCIsInRlbXBpbWVnZXNhcnJheSIsInNlbGVjdGVkQ291bnR5IiwidGVtcGNvbnVudHkiLCJjb3VudHkiLCJjaXR5IiwiZGlyZWN0aW9uX3VybCIsIml0ZW0iLCJ0aHVtYm5haWwiLCJmaWxlcyIsIkZpcnN0TmFtZSIsIkxhc3ROYW1lIiwiUGhvbmUiLCJOZXdDb3Vib25Gb3JtIiwic3BvbnNvcnMiLCJzZXRzcG9uc29ycyIsIklucHV0VHlwZWNvZGUiLCJzZXRJbnB1dFR5cGVjb2RlIiwiR2V0Q2F0ZWdvcmllcyIsIlNOYW1lIiwiU3ZhbHVlIiwiU3Bob25lIiwidXJsIiwiZGVzIiwiVGVybXMiLCJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInNldFVzZXIiLCJzZXRMb2FkaW5nIiwibG9hZFVzZXJGcm9tQ29va2llcyIsImRlZmF1bHRzIiwicmVtb3ZlIiwidXNlcl9uaWNlbmFtZSIsInVzZXJfZW1haWwiLCJVc2VyVHlwZSIsIkNvbXBhbnlDb2RlIiwicHJvZmlsZV9waWMiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiU2VuZGNvbmQiLCJwaG9uZSIsInRlbXByZXMiLCJwaG9uZUxvZ2luIiwic2V0IiwiZXhwaXJlcyIsImxvZ2luIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImVtYWlsIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJQcm90ZWN0Um91dGUiLCJDb21wb25lbnQiLCJhcmd1bWVudHMiLCJQcm90ZWN0Um91dGVDb21wYW55IiwiUHJvdGVjdFJvdXRlTWFuZG9iZSIsIm9yaWdpbiIsImxhc3RIcmVmIiwibGFzdEFzIiwibGFzdFJlc3VsdCIsImhyZWYiLCJhcyIsImZvcm1hdEZ1bmMiLCJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJvYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsImdldE9ic2VydmVyIiwiY29uc3RydWN0b3IiLCJwIiwibWVtb2l6ZWRGb3JtYXRVcmwiLCJmb3JtYXRVcmwiLCJhc0hyZWYiLCJub2RlTmFtZSIsImlzTG9jYWwiLCJzY3JvbGwiLCJzaGFsbG93Iiwic3VjY2VzcyIsImRvY3VtZW50IiwicHJvcHMiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImdldFBhdGhzIiwicmVzb2x2ZWRIcmVmIiwicGFyc2VkQXMiLCJoYW5kbGVSZWYiLCJyZWYiLCJpc1ByZWZldGNoZWQiLCJwcmVmZXRjaCIsInBhdGhzIiwicmVuZGVyIiwiY2hpbGQiLCJDaGlsZHJlbiIsImVsIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJvbkNsaWNrIiwicHJvY2VzcyIsIlJlYWN0Iiwid2FybiIsIlByb3BUeXBlcyIsInJlcXVpcmUiLCJleGFjdCIsIkxpbmsiLCJyZXBsYWNlIiwicGFzc0hyZWYiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiT2JqZWN0IiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudCIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJwYXRoIiwicHJlcGFyZVJvdXRlIiwidG9Sb3V0ZSIsImF0dGVtcHRzIiwiaXNTZXJ2ZXJSZW5kZXIiLCJhZGRCYXNlUGF0aCIsIl9fTkVYVF9EQVRBX18iLCJidWlsZElkIiwiZGVsQmFzZVBhdGgiLCJjcmVkZW50aWFscyIsImdldFJlc3BvbnNlIiwicm91dGUiLCJxdWVyeSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiZmV0Y2hOZXh0RGF0YSIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwidXBkYXRlIiwibW9kIiwibmV3RGF0YSIsInJlbG9hZCIsImJhY2siLCJvcHRpb25zIiwiY2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1ldGhvZCIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwibWlzc2luZ1BhcmFtcyIsInBhcmFtIiwicmVqZWN0IiwiYXNQYXRobmFtZSIsInJvdXRlSW5mbyIsImVycm9yIiwiYXBwQ29tcCIsImNoYW5nZVN0YXRlIiwiZ2V0Um91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwiaGFuZGxlRXJyb3IiLCJwYWdlIiwiZ2lwRXJyIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImhhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJjYW5jZWxsZWQiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsIlRFU1RfUk9VVEUiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInBhcmFtcyIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJlc2NhcGVkUm91dGUiLCJlc2NhcGVSZWdleCIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJpc09wdGlvbmFsIiwiJDEiLCJpc0NhdGNoQWxsIiwicG9zIiwicmVwZWF0IiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJrZXkiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInByb3RvY29sIiwiaG9zdG5hbWUiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJjb21wYW55IiwiZ2V0Q29tcGFueSIsImNob29zZSIsInNldEJyYW5jaF9pZCIsInNldEJyYWNuaENvZGUiLCJzZXRicGhvbmUiLCJzZXRibmFtZSIsIkJyYW5jaCIsInNldEJyYW5jaCIsImNoYW5nZUNob29zZSIsIm15Y2hvc2VuIiwibXV0YXRlIiwic2V0QnJhbmNobmFtZSIsImNvbXBuYW1lIiwic2V0Y29tcG5hbWUiLCJkaXNwbGF5Q2FyZHMiLCJDdXJyZW50Q2l0eSIsImxlZnQiLCJ0b3AiLCJjb21wYW55X25hbWUiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsIm9wYWNpdHkiLCJ1cmxzIiwiZGV2ZWxvcG1lbnQiLCJwcm9kdWN0aW9uIiwiQXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwiQWNjZXB0IiwiYXBpX2dldCIsInVzZVNXUiIsImdldFNwb25zb3JzIiwiZ2V0VHlwZSIsIkdldEZ1bGxDQ0FzIiwicGFnZXVwIiwiR2V0QWxsTWFuZG9iZXMiLCJHZXRDIiwiQ29tcGFueXNTdGF0aXN0aWMiLCJVc2VyU3RhdGlzdGljcyIsInVzZXJfaWQiLCJVc2VyU3RhdGlzdGljc0RhdGEiLCJVc2VyU3RhdGlzdGljc2Vycm9yaXNMb2FkaW5nIiwiVXNlclN0YXRpc3RpY3NlcnJvcmlzRXJyb3IiLCJHZXRBcHByb3ZlTWFuZG9iZXMiLCJHZXRBcHByb3ZldXNlcnNzTSIsIkdldEFwcHJvdmV1c2Vyc3MiLCJDb21wYW55c1N0YXRpc3RpY3MiLCJnZXRVc2VyQ2FyZHMiLCJHZXRNYW5kb2JlcyIsInJlcXVlc3QiLCJTY2l0eSIsIlNhZXJhIiwiUnNOYW1lIiwiUnNQaG9uZSIsIkdldHVzZXJzczIiLCJtZW1iZXJzIiwibGFzdF9jb3Vib24iLCJ0b3RhbF9jb3Vib25zIiwicGlvcml0eSIsIlNjYXQiLCJTcGFpb3JpdHkiLCJTVHlwZSIsIlNOdW1iZXIiLCJHZXRNYW5kb2JVc2VycyIsIm1hbmRvYmVfaWQiLCJHZXR1c2Vyc3MiLCJoaWRlIiwiR2V0Q291cG9uc0J5QnJhY25oQ2F0IiwiQnJhbmNoaWQiLCJDYXRlZ29yeWlkIiwiR2V0Q291cG9uQnJhbmNoZXMiLCJDb3Vwb25CcmFuY2hlcyIsIkNvdXBvbkJyYW5jaGVzaXNMb2FkaW5nIiwiQ291cG9uQnJhbmNoZXNpc0Vycm9yIiwiR2V0VXNlck1ldGEiLCJUaGVVc2VyX2lkIiwiVXNlck1ldGEiLCJVc2VyTWV0YWlzTG9hZGluZyIsIlVzZXJNZXRhaXNFcnJvciIsIkdldENvbXBhbnlzIiwiR2V0Q2F0ZWdvcnlzQnlDaXR5IiwiR2V0Q291cG9uc0J5U2VjdGlvbiIsInNlY3Rpb25faWQiLCJJZCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHdFOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQ0FnRTs7QUFDaEU7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxTQUFTQSxjQUFULENBQXdCO0FBQ3RCQyxZQURzQjtBQUV0QkMsWUFGc0I7QUFHdEJDLFlBSHNCO0FBSXRCQyxPQUpzQjtBQUt0QkMsMEJBTHNCO0FBTXRCQyxrQkFOc0I7QUFPdEJDO0FBUHNCLENBQXhCLEVBUUc7QUFDRCxRQUFNQyxLQUFLLEdBQUdDLDREQUFRLEVBQXRCO0FBQ0EsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4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Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxnQzs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcY29tcGFueXNcXFtuYW1lXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiOyAvL1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5pbXBvcnQgYXBpIGZyb20gXCIuLi9zZXJ2aWNlcy9BcGlcIjtcclxuaW1wb3J0IHsgdXNlQWxlcnQgfSBmcm9tIFwicmVhY3QtYWxlcnRcIjtcclxuXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgdXNlQXV0aCwgeyBQcm90ZWN0Um91dGUgfSBmcm9tIFwiLi4vY29udGV4dHMvYXV0aC5qc1wiO1xyXG5cclxuZnVuY3Rpb24gQWRkQ291Ym9uc0Zvcm0oe1xyXG4gIFNlY3Rpb25faWQsXHJcbiAgY291Ym9uTmFtZSxcclxuICBCcmFjbmhDb2RlLFxyXG4gIHZhbHVlLFxyXG4gIEdvQmFja0FuZFRyaWdnZXJNdXRhdGlvbixcclxuICBjaGFuZ2VuZXdDb21wYW55LFxyXG4gIGNvdWJvblR5cGUsXHJcbn0pIHtcclxuICBjb25zdCBhbGVydCA9IHVzZUFsZXJ0KCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IHsgdG9nZ2xlciwgc2V0dG9nZ2xlciwgbG9hZGluZyB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IFtzcGlubmVyLCBzZXRzcGlubmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbSW5wdXRUeXBlZGlzLCBzZXRJbnB1dFR5cGVkaXNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIGVycm9ycyB9ID0gdXNlRm9ybSh7XHJcbiAgICAvL21vZGU6IFwib25DaGFuZ2VcIixcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSAoZm9ybWRhdGEpID0+IHtcclxuICAgIGZvcm1kYXRhID0ge1xyXG4gICAgICAuLi5mb3JtZGF0YSxcclxuICAgICAgU2VjdGlvbl9pZCxcclxuICAgICAgY291Ym9uTmFtZSxcclxuICAgICAgQnJhY25oQ29kZSxcclxuICAgICAgdmFsdWUsXHJcbiAgICAgIGNvdWJvblR5cGUsXHJcbiAgICB9O1xyXG4gICAgc2V0c3Bpbm5lcih0cnVlKTtcclxuICAgIGNvbnNvbGUubG9nKGZvcm1kYXRhKTtcclxuXHJcbiAgICBhcGlcclxuICAgICAgLnBvc3QoXCJhcGkvQWRkQ291Ym9uc1wiLCBmb3JtZGF0YSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICBzZXRzcGlubmVyKGZhbHNlKTtcclxuICAgICAgICBpZiAocmVzLmRhdGEgPT0gXCJhbHJlYWR5IGV4aXN0c1wiKSB7XHJcbiAgICAgICAgICBhbGVydC5zaG93KFwi2KXYs9mFINin2YTZg9mI2KjZiNmGINmF2YjYrNmI2K8g2YXYs9io2YLYpyBcIiwge1xyXG4gICAgICAgICAgICB0aW1lb3V0OiAyMDAwLFxyXG4gICAgICAgICAgICB0eXBlOiBcImVycm9yXCIsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJlcy5kYXRhID09IFwiZW1haWxcIikge1xyXG4gICAgICAgICAgYWxlcnQuc2hvdyhcItin2YTYpdmK2YXZitmEINmF2LPYqtiu2K/ZhSDZhdiz2KjZgtinXCIsIHtcclxuICAgICAgICAgICAgdGltZW91dDogMjAwMCxcclxuICAgICAgICAgICAgdHlwZTogXCJlcnJvclwiLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocmVzLmRhdGEgPiAwKSB7XHJcbiAgICAgICAgICBhbGVydC5zaG93KFwi2KrZhSDYqNmG2KzYp9itXCIsIHtcclxuICAgICAgICAgICAgdGltZW91dDogMjAwMCxcclxuICAgICAgICAgICAgdHlwZTogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIEdvQmFja0FuZFRyaWdnZXJNdXRhdGlvbigpO1xyXG4gICAgICAgICAgLy9yb3V0ZXIucHVzaChcIi9jb21wYW55cy9bbmFtZV1cIiwgXCIvY29tcGFueXMvXCIgKyBmb3JtZGF0YS5jb21wYW55TmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgc2V0c3Bpbm5lcihmYWxzZSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IGZsb2F0OiBcInJpZ2h0XCIgfX0+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBjaGFuZ2VuZXdDb21wYW55KCk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWljb24gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJidG4taW5uZXItLWljb25cIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1hcnJvdy1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8aDIgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMC44ZW1cIiwgZGlzcGxheTogXCJpbmxpbmVcIiB9fT5cclxuICAgICAgICAgINil2LbYp9mB2Kkg2YPZiNio2YjZhtin2KogOlxyXG4gICAgICAgIDwvaDI+XHJcblxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgY2xlYXI6IFwiYm90aFwiIH19PjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJyPjwvYnI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wteGwtMTIgY29sLW1kLTEyXCIgc3R5bGU9e3sgaGVpZ2h0OiBcIjUwcHhcIiB9fT48L2Rpdj5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxyXG4gICAgICAgIDxoNiBjbGFzc05hbWU9XCJoZWFkaW5nLXNtYWxsIHRleHQtbXV0ZWQgbWItNFwiPlxyXG4gICAgICAgICAg2KXYttin2YHYqSDZg9mI2KjZiNmG2KfYqiDYp9mE2YkgOiB7Y291Ym9uTmFtZX1cclxuICAgICAgICA8L2g2PlxyXG4gICAgICAgIHtjb3Vib25UeXBlID09IFwib25lX2NvZGVcIiA/IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtbGctNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1sYWJlbFwiPtin2YTZg9mI2K88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZyZWUxMFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtlcnJvcnMuY29kZSAmJiBlcnJvcnMuY29kZS50eXBlID09PSBcInJlcXVpcmVkXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT7Zh9iw2Kcg2KfZhNit2YLZhCDZhdi32YTZiNioPC9wPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC1sZy00XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLWxhYmVsXCI+2KfZhNmD2YXZitipPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvdWJvbnNBbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItmD2YXZitipINin2YTZg9mI2KjZiNmG2KfYqiDYp9mE2YXYsdin2K8g2KXZhti02KfYptmH2KdcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7ZXJyb3JzLmNvdWJvbnNBbW91bnQgJiZcclxuICAgICAgICAgICAgICAgICAgZXJyb3JzLmNvdWJvbnNBbW91bnQudHlwZSA9PT0gXCJyZXF1aXJlZFwiICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT7Zh9iw2Kcg2KfZhNit2YLZhCDZhdi32YTZiNioPC9wPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge3NwaW5uZXIgPyAoXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiXHJcbiAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGZsb2F0OiBcImxlZnRcIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGlubmVyLWdyb3cgc3Bpbm5lci1ncm93LXNtXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICDYrNin2LHZiiDYp9mE2KXYsdiz2KfZhCAuLlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBzdHlsZT17eyBmbG9hdDogXCJsZWZ0XCIgfX1cclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtsb2FkaW5nID8gXCJMb2FkaW5nLi4uXCIgOiBcItil2LbYp9mB2Kkg2YPZiNio2YjZhtin2KpcIn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkQ291Ym9uc0Zvcm07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XHJcblxyXG5pbXBvcnQgdXNlQXV0aCwgeyBQcm90ZWN0Um91dGUgfSBmcm9tIFwiLi4vY29udGV4dHMvYXV0aC5qc1wiO1xyXG5cclxuZnVuY3Rpb24gQWRtaW5fbmF2KCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtpc01vYmlsZSwgc2V0SXNNb2JpbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHsgdG9nZ2xlciwgc2V0dG9nZ2xlciwgbG9hZGluZywgbG9nb3V0IH0gPSB1c2VBdXRoKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBkZXZpY2UgZGV0ZWN0aW9uXHJcbiAgICBpZiAoXHJcbiAgICAgIC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChcclxuICAgICAgICBuYXZpZ2F0b3IudXNlckFnZW50XHJcbiAgICAgIClcclxuICAgICkge1xyXG4gICAgICAvLyBzZXR0b2dnbGVyKGZhbHNlKTtcclxuICAgIH1cclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPG5hdlxyXG4gICAgICBjbGFzc05hbWU9XCJhYWZhIHNpZGVuYXYgbmF2YmFyIG5hdmJhci12ZXJ0aWNhbCAgZml4ZWQtcmlnaHQgIG5hdmJhci1leHBhbmQteHMgbmF2YmFyLWxpZ2h0IGJnLXdoaXRlXCJcclxuICAgICAgaWQ9XCJzaWRlbmF2LW1haW5cIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcm9sbGJhci1pbm5lclwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjRjVGNkY4XCIgfX0+XHJcbiAgICAgICAgey8qIEJyYW5kICovfVxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzaWRlbmF2LWhlYWRlciAgYWxpZ24taXRlbXMtY2VudGVyXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCI+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9XCIuLi9hc3NldHMvaW1nL2JyYW5kL2JsdWUucG5nXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmQtaW1nXCJcclxuICAgICAgICAgICAgICBhbHQ9XCIuLi5cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWlubmVyXCI+XHJcbiAgICAgICAgICB7LyogQ29sbGFwc2UgKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwic2lkZW5hdi1jb2xsYXBzZS1tYWluXCI+XHJcbiAgICAgICAgICAgIHsvKiBOYXYgaXRlbXMgKi99XHJcbiAgICAgICAgICAgIHtDb29raWVzLmdldChcIlVzZXJUeXBlXCIpID09IFwiYWRtaW5cIiA/IChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXZcIiBzdHlsZT17eyB0ZXh0QWxpZ246IFwicmlnaHRcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGxvZ291dCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL01hbmFnZW1lbnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBzcmM9e1wiL2xvZ28ucG5nXCJ9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0gY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTAlXCIsIGJvcmRlclJhZGl1czogXCIzMHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtDb29raWVzLmdldChcInByb2ZpbGVfcGljXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiLTFweFwiLCBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Q29va2llcy5nZXQoXCJmaXJzdF9uYW1lXCIpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvb2tpZXMuZ2V0KFwibGFzdF9uYW1lXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6IFwiIzRDQUY1MFwiIH19IGNsYXNzTmFtZT1cImNvbC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAg2YXYr9mK2LFcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWF1dG9cIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMyVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vaHJlZj17eyBwYXRobmFtZTogXCIvYWJvdXRcIiwgcXVlcnk6IHsgbmFtZTogXCJ0ZXN0XCIgfSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9VcGRhdGVQcm9maWxlQVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZXBsYWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwibmkgbmktc2V0dGluZ3MtZ2Vhci02NVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAvL2hyZWY9e3sgcGF0aG5hbWU6IFwiL2Fib3V0XCIsIHF1ZXJ5OiB7IG5hbWU6IFwidGVzdFwiIH0gfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvQ29tcGFueXNTdGF0aXN0aWNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8vIHJlcGxhY2VcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSBcIi9Db21wYW55c1N0YXRpc3RpY3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIm5hdi1saW5rIGFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibmF2LWxpbmsgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09IFwiL0NvbXBhbnlzU3RhdGlzdGljc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHsgYmFja2dyb3VuZENvbG9yOiBcIiNjN2U0YWVcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibmkgbmktY2hhcnQtcGllLTM1IHRleHQtb3JhbmdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LWxpbmstdGV4dFwiPtil2K3Ytdin2KbZitin2Kog2KfZhNi02LHZg9in2Ko8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbXBhbnlzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSBcIi9jb21wYW55c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwibmF2LWxpbmsgYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJuYXYtbGluayBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvY29tcGFueXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7IGJhY2tncm91bmRDb2xvcjogXCIjYzdlNGFlXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm5pIG5pLWJ1aWxkaW5nIHRleHQtaW5mb1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi1saW5rLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAg2KXYr9in2LHYqSDYp9mE2LTYsdmD2KfYqiDZiNin2YTZg9mI2KjZiNmG2KfYqlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL0Rpc3RyaWJ1dGVDb3Vwb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSBcIi9EaXN0cmlidXRlQ291cG9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwibmF2LWxpbmsgYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJuYXYtbGluayBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvRGlzdHJpYnV0ZUNvdXBvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7IGJhY2tncm91bmRDb2xvcjogXCIjYzdlNGFlXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm5pIG5pLXRhZyB0ZXh0LWRhbmdlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi1saW5rLXRleHRcIj7Ytdix2YEg2KfZhNmD2YjYqNmI2YbYp9iqPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9OZWVkc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvTmVlZHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIm5hdi1saW5rIGFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibmF2LWxpbmsgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09IFwiL05lZWRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8geyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2M3ZTRhZVwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoge31cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJuaSBuaS1hcmNoaXZlLTIgXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LWxpbmstdGV4dFwiPtil2K/Yp9ix2Kkg2KfZhNil2K3YqtmK2KfYrNin2Ko8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1VzZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSBcIi9Vc2Vyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwibmF2LWxpbmsgYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJuYXYtbGluayBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvVXNlcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7IGJhY2tncm91bmRDb2xvcjogXCIjYzdlNGFlXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm5pIG5pLXNpbmdsZS0wMiB0ZXh0LXByaW1hcnlcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtbGluay10ZXh0XCI+2KzZhdmK2Lkg2KfZhNmF2LPYqtmB2YrYr9mK2YY8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1JlZ2lzdGVyVXNlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvUmVnaXN0ZXJVc2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJuYXYtbGluayBhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5hdi1saW5rIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSBcIi9SZWdpc3RlclVzZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7IGJhY2tncm91bmRDb2xvcjogXCIjYzdlNGFlXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm5pIG5pLWNpcmNsZS0wOCBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtbGluay10ZXh0XCI+2KrYs9is2YrZhCDZhdiz2KrZgdmK2K88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL0NDQVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvQ0NBXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJuYXYtbGluayBhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5hdi1saW5rIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSBcIi9DQ0FcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7IGJhY2tncm91bmRDb2xvcjogXCIjYzdlNGFlXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm5pIG5pLWNpcmNsZS0wOCBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtbGluay10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAg2KfZhNiv2YjZhCDZiNin2YTZhdiv2YYg2YjYp9mE2YXZhtin2LfZglxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL0FwcHJvdmVVc2Vyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvQXBwcm92ZVVzZXJzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJuYXYtbGluayBhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5hdi1saW5rIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSBcIi9BcHByb3ZlVXNlcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7IGJhY2tncm91bmRDb2xvcjogXCIjYzdlNGFlXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm5pIG5pLWNpcmNsZS0wOCBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtbGluay10ZXh0XCI+2KXYudiq2YXYp9ivINin2YTZhdiz2KrZgdmK2K/ZitmGPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9NYW5kb2Jlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvTWFuZG9iZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIm5hdi1saW5rIGFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibmF2LWxpbmsgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09IFwiL01hbmRvYmVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8geyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2M3ZTRhZVwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoge31cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJuaSBuaS1icmllZmNhc2UtMjQgdGV4dC1wcmltYXJ5IFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi1saW5rLXRleHRcIj7YrNmF2YrYuSDYp9mE2KzZhdi52YrYp9iqPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9SZWdpc3Rlck1hbmRvYmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09IFwiL1JlZ2lzdGVyTWFuZG9iZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwibmF2LWxpbmsgYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJuYXYtbGluayBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvUmVnaXN0ZXJNYW5kb2JlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8geyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2M3ZTRhZVwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoge31cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJuaSBuaS1icmllZmNhc2UtMjQgXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LWxpbmstdGV4dFwiPtiq2LPYrNmK2YQg2KzZhdi52YrYqTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvQXBwcm92ZU1hbmRvYmVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSBcIi9BcHByb3ZlTWFuZG9iZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIm5hdi1saW5rIGFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibmF2LWxpbmsgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09IFwiL0FwcHJvdmVNYW5kb2Jlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHsgYmFja2dyb3VuZENvbG9yOiBcIiNjN2U0YWVcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibmkgbmktYnJpZWZjYXNlLTI0IFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi1saW5rLXRleHRcIj7Ypdi52KrZhdin2K8g2KzZhdi52YrYqTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvU3BvbnNvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvU3BvbnNvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwibmF2LWxpbmsgYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJuYXYtbGluayBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvU3BvbnNvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHsgYmFja2dyb3VuZENvbG9yOiBcIiNjN2U0YWVcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibmkgbmktYnJpZWZjYXNlLTI0IFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi1saW5rLXRleHRcIj7Yp9mE2K/Yp9i52YXZitmGPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGxvZ291dCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL01hbmFnZW1lbnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBzcmM9e1wiL2xvZ28ucG5nXCJ9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYigyNDUsMjQ2LDI0OClcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+2KfZhNiv2LnZhSDYp9mE2YHZhtmKPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPklORk9AR1VUVVJFU0FHRVMuQ09NPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkgOiBDb29raWVzLmdldChcIlVzZXJUeXBlXCIpID09IFwiQ29tcGFueVwiID8gKFxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17XCIvbG9nby5wbmdcIn0gLz5cclxuICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTAlXCIsIGJvcmRlclJhZGl1czogXCIzMHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17Q29va2llcy5nZXQoXCJwcm9maWxlX3BpY1wiKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiLTFweFwiLCBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge0Nvb2tpZXMuZ2V0KFwiZmlyc3RfbmFtZVwiKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIENvb2tpZXMuZ2V0KFwibGFzdF9uYW1lXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiBcIiM0Q0FGNTBcIiB9fSBjbGFzc05hbWU9XCJjb2wtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDYtNix2YPYqVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvL2hyZWY9e3sgcGF0aG5hbWU6IFwiL2Fib3V0XCIsIHF1ZXJ5OiB7IG5hbWU6IFwidGVzdFwiIH0gfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL1VwZGF0ZVByb2ZpbGVDXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZXBsYWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YT7Yqti52K/ZitmEPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgIC8vaHJlZj17eyBwYXRobmFtZTogXCIvYWJvdXRcIiwgcXVlcnk6IHsgbmFtZTogXCJ0ZXN0XCIgfSB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvQ29tcGFueVN0YXRpc3RpY3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlcGxhY2VcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvQ29tcGFueVN0YXRpc3RpY3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJuYXYtbGluayBhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJuYXYtbGluayBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvQ29tcGFueVN0YXRpc3RpY3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8geyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2M3ZTRhZVwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IHt9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibmkgbmktY2hhcnQtcGllLTM1IHRleHQtb3JhbmdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi1saW5rLXRleHRcIj7Ypdit2LXYp9im2YrYp9iqPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbXBhbnlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09IFwiL2NvbXBhbnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJuYXYtbGluayBhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJuYXYtbGluayBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvY29tcGFueVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7IGJhY2tncm91bmRDb2xvcjogXCIjYzdlNGFlXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDoge31cclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJuaSBuaS1idWlsZGluZyB0ZXh0LWluZm9cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2LWxpbmstdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINil2K/Yp9ix2Kkg2KfZhNmB2LHZiNi5INmI2KfZhNmD2YjYqNmI2YbYp9iqXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvQ29tcGFueVNwb25zb3JzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSBcIi9Db21wYW55U3BvbnNvcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJuYXYtbGluayBhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJuYXYtbGluayBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvQ29tcGFueVNwb25zb3JzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IHsgYmFja2dyb3VuZENvbG9yOiBcIiNjN2U0YWVcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7fVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm5pIG5pLWJ1aWxkaW5nIHRleHQtaW5mb1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtbGluay10ZXh0XCI+INin2YTYr9in2LnZhdmK2YY8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjk1JVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjUzcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBcInJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGxvZ291dCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICDYqtiz2KzZitmEINin2YTYrtix2YjYrFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdlwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e1wiL2xvZ28ucG5nXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fSBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwJVwiLCBib3JkZXJSYWRpdXM6IFwiMzBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e0Nvb2tpZXMuZ2V0KFwicHJvZmlsZV9waWNcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLThcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIi0xcHhcIiwgZm9udFdlaWdodDogXCJib2xkXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtDb29raWVzLmdldChcImZpcnN0X25hbWVcIikgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBDb29raWVzLmdldChcImxhc3RfbmFtZVwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogXCIjNENBRjUwXCIgfX0gY2xhc3NOYW1lPVwiY29sLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAg2KzZhdi52YrYqVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvL2hyZWY9e3sgcGF0aG5hbWU6IFwiL2Fib3V0XCIsIHF1ZXJ5OiB7IG5hbWU6IFwidGVzdFwiIH0gfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL1VwZGF0ZVByb2ZpbGVNXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZXBsYWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YT7Yqti52K/ZitmEPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgIC8vaHJlZj17eyBwYXRobmFtZTogXCIvYWJvdXRcIiwgcXVlcnk6IHsgbmFtZTogXCJ0ZXN0XCIgfSB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvTXlVc2Vyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVwbGFjZVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSBcIi9NeVVzZXJzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwibmF2LWxpbmsgYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibmF2LWxpbmsgXCJcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09IFwiL015VXNlcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8geyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2M3ZTRhZVwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IHt9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibmkgbmktY2hhcnQtcGllLTM1IHRleHQtb3JhbmdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi1saW5rLXRleHRcIj7Yp9mE2YXYs9iq2YHZitiv2YrZhjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9SZWdpc3Rlcl9Vc2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSBcIi9SZWdpc3Rlcl9Vc2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwibmF2LWxpbmsgYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibmF2LWxpbmsgXCJcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09IFwiL1JlZ2lzdGVyX1VzZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8geyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2M3ZTRhZVwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IHt9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibmkgbmktYnVpbGRpbmcgdGV4dC1pbmZvXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi1saW5rLXRleHRcIj4g2KrYs9is2YrZhCDZhdiz2KrZgdmK2K88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvQXBwcm92ZVVzZXJzTVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gXCIvQXBwcm92ZVVzZXJzTVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIm5hdi1saW5rIGFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5hdi1saW5rIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSBcIi9BcHByb3ZlVXNlcnNNXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IHsgYmFja2dyb3VuZENvbG9yOiBcIiNjN2U0YWVcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7fVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm5pIG5pLWJ1aWxkaW5nIHRleHQtaW5mb1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXYtbGluay10ZXh0XCI+INil2LnYqtmF2KfYryDYp9mE2YXYs9iq2YHZitiv2YrZhjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiOTUlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiNTNweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IFwicmlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbG9nb3V0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgINiq2LPYrNmK2YQg2KfZhNiu2LHZiNisXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7LyogRGl2aWRlciAqL31cclxuXHJcbiAgICAgICAgICAgIHsvKiBIZWFkaW5nICovfVxyXG5cclxuICAgICAgICAgICAgey8qIE5hdmlnYXRpb24gKi99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZG1pbl9uYXY7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBZG1pbl9uYXYgZnJvbSBcIi4vQWRtaW5fbmF2XCI7XHJcbmltcG9ydCBIZWFkZXJOYXYgZnJvbSBcIi4vSGVhZGVyTmF2XCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XHJcbmltcG9ydCBOZXdDb3Vib25Gb3JtIGZyb20gXCIuL05ld0NvdWJvbkZvcm1cIjtcclxuaW1wb3J0IEFkZENvdWJvbnNGb3JtIGZyb20gXCIuL0FkZENvdWJvbnNGb3JtXCI7XHJcbmltcG9ydCBhcGkgZnJvbSBcIi4uL3NlcnZpY2VzL0FwaVwiO1xyXG5cclxuaW1wb3J0IHVzZUF1dGgsIHsgUHJvdGVjdFJvdXRlIH0gZnJvbSBcIi4uL2NvbnRleHRzL2F1dGguanNcIjtcclxuaW1wb3J0IHsgR2V0Q291cG9uc0J5YnJhbmNoIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaV9nZXRcIjtcclxuXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgU2tlbGV0b24gZnJvbSBcInJlYWN0LWxvYWRpbmctc2tlbGV0b25cIjtcclxuaW1wb3J0IHsgdXNlQWxlcnQgfSBmcm9tIFwicmVhY3QtYWxlcnRcIjtcclxuXHJcbmltcG9ydCB7IG11dGF0ZSB9IGZyb20gXCJzd3JcIjtcclxuXHJcbmNvbnN0IEJyYW5jaENvdWJvblRhYmxlID0gKHtcclxuICBicmFuY2hfaWQsXHJcbiAgQnJhY25oQ29kZSxcclxuICBjb21wYW55TmFtZSxcclxuICBCcmFuY2huYW1lLFxyXG4gIHNldENob29zZSxcclxuICBsaXN0T2ZCcmFuY2hlcyxcclxuICBGdWxsRGVzYyxcclxuICBsb2dvLFxyXG4gIGJuYW1lLFxyXG4gIGJwaG9uZSxcclxufSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGFsZXJ0ID0gdXNlQWxlcnQoKTtcclxuXHJcbiAgY29uc3QgeyB1c2VyLCBpc0F1dGhlbnRpY2F0ZWQsIGxvYWRpbmcgfSA9IHVzZUF1dGgoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5DdXJyZW50Y2F0ZWdvcnkgPSBcIlwiO1xyXG4gICAgaWYgKCFpc0F1dGhlbnRpY2F0ZWQgJiYgIWxvYWRpbmcpIFJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gIH0sIFtsb2FkaW5nLCBpc0F1dGhlbnRpY2F0ZWRdKTtcclxuXHJcbiAgY29uc29sZS5sb2coXCJoZWVlcmVcIik7XHJcbiAgY29uc29sZS5sb2coY29tcGFueU5hbWUpO1xyXG5cclxuICBjb25zb2xlLmxvZyhsaXN0T2ZCcmFuY2hlcyk7XHJcbiAgY29uc29sZS5sb2coXCJjb21wYW55IGJyYW5jaGVzXCIpO1xyXG5cclxuICBjb25zdCBbdGhlU2VjdGlvbl9pZCwgc2V0dGhlU2VjdGlvbl9pZF0gPSB1c2VTdGF0ZSgwKTtcclxuICBmdW5jdGlvbiBzbGVlcChtcykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XHJcbiAgfVxyXG4gIGNvbnN0IFt1cHBhZ2UsIHNldHVwcGFnZV0gPSB1c2VTdGF0ZShcInRcIik7XHJcbiAgY29uc3QgeyBkYXRhLCBpc0xvYWRpbmcsIGlzRXJyb3IgfSA9IEdldENvdXBvbnNCeWJyYW5jaChicmFuY2hfaWQsIHVwcGFnZSk7XHJcblxyXG4gIGNvbnN0IHJlc3VsdHMgPSBpc0xvYWRpbmcgPyBmYWxzZSA6IGRhdGEuZGF0YTtcclxuXHJcbiAgY29uc29sZS5sb2cocmVzdWx0cyk7XHJcbiAgY29uc3Qgc2hvd1NrZWxldG9uID0gaXNMb2FkaW5nIHx8IGxvYWRpbmc7XHJcblxyXG4gIGNvbnN0IFtuZXdDb21wYW55LCBzZXRuZXdDb21wYW55XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbU2VjdGlvbl9pZCwgc2V0U2VjdGlvbl9pZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXR2YWx1ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2NvdWJvbk5hbWUsIHNldGNvdWJvbk5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NvdWJvblR5cGUsIHNldGNvdWJvblR5cGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBbTW9kZWxTdGF0ZSwgc2V0TW9kZWxTdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2ZpbmFsQnJhbmNoZXMsIHNldGZpbmFsQnJhbmNoZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIC8vY29uc3QgW3RoZUNvdXBvbkJyYW5jaGVzLCBzZXR0aGVDb3Vwb25CcmFuY2hlc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IFtlZGl0LCBzZXRlZGl0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZWRpdE1vZGVsLCBzZXRlZGl0TW9kZWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBbQ29tcGFueSwgc2V0Q29tcGFueV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGZ1bmN0aW9uIEdvQmFja0FuZFRyaWdnZXJNdXRhdGlvbigpIHtcclxuICAgIC8vbXV0YXRlKFwiYXBpL0dldENvdXBvbnNCeWJyYW5jaD9icmFuY2hfaWQ9XCIgKyBicmFuY2hfaWQpO1xyXG4gICAgc2V0dXBwYWdlKHVwcGFnZSArIFwicVwiKTtcclxuICAgIHNldGVkaXQoZmFsc2UpO1xyXG4gICAgc2V0bmV3Q29tcGFueShmYWxzZSk7XHJcbiAgICAvL3NldG5ld0NvbXBhbnkoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2hhbmdlbmV3Q29tcGFueSgpIHtcclxuICAgIHNldGVkaXQoZmFsc2UpO1xyXG4gICAgc2V0bmV3Q29tcGFueShmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGFuZ2VCcmFuY2hlcyh2YWx1ZSwgaWQpIHtcclxuICAgIGxldCBmYXZvcml0ZSA9IGZpbmFsQnJhbmNoZXM7XHJcbiAgICBjb25zb2xlLmxvZyhmYXZvcml0ZSk7XHJcbiAgICBsZXQgZiA9IFtdO1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGZhdm9yaXRlLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBsZXQgc3MgPSBmYXZvcml0ZVtpbmRleF0uc3RhdHVzO1xyXG4gICAgICBpZiAoZmF2b3JpdGVbaW5kZXhdLmlkID09IGlkKSB7XHJcbiAgICAgICAgc3MgPSB2YWx1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIHRlbXBicmFuY2ggPSB7XHJcbiAgICAgICAgaWQ6IGZhdm9yaXRlW2luZGV4XS5pZCxcclxuICAgICAgICBicmFuY2hfbmFtZTogZmF2b3JpdGVbaW5kZXhdLmJyYW5jaF9uYW1lLFxyXG4gICAgICAgIHN0YXR1czogc3MsXHJcbiAgICAgICAgU2VjdGlvbl9pZDogZmF2b3JpdGVbaW5kZXhdLlNlY3Rpb25faWQsXHJcbiAgICAgIH07XHJcbiAgICAgIGYucHVzaCh0ZW1wYnJhbmNoKTtcclxuICAgIH1cclxuICAgIHNldGZpbmFsQnJhbmNoZXMoZik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBVcGRhdGVDb3Vib250TmFtZSgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XHJcbiAgICBsZXQgZGQgPSB7XHJcbiAgICAgIFNlY3Rpb25faWQsXHJcbiAgICAgIGNvdWJvbk5hbWUsXHJcbiAgICB9O1xyXG4gICAgYXBpLnBvc3QoXCJhcGkvVXBkYXRlQ291Ym9udE5hbWVcIiwgZGQpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgIGFsZXJ0LnNob3coXCLYqtmFINio2YbYrNin2K1cIiwge1xyXG4gICAgICAgIHRpbWVvdXQ6IDIwMDAsXHJcbiAgICAgICAgdHlwZTogXCJzdWNjZXNzXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgICBHb0JhY2tBbmRUcmlnZ2VyTXV0YXRpb24oKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gU2F2ZUJyYW5jaGVzKGRhdGEpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XHJcbiAgICBsZXQgZGQgPSB7XHJcbiAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICB9O1xyXG4gICAgYXBpLnBvc3QoXCJhcGkvQ2hhbmdlQ291Ym9uQnJhbmNoZXNcIiwgZGQpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgIGFsZXJ0LnNob3coXCLYqtmFINio2YbYrNin2K1cIiwge1xyXG4gICAgICAgIHRpbWVvdXQ6IDIwMDAsXHJcbiAgICAgICAgdHlwZTogXCJzdWNjZXNzXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgICBHb0JhY2tBbmRUcmlnZ2VyTXV0YXRpb24oKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBhc3luYyBmdW5jdGlvbiBvcGVuTW9kYWwoTW9kYWxEYXRhKSB7XHJcbiAgICBhd2FpdCBhcGlcclxuICAgICAgLmdldChcImFwaS9HZXRDb3Vwb25CcmFuY2hlcz9TZWN0aW9uX2lkPVwiICsgTW9kYWxEYXRhKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgbGV0IHRoZUNvdXBvbkJyYW5jaGVzID0gcmVzLmRhdGE7XHJcbiAgICAgICAgbGV0IGZhdm9yaXRlID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxpc3RPZkJyYW5jaGVzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgbGV0IGVsZW1lbnQgPSBsaXN0T2ZCcmFuY2hlc1tpbmRleF07XHJcbiAgICAgICAgICBsZXQgc3MgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICBmb3IgKGxldCBpbmRleDIgPSAwOyBpbmRleDIgPCB0aGVDb3Vwb25CcmFuY2hlcy5sZW5ndGg7IGluZGV4MisrKSB7XHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50MiA9IHRoZUNvdXBvbkJyYW5jaGVzW2luZGV4Ml07XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50Mi5CcmFuY2hfaWQgPT0gZWxlbWVudC5pZCkge1xyXG4gICAgICAgICAgICAgIHNzID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHZhciB0ZW1wYnJhbmNoID0ge1xyXG4gICAgICAgICAgICBpZDogZWxlbWVudC5pZCxcclxuICAgICAgICAgICAgYnJhbmNoX25hbWU6IGVsZW1lbnQuYnJhbmNoX25hbWUsXHJcbiAgICAgICAgICAgIHN0YXR1czogc3MsXHJcbiAgICAgICAgICAgIFNlY3Rpb25faWQ6IE1vZGFsRGF0YSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBmYXZvcml0ZS5wdXNoKHRlbXBicmFuY2gpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGV0ZXN0XCIpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhmYXZvcml0ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGV0ZXN0XCIpO1xyXG5cclxuICAgICAgICBzZXRmaW5hbEJyYW5jaGVzKGZhdm9yaXRlKTtcclxuXHJcbiAgICAgICAgc2V0TW9kZWxTdGF0ZSh0cnVlKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codGhlQ291cG9uQnJhbmNoZXMpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgY29sIFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXIgYmctdHJhbnNwYXJlbnRcIj5cclxuICAgICAgICAgICAgICB7bmV3Q29tcGFueSA9PSBmYWxzZSA/IChcclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxvYXQ6IFwicmlnaHRcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldENob29zZShcImJyYW5jaGVzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWljb24gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJidG4taW5uZXItLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYXJyb3ctcmlnaHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjAuOGVtXCIsIGRpc3BsYXk6IFwiaW5saW5lXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAg2KfZhNmD2YjYqNmI2YbYp9iqIDpcclxuICAgICAgICAgICAgICAgICAgPC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY2xlYXI6IFwiYm90aFwiIH19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge25ld0NvbXBhbnkgPT0gZmFsc2UgPyAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmNGYwZjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIyMHB4XCIsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiNSVcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvd1wiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17bG9nb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiOHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgY29sb3I6IFwiIzIzNEI1NVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29tcGFueU5hbWV9ICh7QnJhbmNobmFtZX0pXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cD57RnVsbERlc2N9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IGNvbG9yOiBcIiMyMzRCNTVcIiB9fT4g2YXYs9ik2YjZhCDYp9mE2YHYsdi5PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHA+2KfZhNil2LPZhToge2JuYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwPtin2YTYrNmI2KfZhDoge2JwaG9uZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsb2F0OiBcImxlZnRcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldG5ld0NvbXBhbnkodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldENob29zZShcImJyYW5jaGVzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1pY29uIGJ0bi1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJidG4taW5uZXItLWljb25cIj7YpdmG2LTYp9ihINmD2YjYqNmI2YYg2KzYr9mK2K88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7cmVzdWx0cyA/IChcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzID09IFwiTm9fZGF0YVwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmbG9hdDogXCJyaWdodFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2hvb3NlKFwiYnJhbmNoZXNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4taWNvbiBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ0bi1pbm5lci0taWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1hcnJvdy1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMC44ZW1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgINin2YTZg9mI2KjZiNmG2KfYqiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNsZWFyOiBcImJvdGhcIiB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IG1hcmdpblRvcDogXCIwLjhlbVwiIH19PtmE2Kcg2YrZiNis2K8g2KjZitin2YbYp9iqPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgYWxpZ24taXRlbXMtY2VudGVyIHRhYmxlLWZsdXNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9XCJ0aGVhZC1saWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGRhdGEtc29ydD1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg2KfZhNil2LPZhVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGRhdGEtc29ydD1cInN0YXR1c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICDYp9mE2YbZiNi5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgZGF0YS1zb3J0PVwiY29tcGxldGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICDYp9mE2YLZitmF2KlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBkYXRhLXNvcnQ9XCJjb21wbGV0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINin2YTZg9mF2YrYqVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGRhdGEtc29ydD1cImNvbXBsZXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg2KfZhNi12YTYp9it2YrYqVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHkgY2xhc3NOYW1lPVwibGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXN1bHRzLm1hcCgoY291Ym9uLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3Vib24uY2F0ZWdvcnkgPT0gbG9jYWxTdG9yYWdlLkN1cnJlbnRjYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3Vib24udHlwZSA9PSBcIm9uZV9jb2RlXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2IoMTk0IDIyNCAxNjApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17eyBUZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3Vib24ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHNwYW49XCIyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2IoMTk0IDIyNCAxNjApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz7Zg9mI2K8g2YXZhti12KfYqiAo2KXYs9iq2K7Yr9in2YUg2YXYsdipINmI2KfYrdiv2KkpPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDE5NCAyMjQgMTYwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3Vib24uYW1vdW50IC0gMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDE5NCAyMjQgMTYwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3Vib24uZW5kfSDYtNmH2LFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sc3Bhbj1cIjJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDE5NCAyMjQgMTYwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFkZCBuZXdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VjdGlvbl9pZChjb3Vib24uU2VjdGlvbl9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Y291Ym9uTmFtZShjb3Vib24ubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Y291Ym9uVHlwZShjb3Vib24udHlwZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHZhbHVlKGNvdWJvbi52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0bmV3Q29tcGFueSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRlZGl0KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc2VsZWN0ZWQoY291Ym9uLm5hbWUsIGNvdWJvbi5hbW91bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDYpdi22KfZgdipINmD2YjYqNmI2YbYp9iqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNtb2RhbC1kZWZhdWx0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldGVkaXRNb2RlbCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWN0aW9uX2lkKGNvdWJvbi5TZWN0aW9uX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRjb3Vib25OYW1lKGNvdWJvbi5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg2KrYudiv2YrZhFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBjb3Vib24udHlwZSA9PSBcImFsbF9jb2RlXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2IoMTk0IDIyNCAxNjApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17eyBUZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3Vib24ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHNwYW49XCIyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2IoMTk0IDIyNCAxNjApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz7Zg9mI2K8g2YXZhti12KfYqiA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDE5NCAyMjQgMTYwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7ZhNinINmK2YbYqtmH2YogPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2IoMTk0IDIyNCAxNjApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdWJvbi5lbmR9INi02YfYsVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xzcGFuPVwiMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2IoMTk0IDIyNCAxNjApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNtb2RhbC1kZWZhdWx0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldGVkaXRNb2RlbCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWN0aW9uX2lkKGNvdWJvbi5TZWN0aW9uX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRjb3Vib25OYW1lKGNvdWJvbi5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg2KrYudiv2YrZhFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291Ym9uLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3Vib24udHlwZSA9PSBcImNhc2hcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZSBiYWRnZS1waWxsIGJhZGdlLWxnIGJhZGdlLXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImF2YXRhciBhdmF0YXItc20gcm91bmRlZC1jaXJjbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWcvaWNvbnMvY2FzaC5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI0MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IGNvdWJvbi50eXBlID09IFwiYmFza2V0XCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtcGlsbCBiYWRnZS1sZyBiYWRnZS1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhdmF0YXIgYXZhdGFyLXNtIHJvdW5kZWQtY2lyY2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1nL2ljb25zL2Jhc2tldC5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI0MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IGNvdWJvbi50eXBlID09IFwiZGlzY291bnRcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZSBiYWRnZS1waWxsIGJhZGdlLWxnIGJhZGdlLXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImF2YXRhciBhdmF0YXItc20gcm91bmRlZC1jaXJjbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWcvaWNvbnMvZGlzY291bnQuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjQwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdWJvbi50eXBlID09IFwiY2FzaFwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdWJvbi52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IGNvdWJvbi50eXBlID09IFwiYmFza2V0XCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291Ym9uLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogY291Ym9uLnR5cGUgPT0gXCJkaXNjb3VudFwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdWJvbi52YWx1ZX0lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdWJvbi5hbW91bnQgLSAxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3Vib24uZW5kfSDYtNmH2LFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZGQgbmV3XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlY3Rpb25faWQoY291Ym9uLlNlY3Rpb25faWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldGNvdWJvbk5hbWUoY291Ym9uLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldGNvdWJvblR5cGUoY291Ym9uLnR5cGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR2YWx1ZShjb3Vib24udmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldG5ld0NvbXBhbnkodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0ZWRpdCh0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zZWxlY3RlZChjb3Vib24ubmFtZSwgY291Ym9uLmFtb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINil2LbYp9mB2Kkg2YPZiNio2YjZhtin2KpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI21vZGFsLWRlZmF1bHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0ZWRpdE1vZGVsKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuTW9kYWwoY291Ym9uLlNlY3Rpb25faWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDYp9mE2YHYsdmI2LlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI21vZGFsLWRlZmF1bHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0ZWRpdE1vZGVsKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlY3Rpb25faWQoY291Ym9uLlNlY3Rpb25faWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldGNvdWJvbk5hbWUoY291Ym9uLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDYqti52K/ZitmEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5DdXJyZW50Y2F0ZWdvcnkgPSBjb3Vib24uY2F0ZWdvcnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sc3Bhbj1cIjdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjZmFmOGY4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBUZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291Ym9uLmNhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdWJvbi50eXBlID09IFwib25lX2NvZGVcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYigxOTQgMjI0IDE2MClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7IFRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdWJvbi5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sc3Bhbj1cIjJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYigxOTQgMjI0IDE2MClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPtmD2YjYryDZhdmG2LXYp9iqICjYpdiz2KrYrtiv2KfZhSDZhdix2Kkg2YjYp9it2K/YqSk8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2IoMTk0IDIyNCAxNjApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdWJvbi5hbW91bnQgLSAxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2IoMTk0IDIyNCAxNjApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdWJvbi5lbmR9INi02YfYsVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xzcGFuPVwiMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2IoMTk0IDIyNCAxNjApXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWRkIG5ld1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWN0aW9uX2lkKGNvdWJvbi5TZWN0aW9uX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRjb3Vib25OYW1lKGNvdWJvbi5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRjb3Vib25UeXBlKGNvdWJvbi50eXBlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR2YWx1ZShjb3Vib24udmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldG5ld0NvbXBhbnkodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0ZWRpdCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3NlbGVjdGVkKGNvdWJvbi5uYW1lLCBjb3Vib24uYW1vdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg2KXYttin2YHYqSDZg9mI2KjZiNmG2KfYqlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjbW9kYWwtZGVmYXVsdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRlZGl0TW9kZWwodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VjdGlvbl9pZChjb3Vib24uU2VjdGlvbl9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Y291Ym9uTmFtZShjb3Vib24ubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINiq2LnYr9mK2YRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogY291Ym9uLnR5cGUgPT0gXCJhbGxfY29kZVwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDE5NCAyMjQgMTYwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3sgVGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291Ym9uLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xzcGFuPVwiMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDE5NCAyMjQgMTYwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+2YPZiNivINmF2YbYtdin2KogPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYigxOTQgMjI0IDE2MClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+2YTYpyDZitmG2KrZh9mKIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDE5NCAyMjQgMTYwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3Vib24uZW5kfSDYtNmH2LFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sc3Bhbj1cIjJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDE5NCAyMjQgMTYwKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjbW9kYWwtZGVmYXVsdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRlZGl0TW9kZWwodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VjdGlvbl9pZChjb3Vib24uU2VjdGlvbl9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Y291Ym9uTmFtZShjb3Vib24ubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINiq2LnYr9mK2YRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdWJvbi5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291Ym9uLnR5cGUgPT0gXCJjYXNoXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtcGlsbCBiYWRnZS1sZyBiYWRnZS1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhdmF0YXIgYXZhdGFyLXNtIHJvdW5kZWQtY2lyY2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1nL2ljb25zL2Nhc2guanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjQwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBjb3Vib24udHlwZSA9PSBcImJhc2tldFwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLXBpbGwgYmFkZ2UtbGcgYmFkZ2Utc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXZhdGFyIGF2YXRhci1zbSByb3VuZGVkLWNpcmNsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltZy9pY29ucy9iYXNrZXQuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjQwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBjb3Vib24udHlwZSA9PSBcImRpc2NvdW50XCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtcGlsbCBiYWRnZS1sZyBiYWRnZS1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhdmF0YXIgYXZhdGFyLXNtIHJvdW5kZWQtY2lyY2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1nL2ljb25zL2Rpc2NvdW50LmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI0MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjQwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3Vib24udHlwZSA9PSBcImNhc2hcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3Vib24udmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBjb3Vib24udHlwZSA9PSBcImJhc2tldFwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdWJvbi52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IGNvdWJvbi50eXBlID09IFwiZGlzY291bnRcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3Vib24udmFsdWV9JVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3Vib24uYW1vdW50IC0gMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3Vib24uZW5kfSDYtNmH2LFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFkZCBuZXdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VjdGlvbl9pZChjb3Vib24uU2VjdGlvbl9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Y291Ym9uTmFtZShjb3Vib24ubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Y291Ym9uVHlwZShjb3Vib24udHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dmFsdWUoY291Ym9uLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRuZXdDb21wYW55KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldGVkaXQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zZWxlY3RlZChjb3Vib24ubmFtZSwgY291Ym9uLmFtb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINil2LbYp9mB2Kkg2YPZiNio2YjZhtin2KpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI21vZGFsLWRlZmF1bHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbk1vZGFsKGNvdWJvbi5TZWN0aW9uX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg2KfZhNmB2LHZiNi5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNtb2RhbC1kZWZhdWx0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldGVkaXRNb2RlbCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWN0aW9uX2lkKGNvdWJvbi5TZWN0aW9uX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRjb3Vib25OYW1lKGNvdWJvbi5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg2KrYudiv2YrZhFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICBcItmE2Kcg2YrZiNis2K8g2YPZiNio2YjZhtin2KpcIlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAge3Nob3dTa2VsZXRvbiA/IDxTa2VsZXRvbiBoZWlnaHQ9ezQwfSBjb3VudD17MTB9IC8+IDogXCJcIn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICB7ZWRpdCA9PSBmYWxzZSA/IChcclxuICAgICAgICAgICAgICAgICAgPE5ld0NvdWJvbkZvcm1cclxuICAgICAgICAgICAgICAgICAgICBCcmFuY2hfaWQ9e2JyYW5jaF9pZH1cclxuICAgICAgICAgICAgICAgICAgICBCcmFjbmhDb2RlPXtCcmFjbmhDb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgIEdvQmFja0FuZFRyaWdnZXJNdXRhdGlvbj17R29CYWNrQW5kVHJpZ2dlck11dGF0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZW5ld0NvbXBhbnk9e2NoYW5nZW5ld0NvbXBhbnl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8QWRkQ291Ym9uc0Zvcm1cclxuICAgICAgICAgICAgICAgICAgICBTZWN0aW9uX2lkPXtTZWN0aW9uX2lkfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvdWJvbk5hbWU9e2NvdWJvbk5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgQnJhY25oQ29kZT17QnJhY25oQ29kZX1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgR29CYWNrQW5kVHJpZ2dlck11dGF0aW9uPXtHb0JhY2tBbmRUcmlnZ2VyTXV0YXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlbmV3Q29tcGFueT17Y2hhbmdlbmV3Q29tcGFueX1cclxuICAgICAgICAgICAgICAgICAgICBjb3Vib25UeXBlPXtjb3Vib25UeXBlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiBBcmdvbiBNT0RFTCAqL31cclxuICAgICAge2VkaXRNb2RlbCA/IChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzcz17TW9kZWxTdGF0ZSA/IFwibW9kYWwgZmFkZSBzaG93XCIgOiBcIm1vZGFsIGZhZGUgXCJ9XHJcbiAgICAgICAgICBpZD1cIm1vZGFsLWRlZmF1bHRcIlxyXG4gICAgICAgICAgdGFiaW5kZXg9XCItMVwiXHJcbiAgICAgICAgICByb2xlPVwiZGlhbG9nXCJcclxuICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLWRlZmF1bHRcIlxyXG4gICAgICAgICAgYXJpYS1oaWRkZW49e01vZGVsU3RhdGUgPyBcImZhbHNlXCIgOiBcInRydWVcIn1cclxuICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgTW9kZWxTdGF0ZVxyXG4gICAgICAgICAgICAgID8geyBkaXNwbGF5OiBcImJsb2NrXCIsIHBhZGRpbmdSaWdodDogXCIxNHB4XCIgfVxyXG4gICAgICAgICAgICAgIDogeyBkaXNwbGF5OiBcIm5vbmVcIiB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzcz1cIm1vZGFsLWRpYWxvZyBtb2RhbC0gbW9kYWwtZGlhbG9nLWNlbnRlcmVkIG1vZGFsLVwiXHJcbiAgICAgICAgICAgIHJvbGU9XCJkb2N1bWVudFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGg2IGNsYXNzPVwibW9kYWwtdGl0bGVcIiBpZD1cIm1vZGFsLXRpdGxlLWRlZmF1bHRcIj5cclxuICAgICAgICAgICAgICAgICAg2KrYudiv2YrZhCA6IHtjb3Vib25OYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRNb2RlbFN0YXRlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+w5c8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgZGlyPVwicnRsXCIgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIiBzdHlsZT17eyB0ZXh0QWxpZ246IFwicmlnaHRcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtbGFiZWxcIj7Ypdiz2YUg2KfZhNmD2YjYqNmI2YY8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvdWJvbk5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRjb3Vib25OYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvdWJvbk5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi2KXYs9mFINin2YTZg9mI2KjZiNmGXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1saW5rIFwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZmxvYXQ6IFwicmlnaHRcIiB9fVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TW9kZWxTdGF0ZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgINil2LrZhNin2YJcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWxpbmsgXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBmbG9hdDogXCJsZWZ0XCIgfX1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIFVwZGF0ZUNvdWJvbnROYW1lKFNlY3Rpb25faWQsIGNvdWJvbk5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICDYrdmB2LhcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzPXtNb2RlbFN0YXRlID8gXCJtb2RhbCBmYWRlIHNob3dcIiA6IFwibW9kYWwgZmFkZSBcIn1cclxuICAgICAgICAgIGlkPVwibW9kYWwtZGVmYXVsdFwiXHJcbiAgICAgICAgICB0YWJpbmRleD1cIi0xXCJcclxuICAgICAgICAgIHJvbGU9XCJkaWFsb2dcIlxyXG4gICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtZGVmYXVsdFwiXHJcbiAgICAgICAgICBhcmlhLWhpZGRlbj17TW9kZWxTdGF0ZSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwifVxyXG4gICAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgICBNb2RlbFN0YXRlXHJcbiAgICAgICAgICAgICAgPyB7IGRpc3BsYXk6IFwiYmxvY2tcIiwgcGFkZGluZ1JpZ2h0OiBcIjE0cHhcIiB9XHJcbiAgICAgICAgICAgICAgOiB7IGRpc3BsYXk6IFwibm9uZVwiIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzPVwibW9kYWwtZGlhbG9nIG1vZGFsLSBtb2RhbC1kaWFsb2ctY2VudGVyZWQgbW9kYWwtXCJcclxuICAgICAgICAgICAgcm9sZT1cImRvY3VtZW50XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDYgY2xhc3M9XCJtb2RhbC10aXRsZVwiIGlkPVwibW9kYWwtdGl0bGUtZGVmYXVsdFwiPlxyXG4gICAgICAgICAgICAgICAgICDYp9mE2YHYsdmI2Lkg2KfZhNiq2Yog2YrZhdmD2YYg2LXYsdmBINin2YTZg9mI2KjZiNmG2KfYqiDYqNmH2KdcclxuICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImNsb3NlXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TW9kZWxTdGF0ZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPsOXPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICB7ZmluYWxCcmFuY2hlcy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtcmVzcG9uc2l2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9XCJ0aGVhZC1saWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJzb3J0XCIgZGF0YS1zb3J0PVwibmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINin2LPZhSDYp9mE2YHYsdi5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzb3J0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXNvcnQ9XCJidWRnZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHkgY2xhc3NOYW1lPVwibGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZpbmFsQnJhbmNoZXMubWFwKChsaXN0QnJhbmNoZXMsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnVkZ2V0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmbG9hdDogXCJyaWdodFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGlzdEJyYW5jaGVzLmJyYW5jaF9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xpc3RCcmFuY2hlcy5zdGF0dXMgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZUJyYW5jaGVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0QnJhbmNoZXMuaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDYpdmE2LrYp9ihXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlQnJhbmNoZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdEJyYW5jaGVzLmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg2KrZgdi52YrZhFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgXCLZhNinINmK2YjYrNivINio2YrYp9mG2KfYqlwiXHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAge3Nob3dTa2VsZXRvbiA/IDxTa2VsZXRvbiBoZWlnaHQ9ezQwfSBjb3VudD17MTB9IC8+IDogXCJcIn1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWxpbmsgXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBmbG9hdDogXCJyaWdodFwiIH19XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRNb2RlbFN0YXRlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAg2KXYutmE2KfZglxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tbGluayBcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZsb2F0OiBcImxlZnRcIiB9fVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRlc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZmluYWxCcmFuY2hlcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBmaW5hbEJyYW5jaGVzW2luZGV4XTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5zdGF0dXMgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXN0LnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgIFNhdmVCcmFuY2hlcyhmaW5hbEJyYW5jaGVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldE1vZGVsU3RhdGUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbGVydC5zaG93KFwi2YrYrNioINiq2YHYudmK2YQg2YHYsdi5INmI2KfYrdivINi52YTZiSDYp9mE2KPZgtmEXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dDogMjAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJkYW5nZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAg2K3Zgdi4XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHsvKiBBcmdvbiBNT0RFTCAqL31cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCcmFuY2hDb3Vib25UYWJsZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQWRkQ2lyY2xlT3V0bGluZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9BZGRDaXJjbGVPdXRsaW5lXCI7XHJcblxyXG5jb25zdCBCdXR0b25VcGxvYWRJbWFnZSA9ICh7IHR5cGVJbWFnZSwgb25DaGFuZ2UgfSkgPT4ge1xyXG4gIGNvbnN0IGlucHV0S2V5ID0gXCJ1cGxvYWQtcHJvZHVjdC1pbWFnZS1cIiArIHR5cGVJbWFnZTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidXBsb2FkLWltYWdlLWhvbGRlclwiPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcclxuICAgICAgICBpZD17aW5wdXRLZXl9XHJcbiAgICAgICAgbXVsdGlwbGU9e3R5cGVJbWFnZSAhPT0gXCJ0aHVtYm5haWxcIn1cclxuICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiaGlkZS11cGxvYWQtaW5wdXRcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2UgJiYgb25DaGFuZ2UoZSl9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFkZC1pY29uXCI+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2lucHV0S2V5fT5cclxuICAgICAgICAgIDxBZGRDaXJjbGVPdXRsaW5lSWNvbiBmb250U2l6ZT1cImxhcmdlXCIgY29sb3I9XCJwcmltYXJ5XCIgLz5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uVXBsb2FkSW1hZ2U7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7IC8vXHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XHJcbmltcG9ydCBhcGkgZnJvbSBcIi4uL3NlcnZpY2VzL0FwaVwiO1xyXG5pbXBvcnQgeyB1c2VBbGVydCB9IGZyb20gXCJyZWFjdC1hbGVydFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB1c2VBdXRoLCB7IFByb3RlY3RSb3V0ZSB9IGZyb20gXCIuLi9jb250ZXh0cy9hdXRoLmpzXCI7XHJcblxyXG5mdW5jdGlvbiBFZGl0Q29tcGFueUZvcm0oe1xyXG4gIGNoYW5nZW5ld0NvbXBhbnksXHJcbiAgYnJhbmNoLFxyXG4gIEdvQmFja0FuZFRyaWdnZXJNdXRhdGlvbixcclxuICBjb21wYW55TmFtZSxcclxuICBCcmFuY2huYW1lLFxyXG59KSB7XHJcbiAgY29uc3QgYWxlcnQgPSB1c2VBbGVydCgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCB7IHRvZ2dsZXIsIHNldHRvZ2dsZXIsIGxvYWRpbmcgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zdCBbc3Bpbm5lciwgc2V0c3Bpbm5lcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgZXJyb3JzIH0gPSB1c2VGb3JtKHtcclxuICAgIGRlZmF1bHRWYWx1ZXM6IHtcclxuICAgICAgYnJhbmNoTmFtZTogYnJhbmNoLmJyYW5jaF9uYW1lLFxyXG4gICAgICBicmFuY2hTaG9ydERlc2M6IGJyYW5jaC5TaG9ydERlc2MsXHJcbiAgICAgIGJyYW5jaEFkZHJlc3M6IGJyYW5jaC5BZGRyZXNzLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaWQgPSBicmFuY2guaWQ7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gKGZvcm1kYXRhKSA9PiB7XHJcbiAgICBmb3JtZGF0YSA9IHsgLi4uZm9ybWRhdGEsIGlkIH07XHJcblxyXG4gICAgY29uc29sZS5sb2coZm9ybWRhdGEpO1xyXG4gICAgc2V0c3Bpbm5lcih0cnVlKTtcclxuXHJcbiAgICBhcGlcclxuICAgICAgLnBvc3QoXCJhcGkvVXBkYXRlQnJhbmNoXCIsIGZvcm1kYXRhKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgIHNldHNwaW5uZXIoZmFsc2UpO1xyXG4gICAgICAgIGlmIChyZXMuZGF0YSA9PSBcInBob25lXCIpIHtcclxuICAgICAgICAgIGFsZXJ0LnNob3coXCLYsdmC2YUg2KfZhNis2YjYp9mEINmF2LPYqtiu2K/ZhSDZhdiz2KjZgtinXCIsIHtcclxuICAgICAgICAgICAgdGltZW91dDogMjAwMCxcclxuICAgICAgICAgICAgdHlwZTogXCJlcnJvclwiLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocmVzLmRhdGEgPiAwKSB7XHJcbiAgICAgICAgICBhbGVydC5zaG93KFwi2KrZhSDYqNmG2KzYp9itXCIsIHtcclxuICAgICAgICAgICAgdGltZW91dDogMjAwMCxcclxuICAgICAgICAgICAgdHlwZTogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIEdvQmFja0FuZFRyaWdnZXJNdXRhdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBhbGVydC5zaG93KFwiINiu2LfYp1wiICsgZXJyLCB7XHJcbiAgICAgICAgICB0aW1lb3V0OiAyMDAwLFxyXG4gICAgICAgICAgdHlwZTogXCJlcnJvclwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldHNwaW5uZXIoZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGgyPiB7Y29tcGFueU5hbWUgKyBCcmFuY2huYW1lfTwvaDI+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgZmxvYXQ6IFwicmlnaHRcIiB9fT5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIGNoYW5nZW5ld0NvbXBhbnkoKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBjbGFzcz1cImJ0biBidG4taWNvbiBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ0bi1pbm5lci0taWNvblwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWFycm93LXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxoMiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIwLjhlbVwiLCBkaXNwbGF5OiBcImlubGluZVwiIH19PlxyXG4gICAgICAgICAg2KrYudiv2YrZhCDYp9mE2YHYsdi5IDpcclxuICAgICAgICA8L2gyPlxyXG5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGNsZWFyOiBcImJvdGhcIiB9fT48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxicj48L2JyPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLXhsLTEyIGNvbC1tZC0xMlwiIHN0eWxlPXt7IGhlaWdodDogXCI1MHB4XCIgfX0+PC9kaXY+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cclxuICAgICAgICA8aDYgY2xhc3NOYW1lPVwiaGVhZGluZy1zbWFsbCB0ZXh0LW11dGVkIG1iLTRcIj7Zhdi52YTZiNmF2KfYqiDYp9mE2YHYsdi5PC9oNj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLWxnLTRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtbGFiZWxcIj7Ypdiz2YUg2KfZhNmB2LHYuTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiYnJhbmNoTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aDogMyxcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi2KXYs9mFINin2YTZgdix2LlcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7ZXJyb3JzLmJyYW5jaE5hbWUgJiYgZXJyb3JzLmJyYW5jaE5hbWUudHlwZSA9PT0gXCJyZXF1aXJlZFwiICYmIChcclxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19PtmH2LDYpyDYp9mE2K3ZgtmEINmF2LfZhNmI2Kg8L3A+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7ZXJyb3JzLmJyYW5jaE5hbWUgJiYgZXJyb3JzLmJyYW5jaE5hbWUudHlwZSA9PT0gXCJtaW5MZW5ndGhcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT7Yp9mE2KXYs9mFINin2YTZhdiv2K7ZhCDZgti12YrYsSDZhNmE2LrYp9mK2Kk8L3A+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtbGFiZWxcIj7ZiNi12YEg2YLYtdmK2LE8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImJyYW5jaFNob3J0RGVzY1wiXHJcbiAgICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aDogMyxcclxuICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IDEwMCxcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi2YjYtdmBINmC2LXZitixXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAge2Vycm9ycy5icmFuY2hTaG9ydERlc2MgJiZcclxuICAgICAgICAgICAgICAgIGVycm9ycy5icmFuY2hTaG9ydERlc2MudHlwZSA9PT0gXCJyZXF1aXJlZFwiICYmIChcclxuICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIgfX0+2YfYsNinINin2YTYrdmC2YQg2YXYt9mE2YjYqDwvcD5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge2Vycm9ycy5icmFuY2hTaG9ydERlc2MgJiZcclxuICAgICAgICAgICAgICAgIGVycm9ycy5icmFuY2hTaG9ydERlc2MudHlwZSA9PT0gXCJtaW5MZW5ndGhcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19Ptin2YTZiNi12YEg2KfZhNmF2K/YrtmEINmC2LXZitixINmE2YTYutin2YrYqTwvcD5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge2Vycm9ycy5icmFuY2hTaG9ydERlc2MgJiZcclxuICAgICAgICAgICAgICAgIGVycm9ycy5icmFuY2hTaG9ydERlc2MudHlwZSA9PT0gXCJtYXhMZW5ndGhcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19Ptin2YTZiNi12YEg2KfZhNmF2K/YrtmEINi32YjZitmEINmE2YTYutin2YrYqTwvcD5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtbGFiZWxcIj7YudmG2YjYp9mGINin2YTZgdix2Lk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImJyYW5jaEFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyKHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtaW5MZW5ndGg6IDMsXHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIti52YbZiNin2YYg2KfZhNmB2LHYuVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHtlcnJvcnMuYnJhbmNoQWRkcmVzcyAmJlxyXG4gICAgICAgICAgICAgICAgZXJyb3JzLmJyYW5jaEFkZHJlc3MudHlwZSA9PT0gXCJyZXF1aXJlZFwiICYmIChcclxuICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIgfX0+2YfYsNinINin2YTYrdmC2YQg2YXYt9mE2YjYqDwvcD5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge2Vycm9ycy5icmFuY2hBZGRyZXNzICYmXHJcbiAgICAgICAgICAgICAgICBlcnJvcnMuYnJhbmNoQWRkcmVzcy50eXBlID09PSBcIm1pbkxlbmd0aFwiICYmIChcclxuICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIgfX0+2KfZhNi52YbZiNin2YYg2KfZhNmF2K/YrtmEINmC2LXZitixINmE2YTYutin2YrYqTwvcD5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHtzcGlubmVyID8gKFxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIlxyXG4gICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICBzdHlsZT17eyBmbG9hdDogXCJsZWZ0XCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Bpbm5lci1ncm93IHNwaW5uZXItZ3Jvdy1zbVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAg2KzYp9ix2Yog2KfZhNil2LHYs9in2YQgLi5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgc3R5bGU9e3sgZmxvYXQ6IFwibGVmdFwiIH19XHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17bG9hZGluZyA/IFwiTG9hZGluZy4uLlwiIDogXCLYqti52K/ZitmEXCJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXRDb21wYW55Rm9ybTtcclxuIiwiZnVuY3Rpb24gRm9vdGVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9vdGVyIGNsYXNzPVwiZm9vdGVyIHB0LTBcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWxnLWJldHdlZW5cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTZcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTZcIj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvb3Rlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiOyAvL1xyXG5pbXBvcnQgdXNlQXV0aCBmcm9tIFwiLi4vY29udGV4dHMvYXV0aC5qc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICBjb25zdCB7IHRvZ2dsZXIsIHNldHRvZ2dsZXIgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci10b3AgbmF2YmFyLWV4cGFuZCBuYXZiYXItZGFyayBiZy1wcmltYXJ5IGJvcmRlci1ib3R0b21cIj5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgY2xhc3M9XCJuYXYtbGlua1wiXHJcbiAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcclxuICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICAgICAgICAgIHpJbmRleDogXCI5OTk5OTk5OTk5OTk5OTk5OVwiLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjEwcHhcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldHRvZ2dsZXIoIXRvZ2dsZXIpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJuaSBuaS1hbGlnbi1sZWZ0LTJcIj48L2k+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L25hdj5cclxuICAgICAgey8qIEhlYWRlciAqL31cclxuICAgICAgey8qIEhlYWRlciAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXIgYmctcHJpbWFyeSBwYi02XCI+PC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7IC8vXHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XHJcbmltcG9ydCBhcGkgZnJvbSBcIi4uL3NlcnZpY2VzL0FwaVwiO1xyXG5pbXBvcnQgeyBHZXRDQ0FzIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaV9nZXRcIjtcclxuaW1wb3J0IFNrZWxldG9uIGZyb20gXCJyZWFjdC1sb2FkaW5nLXNrZWxldG9uXCI7XHJcbmltcG9ydCB7IHVzZUFsZXJ0IH0gZnJvbSBcInJlYWN0LWFsZXJ0XCI7XHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgdXNlQXV0aCwgeyBQcm90ZWN0Um91dGUgfSBmcm9tIFwiLi4vY29udGV4dHMvYXV0aC5qc1wiO1xyXG5pbXBvcnQgQnV0dG9uVXBsb2FkSW1hZ2UgZnJvbSBcIi4vQnV0dG9uVXBsb2FkXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmZ1bmN0aW9uIE5ld0JyYW5jaEZvcm0oe1xyXG4gIGNvbXBhbnlfaWQsXHJcbiAgR29CYWNrQW5kVHJpZ2dlck11dGF0aW9uLFxyXG4gIGNoYW5nZW5ld0NvbXBhbnksXHJcbiAgY29tcGFueU5hbWUsXHJcbn0pIHtcclxuICBjb25zdCBhbGVydCA9IHVzZUFsZXJ0KCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IHRva2VuID0gQ29va2llcy5nZXQoXCJ0b2tlblwiKTtcclxuICBjb25zdCBzaXRlVXJsID0gQ29va2llcy5nZXQoXCJzaXRlVXJsXCIpO1xyXG5cclxuICBjb25zdCB7IHRvZ2dsZXIsIHNldHRvZ2dsZXIsIGxvYWRpbmcgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zdCBbc3Bpbm5lciwgc2V0c3Bpbm5lcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2ltZWdlcywgc2V0aW1lZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgeyBkYXRhLCBpc0xvYWRpbmcsIGlzRXJyb3IgfSA9IEdldENDQXMoKTtcclxuXHJcbiAgY29uc3QgcmVzdWx0cyA9IGlzTG9hZGluZyA/IGZhbHNlIDogZGF0YS5kYXRhO1xyXG4gIGNvbnNvbGUubG9nKGNvbXBhbnlfaWQpO1xyXG4gIGNvbnN0IHNob3dTa2VsZXRvbiA9IGlzTG9hZGluZyB8fCBsb2FkaW5nO1xyXG4gIGNvbnN0IFtjaXR5cywgc2V0Y2l0eXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtmaXJzdFRpbWUsIHNldGZpcnN0VGltZV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgaWYgKGZpcnN0VGltZSAmJiByZXN1bHRzKSB7XHJcbiAgICBzZXRjaXR5cyhyZXN1bHRzWzBdLmRhdGEpO1xyXG4gICAgc2V0Zmlyc3RUaW1lKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgZXJyb3JzIH0gPSB1c2VGb3JtKHtcclxuICAgIC8vbW9kZTogXCJvbkNoYW5nZVwiLFxyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVUaHVtYm5haWxQcm9kdWN0KGZpbGUpIHtcclxuICAgIGxldCBpbWFnZU9iaiA9IHtcclxuICAgICAgaWQ6IGZpbGUubmFtZSxcclxuICAgICAgbmFtZTogZmlsZS5uYW1lLFxyXG4gICAgICBpc1Vsb2FkaW5nOiB0cnVlLFxyXG4gICAgICBpbWFnZU9iamVjdDogZmlsZSxcclxuICAgIH07XHJcbiAgICBjb25zb2xlLmxvZyhpbWFnZU9iaik7XHJcblxyXG4gICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcblxyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwiZmlsZVwiLCBmaWxlKTtcclxuXHJcbiAgICBheGlvc1xyXG4gICAgICAucG9zdChzaXRlVXJsICsgXCJ3cC92Mi9tZWRpYVwiLCBmb3JtRGF0YSwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQuZGF0YS5zb3VyY2VfdXJsKTtcclxuICAgICAgICBsZXQgdGVtcGltZWdlc2FycmF5ID0gaW1lZ2VzO1xyXG4gICAgICAgIHRlbXBpbWVnZXNhcnJheS5wdXNoKHJlc3VsdC5kYXRhLnNvdXJjZV91cmwpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRlbXBpbWVnZXNhcnJheSk7XHJcbiAgICAgICAgc2V0aW1lZ2VzKHRlbXBpbWVnZXNhcnJheSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSAoZm9ybWRhdGEpID0+IHtcclxuICAgIGZvcm1kYXRhID0geyAuLi5mb3JtZGF0YSwgY29tcGFueV9pZCwgaW1lZ2VzIH07XHJcbiAgICBzZXRzcGlubmVyKHRydWUpO1xyXG5cclxuICAgIGFwaVxyXG4gICAgICAucG9zdChcImFwaS9uZXdCcmFuY2hcIiwgZm9ybWRhdGEpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgc2V0c3Bpbm5lcihmYWxzZSk7XHJcbiAgICAgICAgaWYgKHJlcy5kYXRhID09IFwicGhvbmVcIikge1xyXG4gICAgICAgICAgYWxlcnQuc2hvdyhcItix2YLZhSDYp9mE2KzZiNin2YQg2YXYs9iq2K7Yr9mFINmF2LPYqNmC2KdcIiwge1xyXG4gICAgICAgICAgICB0aW1lb3V0OiAyMDAwLFxyXG4gICAgICAgICAgICB0eXBlOiBcImVycm9yXCIsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChyZXMuZGF0YSA+IDAgfHwgcmVzLmRhdGEgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgYWxlcnQuc2hvdyhcItiq2YUg2KjZhtis2KfYrVwiLCB7XHJcbiAgICAgICAgICAgIHRpbWVvdXQ6IDIwMDAsXHJcbiAgICAgICAgICAgIHR5cGU6IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBHb0JhY2tBbmRUcmlnZ2VyTXV0YXRpb24oKTtcclxuICAgICAgICAgIGNoYW5nZW5ld0NvbXBhbnkoKTtcclxuICAgICAgICAgIC8vcm91dGVyLnB1c2goXCIvY29tcGFueXMvW25hbWVdXCIsIFwiL2NvbXBhbnlzL1wiICsgZm9ybWRhdGEuY29tcGFueU5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIHNldHNwaW5uZXIoZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGgyPntjb21wYW55TmFtZX08L2gyPlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IGZsb2F0OiBcInJpZ2h0XCIgfX0+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBjaGFuZ2VuZXdDb21wYW55KCk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWljb24gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJidG4taW5uZXItLWljb25cIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1hcnJvdy1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8aDIgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMC44ZW1cIiwgZGlzcGxheTogXCJpbmxpbmVcIiB9fT5cclxuICAgICAgICAgINil2YbYtNin2KEg2YHYsdi5INis2K/ZitivIDpcclxuICAgICAgICA8L2gyPlxyXG5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGNsZWFyOiBcImJvdGhcIiB9fT48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxicj48L2JyPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLXhsLTEyIGNvbC1tZC0xMlwiIHN0eWxlPXt7IGhlaWdodDogXCI1MHB4XCIgfX0+PC9kaXY+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cclxuICAgICAgICA8aDYgY2xhc3NOYW1lPVwiaGVhZGluZy1zbWFsbCB0ZXh0LW11dGVkIG1iLTRcIj7Zhdi52YTZiNmF2KfYqiDYp9mE2YHYsdi5PC9oNj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLWxnLTRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtbGFiZWxcIj7Ypdiz2YUg2KfZhNmB2LHYuTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiYnJhbmNoTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aDogMyxcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi2KXYs9mFINin2YTZgdix2LlcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7ZXJyb3JzLmJyYW5jaE5hbWUgJiYgZXJyb3JzLmJyYW5jaE5hbWUudHlwZSA9PT0gXCJyZXF1aXJlZFwiICYmIChcclxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19PtmH2LDYpyDYp9mE2K3ZgtmEINmF2LfZhNmI2Kg8L3A+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7ZXJyb3JzLmJyYW5jaE5hbWUgJiYgZXJyb3JzLmJyYW5jaE5hbWUudHlwZSA9PT0gXCJtaW5MZW5ndGhcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT7Yp9mE2KXYs9mFINin2YTZhdiv2K7ZhCDZgti12YrYsSDZhNmE2LrYp9mK2Kk8L3A+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtbGFiZWxcIj7ZiNi12YEg2YLYtdmK2LE8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImJyYW5jaFNob3J0RGVzY1wiXHJcbiAgICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aDogMyxcclxuICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IDEwMCxcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi2YjYtdmBINmC2LXZitixXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAge2Vycm9ycy5icmFuY2hTaG9ydERlc2MgJiZcclxuICAgICAgICAgICAgICAgIGVycm9ycy5icmFuY2hTaG9ydERlc2MudHlwZSA9PT0gXCJyZXF1aXJlZFwiICYmIChcclxuICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIgfX0+2YfYsNinINin2YTYrdmC2YQg2YXYt9mE2YjYqDwvcD5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge2Vycm9ycy5icmFuY2hTaG9ydERlc2MgJiZcclxuICAgICAgICAgICAgICAgIGVycm9ycy5icmFuY2hTaG9ydERlc2MudHlwZSA9PT0gXCJtaW5MZW5ndGhcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19Ptin2YTZiNi12YEg2KfZhNmF2K/YrtmEINmC2LXZitixINmE2YTYutin2YrYqTwvcD5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge2Vycm9ycy5icmFuY2hTaG9ydERlc2MgJiZcclxuICAgICAgICAgICAgICAgIGVycm9ycy5icmFuY2hTaG9ydERlc2MudHlwZSA9PT0gXCJtYXhMZW5ndGhcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19Ptin2YTZiNi12YEg2KfZhNmF2K/YrtmEINi32YjZitmEINmE2YTYutin2YrYqTwvcD5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1sYWJlbFwiPtin2YTYr9mI2YTYqTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb3VudHlcIlxyXG4gICAgICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyKHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZENvdW50eSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qaWYgKGZpcnN0VGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldGZpcnN0VGltZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgIH0qL1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCByZXN1bHRzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVtcGNvbnVudHkgPSByZXN1bHRzW2luZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZW1wY29udW50eS5uYW1lID09PSBzZWxlY3RlZENvdW50eSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRjaXR5cyh0ZW1wY29udW50eS5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge3Jlc3VsdHNcclxuICAgICAgICAgICAgICAgICAgICA/IHJlc3VsdHMubWFwKChjb3VudHksIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8b3B0aW9uPntjb3VudHkubmFtZX08L29wdGlvbj47XHJcbiAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIDogXCJcIn1cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtbGFiZWxcIj7Yp9mE2YXYr9mK2YbYqTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJjaXR5XCJcclxuICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtjaXR5cy5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgICAgICAgICAgPyBjaXR5cy5tYXAoKGNpdHksIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIHZhbHVlPXtjaXR5Lm5hbWV9PntjaXR5Lm5hbWV9PC9vcHRpb24+O1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7c2hvd1NrZWxldG9uID8gPFNrZWxldG9uIGhlaWdodD17MTB9IGNvdW50PXsyfSAvPiA6IFwiXCJ9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLWxhYmVsXCI+2LnZhtmI2KfZhiDYp9mE2YHYsdi5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJicmFuY2hBZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoOiAzLFxyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLYudmG2YjYp9mGINin2YTZgdix2LlcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7ZXJyb3JzLmJyYW5jaEFkZHJlc3MgJiZcclxuICAgICAgICAgICAgICAgIGVycm9ycy5icmFuY2hBZGRyZXNzLnR5cGUgPT09IFwicmVxdWlyZWRcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19PtmH2LDYpyDYp9mE2K3ZgtmEINmF2LfZhNmI2Kg8L3A+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHtlcnJvcnMuYnJhbmNoQWRkcmVzcyAmJlxyXG4gICAgICAgICAgICAgICAgZXJyb3JzLmJyYW5jaEFkZHJlc3MudHlwZSA9PT0gXCJtaW5MZW5ndGhcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19Ptin2YTYudmG2YjYp9mGINin2YTZhdiv2K7ZhCDZgti12YrYsSDZhNmE2LrYp9mK2Kk8L3A+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAg2LHYp9io2Lcg2KfYrdiv2KfYq9mK2KfYqiDYrtix2KfYpti3INi62YjYutmEXHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImRpcmVjdGlvbl91cmxcIlxyXG4gICAgICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyKHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtaW5MZW5ndGg6IDMsXHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItix2KfYqNi3XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAge2Vycm9ycy5kaXJlY3Rpb25fdXJsICYmXHJcbiAgICAgICAgICAgICAgICBlcnJvcnMuZGlyZWN0aW9uX3VybC50eXBlID09PSBcInJlcXVpcmVkXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT7Zh9iw2Kcg2KfZhNit2YLZhCDZhdi32YTZiNioPC9wPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7ZXJyb3JzLmRpcmVjdGlvbl91cmwgJiZcclxuICAgICAgICAgICAgICAgIGVycm9ycy5kaXJlY3Rpb25fdXJsLnR5cGUgPT09IFwibWluTGVuZ3RoXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT7Ysdin2KjYtyDYp9mE2YXYr9iu2YQg2YLYtdmK2LEg2YTZhNi62KfZitipPC9wPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteGwtMTIgY29sLW1kLTEyXCIgc3R5bGU9e3sgaGVpZ2h0OiBcIjUwcHhcIiB9fT48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICDYtdmI2LEg2KfZhNmB2LHYuSAo2KfYrtiq2YrYp9ix2YopXHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAge2ltZWdlcy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAge2ltZWdlcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2l0ZW19Pti12YjYsdipIHtpbmRleCArIDF9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25VcGxvYWRJbWFnZVxyXG4gICAgICAgICAgICAgICAgdHlwZUltYWdlPVwidGh1bWJuYWlsXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodGh1bWJuYWlsKSA9PlxyXG4gICAgICAgICAgICAgICAgICBoYW5kbGVUaHVtYm5haWxQcm9kdWN0KHRodW1ibmFpbC50YXJnZXQuZmlsZXNbMF0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteGwtMTIgY29sLW1kLTEyXCIgc3R5bGU9e3sgaGVpZ2h0OiBcIjUwcHhcIiB9fT48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8aDYgY2xhc3NOYW1lPVwiaGVhZGluZy1zbWFsbCB0ZXh0LW11dGVkIG1iLTRcIj7Zhdi52YTZiNmF2KfYqiDYp9mE2K3Ys9in2Kg8L2g2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtbGctNFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1sYWJlbFwiPtin2YTYpdiz2YUg2KfZhNij2YjZhDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiRmlyc3ROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoOiAzLFxyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLYp9mE2KXYs9mFINin2YTYo9mI2YRcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7ZXJyb3JzLkZpcnN0TmFtZSAmJiBlcnJvcnMuRmlyc3ROYW1lLnR5cGUgPT09IFwicmVxdWlyZWRcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT7Zh9iw2Kcg2KfZhNit2YLZhCDZhdi32YTZiNioPC9wPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge2Vycm9ycy5GaXJzdE5hbWUgJiYgZXJyb3JzLkZpcnN0TmFtZS50eXBlID09PSBcIm1pbkxlbmd0aFwiICYmIChcclxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19Ptin2YTYpdiz2YUg2KfZhNmF2K/YrtmEINmC2LXZitixINmE2YTYutin2YrYqTwvcD5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1sYWJlbFwiPtin2YTYpdiz2YUg2KfZhNij2K7ZitixPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJMYXN0TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aDogMyxcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi2KfZhNil2LPZhSDYp9mE2KPYrtmK2LFcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7ZXJyb3JzLkxhc3ROYW1lICYmIGVycm9ycy5MYXN0TmFtZS50eXBlID09PSBcInJlcXVpcmVkXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIgfX0+2YfYsNinINin2YTYrdmC2YQg2YXYt9mE2YjYqDwvcD5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHtlcnJvcnMuTGFzdE5hbWUgJiYgZXJyb3JzLkxhc3ROYW1lLnR5cGUgPT09IFwibWluTGVuZ3RoXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIgfX0+2KfZhNil2LPZhSDYp9mE2YXYr9iu2YQg2YLYtdmK2LEg2YTZhNi62KfZitipPC9wPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtbGFiZWxcIj7YsdmC2YUg2KfZhNis2YjYp9mEPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cIlBob25lXCJcclxuICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoOiAxMixcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi2KfZhNix2KzYp9ihINmD2KrYp9io2Kkg2YXZgdiq2KfYrSDYp9mE2K/ZiNmE2Kkg2YXYq9in2YQgOTY2XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAge2Vycm9ycy5QaG9uZSAmJiBlcnJvcnMuUGhvbmUudHlwZSA9PT0gXCJyZXF1aXJlZFwiICYmIChcclxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19PtmH2LDYpyDYp9mE2K3ZgtmEINmF2LfZhNmI2Kg8L3A+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7ZXJyb3JzLlBob25lICYmIGVycm9ycy5QaG9uZS50eXBlID09PSBcIm1pbkxlbmd0aFwiICYmIChcclxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19PtmK2KzYqCDYpdiv2K7Yp9mEINix2YLZhSDYp9mE2KzZiNin2YQg2LXYp9mE2K08L3A+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAge3NwaW5uZXIgPyAoXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiXHJcbiAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGZsb2F0OiBcImxlZnRcIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGlubmVyLWdyb3cgc3Bpbm5lci1ncm93LXNtXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICDYrNin2LHZiiDYp9mE2KXYsdiz2KfZhCAuLlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBzdHlsZT17eyBmbG9hdDogXCJsZWZ0XCIgfX1cclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtsb2FkaW5nID8gXCJMb2FkaW5nLi4uXCIgOiBcItil2YbYtNin2KEg2YHYsdi5XCJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld0JyYW5jaEZvcm07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7IC8vXHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XHJcbmltcG9ydCBhcGkgZnJvbSBcIi4uL3NlcnZpY2VzL0FwaVwiO1xyXG5pbXBvcnQgeyBHZXRDYXRlZ29yaWVzIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaV9nZXRcIjtcclxuaW1wb3J0IFNrZWxldG9uIGZyb20gXCJyZWFjdC1sb2FkaW5nLXNrZWxldG9uXCI7XHJcbmltcG9ydCB7IHVzZUFsZXJ0IH0gZnJvbSBcInJlYWN0LWFsZXJ0XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHVzZUF1dGgsIHsgUHJvdGVjdFJvdXRlIH0gZnJvbSBcIi4uL2NvbnRleHRzL2F1dGguanNcIjtcclxuXHJcbmZ1bmN0aW9uIE5ld0NvdWJvbkZvcm0oe1xyXG4gIEJyYW5jaF9pZCxcclxuICBCcmFjbmhDb2RlLFxyXG4gIEdvQmFja0FuZFRyaWdnZXJNdXRhdGlvbixcclxuICBjaGFuZ2VuZXdDb21wYW55LFxyXG59KSB7XHJcbiAgY29uc3QgYWxlcnQgPSB1c2VBbGVydCgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCB7IHRvZ2dsZXIsIHNldHRvZ2dsZXIsIGxvYWRpbmcgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zdCBbc3Bpbm5lciwgc2V0c3Bpbm5lcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nwb25zb3JzLCBzZXRzcG9uc29yc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW0lucHV0VHlwZWRpcywgc2V0SW5wdXRUeXBlZGlzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbSW5wdXRUeXBlY29kZSwgc2V0SW5wdXRUeXBlY29kZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHsgZGF0YSwgaXNMb2FkaW5nLCBpc0Vycm9yIH0gPSBHZXRDYXRlZ29yaWVzKCk7XHJcblxyXG4gIGNvbnN0IHJlc3VsdHMgPSBpc0xvYWRpbmcgPyBmYWxzZSA6IGRhdGEuZGF0YTtcclxuICBjb25zdCBzaG93U2tlbGV0b24gPSBpc0xvYWRpbmcgfHwgbG9hZGluZztcclxuXHJcbiAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCBlcnJvcnMgfSA9IHVzZUZvcm0oe1xyXG4gICAgLy9tb2RlOiBcIm9uQ2hhbmdlXCIsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGlkID0gQnJhbmNoX2lkO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IChmb3JtZGF0YSkgPT4ge1xyXG4gICAgZm9ybWRhdGEgPSB7IC4uLmZvcm1kYXRhLCBpZCwgQnJhY25oQ29kZSwgc3BvbnNvcnMgfTtcclxuICAgIHNldHNwaW5uZXIodHJ1ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhmb3JtZGF0YSk7XHJcblxyXG4gICAgYXBpXHJcbiAgICAgIC5wb3N0KFwiYXBpL25ld0NvdWJvblwiLCBmb3JtZGF0YSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICBzZXRzcGlubmVyKGZhbHNlKTtcclxuICAgICAgICBpZiAocmVzLmRhdGEgPT0gXCJhbHJlYWR5IGV4aXN0c1wiKSB7XHJcbiAgICAgICAgICBhbGVydC5zaG93KFwi2KXYs9mFINin2YTZg9mI2KjZiNmGINmF2YjYrNmI2K8g2YXYs9io2YLYpyBcIiwge1xyXG4gICAgICAgICAgICB0aW1lb3V0OiAyMDAwLFxyXG4gICAgICAgICAgICB0eXBlOiBcImVycm9yXCIsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJlcy5kYXRhID09IFwiZW1haWxcIikge1xyXG4gICAgICAgICAgYWxlcnQuc2hvdyhcItin2YTYpdmK2YXZitmEINmF2LPYqtiu2K/ZhSDZhdiz2KjZgtinXCIsIHtcclxuICAgICAgICAgICAgdGltZW91dDogMjAwMCxcclxuICAgICAgICAgICAgdHlwZTogXCJlcnJvclwiLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocmVzLmRhdGEgPiAwKSB7XHJcbiAgICAgICAgICBhbGVydC5zaG93KFwi2KrZhSDYqNmG2KzYp9itXCIsIHtcclxuICAgICAgICAgICAgdGltZW91dDogMjAwMCxcclxuICAgICAgICAgICAgdHlwZTogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIEdvQmFja0FuZFRyaWdnZXJNdXRhdGlvbigpO1xyXG4gICAgICAgICAgLy9yb3V0ZXIucHVzaChcIi9jb21wYW55cy9bbmFtZV1cIiwgXCIvY29tcGFueXMvXCIgKyBmb3JtZGF0YS5jb21wYW55TmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgc2V0c3Bpbm5lcihmYWxzZSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IGZsb2F0OiBcInJpZ2h0XCIgfX0+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBjaGFuZ2VuZXdDb21wYW55KCk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWljb24gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJidG4taW5uZXItLWljb25cIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1hcnJvdy1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8aDIgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMC44ZW1cIiwgZGlzcGxheTogXCJpbmxpbmVcIiB9fT5cclxuICAgICAgICAgINil2YbYtNin2KEg2YPZiNio2YjZhtin2KogOlxyXG4gICAgICAgIDwvaDI+XHJcblxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgY2xlYXI6IFwiYm90aFwiIH19PjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJyPjwvYnI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLXhsLTEyIGNvbC1tZC0xMlwiIHN0eWxlPXt7IGhlaWdodDogXCI1MHB4XCIgfX0+PC9kaXY+XHJcblxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMiVcIiwgbWFyZ2luQm90dG9tOiBcIjIlXCIgfX1cclxuICAgICAgICBjbGFzcz1cImN1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveFwiXHJcbiAgICAgID5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICBjbGFzcz1cImN1c3RvbS1jb250cm9sLWlucHV0XCJcclxuICAgICAgICAgIGlkPVwiY3VzdG9tQ2hlY2sxXCJcclxuICAgICAgICAgIG5hbWU9XCJzcG9uc29yc1wiXHJcbiAgICAgICAgICB2YWx1ZT17c3BvbnNvcnN9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgc2V0c3BvbnNvcnMoIXNwb25zb3JzKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjdXN0b20tY29udHJvbC1sYWJlbFwiIGZvcj1cImN1c3RvbUNoZWNrMVwiPlxyXG4gICAgICAgICAg2KrYqNix2Lkg2J97XCIgXCJ9XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XHJcbiAgICAgICAge3Nwb25zb3JzID8gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiaGVhZGluZy1zbWFsbCB0ZXh0LW11dGVkIG1iLTRcIj7Zhdi52YTZiNmF2KfYqiDYp9mE2K/Yp9i52YUgPC9oNj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1sYWJlbFwiPtil2LPZhSDYp9mE2K/Yp9i52YU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIlNOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi2KXYs9mFINin2YTYr9in2LnZhVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIHtlcnJvcnMuU05hbWUgJiYgZXJyb3JzLlNOYW1lLnR5cGUgPT09IFwicmVxdWlyZWRcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIgfX0+2YfYsNinINin2YTYrdmC2YQg2YXYt9mE2YjYqDwvcD5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PntcIiBcIn1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1sYWJlbFwiPtmC2YrZhdipINin2YTYqtio2LHYuTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJTdmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLYp9mE2YLZitmF2Kkg2KfZhNmF2KrYqNix2Lkg2KjZh9inICjZitmF2YPZhiDYo9mGINiq2YPZiNmGINis2LLYoSDZhdmGINmC2YrZhdipINin2YTZg9mI2KjZiNmG2KfYqilcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7ZXJyb3JzLlN2YWx1ZSAmJiBlcnJvcnMuU3ZhbHVlLnR5cGUgPT09IFwicmVxdWlyZWRcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIgfX0+2YfYsNinINin2YTYrdmC2YQg2YXYt9mE2YjYqDwvcD5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1sYWJlbFwiPtix2YLZhSDYp9mE2KzZiNin2YQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiU3Bob25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi2LHZgtmFINin2YTYrNmI2KfZhFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIHtlcnJvcnMuU3Bob25lICYmIGVycm9ycy5TcGhvbmUudHlwZSA9PT0gXCJyZXF1aXJlZFwiICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT7Zh9iw2Kcg2KfZhNit2YLZhCDZhdi32YTZiNioPC9wPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIFwiXCJcclxuICAgICAgICApfVxyXG4gICAgICAgIDxoNiBjbGFzc05hbWU9XCJoZWFkaW5nLXNtYWxsIHRleHQtbXV0ZWQgbWItNFwiPtmF2LnZhNmI2YXYp9iqINin2YTZg9mI2KjZiNmGPC9oNj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLWxnLTRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLWxhYmVsXCI+2KXYs9mFINin2YTZg9mI2KjZiNmGPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb3Vib25OYW1lXCJcclxuICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoOiAzLFxyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLYpdiz2YUg2KfZhNmD2YjYqNmI2YZcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7ZXJyb3JzLmNvdWJvbk5hbWUgJiYgZXJyb3JzLmNvdWJvbk5hbWUudHlwZSA9PT0gXCJyZXF1aXJlZFwiICYmIChcclxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19PtmH2LDYpyDYp9mE2K3ZgtmEINmF2LfZhNmI2Kg8L3A+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7ZXJyb3JzLmNvdWJvbk5hbWUgJiYgZXJyb3JzLmNvdWJvbk5hbWUudHlwZSA9PT0gXCJtaW5MZW5ndGhcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT7Yp9mE2KXYs9mFINin2YTZhdiv2K7ZhCDZgti12YrYsSDZhNmE2LrYp9mK2Kk8L3A+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLWxhYmVsXCI+2KfZhNmG2YjYuTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0eXBlXCJcclxuICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPT0gXCJkaXNjb3VudFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRJbnB1dFR5cGVkaXModHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldElucHV0VHlwZWRpcyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlID09IFwiYWxsX2NvZGVcIiB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQudmFsdWUgPT0gXCJvbmVfY29kZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRJbnB1dFR5cGVjb2RlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRJbnB1dFR5cGVjb2RlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNhc2hcIj7Zhdis2KfZhtmKPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJiYXNrZXRcIj7YudmK2YbZijwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGlzY291bnRcIj7Yrti12YU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImFsbF9jb2RlXCI+2YPZiNivINin2YTZhdmG2LXYp9iqPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJvbmVfY29kZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgINmD2YjYryDYp9mE2YXZhti12KfYqiAo2KfYs9iq2K7Yr9in2YUg2YTZhdix2Kkg2YjYp9it2K/YqSlcclxuICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtJbnB1dFR5cGVjb2RlID8gKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLWxhYmVsXCI+2KfZhNmD2YjYrzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29kZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRnJlZTEwXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge2Vycm9ycy5jb2RlICYmIGVycm9ycy5jb2RlLnR5cGUgPT09IFwicmVxdWlyZWRcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19PtmH2LDYpyDYp9mE2K3ZgtmEINmF2LfZhNmI2Kg8L3A+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLWxhYmVsXCI+2KfZhNmD2YXZitipPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvdWJvbnNBbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItmD2YXZitipINin2YTZg9mI2KjZiNmG2KfYqiDYp9mE2YXYsdin2K8g2KXZhti02KfYptmH2KdcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7ZXJyb3JzLmNvdWJvbnNBbW91bnQgJiZcclxuICAgICAgICAgICAgICAgICAgZXJyb3JzLmNvdWJvbnNBbW91bnQudHlwZSA9PT0gXCJyZXF1aXJlZFwiICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT7Zh9iw2Kcg2KfZhNit2YLZhCDZhdi32YTZiNioPC9wPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLWxhYmVsXCI+2KfZhNiq2LXZhtmK2YE8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiY2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyKHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge3Jlc3VsdHNcclxuICAgICAgICAgICAgICAgICAgICA/IHJlc3VsdHMubWFwKChjYXRlZ29yeSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtjYXRlZ29yeS5pZH0+e2NhdGVnb3J5Lm5hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIDogXCJcIn1cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3Nob3dTa2VsZXRvbiA/IDxTa2VsZXRvbiBoZWlnaHQ9ezEwfSBjb3VudD17Mn0gLz4gOiBcIlwifVxyXG4gICAgICAgICAgICB7SW5wdXRUeXBlY29kZSA/IChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1sYWJlbFwiPtin2YTYsdin2KjYtyA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVybFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi2LHYp9io2Lcg2KfZhNmF2YjZgti5ICwg2KfZhNiq2LfYqNmK2YIg2KfZhNiuIFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtlcnJvcnMudXJsICYmIGVycm9ycy51cmwudHlwZSA9PT0gXCJyZXF1aXJlZFwiICYmIChcclxuICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIgfX0+2YfYsNinINin2YTYrdmC2YQg2YXYt9mE2YjYqDwvcD5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtbGFiZWxcIj4g2KfZhNmC2YrZhdipPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge0lucHV0VHlwZWRpcyA9PSB0cnVlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+JTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIj7YsS7Yszwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZmxvYXQ6IFwibGVmdFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItin2YTZgtmK2YXYqVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtlcnJvcnMudmFsdWUgJiYgZXJyb3JzLnZhbHVlLnR5cGUgPT09IFwicmVxdWlyZWRcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19PtmH2LDYpyDYp9mE2K3ZgtmEINmF2LfZhNmI2Kg8L3A+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1sYWJlbFwiPiDZitmG2KrZh9mKINio2LnYrzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZmxvYXQ6IFwibGVmdFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi2LnYr9ivINin2YTYo9i02YfYsVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+2LTZh9ixPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHtlcnJvcnMuZW5kICYmIGVycm9ycy5lbmQudHlwZSA9PT0gXCJyZXF1aXJlZFwiICYmIChcclxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19PtmH2LDYpyDYp9mE2K3ZgtmEINmF2LfZhNmI2Kg8L3A+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7SW5wdXRUeXBlY29kZSA/IChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNvbnRyb2wtbGFiZWxcIj4g2KfZhNmI2LXZgTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgIHJvd3M9XCI0XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtaW5MZW5ndGg6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLZiNi12YEg2KfZiCDYt9ix2YrZgtipINin2YTYpdiz2KrYrtiv2KfZhSBcIlxyXG4gICAgICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAge2Vycm9ycy5kZXMgJiYgZXJyb3JzLmRlcy50eXBlID09PSBcIm1pbkxlbmd0aFwiICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT7Yp9mE2YjYtdmBINin2YTZhdiv2K7ZhNipINmC2LXZitix2Kkg2YTZhNi62KfZitipPC9wPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jb250cm9sLWxhYmVsXCI+INin2YTYtNix2YjYtyDZiNin2YTYo9it2YPYp9mFPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICByb3dzPVwiNFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cIlRlcm1zXCJcclxuICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoOiAzLFxyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLYtNix2YjYtyDZiNij2K3Zg9in2YUg2LXYsdmBINin2YTZg9mI2KjZiNmG2KfYqlwiXHJcbiAgICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgIHtlcnJvcnMuVGVybXMgJiYgZXJyb3JzLlRlcm1zLnR5cGUgPT09IFwibWluTGVuZ3RoXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICDYp9mE2LTYsdmI2Lcg2YjYp9mE2KPYrdmD2KfZhSDYp9mE2YXYr9iu2YTYqSDZgti12YrYsdipINmE2YTYutin2YrYqVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7c3Bpbm5lciA/IChcclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCJcclxuICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgc3R5bGU9e3sgZmxvYXQ6IFwibGVmdFwiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNwaW5uZXItZ3JvdyBzcGlubmVyLWdyb3ctc21cIj48L3NwYW4+XHJcbiAgICAgICAgICAgINis2KfYsdmKINin2YTYpdix2LPYp9mEIC4uXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGZsb2F0OiBcImxlZnRcIiB9fVxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCJcclxuICAgICAgICAgICAgdmFsdWU9e2xvYWRpbmcgPyBcIkxvYWRpbmcuLi5cIiA6IFwi2KXZhti02KfYoSDZg9mI2KjZiNmGXCJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld0NvdWJvbkZvcm07XHJcbiIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcclxuaW1wb3J0IFJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbi8vYXBpIGhlcmUgaXMgYW4gYXhpb3MgaW5zdGFuY2VcclxuaW1wb3J0IGFwaSBmcm9tIFwiLi4vc2VydmljZXMvQXBpXCI7XHJcblxyXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbdG9nZ2xlciwgc2V0dG9nZ2xlcl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRVc2VyRnJvbUNvb2tpZXMoKSB7XHJcbiAgICAgIGxldCBkYXRhID0gZmFsc2U7XHJcbiAgICAgIGNvbnN0IHRva2VuID0gQ29va2llcy5nZXQoXCJ0b2tlblwiKTtcclxuICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJHb3QgYSB0b2tlbiBpbiB0aGUgY29va2llcywgbGV0J3Mgc2VlIGlmIGl0IGlzIHZhbGlkXCIpO1xyXG4gICAgICAgIGFwaS5kZWZhdWx0cy5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSBgQmVhcmVyICR7dG9rZW59YDtcclxuICAgICAgICBhd2FpdCBhcGlcclxuICAgICAgICAgIC5wb3N0KFwiYXBpL2NoZWNrVG9rZW5cIilcclxuICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgZGF0YSA9IHJlcztcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgQ29va2llcy5yZW1vdmUoXCJ0b2tlblwiKTtcclxuICAgICAgICAgICAgQ29va2llcy5yZW1vdmUoXCJ1c2VyX25pY2VuYW1lXCIpO1xyXG4gICAgICAgICAgICBDb29raWVzLnJlbW92ZShcInVzZXJfZW1haWxcIik7XHJcbiAgICAgICAgICAgIENvb2tpZXMucmVtb3ZlKFwiVXNlclR5cGVcIik7XHJcbiAgICAgICAgICAgIENvb2tpZXMucmVtb3ZlKFwiQnJhY25oQ29kZVwiKTtcclxuICAgICAgICAgICAgQ29va2llcy5yZW1vdmUoXCJDb21wYW55Q29kZVwiKTtcclxuICAgICAgICAgICAgQ29va2llcy5yZW1vdmUoXCJwcm9maWxlX3BpY1wiKTtcclxuICAgICAgICAgICAgQ29va2llcy5yZW1vdmUoXCJmaXJzdF9uYW1lXCIpO1xyXG4gICAgICAgICAgICBDb29raWVzLnJlbW92ZShcImxhc3RfbmFtZVwiKTtcclxuXHJcbiAgICAgICAgICAgIGFwaS5kZWZhdWx0cy5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSBgYDtcclxuXHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL01hbmFnZW1lbnRcIik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAvLyAgY29uc3QgeyBkYXRhOiBkYXRhIH0gPSBhd2FpdCBhcGkucG9zdChcImFwaS9jaGVja1Rva2VuXCIpO1xyXG4gICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIm9sZCB0b2tlbiBpcyB2YWxpZFwiKTtcclxuICAgICAgICAgIHNldFVzZXIoe1xyXG4gICAgICAgICAgICB1c2VyX25pY2VuYW1lOiBDb29raWVzLmdldChcInVzZXJfbmljZW5hbWVcIiksXHJcbiAgICAgICAgICAgIHVzZXJfZW1haWw6IENvb2tpZXMuZ2V0KFwidXNlcl9lbWFpbFwiKSxcclxuICAgICAgICAgICAgVXNlclR5cGU6IENvb2tpZXMuZ2V0KFwiVXNlclR5cGVcIiksXHJcbiAgICAgICAgICAgIENvbXBhbnlDb2RlOiBDb29raWVzLmdldChcIkNvbXBhbnlDb2RlXCIpLFxyXG4gICAgICAgICAgICBCcmFjbmhDb2RlOiBDb29raWVzLmdldChcIkJyYWNuaENvZGVcIiksXHJcbiAgICAgICAgICAgIHByb2ZpbGVfcGljOiBDb29raWVzLmdldChcInByb2ZpbGVfcGljXCIpLFxyXG4gICAgICAgICAgICBmaXJzdF9uYW1lOiBDb29raWVzLmdldChcImZpcnN0X25hbWVcIiksXHJcbiAgICAgICAgICAgIGxhc3RfbmFtZTogQ29va2llcy5nZXQoXCJsYXN0X25hbWVcIiksXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICAgIGxvYWRVc2VyRnJvbUNvb2tpZXMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IFNlbmRjb25kID0gYXN5bmMgKHBob25lKSA9PiB7XHJcbiAgICBsZXQgdGVtcHJlcyA9IGF3YWl0IGFwaS5nZXQoXCJhcGkvZ2V0VXNlckNvZGU/cGhvbmU9XCIgKyBwaG9uZSwge30pO1xyXG5cclxuICAgIHJldHVybiB0ZW1wcmVzO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHBob25lTG9naW4gPSBhc3luYyAocGhvbmUsIGNvZGUpID0+IHtcclxuICAgIGNvbnN0IHsgZGF0YTogZGF0YSB9ID0gYXdhaXQgYXBpLmdldChcclxuICAgICAgXCJhcGkvc2luZ1VzZXJJTj9waG9uZT1cIiArIHBob25lICsgXCImY29kZT1cIiArIGNvZGUsXHJcbiAgICAgIHt9XHJcbiAgICApO1xyXG5cclxuICAgIGlmIChkYXRhKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coXCJHb3QgbmV3IHRva2VuXCIgKyBkYXRhLnRva2VuKTtcclxuICAgICAgQ29va2llcy5zZXQoXCJ0b2tlblwiLCBkYXRhLnRva2VuLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG4gICAgICBDb29raWVzLnNldChcInVzZXJfbmljZW5hbWVcIiwgZGF0YS51c2VyX25pY2VuYW1lLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG4gICAgICBDb29raWVzLnNldChcInVzZXJfZW1haWxcIiwgZGF0YS51c2VyX2VtYWlsLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG4gICAgICBDb29raWVzLnNldChcIlVzZXJUeXBlXCIsIGRhdGEuVXNlclR5cGUsIHsgZXhwaXJlczogNjAgfSk7XHJcbiAgICAgIENvb2tpZXMuc2V0KFwiQnJhY25oQ29kZVwiLCBkYXRhLkJyYWNuaENvZGUsIHsgZXhwaXJlczogNjAgfSk7XHJcbiAgICAgIENvb2tpZXMuc2V0KFwiQ29tcGFueUNvZGVcIiwgZGF0YS5Db21wYW55Q29kZSwgeyBleHBpcmVzOiA2MCB9KTtcclxuICAgICAgQ29va2llcy5zZXQoXCJwcm9maWxlX3BpY1wiLCBkYXRhLnByb2ZpbGVfcGljLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG4gICAgICBDb29raWVzLnNldChcImZpcnN0X25hbWVcIiwgZGF0YS5maXJzdF9uYW1lLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG4gICAgICBDb29raWVzLnNldChcImxhc3RfbmFtZVwiLCBkYXRhLmxhc3RfbmFtZSwgeyBleHBpcmVzOiA2MCB9KTtcclxuXHJcbiAgICAgIGFwaS5kZWZhdWx0cy5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSBgQmVhcmVyICR7ZGF0YS50b2tlbn1gO1xyXG5cclxuICAgICAgc2V0VXNlcih7XHJcbiAgICAgICAgdXNlcl9uaWNlbmFtZTogZGF0YS51c2VyX25pY2VuYW1lLFxyXG4gICAgICAgIHVzZXJfZW1haWw6IGRhdGEudXNlcl9lbWFpbCxcclxuICAgICAgICBVc2VyVHlwZTogZGF0YS5Vc2VyVHlwZSxcclxuICAgICAgICBDb21wYW55Q29kZTogZGF0YS5Db21wYW55Q29kZSxcclxuICAgICAgICBCcmFjbmhDb2RlOiBkYXRhLkJyYWNuaENvZGUsXHJcbiAgICAgICAgcHJvZmlsZV9waWM6IGRhdGEucHJvZmlsZV9waWMsXHJcbiAgICAgICAgZmlyc3RfbmFtZTogZGF0YS5maXJzdF9uYW1lLFxyXG4gICAgICAgIGxhc3RfbmFtZTogZGF0YS5sYXN0X25hbWUsXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkdvdCB1c2VyXCIsIHVzZXIpO1xyXG4gICAgICBpZiAoZGF0YS5Vc2VyVHlwZSA9PSBcIkNvbXBhbnlcIikge1xyXG4gICAgICAgIFJvdXRlci5wdXNoKFwiL0NvbXBhbnlTdGF0aXN0aWNzXCIpO1xyXG4gICAgICAgIC8vcmV0dXJuIFwiQ29tcGFueVwiO1xyXG4gICAgICB9IGVsc2UgaWYgKGRhdGEuVXNlclR5cGUgPT0gXCJtYW5kb2JlXCIpIHtcclxuICAgICAgICAvLyByZXR1cm4gXCJDb21wYW55XCI7XHJcbiAgICAgICAgUm91dGVyLnB1c2goXCIvTXlVc2Vyc1wiKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBsb2dpbiA9IGFzeW5jICh1c2VybmFtZSwgcGFzc3dvcmQpID0+IHtcclxuICAgIGNvbnN0IHsgZGF0YTogZGF0YSB9ID0gYXdhaXQgYXBpLnBvc3QoXCJhcGkvbG9naW5cIiwge1xyXG4gICAgICBlbWFpbDp1c2VybmFtZSxcclxuICAgICAgcGFzc3dvcmQsXHJcbiAgICB9KTtcclxuICAgIGlmIChkYXRhKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coXCJHb3QgbmV3IHRva2VuXCIgKyBkYXRhLnRva2VuKTtcclxuICAgICAgQ29va2llcy5zZXQoXCJ0b2tlblwiLCBkYXRhLnRva2VuLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG4gICAgICBDb29raWVzLnNldChcInVzZXJfbmljZW5hbWVcIiwgZGF0YS51c2VyX25pY2VuYW1lLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG4gICAgICBDb29raWVzLnNldChcInVzZXJfZW1haWxcIiwgZGF0YS51c2VyX2VtYWlsLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG4gICAgICBDb29raWVzLnNldChcIlVzZXJUeXBlXCIsIGRhdGEuVXNlclR5cGUsIHsgZXhwaXJlczogNjAgfSk7XHJcbiAgICAgIENvb2tpZXMuc2V0KFwiQnJhY25oQ29kZVwiLCBkYXRhLkJyYWNuaENvZGUsIHsgZXhwaXJlczogNjAgfSk7XHJcbiAgICAgIENvb2tpZXMuc2V0KFwiQ29tcGFueUNvZGVcIiwgZGF0YS5Db21wYW55Q29kZSwgeyBleHBpcmVzOiA2MCB9KTtcclxuICAgICAgQ29va2llcy5zZXQoXCJwcm9maWxlX3BpY1wiLCBkYXRhLnByb2ZpbGVfcGljLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG4gICAgICBDb29raWVzLnNldChcImZpcnN0X25hbWVcIiwgZGF0YS5maXJzdF9uYW1lLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG4gICAgICBDb29raWVzLnNldChcImxhc3RfbmFtZVwiLCBkYXRhLmxhc3RfbmFtZSwgeyBleHBpcmVzOiA2MCB9KTtcclxuXHJcbiAgICAgIGFwaS5kZWZhdWx0cy5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSBgQmVhcmVyICR7ZGF0YS50b2tlbn1gO1xyXG5cclxuICAgICAgc2V0VXNlcih7XHJcbiAgICAgICAgdXNlcl9uaWNlbmFtZTogZGF0YS51c2VyX25pY2VuYW1lLFxyXG4gICAgICAgIHVzZXJfZW1haWw6IGRhdGEudXNlcl9lbWFpbCxcclxuICAgICAgICBVc2VyVHlwZTogZGF0YS5Vc2VyVHlwZSxcclxuICAgICAgICBDb21wYW55Q29kZTogZGF0YS5Db21wYW55Q29kZSxcclxuICAgICAgICBCcmFjbmhDb2RlOiBkYXRhLkJyYWNuaENvZGUsXHJcbiAgICAgICAgcHJvZmlsZV9waWM6IGRhdGEucHJvZmlsZV9waWMsXHJcbiAgICAgICAgZmlyc3RfbmFtZTogZGF0YS5maXJzdF9uYW1lLFxyXG4gICAgICAgIGxhc3RfbmFtZTogZGF0YS5sYXN0X25hbWUsXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkdvdCB1c2VyXCIsIHVzZXIpO1xyXG5cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgQ29va2llcy5yZW1vdmUoXCJ0b2tlblwiKTtcclxuICAgIENvb2tpZXMucmVtb3ZlKFwidXNlcl9uaWNlbmFtZVwiKTtcclxuICAgIENvb2tpZXMucmVtb3ZlKFwidXNlcl9lbWFpbFwiKTtcclxuICAgIENvb2tpZXMucmVtb3ZlKFwiVXNlclR5cGVcIik7XHJcbiAgICBDb29raWVzLnJlbW92ZShcIkJyYWNuaENvZGVcIik7XHJcbiAgICBDb29raWVzLnJlbW92ZShcIkNvbXBhbnlDb2RlXCIpO1xyXG4gICAgQ29va2llcy5yZW1vdmUoXCJwcm9maWxlX3BpY1wiKTtcclxuICAgIENvb2tpZXMucmVtb3ZlKFwiZmlyc3RfbmFtZVwiKTtcclxuICAgIENvb2tpZXMucmVtb3ZlKFwibGFzdF9uYW1lXCIpO1xyXG5cclxuICAgIGFwaS5kZWZhdWx0cy5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSBgYDtcclxuXHJcbiAgICBzZXRVc2VyKG51bGwpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6ICEhdXNlcixcclxuICAgICAgICB1c2VyLFxyXG4gICAgICAgIGxvZ2luLFxyXG4gICAgICAgIGxvZ291dCxcclxuICAgICAgICBTZW5kY29uZCxcclxuICAgICAgICBwaG9uZUxvZ2luLFxyXG4gICAgICAgIGxvYWRpbmcsXHJcbiAgICAgICAgbG9nb3V0LFxyXG4gICAgICAgIHRvZ2dsZXIsXHJcbiAgICAgICAgc2V0dG9nZ2xlcixcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQXV0aCgpIHtcclxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcblxyXG4gIHJldHVybiBjb250ZXh0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUHJvdGVjdFJvdXRlKENvbXBvbmVudCkge1xyXG4gIHJldHVybiAoKSA9PiB7XHJcbiAgICBjb25zdCB7IHVzZXIsIGlzQXV0aGVudGljYXRlZCwgbG9hZGluZyB9ID0gdXNlQXV0aCgpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgaWYgKCFpc0F1dGhlbnRpY2F0ZWQgJiYgIWxvYWRpbmcpIHtcclxuICAgICAgICBSb3V0ZXIucHVzaChcIi9NYW5hZ2VtZW50XCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKGlzQXV0aGVudGljYXRlZCkge1xyXG4gICAgICAgIGlmICh1c2VyLlVzZXJUeXBlICE9IFwiYWRtaW5cIikgUm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICB9XHJcbiAgICB9LCBbbG9hZGluZywgaXNBdXRoZW50aWNhdGVkXSk7XHJcblxyXG4gICAgcmV0dXJuIDxDb21wb25lbnQgey4uLmFyZ3VtZW50c30gLz47XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFByb3RlY3RSb3V0ZUNvbXBhbnkoQ29tcG9uZW50KSB7XHJcbiAgcmV0dXJuICgpID0+IHtcclxuICAgIGNvbnN0IHsgdXNlciwgaXNBdXRoZW50aWNhdGVkLCBsb2FkaW5nIH0gPSB1c2VBdXRoKCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBpZiAoIWlzQXV0aGVudGljYXRlZCAmJiAhbG9hZGluZykge1xyXG4gICAgICAgIFJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKGlzQXV0aGVudGljYXRlZCkge1xyXG4gICAgICAgIGlmICh1c2VyLlVzZXJUeXBlICE9IFwiQ29tcGFueVwiKSBSb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgIH1cclxuICAgIH0sIFtsb2FkaW5nLCBpc0F1dGhlbnRpY2F0ZWRdKTtcclxuXHJcbiAgICByZXR1cm4gPENvbXBvbmVudCB7Li4uYXJndW1lbnRzfSAvPjtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUHJvdGVjdFJvdXRlTWFuZG9iZShDb21wb25lbnQpIHtcclxuICByZXR1cm4gKCkgPT4ge1xyXG4gICAgY29uc3QgeyB1c2VyLCBpc0F1dGhlbnRpY2F0ZWQsIGxvYWRpbmcgfSA9IHVzZUF1dGgoKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGlmICghaXNBdXRoZW50aWNhdGVkICYmICFsb2FkaW5nKSB7XHJcbiAgICAgICAgUm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgICAgIH0gZWxzZSBpZiAoaXNBdXRoZW50aWNhdGVkKSB7XHJcbiAgICAgICAgaWYgKHVzZXIuVXNlclR5cGUgIT0gXCJtYW5kb2JlXCIpIFJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgfVxyXG4gICAgfSwgW2xvYWRpbmcsIGlzQXV0aGVudGljYXRlZF0pO1xyXG5cclxuICAgIHJldHVybiA8Q29tcG9uZW50IHsuLi5hcmd1bWVudHN9IC8+O1xyXG4gIH07XHJcbn1cclxuIiwiZGVjbGFyZSBjb25zdCBfX05FWFRfREFUQV9fOiBhbnlcblxuaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHBhcnNlLCByZXNvbHZlLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQcmVmZXRjaE9wdGlvbnMgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7XG4gIGV4ZWNPbmNlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyBhZGRCYXNlUGF0aCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuXG5mdW5jdGlvbiBpc0xvY2FsKGhyZWY6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBjb25zdCB1cmwgPSBwYXJzZShocmVmLCBmYWxzZSwgdHJ1ZSlcbiAgY29uc3Qgb3JpZ2luID0gcGFyc2UoZ2V0TG9jYXRpb25PcmlnaW4oKSwgZmFsc2UsIHRydWUpXG5cbiAgcmV0dXJuIChcbiAgICAhdXJsLmhvc3QgfHwgKHVybC5wcm90b2NvbCA9PT0gb3JpZ2luLnByb3RvY29sICYmIHVybC5ob3N0ID09PSBvcmlnaW4uaG9zdClcbiAgKVxufVxuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBGb3JtYXRSZXN1bHQgPSB7IGhyZWY6IHN0cmluZzsgYXM/OiBzdHJpbmcgfVxuXG5mdW5jdGlvbiBtZW1vaXplZEZvcm1hdFVybChmb3JtYXRGdW5jOiAoaHJlZjogVXJsLCBhcz86IFVybCkgPT4gRm9ybWF0UmVzdWx0KSB7XG4gIGxldCBsYXN0SHJlZjogbnVsbCB8IFVybCA9IG51bGxcbiAgbGV0IGxhc3RBczogdW5kZWZpbmVkIHwgbnVsbCB8IFVybCA9IG51bGxcbiAgbGV0IGxhc3RSZXN1bHQ6IG51bGwgfCBGb3JtYXRSZXN1bHQgPSBudWxsXG4gIHJldHVybiAoaHJlZjogVXJsLCBhcz86IFVybCkgPT4ge1xuICAgIGlmIChsYXN0UmVzdWx0ICYmIGhyZWYgPT09IGxhc3RIcmVmICYmIGFzID09PSBsYXN0QXMpIHtcbiAgICAgIHJldHVybiBsYXN0UmVzdWx0XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gZm9ybWF0RnVuYyhocmVmLCBhcylcbiAgICBsYXN0SHJlZiA9IGhyZWZcbiAgICBsYXN0QXMgPSBhc1xuICAgIGxhc3RSZXN1bHQgPSByZXN1bHRcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0VXJsKHVybDogVXJsKTogc3RyaW5nIHtcbiAgcmV0dXJuIHVybCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCkgOiB1cmxcbn1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG5cbmxldCBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChvYnNlcnZlcikge1xuICAgIHJldHVybiBvYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmNsYXNzIExpbmsgZXh0ZW5kcyBDb21wb25lbnQ8TGlua1Byb3BzPiB7XG4gIHA6IGJvb2xlYW5cblxuICBjb25zdHJ1Y3Rvcihwcm9wczogTGlua1Byb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChwcm9wcy5wcmVmZXRjaCkge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuICB9XG5cbiAgY2xlYW5VcExpc3RlbmVycyA9ICgpID0+IHt9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzKClcbiAgfVxuXG4gIGdldFBhdGhzKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgICBjb25zdCB7IGhyZWY6IHBhcnNlZEhyZWYsIGFzOiBwYXJzZWRBcyB9ID0gdGhpcy5mb3JtYXRVcmxzKFxuICAgICAgdGhpcy5wcm9wcy5ocmVmLFxuICAgICAgdGhpcy5wcm9wcy5hc1xuICAgIClcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlKHBhdGhuYW1lLCBwYXJzZWRIcmVmKVxuICAgIHJldHVybiBbcmVzb2x2ZWRIcmVmLCBwYXJzZWRBcyA/IHJlc29sdmUocGF0aG5hbWUsIHBhcnNlZEFzKSA6IHJlc29sdmVkSHJlZl1cbiAgfVxuXG4gIGhhbmRsZVJlZihyZWY6IEVsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wICYmIEludGVyc2VjdGlvbk9ic2VydmVyICYmIHJlZiAmJiByZWYudGFnTmFtZSkge1xuICAgICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzKClcblxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID1cbiAgICAgICAgcHJlZmV0Y2hlZFtcbiAgICAgICAgICB0aGlzLmdldFBhdGhzKCkuam9pbihcbiAgICAgICAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICAgICAgICAnJSdcbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycyA9IGxpc3RlblRvSW50ZXJzZWN0aW9ucyhyZWYsICgpID0+IHtcbiAgICAgICAgICB0aGlzLnByZWZldGNoKClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBUaGUgZnVuY3Rpb24gaXMgbWVtb2l6ZWQgc28gdGhhdCBubyBleHRyYSBsaWZlY3ljbGVzIGFyZSBuZWVkZWRcbiAgLy8gYXMgcGVyIGh0dHBzOi8vcmVhY3Rqcy5vcmcvYmxvZy8yMDE4LzA2LzA3L3lvdS1wcm9iYWJseS1kb250LW5lZWQtZGVyaXZlZC1zdGF0ZS5odG1sXG4gIGZvcm1hdFVybHMgPSBtZW1vaXplZEZvcm1hdFVybCgoaHJlZiwgYXNIcmVmKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IGFkZEJhc2VQYXRoKGZvcm1hdFVybChocmVmKSksXG4gICAgICBhczogYXNIcmVmID8gYWRkQmFzZVBhdGgoZm9ybWF0VXJsKGFzSHJlZikpIDogYXNIcmVmLFxuICAgIH1cbiAgfSlcblxuICBsaW5rQ2xpY2tlZCA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3QgeyBub2RlTmFtZSwgdGFyZ2V0IH0gPSBlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgICBpZiAoXG4gICAgICBub2RlTmFtZSA9PT0gJ0EnICYmXG4gICAgICAoKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgICAgIGUubWV0YUtleSB8fFxuICAgICAgICBlLmN0cmxLZXkgfHxcbiAgICAgICAgZS5zaGlmdEtleSB8fFxuICAgICAgICAoZS5uYXRpdmVFdmVudCAmJiBlLm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKSlcbiAgICApIHtcbiAgICAgIC8vIGlnbm9yZSBjbGljayBmb3IgbmV3IHRhYiAvIG5ldyB3aW5kb3cgYmVoYXZpb3JcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCB7IGhyZWYsIGFzIH0gPSB0aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLCB0aGlzLnByb3BzLmFzKVxuXG4gICAgaWYgKCFpc0xvY2FsKGhyZWYpKSB7XG4gICAgICAvLyBpZ25vcmUgY2xpY2sgaWYgaXQncyBvdXRzaWRlIG91ciBzY29wZSAoZS5nLiBodHRwczovL2dvb2dsZS5jb20pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgICBocmVmID0gcmVzb2x2ZShwYXRobmFtZSwgaHJlZilcbiAgICBhcyA9IGFzID8gcmVzb2x2ZShwYXRobmFtZSwgYXMpIDogaHJlZlxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgICBsZXQgeyBzY3JvbGwgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgICB9XG5cbiAgICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgICBSb3V0ZXJbdGhpcy5wcm9wcy5yZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgICAgc2hhbGxvdzogdGhpcy5wcm9wcy5zaGFsbG93LFxuICAgIH0pLnRoZW4oKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcHJlZmV0Y2gob3B0aW9ucz86IFByZWZldGNoT3B0aW9ucyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wIHx8IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gICAgY29uc3QgcGF0aHMgPSB0aGlzLmdldFBhdGhzKClcbiAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gICAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gICAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gICAgUm91dGVyLnByZWZldGNoKHBhdGhzWy8qIGhyZWYgKi8gMF0sIHBhdGhzWy8qIGFzUGF0aCAqLyAxXSwgb3B0aW9ucykuY2F0Y2goXG4gICAgICAoZXJyKSA9PiB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgICAgIHRocm93IGVyclxuICAgICAgICB9XG4gICAgICB9XG4gICAgKVxuICAgIHByZWZldGNoZWRbXG4gICAgICBwYXRocy5qb2luKFxuICAgICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgICAnJSdcbiAgICAgIClcbiAgICBdID0gdHJ1ZVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBocmVmLCBhcyB9ID0gdGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZiwgdGhpcy5wcm9wcy5hcylcbiAgICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICAgIH1cblxuICAgIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICAgIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICAgIGNvbnN0IHByb3BzOiB7XG4gICAgICBvbk1vdXNlRW50ZXI6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgICAgaHJlZj86IHN0cmluZ1xuICAgICAgcmVmPzogYW55XG4gICAgfSA9IHtcbiAgICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5oYW5kbGVSZWYoZWwpXG5cbiAgICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uTW91c2VFbnRlcjogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByZWZldGNoKHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICAgIH0sXG4gICAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICB0aGlzLmxpbmtDbGlja2VkKGUpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfVxuXG4gICAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gICAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gICAgaWYgKFxuICAgICAgdGhpcy5wcm9wcy5wYXNzSHJlZiB8fFxuICAgICAgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpXG4gICAgKSB7XG4gICAgICBwcm9wcy5ocmVmID0gYXMgfHwgaHJlZlxuICAgIH1cblxuICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICBpZiAoXG4gICAgICAgIHByb3BzLmhyZWYgJiZcbiAgICAgICAgdHlwZW9mIF9fTkVYVF9EQVRBX18gIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydFxuICAgICAgKSB7XG4gICAgICAgIHByb3BzLmhyZWYgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChwcm9wcy5ocmVmKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHByb3BzKVxuICB9XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICBjb25zdCB3YXJuID0gZXhlY09uY2UoY29uc29sZS5lcnJvcilcblxuICAvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbiAgY29uc3QgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpXG4gIGNvbnN0IGV4YWN0ID0gcmVxdWlyZSgncHJvcC10eXBlcy1leGFjdCcpXG4gIC8vIEB0cy1pZ25vcmUgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgd2hlbiBkZWNsYXJpbmcgaXQgb24gdGhlIGNsYXNzIGl0IG91dHB1dHMgYW4gZXh0cmEgYml0IG9mIGNvZGUgd2hpY2ggaXMgbm90IG5lZWRlZC5cbiAgTGluay5wcm9wVHlwZXMgPSBleGFjdCh7XG4gICAgaHJlZjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWQsXG4gICAgYXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgICBwcmVmZXRjaDogUHJvcFR5cGVzLmJvb2wsXG4gICAgcmVwbGFjZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hhbGxvdzogUHJvcFR5cGVzLmJvb2wsXG4gICAgcGFzc0hyZWY6IFByb3BUeXBlcy5ib29sLFxuICAgIHNjcm9sbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAocHJvcHM6IGFueSwgcHJvcE5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHByb3BzW3Byb3BOYW1lXVxuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgIGBXYXJuaW5nOiBZb3UncmUgdXNpbmcgYSBzdHJpbmcgZGlyZWN0bHkgaW5zaWRlIDxMaW5rPi4gVGhpcyB1c2FnZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgYWRkIGFuIDxhPiB0YWcgYXMgY2hpbGQgb2YgPExpbms+YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9LFxuICAgIF0pLmlzUmVxdWlyZWQsXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKHt9LCBfcm91dGVyW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHBhcnNlLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpICE9PSAwID8gYmFzZVBhdGggKyBwYXRoIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgPT09IDBcbiAgICA/IHBhdGguc3Vic3RyKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG4gICAgOiBwYXRoXG59XG5cbmZ1bmN0aW9uIHRvUm91dGUocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLydcbn1cblxuY29uc3QgcHJlcGFyZVJvdXRlID0gKHBhdGg6IHN0cmluZykgPT5cbiAgdG9Sb3V0ZSghcGF0aCB8fCBwYXRoID09PSAnLycgPyAnL2luZGV4JyA6IHBhdGgpXG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbnR5cGUgQ29tcG9uZW50UmVzID0geyBwYWdlOiBDb21wb25lbnRUeXBlOyBtb2Q6IGFueSB9XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG50eXBlIFJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogYW55XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFJvdXRlSW5mbywgQXBwPzogQ29tcG9uZW50VHlwZSkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IGFueSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5IHwgbnVsbCxcbiAgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4sXG4gIGNiPzogKC4uLmFyZ3M6IGFueSkgPT4gYW55XG4pIHtcbiAgbGV0IGF0dGVtcHRzID0gaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMVxuICBmdW5jdGlvbiBnZXRSZXNwb25zZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBmZXRjaChcbiAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKFxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgX19ORVhUX0RBVEFfX1xuICAgICAgICAgIGAvX25leHQvZGF0YS8ke19fTkVYVF9EQVRBX18uYnVpbGRJZH0ke2RlbEJhc2VQYXRoKHBhdGhuYW1lKX0uanNvbmBcbiAgICAgICAgKSxcbiAgICAgICAgcXVlcnksXG4gICAgICB9KSxcbiAgICAgIHtcbiAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICB9XG4gICAgKS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgIGlmICgtLWF0dGVtcHRzID4gMCAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIGNiID8gY2IoZGF0YSkgOiBkYXRhXG4gICAgfSlcbiAgICAuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgIC8vIGxvb3AuXG4gICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgIDsoZXJyIGFzIGFueSkuY29kZSA9ICdQQUdFX0xPQURfRVJST1InXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQ29tcG9uZW50VHlwZVxuICAgICAgd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0geyBDb21wb25lbnQ6IEFwcCB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBhc1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcbiAgICB9XG4gIH1cblxuICAvLyBAZGVwcmVjYXRlZCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBldmVuIHRob3VnaCBpdCdzIGEgcHJpdmF0ZSBtZXRob2QuXG4gIHN0YXRpYyBfcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgcmV0dXJuIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHVybFxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGlmICghZS5zdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAoXG4gICAgICBlLnN0YXRlICYmXG4gICAgICB0aGlzLmlzU3NyICYmXG4gICAgICBlLnN0YXRlLmFzID09PSB0aGlzLmFzUGF0aCAmJlxuICAgICAgcGFyc2UoZS5zdGF0ZS51cmwpLnBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lXG4gICAgKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoZS5zdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gZS5zdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ2Bwb3BzdGF0ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ1dCBgZXZlbnQuc3RhdGVgIGRpZCBub3QgaGF2ZSBgdXJsYCBvciBgYXNgIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3BvcHN0YXRlLXN0YXRlLWVtcHR5J1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgdXBkYXRlKHJvdXRlOiBzdHJpbmcsIG1vZDogYW55KSB7XG4gICAgY29uc3QgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlID0gbW9kLmRlZmF1bHQgfHwgbW9kXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKVxuICAgIH1cblxuICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBDb21wb25lbnQsXG4gICAgICBfX05fU1NHOiBtb2QuX19OX1NTRyxcbiAgICAgIF9fTl9TU1A6IG1vZC5fX05fU1NQLFxuICAgIH0pXG4gICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGFcblxuICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgIGlmIChyb3V0ZSA9PT0gJy9fYXBwJykge1xuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKVxuICAgIH1cbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICBfdXJsOiBVcmwsXG4gICAgX2FzOiBVcmwsXG4gICAgb3B0aW9uczogYW55XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgICB9XG4gICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICBpZiAoU1QpIHtcbiAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgICAgfVxuXG4gICAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgICBsZXQgdXJsID0gdHlwZW9mIF91cmwgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24oX3VybCkgOiBfdXJsXG4gICAgICBsZXQgYXMgPSB0eXBlb2YgX2FzID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKF9hcykgOiBfYXNcblxuICAgICAgdXJsID0gYWRkQmFzZVBhdGgodXJsKVxuICAgICAgYXMgPSBhZGRCYXNlUGF0aChhcylcblxuICAgICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5IGZvciB0aGUgU1NSIHBhZ2UuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgICAgaWYgKF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCkge1xuICAgICAgICAgIGFzID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQoYXMpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQoYXMpXG5cbiAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGFzKSkge1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChhcylcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnksIHByb3RvY29sIH0gPSBwYXJzZSh1cmwsIHRydWUpXG5cbiAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSlcbiAgICAgIH1cblxuICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgIGlmICghdGhpcy51cmxJc05ldyhhcykpIHtcbiAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKVxuICAgICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSBwYXJzZShhcylcbiAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgICApXG5cbiAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZWplY3QoXG4gICAgICAgICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgICAgLy8gSWYgc2hhbGxvdyBpcyB0cnVlIGFuZCB0aGUgcm91dGUgZXhpc3RzIGluIHRoZSByb3V0ZXIgY2FjaGUgd2UgcmV1c2UgdGhlIHByZXZpb3VzIHJlc3VsdFxuICAgICAgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cpLnRoZW4oXG4gICAgICAgIChyb3V0ZUluZm8pID0+IHtcbiAgICAgICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm9cblxuICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVJbmZvKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgYXMpXG4gICAgICAgICAgICAgIHRocm93IGVycm9yXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSlcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICByZWplY3RcbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxSb3V0ZUluZm8+IHtcbiAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAvLyBJZiB0aGVyZSBpcyBhIHNoYWxsb3cgcm91dGUgdHJhbnNpdGlvbiBwb3NzaWJsZVxuICAgIC8vIElmIHRoZSByb3V0ZSBpcyBhbHJlYWR5IHJlbmRlcmVkIG9uIHRoZSBzY3JlZW4uXG4gICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNhY2hlZFJvdXRlSW5mbylcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVFcnJvciA9IChcbiAgICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICAgICkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ1BBR0VfTE9BRF9FUlJPUicgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgLy8gU28sIHdlIG5lZWQgdG8gbWFyayBpdCBhcyBhIGNhbmNlbGxlZCBlcnJvciBhbmQgc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc29sdmUoXG4gICAgICAgICAgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSByZXNcbiAgICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvOiBSb3V0ZUluZm8gPSB7IENvbXBvbmVudCwgZXJyIH1cbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIH0gYXMgYW55KS50aGVuKFxuICAgICAgICAgICAgICAgICAgKHByb3BzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVyclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbylcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAoZ2lwRXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsXG4gICAgICAgICAgICAgICAgICAgICAgZ2lwRXJyXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGhhbmRsZUVycm9yKGVyciwgdHJ1ZSkpXG4gICAgICAgIClcbiAgICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPlxuICAgIH1cblxuICAgIHJldHVybiAobmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKGNhY2hlZFJvdXRlSW5mbykge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oXG4gICAgICAgIChyZXMpID0+XG4gICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pLFxuICAgICAgICByZWplY3RcbiAgICAgIClcbiAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz4pXG4gICAgICAudGhlbigocm91dGVJbmZvOiBSb3V0ZUluZm8pID0+IHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0RGF0YTxSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgICAgX19OX1NTR1xuICAgICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGFzKVxuICAgICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoYXMpXG4gICAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICAgIClcbiAgICAgICAgKS50aGVuKChwcm9wcykgPT4ge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpXG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcHJvdG9jb2wgfSA9IHBhcnNlKHVybClcblxuICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGNvbnN0IHJvdXRlID0gZGVsQmFzZVBhdGgodG9Sb3V0ZShwYXRobmFtZSkpXG4gICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBkZWxCYXNlUGF0aChhc1BhdGgpKSxcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgICAgXSkudGhlbigoKSA9PiByZXNvbHZlKCksIHJlamVjdClcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Q29tcG9uZW50UmVzPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG4gICAgcm91dGUgPSBkZWxCYXNlUGF0aChyb3V0ZSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YSA9IChhc1BhdGg6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiA9PiB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGFyc2UoYXNQYXRoKS5wYXRobmFtZSEpXG5cbiAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1twYXRobmFtZV1cbiAgICAgID8gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW3BhdGhuYW1lXSlcbiAgICAgIDogZmV0Y2hOZXh0RGF0YShcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIHRoaXMuaXNTc3IsXG4gICAgICAgICAgKGRhdGEpID0+ICh0aGlzLnNkY1twYXRobmFtZV0gPSBkYXRhKVxuICAgICAgICApXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YSA9IChhc1BhdGg6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiA9PiB7XG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZShhc1BhdGgsIHRydWUpXG4gICAgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGF0aG5hbWUhKVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHApXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgY29uc3QgZSA9IG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJylcbiAgICAgIDsoZSBhcyBhbnkpLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGUsIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogeyBwb3M6IG51bWJlcjsgcmVwZWF0OiBib29sZWFuIH0gfVxufSB7XG4gIC8vIEVzY2FwZSBhbGwgY2hhcmFjdGVycyB0aGF0IGNvdWxkIGJlIGNvbnNpZGVyZWQgUmVnRXhcbiAgY29uc3QgZXNjYXBlZFJvdXRlID0gZXNjYXBlUmVnZXgobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiB7IHBvczogbnVtYmVyOyByZXBlYXQ6IGJvb2xlYW4gfSB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG5cbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoXG4gICAgL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZyxcbiAgICAoXywgJDEpID0+IHtcbiAgICAgIGNvbnN0IGlzT3B0aW9uYWwgPSAvXlxcXFxcXFsuKlxcXFxcXF0kLy50ZXN0KCQxKVxuICAgICAgaWYgKGlzT3B0aW9uYWwpIHtcbiAgICAgICAgJDEgPSAkMS5zbGljZSgyLCAtMilcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSlcbiAgICAgIGlmIChpc0NhdGNoQWxsKSB7XG4gICAgICAgICQxID0gJDEuc2xpY2UoNilcbiAgICAgIH1cbiAgICAgIGdyb3Vwc1tcbiAgICAgICAgJDFcbiAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgXSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdDogaXNDYXRjaEFsbCB9XG4gICAgICByZXR1cm4gaXNDYXRjaEFsbCA/IChpc09wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgfVxuICApXG5cbiAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZShcbiAgICAgIC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csXG4gICAgICAoXywgJDEpID0+IHtcbiAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKVxuICAgICAgICBjb25zdCBrZXkgPSAkMVxuICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpXG5cbiAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGxcbiAgICAgICAgICA/IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT4uKz8pYFxuICAgICAgICAgIDogYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9PlteL10rPylgXG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cCgnXicgKyBwYXJhbWV0ZXJpemVkUm91dGUgKyAnKD86Lyk/JCcsICdpJyksXG4gICAgZ3JvdXBzLFxuICAgIG5hbWVkUmVnZXg6IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlXG4gICAgICA/IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYFxuICAgICAgOiB1bmRlZmluZWQsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGZvcm1hdCwgVVJMRm9ybWF0T3B0aW9ucywgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICcuLi8uLi9saWIvbG9hZC1lbnYtY29uZmlnJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBhbnlcbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBpbnRlcmZhY2UtbmFtZVxuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBzdGF0aWNNYXJrdXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkZXZGaWxlczogc3RyaW5nW11cbiAgZmlsZXM6IHN0cmluZ1tdXG4gIGxvd1ByaW9yaXR5RmlsZXM6IHN0cmluZ1tdXG4gIHBvbHlmaWxsRmlsZXM6IHN0cmluZ1tdXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaHRtbFByb3BzOiBhbnlcbiAgYm9keVRhZ3M6IGFueVtdXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICB1cmw6IFVybE9iamVjdCxcbiAgb3B0aW9ucz86IFVSTEZvcm1hdE9wdGlvbnNcbik6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXQodXJsIGFzIFVSTCwgb3B0aW9ucylcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBZG1pbl9uYXYgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvQWRtaW5fbmF2XCI7XHJcbmltcG9ydCBIZWFkZXJOYXYgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvSGVhZGVyTmF2XCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XHJcbmltcG9ydCBCcmFuY2hDb3Vib25UYWJsZSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9CcmFuY2hDb3Vib25UYWJsZVwiO1xyXG5pbXBvcnQgTmV3QnJhbmNoRm9ybSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9OZXdCcmFuY2hGb3JtXCI7XHJcbmltcG9ydCBFZGl0QnJhbmNoRm9ybSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9FZGl0QnJhbmNoRm9ybVwiO1xyXG5cclxuaW1wb3J0IHVzZUF1dGgsIHsgUHJvdGVjdFJvdXRlIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnRleHRzL2F1dGguanNcIjtcclxuaW1wb3J0IHsgZ2V0Q29tcGFueSB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9hcGlfZ2V0XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFNrZWxldG9uIGZyb20gXCJyZWFjdC1sb2FkaW5nLXNrZWxldG9uXCI7XHJcbmltcG9ydCB7IG11dGF0ZSB9IGZyb20gXCJzd3JcIjtcclxuXHJcbmZ1bmN0aW9uIGNvbXBhbnkoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgLy9jb25zdCBbY3VycmVudENpdHksIHNldEN1cnJlbnRDaXR5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IHsgbmFtZSB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IHsgdG9nZ2xlciwgc2V0dG9nZ2xlciwgbG9hZGluZyB9ID0gdXNlQXV0aCgpO1xyXG5cclxuICBjb25zdCB7IGRhdGEsIGlzTG9hZGluZywgaXNFcnJvciB9ID0gZ2V0Q29tcGFueShuYW1lKTtcclxuICBjb25zdCByZXN1bHRzID0gaXNMb2FkaW5nID8gZmFsc2UgOiBkYXRhLmRhdGE7XHJcblxyXG4gIGNvbnN0IHNob3dTa2VsZXRvbiA9IGlzTG9hZGluZyB8fCBsb2FkaW5nO1xyXG4gIGNvbnN0IFtjaG9vc2UsIHNldENob29zZV0gPSB1c2VTdGF0ZShcImJyYW5jaGVzXCIpO1xyXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIGNvbnN0IFticmFuY2hfaWQsIHNldEJyYW5jaF9pZF0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtCcmFjbmhDb2RlLCBzZXRCcmFjbmhDb2RlXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2JwaG9uZSwgc2V0YnBob25lXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2JuYW1lLCBzZXRibmFtZV0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICBjb25zdCBbQnJhbmNoLCBzZXRCcmFuY2hdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbZWRpdCwgc2V0ZWRpdF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFtuZXdDb21wYW55LCBzZXRuZXdDb21wYW55XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBmdW5jdGlvbiBjaGFuZ2VDaG9vc2UobXljaG9zZW4pIHtcclxuICAgIHNldENob29zZShteWNob3Nlbik7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGNoYW5nZW5ld0NvbXBhbnkoKSB7XHJcbiAgICBzZXRuZXdDb21wYW55KGZhbHNlKTtcclxuICAgIHNldGVkaXQoZmFsc2UpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBHb0JhY2tBbmRUcmlnZ2VyTXV0YXRpb24oKSB7XHJcbiAgICBtdXRhdGUoXCJhcGkvZ2V0Q29tcGFueT9uYW1lPVwiICsgbmFtZSk7XHJcblxyXG4gICAgc2V0bmV3Q29tcGFueShmYWxzZSk7XHJcbiAgICBzZXRlZGl0KGZhbHNlKTtcclxuICB9XHJcbiAgY29uc3QgW0JyYW5jaG5hbWUsIHNldEJyYW5jaG5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NvbXBuYW1lLCBzZXRjb21wbmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgZnVuY3Rpb24gZGlzcGxheUNhcmRzKHJlc3VsdHMpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5DdXJyZW50Q2l0eSA9IFwiXCI7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIHtjaG9vc2UgPT0gXCJicmFuY2hlc1wiID8gKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmbG9hdDogXCJyaWdodFwiIH19PlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvY29tcGFueXNcIik7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWljb24gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJidG4taW5uZXItLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1hcnJvdy1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8aDIgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMC44ZW1cIiwgZGlzcGxheTogXCJpbmxpbmVcIiB9fT5cclxuICAgICAgICAgICAgICAgINin2K7YqtixINin2YTZgdix2LkgOlxyXG4gICAgICAgICAgICAgIDwvaDI+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY2xlYXI6IFwiYm90aFwiIH19PjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjbGVhcjogXCJib3RoXCIgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteGwtMTIgY29sLW1kLTEyXCIgc3R5bGU9e3sgaGVpZ2h0OiBcIjUwcHhcIiB9fT48L2Rpdj5cclxuICAgICAgICAgICAge3Jlc3VsdHMubWFwKChicmFuY2gsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKGJyYW5jaC5jaXR5ID09IGxvY2FsU3RvcmFnZS5DdXJyZW50Q2l0eSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhsLTMgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGNhcmQtc3RhdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1pY29uIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBcImxlZnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHpJbmRleDogOTk5OTk5OTk5OSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxNyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldGVkaXQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRuZXdDb21wYW55KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2hvb3NlKFwiYnJhbmNoZXNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRCcmFuY2goYnJhbmNoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEJyYW5jaG5hbWUoXCIgXCIgKyBicmFuY2guYnJhbmNoX25hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Y29tcG5hbWUoYnJhbmNoLmNvbXBhbnlfbmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvcG5nLzUxMi84NC84NDM4MC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjYXJkLWJvZHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEJyYW5jaF9pZChicmFuY2guaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QnJhY25oQ29kZShicmFuY2guQnJhY25oQ29kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDaG9vc2UoXCJjb3Vib25zXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QnJhbmNobmFtZShcIiAgXCIgKyBicmFuY2guYnJhbmNoX25hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Y29tcG5hbWUoYnJhbmNoLmNvbXBhbnlfbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRicGhvbmUoYnJhbmNoLnBob25lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldGJuYW1lKGJyYW5jaC5maXJzdE5hbWUgKyBcIiBcIiArIGJyYW5jaC5sYXN0TmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0Q29tcGFueShjb21wLmJyYW5jaGVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaWNvbiBpY29uLXNoYXBlIGJnLWdyYWRpZW50LXByaW1hcnkgdGV4dC13aGl0ZSByb3VuZGVkLWNpcmNsZSBzaGFkb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIm5pIG5pLXNob3BcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaDIgZm9udC13ZWlnaHQtYm9sZCBtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2JyYW5jaC5icmFuY2hfbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJjYXJkLXRpdGxlIHRleHQtdXBwZXJjYXNlIHRleHQtbXV0ZWQgbWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHticmFuY2guU2hvcnREZXNjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLkN1cnJlbnRDaXR5ID0gYnJhbmNoLmNpdHk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteGwtMTIgY29sLW1kLTEyXCIgc3R5bGU9e3sgaGVpZ2h0OiBcIjUwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMT57YnJhbmNoLmNpdHl9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14bC0zIGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBjYXJkLXN0YXRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4taWNvbiBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogXCJsZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IDk5OTk5OTk5OTksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMTcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImhlZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZHJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0ZWRpdCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldG5ld0NvbXBhbnkodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDaG9vc2UoXCJicmFuY2hlc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEJyYW5jaChicmFuY2gpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QnJhbmNobmFtZShcIiAgXCIgKyBicmFuY2guYnJhbmNoX25hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Y29tcG5hbWUoYnJhbmNoLmNvbXBhbnlfbmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvcG5nLzUxMi84NC84NDM4MC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjYXJkLWJvZHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEJyYW5jaF9pZChicmFuY2guaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QnJhY25oQ29kZShicmFuY2guQnJhY25oQ29kZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2hvb3NlKFwiY291Ym9uc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEJyYW5jaG5hbWUoXCIgIFwiICsgYnJhbmNoLmJyYW5jaF9uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldGNvbXBuYW1lKGJyYW5jaC5jb21wYW55X25hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0YnBob25lKGJyYW5jaC5waG9uZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRibmFtZShicmFuY2guZmlyc3ROYW1lICsgXCIgXCIgKyBicmFuY2gubGFzdE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4taWNvbiBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IFwibGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IDk5OTk5OTk5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9wbmcvNTEyLzg0Lzg0MzgwLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImljb24gaWNvbi1zaGFwZSBiZy1ncmFkaWVudC1wcmltYXJ5IHRleHQtd2hpdGUgcm91bmRlZC1jaXJjbGUgc2hhZG93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJuaSBuaS1zaG9wXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImgyIGZvbnQtd2VpZ2h0LWJvbGQgbWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHticmFuY2guYnJhbmNoX25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwiY2FyZC10aXRsZSB0ZXh0LXVwcGVyY2FzZSB0ZXh0LW11dGVkIG1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YnJhbmNoLlNob3J0RGVzY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KX17XCIgXCJ9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogY2hvb3NlID09IFwiY291Ym9uc1wiID8gKFxyXG4gICAgICAgICAgPEJyYW5jaENvdWJvblRhYmxlXHJcbiAgICAgICAgICAgIGJyYW5jaF9pZD17YnJhbmNoX2lkfVxyXG4gICAgICAgICAgICBjb21wYW55TmFtZT17bmFtZX1cclxuICAgICAgICAgICAgc2V0Q2hvb3NlPXtjaGFuZ2VDaG9vc2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICBcIlwiXHJcbiAgICAgICAgKX1cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxib2R5IGNsYXNzTmFtZT1cInJ0bCBnLXNpZGVuYXYtc2hvdyBnLXNpZGVuYXYtcGlubmVkXCIgZGlyPVwicnRsXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHsvKiBTaWRlbmF2ICovfVxyXG5cclxuICAgICAgICAgIHt0b2dnbGVyID8gPEFkbWluX25hdiAvPiA6IFwiXCJ9XHJcbiAgICAgICAgICB7LyogTWFpbiBjb250ZW50ICovfVxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250ZW50XCIgaWQ9XCJwYW5lbFwiPlxyXG4gICAgICAgICAgICB7LyogVG9wbmF2ICovfVxyXG4gICAgICAgICAgICA8SGVhZGVyTmF2IC8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBtdC0tNlwiPlxyXG4gICAgICAgICAgICAgIHtjaG9vc2UgPT0gXCJjb3Vib25zXCIgPyAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICA8QnJhbmNoQ291Ym9uVGFibGVcclxuICAgICAgICAgICAgICAgICAgICBicmFuY2hfaWQ9e2JyYW5jaF9pZH1cclxuICAgICAgICAgICAgICAgICAgICBCcmFjbmhDb2RlPXtCcmFjbmhDb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBhbnlOYW1lPXtjb21wbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBCcmFuY2huYW1lPXtCcmFuY2huYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldENob29zZT17Y2hhbmdlQ2hvb3NlfVxyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RPZkJyYW5jaGVzPXtyZXN1bHRzfVxyXG4gICAgICAgICAgICAgICAgICAgIEZ1bGxEZXNjPXtyZXN1bHRzWzBdLkZ1bGxEZXNjfVxyXG4gICAgICAgICAgICAgICAgICAgIGxvZ289e3Jlc3VsdHNbMF0ubG9nb31cclxuICAgICAgICAgICAgICAgICAgICBibmFtZT17Ym5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgYnBob25lPXticGhvbmV9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBjb2wgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyIGJnLXRyYW5zcGFyZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi0wXCI+2YHYsdmI2Lkg2KfZhNi02LHZg9ipPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmbG9hdDogXCJsZWZ0XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRuZXdDb21wYW55KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXRDaG9vc2UoXCJicmFuY2hlc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4taWNvbiBidG4tZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnRuLWlubmVyLS1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINil2YbYtNin2KEge2Nob29zZSA9PSBcImJyYW5jaGVzXCIgPyBcItmB2LHYuVwiIDogXCLZg9mI2KjZiNmGXCJ9e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICDYrNiv2YrYr1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAge25ld0NvbXBhbnkgPT0gZmFsc2UgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Jlc3VsdHMgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmNGYwZjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMjBweFwiLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiNSVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm93XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cmVzdWx0c1swXS5sb2dvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjhweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgY29sb3I6IFwiIzIzNEI1NVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jlc3VsdHNbMF0uY29tcGFueV9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3Jlc3VsdHNbMF0uRnVsbERlc2N9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVzdWx0cyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMgPT0gXCJOb19kYXRhXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxvYXQ6IFwicmlnaHRcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL2NvbXBhbnlzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1pY29uIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnRuLWlubmVyLS1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmYSBmYS1hcnJvdy1yaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjAuOGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINin2K7YqtixINin2YTZgdix2LkgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY2xlYXI6IFwiYm90aFwiIH19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMC44ZW1cIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINmE2Kcg2YrZiNis2K8g2KjZitin2YbYp9iqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Q2FyZHMocmVzdWx0cylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93U2tlbGV0b24gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2tlbGV0b24gaGVpZ2h0PXs0MH0gY291bnQ9ezEwfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hvb3NlID09IFwiYnJhbmNoZXNcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXQgPT0gZmFsc2UgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOZXdCcmFuY2hGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFueV9pZD17cmVzdWx0c1swXS5jb21wYW55X2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdvQmFja0FuZFRyaWdnZXJNdXRhdGlvbj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHb0JhY2tBbmRUcmlnZ2VyTXV0YXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlbmV3Q29tcGFueT17Y2hhbmdlbmV3Q29tcGFueX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wYW55TmFtZT17cmVzdWx0c1swXS5jb21wYW55X25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdEJyYW5jaEZvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wYW55X2lkPXtyZXN1bHRzWzBdLmNvbXBhbnlfaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR29CYWNrQW5kVHJpZ2dlck11dGF0aW9uPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdvQmFja0FuZFRyaWdnZXJNdXRhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wYW55TmFtZT17Y29tcG5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQnJhbmNobmFtZT17QnJhbmNobmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VuZXdDb21wYW55PXtjaGFuZ2VuZXdDb21wYW55fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyYW5jaD17QnJhbmNofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7LyogQXJnb24gU2NyaXB0cyAqL31cclxuICAgICAgICAgIHsvKiBDb3JlICovfVxyXG4gICAgICAgICAgey8qIE9wdGlvbmFsIEpTICovfVxyXG4gICAgICAgICAgey8qIEFyZ29uIEpTICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2JvZHk+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm90ZWN0Um91dGUoY29tcGFueSk7XHJcbiIsImltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxuY29uc3Qgc2l0ZVVybCA9IENvb2tpZXMuZ2V0KFwic2l0ZVVybFwiKTtcclxuaWYgKCFzaXRlVXJsKSB7XHJcbiAgQ29va2llcy5zZXQoXCJzaXRlVXJsXCIsIFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL1wiLCB7XHJcbiAgICBleHBpcmVzOiA2MCxcclxuICB9KTtcclxufVxyXG5sZXQgdXJscyA9IHtcclxuICBkZXZlbG9wbWVudDogXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvXCIsXHJcbiAgcHJvZHVjdGlvbjogXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvXCIsXHJcbn07XHJcbmNvbnN0IGFwaSA9IEF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogdXJsc1twcm9jZXNzLmVudi5OT0RFX0VOVl0sXHJcbiAgaGVhZGVyczoge1xyXG4gICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBpO1xyXG4iLCJpbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcclxuaW1wb3J0IGFwaSBmcm9tIFwiLi4vc2VydmljZXMvQXBpXCI7XHJcbmltcG9ydCB1c2VBdXRoLCB7IFByb3RlY3RSb3V0ZSB9IGZyb20gXCIuLi9jb250ZXh0cy9hdXRoLmpzXCI7XHJcblxyXG5mdW5jdGlvbiBhcGlfZ2V0KCkge1xyXG4gIC8vIGNvbnN0IFt0ZXN0cywgc2V0dGVzdHNdID0gdXNlU3RhdGUoKTtcclxuICAvLyBjb25zdCBbc2hvd1NrZWxldG9uLCBzZXRzaG93U2tlbGV0b25dID0gdXNlU3RhdGUoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbXBhbnkobmFtZSkge1xyXG4gIGNvbnN0IHsgbG9hZGluZyB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcclxuICAgIGxvYWRpbmcgPyBmYWxzZSA6IFwiYXBpL2dldENvbXBhbnk/bmFtZT1cIiArIG5hbWUsXHJcbiAgICBhcGkuZ2V0XHJcbiAgKTtcclxuICByZXR1cm4ge1xyXG4gICAgZGF0YTogZGF0YSxcclxuICAgIGlzTG9hZGluZzogIWVycm9yICYmICFkYXRhLFxyXG4gICAgaXNFcnJvcjogZXJyb3IsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNwb25zb3JzKHBob25lLCBnZXRUeXBlKSB7XHJcbiAgY29uc3QgeyBsb2FkaW5nIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgbG9hZGluZ1xyXG4gICAgICA/IGZhbHNlXHJcbiAgICAgIDogXCJhcGkvZ2V0U3BvbnNvcnM/cGhvbmU9XCIgKyBwaG9uZSArIFwiJmdldFR5cGU9XCIgKyBnZXRUeXBlLFxyXG4gICAgYXBpLmdldFxyXG4gICk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgICBpc0xvYWRpbmc6ICFlcnJvciAmJiAhZGF0YSxcclxuICAgIGlzRXJyb3I6IGVycm9yLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRGdWxsQ0NBcyhwYWdldXApIHtcclxuICBjb25zdCB7IGxvYWRpbmcgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICBsb2FkaW5nID8gZmFsc2UgOiBcImFwaS9HZXRGdWxsQ0NBcz9wYWdldXA9XCIgKyBwYWdldXAsXHJcbiAgICBhcGkuZ2V0XHJcbiAgKTtcclxuICByZXR1cm4ge1xyXG4gICAgZGF0YTogZGF0YSxcclxuICAgIGlzTG9hZGluZzogIWVycm9yICYmICFkYXRhLFxyXG4gICAgaXNFcnJvcjogZXJyb3IsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdldEFsbE1hbmRvYmVzKCkge1xyXG4gIGNvbnN0IHsgbG9hZGluZyB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcclxuICAgIGxvYWRpbmcgPyBmYWxzZSA6IFwiYXBpL0dldEFsbE1hbmRvYmVzXCIsXHJcbiAgICBhcGkuZ2V0XHJcbiAgKTtcclxuICByZXR1cm4ge1xyXG4gICAgZGF0YTogZGF0YSxcclxuICAgIGlzTG9hZGluZzogIWVycm9yICYmICFkYXRhLFxyXG4gICAgaXNFcnJvcjogZXJyb3IsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdldEMoKSB7XHJcbiAgY29uc3QgeyBsb2FkaW5nIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKGxvYWRpbmcgPyBmYWxzZSA6IFwiYXBpL0dldENcIiwgYXBpLmdldCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgICBpc0xvYWRpbmc6ICFlcnJvciAmJiAhZGF0YSxcclxuICAgIGlzRXJyb3I6IGVycm9yLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDb21wYW55c1N0YXRpc3RpYyhuYW1lKSB7XHJcbiAgY29uc3QgeyBsb2FkaW5nIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgbG9hZGluZyA/IGZhbHNlIDogXCJhcGkvQ29tcGFueXNTdGF0aXN0aWM/bmFtZT1cIiArIG5hbWUsXHJcbiAgICBhcGkuZ2V0XHJcbiAgKTtcclxuICByZXR1cm4ge1xyXG4gICAgZGF0YTogZGF0YSxcclxuICAgIGlzTG9hZGluZzogIWVycm9yICYmICFkYXRhLFxyXG4gICAgaXNFcnJvcjogZXJyb3IsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFVzZXJTdGF0aXN0aWNzKHVzZXJfaWQsIHBhZ2V1cCkge1xyXG4gIGNvbnN0IHsgbG9hZGluZyB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcclxuICAgIGxvYWRpbmdcclxuICAgICAgPyBmYWxzZVxyXG4gICAgICA6IFwiYXBpL1VzZXJTdGF0aXN0aWNzP3VzZXJfaWQ9XCIgKyB1c2VyX2lkICsgXCImcGFnZXVwPVwiICsgcGFnZXVwLFxyXG4gICAgYXBpLmdldFxyXG4gICk7XHJcbiAgcmV0dXJuIHtcclxuICAgIFVzZXJTdGF0aXN0aWNzRGF0YTogZGF0YSxcclxuICAgIFVzZXJTdGF0aXN0aWNzZXJyb3Jpc0xvYWRpbmc6ICFlcnJvciAmJiAhZGF0YSxcclxuICAgIFVzZXJTdGF0aXN0aWNzZXJyb3Jpc0Vycm9yOiBlcnJvcixcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2V0QXBwcm92ZU1hbmRvYmVzKCkge1xyXG4gIGNvbnN0IHsgbG9hZGluZyB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcclxuICAgIGxvYWRpbmcgPyBmYWxzZSA6IFwiYXBpL0dldEFwcHJvdmVNYW5kb2Jlc1wiLFxyXG4gICAgYXBpLmdldFxyXG4gICk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgICBpc0xvYWRpbmc6ICFlcnJvciAmJiAhZGF0YSxcclxuICAgIGlzRXJyb3I6IGVycm9yLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRBcHByb3ZldXNlcnNzTSgpIHtcclxuICBjb25zdCB7IGxvYWRpbmcgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICBsb2FkaW5nID8gZmFsc2UgOiBcImFwaS9HZXRBcHByb3ZldXNlcnNzTVwiLFxyXG4gICAgYXBpLmdldFxyXG4gICk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgICBpc0xvYWRpbmc6ICFlcnJvciAmJiAhZGF0YSxcclxuICAgIGlzRXJyb3I6IGVycm9yLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRBcHByb3ZldXNlcnNzKCkge1xyXG4gIGNvbnN0IHsgbG9hZGluZyB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcclxuICAgIGxvYWRpbmcgPyBmYWxzZSA6IFwiYXBpL0dldEFwcHJvdmV1c2Vyc3NcIixcclxuICAgIGFwaS5nZXRcclxuICApO1xyXG4gIHJldHVybiB7XHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gICAgaXNMb2FkaW5nOiAhZXJyb3IgJiYgIWRhdGEsXHJcbiAgICBpc0Vycm9yOiBlcnJvcixcclxuICB9O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBDb21wYW55c1N0YXRpc3RpY3MoKSB7XHJcbiAgY29uc3QgeyBsb2FkaW5nIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgbG9hZGluZyA/IGZhbHNlIDogXCJhcGkvQ29tcGFueXNTdGF0aXN0aWNzXCIsXHJcbiAgICBhcGkuZ2V0XHJcbiAgKTtcclxuICByZXR1cm4ge1xyXG4gICAgZGF0YTogZGF0YSxcclxuICAgIGlzTG9hZGluZzogIWVycm9yICYmICFkYXRhLFxyXG4gICAgaXNFcnJvcjogZXJyb3IsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJDYXJkcyh1c2VyX2lkKSB7XHJcbiAgY29uc3QgeyBsb2FkaW5nIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgbG9hZGluZyA/IGZhbHNlIDogXCJhcGkvZ2V0VXNlckNhcmRzP3VzZXJfaWQ9XCIgKyB1c2VyX2lkLFxyXG4gICAgYXBpLmdldFxyXG4gICk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgICBpc0xvYWRpbmc6ICFlcnJvciAmJiAhZGF0YSxcclxuICAgIGlzRXJyb3I6IGVycm9yLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRNYW5kb2JlcyhcclxuICByZXF1ZXN0LFxyXG4gIG5hbWUsXHJcbiAgcGFnZSxcclxuICBTY2l0eSxcclxuICBTYWVyYSxcclxuICBSc05hbWUsXHJcbiAgUnNQaG9uZVxyXG4pIHtcclxuICBpZiAocmVxdWVzdCA9PSBcImZpcnN0VGltZVwiKSB7XHJcbiAgICBjb25zdCB7IGxvYWRpbmcgfSA9IHVzZUF1dGgoKTtcclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcclxuICAgICAgbG9hZGluZyA/IGZhbHNlIDogXCJhcGkvR2V0TWFuZG9iZXNcIixcclxuICAgICAgYXBpLmdldFxyXG4gICAgKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgIGlzTG9hZGluZzogIWVycm9yICYmICFkYXRhLFxyXG4gICAgICBpc0Vycm9yOiBlcnJvcixcclxuICAgIH07XHJcbiAgfSBlbHNlIGlmIChyZXF1ZXN0ID09IFwiY3VzdG9tXCIpIHtcclxuICAgIGNvbnN0IHsgbG9hZGluZyB9ID0gdXNlQXV0aCgpO1xyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgICBsb2FkaW5nXHJcbiAgICAgICAgPyBmYWxzZVxyXG4gICAgICAgIDogXCJhcGkvT3JkZXJHZXRNYW5kb2Jlcz9wYWdlPVwiICtcclxuICAgICAgICAgICAgcGFnZSArXHJcbiAgICAgICAgICAgIFwiJm5hbWU9XCIgK1xyXG4gICAgICAgICAgICBuYW1lICtcclxuICAgICAgICAgICAgXCImU2NpdHk9XCIgK1xyXG4gICAgICAgICAgICBTY2l0eSArXHJcbiAgICAgICAgICAgIFwiJlNhZXJhPVwiICtcclxuICAgICAgICAgICAgU2FlcmEgK1xyXG4gICAgICAgICAgICBcIiZSc05hbWU9XCIgK1xyXG4gICAgICAgICAgICBSc05hbWUgK1xyXG4gICAgICAgICAgICBcIiZSc1Bob25lPVwiICtcclxuICAgICAgICAgICAgUnNQaG9uZSxcclxuXHJcbiAgICAgIGFwaS5nZXRcclxuICAgICk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICBpc0xvYWRpbmc6ICFlcnJvciAmJiAhZGF0YSxcclxuICAgICAgaXNFcnJvcjogZXJyb3IsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdldHVzZXJzczIoXHJcbiAgcmVxdWVzdCxcclxuICBuYW1lLFxyXG4gIG1lbWJlcnMsXHJcbiAgbGFzdF9jb3Vib24sXHJcbiAgdG90YWxfY291Ym9ucyxcclxuICBwaW9yaXR5LFxyXG4gIHBhZ2UsXHJcbiAgU2NpdHksXHJcbiAgU2FlcmEsXHJcbiAgU2NhdCxcclxuICBSc05hbWUsXHJcbiAgUnNQaG9uZSxcclxuICBTcGFpb3JpdHksXHJcbiAgU1R5cGUsXHJcbiAgU051bWJlclxyXG4pIHtcclxuICBpZiAocmVxdWVzdCA9PSBcImZpcnN0VGltZVwiKSB7XHJcbiAgICBjb25zdCB7IGxvYWRpbmcgfSA9IHVzZUF1dGgoKTtcclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcclxuICAgICAgbG9hZGluZyA/IGZhbHNlIDogXCJhcGkvR2V0dXNlcnNzMlwiLFxyXG4gICAgICBhcGkuZ2V0XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgaXNMb2FkaW5nOiAhZXJyb3IgJiYgIWRhdGEsXHJcbiAgICAgIGlzRXJyb3I6IGVycm9yLFxyXG4gICAgfTtcclxuICB9IGVsc2UgaWYgKHJlcXVlc3QgPT0gXCJjdXN0b21cIikge1xyXG4gICAgY29uc3QgeyBsb2FkaW5nIH0gPSB1c2VBdXRoKCk7XHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICAgIGxvYWRpbmdcclxuICAgICAgICA/IGZhbHNlXHJcbiAgICAgICAgOiBcImFwaS9PcmRlckdldHVzZXJzczI/cGFnZT1cIiArXHJcbiAgICAgICAgICAgIHBhZ2UgK1xyXG4gICAgICAgICAgICBcIiZuYW1lPVwiICtcclxuICAgICAgICAgICAgbmFtZSArXHJcbiAgICAgICAgICAgIFwiJm1lbWJlcnM9XCIgK1xyXG4gICAgICAgICAgICBtZW1iZXJzICtcclxuICAgICAgICAgICAgXCImbGFzdF9jb3Vib249XCIgK1xyXG4gICAgICAgICAgICBsYXN0X2NvdWJvbiArXHJcbiAgICAgICAgICAgIFwiJnRvdGFsX2NvdWJvbnM9XCIgK1xyXG4gICAgICAgICAgICB0b3RhbF9jb3Vib25zICtcclxuICAgICAgICAgICAgXCImU2NpdHk9XCIgK1xyXG4gICAgICAgICAgICBTY2l0eSArXHJcbiAgICAgICAgICAgIFwiJlNhZXJhPVwiICtcclxuICAgICAgICAgICAgU2FlcmEgK1xyXG4gICAgICAgICAgICBcIiZTY2F0PVwiICtcclxuICAgICAgICAgICAgU2NhdCArXHJcbiAgICAgICAgICAgIFwiJnBpb3JpdHk9XCIgK1xyXG4gICAgICAgICAgICBwaW9yaXR5ICtcclxuICAgICAgICAgICAgXCImUnNOYW1lPVwiICtcclxuICAgICAgICAgICAgUnNOYW1lICtcclxuICAgICAgICAgICAgXCImUnNQaG9uZT1cIiArXHJcbiAgICAgICAgICAgIFJzUGhvbmUgK1xyXG4gICAgICAgICAgICBcIiZTcGFpb3JpdHk9XCIgK1xyXG4gICAgICAgICAgICBTcGFpb3JpdHkgK1xyXG4gICAgICAgICAgICBcIiZTVHlwZT1cIiArXHJcbiAgICAgICAgICAgIFNUeXBlICtcclxuICAgICAgICAgICAgXCImU051bWJlcj1cIiArXHJcbiAgICAgICAgICAgIFNOdW1iZXIsXHJcblxyXG4gICAgICBhcGkuZ2V0XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgaXNMb2FkaW5nOiAhZXJyb3IgJiYgIWRhdGEsXHJcbiAgICAgIGlzRXJyb3I6IGVycm9yLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRNYW5kb2JVc2VycyhcclxuICByZXF1ZXN0LFxyXG4gIG5hbWUsXHJcbiAgbWVtYmVycyxcclxuICBsYXN0X2NvdWJvbixcclxuICB0b3RhbF9jb3Vib25zLFxyXG4gIHBpb3JpdHksXHJcbiAgcGFnZSxcclxuICBTY2l0eSxcclxuICBTYWVyYSxcclxuICBTY2F0LFxyXG4gIFJzTmFtZSxcclxuICBSc1Bob25lLFxyXG4gIG1hbmRvYmVfaWQsXHJcbiAgU3BhaW9yaXR5LFxyXG4gIFNUeXBlLFxyXG4gIFNOdW1iZXJcclxuKSB7XHJcbiAgaWYgKHJlcXVlc3QgPT0gXCJmaXJzdFRpbWVcIikge1xyXG4gICAgY29uc3QgeyBsb2FkaW5nIH0gPSB1c2VBdXRoKCk7XHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICAgIGxvYWRpbmcgPyBmYWxzZSA6IFwiYXBpL0dldE1hbmRvYlVzZXJzP21hbmRvYmVfaWQ9XCIgKyBtYW5kb2JlX2lkLFxyXG4gICAgICBhcGkuZ2V0XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgaXNMb2FkaW5nOiAhZXJyb3IgJiYgIWRhdGEsXHJcbiAgICAgIGlzRXJyb3I6IGVycm9yLFxyXG4gICAgfTtcclxuICB9IGVsc2UgaWYgKHJlcXVlc3QgPT0gXCJjdXN0b21cIikge1xyXG4gICAgY29uc3QgeyBsb2FkaW5nIH0gPSB1c2VBdXRoKCk7XHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICAgIGxvYWRpbmdcclxuICAgICAgICA/IGZhbHNlXHJcbiAgICAgICAgOiBcImFwaS9PcmRlckdldE1hbmRvYlVzZXJzP3BhZ2U9XCIgK1xyXG4gICAgICAgICAgICBwYWdlICtcclxuICAgICAgICAgICAgXCImbmFtZT1cIiArXHJcbiAgICAgICAgICAgIG5hbWUgK1xyXG4gICAgICAgICAgICBcIiZtZW1iZXJzPVwiICtcclxuICAgICAgICAgICAgbWVtYmVycyArXHJcbiAgICAgICAgICAgIFwiJmxhc3RfY291Ym9uPVwiICtcclxuICAgICAgICAgICAgbGFzdF9jb3Vib24gK1xyXG4gICAgICAgICAgICBcIiZ0b3RhbF9jb3Vib25zPVwiICtcclxuICAgICAgICAgICAgdG90YWxfY291Ym9ucyArXHJcbiAgICAgICAgICAgIFwiJlNjaXR5PVwiICtcclxuICAgICAgICAgICAgU2NpdHkgK1xyXG4gICAgICAgICAgICBcIiZTYWVyYT1cIiArXHJcbiAgICAgICAgICAgIFNhZXJhICtcclxuICAgICAgICAgICAgXCImU2NhdD1cIiArXHJcbiAgICAgICAgICAgIFNjYXQgK1xyXG4gICAgICAgICAgICBcIiZwaW9yaXR5PVwiICtcclxuICAgICAgICAgICAgcGlvcml0eSArXHJcbiAgICAgICAgICAgIFwiJlJzTmFtZT1cIiArXHJcbiAgICAgICAgICAgIFJzTmFtZSArXHJcbiAgICAgICAgICAgIFwiJlJzUGhvbmU9XCIgK1xyXG4gICAgICAgICAgICBSc1Bob25lICtcclxuICAgICAgICAgICAgXCImbWFuZG9iZV9pZD1cIiArXHJcbiAgICAgICAgICAgIG1hbmRvYmVfaWQgK1xyXG4gICAgICAgICAgICBcIiZTcGFpb3JpdHk9XCIgK1xyXG4gICAgICAgICAgICBTcGFpb3JpdHkgK1xyXG4gICAgICAgICAgICBcIiZTVHlwZT1cIiArXHJcbiAgICAgICAgICAgIFNUeXBlICtcclxuICAgICAgICAgICAgXCImU051bWJlcj1cIiArXHJcbiAgICAgICAgICAgIFNOdW1iZXIsXHJcblxyXG4gICAgICBhcGkuZ2V0XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgaXNMb2FkaW5nOiAhZXJyb3IgJiYgIWRhdGEsXHJcbiAgICAgIGlzRXJyb3I6IGVycm9yLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXR1c2Vyc3MoXHJcbiAgcmVxdWVzdCxcclxuICBuYW1lLFxyXG4gIG1lbWJlcnMsXHJcbiAgbGFzdF9jb3Vib24sXHJcbiAgdG90YWxfY291Ym9ucyxcclxuICBwaW9yaXR5LFxyXG4gIHBhZ2UsXHJcbiAgU2NpdHksXHJcbiAgU2FlcmEsXHJcbiAgU2NhdCxcclxuICBSc05hbWUsXHJcbiAgUnNQaG9uZSxcclxuICBoaWRlLFxyXG4gIFNwYWlvcml0eSxcclxuICBTVHlwZSxcclxuICBTTnVtYmVyXHJcbikge1xyXG4gIGlmIChyZXF1ZXN0ID09IFwiZmlyc3RUaW1lXCIpIHtcclxuICAgIGNvbnN0IHsgbG9hZGluZyB9ID0gdXNlQXV0aCgpO1xyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgICBsb2FkaW5nID8gZmFsc2UgOiBcImFwaS9HZXR1c2Vyc3NcIixcclxuICAgICAgYXBpLmdldFxyXG4gICAgKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgIGlzTG9hZGluZzogIWVycm9yICYmICFkYXRhLFxyXG4gICAgICBpc0Vycm9yOiBlcnJvcixcclxuICAgIH07XHJcbiAgfSBlbHNlIGlmIChyZXF1ZXN0ID09IFwiY3VzdG9tXCIpIHtcclxuICAgIGNvbnN0IHsgbG9hZGluZyB9ID0gdXNlQXV0aCgpO1xyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgICBsb2FkaW5nXHJcbiAgICAgICAgPyBmYWxzZVxyXG4gICAgICAgIDogXCJhcGkvT3JkZXJHZXR1c2Vyc3M/cGFnZT1cIiArXHJcbiAgICAgICAgICAgIHBhZ2UgK1xyXG4gICAgICAgICAgICBcIiZuYW1lPVwiICtcclxuICAgICAgICAgICAgbmFtZSArXHJcbiAgICAgICAgICAgIFwiJm1lbWJlcnM9XCIgK1xyXG4gICAgICAgICAgICBtZW1iZXJzICtcclxuICAgICAgICAgICAgXCImbGFzdF9jb3Vib249XCIgK1xyXG4gICAgICAgICAgICBsYXN0X2NvdWJvbiArXHJcbiAgICAgICAgICAgIFwiJnRvdGFsX2NvdWJvbnM9XCIgK1xyXG4gICAgICAgICAgICB0b3RhbF9jb3Vib25zICtcclxuICAgICAgICAgICAgXCImU2NpdHk9XCIgK1xyXG4gICAgICAgICAgICBTY2l0eSArXHJcbiAgICAgICAgICAgIFwiJlNhZXJhPVwiICtcclxuICAgICAgICAgICAgU2FlcmEgK1xyXG4gICAgICAgICAgICBcIiZTY2F0PVwiICtcclxuICAgICAgICAgICAgU2NhdCArXHJcbiAgICAgICAgICAgIFwiJnBpb3JpdHk9XCIgK1xyXG4gICAgICAgICAgICBwaW9yaXR5ICtcclxuICAgICAgICAgICAgXCImUnNOYW1lPVwiICtcclxuICAgICAgICAgICAgUnNOYW1lICtcclxuICAgICAgICAgICAgXCImUnNQaG9uZT1cIiArXHJcbiAgICAgICAgICAgIFJzUGhvbmUgK1xyXG4gICAgICAgICAgICBcIiZoaWRlPVwiICtcclxuICAgICAgICAgICAgaGlkZSArXHJcbiAgICAgICAgICAgIFwiJlNwYWlvcml0eT1cIiArXHJcbiAgICAgICAgICAgIFNwYWlvcml0eSArXHJcbiAgICAgICAgICAgIFwiJlNUeXBlPVwiICtcclxuICAgICAgICAgICAgU1R5cGUgK1xyXG4gICAgICAgICAgICBcIiZTTnVtYmVyPVwiICtcclxuICAgICAgICAgICAgU051bWJlcixcclxuXHJcbiAgICAgIGFwaS5nZXRcclxuICAgICk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICBpc0xvYWRpbmc6ICFlcnJvciAmJiAhZGF0YSxcclxuICAgICAgaXNFcnJvcjogZXJyb3IsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdldENvdXBvbnNCeUJyYWNuaENhdChCcmFuY2hpZCwgQ2F0ZWdvcnlpZCkge1xyXG4gIGNvbnN0IHsgbG9hZGluZyB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcclxuICAgIGxvYWRpbmdcclxuICAgICAgPyBmYWxzZVxyXG4gICAgICA6IFwiYXBpL0dldENvdXBvbnNCeUJyYWNuaENhdD9CcmFuY2hpZD1cIiArXHJcbiAgICAgICAgICBCcmFuY2hpZCArXHJcbiAgICAgICAgICBcIiZDYXRlZ29yeWlkPVwiICtcclxuICAgICAgICAgIENhdGVnb3J5aWQsXHJcbiAgICBhcGkuZ2V0XHJcbiAgKTtcclxuICByZXR1cm4ge1xyXG4gICAgZGF0YTogZGF0YSxcclxuICAgIGlzTG9hZGluZzogIWVycm9yICYmICFkYXRhLFxyXG4gICAgaXNFcnJvcjogZXJyb3IsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdldENvdXBvbkJyYW5jaGVzKFNlY3Rpb25faWQpIHtcclxuICBjb25zdCB7IGxvYWRpbmcgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICBsb2FkaW5nID8gZmFsc2UgOiBcImFwaS9HZXRDb3Vwb25CcmFuY2hlcz9TZWN0aW9uX2lkPVwiICsgU2VjdGlvbl9pZCxcclxuICAgIGFwaS5nZXRcclxuICApO1xyXG4gIHJldHVybiB7XHJcbiAgICBDb3Vwb25CcmFuY2hlczogZGF0YSxcclxuICAgIENvdXBvbkJyYW5jaGVzaXNMb2FkaW5nOiAhZXJyb3IgJiYgIWRhdGEsXHJcbiAgICBDb3Vwb25CcmFuY2hlc2lzRXJyb3I6IGVycm9yLFxyXG4gIH07XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIEdldFVzZXJNZXRhKFRoZVVzZXJfaWQpIHtcclxuICBjb25zdCB7IGxvYWRpbmcgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICBsb2FkaW5nID8gZmFsc2UgOiBcImFwaS9HZXRVc2VyTWV0YT9UaGVVc2VyX2lkPVwiICsgVGhlVXNlcl9pZCxcclxuICAgIGFwaS5nZXRcclxuICApO1xyXG4gIHJldHVybiB7XHJcbiAgICBVc2VyTWV0YTogZGF0YSxcclxuICAgIFVzZXJNZXRhaXNMb2FkaW5nOiAhZXJyb3IgJiYgIWRhdGEsXHJcbiAgICBVc2VyTWV0YWlzRXJyb3I6IGVycm9yLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRDYXRlZ29yaWVzKCkge1xyXG4gIGNvbnN0IHsgbG9hZGluZyB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcclxuICAgIGxvYWRpbmcgPyBmYWxzZSA6IFwiYXBpL0dldENhdGVnb3JpZXNcIixcclxuICAgIGFwaS5nZXRcclxuICApO1xyXG4gIHJldHVybiB7XHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gICAgaXNMb2FkaW5nOiAhZXJyb3IgJiYgIWRhdGEsXHJcbiAgICBpc0Vycm9yOiBlcnJvcixcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2V0Q29tcGFueXMoKSB7XHJcbiAgY29uc3QgeyBsb2FkaW5nIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgbG9hZGluZyA/IGZhbHNlIDogXCJhcGkvR2V0Q29tcGFueXNcIixcclxuICAgIGFwaS5nZXRcclxuICApO1xyXG4gIHJldHVybiB7XHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gICAgaXNMb2FkaW5nOiAhZXJyb3IgJiYgIWRhdGEsXHJcbiAgICBpc0Vycm9yOiBlcnJvcixcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2V0Q2F0ZWdvcnlzQnlDaXR5KGNpdHkpIHtcclxuICBjb25zdCB7IGxvYWRpbmcgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICBsb2FkaW5nID8gZmFsc2UgOiBcImFwaS9HZXRDYXRlZ29yeXNCeUNpdHk/Y2l0eT1cIiArIGNpdHksXHJcbiAgICBhcGkuZ2V0XHJcbiAgKTtcclxuICByZXR1cm4ge1xyXG4gICAgZGF0YTogZGF0YSxcclxuICAgIGlzTG9hZGluZzogIWVycm9yICYmICFkYXRhLFxyXG4gICAgaXNFcnJvcjogZXJyb3IsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdldENvdXBvbnNCeVNlY3Rpb24oc2VjdGlvbl9pZCkge1xyXG4gIGNvbnN0IHsgbG9hZGluZyB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcclxuICAgIGxvYWRpbmcgPyBmYWxzZSA6IFwiYXBpL0dldENvdXBvbnNCeVNlY3Rpb24/c2VjdGlvbl9pZD1cIiArIHNlY3Rpb25faWQsXHJcbiAgICBhcGkuZ2V0XHJcbiAgKTtcclxuICByZXR1cm4ge1xyXG4gICAgZGF0YTogZGF0YSxcclxuICAgIGlzTG9hZGluZzogIWVycm9yICYmICFkYXRhLFxyXG4gICAgaXNFcnJvcjogZXJyb3IsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdldENvdXBvbnNCeWJyYW5jaChJZCwgZ2V0VHlwZSkge1xyXG4gIGNvbnN0IHsgbG9hZGluZyB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcclxuICAgIGxvYWRpbmdcclxuICAgICAgPyBmYWxzZVxyXG4gICAgICA6IFwiYXBpL0dldENvdXBvbnNCeWJyYW5jaD9JZD1cIiArIElkICsgXCImZ2V0VHlwZT1cIiArIGdldFR5cGUsXHJcblxyXG4gICAgYXBpLmdldFxyXG4gICk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgICBpc0xvYWRpbmc6ICFlcnJvciAmJiAhZGF0YSxcclxuICAgIGlzRXJyb3I6IGVycm9yLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRDQ0FzKCkge1xyXG4gIGNvbnN0IHsgbG9hZGluZyB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihsb2FkaW5nID8gZmFsc2UgOiBcImFwaS9HZXRDQ0FzXCIsIGFwaS5nZXQpO1xyXG4gIHJldHVybiB7XHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gICAgaXNMb2FkaW5nOiAhZXJyb3IgJiYgIWRhdGEsXHJcbiAgICBpc0Vycm9yOiBlcnJvcixcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcGlfZ2V0O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkQ2lyY2xlT3V0bGluZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWFsZXJ0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWhvb2stZm9ybVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1sb2FkaW5nLXNrZWxldG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3clwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==