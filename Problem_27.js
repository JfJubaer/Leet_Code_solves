/*
Count Integers With Even Digit Sum
Easy

Given a positive integer num, return the number of positive integers less than or equal to num whose digit sums are even.

The digit sum of a positive integer is the sum of all its digits.

Examples:
Input: num = 4
Output: 2
Explanation:
The only integers less than or equal to 4 whose digit sums are even are 2 and 4.

Input: num = 30
Output: 14
Explanation:
The 14 integers less than or equal to 30 whose digit sums are even are
2, 4, 6, 8, 11, 13, 15, 17, 19, 20, 22, 24, 26, and 28.
*/

/**
 * @param {number} num
 * @return {number}
 */
function countEven(num) {
  let count = 0; // To count numbers with even digit sum
  // Loop through all numbers from 1 to num
  for (let i = 1; i <= num; i++) {
    let sum = 0; // To store the sum of digits for current number
    let n = i; // Copy of current number to extract digits
    // Extract and sum all digits of n
    while (n > 0) {
      sum += n % 10; // Add the last digit to sum
      n = Math.floor(n / 10); // Remove the last digit
    }
    // If the sum of digits is even, increment the count
    if (sum % 2 === 0) count++;
  }
  // Return the total count of numbers with even digit sum
  return count;
}

// Example usage:
console.log(countEven(4)); // 2
console.log(countEven(30)); // 14
