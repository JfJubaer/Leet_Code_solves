/*
Array Prototype Last
Easy

Write code that enhances all arrays such that you can call the array.last() method on any array 
and it will return the last element. If there are no elements in the array, it should return -1.

You may assume the array is the output of JSON.parse.

Examples:
Input: nums = [null, {}, 3]
Output: 3
Explanation: Calling nums.last() should return the last element: 3.

Input: nums = []
Output: -1
Explanation: Because there are no elements, return -1.

Problem Explanation:

You are asked to enhance all arrays in JavaScript so that you can call a method last() on any 
array. This method should return the last element of the array. If the array is empty, 
it should return -1. For example, calling [null, {}, 3].last() should return 3, and 
[].last() should return -1.

Solution:

Add a method last to Array.prototype.
If the array is empty, return -1.
Otherwise, return the last element.
The solution and example usage have been added to Problem_34.js, following the style of the 
previous file. Let me know if you need further explanation or testing!


*/

// Steps performed:
// 1. Add a method 'last' to Array.prototype.
// 2. If the array is empty, return -1.
// 3. Otherwise, return the last element.

Array.prototype.last = function () {
  if (this.length === 0) return -1;
  return this[this.length - 1];
};

// Example usage:
const nums1 = [null, {}, 3];
console.log(nums1.last()); // 3

const nums2 = [];
console.log(nums2.last()); // -1
