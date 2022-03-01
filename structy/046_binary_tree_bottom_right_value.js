//Write a function, treeValueCount, that takes in the root of a binary tree and
//a target value. The function should return the number of
//times that the target occurs in the tree.
const assert = require("assert");

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const bottomRightValue = (root) => {
  if (root === null) return null;

  const queue = [root];
  let current = null;

  while (queue.length > 0) {
    current = queue.shift();
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return current.val;
};

const a = new Node(12);
const b = new Node(6);
const c = new Node(6);
const d = new Node(4);
const e = new Node(6);
const f = new Node(12);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      12
//    /   \
//   6     6
//  / \     \
// 4   6     12

assert.equal(bottomRightValue(a), 12);
console.log("All test cases passed");
