"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkscreenshot_to_code"] = self["webpackChunkscreenshot_to_code"] || []).push([["react-syntax-highlighter_languages_refractor_python"],{

/***/ "./node_modules/refractor/lang/python.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/python.js ***!
  \***********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = python\npython.displayName = 'python'\npython.aliases = ['py']\nfunction python(Prism) {\n  Prism.languages.python = {\n    comment: {\n      pattern: /(^|[^\\\\])#.*/,\n      lookbehind: true,\n      greedy: true\n    },\n    'string-interpolation': {\n      pattern:\n        /(?:f|fr|rf)(?:(\"\"\"|''')[\\s\\S]*?\\1|(\"|')(?:\\\\.|(?!\\2)[^\\\\\\r\\n])*\\2)/i,\n      greedy: true,\n      inside: {\n        interpolation: {\n          // \"{\" <expression> <optional \"!s\", \"!r\", or \"!a\"> <optional \":\" format specifier> \"}\"\n          pattern:\n            /((?:^|[^{])(?:\\{\\{)*)\\{(?!\\{)(?:[^{}]|\\{(?!\\{)(?:[^{}]|\\{(?!\\{)(?:[^{}])+\\})+\\})+\\}/,\n          lookbehind: true,\n          inside: {\n            'format-spec': {\n              pattern: /(:)[^:(){}]+(?=\\}$)/,\n              lookbehind: true\n            },\n            'conversion-option': {\n              pattern: /![sra](?=[:}]$)/,\n              alias: 'punctuation'\n            },\n            rest: null\n          }\n        },\n        string: /[\\s\\S]+/\n      }\n    },\n    'triple-quoted-string': {\n      pattern: /(?:[rub]|br|rb)?(\"\"\"|''')[\\s\\S]*?\\1/i,\n      greedy: true,\n      alias: 'string'\n    },\n    string: {\n      pattern: /(?:[rub]|br|rb)?(\"|')(?:\\\\.|(?!\\1)[^\\\\\\r\\n])*\\1/i,\n      greedy: true\n    },\n    function: {\n      pattern: /((?:^|\\s)def[ \\t]+)[a-zA-Z_]\\w*(?=\\s*\\()/g,\n      lookbehind: true\n    },\n    'class-name': {\n      pattern: /(\\bclass\\s+)\\w+/i,\n      lookbehind: true\n    },\n    decorator: {\n      pattern: /(^[\\t ]*)@\\w+(?:\\.\\w+)*/m,\n      lookbehind: true,\n      alias: ['annotation', 'punctuation'],\n      inside: {\n        punctuation: /\\./\n      }\n    },\n    keyword:\n      /\\b(?:_(?=\\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\\b/,\n    builtin:\n      /\\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\\b/,\n    boolean: /\\b(?:False|None|True)\\b/,\n    number:\n      /\\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\\b|(?:\\b\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\B\\.\\d+(?:_\\d+)*)(?:e[+-]?\\d+(?:_\\d+)*)?j?(?!\\w)/i,\n    operator: /[-+%=]=?|!=|:=|\\*\\*?=?|\\/\\/?=?|<[<=>]?|>[=>]?|[&|^~]/,\n    punctuation: /[{}[\\];(),.:]/\n  }\n  Prism.languages.python['string-interpolation'].inside[\n    'interpolation'\n  ].inside.rest = Prism.languages.python\n  Prism.languages.py = Prism.languages.python\n}\n\n\n//# sourceURL=webpack://screenshot-to-code/./node_modules/refractor/lang/python.js?");

/***/ })

}]);