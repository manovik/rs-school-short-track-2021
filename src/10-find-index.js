/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let i = 0;

  const find = (arr, val) => {
    const arrLeft = arr.slice(0, Math.ceil(arr.length / 2));
    const arrRight = arr.slice(Math.ceil(arr.length / 2));

    if (arrLeft[arrLeft.length - 1] > val) {
      i = arrLeft.length - 1;
      return find(arrLeft, val);
    }
    if (arrRight[0] < val) {
      i += arrLeft.length;
      return find(arrRight, val);
    }
    if (arrLeft[arrLeft.length - 1] === val) {
      i = arrLeft.length - 1;
    }
    if (arrRight[0] === val) {
      i += arrLeft.length;
    }
    return i;
  };
  return find(array, value);
}

module.exports = findIndex;
