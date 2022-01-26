const assert = require("assert");

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const linkedListFind = (head, target) => {
  let current = head;
  while (current) {
    if (current.val === target) return true;
    current = current.next;
  }
  return false;
};

const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(-1);
const e = new Node(7);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// 2 -> 8 -> 3 -> -1 -> 7

assert.equal(linkedListFind(a, 4), false);
assert.equal(linkedListFind(a, 3), true);
console.log("Test case passed");
