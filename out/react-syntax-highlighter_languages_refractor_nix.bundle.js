"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkscreenshot_to_code"] = self["webpackChunkscreenshot_to_code"] || []).push([["react-syntax-highlighter_languages_refractor_nix"],{

/***/ "./node_modules/refractor/lang/nix.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/nix.js ***!
  \********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = nix\nnix.displayName = 'nix'\nnix.aliases = []\nfunction nix(Prism) {\n  Prism.languages.nix = {\n    comment: {\n      pattern: /\\/\\*[\\s\\S]*?\\*\\/|#.*/,\n      greedy: true\n    },\n    string: {\n      pattern: /\"(?:[^\"\\\\]|\\\\[\\s\\S])*\"|''(?:(?!'')[\\s\\S]|''(?:'|\\\\|\\$\\{))*''/,\n      greedy: true,\n      inside: {\n        interpolation: {\n          // The lookbehind ensures the ${} is not preceded by \\ or ''\n          pattern: /(^|(?:^|(?!'').)[^\\\\])\\$\\{(?:[^{}]|\\{[^}]*\\})*\\}/,\n          lookbehind: true,\n          inside: null // see below\n        }\n      }\n    },\n    url: [\n      /\\b(?:[a-z]{3,7}:\\/\\/)[\\w\\-+%~\\/.:#=?&]+/,\n      {\n        pattern:\n          /([^\\/])(?:[\\w\\-+%~.:#=?&]*(?!\\/\\/)[\\w\\-+%~\\/.:#=?&])?(?!\\/\\/)\\/[\\w\\-+%~\\/.:#=?&]*/,\n        lookbehind: true\n      }\n    ],\n    antiquotation: {\n      pattern: /\\$(?=\\{)/,\n      alias: 'important'\n    },\n    number: /\\b\\d+\\b/,\n    keyword: /\\b(?:assert|builtins|else|if|in|inherit|let|null|or|then|with)\\b/,\n    function:\n      /\\b(?:abort|add|all|any|attrNames|attrValues|baseNameOf|compareVersions|concatLists|currentSystem|deepSeq|derivation|dirOf|div|elem(?:At)?|fetch(?:Tarball|url)|filter(?:Source)?|fromJSON|genList|getAttr|getEnv|hasAttr|hashString|head|import|intersectAttrs|is(?:Attrs|Bool|Function|Int|List|Null|String)|length|lessThan|listToAttrs|map|mul|parseDrvName|pathExists|read(?:Dir|File)|removeAttrs|replaceStrings|seq|sort|stringLength|sub(?:string)?|tail|throw|to(?:File|JSON|Path|String|XML)|trace|typeOf)\\b|\\bfoldl'\\B/,\n    boolean: /\\b(?:false|true)\\b/,\n    operator: /[=!<>]=?|\\+\\+?|\\|\\||&&|\\/\\/|->?|[?@]/,\n    punctuation: /[{}()[\\].,:;]/\n  }\n  Prism.languages.nix.string.inside.interpolation.inside = Prism.languages.nix\n}\n\n\n//# sourceURL=webpack://screenshot-to-code/./node_modules/refractor/lang/nix.js?");

/***/ })

}]);