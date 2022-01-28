const assert = require("assert");

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const longestStreak = (head) => {
  let current = head;
  let maxStreakCount = 0;
  let currentStreakCount = 1;
  let prevValue = null;
  while (current) {
    if (prevValue === current.val) streakCount++;
    else streakCount = 1;

    if (maxStreakCount < streakCount) maxStreakCount = streakCount;

    prevValue = current.val;
    current = current.next;
  }

  return maxStreakCount;
};
const a = new Node(5);
const b = new Node(5);
const c = new Node(7);
const d = new Node(7);
const e = new Node(7);
const f = new Node(6);
// 5 -> 5 -> 7 -> 7 -> 7 -> 6
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

assert.equal(longestStreak(a), 3);
console.log("All Test cases passed");
