/*
 * @lc app=leetcode id=10 lang=javascript
 *
 * [10] Regular Expression Matching
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    if (p.length === 0) {
        return s.length === 0;
    }
    let firstMatch = s.length > 0 && (p[0] === s[0] || p[0] === '.');
    if (p.length >= 2 && p[1] === '*') {
        return isMatch(s, p.substring(2)) || (firstMatch && isMatch(s.substring(1), p));
    } else {
        return firstMatch && isMatch(s.substring(1), p.substring(1));
    }
};
// @lc code=end

