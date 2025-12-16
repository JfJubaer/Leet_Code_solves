/*
Problem: Can Make Arithmetic Progression From Sequence
-------------------------------------------------------
A sequence of numbers is an arithmetic progression if the difference between any two consecutive elements is the same.
Given an array arr, return true if the array can be rearranged to form an arithmetic progression, otherwise return false.

Examples:
---------
Input: arr = [3,5,1]
Output: true
Explanation: Reorder as [1,3,5] (difference is 2 between each pair).

Input: arr = [1,2,4]
Output: false
Explanation: No way to reorder to get equal differences.

Approach:
---------
1. Sort the array.
2. Compute the difference between the first two elements.
3. Check if every consecutive pair has the same difference.
4. If all differences are equal, return true; otherwise, return false.

Code:
-----
*/

function canMakeArithmeticProgression(arr) {
  arr.sort((a, b) => a - b); // Sort the array
  const diff = arr[1] - arr[0]; // Common difference
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== diff) {
      return false;
    }
  }
  return true;
}

// Example usage:
console.log(canMakeArithmeticProgression([3, 5, 1])); // Output: true
console.log(canMakeArithmeticProgression([1, 2, 4])); // Output: false
