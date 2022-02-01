const assert = require("assert");

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const reverseList = (head) => {
  if (head === null) return;
  let previous = null;
  let current = head;

  while (current !== null) {
    let next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  return previous;
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

//print linked list
const printLinkedList = (head) => {
  let current = head;
  while (current) {
    console.log(current.val);
    current = current.next;
  }
};
printLinkedList(reverseList(a));
