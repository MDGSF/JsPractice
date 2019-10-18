const log = require('../lib/common/logger');
const utils = require('../lib/common/utils');

const DefaultObj = {
  async root(ctx, next) {
    log.info('root request');
    ctx.body = 'hello koajs';
  },
};

module.exports = DefaultObj;
