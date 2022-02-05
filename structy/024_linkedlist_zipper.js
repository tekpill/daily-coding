class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const zipperLists = (head1, head2) => {
  let current1 = head1;
  let current2 = head2;
  let tail = null;

  let counter = 1;
  tail = current1;
  current1 = current1.next;
  while (current1 && current2) {
    if (counter % 2 === 0) {
      tail.next = current1;
      current1 = current1.next;
    } else {
      tail.next = current2;
      current2 = current2.next;
    }
    tail = tail.next;
    counter++;
  }

  if (current2 === null) tail.next = current1;
  if (current1 === null) tail.next = current2;

  return head1;
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
a.next = b;
b.next = c;
// a -> b -> c

const x = new Node("x");
const y = new Node("y");
const z = new Node("z");
x.next = y;
y.next = z;
// x -> y -> z

const printLinkedList = (head) => {
  let current = head;
  while (current) {
    console.log(current.val);
    current = current.next;
  }
};
printLinkedList(zipperLists(a, x));
