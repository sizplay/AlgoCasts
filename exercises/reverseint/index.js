// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// 1. reverse positive num without 0
// 2. check if 0 is in last position reverse it and remove it
// 3. check if it has negative sign then skip first position of the variable

// Math.sign() it return positive and negative sign
// toString and parseInt

function reverseInt(n) {
  return parseInt(n.toString().split("").reverse().join("")) * Math.sign(n);
}

reverseInt(15) === 51; //?
reverseInt(981) === 189; //?
reverseInt(500) === 5; //?
reverseInt(-15) === -51; //?
reverseInt(-90) === -9; //?

module.exports = reverseInt;
