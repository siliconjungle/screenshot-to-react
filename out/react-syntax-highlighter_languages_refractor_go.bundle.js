"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkscreenshot_to_code"] = self["webpackChunkscreenshot_to_code"] || []).push([["react-syntax-highlighter_languages_refractor_go"],{

/***/ "./node_modules/refractor/lang/go.js":
/*!*******************************************!*\
  !*** ./node_modules/refractor/lang/go.js ***!
  \*******************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = go\ngo.displayName = 'go'\ngo.aliases = []\nfunction go(Prism) {\n  Prism.languages.go = Prism.languages.extend('clike', {\n    string: {\n      pattern: /(^|[^\\\\])\"(?:\\\\.|[^\"\\\\\\r\\n])*\"|`[^`]*`/,\n      lookbehind: true,\n      greedy: true\n    },\n    keyword:\n      /\\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\\b/,\n    boolean: /\\b(?:_|false|iota|nil|true)\\b/,\n    number: [\n      // binary and octal integers\n      /\\b0(?:b[01_]+|o[0-7_]+)i?\\b/i, // hexadecimal integers and floats\n      /\\b0x(?:[a-f\\d_]+(?:\\.[a-f\\d_]*)?|\\.[a-f\\d_]+)(?:p[+-]?\\d+(?:_\\d+)*)?i?(?!\\w)/i, // decimal integers and floats\n      /(?:\\b\\d[\\d_]*(?:\\.[\\d_]*)?|\\B\\.\\d[\\d_]*)(?:e[+-]?[\\d_]+)?i?(?!\\w)/i\n    ],\n    operator:\n      /[*\\/%^!=]=?|\\+[=+]?|-[=-]?|\\|[=|]?|&(?:=|&|\\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\\.\\.\\./,\n    builtin:\n      /\\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\\b/\n  })\n  Prism.languages.insertBefore('go', 'string', {\n    char: {\n      pattern: /'(?:\\\\.|[^'\\\\\\r\\n]){0,10}'/,\n      greedy: true\n    }\n  })\n  delete Prism.languages.go['class-name']\n}\n\n\n//# sourceURL=webpack://screenshot-to-code/./node_modules/refractor/lang/go.js?");

/***/ })

}]);