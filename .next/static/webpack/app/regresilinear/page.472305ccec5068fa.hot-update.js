"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/regresilinear/page",{

/***/ "(app-pages-browser)/./src/app/components/Inputregresi.jsx":
/*!*********************************************!*\
  !*** ./src/app/components/Inputregresi.jsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _regresilinear_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../regresilinear/store */ \"(app-pages-browser)/./src/app/regresilinear/store.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Inputregresi = ()=>{\n    _s();\n    let [jumlahTabel, setJumlahTabel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_regresilinear_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].state.totalRow);\n    let listItemsX = [];\n    let listItemsY = [];\n    let listItemsX2 = [];\n    let listItemsY2 = [];\n    let listItemsXY = [];\n    function handleButtonClick() {\n        setJumlahTabel(jTabel.value);\n        _regresilinear_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].state.totalRow = jTabel.value;\n    }\n    const TabelX = ()=>{\n        listItemsX = [];\n        for(let i = 0; i < jumlahTabel; i++){\n            listItemsX.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                defaultValue: i + 1,\n                type: \"number\",\n                id: \"X\" + i,\n                name: \"X\" + i\n            }, \"X\" + i, false, {\n                fileName: \"/Users/Rinyuhhh/Documents/RegresiLinear/NextRegresi-v5/regresilinear/src/app/components/Inputregresi.jsx\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, undefined));\n        }\n        return listItemsX;\n    };\n    const TabelY = ()=>{\n        listItemsY = [];\n        for(let i = 0; i < jumlahTabel; i++){\n            listItemsY.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                defaultValue: i + 1,\n                type: \"number\",\n                id: \"Y\" + i,\n                name: \"Y\" + i\n            }, \"Y\" + i, false, {\n                fileName: \"/Users/Rinyuhhh/Documents/RegresiLinear/NextRegresi-v5/regresilinear/src/app/components/Inputregresi.jsx\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, undefined));\n        }\n        return listItemsY;\n    };\n    const TabelX2 = ()=>{\n        listItemsX2 = [];\n        for(let i = 0; i < jumlahTabel; i++){\n            listItemsX2.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                defaultValue: i + 1,\n                type: \"number\",\n                id: \"X2\" + i,\n                name: \"X2\" + i\n            }, \"X2\" + i, false, {\n                fileName: \"/Users/Rinyuhhh/Documents/RegresiLinear/NextRegresi-v5/regresilinear/src/app/components/Inputregresi.jsx\",\n                lineNumber: 53,\n                columnNumber: 9\n            }, undefined));\n        }\n        return listItemsX2;\n    };\n    const TabelY2 = ()=>{\n        listItemsY2 = [];\n        for(let i = 0; i < jumlahTabel; i++){\n            listItemsY2.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                defaultValue: i + 1,\n                type: \"number\",\n                id: \"Y2\" + i,\n                name: \"Y2\" + i\n            }, \"Y2\" + i, false, {\n                fileName: \"/Users/Rinyuhhh/Documents/RegresiLinear/NextRegresi-v5/regresilinear/src/app/components/Inputregresi.jsx\",\n                lineNumber: 69,\n                columnNumber: 9\n            }, undefined));\n        }\n        return listItemsY2;\n    };\n    const TabelXY = ()=>{\n        listItemsXY = [];\n        for(let i = 0; i < jumlahTabel; i++){\n            listItemsXY.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                defaultValue: i + 1,\n                type: \"number\",\n                id: \"XY\" + i,\n                name: \"XY\" + i\n            }, \"XY\" + i, false, {\n                fileName: \"/Users/Rinyuhhh/Documents/RegresiLinear/NextRegresi-v5/regresilinear/src/app/components/Inputregresi.jsx\",\n                lineNumber: 85,\n                columnNumber: 9\n            }, undefined));\n        }\n        return listItemsXY;\n    };\n    function CalculationButton() {\n        _regresilinear_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].state.cX = [];\n        _regresilinear_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].state.cY = [];\n        _regresilinear_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].state.cX2 = [];\n        _regresilinear_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].state.cY2 = [];\n        _regresilinear_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].state.cXY = [];\n        for(let i = 0; i < jumlahTabel; i++){\n            _regresilinear_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].state.valuesX[i] = document.getElementById(\"X\" + i).value;\n            _regresilinear_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].state.valuesY[i] = document.getElementById(\"Y\" + i).value;\n        }\n        for(let i = 0; i < jumlahTabel; i++){\n            _regresilinear_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].state.cX[i] = _regresilinear_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].state.valuesX[i];\n            _regresilinear_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].state.cY[i] = _regresilinear_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].state.valuesY[i];\n            _regresilinear_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].state.cX2[i] = _regresilinear_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].state.valuesX[i] * _regresilinear_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].state.valuesX[i];\n            _regresilinear_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].state.cY2[i] = _regresilinear_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].state.valuesY[i] * _regresilinear_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].state.valuesY[i];\n            _regresilinear_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].state.cXY[i] = _regresilinear_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].state.valuesX[i] * _regresilinear_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].state.valuesY[i];\n        }\n        console.log(_regresilinear_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"].state.cX2);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Tabel\"\n            }, void 0, false, {\n                fileName: \"/Users/Rinyuhhh/Documents/RegresiLinear/NextRegresi-v5/regresilinear/src/app/components/Inputregresi.jsx\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Jumlah Tabel\"\n            }, void 0, false, {\n                fileName: \"/Users/Rinyuhhh/Documents/RegresiLinear/NextRegresi-v5/regresilinear/src/app/components/Inputregresi.jsx\",\n                lineNumber: 120,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                defaultValue: setJumlahTabel,\n                type: \"number\",\n                min: 2,\n                max: 10,\n                id: \"jTabel\",\n                name: \"jTabel\"\n            }, void 0, false, {\n                fileName: \"/Users/Rinyuhhh/Documents/RegresiLinear/NextRegresi-v5/regresilinear/src/app/components/Inputregresi.jsx\",\n                lineNumber: 121,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleButtonClick,\n                type: \"submit\",\n                children: \"Atur Tabel\"\n            }, void 0, false, {\n                fileName: \"/Users/Rinyuhhh/Documents/RegresiLinear/NextRegresi-v5/regresilinear/src/app/components/Inputregresi.jsx\",\n                lineNumber: 129,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-5 gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid grid-cols-1 gap-2\",\n                                children: [\n                                    \"X\",\n                                    TabelX()\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/Rinyuhhh/Documents/RegresiLinear/NextRegresi-v5/regresilinear/src/app/components/Inputregresi.jsx\",\n                                lineNumber: 134,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid grid-cols-1 gap-2\",\n                                children: [\n                                    \"Y\",\n                                    TabelY()\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/Rinyuhhh/Documents/RegresiLinear/NextRegresi-v5/regresilinear/src/app/components/Inputregresi.jsx\",\n                                lineNumber: 135,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid grid-cols-1 gap-2\",\n                                children: [\n                                    \"X2\",\n                                    TabelX2()\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/Rinyuhhh/Documents/RegresiLinear/NextRegresi-v5/regresilinear/src/app/components/Inputregresi.jsx\",\n                                lineNumber: 136,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid grid-cols-1 gap-2\",\n                                children: [\n                                    \"Y2\",\n                                    TabelY2()\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/Rinyuhhh/Documents/RegresiLinear/NextRegresi-v5/regresilinear/src/app/components/Inputregresi.jsx\",\n                                lineNumber: 140,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid grid-cols-1 gap-2\",\n                                children: [\n                                    \"XY\",\n                                    TabelXY()\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/Rinyuhhh/Documents/RegresiLinear/NextRegresi-v5/regresilinear/src/app/components/Inputregresi.jsx\",\n                                lineNumber: 144,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Rinyuhhh/Documents/RegresiLinear/NextRegresi-v5/regresilinear/src/app/components/Inputregresi.jsx\",\n                        lineNumber: 133,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: CalculationButton,\n                        children: \"Calculate\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Rinyuhhh/Documents/RegresiLinear/NextRegresi-v5/regresilinear/src/app/components/Inputregresi.jsx\",\n                        lineNumber: 149,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Rinyuhhh/Documents/RegresiLinear/NextRegresi-v5/regresilinear/src/app/components/Inputregresi.jsx\",\n                lineNumber: 132,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Inputregresi, \"sIOY8nkS4a6hzU23f/tUU7Ul0PI=\");\n_c = Inputregresi;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Inputregresi);\nvar _c;\n$RefreshReg$(_c, \"Inputregresi\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9JbnB1dHJlZ3Jlc2kuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDZ0M7QUFDVTtBQUUxQyxNQUFNRSxlQUFlOztJQUNuQixJQUFJLENBQUNDLGFBQWFDLGVBQWUsR0FBR0osK0NBQVFBLENBQUNDLDREQUFLQSxDQUFDSSxLQUFLLENBQUNDLFFBQVE7SUFDakUsSUFBSUMsYUFBYSxFQUFFO0lBQ25CLElBQUlDLGFBQWEsRUFBRTtJQUNuQixJQUFJQyxjQUFjLEVBQUU7SUFDcEIsSUFBSUMsY0FBYyxFQUFFO0lBQ3BCLElBQUlDLGNBQWMsRUFBRTtJQUVwQixTQUFTQztRQUNQUixlQUFlUyxPQUFPQyxLQUFLO1FBQzNCYiw0REFBS0EsQ0FBQ0ksS0FBSyxDQUFDQyxRQUFRLEdBQUdPLE9BQU9DLEtBQUs7SUFDckM7SUFDQSxNQUFNQyxTQUFTO1FBQ2JSLGFBQWEsRUFBRTtRQUNmLElBQUssSUFBSVMsSUFBSSxHQUFHQSxJQUFJYixhQUFhYSxJQUFLO1lBQ3BDVCxXQUFXVSxJQUFJLGVBQ2IsOERBQUNDO2dCQUVDQyxjQUFjSCxJQUFJO2dCQUNsQkksTUFBSztnQkFDTEMsSUFBSSxNQUFNTDtnQkFDVk0sTUFBTSxNQUFNTjtlQUpQLE1BQU1BOzs7OztRQU9qQjtRQUNBLE9BQU9UO0lBQ1Q7SUFFQSxNQUFNZ0IsU0FBUztRQUNiZixhQUFhLEVBQUU7UUFDZixJQUFLLElBQUlRLElBQUksR0FBR0EsSUFBSWIsYUFBYWEsSUFBSztZQUNwQ1IsV0FBV1MsSUFBSSxlQUNiLDhEQUFDQztnQkFFQ0MsY0FBY0gsSUFBSTtnQkFDbEJJLE1BQUs7Z0JBQ0xDLElBQUksTUFBTUw7Z0JBQ1ZNLE1BQU0sTUFBTU47ZUFKUCxNQUFNQTs7Ozs7UUFPakI7UUFDQSxPQUFPUjtJQUNUO0lBRUEsTUFBTWdCLFVBQVU7UUFDZGYsY0FBYyxFQUFFO1FBQ2hCLElBQUssSUFBSU8sSUFBSSxHQUFHQSxJQUFJYixhQUFh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RSw4REFBQ1M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ3RCO2dCQUNDQyxjQUFjZjtnQkFDZGdCLE1BQUs7Z0JBQ0xxQixLQUFLO2dCQUNMQyxLQUFLO2dCQUNMckIsSUFBRztnQkFDSEMsTUFBSzs7Ozs7OzBCQUVQLDhEQUFDcUI7Z0JBQU9DLFNBQVNoQztnQkFBbUJRLE1BQUs7MEJBQVM7Ozs7OzswQkFHbEQsOERBQUN5Qjs7a0NBQ0MsOERBQUNBO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0Q7Z0NBQUlDLFdBQVU7O29DQUF5QjtvQ0FBRS9COzs7Ozs7OzBDQUMxQyw4REFBQzhCO2dDQUFJQyxXQUFVOztvQ0FBeUI7b0NBQUV2Qjs7Ozs7OzswQ0FDMUMsOERBQUNzQjtnQ0FBSUMsV0FBVTs7b0NBQXlCO29DQUVyQ3RCOzs7Ozs7OzBDQUVILDhEQUFDcUI7Z0NBQUlDLFdBQVU7O29DQUF5QjtvQ0FFckNyQjs7Ozs7OzswQ0FFSCw4REFBQ29CO2dDQUFJQyxXQUFVOztvQ0FBeUI7b0NBRXJDcEI7Ozs7Ozs7Ozs7Ozs7a0NBR0wsOERBQUNpQjt3QkFBT0MsU0FBU2pCO2tDQUFtQjs7Ozs7Ozs7Ozs7Ozs7QUFJNUM7R0FwSk16QjtLQUFBQTtBQXNKTiwrREFBZUEsWUFBWUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvSW5wdXRyZWdyZXNpLmpzeD82NjkzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgU3RvcmUgZnJvbSBcIi4uL3JlZ3Jlc2lsaW5lYXIvc3RvcmVcIlxuXG5jb25zdCBJbnB1dHJlZ3Jlc2kgPSAoKSA9PiB7XG4gIGxldCBbanVtbGFoVGFiZWwsIHNldEp1bWxhaFRhYmVsXSA9IHVzZVN0YXRlKFN0b3JlLnN0YXRlLnRvdGFsUm93KVxuICBsZXQgbGlzdEl0ZW1zWCA9IFtdXG4gIGxldCBsaXN0SXRlbXNZID0gW11cbiAgbGV0IGxpc3RJdGVtc1gyID0gW11cbiAgbGV0IGxpc3RJdGVtc1kyID0gW11cbiAgbGV0IGxpc3RJdGVtc1hZID0gW11cblxuICBmdW5jdGlvbiBoYW5kbGVCdXR0b25DbGljaygpIHtcbiAgICBzZXRKdW1sYWhUYWJlbChqVGFiZWwudmFsdWUpXG4gICAgU3RvcmUuc3RhdGUudG90YWxSb3cgPSBqVGFiZWwudmFsdWVcbiAgfVxuICBjb25zdCBUYWJlbFggPSAoKSA9PiB7XG4gICAgbGlzdEl0ZW1zWCA9IFtdXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBqdW1sYWhUYWJlbDsgaSsrKSB7XG4gICAgICBsaXN0SXRlbXNYLnB1c2goXG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGtleT17XCJYXCIgKyBpfVxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17aSArIDF9XG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgaWQ9e1wiWFwiICsgaX1cbiAgICAgICAgICBuYW1lPXtcIlhcIiArIGl9XG4gICAgICAgIC8+LFxuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gbGlzdEl0ZW1zWFxuICB9XG5cbiAgY29uc3QgVGFiZWxZID0gKCkgPT4ge1xuICAgIGxpc3RJdGVtc1kgPSBbXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwganVtbGFoVGFiZWw7IGkrKykge1xuICAgICAgbGlzdEl0ZW1zWS5wdXNoKFxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBrZXk9e1wiWVwiICsgaX1cbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e2kgKyAxfVxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIGlkPXtcIllcIiArIGl9XG4gICAgICAgICAgbmFtZT17XCJZXCIgKyBpfVxuICAgICAgICAvPixcbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIGxpc3RJdGVtc1lcbiAgfVxuXG4gIGNvbnN0IFRhYmVsWDIgPSAoKSA9PiB7XG4gICAgbGlzdEl0ZW1zWDIgPSBbXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwganVtbGFoVGFiZWw7IGkrKykge1xuICAgICAgbGlzdEl0ZW1zWDIucHVzaChcbiAgICAgICAgPGlucHV0XG4gICAgICAgICAga2V5PXtcIlgyXCIgKyBpfVxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17aSArIDF9XG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgaWQ9e1wiWDJcIiArIGl9XG4gICAgICAgICAgbmFtZT17XCJYMlwiICsgaX1cbiAgICAgICAgLz4sXG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiBsaXN0SXRlbXNYMlxuICB9XG5cbiAgY29uc3QgVGFiZWxZMiA9ICgpID0+IHtcbiAgICBsaXN0SXRlbXNZMiA9IFtdXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBqdW1sYWhUYWJlbDsgaSsrKSB7XG4gICAgICBsaXN0SXRlbXNZMi5wdXNoKFxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBrZXk9e1wiWTJcIiArIGl9XG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXtpICsgMX1cbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICBpZD17XCJZMlwiICsgaX1cbiAgICAgICAgICBuYW1lPXtcIlkyXCIgKyBpfVxuICAgICAgICAvPixcbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIGxpc3RJdGVtc1kyXG4gIH1cblxuICBjb25zdCBUYWJlbFhZID0gKCkgPT4ge1xuICAgIGxpc3RJdGVtc1hZID0gW11cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGp1bWxhaFRhYmVsOyBpKyspIHtcbiAgICAgIGxpc3RJdGVtc1hZLnB1c2goXG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGtleT17XCJYWVwiICsgaX1cbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e2kgKyAxfVxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIGlkPXtcIlhZXCIgKyBpfVxuICAgICAgICAgIG5hbWU9e1wiWFlcIiArIGl9XG4gICAgICAgIC8+LFxuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gbGlzdEl0ZW1zWFlcbiAgfVxuXG4gIGZ1bmN0aW9uIENhbGN1bGF0aW9uQnV0dG9uKCkge1xuICAgIFN0b3JlLnN0YXRlLmNYID0gW11cbiAgICBTdG9yZS5zdGF0ZS5jWSA9IFtdXG4gICAgU3RvcmUuc3RhdGUuY1gyID0gW11cbiAgICBTdG9yZS5zdGF0ZS5jWTIgPSBbXVxuICAgIFN0b3JlLnN0YXRlLmNYWSA9IFtdXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBqdW1sYWhUYWJlbDsgaSsrKSB7XG4gICAgICBTdG9yZS5zdGF0ZS52YWx1ZXNYW2ldID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJYXCIgKyBpKS52YWx1ZVxuICAgICAgU3RvcmUuc3RhdGUudmFsdWVzWVtpXSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiWVwiICsgaSkudmFsdWVcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBqdW1sYWhUYWJlbDsgaSsrKSB7XG4gICAgICBTdG9yZS5zdGF0ZS5jWFtpXSA9IFN0b3JlLnN0YXRlLnZhbHVlc1hbaV1cbiAgICAgIFN0b3JlLnN0YXRlLmNZW2ldID0gU3RvcmUuc3RhdGUudmFsdWVzWVtpXVxuICAgICAgU3RvcmUuc3RhdGUuY1gyW2ldID0gU3RvcmUuc3RhdGUudmFsdWVzWFtpXSAqIFN0b3JlLnN0YXRlLnZhbHVlc1hbaV1cbiAgICAgIFN0b3JlLnN0YXRlLmNZMltpXSA9IFN0b3JlLnN0YXRlLnZhbHVlc1lbaV0gKiBTdG9yZS5zdGF0ZS52YWx1ZXNZW2ldXG4gICAgICBTdG9yZS5zdGF0ZS5jWFlbaV0gPSBTdG9yZS5zdGF0ZS52YWx1ZXNYW2ldICogU3RvcmUuc3RhdGUudmFsdWVzWVtpXVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhTdG9yZS5zdGF0ZS5jWDIpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDE+VGFiZWw8L2gxPlxuICAgICAgPGgzPkp1bWxhaCBUYWJlbDwvaDM+XG4gICAgICA8aW5wdXRcbiAgICAgICAgZGVmYXVsdFZhbHVlPXtzZXRKdW1sYWhUYWJlbH1cbiAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgIG1pbj17Mn1cbiAgICAgICAgbWF4PXsxMH1cbiAgICAgICAgaWQ9XCJqVGFiZWxcIlxuICAgICAgICBuYW1lPVwialRhYmVsXCJcbiAgICAgIC8+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUJ1dHRvbkNsaWNrfSB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgIEF0dXIgVGFiZWxcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy01IGdhcC0yXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGdhcC0yXCI+WHtUYWJlbFgoKX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgZ2FwLTJcIj5Ze1RhYmVsWSgpfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBnYXAtMlwiPlxuICAgICAgICAgICAgWDJcbiAgICAgICAgICAgIHtUYWJlbFgyKCl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGdhcC0yXCI+XG4gICAgICAgICAgICBZMlxuICAgICAgICAgICAge1RhYmVsWTIoKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgZ2FwLTJcIj5cbiAgICAgICAgICAgIFhZXG4gICAgICAgICAgICB7VGFiZWxYWSgpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtDYWxjdWxhdGlvbkJ1dHRvbn0+Q2FsY3VsYXRlPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dHJlZ3Jlc2lcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlN0b3JlIiwiSW5wdXRyZWdyZXNpIiwianVtbGFoVGFiZWwiLCJzZXRKdW1sYWhUYWJlbCIsInN0YXRlIiwidG90YWxSb3ciLCJsaXN0SXRlbXNYIiwibGlzdEl0ZW1zWSIsImxpc3RJdGVtc1gyIiwibGlzdEl0ZW1zWTIiLCJsaXN0SXRlbXNYWSIsImhhbmRsZUJ1dHRvbkNsaWNrIiwialRhYmVsIiwidmFsdWUiLCJUYWJlbFgiLCJpIiwicHVzaCIsImlucHV0IiwiZGVmYXVsdFZhbHVlIiwidHlwZSIsImlkIiwibmFtZSIsIlRhYmVsWSIsIlRhYmVsWDIiLCJUYWJlbFkyIiwiVGFiZWxYWSIsIkNhbGN1bGF0aW9uQnV0dG9uIiwiY1giLCJjWSIsImNYMiIsImNZMiIsImNYWSIsInZhbHVlc1giLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWVzWSIsImNvbnNvbGUiLCJsb2ciLCJoMSIsImgzIiwibWluIiwibWF4IiwiYnV0dG9uIiwib25DbGljayIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Inputregresi.jsx\n"));

/***/ })

});