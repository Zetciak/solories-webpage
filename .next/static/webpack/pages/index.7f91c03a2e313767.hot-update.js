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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nvar _obj;\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)((_obj = {\n    mainDiv: {\n        width: '100%',\n        marginTop: '62px',\n        float: 'left'\n    },\n    insideDiv: {\n        width: '1119px',\n        margin: '0 auto',\n        paddingBottom: '70px'\n    },\n    stripeDiv: {\n        width: '100%',\n        height: '3px',\n        background: '#FFFFFF',\n        opacity: '0.4',\n        backdropFilter: 'blur(100px)',\n        marginBottom: '50px'\n    },\n    leftTitle: {\n        float: 'left',\n        fontFamily: 'Orbitron',\n        fontStyle: 'normal',\n        fontWeight: '500',\n        fontSize: '14px',\n        lineHeight: '18px',\n        color: 'rgba(17, 0, 0, 0.75)'\n    },\n    rightElements: {\n        marginTop: '-30px',\n        float: 'right',\n        '& ul': {\n            '& li': {\n                display: 'inline-block',\n                paddingLeft: '22px'\n            },\n            '& li:nth-child(1)': {\n                paddingLeft: '0px'\n            }\n        }\n    },\n    rightElementsElement: {\n        minWidth: '38px',\n        minHeight: '38px',\n        background: 'linear-gradient(223.33deg, #A1EEF7 -10.05%, #FEE396 95.51%)',\n        opacity: '0.75',\n        border: '2px solid rgba(255, 255, 255, 0.5)',\n        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05)',\n        borderRadius: '10000px',\n        transition: 'border .5s, opacity .5s',\n        '&:hover': {\n            border: '2px solid #FFFFFF',\n            opacity: '1'\n        }\n    }\n}, //<<<<<<<<<<<<<<<<<<<< Responsive scale\n//1439px\n_defineProperty(_obj, '@media (max-width: 1439px)', {\n    insideDiv: {\n        width: '77%'\n    }\n}), //740px\n_defineProperty(_obj, '@media (max-width: 740px)', {\n    leftTitle: {\n        clear: 'both',\n        fontSize: '14px',\n        width: '100%',\n        textAlign: 'center',\n        marginTop: '0px'\n    },\n    rightElements: {\n        marginTop: '10px',\n        clear: 'both',\n        '& ul': {\n            '& li': {\n                display: 'inline-block',\n                paddingLeft: '22px'\n            },\n            '& li:nth-child(1)': {\n                paddingLeft: '0px'\n            }\n        }\n    }\n}), _obj));\n/* harmony default export */ __webpack_exports__[\"default\"] = (useStyles);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXJTdHlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOztBQUFxRDs7Ozs7Ozs7Ozs7Ozs7SUFFeEIsSUErRjVCO0FBL0ZELEdBQUssQ0FBQ0MsU0FBUyxHQUFHRCxvRUFBVSxFQUFDLElBK0Y1QjtJQTlGQUUsT0FBTyxFQUFFLENBQUM7UUFDVEMsS0FBSyxFQUFFLENBQU07UUFDYkMsU0FBUyxFQUFFLENBQU07UUFDakJDLEtBQUssRUFBRSxDQUFNO0lBQ2QsQ0FBQztJQUVEQyxTQUFTLEVBQUUsQ0FBQztRQUNYSCxLQUFLLEVBQUUsQ0FBUTtRQUNmSSxNQUFNLEVBQUUsQ0FBUTtRQUNoQkMsYUFBYSxFQUFFLENBQU07SUFDdEIsQ0FBQztJQUVEQyxTQUFTLEVBQUUsQ0FBQztRQUNYTixLQUFLLEVBQUUsQ0FBTTtRQUNiTyxNQUFNLEVBQUUsQ0FBSztRQUNiQyxVQUFVLEVBQUUsQ0FBUztRQUNyQkMsT0FBTyxFQUFFLENBQUs7UUFDZEMsY0FBYyxFQUFFLENBQWE7UUFDN0JDLFlBQVksRUFBRSxDQUFNO0lBQ3JCLENBQUM7SUFFREMsU0FBUyxFQUFFLENBQUM7UUFDWFYsS0FBSyxFQUFFLENBQU07UUFDYlcsVUFBVSxFQUFFLENBQVU7UUFDdEJDLFNBQVMsRUFBRSxDQUFRO1FBQ25CQyxVQUFVLEVBQUUsQ0FBSztRQUNqQkMsUUFBUSxFQUFFLENBQU07UUFDaEJDLFVBQVUsRUFBRSxDQUFNO1FBQ2xCQyxLQUFLLEVBQUUsQ0FBc0I7SUFDOUIsQ0FBQztJQUVEQyxhQUFhLEVBQUUsQ0FBQztRQUNmbEIsU0FBUyxFQUFFLENBQU87UUFDbEJDLEtBQUssRUFBRSxDQUFPO1FBQ2QsQ0FBTSxPQUFFLENBQUM7WUFDUixDQUFNLE9BQUUsQ0FBQztnQkFDUmtCLE9BQU8sRUFBRSxDQUFjO2dCQUN2QkMsV0FBVyxFQUFFLENBQU07WUFDcEIsQ0FBQztZQUNELENBQW1CLG9CQUFFLENBQUM7Z0JBQ3JCQSxXQUFXLEVBQUUsQ0FBSztZQUNuQixDQUFDO1FBQ0YsQ0FBQztJQUNGLENBQUM7SUFFREMsb0JBQW9CLEVBQUUsQ0FBQztRQUN0QkMsUUFBUSxFQUFFLENBQU07UUFDaEJDLFNBQVMsRUFBRSxDQUFNO1FBQ2pCaEIsVUFBVSxFQUNULENBQTZEO1FBQzlEQyxPQUFPLEVBQUUsQ0FBTTtRQUNmZ0IsTUFBTSxFQUFFLENBQW9DO1FBQzVDQyxTQUFTLEVBQUUsQ0FBaUM7UUFDNUNDLFlBQVksRUFBRSxDQUFTO1FBRXZCQyxVQUFVLEVBQUUsQ0FBeUI7UUFDckMsQ0FBUyxVQUFFLENBQUM7WUFDWEgsTUFBTSxFQUFFLENBQW1CO1lBQzNCaEIsT0FBTyxFQUFFLENBQUc7UUFDYixDQUFDO0lBQ0YsQ0FBQztHQUVELEVBQXVDO0FBQ3ZDLEVBQVE7Z0JBaEVvQixJQStGNUIsRUE5QkMsQ0FBNEIsNkJBQUcsQ0FBQztJQUNoQ04sU0FBUyxFQUFFLENBQUM7UUFDWEgsS0FBSyxFQUFFLENBQUs7SUFDYixDQUFDO0FBQ0YsQ0FBQyxHQUVELEVBQU87Z0JBdkVxQixJQStGNUIsRUF2QkMsQ0FBMkIsNEJBQUcsQ0FBQztJQUMvQlksU0FBUyxFQUFFLENBQUM7UUFDWGlCLEtBQUssRUFBRSxDQUFNO1FBQ2JiLFFBQVEsRUFBRSxDQUFNO1FBQ2hCaEIsS0FBSyxFQUFFLENBQU07UUFDYjhCLFNBQVMsRUFBRSxDQUFRO1FBQ25CN0IsU0FBUyxFQUFFLENBQUs7SUFDakIsQ0FBQztJQUVEa0IsYUFBYSxFQUFFLENBQUM7UUFDZmxCLFNBQVMsRUFBRSxDQUFNO1FBQ2pCNEIsS0FBSyxFQUFFLENBQU07UUFDYixDQUFNLE9BQUUsQ0FBQztZQUNSLENBQU0sT0FBRSxDQUFDO2dCQUNSVCxPQUFPLEVBQUUsQ0FBYztnQkFDdkJDLFdBQVcsRUFBRSxDQUFNO1lBQ3BCLENBQUM7WUFDRCxDQUFtQixvQkFBRSxDQUFDO2dCQUNyQkEsV0FBVyxFQUFFLENBQUs7WUFDbkIsQ0FBQztRQUNGLENBQUM7SUFDRixDQUFDO0FBQ0YsQ0FBQyxHQTlGMkIsSUErRjVCO0FBRUQsK0RBQWV2QixTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb290ZXIvZm9vdGVyU3R5bGUuanM/Yzg1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG5cdG1haW5EaXY6IHtcclxuXHRcdHdpZHRoOiAnMTAwJScsXHJcblx0XHRtYXJnaW5Ub3A6ICc2MnB4JyxcclxuXHRcdGZsb2F0OiAnbGVmdCcsXHJcblx0fSxcclxuXHJcblx0aW5zaWRlRGl2OiB7XHJcblx0XHR3aWR0aDogJzExMTlweCcsXHJcblx0XHRtYXJnaW46ICcwIGF1dG8nLFxyXG5cdFx0cGFkZGluZ0JvdHRvbTogJzcwcHgnLFxyXG5cdH0sXHJcblxyXG5cdHN0cmlwZURpdjoge1xyXG5cdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdGhlaWdodDogJzNweCcsXHJcblx0XHRiYWNrZ3JvdW5kOiAnI0ZGRkZGRicsXHJcblx0XHRvcGFjaXR5OiAnMC40JyxcclxuXHRcdGJhY2tkcm9wRmlsdGVyOiAnYmx1cigxMDBweCknLFxyXG5cdFx0bWFyZ2luQm90dG9tOiAnNTBweCcsXHJcblx0fSxcclxuXHJcblx0bGVmdFRpdGxlOiB7XHJcblx0XHRmbG9hdDogJ2xlZnQnLFxyXG5cdFx0Zm9udEZhbWlseTogJ09yYml0cm9uJyxcclxuXHRcdGZvbnRTdHlsZTogJ25vcm1hbCcsXHJcblx0XHRmb250V2VpZ2h0OiAnNTAwJyxcclxuXHRcdGZvbnRTaXplOiAnMTRweCcsXHJcblx0XHRsaW5lSGVpZ2h0OiAnMThweCcsXHJcblx0XHRjb2xvcjogJ3JnYmEoMTcsIDAsIDAsIDAuNzUpJyxcclxuXHR9LFxyXG5cclxuXHRyaWdodEVsZW1lbnRzOiB7XHJcblx0XHRtYXJnaW5Ub3A6ICctMzBweCcsXHJcblx0XHRmbG9hdDogJ3JpZ2h0JyxcclxuXHRcdCcmIHVsJzoge1xyXG5cdFx0XHQnJiBsaSc6IHtcclxuXHRcdFx0XHRkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuXHRcdFx0XHRwYWRkaW5nTGVmdDogJzIycHgnLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQnJiBsaTpudGgtY2hpbGQoMSknOiB7XHJcblx0XHRcdFx0cGFkZGluZ0xlZnQ6ICcwcHgnLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cclxuXHRyaWdodEVsZW1lbnRzRWxlbWVudDoge1xyXG5cdFx0bWluV2lkdGg6ICczOHB4JyxcclxuXHRcdG1pbkhlaWdodDogJzM4cHgnLFxyXG5cdFx0YmFja2dyb3VuZDpcclxuXHRcdFx0J2xpbmVhci1ncmFkaWVudCgyMjMuMzNkZWcsICNBMUVFRjcgLTEwLjA1JSwgI0ZFRTM5NiA5NS41MSUpJyxcclxuXHRcdG9wYWNpdHk6ICcwLjc1JyxcclxuXHRcdGJvcmRlcjogJzJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSknLFxyXG5cdFx0Ym94U2hhZG93OiAnMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjA1KScsXHJcblx0XHRib3JkZXJSYWRpdXM6ICcxMDAwMHB4JyxcclxuXHJcblx0XHR0cmFuc2l0aW9uOiAnYm9yZGVyIC41cywgb3BhY2l0eSAuNXMnLFxyXG5cdFx0JyY6aG92ZXInOiB7XHJcblx0XHRcdGJvcmRlcjogJzJweCBzb2xpZCAjRkZGRkZGJyxcclxuXHRcdFx0b3BhY2l0eTogJzEnLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cclxuXHQvLzw8PDw8PDw8PDw8PDw8PDw8PDw8IFJlc3BvbnNpdmUgc2NhbGVcclxuXHQvLzE0MzlweFxyXG5cdFsnQG1lZGlhIChtYXgtd2lkdGg6IDE0MzlweCknXToge1xyXG5cdFx0aW5zaWRlRGl2OiB7XHJcblx0XHRcdHdpZHRoOiAnNzclJyxcclxuXHRcdH0sXHJcblx0fSxcclxuXHJcblx0Ly83NDBweFxyXG5cdFsnQG1lZGlhIChtYXgtd2lkdGg6IDc0MHB4KSddOiB7XHJcblx0XHRsZWZ0VGl0bGU6IHtcclxuXHRcdFx0Y2xlYXI6ICdib3RoJyxcclxuXHRcdFx0Zm9udFNpemU6ICcxNHB4JyxcclxuXHRcdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdFx0dGV4dEFsaWduOiAnY2VudGVyJyxcclxuXHRcdFx0bWFyZ2luVG9wOiAnMHB4JyxcclxuXHRcdH0sXHJcblxyXG5cdFx0cmlnaHRFbGVtZW50czoge1xyXG5cdFx0XHRtYXJnaW5Ub3A6ICcxMHB4JyxcclxuXHRcdFx0Y2xlYXI6ICdib3RoJyxcclxuXHRcdFx0JyYgdWwnOiB7XHJcblx0XHRcdFx0JyYgbGknOiB7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuXHRcdFx0XHRcdHBhZGRpbmdMZWZ0OiAnMjJweCcsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQnJiBsaTpudGgtY2hpbGQoMSknOiB7XHJcblx0XHRcdFx0XHRwYWRkaW5nTGVmdDogJzBweCcsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0fSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VTdHlsZXM7XHJcbiJdLCJuYW1lcyI6WyJtYWtlU3R5bGVzIiwidXNlU3R5bGVzIiwibWFpbkRpdiIsIndpZHRoIiwibWFyZ2luVG9wIiwiZmxvYXQiLCJpbnNpZGVEaXYiLCJtYXJnaW4iLCJwYWRkaW5nQm90dG9tIiwic3RyaXBlRGl2IiwiaGVpZ2h0IiwiYmFja2dyb3VuZCIsIm9wYWNpdHkiLCJiYWNrZHJvcEZpbHRlciIsIm1hcmdpbkJvdHRvbSIsImxlZnRUaXRsZSIsImZvbnRGYW1pbHkiLCJmb250U3R5bGUiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwiY29sb3IiLCJyaWdodEVsZW1lbnRzIiwiZGlzcGxheSIsInBhZGRpbmdMZWZ0IiwicmlnaHRFbGVtZW50c0VsZW1lbnQiLCJtaW5XaWR0aCIsIm1pbkhlaWdodCIsImJvcmRlciIsImJveFNoYWRvdyIsImJvcmRlclJhZGl1cyIsInRyYW5zaXRpb24iLCJjbGVhciIsInRleHRBbGlnbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/footer/footerStyle.js\n");

/***/ })

});