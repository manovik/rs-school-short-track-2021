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
  "use strict";
  const arr = [];

  matrix.forEach(el => {
    arr.push(Array());
  })
  
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      arr[i].push(count(matrix, i, matrix[j], j))
    }
  }

  function count(el, arrIdx, arr, elIdx) {
    let sum = 0;
    if(arr[arrIdx - 1]) {
      sum += arr[arrIdx - 1] ? 1 : 0;
    }
    if(arr[arrIdx + 1]) {
      sum += arr[arrIdx + 1] ? 1 : 0;
    }
    if(el[elIdx - 1]) {
      sum += el[elIdx - 1] ? 1 : 0;
    }
    if(el[elIdx + 1]) {
      sum += el[elIdx + 1] ? 1 : 0;
    }
    return sum;
  }

  return arr;
}

console.log(minesweeper([
 [true, false, false, false],
 [false, true, true, false],
 [false, true, true, false],
 [false, false, false, false]
]))

module.exports = minesweeper;

// 1 2 1 1
// 2 2 2 1
