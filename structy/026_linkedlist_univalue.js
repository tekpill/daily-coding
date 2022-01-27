const assert = require("assert");

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
const isUnivalueList = (head) => {
  let current = head;
  const headValue = head.val;
  while (current) {
    if (current.val !== headValue) return false;
    current = current.next;
  }
  return true;
};

const a = new Node(7);
const b = new Node(7);
const c = new Node(7);

a.next = b;
b.next = c;

assert.equal(isUnivalueList(a), true);

const a1 = new Node(7);
const b1 = new Node(7);
const c1 = new Node(4);

a1.next = b1;
b1.next = c1;
// 7 -> 7 -> 4

assert.equal(isUnivalueList(a1), false);
console.log("All Test cases passed");
