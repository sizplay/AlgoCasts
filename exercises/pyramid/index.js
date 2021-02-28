// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  // find mid point first
  for (let row = 0; row < n; row++) {
    let result = "";
    for (let col = 0; col < n + 2; col++) {
      if (row <= col) {
        result += " ";
      } else if (n - 2 <= col <= n + 2) {
        result += "#";
      } else {
        result += " ";
      }
    }
    console.log(result);
  }
}

// ---------
//   | 0 | 1 | 2 | 3 | 4 |
// 0 | s | s | # | s | s |
// 1 | s | # | # | # | s |
// 2 | # | # | # | # | # |

pyramid(5);
// 1 1 lines 1 sharps 2 spaces
// 2 2 lines 3 sharps 1 space
// 3 3 lines 5 sharps 0 space

module.exports = pyramid;
