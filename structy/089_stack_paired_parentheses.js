const assert = require("assert");
const pairedParentheses = (str) => {
  // todo
  let stack = [];
  for (let character of str) {
    if (character === "(") stack.push("(");
    if (character === ")") {
      if (stack.length > 0) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
};

assert.equal(pairedParentheses("))()"), false);
assert.equal(pairedParentheses("(())(water)()"), true);
console.log("All test cases passed");
