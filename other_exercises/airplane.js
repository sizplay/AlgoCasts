// 항공기에 좌석을 배치하는데 4명의 가족을 한줄씩 넣을 수 있는 갯수를 찾는것이다.

const N = 2;
const S = "1A 2F 1C";
// const S = '10A 12F 1C

function solution(N, S) {
  const seats = S.split(" ").sort(
    (a, b) => a.substring(0, a.length - 1) - b.substring(0, b.length - 1)
  );

  const myMap = new Map();

  seats.forEach((seat) => {
    const num = seat.substring(0, seat.length - 1);
    const arr = myMap.get(num);
    if (arr) {
      myMap.set(num, arr + seat[seat.length - 1]);
    } else myMap.set(num, seat[seat.length - 1]);
  });

  let count = 0;

  for (let i = 1; i <= N; i++) {
    const row = myMap.get(`${i}`);
    if (!row) {
      count += 2;
    } else {
      count += help(row.split("").sort().join());
    }
  }

  return count;
}

function help(row) {
  const bc = row.includes("B") || row.includes("C");
  const de = row.includes("D") || row.includes("E");
  const fg = row.includes("F") || row.includes("G");
  const hj = row.includes("H") || row.includes("J");

  if ((bc || de) && !fg && !hj) {
    return 1;
  } else if (!bc && !de && (fg || hj)) {
    return 1;
  } else if ((bc || hj) && !de && !fg) {
    return 1;
  } else if (!bc && !de && !fg && !hj) {
    return 2;
  }

  return 0;
}

solution(N, S);

// 1. 한 라인에 아무도 없으면 2 가족이 가능
// 2. 한 라인에 누가 있으면
// --- ---- ---
// a, k 만 있으면 2
// b,c 있으면 h,j가 없으면 1
// h,j 가 있고 b,c 가 없으면 1
// b,c,h,j에 있고 defg가 없으면 1
