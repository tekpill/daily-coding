const assert = require("assert");
const hasPath = (graph, src, dst) => {
  let stack = [src];
  while (stack.length > 0) {
    let current = stack.pop();
    if (current === dst) return true;
    for (let neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }
  return false;
};

const graph = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

assert.equal(hasPath(graph, "f", "k"), true);
assert.equal(hasPath(graph, "f", "n"), false);
console.log("All test cases passed");
