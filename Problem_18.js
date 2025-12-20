/*
Problem: Maximum Product of Two Elements in an Array
----------------------------------------------------
Given an array of integers nums, choose two different indices i and j. Return the maximum value 
of (nums[i]-1)*(nums[j]-1).

Examples:
---------
Input: nums = [3,4,5,2]
Output: 12
Explanation: Choose i=1, j=2: (4-1)*(5-1) = 3*4 = 12

Input: nums = [1,5,4,5]
Output: 16
Explanation: Choose i=1, j=3: (5-1)*(5-1) = 16

Input: nums = [3,7]
Output: 12

Approach:
---------
1. Find the two largest numbers in the array.
2. The answer is (max1-1)*(max2-1).
3. This is efficient and avoids checking all pairs.

Code:
-----
*/

function maxProduct(nums) {
  // Find the two largest numbers
  let max1 = 0,
    max2 = 0;
  for (let n of nums) {
    if (n > max1) {
      max2 = max1;
      max1 = n;
    } else if (n > max2) {
      max2 = n;
    }
  }
  // Compute the product as per the problem
  return (max1 - 1) * (max2 - 1);
}

// Example usage:
console.log(maxProduct([3, 4, 5, 2])); // Output: 12
console.log(maxProduct([1, 5, 4, 5])); // Output: 16
console.log(maxProduct([3, 7])); // Output: 12
