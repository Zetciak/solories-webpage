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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)({\n    mainDiv: {\n        width: '100%',\n        marginTop: '171px',\n        float: 'left'\n    },\n    insideDiv: {\n        width: '1132px',\n        margin: '0 auto'\n    },\n    titleDiv: {\n        width: '432px',\n        height: '59px'\n    },\n    allSlides: {\n        marginTop: '71px'\n    },\n    arrowLeft: {\n        width: '42px',\n        height: '42px',\n        float: 'left',\n        marginRight: '27px'\n    },\n    arrowRight: {\n        width: '42px',\n        height: '42px',\n        float: 'left',\n        transform: 'rotate(180deg)',\n        marginLeft: '27px'\n    },\n    sliderDiv: {\n        margin: '0 auto',\n        width: '1030px',\n        float: 'left'\n    },\n    insideOneSlide: {\n        width: '300px',\n        height: '377px',\n        background: '#FFFFFF',\n        borderRadius: '18px'\n    },\n    bigImage: {\n        width: '252px',\n        height: '252px',\n        borderRadius: '10px',\n        marginLeft: 'auto',\n        marginRight: 'auto',\n        paddingTop: '24px'\n    },\n    smallImage: {\n        width: '72px',\n        height: '72px',\n        borderRadius: '1000px',\n        marginLeft: 'auto',\n        marginRight: 'auto',\n        padding: '4px',\n        borderSize: '3px',\n        borderStyle: 'solid',\n        borderColor: 'rgb(233,212,218)',\n        position: 'absolute',\n        top: '3px',\n        right: '4px'\n    },\n    firstLine: {\n        marginTop: '18px'\n    },\n    nameTypo: {\n        fontFamily: 'Orbitron',\n        fontStyle: 'normal',\n        fontWeight: '600',\n        fontSize: '14px',\n        lineHeight: '24px',\n        textTransform: 'uppercase',\n        marginLeft: '24px',\n        color: '#636363',\n        float: 'left'\n    },\n    roleTypo: {\n        marginTop: '8px',\n        fontFamily: 'Orbitron',\n        fontStyle: 'normal',\n        fontWeight: '400',\n        fontSize: '12px',\n        lineHeight: '24px',\n        textTransform: 'uppercase',\n        marginLeft: '24px',\n        color: '#636363',\n        clear: 'both'\n    },\n    teamLinks: {\n        float: 'right',\n        marginRight: '24px',\n        marginTop: '3px'\n    },\n    linkedIn: {\n        width: '19px',\n        height: '19px',\n        float: 'left',\n        opacity: '1',\n        transition: 'opacity .5s',\n        '&:hover': {\n            opacity: '0.7'\n        }\n    },\n    twitter: {\n        width: '19px',\n        height: '15px',\n        marginLeft: '13px',\n        float: 'left',\n        opacity: '1',\n        transition: 'opacity .5s',\n        '&:hover': {\n            opacity: '0.7'\n        }\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (useStyles);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2luZGV4UGFnZS90ZWFtL3RlYW1TdHlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOztBQUFxRDtBQUVyRCxHQUFLLENBQUNDLFNBQVMsR0FBR0Qsb0VBQVUsQ0FBQyxDQUFDO0lBQzdCRSxPQUFPLEVBQUUsQ0FBQztRQUNUQyxLQUFLLEVBQUUsQ0FBTTtRQUNiQyxTQUFTLEVBQUUsQ0FBTztRQUNsQkMsS0FBSyxFQUFFLENBQU07SUFDZCxDQUFDO0lBRURDLFNBQVMsRUFBRSxDQUFDO1FBQ1hILEtBQUssRUFBRSxDQUFRO1FBQ2ZJLE1BQU0sRUFBRSxDQUFRO0lBQ2pCLENBQUM7SUFFREMsUUFBUSxFQUFFLENBQUM7UUFDVkwsS0FBSyxFQUFFLENBQU87UUFDZE0sTUFBTSxFQUFFLENBQU07SUFDZixDQUFDO0lBRURDLFNBQVMsRUFBRSxDQUFDO1FBQ1hOLFNBQVMsRUFBRSxDQUFNO0lBQ2xCLENBQUM7SUFFRE8sU0FBUyxFQUFFLENBQUM7UUFDWFIsS0FBSyxFQUFFLENBQU07UUFDYk0sTUFBTSxFQUFFLENBQU07UUFDZEosS0FBSyxFQUFFLENBQU07UUFDYk8sV0FBVyxFQUFFLENBQU07SUFDcEIsQ0FBQztJQUVEQyxVQUFVLEVBQUUsQ0FBQztRQUNaVixLQUFLLEVBQUUsQ0FBTTtRQUNiTSxNQUFNLEVBQUUsQ0FBTTtRQUNkSixLQUFLLEVBQUUsQ0FBTTtRQUNiUyxTQUFTLEVBQUUsQ0FBZ0I7UUFDM0JDLFVBQVUsRUFBRSxDQUFNO0lBQ25CLENBQUM7SUFFREMsU0FBUyxFQUFFLENBQUM7UUFDWFQsTUFBTSxFQUFFLENBQVE7UUFDaEJKLEtBQUssRUFBRSxDQUFRO1FBQ2ZFLEtBQUssRUFBRSxDQUFNO0lBQ2QsQ0FBQztJQUVEWSxjQUFjLEVBQUUsQ0FBQztRQUNoQmQsS0FBSyxFQUFFLENBQU87UUFDZE0sTUFBTSxFQUFFLENBQU87UUFDZlMsVUFBVSxFQUFFLENBQVM7UUFDckJDLFlBQVksRUFBRSxDQUFNO0lBQ3JCLENBQUM7SUFFREMsUUFBUSxFQUFFLENBQUM7UUFDVmpCLEtBQUssRUFBRSxDQUFPO1FBQ2RNLE1BQU0sRUFBRSxDQUFPO1FBQ2ZVLFlBQVksRUFBRSxDQUFNO1FBQ3BCSixVQUFVLEVBQUUsQ0FBTTtRQUNsQkgsV0FBVyxFQUFFLENBQU07UUFDbkJTLFVBQVUsRUFBRSxDQUFNO0lBQ25CLENBQUM7SUFFREMsVUFBVSxFQUFFLENBQUM7UUFDWm5CLEtBQUssRUFBRSxDQUFNO1FBQ2JNLE1BQU0sRUFBRSxDQUFNO1FBQ2RVLFlBQVksRUFBRSxDQUFRO1FBQ3RCSixVQUFVLEVBQUUsQ0FBTTtRQUNsQkgsV0FBVyxFQUFFLENBQU07UUFDbkJXLE9BQU8sRUFBRSxDQUFLO1FBQ2RDLFVBQVUsRUFBRSxDQUFLO1FBQ2pCQyxXQUFXLEVBQUUsQ0FBTztRQUNwQkMsV0FBVyxFQUFFLENBQWtCO1FBQy9CQyxRQUFRLEVBQUUsQ0FBVTtRQUNwQkMsR0FBRyxFQUFFLENBQUs7UUFDVkMsS0FBSyxFQUFFLENBQUs7SUFDYixDQUFDO0lBRURDLFNBQVMsRUFBRSxDQUFDO1FBQ1gxQixTQUFTLEVBQUUsQ0FBTTtJQUNsQixDQUFDO0lBRUQyQixRQUFRLEVBQUUsQ0FBQztRQUNWQyxVQUFVLEVBQUUsQ0FBVTtRQUN0QkMsU0FBUyxFQUFFLENBQVE7UUFDbkJDLFVBQVUsRUFBRSxDQUFLO1FBQ2pCQyxRQUFRLEVBQUUsQ0FBTTtRQUNoQkMsVUFBVSxFQUFFLENBQU07UUFDbEJDLGFBQWEsRUFBRSxDQUFXO1FBQzFCdEIsVUFBVSxFQUFFLENBQU07UUFDbEJ1QixLQUFLLEVBQUUsQ0FBUztRQUNoQmpDLEtBQUssRUFBRSxDQUFNO0lBQ2QsQ0FBQztJQUVEa0MsUUFBUSxFQUFFLENBQUM7UUFDVm5DLFNBQVMsRUFBRSxDQUFLO1FBQ2hCNEIsVUFBVSxFQUFFLENBQVU7UUFDdEJDLFNBQVMsRUFBRSxDQUFRO1FBQ25CQyxVQUFVLEVBQUUsQ0FBSztRQUNqQkMsUUFBUSxFQUFFLENBQU07UUFDaEJDLFVBQVUsRUFBRSxDQUFNO1FBQ2xCQyxhQUFhLEVBQUUsQ0FBVztRQUMxQnRCLFVBQVUsRUFBRSxDQUFNO1FBQ2xCdUIsS0FBSyxFQUFFLENBQVM7UUFDaEJFLEtBQUssRUFBRSxDQUFNO0lBQ2QsQ0FBQztJQUVEQyxTQUFTLEVBQUUsQ0FBQztRQUNYcEMsS0FBSyxFQUFFLENBQU87UUFDZE8sV0FBVyxFQUFFLENBQU07UUFDbkJSLFNBQVMsRUFBRSxDQUFLO0lBQ2pCLENBQUM7SUFFRHNDLFFBQVEsRUFBRSxDQUFDO1FBQ1Z2QyxLQUFLLEVBQUUsQ0FBTTtRQUNiTSxNQUFNLEVBQUUsQ0FBTTtRQUNkSixLQUFLLEVBQUUsQ0FBTTtRQUNic0MsT0FBTyxFQUFFLENBQUc7UUFDWkMsVUFBVSxFQUFFLENBQWE7UUFDekIsQ0FBUyxVQUFFLENBQUM7WUFDWEQsT0FBTyxFQUFFLENBQUs7UUFDZixDQUFDO0lBQ0YsQ0FBQztJQUVERSxPQUFPLEVBQUUsQ0FBQztRQUNUMUMsS0FBSyxFQUFFLENBQU07UUFDYk0sTUFBTSxFQUFFLENBQU07UUFDZE0sVUFBVSxFQUFFLENBQU07UUFDbEJWLEtBQUssRUFBRSxDQUFNO1FBRWJzQyxPQUFPLEVBQUUsQ0FBRztRQUNaQyxVQUFVLEVBQUUsQ0FBYTtRQUN6QixDQUFTLFVBQUUsQ0FBQztZQUNYRCxPQUFPLEVBQUUsQ0FBSztRQUNmLENBQUM7SUFDRixDQUFDO0FBQ0YsQ0FBQztBQUVELCtEQUFlMUMsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaW5kZXhQYWdlL3RlYW0vdGVhbVN0eWxlLmpzP2Q1M2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuXHRtYWluRGl2OiB7XHJcblx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdFx0bWFyZ2luVG9wOiAnMTcxcHgnLFxyXG5cdFx0ZmxvYXQ6ICdsZWZ0JyxcclxuXHR9LFxyXG5cclxuXHRpbnNpZGVEaXY6IHtcclxuXHRcdHdpZHRoOiAnMTEzMnB4JyxcclxuXHRcdG1hcmdpbjogJzAgYXV0bycsXHJcblx0fSxcclxuXHJcblx0dGl0bGVEaXY6IHtcclxuXHRcdHdpZHRoOiAnNDMycHgnLFxyXG5cdFx0aGVpZ2h0OiAnNTlweCcsXHJcblx0fSxcclxuXHJcblx0YWxsU2xpZGVzOiB7XHJcblx0XHRtYXJnaW5Ub3A6ICc3MXB4JyxcclxuXHR9LFxyXG5cclxuXHRhcnJvd0xlZnQ6IHtcclxuXHRcdHdpZHRoOiAnNDJweCcsXHJcblx0XHRoZWlnaHQ6ICc0MnB4JyxcclxuXHRcdGZsb2F0OiAnbGVmdCcsXHJcblx0XHRtYXJnaW5SaWdodDogJzI3cHgnLFxyXG5cdH0sXHJcblxyXG5cdGFycm93UmlnaHQ6IHtcclxuXHRcdHdpZHRoOiAnNDJweCcsXHJcblx0XHRoZWlnaHQ6ICc0MnB4JyxcclxuXHRcdGZsb2F0OiAnbGVmdCcsXHJcblx0XHR0cmFuc2Zvcm06ICdyb3RhdGUoMTgwZGVnKScsXHJcblx0XHRtYXJnaW5MZWZ0OiAnMjdweCcsXHJcblx0fSxcclxuXHJcblx0c2xpZGVyRGl2OiB7XHJcblx0XHRtYXJnaW46ICcwIGF1dG8nLFxyXG5cdFx0d2lkdGg6ICcxMDMwcHgnLFxyXG5cdFx0ZmxvYXQ6ICdsZWZ0JyxcclxuXHR9LFxyXG5cclxuXHRpbnNpZGVPbmVTbGlkZToge1xyXG5cdFx0d2lkdGg6ICczMDBweCcsXHJcblx0XHRoZWlnaHQ6ICczNzdweCcsXHJcblx0XHRiYWNrZ3JvdW5kOiAnI0ZGRkZGRicsXHJcblx0XHRib3JkZXJSYWRpdXM6ICcxOHB4JyxcclxuXHR9LFxyXG5cclxuXHRiaWdJbWFnZToge1xyXG5cdFx0d2lkdGg6ICcyNTJweCcsXHJcblx0XHRoZWlnaHQ6ICcyNTJweCcsXHJcblx0XHRib3JkZXJSYWRpdXM6ICcxMHB4JyxcclxuXHRcdG1hcmdpbkxlZnQ6ICdhdXRvJyxcclxuXHRcdG1hcmdpblJpZ2h0OiAnYXV0bycsXHJcblx0XHRwYWRkaW5nVG9wOiAnMjRweCcsXHJcblx0fSxcclxuXHJcblx0c21hbGxJbWFnZToge1xyXG5cdFx0d2lkdGg6ICc3MnB4JyxcclxuXHRcdGhlaWdodDogJzcycHgnLFxyXG5cdFx0Ym9yZGVyUmFkaXVzOiAnMTAwMHB4JyxcclxuXHRcdG1hcmdpbkxlZnQ6ICdhdXRvJyxcclxuXHRcdG1hcmdpblJpZ2h0OiAnYXV0bycsXHJcblx0XHRwYWRkaW5nOiAnNHB4JyxcclxuXHRcdGJvcmRlclNpemU6ICczcHgnLFxyXG5cdFx0Ym9yZGVyU3R5bGU6ICdzb2xpZCcsXHJcblx0XHRib3JkZXJDb2xvcjogJ3JnYigyMzMsMjEyLDIxOCknLFxyXG5cdFx0cG9zaXRpb246ICdhYnNvbHV0ZScsXHJcblx0XHR0b3A6ICczcHgnLFxyXG5cdFx0cmlnaHQ6ICc0cHgnLFxyXG5cdH0sXHJcblxyXG5cdGZpcnN0TGluZToge1xyXG5cdFx0bWFyZ2luVG9wOiAnMThweCcsXHJcblx0fSxcclxuXHJcblx0bmFtZVR5cG86IHtcclxuXHRcdGZvbnRGYW1pbHk6ICdPcmJpdHJvbicsXHJcblx0XHRmb250U3R5bGU6ICdub3JtYWwnLFxyXG5cdFx0Zm9udFdlaWdodDogJzYwMCcsXHJcblx0XHRmb250U2l6ZTogJzE0cHgnLFxyXG5cdFx0bGluZUhlaWdodDogJzI0cHgnLFxyXG5cdFx0dGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXHJcblx0XHRtYXJnaW5MZWZ0OiAnMjRweCcsXHJcblx0XHRjb2xvcjogJyM2MzYzNjMnLFxyXG5cdFx0ZmxvYXQ6ICdsZWZ0JyxcclxuXHR9LFxyXG5cclxuXHRyb2xlVHlwbzoge1xyXG5cdFx0bWFyZ2luVG9wOiAnOHB4JyxcclxuXHRcdGZvbnRGYW1pbHk6ICdPcmJpdHJvbicsXHJcblx0XHRmb250U3R5bGU6ICdub3JtYWwnLFxyXG5cdFx0Zm9udFdlaWdodDogJzQwMCcsXHJcblx0XHRmb250U2l6ZTogJzEycHgnLFxyXG5cdFx0bGluZUhlaWdodDogJzI0cHgnLFxyXG5cdFx0dGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXHJcblx0XHRtYXJnaW5MZWZ0OiAnMjRweCcsXHJcblx0XHRjb2xvcjogJyM2MzYzNjMnLFxyXG5cdFx0Y2xlYXI6ICdib3RoJyxcclxuXHR9LFxyXG5cclxuXHR0ZWFtTGlua3M6IHtcclxuXHRcdGZsb2F0OiAncmlnaHQnLFxyXG5cdFx0bWFyZ2luUmlnaHQ6ICcyNHB4JyxcclxuXHRcdG1hcmdpblRvcDogJzNweCcsXHJcblx0fSxcclxuXHJcblx0bGlua2VkSW46IHtcclxuXHRcdHdpZHRoOiAnMTlweCcsXHJcblx0XHRoZWlnaHQ6ICcxOXB4JyxcclxuXHRcdGZsb2F0OiAnbGVmdCcsXHJcblx0XHRvcGFjaXR5OiAnMScsXHJcblx0XHR0cmFuc2l0aW9uOiAnb3BhY2l0eSAuNXMnLFxyXG5cdFx0JyY6aG92ZXInOiB7XHJcblx0XHRcdG9wYWNpdHk6ICcwLjcnLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cclxuXHR0d2l0dGVyOiB7XHJcblx0XHR3aWR0aDogJzE5cHgnLFxyXG5cdFx0aGVpZ2h0OiAnMTVweCcsXHJcblx0XHRtYXJnaW5MZWZ0OiAnMTNweCcsXHJcblx0XHRmbG9hdDogJ2xlZnQnLFxyXG5cclxuXHRcdG9wYWNpdHk6ICcxJyxcclxuXHRcdHRyYW5zaXRpb246ICdvcGFjaXR5IC41cycsXHJcblx0XHQnJjpob3Zlcic6IHtcclxuXHRcdFx0b3BhY2l0eTogJzAuNycsXHJcblx0XHR9LFxyXG5cdH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlU3R5bGVzO1xyXG4iXSwibmFtZXMiOlsibWFrZVN0eWxlcyIsInVzZVN0eWxlcyIsIm1haW5EaXYiLCJ3aWR0aCIsIm1hcmdpblRvcCIsImZsb2F0IiwiaW5zaWRlRGl2IiwibWFyZ2luIiwidGl0bGVEaXYiLCJoZWlnaHQiLCJhbGxTbGlkZXMiLCJhcnJvd0xlZnQiLCJtYXJnaW5SaWdodCIsImFycm93UmlnaHQiLCJ0cmFuc2Zvcm0iLCJtYXJnaW5MZWZ0Iiwic2xpZGVyRGl2IiwiaW5zaWRlT25lU2xpZGUiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyUmFkaXVzIiwiYmlnSW1hZ2UiLCJwYWRkaW5nVG9wIiwic21hbGxJbWFnZSIsInBhZGRpbmciLCJib3JkZXJTaXplIiwiYm9yZGVyU3R5bGUiLCJib3JkZXJDb2xvciIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiLCJmaXJzdExpbmUiLCJuYW1lVHlwbyIsImZvbnRGYW1pbHkiLCJmb250U3R5bGUiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwidGV4dFRyYW5zZm9ybSIsImNvbG9yIiwicm9sZVR5cG8iLCJjbGVhciIsInRlYW1MaW5rcyIsImxpbmtlZEluIiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJ0d2l0dGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/indexPage/team/teamStyle.js\n");

/***/ })

});