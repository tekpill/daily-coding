//Write a function, bestBridge, that takes in a grid as an argument.
//The grid contains water (W) and land (L). There are exactly two islands in the grid.
//An island is a vertically or horizontally connected region of land.
//Return the minimum length bridge needed to connect the two islands.
//A bridge does not need to form a straight line.

const bestBridge = (grid) => {
  let mainIsland;
  for (let r = 0; r < grid.length; r += 1) {
    for (let c = 0; c < grid[0].length; c += 1) {
      const possibleIsland = traverseIsland(grid, r, c, new Set());
      if (possibleIsland.size > 0) {
        mainIsland = possibleIsland;
        break;
      }
    }
  }

  const visited = new Set(mainIsland);
  const queue = [];
  for (let pos of mainIsland) {
    const [row, col] = pos.split(",").map(Number);
    queue.push([row, col, 0]);
  }

  while (queue.length > 0) {
    const [row, col, distance] = queue.shift();

    const pos = row + "," + col;
    if (grid[row][col] === "L" && !mainIsland.has(pos)) return distance - 1;

    const deltas = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];
    for (let delta of deltas) {
      const [deltaRow, deltaCol] = delta;
      const neighborRow = row + deltaRow;
      const neighborCol = col + deltaCol;
      const neighborPos = neighborRow + "," + neighborCol;
      if (
        isInbounds(grid, neighborRow, neighborCol) &&
        !visited.has(neighborPos)
      ) {
        visited.add(neighborPos);
        queue.push([neighborRow, neighborCol, distance + 1]);
      }
    }
  }
};

const isInbounds = (grid, row, col) => {
  const rowInbounds = 0 <= row && row < grid.length;
  const colInbounds = 0 <= col && col < grid[0].length;
  return rowInbounds && colInbounds;
};

const traverseIsland = (grid, row, col, visited) => {
  if (!isInbounds(grid, row, col) || grid[row][col] === "W") return visited;

  const pos = row + "," + col;
  if (visited.has(pos)) return visited;

  visited.add(pos);

  traverseIsland(grid, row - 1, col, visited);
  traverseIsland(grid, row + 1, col, visited);
  traverseIsland(grid, row, col - 1, visited);
  traverseIsland(grid, row, col + 1, visited);

  return visited;
};

const grid = [
  ["W", "W", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["L", "W", "W", "W", "W"],
];

console.log(bestBridge(grid)); // -> 3
