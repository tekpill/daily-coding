//Write a function, connectedComponentsCount, that takes in the adjacency list of an undirected graph.
//The function should return the number of connected components within the graph.
const assert = require("assert");
const connectedComponentsCount = (graph) => {
  // todo
  const visited = new Set();
  let components = 0;
  for (let node in graph) {
    //only proceed of node is not visited
    let isComponent = traverseThisNode(node, graph, visited);
    if (isComponent === true) {
      components++;
    }
  }

  return components;
};

const traverseThisNode = (node, graph, visited) => {
  if (visited.has(String(node))) return false;
  visited.add(String(node));

  //mark all neighbors visited
  for (let neighbor of graph[node]) {
    traverseThisNode(neighbor, graph, visited);
  }

  return true;
};
console.log(
  connectedComponentsCount({
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2],
  })
); // -> 2
