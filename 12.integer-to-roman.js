/*
 * @lc app=leetcode id=12 lang=javascript
 *
 * [12] Integer to Roman
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var def = {
        1: "I",
        4: "IV",
        5: "V",
        9: "IX",
        10: "X",
        40: "XL",
        50: "L",
        90: "XC",
        100: "C",
        400: "CD",
        500: "D",
        900: "CM",
        1000: "M",
    }
    var str = (num).toString()
    var total = "";
    for (var i = 0; i < str.length; i++) {
        var digit = str[i];
        var base = Math.pow(10, str.length - i - 1);
        var base2 = base * 5;
        var base3 = base * 10;
        if (digit == 0) {
            continue;
        }
        if (digit < 4) {
            for (var j = 0; j < digit; j++) {
                total += def[base];
            }
        } else if (digit == 4) {
            total += def[base] + def[base2];
        } else if (digit == 5) {
            total += def[base2];
        } else if (digit > 5 && digit < 9) {
            total += def[base2];
            for (var j = 0; j < digit - 5; j++) {
                total += def[base];
            }
        } else if (digit == 9) {
            total += def[base] + def[base3];
        }
    }
    return total;
}
// @lc code=end

