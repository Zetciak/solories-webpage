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

/***/ "./components/indexPage/aboutUs/aboutUsStyle.js":
/*!******************************************************!*\
  !*** ./components/indexPage/aboutUs/aboutUsStyle.js ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nvar _obj;\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)((_obj = {\n    mainDiv: {\n        width: '1132px',\n        margin: '0 auto'\n    },\n    leftSection: {\n        width: '500px',\n        height: '729px',\n        marginTop: '120px',\n        float: 'left'\n    },\n    rightSection: {\n        width: '549px',\n        height: '568px',\n        float: 'right'\n    },\n    titleDiv: {\n        marginTop: '70px',\n        width: '549px',\n        height: '57px'\n    },\n    rightSectionDesc: {\n        marginTop: '27px',\n        fontFamily: 'Alef',\n        fontStyle: 'normal',\n        fontWeight: '400',\n        fontSize: '14px',\n        lineHeight: '200%',\n        color: 'rgba(99, 99, 99, 0.75)',\n        width: '551px'\n    },\n    button: {\n        marginTop: '32px',\n        height: '42px',\n        border: '2px solid rgba(255, 255, 255, 0.5)',\n        background: 'linear-gradient(262.73deg, #A1EEF7 -11.08%, #FEE396 104.77%)',\n        borderRadius: '6px',\n        boxShadow: '0px 3px 4px rgba(0, 0, 0, 0.05)',\n        transition: 'border .5s',\n        float: 'left',\n        '&:hover': {\n            border: '2px solid #ffffff',\n            boxShadow: '0px 3px 4px rgba(0, 0, 0, 0.05)'\n        },\n        '&:disabled': {\n            opacity: '0.75',\n            background: ' linear-gradient(262.73deg, rgba(161, 238, 247, 0.35) -9.01%, rgba(254, 227, 150, 0.35) 98.75%)',\n            '& p': {\n                color: 'rgba(99, 99, 99, 0.6);'\n            }\n        },\n        '& p': {\n            fontFamily: 'Orbitron',\n            fontStyle: 'normal',\n            fontWeight: '500',\n            fontSize: '12px',\n            lineHeight: '200%',\n            textTransform: 'none',\n            color: '#636363',\n            marginLeft: '10px'\n        }\n    },\n    arrowIcon: {\n        color: '#636363',\n        width: '17px',\n        height: 'auto',\n        marginLeft: '6px',\n        marginRight: '10px'\n    }\n}, //<<<<<<<<<<<<<<<<<<<< Responsive scale\n//1439px\n_defineProperty(_obj, '@media (max-width: 1439px)', {\n    mainDiv: {\n        width: '90%'\n    }\n}), //1230px\n_defineProperty(_obj, '@media (max-width: 1230px)', {\n    leftSection: {\n        display: 'none'\n    },\n    rightSection: {\n        width: '100%',\n        clear: 'both'\n    },\n    titleDiv: {\n        width: '549px',\n        height: '57px',\n        margin: '0 auto',\n        marginTop: '70px'\n    },\n    rightSectionDesc: {\n        width: '100%',\n        textAlign: 'center'\n    },\n    button: {\n        width: '100%'\n    },\n    outSideButton: {\n        width: '200px',\n        margin: '0 auto',\n        marginTop: '2px'\n    }\n}), //913px\n_defineProperty(_obj, '@media (max-width: 913px)', {\n    rightSectionDesc: {\n        fontSize: '12px',\n        lineHeight: '200%'\n    }\n}), //610px\n_defineProperty(_obj, '@media (max-width: 610px)', {\n    titleDiv: {\n        marginTop: '70px',\n        width: '100%',\n        height: 'auto'\n    }\n}), //580px\n_defineProperty(_obj, '@media (max-width: 580px)', {\n    rightSectionDesc: {\n        fontSize: '10px',\n        lineHeight: '200%'\n    }\n}), //350px\n_defineProperty(_obj, '@media (max-width: 350px)', {\n    rightSectionDesc: {\n        fontSize: '10px',\n        lineHeight: '200%'\n    }\n}), _obj));\n/* harmony default export */ __webpack_exports__[\"default\"] = (useStyles);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2luZGV4UGFnZS9hYm91dFVzL2Fib3V0VXNTdHlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOztBQUFxRDs7Ozs7Ozs7Ozs7Ozs7SUFFeEIsSUEySjVCO0FBM0pELEdBQUssQ0FBQ0MsU0FBUyxHQUFHRCxvRUFBVSxFQUFDLElBMko1QjtJQTFKQUUsT0FBTyxFQUFFLENBQUM7UUFDVEMsS0FBSyxFQUFFLENBQVE7UUFDZkMsTUFBTSxFQUFFLENBQVE7SUFDakIsQ0FBQztJQUVEQyxXQUFXLEVBQUUsQ0FBQztRQUNiRixLQUFLLEVBQUUsQ0FBTztRQUNkRyxNQUFNLEVBQUUsQ0FBTztRQUNmQyxTQUFTLEVBQUUsQ0FBTztRQUNsQkMsS0FBSyxFQUFFLENBQU07SUFDZCxDQUFDO0lBRURDLFlBQVksRUFBRSxDQUFDO1FBQ2ROLEtBQUssRUFBRSxDQUFPO1FBQ2RHLE1BQU0sRUFBRSxDQUFPO1FBQ2ZFLEtBQUssRUFBRSxDQUFPO0lBQ2YsQ0FBQztJQUVERSxRQUFRLEVBQUUsQ0FBQztRQUNWSCxTQUFTLEVBQUUsQ0FBTTtRQUNqQkosS0FBSyxFQUFFLENBQU87UUFDZEcsTUFBTSxFQUFFLENBQU07SUFDZixDQUFDO0lBRURLLGdCQUFnQixFQUFFLENBQUM7UUFDbEJKLFNBQVMsRUFBRSxDQUFNO1FBQ2pCSyxVQUFVLEVBQUUsQ0FBTTtRQUNsQkMsU0FBUyxFQUFFLENBQVE7UUFDbkJDLFVBQVUsRUFBRSxDQUFLO1FBQ2pCQyxRQUFRLEVBQUUsQ0FBTTtRQUNoQkMsVUFBVSxFQUFFLENBQU07UUFDbEJDLEtBQUssRUFBRSxDQUF3QjtRQUMvQmQsS0FBSyxFQUFFLENBQU87SUFDZixDQUFDO0lBRURlLE1BQU0sRUFBRSxDQUFDO1FBQ1JYLFNBQVMsRUFBRSxDQUFNO1FBQ2pCRCxNQUFNLEVBQUUsQ0FBTTtRQUNkYSxNQUFNLEVBQUUsQ0FBb0M7UUFDNUNDLFVBQVUsRUFDVCxDQUE4RDtRQUMvREMsWUFBWSxFQUFFLENBQUs7UUFDbkJDLFNBQVMsRUFB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VSxFQUFFLENBQU07SUFDbkIsQ0FBQztBQUNGLENBQUMsR0ExSjJCLElBMko1QjtBQUVELCtEQUFlZixTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbmRleFBhZ2UvYWJvdXRVcy9hYm91dFVzU3R5bGUuanM/MGU1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG5cdG1haW5EaXY6IHtcclxuXHRcdHdpZHRoOiAnMTEzMnB4JyxcclxuXHRcdG1hcmdpbjogJzAgYXV0bycsXHJcblx0fSxcclxuXHJcblx0bGVmdFNlY3Rpb246IHtcclxuXHRcdHdpZHRoOiAnNTAwcHgnLFxyXG5cdFx0aGVpZ2h0OiAnNzI5cHgnLFxyXG5cdFx0bWFyZ2luVG9wOiAnMTIwcHgnLFxyXG5cdFx0ZmxvYXQ6ICdsZWZ0JyxcclxuXHR9LFxyXG5cclxuXHRyaWdodFNlY3Rpb246IHtcclxuXHRcdHdpZHRoOiAnNTQ5cHgnLFxyXG5cdFx0aGVpZ2h0OiAnNTY4cHgnLFxyXG5cdFx0ZmxvYXQ6ICdyaWdodCcsXHJcblx0fSxcclxuXHJcblx0dGl0bGVEaXY6IHtcclxuXHRcdG1hcmdpblRvcDogJzcwcHgnLFxyXG5cdFx0d2lkdGg6ICc1NDlweCcsXHJcblx0XHRoZWlnaHQ6ICc1N3B4JyxcclxuXHR9LFxyXG5cclxuXHRyaWdodFNlY3Rpb25EZXNjOiB7XHJcblx0XHRtYXJnaW5Ub3A6ICcyN3B4JyxcclxuXHRcdGZvbnRGYW1pbHk6ICdBbGVmJyxcclxuXHRcdGZvbnRTdHlsZTogJ25vcm1hbCcsXHJcblx0XHRmb250V2VpZ2h0OiAnNDAwJyxcclxuXHRcdGZvbnRTaXplOiAnMTRweCcsXHJcblx0XHRsaW5lSGVpZ2h0OiAnMjAwJScsXHJcblx0XHRjb2xvcjogJ3JnYmEoOTksIDk5LCA5OSwgMC43NSknLFxyXG5cdFx0d2lkdGg6ICc1NTFweCcsXHJcblx0fSxcclxuXHJcblx0YnV0dG9uOiB7XHJcblx0XHRtYXJnaW5Ub3A6ICczMnB4JyxcclxuXHRcdGhlaWdodDogJzQycHgnLFxyXG5cdFx0Ym9yZGVyOiAnMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KScsXHJcblx0XHRiYWNrZ3JvdW5kOlxyXG5cdFx0XHQnbGluZWFyLWdyYWRpZW50KDI2Mi43M2RlZywgI0ExRUVGNyAtMTEuMDglLCAjRkVFMzk2IDEwNC43NyUpJyxcclxuXHRcdGJvcmRlclJhZGl1czogJzZweCcsXHJcblx0XHRib3hTaGFkb3c6ICcwcHggM3B4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDUpJyxcclxuXHRcdHRyYW5zaXRpb246ICdib3JkZXIgLjVzJyxcclxuXHRcdGZsb2F0OiAnbGVmdCcsXHJcblxyXG5cdFx0JyY6aG92ZXInOiB7XHJcblx0XHRcdGJvcmRlcjogJzJweCBzb2xpZCAjZmZmZmZmJyxcclxuXHRcdFx0Ym94U2hhZG93OiAnMHB4IDNweCA0cHggcmdiYSgwLCAwLCAwLCAwLjA1KScsXHJcblx0XHR9LFxyXG5cclxuXHRcdCcmOmRpc2FibGVkJzoge1xyXG5cdFx0XHRvcGFjaXR5OiAnMC43NScsXHJcblx0XHRcdGJhY2tncm91bmQ6XHJcblx0XHRcdFx0JyBsaW5lYXItZ3JhZGllbnQoMjYyLjczZGVnLCByZ2JhKDE2MSwgMjM4LCAyNDcsIDAuMzUpIC05LjAxJSwgcmdiYSgyNTQsIDIyNywgMTUwLCAwLjM1KSA5OC43NSUpJyxcclxuXHRcdFx0JyYgcCc6IHtcclxuXHRcdFx0XHRjb2xvcjogJ3JnYmEoOTksIDk5LCA5OSwgMC42KTsnLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHJcblx0XHQnJiBwJzoge1xyXG5cdFx0XHRmb250RmFtaWx5OiAnT3JiaXRyb24nLFxyXG5cdFx0XHRmb250U3R5bGU6ICdub3JtYWwnLFxyXG5cdFx0XHRmb250V2VpZ2h0OiAnNTAwJyxcclxuXHRcdFx0Zm9udFNpemU6ICcxMnB4JyxcclxuXHRcdFx0bGluZUhlaWdodDogJzIwMCUnLFxyXG5cdFx0XHR0ZXh0VHJhbnNmb3JtOiAnbm9uZScsXHJcblx0XHRcdGNvbG9yOiAnIzYzNjM2MycsXHJcblx0XHRcdG1hcmdpbkxlZnQ6ICcxMHB4JyxcclxuXHRcdH0sXHJcblx0fSxcclxuXHJcblx0YXJyb3dJY29uOiB7XHJcblx0XHRjb2xvcjogJyM2MzYzNjMnLFxyXG5cdFx0d2lkdGg6ICcxN3B4JyxcclxuXHRcdGhlaWdodDogJ2F1dG8nLFxyXG5cdFx0bWFyZ2luTGVmdDogJzZweCcsXHJcblx0XHRtYXJnaW5SaWdodDogJzEwcHgnLFxyXG5cdH0sXHJcblxyXG5cdC8vPDw8PDw8PDw8PDw8PDw8PDw8PDwgUmVzcG9uc2l2ZSBzY2FsZVxyXG5cdC8vMTQzOXB4XHJcblx0WydAbWVkaWEgKG1heC13aWR0aDogMTQzOXB4KSddOiB7XHJcblx0XHRtYWluRGl2OiB7XHJcblx0XHRcdHdpZHRoOiAnOTAlJyxcclxuXHRcdH0sXHJcblx0fSxcclxuXHJcblx0Ly8xMjMwcHhcclxuXHRbJ0BtZWRpYSAobWF4LXdpZHRoOiAxMjMwcHgpJ106IHtcclxuXHRcdGxlZnRTZWN0aW9uOiB7XHJcblx0XHRcdGRpc3BsYXk6ICdub25lJyxcclxuXHRcdH0sXHJcblxyXG5cdFx0cmlnaHRTZWN0aW9uOiB7XHJcblx0XHRcdHdpZHRoOiAnMTAwJScsXHJcblx0XHRcdGNsZWFyOiAnYm90aCcsXHJcblx0XHR9LFxyXG5cclxuXHRcdHRpdGxlRGl2OiB7XHJcblx0XHRcdHdpZHRoOiAnNTQ5cHgnLFxyXG5cdFx0XHRoZWlnaHQ6ICc1N3B4JyxcclxuXHRcdFx0bWFyZ2luOiAnMCBhdXRvJyxcclxuXHRcdFx0bWFyZ2luVG9wOiAnNzBweCcsXHJcblx0XHR9LFxyXG5cclxuXHRcdHJpZ2h0U2VjdGlvbkRlc2M6IHtcclxuXHRcdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdFx0dGV4dEFsaWduOiAnY2VudGVyJyxcclxuXHRcdH0sXHJcblxyXG5cdFx0YnV0dG9uOiB7XHJcblx0XHRcdHdpZHRoOiAnMTAwJScsXHJcblx0XHR9LFxyXG5cclxuXHRcdG91dFNpZGVCdXR0b246IHtcclxuXHRcdFx0d2lkdGg6ICcyMDBweCcsXHJcblx0XHRcdG1hcmdpbjogJzAgYXV0bycsXHJcblx0XHRcdG1hcmdpblRvcDogJzJweCcsXHJcblx0XHR9LFxyXG5cdH0sXHJcblxyXG5cdC8vOTEzcHhcclxuXHRbJ0BtZWRpYSAobWF4LXdpZHRoOiA5MTNweCknXToge1xyXG5cdFx0cmlnaHRTZWN0aW9uRGVzYzoge1xyXG5cdFx0XHRmb250U2l6ZTogJzEycHgnLFxyXG5cdFx0XHRsaW5lSGVpZ2h0OiAnMjAwJScsXHJcblx0XHR9LFxyXG5cdH0sXHJcblxyXG5cdC8vNjEwcHhcclxuXHRbJ0BtZWRpYSAobWF4LXdpZHRoOiA2MTBweCknXToge1xyXG5cdFx0dGl0bGVEaXY6IHtcclxuXHRcdFx0bWFyZ2luVG9wOiAnNzBweCcsXHJcblx0XHRcdHdpZHRoOiAnMTAwJScsXHJcblx0XHRcdGhlaWdodDogJ2F1dG8nLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cclxuXHQvLzU4MHB4XHJcblx0WydAbWVkaWEgKG1heC13aWR0aDogNTgwcHgpJ106IHtcclxuXHRcdHJpZ2h0U2VjdGlvbkRlc2M6IHtcclxuXHRcdFx0Zm9udFNpemU6ICcxMHB4JyxcclxuXHRcdFx0bGluZUhlaWdodDogJzIwMCUnLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cclxuXHQvLzM1MHB4XHJcblx0WydAbWVkaWEgKG1heC13aWR0aDogMzUwcHgpJ106IHtcclxuXHRcdHJpZ2h0U2VjdGlvbkRlc2M6IHtcclxuXHRcdFx0Zm9udFNpemU6ICcxMHB4JyxcclxuXHRcdFx0bGluZUhlaWdodDogJzIwMCUnLFxyXG5cdFx0fSxcclxuXHR9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZVN0eWxlcztcclxuIl0sIm5hbWVzIjpbIm1ha2VTdHlsZXMiLCJ1c2VTdHlsZXMiLCJtYWluRGl2Iiwid2lkdGgiLCJtYXJnaW4iLCJsZWZ0U2VjdGlvbiIsImhlaWdodCIsIm1hcmdpblRvcCIsImZsb2F0IiwicmlnaHRTZWN0aW9uIiwidGl0bGVEaXYiLCJyaWdodFNlY3Rpb25EZXNjIiwiZm9udEZhbWlseSIsImZvbnRTdHlsZSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJjb2xvciIsImJ1dHRvbiIsImJvcmRlciIsImJhY2tncm91bmQiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJ0cmFuc2l0aW9uIiwib3BhY2l0eSIsInRleHRUcmFuc2Zvcm0iLCJtYXJnaW5MZWZ0IiwiYXJyb3dJY29uIiwibWFyZ2luUmlnaHQiLCJkaXNwbGF5IiwiY2xlYXIiLCJ0ZXh0QWxpZ24iLCJvdXRTaWRlQnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/indexPage/aboutUs/aboutUsStyle.js\n");

/***/ })

});