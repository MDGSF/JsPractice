const log = require('../lib/common/logger');
const utils = require('../lib/common/utils');

const DefaultObj = {
  async root(ctx, next) {
    log.info('root');
    ctx.body = 'hello';
  },
};

module.exports = DefaultObj;
