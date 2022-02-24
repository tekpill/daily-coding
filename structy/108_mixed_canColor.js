const canColor = (graph) => {
  const colored = {};

  for (const node in graph) {
    if (!(node in colored) && !validate(node, graph, colored, false)) {
      return false;
    }
  }

  return true;
};

const validate = (node, graph, colored, currentColor) => {
  if (node in colored) return currentColor === colored[node];

  colored[node] = currentColor;

  for (let neighbor of graph[node]) {
    if (!validate(neighbor, graph, colored, !currentColor)) {
      return false;
    }
  }

  return true;
};

console.log(
  canColor({
    x: ["y"],
    y: ["x", "z"],
    z: ["y"],
  })
); // -> true

console.log(
  canColor({
    q: ["r", "s"],
    r: ["q", "s"],
    s: ["r", "q"],
  })
); // -> false
