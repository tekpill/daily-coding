const assert = require("assert");

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
const fromListToNumber = (head) => {
  let current = head;
  let finalSum = 0;
  let multiplier = 1;
  while (current) {
    finalSum += current.val * multiplier;
    multiplier *= 10;
    current = current.next;
  }

  return finalSum;
};

const fromNumberToList = (number) => {
  const head = new Node();
  let current = head;
  let divider = 10;
  while (number >= 1) {
    let digit = number % divider;
    current.next = new Node(digit);
    current = current.next;
    number = (number - digit) / divider;
    console.log("Next Number", number);
  }

  return head.next;
};

const addLists = (head1, head2) => {
  const number1 = fromListToNumber(head1);
  const number2 = fromListToNumber(head2);
  console.log(number1, number2);
  return fromNumberToList(number2 + number1);
};

//   89
// + 47
// ----
//  136

const a1 = new Node(9);
const a2 = new Node(8);
a1.next = a2;
// 9 -> 8

const b1 = new Node(7);
const b2 = new Node(4);
b1.next = b2;
// 7 -> 4

const printLinkedList = (head) => {
  let current = head;
  while (current) {
    console.log(current.val);
    current = current.next;
  }
};
printLinkedList(addLists(a1, b1));
// 6 -> 3 -> 1
