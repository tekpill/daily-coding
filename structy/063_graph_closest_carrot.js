const assert = require("assert");
const closestCarrot = (grid, startRow, startCol) => {
  // todo
  const visited = new Set([startRow + "," + startCol]);
  const queue = [[startRow, startCol, 0]];

  while (queue.length > 0) {
    const [r, c, distance] = queue.shift();

    if (grid[r][c] === "C") return distance;

    const deltas = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];

    for (let delta of deltas) {
      const [deltaRow, deltaCol] = delta;

      const neighborRow = r + deltaRow;
      const neighborCol = c + deltaCol;

      const rowInbound = neighborRow >= 0 && neighborRow < grid.length;
      const colInbound = neighborCol >= 0 && neighborCol < grid[0].length;
      const neighborPos = neighborRow + "," + neighborCol;
      if (
        rowInbound &&
        colInbound &&
        grid[neighborRow][neighborCol] !== "X" &&
        !visited.has(neighborPos)
      ) {
        queue.push([neighborRow, neighborCol, distance + 1]);
        visited.add(neighborPos);
      }
    }
  }

  return -1;
};

const grid = [
  ["O", "O", "O", "O", "O"],
  ["O", "X", "O", "O", "O"],
  ["O", "X", "X", "O", "O"],
  ["O", "X", "C", "O", "O"],
  ["O", "X", "X", "O", "O"],
  ["C", "O", "O", "O", "O"],
];

assert.equal(closestCarrot(grid, 1, 2), 4);

console.log("All test cases passed");
