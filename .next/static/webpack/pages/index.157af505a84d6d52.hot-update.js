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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)({\n    mainDiv: {\n        width: '100%',\n        marginTop: '171px',\n        float: 'left'\n    },\n    insideDivTitle: {\n        width: '1132px',\n        margin: '0 auto'\n    },\n    insideDiv: {\n        width: '1180px',\n        margin: '0 auto'\n    },\n    titleDiv: {\n        width: '432px',\n        height: '59px'\n    },\n    allSlides: {\n        marginTop: '71px'\n    },\n    arrowLeft: {\n        width: '40px',\n        height: '40px',\n        float: 'left',\n        marginRight: '37px',\n        marginTop: '150px',\n        background: 'linear-gradient(223.33deg, #A1EEF7 -10.05%, #FEE396 95.51%)',\n        opacity: '0.75',\n        border: '2px solid rgba(255, 255, 255, 0.5)',\n        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05)',\n        borderRadius: '10000px',\n        transition: 'border .5s, opacity .5s',\n        '&:hover': {\n            border: '2px solid #FFFFFF',\n            opacity: '1',\n            cursor: 'pointer'\n        }\n    },\n    arrowLeftIcon: {\n        transform: 'rotate(180deg)',\n        color: 'white',\n        width: '22px',\n        height: 'auto'\n    },\n    arrowRight: {\n        width: '40px',\n        height: '40px',\n        float: 'left',\n        marginLeft: '27px',\n        marginTop: '150px',\n        background: 'linear-gradient(223.33deg, #A1EEF7 -10.05%, #FEE396 95.51%)',\n        opacity: '0.75',\n        border: '2px solid rgba(255, 255, 255, 0.5)',\n        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05)',\n        borderRadius: '10000px',\n        transform: 'rotate(180deg)',\n        transition: 'border .5s, opacity .5s',\n        '&:hover': {\n            border: '2px solid #FFFFFF',\n            opacity: '1',\n            cursor: 'pointer'\n        }\n    },\n    arrowRightIcon: {\n        transform: 'rotate(-180deg)',\n        color: 'white',\n        width: '22px',\n        height: 'auto'\n    },\n    sliderDiv: {\n        width: '1030px',\n        float: 'left'\n    },\n    insideOneSlideOutside: {\n        width: '330px'\n    },\n    insideOneSlide: {\n        width: '300px',\n        height: '377px',\n        background: '#FFFFFF',\n        borderRadius: '18px',\n        margin: '0 auto'\n    },\n    bigImage: {\n        width: '252px',\n        height: '252px',\n        borderRadius: '10px',\n        marginLeft: 'auto',\n        marginRight: 'auto',\n        paddingTop: '24px'\n    },\n    smallImage: {\n        width: '72px',\n        height: '72px',\n        borderRadius: '1000px',\n        marginLeft: 'auto',\n        marginRight: 'auto',\n        padding: '4px',\n        borderSize: '3px',\n        borderStyle: 'solid',\n        borderColor: 'rgb(233,212,218)',\n        position: 'absolute',\n        top: '3px',\n        right: '33px'\n    },\n    firstLine: {\n        marginTop: '18px'\n    },\n    nameTypo: {\n        fontFamily: 'Orbitron',\n        fontStyle: 'normal',\n        fontWeight: '600',\n        fontSize: '14px',\n        lineHeight: '24px',\n        textTransform: 'uppercase',\n        marginLeft: '24px',\n        color: '#636363',\n        float: 'left'\n    },\n    roleTypo: {\n        marginTop: '8px',\n        fontFamily: 'Orbitron',\n        fontStyle: 'normal',\n        fontWeight: '400',\n        fontSize: '12px',\n        lineHeight: '24px',\n        textTransform: 'uppercase',\n        marginLeft: '24px',\n        color: '#636363',\n        clear: 'both'\n    },\n    teamLinks: {\n        float: 'right',\n        marginRight: '24px',\n        marginTop: '3px'\n    },\n    linkedIn: {\n        width: '19px',\n        height: '19px',\n        float: 'left',\n        opacity: '1',\n        transition: 'opacity .5s',\n        '&:hover': {\n            opacity: '0.7'\n        }\n    },\n    twitter: {\n        width: '19px',\n        height: '15px',\n        marginLeft: '13px',\n        float: 'left',\n        opacity: '1',\n        transition: 'opacity .5s',\n        '&:hover': {\n            opacity: '0.7'\n        }\n    },\n    instagram: {\n        width: '19px',\n        height: '19px',\n        float: 'left',\n        opacity: '1',\n        transition: 'opacity .5s',\n        '&:hover': {\n            opacity: '0.7'\n        }\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (useStyles);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2luZGV4UGFnZS90ZWFtL3RlYW1TdHlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOztBQUFxRDtBQUVyRCxHQUFLLENBQUNDLFNBQVMsR0FBR0Qsb0VBQVUsQ0FBQyxDQUFDO0lBQzdCRSxPQUFPLEVBQUUsQ0FBQztRQUNUQyxLQUFLLEVBQUUsQ0FBTTtRQUNiQyxTQUFTLEVBQUUsQ0FBTztRQUNsQkMsS0FBSyxFQUFFLENBQU07SUFDZCxDQUFDO0lBRURDLGNBQWMsRUFBRSxDQUFDO1FBQ2hCSCxLQUFLLEVBQUUsQ0FBUTtRQUNmSSxNQUFNLEVBQUUsQ0FBUTtJQUNqQixDQUFDO0lBRURDLFNBQVMsRUFBRSxDQUFDO1FBQ1hMLEtBQUssRUFBRSxDQUFRO1FBQ2ZJLE1BQU0sRUFBRSxDQUFRO0lBQ2pCLENBQUM7SUFFREUsUUFBUSxFQUFFLENBQUM7UUFDVk4sS0FBSyxFQUFFLENBQU87UUFDZE8sTUFBTSxFQUFFLENBQU07SUFDZixDQUFDO0lBRURDLFNBQVMsRUFBRSxDQUFDO1FBQ1hQLFNBQVMsRUFBRSxDQUFNO0lBQ2xCLENBQUM7SUFFRFEsU0FBUyxFQUFFLENBQUM7UUFDWFQsS0FBSyxFQUFFLENBQU07UUFDYk8sTUFBTSxFQUFFLENBQU07UUFDZEwsS0FBSyxFQUFFLENBQU07UUFDYlEsV0FBVyxFQUFFLENBQU07UUFDbkJULFNBQVMsRUFBRSxDQUFPO1FBQ2xCVSxVQUFVLEVBQ1QsQ0FBNkQ7UUFDOURDLE9BQU8sRUFBRSxDQUFNO1FBQ2ZDLE1BQU0sRUFBRSxDQUFvQztRQUM1Q0MsU0FBUyxFQUFFLENBQWlDO1FBQzVDQyxZQUFZLEVBQUUsQ0FBUztRQUN2QkMsVUFBVSxFQUFFLENBQXlCO1FBQ3JDLENBQVMsVUFBRSxDQUFDO1lBQ1hILE1BQU0sRUFBRSxDQUFtQjtZQUMzQkQsT0FBTyxFQUFFLENBQUc7WUFDWkssTUFBTSxFQUFFLENBQVM7UUFDbEIsQ0FBQztJQUNGLENBQUM7SUFFREMsYUFBYSxFQUFFLENBQUM7UUFDZkMsU0FB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dEIsVUFBVSxFQUFFLENBQU07UUFDbEJGLEtBQUssRUFBRSxDQUFTO1FBQ2hCMEIsS0FBSyxFQUFFLENBQU07SUFDZCxDQUFDO0lBRURDLFNBQVMsRUFBRSxDQUFDO1FBQ1g3QyxLQUFLLEVBQUUsQ0FBTztRQUNkUSxXQUFXLEVBQUUsQ0FBTTtRQUNuQlQsU0FBUyxFQUFFLENBQUs7SUFDakIsQ0FBQztJQUVEK0MsUUFBUSxFQUFFLENBQUM7UUFDVmhELEtBQUssRUFBRSxDQUFNO1FBQ2JPLE1BQU0sRUFBRSxDQUFNO1FBQ2RMLEtBQUssRUFBRSxDQUFNO1FBRWJVLE9BQU8sRUFBRSxDQUFHO1FBQ1pJLFVBQVUsRUFBRSxDQUFhO1FBQ3pCLENBQVMsVUFBRSxDQUFDO1lBQ1hKLE9BQU8sRUFBRSxDQUFLO1FBQ2YsQ0FBQztJQUNGLENBQUM7SUFFRHFDLE9BQU8sRUFBRSxDQUFDO1FBQ1RqRCxLQUFLLEVBQUUsQ0FBTTtRQUNiTyxNQUFNLEVBQUUsQ0FBTTtRQUNkZSxVQUFVLEVBQUUsQ0FBTTtRQUNsQnBCLEtBQUssRUFBRSxDQUFNO1FBRWJVLE9BQU8sRUFBRSxDQUFHO1FBQ1pJLFVBQVUsRUFBRSxDQUFhO1FBQ3pCLENBQVMsVUFBRSxDQUFDO1lBQ1hKLE9BQU8sRUFBRSxDQUFLO1FBQ2YsQ0FBQztJQUNGLENBQUM7SUFFRHNDLFNBQVMsRUFBRSxDQUFDO1FBQ1hsRCxLQUFLLEVBQUUsQ0FBTTtRQUNiTyxNQUFNLEVBQUUsQ0FBTTtRQUNkTCxLQUFLLEVBQUUsQ0FBTTtRQUViVSxPQUFPLEVBQUUsQ0FBRztRQUNaSSxVQUFVLEVBQUUsQ0FBYTtRQUN6QixDQUFTLFVBQUUsQ0FBQztZQUNYSixPQUFPLEVBQUUsQ0FBSztRQUNmLENBQUM7SUFDRixDQUFDO0FBQ0YsQ0FBQztBQUVELCtEQUFlZCxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbmRleFBhZ2UvdGVhbS90ZWFtU3R5bGUuanM/ZDUzZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG5cdG1haW5EaXY6IHtcclxuXHRcdHdpZHRoOiAnMTAwJScsXHJcblx0XHRtYXJnaW5Ub3A6ICcxNzFweCcsXHJcblx0XHRmbG9hdDogJ2xlZnQnLFxyXG5cdH0sXHJcblxyXG5cdGluc2lkZURpdlRpdGxlOiB7XHJcblx0XHR3aWR0aDogJzExMzJweCcsXHJcblx0XHRtYXJnaW46ICcwIGF1dG8nLFxyXG5cdH0sXHJcblxyXG5cdGluc2lkZURpdjoge1xyXG5cdFx0d2lkdGg6ICcxMTgwcHgnLFxyXG5cdFx0bWFyZ2luOiAnMCBhdXRvJyxcclxuXHR9LFxyXG5cclxuXHR0aXRsZURpdjoge1xyXG5cdFx0d2lkdGg6ICc0MzJweCcsXHJcblx0XHRoZWlnaHQ6ICc1OXB4JyxcclxuXHR9LFxyXG5cclxuXHRhbGxTbGlkZXM6IHtcclxuXHRcdG1hcmdpblRvcDogJzcxcHgnLFxyXG5cdH0sXHJcblxyXG5cdGFycm93TGVmdDoge1xyXG5cdFx0d2lkdGg6ICc0MHB4JyxcclxuXHRcdGhlaWdodDogJzQwcHgnLFxyXG5cdFx0ZmxvYXQ6ICdsZWZ0JyxcclxuXHRcdG1hcmdpblJpZ2h0OiAnMzdweCcsXHJcblx0XHRtYXJnaW5Ub3A6ICcxNTBweCcsXHJcblx0XHRiYWNrZ3JvdW5kOlxyXG5cdFx0XHQnbGluZWFyLWdyYWRpZW50KDIyMy4zM2RlZywgI0ExRUVGNyAtMTAuMDUlLCAjRkVFMzk2IDk1LjUxJSknLFxyXG5cdFx0b3BhY2l0eTogJzAuNzUnLFxyXG5cdFx0Ym9yZGVyOiAnMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KScsXHJcblx0XHRib3hTaGFkb3c6ICcwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDUpJyxcclxuXHRcdGJvcmRlclJhZGl1czogJzEwMDAwcHgnLFxyXG5cdFx0dHJhbnNpdGlvbjogJ2JvcmRlciAuNXMsIG9wYWNpdHkgLjVzJyxcclxuXHRcdCcmOmhvdmVyJzoge1xyXG5cdFx0XHRib3JkZXI6ICcycHggc29saWQgI0ZGRkZGRicsXHJcblx0XHRcdG9wYWNpdHk6ICcxJyxcclxuXHRcdFx0Y3Vyc29yOiAncG9pbnRlcicsXHJcblx0XHR9LFxyXG5cdH0sXHJcblxyXG5cdGFycm93TGVmdEljb246IHtcclxuXHRcdHRyYW5zZm9ybTogJ3JvdGF0ZSgxODBkZWcpJyxcclxuXHRcdGNvbG9yOiAnd2hpdGUnLFxyXG5cdFx0d2lkdGg6ICcyMnB4JyxcclxuXHRcdGhlaWdodDogJ2F1dG8nLFxyXG5cdH0sXHJcblxyXG5cdGFycm93UmlnaHQ6IHtcclxuXHRcdHdpZHRoOiAnNDBweCcsXHJcblx0XHRoZWlnaHQ6ICc0MHB4JyxcclxuXHRcdGZsb2F0OiAnbGVmdCcsXHJcblx0XHRtYXJnaW5MZWZ0OiAnMjdweCcsXHJcblx0XHRtYXJnaW5Ub3A6ICcxNTBweCcsXHJcblx0XHRiYWNrZ3JvdW5kOlxyXG5cdFx0XHQnbGluZWFyLWdyYWRpZW50KDIyMy4zM2RlZywgI0ExRUVGNyAtMTAuMDUlLCAjRkVFMzk2IDk1LjUxJSknLFxyXG5cdFx0b3BhY2l0eTogJzAuNzUnLFxyXG5cdFx0Ym9yZGVyOiAnMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KScsXHJcblx0XHRib3hTaGFkb3c6ICcwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDUpJyxcclxuXHRcdGJvcmRlclJhZGl1czogJzEwMDAwcHgnLFxyXG5cdFx0dHJhbnNmb3JtOiAncm90YXRlKDE4MGRlZyknLFxyXG5cdFx0dHJhbnNpdGlvbjogJ2JvcmRlciAuNXMsIG9wYWNpdHkgLjVzJyxcclxuXHRcdCcmOmhvdmVyJzoge1xyXG5cdFx0XHRib3JkZXI6ICcycHggc29saWQgI0ZGRkZGRicsXHJcblx0XHRcdG9wYWNpdHk6ICcxJyxcclxuXHRcdFx0Y3Vyc29yOiAncG9pbnRlcicsXHJcblx0XHR9LFxyXG5cdH0sXHJcblxyXG5cdGFycm93UmlnaHRJY29uOiB7XHJcblx0XHR0cmFuc2Zvcm06ICdyb3RhdGUoLTE4MGRlZyknLFxyXG5cdFx0Y29sb3I6ICd3aGl0ZScsXHJcblx0XHR3aWR0aDogJzIycHgnLFxyXG5cdFx0aGVpZ2h0OiAnYXV0bycsXHJcblx0fSxcclxuXHJcblx0c2xpZGVyRGl2OiB7XHJcblx0XHR3aWR0aDogJzEwMzBweCcsXHJcblx0XHRmbG9hdDogJ2xlZnQnLFxyXG5cdH0sXHJcblxyXG5cdGluc2lkZU9uZVNsaWRlT3V0c2lkZToge1xyXG5cdFx0d2lkdGg6ICczMzBweCcsXHJcblx0fSxcclxuXHJcblx0aW5zaWRlT25lU2xpZGU6IHtcclxuXHRcdHdpZHRoOiAnMzAwcHgnLFxyXG5cdFx0aGVpZ2h0OiAnMzc3cHgnLFxyXG5cdFx0YmFja2dyb3VuZDogJyNGRkZGRkYnLFxyXG5cdFx0Ym9yZGVyUmFkaXVzOiAnMThweCcsXHJcblx0XHRtYXJnaW46ICcwIGF1dG8nLFxyXG5cdH0sXHJcblxyXG5cdGJpZ0ltYWdlOiB7XHJcblx0XHR3aWR0aDogJzI1MnB4JyxcclxuXHRcdGhlaWdodDogJzI1MnB4JyxcclxuXHRcdGJvcmRlclJhZGl1czogJzEwcHgnLFxyXG5cdFx0bWFyZ2luTGVmdDogJ2F1dG8nLFxyXG5cdFx0bWFyZ2luUmlnaHQ6ICdhdXRvJyxcclxuXHRcdHBhZGRpbmdUb3A6ICcyNHB4JyxcclxuXHR9LFxyXG5cclxuXHRzbWFsbEltYWdlOiB7XHJcblx0XHR3aWR0aDogJzcycHgnLFxyXG5cdFx0aGVpZ2h0OiAnNzJweCcsXHJcblx0XHRib3JkZXJSYWRpdXM6ICcxMDAwcHgnLFxyXG5cdFx0bWFyZ2luTGVmdDogJ2F1dG8nLFxyXG5cdFx0bWFyZ2luUmlnaHQ6ICdhdXRvJyxcclxuXHRcdHBhZGRpbmc6ICc0cHgnLFxyXG5cdFx0Ym9yZGVyU2l6ZTogJzNweCcsXHJcblx0XHRib3JkZXJTdHlsZTogJ3NvbGlkJyxcclxuXHRcdGJvcmRlckNvbG9yOiAncmdiKDIzMywyMTIsMjE4KScsXHJcblx0XHRwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuXHRcdHRvcDogJzNweCcsXHJcblx0XHRyaWdodDogJzMzcHgnLFxyXG5cdH0sXHJcblxyXG5cdGZpcnN0TGluZToge1xyXG5cdFx0bWFyZ2luVG9wOiAnMThweCcsXHJcblx0fSxcclxuXHJcblx0bmFtZVR5cG86IHtcclxuXHRcdGZvbnRGYW1pbHk6ICdPcmJpdHJvbicsXHJcblx0XHRmb250U3R5bGU6ICdub3JtYWwnLFxyXG5cdFx0Zm9udFdlaWdodDogJzYwMCcsXHJcblx0XHRmb250U2l6ZTogJzE0cHgnLFxyXG5cdFx0bGluZUhlaWdodDogJzI0cHgnLFxyXG5cdFx0dGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXHJcblx0XHRtYXJnaW5MZWZ0OiAnMjRweCcsXHJcblx0XHRjb2xvcjogJyM2MzYzNjMnLFxyXG5cdFx0ZmxvYXQ6ICdsZWZ0JyxcclxuXHR9LFxyXG5cclxuXHRyb2xlVHlwbzoge1xyXG5cdFx0bWFyZ2luVG9wOiAnOHB4JyxcclxuXHRcdGZvbnRGYW1pbHk6ICdPcmJpdHJvbicsXHJcblx0XHRmb250U3R5bGU6ICdub3JtYWwnLFxyXG5cdFx0Zm9udFdlaWdodDogJzQwMCcsXHJcblx0XHRmb250U2l6ZTogJzEycHgnLFxyXG5cdFx0bGluZUhlaWdodDogJzI0cHgnLFxyXG5cdFx0dGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXHJcblx0XHRtYXJnaW5MZWZ0OiAnMjRweCcsXHJcblx0XHRjb2xvcjogJyM2MzYzNjMnLFxyXG5cdFx0Y2xlYXI6ICdib3RoJyxcclxuXHR9LFxyXG5cclxuXHR0ZWFtTGlua3M6IHtcclxuXHRcdGZsb2F0OiAncmlnaHQnLFxyXG5cdFx0bWFyZ2luUmlnaHQ6ICcyNHB4JyxcclxuXHRcdG1hcmdpblRvcDogJzNweCcsXHJcblx0fSxcclxuXHJcblx0bGlua2VkSW46IHtcclxuXHRcdHdpZHRoOiAnMTlweCcsXHJcblx0XHRoZWlnaHQ6ICcxOXB4JyxcclxuXHRcdGZsb2F0OiAnbGVmdCcsXHJcblxyXG5cdFx0b3BhY2l0eTogJzEnLFxyXG5cdFx0dHJhbnNpdGlvbjogJ29wYWNpdHkgLjVzJyxcclxuXHRcdCcmOmhvdmVyJzoge1xyXG5cdFx0XHRvcGFjaXR5OiAnMC43JyxcclxuXHRcdH0sXHJcblx0fSxcclxuXHJcblx0dHdpdHRlcjoge1xyXG5cdFx0d2lkdGg6ICcxOXB4JyxcclxuXHRcdGhlaWdodDogJzE1cHgnLFxyXG5cdFx0bWFyZ2luTGVmdDogJzEzcHgnLFxyXG5cdFx0ZmxvYXQ6ICdsZWZ0JyxcclxuXHJcblx0XHRvcGFjaXR5OiAnMScsXHJcblx0XHR0cmFuc2l0aW9uOiAnb3BhY2l0eSAuNXMnLFxyXG5cdFx0JyY6aG92ZXInOiB7XHJcblx0XHRcdG9wYWNpdHk6ICcwLjcnLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cclxuXHRpbnN0YWdyYW06IHtcclxuXHRcdHdpZHRoOiAnMTlweCcsXHJcblx0XHRoZWlnaHQ6ICcxOXB4JyxcclxuXHRcdGZsb2F0OiAnbGVmdCcsXHJcblxyXG5cdFx0b3BhY2l0eTogJzEnLFxyXG5cdFx0dHJhbnNpdGlvbjogJ29wYWNpdHkgLjVzJyxcclxuXHRcdCcmOmhvdmVyJzoge1xyXG5cdFx0XHRvcGFjaXR5OiAnMC43JyxcclxuXHRcdH0sXHJcblx0fSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VTdHlsZXM7XHJcbiJdLCJuYW1lcyI6WyJtYWtlU3R5bGVzIiwidXNlU3R5bGVzIiwibWFpbkRpdiIsIndpZHRoIiwibWFyZ2luVG9wIiwiZmxvYXQiLCJpbnNpZGVEaXZUaXRsZSIsIm1hcmdpbiIsImluc2lkZURpdiIsInRpdGxlRGl2IiwiaGVpZ2h0IiwiYWxsU2xpZGVzIiwiYXJyb3dMZWZ0IiwibWFyZ2luUmlnaHQiLCJiYWNrZ3JvdW5kIiwib3BhY2l0eSIsImJvcmRlciIsImJveFNoYWRvdyIsImJvcmRlclJhZGl1cyIsInRyYW5zaXRpb24iLCJjdXJzb3IiLCJhcnJvd0xlZnRJY29uIiwidHJhbnNmb3JtIiwiY29sb3IiLCJhcnJvd1JpZ2h0IiwibWFyZ2luTGVmdCIsImFycm93UmlnaHRJY29uIiwic2xpZGVyRGl2IiwiaW5zaWRlT25lU2xpZGVPdXRzaWRlIiwiaW5zaWRlT25lU2xpZGUiLCJiaWdJbWFnZSIsInBhZGRpbmdUb3AiLCJzbWFsbEltYWdlIiwicGFkZGluZyIsImJvcmRlclNpemUiLCJib3JkZXJTdHlsZSIsImJvcmRlckNvbG9yIiwicG9zaXRpb24iLCJ0b3AiLCJyaWdodCIsImZpcnN0TGluZSIsIm5hbWVUeXBvIiwiZm9udEZhbWlseSIsImZvbnRTdHlsZSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJ0ZXh0VHJhbnNmb3JtIiwicm9sZVR5cG8iLCJjbGVhciIsInRlYW1MaW5rcyIsImxpbmtlZEluIiwidHdpdHRlciIsImluc3RhZ3JhbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/indexPage/team/teamStyle.js\n");

/***/ })

});