const assert = require("assert");

const isPrime = (n) => {
  if (n === 1) {
    return false;
  }
  if (n === 2) {
    return true;
  }
  const rootValue = Math.sqrt(n);
  for (var i = 2; i <= rootValue; i++) {
    if (n % i === 0) return false;
  }

  return true;
};

assert.equal(isPrime(2), true);
assert.equal(isPrime(3), true);
assert.equal(isPrime(4), false);
assert.equal(isPrime(5), true);
assert.equal(isPrime(6), false);
assert.equal(isPrime(7), true);
assert.equal(isPrime(8), false);
assert.equal(isPrime(25), false);
assert.equal(isPrime(2017), true);
assert.equal(isPrime(2048), false);
assert.equal(isPrime(1), false);
assert.equal(isPrime(713), false);
console.log("All test cases passed");

module.exports = {
  isPrime,
};
