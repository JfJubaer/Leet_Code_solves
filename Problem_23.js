/*
1893. Check if All the Integers in a Range Are Covered
Easy

You are given a 2D integer array ranges and two integers left and right. 
Each ranges[i] = [starti, endi] represents an inclusive interval between starti and endi.

Return true if each integer in the inclusive range [left, right] is covered 
by at least one interval in ranges. Return false otherwise.

An integer x is covered by an interval ranges[i] = [starti, endi] if starti <= x <= endi.

Examples:
Input: ranges = [[1,2],[3,4],[5,6]], left = 2, right = 5
Output: true
Explanation: Every integer between 2 and 5 is covered:
- 2 is covered by the first range.
- 3 and 4 are covered by the second range.
- 5 is covered by the third range.

Input: ranges = [[1,10],[10,20]], left = 21, right = 21
Output: false
Explanation: 21 is not covered by any range.
*/

// Visual explanation for isCovered function:
// Example: ranges = [[1,2],[3,4],[5,6]], left = 2, right = 5
//
// Step 1: covered = [false, false, false, ..., false] (length 51)
//
// Step 2: Mark covered numbers:
//   - [1,2]  => covered[1] = true, covered[2] = true
//   - [3,4]  => covered[3] = true, covered[4] = true
//   - [5,6]  => covered[5] = true, covered[6] = true
//
// covered now looks like:
// Index: 0 1 2 3 4 5 6 ...
// Value: F T T T T T T ...
//
// Step 3: Check if all numbers from left=2 to right=5 are covered:
//   covered[2] = true
//   covered[3] = true
//   covered[4] = true
//   covered[5] = true
// All are true, so return true.
//
// Another example: ranges = [[1,10],[10,20]], left = 21, right = 21
//   covered[21] = false, so return false.
// LeetCode 1893: Check if All the Integers in a Range Are Covered

// Solution below

/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
function isCovered(ranges, left, right) {
  // Create a boolean array to mark covered numbers
  const covered = new Array(51).fill(false); // 1 <= left, right <= 50
  for (const [start, end] of ranges) {
    for (let i = start; i <= end; i++) {
      covered[i] = true;
    }
  }
  for (let i = left; i <= right; i++) {
    if (!covered[i]) return false;
  }
  return true;
}

// Example usage:
console.log(
  isCovered(
    [
      [1, 2],
      [3, 4],
      [5, 6],
    ],
    2,
    5,
  ),
); // true
console.log(
  isCovered(
    [
      [1, 10],
      [10, 20],
    ],
    21,
    21,
  ),
); // false
console.log(
  isCovered(
    [
      [1, 2],
      [2, 3],
      [3, 4],
    ],
    2,
    4,
  ),
); // true
