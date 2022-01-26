const assert = require("assert");

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const getNodeValue = (head, index) => {
  let current = head;
  let finalIndex = 0;
  while (current) {
    if (finalIndex === index) {
      return current.val;
    }
    current = current.next;
    finalIndex++;
  }
  return null;
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d; // 'c'

// a -> b -> c -> d

assert.equal(getNodeValue(a, 2), "c");
assert.equal(getNodeValue(a, 3), "d");
console.log("All Test cases passed");
