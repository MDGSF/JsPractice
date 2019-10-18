const log = require('../common/logger');

function dev(opts) {
  return async function catchAllError(ctx, next) {
    try {
      await next();
    } catch (err) {
      ctx.status = 500;
      log.error(`catch err = ${err}`);
      console.error(err);
    }
  };
}

module.exports = dev;
