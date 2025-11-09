/*
Problem: Decrypt String from Alphabet to Integer Mapping
--------------------------------------------------------
You are given a string s formed by digits and '#'. Map s to English lowercase characters as follows:
- '1' to '9'  => 'a' to 'i'
- '10#' to '26#' => 'j' to 'z'
Return the string formed after mapping.

Examples:
---------
Input: s = "10#11#12"
Output: "jkab"
Explanation: "j" -> "10#", "k" -> "11#", "a" -> "1", "b" -> "2"

Input: s = "1326#"
Output: "acz"

Approach:
---------
1. Start from the left of the string.
2. If you see a number followed by '#', map the two digits before '#' to a letter ('j' to 'z').
3. Otherwise, map single digits to 'a' to 'i'.
4. Continue until the end of the string.

Code:
-----
*/

function freqAlphabets(s) {
  let res = "";
  for (let i = 0; i < s.length; ) {
    // Check for two digits followed by '#'
    if (i + 2 < s.length && s[i + 2] === "#") {
      // Map '10#' to '26#' to 'j' to 'z'
      let num = parseInt(s.substring(i, i + 2));
      res += String.fromCharCode(96 + num);
      i += 3;
    } else {
      // Map '1' to '9' to 'a' to 'i'
      res += String.fromCharCode(96 + parseInt(s[i]));
      i += 1;
    }
  }
  return res;
}

// Example usage:
console.log(freqAlphabets("10#11#12")); // Output: "jkab"
console.log(freqAlphabets("1326#")); // Output: "acz"
