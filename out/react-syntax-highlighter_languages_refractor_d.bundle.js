"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkscreenshot_to_code"] = self["webpackChunkscreenshot_to_code"] || []).push([["react-syntax-highlighter_languages_refractor_d"],{

/***/ "./node_modules/refractor/lang/d.js":
/*!******************************************!*\
  !*** ./node_modules/refractor/lang/d.js ***!
  \******************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = d\nd.displayName = 'd'\nd.aliases = []\nfunction d(Prism) {\n  Prism.languages.d = Prism.languages.extend('clike', {\n    comment: [\n      {\n        // Shebang\n        pattern: /^\\s*#!.+/,\n        greedy: true\n      },\n      {\n        pattern: RegExp(\n          /(^|[^\\\\])/.source +\n            '(?:' +\n            [\n              // /+ comment +/\n              // Allow one level of nesting\n              /\\/\\+(?:\\/\\+(?:[^+]|\\+(?!\\/))*\\+\\/|(?!\\/\\+)[\\s\\S])*?\\+\\//.source, // // comment\n              /\\/\\/.*/.source, // /* comment */\n              /\\/\\*[\\s\\S]*?\\*\\//.source\n            ].join('|') +\n            ')'\n        ),\n        lookbehind: true,\n        greedy: true\n      }\n    ],\n    string: [\n      {\n        pattern: RegExp(\n          [\n            // r\"\", x\"\"\n            /\\b[rx]\"(?:\\\\[\\s\\S]|[^\\\\\"])*\"[cwd]?/.source, // q\"[]\", q\"()\", q\"<>\", q\"{}\"\n            /\\bq\"(?:\\[[\\s\\S]*?\\]|\\([\\s\\S]*?\\)|<[\\s\\S]*?>|\\{[\\s\\S]*?\\})\"/.source, // q\"IDENT\n            // ...\n            // IDENT\"\n            /\\bq\"((?!\\d)\\w+)$[\\s\\S]*?^\\1\"/.source, // q\"//\", q\"||\", etc.\n            // eslint-disable-next-line regexp/strict\n            /\\bq\"(.)[\\s\\S]*?\\2\"/.source, // eslint-disable-next-line regexp/strict\n            /([\"`])(?:\\\\[\\s\\S]|(?!\\3)[^\\\\])*\\3[cwd]?/.source\n          ].join('|'),\n          'm'\n        ),\n        greedy: true\n      },\n      {\n        pattern: /\\bq\\{(?:\\{[^{}]*\\}|[^{}])*\\}/,\n        greedy: true,\n        alias: 'token-string'\n      }\n    ],\n    // In order: $, keywords and special tokens, globally defined symbols\n    keyword:\n      /\\$|\\b(?:__(?:(?:DATE|EOF|FILE|FUNCTION|LINE|MODULE|PRETTY_FUNCTION|TIMESTAMP|TIME|VENDOR|VERSION)__|gshared|parameters|traits|vector)|abstract|alias|align|asm|assert|auto|body|bool|break|byte|case|cast|catch|cdouble|cent|cfloat|char|class|const|continue|creal|dchar|debug|default|delegate|delete|deprecated|do|double|dstring|else|enum|export|extern|false|final|finally|float|for|foreach|foreach_reverse|function|goto|idouble|if|ifloat|immutable|import|inout|int|interface|invariant|ireal|lazy|long|macro|mixin|module|new|nothrow|null|out|override|package|pragma|private|protected|ptrdiff_t|public|pure|real|ref|return|scope|shared|short|size_t|static|string|struct|super|switch|synchronized|template|this|throw|true|try|typedef|typeid|typeof|ubyte|ucent|uint|ulong|union|unittest|ushort|version|void|volatile|wchar|while|with|wstring)\\b/,\n    number: [\n      // The lookbehind and the negative look-ahead try to prevent bad highlighting of the .. operator\n      // Hexadecimal numbers must be handled separately to avoid problems with exponent \"e\"\n      /\\b0x\\.?[a-f\\d_]+(?:(?!\\.\\.)\\.[a-f\\d_]*)?(?:p[+-]?[a-f\\d_]+)?[ulfi]{0,4}/i,\n      {\n        pattern:\n          /((?:\\.\\.)?)(?:\\b0b\\.?|\\b|\\.)\\d[\\d_]*(?:(?!\\.\\.)\\.[\\d_]*)?(?:e[+-]?\\d[\\d_]*)?[ulfi]{0,4}/i,\n        lookbehind: true\n      }\n    ],\n    operator:\n      /\\|[|=]?|&[&=]?|\\+[+=]?|-[-=]?|\\.?\\.\\.|=[>=]?|!(?:i[ns]\\b|<>?=?|>=?|=)?|\\bi[ns]\\b|(?:<[<>]?|>>?>?|\\^\\^|[*\\/%^~])=?/\n  })\n  Prism.languages.insertBefore('d', 'string', {\n    // Characters\n    // 'a', '\\\\', '\\n', '\\xFF', '\\377', '\\uFFFF', '\\U0010FFFF', '\\quot'\n    char: /'(?:\\\\(?:\\W|\\w+)|[^\\\\])'/\n  })\n  Prism.languages.insertBefore('d', 'keyword', {\n    property: /\\B@\\w*/\n  })\n  Prism.languages.insertBefore('d', 'function', {\n    register: {\n      // Iasm registers\n      pattern:\n        /\\b(?:[ABCD][LHX]|E?(?:BP|DI|SI|SP)|[BS]PL|[ECSDGF]S|CR[0234]|[DS]IL|DR[012367]|E[ABCD]X|X?MM[0-7]|R(?:1[0-5]|[89])[BWD]?|R[ABCD]X|R[BS]P|R[DS]I|TR[3-7]|XMM(?:1[0-5]|[89])|YMM(?:1[0-5]|\\d))\\b|\\bST(?:\\([0-7]\\)|\\b)/,\n      alias: 'variable'\n    }\n  })\n}\n\n\n//# sourceURL=webpack://screenshot-to-code/./node_modules/refractor/lang/d.js?");

/***/ })

}]);