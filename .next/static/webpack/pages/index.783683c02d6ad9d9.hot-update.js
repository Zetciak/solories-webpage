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

/***/ "./components/indexPage/team/teamStyle.js":
/*!************************************************!*\
  !*** ./components/indexPage/team/teamStyle.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)({\n    mainDiv: {\n        width: '100%',\n        marginTop: '171px',\n        float: 'left'\n    },\n    insideDivTitle: {\n        width: '1132px',\n        margin: '0 auto'\n    },\n    insideDiv: {\n        width: '1175px',\n        margin: '0 auto'\n    },\n    titleDiv: {\n        width: '432px',\n        height: '59px'\n    },\n    allSlides: {\n        marginTop: '71px'\n    },\n    arrowLeft: {\n        width: '42px',\n        height: '42px',\n        float: 'left',\n        marginRight: '37px'\n    },\n    arrowRight: {\n        width: '42px',\n        height: '42px',\n        float: 'left',\n        transform: 'rotate(180deg)',\n        marginLeft: '25px'\n    },\n    sliderDiv: {\n        width: '1030px',\n        float: 'left'\n    },\n    insideOneSlideOutside: {\n        width: '330px'\n    },\n    insideOneSlide: {\n        width: '300px',\n        height: '377px',\n        background: '#FFFFFF',\n        borderRadius: '18px',\n        margin: '0 auto'\n    },\n    bigImage: {\n        width: '252px',\n        height: '252px',\n        borderRadius: '10px',\n        marginLeft: 'auto',\n        marginRight: 'auto',\n        paddingTop: '24px'\n    },\n    smallImage: {\n        width: '72px',\n        height: '72px',\n        borderRadius: '1000px',\n        marginLeft: 'auto',\n        marginRight: 'auto',\n        padding: '4px',\n        borderSize: '3px',\n        borderStyle: 'solid',\n        borderColor: 'rgb(233,212,218)',\n        position: 'absolute',\n        top: '3px',\n        right: '33px'\n    },\n    firstLine: {\n        marginTop: '18px'\n    },\n    nameTypo: {\n        fontFamily: 'Orbitron',\n        fontStyle: 'normal',\n        fontWeight: '600',\n        fontSize: '14px',\n        lineHeight: '24px',\n        textTransform: 'uppercase',\n        marginLeft: '24px',\n        color: '#636363',\n        float: 'left'\n    },\n    roleTypo: {\n        marginTop: '8px',\n        fontFamily: 'Orbitron',\n        fontStyle: 'normal',\n        fontWeight: '400',\n        fontSize: '12px',\n        lineHeight: '24px',\n        textTransform: 'uppercase',\n        marginLeft: '24px',\n        color: '#636363',\n        clear: 'both'\n    },\n    teamLinks: {\n        float: 'right',\n        marginRight: '24px',\n        marginTop: '3px'\n    },\n    linkedIn: {\n        width: '19px',\n        height: '19px',\n        float: 'left',\n        opacity: '1',\n        transition: 'opacity .5s',\n        '&:hover': {\n            opacity: '0.7'\n        }\n    },\n    twitter: {\n        width: '19px',\n        height: '15px',\n        marginLeft: '13px',\n        float: 'left',\n        opacity: '1',\n        transition: 'opacity .5s',\n        '&:hover': {\n            opacity: '0.7'\n        }\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (useStyles);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2luZGV4UGFnZS90ZWFtL3RlYW1TdHlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOztBQUFxRDtBQUVyRCxHQUFLLENBQUNDLFNBQVMsR0FBR0Qsb0VBQVUsQ0FBQyxDQUFDO0lBQzdCRSxPQUFPLEVBQUUsQ0FBQztRQUNUQyxLQUFLLEVBQUUsQ0FBTTtRQUNiQyxTQUFTLEVBQUUsQ0FBTztRQUNsQkMsS0FBSyxFQUFFLENBQU07SUFDZCxDQUFDO0lBRURDLGNBQWMsRUFBRSxDQUFDO1FBQ2hCSCxLQUFLLEVBQUUsQ0FBUTtRQUNmSSxNQUFNLEVBQUUsQ0FBUTtJQUNqQixDQUFDO0lBRURDLFNBQVMsRUFBRSxDQUFDO1FBQ1hMLEtBQUssRUFBRSxDQUFRO1FBQ2ZJLE1BQU0sRUFBRSxDQUFRO0lBQ2pCLENBQUM7SUFFREUsUUFBUSxFQUFFLENBQUM7UUFDVk4sS0FBSyxFQUFFLENBQU87UUFDZE8sTUFBTSxFQUFFLENBQU07SUFDZixDQUFDO0lBRURDLFNBQVMsRUFBRSxDQUFDO1FBQ1hQLFNBQVMsRUFBRSxDQUFNO0lBQ2xCLENBQUM7SUFFRFEsU0FBUyxFQUFFLENBQUM7UUFDWFQsS0FBSyxFQUFFLENBQU07UUFDYk8sTUFBTSxFQUFFLENBQU07UUFDZEwsS0FBSyxFQUFFLENBQU07UUFDYlEsV0FBVyxFQUFFLENBQU07SUFDcEIsQ0FBQztJQUVEQyxVQUFVLEVBQUUsQ0FBQztRQUNaWCxLQUFLLEVBQUUsQ0FBTTtRQUNiTyxNQUFNLEVBQUUsQ0FBTTtRQUNkTCxLQUFLLEVBQUUsQ0FBTTtRQUNiVSxTQUFTLEVBQUUsQ0FBZ0I7UUFDM0JDLFVBQVUsRUFBRSxDQUFNO0lBQ25CLENBQUM7SUFFREMsU0FBUyxFQUFFLENBQUM7UUFDWGQsS0FBSyxFQUFFLENBQVE7UUFDZkUsS0FBSyxFQUFFLENBQU07SUFDZCxDQUFDO0lBRURhLHFCQUFxQixFQUFFLENBQUM7UUFDdkJmLEtBQUssRUFBRSxDQUFPO0lBQ2YsQ0FBQztJQUVEZ0IsY0FBYyxFQUFFLENBQUM7UUFDaEJoQixLQUFLLEVBQUUsQ0FBTztRQUNkTyxNQUFNLEVBQUUsQ0FBTztRQUNmVSxVQUFVLEVBQUUsQ0FBUztRQUNyQkMsWUFBWSxFQUFFLENBQU07UUFDcEJkLE1BQU0sRUFBRSxDQUFRO0lBQ2pCLENBQUM7SUFFRGUsUUFBUSxFQUFFLENBQUM7UUFDVm5CLEtBQUssRUFBRSxDQUFPO1FBQ2RPLE1BQU0sRUFBRSxDQUFPO1FBQ2ZXLFlBQVksRUFBRSxDQUFNO1FBQ3BCTCxVQUFVLEVBQUUsQ0FBTTtRQUNsQkgsV0FBVyxFQUFFLENBQU07UUFDbkJVLFVBQVUsRUFBRSxDQUFNO0lBQ25CLENBQUM7SUFFREMsVUFBVSxFQUFFLENBQUM7UUFDWnJCLEtBQUssRUFBRSxDQUFNO1FBQ2JPLE1BQU0sRUFBRSxDQUFNO1FBQ2RXLFlBQVksRUFBRSxDQUFRO1FBQ3RCTCxVQUFVLEVBQUUsQ0FBTTtRQUNsQkgsV0FBVyxFQUFFLENBQU07UUFDbkJZLE9BQU8sRUFBRSxDQUFLO1FBQ2RDLFVBQVUsRUFBRSxDQUFLO1FBQ2pCQyxXQUFXLEVBQUUsQ0FBTztRQUNwQkMsV0FBVyxFQUFFLENBQWtCO1FBQy9CQyxRQUFRLEVBQUUsQ0FBVTtRQUNwQkMsR0FBRyxFQUFFLENBQUs7UUFDVkMsS0FBSyxFQUFFLENBQU07SUFDZCxDQUFDO0lBRURDLFNBQVMsRUFBRSxDQUFDO1FBQ1g1QixTQUFTLEVBQUUsQ0FBTTtJQUNsQixDQUFDO0lBRUQ2QixRQUFRLEVBQUUsQ0FBQztRQUNWQyxVQUFVLEVBQUUsQ0FBVTtRQUN0QkMsU0FBUyxFQUFFLENBQVE7UUFDbkJDLFVBQVUsRUFBRSxDQUFLO1FBQ2pCQyxRQUFRLEVBQUUsQ0FBTTtRQUNoQkMsVUFBVSxFQUFFLENBQU07UUFDbEJDLGFBQWEsRUFBRSxDQUFXO1FBQzFCdkIsVUFBVSxFQUFFLENBQU07UUFDbEJ3QixLQUFLLEVBQUUsQ0FBUztRQUNoQm5DLEtBQUssRUFBRSxDQUFNO0lBQ2QsQ0FBQztJQUVEb0MsUUFBUSxFQUFFLENBQUM7UUFDVnJDLFNBQVMsRUFBRSxDQUFLO1FBQ2hCOEIsVUFBVSxFQUFFLENBQVU7UUFDdEJDLFNBQVMsRUFBRSxDQUFRO1FBQ25CQyxVQUFVLEVBQUUsQ0FBSztRQUNqQkMsUUFBUSxFQUFFLENBQU07UUFDaEJDLFVBQVUsRUFBRSxDQUFNO1FBQ2xCQyxhQUFhLEVBQUUsQ0FBVztRQUMxQnZCLFVBQVUsRUFBRSxDQUFNO1FBQ2xCd0IsS0FBSyxFQUFFLENBQVM7UUFDaEJFLEtBQUssRUFBRSxDQUFNO0lBQ2QsQ0FBQztJQUVEQyxTQUFTLEVBQUUsQ0FBQztRQUNYdEMsS0FBSyxFQUFFLENBQU87UUFDZFEsV0FBVyxFQUFFLENBQU07UUFDbkJULFNBQVMsRUFBRSxDQUFLO0lBQ2pCLENBQUM7SUFFRHdDLFFBQVEsRUFBRSxDQUFDO1FBQ1Z6QyxLQUFLLEVBQUUsQ0FBTTtRQUNiTyxNQUFNLEVBQUUsQ0FBTTtRQUNkTCxLQUFLLEVBQUUsQ0FBTTtRQUNid0MsT0FBTyxFQUFFLENBQUc7UUFDWkMsVUFBVSxFQUFFLENBQWE7UUFDekIsQ0FBUyxVQUFFLENBQUM7WUFDWEQsT0FBTyxFQUFFLENBQUs7UUFDZixDQUFDO0lBQ0YsQ0FBQztJQUVERSxPQUFPLEVBQUUsQ0FBQztRQUNUNUMsS0FBSyxFQUFFLENBQU07UUFDYk8sTUFBTSxFQUFFLENBQU07UUFDZE0sVUFBVSxFQUFFLENBQU07UUFDbEJYLEtBQUssRUFBRSxDQUFNO1FBRWJ3QyxPQUFPLEVBQUUsQ0FBRztRQUNaQyxVQUFVLEVBQUUsQ0FBYTtRQUN6QixDQUFTLFVBQUUsQ0FBQztZQUNYRCxPQUFPLEVBQUUsQ0FBSztRQUNmLENBQUM7SUFDRixDQUFDO0FBQ0YsQ0FBQztBQUVELCtEQUFlNUMsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaW5kZXhQYWdlL3RlYW0vdGVhbVN0eWxlLmpzP2Q1M2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuXHRtYWluRGl2OiB7XHJcblx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdFx0bWFyZ2luVG9wOiAnMTcxcHgnLFxyXG5cdFx0ZmxvYXQ6ICdsZWZ0JyxcclxuXHR9LFxyXG5cclxuXHRpbnNpZGVEaXZUaXRsZToge1xyXG5cdFx0d2lkdGg6ICcxMTMycHgnLFxyXG5cdFx0bWFyZ2luOiAnMCBhdXRvJyxcclxuXHR9LFxyXG5cclxuXHRpbnNpZGVEaXY6IHtcclxuXHRcdHdpZHRoOiAnMTE3NXB4JyxcclxuXHRcdG1hcmdpbjogJzAgYXV0bycsXHJcblx0fSxcclxuXHJcblx0dGl0bGVEaXY6IHtcclxuXHRcdHdpZHRoOiAnNDMycHgnLFxyXG5cdFx0aGVpZ2h0OiAnNTlweCcsXHJcblx0fSxcclxuXHJcblx0YWxsU2xpZGVzOiB7XHJcblx0XHRtYXJnaW5Ub3A6ICc3MXB4JyxcclxuXHR9LFxyXG5cclxuXHRhcnJvd0xlZnQ6IHtcclxuXHRcdHdpZHRoOiAnNDJweCcsXHJcblx0XHRoZWlnaHQ6ICc0MnB4JyxcclxuXHRcdGZsb2F0OiAnbGVmdCcsXHJcblx0XHRtYXJnaW5SaWdodDogJzM3cHgnLFxyXG5cdH0sXHJcblxyXG5cdGFycm93UmlnaHQ6IHtcclxuXHRcdHdpZHRoOiAnNDJweCcsXHJcblx0XHRoZWlnaHQ6ICc0MnB4JyxcclxuXHRcdGZsb2F0OiAnbGVmdCcsXHJcblx0XHR0cmFuc2Zvcm06ICdyb3RhdGUoMTgwZGVnKScsXHJcblx0XHRtYXJnaW5MZWZ0OiAnMjVweCcsXHJcblx0fSxcclxuXHJcblx0c2xpZGVyRGl2OiB7XHJcblx0XHR3aWR0aDogJzEwMzBweCcsXHJcblx0XHRmbG9hdDogJ2xlZnQnLFxyXG5cdH0sXHJcblxyXG5cdGluc2lkZU9uZVNsaWRlT3V0c2lkZToge1xyXG5cdFx0d2lkdGg6ICczMzBweCcsXHJcblx0fSxcclxuXHJcblx0aW5zaWRlT25lU2xpZGU6IHtcclxuXHRcdHdpZHRoOiAnMzAwcHgnLFxyXG5cdFx0aGVpZ2h0OiAnMzc3cHgnLFxyXG5cdFx0YmFja2dyb3VuZDogJyNGRkZGRkYnLFxyXG5cdFx0Ym9yZGVyUmFkaXVzOiAnMThweCcsXHJcblx0XHRtYXJnaW46ICcwIGF1dG8nLFxyXG5cdH0sXHJcblxyXG5cdGJpZ0ltYWdlOiB7XHJcblx0XHR3aWR0aDogJzI1MnB4JyxcclxuXHRcdGhlaWdodDogJzI1MnB4JyxcclxuXHRcdGJvcmRlclJhZGl1czogJzEwcHgnLFxyXG5cdFx0bWFyZ2luTGVmdDogJ2F1dG8nLFxyXG5cdFx0bWFyZ2luUmlnaHQ6ICdhdXRvJyxcclxuXHRcdHBhZGRpbmdUb3A6ICcyNHB4JyxcclxuXHR9LFxyXG5cclxuXHRzbWFsbEltYWdlOiB7XHJcblx0XHR3aWR0aDogJzcycHgnLFxyXG5cdFx0aGVpZ2h0OiAnNzJweCcsXHJcblx0XHRib3JkZXJSYWRpdXM6ICcxMDAwcHgnLFxyXG5cdFx0bWFyZ2luTGVmdDogJ2F1dG8nLFxyXG5cdFx0bWFyZ2luUmlnaHQ6ICdhdXRvJyxcclxuXHRcdHBhZGRpbmc6ICc0cHgnLFxyXG5cdFx0Ym9yZGVyU2l6ZTogJzNweCcsXHJcblx0XHRib3JkZXJTdHlsZTogJ3NvbGlkJyxcclxuXHRcdGJvcmRlckNvbG9yOiAncmdiKDIzMywyMTIsMjE4KScsXHJcblx0XHRwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuXHRcdHRvcDogJzNweCcsXHJcblx0XHRyaWdodDogJzMzcHgnLFxyXG5cdH0sXHJcblxyXG5cdGZpcnN0TGluZToge1xyXG5cdFx0bWFyZ2luVG9wOiAnMThweCcsXHJcblx0fSxcclxuXHJcblx0bmFtZVR5cG86IHtcclxuXHRcdGZvbnRGYW1pbHk6ICdPcmJpdHJvbicsXHJcblx0XHRmb250U3R5bGU6ICdub3JtYWwnLFxyXG5cdFx0Zm9udFdlaWdodDogJzYwMCcsXHJcblx0XHRmb250U2l6ZTogJzE0cHgnLFxyXG5cdFx0bGluZUhlaWdodDogJzI0cHgnLFxyXG5cdFx0dGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXHJcblx0XHRtYXJnaW5MZWZ0OiAnMjRweCcsXHJcblx0XHRjb2xvcjogJyM2MzYzNjMnLFxyXG5cdFx0ZmxvYXQ6ICdsZWZ0JyxcclxuXHR9LFxyXG5cclxuXHRyb2xlVHlwbzoge1xyXG5cdFx0bWFyZ2luVG9wOiAnOHB4JyxcclxuXHRcdGZvbnRGYW1pbHk6ICdPcmJpdHJvbicsXHJcblx0XHRmb250U3R5bGU6ICdub3JtYWwnLFxyXG5cdFx0Zm9udFdlaWdodDogJzQwMCcsXHJcblx0XHRmb250U2l6ZTogJzEycHgnLFxyXG5cdFx0bGluZUhlaWdodDogJzI0cHgnLFxyXG5cdFx0dGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXHJcblx0XHRtYXJnaW5MZWZ0OiAnMjRweCcsXHJcblx0XHRjb2xvcjogJyM2MzYzNjMnLFxyXG5cdFx0Y2xlYXI6ICdib3RoJyxcclxuXHR9LFxyXG5cclxuXHR0ZWFtTGlua3M6IHtcclxuXHRcdGZsb2F0OiAncmlnaHQnLFxyXG5cdFx0bWFyZ2luUmlnaHQ6ICcyNHB4JyxcclxuXHRcdG1hcmdpblRvcDogJzNweCcsXHJcblx0fSxcclxuXHJcblx0bGlua2VkSW46IHtcclxuXHRcdHdpZHRoOiAnMTlweCcsXHJcblx0XHRoZWlnaHQ6ICcxOXB4JyxcclxuXHRcdGZsb2F0OiAnbGVmdCcsXHJcblx0XHRvcGFjaXR5OiAnMScsXHJcblx0XHR0cmFuc2l0aW9uOiAnb3BhY2l0eSAuNXMnLFxyXG5cdFx0JyY6aG92ZXInOiB7XHJcblx0XHRcdG9wYWNpdHk6ICcwLjcnLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cclxuXHR0d2l0dGVyOiB7XHJcblx0XHR3aWR0aDogJzE5cHgnLFxyXG5cdFx0aGVpZ2h0OiAnMTVweCcsXHJcblx0XHRtYXJnaW5MZWZ0OiAnMTNweCcsXHJcblx0XHRmbG9hdDogJ2xlZnQnLFxyXG5cclxuXHRcdG9wYWNpdHk6ICcxJyxcclxuXHRcdHRyYW5zaXRpb246ICdvcGFjaXR5IC41cycsXHJcblx0XHQnJjpob3Zlcic6IHtcclxuXHRcdFx0b3BhY2l0eTogJzAuNycsXHJcblx0XHR9LFxyXG5cdH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlU3R5bGVzO1xyXG4iXSwibmFtZXMiOlsibWFrZVN0eWxlcyIsInVzZVN0eWxlcyIsIm1haW5EaXYiLCJ3aWR0aCIsIm1hcmdpblRvcCIsImZsb2F0IiwiaW5zaWRlRGl2VGl0bGUiLCJtYXJnaW4iLCJpbnNpZGVEaXYiLCJ0aXRsZURpdiIsImhlaWdodCIsImFsbFNsaWRlcyIsImFycm93TGVmdCIsIm1hcmdpblJpZ2h0IiwiYXJyb3dSaWdodCIsInRyYW5zZm9ybSIsIm1hcmdpbkxlZnQiLCJzbGlkZXJEaXYiLCJpbnNpZGVPbmVTbGlkZU91dHNpZGUiLCJpbnNpZGVPbmVTbGlkZSIsImJhY2tncm91bmQiLCJib3JkZXJSYWRpdXMiLCJiaWdJbWFnZSIsInBhZGRpbmdUb3AiLCJzbWFsbEltYWdlIiwicGFkZGluZyIsImJvcmRlclNpemUiLCJib3JkZXJTdHlsZSIsImJvcmRlckNvbG9yIiwicG9zaXRpb24iLCJ0b3AiLCJyaWdodCIsImZpcnN0TGluZSIsIm5hbWVUeXBvIiwiZm9udEZhbWlseSIsImZvbnRTdHlsZSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJ0ZXh0VHJhbnNmb3JtIiwiY29sb3IiLCJyb2xlVHlwbyIsImNsZWFyIiwidGVhbUxpbmtzIiwibGlua2VkSW4iLCJvcGFjaXR5IiwidHJhbnNpdGlvbiIsInR3aXR0ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/indexPage/team/teamStyle.js\n");

/***/ })

});