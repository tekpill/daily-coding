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

const treeValueCount = (root, target) => {
  // todo
  if(root === null) return 0;
  
  let countForThisRoot = 0;
  
  if(root.val === target)  countForThisRoot++;
  
  countForThisRoot += treeValueCount(root.left, target);
  countForThisRoot += treeValueCount(root.right, target);
  
  return countForThisRoot;
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

assert.equal(treeValueCount(a,  6), 3);
console.log("All test cases passed");
