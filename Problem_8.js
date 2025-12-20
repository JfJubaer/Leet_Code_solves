/*
Problem: Add to Array-Form of Integer
--------------------------------------
The array-form of an integer num is an array representing its digits in left
 to right order.
For example, for num = 1321, the array form is [1,3,2,1].
Given num (as an array) and an integer k, return the array-form of the integer
 num + k.

Examples:
---------
Example 1:
Input: num = [1,2,0,0], k = 34
Output: [1,2,3,4]
Explanation: 1200 + 34 = 1234

Example 2:
Input: num = [2,7,4], k = 181
Output: [4,5,5]
Explanation: 274 + 181 = 455

Example 3:
Input: num = [2,1,5], k = 806
Output: [1,0,2,1]
Explanation: 215 + 806 = 1021

Approach:
---------
- Start from the end of the num array (least significant digit).
- Add k to the current digit, handle carry if sum >= 10.
- Continue until both num and k are processed.
- If there is a carry left, add it to the front.
- Return the result as an array.

Code:
-----
*/

function addToArrayForm(num, k) {
  let res = [];
  let i = num.length - 1;
  // Process from the last digit to the first, adding k
  while (i >= 0 || k > 0) {
    if (i >= 0) k += num[i--]; // Add current digit to k
    res.push(k % 10); // Push the last digit of k to result
    k = Math.floor(k / 10); // Remove the last digit from k
  }
  res.reverse(); // Reverse to get the correct order
  return res;
}

// Example usage:
console.log(addToArrayForm([1, 2, 0, 0], 34)); // Output: [1,2,3,4]
console.log(addToArrayForm([2, 7, 4], 181)); // Output: [4,5,5]
console.log(addToArrayForm([2, 1, 5], 806)); // Output: [1,0,2,1]
