/*
Problem: Two Sum
----------------
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Examples:
---------
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Input: nums = [3,2,4], target = 6
Output: [1,2]

Input: nums = [3,3], target = 6
Output: [0,1]

Approach:
---------
1. Use a hash map (object) to store each number's index as you iterate through the array.
2. For each number, check if (target - number) exists in the map.
3. If it does, return the indices.
4. This approach is efficient (O(n) time).

Code:
-----
*/

function twoSum(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.hasOwnProperty(complement)) {
      return [map[complement], i];
    }
    map[nums[i]] = i;
  }
  // If no solution found (shouldn't happen per problem statement)
  return [];
}

// Example usage:
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0,1]
console.log(twoSum([3, 2, 4], 6)); // Output: [1,2]
console.log(twoSum([3, 3], 6)); // Output: [0,1]
