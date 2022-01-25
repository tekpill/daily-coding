const assert = require("assert");

const compress = (s) => {
  const result = [];
  let startIndex = 0;
  let currentIndex = 0;
  while (currentIndex <= s.length) {
    if (s[startIndex] !== s[currentIndex]) {
      //insert
      if (currentIndex - startIndex === 1) {
        result.push(s[startIndex]);
      } else {
        result.push(currentIndex - startIndex, s[startIndex]);
      }
      startIndex = currentIndex;
      currentIndex++;
    } else {
      currentIndex++;
    }
  }
  return result.join("");
};

assert.equal(compress("ccaaatsss"), "2c3at3s");
assert.equal(compress("ssssbbz"), "4s2bz");
assert.equal(compress("ppoppppp"), "2po5p");
assert.equal(compress("nnneeeeeeeeeeeezz"), "3n12e2z");
assert.equal(
  compress(
    "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy"
  ),
  "127y"
);
console.log("All test cases passed!");
module.exports = {
  compress,
};
