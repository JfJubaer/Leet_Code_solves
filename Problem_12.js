/*
Problem: Subtract the Product and Sum of Digits of an Integer
--------------------------------------------------------------
Given an integer number n, return the difference between the product of its digits and the
 sum of its digits.

Examples:
---------
Input: n = 234
Output: 15
Explanation: Product = 2*3*4 = 24, Sum = 2+3+4 = 9, Result = 24-9 = 15

Input: n = 4421
Output: 21
Explanation: Product = 4*4*2*1 = 32, Sum = 4+4+2+1 = 11, Result = 32-11 = 21

Approach:
---------
1. Convert the integer n to its digits (as a string or using math).
2. Calculate the product and sum of the digits.
3. Return the difference (product - sum).

Code:
-----
*/

function subtractProductAndSum(n) {
  let product = 1;
  let sum = 0;
  while (n > 0) {
    let digit = n % 10; // Get the last digit
    product *= digit; // Multiply to product
    sum += digit; // Add to sum
    n = Math.floor(n / 10); // Remove the last digit
  }
  return product - sum;
}

// Example usage:
console.log(subtractProductAndSum(234)); // Output: 15
console.log(subtractProductAndSum(4421)); // Output: 21
