const log = require('../lib/common/logger');

const Users = {
  async root(ctx, next) {
    ctx.body = 'hello';
  },
};

module.exports = Users;
