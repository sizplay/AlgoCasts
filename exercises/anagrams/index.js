// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//   const newStringA = stringA.replace(/[^\w]/g, "").toLowerCase(); //?
//   const newStringB = stringB.replace(/[^\w]/g, "").toLowerCase(); //?

//   if (newStringA.length !== newStringB.length) {
//     return false;
//   }

//   const hash = newStringA.split("").reduce((acc, curr) => {
//     acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
//     return acc;
//   }, {});

//   newStringB.split("").forEach((ele) => {
//     hash[ele] = hash[ele] ? hash[ele] - 1 : 0;
//   });

//   for (let key in hash) {
//     if (hash[key] > 0) {
//       return false;
//     }
//   }
//   return true;
// }

function anagrams(stringA, stringB) {
  const cleanString = (str) =>
    str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");

  return cleanString(stringA) === cleanString(stringB);
}

anagrams("rail safety", "fairy tales"); //?
anagrams("RAIL! SAFETY!", "fairy tales"); //?
anagrams("Hi there", "Bye there"); //?
anagrams("One one", "One one c"); // ?

module.exports = anagrams;
