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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)({\n    mainDiv: {\n        width: '100%',\n        marginTop: '171px',\n        float: 'left'\n    },\n    insideDivTitle: {\n        width: '1132px',\n        margin: '0 auto'\n    },\n    insideDiv: {\n        width: '1200px',\n        margin: '0 auto'\n    },\n    titleDiv: {\n        width: '432px',\n        height: '59px'\n    },\n    allSlides: {\n        marginTop: '71px'\n    },\n    arrowLeft: {\n        width: '38px',\n        height: '38px',\n        float: 'left',\n        marginRight: '15px'\n    },\n    arrowRight: {\n        width: '38px',\n        height: '38px',\n        float: 'left',\n        transform: 'rotate(180deg)',\n        marginLeft: '15px'\n    },\n    sliderDiv: {\n        width: '1030px',\n        float: 'left'\n    },\n    insideOneSlide: {\n        width: '300px',\n        height: '377px',\n        background: '#FFFFFF',\n        borderRadius: '18px'\n    },\n    bigImage: {\n        width: '252px',\n        height: '252px',\n        borderRadius: '10px',\n        marginLeft: 'auto',\n        marginRight: 'auto',\n        paddingTop: '24px'\n    },\n    smallImage: {\n        width: '72px',\n        height: '72px',\n        borderRadius: '1000px',\n        marginLeft: 'auto',\n        marginRight: 'auto',\n        padding: '4px',\n        borderSize: '3px',\n        borderStyle: 'solid',\n        borderColor: 'rgb(233,212,218)',\n        position: 'absolute',\n        top: '3px',\n        right: '4px'\n    },\n    firstLine: {\n        marginTop: '18px'\n    },\n    nameTypo: {\n        fontFamily: 'Orbitron',\n        fontStyle: 'normal',\n        fontWeight: '600',\n        fontSize: '14px',\n        lineHeight: '24px',\n        textTransform: 'uppercase',\n        marginLeft: '24px',\n        color: '#636363',\n        float: 'left'\n    },\n    roleTypo: {\n        marginTop: '8px',\n        fontFamily: 'Orbitron',\n        fontStyle: 'normal',\n        fontWeight: '400',\n        fontSize: '12px',\n        lineHeight: '24px',\n        textTransform: 'uppercase',\n        marginLeft: '24px',\n        color: '#636363',\n        clear: 'both'\n    },\n    teamLinks: {\n        float: 'right',\n        marginRight: '24px',\n        marginTop: '3px'\n    },\n    linkedIn: {\n        width: '19px',\n        height: '19px',\n        float: 'left',\n        opacity: '1',\n        transition: 'opacity .5s',\n        '&:hover': {\n            opacity: '0.7'\n        }\n    },\n    twitter: {\n        width: '19px',\n        height: '15px',\n        marginLeft: '13px',\n        float: 'left',\n        opacity: '1',\n        transition: 'opacity .5s',\n        '&:hover': {\n            opacity: '0.7'\n        }\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (useStyles);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2luZGV4UGFnZS90ZWFtL3RlYW1TdHlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOztBQUFxRDtBQUVyRCxHQUFLLENBQUNDLFNBQVMsR0FBR0Qsb0VBQVUsQ0FBQyxDQUFDO0lBQzdCRSxPQUFPLEVBQUUsQ0FBQztRQUNUQyxLQUFLLEVBQUUsQ0FBTTtRQUNiQyxTQUFTLEVBQUUsQ0FBTztRQUNsQkMsS0FBSyxFQUFFLENBQU07SUFDZCxDQUFDO0lBRURDLGNBQWMsRUFBRSxDQUFDO1FBQ2hCSCxLQUFLLEVBQUUsQ0FBUTtRQUNmSSxNQUFNLEVBQUUsQ0FBUTtJQUNqQixDQUFDO0lBRURDLFNBQVMsRUFBRSxDQUFDO1FBQ1hMLEtBQUssRUFBRSxDQUFRO1FBQ2ZJLE1BQU0sRUFBRSxDQUFRO0lBQ2pCLENBQUM7SUFFREUsUUFBUSxFQUFFLENBQUM7UUFDVk4sS0FBSyxFQUFFLENBQU87UUFDZE8sTUFBTSxFQUFFLENBQU07SUFDZixDQUFDO0lBRURDLFNBQVMsRUFBRSxDQUFDO1FBQ1hQLFNBQVMsRUFBRSxDQUFNO0lBQ2xCLENBQUM7SUFFRFEsU0FBUyxFQUFFLENBQUM7UUFDWFQsS0FBSyxFQUFFLENBQU07UUFDYk8sTUFBTSxFQUFFLENBQU07UUFDZEwsS0FBSyxFQUFFLENBQU07UUFDYlEsV0FBVyxFQUFFLENBQU07SUFDcEIsQ0FBQztJQUVEQyxVQUFVLEVBQUUsQ0FBQztRQUNaWCxLQUFLLEVBQUUsQ0FBTTtRQUNiTyxNQUFNLEVBQUUsQ0FBTTtRQUNkTCxLQUFLLEVBQUUsQ0FBTTtRQUNiVSxTQUFTLEVBQUUsQ0FBZ0I7UUFDM0JDLFVBQVUsRUFBRSxDQUFNO0lBQ25CLENBQUM7SUFFREMsU0FBUyxFQUFFLENBQUM7UUFDWGQsS0FBSyxFQUFFLENBQVE7UUFDZkUsS0FBSyxFQUFFLENBQU07SUFDZCxDQUFDO0lBRURhLGNBQWMsRUFBRSxDQUFDO1FBQ2hCZixLQUFLLEVBQUUsQ0FBTztRQUNkTyxNQUFNLEVBQUUsQ0FBTztRQUNmUyxVQUFVLEVBQUUsQ0FBUztRQUNyQkMsWUFBWSxFQUFFLENBQU07SUFDckIsQ0FBQztJQUVEQyxRQUFRLEVBQUUsQ0FBQztRQUNWbEIsS0FBSyxFQUFFLENBQU87UUFDZE8sTUFBTSxFQUFFLENBQU87UUFDZlUsWUFBWSxFQUFFLENBQU07UUFDcEJKLFVBQVUsRUFBRSxDQUFNO1FBQ2xCSCxXQUFXLEVBQUUsQ0FBTTtRQUNuQlMsVUFBVSxFQUFFLENBQU07SUFDbkIsQ0FBQztJQUVEQyxVQUFVLEVBQUUsQ0FBQztRQUNacEIsS0FBSyxFQUFFLENBQU07UUFDYk8sTUFBTSxFQUFFLENBQU07UUFDZFUsWUFBWSxFQUFFLENBQVE7UUFDdEJKLFVBQVUsRUFBRSxDQUFNO1FBQ2xCSCxXQUFXLEVBQUUsQ0FBTTtRQUNuQlcsT0FBTyxFQUFFLENBQUs7UUFDZEMsVUFBVSxFQUFFLENBQUs7UUFDakJDLFdBQVcsRUFBRSxDQUFPO1FBQ3BCQyxXQUFXLEVBQUUsQ0FBa0I7UUFDL0JDLFFBQVEsRUFBRSxDQUFVO1FBQ3BCQyxHQUFHLEVBQUUsQ0FBSztRQUNWQyxLQUFLLEVBQUUsQ0FBSztJQUNiLENBQUM7SUFFREMsU0FBUyxFQUFFLENBQUM7UUFDWDNCLFNBQVMsRUFBRSxDQUFNO0lBQ2xCLENBQUM7SUFFRDRCLFFBQVEsRUFBRSxDQUFDO1FBQ1ZDLFVBQVUsRUFBRSxDQUFVO1FBQ3RCQyxTQUFTLEVBQUUsQ0FBUTtRQUNuQkMsVUFBVSxFQUFFLENBQUs7UUFDakJDLFFBQVEsRUFBRSxDQUFNO1FBQ2hCQyxVQUFVLEVBQUUsQ0FBTTtRQUNsQkMsYUFBYSxFQUFFLENBQVc7UUFDMUJ0QixVQUFVLEVBQUUsQ0FBTTtRQUNsQnVCLEtBQUssRUFBRSxDQUFTO1FBQ2hCbEMsS0FBSyxFQUFFLENBQU07SUFDZCxDQUFDO0lBRURtQyxRQUFRLEVBQUUsQ0FBQztRQUNWcEMsU0FBUyxFQUFFLENBQUs7UUFDaEI2QixVQUFVLEVBQUUsQ0FBVTtRQUN0QkMsU0FBUyxFQUFFLENBQVE7UUFDbkJDLFVBQVUsRUFBRSxDQUFLO1FBQ2pCQyxRQUFRLEVBQUUsQ0FBTTtRQUNoQkMsVUFBVSxFQUFFLENBQU07UUFDbEJDLGFBQWEsRUFBRSxDQUFXO1FBQzFCdEIsVUFBVSxFQUFFLENBQU07UUFDbEJ1QixLQUFLLEVBQUUsQ0FBUztRQUNoQkUsS0FBSyxFQUFFLENBQU07SUFDZCxDQUFDO0lBRURDLFNBQVMsRUFBRSxDQUFDO1FBQ1hyQyxLQUFLLEVBQUUsQ0FBTztRQUNkUSxXQUFXLEVBQUUsQ0FBTTtRQUNuQlQsU0FBUyxFQUFFLENBQUs7SUFDakIsQ0FBQztJQUVEdUMsUUFBUSxFQUFFLENBQUM7UUFDVnhDLEtBQUssRUFBRSxDQUFNO1FBQ2JPLE1BQU0sRUFBRSxDQUFNO1FBQ2RMLEtBQUssRUFBRSxDQUFNO1FBQ2J1QyxPQUFPLEVBQUUsQ0FBRztRQUNaQyxVQUFVLEVBQUUsQ0FBYTtRQUN6QixDQUFTLFVBQUUsQ0FBQztZQUNYRCxPQUFPLEVBQUUsQ0FBSztRQUNmLENBQUM7SUFDRixDQUFDO0lBRURFLE9BQU8sRUFBRSxDQUFDO1FBQ1QzQyxLQUFLLEVBQUUsQ0FBTTtRQUNiTyxNQUFNLEVBQUUsQ0FBTTtRQUNkTSxVQUFVLEVBQUUsQ0FBTTtRQUNsQlgsS0FBSyxFQUFFLENBQU07UUFFYnVDLE9BQU8sRUFBRSxDQUFHO1FBQ1pDLFVBQVUsRUFBRSxDQUFhO1FBQ3pCLENBQVMsVUFBRSxDQUFDO1lBQ1hELE9BQU8sRUFBRSxDQUFLO1FBQ2YsQ0FBQztJQUNGLENBQUM7QUFDRixDQUFDO0FBRUQsK0RBQWUzQyxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbmRleFBhZ2UvdGVhbS90ZWFtU3R5bGUuanM/ZDUzZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG5cdG1haW5EaXY6IHtcclxuXHRcdHdpZHRoOiAnMTAwJScsXHJcblx0XHRtYXJnaW5Ub3A6ICcxNzFweCcsXHJcblx0XHRmbG9hdDogJ2xlZnQnLFxyXG5cdH0sXHJcblxyXG5cdGluc2lkZURpdlRpdGxlOiB7XHJcblx0XHR3aWR0aDogJzExMzJweCcsXHJcblx0XHRtYXJnaW46ICcwIGF1dG8nLFxyXG5cdH0sXHJcblxyXG5cdGluc2lkZURpdjoge1xyXG5cdFx0d2lkdGg6ICcxMjAwcHgnLFxyXG5cdFx0bWFyZ2luOiAnMCBhdXRvJyxcclxuXHR9LFxyXG5cclxuXHR0aXRsZURpdjoge1xyXG5cdFx0d2lkdGg6ICc0MzJweCcsXHJcblx0XHRoZWlnaHQ6ICc1OXB4JyxcclxuXHR9LFxyXG5cclxuXHRhbGxTbGlkZXM6IHtcclxuXHRcdG1hcmdpblRvcDogJzcxcHgnLFxyXG5cdH0sXHJcblxyXG5cdGFycm93TGVmdDoge1xyXG5cdFx0d2lkdGg6ICczOHB4JyxcclxuXHRcdGhlaWdodDogJzM4cHgnLFxyXG5cdFx0ZmxvYXQ6ICdsZWZ0JyxcclxuXHRcdG1hcmdpblJpZ2h0OiAnMTVweCcsXHJcblx0fSxcclxuXHJcblx0YXJyb3dSaWdodDoge1xyXG5cdFx0d2lkdGg6ICczOHB4JyxcclxuXHRcdGhlaWdodDogJzM4cHgnLFxyXG5cdFx0ZmxvYXQ6ICdsZWZ0JyxcclxuXHRcdHRyYW5zZm9ybTogJ3JvdGF0ZSgxODBkZWcpJyxcclxuXHRcdG1hcmdpbkxlZnQ6ICcxNXB4JyxcclxuXHR9LFxyXG5cclxuXHRzbGlkZXJEaXY6IHtcclxuXHRcdHdpZHRoOiAnMTAzMHB4JyxcclxuXHRcdGZsb2F0OiAnbGVmdCcsXHJcblx0fSxcclxuXHJcblx0aW5zaWRlT25lU2xpZGU6IHtcclxuXHRcdHdpZHRoOiAnMzAwcHgnLFxyXG5cdFx0aGVpZ2h0OiAnMzc3cHgnLFxyXG5cdFx0YmFja2dyb3VuZDogJyNGRkZGRkYnLFxyXG5cdFx0Ym9yZGVyUmFkaXVzOiAnMThweCcsXHJcblx0fSxcclxuXHJcblx0YmlnSW1hZ2U6IHtcclxuXHRcdHdpZHRoOiAnMjUycHgnLFxyXG5cdFx0aGVpZ2h0OiAnMjUycHgnLFxyXG5cdFx0Ym9yZGVyUmFkaXVzOiAnMTBweCcsXHJcblx0XHRtYXJnaW5MZWZ0OiAnYXV0bycsXHJcblx0XHRtYXJnaW5SaWdodDogJ2F1dG8nLFxyXG5cdFx0cGFkZGluZ1RvcDogJzI0cHgnLFxyXG5cdH0sXHJcblxyXG5cdHNtYWxsSW1hZ2U6IHtcclxuXHRcdHdpZHRoOiAnNzJweCcsXHJcblx0XHRoZWlnaHQ6ICc3MnB4JyxcclxuXHRcdGJvcmRlclJhZGl1czogJzEwMDBweCcsXHJcblx0XHRtYXJnaW5MZWZ0OiAnYXV0bycsXHJcblx0XHRtYXJnaW5SaWdodDogJ2F1dG8nLFxyXG5cdFx0cGFkZGluZzogJzRweCcsXHJcblx0XHRib3JkZXJTaXplOiAnM3B4JyxcclxuXHRcdGJvcmRlclN0eWxlOiAnc29saWQnLFxyXG5cdFx0Ym9yZGVyQ29sb3I6ICdyZ2IoMjMzLDIxMiwyMTgpJyxcclxuXHRcdHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG5cdFx0dG9wOiAnM3B4JyxcclxuXHRcdHJpZ2h0OiAnNHB4JyxcclxuXHR9LFxyXG5cclxuXHRmaXJzdExpbmU6IHtcclxuXHRcdG1hcmdpblRvcDogJzE4cHgnLFxyXG5cdH0sXHJcblxyXG5cdG5hbWVUeXBvOiB7XHJcblx0XHRmb250RmFtaWx5OiAnT3JiaXRyb24nLFxyXG5cdFx0Zm9udFN0eWxlOiAnbm9ybWFsJyxcclxuXHRcdGZvbnRXZWlnaHQ6ICc2MDAnLFxyXG5cdFx0Zm9udFNpemU6ICcxNHB4JyxcclxuXHRcdGxpbmVIZWlnaHQ6ICcyNHB4JyxcclxuXHRcdHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxyXG5cdFx0bWFyZ2luTGVmdDogJzI0cHgnLFxyXG5cdFx0Y29sb3I6ICcjNjM2MzYzJyxcclxuXHRcdGZsb2F0OiAnbGVmdCcsXHJcblx0fSxcclxuXHJcblx0cm9sZVR5cG86IHtcclxuXHRcdG1hcmdpblRvcDogJzhweCcsXHJcblx0XHRmb250RmFtaWx5OiAnT3JiaXRyb24nLFxyXG5cdFx0Zm9udFN0eWxlOiAnbm9ybWFsJyxcclxuXHRcdGZvbnRXZWlnaHQ6ICc0MDAnLFxyXG5cdFx0Zm9udFNpemU6ICcxMnB4JyxcclxuXHRcdGxpbmVIZWlnaHQ6ICcyNHB4JyxcclxuXHRcdHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxyXG5cdFx0bWFyZ2luTGVmdDogJzI0cHgnLFxyXG5cdFx0Y29sb3I6ICcjNjM2MzYzJyxcclxuXHRcdGNsZWFyOiAnYm90aCcsXHJcblx0fSxcclxuXHJcblx0dGVhbUxpbmtzOiB7XHJcblx0XHRmbG9hdDogJ3JpZ2h0JyxcclxuXHRcdG1hcmdpblJpZ2h0OiAnMjRweCcsXHJcblx0XHRtYXJnaW5Ub3A6ICczcHgnLFxyXG5cdH0sXHJcblxyXG5cdGxpbmtlZEluOiB7XHJcblx0XHR3aWR0aDogJzE5cHgnLFxyXG5cdFx0aGVpZ2h0OiAnMTlweCcsXHJcblx0XHRmbG9hdDogJ2xlZnQnLFxyXG5cdFx0b3BhY2l0eTogJzEnLFxyXG5cdFx0dHJhbnNpdGlvbjogJ29wYWNpdHkgLjVzJyxcclxuXHRcdCcmOmhvdmVyJzoge1xyXG5cdFx0XHRvcGFjaXR5OiAnMC43JyxcclxuXHRcdH0sXHJcblx0fSxcclxuXHJcblx0dHdpdHRlcjoge1xyXG5cdFx0d2lkdGg6ICcxOXB4JyxcclxuXHRcdGhlaWdodDogJzE1cHgnLFxyXG5cdFx0bWFyZ2luTGVmdDogJzEzcHgnLFxyXG5cdFx0ZmxvYXQ6ICdsZWZ0JyxcclxuXHJcblx0XHRvcGFjaXR5OiAnMScsXHJcblx0XHR0cmFuc2l0aW9uOiAnb3BhY2l0eSAuNXMnLFxyXG5cdFx0JyY6aG92ZXInOiB7XHJcblx0XHRcdG9wYWNpdHk6ICcwLjcnLFxyXG5cdFx0fSxcclxuXHR9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZVN0eWxlcztcclxuIl0sIm5hbWVzIjpbIm1ha2VTdHlsZXMiLCJ1c2VTdHlsZXMiLCJtYWluRGl2Iiwid2lkdGgiLCJtYXJnaW5Ub3AiLCJmbG9hdCIsImluc2lkZURpdlRpdGxlIiwibWFyZ2luIiwiaW5zaWRlRGl2IiwidGl0bGVEaXYiLCJoZWlnaHQiLCJhbGxTbGlkZXMiLCJhcnJvd0xlZnQiLCJtYXJnaW5SaWdodCIsImFycm93UmlnaHQiLCJ0cmFuc2Zvcm0iLCJtYXJnaW5MZWZ0Iiwic2xpZGVyRGl2IiwiaW5zaWRlT25lU2xpZGUiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyUmFkaXVzIiwiYmlnSW1hZ2UiLCJwYWRkaW5nVG9wIiwic21hbGxJbWFnZSIsInBhZGRpbmciLCJib3JkZXJTaXplIiwiYm9yZGVyU3R5bGUiLCJib3JkZXJDb2xvciIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiLCJmaXJzdExpbmUiLCJuYW1lVHlwbyIsImZvbnRGYW1pbHkiLCJmb250U3R5bGUiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwidGV4dFRyYW5zZm9ybSIsImNvbG9yIiwicm9sZVR5cG8iLCJjbGVhciIsInRlYW1MaW5rcyIsImxpbmtlZEluIiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJ0d2l0dGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/indexPage/team/teamStyle.js\n");

/***/ })

});