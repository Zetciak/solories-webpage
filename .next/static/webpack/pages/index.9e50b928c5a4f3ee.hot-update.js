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

/***/ "./components/indexPage/roadmap/roadmapStyle.js":
/*!******************************************************!*\
  !*** ./components/indexPage/roadmap/roadmapStyle.js ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nvar _obj;\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)((_obj = {\n    mainDiv: {\n        width: '100%',\n        marginTop: '171px',\n        float: 'left'\n    },\n    insideDiv: {\n        width: '1132px',\n        margin: '0 auto'\n    },\n    titleDiv: {\n        width: '260px',\n        height: '72px'\n    },\n    mainDesc: {\n        marginTop: '21px',\n        fontFamily: 'Alef',\n        fontStyle: 'normal',\n        fontWeight: '400',\n        fontSize: '14px',\n        lineHeight: '200%',\n        color: 'rgba(99, 99, 99, 0.75)',\n        width: '425px'\n    },\n    progressDiv: {\n        marginTop: '30px'\n    },\n    lineDiv: {\n        marginLeft: '17px',\n        float: 'left',\n        width: '80%',\n        height: '5px',\n        marginTop: '18px'\n    },\n    circleDiv: {\n        width: '40px',\n        height: '40px',\n        float: 'left'\n    },\n    sliderDiv: {\n        marginTop: '68px'\n    },\n    slide1Title: {\n        width: '208px',\n        height: '51px'\n    },\n    slide2Title: {\n        width: '166px',\n        height: '51px'\n    },\n    slide3Title: {\n        width: '158px',\n        height: '51px'\n    },\n    roadmapElements: {\n        marginTop: '100px',\n        clear: 'both'\n    },\n    roadmapElementsCircle: {\n        width: '20px',\n        height: '20px',\n        float: 'left'\n    },\n    roadmapElementsText: {\n        fontFamily: 'Alef',\n        fontStyle: 'normal',\n        fontWeight: '400',\n        fontSize: '14px',\n        lineHeight: '200%',\n        color: 'rgba(99, 99, 99, 0.75)',\n        marginLeft: '13px',\n        marginTop: '-3px',\n        textAlign: 'left',\n        float: 'right',\n        width: '91%'\n    },\n    roadmapElementsOne: {\n        clear: 'both'\n    }\n}, //<<<<<<<<<<<<<<<<<<<< Responsive scale\n//1439px\n_defineProperty(_obj, '@media (max-width: 1439px)', {\n    insideDiv: {\n        width: '90%',\n        margin: '0 auto'\n    }\n}), //1020px\n_defineProperty(_obj, '@media (max-width: 1020px)', {\n    titleDiv: {\n        width: '90%',\n        height: 'auto',\n        margin: '0 auto'\n    },\n    mainDesc: {\n        marginTop: '21px',\n        width: '100%',\n        textAlign: 'center'\n    }\n}), //1020px\n_defineProperty(_obj, '@media (max-width: 1020px)', {\n    titleDiv: {\n        width: '90%',\n        height: 'auto',\n        margin: '0 auto'\n    },\n    mainDesc: {\n        marginTop: '21px',\n        width: '100%',\n        textAlign: 'center'\n    }\n}), _obj));\n/* harmony default export */ __webpack_exports__[\"default\"] = (useStyles);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2luZGV4UGFnZS9yb2FkbWFwL3JvYWRtYXBTdHlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOztBQUFxRDs7Ozs7Ozs7Ozs7Ozs7SUFFeEIsSUFvSTVCO0FBcElELEdBQUssQ0FBQ0MsU0FBUyxHQUFHRCxvRUFBVSxFQUFDLElBb0k1QjtJQW5JQUUsT0FBTyxFQUFFLENBQUM7UUFDVEMsS0FBSyxFQUFFLENBQU07UUFDYkMsU0FBUyxFQUFFLENBQU87UUFDbEJDLEtBQUssRUFBRSxDQUFNO0lBQ2QsQ0FBQztJQUVEQyxTQUFTLEVBQUUsQ0FBQztRQUNYSCxLQUFLLEVBQUUsQ0FBUTtRQUNmSSxNQUFNLEVBQUUsQ0FBUTtJQUNqQixDQUFDO0lBRURDLFFBQVEsRUFBRSxDQUFDO1FBQ1ZMLEtBQUssRUFBRSxDQUFPO1FBQ2RNLE1BQU0sRUFBRSxDQUFNO0lBQ2YsQ0FBQztJQUVEQyxRQUFRLEVBQUUsQ0FBQztRQUNWTixTQUFTLEVBQUUsQ0FBTTtRQUNqQk8sVUFBVSxFQUFFLENBQU07UUFDbEJDLFNBQVMsRUFBRSxDQUFRO1FBQ25CQyxVQUFVLEVBQUUsQ0FBSztRQUNqQkMsUUFBUSxFQUFFLENBQU07UUFDaEJDLFVBQVUsRUFBRSxDQUFNO1FBQ2xCQyxLQUFLLEVBQUUsQ0FBd0I7UUFDL0JiLEtBQUssRUFBRSxDQUFPO0lBQ2YsQ0FBQztJQUVEYyxXQUFXLEVBQUUsQ0FBQztRQUNiYixTQUFTLEVBQUUsQ0FBTTtJQUNsQixDQUFDO0lBRURjLE9BQU8sRUFBRSxDQUFDO1FBQ1RDLFVBQVUsRUFBRSxDQUFNO1FBQ2xCZCxLQUFLLEVBQUUsQ0FBTTtRQUNiRixLQUFLLEVBQUUsQ0FBSztRQUNaTSxNQUFNLEVBQUUsQ0FBSztRQUNiTCxTQUFTLEVBQUUsQ0FBTTtJQUNsQixDQUFDO0lBRURnQixTQUFTLEVBQUUsQ0FBQztRQUNYakIsS0FBSyxFQUFFLENBQU07UUFDYk0sTUFBTSxFQUFFLENBQU07UUFDZEosS0FBSyxFQUFFLENBQU07SUFDZCxDQUFDO0lBRURnQixTQUFTLEVBQUUsQ0FBQztRQUNYakIsU0FBUyxFQUFFLENBQU07SUFDbEIsQ0FBQztJQUVEa0IsV0FBVyxFQUFFLENBQUM7UUFDYm5CLEtBQUssRUFBRSxDQUFPO1FBQ2RNLE1BQU0sRUFBRSxDQUFNO0lBQ2YsQ0FBQztJQUVEYyxXQUFXLEVBQUUsQ0FBQztRQUNicEIsS0FBSyxFQUFFLENBQU87UUFDZE0sTUFBTSxFQUFFLENBQU07SUFDZixDQUFDO0lBRURlLFdBQVcsRUFBRSxDQUFDO1FBQ2JyQixLQUFLLEVBQUUsQ0FBTztRQUNkTSxNQUFNLEVBQUUsQ0FBTTtJQUNmLENBQUM7SUFFRGdCLGVBQWUsRUFBRSxDQUFDO1FBQ2pCckIsU0FBUyxFQUFFLENBQU87UUFDbEJzQixLQUFLLEVBQUUsQ0FBTTtJQUNkLENBQUM7SUFFREMscUJBQXFCLEVBQUUsQ0FBQztRQUN2QnhCLEtBQUssRUFBRSxDQUFNO1FBQ2JNLE1BQU0sRUFBRSxDQUFNO1FBQ2RKLEtBQUssRUFBRSxDQUFNO0lBQ2QsQ0FBQztJQUVEdUIsbUJBQW1CLEVBQUUsQ0FBQztRQUNyQmpCLFVBQVUsRUFBRSxDQUFNO1FBQ2xCQyxTQUFTLEVBQUUsQ0FBUTtRQUNuQkMsVUFBVSxFQUFFLENBQUs7UUFDakJDLFFBQVEsRUFBRSxDQUFNO1FBQ2hCQyxVQUFVLEVBQUUsQ0FBTTtRQUNsQkMsS0FBSyxFQUFFLENBQXdCO1FBQy9CRyxVQUFVLEVBQUUsQ0FBTTtRQUNsQmYsU0FBUyxFQUFFLENBQU07UUFDakJ5QixTQUFTLEVBQUUsQ0FBTTtRQUNqQnhCLEtBQUssRUFBRSxDQUFPO1FBQ2RGLEtBQUssRUFBRSxDQUFLO0lBQ2IsQ0FBQztJQUVEMkIsa0JBQWtCLEVBQUUsQ0FBQztRQUNwQkosS0FBSyxFQUFFLENBQU07SUFDZCxDQUFDO0dBRUQsRUFBdUM7QUFDdkMsRUFBUTtnQkEvRm9CLElBb0k1QixFQXBDQyxDQUE0Qiw2QkFBRyxDQUFDO0lBQ2hDcEIsU0FBUyxFQUFFLENBQUM7UUFDWEgsS0FBSyxFQUFFLENBQUs7UUFDWkksTUFBTSxFQUFFLENBQVE7SUFDakIsQ0FBQztBQUNGLENBQUMsR0FFRCxFQUFRO2dCQXZHb0IsSUFvSTVCLEVBNUJDLENBQTRCLDZCQUFHLENBQUM7SUFDaENDLFFBQVEsRUFBRSxDQUFDO1FBQ1ZMLEtBQUssRUFBRSxDQUFLO1FBQ1pNLE1BQU0sRUFBRSxDQUFNO1FBQ2RGLE1BQU0sRUFBRSxDQUFRO0lBQ2pCLENBQUM7SUFFREcsUUFBUSxFQUFFLENBQUM7UUFDVk4sU0FBUyxFQUFFLENBQU07UUFDakJELEtBQUssRUFBRSxDQUFNO1FBQ2IwQixTQUFTLEVBQUUsQ0FBUTtJQUNwQixDQUFDO0FBQ0YsQ0FBQyxHQUVELEVBQVE7Z0JBdEhvQixJQW9JNUIsRUFiQyxDQUE0Qiw2QkFBRyxDQUFDO0lBQ2hDckIsUUFBUSxFQUFFLENBQUM7UUFDVkwsS0FBSyxFQUFFLENBQUs7UUFDWk0sTUFBTSxFQUFFLENBQU07UUFDZEYsTUFBTSxFQUFFLENBQVE7SUFDakIsQ0FBQztJQUVERyxRQUFRLEVBQUUsQ0FBQztRQUNWTixTQUFTLEVBQUUsQ0FBTTtRQUNqQkQsS0FBSyxFQUFFLENBQU07UUFDYjBCLFNBQVMsRUFBRSxDQUFRO0lBQ3BCLENBQUM7QUFDRixDQUFDLEdBbkkyQixJQW9JNUI7QUFFRCwrREFBZTVCLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2luZGV4UGFnZS9yb2FkbWFwL3JvYWRtYXBTdHlsZS5qcz8zM2IwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcblx0bWFpbkRpdjoge1xyXG5cdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdG1hcmdpblRvcDogJzE3MXB4JyxcclxuXHRcdGZsb2F0OiAnbGVmdCcsXHJcblx0fSxcclxuXHJcblx0aW5zaWRlRGl2OiB7XHJcblx0XHR3aWR0aDogJzExMzJweCcsXHJcblx0XHRtYXJnaW46ICcwIGF1dG8nLFxyXG5cdH0sXHJcblxyXG5cdHRpdGxlRGl2OiB7XHJcblx0XHR3aWR0aDogJzI2MHB4JyxcclxuXHRcdGhlaWdodDogJzcycHgnLFxyXG5cdH0sXHJcblxyXG5cdG1haW5EZXNjOiB7XHJcblx0XHRtYXJnaW5Ub3A6ICcyMXB4JyxcclxuXHRcdGZvbnRGYW1pbHk6ICdBbGVmJyxcclxuXHRcdGZvbnRTdHlsZTogJ25vcm1hbCcsXHJcblx0XHRmb250V2VpZ2h0OiAnNDAwJyxcclxuXHRcdGZvbnRTaXplOiAnMTRweCcsXHJcblx0XHRsaW5lSGVpZ2h0OiAnMjAwJScsXHJcblx0XHRjb2xvcjogJ3JnYmEoOTksIDk5LCA5OSwgMC43NSknLFxyXG5cdFx0d2lkdGg6ICc0MjVweCcsXHJcblx0fSxcclxuXHJcblx0cHJvZ3Jlc3NEaXY6IHtcclxuXHRcdG1hcmdpblRvcDogJzMwcHgnLFxyXG5cdH0sXHJcblxyXG5cdGxpbmVEaXY6IHtcclxuXHRcdG1hcmdpbkxlZnQ6ICcxN3B4JyxcclxuXHRcdGZsb2F0OiAnbGVmdCcsXHJcblx0XHR3aWR0aDogJzgwJScsXHJcblx0XHRoZWlnaHQ6ICc1cHgnLFxyXG5cdFx0bWFyZ2luVG9wOiAnMThweCcsXHJcblx0fSxcclxuXHJcblx0Y2lyY2xlRGl2OiB7XHJcblx0XHR3aWR0aDogJzQwcHgnLFxyXG5cdFx0aGVpZ2h0OiAnNDBweCcsXHJcblx0XHRmbG9hdDogJ2xlZnQnLFxyXG5cdH0sXHJcblxyXG5cdHNsaWRlckRpdjoge1xyXG5cdFx0bWFyZ2luVG9wOiAnNjhweCcsXHJcblx0fSxcclxuXHJcblx0c2xpZGUxVGl0bGU6IHtcclxuXHRcdHdpZHRoOiAnMjA4cHgnLFxyXG5cdFx0aGVpZ2h0OiAnNTFweCcsXHJcblx0fSxcclxuXHJcblx0c2xpZGUyVGl0bGU6IHtcclxuXHRcdHdpZHRoOiAnMTY2cHgnLFxyXG5cdFx0aGVpZ2h0OiAnNTFweCcsXHJcblx0fSxcclxuXHJcblx0c2xpZGUzVGl0bGU6IHtcclxuXHRcdHdpZHRoOiAnMTU4cHgnLFxyXG5cdFx0aGVpZ2h0OiAnNTFweCcsXHJcblx0fSxcclxuXHJcblx0cm9hZG1hcEVsZW1lbnRzOiB7XHJcblx0XHRtYXJnaW5Ub3A6ICcxMDBweCcsXHJcblx0XHRjbGVhcjogJ2JvdGgnLFxyXG5cdH0sXHJcblxyXG5cdHJvYWRtYXBFbGVtZW50c0NpcmNsZToge1xyXG5cdFx0d2lkdGg6ICcyMHB4JyxcclxuXHRcdGhlaWdodDogJzIwcHgnLFxyXG5cdFx0ZmxvYXQ6ICdsZWZ0JyxcclxuXHR9LFxyXG5cclxuXHRyb2FkbWFwRWxlbWVudHNUZXh0OiB7XHJcblx0XHRmb250RmFtaWx5OiAnQWxlZicsXHJcblx0XHRmb250U3R5bGU6ICdub3JtYWwnLFxyXG5cdFx0Zm9udFdlaWdodDogJzQwMCcsXHJcblx0XHRmb250U2l6ZTogJzE0cHgnLFxyXG5cdFx0bGluZUhlaWdodDogJzIwMCUnLFxyXG5cdFx0Y29sb3I6ICdyZ2JhKDk5LCA5OSwgOTksIDAuNzUpJyxcclxuXHRcdG1hcmdpbkxlZnQ6ICcxM3B4JyxcclxuXHRcdG1hcmdpblRvcDogJy0zcHgnLFxyXG5cdFx0dGV4dEFsaWduOiAnbGVmdCcsXHJcblx0XHRmbG9hdDogJ3JpZ2h0JyxcclxuXHRcdHdpZHRoOiAnOTElJyxcclxuXHR9LFxyXG5cclxuXHRyb2FkbWFwRWxlbWVudHNPbmU6IHtcclxuXHRcdGNsZWFyOiAnYm90aCcsXHJcblx0fSxcclxuXHJcblx0Ly88PDw8PDw8PDw8PDw8PDw8PDw8PCBSZXNwb25zaXZlIHNjYWxlXHJcblx0Ly8xNDM5cHhcclxuXHRbJ0BtZWRpYSAobWF4LXdpZHRoOiAxNDM5cHgpJ106IHtcclxuXHRcdGluc2lkZURpdjoge1xyXG5cdFx0XHR3aWR0aDogJzkwJScsXHJcblx0XHRcdG1hcmdpbjogJzAgYXV0bycsXHJcblx0XHR9LFxyXG5cdH0sXHJcblxyXG5cdC8vMTAyMHB4XHJcblx0WydAbWVkaWEgKG1heC13aWR0aDogMTAyMHB4KSddOiB7XHJcblx0XHR0aXRsZURpdjoge1xyXG5cdFx0XHR3aWR0aDogJzkwJScsXHJcblx0XHRcdGhlaWdodDogJ2F1dG8nLFxyXG5cdFx0XHRtYXJnaW46ICcwIGF1dG8nLFxyXG5cdFx0fSxcclxuXHJcblx0XHRtYWluRGVzYzoge1xyXG5cdFx0XHRtYXJnaW5Ub3A6ICcyMXB4JyxcclxuXHRcdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdFx0dGV4dEFsaWduOiAnY2VudGVyJyxcclxuXHRcdH0sXHJcblx0fSxcclxuXHJcblx0Ly8xMDIwcHhcclxuXHRbJ0BtZWRpYSAobWF4LXdpZHRoOiAxMDIwcHgpJ106IHtcclxuXHRcdHRpdGxlRGl2OiB7XHJcblx0XHRcdHdpZHRoOiAnOTAlJyxcclxuXHRcdFx0aGVpZ2h0OiAnYXV0bycsXHJcblx0XHRcdG1hcmdpbjogJzAgYXV0bycsXHJcblx0XHR9LFxyXG5cclxuXHRcdG1haW5EZXNjOiB7XHJcblx0XHRcdG1hcmdpblRvcDogJzIxcHgnLFxyXG5cdFx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdFx0XHR0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG5cdFx0fSxcclxuXHR9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZVN0eWxlcztcclxuIl0sIm5hbWVzIjpbIm1ha2VTdHlsZXMiLCJ1c2VTdHlsZXMiLCJtYWluRGl2Iiwid2lkdGgiLCJtYXJnaW5Ub3AiLCJmbG9hdCIsImluc2lkZURpdiIsIm1hcmdpbiIsInRpdGxlRGl2IiwiaGVpZ2h0IiwibWFpbkRlc2MiLCJmb250RmFtaWx5IiwiZm9udFN0eWxlIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImNvbG9yIiwicHJvZ3Jlc3NEaXYiLCJsaW5lRGl2IiwibWFyZ2luTGVmdCIsImNpcmNsZURpdiIsInNsaWRlckRpdiIsInNsaWRlMVRpdGxlIiwic2xpZGUyVGl0bGUiLCJzbGlkZTNUaXRsZSIsInJvYWRtYXBFbGVtZW50cyIsImNsZWFyIiwicm9hZG1hcEVsZW1lbnRzQ2lyY2xlIiwicm9hZG1hcEVsZW1lbnRzVGV4dCIsInRleHRBbGlnbiIsInJvYWRtYXBFbGVtZW50c09uZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/indexPage/roadmap/roadmapStyle.js\n");

/***/ })

});