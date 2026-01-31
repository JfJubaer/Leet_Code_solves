/*
1913. Maximum Product Difference Between Two Pairs
Easy

The product difference between two pairs (a, b) and (c, d) is defined as (a * b) - (c * d).

For example, the product difference between (5, 6) and (2, 7) is (5 * 6) - (2 * 7) = 16.
Given an integer array nums, choose four distinct indices w, x, y, and z such that the product 
difference between pairs (nums[w], nums[x]) and (nums[y], nums[z]) is maximized.

Return the maximum such product difference.

Examples:
Input: nums = [5,6,2,7,4]
Output: 34
Explanation: We can choose indices 1 and 3 for the first pair (6, 7) and indices 2 and 4 for the 
second pair (2, 4).
The product difference is (6 * 7) - (2 * 4) = 34.

Input: nums = [4,2,5,9,7,4,8]
Output: 64
Explanation: We can choose indices 3 and 6 for the first pair (9, 8) and indices 1 and 5 for the 
second pair (2, 4).
The product difference is (9 * 8) - (2 * 4) = 64.
*/

// Visual explanation for maxProductDifference function:
// Example: nums = [5,6,2,7,4]
// Step 1: Sort the array: [2,4,5,6,7]
// Step 2: The two largest numbers: 6, 7
//         The two smallest numbers: 2, 4
// Step 3: Compute (6*7) - (2*4) = 42 - 8 = 34

/**
 * @param {number[]} nums
 * @return {number}
 */
function maxProductDifference(nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  return nums[n - 1] * nums[n - 2] - nums[0] * nums[1];
}

// Example usage:
console.log(maxProductDifference([5, 6, 2, 7, 4])); // 34
console.log(maxProductDifference([4, 2, 5, 9, 7, 4, 8])); // 64
