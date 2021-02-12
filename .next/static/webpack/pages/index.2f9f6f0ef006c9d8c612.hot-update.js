webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_xampp_htdocs_GitHub_React_Next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_xampp_htdocs_GitHub_React_Next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_xampp_htdocs_GitHub_React_Next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_xampp_htdocs_GitHub_React_Next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5__);




var _jsxFileName = "C:\\xampp\\htdocs\\GitHub_React_Next\\pages\\index.js",
    _this = undefined;




var Imagem = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__["lazy"])(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.t.bind(null, /*! ./Imagen */ "./pages/Imagen.js", 7));
});
_c2 = Imagem;
var Rodape = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__["lazy"])(_c3 = function _c3() {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! ./Rodape */ "./pages/Rodape.js", 7));
});
_c4 = Rodape;


var HomeGitHub = function HomeGitHub(_ref) {
  var usuarios = _ref.usuarios;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/blog",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
        children: "Home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3__["Suspense"], {
      fallback: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        children: "Carregando ..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 30
      }, _this),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
        src: Imagem,
        alt: "Mil usuarios"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }, _this), usuarios.map(function (usr) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
          src: usr.avatar_url,
          alt: "Foto de Usuario"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h2", {
          children: usr.login
        }, usr.id, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }, _this);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3__["Suspense"], {
      fallback: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        children: "Carregando ..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 30
      }, _this),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Rodape, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, _this);
};

_c5 = HomeGitHub;
HomeGitHub.getInitialProps = /*#__PURE__*/Object(C_xampp_htdocs_GitHub_React_Next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_xampp_htdocs_GitHub_React_Next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var usuario, usuarios;
  return C_xampp_htdocs_GitHub_React_Next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch("https://api.github.com/users");

        case 2:
          usuario = _context.sent;
          _context.next = 5;
          return usuario.json();

        case 5:
          usuarios = _context.sent;
          return _context.abrupt("return", {
            usuarios: usuarios
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (HomeGitHub);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "Imagem$lazy");
$RefreshReg$(_c2, "Imagem");
$RefreshReg$(_c3, "Rodape$lazy");
$RefreshReg$(_c4, "Rodape");
$RefreshReg$(_c5, "HomeGitHub");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW1hZ2VtIiwibGF6eSIsIlJvZGFwZSIsIkhvbWVHaXRIdWIiLCJ1c3VhcmlvcyIsIm1hcCIsInVzciIsImF2YXRhcl91cmwiLCJsb2dpbiIsImlkIiwiZ2V0SW5pdGlhbFByb3BzIiwiZmV0Y2giLCJ1c3VhcmlvIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLGdCQUFHQyxrREFBSSxNQUFDO0FBQUEsU0FBTSx1SEFBTjtBQUFBLENBQUQsQ0FBbkI7TUFBTUQsTTtBQUNOLElBQU1FLE1BQU0sZ0JBQUdELGtEQUFJLE9BQUM7QUFBQSxTQUFNLHVIQUFOO0FBQUEsQ0FBRCxDQUFuQjtNQUFNQyxNO0FBRU47O0FBRUEsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSxNQUFHQyxRQUFILFFBQUdBLFFBQUg7QUFBQSxzQkFDZjtBQUFBLDRCQUVJLHFFQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDLE9BQVg7QUFBQSw2QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixlQU1JLHFFQUFDLDhDQUFEO0FBQVUsY0FBUSxlQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQXJCO0FBQUEsNkJBQ0k7QUFBSyxXQUFHLEVBQUVKLE1BQVY7QUFBa0IsV0FBRyxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkosRUFVTUksUUFBUSxDQUFDQyxHQUFULENBQWEsVUFBQUMsR0FBRztBQUFBLDBCQUNkO0FBQUEsZ0NBQ0k7QUFBSyxhQUFHLEVBQUVBLEdBQUcsQ0FBQ0MsVUFBZDtBQUEwQixhQUFHLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQUEsb0JBQWtCRCxHQUFHLENBQUNFO0FBQXRCLFdBQVNGLEdBQUcsQ0FBQ0csRUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURjO0FBQUEsS0FBaEIsQ0FWTixlQWdCSSxxRUFBQyw4Q0FBRDtBQUFVLGNBQVEsZUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFyQjtBQUFBLDZCQUNJLHFFQUFDLE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGU7QUFBQSxDQUFuQjs7TUFBTU4sVTtBQXVCTkEsVUFBVSxDQUFDTyxlQUFYLDJSQUE2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNIQyxLQUFLLENBQUMsOEJBQUQsQ0FERjs7QUFBQTtBQUNuQkMsaUJBRG1CO0FBQUE7QUFBQSxpQkFFRkEsT0FBTyxDQUFDQyxJQUFSLEVBRkU7O0FBQUE7QUFFbkJULGtCQUZtQjtBQUFBLDJDQUdsQjtBQUFFQSxvQkFBUSxFQUFSQTtBQUFGLFdBSGtCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQTdCO0FBTWVELHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjJmOWY2ZjBlZjAwNmM5ZDhjNjEyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBsYXp5LCBTdXNwZW5zZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgSW1hZ2VtID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4vSW1hZ2VuJykpO1xyXG5jb25zdCBSb2RhcGUgPSBsYXp5KCgpID0+IGltcG9ydCgnLi9Sb2RhcGUnKSlcclxuXHJcbmltcG9ydCBcImlzb21vcnBoaWMtZmV0Y2hcIjtcclxuXHJcbmNvbnN0IEhvbWVHaXRIdWIgPSAoeyB1c3VhcmlvcyB9KSA9PiAoXHJcbiAgICA8ZGl2PlxyXG5cclxuICAgICAgICA8TGluayBocmVmPVwiL2Jsb2dcIj5cclxuICAgICAgICAgICAgPGE+SG9tZTwvYT5cclxuICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17IDxwPkNhcnJlZ2FuZG8gLi4uPC9wPiB9PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17SW1hZ2VtfSBhbHQ9XCJNaWwgdXN1YXJpb3NcIi8+XHJcbiAgICAgICAgPC9TdXNwZW5zZT5cclxuXHJcbiAgICAgICAgeyB1c3Vhcmlvcy5tYXAodXNyID0+IFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3Vzci5hdmF0YXJfdXJsfSBhbHQ9XCJGb3RvIGRlIFVzdWFyaW9cIi8+XHJcbiAgICAgICAgICAgICAgICA8aDIga2V5PXt1c3IuaWR9Pnt1c3IubG9naW59PC9oMj4gXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXsgPHA+Q2FycmVnYW5kbyAuLi48L3A+IH0+XHJcbiAgICAgICAgICAgIDxSb2RhcGUgLz4gICBcclxuICAgICAgICA8L1N1c3BlbnNlPiAgICBcclxuICAgIDwvZGl2PlxyXG4pXHJcblxyXG5Ib21lR2l0SHViLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHVzdWFyaW8gPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnNcIilcclxuICAgIGNvbnN0IHVzdWFyaW9zID0gYXdhaXQgdXN1YXJpby5qc29uKCk7XHJcbiAgICByZXR1cm4geyB1c3VhcmlvcyB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lR2l0SHViO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9