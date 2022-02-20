const assert = require("assert");
const minimumIsland = (grid) => {
  const visited = new Set();
  let minSize = Infinity;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      const thisCaseSize = sizeOfIsland(grid, r, c, visited);
      if (thisCaseSize > 0) {
        minSize = Math.min(minSize, thisCaseSize);
      }
    }
  }
  return minSize;
};

const sizeOfIsland = (grid, r, c, visited) => {
  let validRow = r >= 0 && r < grid.length;
  let validColumn = c >= 0 && c < grid[0].length;
  if (validRow && validColumn) {
    let pos = r + "," + c;
    if (visited.has(pos)) return 0;
    visited.add(pos);
    if (grid[r][c] === "W") return 0;

    return (
      1 +
      sizeOfIsland(grid, r - 1, c, visited) +
      sizeOfIsland(grid, r + 1, c, visited) +
      sizeOfIsland(grid, r, c - 1, visited) +
      sizeOfIsland(grid, r, c + 1, visited)
    );
  } else {
    return 0;
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

assert.equal(minimumIsland(grid), 2);

console.log("All test cases passed");
