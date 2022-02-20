const assert = require("assert");
const islandCount = (grid) => {
  const visited = new Set();
  let count = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (IsItANewIsland(grid, r, c, visited)) {
        count++;
      }
    }
  }
  return count;
};

const IsItANewIsland = (grid, r, c, visited) => {
  let validRow = r >= 0 && r < grid.length;
  let validColumn = c >= 0 && c < grid[0].length;
  if (validRow && validColumn) {
    let pos = r + "," + c;
    if (visited.has(pos)) return false;
    visited.add(pos);
    if (grid[r][c] === "W") return false;

    //unvisited land
    //mark neighbors nodes as visited - don't care abt return values
    IsItANewIsland(grid, r - 1, c, visited);
    IsItANewIsland(grid, r + 1, c, visited);
    IsItANewIsland(grid, r, c - 1, visited);
    IsItANewIsland(grid, r, c + 1, visited);

    //You got an island
    return true;
  } else {
    return false;
  }
};

const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

assert.equal(islandCount(grid), 3);

console.log("All test cases passed");
