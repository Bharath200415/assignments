/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // Normalize the strings: remove spaces, convert to lowercase, and sort the characters
  function normalize(str){
    return str
      .replace(/\s+/g, '')  // Remove all whitespace
      .toLowerCase()        // Convert to lowercase
      .split('')            // Split into characters
      .sort()               // Sort characters
      .join('');            // Join back into a string

  }
  return normalize(str1) == normalize(str2);


}
module.exports = isAnagram;
