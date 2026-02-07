/*
Intersection of Multiple Arrays
Easy

Given a 2D integer array nums where nums[i] is a non-empty array of distinct positive integers, return the list of integers that are present in each array of nums sorted in ascending order.

Examples:
Input: nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]
Output: [3,4]
Explanation: The only integers present in each of nums[0] = [3,1,2,4,5], nums[1] = [1,2,3,4], and nums[2] = [3,4,5,6] are 3 and 4, so we return [3,4].

Input: nums = [[1,2,3],[4,5,6]]
Output: []
Explanation: There does not exist any integer present both in nums[0] and nums[1], so we return an empty list [].
*/

/**
 * @param {number[][]} nums
 * @return {number[]}
 */
// Steps performed:
// 1. Start with the set of the first array.
// 2. Intersect with sets of all other arrays.
// 3. Convert the result to an array and sort in ascending order.

function intersection(nums) {
  let intersect = new Set(nums[0]);
  for (let i = 1; i < nums.length; i++) {
    intersect = new Set([...intersect].filter((x) => nums[i].includes(x)));
  }
  return [...intersect].sort((a, b) => a - b);
}

// Example usage:
console.log(
  intersection([
    [3, 1, 2, 4, 5],
    [1, 2, 3, 4],
    [3, 4, 5, 6],
  ]),
); // [3, 4]
console.log(
  intersection([
    [1, 2, 3],
    [4, 5, 6],
  ]),
); // []
