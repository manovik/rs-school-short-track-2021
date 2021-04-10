/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const nArr = n.split('-');
  let isMac48 = true;
  if (nArr.length === 6) {
    nArr.forEach((num) => {
      if (isMac48 && num.length === 2) {
        if (num.match(/[\d]{2}|[A-F]{2}|\d[A-F]|[A-F]\d/)) {
          isMac48 = true;
        } else {
          isMac48 = false;
        }
      } else {
        isMac48 = false;
      }
      return isMac48;
    });
  } else {
    return false;
  }
  return isMac48;
}

module.exports = isMAC48Address;
