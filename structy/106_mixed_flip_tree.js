class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
const printTree = (root) => {
  if (root === null) return null;
  else console.log(root.val);
  printTree(root.left);
  printTree(root.right);
};
const flipTree = (root) => {
  if (root === null) return null;

  let left = flipTree(root.left);
  let right = flipTree(root.right);
  root.left = right;
  root.right = left;

  return root;
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");
const h = new Node("h");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
e.right = h;

//      a
//    /    \
//   b      c
//  / \      \
// d   e      f
//    / \
//    g  h
console.log("Before Flip");
printTree(a);
flipTree(a);

//       a
//    /    \
//   c      b
//  /     /   \
// f     e    d
//     /  \
//    h    g

console.log("\n After Flip");
printTree(a);
