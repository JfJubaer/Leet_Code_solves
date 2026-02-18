/*
Largest Positive Integer That Exists With Its Negative
Easy

Given an integer array nums that does not contain any zeros, find the largest positive integer k such that -k also exists in the array.

Return the positive integer k. If there is no such integer, return -1.

Examples:
Input: nums = [-1,2,-3,3]
Output: 3
Explanation: 3 is the only valid k we can find in the array.

Input: nums = [-1,10,6,7,-7,1]
Output: 7
Explanation: Both 1 and 7 have their corresponding negative values in the array. 7 has a larger value.

Input: nums = [-10,8,6,7,-2,-3]
Output: -1
Explanation: There is no a single valid k, we return -1.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
// Steps performed:
// 1. Store all numbers in a Set for O(1) lookup.
// 2. Iterate through nums, for each positive number, check if its negative exists.
// 3. Track the largest such positive number.
// 4. Return the largest found, or -1 if none.

function findMaxK(nums) {
  const numSet = new Set(nums);
  console.log("new set", numSet);
  let maxK = -1;
  for (const n of nums) {
    if (n > 0 && numSet.has(-n)) {
      maxK = Math.max(maxK, n);
    }
  }
  return maxK;
}

// Example usage:
console.log(findMaxK([-1, 2, -3, 3])); // 3
console.log(findMaxK([-1, 10, 6, 7, -7, 1])); // 7
console.log(findMaxK([-10, 8, 6, 7, -2, -3])); // -1
