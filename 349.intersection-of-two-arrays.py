#
# @lc app=leetcode id=349 lang=python
#
# [349] Intersection of Two Arrays
#

# @lc code=start
class Solution(object):
    def intersection(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: List[int]
        """
        rtn = []
        for i in nums1:
            if i in nums2:
                rtn.append(i)
        return list(set(rtn))
        

# @lc code=end

