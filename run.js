const puzzles = require('./data/puzzles');
const words = require('./data/words');
const wordSearch = require('./src/wordSearch');

function run() {
  puzzles.forEach((puzzle, index) => {
    console.log(`Puzzle № ${index}`);
    puzzle.forEach((row) => {
      console.log(JSON.stringify(row));
    });
    words.forEach((word) => {
      console.log(`\n Searching for word ${word}:`);
      const result = wordSearch(word, puzzle, { search: 'all' });
      console.log(result);
    });
  });
}

run();
