/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let finalStr = '';
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length;) {
      if (str[i] === str[j]) {
        count += 1;
        j++;
      } else {
        finalStr += count > 1 ? `${count}${str[i]}` : str[i];
        i = j;
        count = 0;
      }
    }
    finalStr += count > 1 ? `${count}${str[i]}` : str[i];
    count = 0;
    break;
  }
  return finalStr;
}

module.exports = encodeLine;
