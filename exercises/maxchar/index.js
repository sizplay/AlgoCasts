// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let max = 0;
  let maxChar = "";
  const chars = str.split("").reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
    return acc;
  }, {}); //?

  for (let char in chars) {
    if (chars[char] > max) {
      maxChar = char;
      max = chars[char];
    }
  }
  return maxChar; //?
}

maxChar("abcccccccd") === "c"; //?
maxChar("apple 1231111") === "1"; //?

module.exports = maxChar;
