const assert = require("assert");

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const sumList = (head) => {
  let finalSum = 0;
  let current = head;

  while (current) {
    finalSum += current.val;
    current = current.next;
  }

  return finalSum;
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

assert.equal(sumList(a), 19); // 19
console.log("Test case passed");
