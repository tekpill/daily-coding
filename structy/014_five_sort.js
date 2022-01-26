const assert = require("assert");

const fiveSort = (nums) => {
  // todo
  let j = nums.length - 1;
  let i = 0;
  while (j > i) {
    if (nums[j] === 5) {
      j--;
      continue;
    }
    if (nums[i] === 5) {
      //swap
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j--;
    }

    i++;
  }

  return nums;
};

assert.deepEqual(fiveSort([12, 5, 1, 5, 12, 7]), [12, 7, 1, 12, 5, 5]);
assert.deepEqual(
  fiveSort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5]),
  [2, 2, 10, 6, 1, 5, 5, 5, 5, 5]
);
assert.deepEqual(fiveSort([5, 5, 5, 1, 1, 1, 4]), [4, 1, 1, 1, 5, 5, 5]);
assert.deepEqual(fiveSort([5, 5, 6, 5, 5, 5, 5]), [6, 5, 5, 5, 5, 5, 5]);
assert.deepEqual(
  fiveSort([5, 1, 2, 5, 5, 3, 2, 5, 1, 5, 5, 5, 4, 5]),
  [4, 1, 2, 1, 2, 3, 5, 5, 5, 5, 5, 5, 5, 5]
);

console.log("All test cases passed!");

module.exports = {
  fiveSort,
};
