const assert = require("assert");

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const treeIncludes = (root, target) => {
  if (root === null) return false;
  const queue = [root];
  while (queue.length > 0) {
    let current = queue.shift();
    if (current.val === target) return true;
    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }

  return false;
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

assert.equal(treeIncludes(a, "f"), true);
assert.equal(treeIncludes(a, "g"), false);
console.log("All test cases passed");
