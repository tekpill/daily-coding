const assert = require("assert");
const shortestPath = (edges, nodeA, nodeB) => {
  const graph = new Map();
  for (let edge of edges) {
    if (!graph[edge[0]]) graph[edge[0]] = [];
    if (!graph[edge[1]]) graph[edge[1]] = [];

    graph[edge[0]].push(edge[1]);
    graph[edge[1]].push(edge[0]);
  }
  return shortestPathForGraph(graph, nodeA, nodeB);
};

const shortestPathForGraph = (graph, nodeA, nodeB) => {
  const visited = new Set();
  const queue = [{ value: nodeA, distance: 0 }];

  while (queue.length > 0) {
    let current = queue.shift();
    visited.add(current.value);
    if (current.value === nodeB) return current.distance;

    for (let neighbor of graph[current.value]) {
      if (!visited.has(neighbor)) {
        queue.push({ value: neighbor, distance: current.distance + 1 });
      }
    }
  }

  return -1;
};

const edges = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
];

assert.equal(shortestPath(edges, "w", "z"), 2);

console.log("All test cases passed");
