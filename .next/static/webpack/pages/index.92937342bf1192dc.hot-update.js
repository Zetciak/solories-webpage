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

/***/ "./components/footer/footerStyle.js":
/*!******************************************!*\
  !*** ./components/footer/footerStyle.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nvar _obj;\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)((_obj = {\n    mainDiv: {\n        width: '100%',\n        marginTop: '62px',\n        float: 'left'\n    },\n    insideDiv: {\n        width: '1119px',\n        margin: '0 auto',\n        paddingBottom: '70px'\n    },\n    stripeDiv: {\n        width: '100%',\n        height: '3px',\n        background: '#FFFFFF',\n        opacity: '0.4',\n        backdropFilter: 'blur(100px)',\n        marginBottom: '50px'\n    },\n    leftTitle: {\n        float: 'left',\n        fontFamily: 'Orbitron',\n        fontStyle: 'normal',\n        fontWeight: '500',\n        fontSize: '14px',\n        lineHeight: '18px',\n        color: 'rgba(17, 0, 0, 0.75)'\n    },\n    rightElements: {\n        marginTop: '-30px',\n        float: 'right',\n        '& ul': {\n            '& li': {\n                display: 'inline-block',\n                paddingLeft: '22px'\n            },\n            '& li:nth-child(1)': {\n                paddingLeft: '0px'\n            }\n        }\n    },\n    rightElementsElement: {\n        minWidth: '38px',\n        minHeight: '38px',\n        background: 'linear-gradient(223.33deg, #A1EEF7 -10.05%, #FEE396 95.51%)',\n        opacity: '0.75',\n        border: '2px solid rgba(255, 255, 255, 0.5)',\n        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05)',\n        borderRadius: '10000px',\n        transition: 'border .5s, opacity .5s',\n        '&:hover': {\n            border: '2px solid #FFFFFF',\n            opacity: '1'\n        }\n    }\n}, //<<<<<<<<<<<<<<<<<<<< Responsive scale\n//1439px\n_defineProperty(_obj, '@media (max-width: 1439px)', {\n    insideDiv: {\n        width: '77%'\n    }\n}), //740px\n_defineProperty(_obj, '@media (max-width: 740px)', {\n    leftTitle: {\n        clear: 'both',\n        fontSize: '14px',\n        width: '100%',\n        textAlign: 'center',\n        marginTop: '-10px'\n    },\n    rightElements: {\n        clear: 'both',\n        width: '320px',\n        margin: '0 auto',\n        marginTop: '10px',\n        '& ul': {\n            '& li': {\n                display: 'inline-block',\n                paddingLeft: '22px'\n            },\n            '& li:nth-child(1)': {\n                paddingLeft: '0px'\n            }\n        }\n    }\n}), _obj));\n/* harmony default export */ __webpack_exports__[\"default\"] = (useStyles);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXJTdHlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOztBQUFxRDs7Ozs7Ozs7Ozs7Ozs7SUFFeEIsSUFpRzVCO0FBakdELEdBQUssQ0FBQ0MsU0FBUyxHQUFHRCxvRUFBVSxFQUFDLElBaUc1QjtJQWhHQUUsT0FBTyxFQUFFLENBQUM7UUFDVEMsS0FBSyxFQUFFLENBQU07UUFDYkMsU0FBUyxFQUFFLENBQU07UUFDakJDLEtBQUssRUFBRSxDQUFNO0lBQ2QsQ0FBQztJQUVEQyxTQUFTLEVBQUUsQ0FBQztRQUNYSCxLQUFLLEVBQUUsQ0FBUTtRQUNmSSxNQUFNLEVBQUUsQ0FBUTtRQUNoQkMsYUFBYSxFQUFFLENBQU07SUFDdEIsQ0FBQztJQUVEQyxTQUFTLEVBQUUsQ0FBQztRQUNYTixLQUFLLEVBQUUsQ0FBTTtRQUNiTyxNQUFNLEVBQUUsQ0FBSztRQUNiQyxVQUFVLEVBQUUsQ0FBUztRQUNyQkMsT0FBTyxFQUFFLENBQUs7UUFDZEMsY0FBYyxFQUFFLENBQWE7UUFDN0JDLFlBQVksRUFBRSxDQUFNO0lBQ3JCLENBQUM7SUFFREMsU0FBUyxFQUFFLENBQUM7UUFDWFYsS0FBSyxFQUFFLENBQU07UUFDYlcsVUFBVSxFQUFFLENBQVU7UUFDdEJDLFNBQVMsRUFBRSxDQUFRO1FBQ25CQyxVQUFVLEVBQUUsQ0FBSztRQUNqQkMsUUFBUSxFQUFFLENBQU07UUFDaEJDLFVBQVUsRUFBRSxDQUFNO1FBQ2xCQyxLQUFLLEVBQUUsQ0FBc0I7SUFDOUIsQ0FBQztJQUVEQyxhQUFhLEVBQUUsQ0FBQztRQUNmbEIsU0FBUyxFQUFFLENBQU87UUFDbEJDLEtBQUssRUFBRSxDQUFPO1FBQ2QsQ0FBTSxPQUFFLENBQUM7WUFDUixDQUFNLE9BQUUsQ0FBQztnQkFDUmtCLE9BQU8sRUFBRSxDQUFjO2dCQUN2QkMsV0FBVyxFQUFFLENBQU07WUFDcEIsQ0FBQztZQUNELENBQW1CLG9CQUFFLENBQUM7Z0JBQ3JCQSxXQUFXLEVBQUUsQ0FBSztZQUNuQixDQUFDO1FBQ0YsQ0FBQztJQUNGLENBQUM7SUFFREMsb0JBQW9CLEVBQUUsQ0FBQztRQUN0QkMsUUFBUSxFQUFFLENBQU07UUFDaEJDLFNBQVMsRUFBRSxDQUFNO1FBQ2pCaEIsVUFBVSxFQUNULENBQTZEO1FBQzlEQyxPQUFPLEVBQUUsQ0FBTTtRQUNmZ0IsTUFBTSxFQUFFLENBQW9DO1FBQzVDQyxTQUFTLEVBQUUsQ0FBaUM7UUFDNUNDLFlBQVksRUFBRSxDQUFTO1FBRXZCQyxVQUFVLEVBQUUsQ0FBeUI7UUFDckMsQ0FBUyxVQUFFLENBQUM7WUFDWEgsTUFBTSxFQUFFLENBQW1CO1lBQzNCaEIsT0FBTyxFQUFFLENBQUc7UUFDYixDQUFDO0lBQ0YsQ0FBQztHQUVELEVBQXVDO0FBQ3ZDLEVBQVE7Z0JBaEVvQixJQWlHNUIsRUFoQ0MsQ0FBNEIsNkJBQUcsQ0FBQztJQUNoQ04sU0FBUyxFQUFFLENBQUM7UUFDWEgsS0FBSyxFQUFFLENBQUs7SUFDYixDQUFDO0FBQ0YsQ0FBQyxHQUVELEVBQU87Z0JBdkVxQixJQWlHNUIsRUF6QkMsQ0FBMkIsNEJBQUcsQ0FBQztJQUMvQlksU0FBUyxFQUFFLENBQUM7UUFDWGlCLEtBQUssRUFBRSxDQUFNO1FBQ2JiLFFBQVEsRUFBRSxDQUFNO1FBQ2hCaEIsS0FBSyxFQUFFLENBQU07UUFDYjhCLFNBQVMsRUFBRSxDQUFRO1FBQ25CN0IsU0FBUyxFQUFFLENBQU87SUFDbkIsQ0FBQztJQUVEa0IsYUFBYSxFQUFFLENBQUM7UUFDZlUsS0FBSyxFQUFFLENBQU07UUFDYjdCLEtBQUssRUFBRSxDQUFPO1FBQ2RJLE1BQU0sRUFBRSxDQUFRO1FBQ2hCSCxTQUFTLEVBQUUsQ0FBTTtRQUNqQixDQUFNLE9BQUUsQ0FBQztZQUNSLENBQU0sT0FBRSxDQUFDO2dCQUNSbUIsT0FBTyxFQUFFLENBQWM7Z0JBQ3ZCQyxXQUFXLEVBQUUsQ0FBTTtZQUNwQixDQUFDO1lBQ0QsQ0FBbUIsb0JBQUUsQ0FBQztnQkFDckJBLFdBQVcsRUFBRSxDQUFLO1lBQ25CLENBQUM7UUFDRixDQUFDO0lBQ0YsQ0FBQztBQUNGLENBQUMsR0FoRzJCLElBaUc1QjtBQUVELCtEQUFldkIsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3RlclN0eWxlLmpzP2M4NWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuXHRtYWluRGl2OiB7XHJcblx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdFx0bWFyZ2luVG9wOiAnNjJweCcsXHJcblx0XHRmbG9hdDogJ2xlZnQnLFxyXG5cdH0sXHJcblxyXG5cdGluc2lkZURpdjoge1xyXG5cdFx0d2lkdGg6ICcxMTE5cHgnLFxyXG5cdFx0bWFyZ2luOiAnMCBhdXRvJyxcclxuXHRcdHBhZGRpbmdCb3R0b206ICc3MHB4JyxcclxuXHR9LFxyXG5cclxuXHRzdHJpcGVEaXY6IHtcclxuXHRcdHdpZHRoOiAnMTAwJScsXHJcblx0XHRoZWlnaHQ6ICczcHgnLFxyXG5cdFx0YmFja2dyb3VuZDogJyNGRkZGRkYnLFxyXG5cdFx0b3BhY2l0eTogJzAuNCcsXHJcblx0XHRiYWNrZHJvcEZpbHRlcjogJ2JsdXIoMTAwcHgpJyxcclxuXHRcdG1hcmdpbkJvdHRvbTogJzUwcHgnLFxyXG5cdH0sXHJcblxyXG5cdGxlZnRUaXRsZToge1xyXG5cdFx0ZmxvYXQ6ICdsZWZ0JyxcclxuXHRcdGZvbnRGYW1pbHk6ICdPcmJpdHJvbicsXHJcblx0XHRmb250U3R5bGU6ICdub3JtYWwnLFxyXG5cdFx0Zm9udFdlaWdodDogJzUwMCcsXHJcblx0XHRmb250U2l6ZTogJzE0cHgnLFxyXG5cdFx0bGluZUhlaWdodDogJzE4cHgnLFxyXG5cdFx0Y29sb3I6ICdyZ2JhKDE3LCAwLCAwLCAwLjc1KScsXHJcblx0fSxcclxuXHJcblx0cmlnaHRFbGVtZW50czoge1xyXG5cdFx0bWFyZ2luVG9wOiAnLTMwcHgnLFxyXG5cdFx0ZmxvYXQ6ICdyaWdodCcsXHJcblx0XHQnJiB1bCc6IHtcclxuXHRcdFx0JyYgbGknOiB7XHJcblx0XHRcdFx0ZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcblx0XHRcdFx0cGFkZGluZ0xlZnQ6ICcyMnB4JyxcclxuXHRcdFx0fSxcclxuXHRcdFx0JyYgbGk6bnRoLWNoaWxkKDEpJzoge1xyXG5cdFx0XHRcdHBhZGRpbmdMZWZ0OiAnMHB4JyxcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0fSxcclxuXHJcblx0cmlnaHRFbGVtZW50c0VsZW1lbnQ6IHtcclxuXHRcdG1pbldpZHRoOiAnMzhweCcsXHJcblx0XHRtaW5IZWlnaHQ6ICczOHB4JyxcclxuXHRcdGJhY2tncm91bmQ6XHJcblx0XHRcdCdsaW5lYXItZ3JhZGllbnQoMjIzLjMzZGVnLCAjQTFFRUY3IC0xMC4wNSUsICNGRUUzOTYgOTUuNTElKScsXHJcblx0XHRvcGFjaXR5OiAnMC43NScsXHJcblx0XHRib3JkZXI6ICcycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpJyxcclxuXHRcdGJveFNoYWRvdzogJzBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wNSknLFxyXG5cdFx0Ym9yZGVyUmFkaXVzOiAnMTAwMDBweCcsXHJcblxyXG5cdFx0dHJhbnNpdGlvbjogJ2JvcmRlciAuNXMsIG9wYWNpdHkgLjVzJyxcclxuXHRcdCcmOmhvdmVyJzoge1xyXG5cdFx0XHRib3JkZXI6ICcycHggc29saWQgI0ZGRkZGRicsXHJcblx0XHRcdG9wYWNpdHk6ICcxJyxcclxuXHRcdH0sXHJcblx0fSxcclxuXHJcblx0Ly88PDw8PDw8PDw8PDw8PDw8PDw8PCBSZXNwb25zaXZlIHNjYWxlXHJcblx0Ly8xNDM5cHhcclxuXHRbJ0BtZWRpYSAobWF4LXdpZHRoOiAxNDM5cHgpJ106IHtcclxuXHRcdGluc2lkZURpdjoge1xyXG5cdFx0XHR3aWR0aDogJzc3JScsXHJcblx0XHR9LFxyXG5cdH0sXHJcblxyXG5cdC8vNzQwcHhcclxuXHRbJ0BtZWRpYSAobWF4LXdpZHRoOiA3NDBweCknXToge1xyXG5cdFx0bGVmdFRpdGxlOiB7XHJcblx0XHRcdGNsZWFyOiAnYm90aCcsXHJcblx0XHRcdGZvbnRTaXplOiAnMTRweCcsXHJcblx0XHRcdHdpZHRoOiAnMTAwJScsXHJcblx0XHRcdHRleHRBbGlnbjogJ2NlbnRlcicsXHJcblx0XHRcdG1hcmdpblRvcDogJy0xMHB4JyxcclxuXHRcdH0sXHJcblxyXG5cdFx0cmlnaHRFbGVtZW50czoge1xyXG5cdFx0XHRjbGVhcjogJ2JvdGgnLFxyXG5cdFx0XHR3aWR0aDogJzMyMHB4JyxcclxuXHRcdFx0bWFyZ2luOiAnMCBhdXRvJyxcclxuXHRcdFx0bWFyZ2luVG9wOiAnMTBweCcsXHJcblx0XHRcdCcmIHVsJzoge1xyXG5cdFx0XHRcdCcmIGxpJzoge1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcblx0XHRcdFx0XHRwYWRkaW5nTGVmdDogJzIycHgnLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0JyYgbGk6bnRoLWNoaWxkKDEpJzoge1xyXG5cdFx0XHRcdFx0cGFkZGluZ0xlZnQ6ICcwcHgnLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlU3R5bGVzO1xyXG4iXSwibmFtZXMiOlsibWFrZVN0eWxlcyIsInVzZVN0eWxlcyIsIm1haW5EaXYiLCJ3aWR0aCIsIm1hcmdpblRvcCIsImZsb2F0IiwiaW5zaWRlRGl2IiwibWFyZ2luIiwicGFkZGluZ0JvdHRvbSIsInN0cmlwZURpdiIsImhlaWdodCIsImJhY2tncm91bmQiLCJvcGFjaXR5IiwiYmFja2Ryb3BGaWx0ZXIiLCJtYXJnaW5Cb3R0b20iLCJsZWZ0VGl0bGUiLCJmb250RmFtaWx5IiwiZm9udFN0eWxlIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImNvbG9yIiwicmlnaHRFbGVtZW50cyIsImRpc3BsYXkiLCJwYWRkaW5nTGVmdCIsInJpZ2h0RWxlbWVudHNFbGVtZW50IiwibWluV2lkdGgiLCJtaW5IZWlnaHQiLCJib3JkZXIiLCJib3hTaGFkb3ciLCJib3JkZXJSYWRpdXMiLCJ0cmFuc2l0aW9uIiwiY2xlYXIiLCJ0ZXh0QWxpZ24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/footer/footerStyle.js\n");

/***/ })

});