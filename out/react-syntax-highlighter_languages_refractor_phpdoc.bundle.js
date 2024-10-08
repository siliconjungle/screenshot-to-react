"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkscreenshot_to_code"] = self["webpackChunkscreenshot_to_code"] || []).push([["react-syntax-highlighter_languages_refractor_phpdoc"],{

/***/ "./node_modules/refractor/lang/javadoclike.js":
/*!****************************************************!*\
  !*** ./node_modules/refractor/lang/javadoclike.js ***!
  \****************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = javadoclike\njavadoclike.displayName = 'javadoclike'\njavadoclike.aliases = []\nfunction javadoclike(Prism) {\n  ;(function (Prism) {\n    var javaDocLike = (Prism.languages.javadoclike = {\n      parameter: {\n        pattern:\n          /(^[\\t ]*(?:\\/{3}|\\*|\\/\\*\\*)\\s*@(?:arg|arguments|param)\\s+)\\w+/m,\n        lookbehind: true\n      },\n      keyword: {\n        // keywords are the first word in a line preceded be an `@` or surrounded by curly braces.\n        // @word, {@word}\n        pattern: /(^[\\t ]*(?:\\/{3}|\\*|\\/\\*\\*)\\s*|\\{)@[a-z][a-zA-Z-]+\\b/m,\n        lookbehind: true\n      },\n      punctuation: /[{}]/\n    })\n    /**\n     * Adds doc comment support to the given language and calls a given callback on each doc comment pattern.\n     *\n     * @param {string} lang the language add doc comment support to.\n     * @param {(pattern: {inside: {rest: undefined}}) => void} callback the function called with each doc comment pattern as argument.\n     */\n    function docCommentSupport(lang, callback) {\n      var tokenName = 'doc-comment'\n      var grammar = Prism.languages[lang]\n      if (!grammar) {\n        return\n      }\n      var token = grammar[tokenName]\n      if (!token) {\n        // add doc comment: /** */\n        var definition = {}\n        definition[tokenName] = {\n          pattern: /(^|[^\\\\])\\/\\*\\*[^/][\\s\\S]*?(?:\\*\\/|$)/,\n          lookbehind: true,\n          alias: 'comment'\n        }\n        grammar = Prism.languages.insertBefore(lang, 'comment', definition)\n        token = grammar[tokenName]\n      }\n      if (token instanceof RegExp) {\n        // convert regex to object\n        token = grammar[tokenName] = {\n          pattern: token\n        }\n      }\n      if (Array.isArray(token)) {\n        for (var i = 0, l = token.length; i < l; i++) {\n          if (token[i] instanceof RegExp) {\n            token[i] = {\n              pattern: token[i]\n            }\n          }\n          callback(token[i])\n        }\n      } else {\n        callback(token)\n      }\n    }\n    /**\n     * Adds doc-comment support to the given languages for the given documentation language.\n     *\n     * @param {string[]|string} languages\n     * @param {Object} docLanguage\n     */\n    function addSupport(languages, docLanguage) {\n      if (typeof languages === 'string') {\n        languages = [languages]\n      }\n      languages.forEach(function (lang) {\n        docCommentSupport(lang, function (pattern) {\n          if (!pattern.inside) {\n            pattern.inside = {}\n          }\n          pattern.inside.rest = docLanguage\n        })\n      })\n    }\n    Object.defineProperty(javaDocLike, 'addSupport', {\n      value: addSupport\n    })\n    javaDocLike.addSupport(['java', 'javascript', 'php'], javaDocLike)\n  })(Prism)\n}\n\n\n//# sourceURL=webpack://screenshot-to-code/./node_modules/refractor/lang/javadoclike.js?");

/***/ }),

/***/ "./node_modules/refractor/lang/phpdoc.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/phpdoc.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar refractorPhp = __webpack_require__(/*! ./php.js */ \"./node_modules/refractor/lang/php.js\")\nvar refractorJavadoclike = __webpack_require__(/*! ./javadoclike.js */ \"./node_modules/refractor/lang/javadoclike.js\")\nmodule.exports = phpdoc\nphpdoc.displayName = 'phpdoc'\nphpdoc.aliases = []\nfunction phpdoc(Prism) {\n  Prism.register(refractorPhp)\n  Prism.register(refractorJavadoclike)\n  ;(function (Prism) {\n    var typeExpression = /(?:\\b[a-zA-Z]\\w*|[|\\\\[\\]])+/.source\n    Prism.languages.phpdoc = Prism.languages.extend('javadoclike', {\n      parameter: {\n        pattern: RegExp(\n          '(@(?:global|param|property(?:-read|-write)?|var)\\\\s+(?:' +\n            typeExpression +\n            '\\\\s+)?)\\\\$\\\\w+'\n        ),\n        lookbehind: true\n      }\n    })\n    Prism.languages.insertBefore('phpdoc', 'keyword', {\n      'class-name': [\n        {\n          pattern: RegExp(\n            '(@(?:global|package|param|property(?:-read|-write)?|return|subpackage|throws|var)\\\\s+)' +\n              typeExpression\n          ),\n          lookbehind: true,\n          inside: {\n            keyword:\n              /\\b(?:array|bool|boolean|callback|double|false|float|int|integer|mixed|null|object|resource|self|string|true|void)\\b/,\n            punctuation: /[|\\\\[\\]()]/\n          }\n        }\n      ]\n    })\n    Prism.languages.javadoclike.addSupport('php', Prism.languages.phpdoc)\n  })(Prism)\n}\n\n\n//# sourceURL=webpack://screenshot-to-code/./node_modules/refractor/lang/phpdoc.js?");

/***/ })

}]);