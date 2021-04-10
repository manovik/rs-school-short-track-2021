/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const arr = [];

  matrix.forEach(() => {
    arr.push([]);
  });

  function count(array, arrayIdx, elIdx) {
    let sum = 0;

    if (array[arrayIdx - 1] && array[arrayIdx - 1][elIdx - 1]) {
      sum += array[arrayIdx - 1][elIdx - 1] ? 1 : 0;
    }
    if (array[arrayIdx - 1] && array[arrayIdx - 1][elIdx]) {
      sum += array[arrayIdx - 1][elIdx] ? 1 : 0;
    }
    if (array[arrayIdx - 1] && array[arrayIdx - 1][elIdx + 1]) {
      sum += array[arrayIdx - 1][elIdx + 1] ? 1 : 0;
    }
    if (array[arrayIdx + 1] && array[arrayIdx + 1][elIdx - 1]) {
      sum += array[arrayIdx + 1][elIdx - 1] ? 1 : 0;
    }
    if (array[arrayIdx + 1] && array[arrayIdx + 1][elIdx]) {
      sum += array[arrayIdx + 1][elIdx] ? 1 : 0;
    }
    if (array[arrayIdx + 1] && array[arrayIdx + 1][elIdx + 1]) {
      sum += array[arrayIdx + 1][elIdx + 1] ? 1 : 0;
    }
    if (array[arrayIdx][elIdx - 1]) {
      sum += array[arrayIdx][elIdx - 1] ? 1 : 0;
    }
    if (array[arrayIdx][elIdx + 1]) {
      sum += array[arrayIdx][elIdx + 1] ? 1 : 0;
    }
    return sum;
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      arr[i].push(count(matrix, i, j));
    }
  }

  return arr;
}

module.exports = minesweeper;
