self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_NavBar_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/NavBar.module.css */ "./styles/NavBar.module.css");
/* harmony import */ var _styles_NavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_NavBar_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\tusha\\Documents\\React\\my-portfolio-next\\components\\NavBar.js",
    _s = $RefreshSig$();





function NavBar() {
  _s();

  var _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      themeIndex = _useState[0],
      setthemeIndex = _useState[1];

  var theme_list = [{
    name: "Theme-Red",
    accent: "#f25002",
    accentDark: "#f4631b"
  }, {
    name: "Theme-Green",
    accent: "#107b10",
    accentDark: "#0e6e0e"
  }, {
    name: "Theme-Green2",
    accent: "#7bff00",
    accentDark: "#8ac113"
  }, {
    name: "Theme-Blue",
    accent: "#00a4ef",
    accentDark: "#18acf1"
  }, {
    name: "Theme-Yellow",
    accent: "#ffb900",
    accentDark: "#ffc219"
  }, {
    name: "Theme-Pink",
    accent: "#ee206b",
    accentDark: "#ef3478"
  }];

  var handleClick = function handleClick() {
    setthemeIndex(themeIndex + 1);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var t = localStorage.getItem('theme');

    if (!t) {
      t = 0;
    }

    setthemeIndex(t);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    document.documentElement.classList.add('theme-transition');
    var theme = theme_list[themeIndex % theme_list.length];
    document.documentElement.style.setProperty('--accent', theme.accent);
    document.documentElement.style.setProperty('--accent-dark', theme.accentDark);
    localStorage.setItem('theme', themeIndex % _this.theme_list.length);
    window.setTimeout(function () {
      document.documentElement.classList.remove('theme-transition');
    }, 500);
  }, [themeIndex]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
      className: (_styles_NavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().navbar),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: (_styles_NavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().navbar_nav),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: (_styles_NavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().logo),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            className: (_styles_NavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().nav_link),
            href: "#home",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_NavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().link_text),
              children: "Tushar Raj"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaArrowLeft, {
              className: (_styles_NavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().nav_icon)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: (_styles_NavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().nav_item),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            className: (_styles_NavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().nav_link),
            href: "#home",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaHome, {
              className: (_styles_NavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().nav_icon)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_NavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().link_text),
              children: "Home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: (_styles_NavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().nav_item),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            className: (_styles_NavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().nav_link),
            href: "#about",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaIdCard, {
              className: (_styles_NavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().nav_icon)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_NavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().link_text),
              children: "About"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: (_styles_NavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().nav_item),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            className: (_styles_NavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().nav_link),
            href: "#projects",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaBriefcase, {
              className: (_styles_NavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().nav_icon)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_NavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().link_text),
              children: "Projects"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: (_styles_NavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().nav_item),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            className: (_styles_NavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().nav_link),
            href: "#contact",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaAddressBook, {
              className: (_styles_NavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().nav_icon)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_NavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().link_text),
              children: "Contact"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: (_styles_NavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().nav_item),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_NavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().nav_link),
            onClick: handleClick,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaPaintBrush, {
              className: (_styles_NavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().nav_icon)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_NavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().link_text),
              children: "Theme"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 9
  }, this);
}

_s(NavBar, "uo0S0oxmBtWpRCgxYAvud0Scc+w=");

_c = NavBar;
/* harmony default export */ __webpack_exports__["default"] = (NavBar);

var _c;

$RefreshReg$(_c, "NavBar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZCYXIuanMiXSwibmFtZXMiOlsiTmF2QmFyIiwidXNlU3RhdGUiLCJ0aGVtZUluZGV4Iiwic2V0dGhlbWVJbmRleCIsInRoZW1lX2xpc3QiLCJuYW1lIiwiYWNjZW50IiwiYWNjZW50RGFyayIsImhhbmRsZUNsaWNrIiwidXNlRWZmZWN0IiwidCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInRoZW1lIiwibGVuZ3RoIiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsInNldEl0ZW0iLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwic3R5bGVzIiwibmF2X2ljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFFc0JDLCtDQUFRLENBQUMsQ0FBRCxDQUY5QjtBQUFBLE1BRVBDLFVBRk87QUFBQSxNQUVLQyxhQUZMOztBQUdkLE1BQU1DLFVBQVUsR0FBRyxDQUNmO0FBQ0lDLFFBQUksRUFBRyxXQURYO0FBRUlDLFVBQU0sRUFBRyxTQUZiO0FBR0lDLGNBQVUsRUFBRztBQUhqQixHQURlLEVBTWY7QUFDSUYsUUFBSSxFQUFHLGFBRFg7QUFFSUMsVUFBTSxFQUFHLFNBRmI7QUFHSUMsY0FBVSxFQUFFO0FBSGhCLEdBTmUsRUFXZjtBQUNJRixRQUFJLEVBQUcsY0FEWDtBQUVJQyxVQUFNLEVBQUcsU0FGYjtBQUdJQyxjQUFVLEVBQUU7QUFIaEIsR0FYZSxFQWdCZjtBQUNJRixRQUFJLEVBQUcsWUFEWDtBQUVJQyxVQUFNLEVBQUcsU0FGYjtBQUdJQyxjQUFVLEVBQUU7QUFIaEIsR0FoQmUsRUFxQmY7QUFDSUYsUUFBSSxFQUFHLGNBRFg7QUFFSUMsVUFBTSxFQUFHLFNBRmI7QUFHSUMsY0FBVSxF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SjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQS9CSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBa0RIOztHQTdHUXpCLE07O0tBQUFBLE07QUErR1QsK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzQ0MjUxYWIyNjZlOGNhZGM4NjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL05hdkJhci5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgeyBGYUhvbWUsIEZhSWRDYXJkLCBGYUJyaWVmY2FzZSwgRmFBZGRyZXNzQm9vaywgRmFBcnJvd0xlZnQsIEZhUGFpbnRCcnVzaCB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xyXG5cclxuZnVuY3Rpb24gTmF2QmFyKCkge1xyXG5cclxuICAgIGNvbnN0IFt0aGVtZUluZGV4LCBzZXR0aGVtZUluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgdGhlbWVfbGlzdCA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWUgOiBcIlRoZW1lLVJlZFwiLFxyXG4gICAgICAgICAgICBhY2NlbnQgOiBcIiNmMjUwMDJcIixcclxuICAgICAgICAgICAgYWNjZW50RGFyayA6IFwiI2Y0NjMxYlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWUgOiBcIlRoZW1lLUdyZWVuXCIsXHJcbiAgICAgICAgICAgIGFjY2VudCA6IFwiIzEwN2IxMFwiLFxyXG4gICAgICAgICAgICBhY2NlbnREYXJrOiBcIiMwZTZlMGVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lIDogXCJUaGVtZS1HcmVlbjJcIixcclxuICAgICAgICAgICAgYWNjZW50IDogXCIjN2JmZjAwXCIsXHJcbiAgICAgICAgICAgIGFjY2VudERhcms6IFwiIzhhYzExM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWUgOiBcIlRoZW1lLUJsdWVcIixcclxuICAgICAgICAgICAgYWNjZW50IDogXCIjMDBhNGVmXCIsXHJcbiAgICAgICAgICAgIGFjY2VudERhcms6IFwiIzE4YWNmMVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWUgOiBcIlRoZW1lLVllbGxvd1wiLFxyXG4gICAgICAgICAgICBhY2NlbnQgOiBcIiNmZmI5MDBcIixcclxuICAgICAgICAgICAgYWNjZW50RGFyazogXCIjZmZjMjE5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZSA6IFwiVGhlbWUtUGlua1wiLFxyXG4gICAgICAgICAgICBhY2NlbnQgOiBcIiNlZTIwNmJcIixcclxuICAgICAgICAgICAgYWNjZW50RGFyazogXCIjZWYzNDc4XCJcclxuICAgICAgICB9XHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHNldHRoZW1lSW5kZXgodGhlbWVJbmRleCsxKTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHZhciB0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJyk7XHJcbiAgICAgICAgaWYoIXQpe1xyXG4gICAgICAgICAgICB0ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0dGhlbWVJbmRleCh0KTtcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RoZW1lLXRyYW5zaXRpb24nKTtcclxuICAgICAgICB2YXIgdGhlbWUgPSB0aGVtZV9saXN0W3RoZW1lSW5kZXgldGhlbWVfbGlzdC5sZW5ndGhdO1xyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1hY2NlbnQnLCB0aGVtZS5hY2NlbnQpO1xyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1hY2NlbnQtZGFyaycsIHRoZW1lLmFjY2VudERhcmspXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgdGhlbWVJbmRleCV0aGlzLnRoZW1lX2xpc3QubGVuZ3RoKTtcclxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3RoZW1lLXRyYW5zaXRpb24nKVxyXG4gICAgICAgICAgfSwgNTAwKVxyXG4gICAgfSwgW3RoZW1lSW5kZXhdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZiYXJ9PlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLm5hdmJhcl9uYXZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMubmF2X2xpbmt9IGhyZWY9XCIjaG9tZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlua190ZXh0fT5UdXNoYXIgUmFqPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhQXJyb3dMZWZ0IGNsYXNzTmFtZT17c3R5bGVzLm5hdl9pY29ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubmF2X2l0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5uYXZfbGlua30gaHJlZj1cIiNob21lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFIb21lIGNsYXNzTmFtZT17c3R5bGVzLm5hdl9pY29ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlua190ZXh0fT5Ib21lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubmF2X2l0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5uYXZfbGlua30gaHJlZj1cIiNhYm91dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhSWRDYXJkIGNsYXNzTmFtZT17c3R5bGVzLm5hdl9pY29ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlua190ZXh0fT5BYm91dDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLm5hdl9pdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMubmF2X2xpbmt9IGhyZWY9XCIjcHJvamVjdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYUJyaWVmY2FzZSBjbGFzc05hbWU9e3N0eWxlcy5uYXZfaWNvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpbmtfdGV4dH0+UHJvamVjdHM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5uYXZfaXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLm5hdl9saW5rfSBocmVmPVwiI2NvbnRhY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYUFkZHJlc3NCb29rIGNsYXNzTmFtZT17c3R5bGVzLm5hdl9pY29ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlua190ZXh0fT5Db250YWN0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubmF2X2l0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdl9saW5rfSBvbkNsaWNrPXtoYW5kbGVDbGlja30gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhUGFpbnRCcnVzaCBjbGFzc05hbWU9e3N0eWxlcy5uYXZfaWNvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpbmtfdGV4dH0+VGhlbWU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5uYXZfaXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgb25DbGljaz17dGhpcy5jaGFuZ2VUaGVtZUhhbmRsZXJ9PkNoYW5nZSBUaGVtZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8bGk+PGEgaHJlZj1cIiNhYm91dFwiIGNsYXNzTmFtZT1cImRvdFwiIG9uQ2xpY2s9e3RoaXMuY2xpY2tIYW5kbGVyKFwiYWJvdXRcIil9PjxzcGFuIGNsYXNzTmFtZT1cIm51bWJlclwiPjAyPC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+QUJPVVQ8L3NwYW4+PC9hPjwvbGk+ICBcclxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNwcm9qZWN0c1wiIGNsYXNzTmFtZT1cImRvdFwiIG9uQ2xpY2s9e3RoaXMuY2xpY2tIYW5kbGVyKFwicHJvamVjdHNcIil9PjxzcGFuIGNsYXNzTmFtZT1cIm51bWJlclwiPjAzPC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+UFJPSkVDVFM8L3NwYW4+PC9hPjwvbGk+ICBcclxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNjb250YWN0XCIgY2xhc3NOYW1lPVwiZG90XCIgb25DbGljaz17dGhpcy5jbGlja0hhbmRsZXIoXCJjb250YWN0XCIpfT48c3BhbiBjbGFzc05hbWU9XCJudW1iZXJcIj4wNDwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkNPTlRBQ1Q8L3NwYW4+PC9hPjwvbGk+ICAgKi99XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=