"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkscreenshot_to_code"] = self["webpackChunkscreenshot_to_code"] || []).push([["react-syntax-highlighter_languages_refractor_stan"],{

/***/ "./node_modules/refractor/lang/stan.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/stan.js ***!
  \*********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = stan\nstan.displayName = 'stan'\nstan.aliases = []\nfunction stan(Prism) {\n  ;(function (Prism) {\n    // https://mc-stan.org/docs/2_28/reference-manual/bnf-grammars.html\n    var higherOrderFunctions =\n      /\\b(?:algebra_solver|algebra_solver_newton|integrate_1d|integrate_ode|integrate_ode_bdf|integrate_ode_rk45|map_rect|ode_(?:adams|bdf|ckrk|rk45)(?:_tol)?|ode_adjoint_tol_ctl|reduce_sum|reduce_sum_static)\\b/\n    Prism.languages.stan = {\n      comment: /\\/\\/.*|\\/\\*[\\s\\S]*?\\*\\/|#(?!include).*/,\n      string: {\n        // String literals can contain spaces and any printable ASCII characters except for \" and \\\n        // https://mc-stan.org/docs/2_24/reference-manual/print-statements-section.html#string-literals\n        pattern: /\"[\\x20\\x21\\x23-\\x5B\\x5D-\\x7E]*\"/,\n        greedy: true\n      },\n      directive: {\n        pattern: /^([ \\t]*)#include\\b.*/m,\n        lookbehind: true,\n        alias: 'property'\n      },\n      'function-arg': {\n        pattern: RegExp(\n          '(' +\n            higherOrderFunctions.source +\n            /\\s*\\(\\s*/.source +\n            ')' +\n            /[a-zA-Z]\\w*/.source\n        ),\n        lookbehind: true,\n        alias: 'function'\n      },\n      constraint: {\n        pattern: /(\\b(?:int|matrix|real|row_vector|vector)\\s*)<[^<>]*>/,\n        lookbehind: true,\n        inside: {\n          expression: {\n            pattern: /(=\\s*)\\S(?:\\S|\\s+(?!\\s))*?(?=\\s*(?:>$|,\\s*\\w+\\s*=))/,\n            lookbehind: true,\n            inside: null // see below\n          },\n          property: /\\b[a-z]\\w*(?=\\s*=)/i,\n          operator: /=/,\n          punctuation: /^<|>$|,/\n        }\n      },\n      keyword: [\n        {\n          pattern:\n            /\\bdata(?=\\s*\\{)|\\b(?:functions|generated|model|parameters|quantities|transformed)\\b/,\n          alias: 'program-block'\n        },\n        /\\b(?:array|break|cholesky_factor_corr|cholesky_factor_cov|complex|continue|corr_matrix|cov_matrix|data|else|for|if|in|increment_log_prob|int|matrix|ordered|positive_ordered|print|real|reject|return|row_vector|simplex|target|unit_vector|vector|void|while)\\b/, // these are functions that are known to take another function as their first argument.\n        higherOrderFunctions\n      ],\n      function: /\\b[a-z]\\w*(?=\\s*\\()/i,\n      number:\n        /(?:\\b\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\B\\.\\d+(?:_\\d+)*)(?:E[+-]?\\d+(?:_\\d+)*)?i?(?!\\w)/i,\n      boolean: /\\b(?:false|true)\\b/,\n      operator: /<-|\\.[*/]=?|\\|\\|?|&&|[!=<>+\\-*/]=?|['^%~?:]/,\n      punctuation: /[()\\[\\]{},;]/\n    }\n    Prism.languages.stan.constraint.inside.expression.inside =\n      Prism.languages.stan\n  })(Prism)\n}\n\n\n//# sourceURL=webpack://screenshot-to-code/./node_modules/refractor/lang/stan.js?");

/***/ })

}]);