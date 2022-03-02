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

const treeLevels = (root) => {
  // todo
  if (root === null) return [];

  const map = [];
  const queue = [{ node: root, level: 0 }];

  while (queue.length > 0) {
    const { node, level } = queue.shift();

    if (node.left !== null) {
      queue.push({ node: node.left, level: level + 1 });
    }

    if (node.right !== null) {
      queue.push({ node: node.right, level: level + 1 });
    }

    if (!map[level]) map[level] = [];

    map[level].push(node.val);
  }

  return map;
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

console.log(treeLevels(a));
