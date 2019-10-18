const SessionDemoObj = {
  async getviews(ctx, next) {
    let n = ctx.session.views || 0;
    ctx.session.views = ++n;
    ctx.body = n + ' views';
  },
};

module.exports = SessionDemoObj;
