/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    var prefix = "";
    for (var i = 0; i < strs.length; i++) {
        var str = strs[i]
        if (i == 0) {
            prefix = str;
        } else {
            var j = 0;
            while (j < prefix.length && j < str.length) {
                if (prefix[j] != str[j]) {
                    break;
                }
                j++;
            }
            prefix = prefix.substring(0, j);
        }
    }
    return prefix;
};
// @lc code=end

