/*
 * @lc app=leetcode id=338 lang=javascript
 *
 * [338] Counting Bits
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let result = [0]
    for (let i = 1; i <= n; i++) {
        result[i] = result[i >> 1] + (i & 1)
    }
    return result
};
// @lc code=end

