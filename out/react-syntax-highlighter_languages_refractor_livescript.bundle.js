"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkscreenshot_to_code"] = self["webpackChunkscreenshot_to_code"] || []).push([["react-syntax-highlighter_languages_refractor_livescript"],{

/***/ "./node_modules/refractor/lang/livescript.js":
/*!***************************************************!*\
  !*** ./node_modules/refractor/lang/livescript.js ***!
  \***************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = livescript\nlivescript.displayName = 'livescript'\nlivescript.aliases = []\nfunction livescript(Prism) {\n  Prism.languages.livescript = {\n    comment: [\n      {\n        pattern: /(^|[^\\\\])\\/\\*[\\s\\S]*?\\*\\//,\n        lookbehind: true\n      },\n      {\n        pattern: /(^|[^\\\\])#.*/,\n        lookbehind: true\n      }\n    ],\n    'interpolated-string': {\n      /* Look-behind and look-ahead prevents wrong behavior of the greedy pattern\n       * forcing it to match \"\"\"-quoted string when it would otherwise match \"-quoted first. */\n      pattern: /(^|[^\"])(\"\"\"|\")(?:\\\\[\\s\\S]|(?!\\2)[^\\\\])*\\2(?!\")/,\n      lookbehind: true,\n      greedy: true,\n      inside: {\n        variable: {\n          pattern: /(^|[^\\\\])#[a-z_](?:-?[a-z]|[\\d_])*/m,\n          lookbehind: true\n        },\n        interpolation: {\n          pattern: /(^|[^\\\\])#\\{[^}]+\\}/m,\n          lookbehind: true,\n          inside: {\n            'interpolation-punctuation': {\n              pattern: /^#\\{|\\}$/,\n              alias: 'variable'\n            } // See rest below\n          }\n        },\n        string: /[\\s\\S]+/\n      }\n    },\n    string: [\n      {\n        pattern: /('''|')(?:\\\\[\\s\\S]|(?!\\1)[^\\\\])*\\1/,\n        greedy: true\n      },\n      {\n        pattern: /<\\[[\\s\\S]*?\\]>/,\n        greedy: true\n      },\n      /\\\\[^\\s,;\\])}]+/\n    ],\n    regex: [\n      {\n        pattern: /\\/\\/(?:\\[[^\\r\\n\\]]*\\]|\\\\.|(?!\\/\\/)[^\\\\\\[])+\\/\\/[gimyu]{0,5}/,\n        greedy: true,\n        inside: {\n          comment: {\n            pattern: /(^|[^\\\\])#.*/,\n            lookbehind: true\n          }\n        }\n      },\n      {\n        pattern: /\\/(?:\\[[^\\r\\n\\]]*\\]|\\\\.|[^/\\\\\\r\\n\\[])+\\/[gimyu]{0,5}/,\n        greedy: true\n      }\n    ],\n    keyword: {\n      pattern:\n        /(^|(?!-).)\\b(?:break|case|catch|class|const|continue|default|do|else|extends|fallthrough|finally|for(?: ever)?|function|if|implements|it|let|loop|new|null|otherwise|own|return|super|switch|that|then|this|throw|try|unless|until|var|void|when|while|yield)(?!-)\\b/m,\n      lookbehind: true\n    },\n    'keyword-operator': {\n      pattern:\n        /(^|[^-])\\b(?:(?:delete|require|typeof)!|(?:and|by|delete|export|from|import(?: all)?|in|instanceof|is(?: not|nt)?|not|of|or|til|to|typeof|with|xor)(?!-)\\b)/m,\n      lookbehind: true,\n      alias: 'operator'\n    },\n    boolean: {\n      pattern: /(^|[^-])\\b(?:false|no|off|on|true|yes)(?!-)\\b/m,\n      lookbehind: true\n    },\n    argument: {\n      // Don't match .&. nor &&\n      pattern: /(^|(?!\\.&\\.)[^&])&(?!&)\\d*/m,\n      lookbehind: true,\n      alias: 'variable'\n    },\n    number: /\\b(?:\\d+~[\\da-z]+|\\d[\\d_]*(?:\\.\\d[\\d_]*)?(?:[a-z]\\w*)?)/i,\n    identifier: /[a-z_](?:-?[a-z]|[\\d_])*/i,\n    operator: [\n      // Spaced .\n      {\n        pattern: /( )\\.(?= )/,\n        lookbehind: true\n      }, // Full list, in order:\n      // .= .~ .. ...\n      // .&. .^. .<<. .>>. .>>>.\n      // := :: ::=\n      // &&\n      // || |>\n      // < << <<< <<<<\n      // <- <-- <-! <--!\n      // <~ <~~ <~! <~~!\n      // <| <= <?\n      // > >> >= >?\n      // - -- -> -->\n      // + ++\n      // @ @@\n      // % %%\n      // * **\n      // ! != !~=\n      // !~> !~~>\n      // !-> !-->\n      // ~ ~> ~~> ~=\n      // = ==\n      // ^ ^^\n      // / ?\n      /\\.(?:[=~]|\\.\\.?)|\\.(?:[&|^]|<<|>>>?)\\.|:(?:=|:=?)|&&|\\|[|>]|<(?:<<?<?|--?!?|~~?!?|[|=?])?|>[>=?]?|-(?:->?|>)?|\\+\\+?|@@?|%%?|\\*\\*?|!(?:~?=|--?>|~?~>)?|~(?:~?>|=)?|==?|\\^\\^?|[\\/?]/\n    ],\n    punctuation: /[(){}\\[\\]|.,:;`]/\n  }\n  Prism.languages.livescript['interpolated-string'].inside[\n    'interpolation'\n  ].inside.rest = Prism.languages.livescript\n}\n\n\n//# sourceURL=webpack://screenshot-to-code/./node_modules/refractor/lang/livescript.js?");

/***/ })

}]);