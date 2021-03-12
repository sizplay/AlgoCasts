let j,
  z = 1,
  n = 15;
Array(n)
  .fill(0)
  .reduce((acc) => {
    z > n ? (j = j - 2) : (j = z);
    z += 2;
    const spaces = " ".repeat((n - j) / 2);
    const stars = "*".repeat(j) + "\n";
    return `${acc}${spaces}${stars}`;
  }, "\n");
