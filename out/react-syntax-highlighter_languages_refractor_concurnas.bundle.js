"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkscreenshot_to_code"] = self["webpackChunkscreenshot_to_code"] || []).push([["react-syntax-highlighter_languages_refractor_concurnas"],{

/***/ "./node_modules/refractor/lang/concurnas.js":
/*!**************************************************!*\
  !*** ./node_modules/refractor/lang/concurnas.js ***!
  \**************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = concurnas\nconcurnas.displayName = 'concurnas'\nconcurnas.aliases = ['conc']\nfunction concurnas(Prism) {\n  Prism.languages.concurnas = {\n    comment: {\n      pattern: /(^|[^\\\\])(?:\\/\\*[\\s\\S]*?(?:\\*\\/|$)|\\/\\/.*)/,\n      lookbehind: true,\n      greedy: true\n    },\n    langext: {\n      pattern: /\\b\\w+\\s*\\|\\|[\\s\\S]+?\\|\\|/,\n      greedy: true,\n      inside: {\n        'class-name': /^\\w+/,\n        string: {\n          pattern: /(^\\s*\\|\\|)[\\s\\S]+(?=\\|\\|$)/,\n          lookbehind: true\n        },\n        punctuation: /\\|\\|/\n      }\n    },\n    function: {\n      pattern: /((?:^|\\s)def[ \\t]+)[a-zA-Z_]\\w*(?=\\s*\\()/,\n      lookbehind: true\n    },\n    keyword:\n      /\\b(?:abstract|actor|also|annotation|assert|async|await|bool|boolean|break|byte|case|catch|changed|char|class|closed|constant|continue|def|default|del|double|elif|else|enum|every|extends|false|finally|float|for|from|global|gpudef|gpukernel|if|import|in|init|inject|int|lambda|local|long|loop|match|new|nodefault|null|of|onchange|open|out|override|package|parfor|parforsync|post|pre|private|protected|provide|provider|public|return|shared|short|single|size_t|sizeof|super|sync|this|throw|trait|trans|transient|true|try|typedef|unchecked|using|val|var|void|while|with)\\b/,\n    boolean: /\\b(?:false|true)\\b/,\n    number:\n      /\\b0b[01][01_]*L?\\b|\\b0x(?:[\\da-f_]*\\.)?[\\da-f_p+-]+\\b|(?:\\b\\d[\\d_]*(?:\\.[\\d_]*)?|\\B\\.\\d[\\d_]*)(?:e[+-]?\\d[\\d_]*)?[dfls]?/i,\n    punctuation: /[{}[\\];(),.:]/,\n    operator:\n      /<==|>==|=>|->|<-|<>|&==|&<>|\\?:?|\\.\\?|\\+\\+|--|[-+*/=<>]=?|[!^~]|\\b(?:and|as|band|bor|bxor|comp|is|isnot|mod|or)\\b=?/,\n    annotation: {\n      pattern: /@(?:\\w+:)?(?:\\w+|\\[[^\\]]+\\])?/,\n      alias: 'builtin'\n    }\n  }\n  Prism.languages.insertBefore('concurnas', 'langext', {\n    'regex-literal': {\n      pattern: /\\br(\"|')(?:\\\\.|(?!\\1)[^\\\\\\r\\n])*\\1/,\n      greedy: true,\n      inside: {\n        interpolation: {\n          pattern:\n            /((?:^|[^\\\\])(?:\\\\{2})*)\\{(?:[^{}]|\\{(?:[^{}]|\\{[^}]*\\})*\\})+\\}/,\n          lookbehind: true,\n          inside: Prism.languages.concurnas\n        },\n        regex: /[\\s\\S]+/\n      }\n    },\n    'string-literal': {\n      pattern: /(?:\\B|\\bs)(\"|')(?:\\\\.|(?!\\1)[^\\\\\\r\\n])*\\1/,\n      greedy: true,\n      inside: {\n        interpolation: {\n          pattern:\n            /((?:^|[^\\\\])(?:\\\\{2})*)\\{(?:[^{}]|\\{(?:[^{}]|\\{[^}]*\\})*\\})+\\}/,\n          lookbehind: true,\n          inside: Prism.languages.concurnas\n        },\n        string: /[\\s\\S]+/\n      }\n    }\n  })\n  Prism.languages.conc = Prism.languages.concurnas\n}\n\n\n//# sourceURL=webpack://screenshot-to-code/./node_modules/refractor/lang/concurnas.js?");

/***/ })

}]);