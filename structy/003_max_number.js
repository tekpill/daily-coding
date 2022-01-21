const assert = require("assert");

const maxValue = (nums) => {
  let maxNumber = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > maxNumber) {
      maxNumber = nums[i];
    }
  }

  return maxNumber;
};

assert.equal(maxValue([4, 7, 2, 8, 10, 9]), 10);
assert.equal(maxValue([10, 5, 40, 40.3]), 40.3);
assert.equal(maxValue([-5, -2, -1, -11]), -1);
assert.equal(maxValue([42]), 42);
assert.equal(maxValue([1000, 8]), 1000);
assert.equal(maxValue([1000, 8, 9000]), 9000);
assert.equal(maxValue([2, 5, 1, 1, 4]), 5);
console.log("All test cases passed");

module.exports = {
  maxValue,
};
