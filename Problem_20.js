/*
Problem: Count Odd Numbers in an Interval Range
-----------------------------------------------
Given two non-negative integers low and high, return the count of odd numbers between low 
and high (inclusive).

Examples:
---------
Input: low = 3, high = 7
Output: 3
Explanation: Odd numbers are [3,5,7]

Input: low = 8, high = 10
Output: 1
Explanation: Odd number is [9]

Approach:
---------
1. The number of odd numbers from 1 to n is Math.floor((n + 1) / 2).
2. So, the count of odds between low and high is:
   Math.floor((high + 1) / 2) - Math.floor(low / 2)

Code:
-----
*/

function countOdds(low, high) {
  // Count of odds from 1 to high minus count of odds from 1 to (low-1)
  return Math.floor((high + 1) / 2) - Math.floor(low / 2);
}

// Example usage:
console.log(countOdds(3, 7)); // Output: 3
console.log(countOdds(8, 10)); // Output: 1
