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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)({\n    mainDiv: {\n        width: '100%',\n        marginTop: '171px',\n        float: 'left'\n    },\n    insideDiv: {\n        width: '1132px',\n        margin: '0 auto'\n    },\n    titleDiv: {\n        width: '432px',\n        height: '59px'\n    },\n    sliderDiv: {\n        marginTop: '71px',\n        width: '1030px'\n    },\n    insideOneSlide: {\n        width: '300px',\n        height: '377px',\n        background: '#FFFFFF',\n        borderRadius: '18px'\n    },\n    bigImage: {\n        width: '252px',\n        height: '252px',\n        borderRadius: '10px',\n        marginLeft: 'auto',\n        marginRight: 'auto',\n        paddingTop: '24px'\n    },\n    smallImage: {\n        width: '72px',\n        height: '72px',\n        borderRadius: '1000px',\n        marginLeft: 'auto',\n        marginRight: 'auto',\n        padding: '4px',\n        borderSize: '3px',\n        borderStyle: 'solid',\n        borderColor: 'rgb(233,212,218)',\n        position: 'absolute',\n        top: '3px',\n        right: '38px'\n    },\n    firstLine: {\n        marginTop: '18px'\n    },\n    nameTypo: {\n        fontFamily: 'Orbitron',\n        fontStyle: 'normal',\n        fontWeight: '600',\n        fontSize: '14px',\n        lineHeight: '24px',\n        textTransform: 'uppercase',\n        marginLeft: '24px',\n        color: '#636363',\n        float: 'left'\n    },\n    roleTypo: {\n        marginTop: '8px',\n        fontFamily: 'Orbitron',\n        fontStyle: 'normal',\n        fontWeight: '400',\n        fontSize: '12px',\n        lineHeight: '24px',\n        textTransform: 'uppercase',\n        marginLeft: '24px',\n        color: '#636363',\n        clear: 'both'\n    },\n    teamLinks: {\n        float: 'right',\n        marginRight: '24px',\n        marginTop: '3px'\n    },\n    linkedIn: {\n        width: '19px',\n        height: '19px',\n        float: 'left',\n        opacity: '1',\n        transition: 'opacity .5s',\n        '&:hover': {\n            opacity: '0.7'\n        }\n    },\n    twitter: {\n        width: '19px',\n        height: '15px',\n        marginLeft: '13px',\n        float: 'left',\n        opacity: '1',\n        transition: 'opacity .5s',\n        '&:hover': {\n            opacity: '0.7'\n        }\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (useStyles);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2luZGV4UGFnZS90ZWFtL3RlYW1TdHlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOztBQUFxRDtBQUVyRCxHQUFLLENBQUNDLFNBQVMsR0FBR0Qsb0VBQVUsQ0FBQyxDQUFDO0lBQzdCRSxPQUFPLEVBQUUsQ0FBQztRQUNUQyxLQUFLLEVBQUUsQ0FBTTtRQUNiQyxTQUFTLEVBQUUsQ0FBTztRQUNsQkMsS0FBSyxFQUFFLENBQU07SUFDZCxDQUFDO0lBRURDLFNBQVMsRUFBRSxDQUFDO1FBQ1hILEtBQUssRUFBRSxDQUFRO1FBQ2ZJLE1BQU0sRUFBRSxDQUFRO0lBQ2pCLENBQUM7SUFFREMsUUFBUSxFQUFFLENBQUM7UUFDVkwsS0FBSyxFQUFFLENBQU87UUFDZE0sTUFBTSxFQUFFLENBQU07SUFDZixDQUFDO0lBRURDLFNBQVMsRUFBRSxDQUFDO1FBQ1hOLFNBQVMsRUFBRSxDQUFNO1FBQ2pCRCxLQUFLLEVBQUUsQ0FBUTtJQUNoQixDQUFDO0lBRURRLGNBQWMsRUFBRSxDQUFDO1FBQ2hCUixLQUFLLEVBQUUsQ0FBTztRQUNkTSxNQUFNLEVBQUUsQ0FBTztRQUNmRyxVQUFVLEVBQUUsQ0FBUztRQUNyQkMsWUFBWSxFQUFFLENBQU07SUFDckIsQ0FBQztJQUVEQyxRQUFRLEVBQUUsQ0FBQztRQUNWWCxLQUFLLEVBQUUsQ0FBTztRQUNkTSxNQUFNLEVBQUUsQ0FBTztRQUNmSSxZQUFZLEVBQUUsQ0FBTTtRQUNwQkUsVUFBVSxFQUFFLENBQU07UUFDbEJDLFdBQVcsRUFBRSxDQUFNO1FBQ25CQyxVQUFVLEVBQUUsQ0FBTTtJQUNuQixDQUFDO0lBRURDLFVBQVUsRUFBRSxDQUFDO1FBQ1pmLEtBQUssRUFBRSxDQUFNO1FBQ2JNLE1BQU0sRUFBRSxDQUFNO1FBQ2RJLFlBQVksRUFBRSxDQUFRO1FBQ3RCRSxVQUFVLEVBQUUsQ0FBTTtRQUNsQkMsV0FBVyxFQUFFLENBQU07UUFDbkJHLE9BQU8sRUFBRSxDQUFLO1FBQ2RDLFVBQVUsRUFBRSxDQUFLO1FBQ2pCQyxXQUFXLEVBQUUsQ0FBTztRQUNwQkMsV0FBVyxFQUFFLENBQWtCO1FBQy9CQyxRQUFRLEVBQUUsQ0FBVTtRQUNwQkMsR0FBRyxFQUFFLENBQUs7UUFDVkMsS0FBSyxFQUFFLENBQU07SUFDZCxDQUFDO0lBRURDLFNBQVMsRUFBRSxDQUFDO1FBQ1h0QixTQUFTLEVBQUUsQ0FBTTtJQUNsQixDQUFDO0lBRUR1QixRQUFRLEVBQUUsQ0FBQztRQUNWQyxVQUFVLEVBQUUsQ0FBVTtRQUN0QkMsU0FBUyxFQUFFLENBQVE7UUFDbkJDLFVBQVUsRUFBRSxDQUFLO1FBQ2pCQyxRQUFRLEVBQUUsQ0FBTTtRQUNoQkMsVUFBVSxFQUFFLENBQU07UUFDbEJDLGFBQWEsRUFBRSxDQUFXO1FBQzFCbEIsVUFBVSxFQUFFLENBQU07UUFDbEJtQixLQUFLLEVBQUUsQ0FBUztRQUNoQjdCLEtBQUssRUFBRSxDQUFNO0lBQ2QsQ0FBQztJQUVEOEIsUUFBUSxFQUFFLENBQUM7UUFDVi9CLFNBQVMsRUFBRSxDQUFLO1FBQ2hCd0IsVUFBVSxFQUFFLENBQVU7UUFDdEJDLFNBQVMsRUFBRSxDQUFRO1FBQ25CQyxVQUFVLEVBQUUsQ0FBSztRQUNqQkMsUUFBUSxFQUFFLENBQU07UUFDaEJDLFVBQVUsRUFBRSxDQUFNO1FBQ2xCQyxhQUFhLEVBQUUsQ0FBVztRQUMxQmxCLFVBQVUsRUFBRSxDQUFNO1FBQ2xCbUIsS0FBSyxFQUFFLENBQVM7UUFDaEJFLEtBQUssRUFBRSxDQUFNO0lBQ2QsQ0FBQztJQUVEQyxTQUFTLEVBQUUsQ0FBQztRQUNYaEMsS0FBSyxFQUFFLENBQU87UUFDZFcsV0FBVyxFQUFFLENBQU07UUFDbkJaLFNBQVMsRUFBRSxDQUFLO0lBQ2pCLENBQUM7SUFFRGtDLFFBQVEsRUFBRSxDQUFDO1FBQ1ZuQyxLQUFLLEVBQUUsQ0FBTTtRQUNiTSxNQUFNLEVBQUUsQ0FBTTtRQUNkSixLQUFLLEVBQUUsQ0FBTTtRQUNia0MsT0FBTyxFQUFFLENBQUc7UUFDWkMsVUFBVSxFQUFFLENBQWE7UUFDekIsQ0FBUyxVQUFFLENBQUM7WUFDWEQsT0FBTyxFQUFFLENBQUs7UUFDZixDQUFDO0lBQ0YsQ0FBQztJQUVERSxPQUFPLEVBQUUsQ0FBQztRQUNUdEMsS0FBSyxFQUFFLENBQU07UUFDYk0sTUFBTSxFQUFFLENBQU07UUFDZE0sVUFBVSxFQUFFLENBQU07UUFDbEJWLEtBQUssRUFBRSxDQUFNO1FBRWJrQyxPQUFPLEVBQUUsQ0FBRztRQUNaQyxVQUFVLEVBQUUsQ0FBYTtRQUN6QixDQUFTLFVBQUUsQ0FBQztZQUNYRCxPQUFPLEVBQUUsQ0FBSztRQUNmLENBQUM7SUFDRixDQUFDO0FBQ0YsQ0FBQztBQUVELCtEQUFldEMsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaW5kZXhQYWdlL3RlYW0vdGVhbVN0eWxlLmpzP2Q1M2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuXHRtYWluRGl2OiB7XHJcblx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdFx0bWFyZ2luVG9wOiAnMTcxcHgnLFxyXG5cdFx0ZmxvYXQ6ICdsZWZ0JyxcclxuXHR9LFxyXG5cclxuXHRpbnNpZGVEaXY6IHtcclxuXHRcdHdpZHRoOiAnMTEzMnB4JyxcclxuXHRcdG1hcmdpbjogJzAgYXV0bycsXHJcblx0fSxcclxuXHJcblx0dGl0bGVEaXY6IHtcclxuXHRcdHdpZHRoOiAnNDMycHgnLFxyXG5cdFx0aGVpZ2h0OiAnNTlweCcsXHJcblx0fSxcclxuXHJcblx0c2xpZGVyRGl2OiB7XHJcblx0XHRtYXJnaW5Ub3A6ICc3MXB4JyxcclxuXHRcdHdpZHRoOiAnMTAzMHB4JyxcclxuXHR9LFxyXG5cclxuXHRpbnNpZGVPbmVTbGlkZToge1xyXG5cdFx0d2lkdGg6ICczMDBweCcsXHJcblx0XHRoZWlnaHQ6ICczNzdweCcsXHJcblx0XHRiYWNrZ3JvdW5kOiAnI0ZGRkZGRicsXHJcblx0XHRib3JkZXJSYWRpdXM6ICcxOHB4JyxcclxuXHR9LFxyXG5cclxuXHRiaWdJbWFnZToge1xyXG5cdFx0d2lkdGg6ICcyNTJweCcsXHJcblx0XHRoZWlnaHQ6ICcyNTJweCcsXHJcblx0XHRib3JkZXJSYWRpdXM6ICcxMHB4JyxcclxuXHRcdG1hcmdpbkxlZnQ6ICdhdXRvJyxcclxuXHRcdG1hcmdpblJpZ2h0OiAnYXV0bycsXHJcblx0XHRwYWRkaW5nVG9wOiAnMjRweCcsXHJcblx0fSxcclxuXHJcblx0c21hbGxJbWFnZToge1xyXG5cdFx0d2lkdGg6ICc3MnB4JyxcclxuXHRcdGhlaWdodDogJzcycHgnLFxyXG5cdFx0Ym9yZGVyUmFkaXVzOiAnMTAwMHB4JyxcclxuXHRcdG1hcmdpbkxlZnQ6ICdhdXRvJyxcclxuXHRcdG1hcmdpblJpZ2h0OiAnYXV0bycsXHJcblx0XHRwYWRkaW5nOiAnNHB4JyxcclxuXHRcdGJvcmRlclNpemU6ICczcHgnLFxyXG5cdFx0Ym9yZGVyU3R5bGU6ICdzb2xpZCcsXHJcblx0XHRib3JkZXJDb2xvcjogJ3JnYigyMzMsMjEyLDIxOCknLFxyXG5cdFx0cG9zaXRpb246ICdhYnNvbHV0ZScsXHJcblx0XHR0b3A6ICczcHgnLFxyXG5cdFx0cmlnaHQ6ICczOHB4JyxcclxuXHR9LFxyXG5cclxuXHRmaXJzdExpbmU6IHtcclxuXHRcdG1hcmdpblRvcDogJzE4cHgnLFxyXG5cdH0sXHJcblxyXG5cdG5hbWVUeXBvOiB7XHJcblx0XHRmb250RmFtaWx5OiAnT3JiaXRyb24nLFxyXG5cdFx0Zm9udFN0eWxlOiAnbm9ybWFsJyxcclxuXHRcdGZvbnRXZWlnaHQ6ICc2MDAnLFxyXG5cdFx0Zm9udFNpemU6ICcxNHB4JyxcclxuXHRcdGxpbmVIZWlnaHQ6ICcyNHB4JyxcclxuXHRcdHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxyXG5cdFx0bWFyZ2luTGVmdDogJzI0cHgnLFxyXG5cdFx0Y29sb3I6ICcjNjM2MzYzJyxcclxuXHRcdGZsb2F0OiAnbGVmdCcsXHJcblx0fSxcclxuXHJcblx0cm9sZVR5cG86IHtcclxuXHRcdG1hcmdpblRvcDogJzhweCcsXHJcblx0XHRmb250RmFtaWx5OiAnT3JiaXRyb24nLFxyXG5cdFx0Zm9udFN0eWxlOiAnbm9ybWFsJyxcclxuXHRcdGZvbnRXZWlnaHQ6ICc0MDAnLFxyXG5cdFx0Zm9udFNpemU6ICcxMnB4JyxcclxuXHRcdGxpbmVIZWlnaHQ6ICcyNHB4JyxcclxuXHRcdHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxyXG5cdFx0bWFyZ2luTGVmdDogJzI0cHgnLFxyXG5cdFx0Y29sb3I6ICcjNjM2MzYzJyxcclxuXHRcdGNsZWFyOiAnYm90aCcsXHJcblx0fSxcclxuXHJcblx0dGVhbUxpbmtzOiB7XHJcblx0XHRmbG9hdDogJ3JpZ2h0JyxcclxuXHRcdG1hcmdpblJpZ2h0OiAnMjRweCcsXHJcblx0XHRtYXJnaW5Ub3A6ICczcHgnLFxyXG5cdH0sXHJcblxyXG5cdGxpbmtlZEluOiB7XHJcblx0XHR3aWR0aDogJzE5cHgnLFxyXG5cdFx0aGVpZ2h0OiAnMTlweCcsXHJcblx0XHRmbG9hdDogJ2xlZnQnLFxyXG5cdFx0b3BhY2l0eTogJzEnLFxyXG5cdFx0dHJhbnNpdGlvbjogJ29wYWNpdHkgLjVzJyxcclxuXHRcdCcmOmhvdmVyJzoge1xyXG5cdFx0XHRvcGFjaXR5OiAnMC43JyxcclxuXHRcdH0sXHJcblx0fSxcclxuXHJcblx0dHdpdHRlcjoge1xyXG5cdFx0d2lkdGg6ICcxOXB4JyxcclxuXHRcdGhlaWdodDogJzE1cHgnLFxyXG5cdFx0bWFyZ2luTGVmdDogJzEzcHgnLFxyXG5cdFx0ZmxvYXQ6ICdsZWZ0JyxcclxuXHJcblx0XHRvcGFjaXR5OiAnMScsXHJcblx0XHR0cmFuc2l0aW9uOiAnb3BhY2l0eSAuNXMnLFxyXG5cdFx0JyY6aG92ZXInOiB7XHJcblx0XHRcdG9wYWNpdHk6ICcwLjcnLFxyXG5cdFx0fSxcclxuXHR9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZVN0eWxlcztcclxuIl0sIm5hbWVzIjpbIm1ha2VTdHlsZXMiLCJ1c2VTdHlsZXMiLCJtYWluRGl2Iiwid2lkdGgiLCJtYXJnaW5Ub3AiLCJmbG9hdCIsImluc2lkZURpdiIsIm1hcmdpbiIsInRpdGxlRGl2IiwiaGVpZ2h0Iiwic2xpZGVyRGl2IiwiaW5zaWRlT25lU2xpZGUiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyUmFkaXVzIiwiYmlnSW1hZ2UiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJwYWRkaW5nVG9wIiwic21hbGxJbWFnZSIsInBhZGRpbmciLCJib3JkZXJTaXplIiwiYm9yZGVyU3R5bGUiLCJib3JkZXJDb2xvciIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiLCJmaXJzdExpbmUiLCJuYW1lVHlwbyIsImZvbnRGYW1pbHkiLCJmb250U3R5bGUiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwidGV4dFRyYW5zZm9ybSIsImNvbG9yIiwicm9sZVR5cG8iLCJjbGVhciIsInRlYW1MaW5rcyIsImxpbmtlZEluIiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJ0d2l0dGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/indexPage/team/teamStyle.js\n");

/***/ })

});