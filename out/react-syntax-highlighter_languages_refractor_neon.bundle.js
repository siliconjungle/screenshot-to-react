"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkscreenshot_to_code"] = self["webpackChunkscreenshot_to_code"] || []).push([["react-syntax-highlighter_languages_refractor_neon"],{

/***/ "./node_modules/refractor/lang/neon.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/neon.js ***!
  \*********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = neon\nneon.displayName = 'neon'\nneon.aliases = []\nfunction neon(Prism) {\n  Prism.languages.neon = {\n    comment: {\n      pattern: /#.*/,\n      greedy: true\n    },\n    datetime: {\n      pattern:\n        /(^|[[{(=:,\\s])\\d\\d\\d\\d-\\d\\d?-\\d\\d?(?:(?:[Tt]| +)\\d\\d?:\\d\\d:\\d\\d(?:\\.\\d*)? *(?:Z|[-+]\\d\\d?(?::?\\d\\d)?)?)?(?=$|[\\]}),\\s])/,\n      lookbehind: true,\n      alias: 'number'\n    },\n    key: {\n      pattern: /(^|[[{(,\\s])[^,:=[\\]{}()'\"\\s]+(?=\\s*:(?:$|[\\]}),\\s])|\\s*=)/,\n      lookbehind: true,\n      alias: 'atrule'\n    },\n    number: {\n      pattern:\n        /(^|[[{(=:,\\s])[+-]?(?:0x[\\da-fA-F]+|0o[0-7]+|0b[01]+|(?:\\d+(?:\\.\\d*)?|\\.?\\d+)(?:[eE][+-]?\\d+)?)(?=$|[\\]}),:=\\s])/,\n      lookbehind: true\n    },\n    boolean: {\n      pattern: /(^|[[{(=:,\\s])(?:false|no|true|yes)(?=$|[\\]}),:=\\s])/i,\n      lookbehind: true\n    },\n    null: {\n      pattern: /(^|[[{(=:,\\s])(?:null)(?=$|[\\]}),:=\\s])/i,\n      lookbehind: true,\n      alias: 'keyword'\n    },\n    string: {\n      pattern:\n        /(^|[[{(=:,\\s])(?:('''|\"\"\")\\r?\\n(?:(?:[^\\r\\n]|\\r?\\n(?![\\t ]*\\2))*\\r?\\n)?[\\t ]*\\2|'[^'\\r\\n]*'|\"(?:\\\\.|[^\\\\\"\\r\\n])*\")/,\n      lookbehind: true,\n      greedy: true\n    },\n    literal: {\n      pattern:\n        /(^|[[{(=:,\\s])(?:[^#\"',:=[\\]{}()\\s`-]|[:-][^\"',=[\\]{}()\\s])(?:[^,:=\\]})(\\s]|:(?![\\s,\\]})]|$)|[ \\t]+[^#,:=\\]})(\\s])*/,\n      lookbehind: true,\n      alias: 'string'\n    },\n    punctuation: /[,:=[\\]{}()-]/\n  }\n}\n\n\n//# sourceURL=webpack://screenshot-to-code/./node_modules/refractor/lang/neon.js?");

/***/ })

}]);