"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkscreenshot_to_code"] = self["webpackChunkscreenshot_to_code"] || []).push([["react-syntax-highlighter_languages_refractor_cil"],{

/***/ "./node_modules/refractor/lang/cil.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/cil.js ***!
  \********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = cil\ncil.displayName = 'cil'\ncil.aliases = []\nfunction cil(Prism) {\n  Prism.languages.cil = {\n    comment: /\\/\\/.*/,\n    string: {\n      pattern: /([\"'])(?:\\\\(?:\\r\\n|[\\s\\S])|(?!\\1)[^\\\\\\r\\n])*\\1/,\n      greedy: true\n    },\n    directive: {\n      pattern: /(^|\\W)\\.[a-z]+(?=\\s)/,\n      lookbehind: true,\n      alias: 'class-name'\n    },\n    // Actually an assembly reference\n    variable: /\\[[\\w\\.]+\\]/,\n    keyword:\n      /\\b(?:abstract|ansi|assembly|auto|autochar|beforefieldinit|bool|bstr|byvalstr|catch|char|cil|class|currency|date|decimal|default|enum|error|explicit|extends|extern|famandassem|family|famorassem|final(?:ly)?|float32|float64|hidebysig|u?int(?:8|16|32|64)?|iant|idispatch|implements|import|initonly|instance|interface|iunknown|literal|lpstr|lpstruct|lptstr|lpwstr|managed|method|native(?:Type)?|nested|newslot|object(?:ref)?|pinvokeimpl|private|privatescope|public|reqsecobj|rtspecialname|runtime|sealed|sequential|serializable|specialname|static|string|struct|syschar|tbstr|unicode|unmanagedexp|unsigned|value(?:type)?|variant|virtual|void)\\b/,\n    function:\n      /\\b(?:(?:constrained|no|readonly|tail|unaligned|volatile)\\.)?(?:conv\\.(?:[iu][1248]?|ovf\\.[iu][1248]?(?:\\.un)?|r\\.un|r4|r8)|ldc\\.(?:i4(?:\\.\\d+|\\.[mM]1|\\.s)?|i8|r4|r8)|ldelem(?:\\.[iu][1248]?|\\.r[48]|\\.ref|a)?|ldind\\.(?:[iu][1248]?|r[48]|ref)|stelem\\.?(?:i[1248]?|r[48]|ref)?|stind\\.(?:i[1248]?|r[48]|ref)?|end(?:fault|filter|finally)|ldarg(?:\\.[0-3s]|a(?:\\.s)?)?|ldloc(?:\\.\\d+|\\.s)?|sub(?:\\.ovf(?:\\.un)?)?|mul(?:\\.ovf(?:\\.un)?)?|add(?:\\.ovf(?:\\.un)?)?|stloc(?:\\.[0-3s])?|refany(?:type|val)|blt(?:\\.un)?(?:\\.s)?|ble(?:\\.un)?(?:\\.s)?|bgt(?:\\.un)?(?:\\.s)?|bge(?:\\.un)?(?:\\.s)?|unbox(?:\\.any)?|init(?:blk|obj)|call(?:i|virt)?|brfalse(?:\\.s)?|bne\\.un(?:\\.s)?|ldloca(?:\\.s)?|brzero(?:\\.s)?|brtrue(?:\\.s)?|brnull(?:\\.s)?|brinst(?:\\.s)?|starg(?:\\.s)?|leave(?:\\.s)?|shr(?:\\.un)?|rem(?:\\.un)?|div(?:\\.un)?|clt(?:\\.un)?|alignment|castclass|ldvirtftn|beq(?:\\.s)?|ckfinite|ldsflda|ldtoken|localloc|mkrefany|rethrow|cgt\\.un|arglist|switch|stsfld|sizeof|newobj|newarr|ldsfld|ldnull|ldflda|isinst|throw|stobj|stfld|ldstr|ldobj|ldlen|ldftn|ldfld|cpobj|cpblk|break|br\\.s|xor|shl|ret|pop|not|nop|neg|jmp|dup|cgt|ceq|box|and|or|br)\\b/,\n    boolean: /\\b(?:false|true)\\b/,\n    number: /\\b-?(?:0x[0-9a-f]+|\\d+)(?:\\.[0-9a-f]+)?\\b/i,\n    punctuation: /[{}[\\];(),:=]|IL_[0-9A-Za-z]+/\n  }\n}\n\n\n//# sourceURL=webpack://screenshot-to-code/./node_modules/refractor/lang/cil.js?");

/***/ })

}]);