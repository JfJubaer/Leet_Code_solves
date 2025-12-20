/*
Problem: Sort Integers by The Number of 1 Bits
----------------------------------------------
You are given an integer array arr. Sort the integers in the array in ascending order by the number of 1's in their binary representation. If two or more integers have the same number of 1's, sort them in ascending order.

Return the array after sorting it.

Examples:
---------
Input: arr = [0,1,2,3,4,5,6,7,8]
Output: [0,1,2,4,8,3,5,6,7]
Explanation: [0] is the only integer with 0 bits. [1,2,4,8] all have 1 bit. [3,5,6] have 2 bits. [7] has 3 bits.

Input: arr = [1024,512,256,128,64,32,16,8,4,2,1]
Output: [1,2,4,8,16,32,64,128,256,512,1024]
Explanation: All integers have 1 bit in the binary representation, so sort them in ascending order.

Approach:
---------
1. For each number, count the number of 1's in its binary representation.
2. Sort the array by this count. If two numbers have the same count, sort by value.

Code:
-----
*/

function sortByBits(arr) {
  // Helper to count 1's in binary
  function countOnes(n) {
    let count = 0;
    while (n) {
      count += n & 1;
      n >>= 1;
    }
    return count;
  }
  // Sort by number of 1's, then by value
  return arr.sort((a, b) => {
    const onesA = countOnes(a);
    const onesB = countOnes(b);
    if (onesA === onesB) {
      return a - b;
    }
    return onesA - onesB;
  });
}

// Example usage:
console.log(sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8])); // Output: [0,1,2,4,8,3,5,6,7]
console.log(sortByBits([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1])); // Output: [1,2,4,8,16,32,64,128,256,512,1024]
