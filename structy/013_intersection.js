const assert = require("assert");

const intersection = (a, b) => {
  // todo
  const finalResult = [];

  const setA = new Set(a);
  for (let item of b) {
    if (setA.has(item)) {
      finalResult.push(item);
    }
  }

  return finalResult;
};

assert.deepEqual(intersection([4, 2, 1, 6], [3, 6, 9, 2, 10]).sort(), [2, 6]);
assert.deepEqual(intersection([2, 4, 6], [4, 2]).sort(), [2, 4]);
assert.deepEqual(intersection([4, 2, 1], [1, 2, 4, 6]).sort(), [1, 2, 4]);
assert.deepEqual(intersection([0, 1, 2], [10, 11]).sort(), []);
const a = [];
const b = [];
for (let i = 0; i < 50000; i += 1) {
  a.push(i);
  b.push(i);
}
console.log(intersection(a, b)); // -> [0,1,2,3,..., 49999]
console.log("All test cases passed!");

module.exports = {
  intersection,
};
