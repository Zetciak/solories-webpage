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

/***/ "./components/indexPage/firstSection/firstSectionStyle.js":
/*!****************************************************************!*\
  !*** ./components/indexPage/firstSection/firstSectionStyle.js ***!
  \****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nvar _obj;\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)((_obj = {\n    mainDiv: {\n        width: '1132px',\n        margin: '0 auto'\n    },\n    leftSection: {\n        float: 'left',\n        width: '500px'\n    },\n    rightSection: {\n        width: '584px',\n        height: '622px',\n        float: 'right'\n    },\n    titleDiv: {\n        marginTop: '109px',\n        width: '494px',\n        height: '49px'\n    },\n    leftSectionDesc: {\n        marginTop: '33px',\n        fontFamily: 'Alef',\n        fontStyle: 'normal',\n        fontWeight: '400',\n        fontSize: '14px',\n        lineHeight: '200%',\n        color: 'rgba(99, 99, 99, 0.75)'\n    },\n    buttonDiv: {\n        marginTop: '16px'\n    },\n    button: {\n        height: '42px',\n        border: '2px solid rgba(255, 255, 255, 0.5)',\n        background: 'linear-gradient(262.73deg, #A1EEF7 -11.08%, #FEE396 104.77%)',\n        borderRadius: '6px',\n        boxShadow: '0px 3px 4px rgba(0, 0, 0, 0.05)',\n        transition: 'border .5s',\n        float: 'left',\n        '&:hover': {\n            border: '2px solid #ffffff',\n            boxShadow: '0px 3px 4px rgba(0, 0, 0, 0.05)'\n        },\n        '&:disabled': {\n            opacity: '0.75',\n            background: ' linear-gradient(262.73deg, rgba(161, 238, 247, 0.35) -9.01%, rgba(254, 227, 150, 0.35) 98.75%)',\n            '& p': {\n                color: 'rgba(99, 99, 99, 0.6);'\n            }\n        },\n        '& p': {\n            fontFamily: 'Orbitron',\n            fontStyle: 'normal',\n            fontWeight: '500',\n            fontSize: '12px',\n            lineHeight: '200%',\n            textTransform: 'none',\n            color: '#636363',\n            marginLeft: '10px'\n        }\n    },\n    rightButton: {\n        marginLeft: '24px'\n    },\n    arrowIcon: {\n        color: '#636363',\n        width: '17px',\n        height: 'auto',\n        marginLeft: '6px',\n        marginRight: '10px'\n    },\n    rightArrowIcon: {\n        color: 'rgba(99, 99, 99, 0.6)',\n        width: '17px',\n        height: 'auto',\n        marginLeft: '6px',\n        marginRight: '10px'\n    },\n    infosDiv: {\n        marginTop: '102px'\n    },\n    infosOneDiv: {\n        height: '96px',\n        float: 'left'\n    },\n    infosOneDivStripe: {\n        width: '2px',\n        height: '64px',\n        float: 'left',\n        background: '#000000',\n        opacity: '0.15',\n        marginTop: '10px'\n    },\n    infosOneDivTitle: {\n        fontFamily: 'Orbitron',\n        fontStyle: 'normal',\n        fontWeight: '900',\n        fontSize: '35px',\n        lineHeight: '53px',\n        color: '#636363',\n        letterSpacing: '0.221092px'\n    },\n    infosOneDivTitle1: {\n        marginLeft: '0px',\n        marginRight: '37px'\n    },\n    infosOneDivTitle2: {\n        marginLeft: '37px',\n        marginRight: '37px'\n    },\n    infosOneDivTitle3: {\n        marginLeft: '37px',\n        marginRight: '0px'\n    },\n    infosOneDivDesc: {\n        fontFamily: 'Alef',\n        fontStyle: 'normal',\n        fontWeight: '400',\n        fontSize: '17.6873px',\n        lineHeight: '22px',\n        color: '#636363',\n        letterSpacing: '0.221092px',\n        marginTop: '1px'\n    },\n    infosOneDivDesc1: {\n        marginLeft: '0px',\n        marginRight: '37px'\n    },\n    infosOneDivDesc2: {\n        marginLeft: '37px',\n        marginRight: '37px'\n    },\n    infosOneDivDesc3: {\n        marginLeft: '37px',\n        marginRight: '0px'\n    }\n}, //<<<<<<<<<<<<<<<<<<<< Responsive scale\n//1439px\n_defineProperty(_obj, '@media (max-width: 1439px)', {\n    mainDiv: {\n        width: '90%'\n    }\n}), //1225px\n_defineProperty(_obj, '@media (max-width: 1225px)', {\n    mainDiv: {\n        width: '90%'\n    }\n}), _obj));\n/* harmony default export */ __webpack_exports__[\"default\"] = (useStyles);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2luZGV4UGFnZS9maXJzdFNlY3Rpb24vZmlyc3RTZWN0aW9uU3R5bGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBcUQ7Ozs7Ozs7Ozs7Ozs7O0lBRXhCLElBZ0w1QjtBQWhMRCxHQUFLLENBQUNDLFNBQVMsR0FBR0Qsb0VBQVUsRUFBQyxJQWdMNUI7SUEvS0FFLE9BQU8sRUFBRSxDQUFDO1FBQ1RDLEtBQUssRUFBRSxDQUFRO1FBQ2ZDLE1BQU0sRUFBRSxDQUFRO0lBQ2pCLENBQUM7SUFFREMsV0FBVyxFQUFFLENBQUM7UUFDYkMsS0FBSyxFQUFFLENBQU07UUFDYkgsS0FBSyxFQUFFLENBQU87SUFDZixDQUFDO0lBRURJLFlBQVksRUFBRSxDQUFDO1FBQ2RKLEtBQUssRUFBRSxDQUFPO1FBQ2RLLE1BQU0sRUFBRSxDQUFPO1FBQ2ZGLEtBQUssRUFBRSxDQUFPO0lBQ2YsQ0FBQztJQUVERyxRQUFRLEVBQUUsQ0FBQztRQUNWQyxTQUFTLEVBQUUsQ0FBTztRQUNsQlAsS0FBSyxFQUFFLENBQU87UUFDZEssTUFBTSxFQUFFLENBQU07SUFDZixDQUFDO0lBRURHLGVBQWUsRUFBRSxDQUFDO1FBQ2pCRCxTQUFTLEVBQUUsQ0FBTTtRQUNqQkUsVUFBVSxFQUFFLENBQU07UUFDbEJDLFNBQVMsRUFBRSxDQUFRO1FBQ25CQyxVQUFVLEVBQUUsQ0FBSztRQUNqQkMsUUFBUSxFQUFFLENBQU07UUFDaEJDLFVBQVUsRUFBRSxDQUFNO1FBQ2xCQyxLQUFLLEVBQUUsQ0FBd0I7SUFDaEMsQ0FBQztJQUVEQyxTQUFTLEVBQUUsQ0FBQztRQUNYUixTQUFTLEVBQUUsQ0FBTTtJQUNsQixDQUFDO0lBRURTLE1BQU0sRUFBRSxDQUFDO1FBQ1JYLE1BQU0sRUFBRSxDQUFNO1FBQ2RZLE1BQU0sRUFBRSxDQUFvQztRQUM1Q0MsVUFBVSxFQUNULENBQThEO1FBQy9EQyxZQUFZLEVBQUUsQ0FBSztRQUNuQkMsU0FBUyxFQUFFLENBQWlDO1FBQzVDQyxVQUFVLEVBQUUs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QWdCLEVBQUUsQ0FBQztRQUNsQmYsVUFBVSxFQUFFLENBQU07UUFDbEJHLFdBQVcsRUFBRSxDQUFNO0lBQ3BCLENBQUM7SUFFRGEsZ0JBQWdCLEVBQUUsQ0FBQztRQUNsQmhCLFVBQVUsRUFBRSxDQUFNO1FBQ2xCRyxXQUFXLEVBQUUsQ0FBSztJQUNuQixDQUFDO0dBRUQsRUFBdUM7QUFDdkMsRUFBUTtnQkFuS29CLElBZ0w1QixFQVpDLENBQTRCLDZCQUFHLENBQUM7SUFDaEM1QixPQUFPLEVBQUUsQ0FBQztRQUNUQyxLQUFLLEVBQUUsQ0FBSztJQUNiLENBQUM7QUFDRixDQUFDLEdBRUQsRUFBUTtnQkExS29CLElBZ0w1QixFQUxDLENBQTRCLDZCQUFHLENBQUM7SUFDaENELE9BQU8sRUFBRSxDQUFDO1FBQ1RDLEtBQUssRUFBRSxDQUFLO0lBQ2IsQ0FBQztBQUNGLENBQUMsR0EvSzJCLElBZ0w1QjtBQUVELCtEQUFlRixTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbmRleFBhZ2UvZmlyc3RTZWN0aW9uL2ZpcnN0U2VjdGlvblN0eWxlLmpzPzY4ZjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuXHRtYWluRGl2OiB7XHJcblx0XHR3aWR0aDogJzExMzJweCcsXHJcblx0XHRtYXJnaW46ICcwIGF1dG8nLFxyXG5cdH0sXHJcblxyXG5cdGxlZnRTZWN0aW9uOiB7XHJcblx0XHRmbG9hdDogJ2xlZnQnLFxyXG5cdFx0d2lkdGg6ICc1MDBweCcsXHJcblx0fSxcclxuXHJcblx0cmlnaHRTZWN0aW9uOiB7XHJcblx0XHR3aWR0aDogJzU4NHB4JyxcclxuXHRcdGhlaWdodDogJzYyMnB4JyxcclxuXHRcdGZsb2F0OiAncmlnaHQnLFxyXG5cdH0sXHJcblxyXG5cdHRpdGxlRGl2OiB7XHJcblx0XHRtYXJnaW5Ub3A6ICcxMDlweCcsXHJcblx0XHR3aWR0aDogJzQ5NHB4JyxcclxuXHRcdGhlaWdodDogJzQ5cHgnLFxyXG5cdH0sXHJcblxyXG5cdGxlZnRTZWN0aW9uRGVzYzoge1xyXG5cdFx0bWFyZ2luVG9wOiAnMzNweCcsXHJcblx0XHRmb250RmFtaWx5OiAnQWxlZicsXHJcblx0XHRmb250U3R5bGU6ICdub3JtYWwnLFxyXG5cdFx0Zm9udFdlaWdodDogJzQwMCcsXHJcblx0XHRmb250U2l6ZTogJzE0cHgnLFxyXG5cdFx0bGluZUhlaWdodDogJzIwMCUnLFxyXG5cdFx0Y29sb3I6ICdyZ2JhKDk5LCA5OSwgOTksIDAuNzUpJyxcclxuXHR9LFxyXG5cclxuXHRidXR0b25EaXY6IHtcclxuXHRcdG1hcmdpblRvcDogJzE2cHgnLFxyXG5cdH0sXHJcblxyXG5cdGJ1dHRvbjoge1xyXG5cdFx0aGVpZ2h0OiAnNDJweCcsXHJcblx0XHRib3JkZXI6ICcycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpJyxcclxuXHRcdGJhY2tncm91bmQ6XHJcblx0XHRcdCdsaW5lYXItZ3JhZGllbnQoMjYyLjczZGVnLCAjQTFFRUY3IC0xMS4wOCUsICNGRUUzOTYgMTA0Ljc3JSknLFxyXG5cdFx0Ym9yZGVyUmFkaXVzOiAnNnB4JyxcclxuXHRcdGJveFNoYWRvdzogJzBweCAzcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wNSknLFxyXG5cdFx0dHJhbnNpdGlvbjogJ2JvcmRlciAuNXMnLFxyXG5cdFx0ZmxvYXQ6ICdsZWZ0JyxcclxuXHJcblx0XHQnJjpob3Zlcic6IHtcclxuXHRcdFx0Ym9yZGVyOiAnMnB4IHNvbGlkICNmZmZmZmYnLFxyXG5cdFx0XHRib3hTaGFkb3c6ICcwcHggM3B4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDUpJyxcclxuXHRcdH0sXHJcblxyXG5cdFx0JyY6ZGlzYWJsZWQnOiB7XHJcblx0XHRcdG9wYWNpdHk6ICcwLjc1JyxcclxuXHRcdFx0YmFja2dyb3VuZDpcclxuXHRcdFx0XHQnIGxpbmVhci1ncmFkaWVudCgyNjIuNzNkZWcsIHJnYmEoMTYxLCAyMzgsIDI0NywgMC4zNSkgLTkuMDElLCByZ2JhKDI1NCwgMjI3LCAxNTAsIDAuMzUpIDk4Ljc1JSknLFxyXG5cdFx0XHQnJiBwJzoge1xyXG5cdFx0XHRcdGNvbG9yOiAncmdiYSg5OSwgOTksIDk5LCAwLjYpOycsXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cclxuXHRcdCcmIHAnOiB7XHJcblx0XHRcdGZvbnRGYW1pbHk6ICdPcmJpdHJvbicsXHJcblx0XHRcdGZvbnRTdHlsZTogJ25vcm1hbCcsXHJcblx0XHRcdGZvbnRXZWlnaHQ6ICc1MDAnLFxyXG5cdFx0XHRmb250U2l6ZTogJzEycHgnLFxyXG5cdFx0XHRsaW5lSGVpZ2h0OiAnMjAwJScsXHJcblx0XHRcdHRleHRUcmFuc2Zvcm06ICdub25lJyxcclxuXHRcdFx0Y29sb3I6ICcjNjM2MzYzJyxcclxuXHRcdFx0bWFyZ2luTGVmdDogJzEwcHgnLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cclxuXHRyaWdodEJ1dHRvbjoge1xyXG5cdFx0bWFyZ2luTGVmdDogJzI0cHgnLFxyXG5cdH0sXHJcblxyXG5cdGFycm93SWNvbjoge1xyXG5cdFx0Y29sb3I6ICcjNjM2MzYzJyxcclxuXHRcdHdpZHRoOiAnMTdweCcsXHJcblx0XHRoZWlnaHQ6ICdhdXRvJyxcclxuXHRcdG1hcmdpbkxlZnQ6ICc2cHgnLFxyXG5cdFx0bWFyZ2luUmlnaHQ6ICcxMHB4JyxcclxuXHR9LFxyXG5cclxuXHRyaWdodEFycm93SWNvbjoge1xyXG5cdFx0Y29sb3I6ICdyZ2JhKDk5LCA5OSwgOTksIDAuNiknLFxyXG5cdFx0d2lkdGg6ICcxN3B4JyxcclxuXHRcdGhlaWdodDogJ2F1dG8nLFxyXG5cdFx0bWFyZ2luTGVmdDogJzZweCcsXHJcblx0XHRtYXJnaW5SaWdodDogJzEwcHgnLFxyXG5cdH0sXHJcblxyXG5cdGluZm9zRGl2OiB7XHJcblx0XHRtYXJnaW5Ub3A6ICcxMDJweCcsXHJcblx0fSxcclxuXHJcblx0aW5mb3NPbmVEaXY6IHtcclxuXHRcdGhlaWdodDogJzk2cHgnLFxyXG5cdFx0ZmxvYXQ6ICdsZWZ0JyxcclxuXHR9LFxyXG5cclxuXHRpbmZvc09uZURpdlN0cmlwZToge1xyXG5cdFx0d2lkdGg6ICcycHgnLFxyXG5cdFx0aGVpZ2h0OiAnNjRweCcsXHJcblx0XHRmbG9hdDogJ2xlZnQnLFxyXG5cdFx0YmFja2dyb3VuZDogJyMwMDAwMDAnLFxyXG5cdFx0b3BhY2l0eTogJzAuMTUnLFxyXG5cdFx0bWFyZ2luVG9wOiAnMTBweCcsXHJcblx0fSxcclxuXHJcblx0aW5mb3NPbmVEaXZUaXRsZToge1xyXG5cdFx0Zm9udEZhbWlseTogJ09yYml0cm9uJyxcclxuXHRcdGZvbnRTdHlsZTogJ25vcm1hbCcsXHJcblx0XHRmb250V2VpZ2h0OiAnOTAwJyxcclxuXHRcdGZvbnRTaXplOiAnMzVweCcsXHJcblx0XHRsaW5lSGVpZ2h0OiAnNTNweCcsXHJcblx0XHRjb2xvcjogJyM2MzYzNjMnLFxyXG5cdFx0bGV0dGVyU3BhY2luZzogJzAuMjIxMDkycHgnLFxyXG5cdH0sXHJcblxyXG5cdGluZm9zT25lRGl2VGl0bGUxOiB7XHJcblx0XHRtYXJnaW5MZWZ0OiAnMHB4JyxcclxuXHRcdG1hcmdpblJpZ2h0OiAnMzdweCcsXHJcblx0fSxcclxuXHJcblx0aW5mb3NPbmVEaXZUaXRsZTI6IHtcclxuXHRcdG1hcmdpbkxlZnQ6ICczN3B4JyxcclxuXHRcdG1hcmdpblJpZ2h0OiAnMzdweCcsXHJcblx0fSxcclxuXHJcblx0aW5mb3NPbmVEaXZUaXRsZTM6IHtcclxuXHRcdG1hcmdpbkxlZnQ6ICczN3B4JyxcclxuXHRcdG1hcmdpblJpZ2h0OiAnMHB4JyxcclxuXHR9LFxyXG5cclxuXHRpbmZvc09uZURpdkRlc2M6IHtcclxuXHRcdGZvbnRGYW1pbHk6ICdBbGVmJyxcclxuXHRcdGZvbnRTdHlsZTogJ25vcm1hbCcsXHJcblx0XHRmb250V2VpZ2h0OiAnNDAwJyxcclxuXHRcdGZvbnRTaXplOiAnMTcuNjg3M3B4JyxcclxuXHRcdGxpbmVIZWlnaHQ6ICcyMnB4JyxcclxuXHRcdGNvbG9yOiAnIzYzNjM2MycsXHJcblx0XHRsZXR0ZXJTcGFjaW5nOiAnMC4yMjEwOTJweCcsXHJcblx0XHRtYXJnaW5Ub3A6ICcxcHgnLFxyXG5cdH0sXHJcblxyXG5cdGluZm9zT25lRGl2RGVzYzE6IHtcclxuXHRcdG1hcmdpbkxlZnQ6ICcwcHgnLFxyXG5cdFx0bWFyZ2luUmlnaHQ6ICczN3B4JyxcclxuXHR9LFxyXG5cclxuXHRpbmZvc09uZURpdkRlc2MyOiB7XHJcblx0XHRtYXJnaW5MZWZ0OiAnMzdweCcsXHJcblx0XHRtYXJnaW5SaWdodDogJzM3cHgnLFxyXG5cdH0sXHJcblxyXG5cdGluZm9zT25lRGl2RGVzYzM6IHtcclxuXHRcdG1hcmdpbkxlZnQ6ICczN3B4JyxcclxuXHRcdG1hcmdpblJpZ2h0OiAnMHB4JyxcclxuXHR9LFxyXG5cclxuXHQvLzw8PDw8PDw8PDw8PDw8PDw8PDw8IFJlc3BvbnNpdmUgc2NhbGVcclxuXHQvLzE0MzlweFxyXG5cdFsnQG1lZGlhIChtYXgtd2lkdGg6IDE0MzlweCknXToge1xyXG5cdFx0bWFpbkRpdjoge1xyXG5cdFx0XHR3aWR0aDogJzkwJScsXHJcblx0XHR9LFxyXG5cdH0sXHJcblxyXG5cdC8vMTIyNXB4XHJcblx0WydAbWVkaWEgKG1heC13aWR0aDogMTIyNXB4KSddOiB7XHJcblx0XHRtYWluRGl2OiB7XHJcblx0XHRcdHdpZHRoOiAnOTAlJyxcclxuXHRcdH0sXHJcblx0fSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VTdHlsZXM7XHJcbiJdLCJuYW1lcyI6WyJtYWtlU3R5bGVzIiwidXNlU3R5bGVzIiwibWFpbkRpdiIsIndpZHRoIiwibWFyZ2luIiwibGVmdFNlY3Rpb24iLCJmbG9hdCIsInJpZ2h0U2VjdGlvbiIsImhlaWdodCIsInRpdGxlRGl2IiwibWFyZ2luVG9wIiwibGVmdFNlY3Rpb25EZXNjIiwiZm9udEZhbWlseSIsImZvbnRTdHlsZSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJjb2xvciIsImJ1dHRvbkRpdiIsImJ1dHRvbiIsImJvcmRlciIsImJhY2tncm91bmQiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJ0cmFuc2l0aW9uIiwib3BhY2l0eSIsInRleHRUcmFuc2Zvcm0iLCJtYXJnaW5MZWZ0IiwicmlnaHRCdXR0b24iLCJhcnJvd0ljb24iLCJtYXJnaW5SaWdodCIsInJpZ2h0QXJyb3dJY29uIiwiaW5mb3NEaXYiLCJpbmZvc09uZURpdiIsImluZm9zT25lRGl2U3RyaXBlIiwiaW5mb3NPbmVEaXZUaXRsZSIsImxldHRlclNwYWNpbmciLCJpbmZvc09uZURpdlRpdGxlMSIsImluZm9zT25lRGl2VGl0bGUyIiwiaW5mb3NPbmVEaXZUaXRsZTMiLCJpbmZvc09uZURpdkRlc2MiLCJpbmZvc09uZURpdkRlc2MxIiwiaW5mb3NPbmVEaXZEZXNjMiIsImluZm9zT25lRGl2RGVzYzMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/indexPage/firstSection/firstSectionStyle.js\n");

/***/ })

});