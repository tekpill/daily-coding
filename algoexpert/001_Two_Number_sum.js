const chai = require("chai");

function twoNumberSum(array, targetSum) {
  const visited = new Set();
  for (let val of array) {
    if (visited.has(val)) return [val, targetSum - val];
    visited.add(targetSum - val);
  }
  return [];
}

it("Test Case #1", function () {
  const output = twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10);
  chai.expect(output.length === 2).to.deep.equal(true);
  chai.expect(output.includes(11)).to.deep.equal(true);
  chai.expect(output.includes(-1)).to.deep.equal(true);
});
