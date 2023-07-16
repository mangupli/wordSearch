const { getNeighbors, notFound, steps } = require('./utils');

function dfsUtil(coord, word, nextPosition, puzzle, visited, options) {
  // if all the letters has been found previously
  if (nextPosition === word.length) return true;

  // eslint-disable-next-line no-param-reassign
  visited[`${coord.x}${coord.y}`] = true;

  //
  const nearest = getNeighbors(coord, puzzle, steps[options.search]);

  for (let i = 0; i < nearest.length; i++) {
    const x = nearest[i][0];
    const y = nearest[i][1];

    if (!visited[`${x}${y}`] && puzzle[x][y] === word[nextPosition]) {
      return dfsUtil(
        { x, y },
        word,
        nextPosition + 1,
        puzzle,
        visited,
        options
      );
    }
  }
  return false;
}

function dfs(coord, word, puzzle, options) {
  // there will be all the visited cells by dfs algo
  const visited = {};
  const nextLetterIndex = 1;

  return dfsUtil(coord, word, nextLetterIndex, puzzle, visited, options);
}

// search =  'diagonal' | 'straight' | 'all'

function wordSearch(word, puzzle, options = { search: 'straight' }) {
  if (word && puzzle && word.length > 0) {
    const firstLetter = word[0];

    for (let i = 0; i < puzzle.length; i++) {
      for (let j = 0; j < puzzle[i].length; j++) {
        if (puzzle[i][j] === firstLetter) {
          const coord = { x: i, y: j };
          const found = dfs(coord, word, puzzle, options);
          if (found) return [i, j];
        }
      }
    }
  }
  return notFound;
}

module.exports = wordSearch;
