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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)({\n    mainDiv: {\n        width: '100%',\n        marginTop: '171px',\n        float: 'left'\n    },\n    insideDivTitle: {\n        width: '1132px',\n        margin: '0 auto'\n    },\n    insideDiv: {\n        width: '1180px',\n        margin: '0 auto'\n    },\n    titleDiv: {\n        width: '432px',\n        height: '59px'\n    },\n    allSlides: {\n        marginTop: '71px'\n    },\n    arrowLeft: {\n        width: '40px',\n        height: '40px',\n        float: 'left',\n        marginRight: '37px',\n        marginTop: '150px',\n        background: 'linear-gradient(223.33deg, #A1EEF7 -10.05%, #FEE396 95.51%)',\n        opacity: '0.75',\n        border: '2px solid rgba(255, 255, 255, 0.5)',\n        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05)',\n        borderRadius: '10000px',\n        transition: 'border .5s, opacity .5s',\n        '&:hover': {\n            border: '2px solid #FFFFFF',\n            opacity: '1',\n            cursor: 'pointer'\n        }\n    },\n    arrowLeftIcon: {\n        transform: 'rotate(90deg)'\n    },\n    arrowRight: {\n        width: '40px',\n        height: '40px',\n        float: 'left',\n        marginLeft: '27px',\n        marginTop: '150px',\n        background: 'linear-gradient(223.33deg, #A1EEF7 -10.05%, #FEE396 95.51%)',\n        opacity: '0.75',\n        border: '2px solid rgba(255, 255, 255, 0.5)',\n        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05)',\n        borderRadius: '10000px',\n        transform: 'rotate(180deg)',\n        transition: 'border .5s, opacity .5s',\n        '&:hover': {\n            border: '2px solid #FFFFFF',\n            opacity: '1',\n            cursor: 'pointer'\n        }\n    },\n    sliderDiv: {\n        width: '1030px',\n        float: 'left'\n    },\n    insideOneSlideOutside: {\n        width: '330px'\n    },\n    insideOneSlide: {\n        width: '300px',\n        height: '377px',\n        background: '#FFFFFF',\n        borderRadius: '18px',\n        margin: '0 auto'\n    },\n    bigImage: {\n        width: '252px',\n        height: '252px',\n        borderRadius: '10px',\n        marginLeft: 'auto',\n        marginRight: 'auto',\n        paddingTop: '24px'\n    },\n    smallImage: {\n        width: '72px',\n        height: '72px',\n        borderRadius: '1000px',\n        marginLeft: 'auto',\n        marginRight: 'auto',\n        padding: '4px',\n        borderSize: '3px',\n        borderStyle: 'solid',\n        borderColor: 'rgb(233,212,218)',\n        position: 'absolute',\n        top: '3px',\n        right: '33px'\n    },\n    firstLine: {\n        marginTop: '18px'\n    },\n    nameTypo: {\n        fontFamily: 'Orbitron',\n        fontStyle: 'normal',\n        fontWeight: '600',\n        fontSize: '14px',\n        lineHeight: '24px',\n        textTransform: 'uppercase',\n        marginLeft: '24px',\n        color: '#636363',\n        float: 'left'\n    },\n    roleTypo: {\n        marginTop: '8px',\n        fontFamily: 'Orbitron',\n        fontStyle: 'normal',\n        fontWeight: '400',\n        fontSize: '12px',\n        lineHeight: '24px',\n        textTransform: 'uppercase',\n        marginLeft: '24px',\n        color: '#636363',\n        clear: 'both'\n    },\n    teamLinks: {\n        float: 'right',\n        marginRight: '24px',\n        marginTop: '3px'\n    },\n    linkedIn: {\n        width: '19px',\n        height: '19px',\n        float: 'left',\n        opacity: '1',\n        transition: 'opacity .5s',\n        '&:hover': {\n            opacity: '0.7'\n        }\n    },\n    twitter: {\n        width: '19px',\n        height: '15px',\n        marginLeft: '13px',\n        float: 'left',\n        opacity: '1',\n        transition: 'opacity .5s',\n        '&:hover': {\n            opacity: '0.7'\n        }\n    },\n    instagram: {\n        width: '19px',\n        height: '19px',\n        float: 'left',\n        opacity: '1',\n        transition: 'opacity .5s',\n        '&:hover': {\n            opacity: '0.7'\n        }\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (useStyles);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2luZGV4UGFnZS90ZWFtL3RlYW1TdHlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOztBQUFxRDtBQUVyRCxHQUFLLENBQUNDLFNBQVMsR0FBR0Qsb0VBQVUsQ0FBQyxDQUFDO0lBQzdCRSxPQUFPLEVBQUUsQ0FBQztRQUNUQyxLQUFLLEVBQUUsQ0FBTTtRQUNiQyxTQUFTLEVBQUUsQ0FBTztRQUNsQkMsS0FBSyxFQUFFLENBQU07SUFDZCxDQUFDO0lBRURDLGNBQWMsRUFBRSxDQUFDO1FBQ2hCSCxLQUFLLEVBQUUsQ0FBUTtRQUNmSSxNQUFNLEVBQUUsQ0FBUTtJQUNqQixDQUFDO0lBRURDLFNBQVMsRUFBRSxDQUFDO1FBQ1hMLEtBQUssRUFBRSxDQUFRO1FBQ2ZJLE1BQU0sRUFBRSxDQUFRO0lBQ2pCLENBQUM7SUFFREUsUUFBUSxFQUFFLENBQUM7UUFDVk4sS0FBSyxFQUFFLENBQU87UUFDZE8sTUFBTSxFQUFFLENBQU07SUFDZixDQUFDO0lBRURDLFNBQVMsRUFBRSxDQUFDO1FBQ1hQLFNBQVMsRUFBRSxDQUFNO0lBQ2xCLENBQUM7SUFFRFEsU0FBUyxFQUFFLENBQUM7UUFDWFQsS0FBSyxFQUFFLENBQU07UUFDYk8sTUFBTSxFQUFFLENBQU07UUFDZEwsS0FBSyxFQUFFLENBQU07UUFDYlEsV0FBVyxFQUFFLENBQU07UUFDbkJULFNBQVMsRUFBRSxDQUFPO1FBQ2xCVSxVQUFVLEVBQ1QsQ0FBNkQ7UUFDOURDLE9BQU8sRUFBRSxDQUFNO1FBQ2ZDLE1BQU0sRUFBRSxDQUFvQztRQUM1Q0MsU0FBUyxFQUFFLENBQWlDO1FBQzVDQyxZQUFZLEVBQUUsQ0FBUztRQUN2QkMsVUFBVSxFQUFFLENBQXlCO1FBQ3JDLENBQVMsVUFBRSxDQUFDO1lBQ1hILE1BQU0sRUFBRSxDQUFtQjtZQUMzQkQsT0FBTyxFQUFFLENBQUc7WUFDWkssTUFBTSxFQUFFLENBQVM7UUFDbEIsQ0FBQztJQUNGLENBQUM7SUFFREMsYUFBYSxFQUFFLENBQUM7UUFDZkMsU0FB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QUUsQ0FBQztRQUNWL0MsS0FBSyxFQUFFLENBQU07UUFDYk8sTUFBTSxFQUFFLENBQU07UUFDZEwsS0FBSyxFQUFFLENBQU07UUFFYlUsT0FBTyxFQUFFLENBQUc7UUFDWkksVUFBVSxFQUFFLENBQWE7UUFDekIsQ0FBUyxVQUFFLENBQUM7WUFDWEosT0FBTyxFQUFFLENBQUs7UUFDZixDQUFDO0lBQ0YsQ0FBQztJQUVEb0MsT0FBTyxFQUFFLENBQUM7UUFDVGhELEtBQUssRUFBRSxDQUFNO1FBQ2JPLE1BQU0sRUFBRSxDQUFNO1FBQ2RjLFVBQVUsRUFBRSxDQUFNO1FBQ2xCbkIsS0FBSyxFQUFFLENBQU07UUFFYlUsT0FBTyxFQUFFLENBQUc7UUFDWkksVUFBVSxFQUFFLENBQWE7UUFDekIsQ0FBUyxVQUFFLENBQUM7WUFDWEosT0FBTyxFQUFFLENBQUs7UUFDZixDQUFDO0lBQ0YsQ0FBQztJQUVEcUMsU0FBUyxFQUFFLENBQUM7UUFDWGpELEtBQUssRUFBRSxDQUFNO1FBQ2JPLE1BQU0sRUFBRSxDQUFNO1FBQ2RMLEtBQUssRUFBRSxDQUFNO1FBRWJVLE9BQU8sRUFBRSxDQUFHO1FBQ1pJLFVBQVUsRUFBRSxDQUFhO1FBQ3pCLENBQVMsVUFBRSxDQUFDO1lBQ1hKLE9BQU8sRUFBRSxDQUFLO1FBQ2YsQ0FBQztJQUNGLENBQUM7QUFDRixDQUFDO0FBRUQsK0RBQWVkLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2luZGV4UGFnZS90ZWFtL3RlYW1TdHlsZS5qcz9kNTNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcblx0bWFpbkRpdjoge1xyXG5cdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdG1hcmdpblRvcDogJzE3MXB4JyxcclxuXHRcdGZsb2F0OiAnbGVmdCcsXHJcblx0fSxcclxuXHJcblx0aW5zaWRlRGl2VGl0bGU6IHtcclxuXHRcdHdpZHRoOiAnMTEzMnB4JyxcclxuXHRcdG1hcmdpbjogJzAgYXV0bycsXHJcblx0fSxcclxuXHJcblx0aW5zaWRlRGl2OiB7XHJcblx0XHR3aWR0aDogJzExODBweCcsXHJcblx0XHRtYXJnaW46ICcwIGF1dG8nLFxyXG5cdH0sXHJcblxyXG5cdHRpdGxlRGl2OiB7XHJcblx0XHR3aWR0aDogJzQzMnB4JyxcclxuXHRcdGhlaWdodDogJzU5cHgnLFxyXG5cdH0sXHJcblxyXG5cdGFsbFNsaWRlczoge1xyXG5cdFx0bWFyZ2luVG9wOiAnNzFweCcsXHJcblx0fSxcclxuXHJcblx0YXJyb3dMZWZ0OiB7XHJcblx0XHR3aWR0aDogJzQwcHgnLFxyXG5cdFx0aGVpZ2h0OiAnNDBweCcsXHJcblx0XHRmbG9hdDogJ2xlZnQnLFxyXG5cdFx0bWFyZ2luUmlnaHQ6ICczN3B4JyxcclxuXHRcdG1hcmdpblRvcDogJzE1MHB4JyxcclxuXHRcdGJhY2tncm91bmQ6XHJcblx0XHRcdCdsaW5lYXItZ3JhZGllbnQoMjIzLjMzZGVnLCAjQTFFRUY3IC0xMC4wNSUsICNGRUUzOTYgOTUuNTElKScsXHJcblx0XHRvcGFjaXR5OiAnMC43NScsXHJcblx0XHRib3JkZXI6ICcycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpJyxcclxuXHRcdGJveFNoYWRvdzogJzBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wNSknLFxyXG5cdFx0Ym9yZGVyUmFkaXVzOiAnMTAwMDBweCcsXHJcblx0XHR0cmFuc2l0aW9uOiAnYm9yZGVyIC41cywgb3BhY2l0eSAuNXMnLFxyXG5cdFx0JyY6aG92ZXInOiB7XHJcblx0XHRcdGJvcmRlcjogJzJweCBzb2xpZCAjRkZGRkZGJyxcclxuXHRcdFx0b3BhY2l0eTogJzEnLFxyXG5cdFx0XHRjdXJzb3I6ICdwb2ludGVyJyxcclxuXHRcdH0sXHJcblx0fSxcclxuXHJcblx0YXJyb3dMZWZ0SWNvbjoge1xyXG5cdFx0dHJhbnNmb3JtOiAncm90YXRlKDkwZGVnKScsXHJcblx0fSxcclxuXHJcblx0YXJyb3dSaWdodDoge1xyXG5cdFx0d2lkdGg6ICc0MHB4JyxcclxuXHRcdGhlaWdodDogJzQwcHgnLFxyXG5cdFx0ZmxvYXQ6ICdsZWZ0JyxcclxuXHRcdG1hcmdpbkxlZnQ6ICcyN3B4JyxcclxuXHRcdG1hcmdpblRvcDogJzE1MHB4JyxcclxuXHRcdGJhY2tncm91bmQ6XHJcblx0XHRcdCdsaW5lYXItZ3JhZGllbnQoMjIzLjMzZGVnLCAjQTFFRUY3IC0xMC4wNSUsICNGRUUzOTYgOTUuNTElKScsXHJcblx0XHRvcGFjaXR5OiAnMC43NScsXHJcblx0XHRib3JkZXI6ICcycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpJyxcclxuXHRcdGJveFNoYWRvdzogJzBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wNSknLFxyXG5cdFx0Ym9yZGVyUmFkaXVzOiAnMTAwMDBweCcsXHJcblx0XHR0cmFuc2Zvcm06ICdyb3RhdGUoMTgwZGVnKScsXHJcblx0XHR0cmFuc2l0aW9uOiAnYm9yZGVyIC41cywgb3BhY2l0eSAuNXMnLFxyXG5cdFx0JyY6aG92ZXInOiB7XHJcblx0XHRcdGJvcmRlcjogJzJweCBzb2xpZCAjRkZGRkZGJyxcclxuXHRcdFx0b3BhY2l0eTogJzEnLFxyXG5cdFx0XHRjdXJzb3I6ICdwb2ludGVyJyxcclxuXHRcdH0sXHJcblx0fSxcclxuXHJcblx0c2xpZGVyRGl2OiB7XHJcblx0XHR3aWR0aDogJzEwMzBweCcsXHJcblx0XHRmbG9hdDogJ2xlZnQnLFxyXG5cdH0sXHJcblxyXG5cdGluc2lkZU9uZVNsaWRlT3V0c2lkZToge1xyXG5cdFx0d2lkdGg6ICczMzBweCcsXHJcblx0fSxcclxuXHJcblx0aW5zaWRlT25lU2xpZGU6IHtcclxuXHRcdHdpZHRoOiAnMzAwcHgnLFxyXG5cdFx0aGVpZ2h0OiAnMzc3cHgnLFxyXG5cdFx0YmFja2dyb3VuZDogJyNGRkZGRkYnLFxyXG5cdFx0Ym9yZGVyUmFkaXVzOiAnMThweCcsXHJcblx0XHRtYXJnaW46ICcwIGF1dG8nLFxyXG5cdH0sXHJcblxyXG5cdGJpZ0ltYWdlOiB7XHJcblx0XHR3aWR0aDogJzI1MnB4JyxcclxuXHRcdGhlaWdodDogJzI1MnB4JyxcclxuXHRcdGJvcmRlclJhZGl1czogJzEwcHgnLFxyXG5cdFx0bWFyZ2luTGVmdDogJ2F1dG8nLFxyXG5cdFx0bWFyZ2luUmlnaHQ6ICdhdXRvJyxcclxuXHRcdHBhZGRpbmdUb3A6ICcyNHB4JyxcclxuXHR9LFxyXG5cclxuXHRzbWFsbEltYWdlOiB7XHJcblx0XHR3aWR0aDogJzcycHgnLFxyXG5cdFx0aGVpZ2h0OiAnNzJweCcsXHJcblx0XHRib3JkZXJSYWRpdXM6ICcxMDAwcHgnLFxyXG5cdFx0bWFyZ2luTGVmdDogJ2F1dG8nLFxyXG5cdFx0bWFyZ2luUmlnaHQ6ICdhdXRvJyxcclxuXHRcdHBhZGRpbmc6ICc0cHgnLFxyXG5cdFx0Ym9yZGVyU2l6ZTogJzNweCcsXHJcblx0XHRib3JkZXJTdHlsZTogJ3NvbGlkJyxcclxuXHRcdGJvcmRlckNvbG9yOiAncmdiKDIzMywyMTIsMjE4KScsXHJcblx0XHRwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuXHRcdHRvcDogJzNweCcsXHJcblx0XHRyaWdodDogJzMzcHgnLFxyXG5cdH0sXHJcblxyXG5cdGZpcnN0TGluZToge1xyXG5cdFx0bWFyZ2luVG9wOiAnMThweCcsXHJcblx0fSxcclxuXHJcblx0bmFtZVR5cG86IHtcclxuXHRcdGZvbnRGYW1pbHk6ICdPcmJpdHJvbicsXHJcblx0XHRmb250U3R5bGU6ICdub3JtYWwnLFxyXG5cdFx0Zm9udFdlaWdodDogJzYwMCcsXHJcblx0XHRmb250U2l6ZTogJzE0cHgnLFxyXG5cdFx0bGluZUhlaWdodDogJzI0cHgnLFxyXG5cdFx0dGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXHJcblx0XHRtYXJnaW5MZWZ0OiAnMjRweCcsXHJcblx0XHRjb2xvcjogJyM2MzYzNjMnLFxyXG5cdFx0ZmxvYXQ6ICdsZWZ0JyxcclxuXHR9LFxyXG5cclxuXHRyb2xlVHlwbzoge1xyXG5cdFx0bWFyZ2luVG9wOiAnOHB4JyxcclxuXHRcdGZvbnRGYW1pbHk6ICdPcmJpdHJvbicsXHJcblx0XHRmb250U3R5bGU6ICdub3JtYWwnLFxyXG5cdFx0Zm9udFdlaWdodDogJzQwMCcsXHJcblx0XHRmb250U2l6ZTogJzEycHgnLFxyXG5cdFx0bGluZUhlaWdodDogJzI0cHgnLFxyXG5cdFx0dGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXHJcblx0XHRtYXJnaW5MZWZ0OiAnMjRweCcsXHJcblx0XHRjb2xvcjogJyM2MzYzNjMnLFxyXG5cdFx0Y2xlYXI6ICdib3RoJyxcclxuXHR9LFxyXG5cclxuXHR0ZWFtTGlua3M6IHtcclxuXHRcdGZsb2F0OiAncmlnaHQnLFxyXG5cdFx0bWFyZ2luUmlnaHQ6ICcyNHB4JyxcclxuXHRcdG1hcmdpblRvcDogJzNweCcsXHJcblx0fSxcclxuXHJcblx0bGlua2VkSW46IHtcclxuXHRcdHdpZHRoOiAnMTlweCcsXHJcblx0XHRoZWlnaHQ6ICcxOXB4JyxcclxuXHRcdGZsb2F0OiAnbGVmdCcsXHJcblxyXG5cdFx0b3BhY2l0eTogJzEnLFxyXG5cdFx0dHJhbnNpdGlvbjogJ29wYWNpdHkgLjVzJyxcclxuXHRcdCcmOmhvdmVyJzoge1xyXG5cdFx0XHRvcGFjaXR5OiAnMC43JyxcclxuXHRcdH0sXHJcblx0fSxcclxuXHJcblx0dHdpdHRlcjoge1xyXG5cdFx0d2lkdGg6ICcxOXB4JyxcclxuXHRcdGhlaWdodDogJzE1cHgnLFxyXG5cdFx0bWFyZ2luTGVmdDogJzEzcHgnLFxyXG5cdFx0ZmxvYXQ6ICdsZWZ0JyxcclxuXHJcblx0XHRvcGFjaXR5OiAnMScsXHJcblx0XHR0cmFuc2l0aW9uOiAnb3BhY2l0eSAuNXMnLFxyXG5cdFx0JyY6aG92ZXInOiB7XHJcblx0XHRcdG9wYWNpdHk6ICcwLjcnLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cclxuXHRpbnN0YWdyYW06IHtcclxuXHRcdHdpZHRoOiAnMTlweCcsXHJcblx0XHRoZWlnaHQ6ICcxOXB4JyxcclxuXHRcdGZsb2F0OiAnbGVmdCcsXHJcblxyXG5cdFx0b3BhY2l0eTogJzEnLFxyXG5cdFx0dHJhbnNpdGlvbjogJ29wYWNpdHkgLjVzJyxcclxuXHRcdCcmOmhvdmVyJzoge1xyXG5cdFx0XHRvcGFjaXR5OiAnMC43JyxcclxuXHRcdH0sXHJcblx0fSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VTdHlsZXM7XHJcbiJdLCJuYW1lcyI6WyJtYWtlU3R5bGVzIiwidXNlU3R5bGVzIiwibWFpbkRpdiIsIndpZHRoIiwibWFyZ2luVG9wIiwiZmxvYXQiLCJpbnNpZGVEaXZUaXRsZSIsIm1hcmdpbiIsImluc2lkZURpdiIsInRpdGxlRGl2IiwiaGVpZ2h0IiwiYWxsU2xpZGVzIiwiYXJyb3dMZWZ0IiwibWFyZ2luUmlnaHQiLCJiYWNrZ3JvdW5kIiwib3BhY2l0eSIsImJvcmRlciIsImJveFNoYWRvdyIsImJvcmRlclJhZGl1cyIsInRyYW5zaXRpb24iLCJjdXJzb3IiLCJhcnJvd0xlZnRJY29uIiwidHJhbnNmb3JtIiwiYXJyb3dSaWdodCIsIm1hcmdpbkxlZnQiLCJzbGlkZXJEaXYiLCJpbnNpZGVPbmVTbGlkZU91dHNpZGUiLCJpbnNpZGVPbmVTbGlkZSIsImJpZ0ltYWdlIiwicGFkZGluZ1RvcCIsInNtYWxsSW1hZ2UiLCJwYWRkaW5nIiwiYm9yZGVyU2l6ZSIsImJvcmRlclN0eWxlIiwiYm9yZGVyQ29sb3IiLCJwb3NpdGlvbiIsInRvcCIsInJpZ2h0IiwiZmlyc3RMaW5lIiwibmFtZVR5cG8iLCJmb250RmFtaWx5IiwiZm9udFN0eWxlIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwibGluZUhlaWdodCIsInRleHRUcmFuc2Zvcm0iLCJjb2xvciIsInJvbGVUeXBvIiwiY2xlYXIiLCJ0ZWFtTGlua3MiLCJsaW5rZWRJbiIsInR3aXR0ZXIiLCJpbnN0YWdyYW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/indexPage/team/teamStyle.js\n");

/***/ })

});