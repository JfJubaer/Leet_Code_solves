/*
Maximum Count of Positive Integer and Negative Integer
Easy

Given an array nums sorted in non-decreasing order, return the maximum between the number of positive integers and the number of negative integers.

In other words, if the number of positive integers in nums is pos and the number of negative integers is neg, then return the maximum of pos and neg.
Note that 0 is neither positive nor negative.

Examples:
Input: nums = [-2,-1,-1,1,2,3]
Output: 3
Explanation: There are 3 positive integers and 3 negative integers. The maximum count among them is 3.

Input: nums = [-3,-2,-1,0,0,1,2]
Output: 3
Explanation: There are 2 positive integers and 3 negative integers. The maximum count among them is 3.

Input: nums = [5,20,66,1314]
Output: 4
Explanation: There are 4 positive integers and 0 negative integers. The maximum count among them is 4.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
// Steps performed:
// 1. Count negative integers (nums < 0).
// 2. Count positive integers (nums > 0).
// 3. Return the maximum of both counts.

function maximumCount(nums) {
  let pos = 0,
    neg = 0;
  for (const n of nums) {
    if (n > 0) pos++;
    else if (n < 0) neg++;
  }
  return Math.max(pos, neg);
}

// Example usage:
console.log(maximumCount([-2, -1, -1, 1, 2, 3])); // 3
console.log(maximumCount([-3, -2, -1, 0, 0, 1, 2])); // 3
console.log(maximumCount([5, 20, 66, 1314])); // 4
