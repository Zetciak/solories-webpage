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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nvar _obj;\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)((_obj = {\n    mainDiv: {\n        width: '1132px',\n        margin: '0 auto'\n    },\n    leftSection: {\n        width: '500px',\n        marginTop: '120px',\n        float: 'left'\n    },\n    frameImage: {\n        width: '544px',\n        height: '544px',\n        margin: '0 auto',\n        marginTop: '-450px'\n    },\n    nftImage: {\n        width: '382px',\n        height: '382px',\n        marginTop: '101px',\n        marginLeft: '78px'\n    },\n    rightSection: {\n        width: '549px',\n        float: 'right'\n    },\n    titleDiv: {\n        marginTop: '70px',\n        width: '549px',\n        height: '57px'\n    },\n    rightSectionDesc: {\n        marginTop: '27px',\n        fontFamily: 'Alef',\n        fontStyle: 'normal',\n        fontWeight: '400',\n        fontSize: '14px',\n        lineHeight: '200%',\n        color: 'rgba(99, 99, 99, 0.75)',\n        overflow: 'hidden',\n        transition: 'height 0.5s',\n        width: '551px'\n    },\n    button: {\n        marginTop: '32px',\n        height: '42px',\n        border: '2px solid rgba(255, 255, 255, 0.5)',\n        background: 'linear-gradient(262.73deg, #A1EEF7 -11.08%, #FEE396 104.77%)',\n        borderRadius: '6px',\n        boxShadow: '0px 3px 4px rgba(0, 0, 0, 0.05)',\n        transition: 'border .5s',\n        float: 'left',\n        '&:hover': {\n            border: '2px solid #ffffff',\n            boxShadow: '0px 3px 4px rgba(0, 0, 0, 0.05)'\n        },\n        '&:disabled': {\n            opacity: '0.75',\n            background: ' linear-gradient(262.73deg, rgba(161, 238, 247, 0.35) -9.01%, rgba(254, 227, 150, 0.35) 98.75%)',\n            '& p': {\n                color: 'rgba(99, 99, 99, 0.6);'\n            }\n        },\n        '& p': {\n            fontFamily: 'Orbitron',\n            fontStyle: 'normal',\n            fontWeight: '500',\n            fontSize: '12px',\n            lineHeight: '200%',\n            textTransform: 'none',\n            color: '#636363',\n            marginLeft: '10px'\n        }\n    },\n    arrowIcon: {\n        color: '#636363',\n        width: '17px',\n        height: 'auto',\n        marginLeft: '6px',\n        marginRight: '10px'\n    },\n    moreButton: {\n        marginTop: '32px',\n        width: '39px',\n        height: '39px',\n        background: 'linear-gradient(223.33deg, #A1EEF7 -10.05%, #FEE396 95.51%)',\n        border: '2px solid rgba(255, 255, 255, 0.5)',\n        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05)',\n        borderRadius: '10000px',\n        opacity: '1.0',\n        transition: 'border .5s',\n        float: 'right',\n        '&:hover': {\n            border: '2px solid #FFFFFF',\n            cursor: 'pointer'\n        }\n    },\n    moreIcon: {\n        color: 'white',\n        width: '16px',\n        height: 'auto',\n        transition: 'transform 0.5s'\n    }\n}, //<<<<<<<<<<<<<<<<<<<< Responsive scale\n//1439px\n_defineProperty(_obj, '@media (max-width: 1439px)', {\n    mainDiv: {\n        width: '90%'\n    }\n}), //1230px\n_defineProperty(_obj, '@media (max-width: 1230px)', {\n    leftSection: {\n        display: 'none'\n    },\n    rightSection: {\n        width: '100%',\n        clear: 'both'\n    },\n    titleDiv: {\n        width: '549px',\n        height: '57px',\n        margin: '0 auto',\n        marginTop: '70px'\n    },\n    rightSectionDesc: {\n        width: '100%',\n        textAlign: 'center'\n    },\n    button: {\n        width: '100%'\n    },\n    outSideButton: {\n        width: '200px',\n        margin: '0 auto',\n        marginTop: '2px'\n    }\n}), //913px\n_defineProperty(_obj, '@media (max-width: 913px)', {\n    rightSectionDesc: {\n        fontSize: '12px',\n        lineHeight: '200%'\n    }\n}), //610px\n_defineProperty(_obj, '@media (max-width: 610px)', {\n    titleDiv: {\n        marginTop: '70px',\n        width: '100%',\n        height: 'auto'\n    }\n}), //580px\n_defineProperty(_obj, '@media (max-width: 580px)', {\n    rightSectionDesc: {\n        fontSize: '10px',\n        lineHeight: '200%'\n    }\n}), //350px\n_defineProperty(_obj, '@media (max-width: 350px)', {\n    rightSectionDesc: {\n        fontSize: '9.5px',\n        lineHeight: '200%'\n    }\n}), _obj));\n/* harmony default export */ __webpack_exports__[\"default\"] = (useStyles);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2luZGV4UGFnZS9hYm91dFVzL2Fib3V0VXNTdHlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOztBQUFxRDs7Ozs7Ozs7Ozs7Ozs7SUFFeEIsSUFxTTVCO0FBck1ELEdBQUssQ0FBQ0MsU0FBUyxHQUFHRCxvRUFBVSxFQUFDLElBcU01QjtJQXBNQUUsT0FBTyxFQUFFLENBQUM7UUFDVEMsS0FBSyxFQUFFLENBQVE7UUFDZkMsTUFBTSxFQUFFLENBQVE7SUFDakIsQ0FBQztJQUVEQyxXQUFXLEVBQUUsQ0FBQztRQUNiRixLQUFLLEVBQUUsQ0FBTztRQUVkRyxTQUFTLEVBQUUsQ0FBTztRQUNsQkMsS0FBSyxFQUFFLENBQU07SUFDZCxDQUFDO0lBRURDLFVBQVUsRUFBRSxDQUFDO1FBQ1pMLEtBQUssRUFBRSxDQUFPO1FBQ2RNLE1BQU0sRUFBRSxDQUFPO1FBQ2ZMLE1BQU0sRUFBRSxDQUFRO1FBQ2hCRSxTQUFTLEVBQUUsQ0FBUTtJQUNwQixDQUFDO0lBRURJLFFBQVEsRUFBRSxDQUFDO1FBQ1ZQLEtBQUssRUFBRSxDQUFPO1FBQ2RNLE1BQU0sRUFBRSxDQUFPO1FBQ2ZILFNBQVMsRUFBRSxDQUFPO1FBQ2xCSyxVQUFVLEVBQUUsQ0FBTTtJQUNuQixDQUFDO0lBRURDLFlBQVksRUFBRSxDQUFDO1FBQ2RULEtBQUssRUFBRSxDQUFPO1FBRWRJLEtBQUssRUFBRSxDQUFPO0lBQ2YsQ0FBQztJQUVETSxRQUFRLEVBQUUsQ0FBQztRQUNWUCxTQUFTLEVBQUUsQ0FBTTtRQUNqQkgsS0FBSyxFQUFFLENBQU87UUFDZE0sTUFBTSxFQUFFLENBQU07SUFDZixDQUFDO0lBRURLLGdCQUFnQixFQUFFLENBQUM7UUFDbEJSLFNBQVMsRUFBRSxDQUFNO1FBQ2pCUyxVQUFVLEVBQUUsQ0FBTTtRQUNsQkMsU0FBUyxFQUFFLENBQVE7UUFDbkJDLFVBQVUsRUFBRSxDQUFLO1FBQ2pCQyxRQUFRLEVBQUUsQ0FBTTtRQUNoQkMsVUFBVSxFQUFFLENBQU07UUFDbEJDLEtB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RURkLE1BQU0sRUFBRSxDQUFDO1FBQ1JwQixLQUFLLEVBQUUsQ0FBTTtJQUNkLENBQUM7SUFFRG1DLGFBQWEsRUFBRSxDQUFDO1FBQ2ZuQyxLQUFLLEVBQUUsQ0FBTztRQUNkQyxNQUFNLEVBQUUsQ0FBUTtRQUNoQkUsU0FBUyxFQUFFLENBQUs7SUFDakIsQ0FBQztBQUNGLENBQUMsR0FFRCxFQUFPO2dCQXJLcUIsSUFxTTVCLEVBL0JDLENBQTJCLDRCQUFHLENBQUM7SUFDL0JRLGdCQUFnQixFQUFFLENBQUM7UUFDbEJJLFFBQVEsRUFBRSxDQUFNO1FBQ2hCQyxVQUFVLEVBQUUsQ0FBTTtJQUNuQixDQUFDO0FBQ0YsQ0FBQyxHQUVELEVBQU87Z0JBN0txQixJQXFNNUIsRUF2QkMsQ0FBMkIsNEJBQUcsQ0FBQztJQUMvQk4sUUFBUSxFQUFFLENBQUM7UUFDVlAsU0FBUyxFQUFFLENBQU07UUFDakJILEtBQUssRUFBRSxDQUFNO1FBQ2JNLE1BQU0sRUFBRSxDQUFNO0lBQ2YsQ0FBQztBQUNGLENBQUMsR0FFRCxFQUFPO2dCQXRMcUIsSUFxTTVCLEVBZEMsQ0FBMkIsNEJBQUcsQ0FBQztJQUMvQkssZ0JBQWdCLEVBQUUsQ0FBQztRQUNsQkksUUFBUSxFQUFFLENBQU07UUFDaEJDLFVBQVUsRUFBRSxDQUFNO0lBQ25CLENBQUM7QUFDRixDQUFDLEdBRUQsRUFBTztnQkE5THFCLElBcU01QixFQU5DLENBQTJCLDRCQUFHLENBQUM7SUFDL0JMLGdCQUFnQixFQUFFLENBQUM7UUFDbEJJLFFBQVEsRUFBRSxDQUFPO1FBQ2pCQyxVQUFVLEVBQUUsQ0FBTTtJQUNuQixDQUFDO0FBQ0YsQ0FBQyxHQXBNMkIsSUFxTTVCO0FBRUQsK0RBQWVsQixTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbmRleFBhZ2UvYWJvdXRVcy9hYm91dFVzU3R5bGUuanM/MGU1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG5cdG1haW5EaXY6IHtcclxuXHRcdHdpZHRoOiAnMTEzMnB4JyxcclxuXHRcdG1hcmdpbjogJzAgYXV0bycsXHJcblx0fSxcclxuXHJcblx0bGVmdFNlY3Rpb246IHtcclxuXHRcdHdpZHRoOiAnNTAwcHgnLFxyXG5cclxuXHRcdG1hcmdpblRvcDogJzEyMHB4JyxcclxuXHRcdGZsb2F0OiAnbGVmdCcsXHJcblx0fSxcclxuXHJcblx0ZnJhbWVJbWFnZToge1xyXG5cdFx0d2lkdGg6ICc1NDRweCcsXHJcblx0XHRoZWlnaHQ6ICc1NDRweCcsXHJcblx0XHRtYXJnaW46ICcwIGF1dG8nLFxyXG5cdFx0bWFyZ2luVG9wOiAnLTQ1MHB4JyxcclxuXHR9LFxyXG5cclxuXHRuZnRJbWFnZToge1xyXG5cdFx0d2lkdGg6ICczODJweCcsXHJcblx0XHRoZWlnaHQ6ICczODJweCcsXHJcblx0XHRtYXJnaW5Ub3A6ICcxMDFweCcsXHJcblx0XHRtYXJnaW5MZWZ0OiAnNzhweCcsXHJcblx0fSxcclxuXHJcblx0cmlnaHRTZWN0aW9uOiB7XHJcblx0XHR3aWR0aDogJzU0OXB4JyxcclxuXHJcblx0XHRmbG9hdDogJ3JpZ2h0JyxcclxuXHR9LFxyXG5cclxuXHR0aXRsZURpdjoge1xyXG5cdFx0bWFyZ2luVG9wOiAnNzBweCcsXHJcblx0XHR3aWR0aDogJzU0OXB4JyxcclxuXHRcdGhlaWdodDogJzU3cHgnLFxyXG5cdH0sXHJcblxyXG5cdHJpZ2h0U2VjdGlvbkRlc2M6IHtcclxuXHRcdG1hcmdpblRvcDogJzI3cHgnLFxyXG5cdFx0Zm9udEZhbWlseTogJ0FsZWYnLFxyXG5cdFx0Zm9udFN0eWxlOiAnbm9ybWFsJyxcclxuXHRcdGZvbnRXZWlnaHQ6ICc0MDAnLFxyXG5cdFx0Zm9udFNpemU6ICcxNHB4JyxcclxuXHRcdGxpbmVIZWlnaHQ6ICcyMDAlJyxcclxuXHRcdGNvbG9yOiAncmdiYSg5OSwgOTksIDk5LCAwLjc1KScsXHJcblx0XHRvdmVyZmxvdzogJ2hpZGRlbicsXHJcblx0XHR0cmFuc2l0aW9uOiAnaGVpZ2h0IDAuNXMnLFxyXG5cdFx0d2lkdGg6ICc1NTFweCcsXHJcblx0fSxcclxuXHJcblx0YnV0dG9uOiB7XHJcblx0XHRtYXJnaW5Ub3A6ICczMnB4JyxcclxuXHRcdGhlaWdodDogJzQycHgnLFxyXG5cdFx0Ym9yZGVyOiAnMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KScsXHJcblx0XHRiYWNrZ3JvdW5kOlxyXG5cdFx0XHQnbGluZWFyLWdyYWRpZW50KDI2Mi43M2RlZywgI0ExRUVGNyAtMTEuMDglLCAjRkVFMzk2IDEwNC43NyUpJyxcclxuXHRcdGJvcmRlclJhZGl1czogJzZweCcsXHJcblx0XHRib3hTaGFkb3c6ICcwcHggM3B4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDUpJyxcclxuXHRcdHRyYW5zaXRpb246ICdib3JkZXIgLjVzJyxcclxuXHRcdGZsb2F0OiAnbGVmdCcsXHJcblxyXG5cdFx0JyY6aG92ZXInOiB7XHJcblx0XHRcdGJvcmRlcjogJzJweCBzb2xpZCAjZmZmZmZmJyxcclxuXHRcdFx0Ym94U2hhZG93OiAnMHB4IDNweCA0cHggcmdiYSgwLCAwLCAwLCAwLjA1KScsXHJcblx0XHR9LFxyXG5cclxuXHRcdCcmOmRpc2FibGVkJzoge1xyXG5cdFx0XHRvcGFjaXR5OiAnMC43NScsXHJcblx0XHRcdGJhY2tncm91bmQ6XHJcblx0XHRcdFx0JyBsaW5lYXItZ3JhZGllbnQoMjYyLjczZGVnLCByZ2JhKDE2MSwgMjM4LCAyNDcsIDAuMzUpIC05LjAxJSwgcmdiYSgyNTQsIDIyNywgMTUwLCAwLjM1KSA5OC43NSUpJyxcclxuXHRcdFx0JyYgcCc6IHtcclxuXHRcdFx0XHRjb2xvcjogJ3JnYmEoOTksIDk5LCA5OSwgMC42KTsnLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHJcblx0XHQnJiBwJzoge1xyXG5cdFx0XHRmb250RmFtaWx5OiAnT3JiaXRyb24nLFxyXG5cdFx0XHRmb250U3R5bGU6ICdub3JtYWwnLFxyXG5cdFx0XHRmb250V2VpZ2h0OiAnNTAwJyxcclxuXHRcdFx0Zm9udFNpemU6ICcxMnB4JyxcclxuXHRcdFx0bGluZUhlaWdodDogJzIwMCUnLFxyXG5cdFx0XHR0ZXh0VHJhbnNmb3JtOiAnbm9uZScsXHJcblx0XHRcdGNvbG9yOiAnIzYzNjM2MycsXHJcblx0XHRcdG1hcmdpbkxlZnQ6ICcxMHB4JyxcclxuXHRcdH0sXHJcblx0fSxcclxuXHJcblx0YXJyb3dJY29uOiB7XHJcblx0XHRjb2xvcjogJyM2MzYzNjMnLFxyXG5cdFx0d2lkdGg6ICcxN3B4JyxcclxuXHRcdGhlaWdodDogJ2F1dG8nLFxyXG5cdFx0bWFyZ2luTGVmdDogJzZweCcsXHJcblx0XHRtYXJnaW5SaWdodDogJzEwcHgnLFxyXG5cdH0sXHJcblxyXG5cdG1vcmVCdXR0b246IHtcclxuXHRcdG1hcmdpblRvcDogJzMycHgnLFxyXG5cdFx0d2lkdGg6ICczOXB4JyxcclxuXHRcdGhlaWdodDogJzM5cHgnLFxyXG5cdFx0YmFja2dyb3VuZDpcclxuXHRcdFx0J2xpbmVhci1ncmFkaWVudCgyMjMuMzNkZWcsICNBMUVFRjcgLTEwLjA1JSwgI0ZFRTM5NiA5NS41MSUpJyxcclxuXHRcdGJvcmRlcjogJzJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSknLFxyXG5cdFx0Ym94U2hhZG93OiAnMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjA1KScsXHJcblx0XHRib3JkZXJSYWRpdXM6ICcxMDAwMHB4JyxcclxuXHRcdG9wYWNpdHk6ICcxLjAnLFxyXG5cclxuXHRcdHRyYW5zaXRpb246ICdib3JkZXIgLjVzJyxcclxuXHRcdGZsb2F0OiAncmlnaHQnLFxyXG5cdFx0JyY6aG92ZXInOiB7XHJcblx0XHRcdGJvcmRlcjogJzJweCBzb2xpZCAjRkZGRkZGJyxcclxuXHRcdFx0Y3Vyc29yOiAncG9pbnRlcicsXHJcblx0XHR9LFxyXG5cdH0sXHJcblxyXG5cdG1vcmVJY29uOiB7XHJcblx0XHRjb2xvcjogJ3doaXRlJyxcclxuXHRcdHdpZHRoOiAnMTZweCcsXHJcblx0XHRoZWlnaHQ6ICdhdXRvJyxcclxuXHRcdHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gMC41cycsXHJcblx0fSxcclxuXHJcblx0Ly88PDw8PDw8PDw8PDw8PDw8PDw8PCBSZXNwb25zaXZlIHNjYWxlXHJcblx0Ly8xNDM5cHhcclxuXHRbJ0BtZWRpYSAobWF4LXdpZHRoOiAxNDM5cHgpJ106IHtcclxuXHRcdG1haW5EaXY6IHtcclxuXHRcdFx0d2lkdGg6ICc5MCUnLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cclxuXHQvLzEyMzBweFxyXG5cdFsnQG1lZGlhIChtYXgtd2lkdGg6IDEyMzBweCknXToge1xyXG5cdFx0bGVmdFNlY3Rpb246IHtcclxuXHRcdFx0ZGlzcGxheTogJ25vbmUnLFxyXG5cdFx0fSxcclxuXHJcblx0XHRyaWdodFNlY3Rpb246IHtcclxuXHRcdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdFx0Y2xlYXI6ICdib3RoJyxcclxuXHRcdH0sXHJcblxyXG5cdFx0dGl0bGVEaXY6IHtcclxuXHRcdFx0d2lkdGg6ICc1NDlweCcsXHJcblx0XHRcdGhlaWdodDogJzU3cHgnLFxyXG5cdFx0XHRtYXJnaW46ICcwIGF1dG8nLFxyXG5cdFx0XHRtYXJnaW5Ub3A6ICc3MHB4JyxcclxuXHRcdH0sXHJcblxyXG5cdFx0cmlnaHRTZWN0aW9uRGVzYzoge1xyXG5cdFx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdFx0XHR0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG5cdFx0fSxcclxuXHJcblx0XHRidXR0b246IHtcclxuXHRcdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdH0sXHJcblxyXG5cdFx0b3V0U2lkZUJ1dHRvbjoge1xyXG5cdFx0XHR3aWR0aDogJzIwMHB4JyxcclxuXHRcdFx0bWFyZ2luOiAnMCBhdXRvJyxcclxuXHRcdFx0bWFyZ2luVG9wOiAnMnB4JyxcclxuXHRcdH0sXHJcblx0fSxcclxuXHJcblx0Ly85MTNweFxyXG5cdFsnQG1lZGlhIChtYXgtd2lkdGg6IDkxM3B4KSddOiB7XHJcblx0XHRyaWdodFNlY3Rpb25EZXNjOiB7XHJcblx0XHRcdGZvbnRTaXplOiAnMTJweCcsXHJcblx0XHRcdGxpbmVIZWlnaHQ6ICcyMDAlJyxcclxuXHRcdH0sXHJcblx0fSxcclxuXHJcblx0Ly82MTBweFxyXG5cdFsnQG1lZGlhIChtYXgtd2lkdGg6IDYxMHB4KSddOiB7XHJcblx0XHR0aXRsZURpdjoge1xyXG5cdFx0XHRtYXJnaW5Ub3A6ICc3MHB4JyxcclxuXHRcdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdFx0aGVpZ2h0OiAnYXV0bycsXHJcblx0XHR9LFxyXG5cdH0sXHJcblxyXG5cdC8vNTgwcHhcclxuXHRbJ0BtZWRpYSAobWF4LXdpZHRoOiA1ODBweCknXToge1xyXG5cdFx0cmlnaHRTZWN0aW9uRGVzYzoge1xyXG5cdFx0XHRmb250U2l6ZTogJzEwcHgnLFxyXG5cdFx0XHRsaW5lSGVpZ2h0OiAnMjAwJScsXHJcblx0XHR9LFxyXG5cdH0sXHJcblxyXG5cdC8vMzUwcHhcclxuXHRbJ0BtZWRpYSAobWF4LXdpZHRoOiAzNTBweCknXToge1xyXG5cdFx0cmlnaHRTZWN0aW9uRGVzYzoge1xyXG5cdFx0XHRmb250U2l6ZTogJzkuNXB4JyxcclxuXHRcdFx0bGluZUhlaWdodDogJzIwMCUnLFxyXG5cdFx0fSxcclxuXHR9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZVN0eWxlcztcclxuIl0sIm5hbWVzIjpbIm1ha2VTdHlsZXMiLCJ1c2VTdHlsZXMiLCJtYWluRGl2Iiwid2lkdGgiLCJtYXJnaW4iLCJsZWZ0U2VjdGlvbiIsIm1hcmdpblRvcCIsImZsb2F0IiwiZnJhbWVJbWFnZSIsImhlaWdodCIsIm5mdEltYWdlIiwibWFyZ2luTGVmdCIsInJpZ2h0U2VjdGlvbiIsInRpdGxlRGl2IiwicmlnaHRTZWN0aW9uRGVzYyIsImZvbnRGYW1pbHkiLCJmb250U3R5bGUiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwiY29sb3IiLCJvdmVyZmxvdyIsInRyYW5zaXRpb24iLCJidXR0b24iLCJib3JkZXIiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93Iiwib3BhY2l0eSIsInRleHRUcmFuc2Zvcm0iLCJhcnJvd0ljb24iLCJtYXJnaW5SaWdodCIsIm1vcmVCdXR0b24iLCJjdXJzb3IiLCJtb3JlSWNvbiIsImRpc3BsYXkiLCJjbGVhciIsInRleHRBbGlnbiIsIm91dFNpZGVCdXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/indexPage/aboutUs/aboutUsStyle.js\n");

/***/ })

});