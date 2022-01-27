const assert = require("assert");

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const removeNode = (head, targetVal) => {
  let current = head;
  let prev = null;
  while (current) {
    if (current.val === targetVal) {
      //drop this node and return
      if (prev) {
        prev.next = current.next;
        return head;
      } else {
        //head was removed
        return current.next;
      }
    } else {
      //keep updating pointers
      prev = current;
      current = current.next;
    }
  }
};

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");

a.next = b;
b.next = c;

assert.deepEqual(removeNode(a, "B"), a);

const a1 = new Node(7);
const b1 = new Node(7);
const c1 = new Node(4);

a1.next = b1;
b1.next = c1;
// 7 -> 7 -> 4

assert.deepEqual(removeNode(a1, 7), b1);
console.log("All Test cases passed");
