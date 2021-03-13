const S = "asdcvb@test.com";

function solution(S) {
  const email = S.split("@");
  const id = email[0];
  const count = id.split("").length;
  const parsedId = id.split("").reduce((acc, cur, idx) => {
    count - idx < 4 ? (acc += "*") : (acc += cur);
    return acc;
  }, "");

  return `${parsedId}@${email[1]}`;
}

solution(S);
