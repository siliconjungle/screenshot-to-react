"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkscreenshot_to_code"] = self["webpackChunkscreenshot_to_code"] || []).push([["react-syntax-highlighter_languages_refractor_nevod"],{

/***/ "./node_modules/refractor/lang/nevod.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/nevod.js ***!
  \**********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = nevod\nnevod.displayName = 'nevod'\nnevod.aliases = []\nfunction nevod(Prism) {\n  Prism.languages.nevod = {\n    comment: /\\/\\/.*|(?:\\/\\*[\\s\\S]*?(?:\\*\\/|$))/,\n    string: {\n      pattern: /(?:\"(?:\"\"|[^\"])*\"(?!\")|'(?:''|[^'])*'(?!'))!?\\*?/,\n      greedy: true,\n      inside: {\n        'string-attrs': /!$|!\\*$|\\*$/\n      }\n    },\n    namespace: {\n      pattern: /(@namespace\\s+)[a-zA-Z0-9\\-.]+(?=\\s*\\{)/,\n      lookbehind: true\n    },\n    pattern: {\n      pattern:\n        /(@pattern\\s+)?#?[a-zA-Z0-9\\-.]+(?:\\s*\\(\\s*(?:~\\s*)?[a-zA-Z0-9\\-.]+\\s*(?:,\\s*(?:~\\s*)?[a-zA-Z0-9\\-.]*)*\\))?(?=\\s*=)/,\n      lookbehind: true,\n      inside: {\n        'pattern-name': {\n          pattern: /^#?[a-zA-Z0-9\\-.]+/,\n          alias: 'class-name'\n        },\n        fields: {\n          pattern: /\\(.*\\)/,\n          inside: {\n            'field-name': {\n              pattern: /[a-zA-Z0-9\\-.]+/,\n              alias: 'variable'\n            },\n            punctuation: /[,()]/,\n            operator: {\n              pattern: /~/,\n              alias: 'field-hidden-mark'\n            }\n          }\n        }\n      }\n    },\n    search: {\n      pattern: /(@search\\s+|#)[a-zA-Z0-9\\-.]+(?:\\.\\*)?(?=\\s*;)/,\n      alias: 'function',\n      lookbehind: true\n    },\n    keyword:\n      /@(?:having|inside|namespace|outside|pattern|require|search|where)\\b/,\n    'standard-pattern': {\n      pattern:\n        /\\b(?:Alpha|AlphaNum|Any|Blank|End|LineBreak|Num|NumAlpha|Punct|Space|Start|Symbol|Word|WordBreak)\\b(?:\\([a-zA-Z0-9\\-.,\\s+]*\\))?/,\n      inside: {\n        'standard-pattern-name': {\n          pattern: /^[a-zA-Z0-9\\-.]+/,\n          alias: 'builtin'\n        },\n        quantifier: {\n          pattern: /\\b\\d+(?:\\s*\\+|\\s*-\\s*\\d+)?(?!\\w)/,\n          alias: 'number'\n        },\n        'standard-pattern-attr': {\n          pattern: /[a-zA-Z0-9\\-.]+/,\n          alias: 'builtin'\n        },\n        punctuation: /[,()]/\n      }\n    },\n    quantifier: {\n      pattern: /\\b\\d+(?:\\s*\\+|\\s*-\\s*\\d+)?(?!\\w)/,\n      alias: 'number'\n    },\n    operator: [\n      {\n        pattern: /=/,\n        alias: 'pattern-def'\n      },\n      {\n        pattern: /&/,\n        alias: 'conjunction'\n      },\n      {\n        pattern: /~/,\n        alias: 'exception'\n      },\n      {\n        pattern: /\\?/,\n        alias: 'optionality'\n      },\n      {\n        pattern: /[[\\]]/,\n        alias: 'repetition'\n      },\n      {\n        pattern: /[{}]/,\n        alias: 'variation'\n      },\n      {\n        pattern: /[+_]/,\n        alias: 'sequence'\n      },\n      {\n        pattern: /\\.{2,3}/,\n        alias: 'span'\n      }\n    ],\n    'field-capture': [\n      {\n        pattern:\n          /([a-zA-Z0-9\\-.]+\\s*\\()\\s*[a-zA-Z0-9\\-.]+\\s*:\\s*[a-zA-Z0-9\\-.]+(?:\\s*,\\s*[a-zA-Z0-9\\-.]+\\s*:\\s*[a-zA-Z0-9\\-.]+)*(?=\\s*\\))/,\n        lookbehind: true,\n        inside: {\n          'field-name': {\n            pattern: /[a-zA-Z0-9\\-.]+/,\n            alias: 'variable'\n          },\n          colon: /:/\n        }\n      },\n      {\n        pattern: /[a-zA-Z0-9\\-.]+\\s*:/,\n        inside: {\n          'field-name': {\n            pattern: /[a-zA-Z0-9\\-.]+/,\n            alias: 'variable'\n          },\n          colon: /:/\n        }\n      }\n    ],\n    punctuation: /[:;,()]/,\n    name: /[a-zA-Z0-9\\-.]+/\n  }\n}\n\n\n//# sourceURL=webpack://screenshot-to-code/./node_modules/refractor/lang/nevod.js?");

/***/ })

}]);