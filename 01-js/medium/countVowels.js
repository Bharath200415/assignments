/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const vowels = "aeiou";
  let count = 0;

  for (let ch of str.toLowerCase()){
    if (vowels.includes(ch)){
      count++;
    }
  }

  return count;

    // Your code here
}

module.exports = countVowels;