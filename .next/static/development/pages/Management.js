(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\Management.js"],{

/***/ "./contexts/auth.js":
/*!**************************!*\
  !*** ./contexts/auth.js ***!
  \**************************/
/*! exports provided: AuthProvider, default, ProtectRoute, ProtectRouteCompany, ProtectRouteMandobe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthProvider", function() { return AuthProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProtectRoute", function() { return ProtectRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProtectRouteCompany", function() { return ProtectRouteCompany; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProtectRouteMandobe", function() { return ProtectRouteMandobe; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_Api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/Api */ "./services/Api.js");





var _this = undefined,
    _jsxFileName = "D:\\work\\xampp2020\\htdocs\\new_rabwa_project\\rabwa-coubon\\nexttt\\nextProect\\contexts\\auth.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;


 //api here is an axios instance


var AuthContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["createContext"])({});
var AuthProvider = function AuthProvider(_ref) {
  _s();

  var _ref5;

  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      user = _useState[0],
      setUser = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      toggler = _useState3[0],
      settoggler = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    function loadUserFromCookies() {
      return _loadUserFromCookies.apply(this, arguments);
    }

    function _loadUserFromCookies() {
      _loadUserFromCookies = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
        var data, token;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                data = false;
                token = js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get("token");

                if (!token) {
                  _context.next = 8;
                  break;
                }

                console.log("Got a token in the cookies, let's see if it is valid");
                _services_Api__WEBPACK_IMPORTED_MODULE_7__["default"].defaults.headers.Authorization = "Bearer ".concat(token);
                _context.next = 7;
                return _services_Api__WEBPACK_IMPORTED_MODULE_7__["default"].post("jwt-auth/v1/token/validate").then(function (res) {
                  data = res;
                })["catch"](function (err) {
                  js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.remove("token");
                  js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.remove("user_nicename");
                  js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.remove("user_email");
                  js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.remove("UserType");
                  js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.remove("BracnhCode");
                  js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.remove("CompanyCode");
                  js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.remove("profile_pic");
                  js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.remove("first_name");
                  js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.remove("last_name");
                  _services_Api__WEBPACK_IMPORTED_MODULE_7__["default"].defaults.headers.Authorization = "";
                  next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push("/Management");
                });

              case 7:
                //  const { data: data } = await api.post("jwt-auth/v1/token/validate");
                if (data) {
                  console.log("old token is valid");
                  setUser({
                    user_nicename: js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get("user_nicename"),
                    user_email: js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get("user_email"),
                    UserType: js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get("UserType"),
                    CompanyCode: js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get("CompanyCode"),
                    BracnhCode: js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get("BracnhCode"),
                    profile_pic: js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get("profile_pic"),
                    first_name: js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get("first_name"),
                    last_name: js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get("last_name")
                  });
                } else {}

              case 8:
                setLoading(false);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _loadUserFromCookies.apply(this, arguments);
    }

    loadUserFromCookies();
  }, []);

  var Sendcond = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(phone) {
      var tempres;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _services_Api__WEBPACK_IMPORTED_MODULE_7__["default"].get("rabwa/getUserCode?phone=" + phone, {});

            case 2:
              tempres = _context2.sent;
              return _context2.abrupt("return", tempres);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function Sendcond(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var phoneLogin = /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3(phone, code) {
      var _yield$api$get, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _services_Api__WEBPACK_IMPORTED_MODULE_7__["default"].get("rabwa/singUserIN?phone=" + phone + "&code=" + code, {});

            case 2:
              _yield$api$get = _context3.sent;
              data = _yield$api$get.data;

              if (!data) {
                _context3.next = 23;
                break;
              }

              console.log(data);
              console.log("Got new token" + data.token);
              js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.set("token", data.token, {
                expires: 60
              });
              js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.set("user_nicename", data.user_nicename, {
                expires: 60
              });
              js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.set("user_email", data.user_email, {
                expires: 60
              });
              js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.set("UserType", data.UserType, {
                expires: 60
              });
              js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.set("BracnhCode", data.BracnhCode, {
                expires: 60
              });
              js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.set("CompanyCode", data.CompanyCode, {
                expires: 60
              });
              js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.set("profile_pic", data.profile_pic, {
                expires: 60
              });
              js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.set("first_name", data.first_name, {
                expires: 60
              });
              js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.set("last_name", data.last_name, {
                expires: 60
              });
              _services_Api__WEBPACK_IMPORTED_MODULE_7__["default"].defaults.headers.Authorization = "Bearer ".concat(data.token);
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
                next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push("/CompanyStatistics"); //return "Company";
              } else if (data.UserType == "mandobe") {
                // return "Company";
                next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push("/MyUsers");
              }

              return _context3.abrupt("return", true);

            case 23:
              return _context3.abrupt("return", false);

            case 24:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function phoneLogin(_x2, _x3) {
      return _ref3.apply(this, arguments);
    };
  }();

  var login = /*#__PURE__*/function () {
    var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee4(username, password) {
      var _yield$api$post, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _services_Api__WEBPACK_IMPORTED_MODULE_7__["default"].post("jwt-auth/v1/token", {
                username: username,
                password: password
              });

            case 2:
              _yield$api$post = _context4.sent;
              data = _yield$api$post.data;

              if (!data) {
                _context4.next = 22;
                break;
              }

              console.log(data);
              console.log("Got new token" + data.token);
              js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.set("token", data.token, {
                expires: 60
              });
              js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.set("user_nicename", data.user_nicename, {
                expires: 60
              });
              js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.set("user_email", data.user_email, {
                expires: 60
              });
              js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.set("UserType", data.UserType, {
                expires: 60
              });
              js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.set("BracnhCode", data.BracnhCode, {
                expires: 60
              });
              js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.set("CompanyCode", data.CompanyCode, {
                expires: 60
              });
              js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.set("profile_pic", data.profile_pic, {
                expires: 60
              });
              js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.set("first_name", data.first_name, {
                expires: 60
              });
              js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.set("last_name", data.last_name, {
                expires: 60
              });
              _services_Api__WEBPACK_IMPORTED_MODULE_7__["default"].defaults.headers.Authorization = "Bearer ".concat(data.token);
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
              return _context4.abrupt("return", true);

            case 22:
              return _context4.abrupt("return", false);

            case 23:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function login(_x4, _x5) {
      return _ref4.apply(this, arguments);
    };
  }();

  var logout = function logout() {
    js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.remove("token");
    js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.remove("user_nicename");
    js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.remove("user_email");
    js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.remove("UserType");
    js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.remove("BracnhCode");
    js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.remove("CompanyCode");
    js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.remove("profile_pic");
    js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.remove("first_name");
    js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.remove("last_name");
    _services_Api__WEBPACK_IMPORTED_MODULE_7__["default"].defaults.headers.Authorization = "";
    setUser(null);
  };

  return __jsx(AuthContext.Provider, {
    value: (_ref5 = {
      isAuthenticated: !!user,
      user: user,
      login: login,
      logout: logout,
      Sendcond: Sendcond,
      phoneLogin: phoneLogin,
      loading: loading
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref5, "logout", logout), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref5, "toggler", toggler), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref5, "settoggler", settoggler), _ref5),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 5
    }
  }, children);
};

_s(AuthProvider, "kVVI/eaSJW7CjE7sYKzveREop3g=");

_c = AuthProvider;
function useAuth() {
  _s2();

  var context = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(AuthContext);
  return context;
}

_s2(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");

function ProtectRoute(Component) {
  var _arguments = arguments,
      _this2 = this,
      _s3 = $RefreshSig$();

  return _s3(function () {
    _s3();

    var _useAuth = useAuth(),
        user = _useAuth.user,
        isAuthenticated = _useAuth.isAuthenticated,
        loading = _useAuth.loading;

    var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
    Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
      if (!isAuthenticated && !loading) {
        next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push("/Management");
      } else if (isAuthenticated) {
        if (user.UserType != "admin") next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push("/");
      }
    }, [loading, isAuthenticated]);
    return __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _arguments, {
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 12
      }
    }));
  }, "z/hYDHPFkjbm8+F3Ep7Ukz2trYc=", false, function () {
    return [useAuth, next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
  });
}
_c2 = ProtectRoute;
function ProtectRouteCompany(Component) {
  var _arguments2 = arguments,
      _this3 = this,
      _s4 = $RefreshSig$();

  return _s4(function () {
    _s4();

    var _useAuth2 = useAuth(),
        user = _useAuth2.user,
        isAuthenticated = _useAuth2.isAuthenticated,
        loading = _useAuth2.loading;

    var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
    Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
      if (!isAuthenticated && !loading) {
        next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push("/login");
      } else if (isAuthenticated) {
        if (user.UserType != "Company") next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push("/");
      }
    }, [loading, isAuthenticated]);
    return __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _arguments2, {
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 12
      }
    }));
  }, "z/hYDHPFkjbm8+F3Ep7Ukz2trYc=", false, function () {
    return [useAuth, next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
  });
}
_c3 = ProtectRouteCompany;
function ProtectRouteMandobe(Component) {
  var _arguments3 = arguments,
      _this4 = this,
      _s5 = $RefreshSig$();

  return _s5(function () {
    _s5();

    var _useAuth3 = useAuth(),
        user = _useAuth3.user,
        isAuthenticated = _useAuth3.isAuthenticated,
        loading = _useAuth3.loading;

    var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
    Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
      if (!isAuthenticated && !loading) {
        next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push("/login");
      } else if (isAuthenticated) {
        if (user.UserType != "mandobe") next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push("/");
      }
    }, [loading, isAuthenticated]);
    return __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _arguments3, {
      __self: _this4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 12
      }
    }));
  }, "z/hYDHPFkjbm8+F3Ep7Ukz2trYc=", false, function () {
    return [useAuth, next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
  });
}
_c4 = ProtectRouteMandobe;

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "AuthProvider");
$RefreshReg$(_c2, "ProtectRoute");
$RefreshReg$(_c3, "ProtectRouteCompany");
$RefreshReg$(_c4, "ProtectRouteMandobe");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/@emotion/cache/dist/cache.browser.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emotion/cache/dist/cache.browser.esm.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/sheet */ "./node_modules/@emotion/sheet/dist/sheet.browser.esm.js");
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/stylis */ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js");
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/weak-memoize */ "./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js");




// https://github.com/thysultan/stylis.js/tree/master/plugins/rule-sheet
// inlined to avoid umd wrapper and peerDep warnings/installing stylis
// since we use stylis after closure compiler
var delimiter = '/*|*/';
var needle = delimiter + '}';

function toSheet(block) {
  if (block) {
    Sheet.current.insert(block + '}');
  }
}

var Sheet = {
  current: null
};
var ruleSheet = function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
  switch (context) {
    // property
    case 1:
      {
        switch (content.charCodeAt(0)) {
          case 64:
            {
              // @import
              Sheet.current.insert(content + ';');
              return '';
            }
          // charcode for l

          case 108:
            {
              // charcode for b
              // this ignores label
              if (content.charCodeAt(2) === 98) {
                return '';
              }
            }
        }

        break;
      }
    // selector

    case 2:
      {
        if (ns === 0) return content + delimiter;
        break;
      }
    // at-rule

    case 3:
      {
        switch (ns) {
          // @font-face, @page
          case 102:
          case 112:
            {
              Sheet.current.insert(selectors[0] + content);
              return '';
            }

          default:
            {
              return content + (at === 0 ? delimiter : '');
            }
        }
      }

    case -2:
      {
        content.split(needle).forEach(toSheet);
      }
  }
};

var createCache = function createCache(options) {
  if (options === undefined) options = {};
  var key = options.key || 'css';
  var stylisOptions;

  if (options.prefix !== undefined) {
    stylisOptions = {
      prefix: options.prefix
    };
  }

  var stylis = new _emotion_stylis__WEBPACK_IMPORTED_MODULE_1__["default"](stylisOptions);

  if (true) {
    // $FlowFixMe
    if (/[^a-z-]/.test(key)) {
      throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
    }
  }

  var inserted = {}; // $FlowFixMe

  var container;

  {
    container = options.container || document.head;
    var nodes = document.querySelectorAll("style[data-emotion-" + key + "]");
    Array.prototype.forEach.call(nodes, function (node) {
      var attrib = node.getAttribute("data-emotion-" + key); // $FlowFixMe

      attrib.split(' ').forEach(function (id) {
        inserted[id] = true;
      });

      if (node.parentNode !== container) {
        container.appendChild(node);
      }
    });
  }

  var _insert;

  {
    stylis.use(options.stylisPlugins)(ruleSheet);

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      Sheet.current = sheet;

      if ( true && serialized.map !== undefined) {
        var map = serialized.map;
        Sheet.current = {
          insert: function insert(rule) {
            sheet.insert(rule + map);
          }
        };
      }

      stylis(selector, serialized.styles);

      if (shouldCache) {
        cache.inserted[name] = true;
      }
    };
  }

  if (true) {
    // https://esbench.com/bench/5bf7371a4cd7e6009ef61d0a
    var commentStart = /\/\*/g;
    var commentEnd = /\*\//g;
    stylis.use(function (context, content) {
      switch (context) {
        case -1:
          {
            while (commentStart.test(content)) {
              commentEnd.lastIndex = commentStart.lastIndex;

              if (commentEnd.test(content)) {
                commentStart.lastIndex = commentEnd.lastIndex;
                continue;
              }

              throw new Error('Your styles have an unterminated comment ("/*" without corresponding "*/").');
            }

            commentStart.lastIndex = 0;
            break;
          }
      }
    });
    stylis.use(function (context, content, selectors) {
      switch (context) {
        case -1:
          {
            var flag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';
            var unsafePseudoClasses = content.match(/(:first|:nth|:nth-last)-child/g);

            if (unsafePseudoClasses && cache.compat !== true) {
              unsafePseudoClasses.forEach(function (unsafePseudoClass) {
                var ignoreRegExp = new RegExp(unsafePseudoClass + ".*\\/\\* " + flag + " \\*\\/");
                var ignore = ignoreRegExp.test(content);

                if (unsafePseudoClass && !ignore) {
                  console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
                }
              });
            }

            break;
          }
      }
    });
  }

  var cache = {
    key: key,
    sheet: new _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__["StyleSheet"]({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  return cache;
};

/* harmony default export */ __webpack_exports__["default"] = (createCache);


/***/ }),

/***/ "./node_modules/@emotion/hash/dist/hash.browser.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@emotion/hash/dist/hash.browser.esm.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

/* harmony default export */ __webpack_exports__["default"] = (murmur2);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/serialize/dist/serialize.browser.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emotion/serialize/dist/serialize.browser.esm.js ***!
  \***********************************************************************/
/*! exports provided: serializeStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeStyles", function() { return serializeStyles; });
/* harmony import */ var _emotion_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/hash */ "./node_modules/@emotion/hash/dist/hash.browser.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");




var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_2__["default"])(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (_emotion_unitless__WEBPACK_IMPORTED_MODULE_1__["default"][key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (true) {
  var contentValuePattern = /(attr|calc|counters?|url)\(/;
  var contentValues = ['normal', 'none', 'counter', 'open-quote', 'close-quote', 'no-open-quote', 'no-close-quote', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = processStyleValue;
  var msPattern = /^-ms-/;
  var hyphenPattern = /-(.)/g;
  var hyphenatedCache = {};

  processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        console.error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }

    var processed = oldProcessStyleValue(key, value);

    if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, 'ms-').replace(hyphenPattern, function (str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }

    return processed;
  };
}

var shouldWarnAboutInterpolatingClassNameFromCss = true;

function handleInterpolation(mergedProps, registered, interpolation, couldBeSelectorInterpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if ( true && interpolation.toString() === 'NO_COMPONENT_SELECTOR') {
      throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
    }

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          if ( true && interpolation.map !== undefined) {
            styles += interpolation.map;
          }

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result, couldBeSelectorInterpolation);
        } else if (true) {
          console.error('Functions that are interpolated in css calls will be stringified.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }

        break;
      }

    case 'string':
      if (true) {
        var matched = [];
        var replaced = interpolation.replace(animationRegex, function (match, p1, p2) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, '') + "`");
          return "${" + fakeVarName + "}";
        });

        if (matched.length) {
          console.error('`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\n' + 'Instead of doing this:\n\n' + [].concat(matched, ["`" + replaced + "`"]).join('\n') + '\n\nYou should wrap it with `css` like this:\n\n' + ("css`" + replaced + "`"));
        }
      }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];

  if ( true && couldBeSelectorInterpolation && shouldWarnAboutInterpolatingClassNameFromCss && cached !== undefined) {
    console.error('Interpolating a className from css`` is not recommended and will cause problems with composition.\n' + 'Interpolating a className from css`` will be completely unsupported in a future major version of Emotion');
    shouldWarnAboutInterpolatingClassNameFromCss = false;
  }

  return cached !== undefined && !couldBeSelectorInterpolation ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i], false);
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "development" !== 'production') {
          throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value, false);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if ( true && _key === 'undefined') {
                  console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                }

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;
var sourceMapPattern;

if (true) {
  sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//;
} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings, false);
  } else {
    if ( true && strings[0] === undefined) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
    }

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i], styles.charCodeAt(styles.length - 1) === 46);

    if (stringMode) {
      if ( true && strings[i] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }

      styles += strings[i];
    }
  }

  var sourceMap;

  if (true) {
    styles = styles.replace(sourceMapPattern, function (match) {
      sourceMap = match;
      return '';
    });
  } // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = Object(_emotion_hash__WEBPACK_IMPORTED_MODULE_0__["default"])(styles) + identifierName;

  if (true) {
    // $FlowFixMe SerializedStyles type doesn't have toString property (and we don't want to add it)
    return {
      name: name,
      styles: styles,
      map: sourceMap,
      next: cursor,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
  }

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};




/***/ }),

/***/ "./node_modules/@emotion/sheet/dist/sheet.browser.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emotion/sheet/dist/sheet.browser.esm.js ***!
  \***************************************************************/
/*! exports provided: StyleSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheet", function() { return StyleSheet; });
/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  return tag;
}

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(options) {
    this.isSpeedy = options.speedy === undefined ? "development" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      var _tag = createStyleElement(this);

      var before;

      if (this.tags.length === 0) {
        before = this.before;
      } else {
        before = this.tags[this.tags.length - 1].nextSibling;
      }

      this.container.insertBefore(_tag, before);
      this.tags.push(_tag);
    }

    var tag = this.tags[this.tags.length - 1];

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is a really hot path
        // we check the second character first because having "i"
        // as the second character will happen less often than
        // having "@" as the first character
        var isImportRule = rule.charCodeAt(1) === 105 && rule.charCodeAt(0) === 64; // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools

        sheet.insertRule(rule, // we need to insert @import rules before anything else
        // otherwise there will be an error
        // technically this means that the @import rules will
        // _usually_(not always since there could be multiple style tags)
        // be the first ones in prod and generally later in dev
        // this shouldn't really matter in the real world though
        // @import is generally only used for font faces from google fonts and etc.
        // so while this could be technically correct then it would be slower and larger
        // for a tiny bit of correctness that won't matter in the real world
        isImportRule ? 0 : sheet.cssRules.length);
      } catch (e) {
        if (true) {
          console.warn("There was a problem inserting the following rule: \"" + rule + "\"", e);
        }
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };

  return StyleSheet;
}();




/***/ }),

/***/ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@emotion/stylis/dist/stylis.browser.esm.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ __webpack_exports__["default"] = (stylis_min);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./node_modules/@emotion/utils/dist/utils.browser.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emotion/utils/dist/utils.browser.esm.js ***!
  \***************************************************************/
/*! exports provided: getRegisteredStyles, insertStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegisteredStyles", function() { return getRegisteredStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertStyles", function() { return insertStyles; });
var isBrowser = "object" !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className]);
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }

  if (cache.inserted[serialized.name] === undefined) {
    var current = serialized;

    do {
      var maybeStyles = cache.insert("." + className, current, cache.sheet, true);

      current = current.next;
    } while (current !== undefined);
  }
};




/***/ }),

/***/ "./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var weakMemoize = function weakMemoize(func) {
  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // $FlowFixMe
      return cache.get(arg);
    }

    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (weakMemoize);


/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
  var defaultToConfig2Keys = [
    'baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress',
    'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath'
  ];

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys);

  var otherKeys = Object
    .keys(config2)
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "./node_modules/create-emotion/dist/create-emotion.browser.esm.js":
/*!************************************************************************!*\
  !*** ./node_modules/create-emotion/dist/create-emotion.browser.esm.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/cache.browser.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/serialize.browser.esm.js");
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/utils */ "./node_modules/@emotion/utils/dist/utils.browser.esm.js");




function insertWithoutScoping(cache, serialized) {
  if (cache.inserted[serialized.name] === undefined) {
    return cache.insert('', serialized, cache.sheet, true);
  }
}

function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_2__["getRegisteredStyles"])(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var createEmotion = function createEmotion(options) {
  var cache = Object(_emotion_cache__WEBPACK_IMPORTED_MODULE_0__["default"])(options); // $FlowFixMe

  cache.sheet.speedy = function (value) {
    if ( true && this.ctr !== 0) {
      throw new Error('speedy must be changed before any rules are inserted');
    }

    this.isSpeedy = value;
  };

  cache.compat = true;

  var css = function css() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_1__["serializeStyles"])(args, cache.registered, undefined);
    Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_2__["insertStyles"])(cache, serialized, false);
    return cache.key + "-" + serialized.name;
  };

  var keyframes = function keyframes() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_1__["serializeStyles"])(args, cache.registered);
    var animation = "animation-" + serialized.name;
    insertWithoutScoping(cache, {
      name: serialized.name,
      styles: "@keyframes " + animation + "{" + serialized.styles + "}"
    });
    return animation;
  };

  var injectGlobal = function injectGlobal() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_1__["serializeStyles"])(args, cache.registered);
    insertWithoutScoping(cache, serialized);
  };

  var cx = function cx() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    return merge(cache.registered, css, classnames(args));
  };

  return {
    css: css,
    cx: cx,
    injectGlobal: injectGlobal,
    keyframes: keyframes,
    hydrate: function hydrate(ids) {
      ids.forEach(function (key) {
        cache.inserted[key] = true;
      });
    },
    flush: function flush() {
      cache.registered = {};
      cache.inserted = {};
      cache.sheet.flush();
    },
    // $FlowFixMe
    sheet: cache.sheet,
    cache: cache,
    getRegisteredStyles: _emotion_utils__WEBPACK_IMPORTED_MODULE_2__["getRegisteredStyles"].bind(null, cache.registered),
    merge: merge.bind(null, cache.registered, css)
  };
};

var classnames = function classnames(args) {
  var cls = '';

  for (var i = 0; i < args.length; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

/* harmony default export */ __webpack_exports__["default"] = (createEmotion);


/***/ }),

/***/ "./node_modules/emotion/dist/emotion.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/emotion/dist/emotion.esm.js ***!
  \**************************************************/
/*! exports provided: cache, css, cx, flush, getRegisteredStyles, hydrate, injectGlobal, keyframes, merge, sheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cache", function() { return cache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cx", function() { return cx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return flush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegisteredStyles", function() { return getRegisteredStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return hydrate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectGlobal", function() { return injectGlobal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sheet", function() { return sheet; });
/* harmony import */ var create_emotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! create-emotion */ "./node_modules/create-emotion/dist/create-emotion.browser.esm.js");


var _createEmotion = Object(create_emotion__WEBPACK_IMPORTED_MODULE_0__["default"])(),
    flush = _createEmotion.flush,
    hydrate = _createEmotion.hydrate,
    cx = _createEmotion.cx,
    merge = _createEmotion.merge,
    getRegisteredStyles = _createEmotion.getRegisteredStyles,
    injectGlobal = _createEmotion.injectGlobal,
    keyframes = _createEmotion.keyframes,
    css = _createEmotion.css,
    sheet = _createEmotion.sheet,
    cache = _createEmotion.cache;




/***/ }),

/***/ "./node_modules/js-cookie/src/js.cookie.js":
/*!*************************************************!*\
  !*** ./node_modules/js-cookie/src/js.cookie.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),

/***/ "./node_modules/native-url/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/native-url/dist/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var e,t=(e=__webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js"))&&"object"==typeof e&&"default"in e?e.default:e,r=/https?|ftp|gopher|file/;function o(e){"string"==typeof e&&(e=g(e));var o=function(e,t,r){var o=e.auth,a=e.hostname,s=e.protocol||"",c=e.pathname||"",h=e.hash||"",p=e.query||"",n=!1;o=o?encodeURIComponent(o).replace(/%3A/i,":")+"@":"",e.host?n=o+e.host:a&&(n=o+(~a.indexOf(":")?"["+a+"]":a),e.port&&(n+=":"+e.port)),p&&"object"==typeof p&&(p=t.encode(p));var l=e.search||p&&"?"+p||"";return s&&":"!==s.substr(-1)&&(s+=":"),e.slashes||(!s||r.test(s))&&!1!==n?(n="//"+(n||""),c&&"/"!==c[0]&&(c="/"+c)):n||(n=""),h&&"#"!==h[0]&&(h="#"+h),l&&"?"!==l[0]&&(l="?"+l),{protocol:s,host:n,pathname:c=c.replace(/[?#]/g,encodeURIComponent),search:l=l.replace("#","%23"),hash:h}}(e,t,r);return""+o.protocol+o.host+o.pathname+o.search+o.hash}var a="http://",s="w.w",c=a+s,h=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,p=/https?|ftp|gopher|file/;function n(e,t){var r="string"==typeof e?g(e):e;e="object"==typeof e?o(e):e;var s=g(t),n="";r.protocol&&!r.slashes&&(n=r.protocol,e=e.replace(r.protocol,""),n+="/"===t[0]||"/"===e[0]?"/":""),n&&s.protocol&&(n="",s.slashes||(n=s.protocol,t=t.replace(s.protocol,"")));var l=e.match(h);l&&!s.protocol&&(e=e.substr((n=l[1]+(l[2]||"")).length),/^\/\/[^/]/.test(t)&&(n=n.slice(0,-1)));var i=new URL(e,c+"/"),f=new URL(t,i).toString().replace(c,""),u=s.protocol||r.protocol;return u+=r.slashes||s.slashes?"//":"",!n&&u?f=f.replace(a,u):n&&(f=f.replace(a,"")),p.test(f)||~t.indexOf(".")||"/"===e.slice(-1)||"/"===t.slice(-1)||"/"!==f.slice(-1)||(f=f.slice(0,-1)),n&&(f=n+("/"===f[0]?f.substr(1):f)),f}function l(){}l.parse=g,l.format=o,l.resolve=n,l.resolveObject=n;var i=/^https?|ftp|gopher|file/,f=/^(.*?)([#?].*)/,u=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,m=/^([a-z0-9.+-]*:)?\/\/\/*/i,v=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function d(e){try{return decodeURI(e)}catch(t){return e}}function g(e,r,a){if(void 0===r&&(r=!1),void 0===a&&(a=!1),e&&"object"==typeof e&&e instanceof l)return e;var h=(e=e.trim()).match(f);e=h?d(h[1]).replace(/\\/g,"/")+h[2]:d(e).replace(/\\/g,"/"),v.test(e)&&"/"!==e.slice(-1)&&(e+="/");var p=!/(^javascript)/.test(e)&&e.match(u),n=m.test(e),g="";p&&(i.test(p[1])||(g=p[1].toLowerCase(),e=""+p[2]+p[3]),p[2]||(n=!1,i.test(p[1])?(g=p[1],e=""+p[3]):e="//"+p[3]),3!==p[2].length&&1!==p[2].length||(g=p[1],e="/"+p[3]));var b,y=(h?h[1]:e).match(/(:[0-9]+)/),j="";y&&y[1]&&3===y[1].length&&(e=e.replace(j=y[1],j+"00"));var w=new l,x="",U="";try{b=new URL(e)}catch(t){x=t,g||a||!/^\/\//.test(e)||/^\/\/.+[@.]/.test(e)||(U="/",e=e.substr(1));try{b=new URL(e,c)}catch(e){return w.protocol=g,w.href=g,w}}w.slashes=n&&!U,w.host=b.host===s?"":b.host,w.hostname=b.hostname===s?"":b.hostname.replace(/(\[|\])/g,""),w.protocol=x?g||null:b.protocol,w.search=b.search.replace(/\\/g,"%5C"),w.hash=b.hash.replace(/\\/g,"%5C");var R=e.split("#");!w.search&&~R[0].indexOf("?")&&(w.search="?"),w.hash||""!==R[1]||(w.hash="#"),w.query=r?t.decode(b.search.substr(1)):w.search.substr(1),w.pathname=U+d(b.pathname).replace(/"/g,"%22"),"about:"===w.protocol&&"blank"===w.pathname&&(w.protocol="",w.pathname=""),x&&"/"!==e[0]&&(w.pathname=w.pathname.substr(1)),g&&!i.test(g)&&"/"!==e.slice(-1)&&"/"===w.pathname&&(w.pathname=""),w.path=w.pathname+w.search,w.auth=[b.username,b.password].map(decodeURIComponent).filter(Boolean).join(":"),w.port=b.port,j&&(w.host=w.host.replace(j+"00",j),w.port=w.port.slice(0,-2)),w.href=U?""+w.pathname+w.search+w.hash:o(w);var O=/^(file)/.test(w.href)?["host","hostname"]:[];return Object.keys(w).forEach(function(e){~O.indexOf(e)||(w[e]=w[e]||null)}),w}exports.parse=g,exports.format=o,exports.resolve=n,exports.resolveObject=function(e,t){return g(n(e,t))},exports.Url=l;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!***********************************************************************************************************************!*\
  !*** delegated ./node_modules/next/dist/build/polyfills/object-assign.js from dll-reference dll_a0ea8196e869b9b4425e ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_a0ea8196e869b9b4425e */ "dll-reference dll_a0ea8196e869b9b4425e"))("./node_modules/next/dist/build/polyfills/object-assign.js");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FManagement&absolutePagePath=D%3A%5Cwork%5Cxampp2020%5Chtdocs%5Cnew_rabwa_project%5Crabwa-coubon%5Cnexttt%5CnextProect%5Cpages%5CManagement%5Cindex.js!./":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FManagement&absolutePagePath=D%3A%5Cwork%5Cxampp2020%5Chtdocs%5Cnew_rabwa_project%5Crabwa-coubon%5Cnexttt%5CnextProect%5Cpages%5CManagement%5Cindex.js ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/Management",
      function () {
        return __webpack_require__(/*! ./pages/Management/index.js */ "./pages/Management/index.js");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _construct = __webpack_require__(/*! @babel/runtime/helpers/construct */ "./node_modules/next/node_modules/@babel/runtime/helpers/construct.js");

var _s = $RefreshSig$();

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (true) {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
urlPropertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on".concat(event.charAt(0).toUpperCase()).concat(event.substring(1));
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: ".concat(eventField)); // tslint:disable-next-line:no-console

          console.error("".concat(err.message, "\n").concat(err.stack));
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  _s();

  return _react["default"].useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


_s(useRouter, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = _construct(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  var _iterator = _createForOfIteratorHelper(urlPropertyFields),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var property = _step.value;

      if (typeof _router[property] === 'object') {
        instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

        continue;
      }

      instance[property] = _router[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  instance.events = _router2["default"].events;
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react["default"].createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(".concat(name, ")");
  }

  return WithRouterWrapper;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports["default"] = mitt;
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
  var all = Object.create(null);
  return {
    on: function on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off: function off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type) {
      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        evts[_key - 1] = arguments[_key];
      }

      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(function (handler) {
        handler.apply(void 0, evts);
      });
    }
  };
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.RouterContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var RouterContext = _react["default"].createContext(null);

exports.RouterContext = RouterContext;

if (true) {
  RouterContext.displayName = 'RouterContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js");

var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js");

exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports["default"] = void 0;

var _url2 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


var basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

var prepareRoute = function prepareRoute(path) {
  return toRoute(!path || path === '/' ? '/index' : path);
};

function fetchNextData(pathname, query, isServerRender, cb) {
  var attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch((0, _utils.formatWithValidation)({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      "/_next/data/".concat(__NEXT_DATA__.buildId).concat(delBasePath(pathname), ".json")),
      query: query
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
    }).then(function (res) {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error("Failed to load static props");
      }

      return res.json();
    });
  }

  return getResponse().then(function (data) {
    return cb ? cb(data) : data;
  })["catch"](function (err) {
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

var Router = /*#__PURE__*/function () {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  function Router(_pathname, _query, _as2, _ref) {
    var _this = this;

    var initialProps = _ref.initialProps,
        pageLoader = _ref.pageLoader,
        App = _ref.App,
        wrapApp = _ref.wrapApp,
        Component = _ref.Component,
        err = _ref.err,
        subscription = _ref.subscription,
        isFallback = _ref.isFallback;

    _classCallCheck(this, Router);

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

    this.onPopState = function (e) {
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
        var pathname = _this.pathname,
            query = _this.query;

        _this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: pathname,
          query: query
        }), (0, _utils.getURL)());

        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && _this.isSsr && e.state.as === _this.asPath && (0, _url2.parse)(e.state.url).pathname === _this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (_this._bps && !_this._bps(e.state)) {
        return;
      }

      var _e$state = e.state,
          url = _e$state.url,
          as = _e$state.as,
          options = _e$state.options;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/vercel/next.js/popstate-state-empty');
        }
      }

      _this.replace(url, as, options);
    };

    this._getStaticData = function (asPath) {
      var pathname = prepareRoute((0, _url2.parse)(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, _this.isSsr, function (data) {
        return _this.sdc[pathname] = data;
      });
    };

    this._getServerData = function (asPath) {
      var _ref2 = (0, _url2.parse)(asPath, true),
          pathname = _ref2.pathname,
          query = _ref2.query;

      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, _this.isSsr);
    }; // represents the current component key


    this.route = toRoute(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component: Component,
        props: initialProps,
        err: err,
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

    if (true) {
      // make sure "as" doesn't start with double slashes or else it can
      // throw an error as it's considered invalid
      if (_as2.substr(0, 2) !== '//') {
        // in order for `e.state` to work on the `onpopstate` event
        // we have to register the initial route upon initialization
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: _pathname,
          query: _query
        }), _as2);
      }

      window.addEventListener('popstate', this.onPopState);
    }
  } // @deprecated backwards compatibility even though it's a private method.


  _createClass(Router, [{
    key: "update",
    value: function update(route, mod) {
      var Component = mod["default"] || mod;
      var data = this.components[route];

      if (!data) {
        throw new Error("Cannot update unavailable route: ".concat(route));
      }

      var newData = Object.assign({}, data, {
        Component: Component,
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
  }, {
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
    /**
    * Go back in history
    */

  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
    /**
    * Performs a `pushState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */

  }, {
    key: "push",
    value: function push(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('pushState', url, as, options);
    }
    /**
    * Performs a `replaceState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */

  }, {
    key: "replace",
    value: function replace(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function change(method, _url, _as, options) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        if (!options._h) {
          _this2.isSsr = false;
        } // marking route changes as a navigation start entry


        if (_utils.ST) {
          performance.mark('routeChange');
        } // If url and as provided as an object representation,
        // we'll format them into the string version here.


        var url = typeof _url === 'object' ? (0, _utils.formatWithValidation)(_url) : _url;
        var as = typeof _as === 'object' ? (0, _utils.formatWithValidation)(_as) : _as;
        url = addBasePath(url);
        as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
        // "<page>/index.html" directly for the SSR page.

        if (false) { var rewriteUrlForNextExport; }

        _this2.abortComponentLoad(as); // If the url change is only related to a hash change
        // We should not proceed. We should only change the state.
        // WARNING: `_h` is an internal option for handing Next.js client-side
        // hydration. Your app should _never_ use this property. It may change at
        // any time without notice.


        if (!options._h && _this2.onlyAHashChange(as)) {
          _this2.asPath = as;
          Router.events.emit('hashChangeStart', as);

          _this2.changeState(method, url, as, options);

          _this2.scrollToHash(as);

          Router.events.emit('hashChangeComplete', as);
          return resolve(true);
        }

        var _ref3 = (0, _url2.parse)(url, true),
            pathname = _ref3.pathname,
            query = _ref3.query,
            protocol = _ref3.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/vercel/next.js/invalid-href-passed"));
          }

          return resolve(false);
        } // If asked to change the current URL we should reload the current page
        // (not location.reload() but reload getInitialProps and other Next.js stuffs)
        // We also need to set the method = replaceState always
        // as this should not go into the history (That's how browsers work)
        // We should compare the new asPath to the current asPath, not the url


        if (!_this2.urlIsNew(as)) {
          method = 'replaceState';
        }

        var route = toRoute(pathname);
        var _options$shallow = options.shallow,
            shallow = _options$shallow === void 0 ? false : _options$shallow;

        if ((0, _isDynamic.isDynamicRoute)(route)) {
          var _ref4 = (0, _url2.parse)(as),
              asPathname = _ref4.pathname;

          var routeRegex = (0, _routeRegex.getRouteRegex)(route);
          var routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

          if (!routeMatch) {
            var missingParams = Object.keys(routeRegex.groups).filter(function (param) {
              return !query[param];
            });

            if (missingParams.length > 0) {
              if (true) {
                console.warn("Mismatching `as` and `href` failed to manually provide " + "the params: ".concat(missingParams.join(', '), " in the `href`'s `query`"));
              }

              return reject(new Error("The provided `as` value (".concat(asPathname, ") is incompatible with the `href` value (").concat(route, "). ") + "Read more: https://err.sh/vercel/next.js/incompatible-href-as"));
            }
          } else {
            // Merge params into `query`, overwriting any specified in search
            Object.assign(query, routeMatch);
          }
        }

        Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

        _this2.getRouteInfo(route, pathname, query, as, shallow).then(function (routeInfo) {
          var error = routeInfo.error;

          if (error && error.cancelled) {
            return resolve(false);
          }

          Router.events.emit('beforeHistoryChange', as);

          _this2.changeState(method, url, as, options);

          if (true) {
            var appComp = _this2.components['/_app'].Component;
            window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
          }

          _this2.set(route, pathname, query, as, routeInfo).then(function () {
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
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (true) {
        if (typeof window.history === 'undefined') {
          console.error("Warning: window.history is not available.");
          return;
        }

        if (typeof window.history[method] === 'undefined') {
          console.error("Warning: window.history.".concat(method, " is not available"));
          return;
        }
      }

      if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
        window.history[method]({
          url: url,
          as: as,
          options: options
        }, // Most browsers currently ignores this parameter, although they may use it in the future.
        // Passing the empty string here should be safe against future changes to the method.
        // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
        '', as);
      }
    }
  }, {
    key: "getRouteInfo",
    value: function getRouteInfo(route, pathname, query, as) {
      var _this3 = this;

      var shallow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
      // If the route is already rendered on the screen.

      if (shallow && cachedRouteInfo && this.route === route) {
        return Promise.resolve(cachedRouteInfo);
      }

      var handleError = function handleError(err, loadErrorFail) {
        return new Promise(function (resolve) {
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

          resolve(_this3.fetchComponent('/_error').then(function (res) {
            var Component = res.page;
            var routeInfo = {
              Component: Component,
              err: err
            };
            return new Promise(function (resolve) {
              _this3.getInitialProps(Component, {
                err: err,
                pathname: pathname,
                query: query
              }).then(function (props) {
                routeInfo.props = props;
                routeInfo.error = err;
                resolve(routeInfo);
              }, function (gipErr) {
                console.error('Error in error page `getInitialProps`: ', gipErr);
                routeInfo.error = err;
                routeInfo.props = {};
                resolve(routeInfo);
              });
            });
          })["catch"](function (err) {
            return handleError(err, true);
          }));
        });
      };

      return new Promise(function (resolve, reject) {
        if (cachedRouteInfo) {
          return resolve(cachedRouteInfo);
        }

        _this3.fetchComponent(route).then(function (res) {
          return resolve({
            Component: res.page,
            __N_SSG: res.mod.__N_SSG,
            __N_SSP: res.mod.__N_SSP
          });
        }, reject);
      }).then(function (routeInfo) {
        var Component = routeInfo.Component,
            __N_SSG = routeInfo.__N_SSG,
            __N_SSP = routeInfo.__N_SSP;

        if (true) {
          var _require = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js"),
              isValidElementType = _require.isValidElementType;

          if (!isValidElementType(Component)) {
            throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));
          }
        }

        return _this3._getData(function () {
          return __N_SSG ? _this3._getStaticData(as) : __N_SSP ? _this3._getServerData(as) : _this3.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
          {
            pathname: pathname,
            query: query,
            asPath: as
          });
        }).then(function (props) {
          routeInfo.props = props;
          _this3.components[route] = routeInfo;
          return routeInfo;
        });
      })["catch"](handleError);
    }
  }, {
    key: "set",
    value: function set(route, pathname, query, as, data) {
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

  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._bps = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = _slicedToArray(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = _slicedToArray(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


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
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = _slicedToArray(_as$split3, 2),
          hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value


      if (hash === '') {
        window.scrollTo(0, 0);
        return;
      } // First we check if the element by id is found


      var idEl = document.getElementById(hash);

      if (idEl) {
        idEl.scrollIntoView();
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(hash)[0];

      if (nameEl) {
        nameEl.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      return this.asPath !== asPath;
    }
    /**
    * Prefetch page code, you may wait for the data during page rendering.
    * This feature only works in production!
    * @param url the href of prefetched page
    * @param asPath the as path of the prefetched page
    */

  }, {
    key: "prefetch",
    value: function prefetch(url) {
      var _this4 = this;

      var asPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return new Promise(function (resolve, reject) {
        var _ref5 = (0, _url2.parse)(url),
            pathname = _ref5.pathname,
            protocol = _ref5.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/vercel/next.js/invalid-href-passed"));
          }

          return;
        } // Prefetch is not supported in development mode because it would trigger on-demand-entries


        if (true) {
          return;
        }

        var route = delBasePath(toRoute(pathname));
        Promise.all([_this4.pageLoader.prefetchData(url, delBasePath(asPath)), _this4.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(function () {
          return resolve();
        }, reject);
      });
    }
  }, {
    key: "fetchComponent",
    value: function () {
      var _fetchComponent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(route) {
        var cancelled, cancel, componentResult, error;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                cancelled = false;

                cancel = this.clc = function () {
                  cancelled = true;
                };

                route = delBasePath(route);
                _context.next = 5;
                return this.pageLoader.loadPage(route);

              case 5:
                componentResult = _context.sent;

                if (!cancelled) {
                  _context.next = 10;
                  break;
                }

                error = new Error("Abort fetching component for route: \"".concat(route, "\""));
                error.cancelled = true;
                throw error;

              case 10:
                if (cancel === this.clc) {
                  this.clc = null;
                }

                return _context.abrupt("return", componentResult);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetchComponent(_x) {
        return _fetchComponent.apply(this, arguments);
      }

      return fetchComponent;
    }()
  }, {
    key: "_getData",
    value: function _getData(fn) {
      var _this5 = this;

      var cancelled = false;

      var cancel = function cancel() {
        cancelled = true;
      };

      this.clc = cancel;
      return fn().then(function (data) {
        if (cancel === _this5.clc) {
          _this5.clc = null;
        }

        if (cancelled) {
          var err = new Error('Loading initial props cancelled');
          err.cancelled = true;
          throw err;
        }

        return data;
      });
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(Component, ctx) {
      var App = this.components['/_app'].Component;

      var AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      return (0, _utils.loadGetInitialProps)(App, {
        AppTree: AppTree,
        Component: Component,
        router: this,
        ctx: ctx
      });
    }
  }, {
    key: "abortComponentLoad",
    value: function abortComponentLoad(as) {
      if (this.clc) {
        var e = new Error('Route Cancelled');
        e.cancelled = true;
        Router.events.emit('routeChangeError', e, as);
        this.clc();
        this.clc = null;
      }
    }
  }, {
    key: "notify",
    value: function notify(data) {
      return this.sub(data, this.components['/_app'].Component);
    }
  }], [{
    key: "_rewriteUrlForNextExport",
    value: function _rewriteUrlForNextExport(url) {
      if (false) { var rewriteUrlForNextExport; } else {
        return url;
      }
    }
  }]);

  return Router;
}();

exports["default"] = Router;
Router.events = (0, _mitt["default"])();

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

var TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  var re = routeRegex.re,
      groups = routeRegex.groups;
  return function (pathname) {
    var routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    var decode = function decode(param) {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        var err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    var params = {};
    Object.keys(groups).forEach(function (slugName) {
      var g = groups[slugName];
      var m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(function (entry) {
          return decode(entry);
        }) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  var escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  var groups = {};
  var groupIndex = 1;
  var parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, function (_, $1) {
    var isOptional = /^\\\[.*\\\]$/.test($1);

    if (isOptional) {
      $1 = $1.slice(2, -2);
    }

    var isCatchAll = /^(\\\.){3}/.test($1);

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
  var namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (false) {}

  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups: groups,
    namedRegex: namedParameterizedRoute ? "^".concat(namedParameterizedRoute, "(?:/)?$") : undefined
  };
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js");

exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _url = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");
/**
* Utils
*/


function execOnce(fn) {
  var used = false;
  var result;
  return function () {
    if (!used) {
      used = true;
      result = fn.apply(void 0, arguments);
    }

    return result;
  };
}

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

function loadGetInitialProps(_x, _x2) {
  return _loadGetInitialProps.apply(this, arguments);
}

function _loadGetInitialProps() {
  _loadGetInitialProps = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(App, ctx) {
    var _App$prototype, message, res, props, _message;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (false) {}

            if (!((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps)) {
              _context.next = 4;
              break;
            }

            message = "\"".concat(getDisplayName(App), ".getInitialProps()\" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.");
            throw new Error(message);

          case 4:
            // when called from _app `ctx` is nested in `ctx`
            res = ctx.res || ctx.ctx && ctx.ctx.res;

            if (App.getInitialProps) {
              _context.next = 12;
              break;
            }

            if (!(ctx.ctx && ctx.Component)) {
              _context.next = 11;
              break;
            }

            _context.next = 9;
            return loadGetInitialProps(ctx.Component, ctx.ctx);

          case 9:
            _context.t0 = _context.sent;
            return _context.abrupt("return", {
              pageProps: _context.t0
            });

          case 11:
            return _context.abrupt("return", {});

          case 12:
            _context.next = 14;
            return App.getInitialProps(ctx);

          case 14:
            props = _context.sent;

            if (!(res && isResSent(res))) {
              _context.next = 17;
              break;
            }

            return _context.abrupt("return", props);

          case 17:
            if (props) {
              _context.next = 20;
              break;
            }

            _message = "\"".concat(getDisplayName(App), ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
            throw new Error(_message);

          case 20:
            if (true) {
              if (Object.keys(props).length === 0 && !ctx.ctx) {
                console.warn("".concat(getDisplayName(App), " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps"));
              }
            }

            return _context.abrupt("return", props);

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _loadGetInitialProps.apply(this, arguments);
}

var urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(function (key) {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn("Unknown key passed via urlObject into url.format: ".concat(key));
        }
      });
    }
  }

  return (0, _url.format)(url, options);
}

var SP = typeof performance !== 'undefined';
exports.SP = SP;
var ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/construct.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/construct.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js");

var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct */ "./node_modules/next/node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js");

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

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

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

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

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/regenerator/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_a0ea8196e869b9b4425e ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_a0ea8196e869b9b4425e */ "dll-reference dll_a0ea8196e869b9b4425e"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_a0ea8196e869b9b4425e ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_a0ea8196e869b9b4425e */ "dll-reference dll_a0ea8196e869b9b4425e"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!***********************************************************************************************!*\
  !*** delegated ./node_modules/react-dom/index.js from dll-reference dll_a0ea8196e869b9b4425e ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_a0ea8196e869b9b4425e */ "dll-reference dll_a0ea8196e869b9b4425e"))("./node_modules/react-dom/index.js");

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js ***!
  \****************************************************************************/
/*! exports provided: polyfill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyfill", function() { return polyfill; });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}




/***/ }),

/***/ "./node_modules/react-loading-overlay/lib/LoadingOverlay.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-loading-overlay/lib/LoadingOverlay.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _reactTransitionGroup = __webpack_require__(/*! react-transition-group */ "./node_modules/react-loading-overlay/node_modules/react-transition-group/index.js");

var _emotion = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/emotion.esm.js");

var _Spinner = _interopRequireDefault(__webpack_require__(/*! ./components/Spinner */ "./node_modules/react-loading-overlay/lib/components/Spinner.js"));

var _styles = _interopRequireDefault(__webpack_require__(/*! ./styles */ "./node_modules/react-loading-overlay/lib/styles.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LoadingOverlayWrapper =
/*#__PURE__*/
function (_Component) {
  _inherits(LoadingOverlayWrapper, _Component);

  function LoadingOverlayWrapper(props) {
    var _this;

    _classCallCheck(this, LoadingOverlayWrapper);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LoadingOverlayWrapper).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getStyles", function (key, providedState) {
      var base = _styles.default[key](providedState, _this.props);

      var custom = _this.props.styles[key];
      if (!custom) return base;
      return typeof custom === 'function' ? custom(base, _this.props) : custom;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "cx", function (names) {
      var arr = Array.isArray(names) ? names : [names];

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return _emotion.cx.apply(void 0, _toConsumableArray(arr.map(function (name) {
        return name ? "".concat(_this.props.classNamePrefix).concat(name) : '';
      })).concat(args));
    });

    _this.wrapper = _react.default.createRef();
    _this.state = {
      overflowCSS: {}
    };
    return _this;
  }

  _createClass(LoadingOverlayWrapper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var wrapperStyle = window.getComputedStyle(this.wrapper.current);
      var overflowCSS = ['overflow', 'overflowX', 'overflowY'].reduce(function (m, i) {
        if (wrapperStyle[i] !== 'visible') m[i] = 'hidden';
        return m;
      }, {});
      this.setState({
        overflowCSS: overflowCSS
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var active = this.props.active;
      if (active) this.wrapper.current.scrollTop = 0;
    }
    /**
     * Return an emotion css object for a given element key
     * If a custom style was provided via props, run it with
     * the base css obj.
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var overflowCSS = this.state.overflowCSS;
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          onClick = _this$props.onClick,
          active = _this$props.active,
          fadeSpeed = _this$props.fadeSpeed,
          spinner = _this$props.spinner,
          text = _this$props.text;
      return _react.default.createElement("div", {
        "data-testid": "wrapper",
        ref: this.wrapper,
        className: this.cx(['wrapper', active && 'wrapper--active'], (0, _emotion.css)(this.getStyles('wrapper', active ? overflowCSS : {})), className)
      }, _react.default.createElement(_reactTransitionGroup.CSSTransition, {
        in: active,
        classNames: "_loading-overlay-transition",
        timeout: fadeSpeed,
        unmountOnExit: true
      }, function (state) {
        return _react.default.createElement("div", {
          "data-testid": "overlay",
          className: _this2.cx('overlay', (0, _emotion.css)(_this2.getStyles('overlay', state))),
          onClick: onClick
        }, _react.default.createElement("div", {
          className: _this2.cx('content', (0, _emotion.css)(_this2.getStyles('content')))
        }, spinner && (typeof spinner === 'boolean' ? _react.default.createElement(_Spinner.default, {
          cx: _this2.cx,
          getStyles: _this2.getStyles
        }) : spinner), text));
      }), children);
    }
  }]);

  return LoadingOverlayWrapper;
}(_react.Component);

LoadingOverlayWrapper.propTypes = {
  active: _propTypes.default.bool,
  fadeSpeed: _propTypes.default.number,
  onClick: _propTypes.default.func,
  className: _propTypes.default.string,
  classNamePrefix: _propTypes.default.string,
  spinner: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.node]),
  text: _propTypes.default.node,
  styles: _propTypes.default.shape({
    content: _propTypes.default.function,
    overlay: _propTypes.default.function,
    spinner: _propTypes.default.function,
    wrapper: _propTypes.default.function
  })
};
LoadingOverlayWrapper.defaultProps = {
  classNamePrefix: '_loading_overlay_',
  fadeSpeed: 500,
  styles: {}
};
var _default = LoadingOverlayWrapper;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-loading-overlay/lib/components/Spinner.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-loading-overlay/lib/components/Spinner.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _emotion = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/emotion.esm.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Spinner = function Spinner(_ref) {
  var getStyles = _ref.getStyles,
      cx = _ref.cx;
  return _react.default.createElement("div", {
    className: cx('spinner', (0, _emotion.css)(getStyles('spinner')))
  }, _react.default.createElement("svg", {
    viewBox: "25 25 50 50"
  }, _react.default.createElement("circle", {
    cx: "50",
    cy: "50",
    r: "20",
    fill: "none",
    strokeWidth: "2",
    strokeMiterlimit: "10"
  })));
};

Spinner.propTypes = {
  getStyles: _propTypes.default.func.isRequired,
  cx: _propTypes.default.func.isRequired
};
var _default = Spinner;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-loading-overlay/lib/styles.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-loading-overlay/lib/styles.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _emotion = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/emotion.esm.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  0% {\n    stroke-dasharray: 1,200;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 89,200;\n    stroke-dashoffset: -35px;\n  }\n  100% {\n    stroke-dasharray: 89,200;\n    stroke-dashoffset: -124px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var rotate360 = (0, _emotion.keyframes)(_templateObject());
var spinnerDash = (0, _emotion.keyframes)(_templateObject2());
var _default = {
  wrapper: function wrapper(state) {
    return _objectSpread({
      position: 'relative'
    }, state);
  },
  overlay: function overlay(state, props) {
    return {
      position: 'absolute',
      height: '100%',
      width: '100%',
      top: '0px',
      left: '0px',
      display: 'flex',
      textAlign: 'center',
      fontSize: '1.2em',
      color: '#FFF',
      background: 'rgba(0, 0, 0, 0.7)',
      zIndex: 800,
      transition: "opacity ".concat(props.fadeSpeed, "ms ease-in"),
      opacity: state === 'entering' || state === 'entered' ? 1 : 0
    };
  },
  content: function content() {
    return {
      margin: 'auto'
    };
  },
  spinner: function spinner(state) {
    return {
      position: 'relative',
      margin: '0px auto 10px auto',
      width: '50px',
      maxHeight: '100%',
      '&:before': {
        content: '""',
        display: 'block',
        paddingTop: '100%'
      },
      '& svg': {
        animation: "".concat(rotate360, " 2s linear infinite"),
        height: '100%',
        transformOrigin: 'center center',
        width: '100%',
        position: 'absolute',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        margin: 'auto',
        '& circle': {
          animation: "".concat(spinnerDash, " 1.5s ease-in-out infinite"),
          strokeDasharray: '1,200',
          strokeDashoffset: 0,
          strokeLinecap: 'round',
          stroke: '#FFF'
        }
      }
    };
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-loading-overlay/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/react-loading-overlay/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/react-loading-overlay/node_modules/dom-helpers/class/addClass.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/react-loading-overlay/node_modules/dom-helpers/class/addClass.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/react-loading-overlay/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = addClass;

var _hasClass = _interopRequireDefault(__webpack_require__(/*! ./hasClass */ "./node_modules/react-loading-overlay/node_modules/dom-helpers/class/hasClass.js"));

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-loading-overlay/node_modules/dom-helpers/class/hasClass.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/react-loading-overlay/node_modules/dom-helpers/class/hasClass.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = hasClass;

function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-loading-overlay/node_modules/dom-helpers/class/removeClass.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/react-loading-overlay/node_modules/dom-helpers/class/removeClass.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

module.exports = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
};

/***/ }),

/***/ "./node_modules/react-loading-overlay/node_modules/react-transition-group/CSSTransition.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/react-loading-overlay/node_modules/react-transition-group/CSSTransition.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _addClass = _interopRequireDefault(__webpack_require__(/*! dom-helpers/class/addClass */ "./node_modules/react-loading-overlay/node_modules/dom-helpers/class/addClass.js"));

var _removeClass = _interopRequireDefault(__webpack_require__(/*! dom-helpers/class/removeClass */ "./node_modules/react-loading-overlay/node_modules/dom-helpers/class/removeClass.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Transition = _interopRequireDefault(__webpack_require__(/*! ./Transition */ "./node_modules/react-loading-overlay/node_modules/react-transition-group/Transition.js"));

var _PropTypes = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-loading-overlay/node_modules/react-transition-group/utils/PropTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _addClass.default)(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _removeClass.default)(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](http://www.nganimate.org/) library, you should use it if you're
 * using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity: 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**.
 */


var CSSTransition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.onEnter = function (node, appearing) {
      var _this$getClassNames = _this.getClassNames(appearing ? 'appear' : 'enter'),
          className = _this$getClassNames.className;

      _this.removeClasses(node, 'exit');

      addClass(node, className);

      if (_this.props.onEnter) {
        _this.props.onEnter(node, appearing);
      }
    };

    _this.onEntering = function (node, appearing) {
      var _this$getClassNames2 = _this.getClassNames(appearing ? 'appear' : 'enter'),
          activeClassName = _this$getClassNames2.activeClassName;

      _this.reflowAndAddClass(node, activeClassName);

      if (_this.props.onEntering) {
        _this.props.onEntering(node, appearing);
      }
    };

    _this.onEntered = function (node, appearing) {
      var appearClassName = _this.getClassNames('appear').doneClassName;

      var enterClassName = _this.getClassNames('enter').doneClassName;

      var doneClassName = appearing ? appearClassName + " " + enterClassName : enterClassName;

      _this.removeClasses(node, appearing ? 'appear' : 'enter');

      addClass(node, doneClassName);

      if (_this.props.onEntered) {
        _this.props.onEntered(node, appearing);
      }
    };

    _this.onExit = function (node) {
      var _this$getClassNames3 = _this.getClassNames('exit'),
          className = _this$getClassNames3.className;

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      addClass(node, className);

      if (_this.props.onExit) {
        _this.props.onExit(node);
      }
    };

    _this.onExiting = function (node) {
      var _this$getClassNames4 = _this.getClassNames('exit'),
          activeClassName = _this$getClassNames4.activeClassName;

      _this.reflowAndAddClass(node, activeClassName);

      if (_this.props.onExiting) {
        _this.props.onExiting(node);
      }
    };

    _this.onExited = function (node) {
      var _this$getClassNames5 = _this.getClassNames('exit'),
          doneClassName = _this$getClassNames5.doneClassName;

      _this.removeClasses(node, 'exit');

      addClass(node, doneClassName);

      if (_this.props.onExited) {
        _this.props.onExited(node);
      }
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + '-' : '';
      var className = isStringClassNames ? prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? className + '-active' : classNames[type + 'Active'];
      var doneClassName = isStringClassNames ? className + '-done' : classNames[type + 'Done'];
      return {
        className: className,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$getClassNames6 = this.getClassNames(type),
        className = _this$getClassNames6.className,
        activeClassName = _this$getClassNames6.activeClassName,
        doneClassName = _this$getClassNames6.doneClassName;

    className && removeClass(node, className);
    activeClassName && removeClass(node, activeClassName);
    doneClassName && removeClass(node, doneClassName);
  };

  _proto.reflowAndAddClass = function reflowAndAddClass(node, className) {
    // This is for to force a repaint,
    // which is necessary in order to transition styles when adding a class name.
    if (className) {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
      /* eslint-enable no-unused-expressions */

      addClass(node, className);
    }
  };

  _proto.render = function render() {
    var props = _extends({}, this.props);

    delete props.classNames;
    return _react.default.createElement(_Transition.default, _extends({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(_react.default.Component);

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes =  true ? _extends({}, _Transition.default.propTypes, {
  /**
   * The animation classNames applied to the component as it enters, exits or
   * has finished the transition. A single name can be provided and it will be
   * suffixed for each stage: e.g.
   *
   * `classNames="fade"` applies `fade-enter`, `fade-enter-active`,
   * `fade-enter-done`, `fade-exit`, `fade-exit-active`, `fade-exit-done`,
   * `fade-appear`, `fade-appear-active`, and `fade-appear-done`.
   *
   * **Note**: `fade-appear-done` and `fade-enter-done` will _both_ be applied.
   * This allows you to define different behavior for when appearing is done and
   * when regular entering is done, using selectors like
   * `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply an
   * epic entrance animation when element first appears in the DOM using
   * [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   * simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: _PropTypes.classNamesShape,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * @type Function(node: HtmlElement)
   */
  onExit: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * @type Function(node: HtmlElement)
   */
  onExited: PropTypes.func
}) : undefined;
var _default = CSSTransition;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-loading-overlay/node_modules/react-transition-group/ReplaceTransition.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/react-loading-overlay/node_modules/react-transition-group/ReplaceTransition.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _TransitionGroup = _interopRequireDefault(__webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-loading-overlay/node_modules/react-transition-group/TransitionGroup.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/**
 * The `<ReplaceTransition>` component is a specialized `Transition` component
 * that animates between two children.
 *
 * ```jsx
 * <ReplaceTransition in>
 *   <Fade><div>I appear first</div></Fade>
 *   <Fade><div>I replace the above</div></Fade>
 * </ReplaceTransition>
 * ```
 */
var ReplaceTransition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ReplaceTransition, _React$Component);

  function ReplaceTransition() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.handleEnter = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _this.handleLifecycle('onEnter', 0, args);
    };

    _this.handleEntering = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _this.handleLifecycle('onEntering', 0, args);
    };

    _this.handleEntered = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _this.handleLifecycle('onEntered', 0, args);
    };

    _this.handleExit = function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return _this.handleLifecycle('onExit', 1, args);
    };

    _this.handleExiting = function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return _this.handleLifecycle('onExiting', 1, args);
    };

    _this.handleExited = function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return _this.handleLifecycle('onExited', 1, args);
    };

    return _this;
  }

  var _proto = ReplaceTransition.prototype;

  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
    var _child$props;

    var children = this.props.children;

    var child = _react.default.Children.toArray(children)[idx];

    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);
    if (this.props[handler]) this.props[handler]((0, _reactDom.findDOMNode)(this));
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        inProp = _this$props.in,
        props = _objectWithoutPropertiesLoose(_this$props, ["children", "in"]);

    var _React$Children$toArr = _react.default.Children.toArray(children),
        first = _React$Children$toArr[0],
        second = _React$Children$toArr[1];

    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return _react.default.createElement(_TransitionGroup.default, props, inProp ? _react.default.cloneElement(first, {
      key: 'first',
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : _react.default.cloneElement(second, {
      key: 'second',
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };

  return ReplaceTransition;
}(_react.default.Component);

ReplaceTransition.propTypes =  true ? {
  in: _propTypes.default.bool.isRequired,
  children: function children(props, propName) {
    if (_react.default.Children.count(props[propName]) !== 2) return new Error("\"" + propName + "\" must be exactly two transition components.");
    return null;
  }
} : undefined;
var _default = ReplaceTransition;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-loading-overlay/node_modules/react-transition-group/Transition.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-loading-overlay/node_modules/react-transition-group/Transition.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = void 0;

var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");

var _PropTypes = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-loading-overlay/node_modules/react-transition-group/utils/PropTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var UNMOUNTED = 'unmounted';
exports.UNMOUNTED = UNMOUNTED;
var EXITED = 'exited';
exports.EXITED = EXITED;
var ENTERING = 'entering';
exports.ENTERING = ENTERING;
var ENTERED = 'entered';
exports.ENTERED = ENTERED;
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 0 },
 *   entered:  { opacity: 1 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

exports.EXITING = EXITING;

var Transition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context.transitionGroup; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  var _proto = Transition.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: null // allows for nested Transitions

    };
  };

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  }; // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }


  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      var node = _reactDom.default.findDOMNode(this);

      if (nextStatus === ENTERING) {
        this.performEnter(node, mounting);
      } else {
        this.performExit(node);
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(node, mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(node);
      });
      return;
    }

    this.props.onEnter(node, appearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(node, appearing);

      _this2.onTransitionEnd(node, enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(node, appearing);
        });
      });
    });
  };

  _proto.performExit = function performExit(node) {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

    if (!exit) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(node);
      });
      return;
    }

    this.props.onExit(node);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(node);

      _this3.onTransitionEnd(node, timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(node);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
    this.setNextCallback(handler);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      this.props.addEndListener(node, this.nextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        childProps = _objectWithoutPropertiesLoose(_this$props, ["children"]); // filter props for Transtition


    delete childProps.in;
    delete childProps.mountOnEnter;
    delete childProps.unmountOnExit;
    delete childProps.appear;
    delete childProps.enter;
    delete childProps.exit;
    delete childProps.timeout;
    delete childProps.addEndListener;
    delete childProps.onEnter;
    delete childProps.onEntering;
    delete childProps.onEntered;
    delete childProps.onExit;
    delete childProps.onExiting;
    delete childProps.onExited;

    if (typeof children === 'function') {
      return children(status, childProps);
    }

    var child = _react.default.Children.only(children);

    return _react.default.cloneElement(child, childProps);
  };

  return Transition;
}(_react.default.Component);

Transition.contextTypes = {
  transitionGroup: PropTypes.object
};
Transition.childContextTypes = {
  transitionGroup: function transitionGroup() {}
};
Transition.propTypes =  true ? {
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`, `'unmounted'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: PropTypes.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: PropTypes.bool,

  /**
   * Normally a component is not transitioned if it is shown when the `<Transition>` component mounts.
   * If you want to transition on the first mount set `appear` to `true`, and the
   * component will transition in as soon as the `<Transition>` mounts.
   *
   * > Note: there are no specific "appear" states. `appear` only adds an additional `enter` transition.
   */
  appear: PropTypes.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: PropTypes.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: PropTypes.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = _PropTypes.timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. **Note:** Timeouts are still used as a fallback if provided.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: PropTypes.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: PropTypes.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: PropTypes.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: PropTypes.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: PropTypes.func // Name the function so it is clearer in the documentation

} : undefined;

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = 0;
Transition.EXITED = 1;
Transition.ENTERING = 2;
Transition.ENTERED = 3;
Transition.EXITING = 4;

var _default = (0, _reactLifecyclesCompat.polyfill)(Transition);

exports.default = _default;

/***/ }),

/***/ "./node_modules/react-loading-overlay/node_modules/react-transition-group/TransitionGroup.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/react-loading-overlay/node_modules/react-transition-group/TransitionGroup.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");

var _ChildMapping = __webpack_require__(/*! ./utils/ChildMapping */ "./node_modules/react-loading-overlay/node_modules/react-transition-group/utils/ChildMapping.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
  /**
   * The `<TransitionGroup>` component manages a set of transition components
   * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
   * components, `<TransitionGroup>` is a state machine for managing the mounting
   * and unmounting of components over time.
   *
   * Consider the example below. As items are removed or added to the TodoList the
   * `in` prop is toggled automatically by the `<TransitionGroup>`.
   *
   * Note that `<TransitionGroup>`  does not define any animation behavior!
   * Exactly _how_ a list item animates is up to the individual transition
   * component. This means you can mix and match animations across different list
   * items.
   */

};

var TransitionGroup =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(_assertThisInitialized(_assertThisInitialized(_this))); // Initial children should all be entering, dependent on appear


    _this.state = {
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: {
        isMounting: !this.appeared
      }
    };
  };

  _proto.componentDidMount = function componentDidMount() {
    this.appeared = true;
    this.mounted = true;
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? (0, _ChildMapping.getInitialChildMapping)(nextProps, handleExited) : (0, _ChildMapping.getNextChildMapping)(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = (0, _ChildMapping.getChildMapping)(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = _extends({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return children;
    }

    return _react.default.createElement(Component, props, children);
  };

  return TransitionGroup;
}(_react.default.Component);

TransitionGroup.childContextTypes = {
  transitionGroup: _propTypes.default.object.isRequired
};
TransitionGroup.propTypes =  true ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: _propTypes.default.any,

  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: _propTypes.default.node,

  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: _propTypes.default.bool,

  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: _propTypes.default.bool,

  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: _propTypes.default.bool,

  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: _propTypes.default.func
} : undefined;
TransitionGroup.defaultProps = defaultProps;

var _default = (0, _reactLifecyclesCompat.polyfill)(TransitionGroup);

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-loading-overlay/node_modules/react-transition-group/index.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/react-loading-overlay/node_modules/react-transition-group/index.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _CSSTransition = _interopRequireDefault(__webpack_require__(/*! ./CSSTransition */ "./node_modules/react-loading-overlay/node_modules/react-transition-group/CSSTransition.js"));

var _ReplaceTransition = _interopRequireDefault(__webpack_require__(/*! ./ReplaceTransition */ "./node_modules/react-loading-overlay/node_modules/react-transition-group/ReplaceTransition.js"));

var _TransitionGroup = _interopRequireDefault(__webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-loading-overlay/node_modules/react-transition-group/TransitionGroup.js"));

var _Transition = _interopRequireDefault(__webpack_require__(/*! ./Transition */ "./node_modules/react-loading-overlay/node_modules/react-transition-group/Transition.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  Transition: _Transition.default,
  TransitionGroup: _TransitionGroup.default,
  ReplaceTransition: _ReplaceTransition.default,
  CSSTransition: _CSSTransition.default
};

/***/ }),

/***/ "./node_modules/react-loading-overlay/node_modules/react-transition-group/utils/ChildMapping.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/react-loading-overlay/node_modules/react-transition-group/utils/ChildMapping.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;
exports.getInitialChildMapping = getInitialChildMapping;
exports.getNextChildMapping = getNextChildMapping;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */
function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && (0, _react.isValidElement)(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) _react.Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */


function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return (0, _react.cloneElement)(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}

function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!(0, _react.isValidElement)(child)) return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = (0, _react.isValidElement)(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = (0, _react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = (0, _react.cloneElement)(child, {
        in: false
      });
    } else if (hasNext && hasPrev && (0, _react.isValidElement)(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = (0, _react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}

/***/ }),

/***/ "./node_modules/react-loading-overlay/node_modules/react-transition-group/utils/PropTypes.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/react-loading-overlay/node_modules/react-transition-group/utils/PropTypes.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.classNamesShape = exports.timeoutsShape = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var timeoutsShape =  true ? _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
  enter: _propTypes.default.number,
  exit: _propTypes.default.number,
  appear: _propTypes.default.number
}).isRequired]) : undefined;
exports.timeoutsShape = timeoutsShape;
var classNamesShape =  true ? _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.shape({
  enter: _propTypes.default.string,
  exit: _propTypes.default.string,
  active: _propTypes.default.string
}), _propTypes.default.shape({
  enter: _propTypes.default.string,
  enterDone: _propTypes.default.string,
  enterActive: _propTypes.default.string,
  exit: _propTypes.default.string,
  exitDone: _propTypes.default.string,
  exitActive: _propTypes.default.string
})]) : undefined;
exports.classNamesShape = classNamesShape;

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_a0ea8196e869b9b4425e ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_a0ea8196e869b9b4425e */ "dll-reference dll_a0ea8196e869b9b4425e"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/Management/index.js":
/*!***********************************!*\
  !*** ./pages/Management/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _contexts_auth_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contexts/auth.js */ "./contexts/auth.js");
/* harmony import */ var react_loading_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-loading-overlay */ "./node_modules/react-loading-overlay/lib/LoadingOverlay.js");
/* harmony import */ var react_loading_overlay__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_loading_overlay__WEBPACK_IMPORTED_MODULE_6__);




var _jsxFileName = "D:\\work\\xampp2020\\htdocs\\new_rabwa_project\\rabwa-coubon\\nexttt\\nextProect\\pages\\Management\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;
 //





function Admin() {
  _s();

  var _jsx;

  var _useAuth = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_5__["default"])(),
      login = _useAuth.login,
      isAuthenticated = _useAuth.isAuthenticated,
      user = _useAuth.user;

  console.log(isAuthenticated);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (isAuthenticated) {
      if (user.UserType != "admin") {
        next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/");
      }
    }
  }, []);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      email = _useState[0],
      setemail = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      password = _useState2[0],
      setPassword = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      alert = _useState3[0],
      setalert = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isLoading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(1),
      pageup = _useState5[0],
      setpageup = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      spinner = _useState6[0],
      setspinner = _useState6[1];

  var loguser = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(email, password) {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setspinner(true);
              console.log(email, password);
              setLoading(true);
              _context.next = 5;
              return login(email, password);

            case 5:
              res = _context.sent;

              if (res) {
                setspinner(false);
                next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/CompanysStatistics");
              } else {
                setspinner(false);
              }

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function loguser(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  return __jsx(react_loading_overlay__WEBPACK_IMPORTED_MODULE_6___default.a, {
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
    "class": "main-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx("div", {
    "class": "header bg-gradient-primary py-7 py-lg-8 pt-lg-9",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx("div", {
    "class": "separator separator-bottom separator-skew zindex-100",
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
    "class": "fill-default",
    points: "2560 0 2560 100 0 100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  })))), __jsx("div", {
    "class": "container mt--8 pb-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx("div", {
    "class": "row justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, __jsx("div", {
    "class": "col-lg-5 col-md-7",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, __jsx("div", {
    "class": "card bg-secondary border-0 mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }
  }, __jsx("div", {
    "class": "card-body px-lg-5 py-lg-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, __jsx("div", {
    "class": "text-center text-muted mb-4",
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
    onSubmit: function onSubmit(e) {
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
    "class": "form-group mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 21
    }
  }, __jsx("div", {
    "class": "input-group input-group-merge input-group-alternative",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 23
    }
  }, __jsx("div", {
    "class": "input-group-prepend",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 25
    }
  }, __jsx("span", {
    "class": "input-group-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 27
    }
  }, __jsx("i", {
    "class": "ni ni-email-83",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 29
    }
  }))), __jsx("input", {
    value: email,
    onChange: function onChange(e) {
      return setemail(e.target.value);
    },
    "class": "form-control",
    placeholder: "\u0627\u0644\u0625\u064A\u0645\u064A\u0644",
    type: "email",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 25
    }
  }))), __jsx("div", {
    "class": "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 21
    }
  }, __jsx("div", {
    "class": "input-group input-group-merge input-group-alternative",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 23
    }
  }, __jsx("div", {
    "class": "input-group-prepend",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 25
    }
  }, __jsx("span", {
    "class": "input-group-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 27
    }
  }, __jsx("i", {
    "class": "ni ni-lock-circle-open",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 29
    }
  }))), __jsx("input", {
    value: password,
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    },
    "class": "form-control",
    placeholder: "\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0633\u0631\u064A",
    type: "password",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 25
    }
  }))), __jsx("div", {
    "class": "text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 21
    }
  }, __jsx("button", (_jsx = {
    type: "button"
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "type", "submit"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "class", "btn btn-primary my-4"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 107,
    columnNumber: 23
  }), _jsx), "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644"))))), __jsx("div", {
    "class": "row mt-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 15
    }
  }, __jsx("div", {
    "class": "col-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    "class": "text-light",
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
    "class": "col-6 text-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    "class": "text-light",
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

_s(Admin, "hbQqSjY8SPanx2jTa7KGg4GQ9IY=", false, function () {
  return [_contexts_auth_js__WEBPACK_IMPORTED_MODULE_5__["default"]];
});

_c = Admin;
/* harmony default export */ __webpack_exports__["default"] = (Admin);

var _c;

$RefreshReg$(_c, "Admin");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./services/Api.js":
/*!*************************!*\
  !*** ./services/Api.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);


var siteUrl = js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get("siteUrl");

if (!siteUrl) {
  js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set("siteUrl", "https://api.rabowah.com/wp-json/", {
    expires: 60
  });
}

var urls = {
  development: "https://api.rabowah.com/wp-json/",
  production: "https://api.rabowah.com/wp-json/"
};
var api = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: urls["development"],
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (api);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 2:
/*!****************************************************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2FManagement&absolutePagePath=D%3A%5Cwork%5Cxampp2020%5Chtdocs%5Cnew_rabwa_project%5Crabwa-coubon%5Cnexttt%5CnextProect%5Cpages%5CManagement%5Cindex.js ***!
  \****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2FManagement&absolutePagePath=D%3A%5Cwork%5Cxampp2020%5Chtdocs%5Cnew_rabwa_project%5Crabwa-coubon%5Cnexttt%5CnextProect%5Cpages%5CManagement%5Cindex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FManagement&absolutePagePath=D%3A%5Cwork%5Cxampp2020%5Chtdocs%5Cnew_rabwa_project%5Crabwa-coubon%5Cnexttt%5CnextProect%5Cpages%5CManagement%5Cindex.js!./");


/***/ }),

/***/ "dll-reference dll_a0ea8196e869b9b4425e":
/*!*******************************************!*\
  !*** external "dll_a0ea8196e869b9b4425e" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_a0ea8196e869b9b4425e;

/***/ })

},[[2,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0cy9hdXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL2NhY2hlL2Rpc3QvY2FjaGUuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL2hhc2gvZGlzdC9oYXNoLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9tZW1vaXplL2Rpc3QvbWVtb2l6ZS5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vc2VyaWFsaXplL2Rpc3Qvc2VyaWFsaXplLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9zaGVldC9kaXN0L3NoZWV0LmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9zdHlsaXMvZGlzdC9zdHlsaXMuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3VuaXRsZXNzL2Rpc3QvdW5pdGxlc3MuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3V0aWxzL2Rpc3QvdXRpbHMuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3dlYWstbWVtb2l6ZS9kaXN0L3dlYWstbWVtb2l6ZS5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2J1aWxkRnVsbFBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvbWVyZ2VDb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3JlYXRlLWVtb3Rpb24vZGlzdC9jcmVhdGUtZW1vdGlvbi5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZW1vdGlvbi9kaXN0L2Vtb3Rpb24uZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qcy1jb29raWUvc3JjL2pzLmNvb2tpZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmF0aXZlLXVybC9kaXN0L2luZGV4LmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3BvbHlmaWxscy9vYmplY3QtYXNzaWduLmpzIGZyb20gZGxsLXJlZmVyZW5jZSBkbGxfYTBlYTgxOTZlODY5YjliNDQyNWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1jbGllbnQtcGFnZXMtbG9hZGVyLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5V2l0aEhvbGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY29uc3RydWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzIGZyb20gZGxsLXJlZmVyZW5jZSBkbGxfYTBlYTgxOTZlODY5YjliNDQyNWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgZGxsX2EwZWE4MTk2ZTg2OWI5YjQ0MjVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9xdWVyeXN0cmluZy1lczMvZGVjb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9xdWVyeXN0cmluZy1lczMvZW5jb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9xdWVyeXN0cmluZy1lczMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIGRsbF9hMGVhODE5NmU4NjliOWI0NDI1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtbGlmZWN5Y2xlcy1jb21wYXQvcmVhY3QtbGlmZWN5Y2xlcy1jb21wYXQuZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWxvYWRpbmctb3ZlcmxheS9saWIvTG9hZGluZ092ZXJsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWxvYWRpbmctb3ZlcmxheS9saWIvY29tcG9uZW50cy9TcGlubmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1sb2FkaW5nLW92ZXJsYXkvbGliL3N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtbG9hZGluZy1vdmVybGF5L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtbG9hZGluZy1vdmVybGF5L25vZGVfbW9kdWxlcy9kb20taGVscGVycy9jbGFzcy9hZGRDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtbG9hZGluZy1vdmVybGF5L25vZGVfbW9kdWxlcy9kb20taGVscGVycy9jbGFzcy9oYXNDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtbG9hZGluZy1vdmVybGF5L25vZGVfbW9kdWxlcy9kb20taGVscGVycy9jbGFzcy9yZW1vdmVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtbG9hZGluZy1vdmVybGF5L25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL0NTU1RyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWxvYWRpbmctb3ZlcmxheS9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9SZXBsYWNlVHJhbnNpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtbG9hZGluZy1vdmVybGF5L25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL1RyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWxvYWRpbmctb3ZlcmxheS9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9UcmFuc2l0aW9uR3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWxvYWRpbmctb3ZlcmxheS9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtbG9hZGluZy1vdmVybGF5L25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL3V0aWxzL0NoaWxkTWFwcGluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtbG9hZGluZy1vdmVybGF5L25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL3V0aWxzL1Byb3BUeXBlcy5qcyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBkbGxfYTBlYTgxOTZlODY5YjliNDQyNWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vaGFybW9ueS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9NYW5hZ2VtZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL0FwaS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkbGxfYTBlYTgxOTZlODY5YjliNDQyNWVcIiJdLCJuYW1lcyI6WyJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwidXNlciIsInNldFVzZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInRvZ2dsZXIiLCJzZXR0b2dnbGVyIiwidXNlRWZmZWN0IiwibG9hZFVzZXJGcm9tQ29va2llcyIsImRhdGEiLCJ0b2tlbiIsIkNvb2tpZXMiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiYXBpIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInBvc3QiLCJ0aGVuIiwicmVzIiwiZXJyIiwicmVtb3ZlIiwiUm91dGVyIiwicHVzaCIsInVzZXJfbmljZW5hbWUiLCJ1c2VyX2VtYWlsIiwiVXNlclR5cGUiLCJDb21wYW55Q29kZSIsIkJyYWNuaENvZGUiLCJwcm9maWxlX3BpYyIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJTZW5kY29uZCIsInBob25lIiwidGVtcHJlcyIsInBob25lTG9naW4iLCJjb2RlIiwic2V0IiwiZXhwaXJlcyIsImxvZ2luIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImxvZ291dCIsImlzQXV0aGVudGljYXRlZCIsInVzZUF1dGgiLCJjb250ZXh0IiwidXNlQ29udGV4dCIsIlByb3RlY3RSb3V0ZSIsIkNvbXBvbmVudCIsInJvdXRlciIsInVzZVJvdXRlciIsImFyZ3VtZW50cyIsIlByb3RlY3RSb3V0ZUNvbXBhbnkiLCJQcm90ZWN0Um91dGVNYW5kb2JlIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsImNiIiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiT2JqZWN0IiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudCIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsIlJlYWN0IiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJuYW1lIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwicHJvY2VzcyIsInBhdGgiLCJwcmVwYXJlUm91dGUiLCJ0b1JvdXRlIiwiYXR0ZW1wdHMiLCJpc1NlcnZlclJlbmRlciIsInBhdGhuYW1lIiwiYWRkQmFzZVBhdGgiLCJfX05FWFRfREFUQV9fIiwiYnVpbGRJZCIsImRlbEJhc2VQYXRoIiwicXVlcnkiLCJjcmVkZW50aWFscyIsImdldFJlc3BvbnNlIiwiY29uc3RydWN0b3IiLCJyb3V0ZSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiZSIsIlByb21pc2UiLCJmZXRjaE5leHREYXRhIiwicHJvcHMiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsImFzIiwid2luZG93IiwibW9kIiwibmV3RGF0YSIsInJlbG9hZCIsIm9wdGlvbnMiLCJjaGFuZ2UiLCJTVCIsInBlcmZvcm1hbmNlIiwidXJsIiwicmVzb2x2ZSIsIm1ldGhvZCIsInNoYWxsb3ciLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsIm1pc3NpbmdQYXJhbXMiLCJwYXJhbSIsInJlamVjdCIsImFzUGF0aG5hbWUiLCJyb3V0ZUluZm8iLCJlcnJvciIsImFwcENvbXAiLCJjaGFuZ2VTdGF0ZSIsImdldFJvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsImhhbmRsZUVycm9yIiwicGFnZSIsImdpcEVyciIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImhhc2giLCJpZEVsIiwiZG9jdW1lbnQiLCJuYW1lRWwiLCJ1cmxJc05ldyIsImNhbmNlbGxlZCIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImZuIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInVwZGF0ZSIsIlRFU1RfUk9VVEUiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInBhcmFtcyIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJlbnRyeSIsInN0ciIsImVzY2FwZWRSb3V0ZSIsImVzY2FwZVJlZ2V4Iiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsImlzT3B0aW9uYWwiLCIkMSIsImlzQ2F0Y2hBbGwiLCJwb3MiLCJyZXBlYXQiLCJuYW1lZFJlZ2V4IiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJ1c2VkIiwicmVzdWx0IiwicHJvdG9jb2wiLCJob3N0bmFtZSIsInBvcnQiLCJvcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsImhyZWYiLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJwYWdlUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwia2V5IiwiU1AiLCJBZG1pbiIsImVtYWlsIiwic2V0ZW1haWwiLCJzZXRQYXNzd29yZCIsImFsZXJ0Iiwic2V0YWxlcnQiLCJpc0xvYWRpbmciLCJwYWdldXAiLCJzZXRwYWdldXAiLCJzcGlubmVyIiwic2V0c3Bpbm5lciIsImxvZ3VzZXIiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInZhbHVlIiwic2l0ZVVybCIsInVybHMiLCJkZXZlbG9wbWVudCIsInByb2R1Y3Rpb24iLCJBeGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJBY2NlcHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FHQTs7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBR0MsMkRBQWEsQ0FBQyxFQUFELENBQWpDO0FBRU8sSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBa0I7QUFBQTs7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsa0JBQ3BCQyxzREFBUSxDQUFDLElBQUQsQ0FEWTtBQUFBLE1BQ3JDQyxJQURxQztBQUFBLE1BQy9CQyxPQUQrQjs7QUFBQSxtQkFFZEYsc0RBQVEsQ0FBQyxJQUFELENBRk07QUFBQSxNQUVyQ0csT0FGcUM7QUFBQSxNQUU1QkMsVUFGNEI7O0FBQUEsbUJBR2RKLHNEQUFRLENBQUMsSUFBRCxDQUhNO0FBQUEsTUFHckNLLE9BSHFDO0FBQUEsTUFHNUJDLFVBSDRCOztBQUs1Q0MseURBQVMsQ0FBQyxZQUFNO0FBQUEsYUFDQ0MsbUJBREQ7QUFBQTtBQUFBOztBQUFBO0FBQUEsOE1BQ2Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ01DLG9CQUROLEdBQ2EsS0FEYjtBQUVRQyxxQkFGUixHQUVnQkMsZ0RBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosQ0FGaEI7O0FBQUEscUJBR01GLEtBSE47QUFBQTtBQUFBO0FBQUE7O0FBSUlHLHVCQUFPLENBQUNDLEdBQVIsQ0FBWSxzREFBWjtBQUNBQyxxRUFBRyxDQUFDQyxRQUFKLENBQWFDLE9BQWIsQ0FBcUJDLGFBQXJCLG9CQUErQ1IsS0FBL0M7QUFMSjtBQUFBLHVCQU1VSyxxREFBRyxDQUNOSSxJQURHLENBQ0UsNEJBREYsRUFFSEMsSUFGRyxDQUVFLFVBQUNDLEdBQUQsRUFBUztBQUNiWixzQkFBSSxHQUFH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Q0EsdUNBQXVDLE9BQU87QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLGtDQUFrQztBQUMxRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixVQUFVO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsVUFBVTtBQUN4QztBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixVQUFVOztBQUVwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJDQUEyQyxPQUFPO0FBQ2xEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxvQkFBb0IsT0FBTztBQUMzQix5QkFBeUIsT0FBTztBQUNoQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7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QUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsNkJBQTZCO0FBQzdCLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixLQUFLO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsNEJBQTRCO0FBQzVCLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsSUFBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxVQUFVLEtBQXFDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNCQUFzQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVUsSUFBcUM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsMkJBQTJCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQyw0RkFBNEYsU0FBTTtBQUM3STtBQUNBOztBQUVBLG1CQUFtQixnQ0FBZ0M7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLGdDQUFnQztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM5a0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLElBQXFDO0FBQ3pDLGdCQUFnQixtQkFB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUNwTGE7O0FBRWIsSUFBSSxLQUFxQyxFQUFFLEVBRTFDO0FBQ0QsbUJBQW1CLG1CQUFPLENBQUMsMEZBQStCO0FBQzFEOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FO0FBQ3BFOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDOztBQUV0QztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEVBQThFOzs7QUFHOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLEtBQXFDO0FBQzVEO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxLQUEwQixvQkFBb0IsU0FBRTtBQUNsRDs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3h0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0NyQmdFOztBQUNoRTtBQUNBO0FBQ0E7O0FBRUEsU0FBU2dGLEtBQVQsR0FBaUI7QUFBQTs7QUFBQTs7QUFBQSxpQkFDMEJqSyxpRUFBTyxFQURqQztBQUFBLE1BQ1BMLEtBRE8sWUFDUEEsS0FETztBQUFBLE1BQ0FJLGVBREEsWUFDQUEsZUFEQTtBQUFBLE1BQ2lCNUMsSUFEakIsWUFDaUJBLElBRGpCOztBQUVmWSxTQUFPLENBQUNDLEdBQVIsQ0FBWStCLGVBQVo7QUFDQXRDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlzQyxlQUFKLEVBQXFCO0FBQ25CLFVBQUk1QyxJQUFJLENBQUMyQixRQUFMLElBQWlCLE9BQXJCLEVBQThCO0FBQzVCSiwwREFBTSxDQUFDQyxJQUFQLENBQVksR0FBWjtBQUNEO0FBQ0Y7QUFDRixHQU5RLEVBTU4sRUFOTSxDQUFUOztBQUhlLGtCQVVXekIsc0RBQVEsQ0FBQyxFQUFELENBVm5CO0FBQUEsTUFVUmdOLEtBVlE7QUFBQSxNQVVEQyxRQVZDOztBQUFBLG1CQVdpQmpOLHNEQUFRLENBQUMsRUFBRCxDQVh6QjtBQUFBLE1BV1IyQyxRQVhRO0FBQUEsTUFXRXVLLFdBWEY7O0FBQUEsbUJBWVdsTixzREFBUSxDQUFDLEtBQUQsQ0FabkI7QUFBQSxNQVlSbU4sS0FaUTtBQUFBLE1BWURDLFFBWkM7O0FBQUEsbUJBY2lCcE4sc0RBQVEsQ0FBQyxLQUFELENBZHpCO0FBQUEsTUFjUnFOLFNBZFE7QUFBQSxNQWNHak4sVUFkSDs7QUFBQSxtQkFlYUosc0RBQVEsQ0FBQyxDQUFELENBZnJCO0FBQUEsTUFlUnNOLE1BZlE7QUFBQSxNQWVBQyxTQWZBOztBQUFBLG1CQWdCZXZOLHNEQUFRLENBQUMsS0FBRCxDQWhCdkI7QUFBQSxNQWdCUndOLE9BaEJRO0FBQUEsTUFnQkNDLFVBaEJEOztBQWtCZixNQUFNQyxPQUFPO0FBQUEsZ01BQUcsaUJBQU9WLEtBQVAsRUFBY3JLLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2Q4Syx3QkFBVSxDQUFDLElBQUQsQ0FBVjtBQUNBNU0scUJBQU8sQ0FBQ0MsR0FBUixDQUFZa00sS0FBWixFQUFtQnJLLFFBQW5CO0FBQ0F2Qyx3QkFBVSxDQUFDLElBQUQsQ0FBVjtBQUhjO0FBQUEscUJBSUlxQyxLQUFLLENBQUN1SyxLQUFELEVBQVFySyxRQUFSLENBSlQ7O0FBQUE7QUFJUnRCLGlCQUpROztBQUtkLGtCQUFJQSxHQUFKLEVBQVM7QUFDUG9NLDBCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0FqTSxrRUFBTSxDQUFDQyxJQUFQLENBQVkscUJBQVo7QUFDRCxlQUhELE1BR087QUFDTGdNLDBCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0Q7O0FBVmE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBUEMsT0FBTztBQUFBO0FBQUE7QUFBQSxLQUFiOztBQWFBLFNBQ0UsTUFBQyw0REFBRDtBQUFnQixVQUFNLEVBQUVGLE9BQXhCO0FBQWlDLFdBQU8sTUFBeEM7QUFBeUMsUUFBSSxFQUFDLHdFQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFNLGNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBTSxpREFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFNLHNEQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLEtBQUMsRUFBQyxHQURKO0FBRUUsS0FBQyxFQUFDLEdBRko7QUFHRSxXQUFPLEVBQUMsY0FIVjtBQUlFLHVCQUFtQixFQUFDLE1BSnRCO0FBS0UsV0FBTyxFQUFDLEtBTFY7QUFNRSxTQUFLLEVBQUMsNkJBTlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFFO0FBQ0UsYUFBTSxjQURSO0FBRUUsVUFBTSxFQUFDLHVCQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixDQURGLENBREYsQ0FERixFQW1CRTtBQUFLLGFBQU0sc0JBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBTSw0QkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFNLG1CQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQU0saUNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBTSwyQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFNLDZCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdIQURGLENBREYsRUFJRTtBQUNFLFlBQVEsRUFBRSxrQkFBQ3hHLENBQUQsRUFBTztBQUNmMEcsYUFBTyxDQUFDVixLQUFELEVBQVFySyxRQUFSLENBQVA7QUFDQXFFLE9BQUMsQ0FBQzJHLGNBQUY7QUFDRCxLQUpIO0FBS0UsUUFBSSxFQUFDLE1BTFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9FO0FBQUssYUFBTSxpQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFNLHVEQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQU0scUJBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sYUFBTSxrQkFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFNLGdCQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBREYsRUFNRTtBQUNFLFNBQUssRUFBRVgsS0FEVDtBQUVFLFlBQVEsRUFBRSxrQkFBQ2hHLENBQUQ7QUFBQSxhQUFPaUcsUUFBUSxDQUFDakcsQ0FBQyxDQUFDNEcsTUFBRixDQUFTQyxLQUFWLENBQWY7QUFBQSxLQUZaO0FBR0UsYUFBTSxjQUhSO0FBSUUsZUFBVyxFQUFDLDRDQUpkO0FBS0UsUUFBSSxFQUFDLE9BTFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLENBREYsQ0FQRixFQXVCRTtBQUFLLGFBQU0sWUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFNLHVEQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQU0scUJBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sYUFBTSxrQkFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFNLHdCQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBREYsRUFNRTtBQUNFLFNBQUssRUFBRWxMLFFBRFQ7QUFFRSxZQUFRLEVBQUUsa0JBQUNxRSxDQUFEO0FBQUEsYUFBT2tHLFdBQVcsQ0FBQ2xHLENBQUMsQ0FBQzRHLE1BQUYsQ0FBU0MsS0FBVixDQUFsQjtBQUFBLEtBRlo7QUFHRSxhQUFNLGNBSFI7QUFJRSxlQUFXLEVBQUMsK0RBSmQ7QUFLRSxRQUFJLEVBQUMsVUFMUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsQ0FERixDQXZCRixFQXdDRTtBQUFLLGFBQU0sYUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxRQUFJLEVBQUM7QUFEUCw2R0FFTyxRQUZQLDRHQUdRLHNCQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUZBREYsQ0F4Q0YsQ0FKRixDQURGLENBREYsRUEyREU7QUFBSyxhQUFNLFVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBTSxPQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFFBQUksRUFBQyxHQUFSO0FBQVksYUFBTSxZQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrSEFERixDQURGLENBREYsRUFNRTtBQUFLLGFBQU0sa0JBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsUUFBSSxFQUFDLEdBQVI7QUFBWSxhQUFNLFlBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdGQURGLENBREYsQ0FORixDQTNERixDQURGLENBREYsQ0FuQkYsQ0FERixDQURGO0FBb0dEOztHQW5JUWQsSztVQUNrQ2pLLHlEOzs7S0FEbENpSyxLO0FBcUlNQSxvRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLElBQU1lLE9BQU8sR0FBR25OLGdEQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLENBQWhCOztBQUNBLElBQUksQ0FBQ2tOLE9BQUwsRUFBYztBQUNabk4sa0RBQU8sQ0FBQzRCLEdBQVIsQ0FBWSxTQUFaLEVBQXVCLGtDQUF2QixFQUEyRDtBQUN6REMsV0FBTyxFQUFFO0FBRGdELEdBQTNEO0FBR0Q7O0FBQ0QsSUFBSXVMLElBQUksR0FBRztBQUNUQyxhQUFXLEVBQUUsa0NBREo7QUFFVEMsWUFBVSxFQUFFO0FBRkgsQ0FBWDtBQUlBLElBQU1sTixHQUFHLEdBQUdtTiw0Q0FBSyxDQUFDQyxNQUFOLENBQWE7QUFDdkJDLFNBQU8sRUFBRUwsSUFBSSxlQURVO0FBRXZCOU0sU0FBTyxFQUFFO0FBQ1BvTixVQUFNLEVBQUUsa0JBREQ7QUFFUCxvQkFBZ0I7QUFGVDtBQUZjLENBQWIsQ0FBWjtBQVFldE4sa0VBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBLDBDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxNYW5hZ2VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgUm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuLy9hcGkgaGVyZSBpcyBhbiBheGlvcyBpbnN0YW5jZVxyXG5pbXBvcnQgYXBpIGZyb20gXCIuLi9zZXJ2aWNlcy9BcGlcIjtcclxuXHJcbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSk7XHJcblxyXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFt0b2dnbGVyLCBzZXR0b2dnbGVyXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gbG9hZFVzZXJGcm9tQ29va2llcygpIHtcclxuICAgICAgbGV0IGRhdGEgPSBmYWxzZTtcclxuICAgICAgY29uc3QgdG9rZW4gPSBDb29raWVzLmdldChcInRva2VuXCIpO1xyXG4gICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkdvdCBhIHRva2VuIGluIHRoZSBjb29raWVzLCBsZXQncyBzZWUgaWYgaXQgaXMgdmFsaWRcIik7XHJcbiAgICAgICAgYXBpLmRlZmF1bHRzLmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IGBCZWFyZXIgJHt0b2tlbn1gO1xyXG4gICAgICAgIGF3YWl0IGFwaVxyXG4gICAgICAgICAgLnBvc3QoXCJqd3QtYXV0aC92MS90b2tlbi92YWxpZGF0ZVwiKVxyXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBkYXRhID0gcmVzO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIENvb2tpZXMucmVtb3ZlKFwidG9rZW5cIik7XHJcbiAgICAgICAgICAgIENvb2tpZXMucmVtb3ZlKFwidXNlcl9uaWNlbmFtZVwiKTtcclxuICAgICAgICAgICAgQ29va2llcy5yZW1vdmUoXCJ1c2VyX2VtYWlsXCIpO1xyXG4gICAgICAgICAgICBDb29raWVzLnJlbW92ZShcIlVzZXJUeXBlXCIpO1xyXG4gICAgICAgICAgICBDb29raWVzLnJlbW92ZShcIkJyYWNuaENvZGVcIik7XHJcbiAgICAgICAgICAgIENvb2tpZXMucmVtb3ZlKFwiQ29tcGFueUNvZGVcIik7XHJcbiAgICAgICAgICAgIENvb2tpZXMucmVtb3ZlKFwicHJvZmlsZV9waWNcIik7XHJcbiAgICAgICAgICAgIENvb2tpZXMucmVtb3ZlKFwiZmlyc3RfbmFtZVwiKTtcclxuICAgICAgICAgICAgQ29va2llcy5yZW1vdmUoXCJsYXN0X25hbWVcIik7XHJcblxyXG4gICAgICAgICAgICBhcGkuZGVmYXVsdHMuaGVhZGVycy5BdXRob3JpemF0aW9uID0gYGA7XHJcblxyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9NYW5hZ2VtZW50XCIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gIGNvbnN0IHsgZGF0YTogZGF0YSB9ID0gYXdhaXQgYXBpLnBvc3QoXCJqd3QtYXV0aC92MS90b2tlbi92YWxpZGF0ZVwiKTtcclxuICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJvbGQgdG9rZW4gaXMgdmFsaWRcIik7XHJcbiAgICAgICAgICBzZXRVc2VyKHtcclxuICAgICAgICAgICAgdXNlcl9uaWNlbmFtZTogQ29va2llcy5nZXQoXCJ1c2VyX25pY2VuYW1lXCIpLFxyXG4gICAgICAgICAgICB1c2VyX2VtYWlsOiBDb29raWVzLmdldChcInVzZXJfZW1haWxcIiksXHJcbiAgICAgICAgICAgIFVzZXJUeXBlOiBDb29raWVzLmdldChcIlVzZXJUeXBlXCIpLFxyXG4gICAgICAgICAgICBDb21wYW55Q29kZTogQ29va2llcy5nZXQoXCJDb21wYW55Q29kZVwiKSxcclxuICAgICAgICAgICAgQnJhY25oQ29kZTogQ29va2llcy5nZXQoXCJCcmFjbmhDb2RlXCIpLFxyXG4gICAgICAgICAgICBwcm9maWxlX3BpYzogQ29va2llcy5nZXQoXCJwcm9maWxlX3BpY1wiKSxcclxuICAgICAgICAgICAgZmlyc3RfbmFtZTogQ29va2llcy5nZXQoXCJmaXJzdF9uYW1lXCIpLFxyXG4gICAgICAgICAgICBsYXN0X25hbWU6IENvb2tpZXMuZ2V0KFwibGFzdF9uYW1lXCIpLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBsb2FkVXNlckZyb21Db29raWVzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBTZW5kY29uZCA9IGFzeW5jIChwaG9uZSkgPT4ge1xyXG4gICAgbGV0IHRlbXByZXMgPSBhd2FpdCBhcGkuZ2V0KFwicmFid2EvZ2V0VXNlckNvZGU/cGhvbmU9XCIgKyBwaG9uZSwge30pO1xyXG5cclxuICAgIHJldHVybiB0ZW1wcmVzO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHBob25lTG9naW4gPSBhc3luYyAocGhvbmUsIGNvZGUpID0+IHtcclxuICAgIGNvbnN0IHsgZGF0YTogZGF0YSB9ID0gYXdhaXQgYXBpLmdldChcclxuICAgICAgXCJyYWJ3YS9zaW5nVXNlcklOP3Bob25lPVwiICsgcGhvbmUgKyBcIiZjb2RlPVwiICsgY29kZSxcclxuICAgICAge31cclxuICAgICk7XHJcblxyXG4gICAgaWYgKGRhdGEpIHtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhcIkdvdCBuZXcgdG9rZW5cIiArIGRhdGEudG9rZW4pO1xyXG4gICAgICBDb29raWVzLnNldChcInRva2VuXCIsIGRhdGEudG9rZW4sIHsgZXhwaXJlczogNjAgfSk7XHJcbiAgICAgIENvb2tpZXMuc2V0KFwidXNlcl9uaWNlbmFtZVwiLCBkYXRhLnVzZXJfbmljZW5hbWUsIHsgZXhwaXJlczogNjAgfSk7XHJcbiAgICAgIENvb2tpZXMuc2V0KFwidXNlcl9lbWFpbFwiLCBkYXRhLnVzZXJfZW1haWwsIHsgZXhwaXJlczogNjAgfSk7XHJcbiAgICAgIENvb2tpZXMuc2V0KFwiVXNlclR5cGVcIiwgZGF0YS5Vc2VyVHlwZSwgeyBleHBpcmVzOiA2MCB9KTtcclxuICAgICAgQ29va2llcy5zZXQoXCJCcmFjbmhDb2RlXCIsIGRhdGEuQnJhY25oQ29kZSwgeyBleHBpcmVzOiA2MCB9KTtcclxuICAgICAgQ29va2llcy5zZXQoXCJDb21wYW55Q29kZVwiLCBkYXRhLkNvbXBhbnlDb2RlLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG4gICAgICBDb29raWVzLnNldChcInByb2ZpbGVfcGljXCIsIGRhdGEucHJvZmlsZV9waWMsIHsgZXhwaXJlczogNjAgfSk7XHJcbiAgICAgIENvb2tpZXMuc2V0KFwiZmlyc3RfbmFtZVwiLCBkYXRhLmZpcnN0X25hbWUsIHsgZXhwaXJlczogNjAgfSk7XHJcbiAgICAgIENvb2tpZXMuc2V0KFwibGFzdF9uYW1lXCIsIGRhdGEubGFzdF9uYW1lLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG5cclxuICAgICAgYXBpLmRlZmF1bHRzLmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IGBCZWFyZXIgJHtkYXRhLnRva2VufWA7XHJcblxyXG4gICAgICBzZXRVc2VyKHtcclxuICAgICAgICB1c2VyX25pY2VuYW1lOiBkYXRhLnVzZXJfbmljZW5hbWUsXHJcbiAgICAgICAgdXNlcl9lbWFpbDogZGF0YS51c2VyX2VtYWlsLFxyXG4gICAgICAgIFVzZXJUeXBlOiBkYXRhLlVzZXJUeXBlLFxyXG4gICAgICAgIENvbXBhbnlDb2RlOiBkYXRhLkNvbXBhbnlDb2RlLFxyXG4gICAgICAgIEJyYWNuaENvZGU6IGRhdGEuQnJhY25oQ29kZSxcclxuICAgICAgICBwcm9maWxlX3BpYzogZGF0YS5wcm9maWxlX3BpYyxcclxuICAgICAgICBmaXJzdF9uYW1lOiBkYXRhLmZpcnN0X25hbWUsXHJcbiAgICAgICAgbGFzdF9uYW1lOiBkYXRhLmxhc3RfbmFtZSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiR290IHVzZXJcIiwgdXNlcik7XHJcbiAgICAgIGlmIChkYXRhLlVzZXJUeXBlID09IFwiQ29tcGFueVwiKSB7XHJcbiAgICAgICAgUm91dGVyLnB1c2goXCIvQ29tcGFueVN0YXRpc3RpY3NcIik7XHJcbiAgICAgICAgLy9yZXR1cm4gXCJDb21wYW55XCI7XHJcbiAgICAgIH0gZWxzZSBpZiAoZGF0YS5Vc2VyVHlwZSA9PSBcIm1hbmRvYmVcIikge1xyXG4gICAgICAgIC8vIHJldHVybiBcIkNvbXBhbnlcIjtcclxuICAgICAgICBSb3V0ZXIucHVzaChcIi9NeVVzZXJzXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvZ2luID0gYXN5bmMgKHVzZXJuYW1lLCBwYXNzd29yZCkgPT4ge1xyXG4gICAgY29uc3QgeyBkYXRhOiBkYXRhIH0gPSBhd2FpdCBhcGkucG9zdChcImp3dC1hdXRoL3YxL3Rva2VuXCIsIHtcclxuICAgICAgdXNlcm5hbWUsXHJcbiAgICAgIHBhc3N3b3JkLFxyXG4gICAgfSk7XHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiR290IG5ldyB0b2tlblwiICsgZGF0YS50b2tlbik7XHJcbiAgICAgIENvb2tpZXMuc2V0KFwidG9rZW5cIiwgZGF0YS50b2tlbiwgeyBleHBpcmVzOiA2MCB9KTtcclxuICAgICAgQ29va2llcy5zZXQoXCJ1c2VyX25pY2VuYW1lXCIsIGRhdGEudXNlcl9uaWNlbmFtZSwgeyBleHBpcmVzOiA2MCB9KTtcclxuICAgICAgQ29va2llcy5zZXQoXCJ1c2VyX2VtYWlsXCIsIGRhdGEudXNlcl9lbWFpbCwgeyBleHBpcmVzOiA2MCB9KTtcclxuICAgICAgQ29va2llcy5zZXQoXCJVc2VyVHlwZVwiLCBkYXRhLlVzZXJUeXBlLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG4gICAgICBDb29raWVzLnNldChcIkJyYWNuaENvZGVcIiwgZGF0YS5CcmFjbmhDb2RlLCB7IGV4cGlyZXM6IDYwIH0pO1xyXG4gICAgICBDb29raWVzLnNldChcIkNvbXBhbnlDb2RlXCIsIGRhdGEuQ29tcGFueUNvZGUsIHsgZXhwaXJlczogNjAgfSk7XHJcbiAgICAgIENvb2tpZXMuc2V0KFwicHJvZmlsZV9waWNcIiwgZGF0YS5wcm9maWxlX3BpYywgeyBleHBpcmVzOiA2MCB9KTtcclxuICAgICAgQ29va2llcy5zZXQoXCJmaXJzdF9uYW1lXCIsIGRhdGEuZmlyc3RfbmFtZSwgeyBleHBpcmVzOiA2MCB9KTtcclxuICAgICAgQ29va2llcy5zZXQoXCJsYXN0X25hbWVcIiwgZGF0YS5sYXN0X25hbWUsIHsgZXhwaXJlczogNjAgfSk7XHJcblxyXG4gICAgICBhcGkuZGVmYXVsdHMuaGVhZGVycy5BdXRob3JpemF0aW9uID0gYEJlYXJlciAke2RhdGEudG9rZW59YDtcclxuXHJcbiAgICAgIHNldFVzZXIoe1xyXG4gICAgICAgIHVzZXJfbmljZW5hbWU6IGRhdGEudXNlcl9uaWNlbmFtZSxcclxuICAgICAgICB1c2VyX2VtYWlsOiBkYXRhLnVzZXJfZW1haWwsXHJcbiAgICAgICAgVXNlclR5cGU6IGRhdGEuVXNlclR5cGUsXHJcbiAgICAgICAgQ29tcGFueUNvZGU6IGRhdGEuQ29tcGFueUNvZGUsXHJcbiAgICAgICAgQnJhY25oQ29kZTogZGF0YS5CcmFjbmhDb2RlLFxyXG4gICAgICAgIHByb2ZpbGVfcGljOiBkYXRhLnByb2ZpbGVfcGljLFxyXG4gICAgICAgIGZpcnN0X25hbWU6IGRhdGEuZmlyc3RfbmFtZSxcclxuICAgICAgICBsYXN0X25hbWU6IGRhdGEubGFzdF9uYW1lLFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2coXCJHb3QgdXNlclwiLCB1c2VyKTtcclxuXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICAgIENvb2tpZXMucmVtb3ZlKFwidG9rZW5cIik7XHJcbiAgICBDb29raWVzLnJlbW92ZShcInVzZXJfbmljZW5hbWVcIik7XHJcbiAgICBDb29raWVzLnJlbW92ZShcInVzZXJfZW1haWxcIik7XHJcbiAgICBDb29raWVzLnJlbW92ZShcIlVzZXJUeXBlXCIpO1xyXG4gICAgQ29va2llcy5yZW1vdmUoXCJCcmFjbmhDb2RlXCIpO1xyXG4gICAgQ29va2llcy5yZW1vdmUoXCJDb21wYW55Q29kZVwiKTtcclxuICAgIENvb2tpZXMucmVtb3ZlKFwicHJvZmlsZV9waWNcIik7XHJcbiAgICBDb29raWVzLnJlbW92ZShcImZpcnN0X25hbWVcIik7XHJcbiAgICBDb29raWVzLnJlbW92ZShcImxhc3RfbmFtZVwiKTtcclxuXHJcbiAgICBhcGkuZGVmYXVsdHMuaGVhZGVycy5BdXRob3JpemF0aW9uID0gYGA7XHJcblxyXG4gICAgc2V0VXNlcihudWxsKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgaXNBdXRoZW50aWNhdGVkOiAhIXVzZXIsXHJcbiAgICAgICAgdXNlcixcclxuICAgICAgICBsb2dpbixcclxuICAgICAgICBsb2dvdXQsXHJcbiAgICAgICAgU2VuZGNvbmQsXHJcbiAgICAgICAgcGhvbmVMb2dpbixcclxuICAgICAgICBsb2FkaW5nLFxyXG4gICAgICAgIGxvZ291dCxcclxuICAgICAgICB0b2dnbGVyLFxyXG4gICAgICAgIHNldHRvZ2dsZXIsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUF1dGgoKSB7XHJcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG5cclxuICByZXR1cm4gY29udGV4dDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFByb3RlY3RSb3V0ZShDb21wb25lbnQpIHtcclxuICByZXR1cm4gKCkgPT4ge1xyXG4gICAgY29uc3QgeyB1c2VyLCBpc0F1dGhlbnRpY2F0ZWQsIGxvYWRpbmcgfSA9IHVzZUF1dGgoKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGlmICghaXNBdXRoZW50aWNhdGVkICYmICFsb2FkaW5nKSB7XHJcbiAgICAgICAgUm91dGVyLnB1c2goXCIvTWFuYWdlbWVudFwiKTtcclxuICAgICAgfSBlbHNlIGlmIChpc0F1dGhlbnRpY2F0ZWQpIHtcclxuICAgICAgICBpZiAodXNlci5Vc2VyVHlwZSAhPSBcImFkbWluXCIpIFJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgfVxyXG4gICAgfSwgW2xvYWRpbmcsIGlzQXV0aGVudGljYXRlZF0pO1xyXG5cclxuICAgIHJldHVybiA8Q29tcG9uZW50IHsuLi5hcmd1bWVudHN9IC8+O1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQcm90ZWN0Um91dGVDb21wYW55KENvbXBvbmVudCkge1xyXG4gIHJldHVybiAoKSA9PiB7XHJcbiAgICBjb25zdCB7IHVzZXIsIGlzQXV0aGVudGljYXRlZCwgbG9hZGluZyB9ID0gdXNlQXV0aCgpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgaWYgKCFpc0F1dGhlbnRpY2F0ZWQgJiYgIWxvYWRpbmcpIHtcclxuICAgICAgICBSb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuICAgICAgfSBlbHNlIGlmIChpc0F1dGhlbnRpY2F0ZWQpIHtcclxuICAgICAgICBpZiAodXNlci5Vc2VyVHlwZSAhPSBcIkNvbXBhbnlcIikgUm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICB9XHJcbiAgICB9LCBbbG9hZGluZywgaXNBdXRoZW50aWNhdGVkXSk7XHJcblxyXG4gICAgcmV0dXJuIDxDb21wb25lbnQgey4uLmFyZ3VtZW50c30gLz47XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFByb3RlY3RSb3V0ZU1hbmRvYmUoQ29tcG9uZW50KSB7XHJcbiAgcmV0dXJuICgpID0+IHtcclxuICAgIGNvbnN0IHsgdXNlciwgaXNBdXRoZW50aWNhdGVkLCBsb2FkaW5nIH0gPSB1c2VBdXRoKCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBpZiAoIWlzQXV0aGVudGljYXRlZCAmJiAhbG9hZGluZykge1xyXG4gICAgICAgIFJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKGlzQXV0aGVudGljYXRlZCkge1xyXG4gICAgICAgIGlmICh1c2VyLlVzZXJUeXBlICE9IFwibWFuZG9iZVwiKSBSb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgIH1cclxuICAgIH0sIFtsb2FkaW5nLCBpc0F1dGhlbnRpY2F0ZWRdKTtcclxuXHJcbiAgICByZXR1cm4gPENvbXBvbmVudCB7Li4uYXJndW1lbnRzfSAvPjtcclxuICB9O1xyXG59XHJcbiIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcclxuICB0cnkge1xyXG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xyXG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmVqZWN0KGVycm9yKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGlmIChpbmZvLmRvbmUpIHtcclxuICAgIHJlc29sdmUodmFsdWUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xyXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XHJcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XHJcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xyXG4gIGlmIChrZXkgaW4gb2JqKSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcclxuICAgICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgIHdyaXRhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHJldHVybiBvYmo7XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZXh0ZW5kcygpIHtcclxuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcclxuXHJcbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcclxuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xyXG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG4gIH07XHJcblxyXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcclxuIiwiaW1wb3J0IHsgU3R5bGVTaGVldCB9IGZyb20gJ0BlbW90aW9uL3NoZWV0JztcclxuaW1wb3J0IFN0eWxpcyBmcm9tICdAZW1vdGlvbi9zdHlsaXMnO1xyXG5pbXBvcnQgJ0BlbW90aW9uL3dlYWstbWVtb2l6ZSc7XHJcblxyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGh5c3VsdGFuL3N0eWxpcy5qcy90cmVlL21hc3Rlci9wbHVnaW5zL3J1bGUtc2hlZXRcclxuLy8gaW5saW5lZCB0byBhdm9pZCB1bWQgd3JhcHBlciBhbmQgcGVlckRlcCB3YXJuaW5ncy9pbnN0YWxsaW5nIHN0eWxpc1xyXG4vLyBzaW5jZSB3ZSB1c2Ugc3R5bGlzIGFmdGVyIGNsb3N1cmUgY29tcGlsZXJcclxudmFyIGRlbGltaXRlciA9ICcvKnwqLyc7XHJcbnZhciBuZWVkbGUgPSBkZWxpbWl0ZXIgKyAnfSc7XHJcblxyXG5mdW5jdGlvbiB0b1NoZWV0KGJsb2NrKSB7XHJcbiAgaWYgKGJsb2NrKSB7XHJcbiAgICBTaGVldC5jdXJyZW50Lmluc2VydChibG9jayArICd9Jyk7XHJcbiAgfVxyXG59XHJcblxyXG52YXIgU2hlZXQgPSB7XHJcbiAgY3VycmVudDogbnVsbFxyXG59O1xyXG52YXIgcnVsZVNoZWV0ID0gZnVuY3Rpb24gcnVsZVNoZWV0KGNvbnRleHQsIGNvbnRlbnQsIHNlbGVjdG9ycywgcGFyZW50cywgbGluZSwgY29sdW1uLCBsZW5ndGgsIG5zLCBkZXB0aCwgYXQpIHtcclxuICBzd2l0Y2ggKGNvbnRleHQpIHtcclxuICAgIC8vIHByb3BlcnR5XHJcbiAgICBjYXNlIDE6XHJcbiAgICAgIHtcclxuICAgICAgICBzd2l0Y2ggKGNvbnRlbnQuY2hhckNvZGVBdCgwKSkge1xyXG4gICAgICAgICAgY2FzZSA2NDpcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIC8vIEBpbXBvcnRcclxuICAgICAgICAgICAgICBTaGVldC5jdXJyZW50Lmluc2VydChjb250ZW50ICsgJzsnKTtcclxuICAgICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIGNoYXJjb2RlIGZvciBsXHJcblxyXG4gICAgICAgICAgY2FzZSAxMDg6XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAvLyBjaGFyY29kZSBmb3IgYlxyXG4gICAgICAgICAgICAgIC8vIHRoaXMgaWdub3JlcyBsYWJlbFxyXG4gICAgICAgICAgICAgIGlmIChjb250ZW50LmNoYXJDb2RlQXQoMikgPT09IDk4KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgLy8gc2VsZWN0b3JcclxuXHJcbiAgICBjYXNlIDI6XHJcbiAgICAgIHtcclxuICAgICAgICBpZiAobnMgPT09IDApIHJldHVybiBjb250ZW50ICsgZGVsaW1pdGVyO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAvLyBhdC1ydWxlXHJcblxyXG4gICAgY2FzZSAzOlxyXG4gICAgICB7XHJcbiAgICAgICAgc3dpdGNoIChucykge1xyXG4gICAgICAgICAgLy8gQGZvbnQtZmFjZSwgQHBhZ2VcclxuICAgICAgICAgIGNhc2UgMTAyOlxyXG4gICAgICAgICAgY2FzZSAxMTI6XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBTaGVldC5jdXJyZW50Lmluc2VydChzZWxlY3RvcnNbMF0gKyBjb250ZW50KTtcclxuICAgICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQgKyAoYXQgPT09IDAgPyBkZWxpbWl0ZXIgOiAnJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICBjYXNlIC0yOlxyXG4gICAgICB7XHJcbiAgICAgICAgY29udGVudC5zcGxpdChuZWVkbGUpLmZvckVhY2godG9TaGVldCk7XHJcbiAgICAgIH1cclxuICB9XHJcbn07XHJcblxyXG52YXIgY3JlYXRlQ2FjaGUgPSBmdW5jdGlvbiBjcmVhdGVDYWNoZShvcHRpb25zKSB7XHJcbiAgaWYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZCkgb3B0aW9ucyA9IHt9O1xyXG4gIHZhciBrZXkgPSBvcHRpb25zLmtleSB8fCAnY3NzJztcclxuICB2YXIgc3R5bGlzT3B0aW9ucztcclxuXHJcbiAgaWYgKG9wdGlvbnMucHJlZml4ICE9PSB1bmRlZmluZWQpIHtcclxuICAgIHN0eWxpc09wdGlvbnMgPSB7XHJcbiAgICAgIHByZWZpeDogb3B0aW9ucy5wcmVmaXhcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICB2YXIgc3R5bGlzID0gbmV3IFN0eWxpcyhzdHlsaXNPcHRpb25zKTtcclxuXHJcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgIC8vICRGbG93Rml4TWVcclxuICAgIGlmICgvW15hLXotXS8udGVzdChrZXkpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkVtb3Rpb24ga2V5IG11c3Qgb25seSBjb250YWluIGxvd2VyIGNhc2UgYWxwaGFiZXRpY2FsIGNoYXJhY3RlcnMgYW5kIC0gYnV0IFxcXCJcIiArIGtleSArIFwiXFxcIiB3YXMgcGFzc2VkXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFyIGluc2VydGVkID0ge307IC8vICRGbG93Rml4TWVcclxuXHJcbiAgdmFyIGNvbnRhaW5lcjtcclxuXHJcbiAge1xyXG4gICAgY29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXIgfHwgZG9jdW1lbnQuaGVhZDtcclxuICAgIHZhciBub2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzdHlsZVtkYXRhLWVtb3Rpb24tXCIgKyBrZXkgKyBcIl1cIik7XHJcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKG5vZGVzLCBmdW5jdGlvbiAobm9kZSkge1xyXG4gICAgICB2YXIgYXR0cmliID0gbm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWVtb3Rpb24tXCIgKyBrZXkpOyAvLyAkRmxvd0ZpeE1lXHJcblxyXG4gICAgICBhdHRyaWIuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIGluc2VydGVkW2lkXSA9IHRydWU7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKG5vZGUucGFyZW50Tm9kZSAhPT0gY29udGFpbmVyKSB7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5vZGUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHZhciBfaW5zZXJ0O1xyXG5cclxuICB7XHJcbiAgICBzdHlsaXMudXNlKG9wdGlvbnMuc3R5bGlzUGx1Z2lucykocnVsZVNoZWV0KTtcclxuXHJcbiAgICBfaW5zZXJ0ID0gZnVuY3Rpb24gaW5zZXJ0KHNlbGVjdG9yLCBzZXJpYWxpemVkLCBzaGVldCwgc2hvdWxkQ2FjaGUpIHtcclxuICAgICAgdmFyIG5hbWUgPSBzZXJpYWxpemVkLm5hbWU7XHJcbiAgICAgIFNoZWV0LmN1cnJlbnQgPSBzaGVldDtcclxuXHJcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHNlcmlhbGl6ZWQubWFwICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB2YXIgbWFwID0gc2VyaWFsaXplZC5tYXA7XHJcbiAgICAgICAgU2hlZXQuY3VycmVudCA9IHtcclxuICAgICAgICAgIGluc2VydDogZnVuY3Rpb24gaW5zZXJ0KHJ1bGUpIHtcclxuICAgICAgICAgICAgc2hlZXQuaW5zZXJ0KHJ1bGUgKyBtYXApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN0eWxpcyhzZWxlY3Rvciwgc2VyaWFsaXplZC5zdHlsZXMpO1xyXG5cclxuICAgICAgaWYgKHNob3VsZENhY2hlKSB7XHJcbiAgICAgICAgY2FjaGUuaW5zZXJ0ZWRbbmFtZV0gPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgIC8vIGh0dHBzOi8vZXNiZW5jaC5jb20vYmVuY2gvNWJmNzM3MWE0Y2Q3ZTYwMDllZjYxZDBhXHJcbiAgICB2YXIgY29tbWVudFN0YXJ0ID0gL1xcL1xcKi9nO1xyXG4gICAgdmFyIGNvbW1lbnRFbmQgPSAvXFwqXFwvL2c7XHJcbiAgICBzdHlsaXMudXNlKGZ1bmN0aW9uIChjb250ZXh0LCBjb250ZW50KSB7XHJcbiAgICAgIHN3aXRjaCAoY29udGV4dCkge1xyXG4gICAgICAgIGNhc2UgLTE6XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHdoaWxlIChjb21tZW50U3RhcnQudGVzdChjb250ZW50KSkge1xyXG4gICAgICAgICAgICAgIGNvbW1lbnRFbmQubGFzdEluZGV4ID0gY29tbWVudFN0YXJ0Lmxhc3RJbmRleDtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKGNvbW1lbnRFbmQudGVzdChjb250ZW50KSkge1xyXG4gICAgICAgICAgICAgICAgY29tbWVudFN0YXJ0Lmxhc3RJbmRleCA9IGNvbW1lbnRFbmQubGFzdEluZGV4O1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdXIgc3R5bGVzIGhhdmUgYW4gdW50ZXJtaW5hdGVkIGNvbW1lbnQgKFwiLypcIiB3aXRob3V0IGNvcnJlc3BvbmRpbmcgXCIqL1wiKS4nKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29tbWVudFN0YXJ0Lmxhc3RJbmRleCA9IDA7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHN0eWxpcy51c2UoZnVuY3Rpb24gKGNvbnRleHQsIGNvbnRlbnQsIHNlbGVjdG9ycykge1xyXG4gICAgICBzd2l0Y2ggKGNvbnRleHQpIHtcclxuICAgICAgICBjYXNlIC0xOlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgZmxhZyA9ICdlbW90aW9uLWRpc2FibGUtc2VydmVyLXJlbmRlcmluZy11bnNhZmUtc2VsZWN0b3Itd2FybmluZy1wbGVhc2UtZG8tbm90LXVzZS10aGlzLXRoZS13YXJuaW5nLWV4aXN0cy1mb3ItYS1yZWFzb24nO1xyXG4gICAgICAgICAgICB2YXIgdW5zYWZlUHNldWRvQ2xhc3NlcyA9IGNvbnRlbnQubWF0Y2goLyg6Zmlyc3R8Om50aHw6bnRoLWxhc3QpLWNoaWxkL2cpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHVuc2FmZVBzZXVkb0NsYXNzZXMgJiYgY2FjaGUuY29tcGF0ICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgdW5zYWZlUHNldWRvQ2xhc3Nlcy5mb3JFYWNoKGZ1bmN0aW9uICh1bnNhZmVQc2V1ZG9DbGFzcykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGlnbm9yZVJlZ0V4cCA9IG5ldyBSZWdFeHAodW5zYWZlUHNldWRvQ2xhc3MgKyBcIi4qXFxcXC9cXFxcKiBcIiArIGZsYWcgKyBcIiBcXFxcKlxcXFwvXCIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGlnbm9yZSA9IGlnbm9yZVJlZ0V4cC50ZXN0KGNvbnRlbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh1bnNhZmVQc2V1ZG9DbGFzcyAmJiAhaWdub3JlKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUaGUgcHNldWRvIGNsYXNzIFxcXCJcIiArIHVuc2FmZVBzZXVkb0NsYXNzICsgXCJcXFwiIGlzIHBvdGVudGlhbGx5IHVuc2FmZSB3aGVuIGRvaW5nIHNlcnZlci1zaWRlIHJlbmRlcmluZy4gVHJ5IGNoYW5naW5nIGl0IHRvIFxcXCJcIiArIHVuc2FmZVBzZXVkb0NsYXNzLnNwbGl0KCctY2hpbGQnKVswXSArIFwiLW9mLXR5cGVcXFwiLlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdmFyIGNhY2hlID0ge1xyXG4gICAga2V5OiBrZXksXHJcbiAgICBzaGVldDogbmV3IFN0eWxlU2hlZXQoe1xyXG4gICAgICBrZXk6IGtleSxcclxuICAgICAgY29udGFpbmVyOiBjb250YWluZXIsXHJcbiAgICAgIG5vbmNlOiBvcHRpb25zLm5vbmNlLFxyXG4gICAgICBzcGVlZHk6IG9wdGlvbnMuc3BlZWR5XHJcbiAgICB9KSxcclxuICAgIG5vbmNlOiBvcHRpb25zLm5vbmNlLFxyXG4gICAgaW5zZXJ0ZWQ6IGluc2VydGVkLFxyXG4gICAgcmVnaXN0ZXJlZDoge30sXHJcbiAgICBpbnNlcnQ6IF9pbnNlcnRcclxuICB9O1xyXG4gIHJldHVybiBjYWNoZTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNhY2hlO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xyXG4vLyBJbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vZ2FyeWNvdXJ0L211cm11cmhhc2gtanNcclxuLy8gUG9ydGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2FhcHBsZWJ5L3NtaGFzaGVyL2Jsb2IvNjFhMDUzMGYyODI3N2YyZTg1MGJmYzM5NjAwY2U2MWQwMmI1MThkZS9zcmMvTXVybXVySGFzaDIuY3BwI0wzNy1MODZcclxuZnVuY3Rpb24gbXVybXVyMihzdHIpIHtcclxuICAvLyAnbScgYW5kICdyJyBhcmUgbWl4aW5nIGNvbnN0YW50cyBnZW5lcmF0ZWQgb2ZmbGluZS5cclxuICAvLyBUaGV5J3JlIG5vdCByZWFsbHkgJ21hZ2ljJywgdGhleSBqdXN0IGhhcHBlbiB0byB3b3JrIHdlbGwuXHJcbiAgLy8gY29uc3QgbSA9IDB4NWJkMWU5OTU7XHJcbiAgLy8gY29uc3QgciA9IDI0O1xyXG4gIC8vIEluaXRpYWxpemUgdGhlIGhhc2hcclxuICB2YXIgaCA9IDA7IC8vIE1peCA0IGJ5dGVzIGF0IGEgdGltZSBpbnRvIHRoZSBoYXNoXHJcblxyXG4gIHZhciBrLFxyXG4gICAgICBpID0gMCxcclxuICAgICAgbGVuID0gc3RyLmxlbmd0aDtcclxuXHJcbiAgZm9yICg7IGxlbiA+PSA0OyArK2ksIGxlbiAtPSA0KSB7XHJcbiAgICBrID0gc3RyLmNoYXJDb2RlQXQoaSkgJiAweGZmIHwgKHN0ci5jaGFyQ29kZUF0KCsraSkgJiAweGZmKSA8PCA4IHwgKHN0ci5jaGFyQ29kZUF0KCsraSkgJiAweGZmKSA8PCAxNiB8IChzdHIuY2hhckNvZGVBdCgrK2kpICYgMHhmZikgPDwgMjQ7XHJcbiAgICBrID1cclxuICAgIC8qIE1hdGguaW11bChrLCBtKTogKi9cclxuICAgIChrICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUgKyAoKGsgPj4+IDE2KSAqIDB4ZTk5NSA8PCAxNik7XHJcbiAgICBrIF49XHJcbiAgICAvKiBrID4+PiByOiAqL1xyXG4gICAgayA+Pj4gMjQ7XHJcbiAgICBoID1cclxuICAgIC8qIE1hdGguaW11bChrLCBtKTogKi9cclxuICAgIChrICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUgKyAoKGsgPj4+IDE2KSAqIDB4ZTk5NSA8PCAxNikgXlxyXG4gICAgLyogTWF0aC5pbXVsKGgsIG0pOiAqL1xyXG4gICAgKGggJiAweGZmZmYpICogMHg1YmQxZTk5NSArICgoaCA+Pj4gMTYpICogMHhlOTk1IDw8IDE2KTtcclxuICB9IC8vIEhhbmRsZSB0aGUgbGFzdCBmZXcgYnl0ZXMgb2YgdGhlIGlucHV0IGFycmF5XHJcblxyXG5cclxuICBzd2l0Y2ggKGxlbikge1xyXG4gICAgY2FzZSAzOlxyXG4gICAgICBoIF49IChzdHIuY2hhckNvZGVBdChpICsgMikgJiAweGZmKSA8PCAxNjtcclxuXHJcbiAgICBjYXNlIDI6XHJcbiAgICAgIGggXj0gKHN0ci5jaGFyQ29kZUF0KGkgKyAxKSAmIDB4ZmYpIDw8IDg7XHJcblxyXG4gICAgY2FzZSAxOlxyXG4gICAgICBoIF49IHN0ci5jaGFyQ29kZUF0KGkpICYgMHhmZjtcclxuICAgICAgaCA9XHJcbiAgICAgIC8qIE1hdGguaW11bChoLCBtKTogKi9cclxuICAgICAgKGggJiAweGZmZmYpICogMHg1YmQxZTk5NSArICgoaCA+Pj4gMTYpICogMHhlOTk1IDw8IDE2KTtcclxuICB9IC8vIERvIGEgZmV3IGZpbmFsIG1peGVzIG9mIHRoZSBoYXNoIHRvIGVuc3VyZSB0aGUgbGFzdCBmZXdcclxuICAvLyBieXRlcyBhcmUgd2VsbC1pbmNvcnBvcmF0ZWQuXHJcblxyXG5cclxuICBoIF49IGggPj4+IDEzO1xyXG4gIGggPVxyXG4gIC8qIE1hdGguaW11bChoLCBtKTogKi9cclxuICAoaCAmIDB4ZmZmZikgKiAweDViZDFlOTk1ICsgKChoID4+PiAxNikgKiAweGU5OTUgPDwgMTYpO1xyXG4gIHJldHVybiAoKGggXiBoID4+PiAxNSkgPj4+IDApLnRvU3RyaW5nKDM2KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbXVybXVyMjtcclxuIiwiZnVuY3Rpb24gbWVtb2l6ZShmbikge1xyXG4gIHZhciBjYWNoZSA9IHt9O1xyXG4gIHJldHVybiBmdW5jdGlvbiAoYXJnKSB7XHJcbiAgICBpZiAoY2FjaGVbYXJnXSA9PT0gdW5kZWZpbmVkKSBjYWNoZVthcmddID0gZm4oYXJnKTtcclxuICAgIHJldHVybiBjYWNoZVthcmddO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbW9pemU7XHJcbiIsImltcG9ydCBoYXNoU3RyaW5nIGZyb20gJ0BlbW90aW9uL2hhc2gnO1xyXG5pbXBvcnQgdW5pdGxlc3MgZnJvbSAnQGVtb3Rpb24vdW5pdGxlc3MnO1xyXG5pbXBvcnQgbWVtb2l6ZSBmcm9tICdAZW1vdGlvbi9tZW1vaXplJztcclxuXHJcbnZhciBJTExFR0FMX0VTQ0FQRV9TRVFVRU5DRV9FUlJPUiA9IFwiWW91IGhhdmUgaWxsZWdhbCBlc2NhcGUgc2VxdWVuY2UgaW4geW91ciB0ZW1wbGF0ZSBsaXRlcmFsLCBtb3N0IGxpa2VseSBpbnNpZGUgY29udGVudCdzIHByb3BlcnR5IHZhbHVlLlxcbkJlY2F1c2UgeW91IHdyaXRlIHlvdXIgQ1NTIGluc2lkZSBhIEphdmFTY3JpcHQgc3RyaW5nIHlvdSBhY3R1YWxseSBoYXZlIHRvIGRvIGRvdWJsZSBlc2NhcGluZywgc28gZm9yIGV4YW1wbGUgXFxcImNvbnRlbnQ6ICdcXFxcMDBkNyc7XFxcIiBzaG91bGQgYmVjb21lIFxcXCJjb250ZW50OiAnXFxcXFxcXFwwMGQ3JztcXFwiLlxcbllvdSBjYW4gcmVhZCBtb3JlIGFib3V0IHRoaXMgaGVyZTpcXG5odHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9UZW1wbGF0ZV9saXRlcmFscyNFUzIwMThfcmV2aXNpb25fb2ZfaWxsZWdhbF9lc2NhcGVfc2VxdWVuY2VzXCI7XHJcbnZhciBVTkRFRklORURfQVNfT0JKRUNUX0tFWV9FUlJPUiA9IFwiWW91IGhhdmUgcGFzc2VkIGluIGZhbHN5IHZhbHVlIGFzIHN0eWxlIG9iamVjdCdzIGtleSAoY2FuIGhhcHBlbiB3aGVuIGluIGV4YW1wbGUgeW91IHBhc3MgdW5leHBvcnRlZCBjb21wb25lbnQgYXMgY29tcHV0ZWQga2V5KS5cIjtcclxudmFyIGh5cGhlbmF0ZVJlZ2V4ID0gL1tBLVpdfF5tcy9nO1xyXG52YXIgYW5pbWF0aW9uUmVnZXggPSAvX0VNT18oW15fXSs/KV8oW15dKj8pX0VNT18vZztcclxuXHJcbnZhciBpc0N1c3RvbVByb3BlcnR5ID0gZnVuY3Rpb24gaXNDdXN0b21Qcm9wZXJ0eShwcm9wZXJ0eSkge1xyXG4gIHJldHVybiBwcm9wZXJ0eS5jaGFyQ29kZUF0KDEpID09PSA0NTtcclxufTtcclxuXHJcbnZhciBpc1Byb2Nlc3NhYmxlVmFsdWUgPSBmdW5jdGlvbiBpc1Byb2Nlc3NhYmxlVmFsdWUodmFsdWUpIHtcclxuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgIT09ICdib29sZWFuJztcclxufTtcclxuXHJcbnZhciBwcm9jZXNzU3R5bGVOYW1lID0gbWVtb2l6ZShmdW5jdGlvbiAoc3R5bGVOYW1lKSB7XHJcbiAgcmV0dXJuIGlzQ3VzdG9tUHJvcGVydHkoc3R5bGVOYW1lKSA/IHN0eWxlTmFtZSA6IHN0eWxlTmFtZS5yZXBsYWNlKGh5cGhlbmF0ZVJlZ2V4LCAnLSQmJykudG9Mb3dlckNhc2UoKTtcclxufSk7XHJcblxyXG52YXIgcHJvY2Vzc1N0eWxlVmFsdWUgPSBmdW5jdGlvbiBwcm9jZXNzU3R5bGVWYWx1ZShrZXksIHZhbHVlKSB7XHJcbiAgc3dpdGNoIChrZXkpIHtcclxuICAgIGNhc2UgJ2FuaW1hdGlvbic6XHJcbiAgICBjYXNlICdhbmltYXRpb25OYW1lJzpcclxuICAgICAge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICByZXR1cm4gdmFsdWUucmVwbGFjZShhbmltYXRpb25SZWdleCwgZnVuY3Rpb24gKG1hdGNoLCBwMSwgcDIpIHtcclxuICAgICAgICAgICAgY3Vyc29yID0ge1xyXG4gICAgICAgICAgICAgIG5hbWU6IHAxLFxyXG4gICAgICAgICAgICAgIHN0eWxlczogcDIsXHJcbiAgICAgICAgICAgICAgbmV4dDogY3Vyc29yXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybiBwMTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKHVuaXRsZXNzW2tleV0gIT09IDEgJiYgIWlzQ3VzdG9tUHJvcGVydHkoa2V5KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIHZhbHVlICE9PSAwKSB7XHJcbiAgICByZXR1cm4gdmFsdWUgKyAncHgnO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHZhbHVlO1xyXG59O1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICB2YXIgY29udGVudFZhbHVlUGF0dGVybiA9IC8oYXR0cnxjYWxjfGNvdW50ZXJzP3x1cmwpXFwoLztcclxuICB2YXIgY29udGVudFZhbHVlcyA9IFsnbm9ybWFsJywgJ25vbmUnLCAnY291bnRlcicsICdvcGVuLXF1b3RlJywgJ2Nsb3NlLXF1b3RlJywgJ25vLW9wZW4tcXVvdGUnLCAnbm8tY2xvc2UtcXVvdGUnLCAnaW5pdGlhbCcsICdpbmhlcml0JywgJ3Vuc2V0J107XHJcbiAgdmFyIG9sZFByb2Nlc3NTdHlsZVZhbHVlID0gcHJvY2Vzc1N0eWxlVmFsdWU7XHJcbiAgdmFyIG1zUGF0dGVybiA9IC9eLW1zLS87XHJcbiAgdmFyIGh5cGhlblBhdHRlcm4gPSAvLSguKS9nO1xyXG4gIHZhciBoeXBoZW5hdGVkQ2FjaGUgPSB7fTtcclxuXHJcbiAgcHJvY2Vzc1N0eWxlVmFsdWUgPSBmdW5jdGlvbiBwcm9jZXNzU3R5bGVWYWx1ZShrZXksIHZhbHVlKSB7XHJcbiAgICBpZiAoa2V5ID09PSAnY29udGVudCcpIHtcclxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycgfHwgY29udGVudFZhbHVlcy5pbmRleE9mKHZhbHVlKSA9PT0gLTEgJiYgIWNvbnRlbnRWYWx1ZVBhdHRlcm4udGVzdCh2YWx1ZSkgJiYgKHZhbHVlLmNoYXJBdCgwKSAhPT0gdmFsdWUuY2hhckF0KHZhbHVlLmxlbmd0aCAtIDEpIHx8IHZhbHVlLmNoYXJBdCgwKSAhPT0gJ1wiJyAmJiB2YWx1ZS5jaGFyQXQoMCkgIT09IFwiJ1wiKSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJZb3Ugc2VlbSB0byBiZSB1c2luZyBhIHZhbHVlIGZvciAnY29udGVudCcgd2l0aG91dCBxdW90ZXMsIHRyeSByZXBsYWNpbmcgaXQgd2l0aCBgY29udGVudDogJ1xcXCJcIiArIHZhbHVlICsgXCJcXFwiJ2BcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgcHJvY2Vzc2VkID0gb2xkUHJvY2Vzc1N0eWxlVmFsdWUoa2V5LCB2YWx1ZSk7XHJcblxyXG4gICAgaWYgKHByb2Nlc3NlZCAhPT0gJycgJiYgIWlzQ3VzdG9tUHJvcGVydHkoa2V5KSAmJiBrZXkuaW5kZXhPZignLScpICE9PSAtMSAmJiBoeXBoZW5hdGVkQ2FjaGVba2V5XSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGh5cGhlbmF0ZWRDYWNoZVtrZXldID0gdHJ1ZTtcclxuICAgICAgY29uc29sZS5lcnJvcihcIlVzaW5nIGtlYmFiLWNhc2UgZm9yIGNzcyBwcm9wZXJ0aWVzIGluIG9iamVjdHMgaXMgbm90IHN1cHBvcnRlZC4gRGlkIHlvdSBtZWFuIFwiICsga2V5LnJlcGxhY2UobXNQYXR0ZXJuLCAnbXMtJykucmVwbGFjZShoeXBoZW5QYXR0ZXJuLCBmdW5jdGlvbiAoc3RyLCBfY2hhcikge1xyXG4gICAgICAgIHJldHVybiBfY2hhci50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICB9KSArIFwiP1wiKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcHJvY2Vzc2VkO1xyXG4gIH07XHJcbn1cclxuXHJcbnZhciBzaG91bGRXYXJuQWJvdXRJbnRlcnBvbGF0aW5nQ2xhc3NOYW1lRnJvbUNzcyA9IHRydWU7XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVJbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCBpbnRlcnBvbGF0aW9uLCBjb3VsZEJlU2VsZWN0b3JJbnRlcnBvbGF0aW9uKSB7XHJcbiAgaWYgKGludGVycG9sYXRpb24gPT0gbnVsbCkge1xyXG4gICAgcmV0dXJuICcnO1xyXG4gIH1cclxuXHJcbiAgaWYgKGludGVycG9sYXRpb24uX19lbW90aW9uX3N0eWxlcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBpbnRlcnBvbGF0aW9uLnRvU3RyaW5nKCkgPT09ICdOT19DT01QT05FTlRfU0VMRUNUT1InKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ29tcG9uZW50IHNlbGVjdG9ycyBjYW4gb25seSBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYmFiZWwtcGx1Z2luLWVtb3Rpb24uJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGludGVycG9sYXRpb247XHJcbiAgfVxyXG5cclxuICBzd2l0Y2ggKHR5cGVvZiBpbnRlcnBvbGF0aW9uKSB7XHJcbiAgICBjYXNlICdib29sZWFuJzpcclxuICAgICAge1xyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgICAgfVxyXG5cclxuICAgIGNhc2UgJ29iamVjdCc6XHJcbiAgICAgIHtcclxuICAgICAgICBpZiAoaW50ZXJwb2xhdGlvbi5hbmltID09PSAxKSB7XHJcbiAgICAgICAgICBjdXJzb3IgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6IGludGVycG9sYXRpb24ubmFtZSxcclxuICAgICAgICAgICAgc3R5bGVzOiBpbnRlcnBvbGF0aW9uLnN0eWxlcyxcclxuICAgICAgICAgICAgbmV4dDogY3Vyc29yXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgcmV0dXJuIGludGVycG9sYXRpb24ubmFtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpbnRlcnBvbGF0aW9uLnN0eWxlcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICB2YXIgbmV4dCA9IGludGVycG9sYXRpb24ubmV4dDtcclxuXHJcbiAgICAgICAgICBpZiAobmV4dCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIC8vIG5vdCB0aGUgbW9zdCBlZmZpY2llbnQgdGhpbmcgZXZlciBidXQgdGhpcyBpcyBhIHByZXR0eSByYXJlIGNhc2VcclxuICAgICAgICAgICAgLy8gYW5kIHRoZXJlIHdpbGwgYmUgdmVyeSBmZXcgaXRlcmF0aW9ucyBvZiB0aGlzIGdlbmVyYWxseVxyXG4gICAgICAgICAgICB3aGlsZSAobmV4dCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgY3Vyc29yID0ge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogbmV4dC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVzOiBuZXh0LnN0eWxlcyxcclxuICAgICAgICAgICAgICAgIG5leHQ6IGN1cnNvclxyXG4gICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgbmV4dCA9IG5leHQubmV4dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHZhciBzdHlsZXMgPSBpbnRlcnBvbGF0aW9uLnN0eWxlcyArIFwiO1wiO1xyXG5cclxuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGludGVycG9sYXRpb24ubWFwICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgc3R5bGVzICs9IGludGVycG9sYXRpb24ubWFwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJldHVybiBzdHlsZXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY3JlYXRlU3RyaW5nRnJvbU9iamVjdChtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgaW50ZXJwb2xhdGlvbik7XHJcbiAgICAgIH1cclxuXHJcbiAgICBjYXNlICdmdW5jdGlvbic6XHJcbiAgICAgIHtcclxuICAgICAgICBpZiAobWVyZ2VkUHJvcHMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgdmFyIHByZXZpb3VzQ3Vyc29yID0gY3Vyc29yO1xyXG4gICAgICAgICAgdmFyIHJlc3VsdCA9IGludGVycG9sYXRpb24obWVyZ2VkUHJvcHMpO1xyXG4gICAgICAgICAgY3Vyc29yID0gcHJldmlvdXNDdXJzb3I7XHJcbiAgICAgICAgICByZXR1cm4gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgcmVzdWx0LCBjb3VsZEJlU2VsZWN0b3JJbnRlcnBvbGF0aW9uKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Z1bmN0aW9ucyB0aGF0IGFyZSBpbnRlcnBvbGF0ZWQgaW4gY3NzIGNhbGxzIHdpbGwgYmUgc3RyaW5naWZpZWQuXFxuJyArICdJZiB5b3Ugd2FudCB0byBoYXZlIGEgY3NzIGNhbGwgYmFzZWQgb24gcHJvcHMsIGNyZWF0ZSBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIGNzcyBjYWxsIGxpa2UgdGhpc1xcbicgKyAnbGV0IGR5bmFtaWNTdHlsZSA9IChwcm9wcykgPT4gY3NzYGNvbG9yOiAke3Byb3BzLmNvbG9yfWBcXG4nICsgJ0l0IGNhbiBiZSBjYWxsZWQgZGlyZWN0bHkgd2l0aCBwcm9wcyBvciBpbnRlcnBvbGF0ZWQgaW4gYSBzdHlsZWQgY2FsbCBsaWtlIHRoaXNcXG4nICsgXCJsZXQgU29tZUNvbXBvbmVudCA9IHN0eWxlZCgnZGl2JylgJHtkeW5hbWljU3R5bGV9YFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgY2FzZSAnc3RyaW5nJzpcclxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICB2YXIgbWF0Y2hlZCA9IFtdO1xyXG4gICAgICAgIHZhciByZXBsYWNlZCA9IGludGVycG9sYXRpb24ucmVwbGFjZShhbmltYXRpb25SZWdleCwgZnVuY3Rpb24gKG1hdGNoLCBwMSwgcDIpIHtcclxuICAgICAgICAgIHZhciBmYWtlVmFyTmFtZSA9IFwiYW5pbWF0aW9uXCIgKyBtYXRjaGVkLmxlbmd0aDtcclxuICAgICAgICAgIG1hdGNoZWQucHVzaChcImNvbnN0IFwiICsgZmFrZVZhck5hbWUgKyBcIiA9IGtleWZyYW1lc2BcIiArIHAyLnJlcGxhY2UoL15Aa2V5ZnJhbWVzIGFuaW1hdGlvbi1cXHcrLywgJycpICsgXCJgXCIpO1xyXG4gICAgICAgICAgcmV0dXJuIFwiJHtcIiArIGZha2VWYXJOYW1lICsgXCJ9XCI7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChtYXRjaGVkLmxlbmd0aCkge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignYGtleWZyYW1lc2Agb3V0cHV0IGdvdCBpbnRlcnBvbGF0ZWQgaW50byBwbGFpbiBzdHJpbmcsIHBsZWFzZSB3cmFwIGl0IHdpdGggYGNzc2AuXFxuXFxuJyArICdJbnN0ZWFkIG9mIGRvaW5nIHRoaXM6XFxuXFxuJyArIFtdLmNvbmNhdChtYXRjaGVkLCBbXCJgXCIgKyByZXBsYWNlZCArIFwiYFwiXSkuam9pbignXFxuJykgKyAnXFxuXFxuWW91IHNob3VsZCB3cmFwIGl0IHdpdGggYGNzc2AgbGlrZSB0aGlzOlxcblxcbicgKyAoXCJjc3NgXCIgKyByZXBsYWNlZCArIFwiYFwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBicmVhaztcclxuICB9IC8vIGZpbmFsaXplIHN0cmluZyB2YWx1ZXMgKHJlZ3VsYXIgc3RyaW5ncyBhbmQgZnVuY3Rpb25zIGludGVycG9sYXRlZCBpbnRvIGNzcyBjYWxscylcclxuXHJcblxyXG4gIGlmIChyZWdpc3RlcmVkID09IG51bGwpIHtcclxuICAgIHJldHVybiBpbnRlcnBvbGF0aW9uO1xyXG4gIH1cclxuXHJcbiAgdmFyIGNhY2hlZCA9IHJlZ2lzdGVyZWRbaW50ZXJwb2xhdGlvbl07XHJcblxyXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGNvdWxkQmVTZWxlY3RvckludGVycG9sYXRpb24gJiYgc2hvdWxkV2FybkFib3V0SW50ZXJwb2xhdGluZ0NsYXNzTmFtZUZyb21Dc3MgJiYgY2FjaGVkICE9PSB1bmRlZmluZWQpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0ludGVycG9sYXRpbmcgYSBjbGFzc05hbWUgZnJvbSBjc3NgYCBpcyBub3QgcmVjb21tZW5kZWQgYW5kIHdpbGwgY2F1c2UgcHJvYmxlbXMgd2l0aCBjb21wb3NpdGlvbi5cXG4nICsgJ0ludGVycG9sYXRpbmcgYSBjbGFzc05hbWUgZnJvbSBjc3NgYCB3aWxsIGJlIGNvbXBsZXRlbHkgdW5zdXBwb3J0ZWQgaW4gYSBmdXR1cmUgbWFqb3IgdmVyc2lvbiBvZiBFbW90aW9uJyk7XHJcbiAgICBzaG91bGRXYXJuQWJvdXRJbnRlcnBvbGF0aW5nQ2xhc3NOYW1lRnJvbUNzcyA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNhY2hlZCAhPT0gdW5kZWZpbmVkICYmICFjb3VsZEJlU2VsZWN0b3JJbnRlcnBvbGF0aW9uID8gY2FjaGVkIDogaW50ZXJwb2xhdGlvbjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3RyaW5nRnJvbU9iamVjdChtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgb2JqKSB7XHJcbiAgdmFyIHN0cmluZyA9ICcnO1xyXG5cclxuICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iai5sZW5ndGg7IGkrKykge1xyXG4gICAgICBzdHJpbmcgKz0gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgb2JqW2ldLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGZvciAodmFyIF9rZXkgaW4gb2JqKSB7XHJcbiAgICAgIHZhciB2YWx1ZSA9IG9ialtfa2V5XTtcclxuXHJcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgaWYgKHJlZ2lzdGVyZWQgIT0gbnVsbCAmJiByZWdpc3RlcmVkW3ZhbHVlXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICBzdHJpbmcgKz0gX2tleSArIFwie1wiICsgcmVnaXN0ZXJlZFt2YWx1ZV0gKyBcIn1cIjtcclxuICAgICAgICB9IGVsc2UgaWYgKGlzUHJvY2Vzc2FibGVWYWx1ZSh2YWx1ZSkpIHtcclxuICAgICAgICAgIHN0cmluZyArPSBwcm9jZXNzU3R5bGVOYW1lKF9rZXkpICsgXCI6XCIgKyBwcm9jZXNzU3R5bGVWYWx1ZShfa2V5LCB2YWx1ZSkgKyBcIjtcIjtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKF9rZXkgPT09ICdOT19DT01QT05FTlRfU0VMRUNUT1InICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ29tcG9uZW50IHNlbGVjdG9ycyBjYW4gb25seSBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYmFiZWwtcGx1Z2luLWVtb3Rpb24uJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdHlwZW9mIHZhbHVlWzBdID09PSAnc3RyaW5nJyAmJiAocmVnaXN0ZXJlZCA9PSBudWxsIHx8IHJlZ2lzdGVyZWRbdmFsdWVbMF1dID09PSB1bmRlZmluZWQpKSB7XHJcbiAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdmFsdWUubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChpc1Byb2Nlc3NhYmxlVmFsdWUodmFsdWVbX2ldKSkge1xyXG4gICAgICAgICAgICAgIHN0cmluZyArPSBwcm9jZXNzU3R5bGVOYW1lKF9rZXkpICsgXCI6XCIgKyBwcm9jZXNzU3R5bGVWYWx1ZShfa2V5LCB2YWx1ZVtfaV0pICsgXCI7XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdmFyIGludGVycG9sYXRlZCA9IGhhbmRsZUludGVycG9sYXRpb24obWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIHZhbHVlLCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgc3dpdGNoIChfa2V5KSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2FuaW1hdGlvbic6XHJcbiAgICAgICAgICAgIGNhc2UgJ2FuaW1hdGlvbk5hbWUnOlxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHN0cmluZyArPSBwcm9jZXNzU3R5bGVOYW1lKF9rZXkpICsgXCI6XCIgKyBpbnRlcnBvbGF0ZWQgKyBcIjtcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgX2tleSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihVTkRFRklORURfQVNfT0JKRUNUX0tFWV9FUlJPUik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IF9rZXkgKyBcIntcIiArIGludGVycG9sYXRlZCArIFwifVwiO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBzdHJpbmc7XHJcbn1cclxuXHJcbnZhciBsYWJlbFBhdHRlcm4gPSAvbGFiZWw6XFxzKihbXlxccztcXG57XSspXFxzKjsvZztcclxudmFyIHNvdXJjZU1hcFBhdHRlcm47XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gIHNvdXJjZU1hcFBhdHRlcm4gPSAvXFwvXFwqI1xcc3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvblxcL2pzb247XFxTK1xccytcXCpcXC8vO1xyXG59IC8vIHRoaXMgaXMgdGhlIGN1cnNvciBmb3Iga2V5ZnJhbWVzXHJcbi8vIGtleWZyYW1lcyBhcmUgc3RvcmVkIG9uIHRoZSBTZXJpYWxpemVkU3R5bGVzIG9iamVjdCBhcyBhIGxpbmtlZCBsaXN0XHJcblxyXG5cclxudmFyIGN1cnNvcjtcclxudmFyIHNlcmlhbGl6ZVN0eWxlcyA9IGZ1bmN0aW9uIHNlcmlhbGl6ZVN0eWxlcyhhcmdzLCByZWdpc3RlcmVkLCBtZXJnZWRQcm9wcykge1xyXG4gIGlmIChhcmdzLmxlbmd0aCA9PT0gMSAmJiB0eXBlb2YgYXJnc1swXSA9PT0gJ29iamVjdCcgJiYgYXJnc1swXSAhPT0gbnVsbCAmJiBhcmdzWzBdLnN0eWxlcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICByZXR1cm4gYXJnc1swXTtcclxuICB9XHJcblxyXG4gIHZhciBzdHJpbmdNb2RlID0gdHJ1ZTtcclxuICB2YXIgc3R5bGVzID0gJyc7XHJcbiAgY3Vyc29yID0gdW5kZWZpbmVkO1xyXG4gIHZhciBzdHJpbmdzID0gYXJnc1swXTtcclxuXHJcbiAgaWYgKHN0cmluZ3MgPT0gbnVsbCB8fCBzdHJpbmdzLnJhdyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICBzdHJpbmdNb2RlID0gZmFsc2U7XHJcbiAgICBzdHlsZXMgKz0gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgc3RyaW5ncywgZmFsc2UpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBzdHJpbmdzWzBdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihJTExFR0FMX0VTQ0FQRV9TRVFVRU5DRV9FUlJPUik7XHJcbiAgICB9XHJcblxyXG4gICAgc3R5bGVzICs9IHN0cmluZ3NbMF07XHJcbiAgfSAvLyB3ZSBzdGFydCBhdCAxIHNpbmNlIHdlJ3ZlIGFscmVhZHkgaGFuZGxlZCB0aGUgZmlyc3QgYXJnXHJcblxyXG5cclxuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgIHN0eWxlcyArPSBoYW5kbGVJbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCBhcmdzW2ldLCBzdHlsZXMuY2hhckNvZGVBdChzdHlsZXMubGVuZ3RoIC0gMSkgPT09IDQ2KTtcclxuXHJcbiAgICBpZiAoc3RyaW5nTW9kZSkge1xyXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBzdHJpbmdzW2ldID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKElMTEVHQUxfRVNDQVBFX1NFUVVFTkNFX0VSUk9SKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc3R5bGVzICs9IHN0cmluZ3NbaV07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YXIgc291cmNlTWFwO1xyXG5cclxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgc3R5bGVzID0gc3R5bGVzLnJlcGxhY2Uoc291cmNlTWFwUGF0dGVybiwgZnVuY3Rpb24gKG1hdGNoKSB7XHJcbiAgICAgIHNvdXJjZU1hcCA9IG1hdGNoO1xyXG4gICAgICByZXR1cm4gJyc7XHJcbiAgICB9KTtcclxuICB9IC8vIHVzaW5nIGEgZ2xvYmFsIHJlZ2V4IHdpdGggLmV4ZWMgaXMgc3RhdGVmdWwgc28gbGFzdEluZGV4IGhhcyB0byBiZSByZXNldCBlYWNoIHRpbWVcclxuXHJcblxyXG4gIGxhYmVsUGF0dGVybi5sYXN0SW5kZXggPSAwO1xyXG4gIHZhciBpZGVudGlmaWVyTmFtZSA9ICcnO1xyXG4gIHZhciBtYXRjaDsgLy8gaHR0cHM6Ly9lc2JlbmNoLmNvbS9iZW5jaC81YjgwOWMyY2YyOTQ5ODAwYTBmNjFmYjVcclxuXHJcbiAgd2hpbGUgKChtYXRjaCA9IGxhYmVsUGF0dGVybi5leGVjKHN0eWxlcykpICE9PSBudWxsKSB7XHJcbiAgICBpZGVudGlmaWVyTmFtZSArPSAnLScgKyAvLyAkRmxvd0ZpeE1lIHdlIGtub3cgaXQncyBub3QgbnVsbFxyXG4gICAgbWF0Y2hbMV07XHJcbiAgfVxyXG5cclxuICB2YXIgbmFtZSA9IGhhc2hTdHJpbmcoc3R5bGVzKSArIGlkZW50aWZpZXJOYW1lO1xyXG5cclxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgLy8gJEZsb3dGaXhNZSBTZXJpYWxpemVkU3R5bGVzIHR5cGUgZG9lc24ndCBoYXZlIHRvU3RyaW5nIHByb3BlcnR5IChhbmQgd2UgZG9uJ3Qgd2FudCB0byBhZGQgaXQpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICBzdHlsZXM6IHN0eWxlcyxcclxuICAgICAgbWFwOiBzb3VyY2VNYXAsXHJcbiAgICAgIG5leHQ6IGN1cnNvcixcclxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiBcIllvdSBoYXZlIHRyaWVkIHRvIHN0cmluZ2lmeSBvYmplY3QgcmV0dXJuZWQgZnJvbSBgY3NzYCBmdW5jdGlvbi4gSXQgaXNuJ3Qgc3VwcG9zZWQgdG8gYmUgdXNlZCBkaXJlY3RseSAoZS5nLiBhcyB2YWx1ZSBvZiB0aGUgYGNsYXNzTmFtZWAgcHJvcCksIGJ1dCByYXRoZXIgaGFuZGVkIHRvIGVtb3Rpb24gc28gaXQgY2FuIGhhbmRsZSBpdCAoZS5nLiBhcyB2YWx1ZSBvZiBgY3NzYCBwcm9wKS5cIjtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBuYW1lOiBuYW1lLFxyXG4gICAgc3R5bGVzOiBzdHlsZXMsXHJcbiAgICBuZXh0OiBjdXJzb3JcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IHsgc2VyaWFsaXplU3R5bGVzIH07XHJcbiIsIi8qXHJcblxyXG5CYXNlZCBvZmYgZ2xhbW9yJ3MgU3R5bGVTaGVldCwgdGhhbmtzIFN1bmlsIOKdpO+4j1xyXG5cclxuaGlnaCBwZXJmb3JtYW5jZSBTdHlsZVNoZWV0IGZvciBjc3MtaW4tanMgc3lzdGVtc1xyXG5cclxuLSB1c2VzIG11bHRpcGxlIHN0eWxlIHRhZ3MgYmVoaW5kIHRoZSBzY2VuZXMgZm9yIG1pbGxpb25zIG9mIHJ1bGVzXHJcbi0gdXNlcyBgaW5zZXJ0UnVsZWAgZm9yIGFwcGVuZGluZyBpbiBwcm9kdWN0aW9uIGZvciAqbXVjaCogZmFzdGVyIHBlcmZvcm1hbmNlXHJcblxyXG4vLyB1c2FnZVxyXG5cclxuaW1wb3J0IHsgU3R5bGVTaGVldCB9IGZyb20gJ0BlbW90aW9uL3NoZWV0J1xyXG5cclxubGV0IHN0eWxlU2hlZXQgPSBuZXcgU3R5bGVTaGVldCh7IGtleTogJycsIGNvbnRhaW5lcjogZG9jdW1lbnQuaGVhZCB9KVxyXG5cclxuc3R5bGVTaGVldC5pbnNlcnQoJyNib3ggeyBib3JkZXI6IDFweCBzb2xpZCByZWQ7IH0nKVxyXG4tIGFwcGVuZHMgYSBjc3MgcnVsZSBpbnRvIHRoZSBzdHlsZXNoZWV0XHJcblxyXG5zdHlsZVNoZWV0LmZsdXNoKClcclxuLSBlbXB0aWVzIHRoZSBzdHlsZXNoZWV0IG9mIGFsbCBpdHMgY29udGVudHNcclxuXHJcbiovXHJcbi8vICRGbG93Rml4TWVcclxuZnVuY3Rpb24gc2hlZXRGb3JUYWcodGFnKSB7XHJcbiAgaWYgKHRhZy5zaGVldCkge1xyXG4gICAgLy8gJEZsb3dGaXhNZVxyXG4gICAgcmV0dXJuIHRhZy5zaGVldDtcclxuICB9IC8vIHRoaXMgd2VpcmRuZXNzIGJyb3VnaHQgdG8geW91IGJ5IGZpcmVmb3hcclxuXHJcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cclxuXHJcblxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZG9jdW1lbnQuc3R5bGVTaGVldHMubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChkb2N1bWVudC5zdHlsZVNoZWV0c1tpXS5vd25lck5vZGUgPT09IHRhZykge1xyXG4gICAgICAvLyAkRmxvd0ZpeE1lXHJcbiAgICAgIHJldHVybiBkb2N1bWVudC5zdHlsZVNoZWV0c1tpXTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSB7XHJcbiAgdmFyIHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XHJcbiAgdGFnLnNldEF0dHJpYnV0ZSgnZGF0YS1lbW90aW9uJywgb3B0aW9ucy5rZXkpO1xyXG5cclxuICBpZiAob3B0aW9ucy5ub25jZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICB0YWcuc2V0QXR0cmlidXRlKCdub25jZScsIG9wdGlvbnMubm9uY2UpO1xyXG4gIH1cclxuXHJcbiAgdGFnLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKSk7XHJcbiAgcmV0dXJuIHRhZztcclxufVxyXG5cclxudmFyIFN0eWxlU2hlZXQgPVxyXG4vKiNfX1BVUkVfXyovXHJcbmZ1bmN0aW9uICgpIHtcclxuICBmdW5jdGlvbiBTdHlsZVNoZWV0KG9wdGlvbnMpIHtcclxuICAgIHRoaXMuaXNTcGVlZHkgPSBvcHRpb25zLnNwZWVkeSA9PT0gdW5kZWZpbmVkID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA6IG9wdGlvbnMuc3BlZWR5O1xyXG4gICAgdGhpcy50YWdzID0gW107XHJcbiAgICB0aGlzLmN0ciA9IDA7XHJcbiAgICB0aGlzLm5vbmNlID0gb3B0aW9ucy5ub25jZTsgLy8ga2V5IGlzIHRoZSB2YWx1ZSBvZiB0aGUgZGF0YS1lbW90aW9uIGF0dHJpYnV0ZSwgaXQncyB1c2VkIHRvIGlkZW50aWZ5IGRpZmZlcmVudCBzaGVldHNcclxuXHJcbiAgICB0aGlzLmtleSA9IG9wdGlvbnMua2V5O1xyXG4gICAgdGhpcy5jb250YWluZXIgPSBvcHRpb25zLmNvbnRhaW5lcjtcclxuICAgIHRoaXMuYmVmb3JlID0gbnVsbDtcclxuICB9XHJcblxyXG4gIHZhciBfcHJvdG8gPSBTdHlsZVNoZWV0LnByb3RvdHlwZTtcclxuXHJcbiAgX3Byb3RvLmluc2VydCA9IGZ1bmN0aW9uIGluc2VydChydWxlKSB7XHJcbiAgICAvLyB0aGUgbWF4IGxlbmd0aCBpcyBob3cgbWFueSBydWxlcyB3ZSBoYXZlIHBlciBzdHlsZSB0YWcsIGl0J3MgNjUwMDAgaW4gc3BlZWR5IG1vZGVcclxuICAgIC8vIGl0J3MgMSBpbiBkZXYgYmVjYXVzZSB3ZSBpbnNlcnQgc291cmNlIG1hcHMgdGhhdCBtYXAgYSBzaW5nbGUgcnVsZSB0byBhIGxvY2F0aW9uXHJcbiAgICAvLyBhbmQgeW91IGNhbiBvbmx5IGhhdmUgb25lIHNvdXJjZSBtYXAgcGVyIHN0eWxlIHRhZ1xyXG4gICAgaWYgKHRoaXMuY3RyICUgKHRoaXMuaXNTcGVlZHkgPyA2NTAwMCA6IDEpID09PSAwKSB7XHJcbiAgICAgIHZhciBfdGFnID0gY3JlYXRlU3R5bGVFbGVtZW50KHRoaXMpO1xyXG5cclxuICAgICAgdmFyIGJlZm9yZTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnRhZ3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgYmVmb3JlID0gdGhpcy5iZWZvcmU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYmVmb3JlID0gdGhpcy50YWdzW3RoaXMudGFncy5sZW5ndGggLSAxXS5uZXh0U2libGluZztcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5jb250YWluZXIuaW5zZXJ0QmVmb3JlKF90YWcsIGJlZm9yZSk7XHJcbiAgICAgIHRoaXMudGFncy5wdXNoKF90YWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciB0YWcgPSB0aGlzLnRhZ3NbdGhpcy50YWdzLmxlbmd0aCAtIDFdO1xyXG5cclxuICAgIGlmICh0aGlzLmlzU3BlZWR5KSB7XHJcbiAgICAgIHZhciBzaGVldCA9IHNoZWV0Rm9yVGFnKHRhZyk7XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIC8vIHRoaXMgaXMgYSByZWFsbHkgaG90IHBhdGhcclxuICAgICAgICAvLyB3ZSBjaGVjayB0aGUgc2Vjb25kIGNoYXJhY3RlciBmaXJzdCBiZWNhdXNlIGhhdmluZyBcImlcIlxyXG4gICAgICAgIC8vIGFzIHRoZSBzZWNvbmQgY2hhcmFjdGVyIHdpbGwgaGFwcGVuIGxlc3Mgb2Z0ZW4gdGhhblxyXG4gICAgICAgIC8vIGhhdmluZyBcIkBcIiBhcyB0aGUgZmlyc3QgY2hhcmFjdGVyXHJcbiAgICAgICAgdmFyIGlzSW1wb3J0UnVsZSA9IHJ1bGUuY2hhckNvZGVBdCgxKSA9PT0gMTA1ICYmIHJ1bGUuY2hhckNvZGVBdCgwKSA9PT0gNjQ7IC8vIHRoaXMgaXMgdGhlIHVsdHJhZmFzdCB2ZXJzaW9uLCB3b3JrcyBhY3Jvc3MgYnJvd3NlcnNcclxuICAgICAgICAvLyB0aGUgYmlnIGRyYXdiYWNrIGlzIHRoYXQgdGhlIGNzcyB3b24ndCBiZSBlZGl0YWJsZSBpbiBkZXZ0b29sc1xyXG5cclxuICAgICAgICBzaGVldC5pbnNlcnRSdWxlKHJ1bGUsIC8vIHdlIG5lZWQgdG8gaW5zZXJ0IEBpbXBvcnQgcnVsZXMgYmVmb3JlIGFueXRoaW5nIGVsc2VcclxuICAgICAgICAvLyBvdGhlcndpc2UgdGhlcmUgd2lsbCBiZSBhbiBlcnJvclxyXG4gICAgICAgIC8vIHRlY2huaWNhbGx5IHRoaXMgbWVhbnMgdGhhdCB0aGUgQGltcG9ydCBydWxlcyB3aWxsXHJcbiAgICAgICAgLy8gX3VzdWFsbHlfKG5vdCBhbHdheXMgc2luY2UgdGhlcmUgY291bGQgYmUgbXVsdGlwbGUgc3R5bGUgdGFncylcclxuICAgICAgICAvLyBiZSB0aGUgZmlyc3Qgb25lcyBpbiBwcm9kIGFuZCBnZW5lcmFsbHkgbGF0ZXIgaW4gZGV2XHJcbiAgICAgICAgLy8gdGhpcyBzaG91bGRuJ3QgcmVhbGx5IG1hdHRlciBpbiB0aGUgcmVhbCB3b3JsZCB0aG91Z2hcclxuICAgICAgICAvLyBAaW1wb3J0IGlzIGdlbmVyYWxseSBvbmx5IHVzZWQgZm9yIGZvbnQgZmFjZXMgZnJvbSBnb29nbGUgZm9udHMgYW5kIGV0Yy5cclxuICAgICAgICAvLyBzbyB3aGlsZSB0aGlzIGNvdWxkIGJlIHRlY2huaWNhbGx5IGNvcnJlY3QgdGhlbiBpdCB3b3VsZCBiZSBzbG93ZXIgYW5kIGxhcmdlclxyXG4gICAgICAgIC8vIGZvciBhIHRpbnkgYml0IG9mIGNvcnJlY3RuZXNzIHRoYXQgd29uJ3QgbWF0dGVyIGluIHRoZSByZWFsIHdvcmxkXHJcbiAgICAgICAgaXNJbXBvcnRSdWxlID8gMCA6IHNoZWV0LmNzc1J1bGVzLmxlbmd0aCk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgICAgY29uc29sZS53YXJuKFwiVGhlcmUgd2FzIGEgcHJvYmxlbSBpbnNlcnRpbmcgdGhlIGZvbGxvd2luZyBydWxlOiBcXFwiXCIgKyBydWxlICsgXCJcXFwiXCIsIGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGFnLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHJ1bGUpKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmN0cisrO1xyXG4gIH07XHJcblxyXG4gIF9wcm90by5mbHVzaCA9IGZ1bmN0aW9uIGZsdXNoKCkge1xyXG4gICAgLy8gJEZsb3dGaXhNZVxyXG4gICAgdGhpcy50YWdzLmZvckVhY2goZnVuY3Rpb24gKHRhZykge1xyXG4gICAgICByZXR1cm4gdGFnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGFnKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy50YWdzID0gW107XHJcbiAgICB0aGlzLmN0ciA9IDA7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIFN0eWxlU2hlZXQ7XHJcbn0oKTtcclxuXHJcbmV4cG9ydCB7IFN0eWxlU2hlZXQgfTtcclxuIiwiZnVuY3Rpb24gc3R5bGlzX21pbiAoVykge1xyXG4gIGZ1bmN0aW9uIE0oZCwgYywgZSwgaCwgYSkge1xyXG4gICAgZm9yICh2YXIgbSA9IDAsIGIgPSAwLCB2ID0gMCwgbiA9IDAsIHEsIGcsIHggPSAwLCBLID0gMCwgaywgdSA9IGsgPSBxID0gMCwgbCA9IDAsIHIgPSAwLCBJID0gMCwgdCA9IDAsIEIgPSBlLmxlbmd0aCwgSiA9IEIgLSAxLCB5LCBmID0gJycsIHAgPSAnJywgRiA9ICcnLCBHID0gJycsIEM7IGwgPCBCOykge1xyXG4gICAgICBnID0gZS5jaGFyQ29kZUF0KGwpO1xyXG4gICAgICBsID09PSBKICYmIDAgIT09IGIgKyBuICsgdiArIG0gJiYgKDAgIT09IGIgJiYgKGcgPSA0NyA9PT0gYiA/IDEwIDogNDcpLCBuID0gdiA9IG0gPSAwLCBCKyssIEorKyk7XHJcblxyXG4gICAgICBpZiAoMCA9PT0gYiArIG4gKyB2ICsgbSkge1xyXG4gICAgICAgIGlmIChsID09PSBKICYmICgwIDwgciAmJiAoZiA9IGYucmVwbGFjZShOLCAnJykpLCAwIDwgZi50cmltKCkubGVuZ3RoKSkge1xyXG4gICAgICAgICAgc3dpdGNoIChnKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMzI6XHJcbiAgICAgICAgICAgIGNhc2UgOTpcclxuICAgICAgICAgICAgY2FzZSA1OTpcclxuICAgICAgICAgICAgY2FzZSAxMzpcclxuICAgICAgICAgICAgY2FzZSAxMDpcclxuICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgZiArPSBlLmNoYXJBdChsKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBnID0gNTk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzd2l0Y2ggKGcpIHtcclxuICAgICAgICAgIGNhc2UgMTIzOlxyXG4gICAgICAgICAgICBmID0gZi50cmltKCk7XHJcbiAgICAgICAgICAgIHEgPSBmLmNoYXJDb2RlQXQoMCk7XHJcbiAgICAgICAgICAgIGsgPSAxO1xyXG5cclxuICAgICAgICAgICAgZm9yICh0ID0gKytsOyBsIDwgQjspIHtcclxuICAgICAgICAgICAgICBzd2l0Y2ggKGcgPSBlLmNoYXJDb2RlQXQobCkpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTIzOlxyXG4gICAgICAgICAgICAgICAgICBrKys7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgMTI1OlxyXG4gICAgICAgICAgICAgICAgICBrLS07XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgNDc6XHJcbiAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZyA9IGUuY2hhckNvZGVBdChsICsgMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQyOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDc6XHJcbiAgICAgICAgICAgICAgICAgICAgICBhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodSA9IGwgKyAxOyB1IDwgSjsgKyt1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChlLmNoYXJDb2RlQXQodSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICg0MiA9PT0gZyAmJiA0MiA9PT0gZS5jaGFyQ29kZUF0KHUgLSAxKSAmJiBsICsgMiAhPT0gdSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwgPSB1ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhayBhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoNDcgPT09IGcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsID0gdSArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWsgYTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGwgPSB1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSA5MTpcclxuICAgICAgICAgICAgICAgICAgZysrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgNDA6XHJcbiAgICAgICAgICAgICAgICAgIGcrKztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIDM0OlxyXG4gICAgICAgICAgICAgICAgY2FzZSAzOTpcclxuICAgICAgICAgICAgICAgICAgZm9yICg7IGwrKyA8IEogJiYgZS5jaGFyQ29kZUF0KGwpICE9PSBnOykge1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgaWYgKDAgPT09IGspIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGwrKztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgayA9IGUuc3Vic3RyaW5nKHQsIGwpO1xyXG4gICAgICAgICAgICAwID09PSBxICYmIChxID0gKGYgPSBmLnJlcGxhY2UoY2EsICcnKS50cmltKCkpLmNoYXJDb2RlQXQoMCkpO1xyXG5cclxuICAgICAgICAgICAgc3dpdGNoIChxKSB7XHJcbiAgICAgICAgICAgICAgY2FzZSA2NDpcclxuICAgICAgICAgICAgICAgIDAgPCByICYmIChmID0gZi5yZXBsYWNlKE4sICcnKSk7XHJcbiAgICAgICAgICAgICAgICBnID0gZi5jaGFyQ29kZUF0KDEpO1xyXG5cclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoZykge1xyXG4gICAgICAgICAgICAgICAgICBjYXNlIDEwMDpcclxuICAgICAgICAgICAgICAgICAgY2FzZSAxMDk6XHJcbiAgICAgICAgICAgICAgICAgIGNhc2UgMTE1OlxyXG4gICAgICAgICAgICAgICAgICBjYXNlIDQ1OlxyXG4gICAgICAgICAgICAgICAgICAgIHIgPSBjO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICByID0gTztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBrID0gTShjLCByLCBrLCBnLCBhICsgMSk7XHJcbiAgICAgICAgICAgICAgICB0ID0gay5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAwIDwgQSAmJiAociA9IFgoTywgZiwgSSksIEMgPSBIKDMsIGssIHIsIGMsIEQsIHosIHQsIGcsIGEsIGgpLCBmID0gci5qb2luKCcnKSwgdm9pZCAwICE9PSBDICYmIDAgPT09ICh0ID0gKGsgPSBDLnRyaW0oKSkubGVuZ3RoKSAmJiAoZyA9IDAsIGsgPSAnJykpO1xyXG4gICAgICAgICAgICAgICAgaWYgKDAgPCB0KSBzd2l0Y2ggKGcpIHtcclxuICAgICAgICAgICAgICAgICAgY2FzZSAxMTU6XHJcbiAgICAgICAgICAgICAgICAgICAgZiA9IGYucmVwbGFjZShkYSwgZWEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgY2FzZSAxMDA6XHJcbiAgICAgICAgICAgICAgICAgIGNhc2UgMTA5OlxyXG4gICAgICAgICAgICAgICAgICBjYXNlIDQ1OlxyXG4gICAgICAgICAgICAgICAgICAgIGsgPSBmICsgJ3snICsgayArICd9JztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgIGNhc2UgMTA3OlxyXG4gICAgICAgICAgICAgICAgICAgIGYgPSBmLnJlcGxhY2UoZmEsICckMSAkMicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGsgPSBmICsgJ3snICsgayArICd9JztcclxuICAgICAgICAgICAgICAgICAgICBrID0gMSA9PT0gdyB8fCAyID09PSB3ICYmIEwoJ0AnICsgaywgMykgPyAnQC13ZWJraXQtJyArIGsgKyAnQCcgKyBrIDogJ0AnICsgaztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgayA9IGYgKyBrLCAxMTIgPT09IGggJiYgKGsgPSAocCArPSBrLCAnJykpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGsgPSAnJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgayA9IE0oYywgWChjLCBmLCBJKSwgaywgaCwgYSArIDEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBGICs9IGs7XHJcbiAgICAgICAgICAgIGsgPSBJID0gciA9IHUgPSBxID0gMDtcclxuICAgICAgICAgICAgZiA9ICcnO1xyXG4gICAgICAgICAgICBnID0gZS5jaGFyQ29kZUF0KCsrbCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgIGNhc2UgMTI1OlxyXG4gICAgICAgICAgY2FzZSA1OTpcclxuICAgICAgICAgICAgZiA9ICgwIDwgciA/IGYucmVwbGFjZShOLCAnJykgOiBmKS50cmltKCk7XHJcbiAgICAgICAgICAgIGlmICgxIDwgKHQgPSBmLmxlbmd0aCkpIHN3aXRjaCAoMCA9PT0gdSAmJiAocSA9IGYuY2hhckNvZGVBdCgwKSwgNDUgPT09IHEgfHwgOTYgPCBxICYmIDEyMyA+IHEpICYmICh0ID0gKGYgPSBmLnJlcGxhY2UoJyAnLCAnOicpKS5sZW5ndGgpLCAwIDwgQSAmJiB2b2lkIDAgIT09IChDID0gSCgxLCBmLCBjLCBkLCBELCB6LCBwLmxlbmd0aCwgaCwgYSwgaCkpICYmIDAgPT09ICh0ID0gKGYgPSBDLnRyaW0oKSkubGVuZ3RoKSAmJiAoZiA9ICdcXHgwMFxceDAwJyksIHEgPSBmLmNoYXJDb2RlQXQoMCksIGcgPSBmLmNoYXJDb2RlQXQoMSksIHEpIHtcclxuICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgY2FzZSA2NDpcclxuICAgICAgICAgICAgICAgIGlmICgxMDUgPT09IGcgfHwgOTkgPT09IGcpIHtcclxuICAgICAgICAgICAgICAgICAgRyArPSBmICsgZS5jaGFyQXQobCk7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgNTggIT09IGYuY2hhckNvZGVBdCh0IC0gMSkgJiYgKHAgKz0gUChmLCBxLCBnLCBmLmNoYXJDb2RlQXQoMikpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBJID0gciA9IHUgPSBxID0gMDtcclxuICAgICAgICAgICAgZiA9ICcnO1xyXG4gICAgICAgICAgICBnID0gZS5jaGFyQ29kZUF0KCsrbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBzd2l0Y2ggKGcpIHtcclxuICAgICAgICBjYXNlIDEzOlxyXG4gICAgICAgIGNhc2UgMTA6XHJcbiAgICAgICAgICA0NyA9PT0gYiA/IGIgPSAwIDogMCA9PT0gMSArIHEgJiYgMTA3ICE9PSBoICYmIDAgPCBmLmxlbmd0aCAmJiAociA9IDEsIGYgKz0gJ1xceDAwJyk7XHJcbiAgICAgICAgICAwIDwgQSAqIFkgJiYgSCgwLCBmLCBjLCBkLCBELCB6LCBwLmxlbmd0aCwgaCwgYSwgaCk7XHJcbiAgICAgICAgICB6ID0gMTtcclxuICAgICAgICAgIEQrKztcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIDU5OlxyXG4gICAgICAgIGNhc2UgMTI1OlxyXG4gICAgICAgICAgaWYgKDAgPT09IGIgKyBuICsgdiArIG0pIHtcclxuICAgICAgICAgICAgeisrO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHorKztcclxuICAgICAgICAgIHkgPSBlLmNoYXJBdChsKTtcclxuXHJcbiAgICAgICAgICBzd2l0Y2ggKGcpIHtcclxuICAgICAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgICBjYXNlIDMyOlxyXG4gICAgICAgICAgICAgIGlmICgwID09PSBuICsgbSArIGIpIHN3aXRjaCAoeCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0NDpcclxuICAgICAgICAgICAgICAgIGNhc2UgNTg6XHJcbiAgICAgICAgICAgICAgICBjYXNlIDk6XHJcbiAgICAgICAgICAgICAgICBjYXNlIDMyOlxyXG4gICAgICAgICAgICAgICAgICB5ID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgIDMyICE9PSBnICYmICh5ID0gJyAnKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgeSA9ICdcXFxcMCc7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIDEyOlxyXG4gICAgICAgICAgICAgIHkgPSAnXFxcXGYnO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAxMTpcclxuICAgICAgICAgICAgICB5ID0gJ1xcXFx2JztcclxuICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgMzg6XHJcbiAgICAgICAgICAgICAgMCA9PT0gbiArIGIgKyBtICYmIChyID0gSSA9IDEsIHkgPSAnXFxmJyArIHkpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAxMDg6XHJcbiAgICAgICAgICAgICAgaWYgKDAgPT09IG4gKyBiICsgbSArIEUgJiYgMCA8IHUpIHN3aXRjaCAobCAtIHUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgMTEyID09PSB4ICYmIDU4ID09PSBlLmNoYXJDb2RlQXQobCAtIDMpICYmIChFID0geCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgICAgICAgICAgICAxMTEgPT09IEsgJiYgKEUgPSBLKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIDU4OlxyXG4gICAgICAgICAgICAgIDAgPT09IG4gKyBiICsgbSAmJiAodSA9IGwpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSA0NDpcclxuICAgICAgICAgICAgICAwID09PSBiICsgdiArIG4gKyBtICYmIChyID0gMSwgeSArPSAnXFxyJyk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIDM0OlxyXG4gICAgICAgICAgICBjYXNlIDM5OlxyXG4gICAgICAgICAgICAgIDAgPT09IGIgJiYgKG4gPSBuID09PSBnID8gMCA6IDAgPT09IG4gPyBnIDogbik7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIDkxOlxyXG4gICAgICAgICAgICAgIDAgPT09IG4gKyBiICsgdiAmJiBtKys7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIDkzOlxyXG4gICAgICAgICAgICAgIDAgPT09IG4gKyBiICsgdiAmJiBtLS07XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIDQxOlxyXG4gICAgICAgICAgICAgIDAgPT09IG4gKyBiICsgbSAmJiB2LS07XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIDQwOlxyXG4gICAgICAgICAgICAgIGlmICgwID09PSBuICsgYiArIG0pIHtcclxuICAgICAgICAgICAgICAgIGlmICgwID09PSBxKSBzd2l0Y2ggKDIgKiB4ICsgMyAqIEspIHtcclxuICAgICAgICAgICAgICAgICAgY2FzZSA1MzM6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHEgPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdisrO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIDY0OlxyXG4gICAgICAgICAgICAgIDAgPT09IGIgKyB2ICsgbiArIG0gKyB1ICsgayAmJiAoayA9IDEpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSA0MjpcclxuICAgICAgICAgICAgY2FzZSA0NzpcclxuICAgICAgICAgICAgICBpZiAoISgwIDwgbiArIG0gKyB2KSkgc3dpdGNoIChiKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgIHN3aXRjaCAoMiAqIGcgKyAzICogZS5jaGFyQ29kZUF0KGwgKyAxKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjM1OlxyXG4gICAgICAgICAgICAgICAgICAgICAgYiA9IDQ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjIwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgdCA9IGwsIGIgPSA0MjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSA0MjpcclxuICAgICAgICAgICAgICAgICAgNDcgPT09IGcgJiYgNDIgPT09IHggJiYgdCArIDIgIT09IGwgJiYgKDMzID09PSBlLmNoYXJDb2RlQXQodCArIDIpICYmIChwICs9IGUuc3Vic3RyaW5nKHQsIGwgKyAxKSksIHkgPSAnJywgYiA9IDApO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAwID09PSBiICYmIChmICs9IHkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBLID0geDtcclxuICAgICAgeCA9IGc7XHJcbiAgICAgIGwrKztcclxuICAgIH1cclxuXHJcbiAgICB0ID0gcC5sZW5ndGg7XHJcblxyXG4gICAgaWYgKDAgPCB0KSB7XHJcbiAgICAgIHIgPSBjO1xyXG4gICAgICBpZiAoMCA8IEEgJiYgKEMgPSBIKDIsIHAsIHIsIGQsIEQsIHosIHQsIGgsIGEsIGgpLCB2b2lkIDAgIT09IEMgJiYgMCA9PT0gKHAgPSBDKS5sZW5ndGgpKSByZXR1cm4gRyArIHAgKyBGO1xyXG4gICAgICBwID0gci5qb2luKCcsJykgKyAneycgKyBwICsgJ30nO1xyXG5cclxuICAgICAgaWYgKDAgIT09IHcgKiBFKSB7XHJcbiAgICAgICAgMiAhPT0gdyB8fCBMKHAsIDIpIHx8IChFID0gMCk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoRSkge1xyXG4gICAgICAgICAgY2FzZSAxMTE6XHJcbiAgICAgICAgICAgIHAgPSBwLnJlcGxhY2UoaGEsICc6LW1vei0kMScpICsgcDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgY2FzZSAxMTI6XHJcbiAgICAgICAgICAgIHAgPSBwLnJlcGxhY2UoUSwgJzo6LXdlYmtpdC1pbnB1dC0kMScpICsgcC5yZXBsYWNlKFEsICc6Oi1tb3otJDEnKSArIHAucmVwbGFjZShRLCAnOi1tcy1pbnB1dC0kMScpICsgcDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEUgPSAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIEcgKyBwICsgRjtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIFgoZCwgYywgZSkge1xyXG4gICAgdmFyIGggPSBjLnRyaW0oKS5zcGxpdChpYSk7XHJcbiAgICBjID0gaDtcclxuICAgIHZhciBhID0gaC5sZW5ndGgsXHJcbiAgICAgICAgbSA9IGQubGVuZ3RoO1xyXG5cclxuICAgIHN3aXRjaCAobSkge1xyXG4gICAgICBjYXNlIDA6XHJcbiAgICAgIGNhc2UgMTpcclxuICAgICAgICB2YXIgYiA9IDA7XHJcblxyXG4gICAgICAgIGZvciAoZCA9IDAgPT09IG0gPyAnJyA6IGRbMF0gKyAnICc7IGIgPCBhOyArK2IpIHtcclxuICAgICAgICAgIGNbYl0gPSBaKGQsIGNbYl0sIGUpLnRyaW0oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB2YXIgdiA9IGIgPSAwO1xyXG5cclxuICAgICAgICBmb3IgKGMgPSBbXTsgYiA8IGE7ICsrYikge1xyXG4gICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCBtOyArK24pIHtcclxuICAgICAgICAgICAgY1t2KytdID0gWihkW25dICsgJyAnLCBoW2JdLCBlKS50cmltKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIFooZCwgYywgZSkge1xyXG4gICAgdmFyIGggPSBjLmNoYXJDb2RlQXQoMCk7XHJcbiAgICAzMyA+IGggJiYgKGggPSAoYyA9IGMudHJpbSgpKS5jaGFyQ29kZUF0KDApKTtcclxuXHJcbiAgICBzd2l0Y2ggKGgpIHtcclxuICAgICAgY2FzZSAzODpcclxuICAgICAgICByZXR1cm4gYy5yZXBsYWNlKEYsICckMScgKyBkLnRyaW0oKSk7XHJcblxyXG4gICAgICBjYXNlIDU4OlxyXG4gICAgICAgIHJldHVybiBkLnRyaW0oKSArIGMucmVwbGFjZShGLCAnJDEnICsgZC50cmltKCkpO1xyXG5cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBpZiAoMCA8IDEgKiBlICYmIDAgPCBjLmluZGV4T2YoJ1xcZicpKSByZXR1cm4gYy5yZXBsYWNlKEYsICg1OCA9PT0gZC5jaGFyQ29kZUF0KDApID8gJycgOiAnJDEnKSArIGQudHJpbSgpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZCArIGM7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBQKGQsIGMsIGUsIGgpIHtcclxuICAgIHZhciBhID0gZCArICc7JyxcclxuICAgICAgICBtID0gMiAqIGMgKyAzICogZSArIDQgKiBoO1xyXG5cclxuICAgIGlmICg5NDQgPT09IG0pIHtcclxuICAgICAgZCA9IGEuaW5kZXhPZignOicsIDkpICsgMTtcclxuICAgICAgdmFyIGIgPSBhLnN1YnN0cmluZyhkLCBhLmxlbmd0aCAtIDEpLnRyaW0oKTtcclxuICAgICAgYiA9IGEuc3Vic3RyaW5nKDAsIGQpLnRyaW0oKSArIGIgKyAnOyc7XHJcbiAgICAgIHJldHVybiAxID09PSB3IHx8IDIgPT09IHcgJiYgTChiLCAxKSA/ICctd2Via2l0LScgKyBiICsgYiA6IGI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKDAgPT09IHcgfHwgMiA9PT0gdyAmJiAhTChhLCAxKSkgcmV0dXJuIGE7XHJcblxyXG4gICAgc3dpdGNoIChtKSB7XHJcbiAgICAgIGNhc2UgMTAxNTpcclxuICAgICAgICByZXR1cm4gOTcgPT09IGEuY2hhckNvZGVBdCgxMCkgPyAnLXdlYmtpdC0nICsgYSArIGEgOiBhO1xyXG5cclxuICAgICAgY2FzZSA5NTE6XHJcbiAgICAgICAgcmV0dXJuIDExNiA9PT0gYS5jaGFyQ29kZUF0KDMpID8gJy13ZWJraXQtJyArIGEgKyBhIDogYTtcclxuXHJcbiAgICAgIGNhc2UgOTYzOlxyXG4gICAgICAgIHJldHVybiAxMTAgPT09IGEuY2hhckNvZGVBdCg1KSA/ICctd2Via2l0LScgKyBhICsgYSA6IGE7XHJcblxyXG4gICAgICBjYXNlIDEwMDk6XHJcbiAgICAgICAgaWYgKDEwMCAhPT0gYS5jaGFyQ29kZUF0KDQpKSBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgOTY5OlxyXG4gICAgICBjYXNlIDk0MjpcclxuICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyBhO1xyXG5cclxuICAgICAgY2FzZSA5Nzg6XHJcbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tb3otJyArIGEgKyBhO1xyXG5cclxuICAgICAgY2FzZSAxMDE5OlxyXG4gICAgICBjYXNlIDk4MzpcclxuICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1vei0nICsgYSArICctbXMtJyArIGEgKyBhO1xyXG5cclxuICAgICAgY2FzZSA4ODM6XHJcbiAgICAgICAgaWYgKDQ1ID09PSBhLmNoYXJDb2RlQXQoOCkpIHJldHVybiAnLXdlYmtpdC0nICsgYSArIGE7XHJcbiAgICAgICAgaWYgKDAgPCBhLmluZGV4T2YoJ2ltYWdlLXNldCgnLCAxMSkpIHJldHVybiBhLnJlcGxhY2UoamEsICckMS13ZWJraXQtJDInKSArIGE7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIDkzMjpcclxuICAgICAgICBpZiAoNDUgPT09IGEuY2hhckNvZGVBdCg0KSkgc3dpdGNoIChhLmNoYXJDb2RlQXQoNSkpIHtcclxuICAgICAgICAgIGNhc2UgMTAzOlxyXG4gICAgICAgICAgICByZXR1cm4gJy13ZWJraXQtYm94LScgKyBhLnJlcGxhY2UoJy1ncm93JywgJycpICsgJy13ZWJraXQtJyArIGEgKyAnLW1zLScgKyBhLnJlcGxhY2UoJ2dyb3cnLCAncG9zaXRpdmUnKSArIGE7XHJcblxyXG4gICAgICAgICAgY2FzZSAxMTU6XHJcbiAgICAgICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtJyArIGEucmVwbGFjZSgnc2hyaW5rJywgJ25lZ2F0aXZlJykgKyBhO1xyXG5cclxuICAgICAgICAgIGNhc2UgOTg6XHJcbiAgICAgICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtJyArIGEucmVwbGFjZSgnYmFzaXMnLCAncHJlZmVycmVkLXNpemUnKSArIGE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtJyArIGEgKyBhO1xyXG5cclxuICAgICAgY2FzZSA5NjQ6XHJcbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy1mbGV4LScgKyBhICsgYTtcclxuXHJcbiAgICAgIGNhc2UgMTAyMzpcclxuICAgICAgICBpZiAoOTkgIT09IGEuY2hhckNvZGVBdCg4KSkgYnJlYWs7XHJcbiAgICAgICAgYiA9IGEuc3Vic3RyaW5nKGEuaW5kZXhPZignOicsIDE1KSkucmVwbGFjZSgnZmxleC0nLCAnJykucmVwbGFjZSgnc3BhY2UtYmV0d2VlbicsICdqdXN0aWZ5Jyk7XHJcbiAgICAgICAgcmV0dXJuICctd2Via2l0LWJveC1wYWNrJyArIGIgKyAnLXdlYmtpdC0nICsgYSArICctbXMtZmxleC1wYWNrJyArIGIgKyBhO1xyXG5cclxuICAgICAgY2FzZSAxMDA1OlxyXG4gICAgICAgIHJldHVybiBrYS50ZXN0KGEpID8gYS5yZXBsYWNlKGFhLCAnOi13ZWJraXQtJykgKyBhLnJlcGxhY2UoYWEsICc6LW1vei0nKSArIGEgOiBhO1xyXG5cclxuICAgICAgY2FzZSAxZTM6XHJcbiAgICAgICAgYiA9IGEuc3Vic3RyaW5nKDEzKS50cmltKCk7XHJcbiAgICAgICAgYyA9IGIuaW5kZXhPZignLScpICsgMTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChiLmNoYXJDb2RlQXQoMCkgKyBiLmNoYXJDb2RlQXQoYykpIHtcclxuICAgICAgICAgIGNhc2UgMjI2OlxyXG4gICAgICAgICAgICBiID0gYS5yZXBsYWNlKEcsICd0YicpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICBjYXNlIDIzMjpcclxuICAgICAgICAgICAgYiA9IGEucmVwbGFjZShHLCAndGItcmwnKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgY2FzZSAyMjA6XHJcbiAgICAgICAgICAgIGIgPSBhLnJlcGxhY2UoRywgJ2xyJyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy0nICsgYiArIGE7XHJcblxyXG4gICAgICBjYXNlIDEwMTc6XHJcbiAgICAgICAgaWYgKC0xID09PSBhLmluZGV4T2YoJ3N0aWNreScsIDkpKSBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgOTc1OlxyXG4gICAgICAgIGMgPSAoYSA9IGQpLmxlbmd0aCAtIDEwO1xyXG4gICAgICAgIGIgPSAoMzMgPT09IGEuY2hhckNvZGVBdChjKSA/IGEuc3Vic3RyaW5nKDAsIGMpIDogYSkuc3Vic3RyaW5nKGQuaW5kZXhPZignOicsIDcpICsgMSkudHJpbSgpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKG0gPSBiLmNoYXJDb2RlQXQoMCkgKyAoYi5jaGFyQ29kZUF0KDcpIHwgMCkpIHtcclxuICAgICAgICAgIGNhc2UgMjAzOlxyXG4gICAgICAgICAgICBpZiAoMTExID4gYi5jaGFyQ29kZUF0KDgpKSBicmVhaztcclxuXHJcbiAgICAgICAgICBjYXNlIDExNTpcclxuICAgICAgICAgICAgYSA9IGEucmVwbGFjZShiLCAnLXdlYmtpdC0nICsgYikgKyAnOycgKyBhO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICBjYXNlIDIwNzpcclxuICAgICAgICAgIGNhc2UgMTAyOlxyXG4gICAgICAgICAgICBhID0gYS5yZXBsYWNlKGIsICctd2Via2l0LScgKyAoMTAyIDwgbSA/ICdpbmxpbmUtJyA6ICcnKSArICdib3gnKSArICc7JyArIGEucmVwbGFjZShiLCAnLXdlYmtpdC0nICsgYikgKyAnOycgKyBhLnJlcGxhY2UoYiwgJy1tcy0nICsgYiArICdib3gnKSArICc7JyArIGE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYSArICc7JztcclxuXHJcbiAgICAgIGNhc2UgOTM4OlxyXG4gICAgICAgIGlmICg0NSA9PT0gYS5jaGFyQ29kZUF0KDUpKSBzd2l0Y2ggKGEuY2hhckNvZGVBdCg2KSkge1xyXG4gICAgICAgICAgY2FzZSAxMDU6XHJcbiAgICAgICAgICAgIHJldHVybiBiID0gYS5yZXBsYWNlKCctaXRlbXMnLCAnJyksICctd2Via2l0LScgKyBhICsgJy13ZWJraXQtYm94LScgKyBiICsgJy1tcy1mbGV4LScgKyBiICsgYTtcclxuXHJcbiAgICAgICAgICBjYXNlIDExNTpcclxuICAgICAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy1mbGV4LWl0ZW0tJyArIGEucmVwbGFjZShiYSwgJycpICsgYTtcclxuXHJcbiAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLWZsZXgtbGluZS1wYWNrJyArIGEucmVwbGFjZSgnYWxpZ24tY29udGVudCcsICcnKS5yZXBsYWNlKGJhLCAnJykgKyBhO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgOTczOlxyXG4gICAgICBjYXNlIDk4OTpcclxuICAgICAgICBpZiAoNDUgIT09IGEuY2hhckNvZGVBdCgzKSB8fCAxMjIgPT09IGEuY2hhckNvZGVBdCg0KSkgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIDkzMTpcclxuICAgICAgY2FzZSA5NTM6XHJcbiAgICAgICAgaWYgKCEwID09PSBsYS50ZXN0KGQpKSByZXR1cm4gMTE1ID09PSAoYiA9IGQuc3Vic3RyaW5nKGQuaW5kZXhPZignOicpICsgMSkpLmNoYXJDb2RlQXQoMCkgPyBQKGQucmVwbGFjZSgnc3RyZXRjaCcsICdmaWxsLWF2YWlsYWJsZScpLCBjLCBlLCBoKS5yZXBsYWNlKCc6ZmlsbC1hdmFpbGFibGUnLCAnOnN0cmV0Y2gnKSA6IGEucmVwbGFjZShiLCAnLXdlYmtpdC0nICsgYikgKyBhLnJlcGxhY2UoYiwgJy1tb3otJyArIGIucmVwbGFjZSgnZmlsbC0nLCAnJykpICsgYTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgOTYyOlxyXG4gICAgICAgIGlmIChhID0gJy13ZWJraXQtJyArIGEgKyAoMTAyID09PSBhLmNoYXJDb2RlQXQoNSkgPyAnLW1zLScgKyBhIDogJycpICsgYSwgMjExID09PSBlICsgaCAmJiAxMDUgPT09IGEuY2hhckNvZGVBdCgxMykgJiYgMCA8IGEuaW5kZXhPZigndHJhbnNmb3JtJywgMTApKSByZXR1cm4gYS5zdWJzdHJpbmcoMCwgYS5pbmRleE9mKCc7JywgMjcpICsgMSkucmVwbGFjZShtYSwgJyQxLXdlYmtpdC0kMicpICsgYTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIEwoZCwgYykge1xyXG4gICAgdmFyIGUgPSBkLmluZGV4T2YoMSA9PT0gYyA/ICc6JyA6ICd7JyksXHJcbiAgICAgICAgaCA9IGQuc3Vic3RyaW5nKDAsIDMgIT09IGMgPyBlIDogMTApO1xyXG4gICAgZSA9IGQuc3Vic3RyaW5nKGUgKyAxLCBkLmxlbmd0aCAtIDEpO1xyXG4gICAgcmV0dXJuIFIoMiAhPT0gYyA/IGggOiBoLnJlcGxhY2UobmEsICckMScpLCBlLCBjKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGVhKGQsIGMpIHtcclxuICAgIHZhciBlID0gUChjLCBjLmNoYXJDb2RlQXQoMCksIGMuY2hhckNvZGVBdCgxKSwgYy5jaGFyQ29kZUF0KDIpKTtcclxuICAgIHJldHVybiBlICE9PSBjICsgJzsnID8gZS5yZXBsYWNlKG9hLCAnIG9yICgkMSknKS5zdWJzdHJpbmcoNCkgOiAnKCcgKyBjICsgJyknO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gSChkLCBjLCBlLCBoLCBhLCBtLCBiLCB2LCBuLCBxKSB7XHJcbiAgICBmb3IgKHZhciBnID0gMCwgeCA9IGMsIHc7IGcgPCBBOyArK2cpIHtcclxuICAgICAgc3dpdGNoICh3ID0gU1tnXS5jYWxsKEIsIGQsIHgsIGUsIGgsIGEsIG0sIGIsIHYsIG4sIHEpKSB7XHJcbiAgICAgICAgY2FzZSB2b2lkIDA6XHJcbiAgICAgICAgY2FzZSAhMTpcclxuICAgICAgICBjYXNlICEwOlxyXG4gICAgICAgIGNhc2UgbnVsbDpcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgeCA9IHc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoeCAhPT0gYykgcmV0dXJuIHg7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBUKGQpIHtcclxuICAgIHN3aXRjaCAoZCkge1xyXG4gICAgICBjYXNlIHZvaWQgMDpcclxuICAgICAgY2FzZSBudWxsOlxyXG4gICAgICAgIEEgPSBTLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgZCkgU1tBKytdID0gZDtlbHNlIGlmICgnb2JqZWN0JyA9PT0gdHlwZW9mIGQpIGZvciAodmFyIGMgPSAwLCBlID0gZC5sZW5ndGg7IGMgPCBlOyArK2MpIHtcclxuICAgICAgICAgIFQoZFtjXSk7XHJcbiAgICAgICAgfSBlbHNlIFkgPSAhIWQgfCAwO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBUO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gVShkKSB7XHJcbiAgICBkID0gZC5wcmVmaXg7XHJcbiAgICB2b2lkIDAgIT09IGQgJiYgKFIgPSBudWxsLCBkID8gJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIGQgPyB3ID0gMSA6ICh3ID0gMiwgUiA9IGQpIDogdyA9IDApO1xyXG4gICAgcmV0dXJuIFU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBCKGQsIGMpIHtcclxuICAgIHZhciBlID0gZDtcclxuICAgIDMzID4gZS5jaGFyQ29kZUF0KDApICYmIChlID0gZS50cmltKCkpO1xyXG4gICAgViA9IGU7XHJcbiAgICBlID0gW1ZdO1xyXG5cclxuICAgIGlmICgwIDwgQSkge1xyXG4gICAgICB2YXIgaCA9IEgoLTEsIGMsIGUsIGUsIEQsIHosIDAsIDAsIDAsIDApO1xyXG4gICAgICB2b2lkIDAgIT09IGggJiYgJ3N0cmluZycgPT09IHR5cGVvZiBoICYmIChjID0gaCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGEgPSBNKE8sIGUsIGMsIDAsIDApO1xyXG4gICAgMCA8IEEgJiYgKGggPSBIKC0yLCBhLCBlLCBlLCBELCB6LCBhLmxlbmd0aCwgMCwgMCwgMCksIHZvaWQgMCAhPT0gaCAmJiAoYSA9IGgpKTtcclxuICAgIFYgPSAnJztcclxuICAgIEUgPSAwO1xyXG4gICAgeiA9IEQgPSAxO1xyXG4gICAgcmV0dXJuIGE7XHJcbiAgfVxyXG5cclxuICB2YXIgY2EgPSAvXlxcMCsvZyxcclxuICAgICAgTiA9IC9bXFwwXFxyXFxmXS9nLFxyXG4gICAgICBhYSA9IC86ICovZyxcclxuICAgICAga2EgPSAvem9vfGdyYS8sXHJcbiAgICAgIG1hID0gLyhbLDogXSkodHJhbnNmb3JtKS9nLFxyXG4gICAgICBpYSA9IC8sXFxyKz8vZyxcclxuICAgICAgRiA9IC8oW1xcdFxcclxcbiBdKSpcXGY/Ji9nLFxyXG4gICAgICBmYSA9IC9AKGtcXHcrKVxccyooXFxTKilcXHMqLyxcclxuICAgICAgUSA9IC86OihwbGFjZSkvZyxcclxuICAgICAgaGEgPSAvOihyZWFkLW9ubHkpL2csXHJcbiAgICAgIEcgPSAvW3N2aF1cXHcrLVt0YmxyXXsyfS8sXHJcbiAgICAgIGRhID0gL1xcKFxccyooLiopXFxzKlxcKS9nLFxyXG4gICAgICBvYSA9IC8oW1xcc1xcU10qPyk7L2csXHJcbiAgICAgIGJhID0gLy1zZWxmfGZsZXgtL2csXHJcbiAgICAgIG5hID0gL1teXSo/KDpbcnBdW2VsXWFbXFx3LV0rKVteXSovLFxyXG4gICAgICBsYSA9IC9zdHJldGNofDpcXHMqXFx3K1xcLSg/OmNvbnRlfGF2YWlsKS8sXHJcbiAgICAgIGphID0gLyhbXi1dKShpbWFnZS1zZXRcXCgpLyxcclxuICAgICAgeiA9IDEsXHJcbiAgICAgIEQgPSAxLFxyXG4gICAgICBFID0gMCxcclxuICAgICAgdyA9IDEsXHJcbiAgICAgIE8gPSBbXSxcclxuICAgICAgUyA9IFtdLFxyXG4gICAgICBBID0gMCxcclxuICAgICAgUiA9IG51bGwsXHJcbiAgICAgIFkgPSAwLFxyXG4gICAgICBWID0gJyc7XHJcbiAgQi51c2UgPSBUO1xyXG4gIEIuc2V0ID0gVTtcclxuICB2b2lkIDAgIT09IFcgJiYgVShXKTtcclxuICByZXR1cm4gQjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3R5bGlzX21pbjtcclxuIiwidmFyIHVuaXRsZXNzS2V5cyA9IHtcclxuICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogMSxcclxuICBib3JkZXJJbWFnZU91dHNldDogMSxcclxuICBib3JkZXJJbWFnZVNsaWNlOiAxLFxyXG4gIGJvcmRlckltYWdlV2lkdGg6IDEsXHJcbiAgYm94RmxleDogMSxcclxuICBib3hGbGV4R3JvdXA6IDEsXHJcbiAgYm94T3JkaW5hbEdyb3VwOiAxLFxyXG4gIGNvbHVtbkNvdW50OiAxLFxyXG4gIGNvbHVtbnM6IDEsXHJcbiAgZmxleDogMSxcclxuICBmbGV4R3JvdzogMSxcclxuICBmbGV4UG9zaXRpdmU6IDEsXHJcbiAgZmxleFNocmluazogMSxcclxuICBmbGV4TmVnYXRpdmU6IDEsXHJcbiAgZmxleE9yZGVyOiAxLFxyXG4gIGdyaWRSb3c6IDEsXHJcbiAgZ3JpZFJvd0VuZDogMSxcclxuICBncmlkUm93U3BhbjogMSxcclxuICBncmlkUm93U3RhcnQ6IDEsXHJcbiAgZ3JpZENvbHVtbjogMSxcclxuICBncmlkQ29sdW1uRW5kOiAxLFxyXG4gIGdyaWRDb2x1bW5TcGFuOiAxLFxyXG4gIGdyaWRDb2x1bW5TdGFydDogMSxcclxuICBtc0dyaWRSb3c6IDEsXHJcbiAgbXNHcmlkUm93U3BhbjogMSxcclxuICBtc0dyaWRDb2x1bW46IDEsXHJcbiAgbXNHcmlkQ29sdW1uU3BhbjogMSxcclxuICBmb250V2VpZ2h0OiAxLFxyXG4gIGxpbmVIZWlnaHQ6IDEsXHJcbiAgb3BhY2l0eTogMSxcclxuICBvcmRlcjogMSxcclxuICBvcnBoYW5zOiAxLFxyXG4gIHRhYlNpemU6IDEsXHJcbiAgd2lkb3dzOiAxLFxyXG4gIHpJbmRleDogMSxcclxuICB6b29tOiAxLFxyXG4gIFdlYmtpdExpbmVDbGFtcDogMSxcclxuICAvLyBTVkctcmVsYXRlZCBwcm9wZXJ0aWVzXHJcbiAgZmlsbE9wYWNpdHk6IDEsXHJcbiAgZmxvb2RPcGFjaXR5OiAxLFxyXG4gIHN0b3BPcGFjaXR5OiAxLFxyXG4gIHN0cm9rZURhc2hhcnJheTogMSxcclxuICBzdHJva2VEYXNob2Zmc2V0OiAxLFxyXG4gIHN0cm9rZU1pdGVybGltaXQ6IDEsXHJcbiAgc3Ryb2tlT3BhY2l0eTogMSxcclxuICBzdHJva2VXaWR0aDogMVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdW5pdGxlc3NLZXlzO1xyXG4iLCJ2YXIgaXNCcm93c2VyID0gXCJvYmplY3RcIiAhPT0gJ3VuZGVmaW5lZCc7XHJcbmZ1bmN0aW9uIGdldFJlZ2lzdGVyZWRTdHlsZXMocmVnaXN0ZXJlZCwgcmVnaXN0ZXJlZFN0eWxlcywgY2xhc3NOYW1lcykge1xyXG4gIHZhciByYXdDbGFzc05hbWUgPSAnJztcclxuICBjbGFzc05hbWVzLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XHJcbiAgICBpZiAocmVnaXN0ZXJlZFtjbGFzc05hbWVdICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmVnaXN0ZXJlZFN0eWxlcy5wdXNoKHJlZ2lzdGVyZWRbY2xhc3NOYW1lXSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByYXdDbGFzc05hbWUgKz0gY2xhc3NOYW1lICsgXCIgXCI7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHJhd0NsYXNzTmFtZTtcclxufVxyXG52YXIgaW5zZXJ0U3R5bGVzID0gZnVuY3Rpb24gaW5zZXJ0U3R5bGVzKGNhY2hlLCBzZXJpYWxpemVkLCBpc1N0cmluZ1RhZykge1xyXG4gIHZhciBjbGFzc05hbWUgPSBjYWNoZS5rZXkgKyBcIi1cIiArIHNlcmlhbGl6ZWQubmFtZTtcclxuXHJcbiAgaWYgKCAvLyB3ZSBvbmx5IG5lZWQgdG8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIHJlZ2lzdGVyZWQgY2FjaGUgaWYgdGhlXHJcbiAgLy8gY2xhc3MgbmFtZSBjb3VsZCBiZSB1c2VkIGZ1cnRoZXIgZG93blxyXG4gIC8vIHRoZSB0cmVlIGJ1dCBpZiBpdCdzIGEgc3RyaW5nIHRhZywgd2Uga25vdyBpdCB3b24ndFxyXG4gIC8vIHNvIHdlIGRvbid0IGhhdmUgdG8gYWRkIGl0IHRvIHJlZ2lzdGVyZWQgY2FjaGUuXHJcbiAgLy8gdGhpcyBpbXByb3ZlcyBtZW1vcnkgdXNhZ2Ugc2luY2Ugd2UgY2FuIGF2b2lkIHN0b3JpbmcgdGhlIHdob2xlIHN0eWxlIHN0cmluZ1xyXG4gIChpc1N0cmluZ1RhZyA9PT0gZmFsc2UgfHwgLy8gd2UgbmVlZCB0byBhbHdheXMgc3RvcmUgaXQgaWYgd2UncmUgaW4gY29tcGF0IG1vZGUgYW5kXHJcbiAgLy8gaW4gbm9kZSBzaW5jZSBlbW90aW9uLXNlcnZlciByZWxpZXMgb24gd2hldGhlciBhIHN0eWxlIGlzIGluXHJcbiAgLy8gdGhlIHJlZ2lzdGVyZWQgY2FjaGUgdG8ga25vdyB3aGV0aGVyIGEgc3R5bGUgaXMgZ2xvYmFsIG9yIG5vdFxyXG4gIC8vIGFsc28sIG5vdGUgdGhhdCB0aGlzIGNoZWNrIHdpbGwgYmUgZGVhZCBjb2RlIGVsaW1pbmF0ZWQgaW4gdGhlIGJyb3dzZXJcclxuICBpc0Jyb3dzZXIgPT09IGZhbHNlICYmIGNhY2hlLmNvbXBhdCAhPT0gdW5kZWZpbmVkKSAmJiBjYWNoZS5yZWdpc3RlcmVkW2NsYXNzTmFtZV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgY2FjaGUucmVnaXN0ZXJlZFtjbGFzc05hbWVdID0gc2VyaWFsaXplZC5zdHlsZXM7XHJcbiAgfVxyXG5cclxuICBpZiAoY2FjaGUuaW5zZXJ0ZWRbc2VyaWFsaXplZC5uYW1lXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICB2YXIgY3VycmVudCA9IHNlcmlhbGl6ZWQ7XHJcblxyXG4gICAgZG8ge1xyXG4gICAgICB2YXIgbWF5YmVTdHlsZXMgPSBjYWNoZS5pbnNlcnQoXCIuXCIgKyBjbGFzc05hbWUsIGN1cnJlbnQsIGNhY2hlLnNoZWV0LCB0cnVlKTtcclxuXHJcbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XHJcbiAgICB9IHdoaWxlIChjdXJyZW50ICE9PSB1bmRlZmluZWQpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCB7IGdldFJlZ2lzdGVyZWRTdHlsZXMsIGluc2VydFN0eWxlcyB9O1xyXG4iLCJ2YXIgd2Vha01lbW9pemUgPSBmdW5jdGlvbiB3ZWFrTWVtb2l6ZShmdW5jKSB7XHJcbiAgLy8gJEZsb3dGaXhNZSBmbG93IGRvZXNuJ3QgaW5jbHVkZSBhbGwgbm9uLXByaW1pdGl2ZSB0eXBlcyBhcyBhbGxvd2VkIGZvciB3ZWFrbWFwc1xyXG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHtcclxuICAgIGlmIChjYWNoZS5oYXMoYXJnKSkge1xyXG4gICAgICAvLyAkRmxvd0ZpeE1lXHJcbiAgICAgIHJldHVybiBjYWNoZS5nZXQoYXJnKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcmV0ID0gZnVuYyhhcmcpO1xyXG4gICAgY2FjaGUuc2V0KGFyZywgcmV0KTtcclxuICAgIHJldHVybiByZXQ7XHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdlYWtNZW1vaXplO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2F4aW9zJyk7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xyXG52YXIgc2V0dGxlID0gcmVxdWlyZSgnLi8uLi9jb3JlL3NldHRsZScpO1xyXG52YXIgYnVpbGRVUkwgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcclxudmFyIGJ1aWxkRnVsbFBhdGggPSByZXF1aXJlKCcuLi9jb3JlL2J1aWxkRnVsbFBhdGgnKTtcclxudmFyIHBhcnNlSGVhZGVycyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9wYXJzZUhlYWRlcnMnKTtcclxudmFyIGlzVVJMU2FtZU9yaWdpbiA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc1VSTFNhbWVPcmlnaW4nKTtcclxudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi4vY29yZS9jcmVhdGVFcnJvcicpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB4aHJBZGFwdGVyKGNvbmZpZykge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBkaXNwYXRjaFhoclJlcXVlc3QocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICB2YXIgcmVxdWVzdERhdGEgPSBjb25maWcuZGF0YTtcclxuICAgIHZhciByZXF1ZXN0SGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzO1xyXG5cclxuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKHJlcXVlc3REYXRhKSkge1xyXG4gICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddOyAvLyBMZXQgdGhlIGJyb3dzZXIgc2V0IGl0XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcbiAgICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXHJcbiAgICBpZiAoY29uZmlnLmF1dGgpIHtcclxuICAgICAgdmFyIHVzZXJuYW1lID0gY29uZmlnLmF1dGgudXNlcm5hbWUgfHwgJyc7XHJcbiAgICAgIHZhciBwYXNzd29yZCA9IGNvbmZpZy5hdXRoLnBhc3N3b3JkIHx8ICcnO1xyXG4gICAgICByZXF1ZXN0SGVhZGVycy5BdXRob3JpemF0aW9uID0gJ0Jhc2ljICcgKyBidG9hKHVzZXJuYW1lICsgJzonICsgcGFzc3dvcmQpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBmdWxsUGF0aCA9IGJ1aWxkRnVsbFBhdGgoY29uZmlnLmJhc2VVUkwsIGNvbmZpZy51cmwpO1xyXG4gICAgcmVxdWVzdC5vcGVuKGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSwgYnVpbGRVUkwoZnVsbFBhdGgsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKSwgdHJ1ZSk7XHJcblxyXG4gICAgLy8gU2V0IHRoZSByZXF1ZXN0IHRpbWVvdXQgaW4gTVNcclxuICAgIHJlcXVlc3QudGltZW91dCA9IGNvbmZpZy50aW1lb3V0O1xyXG5cclxuICAgIC8vIExpc3RlbiBmb3IgcmVhZHkgc3RhdGVcclxuICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcclxuICAgICAgaWYgKCFyZXF1ZXN0IHx8IHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gVGhlIHJlcXVlc3QgZXJyb3JlZCBvdXQgYW5kIHdlIGRpZG4ndCBnZXQgYSByZXNwb25zZSwgdGhpcyB3aWxsIGJlXHJcbiAgICAgIC8vIGhhbmRsZWQgYnkgb25lcnJvciBpbnN0ZWFkXHJcbiAgICAgIC8vIFdpdGggb25lIGV4Y2VwdGlvbjogcmVxdWVzdCB0aGF0IHVzaW5nIGZpbGU6IHByb3RvY29sLCBtb3N0IGJyb3dzZXJzXHJcbiAgICAgIC8vIHdpbGwgcmV0dXJuIHN0YXR1cyBhcyAwIGV2ZW4gdGhvdWdoIGl0J3MgYSBzdWNjZXNzZnVsIHJlcXVlc3RcclxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAwICYmICEocmVxdWVzdC5yZXNwb25zZVVSTCAmJiByZXF1ZXN0LnJlc3BvbnNlVVJMLmluZGV4T2YoJ2ZpbGU6JykgPT09IDApKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBQcmVwYXJlIHRoZSByZXNwb25zZVxyXG4gICAgICB2YXIgcmVzcG9uc2VIZWFkZXJzID0gJ2dldEFsbFJlc3BvbnNlSGVhZGVycycgaW4gcmVxdWVzdCA/IHBhcnNlSGVhZGVycyhyZXF1ZXN0LmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSA6IG51bGw7XHJcbiAgICAgIHZhciByZXNwb25zZURhdGEgPSAhY29uZmlnLnJlc3BvbnNlVHlwZSB8fCBjb25maWcucmVzcG9uc2VUeXBlID09PSAndGV4dCcgPyByZXF1ZXN0LnJlc3BvbnNlVGV4dCA6IHJlcXVlc3QucmVzcG9uc2U7XHJcbiAgICAgIHZhciByZXNwb25zZSA9IHtcclxuICAgICAgICBkYXRhOiByZXNwb25zZURhdGEsXHJcbiAgICAgICAgc3RhdHVzOiByZXF1ZXN0LnN0YXR1cyxcclxuICAgICAgICBzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1c1RleHQsXHJcbiAgICAgICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxyXG4gICAgICAgIGNvbmZpZzogY29uZmlnLFxyXG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3RcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKTtcclxuXHJcbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcclxuICAgICAgcmVxdWVzdCA9IG51bGw7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIEhhbmRsZSBicm93c2VyIHJlcXVlc3QgY2FuY2VsbGF0aW9uIChhcyBvcHBvc2VkIHRvIGEgbWFudWFsIGNhbmNlbGxhdGlvbilcclxuICAgIHJlcXVlc3Qub25hYm9ydCA9IGZ1bmN0aW9uIGhhbmRsZUFib3J0KCkge1xyXG4gICAgICBpZiAoIXJlcXVlc3QpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignUmVxdWVzdCBhYm9ydGVkJywgY29uZmlnLCAnRUNPTk5BQk9SVEVEJywgcmVxdWVzdCkpO1xyXG5cclxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxyXG4gICAgICByZXF1ZXN0ID0gbnVsbDtcclxuICAgIH07XHJcblxyXG4gICAgLy8gSGFuZGxlIGxvdyBsZXZlbCBuZXR3b3JrIGVycm9yc1xyXG4gICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gaGFuZGxlRXJyb3IoKSB7XHJcbiAgICAgIC8vIFJlYWwgZXJyb3JzIGFyZSBoaWRkZW4gZnJvbSB1cyBieSB0aGUgYnJvd3NlclxyXG4gICAgICAvLyBvbmVycm9yIHNob3VsZCBvbmx5IGZpcmUgaWYgaXQncyBhIG5ldHdvcmsgZXJyb3JcclxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdOZXR3b3JrIEVycm9yJywgY29uZmlnLCBudWxsLCByZXF1ZXN0KSk7XHJcblxyXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XHJcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBIYW5kbGUgdGltZW91dFxyXG4gICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge1xyXG4gICAgICB2YXIgdGltZW91dEVycm9yTWVzc2FnZSA9ICd0aW1lb3V0IG9mICcgKyBjb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCc7XHJcbiAgICAgIGlmIChjb25maWcudGltZW91dEVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgIHRpbWVvdXRFcnJvck1lc3NhZ2UgPSBjb25maWcudGltZW91dEVycm9yTWVzc2FnZTtcclxuICAgICAgfVxyXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IodGltZW91dEVycm9yTWVzc2FnZSwgY29uZmlnLCAnRUNPTk5BQk9SVEVEJyxcclxuICAgICAgICByZXF1ZXN0KSk7XHJcblxyXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XHJcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBBZGQgeHNyZiBoZWFkZXJcclxuICAgIC8vIFRoaXMgaXMgb25seSBkb25lIGlmIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50LlxyXG4gICAgLy8gU3BlY2lmaWNhbGx5IG5vdCBpZiB3ZSdyZSBpbiBhIHdlYiB3b3JrZXIsIG9yIHJlYWN0LW5hdGl2ZS5cclxuICAgIGlmICh1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpKSB7XHJcbiAgICAgIHZhciBjb29raWVzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2Nvb2tpZXMnKTtcclxuXHJcbiAgICAgIC8vIEFkZCB4c3JmIGhlYWRlclxyXG4gICAgICB2YXIgeHNyZlZhbHVlID0gKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMgfHwgaXNVUkxTYW1lT3JpZ2luKGZ1bGxQYXRoKSkgJiYgY29uZmlnLnhzcmZDb29raWVOYW1lID9cclxuICAgICAgICBjb29raWVzLnJlYWQoY29uZmlnLnhzcmZDb29raWVOYW1lKSA6XHJcbiAgICAgICAgdW5kZWZpbmVkO1xyXG5cclxuICAgICAgaWYgKHhzcmZWYWx1ZSkge1xyXG4gICAgICAgIHJlcXVlc3RIZWFkZXJzW2NvbmZpZy54c3JmSGVhZGVyTmFtZV0gPSB4c3JmVmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBBZGQgaGVhZGVycyB0byB0aGUgcmVxdWVzdFxyXG4gICAgaWYgKCdzZXRSZXF1ZXN0SGVhZGVyJyBpbiByZXF1ZXN0KSB7XHJcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMsIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHJlcXVlc3REYXRhID09PSAndW5kZWZpbmVkJyAmJiBrZXkudG9Mb3dlckNhc2UoKSA9PT0gJ2NvbnRlbnQtdHlwZScpIHtcclxuICAgICAgICAgIC8vIFJlbW92ZSBDb250ZW50LVR5cGUgaWYgZGF0YSBpcyB1bmRlZmluZWRcclxuICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1trZXldO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBPdGhlcndpc2UgYWRkIGhlYWRlciB0byB0aGUgcmVxdWVzdFxyXG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCB3aXRoQ3JlZGVudGlhbHMgdG8gcmVxdWVzdCBpZiBuZWVkZWRcclxuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnLndpdGhDcmVkZW50aWFscykpIHtcclxuICAgICAgcmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPSAhIWNvbmZpZy53aXRoQ3JlZGVudGlhbHM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIHJlc3BvbnNlVHlwZSB0byByZXF1ZXN0IGlmIG5lZWRlZFxyXG4gICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IGNvbmZpZy5yZXNwb25zZVR5cGU7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAvLyBFeHBlY3RlZCBET01FeGNlcHRpb24gdGhyb3duIGJ5IGJyb3dzZXJzIG5vdCBjb21wYXRpYmxlIFhNTEh0dHBSZXF1ZXN0IExldmVsIDIuXHJcbiAgICAgICAgLy8gQnV0LCB0aGlzIGNhbiBiZSBzdXBwcmVzc2VkIGZvciAnanNvbicgdHlwZSBhcyBpdCBjYW4gYmUgcGFyc2VkIGJ5IGRlZmF1bHQgJ3RyYW5zZm9ybVJlc3BvbnNlJyBmdW5jdGlvbi5cclxuICAgICAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSAhPT0gJ2pzb24nKSB7XHJcbiAgICAgICAgICB0aHJvdyBlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEhhbmRsZSBwcm9ncmVzcyBpZiBuZWVkZWRcclxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTm90IGFsbCBicm93c2VycyBzdXBwb3J0IHVwbG9hZCBldmVudHNcclxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicgJiYgcmVxdWVzdC51cGxvYWQpIHtcclxuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25VcGxvYWRQcm9ncmVzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xyXG4gICAgICAvLyBIYW5kbGUgY2FuY2VsbGF0aW9uXHJcbiAgICAgIGNvbmZpZy5jYW5jZWxUb2tlbi5wcm9taXNlLnRoZW4oZnVuY3Rpb24gb25DYW5jZWxlZChjYW5jZWwpIHtcclxuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlcXVlc3QuYWJvcnQoKTtcclxuICAgICAgICByZWplY3QoY2FuY2VsKTtcclxuICAgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XHJcbiAgICAgICAgcmVxdWVzdCA9IG51bGw7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyZXF1ZXN0RGF0YSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJlcXVlc3REYXRhID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XHJcbiAgICByZXF1ZXN0LnNlbmQocmVxdWVzdERhdGEpO1xyXG4gIH0pO1xyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XHJcbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcclxudmFyIEF4aW9zID0gcmVxdWlyZSgnLi9jb3JlL0F4aW9zJyk7XHJcbnZhciBtZXJnZUNvbmZpZyA9IHJlcXVpcmUoJy4vY29yZS9tZXJnZUNvbmZpZycpO1xyXG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuL2RlZmF1bHRzJyk7XHJcblxyXG4vKipcclxuICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIEF4aW9zXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0Q29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXHJcbiAqIEByZXR1cm4ge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdENvbmZpZykge1xyXG4gIHZhciBjb250ZXh0ID0gbmV3IEF4aW9zKGRlZmF1bHRDb25maWcpO1xyXG4gIHZhciBpbnN0YW5jZSA9IGJpbmQoQXhpb3MucHJvdG90eXBlLnJlcXVlc3QsIGNvbnRleHQpO1xyXG5cclxuICAvLyBDb3B5IGF4aW9zLnByb3RvdHlwZSB0byBpbnN0YW5jZVxyXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgQXhpb3MucHJvdG90eXBlLCBjb250ZXh0KTtcclxuXHJcbiAgLy8gQ29weSBjb250ZXh0IHRvIGluc3RhbmNlXHJcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBjb250ZXh0KTtcclxuXHJcbiAgcmV0dXJuIGluc3RhbmNlO1xyXG59XHJcblxyXG4vLyBDcmVhdGUgdGhlIGRlZmF1bHQgaW5zdGFuY2UgdG8gYmUgZXhwb3J0ZWRcclxudmFyIGF4aW9zID0gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdHMpO1xyXG5cclxuLy8gRXhwb3NlIEF4aW9zIGNsYXNzIHRvIGFsbG93IGNsYXNzIGluaGVyaXRhbmNlXHJcbmF4aW9zLkF4aW9zID0gQXhpb3M7XHJcblxyXG4vLyBGYWN0b3J5IGZvciBjcmVhdGluZyBuZXcgaW5zdGFuY2VzXHJcbmF4aW9zLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpbnN0YW5jZUNvbmZpZykge1xyXG4gIHJldHVybiBjcmVhdGVJbnN0YW5jZShtZXJnZUNvbmZpZyhheGlvcy5kZWZhdWx0cywgaW5zdGFuY2VDb25maWcpKTtcclxufTtcclxuXHJcbi8vIEV4cG9zZSBDYW5jZWwgJiBDYW5jZWxUb2tlblxyXG5heGlvcy5DYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWwnKTtcclxuYXhpb3MuQ2FuY2VsVG9rZW4gPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWxUb2tlbicpO1xyXG5heGlvcy5pc0NhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL2lzQ2FuY2VsJyk7XHJcblxyXG4vLyBFeHBvc2UgYWxsL3NwcmVhZFxyXG5heGlvcy5hbGwgPSBmdW5jdGlvbiBhbGwocHJvbWlzZXMpIHtcclxuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG59O1xyXG5heGlvcy5zcHJlYWQgPSByZXF1aXJlKCcuL2hlbHBlcnMvc3ByZWFkJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGF4aW9zO1xyXG5cclxuLy8gQWxsb3cgdXNlIG9mIGRlZmF1bHQgaW1wb3J0IHN5bnRheCBpbiBUeXBlU2NyaXB0XHJcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBheGlvcztcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyoqXHJcbiAqIEEgYENhbmNlbGAgaXMgYW4gb2JqZWN0IHRoYXQgaXMgdGhyb3duIHdoZW4gYW4gb3BlcmF0aW9uIGlzIGNhbmNlbGVkLlxyXG4gKlxyXG4gKiBAY2xhc3NcclxuICogQHBhcmFtIHtzdHJpbmc9fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxyXG4gKi9cclxuZnVuY3Rpb24gQ2FuY2VsKG1lc3NhZ2UpIHtcclxuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xyXG59XHJcblxyXG5DYW5jZWwucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcbiAgcmV0dXJuICdDYW5jZWwnICsgKHRoaXMubWVzc2FnZSA/ICc6ICcgKyB0aGlzLm1lc3NhZ2UgOiAnJyk7XHJcbn07XHJcblxyXG5DYW5jZWwucHJvdG90eXBlLl9fQ0FOQ0VMX18gPSB0cnVlO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWw7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBDYW5jZWwgPSByZXF1aXJlKCcuL0NhbmNlbCcpO1xyXG5cclxuLyoqXHJcbiAqIEEgYENhbmNlbFRva2VuYCBpcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byByZXF1ZXN0IGNhbmNlbGxhdGlvbiBvZiBhbiBvcGVyYXRpb24uXHJcbiAqXHJcbiAqIEBjbGFzc1xyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBleGVjdXRvciBUaGUgZXhlY3V0b3IgZnVuY3Rpb24uXHJcbiAqL1xyXG5mdW5jdGlvbiBDYW5jZWxUb2tlbihleGVjdXRvcikge1xyXG4gIGlmICh0eXBlb2YgZXhlY3V0b3IgIT09ICdmdW5jdGlvbicpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4ZWN1dG9yIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcclxuICB9XHJcblxyXG4gIHZhciByZXNvbHZlUHJvbWlzZTtcclxuICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiBwcm9taXNlRXhlY3V0b3IocmVzb2x2ZSkge1xyXG4gICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xyXG4gIH0pO1xyXG5cclxuICB2YXIgdG9rZW4gPSB0aGlzO1xyXG4gIGV4ZWN1dG9yKGZ1bmN0aW9uIGNhbmNlbChtZXNzYWdlKSB7XHJcbiAgICBpZiAodG9rZW4ucmVhc29uKSB7XHJcbiAgICAgIC8vIENhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZFxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdG9rZW4ucmVhc29uID0gbmV3IENhbmNlbChtZXNzYWdlKTtcclxuICAgIHJlc29sdmVQcm9taXNlKHRva2VuLnJlYXNvbik7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxyXG4gKi9cclxuQ2FuY2VsVG9rZW4ucHJvdG90eXBlLnRocm93SWZSZXF1ZXN0ZWQgPSBmdW5jdGlvbiB0aHJvd0lmUmVxdWVzdGVkKCkge1xyXG4gIGlmICh0aGlzLnJlYXNvbikge1xyXG4gICAgdGhyb3cgdGhpcy5yZWFzb247XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYSBuZXcgYENhbmNlbFRva2VuYCBhbmQgYSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCxcclxuICogY2FuY2VscyB0aGUgYENhbmNlbFRva2VuYC5cclxuICovXHJcbkNhbmNlbFRva2VuLnNvdXJjZSA9IGZ1bmN0aW9uIHNvdXJjZSgpIHtcclxuICB2YXIgY2FuY2VsO1xyXG4gIHZhciB0b2tlbiA9IG5ldyBDYW5jZWxUb2tlbihmdW5jdGlvbiBleGVjdXRvcihjKSB7XHJcbiAgICBjYW5jZWwgPSBjO1xyXG4gIH0pO1xyXG4gIHJldHVybiB7XHJcbiAgICB0b2tlbjogdG9rZW4sXHJcbiAgICBjYW5jZWw6IGNhbmNlbFxyXG4gIH07XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbFRva2VuO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XHJcbiAgcmV0dXJuICEhKHZhbHVlICYmIHZhbHVlLl9fQ0FOQ0VMX18pO1xyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XHJcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcclxudmFyIEludGVyY2VwdG9yTWFuYWdlciA9IHJlcXVpcmUoJy4vSW50ZXJjZXB0b3JNYW5hZ2VyJyk7XHJcbnZhciBkaXNwYXRjaFJlcXVlc3QgPSByZXF1aXJlKCcuL2Rpc3BhdGNoUmVxdWVzdCcpO1xyXG52YXIgbWVyZ2VDb25maWcgPSByZXF1aXJlKCcuL21lcmdlQ29uZmlnJyk7XHJcblxyXG4vKipcclxuICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZUNvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxyXG4gKi9cclxuZnVuY3Rpb24gQXhpb3MoaW5zdGFuY2VDb25maWcpIHtcclxuICB0aGlzLmRlZmF1bHRzID0gaW5zdGFuY2VDb25maWc7XHJcbiAgdGhpcy5pbnRlcmNlcHRvcnMgPSB7XHJcbiAgICByZXF1ZXN0OiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKCksXHJcbiAgICByZXNwb25zZTogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpXHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIERpc3BhdGNoIGEgcmVxdWVzdFxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcgc3BlY2lmaWMgZm9yIHRoaXMgcmVxdWVzdCAobWVyZ2VkIHdpdGggdGhpcy5kZWZhdWx0cylcclxuICovXHJcbkF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24gcmVxdWVzdChjb25maWcpIHtcclxuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cclxuICAvLyBBbGxvdyBmb3IgYXhpb3MoJ2V4YW1wbGUvdXJsJ1ssIGNvbmZpZ10pIGEgbGEgZmV0Y2ggQVBJXHJcbiAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XHJcbiAgICBjb25maWcgPSBhcmd1bWVudHNbMV0gfHwge307XHJcbiAgICBjb25maWcudXJsID0gYXJndW1lbnRzWzBdO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XHJcbiAgfVxyXG5cclxuICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xyXG5cclxuICAvLyBTZXQgY29uZmlnLm1ldGhvZFxyXG4gIGlmIChjb25maWcubWV0aG9kKSB7XHJcbiAgICBjb25maWcubWV0aG9kID0gY29uZmlnLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xyXG4gIH0gZWxzZSBpZiAodGhpcy5kZWZhdWx0cy5tZXRob2QpIHtcclxuICAgIGNvbmZpZy5tZXRob2QgPSB0aGlzLmRlZmF1bHRzLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25maWcubWV0aG9kID0gJ2dldCc7XHJcbiAgfVxyXG5cclxuICAvLyBIb29rIHVwIGludGVyY2VwdG9ycyBtaWRkbGV3YXJlXHJcbiAgdmFyIGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdCwgdW5kZWZpbmVkXTtcclxuICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShjb25maWcpO1xyXG5cclxuICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcclxuICAgIGNoYWluLnVuc2hpZnQoaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XHJcbiAgfSk7XHJcblxyXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLmZvckVhY2goZnVuY3Rpb24gcHVzaFJlc3BvbnNlSW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XHJcbiAgICBjaGFpbi5wdXNoKGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xyXG4gIH0pO1xyXG5cclxuICB3aGlsZSAoY2hhaW4ubGVuZ3RoKSB7XHJcbiAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluLnNoaWZ0KCksIGNoYWluLnNoaWZ0KCkpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHByb21pc2U7XHJcbn07XHJcblxyXG5BeGlvcy5wcm90b3R5cGUuZ2V0VXJpID0gZnVuY3Rpb24gZ2V0VXJpKGNvbmZpZykge1xyXG4gIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XHJcbiAgcmV0dXJuIGJ1aWxkVVJMKGNvbmZpZy51cmwsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKS5yZXBsYWNlKC9eXFw/LywgJycpO1xyXG59O1xyXG5cclxuLy8gUHJvdmlkZSBhbGlhc2VzIGZvciBzdXBwb3J0ZWQgcmVxdWVzdCBtZXRob2RzXHJcbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAnb3B0aW9ucyddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xyXG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXHJcbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGNvbmZpZykge1xyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcclxuICAgICAgbWV0aG9kOiBtZXRob2QsXHJcbiAgICAgIHVybDogdXJsXHJcbiAgICB9KSk7XHJcbiAgfTtcclxufSk7XHJcblxyXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xyXG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXHJcbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGRhdGEsIGNvbmZpZykge1xyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcclxuICAgICAgbWV0aG9kOiBtZXRob2QsXHJcbiAgICAgIHVybDogdXJsLFxyXG4gICAgICBkYXRhOiBkYXRhXHJcbiAgICB9KSk7XHJcbiAgfTtcclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEF4aW9zO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XHJcblxyXG5mdW5jdGlvbiBJbnRlcmNlcHRvck1hbmFnZXIoKSB7XHJcbiAgdGhpcy5oYW5kbGVycyA9IFtdO1xyXG59XHJcblxyXG4vKipcclxuICogQWRkIGEgbmV3IGludGVyY2VwdG9yIHRvIHRoZSBzdGFja1xyXG4gKlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdWxmaWxsZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgdGhlbmAgZm9yIGEgYFByb21pc2VgXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHJlamVjdGAgZm9yIGEgYFByb21pc2VgXHJcbiAqXHJcbiAqIEByZXR1cm4ge051bWJlcn0gQW4gSUQgdXNlZCB0byByZW1vdmUgaW50ZXJjZXB0b3IgbGF0ZXJcclxuICovXHJcbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gdXNlKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpIHtcclxuICB0aGlzLmhhbmRsZXJzLnB1c2goe1xyXG4gICAgZnVsZmlsbGVkOiBmdWxmaWxsZWQsXHJcbiAgICByZWplY3RlZDogcmVqZWN0ZWRcclxuICB9KTtcclxuICByZXR1cm4gdGhpcy5oYW5kbGVycy5sZW5ndGggLSAxO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSBhbiBpbnRlcmNlcHRvciBmcm9tIHRoZSBzdGFja1xyXG4gKlxyXG4gKiBAcGFyYW0ge051bWJlcn0gaWQgVGhlIElEIHRoYXQgd2FzIHJldHVybmVkIGJ5IGB1c2VgXHJcbiAqL1xyXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmVqZWN0ID0gZnVuY3Rpb24gZWplY3QoaWQpIHtcclxuICBpZiAodGhpcy5oYW5kbGVyc1tpZF0pIHtcclxuICAgIHRoaXMuaGFuZGxlcnNbaWRdID0gbnVsbDtcclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogSXRlcmF0ZSBvdmVyIGFsbCB0aGUgcmVnaXN0ZXJlZCBpbnRlcmNlcHRvcnNcclxuICpcclxuICogVGhpcyBtZXRob2QgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3Igc2tpcHBpbmcgb3ZlciBhbnlcclxuICogaW50ZXJjZXB0b3JzIHRoYXQgbWF5IGhhdmUgYmVjb21lIGBudWxsYCBjYWxsaW5nIGBlamVjdGAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGludGVyY2VwdG9yXHJcbiAqL1xyXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiBmb3JFYWNoKGZuKSB7XHJcbiAgdXRpbHMuZm9yRWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbiBmb3JFYWNoSGFuZGxlcihoKSB7XHJcbiAgICBpZiAoaCAhPT0gbnVsbCkge1xyXG4gICAgICBmbihoKTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gSW50ZXJjZXB0b3JNYW5hZ2VyO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgaXNBYnNvbHV0ZVVSTCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTCcpO1xyXG52YXIgY29tYmluZVVSTHMgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2NvbWJpbmVVUkxzJyk7XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBiYXNlVVJMIHdpdGggdGhlIHJlcXVlc3RlZFVSTCxcclxuICogb25seSB3aGVuIHRoZSByZXF1ZXN0ZWRVUkwgaXMgbm90IGFscmVhZHkgYW4gYWJzb2x1dGUgVVJMLlxyXG4gKiBJZiB0aGUgcmVxdWVzdFVSTCBpcyBhYnNvbHV0ZSwgdGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSByZXF1ZXN0ZWRVUkwgdW50b3VjaGVkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcclxuICogQHBhcmFtIHtzdHJpbmd9IHJlcXVlc3RlZFVSTCBBYnNvbHV0ZSBvciByZWxhdGl2ZSBVUkwgdG8gY29tYmluZVxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgZnVsbCBwYXRoXHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkRnVsbFBhdGgoYmFzZVVSTCwgcmVxdWVzdGVkVVJMKSB7XHJcbiAgaWYgKGJhc2VVUkwgJiYgIWlzQWJzb2x1dGVVUkwocmVxdWVzdGVkVVJMKSkge1xyXG4gICAgcmV0dXJuIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlcXVlc3RlZFVSTCk7XHJcbiAgfVxyXG4gIHJldHVybiByZXF1ZXN0ZWRVUkw7XHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBlbmhhbmNlRXJyb3IgPSByZXF1aXJlKCcuL2VuaGFuY2VFcnJvcicpO1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgbWVzc2FnZSwgY29uZmlnLCBlcnJvciBjb2RlLCByZXF1ZXN0IGFuZCByZXNwb25zZS5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cclxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cclxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cclxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxyXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBjcmVhdGVkIGVycm9yLlxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVFcnJvcihtZXNzYWdlLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XHJcbiAgdmFyIGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xyXG4gIHJldHVybiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpO1xyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XHJcbnZhciB0cmFuc2Zvcm1EYXRhID0gcmVxdWlyZSgnLi90cmFuc2Zvcm1EYXRhJyk7XHJcbnZhciBpc0NhbmNlbCA9IHJlcXVpcmUoJy4uL2NhbmNlbC9pc0NhbmNlbCcpO1xyXG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLi9kZWZhdWx0cycpO1xyXG5cclxuLyoqXHJcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXHJcbiAqL1xyXG5mdW5jdGlvbiB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZykge1xyXG4gIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcclxuICAgIGNvbmZpZy5jYW5jZWxUb2tlbi50aHJvd0lmUmVxdWVzdGVkKCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogRGlzcGF0Y2ggYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyZWQgYWRhcHRlci5cclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHRoYXQgaXMgdG8gYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcclxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkaXNwYXRjaFJlcXVlc3QoY29uZmlnKSB7XHJcbiAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xyXG5cclxuICAvLyBFbnN1cmUgaGVhZGVycyBleGlzdFxyXG4gIGNvbmZpZy5oZWFkZXJzID0gY29uZmlnLmhlYWRlcnMgfHwge307XHJcblxyXG4gIC8vIFRyYW5zZm9ybSByZXF1ZXN0IGRhdGFcclxuICBjb25maWcuZGF0YSA9IHRyYW5zZm9ybURhdGEoXHJcbiAgICBjb25maWcuZGF0YSxcclxuICAgIGNvbmZpZy5oZWFkZXJzLFxyXG4gICAgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3RcclxuICApO1xyXG5cclxuICAvLyBGbGF0dGVuIGhlYWRlcnNcclxuICBjb25maWcuaGVhZGVycyA9IHV0aWxzLm1lcmdlKFxyXG4gICAgY29uZmlnLmhlYWRlcnMuY29tbW9uIHx8IHt9LFxyXG4gICAgY29uZmlnLmhlYWRlcnNbY29uZmlnLm1ldGhvZF0gfHwge30sXHJcbiAgICBjb25maWcuaGVhZGVyc1xyXG4gICk7XHJcblxyXG4gIHV0aWxzLmZvckVhY2goXHJcbiAgICBbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdjb21tb24nXSxcclxuICAgIGZ1bmN0aW9uIGNsZWFuSGVhZGVyQ29uZmlnKG1ldGhvZCkge1xyXG4gICAgICBkZWxldGUgY29uZmlnLmhlYWRlcnNbbWV0aG9kXTtcclxuICAgIH1cclxuICApO1xyXG5cclxuICB2YXIgYWRhcHRlciA9IGNvbmZpZy5hZGFwdGVyIHx8IGRlZmF1bHRzLmFkYXB0ZXI7XHJcblxyXG4gIHJldHVybiBhZGFwdGVyKGNvbmZpZykudGhlbihmdW5jdGlvbiBvbkFkYXB0ZXJSZXNvbHV0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XHJcblxyXG4gICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcclxuICAgIHJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxyXG4gICAgICByZXNwb25zZS5kYXRhLFxyXG4gICAgICByZXNwb25zZS5oZWFkZXJzLFxyXG4gICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gIH0sIGZ1bmN0aW9uIG9uQWRhcHRlclJlamVjdGlvbihyZWFzb24pIHtcclxuICAgIGlmICghaXNDYW5jZWwocmVhc29uKSkge1xyXG4gICAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XHJcblxyXG4gICAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxyXG4gICAgICBpZiAocmVhc29uICYmIHJlYXNvbi5yZXNwb25zZSkge1xyXG4gICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcclxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmhlYWRlcnMsXHJcbiAgICAgICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XHJcbiAgfSk7XHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8qKlxyXG4gKiBVcGRhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIGNvbmZpZywgZXJyb3IgY29kZSwgYW5kIHJlc3BvbnNlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJvciBUaGUgZXJyb3IgdG8gdXBkYXRlLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cclxuICogQHJldHVybnMge0Vycm9yfSBUaGUgZXJyb3IuXHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xyXG4gIGVycm9yLmNvbmZpZyA9IGNvbmZpZztcclxuICBpZiAoY29kZSkge1xyXG4gICAgZXJyb3IuY29kZSA9IGNvZGU7XHJcbiAgfVxyXG5cclxuICBlcnJvci5yZXF1ZXN0ID0gcmVxdWVzdDtcclxuICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xyXG4gIGVycm9yLmlzQXhpb3NFcnJvciA9IHRydWU7XHJcblxyXG4gIGVycm9yLnRvSlNPTiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLy8gU3RhbmRhcmRcclxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxyXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgIC8vIE1pY3Jvc29mdFxyXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcclxuICAgICAgbnVtYmVyOiB0aGlzLm51bWJlcixcclxuICAgICAgLy8gTW96aWxsYVxyXG4gICAgICBmaWxlTmFtZTogdGhpcy5maWxlTmFtZSxcclxuICAgICAgbGluZU51bWJlcjogdGhpcy5saW5lTnVtYmVyLFxyXG4gICAgICBjb2x1bW5OdW1iZXI6IHRoaXMuY29sdW1uTnVtYmVyLFxyXG4gICAgICBzdGFjazogdGhpcy5zdGFjayxcclxuICAgICAgLy8gQXhpb3NcclxuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZyxcclxuICAgICAgY29kZTogdGhpcy5jb2RlXHJcbiAgICB9O1xyXG4gIH07XHJcbiAgcmV0dXJuIGVycm9yO1xyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xyXG5cclxuLyoqXHJcbiAqIENvbmZpZy1zcGVjaWZpYyBtZXJnZS1mdW5jdGlvbiB3aGljaCBjcmVhdGVzIGEgbmV3IGNvbmZpZy1vYmplY3RcclxuICogYnkgbWVyZ2luZyB0d28gY29uZmlndXJhdGlvbiBvYmplY3RzIHRvZ2V0aGVyLlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMVxyXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMlxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBOZXcgb2JqZWN0IHJlc3VsdGluZyBmcm9tIG1lcmdpbmcgY29uZmlnMiB0byBjb25maWcxXHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1lcmdlQ29uZmlnKGNvbmZpZzEsIGNvbmZpZzIpIHtcclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cclxuICBjb25maWcyID0gY29uZmlnMiB8fCB7fTtcclxuICB2YXIgY29uZmlnID0ge307XHJcblxyXG4gIHZhciB2YWx1ZUZyb21Db25maWcyS2V5cyA9IFsndXJsJywgJ21ldGhvZCcsICdwYXJhbXMnLCAnZGF0YSddO1xyXG4gIHZhciBtZXJnZURlZXBQcm9wZXJ0aWVzS2V5cyA9IFsnaGVhZGVycycsICdhdXRoJywgJ3Byb3h5J107XHJcbiAgdmFyIGRlZmF1bHRUb0NvbmZpZzJLZXlzID0gW1xyXG4gICAgJ2Jhc2VVUkwnLCAndXJsJywgJ3RyYW5zZm9ybVJlcXVlc3QnLCAndHJhbnNmb3JtUmVzcG9uc2UnLCAncGFyYW1zU2VyaWFsaXplcicsXHJcbiAgICAndGltZW91dCcsICd3aXRoQ3JlZGVudGlhbHMnLCAnYWRhcHRlcicsICdyZXNwb25zZVR5cGUnLCAneHNyZkNvb2tpZU5hbWUnLFxyXG4gICAgJ3hzcmZIZWFkZXJOYW1lJywgJ29uVXBsb2FkUHJvZ3Jlc3MnLCAnb25Eb3dubG9hZFByb2dyZXNzJyxcclxuICAgICdtYXhDb250ZW50TGVuZ3RoJywgJ3ZhbGlkYXRlU3RhdHVzJywgJ21heFJlZGlyZWN0cycsICdodHRwQWdlbnQnLFxyXG4gICAgJ2h0dHBzQWdlbnQnLCAnY2FuY2VsVG9rZW4nLCAnc29ja2V0UGF0aCdcclxuICBdO1xyXG5cclxuICB1dGlscy5mb3JFYWNoKHZhbHVlRnJvbUNvbmZpZzJLZXlzLCBmdW5jdGlvbiB2YWx1ZUZyb21Db25maWcyKHByb3ApIHtcclxuICAgIGlmICh0eXBlb2YgY29uZmlnMltwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgdXRpbHMuZm9yRWFjaChtZXJnZURlZXBQcm9wZXJ0aWVzS2V5cywgZnVuY3Rpb24gbWVyZ2VEZWVwUHJvcGVydGllcyhwcm9wKSB7XHJcbiAgICBpZiAodXRpbHMuaXNPYmplY3QoY29uZmlnMltwcm9wXSkpIHtcclxuICAgICAgY29uZmlnW3Byb3BdID0gdXRpbHMuZGVlcE1lcmdlKGNvbmZpZzFbcHJvcF0sIGNvbmZpZzJbcHJvcF0pO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnMltwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcclxuICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QoY29uZmlnMVtwcm9wXSkpIHtcclxuICAgICAgY29uZmlnW3Byb3BdID0gdXRpbHMuZGVlcE1lcmdlKGNvbmZpZzFbcHJvcF0pO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnMVtwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMVtwcm9wXTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgdXRpbHMuZm9yRWFjaChkZWZhdWx0VG9Db25maWcyS2V5cywgZnVuY3Rpb24gZGVmYXVsdFRvQ29uZmlnMihwcm9wKSB7XHJcbiAgICBpZiAodHlwZW9mIGNvbmZpZzJbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzJbcHJvcF07XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcxW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcxW3Byb3BdO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICB2YXIgYXhpb3NLZXlzID0gdmFsdWVGcm9tQ29uZmlnMktleXNcclxuICAgIC5jb25jYXQobWVyZ2VEZWVwUHJvcGVydGllc0tleXMpXHJcbiAgICAuY29uY2F0KGRlZmF1bHRUb0NvbmZpZzJLZXlzKTtcclxuXHJcbiAgdmFyIG90aGVyS2V5cyA9IE9iamVjdFxyXG4gICAgLmtleXMoY29uZmlnMilcclxuICAgIC5maWx0ZXIoZnVuY3Rpb24gZmlsdGVyQXhpb3NLZXlzKGtleSkge1xyXG4gICAgICByZXR1cm4gYXhpb3NLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTE7XHJcbiAgICB9KTtcclxuXHJcbiAgdXRpbHMuZm9yRWFjaChvdGhlcktleXMsIGZ1bmN0aW9uIG90aGVyS2V5c0RlZmF1bHRUb0NvbmZpZzIocHJvcCkge1xyXG4gICAgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcyW3Byb3BdO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnMVtwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMVtwcm9wXTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGNvbmZpZztcclxufTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi9jcmVhdGVFcnJvcicpO1xyXG5cclxuLyoqXHJcbiAqIFJlc29sdmUgb3IgcmVqZWN0IGEgUHJvbWlzZSBiYXNlZCBvbiByZXNwb25zZSBzdGF0dXMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgQSBmdW5jdGlvbiB0aGF0IHJlc29sdmVzIHRoZSBwcm9taXNlLlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgQSBmdW5jdGlvbiB0aGF0IHJlamVjdHMgdGhlIHByb21pc2UuXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2UuXHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKSB7XHJcbiAgdmFyIHZhbGlkYXRlU3RhdHVzID0gcmVzcG9uc2UuY29uZmlnLnZhbGlkYXRlU3RhdHVzO1xyXG4gIGlmICghdmFsaWRhdGVTdGF0dXMgfHwgdmFsaWRhdGVTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKSkge1xyXG4gICAgcmVzb2x2ZShyZXNwb25zZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlamVjdChjcmVhdGVFcnJvcihcclxuICAgICAgJ1JlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGUgJyArIHJlc3BvbnNlLnN0YXR1cyxcclxuICAgICAgcmVzcG9uc2UuY29uZmlnLFxyXG4gICAgICBudWxsLFxyXG4gICAgICByZXNwb25zZS5yZXF1ZXN0LFxyXG4gICAgICByZXNwb25zZVxyXG4gICAgKSk7XHJcbiAgfVxyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XHJcblxyXG4vKipcclxuICogVHJhbnNmb3JtIHRoZSBkYXRhIGZvciBhIHJlcXVlc3Qgb3IgYSByZXNwb25zZVxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGRhdGEgVGhlIGRhdGEgdG8gYmUgdHJhbnNmb3JtZWRcclxuICogQHBhcmFtIHtBcnJheX0gaGVhZGVycyBUaGUgaGVhZGVycyBmb3IgdGhlIHJlcXVlc3Qgb3IgcmVzcG9uc2VcclxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gZm5zIEEgc2luZ2xlIGZ1bmN0aW9uIG9yIEFycmF5IG9mIGZ1bmN0aW9uc1xyXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlc3VsdGluZyB0cmFuc2Zvcm1lZCBkYXRhXHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRyYW5zZm9ybURhdGEoZGF0YSwgaGVhZGVycywgZm5zKSB7XHJcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXHJcbiAgdXRpbHMuZm9yRWFjaChmbnMsIGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xyXG4gICAgZGF0YSA9IGZuKGRhdGEsIGhlYWRlcnMpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gZGF0YTtcclxufTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xyXG52YXIgbm9ybWFsaXplSGVhZGVyTmFtZSA9IHJlcXVpcmUoJy4vaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lJyk7XHJcblxyXG52YXIgREVGQVVMVF9DT05URU5UX1RZUEUgPSB7XHJcbiAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXHJcbn07XHJcblxyXG5mdW5jdGlvbiBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgdmFsdWUpIHtcclxuICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnMpICYmIHV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSkge1xyXG4gICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSB2YWx1ZTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldERlZmF1bHRBZGFwdGVyKCkge1xyXG4gIHZhciBhZGFwdGVyO1xyXG4gIGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAvLyBGb3IgYnJvd3NlcnMgdXNlIFhIUiBhZGFwdGVyXHJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy94aHInKTtcclxuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwocHJvY2VzcykgPT09ICdbb2JqZWN0IHByb2Nlc3NdJykge1xyXG4gICAgLy8gRm9yIG5vZGUgdXNlIEhUVFAgYWRhcHRlclxyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMvaHR0cCcpO1xyXG4gIH1cclxuICByZXR1cm4gYWRhcHRlcjtcclxufVxyXG5cclxudmFyIGRlZmF1bHRzID0ge1xyXG4gIGFkYXB0ZXI6IGdldERlZmF1bHRBZGFwdGVyKCksXHJcblxyXG4gIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXF1ZXN0KGRhdGEsIGhlYWRlcnMpIHtcclxuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0FjY2VwdCcpO1xyXG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQ29udGVudC1UeXBlJyk7XHJcbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShkYXRhKSB8fFxyXG4gICAgICB1dGlscy5pc0FycmF5QnVmZmVyKGRhdGEpIHx8XHJcbiAgICAgIHV0aWxzLmlzQnVmZmVyKGRhdGEpIHx8XHJcbiAgICAgIHV0aWxzLmlzU3RyZWFtKGRhdGEpIHx8XHJcbiAgICAgIHV0aWxzLmlzRmlsZShkYXRhKSB8fFxyXG4gICAgICB1dGlscy5pc0Jsb2IoZGF0YSlcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyVmlldyhkYXRhKSkge1xyXG4gICAgICByZXR1cm4gZGF0YS5idWZmZXI7XHJcbiAgICB9XHJcbiAgICBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMoZGF0YSkpIHtcclxuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcpO1xyXG4gICAgICByZXR1cm4gZGF0YS50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KGRhdGEpKSB7XHJcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04Jyk7XHJcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcclxuICAgIH1cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1dLFxyXG5cclxuICB0cmFuc2Zvcm1SZXNwb25zZTogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlKGRhdGEpIHtcclxuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xyXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xyXG4gICAgICB9IGNhdGNoIChlKSB7IC8qIElnbm9yZSAqLyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XSxcclxuXHJcbiAgLyoqXHJcbiAgICogQSB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyB0byBhYm9ydCBhIHJlcXVlc3QuIElmIHNldCB0byAwIChkZWZhdWx0KSBhXHJcbiAgICogdGltZW91dCBpcyBub3QgY3JlYXRlZC5cclxuICAgKi9cclxuICB0aW1lb3V0OiAwLFxyXG5cclxuICB4c3JmQ29va2llTmFtZTogJ1hTUkYtVE9LRU4nLFxyXG4gIHhzcmZIZWFkZXJOYW1lOiAnWC1YU1JGLVRPS0VOJyxcclxuXHJcbiAgbWF4Q29udGVudExlbmd0aDogLTEsXHJcblxyXG4gIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiB2YWxpZGF0ZVN0YXR1cyhzdGF0dXMpIHtcclxuICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMDtcclxuICB9XHJcbn07XHJcblxyXG5kZWZhdWx0cy5oZWFkZXJzID0ge1xyXG4gIGNvbW1vbjoge1xyXG4gICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXHJcbiAgfVxyXG59O1xyXG5cclxudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xyXG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHt9O1xyXG59KTtcclxuXHJcbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XHJcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0gdXRpbHMubWVyZ2UoREVGQVVMVF9DT05URU5UX1RZUEUpO1xyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZGVmYXVsdHM7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xyXG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKCkge1xyXG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcclxuICAgIH1cclxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnLCBhcmdzKTtcclxuICB9O1xyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XHJcblxyXG5mdW5jdGlvbiBlbmNvZGUodmFsKSB7XHJcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpLlxyXG4gICAgcmVwbGFjZSgvJTQwL2dpLCAnQCcpLlxyXG4gICAgcmVwbGFjZSgvJTNBL2dpLCAnOicpLlxyXG4gICAgcmVwbGFjZSgvJTI0L2csICckJykuXHJcbiAgICByZXBsYWNlKC8lMkMvZ2ksICcsJykuXHJcbiAgICByZXBsYWNlKC8lMjAvZywgJysnKS5cclxuICAgIHJlcGxhY2UoLyU1Qi9naSwgJ1snKS5cclxuICAgIHJlcGxhY2UoLyU1RC9naSwgJ10nKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEJ1aWxkIGEgVVJMIGJ5IGFwcGVuZGluZyBwYXJhbXMgdG8gdGhlIGVuZFxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBiYXNlIG9mIHRoZSB1cmwgKGUuZy4sIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbSlcclxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIFRoZSBwYXJhbXMgdG8gYmUgYXBwZW5kZWRcclxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGZvcm1hdHRlZCB1cmxcclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRVUkwodXJsLCBwYXJhbXMsIHBhcmFtc1NlcmlhbGl6ZXIpIHtcclxuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cclxuICBpZiAoIXBhcmFtcykge1xyXG4gICAgcmV0dXJuIHVybDtcclxuICB9XHJcblxyXG4gIHZhciBzZXJpYWxpemVkUGFyYW1zO1xyXG4gIGlmIChwYXJhbXNTZXJpYWxpemVyKSB7XHJcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zU2VyaWFsaXplcihwYXJhbXMpO1xyXG4gIH0gZWxzZSBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMocGFyYW1zKSkge1xyXG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtcy50b1N0cmluZygpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB2YXIgcGFydHMgPSBbXTtcclxuXHJcbiAgICB1dGlscy5mb3JFYWNoKHBhcmFtcywgZnVuY3Rpb24gc2VyaWFsaXplKHZhbCwga2V5KSB7XHJcbiAgICAgIGlmICh2YWwgPT09IG51bGwgfHwgdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh1dGlscy5pc0FycmF5KHZhbCkpIHtcclxuICAgICAgICBrZXkgPSBrZXkgKyAnW10nO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhbCA9IFt2YWxdO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB1dGlscy5mb3JFYWNoKHZhbCwgZnVuY3Rpb24gcGFyc2VWYWx1ZSh2KSB7XHJcbiAgICAgICAgaWYgKHV0aWxzLmlzRGF0ZSh2KSkge1xyXG4gICAgICAgICAgdiA9IHYudG9JU09TdHJpbmcoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KHYpKSB7XHJcbiAgICAgICAgICB2ID0gSlNPTi5zdHJpbmdpZnkodik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhcnRzLnB1c2goZW5jb2RlKGtleSkgKyAnPScgKyBlbmNvZGUodikpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJ0cy5qb2luKCcmJyk7XHJcbiAgfVxyXG5cclxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xyXG4gICAgdmFyIGhhc2htYXJrSW5kZXggPSB1cmwuaW5kZXhPZignIycpO1xyXG4gICAgaWYgKGhhc2htYXJrSW5kZXggIT09IC0xKSB7XHJcbiAgICAgIHVybCA9IHVybC5zbGljZSgwLCBoYXNobWFya0luZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHNlcmlhbGl6ZWRQYXJhbXM7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdXJsO1xyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBzcGVjaWZpZWQgVVJMc1xyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcclxuICogQHBhcmFtIHtzdHJpbmd9IHJlbGF0aXZlVVJMIFRoZSByZWxhdGl2ZSBVUkxcclxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIFVSTFxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZWxhdGl2ZVVSTCkge1xyXG4gIHJldHVybiByZWxhdGl2ZVVSTFxyXG4gICAgPyBiYXNlVVJMLnJlcGxhY2UoL1xcLyskLywgJycpICsgJy8nICsgcmVsYXRpdmVVUkwucmVwbGFjZSgvXlxcLysvLCAnJylcclxuICAgIDogYmFzZVVSTDtcclxufTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSAoXHJcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XHJcblxyXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBzdXBwb3J0IGRvY3VtZW50LmNvb2tpZVxyXG4gICAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUobmFtZSwgdmFsdWUsIGV4cGlyZXMsIHBhdGgsIGRvbWFpbiwgc2VjdXJlKSB7XHJcbiAgICAgICAgICB2YXIgY29va2llID0gW107XHJcbiAgICAgICAgICBjb29raWUucHVzaChuYW1lICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XHJcblxyXG4gICAgICAgICAgaWYgKHV0aWxzLmlzTnVtYmVyKGV4cGlyZXMpKSB7XHJcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdleHBpcmVzPScgKyBuZXcgRGF0ZShleHBpcmVzKS50b0dNVFN0cmluZygpKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcocGF0aCkpIHtcclxuICAgICAgICAgICAgY29va2llLnB1c2goJ3BhdGg9JyArIHBhdGgpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkb21haW4pKSB7XHJcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKHNlY3VyZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBjb29raWUucHVzaCgnc2VjdXJlJyk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llLmpvaW4oJzsgJyk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChuYW1lKSB7XHJcbiAgICAgICAgICB2YXIgbWF0Y2ggPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cCgnKF58O1xcXFxzKikoJyArIG5hbWUgKyAnKT0oW147XSopJykpO1xyXG4gICAgICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XHJcbiAgICAgICAgICB0aGlzLndyaXRlKG5hbWUsICcnLCBEYXRlLm5vdygpIC0gODY0MDAwMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH0pKCkgOlxyXG5cclxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXHJcbiAgICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxyXG4gICAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQoKSB7IHJldHVybiBudWxsOyB9LFxyXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cclxuICAgICAgfTtcclxuICAgIH0pKClcclxuKTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyoqXHJcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBVUkwgdG8gdGVzdFxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQWJzb2x1dGVVUkwodXJsKSB7XHJcbiAgLy8gQSBVUkwgaXMgY29uc2lkZXJlZCBhYnNvbHV0ZSBpZiBpdCBiZWdpbnMgd2l0aCBcIjxzY2hlbWU+Oi8vXCIgb3IgXCIvL1wiIChwcm90b2NvbC1yZWxhdGl2ZSBVUkwpLlxyXG4gIC8vIFJGQyAzOTg2IGRlZmluZXMgc2NoZW1lIG5hbWUgYXMgYSBzZXF1ZW5jZSBvZiBjaGFyYWN0ZXJzIGJlZ2lubmluZyB3aXRoIGEgbGV0dGVyIGFuZCBmb2xsb3dlZFxyXG4gIC8vIGJ5IGFueSBjb21iaW5hdGlvbiBvZiBsZXR0ZXJzLCBkaWdpdHMsIHBsdXMsIHBlcmlvZCwgb3IgaHlwaGVuLlxyXG4gIHJldHVybiAvXihbYS16XVthLXpcXGRcXCtcXC1cXC5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcclxufTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSAoXHJcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XHJcblxyXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBoYXZlIGZ1bGwgc3VwcG9ydCBvZiB0aGUgQVBJcyBuZWVkZWQgdG8gdGVzdFxyXG4gIC8vIHdoZXRoZXIgdGhlIHJlcXVlc3QgVVJMIGlzIG9mIHRoZSBzYW1lIG9yaWdpbiBhcyBjdXJyZW50IGxvY2F0aW9uLlxyXG4gICAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcclxuICAgICAgdmFyIG1zaWUgPSAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG4gICAgICB2YXIgdXJsUGFyc2luZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgIHZhciBvcmlnaW5VUkw7XHJcblxyXG4gICAgICAvKipcclxuICAgICogUGFyc2UgYSBVUkwgdG8gZGlzY292ZXIgaXQncyBjb21wb25lbnRzXHJcbiAgICAqXHJcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIFVSTCB0byBiZSBwYXJzZWRcclxuICAgICogQHJldHVybnMge09iamVjdH1cclxuICAgICovXHJcbiAgICAgIGZ1bmN0aW9uIHJlc29sdmVVUkwodXJsKSB7XHJcbiAgICAgICAgdmFyIGhyZWYgPSB1cmw7XHJcblxyXG4gICAgICAgIGlmIChtc2llKSB7XHJcbiAgICAgICAgLy8gSUUgbmVlZHMgYXR0cmlidXRlIHNldCB0d2ljZSB0byBub3JtYWxpemUgcHJvcGVydGllc1xyXG4gICAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XHJcbiAgICAgICAgICBocmVmID0gdXJsUGFyc2luZ05vZGUuaHJlZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xyXG5cclxuICAgICAgICAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGhyZWY6IHVybFBhcnNpbmdOb2RlLmhyZWYsXHJcbiAgICAgICAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxyXG4gICAgICAgICAgaG9zdDogdXJsUGFyc2luZ05vZGUuaG9zdCxcclxuICAgICAgICAgIHNlYXJjaDogdXJsUGFyc2luZ05vZGUuc2VhcmNoID8gdXJsUGFyc2luZ05vZGUuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykgOiAnJyxcclxuICAgICAgICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXHJcbiAgICAgICAgICBob3N0bmFtZTogdXJsUGFyc2luZ05vZGUuaG9zdG5hbWUsXHJcbiAgICAgICAgICBwb3J0OiB1cmxQYXJzaW5nTm9kZS5wb3J0LFxyXG4gICAgICAgICAgcGF0aG5hbWU6ICh1cmxQYXJzaW5nTm9kZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJykgP1xyXG4gICAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZSA6XHJcbiAgICAgICAgICAgICcvJyArIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgb3JpZ2luVVJMID0gcmVzb2x2ZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcblxyXG4gICAgICAvKipcclxuICAgICogRGV0ZXJtaW5lIGlmIGEgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgbG9jYXRpb25cclxuICAgICpcclxuICAgICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RVUkwgVGhlIFVSTCB0byB0ZXN0XHJcbiAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luLCBvdGhlcndpc2UgZmFsc2VcclxuICAgICovXHJcbiAgICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4ocmVxdWVzdFVSTCkge1xyXG4gICAgICAgIHZhciBwYXJzZWQgPSAodXRpbHMuaXNTdHJpbmcocmVxdWVzdFVSTCkpID8gcmVzb2x2ZVVSTChyZXF1ZXN0VVJMKSA6IHJlcXVlc3RVUkw7XHJcbiAgICAgICAgcmV0dXJuIChwYXJzZWQucHJvdG9jb2wgPT09IG9yaWdpblVSTC5wcm90b2NvbCAmJlxyXG4gICAgICAgICAgICBwYXJzZWQuaG9zdCA9PT0gb3JpZ2luVVJMLmhvc3QpO1xyXG4gICAgICB9O1xyXG4gICAgfSkoKSA6XHJcblxyXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudnMgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXHJcbiAgICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xyXG4gICAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9O1xyXG4gICAgfSkoKVxyXG4pO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsIG5vcm1hbGl6ZWROYW1lKSB7XHJcbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLCBmdW5jdGlvbiBwcm9jZXNzSGVhZGVyKHZhbHVlLCBuYW1lKSB7XHJcbiAgICBpZiAobmFtZSAhPT0gbm9ybWFsaXplZE5hbWUgJiYgbmFtZS50b1VwcGVyQ2FzZSgpID09PSBub3JtYWxpemVkTmFtZS50b1VwcGVyQ2FzZSgpKSB7XHJcbiAgICAgIGhlYWRlcnNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XHJcbiAgICAgIGRlbGV0ZSBoZWFkZXJzW25hbWVdO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XHJcblxyXG4vLyBIZWFkZXJzIHdob3NlIGR1cGxpY2F0ZXMgYXJlIGlnbm9yZWQgYnkgbm9kZVxyXG4vLyBjLmYuIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvaHR0cC5odG1sI2h0dHBfbWVzc2FnZV9oZWFkZXJzXHJcbnZhciBpZ25vcmVEdXBsaWNhdGVPZiA9IFtcclxuICAnYWdlJywgJ2F1dGhvcml6YXRpb24nLCAnY29udGVudC1sZW5ndGgnLCAnY29udGVudC10eXBlJywgJ2V0YWcnLFxyXG4gICdleHBpcmVzJywgJ2Zyb20nLCAnaG9zdCcsICdpZi1tb2RpZmllZC1zaW5jZScsICdpZi11bm1vZGlmaWVkLXNpbmNlJyxcclxuICAnbGFzdC1tb2RpZmllZCcsICdsb2NhdGlvbicsICdtYXgtZm9yd2FyZHMnLCAncHJveHktYXV0aG9yaXphdGlvbicsXHJcbiAgJ3JlZmVyZXInLCAncmV0cnktYWZ0ZXInLCAndXNlci1hZ2VudCdcclxuXTtcclxuXHJcbi8qKlxyXG4gKiBQYXJzZSBoZWFkZXJzIGludG8gYW4gb2JqZWN0XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBEYXRlOiBXZWQsIDI3IEF1ZyAyMDE0IDA4OjU4OjQ5IEdNVFxyXG4gKiBDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb25cclxuICogQ29ubmVjdGlvbjoga2VlcC1hbGl2ZVxyXG4gKiBUcmFuc2Zlci1FbmNvZGluZzogY2h1bmtlZFxyXG4gKiBgYGBcclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGhlYWRlcnMgSGVhZGVycyBuZWVkaW5nIHRvIGJlIHBhcnNlZFxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBIZWFkZXJzIHBhcnNlZCBpbnRvIGFuIG9iamVjdFxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUhlYWRlcnMoaGVhZGVycykge1xyXG4gIHZhciBwYXJzZWQgPSB7fTtcclxuICB2YXIga2V5O1xyXG4gIHZhciB2YWw7XHJcbiAgdmFyIGk7XHJcblxyXG4gIGlmICghaGVhZGVycykgeyByZXR1cm4gcGFyc2VkOyB9XHJcblxyXG4gIHV0aWxzLmZvckVhY2goaGVhZGVycy5zcGxpdCgnXFxuJyksIGZ1bmN0aW9uIHBhcnNlcihsaW5lKSB7XHJcbiAgICBpID0gbGluZS5pbmRleE9mKCc6Jyk7XHJcbiAgICBrZXkgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKDAsIGkpKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgdmFsID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cihpICsgMSkpO1xyXG5cclxuICAgIGlmIChrZXkpIHtcclxuICAgICAgaWYgKHBhcnNlZFtrZXldICYmIGlnbm9yZUR1cGxpY2F0ZU9mLmluZGV4T2Yoa2V5KSA+PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChrZXkgPT09ICdzZXQtY29va2llJykge1xyXG4gICAgICAgIHBhcnNlZFtrZXldID0gKHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gOiBbXSkuY29uY2F0KFt2YWxdKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwYXJzZWRba2V5XSA9IHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gKyAnLCAnICsgdmFsIDogdmFsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBwYXJzZWQ7XHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8qKlxyXG4gKiBTeW50YWN0aWMgc3VnYXIgZm9yIGludm9raW5nIGEgZnVuY3Rpb24gYW5kIGV4cGFuZGluZyBhbiBhcnJheSBmb3IgYXJndW1lbnRzLlxyXG4gKlxyXG4gKiBDb21tb24gdXNlIGNhc2Ugd291bGQgYmUgdG8gdXNlIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgLlxyXG4gKlxyXG4gKiAgYGBganNcclxuICogIGZ1bmN0aW9uIGYoeCwgeSwgeikge31cclxuICogIHZhciBhcmdzID0gWzEsIDIsIDNdO1xyXG4gKiAgZi5hcHBseShudWxsLCBhcmdzKTtcclxuICogIGBgYFxyXG4gKlxyXG4gKiBXaXRoIGBzcHJlYWRgIHRoaXMgZXhhbXBsZSBjYW4gYmUgcmUtd3JpdHRlbi5cclxuICpcclxuICogIGBgYGpzXHJcbiAqICBzcHJlYWQoZnVuY3Rpb24oeCwgeSwgeikge30pKFsxLCAyLCAzXSk7XHJcbiAqICBgYGBcclxuICpcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcclxuICogQHJldHVybnMge0Z1bmN0aW9ufVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzcHJlYWQoY2FsbGJhY2spIHtcclxuICByZXR1cm4gZnVuY3Rpb24gd3JhcChhcnIpIHtcclxuICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xyXG4gIH07XHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcclxuXHJcbi8qZ2xvYmFsIHRvU3RyaW5nOnRydWUqL1xyXG5cclxuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcclxuXHJcbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheSwgb3RoZXJ3aXNlIGZhbHNlXHJcbiAqL1xyXG5mdW5jdGlvbiBpc0FycmF5KHZhbCkge1xyXG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2VcclxuICovXHJcbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbCkge1xyXG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJztcclxufVxyXG5cclxuLyoqXHJcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQnVmZmVyXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcclxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxyXG4gKi9cclxuZnVuY3Rpb24gaXNCdWZmZXIodmFsKSB7XHJcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiAhaXNVbmRlZmluZWQodmFsKSAmJiB2YWwuY29uc3RydWN0b3IgIT09IG51bGwgJiYgIWlzVW5kZWZpbmVkKHZhbC5jb25zdHJ1Y3RvcilcclxuICAgICYmIHR5cGVvZiB2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgdmFsLmNvbnN0cnVjdG9yLmlzQnVmZmVyKHZhbCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlclxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XHJcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcclxuICovXHJcbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXIodmFsKSB7XHJcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcclxufVxyXG5cclxuLyoqXHJcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRm9ybURhdGFcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBGb3JtRGF0YSwgb3RoZXJ3aXNlIGZhbHNlXHJcbiAqL1xyXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbCkge1xyXG4gIHJldHVybiAodHlwZW9mIEZvcm1EYXRhICE9PSAndW5kZWZpbmVkJykgJiYgKHZhbCBpbnN0YW5jZW9mIEZvcm1EYXRhKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlclxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XHJcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXHJcbiAqL1xyXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyVmlldyh2YWwpIHtcclxuICB2YXIgcmVzdWx0O1xyXG4gIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykgJiYgKEFycmF5QnVmZmVyLmlzVmlldykpIHtcclxuICAgIHJlc3VsdCA9IEFycmF5QnVmZmVyLmlzVmlldyh2YWwpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXN1bHQgPSAodmFsKSAmJiAodmFsLmJ1ZmZlcikgJiYgKHZhbC5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcik7XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XHJcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcclxuICovXHJcbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbCkge1xyXG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcclxufVxyXG5cclxuLyoqXHJcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgTnVtYmVyXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcclxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBOdW1iZXIsIG90aGVyd2lzZSBmYWxzZVxyXG4gKi9cclxuZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XHJcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdudW1iZXInO1xyXG59XHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gT2JqZWN0XHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcclxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcclxuICovXHJcbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xyXG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIERhdGVcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxyXG4gKi9cclxuZnVuY3Rpb24gaXNEYXRlKHZhbCkge1xyXG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IERhdGVdJztcclxufVxyXG5cclxuLyoqXHJcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRmlsZVxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XHJcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRmlsZSwgb3RoZXJ3aXNlIGZhbHNlXHJcbiAqL1xyXG5mdW5jdGlvbiBpc0ZpbGUodmFsKSB7XHJcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRmlsZV0nO1xyXG59XHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCbG9iXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcclxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCbG9iLCBvdGhlcndpc2UgZmFsc2VcclxuICovXHJcbmZ1bmN0aW9uIGlzQmxvYih2YWwpIHtcclxuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBCbG9iXSc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZ1bmN0aW9uXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcclxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXHJcbiAqL1xyXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbCkge1xyXG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmVhbVxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XHJcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyZWFtLCBvdGhlcndpc2UgZmFsc2VcclxuICovXHJcbmZ1bmN0aW9uIGlzU3RyZWFtKHZhbCkge1xyXG4gIHJldHVybiBpc09iamVjdCh2YWwpICYmIGlzRnVuY3Rpb24odmFsLnBpcGUpO1xyXG59XHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0XHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcclxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcclxuICovXHJcbmZ1bmN0aW9uIGlzVVJMU2VhcmNoUGFyYW1zKHZhbCkge1xyXG4gIHJldHVybiB0eXBlb2YgVVJMU2VhcmNoUGFyYW1zICE9PSAndW5kZWZpbmVkJyAmJiB2YWwgaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgU3RyaW5nIHRvIHRyaW1cclxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxyXG4gKi9cclxuZnVuY3Rpb24gdHJpbShzdHIpIHtcclxuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqLywgJycpLnJlcGxhY2UoL1xccyokLywgJycpO1xyXG59XHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lIGlmIHdlJ3JlIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50XHJcbiAqXHJcbiAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXHJcbiAqIEJvdGggZW52aXJvbm1lbnRzIHN1cHBvcnQgWE1MSHR0cFJlcXVlc3QsIGJ1dCBub3QgZnVsbHkgc3RhbmRhcmQgZ2xvYmFscy5cclxuICpcclxuICogd2ViIHdvcmtlcnM6XHJcbiAqICB0eXBlb2Ygd2luZG93IC0+IHVuZGVmaW5lZFxyXG4gKiAgdHlwZW9mIGRvY3VtZW50IC0+IHVuZGVmaW5lZFxyXG4gKlxyXG4gKiByZWFjdC1uYXRpdmU6XHJcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnUmVhY3ROYXRpdmUnXHJcbiAqIG5hdGl2ZXNjcmlwdFxyXG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ05hdGl2ZVNjcmlwdCcgb3IgJ05TJ1xyXG4gKi9cclxuZnVuY3Rpb24gaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSB7XHJcbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIChuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ1JlYWN0TmF0aXZlJyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdOYXRpdmVTY3JpcHQnIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05TJykpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXHJcbiAgICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXHJcbiAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEl0ZXJhdGUgb3ZlciBhbiBBcnJheSBvciBhbiBPYmplY3QgaW52b2tpbmcgYSBmdW5jdGlvbiBmb3IgZWFjaCBpdGVtLlxyXG4gKlxyXG4gKiBJZiBgb2JqYCBpcyBhbiBBcnJheSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXHJcbiAqIHRoZSB2YWx1ZSwgaW5kZXgsIGFuZCBjb21wbGV0ZSBhcnJheSBmb3IgZWFjaCBpdGVtLlxyXG4gKlxyXG4gKiBJZiAnb2JqJyBpcyBhbiBPYmplY3QgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xyXG4gKiB0aGUgdmFsdWUsIGtleSwgYW5kIGNvbXBsZXRlIG9iamVjdCBmb3IgZWFjaCBwcm9wZXJ0eS5cclxuICpcclxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9iaiBUaGUgb2JqZWN0IHRvIGl0ZXJhdGVcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGNhbGxiYWNrIHRvIGludm9rZSBmb3IgZWFjaCBpdGVtXHJcbiAqL1xyXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgZm4pIHtcclxuICAvLyBEb24ndCBib3RoZXIgaWYgbm8gdmFsdWUgcHJvdmlkZWRcclxuICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyBGb3JjZSBhbiBhcnJheSBpZiBub3QgYWxyZWFkeSBzb21ldGhpbmcgaXRlcmFibGVcclxuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcclxuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xyXG4gICAgb2JqID0gW29ial07XHJcbiAgfVxyXG5cclxuICBpZiAoaXNBcnJheShvYmopKSB7XHJcbiAgICAvLyBJdGVyYXRlIG92ZXIgYXJyYXkgdmFsdWVzXHJcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iaik7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIEl0ZXJhdGUgb3ZlciBvYmplY3Qga2V5c1xyXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xyXG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xyXG4gICAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEFjY2VwdHMgdmFyYXJncyBleHBlY3RpbmcgZWFjaCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QsIHRoZW5cclxuICogaW1tdXRhYmx5IG1lcmdlcyB0aGUgcHJvcGVydGllcyBvZiBlYWNoIG9iamVjdCBhbmQgcmV0dXJucyByZXN1bHQuXHJcbiAqXHJcbiAqIFdoZW4gbXVsdGlwbGUgb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIGtleSB0aGUgbGF0ZXIgb2JqZWN0IGluXHJcbiAqIHRoZSBhcmd1bWVudHMgbGlzdCB3aWxsIHRha2UgcHJlY2VkZW5jZS5cclxuICpcclxuICogRXhhbXBsZTpcclxuICpcclxuICogYGBganNcclxuICogdmFyIHJlc3VsdCA9IG1lcmdlKHtmb286IDEyM30sIHtmb286IDQ1Nn0pO1xyXG4gKiBjb25zb2xlLmxvZyhyZXN1bHQuZm9vKTsgLy8gb3V0cHV0cyA0NTZcclxuICogYGBgXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcclxuICovXHJcbmZ1bmN0aW9uIG1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xyXG4gIHZhciByZXN1bHQgPSB7fTtcclxuICBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xyXG4gICAgaWYgKHR5cGVvZiByZXN1bHRba2V5XSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vKipcclxuICogRnVuY3Rpb24gZXF1YWwgdG8gbWVyZ2Ugd2l0aCB0aGUgZGlmZmVyZW5jZSBiZWluZyB0aGF0IG5vIHJlZmVyZW5jZVxyXG4gKiB0byBvcmlnaW5hbCBvYmplY3RzIGlzIGtlcHQuXHJcbiAqXHJcbiAqIEBzZWUgbWVyZ2VcclxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xyXG4gKi9cclxuZnVuY3Rpb24gZGVlcE1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xyXG4gIHZhciByZXN1bHQgPSB7fTtcclxuICBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xyXG4gICAgaWYgKHR5cGVvZiByZXN1bHRba2V5XSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgcmVzdWx0W2tleV0gPSBkZWVwTWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgIHJlc3VsdFtrZXldID0gZGVlcE1lcmdlKHt9LCB2YWwpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFeHRlbmRzIG9iamVjdCBhIGJ5IG11dGFibHkgYWRkaW5nIHRvIGl0IHRoZSBwcm9wZXJ0aWVzIG9mIG9iamVjdCBiLlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgb2JqZWN0IHRvIGJlIGV4dGVuZGVkXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBiIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cclxuICogQHBhcmFtIHtPYmplY3R9IHRoaXNBcmcgVGhlIG9iamVjdCB0byBiaW5kIGZ1bmN0aW9uIHRvXHJcbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHJlc3VsdGluZyB2YWx1ZSBvZiBvYmplY3QgYVxyXG4gKi9cclxuZnVuY3Rpb24gZXh0ZW5kKGEsIGIsIHRoaXNBcmcpIHtcclxuICBmb3JFYWNoKGIsIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XHJcbiAgICBpZiAodGhpc0FyZyAmJiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIGFba2V5XSA9IGJpbmQodmFsLCB0aGlzQXJnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFba2V5XSA9IHZhbDtcclxuICAgIH1cclxuICB9KTtcclxuICByZXR1cm4gYTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgaXNBcnJheTogaXNBcnJheSxcclxuICBpc0FycmF5QnVmZmVyOiBpc0FycmF5QnVmZmVyLFxyXG4gIGlzQnVmZmVyOiBpc0J1ZmZlcixcclxuICBpc0Zvcm1EYXRhOiBpc0Zvcm1EYXRhLFxyXG4gIGlzQXJyYXlCdWZmZXJWaWV3OiBpc0FycmF5QnVmZmVyVmlldyxcclxuICBpc1N0cmluZzogaXNTdHJpbmcsXHJcbiAgaXNOdW1iZXI6IGlzTnVtYmVyLFxyXG4gIGlzT2JqZWN0OiBpc09iamVjdCxcclxuICBpc1VuZGVmaW5lZDogaXNVbmRlZmluZWQsXHJcbiAgaXNEYXRlOiBpc0RhdGUsXHJcbiAgaXNGaWxlOiBpc0ZpbGUsXHJcbiAgaXNCbG9iOiBpc0Jsb2IsXHJcbiAgaXNGdW5jdGlvbjogaXNGdW5jdGlvbixcclxuICBpc1N0cmVhbTogaXNTdHJlYW0sXHJcbiAgaXNVUkxTZWFyY2hQYXJhbXM6IGlzVVJMU2VhcmNoUGFyYW1zLFxyXG4gIGlzU3RhbmRhcmRCcm93c2VyRW52OiBpc1N0YW5kYXJkQnJvd3NlckVudixcclxuICBmb3JFYWNoOiBmb3JFYWNoLFxyXG4gIG1lcmdlOiBtZXJnZSxcclxuICBkZWVwTWVyZ2U6IGRlZXBNZXJnZSxcclxuICBleHRlbmQ6IGV4dGVuZCxcclxuICB0cmltOiB0cmltXHJcbn07XHJcbiIsImltcG9ydCBjcmVhdGVDYWNoZSBmcm9tICdAZW1vdGlvbi9jYWNoZSc7XHJcbmltcG9ydCB7IHNlcmlhbGl6ZVN0eWxlcyB9IGZyb20gJ0BlbW90aW9uL3NlcmlhbGl6ZSc7XHJcbmltcG9ydCB7IGdldFJlZ2lzdGVyZWRTdHlsZXMsIGluc2VydFN0eWxlcyB9IGZyb20gJ0BlbW90aW9uL3V0aWxzJztcclxuXHJcbmZ1bmN0aW9uIGluc2VydFdpdGhvdXRTY29waW5nKGNhY2hlLCBzZXJpYWxpemVkKSB7XHJcbiAgaWYgKGNhY2hlLmluc2VydGVkW3NlcmlhbGl6ZWQubmFtZV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgcmV0dXJuIGNhY2hlLmluc2VydCgnJywgc2VyaWFsaXplZCwgY2FjaGUuc2hlZXQsIHRydWUpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbWVyZ2UocmVnaXN0ZXJlZCwgY3NzLCBjbGFzc05hbWUpIHtcclxuICB2YXIgcmVnaXN0ZXJlZFN0eWxlcyA9IFtdO1xyXG4gIHZhciByYXdDbGFzc05hbWUgPSBnZXRSZWdpc3RlcmVkU3R5bGVzKHJlZ2lzdGVyZWQsIHJlZ2lzdGVyZWRTdHlsZXMsIGNsYXNzTmFtZSk7XHJcblxyXG4gIGlmIChyZWdpc3RlcmVkU3R5bGVzLmxlbmd0aCA8IDIpIHtcclxuICAgIHJldHVybiBjbGFzc05hbWU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmF3Q2xhc3NOYW1lICsgY3NzKHJlZ2lzdGVyZWRTdHlsZXMpO1xyXG59XHJcblxyXG52YXIgY3JlYXRlRW1vdGlvbiA9IGZ1bmN0aW9uIGNyZWF0ZUVtb3Rpb24ob3B0aW9ucykge1xyXG4gIHZhciBjYWNoZSA9IGNyZWF0ZUNhY2hlKG9wdGlvbnMpOyAvLyAkRmxvd0ZpeE1lXHJcblxyXG4gIGNhY2hlLnNoZWV0LnNwZWVkeSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdGhpcy5jdHIgIT09IDApIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdzcGVlZHkgbXVzdCBiZSBjaGFuZ2VkIGJlZm9yZSBhbnkgcnVsZXMgYXJlIGluc2VydGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pc1NwZWVkeSA9IHZhbHVlO1xyXG4gIH07XHJcblxyXG4gIGNhY2hlLmNvbXBhdCA9IHRydWU7XHJcblxyXG4gIHZhciBjc3MgPSBmdW5jdGlvbiBjc3MoKSB7XHJcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcclxuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgc2VyaWFsaXplZCA9IHNlcmlhbGl6ZVN0eWxlcyhhcmdzLCBjYWNoZS5yZWdpc3RlcmVkLCB1bmRlZmluZWQpO1xyXG4gICAgaW5zZXJ0U3R5bGVzKGNhY2hlLCBzZXJpYWxpemVkLCBmYWxzZSk7XHJcbiAgICByZXR1cm4gY2FjaGUua2V5ICsgXCItXCIgKyBzZXJpYWxpemVkLm5hbWU7XHJcbiAgfTtcclxuXHJcbiAgdmFyIGtleWZyYW1lcyA9IGZ1bmN0aW9uIGtleWZyYW1lcygpIHtcclxuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xyXG4gICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHNlcmlhbGl6ZWQgPSBzZXJpYWxpemVTdHlsZXMoYXJncywgY2FjaGUucmVnaXN0ZXJlZCk7XHJcbiAgICB2YXIgYW5pbWF0aW9uID0gXCJhbmltYXRpb24tXCIgKyBzZXJpYWxpemVkLm5hbWU7XHJcbiAgICBpbnNlcnRXaXRob3V0U2NvcGluZyhjYWNoZSwge1xyXG4gICAgICBuYW1lOiBzZXJpYWxpemVkLm5hbWUsXHJcbiAgICAgIHN0eWxlczogXCJAa2V5ZnJhbWVzIFwiICsgYW5pbWF0aW9uICsgXCJ7XCIgKyBzZXJpYWxpemVkLnN0eWxlcyArIFwifVwiXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBhbmltYXRpb247XHJcbiAgfTtcclxuXHJcbiAgdmFyIGluamVjdEdsb2JhbCA9IGZ1bmN0aW9uIGluamVjdEdsb2JhbCgpIHtcclxuICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xyXG4gICAgICBhcmdzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHNlcmlhbGl6ZWQgPSBzZXJpYWxpemVTdHlsZXMoYXJncywgY2FjaGUucmVnaXN0ZXJlZCk7XHJcbiAgICBpbnNlcnRXaXRob3V0U2NvcGluZyhjYWNoZSwgc2VyaWFsaXplZCk7XHJcbiAgfTtcclxuXHJcbiAgdmFyIGN4ID0gZnVuY3Rpb24gY3goKSB7XHJcbiAgICBmb3IgKHZhciBfbGVuNCA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjQpLCBfa2V5NCA9IDA7IF9rZXk0IDwgX2xlbjQ7IF9rZXk0KyspIHtcclxuICAgICAgYXJnc1tfa2V5NF0gPSBhcmd1bWVudHNbX2tleTRdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBtZXJnZShjYWNoZS5yZWdpc3RlcmVkLCBjc3MsIGNsYXNzbmFtZXMoYXJncykpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBjc3M6IGNzcyxcclxuICAgIGN4OiBjeCxcclxuICAgIGluamVjdEdsb2JhbDogaW5qZWN0R2xvYmFsLFxyXG4gICAga2V5ZnJhbWVzOiBrZXlmcmFtZXMsXHJcbiAgICBoeWRyYXRlOiBmdW5jdGlvbiBoeWRyYXRlKGlkcykge1xyXG4gICAgICBpZHMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgY2FjaGUuaW5zZXJ0ZWRba2V5XSA9IHRydWU7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGZsdXNoOiBmdW5jdGlvbiBmbHVzaCgpIHtcclxuICAgICAgY2FjaGUucmVnaXN0ZXJlZCA9IHt9O1xyXG4gICAgICBjYWNoZS5pbnNlcnRlZCA9IHt9O1xyXG4gICAgICBjYWNoZS5zaGVldC5mbHVzaCgpO1xyXG4gICAgfSxcclxuICAgIC8vICRGbG93Rml4TWVcclxuICAgIHNoZWV0OiBjYWNoZS5zaGVldCxcclxuICAgIGNhY2hlOiBjYWNoZSxcclxuICAgIGdldFJlZ2lzdGVyZWRTdHlsZXM6IGdldFJlZ2lzdGVyZWRTdHlsZXMuYmluZChudWxsLCBjYWNoZS5yZWdpc3RlcmVkKSxcclxuICAgIG1lcmdlOiBtZXJnZS5iaW5kKG51bGwsIGNhY2hlLnJlZ2lzdGVyZWQsIGNzcylcclxuICB9O1xyXG59O1xyXG5cclxudmFyIGNsYXNzbmFtZXMgPSBmdW5jdGlvbiBjbGFzc25hbWVzKGFyZ3MpIHtcclxuICB2YXIgY2xzID0gJyc7XHJcblxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xyXG4gICAgdmFyIGFyZyA9IGFyZ3NbaV07XHJcbiAgICBpZiAoYXJnID09IG51bGwpIGNvbnRpbnVlO1xyXG4gICAgdmFyIHRvQWRkID0gdm9pZCAwO1xyXG5cclxuICAgIHN3aXRjaCAodHlwZW9mIGFyZykge1xyXG4gICAgICBjYXNlICdib29sZWFuJzpcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgJ29iamVjdCc6XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xyXG4gICAgICAgICAgICB0b0FkZCA9IGNsYXNzbmFtZXMoYXJnKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRvQWRkID0gJyc7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBrIGluIGFyZykge1xyXG4gICAgICAgICAgICAgIGlmIChhcmdba10gJiYgaykge1xyXG4gICAgICAgICAgICAgICAgdG9BZGQgJiYgKHRvQWRkICs9ICcgJyk7XHJcbiAgICAgICAgICAgICAgICB0b0FkZCArPSBrO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdG9BZGQgPSBhcmc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0b0FkZCkge1xyXG4gICAgICBjbHMgJiYgKGNscyArPSAnICcpO1xyXG4gICAgICBjbHMgKz0gdG9BZGQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY2xzO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRW1vdGlvbjtcclxuIiwiaW1wb3J0IGNyZWF0ZUVtb3Rpb24gZnJvbSAnY3JlYXRlLWVtb3Rpb24nO1xyXG5cclxudmFyIF9jcmVhdGVFbW90aW9uID0gY3JlYXRlRW1vdGlvbigpLFxyXG4gICAgZmx1c2ggPSBfY3JlYXRlRW1vdGlvbi5mbHVzaCxcclxuICAgIGh5ZHJhdGUgPSBfY3JlYXRlRW1vdGlvbi5oeWRyYXRlLFxyXG4gICAgY3ggPSBfY3JlYXRlRW1vdGlvbi5jeCxcclxuICAgIG1lcmdlID0gX2NyZWF0ZUVtb3Rpb24ubWVyZ2UsXHJcbiAgICBnZXRSZWdpc3RlcmVkU3R5bGVzID0gX2NyZWF0ZUVtb3Rpb24uZ2V0UmVnaXN0ZXJlZFN0eWxlcyxcclxuICAgIGluamVjdEdsb2JhbCA9IF9jcmVhdGVFbW90aW9uLmluamVjdEdsb2JhbCxcclxuICAgIGtleWZyYW1lcyA9IF9jcmVhdGVFbW90aW9uLmtleWZyYW1lcyxcclxuICAgIGNzcyA9IF9jcmVhdGVFbW90aW9uLmNzcyxcclxuICAgIHNoZWV0ID0gX2NyZWF0ZUVtb3Rpb24uc2hlZXQsXHJcbiAgICBjYWNoZSA9IF9jcmVhdGVFbW90aW9uLmNhY2hlO1xyXG5cclxuZXhwb3J0IHsgY2FjaGUsIGNzcywgY3gsIGZsdXNoLCBnZXRSZWdpc3RlcmVkU3R5bGVzLCBoeWRyYXRlLCBpbmplY3RHbG9iYWwsIGtleWZyYW1lcywgbWVyZ2UsIHNoZWV0IH07XHJcbiIsIi8qIVxyXG4gKiBKYXZhU2NyaXB0IENvb2tpZSB2Mi4yLjFcclxuICogaHR0cHM6Ly9naXRodWIuY29tL2pzLWNvb2tpZS9qcy1jb29raWVcclxuICpcclxuICogQ29weXJpZ2h0IDIwMDYsIDIwMTUgS2xhdXMgSGFydGwgJiBGYWduZXIgQnJhY2tcclxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXHJcbiAqL1xyXG47KGZ1bmN0aW9uIChmYWN0b3J5KSB7XHJcblx0dmFyIHJlZ2lzdGVyZWRJbk1vZHVsZUxvYWRlcjtcclxuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XHJcblx0XHRkZWZpbmUoZmFjdG9yeSk7XHJcblx0XHRyZWdpc3RlcmVkSW5Nb2R1bGVMb2FkZXIgPSB0cnVlO1xyXG5cdH1cclxuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XHJcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcclxuXHRcdHJlZ2lzdGVyZWRJbk1vZHVsZUxvYWRlciA9IHRydWU7XHJcblx0fVxyXG5cdGlmICghcmVnaXN0ZXJlZEluTW9kdWxlTG9hZGVyKSB7XHJcblx0XHR2YXIgT2xkQ29va2llcyA9IHdpbmRvdy5Db29raWVzO1xyXG5cdFx0dmFyIGFwaSA9IHdpbmRvdy5Db29raWVzID0gZmFjdG9yeSgpO1xyXG5cdFx0YXBpLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHdpbmRvdy5Db29raWVzID0gT2xkQ29va2llcztcclxuXHRcdFx0cmV0dXJuIGFwaTtcclxuXHRcdH07XHJcblx0fVxyXG59KGZ1bmN0aW9uICgpIHtcclxuXHRmdW5jdGlvbiBleHRlbmQgKCkge1xyXG5cdFx0dmFyIGkgPSAwO1xyXG5cdFx0dmFyIHJlc3VsdCA9IHt9O1xyXG5cdFx0Zm9yICg7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGF0dHJpYnV0ZXMgPSBhcmd1bWVudHNbIGkgXTtcclxuXHRcdFx0Zm9yICh2YXIga2V5IGluIGF0dHJpYnV0ZXMpIHtcclxuXHRcdFx0XHRyZXN1bHRba2V5XSA9IGF0dHJpYnV0ZXNba2V5XTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGRlY29kZSAocykge1xyXG5cdFx0cmV0dXJuIHMucmVwbGFjZSgvKCVbMC05QS1aXXsyfSkrL2csIGRlY29kZVVSSUNvbXBvbmVudCk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBpbml0IChjb252ZXJ0ZXIpIHtcclxuXHRcdGZ1bmN0aW9uIGFwaSgpIHt9XHJcblxyXG5cdFx0ZnVuY3Rpb24gc2V0IChrZXksIHZhbHVlLCBhdHRyaWJ1dGVzKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRhdHRyaWJ1dGVzID0gZXh0ZW5kKHtcclxuXHRcdFx0XHRwYXRoOiAnLydcclxuXHRcdFx0fSwgYXBpLmRlZmF1bHRzLCBhdHRyaWJ1dGVzKTtcclxuXHJcblx0XHRcdGlmICh0eXBlb2YgYXR0cmlidXRlcy5leHBpcmVzID09PSAnbnVtYmVyJykge1xyXG5cdFx0XHRcdGF0dHJpYnV0ZXMuZXhwaXJlcyA9IG5ldyBEYXRlKG5ldyBEYXRlKCkgKiAxICsgYXR0cmlidXRlcy5leHBpcmVzICogODY0ZSs1KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gV2UncmUgdXNpbmcgXCJleHBpcmVzXCIgYmVjYXVzZSBcIm1heC1hZ2VcIiBpcyBub3Qgc3VwcG9ydGVkIGJ5IElFXHJcblx0XHRcdGF0dHJpYnV0ZXMuZXhwaXJlcyA9IGF0dHJpYnV0ZXMuZXhwaXJlcyA/IGF0dHJpYnV0ZXMuZXhwaXJlcy50b1VUQ1N0cmluZygpIDogJyc7XHJcblxyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdHZhciByZXN1bHQgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XHJcblx0XHRcdFx0aWYgKC9eW1xce1xcW10vLnRlc3QocmVzdWx0KSkge1xyXG5cdFx0XHRcdFx0dmFsdWUgPSByZXN1bHQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGNhdGNoIChlKSB7fVxyXG5cclxuXHRcdFx0dmFsdWUgPSBjb252ZXJ0ZXIud3JpdGUgP1xyXG5cdFx0XHRcdGNvbnZlcnRlci53cml0ZSh2YWx1ZSwga2V5KSA6XHJcblx0XHRcdFx0ZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyh2YWx1ZSkpXHJcblx0XHRcdFx0XHQucmVwbGFjZSgvJSgyM3wyNHwyNnwyQnwzQXwzQ3wzRXwzRHwyRnwzRnw0MHw1Qnw1RHw1RXw2MHw3Qnw3RHw3QykvZywgZGVjb2RlVVJJQ29tcG9uZW50KTtcclxuXHJcblx0XHRcdGtleSA9IGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoa2V5KSlcclxuXHRcdFx0XHQucmVwbGFjZSgvJSgyM3wyNHwyNnwyQnw1RXw2MHw3QykvZywgZGVjb2RlVVJJQ29tcG9uZW50KVxyXG5cdFx0XHRcdC5yZXBsYWNlKC9bXFwoXFwpXS9nLCBlc2NhcGUpO1xyXG5cclxuXHRcdFx0dmFyIHN0cmluZ2lmaWVkQXR0cmlidXRlcyA9ICcnO1xyXG5cdFx0XHRmb3IgKHZhciBhdHRyaWJ1dGVOYW1lIGluIGF0dHJpYnV0ZXMpIHtcclxuXHRcdFx0XHRpZiAoIWF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV0pIHtcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRzdHJpbmdpZmllZEF0dHJpYnV0ZXMgKz0gJzsgJyArIGF0dHJpYnV0ZU5hbWU7XHJcblx0XHRcdFx0aWYgKGF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV0gPT09IHRydWUpIHtcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gQ29uc2lkZXJzIFJGQyA2MjY1IHNlY3Rpb24gNS4yOlxyXG5cdFx0XHRcdC8vIC4uLlxyXG5cdFx0XHRcdC8vIDMuICBJZiB0aGUgcmVtYWluaW5nIHVucGFyc2VkLWF0dHJpYnV0ZXMgY29udGFpbnMgYSAleDNCIChcIjtcIilcclxuXHRcdFx0XHQvLyAgICAgY2hhcmFjdGVyOlxyXG5cdFx0XHRcdC8vIENvbnN1bWUgdGhlIGNoYXJhY3RlcnMgb2YgdGhlIHVucGFyc2VkLWF0dHJpYnV0ZXMgdXAgdG8sXHJcblx0XHRcdFx0Ly8gbm90IGluY2x1ZGluZywgdGhlIGZpcnN0ICV4M0IgKFwiO1wiKSBjaGFyYWN0ZXIuXHJcblx0XHRcdFx0Ly8gLi4uXHJcblx0XHRcdFx0c3RyaW5naWZpZWRBdHRyaWJ1dGVzICs9ICc9JyArIGF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV0uc3BsaXQoJzsnKVswXTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIChkb2N1bWVudC5jb29raWUgPSBrZXkgKyAnPScgKyB2YWx1ZSArIHN0cmluZ2lmaWVkQXR0cmlidXRlcyk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gZ2V0IChrZXksIGpzb24pIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHZhciBqYXIgPSB7fTtcclxuXHRcdFx0Ly8gVG8gcHJldmVudCB0aGUgZm9yIGxvb3AgaW4gdGhlIGZpcnN0IHBsYWNlIGFzc2lnbiBhbiBlbXB0eSBhcnJheVxyXG5cdFx0XHQvLyBpbiBjYXNlIHRoZXJlIGFyZSBubyBjb29raWVzIGF0IGFsbC5cclxuXHRcdFx0dmFyIGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUgPyBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsgJykgOiBbXTtcclxuXHRcdFx0dmFyIGkgPSAwO1xyXG5cclxuXHRcdFx0Zm9yICg7IGkgPCBjb29raWVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0dmFyIHBhcnRzID0gY29va2llc1tpXS5zcGxpdCgnPScpO1xyXG5cdFx0XHRcdHZhciBjb29raWUgPSBwYXJ0cy5zbGljZSgxKS5qb2luKCc9Jyk7XHJcblxyXG5cdFx0XHRcdGlmICghanNvbiAmJiBjb29raWUuY2hhckF0KDApID09PSAnXCInKSB7XHJcblx0XHRcdFx0XHRjb29raWUgPSBjb29raWUuc2xpY2UoMSwgLTEpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdHZhciBuYW1lID0gZGVjb2RlKHBhcnRzWzBdKTtcclxuXHRcdFx0XHRcdGNvb2tpZSA9IChjb252ZXJ0ZXIucmVhZCB8fCBjb252ZXJ0ZXIpKGNvb2tpZSwgbmFtZSkgfHxcclxuXHRcdFx0XHRcdFx0ZGVjb2RlKGNvb2tpZSk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKGpzb24pIHtcclxuXHRcdFx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdFx0XHRjb29raWUgPSBKU09OLnBhcnNlKGNvb2tpZSk7XHJcblx0XHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHt9XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0amFyW25hbWVdID0gY29va2llO1xyXG5cclxuXHRcdFx0XHRcdGlmIChrZXkgPT09IG5hbWUpIHtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBjYXRjaCAoZSkge31cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIGtleSA/IGphcltrZXldIDogamFyO1xyXG5cdFx0fVxyXG5cclxuXHRcdGFwaS5zZXQgPSBzZXQ7XHJcblx0XHRhcGkuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xyXG5cdFx0XHRyZXR1cm4gZ2V0KGtleSwgZmFsc2UgLyogcmVhZCBhcyByYXcgKi8pO1xyXG5cdFx0fTtcclxuXHRcdGFwaS5nZXRKU09OID0gZnVuY3Rpb24gKGtleSkge1xyXG5cdFx0XHRyZXR1cm4gZ2V0KGtleSwgdHJ1ZSAvKiByZWFkIGFzIGpzb24gKi8pO1xyXG5cdFx0fTtcclxuXHRcdGFwaS5yZW1vdmUgPSBmdW5jdGlvbiAoa2V5LCBhdHRyaWJ1dGVzKSB7XHJcblx0XHRcdHNldChrZXksICcnLCBleHRlbmQoYXR0cmlidXRlcywge1xyXG5cdFx0XHRcdGV4cGlyZXM6IC0xXHJcblx0XHRcdH0pKTtcclxuXHRcdH07XHJcblxyXG5cdFx0YXBpLmRlZmF1bHRzID0ge307XHJcblxyXG5cdFx0YXBpLndpdGhDb252ZXJ0ZXIgPSBpbml0O1xyXG5cclxuXHRcdHJldHVybiBhcGk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gaW5pdChmdW5jdGlvbiAoKSB7fSk7XHJcbn0pKTtcclxuIiwidmFyIGUsdD0oZT1yZXF1aXJlKFwicXVlcnlzdHJpbmdcIikpJiZcIm9iamVjdFwiPT10eXBlb2YgZSYmXCJkZWZhdWx0XCJpbiBlP2UuZGVmYXVsdDplLHI9L2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvO2Z1bmN0aW9uIG8oZSl7XCJzdHJpbmdcIj09dHlwZW9mIGUmJihlPWcoZSkpO3ZhciBvPWZ1bmN0aW9uKGUsdCxyKXt2YXIgbz1lLmF1dGgsYT1lLmhvc3RuYW1lLHM9ZS5wcm90b2NvbHx8XCJcIixjPWUucGF0aG5hbWV8fFwiXCIsaD1lLmhhc2h8fFwiXCIscD1lLnF1ZXJ5fHxcIlwiLG49ITE7bz1vP2VuY29kZVVSSUNvbXBvbmVudChvKS5yZXBsYWNlKC8lM0EvaSxcIjpcIikrXCJAXCI6XCJcIixlLmhvc3Q/bj1vK2UuaG9zdDphJiYobj1vKyh+YS5pbmRleE9mKFwiOlwiKT9cIltcIithK1wiXVwiOmEpLGUucG9ydCYmKG4rPVwiOlwiK2UucG9ydCkpLHAmJlwib2JqZWN0XCI9PXR5cGVvZiBwJiYocD10LmVuY29kZShwKSk7dmFyIGw9ZS5zZWFyY2h8fHAmJlwiP1wiK3B8fFwiXCI7cmV0dXJuIHMmJlwiOlwiIT09cy5zdWJzdHIoLTEpJiYocys9XCI6XCIpLGUuc2xhc2hlc3x8KCFzfHxyLnRlc3QocykpJiYhMSE9PW4/KG49XCIvL1wiKyhufHxcIlwiKSxjJiZcIi9cIiE9PWNbMF0mJihjPVwiL1wiK2MpKTpufHwobj1cIlwiKSxoJiZcIiNcIiE9PWhbMF0mJihoPVwiI1wiK2gpLGwmJlwiP1wiIT09bFswXSYmKGw9XCI/XCIrbCkse3Byb3RvY29sOnMsaG9zdDpuLHBhdGhuYW1lOmM9Yy5yZXBsYWNlKC9bPyNdL2csZW5jb2RlVVJJQ29tcG9uZW50KSxzZWFyY2g6bD1sLnJlcGxhY2UoXCIjXCIsXCIlMjNcIiksaGFzaDpofX0oZSx0LHIpO3JldHVyblwiXCIrby5wcm90b2NvbCtvLmhvc3Qrby5wYXRobmFtZStvLnNlYXJjaCtvLmhhc2h9dmFyIGE9XCJodHRwOi8vXCIscz1cIncud1wiLGM9YStzLGg9L14oW2EtejAtOS4rLV0qOlxcL1xcL1xcLykoW2EtejAtOS4rLV06XFwvKik/L2kscD0vaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS87ZnVuY3Rpb24gbihlLHQpe3ZhciByPVwic3RyaW5nXCI9PXR5cGVvZiBlP2coZSk6ZTtlPVwib2JqZWN0XCI9PXR5cGVvZiBlP28oZSk6ZTt2YXIgcz1nKHQpLG49XCJcIjtyLnByb3RvY29sJiYhci5zbGFzaGVzJiYobj1yLnByb3RvY29sLGU9ZS5yZXBsYWNlKHIucHJvdG9jb2wsXCJcIiksbis9XCIvXCI9PT10WzBdfHxcIi9cIj09PWVbMF0/XCIvXCI6XCJcIiksbiYmcy5wcm90b2NvbCYmKG49XCJcIixzLnNsYXNoZXN8fChuPXMucHJvdG9jb2wsdD10LnJlcGxhY2Uocy5wcm90b2NvbCxcIlwiKSkpO3ZhciBsPWUubWF0Y2goaCk7bCYmIXMucHJvdG9jb2wmJihlPWUuc3Vic3RyKChuPWxbMV0rKGxbMl18fFwiXCIpKS5sZW5ndGgpLC9eXFwvXFwvW14vXS8udGVzdCh0KSYmKG49bi5zbGljZSgwLC0xKSkpO3ZhciBpPW5ldyBVUkwoZSxjK1wiL1wiKSxmPW5ldyBVUkwodCxpKS50b1N0cmluZygpLnJlcGxhY2UoYyxcIlwiKSx1PXMucHJvdG9jb2x8fHIucHJvdG9jb2w7cmV0dXJuIHUrPXIuc2xhc2hlc3x8cy5zbGFzaGVzP1wiLy9cIjpcIlwiLCFuJiZ1P2Y9Zi5yZXBsYWNlKGEsdSk6biYmKGY9Zi5yZXBsYWNlKGEsXCJcIikpLHAudGVzdChmKXx8fnQuaW5kZXhPZihcIi5cIil8fFwiL1wiPT09ZS5zbGljZSgtMSl8fFwiL1wiPT09dC5zbGljZSgtMSl8fFwiL1wiIT09Zi5zbGljZSgtMSl8fChmPWYuc2xpY2UoMCwtMSkpLG4mJihmPW4rKFwiL1wiPT09ZlswXT9mLnN1YnN0cigxKTpmKSksZn1mdW5jdGlvbiBsKCl7fWwucGFyc2U9ZyxsLmZvcm1hdD1vLGwucmVzb2x2ZT1uLGwucmVzb2x2ZU9iamVjdD1uO3ZhciBpPS9eaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS8sZj0vXiguKj8pKFsjP10uKikvLHU9L14oW2EtejAtOS4rLV0qOikoXFwvezAsM30pKC4qKS9pLG09L14oW2EtejAtOS4rLV0qOik/XFwvXFwvXFwvKi9pLHY9L14oW2EtejAtOS4rLV0qOikoXFwvezAsMn0pXFxbKC4qKVxcXSQvaTtmdW5jdGlvbiBkKGUpe3RyeXtyZXR1cm4gZGVjb2RlVVJJKGUpfWNhdGNoKHQpe3JldHVybiBlfX1mdW5jdGlvbiBnKGUscixhKXtpZih2b2lkIDA9PT1yJiYocj0hMSksdm9pZCAwPT09YSYmKGE9ITEpLGUmJlwib2JqZWN0XCI9PXR5cGVvZiBlJiZlIGluc3RhbmNlb2YgbClyZXR1cm4gZTt2YXIgaD0oZT1lLnRyaW0oKSkubWF0Y2goZik7ZT1oP2QoaFsxXSkucmVwbGFjZSgvXFxcXC9nLFwiL1wiKStoWzJdOmQoZSkucmVwbGFjZSgvXFxcXC9nLFwiL1wiKSx2LnRlc3QoZSkmJlwiL1wiIT09ZS5zbGljZSgtMSkmJihlKz1cIi9cIik7dmFyIHA9IS8oXmphdmFzY3JpcHQpLy50ZXN0KGUpJiZlLm1hdGNoKHUpLG49bS50ZXN0KGUpLGc9XCJcIjtwJiYoaS50ZXN0KHBbMV0pfHwoZz1wWzFdLnRvTG93ZXJDYXNlKCksZT1cIlwiK3BbMl0rcFszXSkscFsyXXx8KG49ITEsaS50ZXN0KHBbMV0pPyhnPXBbMV0sZT1cIlwiK3BbM10pOmU9XCIvL1wiK3BbM10pLDMhPT1wWzJdLmxlbmd0aCYmMSE9PXBbMl0ubGVuZ3RofHwoZz1wWzFdLGU9XCIvXCIrcFszXSkpO3ZhciBiLHk9KGg/aFsxXTplKS5tYXRjaCgvKDpbMC05XSspLyksaj1cIlwiO3kmJnlbMV0mJjM9PT15WzFdLmxlbmd0aCYmKGU9ZS5yZXBsYWNlKGo9eVsxXSxqK1wiMDBcIikpO3ZhciB3PW5ldyBsLHg9XCJcIixVPVwiXCI7dHJ5e2I9bmV3IFVSTChlKX1jYXRjaCh0KXt4PXQsZ3x8YXx8IS9eXFwvXFwvLy50ZXN0KGUpfHwvXlxcL1xcLy4rW0AuXS8udGVzdChlKXx8KFU9XCIvXCIsZT1lLnN1YnN0cigxKSk7dHJ5e2I9bmV3IFVSTChlLGMpfWNhdGNoKGUpe3JldHVybiB3LnByb3RvY29sPWcsdy5ocmVmPWcsd319dy5zbGFzaGVzPW4mJiFVLHcuaG9zdD1iLmhvc3Q9PT1zP1wiXCI6Yi5ob3N0LHcuaG9zdG5hbWU9Yi5ob3N0bmFtZT09PXM/XCJcIjpiLmhvc3RuYW1lLnJlcGxhY2UoLyhcXFt8XFxdKS9nLFwiXCIpLHcucHJvdG9jb2w9eD9nfHxudWxsOmIucHJvdG9jb2wsdy5zZWFyY2g9Yi5zZWFyY2gucmVwbGFjZSgvXFxcXC9nLFwiJTVDXCIpLHcuaGFzaD1iLmhhc2gucmVwbGFjZSgvXFxcXC9nLFwiJTVDXCIpO3ZhciBSPWUuc3BsaXQoXCIjXCIpOyF3LnNlYXJjaCYmflJbMF0uaW5kZXhPZihcIj9cIikmJih3LnNlYXJjaD1cIj9cIiksdy5oYXNofHxcIlwiIT09UlsxXXx8KHcuaGFzaD1cIiNcIiksdy5xdWVyeT1yP3QuZGVjb2RlKGIuc2VhcmNoLnN1YnN0cigxKSk6dy5zZWFyY2guc3Vic3RyKDEpLHcucGF0aG5hbWU9VStkKGIucGF0aG5hbWUpLnJlcGxhY2UoL1wiL2csXCIlMjJcIiksXCJhYm91dDpcIj09PXcucHJvdG9jb2wmJlwiYmxhbmtcIj09PXcucGF0aG5hbWUmJih3LnByb3RvY29sPVwiXCIsdy5wYXRobmFtZT1cIlwiKSx4JiZcIi9cIiE9PWVbMF0mJih3LnBhdGhuYW1lPXcucGF0aG5hbWUuc3Vic3RyKDEpKSxnJiYhaS50ZXN0KGcpJiZcIi9cIiE9PWUuc2xpY2UoLTEpJiZcIi9cIj09PXcucGF0aG5hbWUmJih3LnBhdGhuYW1lPVwiXCIpLHcucGF0aD13LnBhdGhuYW1lK3cuc2VhcmNoLHcuYXV0aD1bYi51c2VybmFtZSxiLnBhc3N3b3JkXS5tYXAoZGVjb2RlVVJJQ29tcG9uZW50KS5maWx0ZXIoQm9vbGVhbikuam9pbihcIjpcIiksdy5wb3J0PWIucG9ydCxqJiYody5ob3N0PXcuaG9zdC5yZXBsYWNlKGorXCIwMFwiLGopLHcucG9ydD13LnBvcnQuc2xpY2UoMCwtMikpLHcuaHJlZj1VP1wiXCIrdy5wYXRobmFtZSt3LnNlYXJjaCt3Lmhhc2g6byh3KTt2YXIgTz0vXihmaWxlKS8udGVzdCh3LmhyZWYpP1tcImhvc3RcIixcImhvc3RuYW1lXCJdOltdO3JldHVybiBPYmplY3Qua2V5cyh3KS5mb3JFYWNoKGZ1bmN0aW9uKGUpe35PLmluZGV4T2YoZSl8fCh3W2VdPXdbZV18fG51bGwpfSksd31leHBvcnRzLnBhcnNlPWcsZXhwb3J0cy5mb3JtYXQ9byxleHBvcnRzLnJlc29sdmU9bixleHBvcnRzLnJlc29sdmVPYmplY3Q9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZyhuKGUsdCkpfSxleHBvcnRzLlVybD1sO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcclxuIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSBkbGxfYTBlYTgxOTZlODY5YjliNDQyNWUgKi8gXCJkbGwtcmVmZXJlbmNlIGRsbF9hMGVhODE5NmU4NjliOWI0NDI1ZVwiKSkoXCIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvcG9seWZpbGxzL29iamVjdC1hc3NpZ24uanNcIik7IiwiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9NYW5hZ2VtZW50XCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiRDpcXFxcd29ya1xcXFx4YW1wcDIwMjBcXFxcaHRkb2NzXFxcXG5ld19yYWJ3YV9wcm9qZWN0XFxcXHJhYndhLWNvdWJvblxcXFxuZXh0dHRcXFxcbmV4dFByb2VjdFxcXFxwYWdlc1xcXFxNYW5hZ2VtZW50XFxcXGluZGV4LmpzXCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAiLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbih7fSwgX3JvdXRlcltwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcblxuZXhwb3J0IGNvbnN0IFJvdXRlckNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PE5leHRSb3V0ZXI+KG51bGwgYXMgYW55KVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBSb3V0ZXJDb250ZXh0LmRpc3BsYXlOYW1lID0gJ1JvdXRlckNvbnRleHQnXG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHBhcnNlLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpICE9PSAwID8gYmFzZVBhdGggKyBwYXRoIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgPT09IDBcbiAgICA/IHBhdGguc3Vic3RyKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG4gICAgOiBwYXRoXG59XG5cbmZ1bmN0aW9uIHRvUm91dGUocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLydcbn1cblxuY29uc3QgcHJlcGFyZVJvdXRlID0gKHBhdGg6IHN0cmluZykgPT5cbiAgdG9Sb3V0ZSghcGF0aCB8fCBwYXRoID09PSAnLycgPyAnL2luZGV4JyA6IHBhdGgpXG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbnR5cGUgQ29tcG9uZW50UmVzID0geyBwYWdlOiBDb21wb25lbnRUeXBlOyBtb2Q6IGFueSB9XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG50eXBlIFJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogYW55XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFJvdXRlSW5mbywgQXBwPzogQ29tcG9uZW50VHlwZSkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IGFueSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5IHwgbnVsbCxcbiAgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4sXG4gIGNiPzogKC4uLmFyZ3M6IGFueSkgPT4gYW55XG4pIHtcbiAgbGV0IGF0dGVtcHRzID0gaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMVxuICBmdW5jdGlvbiBnZXRSZXNwb25zZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBmZXRjaChcbiAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKFxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgX19ORVhUX0RBVEFfX1xuICAgICAgICAgIGAvX25leHQvZGF0YS8ke19fTkVYVF9EQVRBX18uYnVpbGRJZH0ke2RlbEJhc2VQYXRoKHBhdGhuYW1lKX0uanNvbmBcbiAgICAgICAgKSxcbiAgICAgICAgcXVlcnksXG4gICAgICB9KSxcbiAgICAgIHtcbiAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICB9XG4gICAgKS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgIGlmICgtLWF0dGVtcHRzID4gMCAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIGNiID8gY2IoZGF0YSkgOiBkYXRhXG4gICAgfSlcbiAgICAuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgIC8vIGxvb3AuXG4gICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgIDsoZXJyIGFzIGFueSkuY29kZSA9ICdQQUdFX0xPQURfRVJST1InXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQ29tcG9uZW50VHlwZVxuICAgICAgd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0geyBDb21wb25lbnQ6IEFwcCB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBhc1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcbiAgICB9XG4gIH1cblxuICAvLyBAZGVwcmVjYXRlZCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBldmVuIHRob3VnaCBpdCdzIGEgcHJpdmF0ZSBtZXRob2QuXG4gIHN0YXRpYyBfcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgcmV0dXJuIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHVybFxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGlmICghZS5zdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAoXG4gICAgICBlLnN0YXRlICYmXG4gICAgICB0aGlzLmlzU3NyICYmXG4gICAgICBlLnN0YXRlLmFzID09PSB0aGlzLmFzUGF0aCAmJlxuICAgICAgcGFyc2UoZS5zdGF0ZS51cmwpLnBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lXG4gICAgKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoZS5zdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gZS5zdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ2Bwb3BzdGF0ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ1dCBgZXZlbnQuc3RhdGVgIGRpZCBub3QgaGF2ZSBgdXJsYCBvciBgYXNgIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3BvcHN0YXRlLXN0YXRlLWVtcHR5J1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgdXBkYXRlKHJvdXRlOiBzdHJpbmcsIG1vZDogYW55KSB7XG4gICAgY29uc3QgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlID0gbW9kLmRlZmF1bHQgfHwgbW9kXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKVxuICAgIH1cblxuICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBDb21wb25lbnQsXG4gICAgICBfX05fU1NHOiBtb2QuX19OX1NTRyxcbiAgICAgIF9fTl9TU1A6IG1vZC5fX05fU1NQLFxuICAgIH0pXG4gICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGFcblxuICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgIGlmIChyb3V0ZSA9PT0gJy9fYXBwJykge1xuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKVxuICAgIH1cbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICBfdXJsOiBVcmwsXG4gICAgX2FzOiBVcmwsXG4gICAgb3B0aW9uczogYW55XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgICB9XG4gICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICBpZiAoU1QpIHtcbiAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgICAgfVxuXG4gICAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgICBsZXQgdXJsID0gdHlwZW9mIF91cmwgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24oX3VybCkgOiBfdXJsXG4gICAgICBsZXQgYXMgPSB0eXBlb2YgX2FzID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKF9hcykgOiBfYXNcblxuICAgICAgdXJsID0gYWRkQmFzZVBhdGgodXJsKVxuICAgICAgYXMgPSBhZGRCYXNlUGF0aChhcylcblxuICAgICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5IGZvciB0aGUgU1NSIHBhZ2UuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgICAgaWYgKF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCkge1xuICAgICAgICAgIGFzID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQoYXMpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQoYXMpXG5cbiAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGFzKSkge1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChhcylcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnksIHByb3RvY29sIH0gPSBwYXJzZSh1cmwsIHRydWUpXG5cbiAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSlcbiAgICAgIH1cblxuICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgIGlmICghdGhpcy51cmxJc05ldyhhcykpIHtcbiAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKVxuICAgICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSBwYXJzZShhcylcbiAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgICApXG5cbiAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZWplY3QoXG4gICAgICAgICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgICAgLy8gSWYgc2hhbGxvdyBpcyB0cnVlIGFuZCB0aGUgcm91dGUgZXhpc3RzIGluIHRoZSByb3V0ZXIgY2FjaGUgd2UgcmV1c2UgdGhlIHByZXZpb3VzIHJlc3VsdFxuICAgICAgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cpLnRoZW4oXG4gICAgICAgIChyb3V0ZUluZm8pID0+IHtcbiAgICAgICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm9cblxuICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVJbmZvKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgYXMpXG4gICAgICAgICAgICAgIHRocm93IGVycm9yXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSlcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICByZWplY3RcbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxSb3V0ZUluZm8+IHtcbiAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAvLyBJZiB0aGVyZSBpcyBhIHNoYWxsb3cgcm91dGUgdHJhbnNpdGlvbiBwb3NzaWJsZVxuICAgIC8vIElmIHRoZSByb3V0ZSBpcyBhbHJlYWR5IHJlbmRlcmVkIG9uIHRoZSBzY3JlZW4uXG4gICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNhY2hlZFJvdXRlSW5mbylcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVFcnJvciA9IChcbiAgICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICAgICkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ1BBR0VfTE9BRF9FUlJPUicgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgLy8gU28sIHdlIG5lZWQgdG8gbWFyayBpdCBhcyBhIGNhbmNlbGxlZCBlcnJvciBhbmQgc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc29sdmUoXG4gICAgICAgICAgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSByZXNcbiAgICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvOiBSb3V0ZUluZm8gPSB7IENvbXBvbmVudCwgZXJyIH1cbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIH0gYXMgYW55KS50aGVuKFxuICAgICAgICAgICAgICAgICAgKHByb3BzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVyclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbylcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAoZ2lwRXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsXG4gICAgICAgICAgICAgICAgICAgICAgZ2lwRXJyXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGhhbmRsZUVycm9yKGVyciwgdHJ1ZSkpXG4gICAgICAgIClcbiAgICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPlxuICAgIH1cblxuICAgIHJldHVybiAobmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKGNhY2hlZFJvdXRlSW5mbykge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oXG4gICAgICAgIChyZXMpID0+XG4gICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pLFxuICAgICAgICByZWplY3RcbiAgICAgIClcbiAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz4pXG4gICAgICAudGhlbigocm91dGVJbmZvOiBSb3V0ZUluZm8pID0+IHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0RGF0YTxSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgICAgX19OX1NTR1xuICAgICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGFzKVxuICAgICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoYXMpXG4gICAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICAgIClcbiAgICAgICAgKS50aGVuKChwcm9wcykgPT4ge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpXG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcHJvdG9jb2wgfSA9IHBhcnNlKHVybClcblxuICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGNvbnN0IHJvdXRlID0gZGVsQmFzZVBhdGgodG9Sb3V0ZShwYXRobmFtZSkpXG4gICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBkZWxCYXNlUGF0aChhc1BhdGgpKSxcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgICAgXSkudGhlbigoKSA9PiByZXNvbHZlKCksIHJlamVjdClcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Q29tcG9uZW50UmVzPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG4gICAgcm91dGUgPSBkZWxCYXNlUGF0aChyb3V0ZSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YSA9IChhc1BhdGg6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiA9PiB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGFyc2UoYXNQYXRoKS5wYXRobmFtZSEpXG5cbiAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1twYXRobmFtZV1cbiAgICAgID8gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW3BhdGhuYW1lXSlcbiAgICAgIDogZmV0Y2hOZXh0RGF0YShcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIHRoaXMuaXNTc3IsXG4gICAgICAgICAgKGRhdGEpID0+ICh0aGlzLnNkY1twYXRobmFtZV0gPSBkYXRhKVxuICAgICAgICApXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YSA9IChhc1BhdGg6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiA9PiB7XG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZShhc1BhdGgsIHRydWUpXG4gICAgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGF0aG5hbWUhKVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHApXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgY29uc3QgZSA9IG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJylcbiAgICAgIDsoZSBhcyBhbnkpLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGUsIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogeyBwb3M6IG51bWJlcjsgcmVwZWF0OiBib29sZWFuIH0gfVxufSB7XG4gIC8vIEVzY2FwZSBhbGwgY2hhcmFjdGVycyB0aGF0IGNvdWxkIGJlIGNvbnNpZGVyZWQgUmVnRXhcbiAgY29uc3QgZXNjYXBlZFJvdXRlID0gZXNjYXBlUmVnZXgobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiB7IHBvczogbnVtYmVyOyByZXBlYXQ6IGJvb2xlYW4gfSB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG5cbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoXG4gICAgL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZyxcbiAgICAoXywgJDEpID0+IHtcbiAgICAgIGNvbnN0IGlzT3B0aW9uYWwgPSAvXlxcXFxcXFsuKlxcXFxcXF0kLy50ZXN0KCQxKVxuICAgICAgaWYgKGlzT3B0aW9uYWwpIHtcbiAgICAgICAgJDEgPSAkMS5zbGljZSgyLCAtMilcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSlcbiAgICAgIGlmIChpc0NhdGNoQWxsKSB7XG4gICAgICAgICQxID0gJDEuc2xpY2UoNilcbiAgICAgIH1cbiAgICAgIGdyb3Vwc1tcbiAgICAgICAgJDFcbiAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgXSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdDogaXNDYXRjaEFsbCB9XG4gICAgICByZXR1cm4gaXNDYXRjaEFsbCA/IChpc09wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgfVxuICApXG5cbiAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZShcbiAgICAgIC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csXG4gICAgICAoXywgJDEpID0+IHtcbiAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKVxuICAgICAgICBjb25zdCBrZXkgPSAkMVxuICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpXG5cbiAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGxcbiAgICAgICAgICA/IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT4uKz8pYFxuICAgICAgICAgIDogYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9PlteL10rPylgXG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cCgnXicgKyBwYXJhbWV0ZXJpemVkUm91dGUgKyAnKD86Lyk/JCcsICdpJyksXG4gICAgZ3JvdXBzLFxuICAgIG5hbWVkUmVnZXg6IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlXG4gICAgICA/IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYFxuICAgICAgOiB1bmRlZmluZWQsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGZvcm1hdCwgVVJMRm9ybWF0T3B0aW9ucywgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICcuLi8uLi9saWIvbG9hZC1lbnYtY29uZmlnJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBhbnlcbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBpbnRlcmZhY2UtbmFtZVxuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBzdGF0aWNNYXJrdXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkZXZGaWxlczogc3RyaW5nW11cbiAgZmlsZXM6IHN0cmluZ1tdXG4gIGxvd1ByaW9yaXR5RmlsZXM6IHN0cmluZ1tdXG4gIHBvbHlmaWxsRmlsZXM6IHN0cmluZ1tdXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaHRtbFByb3BzOiBhbnlcbiAgYm9keVRhZ3M6IGFueVtdXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICB1cmw6IFVybE9iamVjdCxcbiAgb3B0aW9ucz86IFVSTEZvcm1hdE9wdGlvbnNcbik6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXQodXJsIGFzIFVSTCwgb3B0aW9ucylcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XHJcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XHJcblxyXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xyXG4gICAgYXJyMltpXSA9IGFycltpXTtcclxuICB9XHJcblxyXG4gIHJldHVybiBhcnIyO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5OyIsImZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcclxuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhIb2xlczsiLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XHJcbiAgdHJ5IHtcclxuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcclxuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJlamVjdChlcnJvcik7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBpZiAoaW5mby5kb25lKSB7XHJcbiAgICByZXNvbHZlKHZhbHVlKTtcclxuICB9IGVsc2Uge1xyXG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcclxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XHJcblxyXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xyXG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xyXG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNUb0dlbmVyYXRvcjsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XHJcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZlwiKTtcclxuXHJcbnZhciBpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSByZXF1aXJlKFwiLi9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3RcIik7XHJcblxyXG5mdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcclxuICBpZiAoaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkpIHtcclxuICAgIG1vZHVsZS5leHBvcnRzID0gX2NvbnN0cnVjdCA9IFJlZmxlY3QuY29uc3RydWN0O1xyXG4gIH0gZWxzZSB7XHJcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9jb25zdHJ1Y3QgPSBmdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcclxuICAgICAgdmFyIGEgPSBbbnVsbF07XHJcbiAgICAgIGEucHVzaC5hcHBseShhLCBhcmdzKTtcclxuICAgICAgdmFyIENvbnN0cnVjdG9yID0gRnVuY3Rpb24uYmluZC5hcHBseShQYXJlbnQsIGEpO1xyXG4gICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgQ29uc3RydWN0b3IoKTtcclxuICAgICAgaWYgKENsYXNzKSBzZXRQcm90b3R5cGVPZihpbnN0YW5jZSwgQ2xhc3MucHJvdG90eXBlKTtcclxuICAgICAgcmV0dXJuIGluc3RhbmNlO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJldHVybiBfY29uc3RydWN0LmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gX2NvbnN0cnVjdDsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xyXG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcclxuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcclxuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcclxuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XHJcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XHJcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xyXG4gIHJldHVybiBDb25zdHJ1Y3RvcjtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcclxuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xyXG4gICAgXCJkZWZhdWx0XCI6IG9ialxyXG4gIH07XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcclxuXHJcbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcclxuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XHJcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcclxuXHJcbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xyXG4gICAgcmV0dXJuIGNhY2hlO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiBjYWNoZTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XHJcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xyXG4gICAgcmV0dXJuIG9iajtcclxuICB9XHJcblxyXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgXCJkZWZhdWx0XCI6IG9ialxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xyXG5cclxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcclxuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcclxuICB9XHJcblxyXG4gIHZhciBuZXdPYmogPSB7fTtcclxuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XHJcblxyXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcclxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XHJcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xyXG5cclxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcclxuXHJcbiAgaWYgKGNhY2hlKSB7XHJcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG5ld09iajtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkge1xyXG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTtcclxuICBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlO1xyXG4gIGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0OyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcclxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjtcclxuICB2YXIgX2FyciA9IFtdO1xyXG4gIHZhciBfbiA9IHRydWU7XHJcbiAgdmFyIF9kID0gZmFsc2U7XHJcbiAgdmFyIF9lID0gdW5kZWZpbmVkO1xyXG5cclxuICB0cnkge1xyXG4gICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xyXG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xyXG5cclxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgX2QgPSB0cnVlO1xyXG4gICAgX2UgPSBlcnI7XHJcbiAgfSBmaW5hbGx5IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gX2FycjtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5TGltaXQ7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcclxuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVJlc3Q7IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcclxuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xyXG4gICAgby5fX3Byb3RvX18gPSBwO1xyXG4gICAgcmV0dXJuIG87XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2Y7IiwidmFyIGFycmF5V2l0aEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRoSG9sZXNcIik7XHJcblxyXG52YXIgaXRlcmFibGVUb0FycmF5TGltaXQgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdFwiKTtcclxuXHJcbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCIpO1xyXG5cclxudmFyIG5vbkl0ZXJhYmxlUmVzdCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlUmVzdFwiKTtcclxuXHJcbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xyXG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBfc2xpY2VkVG9BcnJheTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xyXG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcclxuXHJcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XHJcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xyXG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcclxuICAgIH07XHJcbiAgfSBlbHNlIHtcclxuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XHJcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XHJcblxyXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XHJcbiAgaWYgKCFvKSByZXR1cm47XHJcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xyXG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcclxuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xyXG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xyXG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xyXG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xyXG5cclxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XHJcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xyXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXHJcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXHJcblxyXG52YXIgY2FjaGVkU2V0VGltZW91dDtcclxudmFyIGNhY2hlZENsZWFyVGltZW91dDtcclxuXHJcbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcclxufVxyXG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XHJcbn1cclxuKGZ1bmN0aW9uICgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XHJcbiAgICB9XHJcbn0gKCkpXHJcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XHJcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xyXG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xyXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XHJcbiAgICB9XHJcbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxyXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XHJcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XHJcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xyXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XHJcbiAgICB9IGNhdGNoKGUpe1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxyXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XHJcbiAgICAgICAgfSBjYXRjaChlKXtcclxuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG59XHJcbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcclxuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xyXG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xyXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcclxuICAgIH1cclxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcclxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xyXG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcclxuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcclxuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XHJcbiAgICB9IGNhdGNoIChlKXtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XHJcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpe1xyXG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cclxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxyXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn1cclxudmFyIHF1ZXVlID0gW107XHJcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xyXG52YXIgY3VycmVudFF1ZXVlO1xyXG52YXIgcXVldWVJbmRleCA9IC0xO1xyXG5cclxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xyXG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcclxuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XHJcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xyXG4gICAgfVxyXG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xyXG4gICAgICAgIGRyYWluUXVldWUoKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcclxuICAgIGlmIChkcmFpbmluZykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xyXG4gICAgZHJhaW5pbmcgPSB0cnVlO1xyXG5cclxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XHJcbiAgICB3aGlsZShsZW4pIHtcclxuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcclxuICAgICAgICBxdWV1ZSA9IFtdO1xyXG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcclxuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xyXG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcclxuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxufVxyXG5cclxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcclxuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcclxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XHJcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xyXG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXHJcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xyXG4gICAgdGhpcy5mdW4gPSBmdW47XHJcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XHJcbn1cclxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XHJcbn07XHJcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XHJcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XHJcbnByb2Nlc3MuZW52ID0ge307XHJcbnByb2Nlc3MuYXJndiA9IFtdO1xyXG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcclxucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xyXG5cclxuZnVuY3Rpb24gbm9vcCgpIHt9XHJcblxyXG5wcm9jZXNzLm9uID0gbm9vcDtcclxucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XHJcbnByb2Nlc3Mub25jZSA9IG5vb3A7XHJcbnByb2Nlc3Mub2ZmID0gbm9vcDtcclxucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XHJcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcclxucHJvY2Vzcy5lbWl0ID0gbm9vcDtcclxucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xyXG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xyXG5cclxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxyXG5cclxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcclxufTtcclxuXHJcbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XHJcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xyXG59O1xyXG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIGRsbF9hMGVhODE5NmU4NjliOWI0NDI1ZSAqLyBcImRsbC1yZWZlcmVuY2UgZGxsX2EwZWE4MTk2ZTg2OWI5YjQ0MjVlXCIpKShcIi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanNcIik7IiwiLyoqXHJcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxyXG4gKlxyXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcclxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxyXG4gKi9cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcclxudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcclxuXHJcbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XHJcbnZhciBjaGVja1Byb3BUeXBlcyA9IHJlcXVpcmUoJy4vY2hlY2tQcm9wVHlwZXMnKTtcclxuXHJcbnZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XHJcbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XHJcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgdGV4dDtcclxuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cclxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXHJcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XHJcbiAgICB9IGNhdGNoICh4KSB7fVxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwoKSB7XHJcbiAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpIHtcclxuICAvKiBnbG9iYWwgU3ltYm9sICovXHJcbiAgdmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xyXG4gIHZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJzsgLy8gQmVmb3JlIFN5bWJvbCBzcGVjLlxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBpdGVyYXRvciBtZXRob2QgZnVuY3Rpb24gY29udGFpbmVkIG9uIHRoZSBpdGVyYWJsZSBvYmplY3QuXHJcbiAgICpcclxuICAgKiBCZSBzdXJlIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgaXRlcmFibGUgYXMgY29udGV4dDpcclxuICAgKlxyXG4gICAqICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obXlJdGVyYWJsZSk7XHJcbiAgICogICAgIGlmIChpdGVyYXRvckZuKSB7XHJcbiAgICogICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG15SXRlcmFibGUpO1xyXG4gICAqICAgICAgIC4uLlxyXG4gICAqICAgICB9XHJcbiAgICpcclxuICAgKiBAcGFyYW0gez9vYmplY3R9IG1heWJlSXRlcmFibGVcclxuICAgKiBAcmV0dXJuIHs/ZnVuY3Rpb259XHJcbiAgICovXHJcbiAgZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XHJcbiAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xyXG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIHJldHVybiBpdGVyYXRvckZuO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29sbGVjdGlvbiBvZiBtZXRob2RzIHRoYXQgYWxsb3cgZGVjbGFyYXRpb24gYW5kIHZhbGlkYXRpb24gb2YgcHJvcHMgdGhhdCBhcmVcclxuICAgKiBzdXBwbGllZCB0byBSZWFjdCBjb21wb25lbnRzLiBFeGFtcGxlIHVzYWdlOlxyXG4gICAqXHJcbiAgICogICB2YXIgUHJvcHMgPSByZXF1aXJlKCdSZWFjdFByb3BUeXBlcycpO1xyXG4gICAqICAgdmFyIE15QXJ0aWNsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICAgKiAgICAgcHJvcFR5cGVzOiB7XHJcbiAgICogICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIHByb3AgbmFtZWQgXCJkZXNjcmlwdGlvblwiLlxyXG4gICAqICAgICAgIGRlc2NyaXB0aW9uOiBQcm9wcy5zdHJpbmcsXHJcbiAgICpcclxuICAgKiAgICAgICAvLyBBIHJlcXVpcmVkIGVudW0gcHJvcCBuYW1lZCBcImNhdGVnb3J5XCIuXHJcbiAgICogICAgICAgY2F0ZWdvcnk6IFByb3BzLm9uZU9mKFsnTmV3cycsJ1Bob3RvcyddKS5pc1JlcXVpcmVkLFxyXG4gICAqXHJcbiAgICogICAgICAgLy8gQSBwcm9wIG5hbWVkIFwiZGlhbG9nXCIgdGhhdCByZXF1aXJlcyBhbiBpbnN0YW5jZSBvZiBEaWFsb2cuXHJcbiAgICogICAgICAgZGlhbG9nOiBQcm9wcy5pbnN0YW5jZU9mKERpYWxvZykuaXNSZXF1aXJlZFxyXG4gICAqICAgICB9LFxyXG4gICAqICAgICByZW5kZXI6IGZ1bmN0aW9uKCkgeyAuLi4gfVxyXG4gICAqICAgfSk7XHJcbiAgICpcclxuICAgKiBBIG1vcmUgZm9ybWFsIHNwZWNpZmljYXRpb24gb2YgaG93IHRoZXNlIG1ldGhvZHMgYXJlIHVzZWQ6XHJcbiAgICpcclxuICAgKiAgIHR5cGUgOj0gYXJyYXl8Ym9vbHxmdW5jfG9iamVjdHxudW1iZXJ8c3RyaW5nfG9uZU9mKFsuLi5dKXxpbnN0YW5jZU9mKC4uLilcclxuICAgKiAgIGRlY2wgOj0gUmVhY3RQcm9wVHlwZXMue3R5cGV9KC5pc1JlcXVpcmVkKT9cclxuICAgKlxyXG4gICAqIEVhY2ggYW5kIGV2ZXJ5IGRlY2xhcmF0aW9uIHByb2R1Y2VzIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUuIFRoaXNcclxuICAgKiBhbGxvd3MgdGhlIGNyZWF0aW9uIG9mIGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9ucy4gRm9yIGV4YW1wbGU6XHJcbiAgICpcclxuICAgKiAgdmFyIE15TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICAgKiAgICBwcm9wVHlwZXM6IHtcclxuICAgKiAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBvciBVUkkgcHJvcCBuYW1lZCBcImhyZWZcIi5cclxuICAgKiAgICAgIGhyZWY6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xyXG4gICAqICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xyXG4gICAqICAgICAgICBpZiAocHJvcFZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHByb3BWYWx1ZSAhPT0gJ3N0cmluZycgJiZcclxuICAgKiAgICAgICAgICAgICEocHJvcFZhbHVlIGluc3RhbmNlb2YgVVJJKSkge1xyXG4gICAqICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXHJcbiAgICogICAgICAgICAgICAnRXhwZWN0ZWQgYSBzdHJpbmcgb3IgYW4gVVJJIGZvciAnICsgcHJvcE5hbWUgKyAnIGluICcgK1xyXG4gICAqICAgICAgICAgICAgY29tcG9uZW50TmFtZVxyXG4gICAqICAgICAgICAgICk7XHJcbiAgICogICAgICAgIH1cclxuICAgKiAgICAgIH1cclxuICAgKiAgICB9LFxyXG4gICAqICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7Li4ufVxyXG4gICAqICB9KTtcclxuICAgKlxyXG4gICAqIEBpbnRlcm5hbFxyXG4gICAqL1xyXG5cclxuICB2YXIgQU5PTllNT1VTID0gJzw8YW5vbnltb3VzPj4nO1xyXG5cclxuICAvLyBJbXBvcnRhbnQhXHJcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanNgLlxyXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcclxuICAgIGFycmF5OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYXJyYXknKSxcclxuICAgIGJvb2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdib29sZWFuJyksXHJcbiAgICBmdW5jOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignZnVuY3Rpb24nKSxcclxuICAgIG51bWJlcjogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ251bWJlcicpLFxyXG4gICAgb2JqZWN0OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignb2JqZWN0JyksXHJcbiAgICBzdHJpbmc6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcclxuICAgIHN5bWJvbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N5bWJvbCcpLFxyXG5cclxuICAgIGFueTogY3JlYXRlQW55VHlwZUNoZWNrZXIoKSxcclxuICAgIGFycmF5T2Y6IGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcixcclxuICAgIGVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpLFxyXG4gICAgZWxlbWVudFR5cGU6IGNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIoKSxcclxuICAgIGluc3RhbmNlT2Y6IGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIsXHJcbiAgICBub2RlOiBjcmVhdGVOb2RlQ2hlY2tlcigpLFxyXG4gICAgb2JqZWN0T2Y6IGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIsXHJcbiAgICBvbmVPZjogY3JlYXRlRW51bVR5cGVDaGVja2VyLFxyXG4gICAgb25lT2ZUeXBlOiBjcmVhdGVVbmlvblR5cGVDaGVja2VyLFxyXG4gICAgc2hhcGU6IGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIsXHJcbiAgICBleGFjdDogY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcixcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXHJcbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXHJcbiAgICovXHJcbiAgLyplc2xpbnQtZGlzYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xyXG4gIGZ1bmN0aW9uIGlzKHgsIHkpIHtcclxuICAgIC8vIFNhbWVWYWx1ZSBhbGdvcml0aG1cclxuICAgIGlmICh4ID09PSB5KSB7XHJcbiAgICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxyXG4gICAgICAvLyBTdGVwcyA2LmItNi5lOiArMCAhPSAtMFxyXG4gICAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBTdGVwIDYuYTogTmFOID09IE5hTlxyXG4gICAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xyXG4gICAgfVxyXG4gIH1cclxuICAvKmVzbGludC1lbmFibGUgbm8tc2VsZi1jb21wYXJlKi9cclxuXHJcbiAgLyoqXHJcbiAgICogV2UgdXNlIGFuIEVycm9yLWxpa2Ugb2JqZWN0IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IGFzIHBlb3BsZSBtYXkgY2FsbFxyXG4gICAqIFByb3BUeXBlcyBkaXJlY3RseSBhbmQgaW5zcGVjdCB0aGVpciBvdXRwdXQuIEhvd2V2ZXIsIHdlIGRvbid0IHVzZSByZWFsXHJcbiAgICogRXJyb3JzIGFueW1vcmUuIFdlIGRvbid0IGluc3BlY3QgdGhlaXIgc3RhY2sgYW55d2F5LCBhbmQgY3JlYXRpbmcgdGhlbVxyXG4gICAqIGlzIHByb2hpYml0aXZlbHkgZXhwZW5zaXZlIGlmIHRoZXkgYXJlIGNyZWF0ZWQgdG9vIG9mdGVuLCBzdWNoIGFzIHdoYXRcclxuICAgKiBoYXBwZW5zIGluIG9uZU9mVHlwZSgpIGZvciBhbnkgdHlwZSBiZWZvcmUgdGhlIG9uZSB0aGF0IG1hdGNoZWQuXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gUHJvcFR5cGVFcnJvcihtZXNzYWdlKSB7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xyXG4gICAgdGhpcy5zdGFjayA9ICcnO1xyXG4gIH1cclxuICAvLyBNYWtlIGBpbnN0YW5jZW9mIEVycm9yYCBzdGlsbCB3b3JrIGZvciByZXR1cm5lZCBlcnJvcnMuXHJcbiAgUHJvcFR5cGVFcnJvci5wcm90b3R5cGUgPSBFcnJvci5wcm90b3R5cGU7XHJcblxyXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUgPSB7fTtcclxuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50ID0gMDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNoZWNrVHlwZShpc1JlcXVpcmVkLCBwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xyXG4gICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XHJcbiAgICAgIHByb3BGdWxsTmFtZSA9IHByb3BGdWxsTmFtZSB8fCBwcm9wTmFtZTtcclxuXHJcbiAgICAgIGlmIChzZWNyZXQgIT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XHJcbiAgICAgICAgaWYgKHRocm93T25EaXJlY3RBY2Nlc3MpIHtcclxuICAgICAgICAgIC8vIE5ldyBiZWhhdmlvciBvbmx5IGZvciB1c2VycyBvZiBgcHJvcC10eXBlc2AgcGFja2FnZVxyXG4gICAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcihcclxuICAgICAgICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xyXG4gICAgICAgICAgICAnVXNlIGBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKWAgdG8gY2FsbCB0aGVtLiAnICtcclxuICAgICAgICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XHJcbiAgICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgLy8gT2xkIGJlaGF2aW9yIGZvciBwZW9wbGUgdXNpbmcgUmVhY3QuUHJvcFR5cGVzXHJcbiAgICAgICAgICB2YXIgY2FjaGVLZXkgPSBjb21wb25lbnROYW1lICsgJzonICsgcHJvcE5hbWU7XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICFtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gJiZcclxuICAgICAgICAgICAgLy8gQXZvaWQgc3BhbW1pbmcgdGhlIGNvbnNvbGUgYmVjYXVzZSB0aGV5IGFyZSBvZnRlbiBub3QgYWN0aW9uYWJsZSBleGNlcHQgZm9yIGxpYiBhdXRob3JzXHJcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50IDwgM1xyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHByaW50V2FybmluZyhcclxuICAgICAgICAgICAgICAnWW91IGFyZSBtYW51YWxseSBjYWxsaW5nIGEgUmVhY3QuUHJvcFR5cGVzIHZhbGlkYXRpb24gJyArXHJcbiAgICAgICAgICAgICAgJ2Z1bmN0aW9uIGZvciB0aGUgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBwcm9wIG9uIGAnICsgY29tcG9uZW50TmFtZSAgKyAnYC4gVGhpcyBpcyBkZXByZWNhdGVkICcgK1xyXG4gICAgICAgICAgICAgICdhbmQgd2lsbCB0aHJvdyBpbiB0aGUgc3RhbmRhbG9uZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXHJcbiAgICAgICAgICAgICAgJ1lvdSBtYXkgYmUgc2VlaW5nIHRoaXMgd2FybmluZyBkdWUgdG8gYSB0aGlyZC1wYXJ0eSBQcm9wVHlwZXMgJyArXHJcbiAgICAgICAgICAgICAgJ2xpYnJhcnkuIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmctZG9udC1jYWxsLXByb3B0eXBlcyAnICsgJ2ZvciBkZXRhaWxzLidcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldID0gdHJ1ZTtcclxuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQrKztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XHJcbiAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcclxuICAgICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCAnICsgKCdpbiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgbnVsbGAuJykpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCBpbiAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgdW5kZWZpbmVkYC4nKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNoYWluZWRDaGVja1R5cGUgPSBjaGVja1R5cGUuYmluZChudWxsLCBmYWxzZSk7XHJcbiAgICBjaGFpbmVkQ2hlY2tUeXBlLmlzUmVxdWlyZWQgPSBjaGVja1R5cGUuYmluZChudWxsLCB0cnVlKTtcclxuXHJcbiAgICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKGV4cGVjdGVkVHlwZSkge1xyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcclxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcclxuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcclxuICAgICAgaWYgKHByb3BUeXBlICE9PSBleHBlY3RlZFR5cGUpIHtcclxuICAgICAgICAvLyBgcHJvcFZhbHVlYCBiZWluZyBpbnN0YW5jZSBvZiwgc2F5LCBkYXRlL3JlZ2V4cCwgcGFzcyB0aGUgJ29iamVjdCdcclxuICAgICAgICAvLyBjaGVjaywgYnV0IHdlIGNhbiBvZmZlciBhIG1vcmUgcHJlY2lzZSBlcnJvciBtZXNzYWdlIGhlcmUgcmF0aGVyIHRoYW5cclxuICAgICAgICAvLyAnb2YgdHlwZSBgb2JqZWN0YCcuXHJcbiAgICAgICAgdmFyIHByZWNpc2VUeXBlID0gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJlY2lzZVR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2AnICsgZXhwZWN0ZWRUeXBlICsgJ2AuJykpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNyZWF0ZUFueVR5cGVDaGVja2VyKCkge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcclxuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIGFycmF5T2YuJyk7XHJcbiAgICAgIH1cclxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcclxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcclxuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIGFycmF5LicpKTtcclxuICAgICAgfVxyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BWYWx1ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICdbJyArIGkgKyAnXScsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcclxuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSB7XHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcclxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcclxuICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XHJcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQuJykpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIoKSB7XHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcclxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcclxuICAgICAgaWYgKCFSZWFjdElzLmlzVmFsaWRFbGVtZW50VHlwZShwcm9wVmFsdWUpKSB7XHJcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQgdHlwZS4nKSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcihleHBlY3RlZENsYXNzKSB7XHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcclxuICAgICAgaWYgKCEocHJvcHNbcHJvcE5hbWVdIGluc3RhbmNlb2YgZXhwZWN0ZWRDbGFzcykpIHtcclxuICAgICAgICB2YXIgZXhwZWN0ZWRDbGFzc05hbWUgPSBleHBlY3RlZENsYXNzLm5hbWUgfHwgQU5PTllNT1VTO1xyXG4gICAgICAgIHZhciBhY3R1YWxDbGFzc05hbWUgPSBnZXRDbGFzc05hbWUocHJvcHNbcHJvcE5hbWVdKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBhY3R1YWxDbGFzc05hbWUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2luc3RhbmNlIG9mIGAnICsgZXhwZWN0ZWRDbGFzc05hbWUgKyAnYC4nKSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlRW51bVR5cGVDaGVja2VyKGV4cGVjdGVkVmFsdWVzKSB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXhwZWN0ZWRWYWx1ZXMpKSB7XHJcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICBwcmludFdhcm5pbmcoXHJcbiAgICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50cyBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXksIGdvdCAnICsgYXJndW1lbnRzLmxlbmd0aCArICcgYXJndW1lbnRzLiAnICtcclxuICAgICAgICAgICAgJ0EgY29tbW9uIG1pc3Rha2UgaXMgdG8gd3JpdGUgb25lT2YoeCwgeSwgeikgaW5zdGVhZCBvZiBvbmVPZihbeCwgeSwgel0pLidcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXkuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xyXG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGVjdGVkVmFsdWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGlzKHByb3BWYWx1ZSwgZXhwZWN0ZWRWYWx1ZXNbaV0pKSB7XHJcbiAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciB2YWx1ZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShleHBlY3RlZFZhbHVlcywgZnVuY3Rpb24gcmVwbGFjZXIoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xyXG4gICAgICAgIGlmICh0eXBlID09PSAnc3ltYm9sJykge1xyXG4gICAgICAgICAgcmV0dXJuIFN0cmluZyh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdmFsdWUgYCcgKyBTdHJpbmcocHJvcFZhbHVlKSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBvbmUgb2YgJyArIHZhbHVlc1N0cmluZyArICcuJykpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcclxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xyXG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgb2JqZWN0T2YuJyk7XHJcbiAgICAgIH1cclxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcclxuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcclxuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIG9iamVjdC4nKSk7XHJcbiAgICAgIH1cclxuICAgICAgZm9yICh2YXIga2V5IGluIHByb3BWYWx1ZSkge1xyXG4gICAgICAgIGlmIChoYXMocHJvcFZhbHVlLCBrZXkpKSB7XHJcbiAgICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xyXG4gICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVVbmlvblR5cGVDaGVja2VyKGFycmF5T2ZUeXBlQ2hlY2tlcnMpIHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheU9mVHlwZUNoZWNrZXJzKSkge1xyXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZSwgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYXJyYXkuJykgOiB2b2lkIDA7XHJcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XHJcbiAgICAgIGlmICh0eXBlb2YgY2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIHByaW50V2FybmluZyhcclxuICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZS4gRXhwZWN0ZWQgYW4gYXJyYXkgb2YgY2hlY2sgZnVuY3Rpb25zLCBidXQgJyArXHJcbiAgICAgICAgICAncmVjZWl2ZWQgJyArIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyhjaGVja2VyKSArICcgYXQgaW5kZXggJyArIGkgKyAnLidcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcclxuICAgICAgICBpZiAoY2hlY2tlcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KSA9PSBudWxsKSB7XHJcbiAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJykpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNyZWF0ZU5vZGVDaGVja2VyKCkge1xyXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XHJcbiAgICAgIGlmICghaXNOb2RlKHByb3BzW3Byb3BOYW1lXSkpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIFJlYWN0Tm9kZS4nKSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcclxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcclxuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcclxuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcclxuICAgICAgfVxyXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc2hhcGVUeXBlcykge1xyXG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xyXG4gICAgICAgIGlmICghY2hlY2tlcikge1xyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcclxuICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgIHJldHVybiBlcnJvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcclxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcclxuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcclxuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcclxuICAgICAgfVxyXG4gICAgICAvLyBXZSBuZWVkIHRvIGNoZWNrIGFsbCBrZXlzIGluIGNhc2Ugc29tZSBhcmUgcmVxdWlyZWQgYnV0IG1pc3NpbmcgZnJvbVxyXG4gICAgICAvLyBwcm9wcy5cclxuICAgICAgdmFyIGFsbEtleXMgPSBhc3NpZ24oe30sIHByb3BzW3Byb3BOYW1lXSwgc2hhcGVUeXBlcyk7XHJcbiAgICAgIGZvciAodmFyIGtleSBpbiBhbGxLZXlzKSB7XHJcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XHJcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XHJcbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXHJcbiAgICAgICAgICAgICdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBrZXkgYCcgKyBrZXkgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nICtcclxuICAgICAgICAgICAgJ1xcbkJhZCBvYmplY3Q6ICcgKyBKU09OLnN0cmluZ2lmeShwcm9wc1twcm9wTmFtZV0sIG51bGwsICcgICcpICtcclxuICAgICAgICAgICAgJ1xcblZhbGlkIGtleXM6ICcgKyAgSlNPTi5zdHJpbmdpZnkoT2JqZWN0LmtleXMoc2hhcGVUeXBlcyksIG51bGwsICcgICcpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XHJcbiAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBpc05vZGUocHJvcFZhbHVlKSB7XHJcbiAgICBzd2l0Y2ggKHR5cGVvZiBwcm9wVmFsdWUpIHtcclxuICAgICAgY2FzZSAnbnVtYmVyJzpcclxuICAgICAgY2FzZSAnc3RyaW5nJzpcclxuICAgICAgY2FzZSAndW5kZWZpbmVkJzpcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgY2FzZSAnYm9vbGVhbic6XHJcbiAgICAgICAgcmV0dXJuICFwcm9wVmFsdWU7XHJcbiAgICAgIGNhc2UgJ29iamVjdCc6XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xyXG4gICAgICAgICAgcmV0dXJuIHByb3BWYWx1ZS5ldmVyeShpc05vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHJvcFZhbHVlID09PSBudWxsIHx8IGlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKHByb3BWYWx1ZSk7XHJcbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcclxuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChwcm9wVmFsdWUpO1xyXG4gICAgICAgICAgdmFyIHN0ZXA7XHJcbiAgICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gcHJvcFZhbHVlLmVudHJpZXMpIHtcclxuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xyXG4gICAgICAgICAgICAgIGlmICghaXNOb2RlKHN0ZXAudmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBJdGVyYXRvciB3aWxsIHByb3ZpZGUgZW50cnkgW2ssdl0gdHVwbGVzIHJhdGhlciB0aGFuIHZhbHVlcy5cclxuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xyXG4gICAgICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XHJcbiAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzTm9kZShlbnRyeVsxXSkpIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSB7XHJcbiAgICAvLyBOYXRpdmUgU3ltYm9sLlxyXG4gICAgaWYgKHByb3BUeXBlID09PSAnc3ltYm9sJykge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBmYWxzeSB2YWx1ZSBjYW4ndCBiZSBhIFN5bWJvbFxyXG4gICAgaWYgKCFwcm9wVmFsdWUpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ10gPT09ICdTeW1ib2wnXHJcbiAgICBpZiAocHJvcFZhbHVlWydAQHRvU3RyaW5nVGFnJ10gPT09ICdTeW1ib2wnKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZhbGxiYWNrIGZvciBub24tc3BlYyBjb21wbGlhbnQgU3ltYm9scyB3aGljaCBhcmUgcG9seWZpbGxlZC5cclxuICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHByb3BWYWx1ZSBpbnN0YW5jZW9mIFN5bWJvbCkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvLyBFcXVpdmFsZW50IG9mIGB0eXBlb2ZgIGJ1dCB3aXRoIHNwZWNpYWwgaGFuZGxpbmcgZm9yIGFycmF5IGFuZCByZWdleHAuXHJcbiAgZnVuY3Rpb24gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSB7XHJcbiAgICB2YXIgcHJvcFR5cGUgPSB0eXBlb2YgcHJvcFZhbHVlO1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xyXG4gICAgICByZXR1cm4gJ2FycmF5JztcclxuICAgIH1cclxuICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcclxuICAgICAgLy8gT2xkIHdlYmtpdHMgKGF0IGxlYXN0IHVudGlsIEFuZHJvaWQgNC4wKSByZXR1cm4gJ2Z1bmN0aW9uJyByYXRoZXIgdGhhblxyXG4gICAgICAvLyAnb2JqZWN0JyBmb3IgdHlwZW9mIGEgUmVnRXhwLiBXZSdsbCBub3JtYWxpemUgdGhpcyBoZXJlIHNvIHRoYXQgL2JsYS9cclxuICAgICAgLy8gcGFzc2VzIFByb3BUeXBlcy5vYmplY3QuXHJcbiAgICAgIHJldHVybiAnb2JqZWN0JztcclxuICAgIH1cclxuICAgIGlmIChpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSkge1xyXG4gICAgICByZXR1cm4gJ3N5bWJvbCc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJvcFR5cGU7XHJcbiAgfVxyXG5cclxuICAvLyBUaGlzIGhhbmRsZXMgbW9yZSB0eXBlcyB0aGFuIGBnZXRQcm9wVHlwZWAuIE9ubHkgdXNlZCBmb3IgZXJyb3IgbWVzc2FnZXMuXHJcbiAgLy8gU2VlIGBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcmAuXHJcbiAgZnVuY3Rpb24gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIHByb3BWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvcFZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiAnJyArIHByb3BWYWx1ZTtcclxuICAgIH1cclxuICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XHJcbiAgICBpZiAocHJvcFR5cGUgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgICAgcmV0dXJuICdkYXRlJztcclxuICAgICAgfSBlbHNlIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcclxuICAgICAgICByZXR1cm4gJ3JlZ2V4cCc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBwcm9wVHlwZTtcclxuICB9XHJcblxyXG4gIC8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyBwb3N0Zml4ZWQgdG8gYSB3YXJuaW5nIGFib3V0IGFuIGludmFsaWQgdHlwZS5cclxuICAvLyBGb3IgZXhhbXBsZSwgXCJ1bmRlZmluZWRcIiBvciBcIm9mIHR5cGUgYXJyYXlcIlxyXG4gIGZ1bmN0aW9uIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyh2YWx1ZSkge1xyXG4gICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSAnYXJyYXknOlxyXG4gICAgICBjYXNlICdvYmplY3QnOlxyXG4gICAgICAgIHJldHVybiAnYW4gJyArIHR5cGU7XHJcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxyXG4gICAgICBjYXNlICdkYXRlJzpcclxuICAgICAgY2FzZSAncmVnZXhwJzpcclxuICAgICAgICByZXR1cm4gJ2EgJyArIHR5cGU7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHR5cGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBSZXR1cm5zIGNsYXNzIG5hbWUgb2YgdGhlIG9iamVjdCwgaWYgYW55LlxyXG4gIGZ1bmN0aW9uIGdldENsYXNzTmFtZShwcm9wVmFsdWUpIHtcclxuICAgIGlmICghcHJvcFZhbHVlLmNvbnN0cnVjdG9yIHx8ICFwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZSkge1xyXG4gICAgICByZXR1cm4gQU5PTllNT1VTO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lO1xyXG4gIH1cclxuXHJcbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBjaGVja1Byb3BUeXBlcztcclxuICBSZWFjdFByb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZSA9IGNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlO1xyXG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xyXG5cclxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XHJcbn07XHJcbiIsIi8qKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cclxuICpcclxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXHJcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cclxuICovXHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gIHZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcclxuXHJcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXHJcbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxyXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcclxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMnKShSZWFjdElzLmlzRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XHJcbn0gZWxzZSB7XHJcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cclxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXHJcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSBkbGxfYTBlYTgxOTZlODY5YjliNDQyNWUgKi8gXCJkbGwtcmVmZXJlbmNlIGRsbF9hMGVhODE5NmU4NjliOWI0NDI1ZVwiKSkoXCIuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qc1wiKTsiLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cclxuLy9cclxuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcclxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxyXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcclxuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxyXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XHJcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxyXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuLy9cclxuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcclxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcbi8vXHJcbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1NcclxuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxyXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXHJcbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxyXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1JcclxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxyXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxyXG5cclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuLy8gSWYgb2JqLmhhc093blByb3BlcnR5IGhhcyBiZWVuIG92ZXJyaWRkZW4sIHRoZW4gY2FsbGluZ1xyXG4vLyBvYmouaGFzT3duUHJvcGVydHkocHJvcCkgd2lsbCBicmVhay5cclxuLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vam95ZW50L25vZGUvaXNzdWVzLzE3MDdcclxuZnVuY3Rpb24gaGFzT3duUHJvcGVydHkob2JqLCBwcm9wKSB7XHJcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHFzLCBzZXAsIGVxLCBvcHRpb25zKSB7XHJcbiAgc2VwID0gc2VwIHx8ICcmJztcclxuICBlcSA9IGVxIHx8ICc9JztcclxuICB2YXIgb2JqID0ge307XHJcblxyXG4gIGlmICh0eXBlb2YgcXMgIT09ICdzdHJpbmcnIHx8IHFzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgcmV0dXJuIG9iajtcclxuICB9XHJcblxyXG4gIHZhciByZWdleHAgPSAvXFwrL2c7XHJcbiAgcXMgPSBxcy5zcGxpdChzZXApO1xyXG5cclxuICB2YXIgbWF4S2V5cyA9IDEwMDA7XHJcbiAgaWYgKG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubWF4S2V5cyA9PT0gJ251bWJlcicpIHtcclxuICAgIG1heEtleXMgPSBvcHRpb25zLm1heEtleXM7XHJcbiAgfVxyXG5cclxuICB2YXIgbGVuID0gcXMubGVuZ3RoO1xyXG4gIC8vIG1heEtleXMgPD0gMCBtZWFucyB0aGF0IHdlIHNob3VsZCBub3QgbGltaXQga2V5cyBjb3VudFxyXG4gIGlmIChtYXhLZXlzID4gMCAmJiBsZW4gPiBtYXhLZXlzKSB7XHJcbiAgICBsZW4gPSBtYXhLZXlzO1xyXG4gIH1cclxuXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xyXG4gICAgdmFyIHggPSBxc1tpXS5yZXBsYWNlKHJlZ2V4cCwgJyUyMCcpLFxyXG4gICAgICAgIGlkeCA9IHguaW5kZXhPZihlcSksXHJcbiAgICAgICAga3N0ciwgdnN0ciwgaywgdjtcclxuXHJcbiAgICBpZiAoaWR4ID49IDApIHtcclxuICAgICAga3N0ciA9IHguc3Vic3RyKDAsIGlkeCk7XHJcbiAgICAgIHZzdHIgPSB4LnN1YnN0cihpZHggKyAxKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGtzdHIgPSB4O1xyXG4gICAgICB2c3RyID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgayA9IGRlY29kZVVSSUNvbXBvbmVudChrc3RyKTtcclxuICAgIHYgPSBkZWNvZGVVUklDb21wb25lbnQodnN0cik7XHJcblxyXG4gICAgaWYgKCFoYXNPd25Qcm9wZXJ0eShvYmosIGspKSB7XHJcbiAgICAgIG9ialtrXSA9IHY7XHJcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkob2JqW2tdKSkge1xyXG4gICAgICBvYmpba10ucHVzaCh2KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG9ialtrXSA9IFtvYmpba10sIHZdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG9iajtcclxufTtcclxuXHJcbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoeHMpIHtcclxuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHhzKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcclxufTtcclxuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXHJcbi8vXHJcbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXHJcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcclxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXHJcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcclxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxyXG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcclxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbi8vXHJcbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXHJcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4vL1xyXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXHJcbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0ZcclxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxyXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcclxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXHJcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcclxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBzdHJpbmdpZnlQcmltaXRpdmUgPSBmdW5jdGlvbih2KSB7XHJcbiAgc3dpdGNoICh0eXBlb2Ygdikge1xyXG4gICAgY2FzZSAnc3RyaW5nJzpcclxuICAgICAgcmV0dXJuIHY7XHJcblxyXG4gICAgY2FzZSAnYm9vbGVhbic6XHJcbiAgICAgIHJldHVybiB2ID8gJ3RydWUnIDogJ2ZhbHNlJztcclxuXHJcbiAgICBjYXNlICdudW1iZXInOlxyXG4gICAgICByZXR1cm4gaXNGaW5pdGUodikgPyB2IDogJyc7XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuICcnO1xyXG4gIH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqLCBzZXAsIGVxLCBuYW1lKSB7XHJcbiAgc2VwID0gc2VwIHx8ICcmJztcclxuICBlcSA9IGVxIHx8ICc9JztcclxuICBpZiAob2JqID09PSBudWxsKSB7XHJcbiAgICBvYmogPSB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpIHtcclxuICAgIHJldHVybiBtYXAob2JqZWN0S2V5cyhvYmopLCBmdW5jdGlvbihrKSB7XHJcbiAgICAgIHZhciBrcyA9IGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUoaykpICsgZXE7XHJcbiAgICAgIGlmIChpc0FycmF5KG9ialtrXSkpIHtcclxuICAgICAgICByZXR1cm4gbWFwKG9ialtrXSwgZnVuY3Rpb24odikge1xyXG4gICAgICAgICAgcmV0dXJuIGtzICsgZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZSh2KSk7XHJcbiAgICAgICAgfSkuam9pbihzZXApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBrcyArIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUob2JqW2tdKSk7XHJcbiAgICAgIH1cclxuICAgIH0pLmpvaW4oc2VwKTtcclxuXHJcbiAgfVxyXG5cclxuICBpZiAoIW5hbWUpIHJldHVybiAnJztcclxuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZShuYW1lKSkgKyBlcSArXHJcbiAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUob2JqKSk7XHJcbn07XHJcblxyXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKHhzKSB7XHJcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4cykgPT09ICdbb2JqZWN0IEFycmF5XSc7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBtYXAgKHhzLCBmKSB7XHJcbiAgaWYgKHhzLm1hcCkgcmV0dXJuIHhzLm1hcChmKTtcclxuICB2YXIgcmVzID0gW107XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB4cy5sZW5ndGg7IGkrKykge1xyXG4gICAgcmVzLnB1c2goZih4c1tpXSwgaSkpO1xyXG4gIH1cclxuICByZXR1cm4gcmVzO1xyXG59XHJcblxyXG52YXIgb2JqZWN0S2V5cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIChvYmopIHtcclxuICB2YXIgcmVzID0gW107XHJcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xyXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHJlcy5wdXNoKGtleSk7XHJcbiAgfVxyXG4gIHJldHVybiByZXM7XHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmV4cG9ydHMuZGVjb2RlID0gZXhwb3J0cy5wYXJzZSA9IHJlcXVpcmUoJy4vZGVjb2RlJyk7XHJcbmV4cG9ydHMuZW5jb2RlID0gZXhwb3J0cy5zdHJpbmdpZnkgPSByZXF1aXJlKCcuL2VuY29kZScpO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIGRsbF9hMGVhODE5NmU4NjliOWI0NDI1ZSAqLyBcImRsbC1yZWZlcmVuY2UgZGxsX2EwZWE4MTk2ZTg2OWI5YjQ0MjVlXCIpKShcIi4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9pbmRleC5qc1wiKTsiLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjEzLjFcclxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcclxuICpcclxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXHJcbiAqXHJcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxyXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXHJcbiAqL1xyXG5cclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuXHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgKGZ1bmN0aW9uKCkge1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxyXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXHJcbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XHJcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XHJcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpIDogMHhlYWNhO1xyXG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XHJcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKSA6IDB4ZWFjYztcclxudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpIDogMHhlYWQyO1xyXG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XHJcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0JykgOiAweGVhY2U7IC8vIFRPRE86IFdlIGRvbid0IHVzZSBBc3luY01vZGUgb3IgQ29uY3VycmVudE1vZGUgYW55bW9yZS4gVGhleSB3ZXJlIHRlbXBvcmFyeVxyXG4vLyAodW5zdGFibGUpIEFQSXMgdGhhdCBoYXZlIGJlZW4gcmVtb3ZlZC4gQ2FuIHdlIHJlbW92ZSB0aGUgc3ltYm9scz9cclxuXHJcbnZhciBSRUFDVF9BU1lOQ19NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5hc3luY19tb2RlJykgOiAweGVhY2Y7XHJcbnZhciBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbmN1cnJlbnRfbW9kZScpIDogMHhlYWNmO1xyXG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XHJcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKSA6IDB4ZWFkMTtcclxudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKSA6IDB4ZWFkODtcclxudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcclxudmFyIFJFQUNUX0xBWllfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKSA6IDB4ZWFkNDtcclxudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5ibG9jaycpIDogMHhlYWQ5O1xyXG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XHJcbnZhciBSRUFDVF9SRVNQT05ERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnJlc3BvbmRlcicpIDogMHhlYWQ2O1xyXG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnNjb3BlJykgOiAweGVhZDc7XHJcblxyXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xyXG4gIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgfHwgLy8gTm90ZTogaXRzIHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIGlmIGl0J3MgYSBwb2x5ZmlsbC5cclxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUkVTUE9OREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfU0NPUEVfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xyXG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcclxuICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcclxuXHJcbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XHJcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxyXG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XHJcblxyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgY2FzZSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU6XHJcbiAgICAgICAgICBjYXNlIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFOlxyXG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxyXG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxyXG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxyXG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxyXG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcclxuXHJcbiAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xyXG5cclxuICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcclxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcclxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XHJcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XHJcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XHJcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcclxuXHJcbiAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxyXG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB1bmRlZmluZWQ7XHJcbn0gLy8gQXN5bmNNb2RlIGlzIGRlcHJlY2F0ZWQgYWxvbmcgd2l0aCBpc0FzeW5jTW9kZVxyXG5cclxudmFyIEFzeW5jTW9kZSA9IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcclxudmFyIENvbmN1cnJlbnRNb2RlID0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XHJcbnZhciBDb250ZXh0Q29uc3VtZXIgPSBSRUFDVF9DT05URVhUX1RZUEU7XHJcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xyXG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcclxudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xyXG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xyXG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcclxudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XHJcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcclxudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcclxudmFyIFN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xyXG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xyXG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTsgLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXHJcblxyXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcclxuICB7XHJcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlKSB7XHJcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcclxuXHJcbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTcrLiBVcGRhdGUgeW91ciBjb2RlIHRvIHVzZSAnICsgJ1JlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGluc3RlYWQuIEl0IGhhcyB0aGUgZXhhY3Qgc2FtZSBBUEkuJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHx8IHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XHJcbn1cclxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcclxuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xyXG59XHJcbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xyXG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xyXG59XHJcbmZ1bmN0aW9uIGlzQ29udGV4dFByb3ZpZGVyKG9iamVjdCkge1xyXG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcclxufVxyXG5mdW5jdGlvbiBpc0VsZW1lbnQob2JqZWN0KSB7XHJcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcclxufVxyXG5mdW5jdGlvbiBpc0ZvcndhcmRSZWYob2JqZWN0KSB7XHJcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xyXG59XHJcbmZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KSB7XHJcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xyXG59XHJcbmZ1bmN0aW9uIGlzTGF6eShvYmplY3QpIHtcclxuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcclxufVxyXG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XHJcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XHJcbn1cclxuZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KSB7XHJcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcclxufVxyXG5mdW5jdGlvbiBpc1Byb2ZpbGVyKG9iamVjdCkge1xyXG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcclxufVxyXG5mdW5jdGlvbiBpc1N0cmljdE1vZGUob2JqZWN0KSB7XHJcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xyXG59XHJcbmZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KSB7XHJcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xyXG59XHJcblxyXG5leHBvcnRzLkFzeW5jTW9kZSA9IEFzeW5jTW9kZTtcclxuZXhwb3J0cy5Db25jdXJyZW50TW9kZSA9IENvbmN1cnJlbnRNb2RlO1xyXG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcclxuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XHJcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XHJcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XHJcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcclxuZXhwb3J0cy5MYXp5ID0gTGF6eTtcclxuZXhwb3J0cy5NZW1vID0gTWVtbztcclxuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XHJcbmV4cG9ydHMuUHJvZmlsZXIgPSBQcm9maWxlcjtcclxuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcclxuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xyXG5leHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGU7XHJcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XHJcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcclxuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyO1xyXG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcclxuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XHJcbmV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQ7XHJcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xyXG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcclxuZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsO1xyXG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xyXG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcclxuZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZTtcclxuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XHJcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xyXG4gIH0pKCk7XHJcbn1cclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcclxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XHJcbn0gZWxzZSB7XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cclxuICpcclxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXHJcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cclxuICovXHJcblxyXG5mdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgLy8gQ2FsbCB0aGlzLmNvbnN0cnVjdG9yLmdEU0ZQIHRvIHN1cHBvcnQgc3ViLWNsYXNzZXMuXHJcbiAgdmFyIHN0YXRlID0gdGhpcy5jb25zdHJ1Y3Rvci5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHModGhpcy5wcm9wcywgdGhpcy5zdGF0ZSk7XHJcbiAgaWYgKHN0YXRlICE9PSBudWxsICYmIHN0YXRlICE9PSB1bmRlZmluZWQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcclxuICAvLyBDYWxsIHRoaXMuY29uc3RydWN0b3IuZ0RTRlAgdG8gc3VwcG9ydCBzdWItY2xhc3Nlcy5cclxuICAvLyBVc2UgdGhlIHNldFN0YXRlKCkgdXBkYXRlciB0byBlbnN1cmUgc3RhdGUgaXNuJ3Qgc3RhbGUgaW4gY2VydGFpbiBlZGdlIGNhc2VzLlxyXG4gIGZ1bmN0aW9uIHVwZGF0ZXIocHJldlN0YXRlKSB7XHJcbiAgICB2YXIgc3RhdGUgPSB0aGlzLmNvbnN0cnVjdG9yLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhuZXh0UHJvcHMsIHByZXZTdGF0ZSk7XHJcbiAgICByZXR1cm4gc3RhdGUgIT09IG51bGwgJiYgc3RhdGUgIT09IHVuZGVmaW5lZCA/IHN0YXRlIDogbnVsbDtcclxuICB9XHJcbiAgLy8gQmluZGluZyBcInRoaXNcIiBpcyBpbXBvcnRhbnQgZm9yIHNoYWxsb3cgcmVuZGVyZXIgc3VwcG9ydC5cclxuICB0aGlzLnNldFN0YXRlKHVwZGF0ZXIuYmluZCh0aGlzKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcclxuICB0cnkge1xyXG4gICAgdmFyIHByZXZQcm9wcyA9IHRoaXMucHJvcHM7XHJcbiAgICB2YXIgcHJldlN0YXRlID0gdGhpcy5zdGF0ZTtcclxuICAgIHRoaXMucHJvcHMgPSBuZXh0UHJvcHM7XHJcbiAgICB0aGlzLnN0YXRlID0gbmV4dFN0YXRlO1xyXG4gICAgdGhpcy5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdEZsYWcgPSB0cnVlO1xyXG4gICAgdGhpcy5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdCA9IHRoaXMuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoXHJcbiAgICAgIHByZXZQcm9wcyxcclxuICAgICAgcHJldlN0YXRlXHJcbiAgICApO1xyXG4gIH0gZmluYWxseSB7XHJcbiAgICB0aGlzLnByb3BzID0gcHJldlByb3BzO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHByZXZTdGF0ZTtcclxuICB9XHJcbn1cclxuXHJcbi8vIFJlYWN0IG1heSB3YXJuIGFib3V0IGNXTS9jV1JQL2NXVSBtZXRob2RzIGJlaW5nIGRlcHJlY2F0ZWQuXHJcbi8vIEFkZCBhIGZsYWcgdG8gc3VwcHJlc3MgdGhlc2Ugd2FybmluZ3MgZm9yIHRoaXMgc3BlY2lhbCBjYXNlLlxyXG5jb21wb25lbnRXaWxsTW91bnQuX19zdXBwcmVzc0RlcHJlY2F0aW9uV2FybmluZyA9IHRydWU7XHJcbmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMuX19zdXBwcmVzc0RlcHJlY2F0aW9uV2FybmluZyA9IHRydWU7XHJcbmNvbXBvbmVudFdpbGxVcGRhdGUuX19zdXBwcmVzc0RlcHJlY2F0aW9uV2FybmluZyA9IHRydWU7XHJcblxyXG5mdW5jdGlvbiBwb2x5ZmlsbChDb21wb25lbnQpIHtcclxuICB2YXIgcHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcclxuXHJcbiAgaWYgKCFwcm90b3R5cGUgfHwgIXByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbiBvbmx5IHBvbHlmaWxsIGNsYXNzIGNvbXBvbmVudHMnKTtcclxuICB9XHJcblxyXG4gIGlmIChcclxuICAgIHR5cGVvZiBDb21wb25lbnQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzICE9PSAnZnVuY3Rpb24nICYmXHJcbiAgICB0eXBlb2YgcHJvdG90eXBlLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlICE9PSAnZnVuY3Rpb24nXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gQ29tcG9uZW50O1xyXG4gIH1cclxuXHJcbiAgLy8gSWYgbmV3IGNvbXBvbmVudCBBUElzIGFyZSBkZWZpbmVkLCBcInVuc2FmZVwiIGxpZmVjeWNsZXMgd29uJ3QgYmUgY2FsbGVkLlxyXG4gIC8vIEVycm9yIGlmIGFueSBvZiB0aGVzZSBsaWZlY3ljbGVzIGFyZSBwcmVzZW50LFxyXG4gIC8vIEJlY2F1c2UgdGhleSB3b3VsZCB3b3JrIGRpZmZlcmVudGx5IGJldHdlZW4gb2xkZXIgYW5kIG5ld2VyICgxNi4zKykgdmVyc2lvbnMgb2YgUmVhY3QuXHJcbiAgdmFyIGZvdW5kV2lsbE1vdW50TmFtZSA9IG51bGw7XHJcbiAgdmFyIGZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWUgPSBudWxsO1xyXG4gIHZhciBmb3VuZFdpbGxVcGRhdGVOYW1lID0gbnVsbDtcclxuICBpZiAodHlwZW9mIHByb3RvdHlwZS5jb21wb25lbnRXaWxsTW91bnQgPT09ICdmdW5jdGlvbicpIHtcclxuICAgIGZvdW5kV2lsbE1vdW50TmFtZSA9ICdjb21wb25lbnRXaWxsTW91bnQnO1xyXG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb3RvdHlwZS5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50ID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICBmb3VuZFdpbGxNb3VudE5hbWUgPSAnVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCc7XHJcbiAgfVxyXG4gIGlmICh0eXBlb2YgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPT09ICdmdW5jdGlvbicpIHtcclxuICAgIGZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWUgPSAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyc7XHJcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvdG90eXBlLlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICBmb3VuZFdpbGxSZWNlaXZlUHJvcHNOYW1lID0gJ1VOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJztcclxuICB9XHJcbiAgaWYgKHR5cGVvZiBwcm90b3R5cGUuY29tcG9uZW50V2lsbFVwZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgZm91bmRXaWxsVXBkYXRlTmFtZSA9ICdjb21wb25lbnRXaWxsVXBkYXRlJztcclxuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm90b3R5cGUuVU5TQUZFX2NvbXBvbmVudFdpbGxVcGRhdGUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgIGZvdW5kV2lsbFVwZGF0ZU5hbWUgPSAnVU5TQUZFX2NvbXBvbmVudFdpbGxVcGRhdGUnO1xyXG4gIH1cclxuICBpZiAoXHJcbiAgICBmb3VuZFdpbGxNb3VudE5hbWUgIT09IG51bGwgfHxcclxuICAgIGZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWUgIT09IG51bGwgfHxcclxuICAgIGZvdW5kV2lsbFVwZGF0ZU5hbWUgIT09IG51bGxcclxuICApIHtcclxuICAgIHZhciBjb21wb25lbnROYW1lID0gQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lO1xyXG4gICAgdmFyIG5ld0FwaU5hbWUgPVxyXG4gICAgICB0eXBlb2YgQ29tcG9uZW50LmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9PT0gJ2Z1bmN0aW9uJ1xyXG4gICAgICAgID8gJ2dldERlcml2ZWRTdGF0ZUZyb21Qcm9wcygpJ1xyXG4gICAgICAgIDogJ2dldFNuYXBzaG90QmVmb3JlVXBkYXRlKCknO1xyXG5cclxuICAgIHRocm93IEVycm9yKFxyXG4gICAgICAnVW5zYWZlIGxlZ2FjeSBsaWZlY3ljbGVzIHdpbGwgbm90IGJlIGNhbGxlZCBmb3IgY29tcG9uZW50cyB1c2luZyBuZXcgY29tcG9uZW50IEFQSXMuXFxuXFxuJyArXHJcbiAgICAgICAgY29tcG9uZW50TmFtZSArXHJcbiAgICAgICAgJyB1c2VzICcgK1xyXG4gICAgICAgIG5ld0FwaU5hbWUgK1xyXG4gICAgICAgICcgYnV0IGFsc28gY29udGFpbnMgdGhlIGZvbGxvd2luZyBsZWdhY3kgbGlmZWN5Y2xlczonICtcclxuICAgICAgICAoZm91bmRXaWxsTW91bnROYW1lICE9PSBudWxsID8gJ1xcbiAgJyArIGZvdW5kV2lsbE1vdW50TmFtZSA6ICcnKSArXHJcbiAgICAgICAgKGZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWUgIT09IG51bGxcclxuICAgICAgICAgID8gJ1xcbiAgJyArIGZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWVcclxuICAgICAgICAgIDogJycpICtcclxuICAgICAgICAoZm91bmRXaWxsVXBkYXRlTmFtZSAhPT0gbnVsbCA/ICdcXG4gICcgKyBmb3VuZFdpbGxVcGRhdGVOYW1lIDogJycpICtcclxuICAgICAgICAnXFxuXFxuVGhlIGFib3ZlIGxpZmVjeWNsZXMgc2hvdWxkIGJlIHJlbW92ZWQuIExlYXJuIG1vcmUgYWJvdXQgdGhpcyB3YXJuaW5nIGhlcmU6XFxuJyArXHJcbiAgICAgICAgJ2h0dHBzOi8vZmIubWUvcmVhY3QtYXN5bmMtY29tcG9uZW50LWxpZmVjeWNsZS1ob29rcydcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvLyBSZWFjdCA8PSAxNi4yIGRvZXMgbm90IHN1cHBvcnQgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcy5cclxuICAvLyBBcyBhIHdvcmthcm91bmQsIHVzZSBjV00gYW5kIGNXUlAgdG8gaW52b2tlIHRoZSBuZXcgc3RhdGljIGxpZmVjeWNsZS5cclxuICAvLyBOZXdlciB2ZXJzaW9ucyBvZiBSZWFjdCB3aWxsIGlnbm9yZSB0aGVzZSBsaWZlY3ljbGVzIGlmIGdEU0ZQIGV4aXN0cy5cclxuICBpZiAodHlwZW9mIENvbXBvbmVudC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPT09ICdmdW5jdGlvbicpIHtcclxuICAgIHByb3RvdHlwZS5jb21wb25lbnRXaWxsTW91bnQgPSBjb21wb25lbnRXaWxsTW91bnQ7XHJcbiAgICBwcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM7XHJcbiAgfVxyXG5cclxuICAvLyBSZWFjdCA8PSAxNi4yIGRvZXMgbm90IHN1cHBvcnQgZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUuXHJcbiAgLy8gQXMgYSB3b3JrYXJvdW5kLCB1c2UgY1dVIHRvIGludm9rZSB0aGUgbmV3IGxpZmVjeWNsZS5cclxuICAvLyBOZXdlciB2ZXJzaW9ucyBvZiBSZWFjdCB3aWxsIGlnbm9yZSB0aGF0IGxpZmVjeWNsZSBpZiBnU0JVIGV4aXN0cy5cclxuICBpZiAodHlwZW9mIHByb3RvdHlwZS5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgaWYgKHR5cGVvZiBwcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAnQ2Fubm90IHBvbHlmaWxsIGdldFNuYXBzaG90QmVmb3JlVXBkYXRlKCkgZm9yIGNvbXBvbmVudHMgdGhhdCBkbyBub3QgZGVmaW5lIGNvbXBvbmVudERpZFVwZGF0ZSgpIG9uIHRoZSBwcm90b3R5cGUnXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxVcGRhdGUgPSBjb21wb25lbnRXaWxsVXBkYXRlO1xyXG5cclxuICAgIHZhciBjb21wb25lbnREaWRVcGRhdGUgPSBwcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlO1xyXG5cclxuICAgIHByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGVQb2x5ZmlsbChcclxuICAgICAgcHJldlByb3BzLFxyXG4gICAgICBwcmV2U3RhdGUsXHJcbiAgICAgIG1heWJlU25hcHNob3RcclxuICAgICkge1xyXG4gICAgICAvLyAxNi4zKyB3aWxsIG5vdCBleGVjdXRlIG91ciB3aWxsLXVwZGF0ZSBtZXRob2Q7XHJcbiAgICAgIC8vIEl0IHdpbGwgcGFzcyBhIHNuYXBzaG90IHZhbHVlIHRvIGRpZC11cGRhdGUgdGhvdWdoLlxyXG4gICAgICAvLyBPbGRlciB2ZXJzaW9ucyB3aWxsIHJlcXVpcmUgb3VyIHBvbHlmaWxsZWQgd2lsbC11cGRhdGUgdmFsdWUuXHJcbiAgICAgIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGJvdGggY2FzZXMsIGJ1dCBjYW4ndCBqdXN0IGNoZWNrIGZvciB0aGUgcHJlc2VuY2Ugb2YgXCJtYXliZVNuYXBzaG90XCIsXHJcbiAgICAgIC8vIEJlY2F1c2UgZm9yIDw9IDE1LnggdmVyc2lvbnMgdGhpcyBtaWdodCBiZSBhIFwicHJldkNvbnRleHRcIiBvYmplY3QuXHJcbiAgICAgIC8vIFdlIGFsc28gY2FuJ3QganVzdCBjaGVjayBcIl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90XCIsXHJcbiAgICAgIC8vIEJlY2F1c2UgZ2V0LXNuYXBzaG90IG1pZ2h0IHJldHVybiBhIGZhbHN5IHZhbHVlLlxyXG4gICAgICAvLyBTbyBjaGVjayBmb3IgdGhlIGV4cGxpY2l0IF9fcmVhY3RJbnRlcm5hbFNuYXBzaG90RmxhZyBmbGFnIHRvIGRldGVybWluZSBiZWhhdmlvci5cclxuICAgICAgdmFyIHNuYXBzaG90ID0gdGhpcy5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdEZsYWdcclxuICAgICAgICA/IHRoaXMuX19yZWFjdEludGVybmFsU25hcHNob3RcclxuICAgICAgICA6IG1heWJlU25hcHNob3Q7XHJcblxyXG4gICAgICBjb21wb25lbnREaWRVcGRhdGUuY2FsbCh0aGlzLCBwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJldHVybiBDb21wb25lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHBvbHlmaWxsIH07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XHJcbiAgdmFsdWU6IHRydWVcclxufSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcclxuXHJcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xyXG5cclxudmFyIF9wcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcclxuXHJcbnZhciBfcmVhY3RUcmFuc2l0aW9uR3JvdXAgPSByZXF1aXJlKFwicmVhY3QtdHJhbnNpdGlvbi1ncm91cFwiKTtcclxuXHJcbnZhciBfZW1vdGlvbiA9IHJlcXVpcmUoXCJlbW90aW9uXCIpO1xyXG5cclxudmFyIF9TcGlubmVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9jb21wb25lbnRzL1NwaW5uZXJcIikpO1xyXG5cclxudmFyIF9zdHlsZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3N0eWxlc1wiKSk7XHJcblxyXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxyXG5cclxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiB7fTsgaWYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxyXG5cclxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cclxuXHJcbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTsgfVxyXG5cclxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2VcIik7IH1cclxuXHJcbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikgeyBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaXRlcikgPT09IFwiW29iamVjdCBBcmd1bWVudHNdXCIpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpOyB9XHJcblxyXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSB9XHJcblxyXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxyXG5cclxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxyXG5cclxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cclxuXHJcbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cclxuXHJcbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cclxuXHJcbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XHJcblxyXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxyXG5cclxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XHJcblxyXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxyXG5cclxudmFyIExvYWRpbmdPdmVybGF5V3JhcHBlciA9XHJcbi8qI19fUFVSRV9fKi9cclxuZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcclxuICBfaW5oZXJpdHMoTG9hZGluZ092ZXJsYXlXcmFwcGVyLCBfQ29tcG9uZW50KTtcclxuXHJcbiAgZnVuY3Rpb24gTG9hZGluZ092ZXJsYXlXcmFwcGVyKHByb3BzKSB7XHJcbiAgICB2YXIgX3RoaXM7XHJcblxyXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExvYWRpbmdPdmVybGF5V3JhcHBlcik7XHJcblxyXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoTG9hZGluZ092ZXJsYXlXcmFwcGVyKS5jYWxsKHRoaXMsIHByb3BzKSk7XHJcblxyXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcImdldFN0eWxlc1wiLCBmdW5jdGlvbiAoa2V5LCBwcm92aWRlZFN0YXRlKSB7XHJcbiAgICAgIHZhciBiYXNlID0gX3N0eWxlcy5kZWZhdWx0W2tleV0ocHJvdmlkZWRTdGF0ZSwgX3RoaXMucHJvcHMpO1xyXG5cclxuICAgICAgdmFyIGN1c3RvbSA9IF90aGlzLnByb3BzLnN0eWxlc1trZXldO1xyXG4gICAgICBpZiAoIWN1c3RvbSkgcmV0dXJuIGJhc2U7XHJcbiAgICAgIHJldHVybiB0eXBlb2YgY3VzdG9tID09PSAnZnVuY3Rpb24nID8gY3VzdG9tKGJhc2UsIF90aGlzLnByb3BzKSA6IGN1c3RvbTtcclxuICAgIH0pO1xyXG5cclxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJjeFwiLCBmdW5jdGlvbiAobmFtZXMpIHtcclxuICAgICAgdmFyIGFyciA9IEFycmF5LmlzQXJyYXkobmFtZXMpID8gbmFtZXMgOiBbbmFtZXNdO1xyXG5cclxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xyXG4gICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gX2Vtb3Rpb24uY3guYXBwbHkodm9pZCAwLCBfdG9Db25zdW1hYmxlQXJyYXkoYXJyLm1hcChmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICAgIHJldHVybiBuYW1lID8gXCJcIi5jb25jYXQoX3RoaXMucHJvcHMuY2xhc3NOYW1lUHJlZml4KS5jb25jYXQobmFtZSkgOiAnJztcclxuICAgICAgfSkpLmNvbmNhdChhcmdzKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBfdGhpcy53cmFwcGVyID0gX3JlYWN0LmRlZmF1bHQuY3JlYXRlUmVmKCk7XHJcbiAgICBfdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgb3ZlcmZsb3dDU1M6IHt9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF90aGlzO1xyXG4gIH1cclxuXHJcbiAgX2NyZWF0ZUNsYXNzKExvYWRpbmdPdmVybGF5V3JhcHBlciwgW3tcclxuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxyXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICB2YXIgd3JhcHBlclN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy53cmFwcGVyLmN1cnJlbnQpO1xyXG4gICAgICB2YXIgb3ZlcmZsb3dDU1MgPSBbJ292ZXJmbG93JywgJ292ZXJmbG93WCcsICdvdmVyZmxvd1knXS5yZWR1Y2UoZnVuY3Rpb24gKG0sIGkpIHtcclxuICAgICAgICBpZiAod3JhcHBlclN0eWxlW2ldICE9PSAndmlzaWJsZScpIG1baV0gPSAnaGlkZGVuJztcclxuICAgICAgICByZXR1cm4gbTtcclxuICAgICAgfSwge30pO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBvdmVyZmxvd0NTUzogb3ZlcmZsb3dDU1NcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwge1xyXG4gICAga2V5OiBcImNvbXBvbmVudERpZFVwZGF0ZVwiLFxyXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcclxuICAgICAgdmFyIGFjdGl2ZSA9IHRoaXMucHJvcHMuYWN0aXZlO1xyXG4gICAgICBpZiAoYWN0aXZlKSB0aGlzLndyYXBwZXIuY3VycmVudC5zY3JvbGxUb3AgPSAwO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gYW4gZW1vdGlvbiBjc3Mgb2JqZWN0IGZvciBhIGdpdmVuIGVsZW1lbnQga2V5XHJcbiAgICAgKiBJZiBhIGN1c3RvbSBzdHlsZSB3YXMgcHJvdmlkZWQgdmlhIHByb3BzLCBydW4gaXQgd2l0aFxyXG4gICAgICogdGhlIGJhc2UgY3NzIG9iai5cclxuICAgICAqL1xyXG5cclxuICB9LCB7XHJcbiAgICBrZXk6IFwicmVuZGVyXCIsXHJcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xyXG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcclxuXHJcbiAgICAgIHZhciBvdmVyZmxvd0NTUyA9IHRoaXMuc3RhdGUub3ZlcmZsb3dDU1M7XHJcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXHJcbiAgICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzLmNoaWxkcmVuLFxyXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHMuY2xhc3NOYW1lLFxyXG4gICAgICAgICAgb25DbGljayA9IF90aGlzJHByb3BzLm9uQ2xpY2ssXHJcbiAgICAgICAgICBhY3RpdmUgPSBfdGhpcyRwcm9wcy5hY3RpdmUsXHJcbiAgICAgICAgICBmYWRlU3BlZWQgPSBfdGhpcyRwcm9wcy5mYWRlU3BlZWQsXHJcbiAgICAgICAgICBzcGlubmVyID0gX3RoaXMkcHJvcHMuc3Bpbm5lcixcclxuICAgICAgICAgIHRleHQgPSBfdGhpcyRwcm9wcy50ZXh0O1xyXG4gICAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XHJcbiAgICAgICAgXCJkYXRhLXRlc3RpZFwiOiBcIndyYXBwZXJcIixcclxuICAgICAgICByZWY6IHRoaXMud3JhcHBlcixcclxuICAgICAgICBjbGFzc05hbWU6IHRoaXMuY3goWyd3cmFwcGVyJywgYWN0aXZlICYmICd3cmFwcGVyLS1hY3RpdmUnXSwgKDAsIF9lbW90aW9uLmNzcykodGhpcy5nZXRTdHlsZXMoJ3dyYXBwZXInLCBhY3RpdmUgPyBvdmVyZmxvd0NTUyA6IHt9KSksIGNsYXNzTmFtZSlcclxuICAgICAgfSwgX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3RUcmFuc2l0aW9uR3JvdXAuQ1NTVHJhbnNpdGlvbiwge1xyXG4gICAgICAgIGluOiBhY3RpdmUsXHJcbiAgICAgICAgY2xhc3NOYW1lczogXCJfbG9hZGluZy1vdmVybGF5LXRyYW5zaXRpb25cIixcclxuICAgICAgICB0aW1lb3V0OiBmYWRlU3BlZWQsXHJcbiAgICAgICAgdW5tb3VudE9uRXhpdDogdHJ1ZVxyXG4gICAgICB9LCBmdW5jdGlvbiAoc3RhdGUpIHtcclxuICAgICAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XHJcbiAgICAgICAgICBcImRhdGEtdGVzdGlkXCI6IFwib3ZlcmxheVwiLFxyXG4gICAgICAgICAgY2xhc3NOYW1lOiBfdGhpczIuY3goJ292ZXJsYXknLCAoMCwgX2Vtb3Rpb24uY3NzKShfdGhpczIuZ2V0U3R5bGVzKCdvdmVybGF5Jywgc3RhdGUpKSksXHJcbiAgICAgICAgICBvbkNsaWNrOiBvbkNsaWNrXHJcbiAgICAgICAgfSwgX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XHJcbiAgICAgICAgICBjbGFzc05hbWU6IF90aGlzMi5jeCgnY29udGVudCcsICgwLCBfZW1vdGlvbi5jc3MpKF90aGlzMi5nZXRTdHlsZXMoJ2NvbnRlbnQnKSkpXHJcbiAgICAgICAgfSwgc3Bpbm5lciAmJiAodHlwZW9mIHNwaW5uZXIgPT09ICdib29sZWFuJyA/IF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX1NwaW5uZXIuZGVmYXVsdCwge1xyXG4gICAgICAgICAgY3g6IF90aGlzMi5jeCxcclxuICAgICAgICAgIGdldFN0eWxlczogX3RoaXMyLmdldFN0eWxlc1xyXG4gICAgICAgIH0pIDogc3Bpbm5lciksIHRleHQpKTtcclxuICAgICAgfSksIGNoaWxkcmVuKTtcclxuICAgIH1cclxuICB9XSk7XHJcblxyXG4gIHJldHVybiBMb2FkaW5nT3ZlcmxheVdyYXBwZXI7XHJcbn0oX3JlYWN0LkNvbXBvbmVudCk7XHJcblxyXG5Mb2FkaW5nT3ZlcmxheVdyYXBwZXIucHJvcFR5cGVzID0ge1xyXG4gIGFjdGl2ZTogX3Byb3BUeXBlcy5kZWZhdWx0LmJvb2wsXHJcbiAgZmFkZVNwZWVkOiBfcHJvcFR5cGVzLmRlZmF1bHQubnVtYmVyLFxyXG4gIG9uQ2xpY2s6IF9wcm9wVHlwZXMuZGVmYXVsdC5mdW5jLFxyXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZyxcclxuICBjbGFzc05hbWVQcmVmaXg6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsXHJcbiAgc3Bpbm5lcjogX3Byb3BUeXBlcy5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlcy5kZWZhdWx0LmJvb2wsIF9wcm9wVHlwZXMuZGVmYXVsdC5ub2RlXSksXHJcbiAgdGV4dDogX3Byb3BUeXBlcy5kZWZhdWx0Lm5vZGUsXHJcbiAgc3R5bGVzOiBfcHJvcFR5cGVzLmRlZmF1bHQuc2hhcGUoe1xyXG4gICAgY29udGVudDogX3Byb3BUeXBlcy5kZWZhdWx0LmZ1bmN0aW9uLFxyXG4gICAgb3ZlcmxheTogX3Byb3BUeXBlcy5kZWZhdWx0LmZ1bmN0aW9uLFxyXG4gICAgc3Bpbm5lcjogX3Byb3BUeXBlcy5kZWZhdWx0LmZ1bmN0aW9uLFxyXG4gICAgd3JhcHBlcjogX3Byb3BUeXBlcy5kZWZhdWx0LmZ1bmN0aW9uXHJcbiAgfSlcclxufTtcclxuTG9hZGluZ092ZXJsYXlXcmFwcGVyLmRlZmF1bHRQcm9wcyA9IHtcclxuICBjbGFzc05hbWVQcmVmaXg6ICdfbG9hZGluZ19vdmVybGF5XycsXHJcbiAgZmFkZVNwZWVkOiA1MDAsXHJcbiAgc3R5bGVzOiB7fVxyXG59O1xyXG52YXIgX2RlZmF1bHQgPSBMb2FkaW5nT3ZlcmxheVdyYXBwZXI7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XHJcbiAgdmFsdWU6IHRydWVcclxufSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcclxuXHJcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XHJcblxyXG52YXIgX3Byb3BUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xyXG5cclxudmFyIF9lbW90aW9uID0gcmVxdWlyZShcImVtb3Rpb25cIik7XHJcblxyXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxyXG5cclxudmFyIFNwaW5uZXIgPSBmdW5jdGlvbiBTcGlubmVyKF9yZWYpIHtcclxuICB2YXIgZ2V0U3R5bGVzID0gX3JlZi5nZXRTdHlsZXMsXHJcbiAgICAgIGN4ID0gX3JlZi5jeDtcclxuICByZXR1cm4gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XHJcbiAgICBjbGFzc05hbWU6IGN4KCdzcGlubmVyJywgKDAsIF9lbW90aW9uLmNzcykoZ2V0U3R5bGVzKCdzcGlubmVyJykpKVxyXG4gIH0sIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwge1xyXG4gICAgdmlld0JveDogXCIyNSAyNSA1MCA1MFwiXHJcbiAgfSwgX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImNpcmNsZVwiLCB7XHJcbiAgICBjeDogXCI1MFwiLFxyXG4gICAgY3k6IFwiNTBcIixcclxuICAgIHI6IFwiMjBcIixcclxuICAgIGZpbGw6IFwibm9uZVwiLFxyXG4gICAgc3Ryb2tlV2lkdGg6IFwiMlwiLFxyXG4gICAgc3Ryb2tlTWl0ZXJsaW1pdDogXCIxMFwiXHJcbiAgfSkpKTtcclxufTtcclxuXHJcblNwaW5uZXIucHJvcFR5cGVzID0ge1xyXG4gIGdldFN0eWxlczogX3Byb3BUeXBlcy5kZWZhdWx0LmZ1bmMuaXNSZXF1aXJlZCxcclxuICBjeDogX3Byb3BUeXBlcy5kZWZhdWx0LmZ1bmMuaXNSZXF1aXJlZFxyXG59O1xyXG52YXIgX2RlZmF1bHQgPSBTcGlubmVyO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xyXG4gIHZhbHVlOiB0cnVlXHJcbn0pO1xyXG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XHJcblxyXG52YXIgX2Vtb3Rpb24gPSByZXF1aXJlKFwiZW1vdGlvblwiKTtcclxuXHJcbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykgeyBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlOyB9KSk7IH0gb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cclxuXHJcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XHJcblxyXG5mdW5jdGlvbiBfdGVtcGxhdGVPYmplY3QyKCkge1xyXG4gIHZhciBkYXRhID0gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbChbXCJcXG4gIDAlIHtcXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMSwyMDA7XFxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogODksMjAwO1xcbiAgICBzdHJva2UtZGFzaG9mZnNldDogLTM1cHg7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogODksMjAwO1xcbiAgICBzdHJva2UtZGFzaG9mZnNldDogLTEyNHB4O1xcbiAgfVxcblwiXSk7XHJcblxyXG4gIF90ZW1wbGF0ZU9iamVjdDIgPSBmdW5jdGlvbiBfdGVtcGxhdGVPYmplY3QyKCkge1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF90ZW1wbGF0ZU9iamVjdCgpIHtcclxuICB2YXIgZGF0YSA9IF90YWdnZWRUZW1wbGF0ZUxpdGVyYWwoW1wiXFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxuXCJdKTtcclxuXHJcbiAgX3RlbXBsYXRlT2JqZWN0ID0gZnVuY3Rpb24gX3RlbXBsYXRlT2JqZWN0KCkge1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF90YWdnZWRUZW1wbGF0ZUxpdGVyYWwoc3RyaW5ncywgcmF3KSB7IGlmICghcmF3KSB7IHJhdyA9IHN0cmluZ3Muc2xpY2UoMCk7IH0gcmV0dXJuIE9iamVjdC5mcmVlemUoT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoc3RyaW5ncywgeyByYXc6IHsgdmFsdWU6IE9iamVjdC5mcmVlemUocmF3KSB9IH0pKTsgfVxyXG5cclxudmFyIHJvdGF0ZTM2MCA9ICgwLCBfZW1vdGlvbi5rZXlmcmFtZXMpKF90ZW1wbGF0ZU9iamVjdCgpKTtcclxudmFyIHNwaW5uZXJEYXNoID0gKDAsIF9lbW90aW9uLmtleWZyYW1lcykoX3RlbXBsYXRlT2JqZWN0MigpKTtcclxudmFyIF9kZWZhdWx0ID0ge1xyXG4gIHdyYXBwZXI6IGZ1bmN0aW9uIHdyYXBwZXIoc3RhdGUpIHtcclxuICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKHtcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcclxuICAgIH0sIHN0YXRlKTtcclxuICB9LFxyXG4gIG92ZXJsYXk6IGZ1bmN0aW9uIG92ZXJsYXkoc3RhdGUsIHByb3BzKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIHRvcDogJzBweCcsXHJcbiAgICAgIGxlZnQ6ICcwcHgnLFxyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgIGZvbnRTaXplOiAnMS4yZW0nLFxyXG4gICAgICBjb2xvcjogJyNGRkYnLFxyXG4gICAgICBiYWNrZ3JvdW5kOiAncmdiYSgwLCAwLCAwLCAwLjcpJyxcclxuICAgICAgekluZGV4OiA4MDAsXHJcbiAgICAgIHRyYW5zaXRpb246IFwib3BhY2l0eSBcIi5jb25jYXQocHJvcHMuZmFkZVNwZWVkLCBcIm1zIGVhc2UtaW5cIiksXHJcbiAgICAgIG9wYWNpdHk6IHN0YXRlID09PSAnZW50ZXJpbmcnIHx8IHN0YXRlID09PSAnZW50ZXJlZCcgPyAxIDogMFxyXG4gICAgfTtcclxuICB9LFxyXG4gIGNvbnRlbnQ6IGZ1bmN0aW9uIGNvbnRlbnQoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBtYXJnaW46ICdhdXRvJ1xyXG4gICAgfTtcclxuICB9LFxyXG4gIHNwaW5uZXI6IGZ1bmN0aW9uIHNwaW5uZXIoc3RhdGUpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICBtYXJnaW46ICcwcHggYXV0byAxMHB4IGF1dG8nLFxyXG4gICAgICB3aWR0aDogJzUwcHgnLFxyXG4gICAgICBtYXhIZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgJyY6YmVmb3JlJzoge1xyXG4gICAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcclxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICAgIHBhZGRpbmdUb3A6ICcxMDAlJ1xyXG4gICAgICB9LFxyXG4gICAgICAnJiBzdmcnOiB7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBcIlwiLmNvbmNhdChyb3RhdGUzNjAsIFwiIDJzIGxpbmVhciBpbmZpbml0ZVwiKSxcclxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICdjZW50ZXIgY2VudGVyJyxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIHRvcDogJzAnLFxyXG4gICAgICAgIGJvdHRvbTogJzAnLFxyXG4gICAgICAgIGxlZnQ6ICcwJyxcclxuICAgICAgICByaWdodDogJzAnLFxyXG4gICAgICAgIG1hcmdpbjogJ2F1dG8nLFxyXG4gICAgICAgICcmIGNpcmNsZSc6IHtcclxuICAgICAgICAgIGFuaW1hdGlvbjogXCJcIi5jb25jYXQoc3Bpbm5lckRhc2gsIFwiIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGVcIiksXHJcbiAgICAgICAgICBzdHJva2VEYXNoYXJyYXk6ICcxLDIwMCcsXHJcbiAgICAgICAgICBzdHJva2VEYXNob2Zmc2V0OiAwLFxyXG4gICAgICAgICAgc3Ryb2tlTGluZWNhcDogJ3JvdW5kJyxcclxuICAgICAgICAgIHN0cm9rZTogJyNGRkYnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxufTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcclxuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xyXG4gICAgXCJkZWZhdWx0XCI6IG9ialxyXG4gIH07XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xyXG5cclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gYWRkQ2xhc3M7XHJcblxyXG52YXIgX2hhc0NsYXNzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9oYXNDbGFzc1wiKSk7XHJcblxyXG5mdW5jdGlvbiBhZGRDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcclxuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO2Vsc2UgaWYgKCEoMCwgX2hhc0NsYXNzLmRlZmF1bHQpKGVsZW1lbnQsIGNsYXNzTmFtZSkpIGlmICh0eXBlb2YgZWxlbWVudC5jbGFzc05hbWUgPT09ICdzdHJpbmcnKSBlbGVtZW50LmNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lICsgJyAnICsgY2xhc3NOYW1lO2Vsc2UgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgKGVsZW1lbnQuY2xhc3NOYW1lICYmIGVsZW1lbnQuY2xhc3NOYW1lLmJhc2VWYWwgfHwgJycpICsgJyAnICsgY2xhc3NOYW1lKTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IGhhc0NsYXNzO1xyXG5cclxuZnVuY3Rpb24gaGFzQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XHJcbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSByZXR1cm4gISFjbGFzc05hbWUgJiYgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtlbHNlIHJldHVybiAoXCIgXCIgKyAoZWxlbWVudC5jbGFzc05hbWUuYmFzZVZhbCB8fCBlbGVtZW50LmNsYXNzTmFtZSkgKyBcIiBcIikuaW5kZXhPZihcIiBcIiArIGNsYXNzTmFtZSArIFwiIFwiKSAhPT0gLTE7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gcmVwbGFjZUNsYXNzTmFtZShvcmlnQ2xhc3MsIGNsYXNzVG9SZW1vdmUpIHtcclxuICByZXR1cm4gb3JpZ0NsYXNzLnJlcGxhY2UobmV3IFJlZ0V4cCgnKF58XFxcXHMpJyArIGNsYXNzVG9SZW1vdmUgKyAnKD86XFxcXHN8JCknLCAnZycpLCAnJDEnKS5yZXBsYWNlKC9cXHMrL2csICcgJykucmVwbGFjZSgvXlxccyp8XFxzKiQvZywgJycpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xyXG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdCkgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7ZWxzZSBpZiAodHlwZW9mIGVsZW1lbnQuY2xhc3NOYW1lID09PSAnc3RyaW5nJykgZWxlbWVudC5jbGFzc05hbWUgPSByZXBsYWNlQ2xhc3NOYW1lKGVsZW1lbnQuY2xhc3NOYW1lLCBjbGFzc05hbWUpO2Vsc2UgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgcmVwbGFjZUNsYXNzTmFtZShlbGVtZW50LmNsYXNzTmFtZSAmJiBlbGVtZW50LmNsYXNzTmFtZS5iYXNlVmFsIHx8ICcnLCBjbGFzc05hbWUpKTtcclxufTsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcclxuXHJcbnZhciBQcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XHJcblxyXG52YXIgX2FkZENsYXNzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiZG9tLWhlbHBlcnMvY2xhc3MvYWRkQ2xhc3NcIikpO1xyXG5cclxudmFyIF9yZW1vdmVDbGFzcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImRvbS1oZWxwZXJzL2NsYXNzL3JlbW92ZUNsYXNzXCIpKTtcclxuXHJcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XHJcblxyXG52YXIgX1RyYW5zaXRpb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1RyYW5zaXRpb25cIikpO1xyXG5cclxudmFyIF9Qcm9wVHlwZXMgPSByZXF1aXJlKFwiLi91dGlscy9Qcm9wVHlwZXNcIik7XHJcblxyXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxyXG5cclxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiB7fTsgaWYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxyXG5cclxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cclxuXHJcbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpOyBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzczsgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxyXG5cclxudmFyIGFkZENsYXNzID0gZnVuY3Rpb24gYWRkQ2xhc3Mobm9kZSwgY2xhc3Nlcykge1xyXG4gIHJldHVybiBub2RlICYmIGNsYXNzZXMgJiYgY2xhc3Nlcy5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcclxuICAgIHJldHVybiAoMCwgX2FkZENsYXNzLmRlZmF1bHQpKG5vZGUsIGMpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxudmFyIHJlbW92ZUNsYXNzID0gZnVuY3Rpb24gcmVtb3ZlQ2xhc3Mobm9kZSwgY2xhc3Nlcykge1xyXG4gIHJldHVybiBub2RlICYmIGNsYXNzZXMgJiYgY2xhc3Nlcy5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcclxuICAgIHJldHVybiAoMCwgX3JlbW92ZUNsYXNzLmRlZmF1bHQpKG5vZGUsIGMpO1xyXG4gIH0pO1xyXG59O1xyXG4vKipcclxuICogQSB0cmFuc2l0aW9uIGNvbXBvbmVudCBpbnNwaXJlZCBieSB0aGUgZXhjZWxsZW50XHJcbiAqIFtuZy1hbmltYXRlXShodHRwOi8vd3d3Lm5nYW5pbWF0ZS5vcmcvKSBsaWJyYXJ5LCB5b3Ugc2hvdWxkIHVzZSBpdCBpZiB5b3UncmVcclxuICogdXNpbmcgQ1NTIHRyYW5zaXRpb25zIG9yIGFuaW1hdGlvbnMuIEl0J3MgYnVpbHQgdXBvbiB0aGVcclxuICogW2BUcmFuc2l0aW9uYF0oaHR0cHM6Ly9yZWFjdGNvbW11bml0eS5vcmcvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC90cmFuc2l0aW9uKVxyXG4gKiBjb21wb25lbnQsIHNvIGl0IGluaGVyaXRzIGFsbCBvZiBpdHMgcHJvcHMuXHJcbiAqXHJcbiAqIGBDU1NUcmFuc2l0aW9uYCBhcHBsaWVzIGEgcGFpciBvZiBjbGFzcyBuYW1lcyBkdXJpbmcgdGhlIGBhcHBlYXJgLCBgZW50ZXJgLFxyXG4gKiBhbmQgYGV4aXRgIHN0YXRlcyBvZiB0aGUgdHJhbnNpdGlvbi4gVGhlIGZpcnN0IGNsYXNzIGlzIGFwcGxpZWQgYW5kIHRoZW4gYVxyXG4gKiBzZWNvbmQgYCotYWN0aXZlYCBjbGFzcyBpbiBvcmRlciB0byBhY3RpdmF0ZSB0aGUgQ1NTUyB0cmFuc2l0aW9uLiBBZnRlciB0aGVcclxuICogdHJhbnNpdGlvbiwgbWF0Y2hpbmcgYCotZG9uZWAgY2xhc3MgbmFtZXMgYXJlIGFwcGxpZWQgdG8gcGVyc2lzdCB0aGVcclxuICogdHJhbnNpdGlvbiBzdGF0ZS5cclxuICpcclxuICogYGBganN4XHJcbiAqIGZ1bmN0aW9uIEFwcCgpIHtcclxuICogICBjb25zdCBbaW5Qcm9wLCBzZXRJblByb3BdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gKiAgIHJldHVybiAoXHJcbiAqICAgICA8ZGl2PlxyXG4gKiAgICAgICA8Q1NTVHJhbnNpdGlvbiBpbj17aW5Qcm9wfSB0aW1lb3V0PXsyMDB9IGNsYXNzTmFtZXM9XCJteS1ub2RlXCI+XHJcbiAqICAgICAgICAgPGRpdj5cclxuICogICAgICAgICAgIHtcIkknbGwgcmVjZWl2ZSBteS1ub2RlLSogY2xhc3Nlc1wifVxyXG4gKiAgICAgICAgIDwvZGl2PlxyXG4gKiAgICAgICA8L0NTU1RyYW5zaXRpb24+XHJcbiAqICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHNldEluUHJvcCh0cnVlKX0+XHJcbiAqICAgICAgICAgQ2xpY2sgdG8gRW50ZXJcclxuICogICAgICAgPC9idXR0b24+XHJcbiAqICAgICA8L2Rpdj5cclxuICogICApO1xyXG4gKiB9XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBXaGVuIHRoZSBgaW5gIHByb3AgaXMgc2V0IHRvIGB0cnVlYCwgdGhlIGNoaWxkIGNvbXBvbmVudCB3aWxsIGZpcnN0IHJlY2VpdmVcclxuICogdGhlIGNsYXNzIGBleGFtcGxlLWVudGVyYCwgdGhlbiB0aGUgYGV4YW1wbGUtZW50ZXItYWN0aXZlYCB3aWxsIGJlIGFkZGVkIGluXHJcbiAqIHRoZSBuZXh0IHRpY2suIGBDU1NUcmFuc2l0aW9uYCBbZm9yY2VzIGFcclxuICogcmVmbG93XShodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL2Jsb2IvNTAwNzMwM2U3MjlhNzRiZTY2YTIxYzNlMjIwNWU0OTE2ODIxNTI0Yi9zcmMvQ1NTVHJhbnNpdGlvbi5qcyNMMjA4LUwyMTUpXHJcbiAqIGJldHdlZW4gYmVmb3JlIGFkZGluZyB0aGUgYGV4YW1wbGUtZW50ZXItYWN0aXZlYC4gVGhpcyBpcyBhbiBpbXBvcnRhbnQgdHJpY2tcclxuICogYmVjYXVzZSBpdCBhbGxvd3MgdXMgdG8gdHJhbnNpdGlvbiBiZXR3ZWVuIGBleGFtcGxlLWVudGVyYCBhbmRcclxuICogYGV4YW1wbGUtZW50ZXItYWN0aXZlYCBldmVuIHRob3VnaCB0aGV5IHdlcmUgYWRkZWQgaW1tZWRpYXRlbHkgb25lIGFmdGVyXHJcbiAqIGFub3RoZXIuIE1vc3Qgbm90YWJseSwgdGhpcyBpcyB3aGF0IG1ha2VzIGl0IHBvc3NpYmxlIGZvciB1cyB0byBhbmltYXRlXHJcbiAqIF9hcHBlYXJhbmNlXy5cclxuICpcclxuICogYGBgY3NzXHJcbiAqIC5teS1ub2RlLWVudGVyIHtcclxuICogICBvcGFjaXR5OiAwO1xyXG4gKiB9XHJcbiAqIC5teS1ub2RlLWVudGVyLWFjdGl2ZSB7XHJcbiAqICAgb3BhY2l0eTogMTtcclxuICogICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zO1xyXG4gKiB9XHJcbiAqIC5teS1ub2RlLWV4aXQge1xyXG4gKiAgIG9wYWNpdHk6IDE7XHJcbiAqIH1cclxuICogLm15LW5vZGUtZXhpdC1hY3RpdmUge1xyXG4gKiAgIG9wYWNpdHk6IDA7XHJcbiAqICAgdHJhbnNpdGlvbjogb3BhY2l0eTogMjAwbXM7XHJcbiAqIH1cclxuICogYGBgXHJcbiAqXHJcbiAqIGAqLWFjdGl2ZWAgY2xhc3NlcyByZXByZXNlbnQgd2hpY2ggc3R5bGVzIHlvdSB3YW50IHRvIGFuaW1hdGUgKip0byoqLlxyXG4gKi9cclxuXHJcblxyXG52YXIgQ1NTVHJhbnNpdGlvbiA9XHJcbi8qI19fUFVSRV9fKi9cclxuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcclxuICBfaW5oZXJpdHNMb29zZShDU1NUcmFuc2l0aW9uLCBfUmVhY3QkQ29tcG9uZW50KTtcclxuXHJcbiAgZnVuY3Rpb24gQ1NTVHJhbnNpdGlvbigpIHtcclxuICAgIHZhciBfdGhpcztcclxuXHJcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcclxuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcclxuICAgIH1cclxuXHJcbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSB8fCB0aGlzO1xyXG5cclxuICAgIF90aGlzLm9uRW50ZXIgPSBmdW5jdGlvbiAobm9kZSwgYXBwZWFyaW5nKSB7XHJcbiAgICAgIHZhciBfdGhpcyRnZXRDbGFzc05hbWVzID0gX3RoaXMuZ2V0Q2xhc3NOYW1lcyhhcHBlYXJpbmcgPyAnYXBwZWFyJyA6ICdlbnRlcicpLFxyXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkZ2V0Q2xhc3NOYW1lcy5jbGFzc05hbWU7XHJcblxyXG4gICAgICBfdGhpcy5yZW1vdmVDbGFzc2VzKG5vZGUsICdleGl0Jyk7XHJcblxyXG4gICAgICBhZGRDbGFzcyhub2RlLCBjbGFzc05hbWUpO1xyXG5cclxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uRW50ZXIpIHtcclxuICAgICAgICBfdGhpcy5wcm9wcy5vbkVudGVyKG5vZGUsIGFwcGVhcmluZyk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgX3RoaXMub25FbnRlcmluZyA9IGZ1bmN0aW9uIChub2RlLCBhcHBlYXJpbmcpIHtcclxuICAgICAgdmFyIF90aGlzJGdldENsYXNzTmFtZXMyID0gX3RoaXMuZ2V0Q2xhc3NOYW1lcyhhcHBlYXJpbmcgPyAnYXBwZWFyJyA6ICdlbnRlcicpLFxyXG4gICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lID0gX3RoaXMkZ2V0Q2xhc3NOYW1lczIuYWN0aXZlQ2xhc3NOYW1lO1xyXG5cclxuICAgICAgX3RoaXMucmVmbG93QW5kQWRkQ2xhc3Mobm9kZSwgYWN0aXZlQ2xhc3NOYW1lKTtcclxuXHJcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkVudGVyaW5nKSB7XHJcbiAgICAgICAgX3RoaXMucHJvcHMub25FbnRlcmluZyhub2RlLCBhcHBlYXJpbmcpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIF90aGlzLm9uRW50ZXJlZCA9IGZ1bmN0aW9uIChub2RlLCBhcHBlYXJpbmcpIHtcclxuICAgICAgdmFyIGFwcGVhckNsYXNzTmFtZSA9IF90aGlzLmdldENsYXNzTmFtZXMoJ2FwcGVhcicpLmRvbmVDbGFzc05hbWU7XHJcblxyXG4gICAgICB2YXIgZW50ZXJDbGFzc05hbWUgPSBfdGhpcy5nZXRDbGFzc05hbWVzKCdlbnRlcicpLmRvbmVDbGFzc05hbWU7XHJcblxyXG4gICAgICB2YXIgZG9uZUNsYXNzTmFtZSA9IGFwcGVhcmluZyA/IGFwcGVhckNsYXNzTmFtZSArIFwiIFwiICsgZW50ZXJDbGFzc05hbWUgOiBlbnRlckNsYXNzTmFtZTtcclxuXHJcbiAgICAgIF90aGlzLnJlbW92ZUNsYXNzZXMobm9kZSwgYXBwZWFyaW5nID8gJ2FwcGVhcicgOiAnZW50ZXInKTtcclxuXHJcbiAgICAgIGFkZENsYXNzKG5vZGUsIGRvbmVDbGFzc05hbWUpO1xyXG5cclxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uRW50ZXJlZCkge1xyXG4gICAgICAgIF90aGlzLnByb3BzLm9uRW50ZXJlZChub2RlLCBhcHBlYXJpbmcpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIF90aGlzLm9uRXhpdCA9IGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgIHZhciBfdGhpcyRnZXRDbGFzc05hbWVzMyA9IF90aGlzLmdldENsYXNzTmFtZXMoJ2V4aXQnKSxcclxuICAgICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJGdldENsYXNzTmFtZXMzLmNsYXNzTmFtZTtcclxuXHJcbiAgICAgIF90aGlzLnJlbW92ZUNsYXNzZXMobm9kZSwgJ2FwcGVhcicpO1xyXG5cclxuICAgICAgX3RoaXMucmVtb3ZlQ2xhc3Nlcyhub2RlLCAnZW50ZXInKTtcclxuXHJcbiAgICAgIGFkZENsYXNzKG5vZGUsIGNsYXNzTmFtZSk7XHJcblxyXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25FeGl0KSB7XHJcbiAgICAgICAgX3RoaXMucHJvcHMub25FeGl0KG5vZGUpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIF90aGlzLm9uRXhpdGluZyA9IGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgIHZhciBfdGhpcyRnZXRDbGFzc05hbWVzNCA9IF90aGlzLmdldENsYXNzTmFtZXMoJ2V4aXQnKSxcclxuICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZSA9IF90aGlzJGdldENsYXNzTmFtZXM0LmFjdGl2ZUNsYXNzTmFtZTtcclxuXHJcbiAgICAgIF90aGlzLnJlZmxvd0FuZEFkZENsYXNzKG5vZGUsIGFjdGl2ZUNsYXNzTmFtZSk7XHJcblxyXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25FeGl0aW5nKSB7XHJcbiAgICAgICAgX3RoaXMucHJvcHMub25FeGl0aW5nKG5vZGUpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIF90aGlzLm9uRXhpdGVkID0gZnVuY3Rpb24gKG5vZGUpIHtcclxuICAgICAgdmFyIF90aGlzJGdldENsYXNzTmFtZXM1ID0gX3RoaXMuZ2V0Q2xhc3NOYW1lcygnZXhpdCcpLFxyXG4gICAgICAgICAgZG9uZUNsYXNzTmFtZSA9IF90aGlzJGdldENsYXNzTmFtZXM1LmRvbmVDbGFzc05hbWU7XHJcblxyXG4gICAgICBfdGhpcy5yZW1vdmVDbGFzc2VzKG5vZGUsICdleGl0Jyk7XHJcblxyXG4gICAgICBhZGRDbGFzcyhub2RlLCBkb25lQ2xhc3NOYW1lKTtcclxuXHJcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkV4aXRlZCkge1xyXG4gICAgICAgIF90aGlzLnByb3BzLm9uRXhpdGVkKG5vZGUpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIF90aGlzLmdldENsYXNzTmFtZXMgPSBmdW5jdGlvbiAodHlwZSkge1xyXG4gICAgICB2YXIgY2xhc3NOYW1lcyA9IF90aGlzLnByb3BzLmNsYXNzTmFtZXM7XHJcbiAgICAgIHZhciBpc1N0cmluZ0NsYXNzTmFtZXMgPSB0eXBlb2YgY2xhc3NOYW1lcyA9PT0gJ3N0cmluZyc7XHJcbiAgICAgIHZhciBwcmVmaXggPSBpc1N0cmluZ0NsYXNzTmFtZXMgJiYgY2xhc3NOYW1lcyA/IGNsYXNzTmFtZXMgKyAnLScgOiAnJztcclxuICAgICAgdmFyIGNsYXNzTmFtZSA9IGlzU3RyaW5nQ2xhc3NOYW1lcyA/IHByZWZpeCArIHR5cGUgOiBjbGFzc05hbWVzW3R5cGVdO1xyXG4gICAgICB2YXIgYWN0aXZlQ2xhc3NOYW1lID0gaXNTdHJpbmdDbGFzc05hbWVzID8gY2xhc3NOYW1lICsgJy1hY3RpdmUnIDogY2xhc3NOYW1lc1t0eXBlICsgJ0FjdGl2ZSddO1xyXG4gICAgICB2YXIgZG9uZUNsYXNzTmFtZSA9IGlzU3RyaW5nQ2xhc3NOYW1lcyA/IGNsYXNzTmFtZSArICctZG9uZScgOiBjbGFzc05hbWVzW3R5cGUgKyAnRG9uZSddO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxyXG4gICAgICAgIGFjdGl2ZUNsYXNzTmFtZTogYWN0aXZlQ2xhc3NOYW1lLFxyXG4gICAgICAgIGRvbmVDbGFzc05hbWU6IGRvbmVDbGFzc05hbWVcclxuICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIF90aGlzO1xyXG4gIH1cclxuXHJcbiAgdmFyIF9wcm90byA9IENTU1RyYW5zaXRpb24ucHJvdG90eXBlO1xyXG5cclxuICBfcHJvdG8ucmVtb3ZlQ2xhc3NlcyA9IGZ1bmN0aW9uIHJlbW92ZUNsYXNzZXMobm9kZSwgdHlwZSkge1xyXG4gICAgdmFyIF90aGlzJGdldENsYXNzTmFtZXM2ID0gdGhpcy5nZXRDbGFzc05hbWVzKHR5cGUpLFxyXG4gICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJGdldENsYXNzTmFtZXM2LmNsYXNzTmFtZSxcclxuICAgICAgICBhY3RpdmVDbGFzc05hbWUgPSBfdGhpcyRnZXRDbGFzc05hbWVzNi5hY3RpdmVDbGFzc05hbWUsXHJcbiAgICAgICAgZG9uZUNsYXNzTmFtZSA9IF90aGlzJGdldENsYXNzTmFtZXM2LmRvbmVDbGFzc05hbWU7XHJcblxyXG4gICAgY2xhc3NOYW1lICYmIHJlbW92ZUNsYXNzKG5vZGUsIGNsYXNzTmFtZSk7XHJcbiAgICBhY3RpdmVDbGFzc05hbWUgJiYgcmVtb3ZlQ2xhc3Mobm9kZSwgYWN0aXZlQ2xhc3NOYW1lKTtcclxuICAgIGRvbmVDbGFzc05hbWUgJiYgcmVtb3ZlQ2xhc3Mobm9kZSwgZG9uZUNsYXNzTmFtZSk7XHJcbiAgfTtcclxuXHJcbiAgX3Byb3RvLnJlZmxvd0FuZEFkZENsYXNzID0gZnVuY3Rpb24gcmVmbG93QW5kQWRkQ2xhc3Mobm9kZSwgY2xhc3NOYW1lKSB7XHJcbiAgICAvLyBUaGlzIGlzIGZvciB0byBmb3JjZSBhIHJlcGFpbnQsXHJcbiAgICAvLyB3aGljaCBpcyBuZWNlc3NhcnkgaW4gb3JkZXIgdG8gdHJhbnNpdGlvbiBzdHlsZXMgd2hlbiBhZGRpbmcgYSBjbGFzcyBuYW1lLlxyXG4gICAgaWYgKGNsYXNzTmFtZSkge1xyXG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cclxuICAgICAgbm9kZSAmJiBub2RlLnNjcm9sbFRvcDtcclxuICAgICAgLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cclxuXHJcbiAgICAgIGFkZENsYXNzKG5vZGUsIGNsYXNzTmFtZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcclxuICAgIHZhciBwcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLnByb3BzKTtcclxuXHJcbiAgICBkZWxldGUgcHJvcHMuY2xhc3NOYW1lcztcclxuICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9UcmFuc2l0aW9uLmRlZmF1bHQsIF9leHRlbmRzKHt9LCBwcm9wcywge1xyXG4gICAgICBvbkVudGVyOiB0aGlzLm9uRW50ZXIsXHJcbiAgICAgIG9uRW50ZXJlZDogdGhpcy5vbkVudGVyZWQsXHJcbiAgICAgIG9uRW50ZXJpbmc6IHRoaXMub25FbnRlcmluZyxcclxuICAgICAgb25FeGl0OiB0aGlzLm9uRXhpdCxcclxuICAgICAgb25FeGl0aW5nOiB0aGlzLm9uRXhpdGluZyxcclxuICAgICAgb25FeGl0ZWQ6IHRoaXMub25FeGl0ZWRcclxuICAgIH0pKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gQ1NTVHJhbnNpdGlvbjtcclxufShfcmVhY3QuZGVmYXVsdC5Db21wb25lbnQpO1xyXG5cclxuQ1NTVHJhbnNpdGlvbi5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgY2xhc3NOYW1lczogJydcclxufTtcclxuQ1NTVHJhbnNpdGlvbi5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBfZXh0ZW5kcyh7fSwgX1RyYW5zaXRpb24uZGVmYXVsdC5wcm9wVHlwZXMsIHtcclxuICAvKipcclxuICAgKiBUaGUgYW5pbWF0aW9uIGNsYXNzTmFtZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50IGFzIGl0IGVudGVycywgZXhpdHMgb3JcclxuICAgKiBoYXMgZmluaXNoZWQgdGhlIHRyYW5zaXRpb24uIEEgc2luZ2xlIG5hbWUgY2FuIGJlIHByb3ZpZGVkIGFuZCBpdCB3aWxsIGJlXHJcbiAgICogc3VmZml4ZWQgZm9yIGVhY2ggc3RhZ2U6IGUuZy5cclxuICAgKlxyXG4gICAqIGBjbGFzc05hbWVzPVwiZmFkZVwiYCBhcHBsaWVzIGBmYWRlLWVudGVyYCwgYGZhZGUtZW50ZXItYWN0aXZlYCxcclxuICAgKiBgZmFkZS1lbnRlci1kb25lYCwgYGZhZGUtZXhpdGAsIGBmYWRlLWV4aXQtYWN0aXZlYCwgYGZhZGUtZXhpdC1kb25lYCxcclxuICAgKiBgZmFkZS1hcHBlYXJgLCBgZmFkZS1hcHBlYXItYWN0aXZlYCwgYW5kIGBmYWRlLWFwcGVhci1kb25lYC5cclxuICAgKlxyXG4gICAqICoqTm90ZSoqOiBgZmFkZS1hcHBlYXItZG9uZWAgYW5kIGBmYWRlLWVudGVyLWRvbmVgIHdpbGwgX2JvdGhfIGJlIGFwcGxpZWQuXHJcbiAgICogVGhpcyBhbGxvd3MgeW91IHRvIGRlZmluZSBkaWZmZXJlbnQgYmVoYXZpb3IgZm9yIHdoZW4gYXBwZWFyaW5nIGlzIGRvbmUgYW5kXHJcbiAgICogd2hlbiByZWd1bGFyIGVudGVyaW5nIGlzIGRvbmUsIHVzaW5nIHNlbGVjdG9ycyBsaWtlXHJcbiAgICogYC5mYWRlLWVudGVyLWRvbmU6bm90KC5mYWRlLWFwcGVhci1kb25lKWAuIEZvciBleGFtcGxlLCB5b3UgY291bGQgYXBwbHkgYW5cclxuICAgKiBlcGljIGVudHJhbmNlIGFuaW1hdGlvbiB3aGVuIGVsZW1lbnQgZmlyc3QgYXBwZWFycyBpbiB0aGUgRE9NIHVzaW5nXHJcbiAgICogW0FuaW1hdGUuY3NzXShodHRwczovL2RhbmVkZW4uZ2l0aHViLmlvL2FuaW1hdGUuY3NzLykuIE90aGVyd2lzZSB5b3UgY2FuXHJcbiAgICogc2ltcGx5IHVzZSBgZmFkZS1lbnRlci1kb25lYCBmb3IgZGVmaW5pbmcgYm90aCBjYXNlcy5cclxuICAgKlxyXG4gICAqIEVhY2ggaW5kaXZpZHVhbCBjbGFzc05hbWVzIGNhbiBhbHNvIGJlIHNwZWNpZmllZCBpbmRlcGVuZGVudGx5IGxpa2U6XHJcbiAgICpcclxuICAgKiBgYGBqc1xyXG4gICAqIGNsYXNzTmFtZXM9e3tcclxuICAgKiAgYXBwZWFyOiAnbXktYXBwZWFyJyxcclxuICAgKiAgYXBwZWFyQWN0aXZlOiAnbXktYWN0aXZlLWFwcGVhcicsXHJcbiAgICogIGFwcGVhckRvbmU6ICdteS1kb25lLWFwcGVhcicsXHJcbiAgICogIGVudGVyOiAnbXktZW50ZXInLFxyXG4gICAqICBlbnRlckFjdGl2ZTogJ215LWFjdGl2ZS1lbnRlcicsXHJcbiAgICogIGVudGVyRG9uZTogJ215LWRvbmUtZW50ZXInLFxyXG4gICAqICBleGl0OiAnbXktZXhpdCcsXHJcbiAgICogIGV4aXRBY3RpdmU6ICdteS1hY3RpdmUtZXhpdCcsXHJcbiAgICogIGV4aXREb25lOiAnbXktZG9uZS1leGl0JyxcclxuICAgKiB9fVxyXG4gICAqIGBgYFxyXG4gICAqXHJcbiAgICogSWYgeW91IHdhbnQgdG8gc2V0IHRoZXNlIGNsYXNzZXMgdXNpbmcgQ1NTIE1vZHVsZXM6XHJcbiAgICpcclxuICAgKiBgYGBqc1xyXG4gICAqIGltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMuY3NzJztcclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqIHlvdSBtaWdodCB3YW50IHRvIHVzZSBjYW1lbENhc2UgaW4geW91ciBDU1MgZmlsZSwgdGhhdCB3YXkgY291bGQgc2ltcGx5XHJcbiAgICogc3ByZWFkIHRoZW0gaW5zdGVhZCBvZiBsaXN0aW5nIHRoZW0gb25lIGJ5IG9uZTpcclxuICAgKlxyXG4gICAqIGBgYGpzXHJcbiAgICogY2xhc3NOYW1lcz17eyAuLi5zdHlsZXMgfX1cclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmcgfCB7XHJcbiAgICogIGFwcGVhcj86IHN0cmluZyxcclxuICAgKiAgYXBwZWFyQWN0aXZlPzogc3RyaW5nLFxyXG4gICAqICBhcHBlYXJEb25lPzogc3RyaW5nLFxyXG4gICAqICBlbnRlcj86IHN0cmluZyxcclxuICAgKiAgZW50ZXJBY3RpdmU/OiBzdHJpbmcsXHJcbiAgICogIGVudGVyRG9uZT86IHN0cmluZyxcclxuICAgKiAgZXhpdD86IHN0cmluZyxcclxuICAgKiAgZXhpdEFjdGl2ZT86IHN0cmluZyxcclxuICAgKiAgZXhpdERvbmU/OiBzdHJpbmcsXHJcbiAgICogfX1cclxuICAgKi9cclxuICBjbGFzc05hbWVzOiBfUHJvcFR5cGVzLmNsYXNzTmFtZXNTaGFwZSxcclxuXHJcbiAgLyoqXHJcbiAgICogQSBgPFRyYW5zaXRpb24+YCBjYWxsYmFjayBmaXJlZCBpbW1lZGlhdGVseSBhZnRlciB0aGUgJ2VudGVyJyBvciAnYXBwZWFyJyBjbGFzcyBpc1xyXG4gICAqIGFwcGxpZWQuXHJcbiAgICpcclxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCwgaXNBcHBlYXJpbmc6IGJvb2wpXHJcbiAgICovXHJcbiAgb25FbnRlcjogUHJvcFR5cGVzLmZ1bmMsXHJcblxyXG4gIC8qKlxyXG4gICAqIEEgYDxUcmFuc2l0aW9uPmAgY2FsbGJhY2sgZmlyZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlICdlbnRlci1hY3RpdmUnIG9yXHJcbiAgICogJ2FwcGVhci1hY3RpdmUnIGNsYXNzIGlzIGFwcGxpZWQuXHJcbiAgICpcclxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCwgaXNBcHBlYXJpbmc6IGJvb2wpXHJcbiAgICovXHJcbiAgb25FbnRlcmluZzogUHJvcFR5cGVzLmZ1bmMsXHJcblxyXG4gIC8qKlxyXG4gICAqIEEgYDxUcmFuc2l0aW9uPmAgY2FsbGJhY2sgZmlyZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlICdlbnRlcicgb3JcclxuICAgKiAnYXBwZWFyJyBjbGFzc2VzIGFyZSAqKnJlbW92ZWQqKiBhbmQgdGhlIGBkb25lYCBjbGFzcyBpcyBhZGRlZCB0byB0aGUgRE9NIG5vZGUuXHJcbiAgICpcclxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCwgaXNBcHBlYXJpbmc6IGJvb2wpXHJcbiAgICovXHJcbiAgb25FbnRlcmVkOiBQcm9wVHlwZXMuZnVuYyxcclxuXHJcbiAgLyoqXHJcbiAgICogQSBgPFRyYW5zaXRpb24+YCBjYWxsYmFjayBmaXJlZCBpbW1lZGlhdGVseSBhZnRlciB0aGUgJ2V4aXQnIGNsYXNzIGlzXHJcbiAgICogYXBwbGllZC5cclxuICAgKlxyXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50KVxyXG4gICAqL1xyXG4gIG9uRXhpdDogUHJvcFR5cGVzLmZ1bmMsXHJcblxyXG4gIC8qKlxyXG4gICAqIEEgYDxUcmFuc2l0aW9uPmAgY2FsbGJhY2sgZmlyZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlICdleGl0LWFjdGl2ZScgaXMgYXBwbGllZC5cclxuICAgKlxyXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50KVxyXG4gICAqL1xyXG4gIG9uRXhpdGluZzogUHJvcFR5cGVzLmZ1bmMsXHJcblxyXG4gIC8qKlxyXG4gICAqIEEgYDxUcmFuc2l0aW9uPmAgY2FsbGJhY2sgZmlyZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlICdleGl0JyBjbGFzc2VzXHJcbiAgICogYXJlICoqcmVtb3ZlZCoqIGFuZCB0aGUgYGV4aXQtZG9uZWAgY2xhc3MgaXMgYWRkZWQgdG8gdGhlIERPTSBub2RlLlxyXG4gICAqXHJcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQpXHJcbiAgICovXHJcbiAgb25FeGl0ZWQ6IFByb3BUeXBlcy5mdW5jXHJcbn0pIDoge307XHJcbnZhciBfZGVmYXVsdCA9IENTU1RyYW5zaXRpb247XHJcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xyXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xyXG5cclxudmFyIF9wcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcclxuXHJcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XHJcblxyXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTtcclxuXHJcbnZhciBfVHJhbnNpdGlvbkdyb3VwID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9UcmFuc2l0aW9uR3JvdXBcIikpO1xyXG5cclxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cclxuXHJcbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSB7fTsgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyB2YXIga2V5LCBpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IHJldHVybiB0YXJnZXQ7IH1cclxuXHJcbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpOyBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzczsgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxyXG5cclxuLyoqXHJcbiAqIFRoZSBgPFJlcGxhY2VUcmFuc2l0aW9uPmAgY29tcG9uZW50IGlzIGEgc3BlY2lhbGl6ZWQgYFRyYW5zaXRpb25gIGNvbXBvbmVudFxyXG4gKiB0aGF0IGFuaW1hdGVzIGJldHdlZW4gdHdvIGNoaWxkcmVuLlxyXG4gKlxyXG4gKiBgYGBqc3hcclxuICogPFJlcGxhY2VUcmFuc2l0aW9uIGluPlxyXG4gKiAgIDxGYWRlPjxkaXY+SSBhcHBlYXIgZmlyc3Q8L2Rpdj48L0ZhZGU+XHJcbiAqICAgPEZhZGU+PGRpdj5JIHJlcGxhY2UgdGhlIGFib3ZlPC9kaXY+PC9GYWRlPlxyXG4gKiA8L1JlcGxhY2VUcmFuc2l0aW9uPlxyXG4gKiBgYGBcclxuICovXHJcbnZhciBSZXBsYWNlVHJhbnNpdGlvbiA9XHJcbi8qI19fUFVSRV9fKi9cclxuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcclxuICBfaW5oZXJpdHNMb29zZShSZXBsYWNlVHJhbnNpdGlvbiwgX1JlYWN0JENvbXBvbmVudCk7XHJcblxyXG4gIGZ1bmN0aW9uIFJlcGxhY2VUcmFuc2l0aW9uKCkge1xyXG4gICAgdmFyIF90aGlzO1xyXG5cclxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBfYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcclxuICAgICAgX2FyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XHJcbiAgICB9XHJcblxyXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwuYXBwbHkoX1JlYWN0JENvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChfYXJncykpIHx8IHRoaXM7XHJcblxyXG4gICAgX3RoaXMuaGFuZGxlRW50ZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xyXG4gICAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIF90aGlzLmhhbmRsZUxpZmVjeWNsZSgnb25FbnRlcicsIDAsIGFyZ3MpO1xyXG4gICAgfTtcclxuXHJcbiAgICBfdGhpcy5oYW5kbGVFbnRlcmluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XHJcbiAgICAgICAgYXJnc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gX3RoaXMuaGFuZGxlTGlmZWN5Y2xlKCdvbkVudGVyaW5nJywgMCwgYXJncyk7XHJcbiAgICB9O1xyXG5cclxuICAgIF90aGlzLmhhbmRsZUVudGVyZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGZvciAodmFyIF9sZW40ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNCksIF9rZXk0ID0gMDsgX2tleTQgPCBfbGVuNDsgX2tleTQrKykge1xyXG4gICAgICAgIGFyZ3NbX2tleTRdID0gYXJndW1lbnRzW19rZXk0XTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIF90aGlzLmhhbmRsZUxpZmVjeWNsZSgnb25FbnRlcmVkJywgMCwgYXJncyk7XHJcbiAgICB9O1xyXG5cclxuICAgIF90aGlzLmhhbmRsZUV4aXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGZvciAodmFyIF9sZW41ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNSksIF9rZXk1ID0gMDsgX2tleTUgPCBfbGVuNTsgX2tleTUrKykge1xyXG4gICAgICAgIGFyZ3NbX2tleTVdID0gYXJndW1lbnRzW19rZXk1XTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIF90aGlzLmhhbmRsZUxpZmVjeWNsZSgnb25FeGl0JywgMSwgYXJncyk7XHJcbiAgICB9O1xyXG5cclxuICAgIF90aGlzLmhhbmRsZUV4aXRpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGZvciAodmFyIF9sZW42ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNiksIF9rZXk2ID0gMDsgX2tleTYgPCBfbGVuNjsgX2tleTYrKykge1xyXG4gICAgICAgIGFyZ3NbX2tleTZdID0gYXJndW1lbnRzW19rZXk2XTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIF90aGlzLmhhbmRsZUxpZmVjeWNsZSgnb25FeGl0aW5nJywgMSwgYXJncyk7XHJcbiAgICB9O1xyXG5cclxuICAgIF90aGlzLmhhbmRsZUV4aXRlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgZm9yICh2YXIgX2xlbjcgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW43KSwgX2tleTcgPSAwOyBfa2V5NyA8IF9sZW43OyBfa2V5NysrKSB7XHJcbiAgICAgICAgYXJnc1tfa2V5N10gPSBhcmd1bWVudHNbX2tleTddO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gX3RoaXMuaGFuZGxlTGlmZWN5Y2xlKCdvbkV4aXRlZCcsIDEsIGFyZ3MpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gX3RoaXM7XHJcbiAgfVxyXG5cclxuICB2YXIgX3Byb3RvID0gUmVwbGFjZVRyYW5zaXRpb24ucHJvdG90eXBlO1xyXG5cclxuICBfcHJvdG8uaGFuZGxlTGlmZWN5Y2xlID0gZnVuY3Rpb24gaGFuZGxlTGlmZWN5Y2xlKGhhbmRsZXIsIGlkeCwgb3JpZ2luYWxBcmdzKSB7XHJcbiAgICB2YXIgX2NoaWxkJHByb3BzO1xyXG5cclxuICAgIHZhciBjaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW47XHJcblxyXG4gICAgdmFyIGNoaWxkID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbilbaWR4XTtcclxuXHJcbiAgICBpZiAoY2hpbGQucHJvcHNbaGFuZGxlcl0pIChfY2hpbGQkcHJvcHMgPSBjaGlsZC5wcm9wcylbaGFuZGxlcl0uYXBwbHkoX2NoaWxkJHByb3BzLCBvcmlnaW5hbEFyZ3MpO1xyXG4gICAgaWYgKHRoaXMucHJvcHNbaGFuZGxlcl0pIHRoaXMucHJvcHNbaGFuZGxlcl0oKDAsIF9yZWFjdERvbS5maW5kRE9NTm9kZSkodGhpcykpO1xyXG4gIH07XHJcblxyXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XHJcbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxyXG4gICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMuY2hpbGRyZW4sXHJcbiAgICAgICAgaW5Qcm9wID0gX3RoaXMkcHJvcHMuaW4sXHJcbiAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wcywgW1wiY2hpbGRyZW5cIiwgXCJpblwiXSk7XHJcblxyXG4gICAgdmFyIF9SZWFjdCRDaGlsZHJlbiR0b0FyciA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pLFxyXG4gICAgICAgIGZpcnN0ID0gX1JlYWN0JENoaWxkcmVuJHRvQXJyWzBdLFxyXG4gICAgICAgIHNlY29uZCA9IF9SZWFjdCRDaGlsZHJlbiR0b0FyclsxXTtcclxuXHJcbiAgICBkZWxldGUgcHJvcHMub25FbnRlcjtcclxuICAgIGRlbGV0ZSBwcm9wcy5vbkVudGVyaW5nO1xyXG4gICAgZGVsZXRlIHByb3BzLm9uRW50ZXJlZDtcclxuICAgIGRlbGV0ZSBwcm9wcy5vbkV4aXQ7XHJcbiAgICBkZWxldGUgcHJvcHMub25FeGl0aW5nO1xyXG4gICAgZGVsZXRlIHByb3BzLm9uRXhpdGVkO1xyXG4gICAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX1RyYW5zaXRpb25Hcm91cC5kZWZhdWx0LCBwcm9wcywgaW5Qcm9wID8gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGZpcnN0LCB7XHJcbiAgICAgIGtleTogJ2ZpcnN0JyxcclxuICAgICAgb25FbnRlcjogdGhpcy5oYW5kbGVFbnRlcixcclxuICAgICAgb25FbnRlcmluZzogdGhpcy5oYW5kbGVFbnRlcmluZyxcclxuICAgICAgb25FbnRlcmVkOiB0aGlzLmhhbmRsZUVudGVyZWRcclxuICAgIH0pIDogX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KHNlY29uZCwge1xyXG4gICAgICBrZXk6ICdzZWNvbmQnLFxyXG4gICAgICBvbkVudGVyOiB0aGlzLmhhbmRsZUV4aXQsXHJcbiAgICAgIG9uRW50ZXJpbmc6IHRoaXMuaGFuZGxlRXhpdGluZyxcclxuICAgICAgb25FbnRlcmVkOiB0aGlzLmhhbmRsZUV4aXRlZFxyXG4gICAgfSkpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiBSZXBsYWNlVHJhbnNpdGlvbjtcclxufShfcmVhY3QuZGVmYXVsdC5Db21wb25lbnQpO1xyXG5cclxuUmVwbGFjZVRyYW5zaXRpb24ucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xyXG4gIGluOiBfcHJvcFR5cGVzLmRlZmF1bHQuYm9vbC5pc1JlcXVpcmVkLFxyXG4gIGNoaWxkcmVuOiBmdW5jdGlvbiBjaGlsZHJlbihwcm9wcywgcHJvcE5hbWUpIHtcclxuICAgIGlmIChfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5jb3VudChwcm9wc1twcm9wTmFtZV0pICE9PSAyKSByZXR1cm4gbmV3IEVycm9yKFwiXFxcIlwiICsgcHJvcE5hbWUgKyBcIlxcXCIgbXVzdCBiZSBleGFjdGx5IHR3byB0cmFuc2l0aW9uIGNvbXBvbmVudHMuXCIpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59IDoge307XHJcbnZhciBfZGVmYXVsdCA9IFJlcGxhY2VUcmFuc2l0aW9uO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcclxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuRVhJVElORyA9IGV4cG9ydHMuRU5URVJFRCA9IGV4cG9ydHMuRU5URVJJTkcgPSBleHBvcnRzLkVYSVRFRCA9IGV4cG9ydHMuVU5NT1VOVEVEID0gdm9pZCAwO1xyXG5cclxudmFyIFByb3BUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcclxuXHJcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XHJcblxyXG52YXIgX3JlYWN0RG9tID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcclxuXHJcbnZhciBfcmVhY3RMaWZlY3ljbGVzQ29tcGF0ID0gcmVxdWlyZShcInJlYWN0LWxpZmVjeWNsZXMtY29tcGF0XCIpO1xyXG5cclxudmFyIF9Qcm9wVHlwZXMgPSByZXF1aXJlKFwiLi91dGlscy9Qcm9wVHlwZXNcIik7XHJcblxyXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxyXG5cclxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiB7fTsgaWYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxyXG5cclxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxyXG5cclxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7IHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzOyBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XHJcblxyXG52YXIgVU5NT1VOVEVEID0gJ3VubW91bnRlZCc7XHJcbmV4cG9ydHMuVU5NT1VOVEVEID0gVU5NT1VOVEVEO1xyXG52YXIgRVhJVEVEID0gJ2V4aXRlZCc7XHJcbmV4cG9ydHMuRVhJVEVEID0gRVhJVEVEO1xyXG52YXIgRU5URVJJTkcgPSAnZW50ZXJpbmcnO1xyXG5leHBvcnRzLkVOVEVSSU5HID0gRU5URVJJTkc7XHJcbnZhciBFTlRFUkVEID0gJ2VudGVyZWQnO1xyXG5leHBvcnRzLkVOVEVSRUQgPSBFTlRFUkVEO1xyXG52YXIgRVhJVElORyA9ICdleGl0aW5nJztcclxuLyoqXHJcbiAqIFRoZSBUcmFuc2l0aW9uIGNvbXBvbmVudCBsZXRzIHlvdSBkZXNjcmliZSBhIHRyYW5zaXRpb24gZnJvbSBvbmUgY29tcG9uZW50XHJcbiAqIHN0YXRlIHRvIGFub3RoZXIgX292ZXIgdGltZV8gd2l0aCBhIHNpbXBsZSBkZWNsYXJhdGl2ZSBBUEkuIE1vc3QgY29tbW9ubHlcclxuICogaXQncyB1c2VkIHRvIGFuaW1hdGUgdGhlIG1vdW50aW5nIGFuZCB1bm1vdW50aW5nIG9mIGEgY29tcG9uZW50LCBidXQgY2FuIGFsc29cclxuICogYmUgdXNlZCB0byBkZXNjcmliZSBpbi1wbGFjZSB0cmFuc2l0aW9uIHN0YXRlcyBhcyB3ZWxsLlxyXG4gKlxyXG4gKiAtLS1cclxuICpcclxuICogKipOb3RlKio6IGBUcmFuc2l0aW9uYCBpcyBhIHBsYXRmb3JtLWFnbm9zdGljIGJhc2UgY29tcG9uZW50LiBJZiB5b3UncmUgdXNpbmdcclxuICogdHJhbnNpdGlvbnMgaW4gQ1NTLCB5b3UnbGwgcHJvYmFibHkgd2FudCB0byB1c2VcclxuICogW2BDU1NUcmFuc2l0aW9uYF0oaHR0cHM6Ly9yZWFjdGNvbW11bml0eS5vcmcvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9jc3MtdHJhbnNpdGlvbilcclxuICogaW5zdGVhZC4gSXQgaW5oZXJpdHMgYWxsIHRoZSBmZWF0dXJlcyBvZiBgVHJhbnNpdGlvbmAsIGJ1dCBjb250YWluc1xyXG4gKiBhZGRpdGlvbmFsIGZlYXR1cmVzIG5lY2Vzc2FyeSB0byBwbGF5IG5pY2Ugd2l0aCBDU1MgdHJhbnNpdGlvbnMgKGhlbmNlIHRoZVxyXG4gKiBuYW1lIG9mIHRoZSBjb21wb25lbnQpLlxyXG4gKlxyXG4gKiAtLS1cclxuICpcclxuICogQnkgZGVmYXVsdCB0aGUgYFRyYW5zaXRpb25gIGNvbXBvbmVudCBkb2VzIG5vdCBhbHRlciB0aGUgYmVoYXZpb3Igb2YgdGhlXHJcbiAqIGNvbXBvbmVudCBpdCByZW5kZXJzLCBpdCBvbmx5IHRyYWNrcyBcImVudGVyXCIgYW5kIFwiZXhpdFwiIHN0YXRlcyBmb3IgdGhlXHJcbiAqIGNvbXBvbmVudHMuIEl0J3MgdXAgdG8geW91IHRvIGdpdmUgbWVhbmluZyBhbmQgZWZmZWN0IHRvIHRob3NlIHN0YXRlcy4gRm9yXHJcbiAqIGV4YW1wbGUgd2UgY2FuIGFkZCBzdHlsZXMgdG8gYSBjb21wb25lbnQgd2hlbiBpdCBlbnRlcnMgb3IgZXhpdHM6XHJcbiAqXHJcbiAqIGBgYGpzeFxyXG4gKiBpbXBvcnQgeyBUcmFuc2l0aW9uIH0gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCc7XHJcbiAqXHJcbiAqIGNvbnN0IGR1cmF0aW9uID0gMzAwO1xyXG4gKlxyXG4gKiBjb25zdCBkZWZhdWx0U3R5bGUgPSB7XHJcbiAqICAgdHJhbnNpdGlvbjogYG9wYWNpdHkgJHtkdXJhdGlvbn1tcyBlYXNlLWluLW91dGAsXHJcbiAqICAgb3BhY2l0eTogMCxcclxuICogfVxyXG4gKlxyXG4gKiBjb25zdCB0cmFuc2l0aW9uU3R5bGVzID0ge1xyXG4gKiAgIGVudGVyaW5nOiB7IG9wYWNpdHk6IDAgfSxcclxuICogICBlbnRlcmVkOiAgeyBvcGFjaXR5OiAxIH0sXHJcbiAqIH07XHJcbiAqXHJcbiAqIGNvbnN0IEZhZGUgPSAoeyBpbjogaW5Qcm9wIH0pID0+IChcclxuICogICA8VHJhbnNpdGlvbiBpbj17aW5Qcm9wfSB0aW1lb3V0PXtkdXJhdGlvbn0+XHJcbiAqICAgICB7c3RhdGUgPT4gKFxyXG4gKiAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAqICAgICAgICAgLi4uZGVmYXVsdFN0eWxlLFxyXG4gKiAgICAgICAgIC4uLnRyYW5zaXRpb25TdHlsZXNbc3RhdGVdXHJcbiAqICAgICAgIH19PlxyXG4gKiAgICAgICAgIEknbSBhIGZhZGUgVHJhbnNpdGlvbiFcclxuICogICAgICAgPC9kaXY+XHJcbiAqICAgICApfVxyXG4gKiAgIDwvVHJhbnNpdGlvbj5cclxuICogKTtcclxuICogYGBgXHJcbiAqXHJcbiAqIFRoZXJlIGFyZSA0IG1haW4gc3RhdGVzIGEgVHJhbnNpdGlvbiBjYW4gYmUgaW46XHJcbiAqICAtIGAnZW50ZXJpbmcnYFxyXG4gKiAgLSBgJ2VudGVyZWQnYFxyXG4gKiAgLSBgJ2V4aXRpbmcnYFxyXG4gKiAgLSBgJ2V4aXRlZCdgXHJcbiAqXHJcbiAqIFRyYW5zaXRpb24gc3RhdGUgaXMgdG9nZ2xlZCB2aWEgdGhlIGBpbmAgcHJvcC4gV2hlbiBgdHJ1ZWAgdGhlIGNvbXBvbmVudFxyXG4gKiBiZWdpbnMgdGhlIFwiRW50ZXJcIiBzdGFnZS4gRHVyaW5nIHRoaXMgc3RhZ2UsIHRoZSBjb21wb25lbnQgd2lsbCBzaGlmdCBmcm9tXHJcbiAqIGl0cyBjdXJyZW50IHRyYW5zaXRpb24gc3RhdGUsIHRvIGAnZW50ZXJpbmcnYCBmb3IgdGhlIGR1cmF0aW9uIG9mIHRoZVxyXG4gKiB0cmFuc2l0aW9uIGFuZCB0aGVuIHRvIHRoZSBgJ2VudGVyZWQnYCBzdGFnZSBvbmNlIGl0J3MgY29tcGxldGUuIExldCdzIHRha2VcclxuICogdGhlIGZvbGxvd2luZyBleGFtcGxlICh3ZSdsbCB1c2UgdGhlXHJcbiAqIFt1c2VTdGF0ZV0oaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL2hvb2tzLXJlZmVyZW5jZS5odG1sI3VzZXN0YXRlKSBob29rKTpcclxuICpcclxuICogYGBganN4XHJcbiAqIGZ1bmN0aW9uIEFwcCgpIHtcclxuICogICBjb25zdCBbaW5Qcm9wLCBzZXRJblByb3BdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gKiAgIHJldHVybiAoXHJcbiAqICAgICA8ZGl2PlxyXG4gKiAgICAgICA8VHJhbnNpdGlvbiBpbj17aW5Qcm9wfSB0aW1lb3V0PXs1MDB9PlxyXG4gKiAgICAgICAgIHtzdGF0ZSA9PiAoXHJcbiAqICAgICAgICAgICAvLyAuLi5cclxuICogICAgICAgICApfVxyXG4gKiAgICAgICA8L1RyYW5zaXRpb24+XHJcbiAqICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0SW5Qcm9wKHRydWUpfT5cclxuICogICAgICAgICBDbGljayB0byBFbnRlclxyXG4gKiAgICAgICA8L2J1dHRvbj5cclxuICogICAgIDwvZGl2PlxyXG4gKiAgICk7XHJcbiAqIH1cclxuICogYGBgXHJcbiAqXHJcbiAqIFdoZW4gdGhlIGJ1dHRvbiBpcyBjbGlja2VkIHRoZSBjb21wb25lbnQgd2lsbCBzaGlmdCB0byB0aGUgYCdlbnRlcmluZydgIHN0YXRlXHJcbiAqIGFuZCBzdGF5IHRoZXJlIGZvciA1MDBtcyAodGhlIHZhbHVlIG9mIGB0aW1lb3V0YCkgYmVmb3JlIGl0IGZpbmFsbHkgc3dpdGNoZXNcclxuICogdG8gYCdlbnRlcmVkJ2AuXHJcbiAqXHJcbiAqIFdoZW4gYGluYCBpcyBgZmFsc2VgIHRoZSBzYW1lIHRoaW5nIGhhcHBlbnMgZXhjZXB0IHRoZSBzdGF0ZSBtb3ZlcyBmcm9tXHJcbiAqIGAnZXhpdGluZydgIHRvIGAnZXhpdGVkJ2AuXHJcbiAqL1xyXG5cclxuZXhwb3J0cy5FWElUSU5HID0gRVhJVElORztcclxuXHJcbnZhciBUcmFuc2l0aW9uID1cclxuLyojX19QVVJFX18qL1xyXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xyXG4gIF9pbmhlcml0c0xvb3NlKFRyYW5zaXRpb24sIF9SZWFjdCRDb21wb25lbnQpO1xyXG5cclxuICBmdW5jdGlvbiBUcmFuc2l0aW9uKHByb3BzLCBjb250ZXh0KSB7XHJcbiAgICB2YXIgX3RoaXM7XHJcblxyXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpIHx8IHRoaXM7XHJcbiAgICB2YXIgcGFyZW50R3JvdXAgPSBjb250ZXh0LnRyYW5zaXRpb25Hcm91cDsgLy8gSW4gdGhlIGNvbnRleHQgb2YgYSBUcmFuc2l0aW9uR3JvdXAgYWxsIGVudGVycyBhcmUgcmVhbGx5IGFwcGVhcnNcclxuXHJcbiAgICB2YXIgYXBwZWFyID0gcGFyZW50R3JvdXAgJiYgIXBhcmVudEdyb3VwLmlzTW91bnRpbmcgPyBwcm9wcy5lbnRlciA6IHByb3BzLmFwcGVhcjtcclxuICAgIHZhciBpbml0aWFsU3RhdHVzO1xyXG4gICAgX3RoaXMuYXBwZWFyU3RhdHVzID0gbnVsbDtcclxuXHJcbiAgICBpZiAocHJvcHMuaW4pIHtcclxuICAgICAgaWYgKGFwcGVhcikge1xyXG4gICAgICAgIGluaXRpYWxTdGF0dXMgPSBFWElURUQ7XHJcbiAgICAgICAgX3RoaXMuYXBwZWFyU3RhdHVzID0gRU5URVJJTkc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaW5pdGlhbFN0YXR1cyA9IEVOVEVSRUQ7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChwcm9wcy51bm1vdW50T25FeGl0IHx8IHByb3BzLm1vdW50T25FbnRlcikge1xyXG4gICAgICAgIGluaXRpYWxTdGF0dXMgPSBVTk1PVU5URUQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaW5pdGlhbFN0YXR1cyA9IEVYSVRFRDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF90aGlzLnN0YXRlID0ge1xyXG4gICAgICBzdGF0dXM6IGluaXRpYWxTdGF0dXNcclxuICAgIH07XHJcbiAgICBfdGhpcy5uZXh0Q2FsbGJhY2sgPSBudWxsO1xyXG4gICAgcmV0dXJuIF90aGlzO1xyXG4gIH1cclxuXHJcbiAgdmFyIF9wcm90byA9IFRyYW5zaXRpb24ucHJvdG90eXBlO1xyXG5cclxuICBfcHJvdG8uZ2V0Q2hpbGRDb250ZXh0ID0gZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0KCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHJhbnNpdGlvbkdyb3VwOiBudWxsIC8vIGFsbG93cyBmb3IgbmVzdGVkIFRyYW5zaXRpb25zXHJcblxyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBUcmFuc2l0aW9uLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9IGZ1bmN0aW9uIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhfcmVmLCBwcmV2U3RhdGUpIHtcclxuICAgIHZhciBuZXh0SW4gPSBfcmVmLmluO1xyXG5cclxuICAgIGlmIChuZXh0SW4gJiYgcHJldlN0YXRlLnN0YXR1cyA9PT0gVU5NT1VOVEVEKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3RhdHVzOiBFWElURURcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9OyAvLyBnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZShwcmV2UHJvcHMpIHtcclxuICAvLyAgIGxldCBuZXh0U3RhdHVzID0gbnVsbFxyXG4gIC8vICAgaWYgKHByZXZQcm9wcyAhPT0gdGhpcy5wcm9wcykge1xyXG4gIC8vICAgICBjb25zdCB7IHN0YXR1cyB9ID0gdGhpcy5zdGF0ZVxyXG4gIC8vICAgICBpZiAodGhpcy5wcm9wcy5pbikge1xyXG4gIC8vICAgICAgIGlmIChzdGF0dXMgIT09IEVOVEVSSU5HICYmIHN0YXR1cyAhPT0gRU5URVJFRCkge1xyXG4gIC8vICAgICAgICAgbmV4dFN0YXR1cyA9IEVOVEVSSU5HXHJcbiAgLy8gICAgICAgfVxyXG4gIC8vICAgICB9IGVsc2Uge1xyXG4gIC8vICAgICAgIGlmIChzdGF0dXMgPT09IEVOVEVSSU5HIHx8IHN0YXR1cyA9PT0gRU5URVJFRCkge1xyXG4gIC8vICAgICAgICAgbmV4dFN0YXR1cyA9IEVYSVRJTkdcclxuICAvLyAgICAgICB9XHJcbiAgLy8gICAgIH1cclxuICAvLyAgIH1cclxuICAvLyAgIHJldHVybiB7IG5leHRTdGF0dXMgfVxyXG4gIC8vIH1cclxuXHJcblxyXG4gIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy51cGRhdGVTdGF0dXModHJ1ZSwgdGhpcy5hcHBlYXJTdGF0dXMpO1xyXG4gIH07XHJcblxyXG4gIF9wcm90by5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XHJcbiAgICB2YXIgbmV4dFN0YXR1cyA9IG51bGw7XHJcblxyXG4gICAgaWYgKHByZXZQcm9wcyAhPT0gdGhpcy5wcm9wcykge1xyXG4gICAgICB2YXIgc3RhdHVzID0gdGhpcy5zdGF0ZS5zdGF0dXM7XHJcblxyXG4gICAgICBpZiAodGhpcy5wcm9wcy5pbikge1xyXG4gICAgICAgIGlmIChzdGF0dXMgIT09IEVOVEVSSU5HICYmIHN0YXR1cyAhPT0gRU5URVJFRCkge1xyXG4gICAgICAgICAgbmV4dFN0YXR1cyA9IEVOVEVSSU5HO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoc3RhdHVzID09PSBFTlRFUklORyB8fCBzdGF0dXMgPT09IEVOVEVSRUQpIHtcclxuICAgICAgICAgIG5leHRTdGF0dXMgPSBFWElUSU5HO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudXBkYXRlU3RhdHVzKGZhbHNlLCBuZXh0U3RhdHVzKTtcclxuICB9O1xyXG5cclxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIHRoaXMuY2FuY2VsTmV4dENhbGxiYWNrKCk7XHJcbiAgfTtcclxuXHJcbiAgX3Byb3RvLmdldFRpbWVvdXRzID0gZnVuY3Rpb24gZ2V0VGltZW91dHMoKSB7XHJcbiAgICB2YXIgdGltZW91dCA9IHRoaXMucHJvcHMudGltZW91dDtcclxuICAgIHZhciBleGl0LCBlbnRlciwgYXBwZWFyO1xyXG4gICAgZXhpdCA9IGVudGVyID0gYXBwZWFyID0gdGltZW91dDtcclxuXHJcbiAgICBpZiAodGltZW91dCAhPSBudWxsICYmIHR5cGVvZiB0aW1lb3V0ICE9PSAnbnVtYmVyJykge1xyXG4gICAgICBleGl0ID0gdGltZW91dC5leGl0O1xyXG4gICAgICBlbnRlciA9IHRpbWVvdXQuZW50ZXI7IC8vIFRPRE86IHJlbW92ZSBmYWxsYmFjayBmb3IgbmV4dCBtYWpvclxyXG5cclxuICAgICAgYXBwZWFyID0gdGltZW91dC5hcHBlYXIgIT09IHVuZGVmaW5lZCA/IHRpbWVvdXQuYXBwZWFyIDogZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZXhpdDogZXhpdCxcclxuICAgICAgZW50ZXI6IGVudGVyLFxyXG4gICAgICBhcHBlYXI6IGFwcGVhclxyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBfcHJvdG8udXBkYXRlU3RhdHVzID0gZnVuY3Rpb24gdXBkYXRlU3RhdHVzKG1vdW50aW5nLCBuZXh0U3RhdHVzKSB7XHJcbiAgICBpZiAobW91bnRpbmcgPT09IHZvaWQgMCkge1xyXG4gICAgICBtb3VudGluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChuZXh0U3RhdHVzICE9PSBudWxsKSB7XHJcbiAgICAgIC8vIG5leHRTdGF0dXMgd2lsbCBhbHdheXMgYmUgRU5URVJJTkcgb3IgRVhJVElORy5cclxuICAgICAgdGhpcy5jYW5jZWxOZXh0Q2FsbGJhY2soKTtcclxuXHJcbiAgICAgIHZhciBub2RlID0gX3JlYWN0RG9tLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcyk7XHJcblxyXG4gICAgICBpZiAobmV4dFN0YXR1cyA9PT0gRU5URVJJTkcpIHtcclxuICAgICAgICB0aGlzLnBlcmZvcm1FbnRlcihub2RlLCBtb3VudGluZyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5wZXJmb3JtRXhpdChub2RlKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnVubW91bnRPbkV4aXQgJiYgdGhpcy5zdGF0ZS5zdGF0dXMgPT09IEVYSVRFRCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBzdGF0dXM6IFVOTU9VTlRFRFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBfcHJvdG8ucGVyZm9ybUVudGVyID0gZnVuY3Rpb24gcGVyZm9ybUVudGVyKG5vZGUsIG1vdW50aW5nKSB7XHJcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcclxuXHJcbiAgICB2YXIgZW50ZXIgPSB0aGlzLnByb3BzLmVudGVyO1xyXG4gICAgdmFyIGFwcGVhcmluZyA9IHRoaXMuY29udGV4dC50cmFuc2l0aW9uR3JvdXAgPyB0aGlzLmNvbnRleHQudHJhbnNpdGlvbkdyb3VwLmlzTW91bnRpbmcgOiBtb3VudGluZztcclxuICAgIHZhciB0aW1lb3V0cyA9IHRoaXMuZ2V0VGltZW91dHMoKTtcclxuICAgIHZhciBlbnRlclRpbWVvdXQgPSBhcHBlYXJpbmcgPyB0aW1lb3V0cy5hcHBlYXIgOiB0aW1lb3V0cy5lbnRlcjsgLy8gbm8gZW50ZXIgYW5pbWF0aW9uIHNraXAgcmlnaHQgdG8gRU5URVJFRFxyXG4gICAgLy8gaWYgd2UgYXJlIG1vdW50aW5nIGFuZCBydW5uaW5nIHRoaXMgaXQgbWVhbnMgYXBwZWFyIF9tdXN0XyBiZSBzZXRcclxuXHJcbiAgICBpZiAoIW1vdW50aW5nICYmICFlbnRlcikge1xyXG4gICAgICB0aGlzLnNhZmVTZXRTdGF0ZSh7XHJcbiAgICAgICAgc3RhdHVzOiBFTlRFUkVEXHJcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBfdGhpczIucHJvcHMub25FbnRlcmVkKG5vZGUpO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucHJvcHMub25FbnRlcihub2RlLCBhcHBlYXJpbmcpO1xyXG4gICAgdGhpcy5zYWZlU2V0U3RhdGUoe1xyXG4gICAgICBzdGF0dXM6IEVOVEVSSU5HXHJcbiAgICB9LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIF90aGlzMi5wcm9wcy5vbkVudGVyaW5nKG5vZGUsIGFwcGVhcmluZyk7XHJcblxyXG4gICAgICBfdGhpczIub25UcmFuc2l0aW9uRW5kKG5vZGUsIGVudGVyVGltZW91dCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIF90aGlzMi5zYWZlU2V0U3RhdGUoe1xyXG4gICAgICAgICAgc3RhdHVzOiBFTlRFUkVEXHJcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgX3RoaXMyLnByb3BzLm9uRW50ZXJlZChub2RlLCBhcHBlYXJpbmcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIF9wcm90by5wZXJmb3JtRXhpdCA9IGZ1bmN0aW9uIHBlcmZvcm1FeGl0KG5vZGUpIHtcclxuICAgIHZhciBfdGhpczMgPSB0aGlzO1xyXG5cclxuICAgIHZhciBleGl0ID0gdGhpcy5wcm9wcy5leGl0O1xyXG4gICAgdmFyIHRpbWVvdXRzID0gdGhpcy5nZXRUaW1lb3V0cygpOyAvLyBubyBleGl0IGFuaW1hdGlvbiBza2lwIHJpZ2h0IHRvIEVYSVRFRFxyXG5cclxuICAgIGlmICghZXhpdCkge1xyXG4gICAgICB0aGlzLnNhZmVTZXRTdGF0ZSh7XHJcbiAgICAgICAgc3RhdHVzOiBFWElURURcclxuICAgICAgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIF90aGlzMy5wcm9wcy5vbkV4aXRlZChub2RlKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnByb3BzLm9uRXhpdChub2RlKTtcclxuICAgIHRoaXMuc2FmZVNldFN0YXRlKHtcclxuICAgICAgc3RhdHVzOiBFWElUSU5HXHJcbiAgICB9LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIF90aGlzMy5wcm9wcy5vbkV4aXRpbmcobm9kZSk7XHJcblxyXG4gICAgICBfdGhpczMub25UcmFuc2l0aW9uRW5kKG5vZGUsIHRpbWVvdXRzLmV4aXQsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBfdGhpczMuc2FmZVNldFN0YXRlKHtcclxuICAgICAgICAgIHN0YXR1czogRVhJVEVEXHJcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgX3RoaXMzLnByb3BzLm9uRXhpdGVkKG5vZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIF9wcm90by5jYW5jZWxOZXh0Q2FsbGJhY2sgPSBmdW5jdGlvbiBjYW5jZWxOZXh0Q2FsbGJhY2soKSB7XHJcbiAgICBpZiAodGhpcy5uZXh0Q2FsbGJhY2sgIT09IG51bGwpIHtcclxuICAgICAgdGhpcy5uZXh0Q2FsbGJhY2suY2FuY2VsKCk7XHJcbiAgICAgIHRoaXMubmV4dENhbGxiYWNrID0gbnVsbDtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBfcHJvdG8uc2FmZVNldFN0YXRlID0gZnVuY3Rpb24gc2FmZVNldFN0YXRlKG5leHRTdGF0ZSwgY2FsbGJhY2spIHtcclxuICAgIC8vIFRoaXMgc2hvdWxkbid0IGJlIG5lY2Vzc2FyeSwgYnV0IHRoZXJlIGFyZSB3ZWlyZCByYWNlIGNvbmRpdGlvbnMgd2l0aFxyXG4gICAgLy8gc2V0U3RhdGUgY2FsbGJhY2tzIGFuZCB1bm1vdW50aW5nIGluIHRlc3RpbmcsIHNvIGFsd2F5cyBtYWtlIHN1cmUgdGhhdFxyXG4gICAgLy8gd2UgY2FuIGNhbmNlbCBhbnkgcGVuZGluZyBzZXRTdGF0ZSBjYWxsYmFja3MgYWZ0ZXIgd2UgdW5tb3VudC5cclxuICAgIGNhbGxiYWNrID0gdGhpcy5zZXROZXh0Q2FsbGJhY2soY2FsbGJhY2spO1xyXG4gICAgdGhpcy5zZXRTdGF0ZShuZXh0U3RhdGUsIGNhbGxiYWNrKTtcclxuICB9O1xyXG5cclxuICBfcHJvdG8uc2V0TmV4dENhbGxiYWNrID0gZnVuY3Rpb24gc2V0TmV4dENhbGxiYWNrKGNhbGxiYWNrKSB7XHJcbiAgICB2YXIgX3RoaXM0ID0gdGhpcztcclxuXHJcbiAgICB2YXIgYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLm5leHRDYWxsYmFjayA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICBpZiAoYWN0aXZlKSB7XHJcbiAgICAgICAgYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgX3RoaXM0Lm5leHRDYWxsYmFjayA9IG51bGw7XHJcbiAgICAgICAgY2FsbGJhY2soZXZlbnQpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMubmV4dENhbGxiYWNrLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLm5leHRDYWxsYmFjaztcclxuICB9O1xyXG5cclxuICBfcHJvdG8ub25UcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24gb25UcmFuc2l0aW9uRW5kKG5vZGUsIHRpbWVvdXQsIGhhbmRsZXIpIHtcclxuICAgIHRoaXMuc2V0TmV4dENhbGxiYWNrKGhhbmRsZXIpO1xyXG4gICAgdmFyIGRvZXNOb3RIYXZlVGltZW91dE9yTGlzdGVuZXIgPSB0aW1lb3V0ID09IG51bGwgJiYgIXRoaXMucHJvcHMuYWRkRW5kTGlzdGVuZXI7XHJcblxyXG4gICAgaWYgKCFub2RlIHx8IGRvZXNOb3RIYXZlVGltZW91dE9yTGlzdGVuZXIpIHtcclxuICAgICAgc2V0VGltZW91dCh0aGlzLm5leHRDYWxsYmFjaywgMCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5wcm9wcy5hZGRFbmRMaXN0ZW5lcikge1xyXG4gICAgICB0aGlzLnByb3BzLmFkZEVuZExpc3RlbmVyKG5vZGUsIHRoaXMubmV4dENhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGltZW91dCAhPSBudWxsKSB7XHJcbiAgICAgIHNldFRpbWVvdXQodGhpcy5uZXh0Q2FsbGJhY2ssIHRpbWVvdXQpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XHJcbiAgICB2YXIgc3RhdHVzID0gdGhpcy5zdGF0ZS5zdGF0dXM7XHJcblxyXG4gICAgaWYgKHN0YXR1cyA9PT0gVU5NT1VOVEVEKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXHJcbiAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wcy5jaGlsZHJlbixcclxuICAgICAgICBjaGlsZFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMsIFtcImNoaWxkcmVuXCJdKTsgLy8gZmlsdGVyIHByb3BzIGZvciBUcmFuc3RpdGlvblxyXG5cclxuXHJcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5pbjtcclxuICAgIGRlbGV0ZSBjaGlsZFByb3BzLm1vdW50T25FbnRlcjtcclxuICAgIGRlbGV0ZSBjaGlsZFByb3BzLnVubW91bnRPbkV4aXQ7XHJcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5hcHBlYXI7XHJcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5lbnRlcjtcclxuICAgIGRlbGV0ZSBjaGlsZFByb3BzLmV4aXQ7XHJcbiAgICBkZWxldGUgY2hpbGRQcm9wcy50aW1lb3V0O1xyXG4gICAgZGVsZXRlIGNoaWxkUHJvcHMuYWRkRW5kTGlzdGVuZXI7XHJcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5vbkVudGVyO1xyXG4gICAgZGVsZXRlIGNoaWxkUHJvcHMub25FbnRlcmluZztcclxuICAgIGRlbGV0ZSBjaGlsZFByb3BzLm9uRW50ZXJlZDtcclxuICAgIGRlbGV0ZSBjaGlsZFByb3BzLm9uRXhpdDtcclxuICAgIGRlbGV0ZSBjaGlsZFByb3BzLm9uRXhpdGluZztcclxuICAgIGRlbGV0ZSBjaGlsZFByb3BzLm9uRXhpdGVkO1xyXG5cclxuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgcmV0dXJuIGNoaWxkcmVuKHN0YXR1cywgY2hpbGRQcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNoaWxkID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XHJcblxyXG4gICAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIFRyYW5zaXRpb247XHJcbn0oX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50KTtcclxuXHJcblRyYW5zaXRpb24uY29udGV4dFR5cGVzID0ge1xyXG4gIHRyYW5zaXRpb25Hcm91cDogUHJvcFR5cGVzLm9iamVjdFxyXG59O1xyXG5UcmFuc2l0aW9uLmNoaWxkQ29udGV4dFR5cGVzID0ge1xyXG4gIHRyYW5zaXRpb25Hcm91cDogZnVuY3Rpb24gdHJhbnNpdGlvbkdyb3VwKCkge31cclxufTtcclxuVHJhbnNpdGlvbi5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XHJcbiAgLyoqXHJcbiAgICogQSBgZnVuY3Rpb25gIGNoaWxkIGNhbiBiZSB1c2VkIGluc3RlYWQgb2YgYSBSZWFjdCBlbGVtZW50LiBUaGlzIGZ1bmN0aW9uIGlzXHJcbiAgICogY2FsbGVkIHdpdGggdGhlIGN1cnJlbnQgdHJhbnNpdGlvbiBzdGF0dXMgKGAnZW50ZXJpbmcnYCwgYCdlbnRlcmVkJ2AsXHJcbiAgICogYCdleGl0aW5nJ2AsIGAnZXhpdGVkJ2AsIGAndW5tb3VudGVkJ2ApLCB3aGljaCBjYW4gYmUgdXNlZCB0byBhcHBseSBjb250ZXh0XHJcbiAgICogc3BlY2lmaWMgcHJvcHMgdG8gYSBjb21wb25lbnQuXHJcbiAgICpcclxuICAgKiBgYGBqc3hcclxuICAgKiA8VHJhbnNpdGlvbiBpbj17dGhpcy5zdGF0ZS5pbn0gdGltZW91dD17MTUwfT5cclxuICAgKiAgIHtzdGF0ZSA9PiAoXHJcbiAgICogICAgIDxNeUNvbXBvbmVudCBjbGFzc05hbWU9e2BmYWRlIGZhZGUtJHtzdGF0ZX1gfSAvPlxyXG4gICAqICAgKX1cclxuICAgKiA8L1RyYW5zaXRpb24+XHJcbiAgICogYGBgXHJcbiAgICovXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsIFByb3BUeXBlcy5lbGVtZW50LmlzUmVxdWlyZWRdKS5pc1JlcXVpcmVkLFxyXG5cclxuICAvKipcclxuICAgKiBTaG93IHRoZSBjb21wb25lbnQ7IHRyaWdnZXJzIHRoZSBlbnRlciBvciBleGl0IHN0YXRlc1xyXG4gICAqL1xyXG4gIGluOiBQcm9wVHlwZXMuYm9vbCxcclxuXHJcbiAgLyoqXHJcbiAgICogQnkgZGVmYXVsdCB0aGUgY2hpbGQgY29tcG9uZW50IGlzIG1vdW50ZWQgaW1tZWRpYXRlbHkgYWxvbmcgd2l0aFxyXG4gICAqIHRoZSBwYXJlbnQgYFRyYW5zaXRpb25gIGNvbXBvbmVudC4gSWYgeW91IHdhbnQgdG8gXCJsYXp5IG1vdW50XCIgdGhlIGNvbXBvbmVudCBvbiB0aGVcclxuICAgKiBmaXJzdCBgaW49e3RydWV9YCB5b3UgY2FuIHNldCBgbW91bnRPbkVudGVyYC4gQWZ0ZXIgdGhlIGZpcnN0IGVudGVyIHRyYW5zaXRpb24gdGhlIGNvbXBvbmVudCB3aWxsIHN0YXlcclxuICAgKiBtb3VudGVkLCBldmVuIG9uIFwiZXhpdGVkXCIsIHVubGVzcyB5b3UgYWxzbyBzcGVjaWZ5IGB1bm1vdW50T25FeGl0YC5cclxuICAgKi9cclxuICBtb3VudE9uRW50ZXI6IFByb3BUeXBlcy5ib29sLFxyXG5cclxuICAvKipcclxuICAgKiBCeSBkZWZhdWx0IHRoZSBjaGlsZCBjb21wb25lbnQgc3RheXMgbW91bnRlZCBhZnRlciBpdCByZWFjaGVzIHRoZSBgJ2V4aXRlZCdgIHN0YXRlLlxyXG4gICAqIFNldCBgdW5tb3VudE9uRXhpdGAgaWYgeW91J2QgcHJlZmVyIHRvIHVubW91bnQgdGhlIGNvbXBvbmVudCBhZnRlciBpdCBmaW5pc2hlcyBleGl0aW5nLlxyXG4gICAqL1xyXG4gIHVubW91bnRPbkV4aXQ6IFByb3BUeXBlcy5ib29sLFxyXG5cclxuICAvKipcclxuICAgKiBOb3JtYWxseSBhIGNvbXBvbmVudCBpcyBub3QgdHJhbnNpdGlvbmVkIGlmIGl0IGlzIHNob3duIHdoZW4gdGhlIGA8VHJhbnNpdGlvbj5gIGNvbXBvbmVudCBtb3VudHMuXHJcbiAgICogSWYgeW91IHdhbnQgdG8gdHJhbnNpdGlvbiBvbiB0aGUgZmlyc3QgbW91bnQgc2V0IGBhcHBlYXJgIHRvIGB0cnVlYCwgYW5kIHRoZVxyXG4gICAqIGNvbXBvbmVudCB3aWxsIHRyYW5zaXRpb24gaW4gYXMgc29vbiBhcyB0aGUgYDxUcmFuc2l0aW9uPmAgbW91bnRzLlxyXG4gICAqXHJcbiAgICogPiBOb3RlOiB0aGVyZSBhcmUgbm8gc3BlY2lmaWMgXCJhcHBlYXJcIiBzdGF0ZXMuIGBhcHBlYXJgIG9ubHkgYWRkcyBhbiBhZGRpdGlvbmFsIGBlbnRlcmAgdHJhbnNpdGlvbi5cclxuICAgKi9cclxuICBhcHBlYXI6IFByb3BUeXBlcy5ib29sLFxyXG5cclxuICAvKipcclxuICAgKiBFbmFibGUgb3IgZGlzYWJsZSBlbnRlciB0cmFuc2l0aW9ucy5cclxuICAgKi9cclxuICBlbnRlcjogUHJvcFR5cGVzLmJvb2wsXHJcblxyXG4gIC8qKlxyXG4gICAqIEVuYWJsZSBvciBkaXNhYmxlIGV4aXQgdHJhbnNpdGlvbnMuXHJcbiAgICovXHJcbiAgZXhpdDogUHJvcFR5cGVzLmJvb2wsXHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBkdXJhdGlvbiBvZiB0aGUgdHJhbnNpdGlvbiwgaW4gbWlsbGlzZWNvbmRzLlxyXG4gICAqIFJlcXVpcmVkIHVubGVzcyBgYWRkRW5kTGlzdGVuZXJgIGlzIHByb3ZpZGVkLlxyXG4gICAqXHJcbiAgICogWW91IG1heSBzcGVjaWZ5IGEgc2luZ2xlIHRpbWVvdXQgZm9yIGFsbCB0cmFuc2l0aW9uczpcclxuICAgKlxyXG4gICAqIGBgYGpzeFxyXG4gICAqIHRpbWVvdXQ9ezUwMH1cclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqIG9yIGluZGl2aWR1YWxseTpcclxuICAgKlxyXG4gICAqIGBgYGpzeFxyXG4gICAqIHRpbWVvdXQ9e3tcclxuICAgKiAgYXBwZWFyOiA1MDAsXHJcbiAgICogIGVudGVyOiAzMDAsXHJcbiAgICogIGV4aXQ6IDUwMCxcclxuICAgKiB9fVxyXG4gICAqIGBgYFxyXG4gICAqXHJcbiAgICogLSBgYXBwZWFyYCBkZWZhdWx0cyB0byB0aGUgdmFsdWUgb2YgYGVudGVyYFxyXG4gICAqIC0gYGVudGVyYCBkZWZhdWx0cyB0byBgMGBcclxuICAgKiAtIGBleGl0YCBkZWZhdWx0cyB0byBgMGBcclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXIgfCB7IGVudGVyPzogbnVtYmVyLCBleGl0PzogbnVtYmVyLCBhcHBlYXI/OiBudW1iZXIgfX1cclxuICAgKi9cclxuICB0aW1lb3V0OiBmdW5jdGlvbiB0aW1lb3V0KHByb3BzKSB7XHJcbiAgICB2YXIgcHQgPSBfUHJvcFR5cGVzLnRpbWVvdXRzU2hhcGU7XHJcbiAgICBpZiAoIXByb3BzLmFkZEVuZExpc3RlbmVyKSBwdCA9IHB0LmlzUmVxdWlyZWQ7XHJcblxyXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xyXG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcHQuYXBwbHkodm9pZCAwLCBbcHJvcHNdLmNvbmNhdChhcmdzKSk7XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICogQWRkIGEgY3VzdG9tIHRyYW5zaXRpb24gZW5kIHRyaWdnZXIuIENhbGxlZCB3aXRoIHRoZSB0cmFuc2l0aW9uaW5nXHJcbiAgICogRE9NIG5vZGUgYW5kIGEgYGRvbmVgIGNhbGxiYWNrLiBBbGxvd3MgZm9yIG1vcmUgZmluZSBncmFpbmVkIHRyYW5zaXRpb24gZW5kXHJcbiAgICogbG9naWMuICoqTm90ZToqKiBUaW1lb3V0cyBhcmUgc3RpbGwgdXNlZCBhcyBhIGZhbGxiYWNrIGlmIHByb3ZpZGVkLlxyXG4gICAqXHJcbiAgICogYGBganN4XHJcbiAgICogYWRkRW5kTGlzdGVuZXI9eyhub2RlLCBkb25lKSA9PiB7XHJcbiAgICogICAvLyB1c2UgdGhlIGNzcyB0cmFuc2l0aW9uZW5kIGV2ZW50IHRvIG1hcmsgdGhlIGZpbmlzaCBvZiBhIHRyYW5zaXRpb25cclxuICAgKiAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGRvbmUsIGZhbHNlKTtcclxuICAgKiB9fVxyXG4gICAqIGBgYFxyXG4gICAqL1xyXG4gIGFkZEVuZExpc3RlbmVyOiBQcm9wVHlwZXMuZnVuYyxcclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsbGJhY2sgZmlyZWQgYmVmb3JlIHRoZSBcImVudGVyaW5nXCIgc3RhdHVzIGlzIGFwcGxpZWQuIEFuIGV4dHJhIHBhcmFtZXRlclxyXG4gICAqIGBpc0FwcGVhcmluZ2AgaXMgc3VwcGxpZWQgdG8gaW5kaWNhdGUgaWYgdGhlIGVudGVyIHN0YWdlIGlzIG9jY3VycmluZyBvbiB0aGUgaW5pdGlhbCBtb3VudFxyXG4gICAqXHJcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQsIGlzQXBwZWFyaW5nOiBib29sKSAtPiB2b2lkXHJcbiAgICovXHJcbiAgb25FbnRlcjogUHJvcFR5cGVzLmZ1bmMsXHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBcImVudGVyaW5nXCIgc3RhdHVzIGlzIGFwcGxpZWQuIEFuIGV4dHJhIHBhcmFtZXRlclxyXG4gICAqIGBpc0FwcGVhcmluZ2AgaXMgc3VwcGxpZWQgdG8gaW5kaWNhdGUgaWYgdGhlIGVudGVyIHN0YWdlIGlzIG9jY3VycmluZyBvbiB0aGUgaW5pdGlhbCBtb3VudFxyXG4gICAqXHJcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQsIGlzQXBwZWFyaW5nOiBib29sKVxyXG4gICAqL1xyXG4gIG9uRW50ZXJpbmc6IFByb3BUeXBlcy5mdW5jLFxyXG5cclxuICAvKipcclxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgXCJlbnRlcmVkXCIgc3RhdHVzIGlzIGFwcGxpZWQuIEFuIGV4dHJhIHBhcmFtZXRlclxyXG4gICAqIGBpc0FwcGVhcmluZ2AgaXMgc3VwcGxpZWQgdG8gaW5kaWNhdGUgaWYgdGhlIGVudGVyIHN0YWdlIGlzIG9jY3VycmluZyBvbiB0aGUgaW5pdGlhbCBtb3VudFxyXG4gICAqXHJcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQsIGlzQXBwZWFyaW5nOiBib29sKSAtPiB2b2lkXHJcbiAgICovXHJcbiAgb25FbnRlcmVkOiBQcm9wVHlwZXMuZnVuYyxcclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsbGJhY2sgZmlyZWQgYmVmb3JlIHRoZSBcImV4aXRpbmdcIiBzdGF0dXMgaXMgYXBwbGllZC5cclxuICAgKlxyXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50KSAtPiB2b2lkXHJcbiAgICovXHJcbiAgb25FeGl0OiBQcm9wVHlwZXMuZnVuYyxcclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIFwiZXhpdGluZ1wiIHN0YXR1cyBpcyBhcHBsaWVkLlxyXG4gICAqXHJcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQpIC0+IHZvaWRcclxuICAgKi9cclxuICBvbkV4aXRpbmc6IFByb3BUeXBlcy5mdW5jLFxyXG5cclxuICAvKipcclxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgXCJleGl0ZWRcIiBzdGF0dXMgaXMgYXBwbGllZC5cclxuICAgKlxyXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50KSAtPiB2b2lkXHJcbiAgICovXHJcbiAgb25FeGl0ZWQ6IFByb3BUeXBlcy5mdW5jIC8vIE5hbWUgdGhlIGZ1bmN0aW9uIHNvIGl0IGlzIGNsZWFyZXIgaW4gdGhlIGRvY3VtZW50YXRpb25cclxuXHJcbn0gOiB7fTtcclxuXHJcbmZ1bmN0aW9uIG5vb3AoKSB7fVxyXG5cclxuVHJhbnNpdGlvbi5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgaW46IGZhbHNlLFxyXG4gIG1vdW50T25FbnRlcjogZmFsc2UsXHJcbiAgdW5tb3VudE9uRXhpdDogZmFsc2UsXHJcbiAgYXBwZWFyOiBmYWxzZSxcclxuICBlbnRlcjogdHJ1ZSxcclxuICBleGl0OiB0cnVlLFxyXG4gIG9uRW50ZXI6IG5vb3AsXHJcbiAgb25FbnRlcmluZzogbm9vcCxcclxuICBvbkVudGVyZWQ6IG5vb3AsXHJcbiAgb25FeGl0OiBub29wLFxyXG4gIG9uRXhpdGluZzogbm9vcCxcclxuICBvbkV4aXRlZDogbm9vcFxyXG59O1xyXG5UcmFuc2l0aW9uLlVOTU9VTlRFRCA9IDA7XHJcblRyYW5zaXRpb24uRVhJVEVEID0gMTtcclxuVHJhbnNpdGlvbi5FTlRFUklORyA9IDI7XHJcblRyYW5zaXRpb24uRU5URVJFRCA9IDM7XHJcblRyYW5zaXRpb24uRVhJVElORyA9IDQ7XHJcblxyXG52YXIgX2RlZmF1bHQgPSAoMCwgX3JlYWN0TGlmZWN5Y2xlc0NvbXBhdC5wb2x5ZmlsbCkoVHJhbnNpdGlvbik7XHJcblxyXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcclxuXHJcbnZhciBfcHJvcFR5cGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XHJcblxyXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xyXG5cclxudmFyIF9yZWFjdExpZmVjeWNsZXNDb21wYXQgPSByZXF1aXJlKFwicmVhY3QtbGlmZWN5Y2xlcy1jb21wYXRcIik7XHJcblxyXG52YXIgX0NoaWxkTWFwcGluZyA9IHJlcXVpcmUoXCIuL3V0aWxzL0NoaWxkTWFwcGluZ1wiKTtcclxuXHJcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XHJcblxyXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XHJcblxyXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxyXG5cclxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7IHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzOyBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XHJcblxyXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cclxuXHJcbnZhciB2YWx1ZXMgPSBPYmplY3QudmFsdWVzIHx8IGZ1bmN0aW9uIChvYmopIHtcclxuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5tYXAoZnVuY3Rpb24gKGspIHtcclxuICAgIHJldHVybiBvYmpba107XHJcbiAgfSk7XHJcbn07XHJcblxyXG52YXIgZGVmYXVsdFByb3BzID0ge1xyXG4gIGNvbXBvbmVudDogJ2RpdicsXHJcbiAgY2hpbGRGYWN0b3J5OiBmdW5jdGlvbiBjaGlsZEZhY3RvcnkoY2hpbGQpIHtcclxuICAgIHJldHVybiBjaGlsZDtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogVGhlIGA8VHJhbnNpdGlvbkdyb3VwPmAgY29tcG9uZW50IG1hbmFnZXMgYSBzZXQgb2YgdHJhbnNpdGlvbiBjb21wb25lbnRzXHJcbiAgICogKGA8VHJhbnNpdGlvbj5gIGFuZCBgPENTU1RyYW5zaXRpb24+YCkgaW4gYSBsaXN0LiBMaWtlIHdpdGggdGhlIHRyYW5zaXRpb25cclxuICAgKiBjb21wb25lbnRzLCBgPFRyYW5zaXRpb25Hcm91cD5gIGlzIGEgc3RhdGUgbWFjaGluZSBmb3IgbWFuYWdpbmcgdGhlIG1vdW50aW5nXHJcbiAgICogYW5kIHVubW91bnRpbmcgb2YgY29tcG9uZW50cyBvdmVyIHRpbWUuXHJcbiAgICpcclxuICAgKiBDb25zaWRlciB0aGUgZXhhbXBsZSBiZWxvdy4gQXMgaXRlbXMgYXJlIHJlbW92ZWQgb3IgYWRkZWQgdG8gdGhlIFRvZG9MaXN0IHRoZVxyXG4gICAqIGBpbmAgcHJvcCBpcyB0b2dnbGVkIGF1dG9tYXRpY2FsbHkgYnkgdGhlIGA8VHJhbnNpdGlvbkdyb3VwPmAuXHJcbiAgICpcclxuICAgKiBOb3RlIHRoYXQgYDxUcmFuc2l0aW9uR3JvdXA+YCAgZG9lcyBub3QgZGVmaW5lIGFueSBhbmltYXRpb24gYmVoYXZpb3IhXHJcbiAgICogRXhhY3RseSBfaG93XyBhIGxpc3QgaXRlbSBhbmltYXRlcyBpcyB1cCB0byB0aGUgaW5kaXZpZHVhbCB0cmFuc2l0aW9uXHJcbiAgICogY29tcG9uZW50LiBUaGlzIG1lYW5zIHlvdSBjYW4gbWl4IGFuZCBtYXRjaCBhbmltYXRpb25zIGFjcm9zcyBkaWZmZXJlbnQgbGlzdFxyXG4gICAqIGl0ZW1zLlxyXG4gICAqL1xyXG5cclxufTtcclxuXHJcbnZhciBUcmFuc2l0aW9uR3JvdXAgPVxyXG4vKiNfX1BVUkVfXyovXHJcbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XHJcbiAgX2luaGVyaXRzTG9vc2UoVHJhbnNpdGlvbkdyb3VwLCBfUmVhY3QkQ29tcG9uZW50KTtcclxuXHJcbiAgZnVuY3Rpb24gVHJhbnNpdGlvbkdyb3VwKHByb3BzLCBjb250ZXh0KSB7XHJcbiAgICB2YXIgX3RoaXM7XHJcblxyXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpIHx8IHRoaXM7XHJcblxyXG4gICAgdmFyIGhhbmRsZUV4aXRlZCA9IF90aGlzLmhhbmRsZUV4aXRlZC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpKTsgLy8gSW5pdGlhbCBjaGlsZHJlbiBzaG91bGQgYWxsIGJlIGVudGVyaW5nLCBkZXBlbmRlbnQgb24gYXBwZWFyXHJcblxyXG5cclxuICAgIF90aGlzLnN0YXRlID0ge1xyXG4gICAgICBoYW5kbGVFeGl0ZWQ6IGhhbmRsZUV4aXRlZCxcclxuICAgICAgZmlyc3RSZW5kZXI6IHRydWVcclxuICAgIH07XHJcbiAgICByZXR1cm4gX3RoaXM7XHJcbiAgfVxyXG5cclxuICB2YXIgX3Byb3RvID0gVHJhbnNpdGlvbkdyb3VwLnByb3RvdHlwZTtcclxuXHJcbiAgX3Byb3RvLmdldENoaWxkQ29udGV4dCA9IGZ1bmN0aW9uIGdldENoaWxkQ29udGV4dCgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRyYW5zaXRpb25Hcm91cDoge1xyXG4gICAgICAgIGlzTW91bnRpbmc6ICF0aGlzLmFwcGVhcmVkXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLmFwcGVhcmVkID0gdHJ1ZTtcclxuICAgIHRoaXMubW91bnRlZCA9IHRydWU7XHJcbiAgfTtcclxuXHJcbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcclxuICB9O1xyXG5cclxuICBUcmFuc2l0aW9uR3JvdXAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID0gZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5leHRQcm9wcywgX3JlZikge1xyXG4gICAgdmFyIHByZXZDaGlsZE1hcHBpbmcgPSBfcmVmLmNoaWxkcmVuLFxyXG4gICAgICAgIGhhbmRsZUV4aXRlZCA9IF9yZWYuaGFuZGxlRXhpdGVkLFxyXG4gICAgICAgIGZpcnN0UmVuZGVyID0gX3JlZi5maXJzdFJlbmRlcjtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNoaWxkcmVuOiBmaXJzdFJlbmRlciA/ICgwLCBfQ2hpbGRNYXBwaW5nLmdldEluaXRpYWxDaGlsZE1hcHBpbmcpKG5leHRQcm9wcywgaGFuZGxlRXhpdGVkKSA6ICgwLCBfQ2hpbGRNYXBwaW5nLmdldE5leHRDaGlsZE1hcHBpbmcpKG5leHRQcm9wcywgcHJldkNoaWxkTWFwcGluZywgaGFuZGxlRXhpdGVkKSxcclxuICAgICAgZmlyc3RSZW5kZXI6IGZhbHNlXHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIF9wcm90by5oYW5kbGVFeGl0ZWQgPSBmdW5jdGlvbiBoYW5kbGVFeGl0ZWQoY2hpbGQsIG5vZGUpIHtcclxuICAgIHZhciBjdXJyZW50Q2hpbGRNYXBwaW5nID0gKDAsIF9DaGlsZE1hcHBpbmcuZ2V0Q2hpbGRNYXBwaW5nKSh0aGlzLnByb3BzLmNoaWxkcmVuKTtcclxuICAgIGlmIChjaGlsZC5rZXkgaW4gY3VycmVudENoaWxkTWFwcGluZykgcmV0dXJuO1xyXG5cclxuICAgIGlmIChjaGlsZC5wcm9wcy5vbkV4aXRlZCkge1xyXG4gICAgICBjaGlsZC5wcm9wcy5vbkV4aXRlZChub2RlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5tb3VudGVkKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHN0YXRlKSB7XHJcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gX2V4dGVuZHMoe30sIHN0YXRlLmNoaWxkcmVuKTtcclxuXHJcbiAgICAgICAgZGVsZXRlIGNoaWxkcmVuW2NoaWxkLmtleV07XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XHJcbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxyXG4gICAgICAgIENvbXBvbmVudCA9IF90aGlzJHByb3BzLmNvbXBvbmVudCxcclxuICAgICAgICBjaGlsZEZhY3RvcnkgPSBfdGhpcyRwcm9wcy5jaGlsZEZhY3RvcnksXHJcbiAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wcywgW1wiY29tcG9uZW50XCIsIFwiY2hpbGRGYWN0b3J5XCJdKTtcclxuXHJcbiAgICB2YXIgY2hpbGRyZW4gPSB2YWx1ZXModGhpcy5zdGF0ZS5jaGlsZHJlbikubWFwKGNoaWxkRmFjdG9yeSk7XHJcbiAgICBkZWxldGUgcHJvcHMuYXBwZWFyO1xyXG4gICAgZGVsZXRlIHByb3BzLmVudGVyO1xyXG4gICAgZGVsZXRlIHByb3BzLmV4aXQ7XHJcblxyXG4gICAgaWYgKENvbXBvbmVudCA9PT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gY2hpbGRyZW47XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBwcm9wcywgY2hpbGRyZW4pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiBUcmFuc2l0aW9uR3JvdXA7XHJcbn0oX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50KTtcclxuXHJcblRyYW5zaXRpb25Hcm91cC5jaGlsZENvbnRleHRUeXBlcyA9IHtcclxuICB0cmFuc2l0aW9uR3JvdXA6IF9wcm9wVHlwZXMuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZFxyXG59O1xyXG5UcmFuc2l0aW9uR3JvdXAucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xyXG4gIC8qKlxyXG4gICAqIGA8VHJhbnNpdGlvbkdyb3VwPmAgcmVuZGVycyBhIGA8ZGl2PmAgYnkgZGVmYXVsdC4gWW91IGNhbiBjaGFuZ2UgdGhpc1xyXG4gICAqIGJlaGF2aW9yIGJ5IHByb3ZpZGluZyBhIGBjb21wb25lbnRgIHByb3AuXHJcbiAgICogSWYgeW91IHVzZSBSZWFjdCB2MTYrIGFuZCB3b3VsZCBsaWtlIHRvIGF2b2lkIGEgd3JhcHBpbmcgYDxkaXY+YCBlbGVtZW50XHJcbiAgICogeW91IGNhbiBwYXNzIGluIGBjb21wb25lbnQ9e251bGx9YC4gVGhpcyBpcyB1c2VmdWwgaWYgdGhlIHdyYXBwaW5nIGRpdlxyXG4gICAqIGJvcmtzIHlvdXIgY3NzIHN0eWxlcy5cclxuICAgKi9cclxuICBjb21wb25lbnQ6IF9wcm9wVHlwZXMuZGVmYXVsdC5hbnksXHJcblxyXG4gIC8qKlxyXG4gICAqIEEgc2V0IG9mIGA8VHJhbnNpdGlvbj5gIGNvbXBvbmVudHMsIHRoYXQgYXJlIHRvZ2dsZWQgYGluYCBhbmQgb3V0IGFzIHRoZXlcclxuICAgKiBsZWF2ZS4gdGhlIGA8VHJhbnNpdGlvbkdyb3VwPmAgd2lsbCBpbmplY3Qgc3BlY2lmaWMgdHJhbnNpdGlvbiBwcm9wcywgc29cclxuICAgKiByZW1lbWJlciB0byBzcHJlYWQgdGhlbSB0aHJvdWdoIGlmIHlvdSBhcmUgd3JhcHBpbmcgdGhlIGA8VHJhbnNpdGlvbj5gIGFzXHJcbiAgICogd2l0aCBvdXIgYDxGYWRlPmAgZXhhbXBsZS5cclxuICAgKlxyXG4gICAqIFdoaWxlIHRoaXMgY29tcG9uZW50IGlzIG1lYW50IGZvciBtdWx0aXBsZSBgVHJhbnNpdGlvbmAgb3IgYENTU1RyYW5zaXRpb25gXHJcbiAgICogY2hpbGRyZW4sIHNvbWV0aW1lcyB5b3UgbWF5IHdhbnQgdG8gaGF2ZSBhIHNpbmdsZSB0cmFuc2l0aW9uIGNoaWxkIHdpdGhcclxuICAgKiBjb250ZW50IHRoYXQgeW91IHdhbnQgdG8gYmUgdHJhbnNpdGlvbmVkIG91dCBhbmQgaW4gd2hlbiB5b3UgY2hhbmdlIGl0XHJcbiAgICogKGUuZy4gcm91dGVzLCBpbWFnZXMgZXRjLikgSW4gdGhhdCBjYXNlIHlvdSBjYW4gY2hhbmdlIHRoZSBga2V5YCBwcm9wIG9mXHJcbiAgICogdGhlIHRyYW5zaXRpb24gY2hpbGQgYXMgeW91IGNoYW5nZSBpdHMgY29udGVudCwgdGhpcyB3aWxsIGNhdXNlXHJcbiAgICogYFRyYW5zaXRpb25Hcm91cGAgdG8gdHJhbnNpdGlvbiB0aGUgY2hpbGQgb3V0IGFuZCBiYWNrIGluLlxyXG4gICAqL1xyXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzLmRlZmF1bHQubm9kZSxcclxuXHJcbiAgLyoqXHJcbiAgICogQSBjb252ZW5pZW5jZSBwcm9wIHRoYXQgZW5hYmxlcyBvciBkaXNhYmxlcyBhcHBlYXIgYW5pbWF0aW9uc1xyXG4gICAqIGZvciBhbGwgY2hpbGRyZW4uIE5vdGUgdGhhdCBzcGVjaWZ5aW5nIHRoaXMgd2lsbCBvdmVycmlkZSBhbnkgZGVmYXVsdHMgc2V0XHJcbiAgICogb24gaW5kaXZpZHVhbCBjaGlsZHJlbiBUcmFuc2l0aW9ucy5cclxuICAgKi9cclxuICBhcHBlYXI6IF9wcm9wVHlwZXMuZGVmYXVsdC5ib29sLFxyXG5cclxuICAvKipcclxuICAgKiBBIGNvbnZlbmllbmNlIHByb3AgdGhhdCBlbmFibGVzIG9yIGRpc2FibGVzIGVudGVyIGFuaW1hdGlvbnNcclxuICAgKiBmb3IgYWxsIGNoaWxkcmVuLiBOb3RlIHRoYXQgc3BlY2lmeWluZyB0aGlzIHdpbGwgb3ZlcnJpZGUgYW55IGRlZmF1bHRzIHNldFxyXG4gICAqIG9uIGluZGl2aWR1YWwgY2hpbGRyZW4gVHJhbnNpdGlvbnMuXHJcbiAgICovXHJcbiAgZW50ZXI6IF9wcm9wVHlwZXMuZGVmYXVsdC5ib29sLFxyXG5cclxuICAvKipcclxuICAgKiBBIGNvbnZlbmllbmNlIHByb3AgdGhhdCBlbmFibGVzIG9yIGRpc2FibGVzIGV4aXQgYW5pbWF0aW9uc1xyXG4gICAqIGZvciBhbGwgY2hpbGRyZW4uIE5vdGUgdGhhdCBzcGVjaWZ5aW5nIHRoaXMgd2lsbCBvdmVycmlkZSBhbnkgZGVmYXVsdHMgc2V0XHJcbiAgICogb24gaW5kaXZpZHVhbCBjaGlsZHJlbiBUcmFuc2l0aW9ucy5cclxuICAgKi9cclxuICBleGl0OiBfcHJvcFR5cGVzLmRlZmF1bHQuYm9vbCxcclxuXHJcbiAgLyoqXHJcbiAgICogWW91IG1heSBuZWVkIHRvIGFwcGx5IHJlYWN0aXZlIHVwZGF0ZXMgdG8gYSBjaGlsZCBhcyBpdCBpcyBleGl0aW5nLlxyXG4gICAqIFRoaXMgaXMgZ2VuZXJhbGx5IGRvbmUgYnkgdXNpbmcgYGNsb25lRWxlbWVudGAgaG93ZXZlciBpbiB0aGUgY2FzZSBvZiBhbiBleGl0aW5nXHJcbiAgICogY2hpbGQgdGhlIGVsZW1lbnQgaGFzIGFscmVhZHkgYmVlbiByZW1vdmVkIGFuZCBub3QgYWNjZXNzaWJsZSB0byB0aGUgY29uc3VtZXIuXHJcbiAgICpcclxuICAgKiBJZiB5b3UgZG8gbmVlZCB0byB1cGRhdGUgYSBjaGlsZCBhcyBpdCBsZWF2ZXMgeW91IGNhbiBwcm92aWRlIGEgYGNoaWxkRmFjdG9yeWBcclxuICAgKiB0byB3cmFwIGV2ZXJ5IGNoaWxkLCBldmVuIHRoZSBvbmVzIHRoYXQgYXJlIGxlYXZpbmcuXHJcbiAgICpcclxuICAgKiBAdHlwZSBGdW5jdGlvbihjaGlsZDogUmVhY3RFbGVtZW50KSAtPiBSZWFjdEVsZW1lbnRcclxuICAgKi9cclxuICBjaGlsZEZhY3Rvcnk6IF9wcm9wVHlwZXMuZGVmYXVsdC5mdW5jXHJcbn0gOiB7fTtcclxuVHJhbnNpdGlvbkdyb3VwLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcclxuXHJcbnZhciBfZGVmYXVsdCA9ICgwLCBfcmVhY3RMaWZlY3ljbGVzQ29tcGF0LnBvbHlmaWxsKShUcmFuc2l0aW9uR3JvdXApO1xyXG5cclxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XHJcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgX0NTU1RyYW5zaXRpb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0NTU1RyYW5zaXRpb25cIikpO1xyXG5cclxudmFyIF9SZXBsYWNlVHJhbnNpdGlvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vUmVwbGFjZVRyYW5zaXRpb25cIikpO1xyXG5cclxudmFyIF9UcmFuc2l0aW9uR3JvdXAgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1RyYW5zaXRpb25Hcm91cFwiKSk7XHJcblxyXG52YXIgX1RyYW5zaXRpb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1RyYW5zaXRpb25cIikpO1xyXG5cclxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIFRyYW5zaXRpb246IF9UcmFuc2l0aW9uLmRlZmF1bHQsXHJcbiAgVHJhbnNpdGlvbkdyb3VwOiBfVHJhbnNpdGlvbkdyb3VwLmRlZmF1bHQsXHJcbiAgUmVwbGFjZVRyYW5zaXRpb246IF9SZXBsYWNlVHJhbnNpdGlvbi5kZWZhdWx0LFxyXG4gIENTU1RyYW5zaXRpb246IF9DU1NUcmFuc2l0aW9uLmRlZmF1bHRcclxufTsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbmV4cG9ydHMuZ2V0Q2hpbGRNYXBwaW5nID0gZ2V0Q2hpbGRNYXBwaW5nO1xyXG5leHBvcnRzLm1lcmdlQ2hpbGRNYXBwaW5ncyA9IG1lcmdlQ2hpbGRNYXBwaW5ncztcclxuZXhwb3J0cy5nZXRJbml0aWFsQ2hpbGRNYXBwaW5nID0gZ2V0SW5pdGlhbENoaWxkTWFwcGluZztcclxuZXhwb3J0cy5nZXROZXh0Q2hpbGRNYXBwaW5nID0gZ2V0TmV4dENoaWxkTWFwcGluZztcclxuXHJcbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XHJcblxyXG4vKipcclxuICogR2l2ZW4gYHRoaXMucHJvcHMuY2hpbGRyZW5gLCByZXR1cm4gYW4gb2JqZWN0IG1hcHBpbmcga2V5IHRvIGNoaWxkLlxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IGNoaWxkcmVuIGB0aGlzLnByb3BzLmNoaWxkcmVuYFxyXG4gKiBAcmV0dXJuIHtvYmplY3R9IE1hcHBpbmcgb2Yga2V5IHRvIGNoaWxkXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRDaGlsZE1hcHBpbmcoY2hpbGRyZW4sIG1hcEZuKSB7XHJcbiAgdmFyIG1hcHBlciA9IGZ1bmN0aW9uIG1hcHBlcihjaGlsZCkge1xyXG4gICAgcmV0dXJuIG1hcEZuICYmICgwLCBfcmVhY3QuaXNWYWxpZEVsZW1lbnQpKGNoaWxkKSA/IG1hcEZuKGNoaWxkKSA6IGNoaWxkO1xyXG4gIH07XHJcblxyXG4gIHZhciByZXN1bHQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xyXG4gIGlmIChjaGlsZHJlbikgX3JlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgZnVuY3Rpb24gKGMpIHtcclxuICAgIHJldHVybiBjO1xyXG4gIH0pLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAvLyBydW4gdGhlIG1hcCBmdW5jdGlvbiBoZXJlIGluc3RlYWQgc28gdGhhdCB0aGUga2V5IGlzIHRoZSBjb21wdXRlZCBvbmVcclxuICAgIHJlc3VsdFtjaGlsZC5rZXldID0gbWFwcGVyKGNoaWxkKTtcclxuICB9KTtcclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbi8qKlxyXG4gKiBXaGVuIHlvdSdyZSBhZGRpbmcgb3IgcmVtb3ZpbmcgY2hpbGRyZW4gc29tZSBtYXkgYmUgYWRkZWQgb3IgcmVtb3ZlZCBpbiB0aGVcclxuICogc2FtZSByZW5kZXIgcGFzcy4gV2Ugd2FudCB0byBzaG93ICpib3RoKiBzaW5jZSB3ZSB3YW50IHRvIHNpbXVsdGFuZW91c2x5XHJcbiAqIGFuaW1hdGUgZWxlbWVudHMgaW4gYW5kIG91dC4gVGhpcyBmdW5jdGlvbiB0YWtlcyBhIHByZXZpb3VzIHNldCBvZiBrZXlzXHJcbiAqIGFuZCBhIG5ldyBzZXQgb2Yga2V5cyBhbmQgbWVyZ2VzIHRoZW0gd2l0aCBpdHMgYmVzdCBndWVzcyBvZiB0aGUgY29ycmVjdFxyXG4gKiBvcmRlcmluZy4gSW4gdGhlIGZ1dHVyZSB3ZSBtYXkgZXhwb3NlIHNvbWUgb2YgdGhlIHV0aWxpdGllcyBpblxyXG4gKiBSZWFjdE11bHRpQ2hpbGQgdG8gbWFrZSB0aGlzIGVhc3ksIGJ1dCBmb3Igbm93IFJlYWN0IGl0c2VsZiBkb2VzIG5vdFxyXG4gKiBkaXJlY3RseSBoYXZlIHRoaXMgY29uY2VwdCBvZiB0aGUgdW5pb24gb2YgcHJldkNoaWxkcmVuIGFuZCBuZXh0Q2hpbGRyZW5cclxuICogc28gd2UgaW1wbGVtZW50IGl0IGhlcmUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcmV2IHByZXYgY2hpbGRyZW4gYXMgcmV0dXJuZWQgZnJvbVxyXG4gKiBgUmVhY3RUcmFuc2l0aW9uQ2hpbGRNYXBwaW5nLmdldENoaWxkTWFwcGluZygpYC5cclxuICogQHBhcmFtIHtvYmplY3R9IG5leHQgbmV4dCBjaGlsZHJlbiBhcyByZXR1cm5lZCBmcm9tXHJcbiAqIGBSZWFjdFRyYW5zaXRpb25DaGlsZE1hcHBpbmcuZ2V0Q2hpbGRNYXBwaW5nKClgLlxyXG4gKiBAcmV0dXJuIHtvYmplY3R9IGEga2V5IHNldCB0aGF0IGNvbnRhaW5zIGFsbCBrZXlzIGluIGBwcmV2YCBhbmQgYWxsIGtleXNcclxuICogaW4gYG5leHRgIGluIGEgcmVhc29uYWJsZSBvcmRlci5cclxuICovXHJcblxyXG5cclxuZnVuY3Rpb24gbWVyZ2VDaGlsZE1hcHBpbmdzKHByZXYsIG5leHQpIHtcclxuICBwcmV2ID0gcHJldiB8fCB7fTtcclxuICBuZXh0ID0gbmV4dCB8fCB7fTtcclxuXHJcbiAgZnVuY3Rpb24gZ2V0VmFsdWVGb3JLZXkoa2V5KSB7XHJcbiAgICByZXR1cm4ga2V5IGluIG5leHQgPyBuZXh0W2tleV0gOiBwcmV2W2tleV07XHJcbiAgfSAvLyBGb3IgZWFjaCBrZXkgb2YgYG5leHRgLCB0aGUgbGlzdCBvZiBrZXlzIHRvIGluc2VydCBiZWZvcmUgdGhhdCBrZXkgaW5cclxuICAvLyB0aGUgY29tYmluZWQgbGlzdFxyXG5cclxuXHJcbiAgdmFyIG5leHRLZXlzUGVuZGluZyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcbiAgdmFyIHBlbmRpbmdLZXlzID0gW107XHJcblxyXG4gIGZvciAodmFyIHByZXZLZXkgaW4gcHJldikge1xyXG4gICAgaWYgKHByZXZLZXkgaW4gbmV4dCkge1xyXG4gICAgICBpZiAocGVuZGluZ0tleXMubGVuZ3RoKSB7XHJcbiAgICAgICAgbmV4dEtleXNQZW5kaW5nW3ByZXZLZXldID0gcGVuZGluZ0tleXM7XHJcbiAgICAgICAgcGVuZGluZ0tleXMgPSBbXTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcGVuZGluZ0tleXMucHVzaChwcmV2S2V5KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhciBpO1xyXG4gIHZhciBjaGlsZE1hcHBpbmcgPSB7fTtcclxuXHJcbiAgZm9yICh2YXIgbmV4dEtleSBpbiBuZXh0KSB7XHJcbiAgICBpZiAobmV4dEtleXNQZW5kaW5nW25leHRLZXldKSB7XHJcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBuZXh0S2V5c1BlbmRpbmdbbmV4dEtleV0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB2YXIgcGVuZGluZ05leHRLZXkgPSBuZXh0S2V5c1BlbmRpbmdbbmV4dEtleV1baV07XHJcbiAgICAgICAgY2hpbGRNYXBwaW5nW25leHRLZXlzUGVuZGluZ1tuZXh0S2V5XVtpXV0gPSBnZXRWYWx1ZUZvcktleShwZW5kaW5nTmV4dEtleSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGlsZE1hcHBpbmdbbmV4dEtleV0gPSBnZXRWYWx1ZUZvcktleShuZXh0S2V5KTtcclxuICB9IC8vIEZpbmFsbHksIGFkZCB0aGUga2V5cyB3aGljaCBkaWRuJ3QgYXBwZWFyIGJlZm9yZSBhbnkga2V5IGluIGBuZXh0YFxyXG5cclxuXHJcbiAgZm9yIChpID0gMDsgaSA8IHBlbmRpbmdLZXlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjaGlsZE1hcHBpbmdbcGVuZGluZ0tleXNbaV1dID0gZ2V0VmFsdWVGb3JLZXkocGVuZGluZ0tleXNbaV0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNoaWxkTWFwcGluZztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UHJvcChjaGlsZCwgcHJvcCwgcHJvcHMpIHtcclxuICByZXR1cm4gcHJvcHNbcHJvcF0gIT0gbnVsbCA/IHByb3BzW3Byb3BdIDogY2hpbGQucHJvcHNbcHJvcF07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEluaXRpYWxDaGlsZE1hcHBpbmcocHJvcHMsIG9uRXhpdGVkKSB7XHJcbiAgcmV0dXJuIGdldENoaWxkTWFwcGluZyhwcm9wcy5jaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICByZXR1cm4gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGNoaWxkLCB7XHJcbiAgICAgIG9uRXhpdGVkOiBvbkV4aXRlZC5iaW5kKG51bGwsIGNoaWxkKSxcclxuICAgICAgaW46IHRydWUsXHJcbiAgICAgIGFwcGVhcjogZ2V0UHJvcChjaGlsZCwgJ2FwcGVhcicsIHByb3BzKSxcclxuICAgICAgZW50ZXI6IGdldFByb3AoY2hpbGQsICdlbnRlcicsIHByb3BzKSxcclxuICAgICAgZXhpdDogZ2V0UHJvcChjaGlsZCwgJ2V4aXQnLCBwcm9wcylcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXROZXh0Q2hpbGRNYXBwaW5nKG5leHRQcm9wcywgcHJldkNoaWxkTWFwcGluZywgb25FeGl0ZWQpIHtcclxuICB2YXIgbmV4dENoaWxkTWFwcGluZyA9IGdldENoaWxkTWFwcGluZyhuZXh0UHJvcHMuY2hpbGRyZW4pO1xyXG4gIHZhciBjaGlsZHJlbiA9IG1lcmdlQ2hpbGRNYXBwaW5ncyhwcmV2Q2hpbGRNYXBwaW5nLCBuZXh0Q2hpbGRNYXBwaW5nKTtcclxuICBPYmplY3Qua2V5cyhjaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbltrZXldO1xyXG4gICAgaWYgKCEoMCwgX3JlYWN0LmlzVmFsaWRFbGVtZW50KShjaGlsZCkpIHJldHVybjtcclxuICAgIHZhciBoYXNQcmV2ID0ga2V5IGluIHByZXZDaGlsZE1hcHBpbmc7XHJcbiAgICB2YXIgaGFzTmV4dCA9IGtleSBpbiBuZXh0Q2hpbGRNYXBwaW5nO1xyXG4gICAgdmFyIHByZXZDaGlsZCA9IHByZXZDaGlsZE1hcHBpbmdba2V5XTtcclxuICAgIHZhciBpc0xlYXZpbmcgPSAoMCwgX3JlYWN0LmlzVmFsaWRFbGVtZW50KShwcmV2Q2hpbGQpICYmICFwcmV2Q2hpbGQucHJvcHMuaW47IC8vIGl0ZW0gaXMgbmV3IChlbnRlcmluZylcclxuXHJcbiAgICBpZiAoaGFzTmV4dCAmJiAoIWhhc1ByZXYgfHwgaXNMZWF2aW5nKSkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygnZW50ZXJpbmcnLCBrZXkpXHJcbiAgICAgIGNoaWxkcmVuW2tleV0gPSAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoY2hpbGQsIHtcclxuICAgICAgICBvbkV4aXRlZDogb25FeGl0ZWQuYmluZChudWxsLCBjaGlsZCksXHJcbiAgICAgICAgaW46IHRydWUsXHJcbiAgICAgICAgZXhpdDogZ2V0UHJvcChjaGlsZCwgJ2V4aXQnLCBuZXh0UHJvcHMpLFxyXG4gICAgICAgIGVudGVyOiBnZXRQcm9wKGNoaWxkLCAnZW50ZXInLCBuZXh0UHJvcHMpXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmICghaGFzTmV4dCAmJiBoYXNQcmV2ICYmICFpc0xlYXZpbmcpIHtcclxuICAgICAgLy8gaXRlbSBpcyBvbGQgKGV4aXRpbmcpXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdsZWF2aW5nJywga2V5KVxyXG4gICAgICBjaGlsZHJlbltrZXldID0gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGNoaWxkLCB7XHJcbiAgICAgICAgaW46IGZhbHNlXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChoYXNOZXh0ICYmIGhhc1ByZXYgJiYgKDAsIF9yZWFjdC5pc1ZhbGlkRWxlbWVudCkocHJldkNoaWxkKSkge1xyXG4gICAgICAvLyBpdGVtIGhhc24ndCBjaGFuZ2VkIHRyYW5zaXRpb24gc3RhdGVzXHJcbiAgICAgIC8vIGNvcHkgb3ZlciB0aGUgbGFzdCB0cmFuc2l0aW9uIHByb3BzO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygndW5jaGFuZ2VkJywga2V5KVxyXG4gICAgICBjaGlsZHJlbltrZXldID0gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGNoaWxkLCB7XHJcbiAgICAgICAgb25FeGl0ZWQ6IG9uRXhpdGVkLmJpbmQobnVsbCwgY2hpbGQpLFxyXG4gICAgICAgIGluOiBwcmV2Q2hpbGQucHJvcHMuaW4sXHJcbiAgICAgICAgZXhpdDogZ2V0UHJvcChjaGlsZCwgJ2V4aXQnLCBuZXh0UHJvcHMpLFxyXG4gICAgICAgIGVudGVyOiBnZXRQcm9wKGNoaWxkLCAnZW50ZXInLCBuZXh0UHJvcHMpXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJldHVybiBjaGlsZHJlbjtcclxufSIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuZXhwb3J0cy5jbGFzc05hbWVzU2hhcGUgPSBleHBvcnRzLnRpbWVvdXRzU2hhcGUgPSB2b2lkIDA7XHJcblxyXG52YXIgX3Byb3BUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xyXG5cclxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cclxuXHJcbnZhciB0aW1lb3V0c1NoYXBlID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF9wcm9wVHlwZXMuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMuZGVmYXVsdC5udW1iZXIsIF9wcm9wVHlwZXMuZGVmYXVsdC5zaGFwZSh7XHJcbiAgZW50ZXI6IF9wcm9wVHlwZXMuZGVmYXVsdC5udW1iZXIsXHJcbiAgZXhpdDogX3Byb3BUeXBlcy5kZWZhdWx0Lm51bWJlcixcclxuICBhcHBlYXI6IF9wcm9wVHlwZXMuZGVmYXVsdC5udW1iZXJcclxufSkuaXNSZXF1aXJlZF0pIDogbnVsbDtcclxuZXhwb3J0cy50aW1lb3V0c1NoYXBlID0gdGltZW91dHNTaGFwZTtcclxudmFyIGNsYXNzTmFtZXNTaGFwZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfcHJvcFR5cGVzLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzLmRlZmF1bHQuc2hhcGUoe1xyXG4gIGVudGVyOiBfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLFxyXG4gIGV4aXQ6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsXHJcbiAgYWN0aXZlOiBfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nXHJcbn0pLCBfcHJvcFR5cGVzLmRlZmF1bHQuc2hhcGUoe1xyXG4gIGVudGVyOiBfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLFxyXG4gIGVudGVyRG9uZTogX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZyxcclxuICBlbnRlckFjdGl2ZTogX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZyxcclxuICBleGl0OiBfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLFxyXG4gIGV4aXREb25lOiBfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLFxyXG4gIGV4aXRBY3RpdmU6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmdcclxufSldKSA6IG51bGw7XHJcbmV4cG9ydHMuY2xhc3NOYW1lc1NoYXBlID0gY2xhc3NOYW1lc1NoYXBlOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgZGxsX2EwZWE4MTk2ZTg2OWI5YjQ0MjVlICovIFwiZGxsLXJlZmVyZW5jZSBkbGxfYTBlYTgxOTZlODY5YjliNDQyNWVcIikpKFwiLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanNcIik7IiwiLyoqXHJcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxyXG4gKlxyXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcclxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxyXG4gKi9cclxuXHJcbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XHJcbiAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XHJcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xyXG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxyXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XHJcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcclxuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xyXG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XHJcblxyXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcclxuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxyXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XHJcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xyXG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XHJcblxyXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxyXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxyXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xyXG5cclxuICAgIHJldHVybiBnZW5lcmF0b3I7XHJcbiAgfVxyXG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XHJcblxyXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxyXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxyXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxyXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcclxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXHJcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xyXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXHJcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXHJcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxyXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cclxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcclxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcclxuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xyXG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XHJcblxyXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcclxuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXHJcbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcclxuXHJcbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXHJcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXHJcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcclxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxyXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XHJcbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxyXG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cclxuXHJcbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxyXG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXHJcbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XHJcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfTtcclxuXHJcbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xyXG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcclxuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcclxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXHJcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcclxuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXHJcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXHJcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xyXG4gIH1cclxuXHJcbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cclxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcclxuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xyXG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XHJcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cclxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xyXG5cclxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxyXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXHJcbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xyXG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XHJcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xyXG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xyXG4gICAgcmV0dXJuIGN0b3JcclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxyXG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cclxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXHJcbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXHJcbiAgICAgIDogZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XHJcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XHJcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcclxuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xyXG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcclxuICAgIHJldHVybiBnZW5GdW47XHJcbiAgfTtcclxuXHJcbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXHJcbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcclxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXHJcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cclxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XHJcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcclxuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xyXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xyXG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcclxuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XHJcbiAgICAgICAgaWYgKHZhbHVlICYmXHJcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxyXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XHJcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XHJcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcclxuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcclxuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXHJcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcclxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxyXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xyXG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xyXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxyXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcclxuXHJcbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XHJcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxyXG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcclxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcclxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXHJcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cclxuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcclxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xyXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcclxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xyXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XHJcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcclxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxyXG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cclxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcclxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxyXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cclxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXHJcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcclxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxyXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcclxuICB9XHJcblxyXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XHJcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9O1xyXG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XHJcblxyXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcclxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcclxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cclxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XHJcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xyXG5cclxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXHJcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxyXG4gICAgICBQcm9taXNlSW1wbFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXHJcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXHJcbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xyXG4gICAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xyXG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XHJcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XHJcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XHJcbiAgICAgICAgICB0aHJvdyBhcmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxyXG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcclxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcclxuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XHJcblxyXG4gICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XHJcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XHJcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcclxuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xyXG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XHJcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcclxuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXHJcbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xyXG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XHJcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XHJcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XHJcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xyXG5cclxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XHJcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XHJcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XHJcbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXHJcbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxyXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXHJcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcclxuXHJcbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcclxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcclxuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XHJcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXHJcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxyXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XHJcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXHJcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxyXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxyXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxyXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcclxuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XHJcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XHJcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXHJcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xyXG5cclxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcclxuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxyXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xyXG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxyXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxyXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xyXG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcclxuXHJcbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xyXG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxyXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cclxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcclxuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXHJcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XHJcblxyXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcclxuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XHJcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcclxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XHJcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcclxuXHJcbiAgICBpZiAoISBpbmZvKSB7XHJcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xyXG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcclxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XHJcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpbmZvLmRvbmUpIHtcclxuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcclxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cclxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XHJcblxyXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXHJcbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XHJcblxyXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcclxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxyXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxyXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcclxuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcclxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxyXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcclxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xyXG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxyXG4gICAgICByZXR1cm4gaW5mbztcclxuICAgIH1cclxuXHJcbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxyXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cclxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xyXG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XHJcbiAgfVxyXG5cclxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxyXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cclxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xyXG5cclxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xyXG5cclxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxyXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXHJcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cclxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cclxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH07XHJcblxyXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xyXG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcclxuXHJcbiAgICBpZiAoMSBpbiBsb2NzKSB7XHJcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoMiBpbiBsb2NzKSB7XHJcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xyXG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xyXG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XHJcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XHJcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcclxuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XHJcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcclxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cclxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cclxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XHJcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XHJcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XHJcbiAgICB2YXIga2V5cyA9IFtdO1xyXG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xyXG4gICAgICBrZXlzLnB1c2goa2V5KTtcclxuICAgIH1cclxuICAgIGtleXMucmV2ZXJzZSgpO1xyXG5cclxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXHJcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xyXG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xyXG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XHJcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xyXG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XHJcbiAgICAgICAgICByZXR1cm4gbmV4dDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxyXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xyXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cclxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcclxuICAgICAgcmV0dXJuIG5leHQ7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xyXG4gICAgaWYgKGl0ZXJhYmxlKSB7XHJcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcclxuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XHJcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcclxuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XHJcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICByZXR1cm4gbmV4dDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cclxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcclxuICB9XHJcbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XHJcblxyXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XHJcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XHJcbiAgfVxyXG5cclxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcclxuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxyXG5cclxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XHJcbiAgICAgIHRoaXMucHJldiA9IDA7XHJcbiAgICAgIHRoaXMubmV4dCA9IDA7XHJcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXHJcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXHJcbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XHJcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcclxuXHJcbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XHJcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XHJcblxyXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcclxuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcclxuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XHJcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXHJcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcclxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XHJcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xyXG5cclxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcclxuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcclxuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XHJcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XHJcbiAgICB9LFxyXG5cclxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcclxuICAgICAgaWYgKHRoaXMuZG9uZSkge1xyXG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xyXG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcclxuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcclxuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xyXG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcclxuXHJcbiAgICAgICAgaWYgKGNhdWdodCkge1xyXG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcclxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXHJcbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xyXG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XHJcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xyXG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xyXG5cclxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xyXG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcclxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xyXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cclxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xyXG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XHJcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XHJcblxyXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xyXG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xyXG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xyXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XHJcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xyXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXHJcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcclxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xyXG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXHJcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XHJcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxyXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcclxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xyXG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcclxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXHJcbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XHJcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcclxuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcclxuXHJcbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcclxuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xyXG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xyXG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xyXG4gICAgfSxcclxuXHJcbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xyXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xyXG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XHJcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XHJcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcclxuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xyXG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcclxuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XHJcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcclxuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xyXG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcclxuICAgIH0sXHJcblxyXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XHJcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcclxuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XHJcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcclxuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xyXG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XHJcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcclxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xyXG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcclxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcclxuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xyXG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcclxuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XHJcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxyXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcclxuICAgIH0sXHJcblxyXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcclxuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcclxuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcclxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxyXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcclxuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxyXG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cclxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxyXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxyXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxyXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXHJcbiAgcmV0dXJuIGV4cG9ydHM7XHJcblxyXG59KFxyXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXHJcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcclxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXHJcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cclxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxyXG4pKTtcclxuXHJcbnRyeSB7XHJcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcclxufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcclxuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxyXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxyXG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxyXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxyXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxyXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXHJcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcclxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcclxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cclxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWxNb2R1bGUpIHtcclxuXHRpZiAoIW9yaWdpbmFsTW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0dmFyIG1vZHVsZSA9IE9iamVjdC5jcmVhdGUob3JpZ2luYWxNb2R1bGUpO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImV4cG9ydHNcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlXHJcblx0XHR9KTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7IC8vXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB1c2VBdXRoIGZyb20gXCIuLi8uLi9jb250ZXh0cy9hdXRoLmpzXCI7XHJcbmltcG9ydCBMb2FkaW5nT3ZlcmxheSBmcm9tIFwicmVhY3QtbG9hZGluZy1vdmVybGF5XCI7XHJcblxyXG5mdW5jdGlvbiBBZG1pbigpIHtcclxuICBjb25zdCB7IGxvZ2luLCBpc0F1dGhlbnRpY2F0ZWQsIHVzZXIgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zb2xlLmxvZyhpc0F1dGhlbnRpY2F0ZWQpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaXNBdXRoZW50aWNhdGVkKSB7XHJcbiAgICAgIGlmICh1c2VyLlVzZXJUeXBlICE9IFwiYWRtaW5cIikge1xyXG4gICAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuICBjb25zdCBbZW1haWwsIHNldGVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2FsZXJ0LCBzZXRhbGVydF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtwYWdldXAsIHNldHBhZ2V1cF0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbc3Bpbm5lciwgc2V0c3Bpbm5lcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGxvZ3VzZXIgPSBhc3luYyAoZW1haWwsIHBhc3N3b3JkKSA9PiB7XHJcbiAgICBzZXRzcGlubmVyKHRydWUpO1xyXG4gICAgY29uc29sZS5sb2coZW1haWwsIHBhc3N3b3JkKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBsb2dpbihlbWFpbCwgcGFzc3dvcmQpO1xyXG4gICAgaWYgKHJlcykge1xyXG4gICAgICBzZXRzcGlubmVyKGZhbHNlKTtcclxuICAgICAgUm91dGVyLnB1c2goXCIvQ29tcGFueXNTdGF0aXN0aWNzXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0c3Bpbm5lcihmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMb2FkaW5nT3ZlcmxheSBhY3RpdmU9e3NwaW5uZXJ9IHNwaW5uZXIgdGV4dD1cItis2KfYsdmKINin2YTYqtit2YXZitmELi4uXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtYWluLWNvbnRlbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyIGJnLWdyYWRpZW50LXByaW1hcnkgcHktNyBweS1sZy04IHB0LWxnLTlcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZXBhcmF0b3Igc2VwYXJhdG9yLWJvdHRvbSBzZXBhcmF0b3Itc2tldyB6aW5kZXgtMTAwXCI+XHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICB4PVwiMFwiXHJcbiAgICAgICAgICAgICAgeT1cIjBcIlxyXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjU2MCAxMDBcIlxyXG4gICAgICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJub25lXCJcclxuICAgICAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCJcclxuICAgICAgICAgICAgICB4bWxucz1cImh0dHBzOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8cG9seWdvblxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJmaWxsLWRlZmF1bHRcIlxyXG4gICAgICAgICAgICAgICAgcG9pbnRzPVwiMjU2MCAwIDI1NjAgMTAwIDAgMTAwXCJcclxuICAgICAgICAgICAgICA+PC9wb2x5Z29uPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIG10LS04IHBiLTVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTUgY29sLW1kLTdcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBiZy1zZWNvbmRhcnkgYm9yZGVyLTAgbWItMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keSBweC1sZy01IHB5LWxnLTVcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIHRleHQtbXV0ZWQgbWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz7Yp9mE2LHYrNin2KEg2KrYs9is2YrZhCDYp9mE2K/YrtmI2YQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGxvZ3VzZXIoZW1haWwsIHBhc3N3b3JkKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHJvbGU9XCJmb3JtXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBpbnB1dC1ncm91cC1tZXJnZSBpbnB1dC1ncm91cC1hbHRlcm5hdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJuaSBuaS1lbWFpbC04M1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRlbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi2KfZhNil2YrZhdmK2YRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIGlucHV0LWdyb3VwLW1lcmdlIGlucHV0LWdyb3VwLWFsdGVybmF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIm5pIG5pLWxvY2stY2lyY2xlLW9wZW5cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItin2YTYsdmC2YUg2KfZhNiz2LHZilwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBteS00XCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg2KrYs9is2YrZhCDYp9mE2K/YrtmI2YRcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTZcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cInRleHQtbGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c21hbGw+2YfZhCDZhtiz2YrYqiDYp9mE2LHZgtmFINin2YTYs9ix2Yog2J88L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNiB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ0ZXh0LWxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNtYWxsPtiq2LPYrNmK2YQg2K3Ys9in2Kgg2KzYr9mK2K88L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xvYWRpbmdPdmVybGF5PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkbWluO1xyXG4iLCJpbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcbmNvbnN0IHNpdGVVcmwgPSBDb29raWVzLmdldChcInNpdGVVcmxcIik7XHJcbmlmICghc2l0ZVVybCkge1xyXG4gIENvb2tpZXMuc2V0KFwic2l0ZVVybFwiLCBcImh0dHBzOi8vYXBpLnJhYm93YWguY29tL3dwLWpzb24vXCIsIHtcclxuICAgIGV4cGlyZXM6IDYwLFxyXG4gIH0pO1xyXG59XHJcbmxldCB1cmxzID0ge1xyXG4gIGRldmVsb3BtZW50OiBcImh0dHBzOi8vYXBpLnJhYm93YWguY29tL3dwLWpzb24vXCIsXHJcbiAgcHJvZHVjdGlvbjogXCJodHRwczovL2FwaS5yYWJvd2FoLmNvbS93cC1qc29uL1wiLFxyXG59O1xyXG5jb25zdCBhcGkgPSBBeGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IHVybHNbcHJvY2Vzcy5lbnYuTk9ERV9FTlZdLFxyXG4gIGhlYWRlcnM6IHtcclxuICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwaTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBkbGxfYTBlYTgxOTZlODY5YjliNDQyNWU7Il0sInNvdXJjZVJvb3QiOiIifQ==