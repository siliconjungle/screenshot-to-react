"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkscreenshot_to_code"] = self["webpackChunkscreenshot_to_code"] || []).push([["react-syntax-highlighter_languages_refractor_n1ql"],{

/***/ "./node_modules/refractor/lang/n1ql.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/n1ql.js ***!
  \*********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = n1ql\nn1ql.displayName = 'n1ql'\nn1ql.aliases = []\nfunction n1ql(Prism) {\n  // https://docs.couchbase.com/server/current/n1ql/n1ql-language-reference/index.html\n  Prism.languages.n1ql = {\n    comment: {\n      pattern: /\\/\\*[\\s\\S]*?(?:$|\\*\\/)|--.*/,\n      greedy: true\n    },\n    string: {\n      pattern: /([\"'])(?:\\\\[\\s\\S]|(?!\\1)[^\\\\]|\\1\\1)*\\1/,\n      greedy: true\n    },\n    identifier: {\n      pattern: /`(?:\\\\[\\s\\S]|[^\\\\`]|``)*`/,\n      greedy: true\n    },\n    parameter: /\\$[\\w.]+/,\n    // https://docs.couchbase.com/server/current/n1ql/n1ql-language-reference/reservedwords.html#n1ql-reserved-words\n    keyword:\n      /\\b(?:ADVISE|ALL|ALTER|ANALYZE|AS|ASC|AT|BEGIN|BINARY|BOOLEAN|BREAK|BUCKET|BUILD|BY|CALL|CAST|CLUSTER|COLLATE|COLLECTION|COMMIT|COMMITTED|CONNECT|CONTINUE|CORRELATE|CORRELATED|COVER|CREATE|CURRENT|DATABASE|DATASET|DATASTORE|DECLARE|DECREMENT|DELETE|DERIVED|DESC|DESCRIBE|DISTINCT|DO|DROP|EACH|ELEMENT|EXCEPT|EXCLUDE|EXECUTE|EXPLAIN|FETCH|FILTER|FLATTEN|FLUSH|FOLLOWING|FOR|FORCE|FROM|FTS|FUNCTION|GOLANG|GRANT|GROUP|GROUPS|GSI|HASH|HAVING|IF|IGNORE|ILIKE|INCLUDE|INCREMENT|INDEX|INFER|INLINE|INNER|INSERT|INTERSECT|INTO|IS|ISOLATION|JAVASCRIPT|JOIN|KEY|KEYS|KEYSPACE|KNOWN|LANGUAGE|LAST|LEFT|LET|LETTING|LEVEL|LIMIT|LSM|MAP|MAPPING|MATCHED|MATERIALIZED|MERGE|MINUS|MISSING|NAMESPACE|NEST|NL|NO|NTH_VALUE|NULL|NULLS|NUMBER|OBJECT|OFFSET|ON|OPTION|OPTIONS|ORDER|OTHERS|OUTER|OVER|PARSE|PARTITION|PASSWORD|PATH|POOL|PRECEDING|PREPARE|PRIMARY|PRIVATE|PRIVILEGE|PROBE|PROCEDURE|PUBLIC|RANGE|RAW|REALM|REDUCE|RENAME|RESPECT|RETURN|RETURNING|REVOKE|RIGHT|ROLE|ROLLBACK|ROW|ROWS|SATISFIES|SAVEPOINT|SCHEMA|SCOPE|SELECT|SELF|SEMI|SET|SHOW|SOME|START|STATISTICS|STRING|SYSTEM|TIES|TO|TRAN|TRANSACTION|TRIGGER|TRUNCATE|UNBOUNDED|UNDER|UNION|UNIQUE|UNKNOWN|UNNEST|UNSET|UPDATE|UPSERT|USE|USER|USING|VALIDATE|VALUE|VALUES|VIA|VIEW|WHERE|WHILE|WINDOW|WITH|WORK|XOR)\\b/i,\n    function: /\\b[a-z_]\\w*(?=\\s*\\()/i,\n    boolean: /\\b(?:FALSE|TRUE)\\b/i,\n    number: /(?:\\b\\d+\\.|\\B\\.)\\d+e[+\\-]?\\d+\\b|\\b\\d+(?:\\.\\d*)?|\\B\\.\\d+\\b/i,\n    operator:\n      /[-+*\\/%]|!=|==?|\\|\\||<[>=]?|>=?|\\b(?:AND|ANY|ARRAY|BETWEEN|CASE|ELSE|END|EVERY|EXISTS|FIRST|IN|LIKE|NOT|OR|THEN|VALUED|WHEN|WITHIN)\\b/i,\n    punctuation: /[;[\\](),.{}:]/\n  }\n}\n\n\n//# sourceURL=webpack://screenshot-to-code/./node_modules/refractor/lang/n1ql.js?");

/***/ })

}]);