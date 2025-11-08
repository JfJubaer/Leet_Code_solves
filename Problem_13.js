/*
Problem: Find N Unique Integers Sum up to Zero
-----------------------------------------------
Given an integer n, return any array containing n unique integers such that they add up to 0.

Examples:
---------
Input: n = 5
Output: [-7,-1,1,3,4] (any array of 5 unique numbers that sum to 0 is valid)

Input: n = 3
Output: [-1,0,1]

Input: n = 1
Output: [0]

Approach:
---------
To get n unique numbers that sum to 0, you can:
- Pair numbers as x and -x (e.g., 1 and -1, 2 and -2, ...)
- If n is odd, include 0 as well.

Code:
-----
*/

function sumZero(n) {
  const res = [];
  for (let i = 1; i <= Math.floor(n / 2); i++) {
    res.push(i, -i); // Add pairs (i, -i)
  }
  if (n % 2 === 1) res.push(0); // If n is odd, add 0
  return res;
}

// Example usage:
console.log(sumZero(5)); // Output: e.g. [-1,1,-2,2,0]
console.log(sumZero(3)); // Output: e.g. [-1,1,0]
console.log(sumZero(1)); // Output: [0]
