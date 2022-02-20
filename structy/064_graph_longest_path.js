const assert = require("assert");
const longestPath = (graph) => {
  //find the leaf nodes
  const distance = {};
  for (let node in graph) {
    if (graph[node].length === 0) distance[node] = 0;
  }

  for (let node in graph) {
    traverse(graph, node, distance);
  }

  let maxPath = 0;
  for (let node in distance) {
    maxPath = Math.max(maxPath, distance[node]);
  }

  return maxPath;
};

const traverse = (graph, node, distance) => {
  if (node in distance) return distance[node];
  let maxLength = 0;
  for (let neighbor of graph[node]) {
    const thisNeighborDistance = traverse(graph, neighbor, distance);
    maxLength = Math.max(maxLength, thisNeighborDistance);
  }

  distance[node] = 1 + maxLength;

  return distance[node];
};

const graph = {
  h: ["i", "j", "k"],
  g: ["h"],
  i: [],
  j: [],
  k: [],
  x: ["y"],
  y: [],
};

assert.equal(longestPath(graph), 2);

console.log("All test cases passed");
