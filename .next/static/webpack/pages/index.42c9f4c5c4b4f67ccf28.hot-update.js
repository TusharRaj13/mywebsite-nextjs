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
    localStorage.setItem('theme', themeIndex % theme_list.length);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZCYXIuanMiXSwibmFtZXMiOlsiTmF2QmFyIiwidXNlU3RhdGUiLCJ0aGVtZUluZGV4Iiwic2V0dGhlbWVJbmRleCIsInRoZW1lX2xpc3QiLCJuYW1lIiwiYWNjZW50IiwiYWNjZW50RGFyayIsImhhbmRsZUNsaWNrIiwidXNlRWZmZWN0IiwidCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInRoZW1lIiwibGVuZ3RoIiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsInNldEl0ZW0iLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwic3R5bGVzIiwibmF2X2ljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFBQSxrQkFFc0JDLCtDQUFRLENBQUMsQ0FBRCxDQUY5QjtBQUFBLE1BRVBDLFVBRk87QUFBQSxNQUVLQyxhQUZMOztBQUdkLE1BQU1DLFVBQVUsR0FBRyxDQUNmO0FBQ0lDLFFBQUksRUFBRyxXQURYO0FBRUlDLFVBQU0sRUFBRyxTQUZiO0FBR0lDLGNBQVUsRUFBRztBQUhqQixHQURlLEVBTWY7QUFDSUYsUUFBSSxFQUFHLGFBRFg7QUFFSUMsVUFBTSxFQUFHLFNBRmI7QUFHSUMsY0FBVSxFQUFFO0FBSGhCLEdBTmUsRUFXZjtBQUNJRixRQUFJLEVBQUcsY0FEWDtBQUVJQyxVQUFNLEVBQUcsU0FGYjtBQUdJQyxjQUFVLEVBQUU7QUFIaEIsR0FYZSxFQWdCZjtBQUNJRixRQUFJLEVBQUcsWUFEWDtBQUVJQyxVQUFNLEVBQUcsU0FGYjtBQUdJQyxjQUFVLEVBQUU7QUFIaEIsR0FoQmUsRUFxQmY7QUFDSUYsUUFBSSxFQUFHLGNBRFg7QUFFSUMsVUFBTSxFQUFHLFNBRmI7QUFHSUMsY0FBVSxFQUFFO0FB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QUFBQSxnQkEvQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWtESDs7R0E3R1F6QixNOztLQUFBQSxNO0FBK0dULCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQyYzlmNGM1YzRiNGY2N2NjZjI4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9OYXZCYXIubW9kdWxlLmNzcydcclxuaW1wb3J0IHsgRmFIb21lLCBGYUlkQ2FyZCwgRmFCcmllZmNhc2UsIEZhQWRkcmVzc0Jvb2ssIEZhQXJyb3dMZWZ0LCBGYVBhaW50QnJ1c2ggfSBmcm9tICdyZWFjdC1pY29ucy9mYSdcclxuXHJcbmZ1bmN0aW9uIE5hdkJhcigpIHtcclxuXHJcbiAgICBjb25zdCBbdGhlbWVJbmRleCwgc2V0dGhlbWVJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IHRoZW1lX2xpc3QgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lIDogXCJUaGVtZS1SZWRcIixcclxuICAgICAgICAgICAgYWNjZW50IDogXCIjZjI1MDAyXCIsXHJcbiAgICAgICAgICAgIGFjY2VudERhcmsgOiBcIiNmNDYzMWJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lIDogXCJUaGVtZS1HcmVlblwiLFxyXG4gICAgICAgICAgICBhY2NlbnQgOiBcIiMxMDdiMTBcIixcclxuICAgICAgICAgICAgYWNjZW50RGFyazogXCIjMGU2ZTBlXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZSA6IFwiVGhlbWUtR3JlZW4yXCIsXHJcbiAgICAgICAgICAgIGFjY2VudCA6IFwiIzdiZmYwMFwiLFxyXG4gICAgICAgICAgICBhY2NlbnREYXJrOiBcIiM4YWMxMTNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lIDogXCJUaGVtZS1CbHVlXCIsXHJcbiAgICAgICAgICAgIGFjY2VudCA6IFwiIzAwYTRlZlwiLFxyXG4gICAgICAgICAgICBhY2NlbnREYXJrOiBcIiMxOGFjZjFcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lIDogXCJUaGVtZS1ZZWxsb3dcIixcclxuICAgICAgICAgICAgYWNjZW50IDogXCIjZmZiOTAwXCIsXHJcbiAgICAgICAgICAgIGFjY2VudERhcms6IFwiI2ZmYzIxOVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWUgOiBcIlRoZW1lLVBpbmtcIixcclxuICAgICAgICAgICAgYWNjZW50IDogXCIjZWUyMDZiXCIsXHJcbiAgICAgICAgICAgIGFjY2VudERhcms6IFwiI2VmMzQ3OFwiXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgICAgICBzZXR0aGVtZUluZGV4KHRoZW1lSW5kZXgrMSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB2YXIgdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpO1xyXG4gICAgICAgIGlmKCF0KXtcclxuICAgICAgICAgICAgdCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldHRoZW1lSW5kZXgodCk7XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0aGVtZS10cmFuc2l0aW9uJyk7XHJcbiAgICAgICAgdmFyIHRoZW1lID0gdGhlbWVfbGlzdFt0aGVtZUluZGV4JXRoZW1lX2xpc3QubGVuZ3RoXTtcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tYWNjZW50JywgdGhlbWUuYWNjZW50KTtcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tYWNjZW50LWRhcmsnLCB0aGVtZS5hY2NlbnREYXJrKVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsIHRoZW1lSW5kZXgldGhlbWVfbGlzdC5sZW5ndGgpO1xyXG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndGhlbWUtdHJhbnNpdGlvbicpXHJcbiAgICAgICAgICB9LCA1MDApXHJcbiAgICB9LCBbdGhlbWVJbmRleF0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmJhcn0+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMubmF2YmFyX25hdn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5uYXZfbGlua30gaHJlZj1cIiNob21lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saW5rX3RleHR9PlR1c2hhciBSYWo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFBcnJvd0xlZnQgY2xhc3NOYW1lPXtzdHlsZXMubmF2X2ljb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5uYXZfaXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLm5hdl9saW5rfSBocmVmPVwiI2hvbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYUhvbWUgY2xhc3NOYW1lPXtzdHlsZXMubmF2X2ljb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saW5rX3RleHR9PkhvbWU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5uYXZfaXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLm5hdl9saW5rfSBocmVmPVwiI2Fib3V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFJZENhcmQgY2xhc3NOYW1lPXtzdHlsZXMubmF2X2ljb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saW5rX3RleHR9PkFib3V0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubmF2X2l0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5uYXZfbGlua30gaHJlZj1cIiNwcm9qZWN0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhQnJpZWZjYXNlIGNsYXNzTmFtZT17c3R5bGVzLm5hdl9pY29ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlua190ZXh0fT5Qcm9qZWN0czwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLm5hdl9pdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMubmF2X2xpbmt9IGhyZWY9XCIjY29udGFjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhQWRkcmVzc0Jvb2sgY2xhc3NOYW1lPXtzdHlsZXMubmF2X2ljb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saW5rX3RleHR9PkNvbnRhY3Q8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5uYXZfaXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2X2xpbmt9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFQYWludEJydXNoIGNsYXNzTmFtZT17c3R5bGVzLm5hdl9pY29ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlua190ZXh0fT5UaGVtZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPGxpIGNsYXNzTmFtZT17c3R5bGVzLm5hdl9pdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIiBvbkNsaWNrPXt0aGlzLmNoYW5nZVRoZW1lSGFuZGxlcn0+Q2hhbmdlIFRoZW1lPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxsaT48YSBocmVmPVwiI2Fib3V0XCIgY2xhc3NOYW1lPVwiZG90XCIgb25DbGljaz17dGhpcy5jbGlja0hhbmRsZXIoXCJhYm91dFwiKX0+PHNwYW4gY2xhc3NOYW1lPVwibnVtYmVyXCI+MDI8L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5BQk9VVDwvc3Bhbj48L2E+PC9saT4gIFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI3Byb2plY3RzXCIgY2xhc3NOYW1lPVwiZG90XCIgb25DbGljaz17dGhpcy5jbGlja0hhbmRsZXIoXCJwcm9qZWN0c1wiKX0+PHNwYW4gY2xhc3NOYW1lPVwibnVtYmVyXCI+MDM8L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5QUk9KRUNUUzwvc3Bhbj48L2E+PC9saT4gIFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI2NvbnRhY3RcIiBjbGFzc05hbWU9XCJkb3RcIiBvbkNsaWNrPXt0aGlzLmNsaWNrSGFuZGxlcihcImNvbnRhY3RcIil9PjxzcGFuIGNsYXNzTmFtZT1cIm51bWJlclwiPjA0PC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+Q09OVEFDVDwvc3Bhbj48L2E+PC9saT4gICAqL31cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==