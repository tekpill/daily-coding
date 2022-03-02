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

const leafList = (root) => {
  if (root === null) return [];

  const result = [];
  const stack = [root];

  while (stack.length > 0) {
    let current = stack.pop();

    if (current.left === null && current.right === null) {
      result.push(current.val);
    }

    if (current.right !== null) stack.push(current.right);
    if (current.left !== null) stack.push(current.left);
  }

  return result;
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

console.log(leafList(a)); //-> [ 'd', 'e', 'f' ]
