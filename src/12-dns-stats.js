/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};

  domains.forEach((d) => {
    const rev = d.split('.').reverse();

    while (rev.length > 0) {
      const w = `.${rev.join('.')}`;
      if (Object.keys(obj).includes(w)) {
        obj[w] += 1;
      } else {
        obj[w] = 1;
      }
      rev.pop();
    }
  });

  return obj;
}

// const a = [
//   'code.yandex.ru',
//   'music.yandex.ru',
//   'yandex.ru',
// ];

// console.log(getDNSStats(a));

module.exports = getDNSStats;
