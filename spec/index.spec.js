const wordSearch = require('../src/wordSearch');

describe('Функция wordSearch', () => {
  let flatPuzzle;
  let verticalPuzzle;
  let puzzle;

  beforeEach(() => {
    puzzle = [
      ['m', 'm', 'g', 'd', 'g', 'e', 'e'],
      ['a', 'i', 'n', 'i', 'a', 't', 'l'],
      ['r', 'g', 'o', 'k', 'y', 'n', 'b'],
      ['o', 'p', 'r', 'b', 't', 'g', 'r'],
      ['s', 'r', 'i', 'x', 'b', 't', 'u'],
      ['t', 'a', 'c', 'o', 'd', 'e', 's'],
      ['m', 'i', 'x', 'n', 'u', 'i', 'r'],
    ];
  });

  describe('возвращает начальные координаты слова в виде массива', () => {
    it('когда есть слово по горизонтали', () => {
      expect(wordSearch('code', puzzle)).toEqual([5, 2]);
    });
    it('когда есть слово по вертикали', () => {
      expect(wordSearch('elbrus', puzzle)).toEqual([0, 6]);
    });
    it('когда есть слово по диагонали', () => {
      expect(wordSearch('byte', puzzle, { search: 'diagonal' })).toEqual([
        3, 3,
      ]);
    });
    it('когда есть слово, расположенное змейкой по прямой', () => {
      expect(wordSearch('programming', puzzle)).toEqual([3, 1]);
    });
    it('когда есть слово, расположенное змейкой по прямой и по диагонали', () => {
      expect(wordSearch('matrix', puzzle, { search: 'all' })).toEqual([6, 0]);
    });
  });

  describe('Возвращает пустой массив', () => {
    it('если подаётся пустой паззл', () => {
      expect(wordSearch('matrix', [])).toEqual([]);
    });
    it('если подаётся пустое слово', () => {
      expect(wordSearch('', puzzle)).toEqual([]);
    });
  });
});
