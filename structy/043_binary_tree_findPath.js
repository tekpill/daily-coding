const assert = require("assert");

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const pathFinder = (root, target) => {
  // todo
  if(root === null) return null;
  
  if(root.val === target) return [root.val];
  
  var leftSidePath = pathFinder(root.left, target);

  
  if(leftSidePath) return [root.val, ...leftSidePath];
  
  var rightSidePath = pathFinder(root.right, target);
  if(rightSidePath) return [root.val, ...rightSidePath];
  
  return null;
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

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

assert.deepEqual(pathFinder(a, 'e'), [ 'a', 'b', 'e' ]);
console.log("All test cases passed");
