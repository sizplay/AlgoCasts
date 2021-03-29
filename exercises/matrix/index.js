// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(N) {
  const array = [];

  for (i = 0; i < N; i++) {
    array.push([]);
  }

  let counter = 1;
  let startRow = 0;
  let endRow = N - 1;
  let startCol = 0;
  let endCol = N - 1;

  while (startRow <= endRow && startCol <= endCol) {
    // top row
    for (let i = startCol; i <= endCol; i++) {
      array[startRow][i] = counter;
      counter++;
    }
    startRow++;

    // end col
    for (let i = startRow; i <= endRow; i++) {
      array[i][endCol] = counter;
      counter++;
    }
    endCol--;

    // bottom row
    for (let i = endCol; i >= startCol; i--) {
      array[endRow][i] = counter;
      counter++;
    }
    endRow--;

    // top col
    for (let i = endRow; i >= startRow; i--) {
      array[i][startCol] = counter;
      counter++;
    }
    startCol++;
  }

  return array;
}

module.exports = matrix;
