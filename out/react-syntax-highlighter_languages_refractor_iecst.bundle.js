"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkscreenshot_to_code"] = self["webpackChunkscreenshot_to_code"] || []).push([["react-syntax-highlighter_languages_refractor_iecst"],{

/***/ "./node_modules/refractor/lang/iecst.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/iecst.js ***!
  \**********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = iecst\niecst.displayName = 'iecst'\niecst.aliases = []\nfunction iecst(Prism) {\n  Prism.languages.iecst = {\n    comment: [\n      {\n        pattern:\n          /(^|[^\\\\])(?:\\/\\*[\\s\\S]*?(?:\\*\\/|$)|\\(\\*[\\s\\S]*?(?:\\*\\)|$)|\\{[\\s\\S]*?(?:\\}|$))/,\n        lookbehind: true,\n        greedy: true\n      },\n      {\n        pattern: /(^|[^\\\\:])\\/\\/.*/,\n        lookbehind: true,\n        greedy: true\n      }\n    ],\n    string: {\n      pattern: /([\"'])(?:\\\\(?:\\r\\n|[\\s\\S])|(?!\\1)[^\\\\\\r\\n])*\\1/,\n      greedy: true\n    },\n    keyword: [\n      /\\b(?:END_)?(?:PROGRAM|CONFIGURATION|INTERFACE|FUNCTION_BLOCK|FUNCTION|ACTION|TRANSITION|TYPE|STRUCT|(?:INITIAL_)?STEP|NAMESPACE|LIBRARY|CHANNEL|FOLDER|RESOURCE|VAR_(?:ACCESS|CONFIG|EXTERNAL|GLOBAL|INPUT|IN_OUT|OUTPUT|TEMP)|VAR|METHOD|PROPERTY)\\b/i,\n      /\\b(?:AT|BY|(?:END_)?(?:CASE|FOR|IF|REPEAT|WHILE)|CONSTANT|CONTINUE|DO|ELSE|ELSIF|EXIT|EXTENDS|FROM|GET|GOTO|IMPLEMENTS|JMP|NON_RETAIN|OF|PRIVATE|PROTECTED|PUBLIC|RETAIN|RETURN|SET|TASK|THEN|TO|UNTIL|USING|WITH|__CATCH|__ENDTRY|__FINALLY|__TRY)\\b/\n    ],\n    'class-name':\n      /\\b(?:ANY|ARRAY|BOOL|BYTE|U?(?:D|L|S)?INT|(?:D|L)?WORD|DATE(?:_AND_TIME)?|DT|L?REAL|POINTER|STRING|TIME(?:_OF_DAY)?|TOD)\\b/,\n    address: {\n      pattern: /%[IQM][XBWDL][\\d.]*|%[IQ][\\d.]*/,\n      alias: 'symbol'\n    },\n    number:\n      /\\b(?:16#[\\da-f]+|2#[01_]+|0x[\\da-f]+)\\b|\\b(?:D|DT|T|TOD)#[\\d_shmd:]*|\\b[A-Z]*#[\\d.,_]*|(?:\\b\\d+(?:\\.\\d*)?|\\B\\.\\d+)(?:e[+-]?\\d+)?/i,\n    boolean: /\\b(?:FALSE|NULL|TRUE)\\b/,\n    operator:\n      /S?R?:?=>?|&&?|\\*\\*?|<[=>]?|>=?|[-:^/+#]|\\b(?:AND|EQ|EXPT|GE|GT|LE|LT|MOD|NE|NOT|OR|XOR)\\b/,\n    function: /\\b[a-z_]\\w*(?=\\s*\\()/i,\n    punctuation: /[()[\\].,;]/\n  }\n}\n\n\n//# sourceURL=webpack://screenshot-to-code/./node_modules/refractor/lang/iecst.js?");

/***/ })

}]);