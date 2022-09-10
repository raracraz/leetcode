/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = [];
    var map = {
        "(": ")",
        "[": "]",
        "{": "}"
    };
    for (var i = 0; i < s.length; i++) {
        if (s[i] == "(" || s[i] == "[" || s[i] == "{") {
            stack.push(s[i]);
        } else {
            var last = stack.pop();
            if (s[i] != map[last]) {
                return false;
            }
        }
    }
    if (stack.length != 0) {
        return false;
    }
    return true;
};
// @lc code=end

