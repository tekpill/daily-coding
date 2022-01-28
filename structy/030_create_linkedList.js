const assert = require("assert");

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const createLinkedList = (values) => {
  const dummyHead = new Node();

  let tell = dummyHead;
  for (let val of values) {
    tell.next = new Node(val);
    tell = tell.next;
  }

  return dummyHead.next;
};

createLinkedList(["h", "e", "y"]);

const printLinkedList = (head) => {
  let current = head;
  while (current) {
    console.log(current.val);
    current = current.next;
  }
};
printLinkedList(createLinkedList(["h", "e", "y"]));
