/*
Problem: Convert Integer to the Sum of Two No-Zero Integers
-----------------------------------------------------------
A No-Zero integer is a positive integer that does not contain any 0 in its decimal representation.
Given an integer n, return a list of two integers [a, b] where:
  - a and b are No-Zero integers
  - a + b = n
The test cases guarantee at least one valid solution. If there are many, return any.

Examples:
---------
Input: n = 2
Output: [1,1]

Input: n = 11
Output: [2,9] (or [8,3], etc.)

Approach:
---------
1. Try all possible values for a from 1 to n-1.
2. Let b = n - a.
3. Check if both a and b are No-Zero integers (no digit is 0).
4. Return the first valid pair found.

Helper function:
----------------
isNoZero(x): returns true if x contains no 0 digits.

Code:
-----
*/

function isNoZero(x) {
  return !x.toString().includes("0");
}

function getNoZeroIntegers(n) {
  for (let a = 1; a < n; a++) {
    let b = n - a;
    if (isNoZero(a) && isNoZero(b)) {
      return [a, b];
    }
  }
  // The problem guarantees there is always a solution
  return [];
}

// Example usage:
console.log(getNoZeroIntegers(2)); // Output: [1,1]
console.log(getNoZeroIntegers(11)); // Output: [2,9] or [8,3], etc.
