/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
//    definitions json
var def = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
}

var romanToInt = function (s) {
    var str = (s).toString()
    //     main logic
    var total = 0;
    for (var i = 0; i < str.length; i++) {
        total += def[s[i]];
        if (s[i] == "I" && (s[i + 1] == "V" || s[i + 1] == "X")) {
            total -= 2;
        }
        if (s[i] == "X" && (s[i + 1] == "L" || s[i + 1] == "C")) {
            total -= 20;
        }
        if (s[i] == "C" && (s[i + 1] == "D" || s[i + 1] == "M")) {
            total -= 200;
        }
    }
    return total;
};
// @lc code=end

