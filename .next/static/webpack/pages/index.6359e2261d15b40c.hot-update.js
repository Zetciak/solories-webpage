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

/***/ "./components/indexPage/faq/faqStyle.js":
/*!**********************************************!*\
  !*** ./components/indexPage/faq/faqStyle.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(//1250px\n_defineProperty({\n    mainDiv: {\n        width: '100%',\n        marginTop: '171px',\n        float: 'left'\n    },\n    insideDiv: {\n        width: '1132px',\n        margin: '0 auto'\n    },\n    titleDiv: {\n        width: '690px',\n        height: '76px'\n    },\n    expandArrow: {\n        width: '40px',\n        height: '40px',\n        background: 'linear-gradient(223.33deg, #A1EEF7 -10.05%, #FEE396 95.51%)',\n        border: '2px solid #FFFFFF',\n        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05)',\n        borderRadius: '10000px',\n        transform: 'rotate(-90deg)',\n        transition: 'transform .5s'\n    },\n    panelDetails: {\n        background: 'radial-gradient(59.18% 59.18% at 50.73% 100.25%, rgba(222, 190, 205, 0.2) 0%, rgba(241, 226, 220, 0.2) 100%), linear-gradient(156.26deg, rgba(255, 255, 255, 0.2) -4.88%, rgba(255, 255, 255, 0) 147.21%)',\n        border: '4px solid #FFFFFF55',\n        borderRadius: '0px 0px 11.3918px 11.3918px'\n    },\n    title: {\n        fontFamily: 'Orbitron',\n        fontStyle: 'normal',\n        fontWeight: '600',\n        fontSize: '25px',\n        lineHeight: '150%',\n        marginLeft: '10px',\n        color: '#636363',\n        marginTop: '5px'\n    },\n    desc: {\n        fontFamily: 'Alef',\n        fontStyle: 'normal',\n        fontWeight: '400',\n        fontSize: '16px',\n        lineHeight: '200%',\n        marginLeft: '10px',\n        color: '#010101',\n        marginTop: '5px'\n    },\n    accordionMargin: {\n        marginTop: '71px'\n    }\n}, '@media (max-width: 1250px)', {\n    titleDiv: {\n        margin: '0 auto'\n    },\n    insideDiv: {\n        width: '90%',\n        margin: '0 auto'\n    }\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (useStyles);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2luZGV4UGFnZS9mYXEvZmFxU3R5bGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBcUQ7Ozs7Ozs7Ozs7Ozs7O0FBRXJELEdBQUssQ0FBQ0MsU0FBUyxHQUFHRCxvRUFBVSxDQThEM0IsRUFBUTs7SUE3RFJFLE9BQU8sRUFBRSxDQUFDO1FBQ1RDLEtBQUssRUFBRSxDQUFNO1FBQ2JDLFNBQVMsRUFBRSxDQUFPO1FBQ2xCQyxLQUFLLEVBQUUsQ0FBTTtJQUNkLENBQUM7SUFFREMsU0FBUyxFQUFFLENBQUM7UUFDWEgsS0FBSyxFQUFFLENBQVE7UUFDZkksTUFBTSxFQUFFLENBQVE7SUFDakIsQ0FBQztJQUVEQyxRQUFRLEVBQUUsQ0FBQztRQUNWTCxLQUFLLEVBQUUsQ0FBTztRQUNkTSxNQUFNLEVBQUUsQ0FBTTtJQUNmLENBQUM7SUFFREMsV0FBVyxFQUFFLENBQUM7UUFDYlAsS0FBSyxFQUFFLENBQU07UUFDYk0sTUFBTSxFQUFFLENBQU07UUFDZEUsVUFBVSxFQUNULENBQTZEO1FBQzlEQyxNQUFNLEVBQUUsQ0FBbUI7UUFDM0JDLFNBQVMsRUFBRSxDQUFpQztRQUM1Q0MsWUFBWSxFQUFFLENBQVM7UUFDdkJDLFNBQVMsRUFBRSxDQUFnQjtRQUMzQkMsVUFBVSxFQUFFLENBQWU7SUFDNUIsQ0FBQztJQUVEQyxZQUFZLEVBQUUsQ0FBQztRQUNkTixVQUFVLEVBQ1QsQ0FBMk07UUFDNU1DLE1BQU0sRUFBRSxDQUFxQjtRQUM3QkUsWUFBWSxFQUFFLENBQTZCO0lBQzVDLENBQUM7SUFFREksS0FBSyxFQUFFLENBQUM7UUFDUEMsVUFBVSxFQUFFLENBQVU7UUFDdEJDLFNBQVMsRUFBRSxDQUFRO1FBQ25CQyxVQUFVLEVBQUUsQ0FBSztRQUNqQkMsUUFBUSxFQUFFLENBQU07UUFDaEJDLFVBQVUsRUFBRSxDQUFNO1FBQ2xCQyxVQUFVLEVBQUUsQ0FBTTtRQUNsQkMsS0FBSyxFQUFFLENBQVM7UUFDaEJyQixTQUFTLEVBQUUsQ0FBSztJQUNqQixDQUFDO0lBRURzQixJQUFJLEVBQUUsQ0FBQztRQUNOUCxVQUFVLEVBQUUsQ0FBTTtRQUNsQkMsU0FBUyxFQUFFLENBQVE7UUFDbkJDLFVBQVUsRUFBRSxDQUFLO1FBQ2pCQyxRQUFRLEVBQUUsQ0FBTTtRQUNoQkMsVUFBVSxFQUFFLENBQU07UUFDbEJDLFVBQVUsRUFBRSxDQUFNO1FBQ2xCQyxLQUFLLEVBQUUsQ0FBUztRQUNoQnJCLFNBQVMsRUFBRSxDQUFLO0lBQ2pCLENBQUM7SUFFRHVCLGVBQWUsRUFBRSxDQUFDO1FBQ2pCdkIsU0FBUyxFQUFFLENBQU07SUFDbEIsQ0FBQztHQUdBLENBQTRCLDZCQUFHLENBQUM7SUFDaENJLFFBQVEsRUFBRSxDQUFDO1FBQ1ZELE1BQU0sRUFBRSxDQUFRO0lBQ2pCLENBQUM7SUFFREQsU0FBUyxFQUFFLENBQUM7UUFDWEgsS0FBSyxFQUFFLENBQUs7UUFDWkksTUFBTSxFQUFFLENBQVE7SUFDakIsQ0FBQztBQUNGLENBQUM7QUFHRiwrREFBZU4sU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaW5kZXhQYWdlL2ZhcS9mYXFTdHlsZS5qcz83Yjc5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcblx0bWFpbkRpdjoge1xyXG5cdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdG1hcmdpblRvcDogJzE3MXB4JyxcclxuXHRcdGZsb2F0OiAnbGVmdCcsXHJcblx0fSxcclxuXHJcblx0aW5zaWRlRGl2OiB7XHJcblx0XHR3aWR0aDogJzExMzJweCcsXHJcblx0XHRtYXJnaW46ICcwIGF1dG8nLFxyXG5cdH0sXHJcblxyXG5cdHRpdGxlRGl2OiB7XHJcblx0XHR3aWR0aDogJzY5MHB4JyxcclxuXHRcdGhlaWdodDogJzc2cHgnLFxyXG5cdH0sXHJcblxyXG5cdGV4cGFuZEFycm93OiB7XHJcblx0XHR3aWR0aDogJzQwcHgnLFxyXG5cdFx0aGVpZ2h0OiAnNDBweCcsXHJcblx0XHRiYWNrZ3JvdW5kOlxyXG5cdFx0XHQnbGluZWFyLWdyYWRpZW50KDIyMy4zM2RlZywgI0ExRUVGNyAtMTAuMDUlLCAjRkVFMzk2IDk1LjUxJSknLFxyXG5cdFx0Ym9yZGVyOiAnMnB4IHNvbGlkICNGRkZGRkYnLFxyXG5cdFx0Ym94U2hhZG93OiAnMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjA1KScsXHJcblx0XHRib3JkZXJSYWRpdXM6ICcxMDAwMHB4JyxcclxuXHRcdHRyYW5zZm9ybTogJ3JvdGF0ZSgtOTBkZWcpJyxcclxuXHRcdHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gLjVzJyxcclxuXHR9LFxyXG5cclxuXHRwYW5lbERldGFpbHM6IHtcclxuXHRcdGJhY2tncm91bmQ6XHJcblx0XHRcdCdyYWRpYWwtZ3JhZGllbnQoNTkuMTglIDU5LjE4JSBhdCA1MC43MyUgMTAwLjI1JSwgcmdiYSgyMjIsIDE5MCwgMjA1LCAwLjIpIDAlLCByZ2JhKDI0MSwgMjI2LCAyMjAsIDAuMikgMTAwJSksIGxpbmVhci1ncmFkaWVudCgxNTYuMjZkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAtNC44OCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTQ3LjIxJSknLFxyXG5cdFx0Ym9yZGVyOiAnNHB4IHNvbGlkICNGRkZGRkY1NScsXHJcblx0XHRib3JkZXJSYWRpdXM6ICcwcHggMHB4IDExLjM5MThweCAxMS4zOTE4cHgnLFxyXG5cdH0sXHJcblxyXG5cdHRpdGxlOiB7XHJcblx0XHRmb250RmFtaWx5OiAnT3JiaXRyb24nLFxyXG5cdFx0Zm9udFN0eWxlOiAnbm9ybWFsJyxcclxuXHRcdGZvbnRXZWlnaHQ6ICc2MDAnLFxyXG5cdFx0Zm9udFNpemU6ICcyNXB4JyxcclxuXHRcdGxpbmVIZWlnaHQ6ICcxNTAlJyxcclxuXHRcdG1hcmdpbkxlZnQ6ICcxMHB4JyxcclxuXHRcdGNvbG9yOiAnIzYzNjM2MycsXHJcblx0XHRtYXJnaW5Ub3A6ICc1cHgnLFxyXG5cdH0sXHJcblxyXG5cdGRlc2M6IHtcclxuXHRcdGZvbnRGYW1pbHk6ICdBbGVmJyxcclxuXHRcdGZvbnRTdHlsZTogJ25vcm1hbCcsXHJcblx0XHRmb250V2VpZ2h0OiAnNDAwJyxcclxuXHRcdGZvbnRTaXplOiAnMTZweCcsXHJcblx0XHRsaW5lSGVpZ2h0OiAnMjAwJScsXHJcblx0XHRtYXJnaW5MZWZ0OiAnMTBweCcsXHJcblx0XHRjb2xvcjogJyMwMTAxMDEnLFxyXG5cdFx0bWFyZ2luVG9wOiAnNXB4JyxcclxuXHR9LFxyXG5cclxuXHRhY2NvcmRpb25NYXJnaW46IHtcclxuXHRcdG1hcmdpblRvcDogJzcxcHgnLFxyXG5cdH0sXHJcblxyXG5cdC8vMTI1MHB4XHJcblx0WydAbWVkaWEgKG1heC13aWR0aDogMTI1MHB4KSddOiB7XHJcblx0XHR0aXRsZURpdjoge1xyXG5cdFx0XHRtYXJnaW46ICcwIGF1dG8nLFxyXG5cdFx0fSxcclxuXHJcblx0XHRpbnNpZGVEaXY6IHtcclxuXHRcdFx0d2lkdGg6ICc5MCUnLFxyXG5cdFx0XHRtYXJnaW46ICcwIGF1dG8nLFxyXG5cdFx0fSxcclxuXHR9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZVN0eWxlcztcclxuIl0sIm5hbWVzIjpbIm1ha2VTdHlsZXMiLCJ1c2VTdHlsZXMiLCJtYWluRGl2Iiwid2lkdGgiLCJtYXJnaW5Ub3AiLCJmbG9hdCIsImluc2lkZURpdiIsIm1hcmdpbiIsInRpdGxlRGl2IiwiaGVpZ2h0IiwiZXhwYW5kQXJyb3ciLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwidHJhbnNmb3JtIiwidHJhbnNpdGlvbiIsInBhbmVsRGV0YWlscyIsInRpdGxlIiwiZm9udEZhbWlseSIsImZvbnRTdHlsZSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJtYXJnaW5MZWZ0IiwiY29sb3IiLCJkZXNjIiwiYWNjb3JkaW9uTWFyZ2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/indexPage/faq/faqStyle.js\n");

/***/ })

});