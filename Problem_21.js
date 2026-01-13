/*
1805. Number of Different Integers in a String
Easy

You are given a string word that consists of digits and lowercase English letters.

You will replace every non-digit character with a space. For example, "a123bc34d8ef34" will become 
" 123  34 8  34". Notice that you are left with some integers that are separated by at least one
  space: "123", "34", "8", and "34".

Return the number of different integers after performing the replacement operations on word.

Two integers are considered different if their decimal representations without any leading zeros are 
different.

Examples:
Input: word = "a123bc34d8ef34"
Output: 3
Explanation: The three different integers are "123", "34", and "8". Notice that "34" is only counted
 once.

Input: word = "leet1234code234"
Output: 2

Input: word = "a1b01c001"
Output: 1
Explanation: The three integers "1", "01", and "001" all represent the same integer because the
 leading zeros are ignored when comparing their decimal values.
*/
// LeetCode 1805: Number of Different Integers in a String
// Solution below

function numDifferentIntegers(word) {
  // Step 1: Replace all non-digit characters with spaces
  // Example: 'a123bc34d8ef34' -> ' 123  34 8  34'
  const replaced = word.replace(/\D/g, " ");

  // Step 2: Split by spaces to get all number substrings
  // filter(Boolean) removes empty strings from the result
  const numbers = replaced.split(" ").filter(Boolean);

  // Step 3: Use a Set to store unique normalized integers
  const uniqueNumbers = new Set();

  for (let num of numbers) {
    // Step 4: Remove leading zeros (if all zeros, result is '') so use '0' in
    // that case
    let normalized = num.replace(/^0+/, "") || "0";
    uniqueNumbers.add(normalized);
  }

  // Step 5: Return the count of unique integers
  //   console.log(uniqueNumbers);
  return uniqueNumbers.size;
}

// Example usage:
// console.log(numDifferentIntegers("a123bc34d8ef34")); // Output: 3
// console.log(numDifferentIntegers("leet1234code234")); // Output: 2
// console.log(numDifferentIntegers("a1b01c001")); // Output: 1
