// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// my answer
// function vowels(str) {
//   const vowels = ["a", "e", "i", "o", "u"];

//   const vowelCount = str
//     .toLowerCase()
//     .split("")
//     .reduce((acc, cur) => {
//       if (
//         cur === "a" ||
//         cur === "e" ||
//         cur === "i" ||
//         cur === "o" ||
//         cur === "u"
//       ) {
//         acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
//       }
//       return acc;
//     }, {});

//   const total = vowels.reduce((acc, cur) => (acc += vowelCount[cur]), 0);
//   return total || 0;
// }

function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels;
