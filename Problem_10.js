/*
Problem: Partition Array Into Three Parts With Equal Sum
--------------------------------------------------------
Given an array of integers arr, return true if we can partition the array into three 
non-empty parts with equal sums.

Formally, we can partition the array if we can find indexes i + 1 < j such that:
  sum(arr[0] ... arr[i]) == sum(arr[i+1] ... arr[j-1]) == sum(arr[j] ... arr[arr.length-1])

Examples:
---------
Input: arr = [0,2,1,-6,6,-7,9,1,2,0,1]
Output: true
Explanation: 0+2+1 = -6+6-7+9+1 = 2+0+1

Input: arr = [0,2,1,-6,6,7,9,-1,2,0,1]
Output: false

Input: arr = [3,3,6,5,-2,2,5,1,-9,4]
Output: true
Explanation: 3+3 = 6 = 5-2+2+5+1-9+4

Approach:
---------
1. Calculate the total sum of the array.
2. If the total sum is not divisible by 3, return false.
3. The target sum for each part is totalSum / 3.
4. Iterate through the array, accumulating the sum.
   - When the accumulated sum equals the target, reset the sum and increase the count.
   - If you find 3 such parts before the end, return true.
5. If you can't find 3 parts, return false.

Code:
-----
*/

function canThreePartsEqualSum(arr) {
  const total = arr.reduce((a, b) => a + b, 0);
  if (total % 3 !== 0) return false;
  const target = total / 3;
  let sum = 0,
    count = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum === target) {
      count++;
      sum = 0;
    }
  }
  // We need at least 3 parts, so count >= 3
  return count >= 3;
}

// Example usage:
console.log(canThreePartsEqualSum([0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1])); // true
console.log(canThreePartsEqualSum([0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1])); // false
console.log(canThreePartsEqualSum([3, 3, 6, 5, -2, 2, 5, 1, -9, 4])); // true
