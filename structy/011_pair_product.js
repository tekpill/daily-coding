const assert = require("assert");

const pairProduct = (numbers, targetProduct) => {
  const numHash = new Map();
  for (let i = 0; i < numbers.length; i++) {
    let otherNumber = targetProduct / numbers[i];
    if (numHash.has(otherNumber)) {
      return [numHash.get(otherNumber), i];
    }
    numHash.set(numbers[i], i);
  }
};

assert.deepEqual(pairProduct([3, 2, 5, 4, 1], 8), [1, 3]);
assert.deepEqual(pairProduct([3, 2, 5, 4, 1], 10), [1, 2]);
assert.deepEqual(pairProduct([4, 7, 9, 2, 5, 1], 5), [4, 5]);
assert.deepEqual(pairProduct([4, 7, 9, 2, 5, 1], 35), [1, 4]);
assert.deepEqual(pairProduct([3, 2, 5, 4, 1], 10), [1, 2]);
assert.deepEqual(pairProduct([4, 6, 8, 2], 16), [2, 3]);
console.log("All test cases passed!");

module.exports = {
  pairProduct,
};
