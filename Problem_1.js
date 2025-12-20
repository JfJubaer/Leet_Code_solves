/**
 * There is a malfunctioning keyboard where some letter keys do not work. All other keys on the keyboard
 * work properly. Given a string text of words separated by a single space (no leading or trailing spaces) and
 * a string brokenLetters of all distinct letter keys that are broken, return the number of words in text you can
 * fully type using this keyboard.
 */
/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
  let count = 0;
  const words = text.split(" ");
  const brokenKeys = new Set(brokenLetters);

  for (const word of words) {
    let canType = true;
    for (const charc of word) {
      if (brokenKeys.has(charc)) {
        canType = false;
        break;
      }
    }
    if (canType) count++;
  }
  return count;
};

// Example usage:
// console.log(canBeTypedWords("hello world", "ad")); // Output: 1
console.log(canBeTypedWords("leet code", "lt")); // Output: 1
// console.log(canBeTypedWords("leet code", "e")); // Output: 0
