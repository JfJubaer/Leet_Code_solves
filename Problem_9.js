/*
Problem: Number Complement
--------------------------
The complement of an integer is the integer you get when you flip all the 0's to 1's 
and all the 1's to 0's in its binary representation.

For example:
- 5 is "101" in binary, complement is "010" (2 in decimal)
- 7 is "111" in binary, complement is "000" (0 in decimal)
- 10 is "1010" in binary, complement is "0101" (5 in decimal)

Approach:
---------
1. Find the number of bits in n (excluding leading zeros).
2. Create a mask with all bits set to 1 for the length of n's binary representation.
3. XOR n with the mask to flip all bits.

Code:
-----
*/

function findComplement(n) {
  // Edge case: if n is 0, its complement is 1 (but per problem, n >= 1)
  if (n === 0) return 1;
  // Find the mask: a number with all bits set to 1, same length as n
  let mask = 1;
  while (mask <= n) {
    mask = mask << 1;
  }
  // mask is now 100...0, so mask-1 is 111...1 (same length as n)
  return (mask - 1) ^ n;
}

// Example usage:
console.log(findComplement(5)); // Output: 2
console.log(findComplement(7)); // Output: 0
console.log(findComplement(10)); // Output: 5
