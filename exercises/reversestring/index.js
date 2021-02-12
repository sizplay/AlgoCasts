// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // return str.split("").reverse().join("");
  // return str.split("").reduce((acc, cur) => cur + acc, "");

  let reversed = "";
  for (let char of str) {
    reversed = char + reversed;
  }

  return reversed;
}

module.exports = reverse;
