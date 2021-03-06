class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");

a.next = b;
b.next = c;
c.next = d;

//print linked list
const printLinkedList = (head) => {
  let current = head;
  while (current) {
    console.log(current.val);
    current = current.next;
  }
};

//recursion
const printLinkedListRecursion = (head) => {
  if (!head) return;
  console.log(head.val);
  printLinkedListRecursion(head.next);
};

console.log("== Usual ==");
printLinkedList(a);
console.log("== Recursion ==");
printLinkedListRecursion(a);
