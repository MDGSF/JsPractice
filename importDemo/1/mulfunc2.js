const funcs = {

  equal (a, b) {
    return a === b;
  },

  notEqual: function (a, b) {
    return !this.equal(a, b);
  }
};

module.exports = funcs;
