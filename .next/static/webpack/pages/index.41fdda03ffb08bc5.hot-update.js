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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nvar _obj;\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)((_obj = {\n    mainDiv: {\n        width: '1132px',\n        margin: '0 auto'\n    },\n    leftSection: {\n        width: '500px',\n        height: '729px',\n        marginTop: '120px',\n        float: 'left'\n    },\n    rightSection: {\n        width: '549px',\n        height: '568px',\n        float: 'right'\n    },\n    titleDiv: {\n        marginTop: '70px',\n        width: '549px',\n        height: '57px'\n    },\n    rightSectionDesc: {\n        marginTop: '27px',\n        fontFamily: 'Alef',\n        fontStyle: 'normal',\n        fontWeight: '400',\n        fontSize: '14px',\n        lineHeight: '200%',\n        color: 'rgba(99, 99, 99, 0.75)',\n        width: '551px'\n    },\n    button: {\n        marginTop: '32px',\n        height: '42px',\n        border: '2px solid rgba(255, 255, 255, 0.5)',\n        background: 'linear-gradient(262.73deg, #A1EEF7 -11.08%, #FEE396 104.77%)',\n        borderRadius: '6px',\n        boxShadow: '0px 3px 4px rgba(0, 0, 0, 0.05)',\n        transition: 'border .5s',\n        float: 'left',\n        '&:hover': {\n            border: '2px solid #ffffff',\n            boxShadow: '0px 3px 4px rgba(0, 0, 0, 0.05)'\n        },\n        '&:disabled': {\n            opacity: '0.75',\n            background: ' linear-gradient(262.73deg, rgba(161, 238, 247, 0.35) -9.01%, rgba(254, 227, 150, 0.35) 98.75%)',\n            '& p': {\n                color: 'rgba(99, 99, 99, 0.6);'\n            }\n        },\n        '& p': {\n            fontFamily: 'Orbitron',\n            fontStyle: 'normal',\n            fontWeight: '500',\n            fontSize: '12px',\n            lineHeight: '200%',\n            textTransform: 'none',\n            color: '#636363',\n            marginLeft: '10px'\n        }\n    },\n    arrowIcon: {\n        color: '#636363',\n        width: '17px',\n        height: 'auto',\n        marginLeft: '6px',\n        marginRight: '10px'\n    }\n}, //<<<<<<<<<<<<<<<<<<<< Responsive scale\n//1439px\n_defineProperty(_obj, '@media (max-width: 1439px)', {\n    mainDiv: {\n        width: '90%'\n    }\n}), //1230px\n_defineProperty(_obj, '@media (max-width: 1230px)', {\n    leftSection: {\n        display: 'none'\n    },\n    rightSection: {\n        width: '549px',\n        height: '568px',\n        margin: '0 auto',\n        clear: 'both'\n    }\n}), _obj));\n/* harmony default export */ __webpack_exports__[\"default\"] = (useStyles);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2luZGV4UGFnZS9hYm91dFVzL2Fib3V0VXNTdHlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOztBQUFxRDs7Ozs7Ozs7Ozs7Ozs7SUFFeEIsSUFzRzVCO0FBdEdELEdBQUssQ0FBQ0MsU0FBUyxHQUFHRCxvRUFBVSxFQUFDLElBc0c1QjtJQXJHQUUsT0FBTyxFQUFFLENBQUM7UUFDVEMsS0FBSyxFQUFFLENBQVE7UUFDZkMsTUFBTSxFQUFFLENBQVE7SUFDakIsQ0FBQztJQUVEQyxXQUFXLEVBQUUsQ0FBQztRQUNiRixLQUFLLEVBQUUsQ0FBTztRQUNkRyxNQUFNLEVBQUUsQ0FBTztRQUNmQyxTQUFTLEVBQUUsQ0FBTztRQUNsQkMsS0FBSyxFQUFFLENBQU07SUFDZCxDQUFDO0lBRURDLFlBQVksRUFBRSxDQUFDO1FBQ2ROLEtBQUssRUFBRSxDQUFPO1FBQ2RHLE1BQU0sRUFBRSxDQUFPO1FBQ2ZFLEtBQUssRUFBRSxDQUFPO0lBQ2YsQ0FBQztJQUVERSxRQUFRLEVBQUUsQ0FBQztRQUNWSCxTQUFTLEVBQUUsQ0FBTTtRQUNqQkosS0FBSyxFQUFFLENBQU87UUFDZEcsTUFBTSxFQUFFLENBQU07SUFDZixDQUFDO0lBRURLLGdCQUFnQixFQUFFLENBQUM7UUFDbEJKLFNBQVMsRUFBRSxDQUFNO1FBQ2pCSyxVQUFVLEVBQUUsQ0FBTTtRQUNsQkMsU0FBUyxFQUFFLENBQVE7UUFDbkJDLFVBQVUsRUFBRSxDQUFLO1FBQ2pCQyxRQUFRLEVBQUUsQ0FBTTtRQUNoQkMsVUFBVSxFQUFFLENBQU07UUFDbEJDLEtBQUssRUFBRSxDQUF3QjtRQUMvQmQsS0FBSyxFQUFFLENBQU87SUFDZixDQUFDO0lBRURlLE1BQU0sRUFBRSxDQUFDO1FBQ1JYLFNBQVMsRUFBRSxDQUFNO1FBQ2pCRCxNQUFNLEVBQUUsQ0FBTTtRQUNkYSxNQUFNLEVBQUUsQ0FBb0M7UUFDNUNDLFVBQVUsRUFDVCxDQUE4RDtRQUMvREMsWUFBWSxFQUFFLENBQUs7UUFDbkJDLFNBQVMsRUFBRSxDQUFpQztRQUM1Q0MsVUFBVSxFQUFFLENBQVk7UUFDeEJmLEtBQUssRUFBRSxDQUFNO1FBRWIsQ0FBUyxVQUFFLENBQUM7WUFDWFcsTUFBTSxFQUFFLENBQW1CO1lBQzNCRyxTQUFTLEVBQUUsQ0FBaUM7UUFDN0MsQ0FBQztRQUVELENBQVksYUFBRSxDQUFDO1lBQ2RFLE9BQU8sRUFBRSxDQUFNO1lBQ2ZKLFVBQVUsRUFDVCxDQUFpRztZQUNsRyxDQUFLLE1BQUUsQ0FBQztnQkFDUEgsS0FBSyxFQUFFLENBQXdCO1lBQ2hDLENBQUM7UUFDRixDQUFDO1FBRUQsQ0FBSyxNQUFFLENBQUM7WUFDUEwsVUFBVSxFQUFFLENBQVU7WUFDdEJDLFNBQVMsRUFBRSxDQUFRO1lBQ25CQyxVQUFVLEVBQUUsQ0FBSztZQUNqQkMsUUFBUSxFQUFFLENBQU07WUFDaEJDLFVBQVUsRUFBRSxDQUFNO1lBQ2xCUyxhQUFhLEVBQUUsQ0FBTTtZQUNyQlIsS0FBSyxFQUFFLENBQVM7WUFDaEJTLFVBQVUsRUFBRSxDQUFNO1FBQ25CLENBQUM7SUFDRixDQUFDO0lBRURDLFNBQVMsRUFBRSxDQUFDO1FBQ1hWLEtBQUssRUFBRSxDQUFTO1FBQ2hCZCxLQUFLLEVBQUUsQ0FBTTtRQUNiRyxNQUFNLEVBQUUsQ0FBTTtRQUNkb0IsVUFBVSxFQUFFLENBQUs7UUFDakJFLFdBQVcsRUFBRSxDQUFNO0lBQ3BCLENBQUM7R0FFRCxFQUF1QztBQUN2QyxFQUFRO2dCQWxGb0IsSUFzRzVCLEVBbkJDLENBQTRCLDZCQUFHLENBQUM7SUFDaEMxQixPQUFPLEVBQUUsQ0FBQztRQUNUQyxLQUFLLEVBQUUsQ0FBSztJQUNiLENBQUM7QUFDRixDQUFDLEdBRUQsRUFBUTtnQkF6Rm9CLElBc0c1QixFQVpDLENBQTRCLDZCQUFHLENBQUM7SUFDaENFLFdBQVcsRUFBRSxDQUFDO1FBQ2J3QixPQUFPLEVBQUUsQ0FBTTtJQUNoQixDQUFDO0lBRURwQixZQUFZLEVBQUUsQ0FBQztRQUNkTixLQUFLLEVBQUUsQ0FBTztRQUNkRyxNQUFNLEVBQUUsQ0FBTztRQUNmRixNQUFNLEVBQUUsQ0FBUTtRQUNoQjBCLEtBQUssRUFBRSxDQUFNO0lBQ2QsQ0FBQztBQUNGLENBQUMsR0FyRzJCLElBc0c1QjtBQUVELCtEQUFlN0IsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaW5kZXhQYWdlL2Fib3V0VXMvYWJvdXRVc1N0eWxlLmpzPzBlNWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuXHRtYWluRGl2OiB7XHJcblx0XHR3aWR0aDogJzExMzJweCcsXHJcblx0XHRtYXJnaW46ICcwIGF1dG8nLFxyXG5cdH0sXHJcblxyXG5cdGxlZnRTZWN0aW9uOiB7XHJcblx0XHR3aWR0aDogJzUwMHB4JyxcclxuXHRcdGhlaWdodDogJzcyOXB4JyxcclxuXHRcdG1hcmdpblRvcDogJzEyMHB4JyxcclxuXHRcdGZsb2F0OiAnbGVmdCcsXHJcblx0fSxcclxuXHJcblx0cmlnaHRTZWN0aW9uOiB7XHJcblx0XHR3aWR0aDogJzU0OXB4JyxcclxuXHRcdGhlaWdodDogJzU2OHB4JyxcclxuXHRcdGZsb2F0OiAncmlnaHQnLFxyXG5cdH0sXHJcblxyXG5cdHRpdGxlRGl2OiB7XHJcblx0XHRtYXJnaW5Ub3A6ICc3MHB4JyxcclxuXHRcdHdpZHRoOiAnNTQ5cHgnLFxyXG5cdFx0aGVpZ2h0OiAnNTdweCcsXHJcblx0fSxcclxuXHJcblx0cmlnaHRTZWN0aW9uRGVzYzoge1xyXG5cdFx0bWFyZ2luVG9wOiAnMjdweCcsXHJcblx0XHRmb250RmFtaWx5OiAnQWxlZicsXHJcblx0XHRmb250U3R5bGU6ICdub3JtYWwnLFxyXG5cdFx0Zm9udFdlaWdodDogJzQwMCcsXHJcblx0XHRmb250U2l6ZTogJzE0cHgnLFxyXG5cdFx0bGluZUhlaWdodDogJzIwMCUnLFxyXG5cdFx0Y29sb3I6ICdyZ2JhKDk5LCA5OSwgOTksIDAuNzUpJyxcclxuXHRcdHdpZHRoOiAnNTUxcHgnLFxyXG5cdH0sXHJcblxyXG5cdGJ1dHRvbjoge1xyXG5cdFx0bWFyZ2luVG9wOiAnMzJweCcsXHJcblx0XHRoZWlnaHQ6ICc0MnB4JyxcclxuXHRcdGJvcmRlcjogJzJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSknLFxyXG5cdFx0YmFja2dyb3VuZDpcclxuXHRcdFx0J2xpbmVhci1ncmFkaWVudCgyNjIuNzNkZWcsICNBMUVFRjcgLTExLjA4JSwgI0ZFRTM5NiAxMDQuNzclKScsXHJcblx0XHRib3JkZXJSYWRpdXM6ICc2cHgnLFxyXG5cdFx0Ym94U2hhZG93OiAnMHB4IDNweCA0cHggcmdiYSgwLCAwLCAwLCAwLjA1KScsXHJcblx0XHR0cmFuc2l0aW9uOiAnYm9yZGVyIC41cycsXHJcblx0XHRmbG9hdDogJ2xlZnQnLFxyXG5cclxuXHRcdCcmOmhvdmVyJzoge1xyXG5cdFx0XHRib3JkZXI6ICcycHggc29saWQgI2ZmZmZmZicsXHJcblx0XHRcdGJveFNoYWRvdzogJzBweCAzcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wNSknLFxyXG5cdFx0fSxcclxuXHJcblx0XHQnJjpkaXNhYmxlZCc6IHtcclxuXHRcdFx0b3BhY2l0eTogJzAuNzUnLFxyXG5cdFx0XHRiYWNrZ3JvdW5kOlxyXG5cdFx0XHRcdCcgbGluZWFyLWdyYWRpZW50KDI2Mi43M2RlZywgcmdiYSgxNjEsIDIzOCwgMjQ3LCAwLjM1KSAtOS4wMSUsIHJnYmEoMjU0LCAyMjcsIDE1MCwgMC4zNSkgOTguNzUlKScsXHJcblx0XHRcdCcmIHAnOiB7XHJcblx0XHRcdFx0Y29sb3I6ICdyZ2JhKDk5LCA5OSwgOTksIDAuNik7JyxcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblxyXG5cdFx0JyYgcCc6IHtcclxuXHRcdFx0Zm9udEZhbWlseTogJ09yYml0cm9uJyxcclxuXHRcdFx0Zm9udFN0eWxlOiAnbm9ybWFsJyxcclxuXHRcdFx0Zm9udFdlaWdodDogJzUwMCcsXHJcblx0XHRcdGZvbnRTaXplOiAnMTJweCcsXHJcblx0XHRcdGxpbmVIZWlnaHQ6ICcyMDAlJyxcclxuXHRcdFx0dGV4dFRyYW5zZm9ybTogJ25vbmUnLFxyXG5cdFx0XHRjb2xvcjogJyM2MzYzNjMnLFxyXG5cdFx0XHRtYXJnaW5MZWZ0OiAnMTBweCcsXHJcblx0XHR9LFxyXG5cdH0sXHJcblxyXG5cdGFycm93SWNvbjoge1xyXG5cdFx0Y29sb3I6ICcjNjM2MzYzJyxcclxuXHRcdHdpZHRoOiAnMTdweCcsXHJcblx0XHRoZWlnaHQ6ICdhdXRvJyxcclxuXHRcdG1hcmdpbkxlZnQ6ICc2cHgnLFxyXG5cdFx0bWFyZ2luUmlnaHQ6ICcxMHB4JyxcclxuXHR9LFxyXG5cclxuXHQvLzw8PDw8PDw8PDw8PDw8PDw8PDw8IFJlc3BvbnNpdmUgc2NhbGVcclxuXHQvLzE0MzlweFxyXG5cdFsnQG1lZGlhIChtYXgtd2lkdGg6IDE0MzlweCknXToge1xyXG5cdFx0bWFpbkRpdjoge1xyXG5cdFx0XHR3aWR0aDogJzkwJScsXHJcblx0XHR9LFxyXG5cdH0sXHJcblxyXG5cdC8vMTIzMHB4XHJcblx0WydAbWVkaWEgKG1heC13aWR0aDogMTIzMHB4KSddOiB7XHJcblx0XHRsZWZ0U2VjdGlvbjoge1xyXG5cdFx0XHRkaXNwbGF5OiAnbm9uZScsXHJcblx0XHR9LFxyXG5cclxuXHRcdHJpZ2h0U2VjdGlvbjoge1xyXG5cdFx0XHR3aWR0aDogJzU0OXB4JyxcclxuXHRcdFx0aGVpZ2h0OiAnNTY4cHgnLFxyXG5cdFx0XHRtYXJnaW46ICcwIGF1dG8nLFxyXG5cdFx0XHRjbGVhcjogJ2JvdGgnLFxyXG5cdFx0fSxcclxuXHR9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZVN0eWxlcztcclxuIl0sIm5hbWVzIjpbIm1ha2VTdHlsZXMiLCJ1c2VTdHlsZXMiLCJtYWluRGl2Iiwid2lkdGgiLCJtYXJnaW4iLCJsZWZ0U2VjdGlvbiIsImhlaWdodCIsIm1hcmdpblRvcCIsImZsb2F0IiwicmlnaHRTZWN0aW9uIiwidGl0bGVEaXYiLCJyaWdodFNlY3Rpb25EZXNjIiwiZm9udEZhbWlseSIsImZvbnRTdHlsZSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJjb2xvciIsImJ1dHRvbiIsImJvcmRlciIsImJhY2tncm91bmQiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJ0cmFuc2l0aW9uIiwib3BhY2l0eSIsInRleHRUcmFuc2Zvcm0iLCJtYXJnaW5MZWZ0IiwiYXJyb3dJY29uIiwibWFyZ2luUmlnaHQiLCJkaXNwbGF5IiwiY2xlYXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/indexPage/aboutUs/aboutUsStyle.js\n");

/***/ })

});