"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkscreenshot_to_code"] = self["webpackChunkscreenshot_to_code"] || []).push([["react-syntax-highlighter_languages_refractor_dnsZoneFile"],{

/***/ "./node_modules/refractor/lang/dns-zone-file.js":
/*!******************************************************!*\
  !*** ./node_modules/refractor/lang/dns-zone-file.js ***!
  \******************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = dnsZoneFile\ndnsZoneFile.displayName = 'dnsZoneFile'\ndnsZoneFile.aliases = []\nfunction dnsZoneFile(Prism) {\n  Prism.languages['dns-zone-file'] = {\n    comment: /;.*/,\n    string: {\n      pattern: /\"(?:\\\\.|[^\"\\\\\\r\\n])*\"/,\n      greedy: true\n    },\n    variable: [\n      {\n        pattern: /(^\\$ORIGIN[ \\t]+)\\S+/m,\n        lookbehind: true\n      },\n      {\n        pattern: /(^|\\s)@(?=\\s|$)/,\n        lookbehind: true\n      }\n    ],\n    keyword: /^\\$(?:INCLUDE|ORIGIN|TTL)(?=\\s|$)/m,\n    class: {\n      // https://tools.ietf.org/html/rfc1035#page-13\n      pattern: /(^|\\s)(?:CH|CS|HS|IN)(?=\\s|$)/,\n      lookbehind: true,\n      alias: 'keyword'\n    },\n    type: {\n      // https://en.wikipedia.org/wiki/List_of_DNS_record_types\n      pattern:\n        /(^|\\s)(?:A|A6|AAAA|AFSDB|APL|ATMA|CAA|CDNSKEY|CDS|CERT|CNAME|DHCID|DLV|DNAME|DNSKEY|DS|EID|GID|GPOS|HINFO|HIP|IPSECKEY|ISDN|KEY|KX|LOC|MAILA|MAILB|MB|MD|MF|MG|MINFO|MR|MX|NAPTR|NB|NBSTAT|NIMLOC|NINFO|NS|NSAP|NSAP-PTR|NSEC|NSEC3|NSEC3PARAM|NULL|NXT|OPENPGPKEY|PTR|PX|RKEY|RP|RRSIG|RT|SIG|SINK|SMIMEA|SOA|SPF|SRV|SSHFP|TA|TKEY|TLSA|TSIG|TXT|UID|UINFO|UNSPEC|URI|WKS|X25)(?=\\s|$)/,\n      lookbehind: true,\n      alias: 'keyword'\n    },\n    punctuation: /[()]/\n  }\n  Prism.languages['dns-zone'] = Prism.languages['dns-zone-file']\n}\n\n\n//# sourceURL=webpack://screenshot-to-code/./node_modules/refractor/lang/dns-zone-file.js?");

/***/ })

}]);