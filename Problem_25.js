/*
2022. Convert 1D Array Into 2D Array
Easy

You are given a 0-indexed 1-dimensional (1D) integer array original, and two integers, m and n.
You are tasked with creating a 2-dimensional (2D) array with m rows and n columns using all the elements from original.

The elements from indices 0 to n - 1 (inclusive) of original should form the first row of the constructed 2D array,
the elements from indices n to 2 * n - 1 (inclusive) should form the second row of the constructed 2D array, and so on.

Return an m x n 2D array constructed according to the above procedure, or an empty 2D array if it is impossible.

Examples:
Input: original = [1,2,3,4], m = 2, n = 2
Output: [[1,2],[3,4]]

Input: original = [1,2,3], m = 1, n = 3
Output: [[1,2,3]]

Input: original = [1,2], m = 1, n = 1
Output: []
Explanation: It is impossible to fit 2 elements in a 1x1 2D array, so return an empty 2D array.
*/

// Visual explanation for construct2DArray function:
// Example: original = [1,2,3,4], m = 2, n = 2
// Step 1: Check if m * n === original.length
// Step 2: Group every n elements into a row
// Step 3: Return the constructed 2D array

/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
function construct2DArray(original, m, n) {
  if (original.length !== m * n) return [];
  const result = [];
  for (let i = 0; i < m; i++) {
    result.push(original.slice(i * n, (i + 1) * n));
  }
  return result;
}

// Example usage:
console.log(construct2DArray([1, 2, 3, 4], 2, 2)); // [[1,2],[3,4]]
console.log(construct2DArray([1, 2, 3], 1, 3)); // [[1,2,3]]
console.log(construct2DArray([1, 2], 1, 1)); // []
