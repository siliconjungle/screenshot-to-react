"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkscreenshot_to_code"] = self["webpackChunkscreenshot_to_code"] || []).push([["react-syntax-highlighter_languages_refractor_git"],{

/***/ "./node_modules/refractor/lang/git.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/git.js ***!
  \********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = git\ngit.displayName = 'git'\ngit.aliases = []\nfunction git(Prism) {\n  Prism.languages.git = {\n    /*\n     * A simple one line comment like in a git status command\n     * For instance:\n     * $ git status\n     * # On branch infinite-scroll\n     * # Your branch and 'origin/sharedBranches/frontendTeam/infinite-scroll' have diverged,\n     * # and have 1 and 2 different commits each, respectively.\n     * nothing to commit (working directory clean)\n     */\n    comment: /^#.*/m,\n    /*\n     * Regexp to match the changed lines in a git diff output. Check the example below.\n     */\n    deleted: /^[-–].*/m,\n    inserted: /^\\+.*/m,\n    /*\n     * a string (double and simple quote)\n     */\n    string: /(\"|')(?:\\\\.|(?!\\1)[^\\\\\\r\\n])*\\1/,\n    /*\n     * a git command. It starts with a random prompt finishing by a $, then \"git\" then some other parameters\n     * For instance:\n     * $ git add file.txt\n     */\n    command: {\n      pattern: /^.*\\$ git .*$/m,\n      inside: {\n        /*\n         * A git command can contain a parameter starting by a single or a double dash followed by a string\n         * For instance:\n         * $ git diff --cached\n         * $ git log -p\n         */\n        parameter: /\\s--?\\w+/\n      }\n    },\n    /*\n     * Coordinates displayed in a git diff command\n     * For instance:\n     * $ git diff\n     * diff --git file.txt file.txt\n     * index 6214953..1d54a52 100644\n     * --- file.txt\n     * +++ file.txt\n     * @@ -1 +1,2 @@\n     * -Here's my tetx file\n     * +Here's my text file\n     * +And this is the second line\n     */\n    coord: /^@@.*@@$/m,\n    /*\n     * Match a \"commit [SHA1]\" line in a git log output.\n     * For instance:\n     * $ git log\n     * commit a11a14ef7e26f2ca62d4b35eac455ce636d0dc09\n     * Author: lgiraudel\n     * Date:   Mon Feb 17 11:18:34 2014 +0100\n     *\n     *     Add of a new line\n     */\n    'commit-sha1': /^commit \\w{40}$/m\n  }\n}\n\n\n//# sourceURL=webpack://screenshot-to-code/./node_modules/refractor/lang/git.js?");

/***/ })

}]);