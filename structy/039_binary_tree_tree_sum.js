const assert = require("assert");

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
const treeSum = (root) => {
  if (root === null) return 0;
  return root.val + treeSum(root.left) + treeSum(root.right);
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

assert.equal(treeSum(a), 21);
console.log("All test cases passed");
