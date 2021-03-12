const A = [1, 3, 6, 4, 1, 2];
// const A = [1, 2, 3]
// const A = [-1, -3]

function solution(A) {
  const temp = [...new Set(A.sort())];
  let smallest = 1;
  for (let i = 1; i < temp.length; i++) {
    if (temp[i] - 1 !== temp[i - 1]) {
      smallest = temp[i - 1] + 1;
    }
  }

  if (smallest < 1) return 1;
  if (smallest === 1) return temp[temp.length - 1] + 1;
  return smallest;
}

// answer = 5;
// answer = 4;
// answer = 1;
