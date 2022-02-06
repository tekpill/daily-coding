const assert = require("assert");

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const maxPathSum = (root) => {
  if (root === null) return -Infinity;
  let childMaxSum = Math.max(maxPathSum(root.left), maxPathSum(root.right));
  if (childMaxSum === -Infinity) childMaxSum = 0;
  return root.val + childMaxSum;
};

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

assert.equal(maxPathSum(a), 18);
console.log("All test cases passed");
