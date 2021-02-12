// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

/**
 *
 * 1. Create empty array to hold chunks called 'chunked'
 * 2. For each element in the 'unchunked' array
 * 3. Retrieve the last element in 'chunked'
 * 4. If last element does not exist, or if its length is rqual to chunk size
 * 5. push a new chunk into 'chunked' with the current element
 * 6. Else add the current element into the chunk
 */

function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}

// function chunk(array, size) {
//   const chunked = [];

//   for (let element of array) {
//     const last = chunked[chunked.length - 1];

//     if (!last || last.length === size) {
//       chunked.push([element]);
//     } else {
//       last.push(element);
//     }
//   }
//   return chunked;
// }

// chunk([1, 2, 3, 4], 2); //?
// --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2); //?
// --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3); //?
// --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4); //?
// --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10); //?
// --> [[ 1, 2, 3, 4, 5]]

module.exports = chunk;
