/*
Divide Array Into Equal Pairs
Easy

You are given an integer array nums consisting of 2 * n integers.

You need to divide nums into n pairs such that:

Each element belongs to exactly one pair.
The elements present in a pair are equal.
Return true if nums can be divided into n pairs, otherwise return false.

Examples:
Input: nums = [3,2,3,2,2,2]
Output: true
Explanation:
There are 6 elements in nums, so they should be divided into 6 / 2 = 3 pairs.
If nums is divided into the pairs (2, 2), (3, 3), and (2, 2), it will satisfy all the 
conditions.

Input: nums = [1,2,3,4]
Output: false
Explanation:
There is no way to divide nums into 4 / 2 = 2 pairs such that the pairs satisfy every 
condition.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Steps performed:
// 1. Count the frequency of each number in the array.
// 2. Check if every number appears an even number of times.
// 3. If all numbers have even frequency, return true. Otherwise, return false.

function divideArray(nums) {
  // Step 1: Create an object to store the frequency of each number
  const freq = {};
  // Step 2: Loop through each number in the array
  for (const num of nums) {
    // If the number is not in freq, initialize it to 0, then add 1
    freq[num] = (freq[num] || 0) + 1;
  }
  // Step 3: Check if every frequency is even
  for (const count of Object.values(freq)) {
    // If any count is odd, it's not possible to pair all elements
    if (count % 2 !== 0) return false;
  }
  // If all counts are even, return true
  return true;
}

// Example usage:
console.log(divideArray([3, 2, 3, 2, 2, 2])); // true
console.log(divideArray([1, 2, 3, 4])); // false
