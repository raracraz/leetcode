--
-- @lc app=leetcode id=182 lang=mysql
--
-- [182] Duplicate Emails
--

-- @lc code=start
# Write your MySQL query statement below
SELECT 
    Email
FROM
    Person
GROUP BY email
HAVING COUNT(email) > 1;
-- @lc code=end

