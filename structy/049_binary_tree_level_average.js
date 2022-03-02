// Write a function, levelAverages, that takes in the root of a binary tree that contains number values.
// The function should return an array containing the average value of each level.
const assert = require("assert");

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const levelAverages = (root) => {
  if (root === null) return [];

  const map = [];

  const queue = [{ node: root, level: 0 }];

  while (queue.length > 0) {
    const { node, level } = queue.shift();

    if (node.left !== null) queue.push({ node: node.left, level: level + 1 });
    if (node.right !== null) queue.push({ node: node.right, level: level + 1 });
    if (!map[level]) map[level] = { sum: 0, count: 0 };

    map[level].sum += node.val;
    map[level].count++;
  }

  return map.map((c) => (c.count !== 0 ? (1.0 * c.sum) / c.count : 0));
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

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

console.log(levelAverages(a)); // -> [ 3, 7.5, 1 ]
