#
# @lc app=leetcode id=344 lang=python
#
# [344] Reverse String
#

# @lc code=start
class Solution(object):
    def reverseString(self, s):
        """
        :type s: List[str]
        :rtype: None Do not return anything, modify s in-place instead.
        """
        length = len(s)
        for i in range(length // 2):
            s[i], s[length - i - 1] = s[length - i - 1], s[i]

# @lc code=end

