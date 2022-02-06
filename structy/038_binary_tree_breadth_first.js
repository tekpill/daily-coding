class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const breadthFirstValues = (root) => {
  // todo
  if (root === null) return [];
  const finalResult = [];
  const queue = [root];
  while (queue.length > 0) {
    let current = queue.shift();
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
    finalResult.push(current.val);
  }
  return finalResult;
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

console.log(breadthFirstValues(a));
