const notFound = []; // 'Слово не найдено'

const steps = {
  diagonal: [
    [-1, -1],
    [1, 1],
    [-1, 1],
    [1, -1],
  ],
  straight: [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ],
  all: [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
    [-1, -1],
    [1, 1],
    [-1, 1],
    [1, -1],
  ],
};

function getNeighbors({ x, y }, puzzle, directions) {
  const width = puzzle[0].length;
  const height = puzzle.length;

  const neighbors = [];

  directions.forEach((direction) => {
    const neighbor = [x + direction[0], y + direction[1]];
    if (
      neighbor[0] < height &&
      neighbor[0] >= 0 &&
      neighbor[1] < width &&
      neighbor[1] >= 0
    ) {
      neighbors.push(neighbor);
    }
  });

  return neighbors;
}

module.exports = {
  notFound,
  getNeighbors,
  steps,
};
