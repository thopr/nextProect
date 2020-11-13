webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/auth */ "./contexts/auth.js");
/* harmony import */ var react_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-alert */ "./node_modules/react-alert/dist/esm/react-alert.js");
/* harmony import */ var react_alert_template_basic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-alert-template-basic */ "./node_modules/react-alert-template-basic/dist/esm/react-alert-template-basic.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "D:\\work\\xampp2020\\htdocs\\new_rabwa_project\\rabwa-coubon\\nexttt\\nextProect\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




/*import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/css/argon.css?v=1.2.0";
import "./assets/css/bootstrap/bootstrap-rtl.css";
import "./assets/css/bootstrap-select.min.css";*/

function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  var options = {
    // you can also just use 'bottom center'
    position: react_alert__WEBPACK_IMPORTED_MODULE_3__["positions"].BOTTOM_CENTER,
    timeout: 5000,
    // offset: "5px",
    // you can also just use 'scale'
    transition: react_alert__WEBPACK_IMPORTED_MODULE_3__["transitions"].SCALE
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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("link", {
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
  }), __jsx(_contexts_auth__WEBPACK_IMPORTED_MODULE_2__["AuthProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, __jsx(react_alert__WEBPACK_IMPORTED_MODULE_3__["Provider"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    template: react_alert_template_basic__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, options, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }), __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  })))));
}

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIl0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwib3B0aW9ucyIsInBvc2l0aW9uIiwicG9zaXRpb25zIiwiQk9UVE9NX0NFTlRFUiIsInRpbWVvdXQiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJTQ0FMRSIsIkFsZXJ0VGVtcGxhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUEsU0FBU0EsS0FBVCxPQUF5QztBQUFBLE1BQXhCQyxTQUF3QixRQUF4QkEsU0FBd0I7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7QUFDdkMsTUFBTUMsT0FBTyxHQUFHO0FBQ2Q7QUFDQUMsWUFBUSxFQUFFQyxxREFBUyxDQUFDQyxhQUZOO0FBR2RDLFdBQU8sRUFBRSxJQUhLO0FBSWQ7QUFDQTtBQUNBQyxjQUFVLEVBQUVDLHVEQUFXLENBQUNDO0FBTlYsR0FBaEI7QUFTQTs7Ozs7Ozs7Ozs7Ozs7O0FBZUEsU0FDRSxtRUFHRTtBQUFNLE9BQUcsRUFBQyxZQUFWO0FBQXVCLFFBQUksRUFBQyxVQUE1QjtBQUF1QyxRQUFJLEVBQUMsdUJBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixFQUlFO0FBQ0UsT0FBRyxFQUFDLFlBRE47QUFFRSxRQUFJLEVBQUMsVUFGUDtBQUdFLFFBQUksRUFBQyxzQ0FIUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFVRTtBQUNFLE9BQUcsRUFBQyxZQUROO0FBRUUsUUFBSSxFQUFDLFVBRlA7QUFHRSxRQUFJLEVBQUMsOERBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLEVBZUU7QUFDRSxPQUFHLEVBQUMsWUFETjtBQUVFLFFBQUksRUFBQyxVQUZQO0FBR0UsUUFBSSxFQUFDLHlDQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFmRixFQXFCRTtBQUNFLE9BQUcsRUFBQyw2Q0FETjtBQUVFLGFBQVMsRUFBQyxxREFGWjtBQUdFLGVBQVcsRUFBQyxXQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFyQkYsRUEyQkU7QUFBUSxPQUFHLEVBQUMsMERBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTNCRixFQTZCRTtBQUFRLE9BQUcsRUFBQyw2QkFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBN0JGLEVBOEJFO0FBQVEsT0FBRyxFQUFDLDRCQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE5QkYsRUErQkUsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBMEJFLE1BQUMsb0RBQUQ7QUFBZSxZQUFRLEVBQUVDLGtFQUFhQTtBQUF0QyxLQUE0Q1IsT0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUNFLE1BQUMsU0FBRCx5RkFBZUQsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREYsQ0ExQkYsQ0EvQkYsQ0FERjtBQWdFRDs7S0F6RlFGLEs7QUEyRk1BLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLjUzZTM2MWZiN2RlMDc1ZTNmMDUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dHMvYXV0aFwiO1xyXG5pbXBvcnQgeyB0cmFuc2l0aW9ucywgcG9zaXRpb25zLCBQcm92aWRlciBhcyBBbGVydFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LWFsZXJ0XCI7XHJcbmltcG9ydCBBbGVydFRlbXBsYXRlIGZyb20gXCJyZWFjdC1hbGVydC10ZW1wbGF0ZS1iYXNpY1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG4vKmltcG9ydCBcIi4vYXNzZXRzL3ZlbmRvci9udWNsZW8vY3NzL251Y2xlby5jc3NcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvdmVuZG9yL0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzc1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvYXJnb24uY3NzP3Y9MS4yLjBcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvY3NzL2Jvb3RzdHJhcC9ib290c3RyYXAtcnRsLmNzc1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9jc3MvYm9vdHN0cmFwLXNlbGVjdC5taW4uY3NzXCI7Ki9cclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAvLyB5b3UgY2FuIGFsc28ganVzdCB1c2UgJ2JvdHRvbSBjZW50ZXInXHJcbiAgICBwb3NpdGlvbjogcG9zaXRpb25zLkJPVFRPTV9DRU5URVIsXHJcbiAgICB0aW1lb3V0OiA1MDAwLFxyXG4gICAgLy8gb2Zmc2V0OiBcIjVweFwiLFxyXG4gICAgLy8geW91IGNhbiBhbHNvIGp1c3QgdXNlICdzY2FsZSdcclxuICAgIHRyYW5zaXRpb246IHRyYW5zaXRpb25zLlNDQUxFLFxyXG4gIH07XHJcblxyXG4gIC8qXHJcbiAgIGFsZXJ0LnNob3coXCLYsdmC2YUg2KfZhNis2YjYp9mEINmF2LPYqtiu2K/ZhSDZhdiz2KjZgtinXCIsIHtcclxuICAgICB0aW1lb3V0OiAyMDAwLFxyXG4gICAgIHR5cGU6IFwic3VjY2Vzc1wiLFxyXG4gICAgIHR5cGU6IFwiaW5mb1wiLFxyXG4gICAgIHR5cGU6IFwiZXJyb3JcIixcclxuXHJcbiAgICAgIFxyXG4gICAgIG9uT3BlbjogKCkgPT4ge1xyXG4gICAgICAgY29uc29sZS5sb2coXCJoZXlcIik7XHJcbiAgICAgfSwgLy8gY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIGFmdGVyIHRoaXMgYWxlcnQgb3BlblxyXG4gICAgIG9uQ2xvc2U6ICgpID0+IHtcclxuICAgICAgIGNvbnNvbGUubG9nKFwiY2xvc2VkXCIpO1xyXG4gICAgIH0sXHJcbiAgIH0pOyovXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcblxyXG5cclxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIvYXNzZXRzL2Nzcy9hcmdvbi5jc3NcIiAvPlxyXG4gICAgICA8bGlua1xyXG4gICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0L2Nzc1wiXHJcbiAgICAgICAgaHJlZj1cIi9hc3NldHMvdmVuZG9yL251Y2xlby9jc3MvbnVjbGVvLmNzc1wiXHJcbiAgICAgIC8+XHJcbiAgICAgXHJcbiAgICAgIDxsaW5rXHJcbiAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcclxuICAgICAgICBocmVmPVwiL2Fzc2V0cy92ZW5kb3IvQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2FsbC5taW4uY3NzXCJcclxuICAgICAgLz5cclxuICAgICAgPGxpbmtcclxuICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxyXG4gICAgICAgIGhyZWY9XCIvYXNzZXRzL2Nzcy9ib290c3RyYXAvYm9vdHN0cmFwLXJ0bC5jc3NcIlxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPHNjcmlwdFxyXG4gICAgICAgIHNyYz1cImh0dHBzOi8vY29kZS5qcXVlcnkuY29tL2pxdWVyeS0zLjUuMS5taW4uanNcIlxyXG4gICAgICAgIGludGVncml0eT1cInNoYTI1Ni05L2FsaVU4ZEdkMnRiNk9Tc3V6aXhlVjR5L2ZhVHFnRnRvaGV0cGhiYmowPVwiXHJcbiAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICA+PC9zY3JpcHQ+XHJcblxyXG4gICAgICA8c2NyaXB0IHNyYz1cIi9hc3NldHMvdmVuZG9yL2Jvb3RzdHJhcC9kaXN0L2pzL2Jvb3RzdHJhcC5idW5kbGUubWluLmpzXCI+PC9zY3JpcHQ+XHJcblxyXG4gICAgICA8c2NyaXB0IHNyYz1cIi9hc3NldHMvanMvYXJnb24uanM/dj0xLjIuMFwiPjwvc2NyaXB0PlxyXG4gICAgICA8c2NyaXB0IHNyYz1cIi9hc3NldHMvZm9udGF3ZXNvbWUtYWxsLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgIDxBdXRoUHJvdmlkZXI+XHJcbiAgICAgICAgey8qXHJcblxyXG4gICAgICAgIFxyXG4gICAgXHJcbiAgICBcclxuXHJcbiAgIFxyXG5cclxuICAgICBcclxuICAgXHJcbiAgICAgIDxzY3JpcHQgc3JjPVwiL2Fzc2V0cy92ZW5kb3IvanMtY29va2llL2pzY29va2llLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgIDxzY3JpcHQgc3JjPVwiL2Fzc2V0cy92ZW5kb3IvanF1ZXJ5LnNjcm9sbGJhci9qcXVlcnkuc2Nyb2xsYmFyLm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICA8c2NyaXB0IHNyYz1cIi9hc3NldHMvdmVuZG9yL2NoYXJ0LmpzL2Rpc3QvQ2hhcnQubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgIDxzY3JpcHQgc3JjPVwiL2Fzc2V0cy92ZW5kb3IvY2hhcnQuanMvZGlzdC9DaGFydC5leHRlbnNpb24uanNcIj48L3NjcmlwdD5cclxuICAgICAgPHNjcmlwdCBzcmM9XCIvYXNzZXRzL2pzL2NvbXBvbmVudHMvY2hhcnRzL2NoYXJ0LWJhcnMuanNcIj48L3NjcmlwdD5cclxuICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcC1zZWxlY3RAMS4xMy4xNC9kaXN0L2pzL2Jvb3RzdHJhcC1zZWxlY3QubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXAtc2VsZWN0QDEuMTMuMTQvZGlzdC9qcy9pMThuL2RlZmF1bHRzLSoubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgIDxsaW5rXHJcbiAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcclxuICAgICAgICBocmVmPVwiL2Fzc2V0cy9jc3MvYm9vdHN0cmFwLXNlbGVjdC5taW4uY3NzXCJcclxuICAgICAgLz5cclxuICAgICBcclxuICAgICBcclxuICAgICAqL31cclxuICAgICAgICA8QWxlcnRQcm92aWRlciB0ZW1wbGF0ZT17QWxlcnRUZW1wbGF0ZX0gey4uLm9wdGlvbnN9PlxyXG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgIDwvQWxlcnRQcm92aWRlcj5cclxuICAgICAgPC9BdXRoUHJvdmlkZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==