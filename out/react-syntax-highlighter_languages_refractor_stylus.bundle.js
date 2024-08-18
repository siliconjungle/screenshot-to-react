"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkscreenshot_to_code"] = self["webpackChunkscreenshot_to_code"] || []).push([["react-syntax-highlighter_languages_refractor_stylus"],{

/***/ "./node_modules/refractor/lang/stylus.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/stylus.js ***!
  \***********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = stylus\nstylus.displayName = 'stylus'\nstylus.aliases = []\nfunction stylus(Prism) {\n  ;(function (Prism) {\n    var unit = {\n      pattern: /(\\b\\d+)(?:%|[a-z]+)/,\n      lookbehind: true\n    } // 123 -123 .123 -.123 12.3 -12.3\n    var number = {\n      pattern: /(^|[^\\w.-])-?(?:\\d+(?:\\.\\d+)?|\\.\\d+)/,\n      lookbehind: true\n    }\n    var inside = {\n      comment: {\n        pattern: /(^|[^\\\\])(?:\\/\\*[\\s\\S]*?\\*\\/|\\/\\/.*)/,\n        lookbehind: true\n      },\n      url: {\n        pattern: /\\burl\\(([\"']?).*?\\1\\)/i,\n        greedy: true\n      },\n      string: {\n        pattern: /(\"|')(?:(?!\\1)[^\\\\\\r\\n]|\\\\(?:\\r\\n|[\\s\\S]))*\\1/,\n        greedy: true\n      },\n      interpolation: null,\n      // See below\n      func: null,\n      // See below\n      important: /\\B!(?:important|optional)\\b/i,\n      keyword: {\n        pattern: /(^|\\s+)(?:(?:else|for|if|return|unless)(?=\\s|$)|@[\\w-]+)/,\n        lookbehind: true\n      },\n      hexcode: /#[\\da-f]{3,6}/i,\n      color: [\n        /\\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\\b/i,\n        {\n          pattern:\n            /\\b(?:hsl|rgb)\\(\\s*\\d{1,3}\\s*,\\s*\\d{1,3}%?\\s*,\\s*\\d{1,3}%?\\s*\\)\\B|\\b(?:hsl|rgb)a\\(\\s*\\d{1,3}\\s*,\\s*\\d{1,3}%?\\s*,\\s*\\d{1,3}%?\\s*,\\s*(?:0|0?\\.\\d+|1)\\s*\\)\\B/i,\n          inside: {\n            unit: unit,\n            number: number,\n            function: /[\\w-]+(?=\\()/,\n            punctuation: /[(),]/\n          }\n        }\n      ],\n      entity: /\\\\[\\da-f]{1,8}/i,\n      unit: unit,\n      boolean: /\\b(?:false|true)\\b/,\n      operator: [\n        // We want non-word chars around \"-\" because it is\n        // accepted in property names.\n        /~|[+!\\/%<>?=]=?|[-:]=|\\*[*=]?|\\.{2,3}|&&|\\|\\||\\B-\\B|\\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\\b/\n      ],\n      number: number,\n      punctuation: /[{}()\\[\\];:,]/\n    }\n    inside['interpolation'] = {\n      pattern: /\\{[^\\r\\n}:]+\\}/,\n      alias: 'variable',\n      inside: {\n        delimiter: {\n          pattern: /^\\{|\\}$/,\n          alias: 'punctuation'\n        },\n        rest: inside\n      }\n    }\n    inside['func'] = {\n      pattern: /[\\w-]+\\([^)]*\\).*/,\n      inside: {\n        function: /^[^(]+/,\n        rest: inside\n      }\n    }\n    Prism.languages.stylus = {\n      'atrule-declaration': {\n        pattern: /(^[ \\t]*)@.+/m,\n        lookbehind: true,\n        inside: {\n          atrule: /^@[\\w-]+/,\n          rest: inside\n        }\n      },\n      'variable-declaration': {\n        pattern: /(^[ \\t]*)[\\w$-]+\\s*.?=[ \\t]*(?:\\{[^{}]*\\}|\\S.*|$)/m,\n        lookbehind: true,\n        inside: {\n          variable: /^\\S+/,\n          rest: inside\n        }\n      },\n      statement: {\n        pattern: /(^[ \\t]*)(?:else|for|if|return|unless)[ \\t].+/m,\n        lookbehind: true,\n        inside: {\n          keyword: /^\\S+/,\n          rest: inside\n        }\n      },\n      // A property/value pair cannot end with a comma or a brace\n      // It cannot have indented content unless it ended with a semicolon\n      'property-declaration': {\n        pattern:\n          /((?:^|\\{)([ \\t]*))(?:[\\w-]|\\{[^}\\r\\n]+\\})+(?:\\s*:\\s*|[ \\t]+)(?!\\s)[^{\\r\\n]*(?:;|[^{\\r\\n,]$(?!(?:\\r?\\n|\\r)(?:\\{|\\2[ \\t])))/m,\n        lookbehind: true,\n        inside: {\n          property: {\n            pattern: /^[^\\s:]+/,\n            inside: {\n              interpolation: inside.interpolation\n            }\n          },\n          rest: inside\n        }\n      },\n      // A selector can contain parentheses only as part of a pseudo-element\n      // It can span multiple lines.\n      // It must end with a comma or an accolade or have indented content.\n      selector: {\n        pattern:\n          /(^[ \\t]*)(?:(?=\\S)(?:[^{}\\r\\n:()]|::?[\\w-]+(?:\\([^)\\r\\n]*\\)|(?![\\w-]))|\\{[^}\\r\\n]+\\})+)(?:(?:\\r?\\n|\\r)(?:\\1(?:(?=\\S)(?:[^{}\\r\\n:()]|::?[\\w-]+(?:\\([^)\\r\\n]*\\)|(?![\\w-]))|\\{[^}\\r\\n]+\\})+)))*(?:,$|\\{|(?=(?:\\r?\\n|\\r)(?:\\{|\\1[ \\t])))/m,\n        lookbehind: true,\n        inside: {\n          interpolation: inside.interpolation,\n          comment: inside.comment,\n          punctuation: /[{},]/\n        }\n      },\n      func: inside.func,\n      string: inside.string,\n      comment: {\n        pattern: /(^|[^\\\\])(?:\\/\\*[\\s\\S]*?\\*\\/|\\/\\/.*)/,\n        lookbehind: true,\n        greedy: true\n      },\n      interpolation: inside.interpolation,\n      punctuation: /[{}()\\[\\];:.]/\n    }\n  })(Prism)\n}\n\n\n//# sourceURL=webpack://screenshot-to-code/./node_modules/refractor/lang/stylus.js?");

/***/ })

}]);