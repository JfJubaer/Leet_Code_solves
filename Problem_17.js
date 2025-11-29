/*
Problem: Find Lucky Integer in an Array
---------------------------------------
A lucky integer is an integer whose value is equal to its frequency in the array.
Return the largest lucky integer, or -1 if none exists.

Examples:
---------
Input: arr = [2,2,3,4]
Output: 2
Explanation: 2 appears 2 times, so it's lucky.

Input: arr = [1,2,2,3,3,3]
Output: 3
Explanation: 1 appears 1 time, 2 appears 2 times, 3 appears 3 times. Largest is 3.

Input: arr = [2,2,2,3,3]
Output: -1
Explanation: No number's value matches its frequency.

Approach:
---------
1. Count the frequency of each number in the array using an object.
2. For each unique number, check if its frequency equals its value.
3. Track the largest such number found.
4. If none found, return -1.

Code:
-----
*/

function findLucky(arr) {
  // Step 1: Count frequency of each number
  const freq = {};
  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }
  // Step 2: Check for lucky numbers and track the largest
  let result = -1;
  for (let num in freq) {
    // console.log(freq);
    // Convert num from string to number for comparison
    // console.log("keys:", num);
    if (parseInt(num) === freq[num]) {
      result = Math.max(result, parseInt(num));
    }
  }
  return result;
}

// Example usage:
console.log(findLucky([2, 2, 3, 4])); // Output: 2
// console.log(findLucky([1, 2, 2, 3, 3, 3])); // Output: 3
// console.log(findLucky([2, 2, 2, 3, 3])); // Output: -1
