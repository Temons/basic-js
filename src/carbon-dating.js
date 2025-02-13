const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const sample = Number(sampleActivity);
  if (Number.isNaN(sample) || typeof sampleActivity !== 'string') {
    return false;
  }

  if (MODERN_ACTIVITY < sample || sample < 0) {
    return false;
  }

  const result = Math.ceil(Math.log(MODERN_ACTIVITY / sample) / (0.693 / HALF_LIFE_PERIOD));

  if (result === Infinity) {
    return false;
  }

  return result;
}

module.exports = {
  dateSample
};
