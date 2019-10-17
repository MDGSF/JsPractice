const DefaultObj = {
  async root(ctx, next) {
    ctx.body = 'hello';
  },
};

module.exports = DefaultObj;
