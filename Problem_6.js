/*
628. Maximum Product of Three Numbers
-------------------------------------
Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

Key Points:
- The array may contain both positive and negative numbers.
- The maximum product can be from:
	1. The three largest numbers (all positive or all negative if array is all negative)
	2. The two smallest (most negative) numbers and the largest number (since negative * negative = positive)

Approach:
---------
1. Sort the array.
2. Compute the product of the three largest numbers.
3. Compute the product of the two smallest and the largest number.
4. Return the maximum of these two products.

Examples:
---------
maximumProduct([1,2,3])        // Output: 6 (1*2*3)
maximumProduct([1,2,3,4])      // Output: 24 (2*3*4)
maximumProduct([-1,-2,-3])     // Output: -6 (-1*-2*-3)
maximumProduct([-10,-10,5,2])  // Output: 500 (-10*-10*5)
*/

function maximumProduct(nums) {
  // Sort the array in ascending order
  nums.sort((a, b) => a - b);
  const n = nums.length;
  // Compute the product of the three largest numbers
  const prod1 = nums[n - 1] * nums[n - 2] * nums[n - 3];
  // Compute the product of the two smallest and the largest number
  const prod2 = nums[0] * nums[1] * nums[n - 1];
  // Return the maximum of the two products
  return Math.max(prod1, prod2);
}

// Example usage:
console.log(maximumProduct([1, 2, 3])); // Output: 6
console.log(maximumProduct([1, 2, 3, 4])); // Output: 24
console.log(maximumProduct([-1, -2, -3])); // Output: -6
console.log(maximumProduct([-10, -10, 5, 2])); // Output: 500
