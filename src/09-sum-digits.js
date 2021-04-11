/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let j = n;

  if (j < 10) {
    return j;
  }
  const count = (num) => String(num).split('').reduce((acc, m) => +acc + +m);

  j = count(j);
  return getSumOfDigits(j);
}

module.exports = getSumOfDigits;
