"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkscreenshot_to_code"] = self["webpackChunkscreenshot_to_code"] || []).push([["react-syntax-highlighter_languages_refractor_bbcode"],{

/***/ "./node_modules/refractor/lang/bbcode.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/bbcode.js ***!
  \***********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = bbcode\nbbcode.displayName = 'bbcode'\nbbcode.aliases = ['shortcode']\nfunction bbcode(Prism) {\n  Prism.languages.bbcode = {\n    tag: {\n      pattern:\n        /\\[\\/?[^\\s=\\]]+(?:\\s*=\\s*(?:\"[^\"]*\"|'[^']*'|[^\\s'\"\\]=]+))?(?:\\s+[^\\s=\\]]+\\s*=\\s*(?:\"[^\"]*\"|'[^']*'|[^\\s'\"\\]=]+))*\\s*\\]/,\n      inside: {\n        tag: {\n          pattern: /^\\[\\/?[^\\s=\\]]+/,\n          inside: {\n            punctuation: /^\\[\\/?/\n          }\n        },\n        'attr-value': {\n          pattern: /=\\s*(?:\"[^\"]*\"|'[^']*'|[^\\s'\"\\]=]+)/,\n          inside: {\n            punctuation: [\n              /^=/,\n              {\n                pattern: /^(\\s*)[\"']|[\"']$/,\n                lookbehind: true\n              }\n            ]\n          }\n        },\n        punctuation: /\\]/,\n        'attr-name': /[^\\s=\\]]+/\n      }\n    }\n  }\n  Prism.languages.shortcode = Prism.languages.bbcode\n}\n\n\n//# sourceURL=webpack://screenshot-to-code/./node_modules/refractor/lang/bbcode.js?");

/***/ })

}]);