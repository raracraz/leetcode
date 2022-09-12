/*
 * @lc app=leetcode id=181 lang=javascript
 *
 * [181] Employees Earning More Than Their Managers
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    var v1 = version1.split(".");
    var v2 = version2.split(".");
    var n = Math.max(v1.length, v2.length);
    for (var i = 0; i < n; i++) {
        var a = v1[i] ? parseInt(v1[i]) : 0;
        var b = v2[i] ? parseInt(v2[i]) : 0;
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        }
    }
    return 0;
};
// @lc code=end

