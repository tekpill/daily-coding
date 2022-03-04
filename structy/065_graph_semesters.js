//Write a function, semestersRequired, that takes in a number of courses (n) and a list of prerequisites
//as arguments. Courses have ids ranging from 0 through n - 1. A single prerequisite of [A, B] means
//that course A must be taken before course B. Return the minimum number of semesters required to
//complete all n courses. There is no limit on how many courses you can take in a single semester,
//as long the prerequisites of a course are satisfied before taking it.

//Note that given prerequisite [A, B], you cannot take course A and course B concurrently in the same semester. You must take A in some semester before B.

//You can assume that it is possible to eventually complete all courses.

const semestersRequired = (numCourses, prereqs) => {
  // todo
  const graph = buildGraph(prereqs, numCourses);
  const semesters = {};
  for (let node in graph) {
    if (graph[node].length === 0) semesters[node] = 1;
  }

  for (let node in graph) {
    traverse(graph, node, semesters);
  }

  let neededSems = 1;
  for (const sem in semesters) {
    neededSems = Math.max(neededSems, semesters[sem]);
  }

  return neededSems;
};

const traverse = (graph, node, semesters) => {
  if (node in semesters) return semesters[node];

  let semesterNeeded = 1;

  for (let neighbor of graph[node]) {
    semesterNeeded = Math.max(
      semesterNeeded,
      traverse(graph, neighbor, semesters)
    );
  }

  semesters[node] = 1 + semesterNeeded;
  return semesters[node];
};

const buildGraph = (edges, numCourses) => {
  const graph = {};
  for (let i = 0; i < numCourses; i += 1) {
    graph[i] = [];
  }
  for (const edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    graph[a].push(b);
  }

  return graph;
};

const numCourses = 6;
const prereqs = [
  [1, 2],
  [2, 4],
  [3, 5],
  [0, 5],
];
console.log(semestersRequired(numCourses, prereqs)); // -> 3
