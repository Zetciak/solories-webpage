"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/indexPage/utilities/utilitiesStyle.js":
/*!**********************************************************!*\
  !*** ./components/indexPage/utilities/utilitiesStyle.js ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nvar _obj;\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)((_obj = {\n    mainDiv: {\n        width: '100%',\n        marginTop: '171px',\n        float: 'left'\n    },\n    insideDiv: {\n        width: '1132px',\n        margin: '0 auto'\n    },\n    titleDiv: {\n        width: '578px',\n        height: '58px'\n    },\n    mainDesc: {\n        marginTop: '21px',\n        fontFamily: 'Alef',\n        fontStyle: 'normal',\n        fontWeight: '400',\n        fontSize: '14.68px',\n        lineHeight: '200%',\n        color: 'rgba(99, 99, 99, 0.75)',\n        width: '669px'\n    },\n    sliderDiv: {\n        marginTop: '54px'\n    },\n    utilityDot: {\n        width: '35px',\n        height: '35px',\n        margin: '0 auto',\n        marginTop: '30px'\n    },\n    sliderDesc: {\n        marginTop: '30px',\n        fontFamily: 'Alef',\n        fontStyle: 'normal',\n        fontWeight: '400',\n        fontSize: '14px',\n        lineHeight: '200%',\n        color: 'rgba(99, 99, 99, 0.75)',\n        width: '200px',\n        margin: '0 auto',\n        textAlign: 'center'\n    },\n    utility1SlideImage: {\n        width: '134px',\n        height: '161px',\n        margin: '0 auto'\n    },\n    utility2SlideImage: {\n        width: '144px',\n        height: '161px',\n        margin: '0 auto'\n    },\n    utility3SlideImage: {\n        width: '108px',\n        height: '161px',\n        margin: '0 auto'\n    },\n    utility4SlideImage: {\n        width: '133px',\n        height: '161px',\n        margin: '0 auto'\n    },\n    lineDiv: {\n        background: '#A1EEF7',\n        opacity: '0.7',\n        width: '200%',\n        left: '-100%',\n        height: '4px',\n        position: 'absolute',\n        marginTop: '257px'\n    }\n}, //<<<<<<<<<<<<<<<<<<<< Responsive scale\n//1439px\n_defineProperty(_obj, '@media (max-width: 1439px)', {\n    insideDiv: {\n        width: '90%',\n        margin: '0 auto'\n    }\n}), //1020px\n_defineProperty(_obj, '@media (max-width: 1020px)', {\n    titleDiv: {\n        width: '90%',\n        height: 'auto',\n        margin: '0 auto'\n    },\n    mainDesc: {\n        marginTop: '21px',\n        width: '100%',\n        textAlign: 'center'\n    }\n}), //1000px\n_defineProperty(_obj, '@media (max-width: 1000px)', {\n    oneSlide: {\n        width: '100%',\n        height: 'auto',\n        margin: '0 auto'\n    },\n    sliderDesc: {\n        width: '100%',\n        textAlign: 'center'\n    }\n}), _obj));\n/* harmony default export */ __webpack_exports__[\"default\"] = (useStyles);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2luZGV4UGFnZS91dGlsaXRpZXMvdXRpbGl0aWVzU3R5bGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBcUQ7Ozs7Ozs7Ozs7Ozs7O0lBRXhCLElBMkg1QjtBQTNIRCxHQUFLLENBQUNDLFNBQVMsR0FBR0Qsb0VBQVUsRUFBQyxJQTJINUI7SUExSEFFLE9BQU8sRUFBRSxDQUFDO1FBQ1RDLEtBQUssRUFBRSxDQUFNO1FBQ2JDLFNBQVMsRUFBRSxDQUFPO1FBQ2xCQyxLQUFLLEVBQUUsQ0FBTTtJQUNkLENBQUM7SUFFREMsU0FBUyxFQUFFLENBQUM7UUFDWEgsS0FBSyxFQUFFLENBQVE7UUFDZkksTUFBTSxFQUFFLENBQVE7SUFDakIsQ0FBQztJQUVEQyxRQUFRLEVBQUUsQ0FBQztRQUNWTCxLQUFLLEVBQUUsQ0FBTztRQUNkTSxNQUFNLEVBQUUsQ0FBTTtJQUNmLENBQUM7SUFFREMsUUFBUSxFQUFFLENBQUM7UUFDVk4sU0FBUyxFQUFFLENBQU07UUFDakJPLFVBQVUsRUFBRSxDQUFNO1FBQ2xCQyxTQUFTLEVBQUUsQ0FBUTtRQUNuQkMsVUFBVSxFQUFFLENBQUs7UUFDakJDLFFBQVEsRUFBRSxDQUFTO1FBQ25CQyxVQUFVLEVBQUUsQ0FBTTtRQUNsQkMsS0FBSyxFQUFFLENBQXdCO1FBQy9CYixLQUFLLEVBQUUsQ0FBTztJQUNmLENBQUM7SUFFRGMsU0FBUyxFQUFFLENBQUM7UUFDWGIsU0FBUyxFQUFFLENBQU07SUFDbEIsQ0FBQztJQUVEYyxVQUFVLEVBQUUsQ0FBQztRQUNaZixLQUFLLEVBQUUsQ0FBTTtRQUNiTSxNQUFNLEVBQUUsQ0FBTTtRQUNkRixNQUFNLEVBQUUsQ0FBUTtRQUNoQkgsU0FBUyxFQUFFLENBQU07SUFDbEIsQ0FBQztJQUVEZSxVQUFVLEVBQUUsQ0FBQztRQUNaZixTQUFTLEVBQUUsQ0FBTTtRQUNqQk8sVUFBVSxFQUFFLENBQU07UUFDbEJDLFNBQVMsRUFBRSxDQUFRO1FBQ25CQyxVQUFVLEVBQUUsQ0FBSztRQUNqQkMsUUFBUSxFQUFFLENBQU07UUFDaEJDLFVBQVUsRUFBRSxDQUFNO1FBQ2xCQyxLQUFLLEVBQUUsQ0FBd0I7UUFDL0JiLEtBQUssRUFBRSxDQUFPO1FBQ2RJLE1BQU0sRUFBRSxDQUFRO1FBQ2hCYSxTQUFTLEVBQUUsQ0FBUTtJQUNwQixDQUFDO0lBRURDLGtCQUFrQixFQUFFLENBQUM7UUFDcEJsQixLQUFLLEVBQUUsQ0FBTztRQUNkTSxNQUFNLEVBQUUsQ0FBTztRQUNmRixNQUFNLEVBQUUsQ0FBUTtJQUNqQixDQUFDO0lBRURlLGtCQUFrQixFQUFFLENBQUM7UUFDcEJuQixLQUFLLEVBQUUsQ0FBTztRQUNkTSxNQUFNLEVBQUUsQ0FBTztRQUNmRixNQUFNLEVBQUUsQ0FBUTtJQUNqQixDQUFDO0lBRURnQixrQkFBa0IsRUFBRSxDQUFDO1FBQ3BCcEIsS0FBSyxFQUFFLENBQU87UUFDZE0sTUFBTSxFQUFFLENBQU87UUFDZkYsTUFBTSxFQUFFLENBQVE7SUFDakIsQ0FBQztJQUVEaUIsa0JBQWtCLEVBQUUsQ0FBQztRQUNwQnJCLEtBQUssRUFBRSxDQUFPO1FBQ2RNLE1BQU0sRUFBRSxDQUFPO1FBQ2ZGLE1BQU0sRUFBRSxDQUFRO0lBQ2pCLENBQUM7SUFFRGtCLE9BQU8sRUFBRSxDQUFDO1FBQ1RDLFVBQVUsRUFBRSxDQUFTO1FBQ3JCQyxPQUFPLEVBQUUsQ0FBSztRQUNkeEIsS0FBSyxFQUFFLENBQU07UUFDYnlCLElBQUksRUFBRSxDQUFPO1FBQ2JuQixNQUFNLEVBQUUsQ0FBSztRQUNib0IsUUFBUSxFQUFFLENBQVU7UUFDcEJ6QixTQUFTLEVBQUUsQ0FBTztJQUNuQixDQUFDO0dBRUQsRUFBdUM7QUFDdkMsRUFBUTtnQkF2Rm9CLElBMkg1QixFQW5DQyxDQUE0Qiw2QkFBRyxDQUFDO0lBQ2hDRSxTQUFTLEVBQUUsQ0FBQztRQUNYSCxLQUFLLEVBQUUsQ0FBSztRQUNaSSxNQUFNLEVBQUUsQ0FBUTtJQUNqQixDQUFDO0FBQ0YsQ0FBQyxHQUVELEVBQVE7Z0JBL0ZvQixJQTJINUIsRUEzQkMsQ0FBNEIsNkJBQUcsQ0FBQztJQUNoQ0MsUUFBUSxFQUFFLENBQUM7UUFDVkwsS0FBSyxFQUFFLENBQUs7UUFDWk0sTUFBTSxFQUFFLENBQU07UUFDZEYsTUFBTSxFQUFFLENBQVE7SUFDakIsQ0FBQztJQUVERyxRQUFRLEVBQUUsQ0FBQztRQUNWTixTQUFTLEVBQUUsQ0FBTTtRQUNqQkQsS0FBSyxFQUFFLENBQU07UUFDYmlCLFNBQVMsRUFBRSxDQUFRO0lBQ3BCLENBQUM7QUFDRixDQUFDLEdBRUQsRUFBUTtnQkE5R29CLElBMkg1QixFQVpDLENBQTRCLDZCQUFHLENBQUM7SUFDaENVLFFBQVEsRUFBRSxDQUFDO1FBQ1YzQixLQUFLLEVBQUUsQ0FBTTtRQUNiTSxNQUFNLEVBQUUsQ0FBTTtRQUNkRixNQUFNLEVBQUUsQ0FBUTtJQUNqQixDQUFDO0lBRURZLFVBQVUsRUFBRSxDQUFDO1FBQ1poQixLQUFLLEVBQUUsQ0FBTTtRQUNiaUIsU0FBUyxFQUFFLENBQVE7SUFDcEIsQ0FBQztBQUNGLENBQUMsR0ExSDJCLElBMkg1QjtBQUVELCtEQUFlbkIsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaW5kZXhQYWdlL3V0aWxpdGllcy91dGlsaXRpZXNTdHlsZS5qcz9jZDE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcblx0bWFpbkRpdjoge1xyXG5cdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdG1hcmdpblRvcDogJzE3MXB4JyxcclxuXHRcdGZsb2F0OiAnbGVmdCcsXHJcblx0fSxcclxuXHJcblx0aW5zaWRlRGl2OiB7XHJcblx0XHR3aWR0aDogJzExMzJweCcsXHJcblx0XHRtYXJnaW46ICcwIGF1dG8nLFxyXG5cdH0sXHJcblxyXG5cdHRpdGxlRGl2OiB7XHJcblx0XHR3aWR0aDogJzU3OHB4JyxcclxuXHRcdGhlaWdodDogJzU4cHgnLFxyXG5cdH0sXHJcblxyXG5cdG1haW5EZXNjOiB7XHJcblx0XHRtYXJnaW5Ub3A6ICcyMXB4JyxcclxuXHRcdGZvbnRGYW1pbHk6ICdBbGVmJyxcclxuXHRcdGZvbnRTdHlsZTogJ25vcm1hbCcsXHJcblx0XHRmb250V2VpZ2h0OiAnNDAwJyxcclxuXHRcdGZvbnRTaXplOiAnMTQuNjhweCcsXHJcblx0XHRsaW5lSGVpZ2h0OiAnMjAwJScsXHJcblx0XHRjb2xvcjogJ3JnYmEoOTksIDk5LCA5OSwgMC43NSknLFxyXG5cdFx0d2lkdGg6ICc2NjlweCcsXHJcblx0fSxcclxuXHJcblx0c2xpZGVyRGl2OiB7XHJcblx0XHRtYXJnaW5Ub3A6ICc1NHB4JyxcclxuXHR9LFxyXG5cclxuXHR1dGlsaXR5RG90OiB7XHJcblx0XHR3aWR0aDogJzM1cHgnLFxyXG5cdFx0aGVpZ2h0OiAnMzVweCcsXHJcblx0XHRtYXJnaW46ICcwIGF1dG8nLFxyXG5cdFx0bWFyZ2luVG9wOiAnMzBweCcsXHJcblx0fSxcclxuXHJcblx0c2xpZGVyRGVzYzoge1xyXG5cdFx0bWFyZ2luVG9wOiAnMzBweCcsXHJcblx0XHRmb250RmFtaWx5OiAnQWxlZicsXHJcblx0XHRmb250U3R5bGU6ICdub3JtYWwnLFxyXG5cdFx0Zm9udFdlaWdodDogJzQwMCcsXHJcblx0XHRmb250U2l6ZTogJzE0cHgnLFxyXG5cdFx0bGluZUhlaWdodDogJzIwMCUnLFxyXG5cdFx0Y29sb3I6ICdyZ2JhKDk5LCA5OSwgOTksIDAuNzUpJyxcclxuXHRcdHdpZHRoOiAnMjAwcHgnLFxyXG5cdFx0bWFyZ2luOiAnMCBhdXRvJyxcclxuXHRcdHRleHRBbGlnbjogJ2NlbnRlcicsXHJcblx0fSxcclxuXHJcblx0dXRpbGl0eTFTbGlkZUltYWdlOiB7XHJcblx0XHR3aWR0aDogJzEzNHB4JyxcclxuXHRcdGhlaWdodDogJzE2MXB4JyxcclxuXHRcdG1hcmdpbjogJzAgYXV0bycsXHJcblx0fSxcclxuXHJcblx0dXRpbGl0eTJTbGlkZUltYWdlOiB7XHJcblx0XHR3aWR0aDogJzE0NHB4JyxcclxuXHRcdGhlaWdodDogJzE2MXB4JyxcclxuXHRcdG1hcmdpbjogJzAgYXV0bycsXHJcblx0fSxcclxuXHJcblx0dXRpbGl0eTNTbGlkZUltYWdlOiB7XHJcblx0XHR3aWR0aDogJzEwOHB4JyxcclxuXHRcdGhlaWdodDogJzE2MXB4JyxcclxuXHRcdG1hcmdpbjogJzAgYXV0bycsXHJcblx0fSxcclxuXHJcblx0dXRpbGl0eTRTbGlkZUltYWdlOiB7XHJcblx0XHR3aWR0aDogJzEzM3B4JyxcclxuXHRcdGhlaWdodDogJzE2MXB4JyxcclxuXHRcdG1hcmdpbjogJzAgYXV0bycsXHJcblx0fSxcclxuXHJcblx0bGluZURpdjoge1xyXG5cdFx0YmFja2dyb3VuZDogJyNBMUVFRjcnLFxyXG5cdFx0b3BhY2l0eTogJzAuNycsXHJcblx0XHR3aWR0aDogJzIwMCUnLFxyXG5cdFx0bGVmdDogJy0xMDAlJyxcclxuXHRcdGhlaWdodDogJzRweCcsXHJcblx0XHRwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuXHRcdG1hcmdpblRvcDogJzI1N3B4JyxcclxuXHR9LFxyXG5cclxuXHQvLzw8PDw8PDw8PDw8PDw8PDw8PDw8IFJlc3BvbnNpdmUgc2NhbGVcclxuXHQvLzE0MzlweFxyXG5cdFsnQG1lZGlhIChtYXgtd2lkdGg6IDE0MzlweCknXToge1xyXG5cdFx0aW5zaWRlRGl2OiB7XHJcblx0XHRcdHdpZHRoOiAnOTAlJyxcclxuXHRcdFx0bWFyZ2luOiAnMCBhdXRvJyxcclxuXHRcdH0sXHJcblx0fSxcclxuXHJcblx0Ly8xMDIwcHhcclxuXHRbJ0BtZWRpYSAobWF4LXdpZHRoOiAxMDIwcHgpJ106IHtcclxuXHRcdHRpdGxlRGl2OiB7XHJcblx0XHRcdHdpZHRoOiAnOTAlJyxcclxuXHRcdFx0aGVpZ2h0OiAnYXV0bycsXHJcblx0XHRcdG1hcmdpbjogJzAgYXV0bycsXHJcblx0XHR9LFxyXG5cclxuXHRcdG1haW5EZXNjOiB7XHJcblx0XHRcdG1hcmdpblRvcDogJzIxcHgnLFxyXG5cdFx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdFx0XHR0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cclxuXHQvLzEwMDBweFxyXG5cdFsnQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCknXToge1xyXG5cdFx0b25lU2xpZGU6IHtcclxuXHRcdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdFx0aGVpZ2h0OiAnYXV0bycsXHJcblx0XHRcdG1hcmdpbjogJzAgYXV0bycsXHJcblx0XHR9LFxyXG5cclxuXHRcdHNsaWRlckRlc2M6IHtcclxuXHRcdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdFx0dGV4dEFsaWduOiAnY2VudGVyJyxcclxuXHRcdH0sXHJcblx0fSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VTdHlsZXM7XHJcbiJdLCJuYW1lcyI6WyJtYWtlU3R5bGVzIiwidXNlU3R5bGVzIiwibWFpbkRpdiIsIndpZHRoIiwibWFyZ2luVG9wIiwiZmxvYXQiLCJpbnNpZGVEaXYiLCJtYXJnaW4iLCJ0aXRsZURpdiIsImhlaWdodCIsIm1haW5EZXNjIiwiZm9udEZhbWlseSIsImZvbnRTdHlsZSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJjb2xvciIsInNsaWRlckRpdiIsInV0aWxpdHlEb3QiLCJzbGlkZXJEZXNjIiwidGV4dEFsaWduIiwidXRpbGl0eTFTbGlkZUltYWdlIiwidXRpbGl0eTJTbGlkZUltYWdlIiwidXRpbGl0eTNTbGlkZUltYWdlIiwidXRpbGl0eTRTbGlkZUltYWdlIiwibGluZURpdiIsImJhY2tncm91bmQiLCJvcGFjaXR5IiwibGVmdCIsInBvc2l0aW9uIiwib25lU2xpZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/indexPage/utilities/utilitiesStyle.js\n");

/***/ })

});