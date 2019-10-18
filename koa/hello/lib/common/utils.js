const utils = {
  /**
   * Delay for some milliseconds.
   * @param {Number} ms: milliseconds
   * @returns {Promise} promise
   * then value: undefined
   */
  delay(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  },
};

module.exports = utils;
