const assert = require("assert");

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const treeMinValue = (root) => {
  let minValue = root.val;
  const queue = [root];
  while (queue.length > 0) {
    let current = queue.shift();
    if (current.val < minValue) minValue = current.val;
    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }

  return minValue;
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

assert.equal(treeMinValue(a), -2);
console.log("All test cases passed");
