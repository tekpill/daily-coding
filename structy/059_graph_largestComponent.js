const assert = require("assert");
const largestComponent = (graph) => {
  let largest = 0;
  let visited = new Set();
  for (let node in graph) {
    let size = exploreSize(graph, node, visited);
    largest = Math.max(largest, size);
  }

  return largest;
};

const exploreSize = (graph, node, visited) => {
  if (visited.has(node)) return 0;

  visited.add(node);

  let size = 1;
  for (let neighbor of graph[node]) {
    size += exploreSize(graph, neighbor, visited);
  }

  return size;
};

assert.equal(
  largestComponent({
    0: ["8", "1", "5"],
    1: ["0"],
    5: ["0", "8"],
    8: ["0", "5"],
    2: ["3", "4"],
    3: ["2", "4"],
    4: ["3", "2"],
  }),
  4
);

assert.equal(
  largestComponent({
    1: ["2"],
    2: ["1", "8"],
    6: ["7"],
    9: ["8"],
    7: ["6", "8"],
    8: ["9", "7", "2"],
  }),
  6
);
console.log("All test cases passed");
