const assert = require("assert");

const anagrams = (s1, s2) => {
  const s1Map = strToMap(s1);
  const s2Map = strToMap(s2);
  for (const s1key of s1Map.keys()) {
    if (!s2Map.has(s1key)) return false;
    if (s2Map.get(s1key) !== s1Map.get(s1key)) return false;
  }

  for (const s1key of s2Map.keys()) {
    if (!s2Map.has(s1key)) return false;
    if (s2Map.get(s1key) !== s1Map.get(s1key)) return false;
  }

  return true;
};

const strToMap = (s) => {
  const sMap = new Map();
  for (c of s) {
    if (sMap.has(c)) {
      sMap.set(c, sMap.get(c) + 1);
    } else {
      sMap.set(c, 1);
    }
  }

  return sMap;
};

assert.equal(anagrams("restful", "fluster"), true);
assert.equal(anagrams("cats", "tocs"), false);
assert.equal(anagrams("monkeyswrite", "newyorktimes"), true);
assert.equal(anagrams("paper", "reapa"), false);
assert.equal(anagrams("elbow", "below"), true);
assert.equal(anagrams("tax", "taxi"), false);
assert.equal(anagrams("taxi", "tax"), false);
assert.equal(anagrams("night", "thing"), true);
assert.equal(anagrams("abbc", "aabc"), false);
console.log("All test cases passed!");

module.exports = {
  anagrams,
};
