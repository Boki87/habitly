/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/Store.tsx":
/*!**********************************!*\
  !*** ./src/components/Store.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Store),\n/* harmony export */   \"useStore\": () => (/* binding */ useStore)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst initialState = {\n    selectedDate: new Date(),\n    setSelectedDate: ()=>{},\n    showHabitModal: false,\n    setShowHabitModal: ()=>{},\n    activeHabit: null,\n    setActiveHabit: ()=>{}\n};\nconst StoreProvider = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(initialState);\nconst useStore = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(StoreProvider);\nfunction Store({ children  }) {\n    const [selectedDate, setSelectedDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date());\n    const [showHabitModal, setShowHabitModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [activeHabit, setActiveHabit] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StoreProvider.Provider, {\n        value: {\n            selectedDate,\n            setSelectedDate,\n            showHabitModal,\n            setShowHabitModal,\n            activeHabit,\n            setActiveHabit\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/bojanperic/Documents/_projects/habitly/src/components/Store.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TdG9yZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUN1RTtBQVd2RSxNQUFNRyxlQUE4QjtJQUNsQ0MsY0FBYyxJQUFJQztJQUNsQkMsaUJBQWlCLElBQU0sQ0FBQztJQUN4QkMsZ0JBQWdCLEtBQUs7SUFDckJDLG1CQUFtQixJQUFNLENBQUM7SUFDMUJDLGFBQWEsSUFBSTtJQUNqQkMsZ0JBQWdCLElBQU0sQ0FBQztBQUN6QjtBQUVBLE1BQU1DLDhCQUFnQlgsb0RBQWFBLENBQUNHO0FBRTdCLE1BQU1TLFdBQVcsSUFBTVgsaURBQVVBLENBQUNVLGVBQWU7QUFFekMsU0FBU0UsTUFBTSxFQUFFQyxTQUFRLEVBQTJCLEVBQUU7SUFDbkUsTUFBTSxDQUFDVixjQUFjRSxnQkFBZ0IsR0FBR0osK0NBQVFBLENBQU8sSUFBSUc7SUFDM0QsTUFBTSxDQUFDRSxnQkFBZ0JDLGtCQUFrQixHQUFHTiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzFELE1BQU0sQ0FBQ08sYUFBYUMsZUFBZSxHQUFHUiwrQ0FBUUEsQ0FBZSxJQUFJO0lBRWpFLHFCQUNFLDhEQUFDUyxjQUFjSSxRQUFRO1FBQ3JCQyxPQUFPO1lBQ0xaO1lBQ0FFO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FDO1FBQ0Y7a0JBRUNJOzs7Ozs7QUFHUCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGFiaXRseS8uL3NyYy9jb21wb25lbnRzL1N0b3JlLnRzeD81ZGQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhhYml0IH0gZnJvbSBcIkAvdHlwZXMvSGFiaXRcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlLCBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIElJbml0aWFsU3RhdGUge1xuICBzZWxlY3RlZERhdGU6IERhdGU7XG4gIHNldFNlbGVjdGVkRGF0ZTogKHY6IERhdGUpID0+IHZvaWQ7XG4gIHNob3dIYWJpdE1vZGFsOiBib29sZWFuO1xuICBzZXRTaG93SGFiaXRNb2RhbDogKHY6IGJvb2xlYW4pID0+IHZvaWQ7XG4gIGFjdGl2ZUhhYml0OiBIYWJpdCB8IG51bGw7XG4gIHNldEFjdGl2ZUhhYml0OiAodjogSGFiaXQgfCBudWxsKSA9PiB2b2lkO1xufVxuXG5jb25zdCBpbml0aWFsU3RhdGU6IElJbml0aWFsU3RhdGUgPSB7XG4gIHNlbGVjdGVkRGF0ZTogbmV3IERhdGUoKSxcbiAgc2V0U2VsZWN0ZWREYXRlOiAoKSA9PiB7fSxcbiAgc2hvd0hhYml0TW9kYWw6IGZhbHNlLFxuICBzZXRTaG93SGFiaXRNb2RhbDogKCkgPT4ge30sXG4gIGFjdGl2ZUhhYml0OiBudWxsLFxuICBzZXRBY3RpdmVIYWJpdDogKCkgPT4ge30sXG59O1xuXG5jb25zdCBTdG9yZVByb3ZpZGVyID0gY3JlYXRlQ29udGV4dChpbml0aWFsU3RhdGUpO1xuXG5leHBvcnQgY29uc3QgdXNlU3RvcmUgPSAoKSA9PiB1c2VDb250ZXh0KFN0b3JlUHJvdmlkZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdG9yZSh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0Tm9kZSB9KSB7XG4gIGNvbnN0IFtzZWxlY3RlZERhdGUsIHNldFNlbGVjdGVkRGF0ZV0gPSB1c2VTdGF0ZTxEYXRlPihuZXcgRGF0ZSgpKTtcbiAgY29uc3QgW3Nob3dIYWJpdE1vZGFsLCBzZXRTaG93SGFiaXRNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFthY3RpdmVIYWJpdCwgc2V0QWN0aXZlSGFiaXRdID0gdXNlU3RhdGU8SGFiaXQgfCBudWxsPihudWxsKTtcblxuICByZXR1cm4gKFxuICAgIDxTdG9yZVByb3ZpZGVyLlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBzZWxlY3RlZERhdGUsXG4gICAgICAgIHNldFNlbGVjdGVkRGF0ZSxcbiAgICAgICAgc2hvd0hhYml0TW9kYWwsXG4gICAgICAgIHNldFNob3dIYWJpdE1vZGFsLFxuICAgICAgICBhY3RpdmVIYWJpdCxcbiAgICAgICAgc2V0QWN0aXZlSGFiaXQsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1N0b3JlUHJvdmlkZXIuUHJvdmlkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsImluaXRpYWxTdGF0ZSIsInNlbGVjdGVkRGF0ZSIsIkRhdGUiLCJzZXRTZWxlY3RlZERhdGUiLCJzaG93SGFiaXRNb2RhbCIsInNldFNob3dIYWJpdE1vZGFsIiwiYWN0aXZlSGFiaXQiLCJzZXRBY3RpdmVIYWJpdCIsIlN0b3JlUHJvdmlkZXIiLCJ1c2VTdG9yZSIsIlN0b3JlIiwiY2hpbGRyZW4iLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Store.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Store */ \"./src/components/Store.tsx\");\n\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Store__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/bojanperic/Documents/_projects/habitly/src/pages/_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/bojanperic/Documents/_projects/habitly/src/pages/_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE4QjtBQUVTO0FBRXhCLFNBQVNDLElBQUksRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQVksRUFBRTtJQUM5RCxxQkFDRSw4REFBQ0gseURBQUtBO2tCQUNKLDRFQUFDRTtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYWJpdGx5Ly4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQC9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCBTdG9yZSBmcm9tIFwiQC9jb21wb25lbnRzL1N0b3JlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPFN0b3JlPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvU3RvcmU+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiU3RvcmUiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();