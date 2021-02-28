// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  for (let row = 0; row < n; row++) {
    let result = "";
    for (let col = 0; col < n; col++) {
      if (col <= row) {
        result += "#";
      } else if (row < col < n) {
        result += " ";
      }
    }

    console.log(result);
  }
}

steps(4);

module.exports = steps;
