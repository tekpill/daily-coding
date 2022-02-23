const linkedPalindrome = (head) => {
  // todo
  let current = head;
  let linkedArray = [];
  while (current !== null) {
    linkedArray.push(current.val);
    current = current.next;
  }

  return linkedArray.join(",") === linkedArray.reverse().join(",");
};
