/*
Add Two Integers
Easy

Given two integers num1 and num2, return the sum of the two integers.

Examples:
Input: num1 = 12, num2 = 5
Output: 17
Explanation: num1 is 12, num2 is 5, and their sum is 12 + 5 = 17, so 17 is returned.

Input: num1 = -10, num2 = 4
Output: -6
Explanation: num1 + num2 = -6, so -6 is returned.
*/

/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
// Steps performed:
// 1. Return the sum of num1 and num2.

function addTwoIntegers(num1, num2) {
  return num1 + num2;
}

// Example usage:
console.log(addTwoIntegers(12, 5)); // 17
console.log(addTwoIntegers(-10, 4)); // -6
