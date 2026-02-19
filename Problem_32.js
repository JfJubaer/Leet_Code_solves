/*
Find the Pivot Integer
Easy

Given a positive integer n, find the pivot integer x such that:

The sum of all elements between 1 and x inclusively equals the sum of all elements between x and n inclusively.
Return the pivot integer x. If no such integer exists, return -1. It is guaranteed that there will be at most one pivot index for the given input.

Examples:
Input: n = 8
Output: 6
Explanation: 1 + 2 + 3 + 4 + 5 + 6 = 6 + 7 + 8 = 21.

Input: n = 1
Output: 1
Explanation: 1 = 1.

Input: n = 4
Output: -1
Explanation: No such integer exists.
*/

/**
 * @param {number} n
 * @return {number}
 */
// Steps performed:
// 1. Calculate total sum from 1 to n.
// 2. For each x from 1 to n, check if sum(1..x) == sum(x..n).
// 3. Return x if found, else -1.

function pivotInteger(n) {
  const total = (n * (n + 1)) / 2;
  for (let x = 1; x <= n; x++) {
    const left = (x * (x + 1)) / 2;
    const right = total - ((x - 1) * x) / 2;
    if (left === right) return x;
  }
  return -1;
}

// Example usage:
console.log(pivotInteger(8)); // 6
console.log(pivotInteger(1)); // 1
console.log(pivotInteger(4)); // -1
