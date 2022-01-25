const assert = require("assert");

const mostFrequentChar = (s) => {
  const wordHash = new Map();
  let maxFrequency = 1;
  for (let ch of s) {
    if (!wordHash.has(ch)) {
      wordHash.set(ch, 1);
    } else {
      const currentFrequency = wordHash.get(ch) + 1;
      wordHash.set(ch, currentFrequency);
      if (currentFrequency > maxFrequency) {
        maxFrequency = currentFrequency;
      }
    }
  }
  for (let ch of wordHash.keys()) {
    if (wordHash.get(ch) === maxFrequency) return ch;
  }
};

assert.equal(mostFrequentChar("david"), "d");
assert.equal(mostFrequentChar("abby"), "b");
assert.equal(mostFrequentChar("mississippi"), "i");
assert.equal(mostFrequentChar("potato"), "o");
assert.equal(mostFrequentChar("eleventennine"), "e");
console.log("All test cases passed!");

module.exports = {
  mostFrequentChar,
};
