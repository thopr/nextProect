(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\index.js"],{

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "D:\\work\\xampp2020\\htdocs\\new_rabwa_project\\rabwa-coubon\\nexttt\\nextProect\\components\\header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Header = function Header() {
  return __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 3
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 11
    }
  }, "Home"))), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, "About"))), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/post/[id]",
    as: "/post/first",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, "First Post"))), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/post/[id]",
    as: "/post/second",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, "Second Post"))), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/Dash",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, "Dash")))));
};

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

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

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

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

/***/ "./node_modules/@emotion/core/dist/core.browser.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@emotion/core/dist/core.browser.esm.js ***!
  \*************************************************************/
/*! exports provided: css, CacheProvider, ClassNames, Global, ThemeContext, jsx, keyframes, withEmotionCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheProvider", function() { return CacheProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassNames", function() { return ClassNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withEmotionCache", function() { return withEmotionCache; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/cache.browser.esm.js");
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/utils */ "./node_modules/@emotion/utils/dist/utils.browser.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/serialize.browser.esm.js");
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/sheet */ "./node_modules/@emotion/sheet/dist/sheet.browser.esm.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@emotion/css/dist/css.browser.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return _emotion_css__WEBPACK_IMPORTED_MODULE_6__["default"]; });










var EmotionCacheContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? Object(_emotion_cache__WEBPACK_IMPORTED_MODULE_2__["default"])() : null);
var ThemeContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
var CacheProvider = EmotionCacheContext.Provider;

var withEmotionCache = function withEmotionCache(func) {
  var render = function render(props, ref) {
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(EmotionCacheContext.Consumer, null, function (cache) {
      return func(props, cache, ref);
    });
  }; // $FlowFixMe


  return Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(render);
};

// thus we only need to replace what is a valid character for JS, but not for CSS

var sanitizeIdentifier = function sanitizeIdentifier(identifier) {
  return identifier.replace(/\$/g, '-');
};

var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var hasOwnProperty = Object.prototype.hasOwnProperty;

var render = function render(cache, props, theme, ref) {
  var cssProp = theme === null ? props.css : props.css(theme); // so that using `css` from `emotion` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }

  var type = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';

  if (typeof props.className === 'string') {
    className = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["getRegisteredStyles"])(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }

  var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])(registeredStyles);

  if ( true && serialized.name.indexOf('-') === -1) {
    var labelFromStack = props[labelPropName];

    if (labelFromStack) {
      serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])([serialized, 'label:' + labelFromStack + ';']);
    }
  }

  var rules = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["insertStyles"])(cache, serialized, typeof type === 'string');
  className += cache.key + "-" + serialized.name;
  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && ( false || key !== labelPropName)) {
      newProps[key] = props[key];
    }
  }

  newProps.ref = ref;
  newProps.className = className;
  var ele = Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(type, newProps);

  return ele;
};

var Emotion =
/* #__PURE__ */
withEmotionCache(function (props, cache, ref) {
  // use Context.read for the theme when it's stable
  if (typeof props.css === 'function') {
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ThemeContext.Consumer, null, function (theme) {
      return render(cache, props, theme, ref);
    });
  }

  return render(cache, props, null, ref);
});

if (true) {
  Emotion.displayName = 'EmotionCssPropInternal';
} // $FlowFixMe


var jsx = function jsx(type, props) {
  var args = arguments;

  if (props == null || !hasOwnProperty.call(props, 'css')) {
    // $FlowFixMe
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"].apply(undefined, args);
  }

  if ( true && typeof props.css === 'string' && // check if there is a css declaration
  props.css.indexOf(':') !== -1) {
    throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/css' like this: css`" + props.css + "`");
  }

  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = Emotion;
  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key)) {
      newProps[key] = props[key];
    }
  }

  newProps[typePropName] = type;

  if (true) {
    var error = new Error();

    if (error.stack) {
      // chrome
      var match = error.stack.match(/at (?:Object\.|)jsx.*\n\s+at ([A-Z][A-Za-z$]+) /);

      if (!match) {
        // safari and firefox
        match = error.stack.match(/.*\n([A-Z][A-Za-z$]+)@/);
      }

      if (match) {
        newProps[labelPropName] = sanitizeIdentifier(match[1]);
      }
    }
  }

  createElementArgArray[1] = newProps;

  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  } // $FlowFixMe


  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"].apply(null, createElementArgArray);
};

var warnedAboutCssPropForGlobal = false;
var Global =
/* #__PURE__ */
withEmotionCache(function (props, cache) {
  if ( true && !warnedAboutCssPropForGlobal && ( // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  props.className || props.css)) {
    console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
    warnedAboutCssPropForGlobal = true;
  }

  var styles = props.styles;

  if (typeof styles === 'function') {
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ThemeContext.Consumer, null, function (theme) {
      var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])([styles(theme)]);
      return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerGlobal, {
        serialized: serialized,
        cache: cache
      });
    });
  }

  var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])([styles]);
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerGlobal, {
    serialized: serialized,
    cache: cache
  });
});

// maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag
var InnerGlobal =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(InnerGlobal, _React$Component);

  function InnerGlobal(props, context, updater) {
    return _React$Component.call(this, props, context, updater) || this;
  }

  var _proto = InnerGlobal.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.sheet = new _emotion_sheet__WEBPACK_IMPORTED_MODULE_5__["StyleSheet"]({
      key: this.props.cache.key + "-global",
      nonce: this.props.cache.sheet.nonce,
      container: this.props.cache.sheet.container
    }); // $FlowFixMe

    var node = document.querySelector("style[data-emotion-" + this.props.cache.key + "=\"" + this.props.serialized.name + "\"]");

    if (node !== null) {
      this.sheet.tags.push(node);
    }

    if (this.props.cache.sheet.tags.length) {
      this.sheet.before = this.props.cache.sheet.tags[0];
    }

    this.insertStyles();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.serialized.name !== this.props.serialized.name) {
      this.insertStyles();
    }
  };

  _proto.insertStyles = function insertStyles$1() {
    if (this.props.serialized.next !== undefined) {
      // insert keyframes
      Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["insertStyles"])(this.props.cache, this.props.serialized.next, true);
    }

    if (this.sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      var element = this.sheet.tags[this.sheet.tags.length - 1].nextElementSibling;
      this.sheet.before = element;
      this.sheet.flush();
    }

    this.props.cache.insert("", this.props.serialized, this.sheet, false);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.sheet.flush();
  };

  _proto.render = function render() {

    return null;
  };

  return InnerGlobal;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var keyframes = function keyframes() {
  var insertable = _emotion_css__WEBPACK_IMPORTED_MODULE_6__["default"].apply(void 0, arguments);
  var name = "animation-" + insertable.name; // $FlowFixMe

  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
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

function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["getRegisteredStyles"])(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var ClassNames = withEmotionCache(function (props, context) {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ThemeContext.Consumer, null, function (theme) {
    var hasRendered = false;

    var css = function css() {
      if (hasRendered && "development" !== 'production') {
        throw new Error('css can only be used during render');
      }

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])(args, context.registered);

      {
        Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["insertStyles"])(context, serialized, false);
      }

      return context.key + "-" + serialized.name;
    };

    var cx = function cx() {
      if (hasRendered && "development" !== 'production') {
        throw new Error('cx can only be used during render');
      }

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return merge(context.registered, css, classnames(args));
    };

    var content = {
      css: css,
      cx: cx,
      theme: theme
    };
    var ele = props.children(content);
    hasRendered = true;

    return ele;
  });
});




/***/ }),

/***/ "./node_modules/@emotion/css/dist/css.browser.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/@emotion/css/dist/css.browser.esm.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/serialize.browser.esm.js");


function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_0__["serializeStyles"])(args);
}

/* harmony default export */ __webpack_exports__["default"] = (css);


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

/***/ "./node_modules/fast-deep-equal/index.js":
/*!***********************************************!*\
  !*** ./node_modules/fast-deep-equal/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;

module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    var arrA = isArray(a)
      , arrB = isArray(b)
      , i
      , length
      , key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    if (arrA != arrB) return false;

    var dateA = a instanceof Date
      , dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();

    var regexpA = a instanceof RegExp
      , regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();

    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length)
      return false;

    for (i = length; i-- !== 0;)
      if (!hasProp.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      key = keys[i];
      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  return a!==a && b!==b;
};


/***/ }),

/***/ "./node_modules/function-bind/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/function-bind/implementation.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "./node_modules/function-bind/index.js":
/*!*********************************************!*\
  !*** ./node_modules/function-bind/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "./node_modules/has/src/index.js":
/*!***************************************!*\
  !*** ./node_modules/has/src/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


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

/***/ "./node_modules/next/dist/build/polyfills/object.assign/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/object.assign/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var assign=Object.assign.bind(Object);function g(){return assign;}Object.defineProperties(g(),{implementation:{get:g},shim:{value:g},getPolyfill:{value:g}});module.exports=g();
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=D%3A%5Cwork%5Cxampp2020%5Chtdocs%5Cnew_rabwa_project%5Crabwa-coubon%5Cnexttt%5CnextProect%5Cpages%5Cindex.js!./":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=D%3A%5Cwork%5Cxampp2020%5Chtdocs%5Cnew_rabwa_project%5Crabwa-coubon%5Cnexttt%5CnextProect%5Cpages%5Cindex.js ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/",
      function () {
        return __webpack_require__(/*! ./pages/index.js */ "./pages/index.js");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _url = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = true ? window.IntersectionObserver : undefined;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners["delete"](entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = function listenToIntersections(el, cb) {
  var observer = getObserver();

  if (!observer) {
    return function () {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return function () {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners["delete"](el);
  };
};

var Link = /*#__PURE__*/function (_react$Component) {
  _inherits(Link, _react$Component);

  var _super = _createSuper(Link);

  function Link(props) {
    var _this;

    _classCallCheck(this, Link);

    _this = _super.call(this, props);
    _this.p = void 0;

    _this.cleanUpListeners = function () {};

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var pathname = window.location.pathname;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router["default"][_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
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

    _this.p = props.prefetch !== false;
    return _this;
  }

  _createClass(Link, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanUpListeners();
    }
  }, {
    key: "getPaths",
    value: function getPaths() {
      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href,
          parsedAs = _this$formatUrls2.as;

      var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
      return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
    }
  }, {
    key: "handleRef",
    value: function handleRef(ref) {
      var _this2 = this;

      if (this.p && IntersectionObserver && ref && ref.tagName) {
        this.cleanUpListeners();
        var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
        '%')];

        if (!isPrefetched) {
          this.cleanUpListeners = listenToIntersections(ref, function () {
            _this2.prefetch();
          });
        }
      }
    } // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

  }, {
    key: "prefetch",
    value: function prefetch(options) {
      if (!this.p || false) return; // Prefetch the JSON page if asked (only in the client)

      var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
      // loading with priority which can reject but we don't
      // want to force navigation since this is only a prefetch

      _router["default"].prefetch(paths[
      /* href */
      0], paths[
      /* asPath */
      1], options)["catch"](function (err) {
        if (true) {
          // rethrow to show invalid URL errors
          throw err;
        }
      });

      prefetched[paths.join( // Join on an invalid URI character
      '%')] = true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = /*#__PURE__*/_react["default"].createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = _react.Children.only(children);

      var props = {
        ref: function ref(el) {
          _this3.handleRef(el);

          if (child && typeof child === 'object' && child.ref) {
            if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
              child.ref.current = el;
            }
          }
        },
        onMouseEnter: function onMouseEnter(e) {
          if (child.props && typeof child.props.onMouseEnter === 'function') {
            child.props.onMouseEnter(e);
          }

          _this3.prefetch({
            priority: true
          });
        },
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this3.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (false) { var rewriteUrlForNextExport; }

      return _react["default"].cloneElement(child, props);
    }
  }]);

  return Link;
}(_react.Component);

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

  var exact = __webpack_require__(/*! prop-types-exact */ "./node_modules/prop-types-exact/build/index.js"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports["default"] = _default;

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

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


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

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

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

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

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

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

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

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
/*!**********************************************************************!*\
  !*** ./node_modules/prop-types-exact/build/helpers/isPlainObject.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = isPlainObject;
function isPlainObject(x) {
  return x && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && !Array.isArray(x);
}
module.exports = exports['default'];
//# sourceMappingURL=isPlainObject.js.map

/***/ }),

/***/ "./node_modules/prop-types-exact/build/index.js":
/*!******************************************************!*\
  !*** ./node_modules/prop-types-exact/build/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = forbidExtraProps;

var _object = __webpack_require__(/*! object.assign */ "./node_modules/next/dist/build/polyfills/object.assign/index.js");

var _object2 = _interopRequireDefault(_object);

var _has = __webpack_require__(/*! has */ "./node_modules/has/src/index.js");

var _has2 = _interopRequireDefault(_has);

var _isPlainObject = __webpack_require__(/*! ./helpers/isPlainObject */ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js");

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var zeroWidthSpace = '\u200B';
var specialProperty = 'prop-types-exact: ' + zeroWidthSpace;
var semaphore = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' ? Symbol['for'](specialProperty) : /* istanbul ignore next */specialProperty;

function brand(fn) {
  return (0, _object2['default'])(fn, _defineProperty({}, specialProperty, semaphore));
}

function isBranded(value) {
  return value && value[specialProperty] === semaphore;
}

function forbidExtraProps(propTypes) {
  if (!(0, _isPlainObject2['default'])(propTypes)) {
    throw new TypeError('given propTypes must be an object');
  }
  if ((0, _has2['default'])(propTypes, specialProperty) && !isBranded(propTypes[specialProperty])) {
    throw new TypeError('Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`');
  }

  return (0, _object2['default'])({}, propTypes, _defineProperty({}, specialProperty, brand(function () {
    function forbidUnknownProps(props, _, componentName) {
      var unknownProps = Object.keys(props).filter(function (prop) {
        return !(0, _has2['default'])(propTypes, prop);
      });
      if (unknownProps.length > 0) {
        return new TypeError(String(componentName) + ': unknown props found: ' + String(unknownProps.join(', ')));
      }
      return null;
    }

    return forbidUnknownProps;
  }())));
}
module.exports = exports['default'];
//# sourceMappingURL=index.js.map

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

/***/ "./node_modules/react-loading-skeleton/lib/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-loading-skeleton/lib/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _skeleton.default;
  }
});
Object.defineProperty(exports, "SkeletonTheme", {
  enumerable: true,
  get: function get() {
    return _skeletonTheme.default;
  }
});

var _skeleton = _interopRequireDefault(__webpack_require__(/*! ./skeleton */ "./node_modules/react-loading-skeleton/lib/skeleton.js"));

var _skeletonTheme = _interopRequireDefault(__webpack_require__(/*! ./skeleton-theme */ "./node_modules/react-loading-skeleton/lib/skeleton-theme.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/react-loading-skeleton/lib/skeleton-theme.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-loading-skeleton/lib/skeleton-theme.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _core = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");

var _skeleton = __webpack_require__(/*! ./skeleton */ "./node_modules/react-loading-skeleton/lib/skeleton.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SkeletonTheme =
/*#__PURE__*/
function (_Component) {
  _inherits(SkeletonTheme, _Component);

  function SkeletonTheme() {
    _classCallCheck(this, SkeletonTheme);

    return _possibleConstructorReturn(this, _getPrototypeOf(SkeletonTheme).apply(this, arguments));
  }

  _createClass(SkeletonTheme, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          color = _this$props.color,
          highlightColor = _this$props.highlightColor,
          children = _this$props.children;
      var themeStyles =
      /*#__PURE__*/
      (0, _core.css)(".react-loading-skeleton{background-color:", color, ";background-image:linear-gradient( 90deg,", color, ",", highlightColor, ",", color, " );};label:SkeletonTheme;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9za2VsZXRvbi10aGVtZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZMkIiLCJmaWxlIjoiLi4vc3JjL3NrZWxldG9uLXRoZW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcbmltcG9ydCB7IGRlZmF1bHRCYXNlQ29sb3IsIGRlZmF1bHRIaWdobGlnaHRDb2xvciB9IGZyb20gXCIuL3NrZWxldG9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNrZWxldG9uVGhlbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNvbG9yOiBkZWZhdWx0QmFzZUNvbG9yLFxuICAgIGhpZ2hsaWdodENvbG9yOiBkZWZhdWx0SGlnaGxpZ2h0Q29sb3JcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjb2xvciwgaGlnaGxpZ2h0Q29sb3IsIGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHRoZW1lU3R5bGVzID0gY3NzYFxuICAgICAgLnJlYWN0LWxvYWRpbmctc2tlbGV0b24ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yfTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgIDkwZGVnLFxuICAgICAgICAgICR7Y29sb3J9LFxuICAgICAgICAgICR7aGlnaGxpZ2h0Q29sb3J9LFxuICAgICAgICAgICR7Y29sb3J9XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgYDtcbiAgICByZXR1cm4gPGRpdiBjc3M9e3RoZW1lU3R5bGVzfT57Y2hpbGRyZW59PC9kaXY+O1xuICB9XG59XG4iXX0= */"));
      return (0, _core.jsx)("div", {
        css: themeStyles
      }, children);
    }
  }]);

  return SkeletonTheme;
}(_react.Component);

exports.default = SkeletonTheme;

_defineProperty(SkeletonTheme, "defaultProps", {
  color: _skeleton.defaultBaseColor,
  highlightColor: _skeleton.defaultHighlightColor
});

/***/ }),

/***/ "./node_modules/react-loading-skeleton/lib/skeleton.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-loading-skeleton/lib/skeleton.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Skeleton;
exports.skeletonStyles = exports.skeletonKeyframes = exports.defaultHighlightColor = exports.defaultBaseColor = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _core = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  0% {\n    background-position: -200px 0;\n  }\n  100% {\n    background-position: calc(200px + 100%) 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var defaultBaseColor = "#eee";
exports.defaultBaseColor = defaultBaseColor;
var defaultHighlightColor = "#f5f5f5";
exports.defaultHighlightColor = defaultHighlightColor;
var skeletonKeyframes = (0, _core.keyframes)(_templateObject());
exports.skeletonKeyframes = skeletonKeyframes;
var skeletonStyles =
/*#__PURE__*/
(0, _core.css)("background-color:", defaultBaseColor, ";background-image:linear-gradient( 90deg,", defaultBaseColor, ",", defaultHighlightColor, ",", defaultBaseColor, " );background-size:200px 100%;background-repeat:no-repeat;border-radius:4px;display:inline-block;line-height:1;width:100%;;label:skeletonStyles;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9za2VsZXRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQmlDIiwiZmlsZSI6Ii4uL3NyYy9za2VsZXRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNzcywga2V5ZnJhbWVzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRCYXNlQ29sb3IgPSBcIiNlZWVcIjtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRIaWdobGlnaHRDb2xvciA9IFwiI2Y1ZjVmNVwiO1xuXG5leHBvcnQgY29uc3Qgc2tlbGV0b25LZXlmcmFtZXMgPSBrZXlmcmFtZXNgXG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjAwcHggMDtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjYWxjKDIwMHB4ICsgMTAwJSkgMDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IHNrZWxldG9uU3R5bGVzID0gY3NzYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2RlZmF1bHRCYXNlQ29sb3J9O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgOTBkZWcsXG4gICAgJHtkZWZhdWx0QmFzZUNvbG9yfSxcbiAgICAke2RlZmF1bHRIaWdobGlnaHRDb2xvcn0sXG4gICAgJHtkZWZhdWx0QmFzZUNvbG9yfVxuICApO1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwMHB4IDEwMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBsaW5lLWhlaWdodDogMTtcbiAgd2lkdGg6IDEwMCU7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTa2VsZXRvbih7XG4gIGNvdW50LFxuICBkdXJhdGlvbixcbiAgd2lkdGgsXG4gIHdyYXBwZXI6IFdyYXBwZXIsXG4gIGhlaWdodCxcbiAgY2lyY2xlLFxuICBzdHlsZTogY3VzdG9tU3R5bGUsXG4gIGNsYXNzTmFtZTogY3VzdG9tQ2xhc3NOYW1lLFxufSkge1xuICBjb25zdCBlbGVtZW50cyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgIGxldCBzdHlsZSA9IHt9O1xuXG4gICAgaWYgKHdpZHRoICE9PSBudWxsKSB7XG4gICAgICBzdHlsZS53aWR0aCA9IHdpZHRoO1xuICAgIH1cblxuICAgIGlmIChoZWlnaHQgIT09IG51bGwpIHtcbiAgICAgIHN0eWxlLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG5cbiAgICBpZiAod2lkdGggIT09IG51bGwgJiYgaGVpZ2h0ICE9PSBudWxsICYmIGNpcmNsZSkge1xuICAgICAgc3R5bGUuYm9yZGVyUmFkaXVzID0gXCI1MCVcIjtcbiAgICB9XG5cbiAgICBsZXQgY2xhc3NOYW1lID0gXCJyZWFjdC1sb2FkaW5nLXNrZWxldG9uXCI7XG4gICAgaWYgKGN1c3RvbUNsYXNzTmFtZSkge1xuICAgICAgY2xhc3NOYW1lICs9IFwiIFwiICsgY3VzdG9tQ2xhc3NOYW1lO1xuICAgIH1cblxuICAgIGVsZW1lbnRzLnB1c2goXG4gICAgICA8c3BhblxuICAgICAgICBrZXk9e2l9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAke3NrZWxldG9uU3R5bGVzfVxuICAgICAgICAgIGFuaW1hdGlvbjogJHtza2VsZXRvbktleWZyYW1lc30gJHtkdXJhdGlvbn1zIGVhc2UtaW4tb3V0IGluZmluaXRlXG4gICAgICAgIGB9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgLi4uY3VzdG9tU3R5bGUsXG4gICAgICAgICAgLi4uc3R5bGUsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgICZ6d25qO1xuICAgICAgPC9zcGFuPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzcGFuPlxuICAgICAge1dyYXBwZXJcbiAgICAgICAgPyBlbGVtZW50cy5tYXAoKGVsZW1lbnQsIGkpID0+IChcbiAgICAgICAgICAgIDxXcmFwcGVyIGtleT17aX0+XG4gICAgICAgICAgICAgIHtlbGVtZW50fVxuICAgICAgICAgICAgICAmenduajtcbiAgICAgICAgICAgIDwvV3JhcHBlcj5cbiAgICAgICAgICApKVxuICAgICAgICA6IGVsZW1lbnRzfVxuICAgIDwvc3Bhbj5cbiAgKTtcbn1cblxuU2tlbGV0b24uZGVmYXVsdFByb3BzID0ge1xuICBjb3VudDogMSxcbiAgZHVyYXRpb246IDEuMixcbiAgd2lkdGg6IG51bGwsXG4gIHdyYXBwZXI6IG51bGwsXG4gIGhlaWdodDogbnVsbCxcbiAgY2lyY2xlOiBmYWxzZSxcbn07XG4iXX0= */"));
exports.skeletonStyles = skeletonStyles;

function Skeleton(_ref) {
  var count = _ref.count,
      duration = _ref.duration,
      width = _ref.width,
      Wrapper = _ref.wrapper,
      height = _ref.height,
      circle = _ref.circle,
      customStyle = _ref.style,
      customClassName = _ref.className;
  var elements = [];

  for (var i = 0; i < count; i++) {
    var style = {};

    if (width !== null) {
      style.width = width;
    }

    if (height !== null) {
      style.height = height;
    }

    if (width !== null && height !== null && circle) {
      style.borderRadius = "50%";
    }

    var className = "react-loading-skeleton";

    if (customClassName) {
      className += " " + customClassName;
    }

    elements.push((0, _core.jsx)("span", {
      key: i,
      className: className,
      css:
      /*#__PURE__*/
      (0, _core.css)(skeletonStyles, " animation:", skeletonKeyframes, " ", duration, "s ease-in-out infinite;label:Skeleton;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9za2VsZXRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRWdCIiwiZmlsZSI6Ii4uL3NyYy9za2VsZXRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNzcywga2V5ZnJhbWVzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRCYXNlQ29sb3IgPSBcIiNlZWVcIjtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRIaWdobGlnaHRDb2xvciA9IFwiI2Y1ZjVmNVwiO1xuXG5leHBvcnQgY29uc3Qgc2tlbGV0b25LZXlmcmFtZXMgPSBrZXlmcmFtZXNgXG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjAwcHggMDtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjYWxjKDIwMHB4ICsgMTAwJSkgMDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IHNrZWxldG9uU3R5bGVzID0gY3NzYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2RlZmF1bHRCYXNlQ29sb3J9O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgOTBkZWcsXG4gICAgJHtkZWZhdWx0QmFzZUNvbG9yfSxcbiAgICAke2RlZmF1bHRIaWdobGlnaHRDb2xvcn0sXG4gICAgJHtkZWZhdWx0QmFzZUNvbG9yfVxuICApO1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwMHB4IDEwMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBsaW5lLWhlaWdodDogMTtcbiAgd2lkdGg6IDEwMCU7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTa2VsZXRvbih7XG4gIGNvdW50LFxuICBkdXJhdGlvbixcbiAgd2lkdGgsXG4gIHdyYXBwZXI6IFdyYXBwZXIsXG4gIGhlaWdodCxcbiAgY2lyY2xlLFxuICBzdHlsZTogY3VzdG9tU3R5bGUsXG4gIGNsYXNzTmFtZTogY3VzdG9tQ2xhc3NOYW1lLFxufSkge1xuICBjb25zdCBlbGVtZW50cyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgIGxldCBzdHlsZSA9IHt9O1xuXG4gICAgaWYgKHdpZHRoICE9PSBudWxsKSB7XG4gICAgICBzdHlsZS53aWR0aCA9IHdpZHRoO1xuICAgIH1cblxuICAgIGlmIChoZWlnaHQgIT09IG51bGwpIHtcbiAgICAgIHN0eWxlLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG5cbiAgICBpZiAod2lkdGggIT09IG51bGwgJiYgaGVpZ2h0ICE9PSBudWxsICYmIGNpcmNsZSkge1xuICAgICAgc3R5bGUuYm9yZGVyUmFkaXVzID0gXCI1MCVcIjtcbiAgICB9XG5cbiAgICBsZXQgY2xhc3NOYW1lID0gXCJyZWFjdC1sb2FkaW5nLXNrZWxldG9uXCI7XG4gICAgaWYgKGN1c3RvbUNsYXNzTmFtZSkge1xuICAgICAgY2xhc3NOYW1lICs9IFwiIFwiICsgY3VzdG9tQ2xhc3NOYW1lO1xuICAgIH1cblxuICAgIGVsZW1lbnRzLnB1c2goXG4gICAgICA8c3BhblxuICAgICAgICBrZXk9e2l9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAke3NrZWxldG9uU3R5bGVzfVxuICAgICAgICAgIGFuaW1hdGlvbjogJHtza2VsZXRvbktleWZyYW1lc30gJHtkdXJhdGlvbn1zIGVhc2UtaW4tb3V0IGluZmluaXRlXG4gICAgICAgIGB9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgLi4uY3VzdG9tU3R5bGUsXG4gICAgICAgICAgLi4uc3R5bGUsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgICZ6d25qO1xuICAgICAgPC9zcGFuPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzcGFuPlxuICAgICAge1dyYXBwZXJcbiAgICAgICAgPyBlbGVtZW50cy5tYXAoKGVsZW1lbnQsIGkpID0+IChcbiAgICAgICAgICAgIDxXcmFwcGVyIGtleT17aX0+XG4gICAgICAgICAgICAgIHtlbGVtZW50fVxuICAgICAgICAgICAgICAmenduajtcbiAgICAgICAgICAgIDwvV3JhcHBlcj5cbiAgICAgICAgICApKVxuICAgICAgICA6IGVsZW1lbnRzfVxuICAgIDwvc3Bhbj5cbiAgKTtcbn1cblxuU2tlbGV0b24uZGVmYXVsdFByb3BzID0ge1xuICBjb3VudDogMSxcbiAgZHVyYXRpb246IDEuMixcbiAgd2lkdGg6IG51bGwsXG4gIHdyYXBwZXI6IG51bGwsXG4gIGhlaWdodDogbnVsbCxcbiAgY2lyY2xlOiBmYWxzZSxcbn07XG4iXX0= */")),
      style: _objectSpread({}, customStyle, {}, style)
    }, "\u200C"));
  }

  return (0, _core.jsx)("span", null, Wrapper ? elements.map(function (element, i) {
    return (0, _core.jsx)(Wrapper, {
      key: i
    }, element, "\u200C");
  }) : elements);
}

Skeleton.defaultProps = {
  count: 1,
  duration: 1.2,
  width: null,
  wrapper: null,
  height: null,
  circle: false
};

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

/***/ "./node_modules/swr/esm/cache.js":
/*!***************************************!*\
  !*** ./node_modules/swr/esm/cache.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _use_swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-swr */ "./node_modules/swr/esm/use-swr.js");
/* harmony import */ var _libs_hash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs/hash */ "./node_modules/swr/esm/libs/hash.js");


var Cache = /** @class */ (function () {
    function Cache(initialData) {
        if (initialData === void 0) { initialData = {}; }
        this.__cache = new Map(Object.entries(initialData));
        this.__listeners = [];
    }
    Cache.prototype.get = function (key) {
        var _key = this.serializeKey(key)[0];
        return this.__cache.get(_key);
    };
    Cache.prototype.set = function (key, value, shouldNotify) {
        if (shouldNotify === void 0) { shouldNotify = true; }
        var _key = this.serializeKey(key)[0];
        this.__cache.set(_key, value);
        if (shouldNotify)
            Object(_use_swr__WEBPACK_IMPORTED_MODULE_0__["mutate"])(key, value, false);
        this.notify();
    };
    Cache.prototype.keys = function () {
        return Array.from(this.__cache.keys());
    };
    Cache.prototype.has = function (key) {
        var _key = this.serializeKey(key)[0];
        return this.__cache.has(_key);
    };
    Cache.prototype.clear = function (shouldNotify) {
        if (shouldNotify === void 0) { shouldNotify = true; }
        if (shouldNotify)
            this.__cache.forEach(function (key) { return Object(_use_swr__WEBPACK_IMPORTED_MODULE_0__["mutate"])(key, null, false); });
        this.__cache.clear();
        this.notify();
    };
    Cache.prototype.delete = function (key, shouldNotify) {
        if (shouldNotify === void 0) { shouldNotify = true; }
        var _key = this.serializeKey(key)[0];
        if (shouldNotify)
            Object(_use_swr__WEBPACK_IMPORTED_MODULE_0__["mutate"])(key, null, false);
        this.__cache.delete(_key);
        this.notify();
    };
    // TODO: introduce namespace for the cache
    Cache.prototype.serializeKey = function (key) {
        var args = null;
        if (typeof key === 'function') {
            try {
                key = key();
            }
            catch (err) {
                // dependencies not ready
                key = '';
            }
        }
        if (Array.isArray(key)) {
            // args array
            args = key;
            key = Object(_libs_hash__WEBPACK_IMPORTED_MODULE_1__["default"])(key);
        }
        else {
            // convert null to ''
            key = String(key || '');
        }
        var errorKey = key ? 'err@' + key : '';
        return [key, args, errorKey];
    };
    Cache.prototype.subscribe = function (listener) {
        var _this = this;
        if (typeof listener !== 'function') {
            throw new Error('Expected the listener to be a function.');
        }
        var isSubscribed = true;
        this.__listeners.push(listener);
        return function () {
            if (!isSubscribed)
                return;
            isSubscribed = false;
            var index = _this.__listeners.indexOf(listener);
            if (index > -1) {
                _this.__listeners[index] = _this.__listeners[_this.__listeners.length - 1];
                _this.__listeners.length--;
            }
        };
    };
    // Notify Cache subscribers about a change in the cache
    Cache.prototype.notify = function () {
        for (var _i = 0, _a = this.__listeners; _i < _a.length; _i++) {
            var listener = _a[_i];
            listener();
        }
    };
    return Cache;
}());
/* harmony default export */ __webpack_exports__["default"] = (Cache);


/***/ }),

/***/ "./node_modules/swr/esm/config.js":
/*!****************************************!*\
  !*** ./node_modules/swr/esm/config.js ***!
  \****************************************/
/*! exports provided: CONCURRENT_PROMISES, CONCURRENT_PROMISES_TS, FOCUS_REVALIDATORS, CACHE_REVALIDATORS, MUTATION_TS, cache, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONCURRENT_PROMISES", function() { return CONCURRENT_PROMISES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONCURRENT_PROMISES_TS", function() { return CONCURRENT_PROMISES_TS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOCUS_REVALIDATORS", function() { return FOCUS_REVALIDATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CACHE_REVALIDATORS", function() { return CACHE_REVALIDATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MUTATION_TS", function() { return MUTATION_TS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cache", function() { return cache; });
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fast-deep-equal */ "./node_modules/fast-deep-equal/index.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_is_document_visible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs/is-document-visible */ "./node_modules/swr/esm/libs/is-document-visible.js");
/* harmony import */ var _libs_is_online__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs/is-online */ "./node_modules/swr/esm/libs/is-online.js");
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cache */ "./node_modules/swr/esm/cache.js");




// cache
var cache = new _cache__WEBPACK_IMPORTED_MODULE_3__["default"]();
// state managers
var CONCURRENT_PROMISES = {};
var CONCURRENT_PROMISES_TS = {};
var FOCUS_REVALIDATORS = {};
var CACHE_REVALIDATORS = {};
var MUTATION_TS = {};
// error retry
function onErrorRetry(_, __, config, revalidate, opts) {
    if (!Object(_libs_is_document_visible__WEBPACK_IMPORTED_MODULE_1__["default"])()) {
        // if it's hidden, stop
        // it will auto revalidate when focus
        return;
    }
    if (config.errorRetryCount && opts.retryCount > config.errorRetryCount) {
        return;
    }
    // exponential backoff
    var count = Math.min(opts.retryCount || 0, 8);
    var timeout = ~~((Math.random() + 0.5) * (1 << count)) * config.errorRetryInterval;
    setTimeout(revalidate, timeout, opts);
}
// client side: need to adjust the config
// based on the browser status
// slow connection (<= 70Kbps)
var slowConnection = typeof window !== 'undefined' &&
    navigator['connection'] &&
    ['slow-2g', '2g'].indexOf(navigator['connection'].effectiveType) !== -1;
// config
var defaultConfig = {
    // events
    onLoadingSlow: function () { },
    onSuccess: function () { },
    onError: function () { },
    onErrorRetry: onErrorRetry,
    errorRetryInterval: (slowConnection ? 10 : 5) * 1000,
    focusThrottleInterval: 5 * 1000,
    dedupingInterval: 2 * 1000,
    loadingTimeout: (slowConnection ? 5 : 3) * 1000,
    refreshInterval: 0,
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    refreshWhenHidden: false,
    refreshWhenOffline: false,
    shouldRetryOnError: true,
    suspense: false,
    compare: fast_deep_equal__WEBPACK_IMPORTED_MODULE_0___default.a
};
// Focus revalidate
var eventsBinded = false;
if (typeof window !== 'undefined' && window.addEventListener && !eventsBinded) {
    var revalidate = function () {
        if (!Object(_libs_is_document_visible__WEBPACK_IMPORTED_MODULE_1__["default"])() || !Object(_libs_is_online__WEBPACK_IMPORTED_MODULE_2__["default"])())
            return;
        for (var key in FOCUS_REVALIDATORS) {
            if (FOCUS_REVALIDATORS[key][0])
                FOCUS_REVALIDATORS[key][0]();
        }
    };
    window.addEventListener('visibilitychange', revalidate, false);
    window.addEventListener('focus', revalidate, false);
    // only bind the events once
    eventsBinded = true;
}

/* harmony default export */ __webpack_exports__["default"] = (defaultConfig);


/***/ }),

/***/ "./node_modules/swr/esm/index.js":
/*!***************************************!*\
  !*** ./node_modules/swr/esm/index.js ***!
  \***************************************/
/*! exports provided: trigger, mutate, SWRConfig, useSWRPages, cache, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _use_swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-swr */ "./node_modules/swr/esm/use-swr.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trigger", function() { return _use_swr__WEBPACK_IMPORTED_MODULE_0__["trigger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mutate", function() { return _use_swr__WEBPACK_IMPORTED_MODULE_0__["mutate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SWRConfig", function() { return _use_swr__WEBPACK_IMPORTED_MODULE_0__["SWRConfig"]; });

/* harmony import */ var _use_swr_pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-swr-pages */ "./node_modules/swr/esm/use-swr-pages.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSWRPages", function() { return _use_swr_pages__WEBPACK_IMPORTED_MODULE_1__["useSWRPages"]; });

/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./node_modules/swr/esm/config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cache", function() { return _config__WEBPACK_IMPORTED_MODULE_2__["cache"]; });





/* harmony default export */ __webpack_exports__["default"] = (_use_swr__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/swr/esm/libs/hash.js":
/*!*******************************************!*\
  !*** ./node_modules/swr/esm/libs/hash.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hash; });
// use WeakMap to store the object->key mapping
// so the objects can be garbage collected.
// WeakMap uses a hashtable under the hood, so the lookup
// complexity is almost O(1).
var table = new WeakMap();
// counter of the key
var counter = 0;
// hashes an array of objects and returns a string
function hash(args) {
    if (!args.length)
        return '';
    var key = 'arg';
    for (var i = 0; i < args.length; ++i) {
        var _hash = void 0;
        if (args[i] === null || typeof args[i] !== 'object') {
            // need to consider the case that args[i] is a string:
            // args[i]        _hash
            // "undefined" -> '"undefined"'
            // undefined   -> 'undefined'
            // 123         -> '123'
            // null        -> 'null'
            // "null"      -> '"null"'
            if (typeof args[i] === 'string') {
                _hash = '"' + args[i] + '"';
            }
            else {
                _hash = String(args[i]);
            }
        }
        else {
            if (!table.has(args[i])) {
                _hash = counter;
                table.set(args[i], counter++);
            }
            else {
                _hash = table.get(args[i]);
            }
        }
        key += '@' + _hash;
    }
    return key;
}


/***/ }),

/***/ "./node_modules/swr/esm/libs/is-document-visible.js":
/*!**********************************************************!*\
  !*** ./node_modules/swr/esm/libs/is-document-visible.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isDocumentVisible; });
function isDocumentVisible() {
    if (typeof document !== 'undefined' &&
        typeof document.visibilityState !== 'undefined') {
        return document.visibilityState !== 'hidden';
    }
    // always assume it's visible
    return true;
}


/***/ }),

/***/ "./node_modules/swr/esm/libs/is-online.js":
/*!************************************************!*\
  !*** ./node_modules/swr/esm/libs/is-online.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isOnline; });
function isOnline() {
    if (typeof navigator.onLine !== 'undefined') {
        return navigator.onLine;
    }
    // always assume it's online
    return true;
}


/***/ }),

/***/ "./node_modules/swr/esm/libs/throttle.js":
/*!***********************************************!*\
  !*** ./node_modules/swr/esm/libs/throttle.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return throttle; });
function throttle(fn, interval) {
    var pending = false;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (pending)
            return;
        pending = true;
        fn.apply(void 0, args);
        setTimeout(function () { return (pending = false); }, interval);
    };
}


/***/ }),

/***/ "./node_modules/swr/esm/swr-config-context.js":
/*!****************************************************!*\
  !*** ./node_modules/swr/esm/swr-config-context.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var SWRConfigContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});
SWRConfigContext.displayName = 'SWRConfigContext';
/* harmony default export */ __webpack_exports__["default"] = (SWRConfigContext);


/***/ }),

/***/ "./node_modules/swr/esm/use-swr-pages.js":
/*!***********************************************!*\
  !*** ./node_modules/swr/esm/use-swr-pages.js ***!
  \***********************************************/
/*! exports provided: useSWRPages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSWRPages", function() { return useSWRPages; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./node_modules/swr/esm/config.js");
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};


/*
The idea

A "Page" component renders the content of 1 API request, it accepts an offset (in this example it's from),
uses a SWR hook (useSWR(API + '?limit=' + limit + '&from=' + from)) and returns items (Projects).

The UI:
      +------------------------------------------+
      |   Projects                               |
+------------------------------------------------------+
|     |   +----------------+                     |     |
|     |                                          |     |
|     |   +------------+                         |     |
|     |                                          |     +--> 1 Page
|     |   +-----------------+                    |     |
|     |                                          |     |  /projects/list?limit=4
|     |   +---------+                            |     |
+------------------------------------------------------+
      |                                          |
      |   +------------+                         |     +  /projects/list?limit=4&from=123
      |                                          |     |
      |   +----------------+                     |     |
      |                                          |     |
      |   +---------+                            |     |
      |                                          |     |
      |   +--------------+                       |     +
      |                                          |
      |   +-------------------+                  |     +  /projects/list?limit=4&from=456
      |                                          |     |
      |   +------------+                         |     |
      |                                          |     |
      |   +----------------+                     |     |
      |                                          |     |
      |                                          |     +

The API
// (inside `render`)

function App () {
  const {
    pages,    // an array of each page component
    pageSWRs, // an array of SWRs of each page
    isLoadingMore,
    isReachingEnd,
    isEmpty,
    loadMore
  } = useSWRPages(
    'project-page', // key of this page

    // ======== the actual Page component!
    ({ offset, withSWR }) => {
      // required: use `withSWR` to wrap your main SWR (source of your pagination API)
      const { data } = withSWR(
        useSWR(API + '?limit=10&from=' + offset) // request projects with offset
      )
      if (!data) return <Placeholder>
      return data.projects.map(project => <Card project={project} team={team}>)
    },
    // ========

    // a function accepts a SWR's `data`, and returns the offset of the next page (or null)
    data => data && data.length >= 10 ? data[data.length - 1].createdAt : null,

    // (optional) outside deps of your Page component. in this case it's empty
    []
  )

  // ...

  if (isEmpty) return <EmptyProjectsPage/>

  return <div>
    {pages}
    {isReachingEnd
      ? null
      : <button loading={isLoadingMore} onClick={loadMore}>Load More</button>}
  </div>
}
*/
var pageCacheMap = new Map();
function useSWRPages(pageKey, pageFn, SWRToOffset, deps) {
    if (deps === void 0) { deps = []; }
    var pageCountKey = "_swr_page_count_" + pageKey;
    var pageOffsetKey = "_swr_page_offset_" + pageKey;
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(pageCountKey) || 1), pageCount = _a[0], setPageCount = _a[1];
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(pageOffsetKey) || [null]), pageOffsets = _b[0], setPageOffsets = _b[1];
    var _c = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]), pageSWRs = _c[0], setPageSWRs = _c[1];
    var pageFnRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(pageFn);
    var emptyPageRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    // Page component (wraps `pageFn`)
    // for performance reason we need to memorize it
    var Page = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (props) {
        // render the page component
        var dataList = pageFnRef.current(props);
        // if dataList is [], we can assume this page is empty
        // TODO: this API is not stable
        if (dataList && !dataList.length) {
            emptyPageRef.current = true;
        }
        else {
            emptyPageRef.current = false;
        }
        return dataList;
    }, []);
    // Doesn't have a next page
    var isReachingEnd = pageOffsets[pageCount] === null;
    var isLoadingMore = pageCount === pageOffsets.length;
    var isEmpty = isReachingEnd && pageCount === 1 && emptyPageRef.current;
    var loadMore = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        if (isLoadingMore || isReachingEnd)
            return;
        setPageCount(function (c) {
            _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(pageCountKey, c + 1);
            return c + 1;
        });
    }, [isLoadingMore || isReachingEnd]);
    var _pageFn = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(pageFn, deps);
    pageFnRef.current = _pageFn;
    var pages = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
        var getWithSWR = function (id) { return function (swr) {
            if (!pageSWRs[id] ||
                pageSWRs[id].data !== swr.data ||
                pageSWRs[id].error !== swr.error ||
                pageSWRs[id].revalidate !== swr.revalidate) {
                // hoist side effects: setPageSWRs and setPageOffsets -- https://reactjs.org/blog/2020/02/26/react-v16.13.0.html#warnings-for-some-updates-during-render
                setTimeout(function () {
                    setPageSWRs(function (swrs) {
                        var _swrs = __spreadArrays(swrs);
                        _swrs[id] = {
                            data: swr.data,
                            error: swr.error,
                            revalidate: swr.revalidate,
                            isValidating: swr.isValidating,
                            mutate: swr.mutate
                        };
                        return _swrs;
                    });
                    if (typeof swr.data !== 'undefined') {
                        // set next page's offset
                        var newPageOffset_1 = SWRToOffset(swr, id);
                        if (pageOffsets[id + 1] !== newPageOffset_1) {
                            setPageOffsets(function (arr) {
                                var _arr = __spreadArrays(arr);
                                _arr[id + 1] = newPageOffset_1;
                                _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(pageOffsetKey, _arr);
                                return _arr;
                            });
                        }
                    }
                });
            }
            return swr;
        }; };
        // render each page
        var p = [];
        if (!pageCacheMap.has(pageKey)) {
            pageCacheMap.set(pageKey, []);
        }
        var pageCache = pageCacheMap.get(pageKey);
        for (var i = 0; i < pageCount; ++i) {
            if (!pageCache[i] ||
                pageCache[i].offset !== pageOffsets[i] ||
                pageCache[i].pageFn !== _pageFn) {
                // when props change or at init
                // render the page and cache it
                pageCache[i] = {
                    component: (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Page, { key: "page-" + pageOffsets[i] + "-" + i, offset: pageOffsets[i], withSWR: getWithSWR(i) })),
                    pageFn: _pageFn,
                    offset: pageOffsets[i]
                };
            }
            p.push(pageCache[i].component);
        }
        return p;
    }, [_pageFn, pageCount, pageSWRs, pageOffsets, pageKey]);
    return {
        pages: pages,
        pageCount: pageCount,
        pageSWRs: pageSWRs,
        isLoadingMore: isLoadingMore,
        isReachingEnd: isReachingEnd,
        isEmpty: isEmpty,
        loadMore: loadMore
    };
}


/***/ }),

/***/ "./node_modules/swr/esm/use-swr.js":
/*!*****************************************!*\
  !*** ./node_modules/swr/esm/use-swr.js ***!
  \*****************************************/
/*! exports provided: trigger, mutate, SWRConfig, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trigger", function() { return trigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutate", function() { return mutate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SWRConfig", function() { return SWRConfig; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./node_modules/swr/esm/config.js");
/* harmony import */ var _libs_is_document_visible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs/is-document-visible */ "./node_modules/swr/esm/libs/is-document-visible.js");
/* harmony import */ var _libs_is_online__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./libs/is-online */ "./node_modules/swr/esm/libs/is-online.js");
/* harmony import */ var _libs_throttle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./libs/throttle */ "./node_modules/swr/esm/libs/throttle.js");
/* harmony import */ var _swr_config_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./swr-config-context */ "./node_modules/swr/esm/swr-config-context.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var IS_SERVER = typeof window === 'undefined';
// React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser.
var useIsomorphicLayoutEffect = IS_SERVER ? react__WEBPACK_IMPORTED_MODULE_0__["useEffect"] : react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"];
var trigger = function (_key, shouldRevalidate) {
    if (shouldRevalidate === void 0) { shouldRevalidate = true; }
    // we are ignoring the second argument which correspond to the arguments
    // the fetcher will receive when key is an array
    var _a = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].serializeKey(_key), key = _a[0], keyErr = _a[2];
    if (!key)
        return Promise.resolve();
    var updaters = _config__WEBPACK_IMPORTED_MODULE_1__["CACHE_REVALIDATORS"][key];
    if (key && updaters) {
        var currentData = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key);
        var currentError = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(keyErr);
        var promises = [];
        for (var i = 0; i < updaters.length; ++i) {
            promises.push(updaters[i](shouldRevalidate, currentData, currentError, i > 0));
        }
        // return new updated value
        return Promise.all(promises).then(function () { return _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key); });
    }
    return Promise.resolve(_config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key));
};
var broadcastState = function (key, data, error) {
    var updaters = _config__WEBPACK_IMPORTED_MODULE_1__["CACHE_REVALIDATORS"][key];
    if (key && updaters) {
        for (var i = 0; i < updaters.length; ++i) {
            updaters[i](false, data, error);
        }
    }
};
var mutate = function (_key, _data, shouldRevalidate) {
    if (shouldRevalidate === void 0) { shouldRevalidate = true; }
    return __awaiter(void 0, void 0, void 0, function () {
        var key, data, error, beforeMutationTs, beforeConcurrentPromisesTs, err_1, err_2, updaters, promises, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    key = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].serializeKey(_key)[0];
                    if (!key)
                        return [2 /*return*/];
                    // if there is no new data, call revalidate against the key
                    if (typeof _data === 'undefined')
                        return [2 /*return*/, trigger(_key, shouldRevalidate)
                            // update timestamp
                        ];
                    // update timestamp
                    _config__WEBPACK_IMPORTED_MODULE_1__["MUTATION_TS"][key] = Date.now() - 1;
                    beforeMutationTs = _config__WEBPACK_IMPORTED_MODULE_1__["MUTATION_TS"][key];
                    beforeConcurrentPromisesTs = _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES_TS"][key];
                    if (!(_data && typeof _data === 'function')) return [3 /*break*/, 5];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, _data(_config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key))];
                case 2:
                    data = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    error = err_1;
                    return [3 /*break*/, 4];
                case 4: return [3 /*break*/, 11];
                case 5:
                    if (!(_data && typeof _data.then === 'function')) return [3 /*break*/, 10];
                    _a.label = 6;
                case 6:
                    _a.trys.push([6, 8, , 9]);
                    return [4 /*yield*/, _data];
                case 7:
                    data = _a.sent();
                    return [3 /*break*/, 9];
                case 8:
                    err_2 = _a.sent();
                    error = err_2;
                    return [3 /*break*/, 9];
                case 9: return [3 /*break*/, 11];
                case 10:
                    data = _data;
                    _a.label = 11;
                case 11:
                    // Check if other mutations have occurred since we've started awaiting, if so then do not persist this change
                    if (beforeMutationTs !== _config__WEBPACK_IMPORTED_MODULE_1__["MUTATION_TS"][key] ||
                        beforeConcurrentPromisesTs !== _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES_TS"][key]) {
                        if (error)
                            throw error;
                        return [2 /*return*/, data];
                    }
                    if (typeof data !== 'undefined') {
                        // update cached data, avoid notifying from the cache
                        _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(key, data, false);
                    }
                    updaters = _config__WEBPACK_IMPORTED_MODULE_1__["CACHE_REVALIDATORS"][key];
                    if (updaters) {
                        promises = [];
                        for (i = 0; i < updaters.length; ++i) {
                            promises.push(updaters[i](!!shouldRevalidate, data, error, i > 0));
                        }
                        // return new updated value
                        return [2 /*return*/, Promise.all(promises).then(function () { return _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key); })];
                    }
                    // throw error or return data to be used by caller of mutate
                    if (error)
                        throw error;
                    return [2 /*return*/, data];
            }
        });
    });
};
function useSWR() {
    var _this = this;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var _key, fn, config = {};
    if (args.length >= 1) {
        _key = args[0];
    }
    if (args.length > 2) {
        fn = args[1];
        config = args[2];
    }
    else {
        if (typeof args[1] === 'function') {
            fn = args[1];
        }
        else if (typeof args[1] === 'object') {
            config = args[1];
        }
    }
    // we assume `key` as the identifier of the request
    // `key` can change but `fn` shouldn't
    // (because `revalidate` only depends on `key`)
    // `keyErr` is the cache key for error objects
    var _a = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].serializeKey(_key), key = _a[0], fnArgs = _a[1], keyErr = _a[2];
    config = Object.assign({}, _config__WEBPACK_IMPORTED_MODULE_1__["default"], Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_swr_config_context__WEBPACK_IMPORTED_MODULE_5__["default"]), config);
    if (typeof fn === 'undefined') {
        // use a global fetcher
        fn = config.fetcher;
    }
    var initialData = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key) || config.initialData;
    var initialError = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(keyErr);
    // if a state is accessed (data, error or isValidating),
    // we add the state to dependencies so if the state is
    // updated in the future, we can trigger a rerender
    var stateDependencies = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
        data: false,
        error: false,
        isValidating: false
    });
    var stateRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
        data: initialData,
        error: initialError,
        isValidating: false
    });
    var rerender = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null)[1];
    var dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (payload) {
        var shouldUpdateState = false;
        for (var k in payload) {
            stateRef.current[k] = payload[k];
            if (stateDependencies.current[k]) {
                shouldUpdateState = true;
            }
        }
        if (shouldUpdateState || config.suspense) {
            rerender({});
        }
    }, []);
    // error ref inside revalidate (is last request errored?)
    var unmountedRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    var keyRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(key);
    // do unmount check for callbacks
    var eventsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
        emit: function (event) {
            var params = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                params[_i - 1] = arguments[_i];
            }
            if (unmountedRef.current)
                return;
            config[event].apply(config, params);
        }
    });
    var boundMutate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (data, shouldRevalidate) {
        return mutate(key, data, shouldRevalidate);
    }, [key]);
    // start a revalidation
    var revalidate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (revalidateOpts) {
        if (revalidateOpts === void 0) { revalidateOpts = {}; }
        return __awaiter(_this, void 0, void 0, function () {
            var loading, shouldDeduping, newData, startAt, newState, err_3, retryCount;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!key || !fn)
                            return [2 /*return*/, false];
                        if (unmountedRef.current)
                            return [2 /*return*/, false];
                        revalidateOpts = Object.assign({ dedupe: false }, revalidateOpts);
                        loading = true;
                        shouldDeduping = typeof _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key] !== 'undefined' && revalidateOpts.dedupe;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        dispatch({
                            isValidating: true
                        });
                        newData = void 0;
                        startAt = void 0;
                        if (!shouldDeduping) return [3 /*break*/, 3];
                        // there's already an ongoing request,
                        // this one needs to be deduplicated.
                        startAt = _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES_TS"][key];
                        return [4 /*yield*/, _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key]];
                    case 2:
                        newData = _a.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        // if not deduping the request (hard revalidate) but
                        // there're other ongoing request(s) at the same time,
                        // we need to ignore the other result(s) to avoid
                        // possible race conditions:
                        // req1------------------>res1
                        //      req2-------->res2
                        // in that case, the second response should not be overridden
                        // by the first one.
                        if (_config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key]) {
                            // we can mark it as a mutation to ignore
                            // all requests which are fired before this one
                            _config__WEBPACK_IMPORTED_MODULE_1__["MUTATION_TS"][key] = Date.now() - 1;
                        }
                        // if no cache being rendered currently (it shows a blank page),
                        // we trigger the loading slow event.
                        if (config.loadingTimeout && !_config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key)) {
                            setTimeout(function () {
                                if (loading)
                                    eventsRef.current.emit('onLoadingSlow', key, config);
                            }, config.loadingTimeout);
                        }
                        if (fnArgs !== null) {
                            _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key] = fn.apply(void 0, fnArgs);
                        }
                        else {
                            _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key] = fn(key);
                        }
                        _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES_TS"][key] = startAt = Date.now();
                        return [4 /*yield*/, _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key]];
                    case 4:
                        newData = _a.sent();
                        setTimeout(function () {
                            delete _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key];
                            delete _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES_TS"][key];
                        }, config.dedupingInterval);
                        // trigger the success event,
                        // only do this for the original request.
                        eventsRef.current.emit('onSuccess', newData, key, config);
                        _a.label = 5;
                    case 5:
                        // if the revalidation happened earlier than the local mutation,
                        // we have to ignore the result because it could override.
                        // meanwhile, a new revalidation should be triggered by the mutation.
                        if (_config__WEBPACK_IMPORTED_MODULE_1__["MUTATION_TS"][key] && startAt <= _config__WEBPACK_IMPORTED_MODULE_1__["MUTATION_TS"][key]) {
                            dispatch({ isValidating: false });
                            return [2 /*return*/, false];
                        }
                        _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(key, newData, false);
                        _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(keyErr, undefined, false);
                        newState = {
                            isValidating: false
                        };
                        if (typeof stateRef.current.error !== 'undefined') {
                            // we don't have an error
                            newState.error = undefined;
                        }
                        if (!config.compare(stateRef.current.data, newData)) {
                            // deep compare to avoid extra re-render
                            // data changed
                            newState.data = newData;
                        }
                        // merge the new state
                        dispatch(newState);
                        if (!shouldDeduping) {
                            // also update other hooks
                            broadcastState(key, newData, undefined);
                        }
                        return [3 /*break*/, 7];
                    case 6:
                        err_3 = _a.sent();
                        delete _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key];
                        delete _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES_TS"][key];
                        _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(keyErr, err_3, false);
                        // get a new error
                        // don't use deep equal for errors
                        if (stateRef.current.error !== err_3) {
                            // we keep the stale data
                            dispatch({
                                isValidating: false,
                                error: err_3
                            });
                            if (!shouldDeduping) {
                                // also broadcast to update other hooks
                                broadcastState(key, undefined, err_3);
                            }
                        }
                        // events and retry
                        eventsRef.current.emit('onError', err_3, key, config);
                        if (config.shouldRetryOnError) {
                            retryCount = (revalidateOpts.retryCount || 0) + 1;
                            eventsRef.current.emit('onErrorRetry', err_3, key, config, revalidate, Object.assign({ dedupe: true }, revalidateOpts, { retryCount: retryCount }));
                        }
                        return [3 /*break*/, 7];
                    case 7:
                        loading = false;
                        return [2 /*return*/, true];
                }
            });
        });
    }, [key]);
    // mounted (client side rendering)
    useIsomorphicLayoutEffect(function () {
        if (!key)
            return undefined;
        // after `key` updates, we need to mark it as mounted
        unmountedRef.current = false;
        // after the component is mounted (hydrated),
        // we need to update the data from the cache
        // and trigger a revalidation
        var currentHookData = stateRef.current.data;
        var latestKeyedData = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key) || config.initialData;
        // update the state if the key changed (not the inital render) or cache updated
        if (keyRef.current !== key ||
            !config.compare(currentHookData, latestKeyedData)) {
            dispatch({ data: latestKeyedData });
            keyRef.current = key;
        }
        // revalidate with deduping
        var softRevalidate = function () { return revalidate({ dedupe: true }); };
        // trigger a revalidation
        if (config.revalidateOnMount ||
            (!config.initialData && config.revalidateOnMount === undefined)) {
            if (typeof latestKeyedData !== 'undefined' &&
                !IS_SERVER &&
                window['requestIdleCallback']) {
                // delay revalidate if there's cache
                // to not block the rendering
                window['requestIdleCallback'](softRevalidate);
            }
            else {
                softRevalidate();
            }
        }
        // whenever the window gets focused, revalidate
        var onFocus;
        if (config.revalidateOnFocus) {
            // throttle: avoid being called twice from both listeners
            // and tabs being switched quickly
            onFocus = Object(_libs_throttle__WEBPACK_IMPORTED_MODULE_4__["default"])(softRevalidate, config.focusThrottleInterval);
            if (!_config__WEBPACK_IMPORTED_MODULE_1__["FOCUS_REVALIDATORS"][key]) {
                _config__WEBPACK_IMPORTED_MODULE_1__["FOCUS_REVALIDATORS"][key] = [onFocus];
            }
            else {
                _config__WEBPACK_IMPORTED_MODULE_1__["FOCUS_REVALIDATORS"][key].push(onFocus);
            }
        }
        // register global cache update listener
        var onUpdate = function (shouldRevalidate, updatedData, updatedError, dedupe) {
            if (shouldRevalidate === void 0) { shouldRevalidate = true; }
            if (dedupe === void 0) { dedupe = true; }
            // update hook state
            var newState = {};
            var needUpdate = false;
            if (typeof updatedData !== 'undefined' &&
                !config.compare(stateRef.current.data, updatedData)) {
                newState.data = updatedData;
                needUpdate = true;
            }
            // always update error
            // because it can be `undefined`
            if (stateRef.current.error !== updatedError) {
                newState.error = updatedError;
                needUpdate = true;
            }
            if (needUpdate) {
                dispatch(newState);
            }
            if (shouldRevalidate) {
                if (dedupe) {
                    return softRevalidate();
                }
                else {
                    return revalidate();
                }
            }
            return false;
        };
        // add updater to listeners
        if (!_config__WEBPACK_IMPORTED_MODULE_1__["CACHE_REVALIDATORS"][key]) {
            _config__WEBPACK_IMPORTED_MODULE_1__["CACHE_REVALIDATORS"][key] = [onUpdate];
        }
        else {
            _config__WEBPACK_IMPORTED_MODULE_1__["CACHE_REVALIDATORS"][key].push(onUpdate);
        }
        // set up reconnecting when the browser regains network connection
        var reconnect = null;
        if (!IS_SERVER && window.addEventListener && config.revalidateOnReconnect) {
            window.addEventListener('online', (reconnect = softRevalidate));
        }
        return function () {
            // cleanup
            dispatch = function () { return null; };
            // mark it as unmounted
            unmountedRef.current = true;
            if (onFocus && _config__WEBPACK_IMPORTED_MODULE_1__["FOCUS_REVALIDATORS"][key]) {
                var revalidators = _config__WEBPACK_IMPORTED_MODULE_1__["FOCUS_REVALIDATORS"][key];
                var index = revalidators.indexOf(onFocus);
                if (index >= 0) {
                    // 10x faster than splice
                    // https://jsperf.com/array-remove-by-index
                    revalidators[index] = revalidators[revalidators.length - 1];
                    revalidators.pop();
                }
            }
            if (_config__WEBPACK_IMPORTED_MODULE_1__["CACHE_REVALIDATORS"][key]) {
                var revalidators = _config__WEBPACK_IMPORTED_MODULE_1__["CACHE_REVALIDATORS"][key];
                var index = revalidators.indexOf(onUpdate);
                if (index >= 0) {
                    revalidators[index] = revalidators[revalidators.length - 1];
                    revalidators.pop();
                }
            }
            if (!IS_SERVER && window.removeEventListener && reconnect !== null) {
                window.removeEventListener('online', reconnect);
            }
        };
    }, [key, revalidate]);
    // set up polling
    useIsomorphicLayoutEffect(function () {
        var timer = null;
        var tick = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(!stateRef.current.error &&
                            (config.refreshWhenHidden || Object(_libs_is_document_visible__WEBPACK_IMPORTED_MODULE_2__["default"])()) &&
                            (config.refreshWhenOffline || Object(_libs_is_online__WEBPACK_IMPORTED_MODULE_3__["default"])()))) return [3 /*break*/, 2];
                        // only revalidate when the page is visible
                        // if API request errored, we stop polling in this round
                        // and let the error retry function handle it
                        return [4 /*yield*/, revalidate({ dedupe: true })];
                    case 1:
                        // only revalidate when the page is visible
                        // if API request errored, we stop polling in this round
                        // and let the error retry function handle it
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (config.refreshInterval) {
                            timer = setTimeout(tick, config.refreshInterval);
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        if (config.refreshInterval) {
            timer = setTimeout(tick, config.refreshInterval);
        }
        return function () {
            if (timer)
                clearTimeout(timer);
        };
    }, [
        config.refreshInterval,
        config.refreshWhenHidden,
        config.refreshWhenOffline,
        revalidate
    ]);
    // suspense
    if (config.suspense) {
        // in suspense mode, we can't return empty state
        // (it should be suspended)
        // try to get data and error from cache
        var latestData = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key) || initialData;
        var latestError = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(keyErr) || initialError;
        if (typeof latestData === 'undefined' &&
            typeof latestError === 'undefined') {
            // need to start the request if it hasn't
            if (!_config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key]) {
                // trigger revalidate immediately
                // to get the promise
                revalidate();
            }
            if (_config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key] &&
                typeof _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key].then === 'function') {
                // if it is a promise
                throw _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key];
            }
            // it's a value, return it directly (override)
            latestData = _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key];
        }
        if (typeof latestData === 'undefined' && latestError) {
            // in suspense mode, throw error if there's no content
            throw latestError;
        }
        // return the latest data / error from cache
        // in case `key` has changed
        return {
            error: latestError,
            data: latestData,
            revalidate: revalidate,
            mutate: boundMutate,
            isValidating: stateRef.current.isValidating
        };
    }
    // define returned state
    // can be memorized since the state is a ref
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
        var state = { revalidate: revalidate, mutate: boundMutate };
        Object.defineProperties(state, {
            error: {
                // `key` might be changed in the upcoming hook re-render,
                // but the previous state will stay
                // so we need to match the latest key and data (fallback to `initialData`)
                get: function () {
                    stateDependencies.current.error = true;
                    return keyRef.current === key ? stateRef.current.error : initialError;
                },
                enumerable: true
            },
            data: {
                get: function () {
                    stateDependencies.current.data = true;
                    return keyRef.current === key ? stateRef.current.data : initialData;
                },
                enumerable: true
            },
            isValidating: {
                get: function () {
                    stateDependencies.current.isValidating = true;
                    return stateRef.current.isValidating;
                },
                enumerable: true
            }
        });
        return state;
    }, [revalidate]);
}
var SWRConfig = _swr_config_context__WEBPACK_IMPORTED_MODULE_5__["default"].Provider;

/* harmony default export */ __webpack_exports__["default"] = (useSWR);


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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/auth.js */ "./contexts/auth.js");
/* harmony import */ var _services_api_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api_get */ "./services/api_get.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\work\\xampp2020\\htdocs\\new_rabwa_project\\rabwa-coubon\\nexttt\\nextProect\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function Home() {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {//Router.push("/CompanysStatistics");
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
    "class": "fas fa-shield-alt color-iconn",
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
    "class": "fas fa-print color-iconn",
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
    "class": "fas fa-bullseye color-iconn",
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
    "class": "fas fa-eye color-iconn",
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

_s(Home, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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

/***/ "./services/api_get.js":
/*!*****************************!*\
  !*** ./services/api_get.js ***!
  \*****************************/
/*! exports provided: getCompany, getSponsors, GetFullCCAs, GetAllMandobes, GetC, CompanysStatistic, UserStatistics, GetApproveMandobes, GetApproveuserssM, GetApproveuserss, CompanysStatistics, getUserCards, GetMandobes, Getuserss2, GetMandobUsers, Getuserss, GetCouponsByBracnhCat, GetCouponBranches, GetUserMeta, GetCategories, GetCompanys, GetCategorysByCity, GetCouponsBySection, GetCouponsBybranch, GetCCAs, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCompany", function() { return getCompany; });
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
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _services_Api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/Api */ "./services/Api.js");
/* harmony import */ var _contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/auth.js */ "./contexts/auth.js");
var _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$(),
    _s4 = $RefreshSig$(),
    _s5 = $RefreshSig$(),
    _s6 = $RefreshSig$(),
    _s7 = $RefreshSig$(),
    _s8 = $RefreshSig$(),
    _s9 = $RefreshSig$(),
    _s10 = $RefreshSig$(),
    _s11 = $RefreshSig$(),
    _s12 = $RefreshSig$(),
    _s13 = $RefreshSig$(),
    _s14 = $RefreshSig$(),
    _s15 = $RefreshSig$(),
    _s16 = $RefreshSig$(),
    _s17 = $RefreshSig$(),
    _s18 = $RefreshSig$(),
    _s19 = $RefreshSig$(),
    _s20 = $RefreshSig$(),
    _s21 = $RefreshSig$(),
    _s22 = $RefreshSig$(),
    _s23 = $RefreshSig$(),
    _s24 = $RefreshSig$(),
    _s25 = $RefreshSig$();





function api_get() {// const [tests, settests] = useState();
  // const [showSkeleton, setshowSkeleton] = useState();
}

function getCompany(name) {
  _s();

  var _useAuth = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      loading = _useAuth.loading;

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_0__["default"])(loading ? false : "rabwa/getCompany?name=" + name, _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get),
      data = _useSWR.data,
      error = _useSWR.error;

  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  };
}

_s(getCompany, "ZvmeGs4BfLhD87dJte2vrR1KKu4=", false, function () {
  return [_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"], swr__WEBPACK_IMPORTED_MODULE_0__["default"]];
});

function getSponsors(phone, getType) {
  _s2();

  var _useAuth2 = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      loading = _useAuth2.loading;

  var _useSWR2 = Object(swr__WEBPACK_IMPORTED_MODULE_0__["default"])(loading ? false : "rabwa/getSponsors?phone=" + phone + "&getType=" + getType, _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get),
      data = _useSWR2.data,
      error = _useSWR2.error;

  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  };
}

_s2(getSponsors, "ZvmeGs4BfLhD87dJte2vrR1KKu4=", false, function () {
  return [_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"], swr__WEBPACK_IMPORTED_MODULE_0__["default"]];
});

function GetFullCCAs(pageup) {
  _s3();

  var _useAuth3 = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      loading = _useAuth3.loading;

  var _useSWR3 = Object(swr__WEBPACK_IMPORTED_MODULE_0__["default"])(loading ? false : "rabwa/GetFullCCAs?pageup=" + pageup, _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get),
      data = _useSWR3.data,
      error = _useSWR3.error;

  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  };
}

_s3(GetFullCCAs, "ZvmeGs4BfLhD87dJte2vrR1KKu4=", false, function () {
  return [_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"], swr__WEBPACK_IMPORTED_MODULE_0__["default"]];
});

_c = GetFullCCAs;
function GetAllMandobes() {
  _s4();

  var _useAuth4 = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      loading = _useAuth4.loading;

  var _useSWR4 = Object(swr__WEBPACK_IMPORTED_MODULE_0__["default"])(loading ? false : "rabwa/GetAllMandobes", _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get),
      data = _useSWR4.data,
      error = _useSWR4.error;

  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  };
}

_s4(GetAllMandobes, "ZvmeGs4BfLhD87dJte2vrR1KKu4=", false, function () {
  return [_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"], swr__WEBPACK_IMPORTED_MODULE_0__["default"]];
});

_c2 = GetAllMandobes;
function GetC() {
  _s5();

  var _useAuth5 = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      loading = _useAuth5.loading;

  var _useSWR5 = Object(swr__WEBPACK_IMPORTED_MODULE_0__["default"])(loading ? false : "rabwa/GetC", _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get),
      data = _useSWR5.data,
      error = _useSWR5.error;

  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  };
}

_s5(GetC, "ZvmeGs4BfLhD87dJte2vrR1KKu4=", false, function () {
  return [_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"], swr__WEBPACK_IMPORTED_MODULE_0__["default"]];
});

_c3 = GetC;
function CompanysStatistic(name) {
  _s6();

  var _useAuth6 = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      loading = _useAuth6.loading;

  var _useSWR6 = Object(swr__WEBPACK_IMPORTED_MODULE_0__["default"])(loading ? false : "rabwa/CompanysStatistic?name=" + name, _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get),
      data = _useSWR6.data,
      error = _useSWR6.error;

  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  };
}

_s6(CompanysStatistic, "ZvmeGs4BfLhD87dJte2vrR1KKu4=", false, function () {
  return [_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"], swr__WEBPACK_IMPORTED_MODULE_0__["default"]];
});

_c4 = CompanysStatistic;
function UserStatistics(user_id) {
  _s7();

  var _useAuth7 = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      loading = _useAuth7.loading;

  var _useSWR7 = Object(swr__WEBPACK_IMPORTED_MODULE_0__["default"])(loading ? false : "rabwa/UserStatistics?user_id=" + user_id, _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get),
      data = _useSWR7.data,
      error = _useSWR7.error;

  return {
    UserStatisticsData: data,
    UserStatisticserrorisLoading: !error && !data,
    UserStatisticserrorisError: error
  };
}

_s7(UserStatistics, "ZvmeGs4BfLhD87dJte2vrR1KKu4=", false, function () {
  return [_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"], swr__WEBPACK_IMPORTED_MODULE_0__["default"]];
});

_c5 = UserStatistics;
function GetApproveMandobes() {
  _s8();

  var _useAuth8 = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      loading = _useAuth8.loading;

  var _useSWR8 = Object(swr__WEBPACK_IMPORTED_MODULE_0__["default"])(loading ? false : "rabwa/GetApproveMandobes", _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get),
      data = _useSWR8.data,
      error = _useSWR8.error;

  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  };
}

_s8(GetApproveMandobes, "ZvmeGs4BfLhD87dJte2vrR1KKu4=", false, function () {
  return [_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"], swr__WEBPACK_IMPORTED_MODULE_0__["default"]];
});

_c6 = GetApproveMandobes;
function GetApproveuserssM() {
  _s9();

  var _useAuth9 = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      loading = _useAuth9.loading;

  var _useSWR9 = Object(swr__WEBPACK_IMPORTED_MODULE_0__["default"])(loading ? false : "rabwa/GetApproveuserssM", _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get),
      data = _useSWR9.data,
      error = _useSWR9.error;

  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  };
}

_s9(GetApproveuserssM, "ZvmeGs4BfLhD87dJte2vrR1KKu4=", false, function () {
  return [_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"], swr__WEBPACK_IMPORTED_MODULE_0__["default"]];
});

_c7 = GetApproveuserssM;
function GetApproveuserss() {
  _s10();

  var _useAuth10 = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      loading = _useAuth10.loading;

  var _useSWR10 = Object(swr__WEBPACK_IMPORTED_MODULE_0__["default"])(loading ? false : "rabwa/GetApproveuserss", _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get),
      data = _useSWR10.data,
      error = _useSWR10.error;

  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  };
}

_s10(GetApproveuserss, "ZvmeGs4BfLhD87dJte2vrR1KKu4=", false, function () {
  return [_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"], swr__WEBPACK_IMPORTED_MODULE_0__["default"]];
});

_c8 = GetApproveuserss;
function CompanysStatistics() {
  _s11();

  var _useAuth11 = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      loading = _useAuth11.loading;

  var _useSWR11 = Object(swr__WEBPACK_IMPORTED_MODULE_0__["default"])(loading ? false : "rabwa/CompanysStatistics", _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get),
      data = _useSWR11.data,
      error = _useSWR11.error;

  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  };
}

_s11(CompanysStatistics, "ZvmeGs4BfLhD87dJte2vrR1KKu4=", false, function () {
  return [_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"], swr__WEBPACK_IMPORTED_MODULE_0__["default"]];
});

_c9 = CompanysStatistics;
function getUserCards(user_id) {
  _s12();

  var _useAuth12 = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      loading = _useAuth12.loading;

  var _useSWR12 = Object(swr__WEBPACK_IMPORTED_MODULE_0__["default"])(loading ? false : "rabwa/getUserCards?user_id=" + user_id, _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get),
      data = _useSWR12.data,
      error = _useSWR12.error;

  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  };
}

_s12(getUserCards, "ZvmeGs4BfLhD87dJte2vrR1KKu4=", false, function () {
  return [_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"], swr__WEBPACK_IMPORTED_MODULE_0__["default"]];
});

function GetMandobes(request, name, page, Scity, Saera, RsName, RsPhone) {
  _s13();

  if (request == "firstTime") {
    var _useAuth13 = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
        loading = _useAuth13.loading;

    var _useSWR13 = Object(swr__WEBPACK_IMPORTED_MODULE_0__["default"])(loading ? false : "rabwa/GetMandobes", _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get),
        data = _useSWR13.data,
        error = _useSWR13.error;

    return {
      data: data,
      isLoading: !error && !data,
      isError: error
    };
  } else if (request == "custom") {
    var _useAuth14 = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
        _loading = _useAuth14.loading;

    var _useSWR14 = Object(swr__WEBPACK_IMPORTED_MODULE_0__["default"])(_loading ? false : "rabwa/OrderGetMandobes?page=" + page + "&name=" + name + "&Scity=" + Scity + "&Saera=" + Saera + "&RsName=" + RsName + "&RsPhone=" + RsPhone, _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get),
        _data = _useSWR14.data,
        _error = _useSWR14.error;

    return {
      data: _data,
      isLoading: !_error && !_data,
      isError: _error
    };
  }
}

_s13(GetMandobes, "XvfQN/H0kRjLRYre9EV2Le2GKx4=", false, function () {
  return [_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"], swr__WEBPACK_IMPORTED_MODULE_0__["default"], _contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"], swr__WEBPACK_IMPORTED_MODULE_0__["default"]];
});

_c10 = GetMandobes;
function Getuserss2(request, name, members, last_coubon, total_coubons, piority, page, Scity, Saera, Scat, RsName, RsPhone) {
  _s14();

  if (request == "firstTime") {
    var _useAuth15 = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
        loading = _useAuth15.loading;

    var _useSWR15 = Object(swr__WEBPACK_IMPORTED_MODULE_0__["default"])(loading ? false : "rabwa/Getuserss2", _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get),
        data = _useSWR15.data,
        error = _useSWR15.error;

    return {
      data: data,
      isLoading: !error && !data,
      isError: error
    };
  } else if (request == "custom") {
    var _useAuth16 = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
        _loading2 = _useAuth16.loading;

    var _useSWR16 = Object(swr__WEBPACK_IMPORTED_MODULE_0__["default"])(_loading2 ? false : "rabwa/OrderGetuserss2?page=" + page + "&name=" + name + "&members=" + members + "&last_coubon=" + last_coubon + "&total_coubons=" + total_coubons + "&Scity=" + Scity + "&Saera=" + Saera + "&Scat=" + Scat + "&piority=" + piority + "&RsName=" + RsName + "&RsPhone=" + RsPhone, _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get),
        _data2 = _useSWR16.data,
        _error2 = _useSWR16.error;

    return {
      data: _data2,
      isLoading: !_error2 && !_data2,
      isError: _error2
    };
  }
}

_s14(Getuserss2, "XvfQN/H0kRjLRYre9EV2Le2GKx4=", false, function () {
  return [_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"], swr__WEBPACK_IMPORTED_MODULE_0__["default"], _contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"], swr__WEBPACK_IMPORTED_MODULE_0__["default"]];
});

_c11 = Getuserss2;
function GetMandobUsers(request, name, members, last_coubon, total_coubons, piority, page, Scity, Saera, Scat, RsName, RsPhone, mandobe_id) {
  _s15();

  if (request == "firstTime") {
    var _useAuth17 = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
        loading = _useAuth17.loading;

    var _useSWR17 = Object(swr__WEBPACK_IMPORTED_MODULE_0__["default"])(loading ? false : "rabwa/GetMandobUsers?mandobe_id=" + mandobe_id, _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get),
        data = _useSWR17.data,
        error = _useSWR17.error;

    return {
      data: data,
      isLoading: !error && !data,
      isError: error
    };
  } else if (request == "custom") {
    var _useAuth18 = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
        _loading3 = _useAuth18.loading;

    var _useSWR18 = Object(swr__WEBPACK_IMPORTED_MODULE_0__["default"])(_loading3 ? false : "rabwa/OrderGetMandobUsers?page=" + page + "&name=" + name + "&members=" + members + "&last_coubon=" + last_coubon + "&total_coubons=" + total_coubons + "&Scity=" + Scity + "&Saera=" + Saera + "&Scat=" + Scat + "&piority=" + piority + "&RsName=" + RsName + "&RsPhone=" + RsPhone + "&mandobe_id=" + mandobe_id, _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get),
        _data3 = _useSWR18.data,
        _error3 = _useSWR18.error;

    return {
      data: _data3,
      isLoading: !_error3 && !_data3,
      isError: _error3
    };
  }
}

_s15(GetMandobUsers, "XvfQN/H0kRjLRYre9EV2Le2GKx4=", false, function () {
  return [_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"], swr__WEBPACK_IMPORTED_MODULE_0__["default"], _contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"], swr__WEBPACK_IMPORTED_MODULE_0__["default"]];
});

_c12 = GetMandobUsers;
function Getuserss(request, name, members, last_coubon, total_coubons, piority, page, Scity, Saera, Scat, RsName, RsPhone, hide) {
  _s16();

  if (request == "firstTime") {
    var _useAuth19 = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
        loading = _useAuth19.loading;

    var _useSWR19 = Object(swr__WEBPACK_IMPORTED_MODULE_0__["default"])(loading ? false : "rabwa/Getuserss", _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get),
        data = _useSWR19.data,
        error = _useSWR19.error;

    return {
      data: data,
      isLoading: !error && !data,
      isError: error
    };
  } else if (request == "custom") {
    var _useAuth20 = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
        _loading4 = _useAuth20.loading;

    var _useSWR20 = Object(swr__WEBPACK_IMPORTED_MODULE_0__["default"])(_loading4 ? false : "rabwa/OrderGetuserss?page=" + page + "&name=" + name + "&members=" + members + "&last_coubon=" + last_coubon + "&total_coubons=" + total_coubons + "&Scity=" + Scity + "&Saera=" + Saera + "&Scat=" + Scat + "&piority=" + piority + "&RsName=" + RsName + "&RsPhone=" + RsPhone + "&hide=" + hide, _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get),
        _data4 = _useSWR20.data,
        _error4 = _useSWR20.error;

    return {
      data: _data4,
      isLoading: !_error4 && !_data4,
      isError: _error4
    };
  }
}

_s16(Getuserss, "XvfQN/H0kRjLRYre9EV2Le2GKx4=", false, function () {
  return [_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"], swr__WEBPACK_IMPORTED_MODULE_0__["default"], _contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"], swr__WEBPACK_IMPORTED_MODULE_0__["default"]];
});

_c13 = Getuserss;
function GetCouponsByBracnhCat(Branchid, Categoryid) {
  _s17();

  var _useAuth21 = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      loading = _useAuth21.loading;

  var _useSWR21 = Object(swr__WEBPACK_IMPORTED_MODULE_0__["default"])(loading ? false : "rabwa/GetCouponsByBracnhCat?Branchid=" + Branchid + "&Categoryid=" + Categoryid, _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get),
      data = _useSWR21.data,
      error = _useSWR21.error;

  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  };
}

_s17(GetCouponsByBracnhCat, "ZvmeGs4BfLhD87dJte2vrR1KKu4=", false, function () {
  return [_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"], swr__WEBPACK_IMPORTED_MODULE_0__["default"]];
});

_c14 = GetCouponsByBracnhCat;
function GetCouponBranches(Section_id) {
  _s18();

  var _useAuth22 = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      loading = _useAuth22.loading;

  var _useSWR22 = Object(swr__WEBPACK_IMPORTED_MODULE_0__["default"])(loading ? false : "rabwa/GetCouponBranches?Section_id=" + Section_id, _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get),
      data = _useSWR22.data,
      error = _useSWR22.error;

  return {
    CouponBranches: data,
    CouponBranchesisLoading: !error && !data,
    CouponBranchesisError: error
  };
}

_s18(GetCouponBranches, "ZvmeGs4BfLhD87dJte2vrR1KKu4=", false, function () {
  return [_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"], swr__WEBPACK_IMPORTED_MODULE_0__["default"]];
});

_c15 = GetCouponBranches;
function GetUserMeta(TheUser_id) {
  _s19();

  var _useAuth23 = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      loading = _useAuth23.loading;

  var _useSWR23 = Object(swr__WEBPACK_IMPORTED_MODULE_0__["default"])(loading ? false : "rabwa/GetUserMeta?TheUser_id=" + TheUser_id, _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get),
      data = _useSWR23.data,
      error = _useSWR23.error;

  return {
    UserMeta: data,
    UserMetaisLoading: !error && !data,
    UserMetaisError: error
  };
}

_s19(GetUserMeta, "ZvmeGs4BfLhD87dJte2vrR1KKu4=", false, function () {
  return [_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"], swr__WEBPACK_IMPORTED_MODULE_0__["default"]];
});

_c16 = GetUserMeta;
function GetCategories() {
  _s20();

  var _useAuth24 = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      loading = _useAuth24.loading;

  var _useSWR24 = Object(swr__WEBPACK_IMPORTED_MODULE_0__["default"])(loading ? false : "rabwa/GetCategories", _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get),
      data = _useSWR24.data,
      error = _useSWR24.error;

  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  };
}

_s20(GetCategories, "ZvmeGs4BfLhD87dJte2vrR1KKu4=", false, function () {
  return [_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"], swr__WEBPACK_IMPORTED_MODULE_0__["default"]];
});

_c17 = GetCategories;
function GetCompanys() {
  _s21();

  var _useAuth25 = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      loading = _useAuth25.loading;

  var _useSWR25 = Object(swr__WEBPACK_IMPORTED_MODULE_0__["default"])(loading ? false : "rabwa/GetCompanys", _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get),
      data = _useSWR25.data,
      error = _useSWR25.error;

  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  };
}

_s21(GetCompanys, "ZvmeGs4BfLhD87dJte2vrR1KKu4=", false, function () {
  return [_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"], swr__WEBPACK_IMPORTED_MODULE_0__["default"]];
});

_c18 = GetCompanys;
function GetCategorysByCity(city) {
  _s22();

  var _useAuth26 = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      loading = _useAuth26.loading;

  var _useSWR26 = Object(swr__WEBPACK_IMPORTED_MODULE_0__["default"])(loading ? false : "rabwa/GetCategorysByCity?city=" + city, _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get),
      data = _useSWR26.data,
      error = _useSWR26.error;

  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  };
}

_s22(GetCategorysByCity, "ZvmeGs4BfLhD87dJte2vrR1KKu4=", false, function () {
  return [_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"], swr__WEBPACK_IMPORTED_MODULE_0__["default"]];
});

_c19 = GetCategorysByCity;
function GetCouponsBySection(section_id) {
  _s23();

  var _useAuth27 = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      loading = _useAuth27.loading;

  var _useSWR27 = Object(swr__WEBPACK_IMPORTED_MODULE_0__["default"])(loading ? false : "rabwa/GetCouponsBySection?section_id=" + section_id, _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get),
      data = _useSWR27.data,
      error = _useSWR27.error;

  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  };
}

_s23(GetCouponsBySection, "ZvmeGs4BfLhD87dJte2vrR1KKu4=", false, function () {
  return [_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"], swr__WEBPACK_IMPORTED_MODULE_0__["default"]];
});

_c20 = GetCouponsBySection;
function GetCouponsBybranch(Id, getType) {
  _s24();

  var _useAuth28 = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      loading = _useAuth28.loading;

  var _useSWR28 = Object(swr__WEBPACK_IMPORTED_MODULE_0__["default"])(loading ? false : "rabwa/GetCouponsBybranch?Id=" + Id + "&getType=" + getType, _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get),
      data = _useSWR28.data,
      error = _useSWR28.error;

  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  };
}

_s24(GetCouponsBybranch, "ZvmeGs4BfLhD87dJte2vrR1KKu4=", false, function () {
  return [_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"], swr__WEBPACK_IMPORTED_MODULE_0__["default"]];
});

_c21 = GetCouponsBybranch;
function GetCCAs() {
  _s25();

  var _useAuth29 = Object(_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      loading = _useAuth29.loading;

  var _useSWR29 = Object(swr__WEBPACK_IMPORTED_MODULE_0__["default"])(loading ? false : "rabwa/GetCCAs", _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].get),
      data = _useSWR29.data,
      error = _useSWR29.error;

  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  };
}

_s25(GetCCAs, "ZvmeGs4BfLhD87dJte2vrR1KKu4=", false, function () {
  return [_contexts_auth_js__WEBPACK_IMPORTED_MODULE_2__["default"], swr__WEBPACK_IMPORTED_MODULE_0__["default"]];
});

_c22 = GetCCAs;
/* harmony default export */ __webpack_exports__["default"] = (api_get);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22;

$RefreshReg$(_c, "GetFullCCAs");
$RefreshReg$(_c2, "GetAllMandobes");
$RefreshReg$(_c3, "GetC");
$RefreshReg$(_c4, "CompanysStatistic");
$RefreshReg$(_c5, "UserStatistics");
$RefreshReg$(_c6, "GetApproveMandobes");
$RefreshReg$(_c7, "GetApproveuserssM");
$RefreshReg$(_c8, "GetApproveuserss");
$RefreshReg$(_c9, "CompanysStatistics");
$RefreshReg$(_c10, "GetMandobes");
$RefreshReg$(_c11, "Getuserss2");
$RefreshReg$(_c12, "GetMandobUsers");
$RefreshReg$(_c13, "Getuserss");
$RefreshReg$(_c14, "GetCouponsByBracnhCat");
$RefreshReg$(_c15, "GetCouponBranches");
$RefreshReg$(_c16, "GetUserMeta");
$RefreshReg$(_c17, "GetCategories");
$RefreshReg$(_c18, "GetCompanys");
$RefreshReg$(_c19, "GetCategorysByCity");
$RefreshReg$(_c20, "GetCouponsBySection");
$RefreshReg$(_c21, "GetCouponsBybranch");
$RefreshReg$(_c22, "GetCCAs");

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

/***/ 1:
/*!*****************************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=D%3A%5Cwork%5Cxampp2020%5Chtdocs%5Cnew_rabwa_project%5Crabwa-coubon%5Cnexttt%5CnextProect%5Cpages%5Cindex.js ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=D%3A%5Cwork%5Cxampp2020%5Chtdocs%5Cnew_rabwa_project%5Crabwa-coubon%5Cnexttt%5CnextProect%5Cpages%5Cindex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=D%3A%5Cwork%5Cxampp2020%5Chtdocs%5Cnew_rabwa_project%5Crabwa-coubon%5Cnexttt%5CnextProect%5Cpages%5Cindex.js!./");


/***/ }),

/***/ "dll-reference dll_a0ea8196e869b9b4425e":
/*!*******************************************!*\
  !*** external "dll_a0ea8196e869b9b4425e" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_a0ea8196e869b9b4425e;

/***/ })

},[[1,"static/runtime/webpack.js"]]]);