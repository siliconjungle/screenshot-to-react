"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkscreenshot_to_code"] = self["webpackChunkscreenshot_to_code"] || []).push([["react-syntax-highlighter_languages_refractor_graphql"],{

/***/ "./node_modules/refractor/lang/graphql.js":
/*!************************************************!*\
  !*** ./node_modules/refractor/lang/graphql.js ***!
  \************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = graphql\ngraphql.displayName = 'graphql'\ngraphql.aliases = []\nfunction graphql(Prism) {\n  Prism.languages.graphql = {\n    comment: /#.*/,\n    description: {\n      pattern:\n        /(?:\"\"\"(?:[^\"]|(?!\"\"\")\")*\"\"\"|\"(?:\\\\.|[^\\\\\"\\r\\n])*\")(?=\\s*[a-z_])/i,\n      greedy: true,\n      alias: 'string',\n      inside: {\n        'language-markdown': {\n          pattern: /(^\"(?:\"\")?)(?!\\1)[\\s\\S]+(?=\\1$)/,\n          lookbehind: true,\n          inside: Prism.languages.markdown\n        }\n      }\n    },\n    string: {\n      pattern: /\"\"\"(?:[^\"]|(?!\"\"\")\")*\"\"\"|\"(?:\\\\.|[^\\\\\"\\r\\n])*\"/,\n      greedy: true\n    },\n    number: /(?:\\B-|\\b)\\d+(?:\\.\\d+)?(?:e[+-]?\\d+)?\\b/i,\n    boolean: /\\b(?:false|true)\\b/,\n    variable: /\\$[a-z_]\\w*/i,\n    directive: {\n      pattern: /@[a-z_]\\w*/i,\n      alias: 'function'\n    },\n    'attr-name': {\n      pattern: /\\b[a-z_]\\w*(?=\\s*(?:\\((?:[^()\"]|\"(?:\\\\.|[^\\\\\"\\r\\n])*\")*\\))?:)/i,\n      greedy: true\n    },\n    'atom-input': {\n      pattern: /\\b[A-Z]\\w*Input\\b/,\n      alias: 'class-name'\n    },\n    scalar: /\\b(?:Boolean|Float|ID|Int|String)\\b/,\n    constant: /\\b[A-Z][A-Z_\\d]*\\b/,\n    'class-name': {\n      pattern:\n        /(\\b(?:enum|implements|interface|on|scalar|type|union)\\s+|&\\s*|:\\s*|\\[)[A-Z_]\\w*/,\n      lookbehind: true\n    },\n    fragment: {\n      pattern: /(\\bfragment\\s+|\\.{3}\\s*(?!on\\b))[a-zA-Z_]\\w*/,\n      lookbehind: true,\n      alias: 'function'\n    },\n    'definition-mutation': {\n      pattern: /(\\bmutation\\s+)[a-zA-Z_]\\w*/,\n      lookbehind: true,\n      alias: 'function'\n    },\n    'definition-query': {\n      pattern: /(\\bquery\\s+)[a-zA-Z_]\\w*/,\n      lookbehind: true,\n      alias: 'function'\n    },\n    keyword:\n      /\\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\\b/,\n    operator: /[!=|&]|\\.{3}/,\n    'property-query': /\\w+(?=\\s*\\()/,\n    object: /\\w+(?=\\s*\\{)/,\n    punctuation: /[!(){}\\[\\]:=,]/,\n    property: /\\w+/\n  }\n  Prism.hooks.add('after-tokenize', function afterTokenizeGraphql(env) {\n    if (env.language !== 'graphql') {\n      return\n    }\n    /**\n     * get the graphql token stream that we want to customize\n     *\n     * @typedef {InstanceType<import(\"./prism-core\")[\"Token\"]>} Token\n     * @type {Token[]}\n     */\n    var validTokens = env.tokens.filter(function (token) {\n      return (\n        typeof token !== 'string' &&\n        token.type !== 'comment' &&\n        token.type !== 'scalar'\n      )\n    })\n    var currentIndex = 0\n    /**\n     * Returns whether the token relative to the current index has the given type.\n     *\n     * @param {number} offset\n     * @returns {Token | undefined}\n     */\n    function getToken(offset) {\n      return validTokens[currentIndex + offset]\n    }\n    /**\n     * Returns whether the token relative to the current index has the given type.\n     *\n     * @param {readonly string[]} types\n     * @param {number} [offset=0]\n     * @returns {boolean}\n     */\n    function isTokenType(types, offset) {\n      offset = offset || 0\n      for (var i = 0; i < types.length; i++) {\n        var token = getToken(i + offset)\n        if (!token || token.type !== types[i]) {\n          return false\n        }\n      }\n      return true\n    }\n    /**\n     * Returns the index of the closing bracket to an opening bracket.\n     *\n     * It is assumed that `token[currentIndex - 1]` is an opening bracket.\n     *\n     * If no closing bracket could be found, `-1` will be returned.\n     *\n     * @param {RegExp} open\n     * @param {RegExp} close\n     * @returns {number}\n     */\n    function findClosingBracket(open, close) {\n      var stackHeight = 1\n      for (var i = currentIndex; i < validTokens.length; i++) {\n        var token = validTokens[i]\n        var content = token.content\n        if (token.type === 'punctuation' && typeof content === 'string') {\n          if (open.test(content)) {\n            stackHeight++\n          } else if (close.test(content)) {\n            stackHeight--\n            if (stackHeight === 0) {\n              return i\n            }\n          }\n        }\n      }\n      return -1\n    }\n    /**\n     * Adds an alias to the given token.\n     *\n     * @param {Token} token\n     * @param {string} alias\n     * @returns {void}\n     */\n    function addAlias(token, alias) {\n      var aliases = token.alias\n      if (!aliases) {\n        token.alias = aliases = []\n      } else if (!Array.isArray(aliases)) {\n        token.alias = aliases = [aliases]\n      }\n      aliases.push(alias)\n    }\n    for (; currentIndex < validTokens.length; ) {\n      var startToken = validTokens[currentIndex++] // add special aliases for mutation tokens\n      if (startToken.type === 'keyword' && startToken.content === 'mutation') {\n        // any array of the names of all input variables (if any)\n        var inputVariables = []\n        if (\n          isTokenType(['definition-mutation', 'punctuation']) &&\n          getToken(1).content === '('\n        ) {\n          // definition\n          currentIndex += 2 // skip 'definition-mutation' and 'punctuation'\n          var definitionEnd = findClosingBracket(/^\\($/, /^\\)$/)\n          if (definitionEnd === -1) {\n            continue\n          } // find all input variables\n          for (; currentIndex < definitionEnd; currentIndex++) {\n            var t = getToken(0)\n            if (t.type === 'variable') {\n              addAlias(t, 'variable-input')\n              inputVariables.push(t.content)\n            }\n          }\n          currentIndex = definitionEnd + 1\n        }\n        if (\n          isTokenType(['punctuation', 'property-query']) &&\n          getToken(0).content === '{'\n        ) {\n          currentIndex++ // skip opening bracket\n          addAlias(getToken(0), 'property-mutation')\n          if (inputVariables.length > 0) {\n            var mutationEnd = findClosingBracket(/^\\{$/, /^\\}$/)\n            if (mutationEnd === -1) {\n              continue\n            } // give references to input variables a special alias\n            for (var i = currentIndex; i < mutationEnd; i++) {\n              var varToken = validTokens[i]\n              if (\n                varToken.type === 'variable' &&\n                inputVariables.indexOf(varToken.content) >= 0\n              ) {\n                addAlias(varToken, 'variable-input')\n              }\n            }\n          }\n        }\n      }\n    }\n  })\n}\n\n\n//# sourceURL=webpack://screenshot-to-code/./node_modules/refractor/lang/graphql.js?");

/***/ })

}]);