"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkscreenshot_to_code"] = self["webpackChunkscreenshot_to_code"] || []).push([["react-syntax-highlighter_languages_refractor_asm6502"],{

/***/ "./node_modules/refractor/lang/asm6502.js":
/*!************************************************!*\
  !*** ./node_modules/refractor/lang/asm6502.js ***!
  \************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = asm6502\nasm6502.displayName = 'asm6502'\nasm6502.aliases = []\nfunction asm6502(Prism) {\n  Prism.languages.asm6502 = {\n    comment: /;.*/,\n    directive: {\n      pattern: /\\.\\w+(?= )/,\n      alias: 'property'\n    },\n    string: /([\"'`])(?:\\\\.|(?!\\1)[^\\\\\\r\\n])*\\1/,\n    'op-code': {\n      pattern:\n        /\\b(?:ADC|AND|ASL|BCC|BCS|BEQ|BIT|BMI|BNE|BPL|BRK|BVC|BVS|CLC|CLD|CLI|CLV|CMP|CPX|CPY|DEC|DEX|DEY|EOR|INC|INX|INY|JMP|JSR|LDA|LDX|LDY|LSR|NOP|ORA|PHA|PHP|PLA|PLP|ROL|ROR|RTI|RTS|SBC|SEC|SED|SEI|STA|STX|STY|TAX|TAY|TSX|TXA|TXS|TYA|adc|and|asl|bcc|bcs|beq|bit|bmi|bne|bpl|brk|bvc|bvs|clc|cld|cli|clv|cmp|cpx|cpy|dec|dex|dey|eor|inc|inx|iny|jmp|jsr|lda|ldx|ldy|lsr|nop|ora|pha|php|pla|plp|rol|ror|rti|rts|sbc|sec|sed|sei|sta|stx|sty|tax|tay|tsx|txa|txs|tya)\\b/,\n      alias: 'keyword'\n    },\n    'hex-number': {\n      pattern: /#?\\$[\\da-f]{1,4}\\b/i,\n      alias: 'number'\n    },\n    'binary-number': {\n      pattern: /#?%[01]+\\b/,\n      alias: 'number'\n    },\n    'decimal-number': {\n      pattern: /#?\\b\\d+\\b/,\n      alias: 'number'\n    },\n    register: {\n      pattern: /\\b[xya]\\b/i,\n      alias: 'variable'\n    },\n    punctuation: /[(),:]/\n  }\n}\n\n\n//# sourceURL=webpack://screenshot-to-code/./node_modules/refractor/lang/asm6502.js?");

/***/ })

}]);