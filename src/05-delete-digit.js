/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  if (n > 9 && n < 100) {
    return Math.max(String(n)[0], String(n)[1]);
  }

  function getNum(num) {
    const newNums = [];
    const numString = String(num);

    for (let i = 0; i < numString.length; i++) {
      if (numString.slice(i + 1)) {
        newNums.push(numString.slice(0, i) + numString.slice(i + 1));
      }
    }
    return newNums;
  }
  return Math.max(...getNum(n));
}

module.exports = deleteDigit;
