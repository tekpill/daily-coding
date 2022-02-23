const assert = require("assert");
const summingSquares = (n, memo = {}) => {
  // todo
  if (n === 0) return 0;
  if (n in memo) return memo[n];
  let minSquare = Infinity;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    let squareSums = 1 + summingSquares(n - i * i, memo);
    minSquare = Math.min(squareSums, minSquare);
  }

  memo[n] = minSquare;
  return minSquare;
};

assert.equal(summingSquares(12), 3);
assert.equal(summingSquares(31), 4);

console.log("All test cases passed");
