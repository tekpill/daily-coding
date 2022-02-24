const tolerantTeams = (rivalries) => {
  const colored = {};
  const graph = buildGraph(rivalries);

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

const buildGraph = (rivalries) => {
  const graph = {};
  for (let pair of rivalries) {
    const [a, b] = pair;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
};

console.log(
  tolerantTeams([
    ["alex", "anj"],
    ["alex", "matt"],
    ["alex", "cindy"],
    ["anj", "matt"],
    ["brando", "matt"],
  ])
); // -> false

console.log(
  tolerantTeams([
    ["alan", "jj"],
    ["betty", "richard"],
    ["jj", "simcha"],
    ["richard", "christine"],
  ])
); // -> true
