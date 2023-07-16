## wordSearch
dfs algorithm for searching words in a puzzle

### usage:
It returns the coordinates of the beginning of a word when it's found in the puzzle:
```js
const puzzle =   [
    ['x', 'k', 'w', 'd', 'o', 'e', 's'],
    ['a', 'z', 'o', 'r', 'a', 'i', 'd'],
  ];

const found = wordSearch('word', puzzle);

console.log(found) // [0, 2];
```
It returns an empty array if the word is not found or the word/puzzle is empty.

By default, it searches by straight lines, but it can search diagonal by receiving options:

```js
const puzzle =   [
    ['x', 'x', 'x', 'x', 'd', 'x'],
    ['x', 'x', 'x', 'r', 'x', 'x'],
    ['x', 'x', 'o', 'x', 'x', 'x'],
    ['x', 'w', 'x', 'x', 'x', 'x'],
  ];

const found = wordSearch('word', puzzle, {search: 'diagonal'});

console.log(found) // [3, 1];
```
Or both:

```js
const puzzle =   [
    ['x', 'x', 'o', 'd', 'x', 'x'],
    ['x', 'w', 'r', 'x', 'x', 'x'],
  ];

const found = wordSearch('word', puzzle, {search: 'all'});

console.log(found) // [3, 1];
```

