/*
1822. Sign of the Product of an Array
Easy

You are given an integer array nums. Let product be the product of all values in the array nums.

Implement a function signFunc(x) that returns:
	1 if x is positive.
	-1 if x is negative.
	0 if x is equal to 0.

Return signFunc(product).

Examples:
Input: nums = [-1,-2,-3,-4,3,2,1]
Output: 1
Explanation: The product of all values in the array is 144, and signFunc(144) = 1

Input: nums = [1,5,0,2,-3]
Output: 0
Explanation: The product of all values in the array is 0, and signFunc(0) = 0

Input: nums = [-1,1,-1,1,-1]
Output: -1
Explanation: The product of all values in the array is -1, and signFunc(-1) = -1
*/
// LeetCode 1822: Sign of the Product of an Array

// Solution below

/**
 * @param {number[]} nums
 * @return {number}
 */
function arraySign(nums) {
  // Step 1: Initialize sign as 1
  let sign = 1;
  // Step 2: Iterate through the array
  for (let num of nums) {
    // If any number is 0, the product is 0
    if (num === 0) return 0;
    // Flip sign for each negative number
    if (num < 0) sign *= -1;
  }
  // Step 3: Return the sign
  return sign;
}

// Example usage:
// console.log(arraySign([-1,-2,-3,-4,3,2,1])); // Output: 1
// console.log(arraySign([1,5,0,2,-3])); // Output: 0
// console.log(arraySign([-1,1,-1,1,-1])); // Output: -1
/**
 * @param {number[]} nums
 * @return {number}
 */

function signFunc(x) {
  if (x > 0) return 1;
  if (x < 0) return -1;
  return 0;
}

function arraySign(nums) {
  // Step 1: Calculate the product of the array
  let product = 1;
  for (let num of nums) {
    product *= num;
  }
  // Step 2: Return the sign using signFunc
  return signFunc(product);
}

// Example usage:
console.log(arraySign([-1, -2, -3, -4, 3, 2, 1])); // 1
console.log(arraySign([1, 5, 0, 2, -3])); // 0
console.log(arraySign([-1, 1, -1, 1, -1])); // -1
