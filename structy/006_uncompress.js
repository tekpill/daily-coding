const assert = require("assert");

const uncompress = (s) => {
  let intstart = 0;
  let charpointer = 0;
  let finalString = "";
  while (charpointer < s.length) {
    if (isNaN(parseInt(s[charpointer]))) {
      //its a char!!
      const thisChar = s[charpointer];
      //find the number
      const thisCharNumber = +s.substring(intstart, charpointer);
      // uncompress this char
      for (let i = 1; i <= thisCharNumber; i++) {
        finalString += thisChar;
      }
      //set the intstart
      charpointer++;
      intstart = charpointer;
    } else {
      //its still a number
      charpointer++;
    }
  }

  return finalString;
};

assert.equal(uncompress("2c3a1t"), "ccaaat");
assert.equal(uncompress("4s2b"), "ssssbb");
assert.equal(uncompress("2p1o5p"), "ppoppppp");
assert.equal(uncompress("3n12e2z"), "nnneeeeeeeeeeeezz");
assert.equal(
  uncompress("127y"),
  "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy"
);
console.log("All test cases passes successfully");
module.exports = {
  uncompress,
};
