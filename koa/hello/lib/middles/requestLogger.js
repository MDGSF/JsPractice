const log = require('../common/logger');

function dev(opts) {
  return async function RequestLogger(ctx, next) {
    const startTime = new Date().getTime();
    log.info('<-- ' + `${ctx.request.method} ` + `${ctx.request.url}`);

    await next();

    const elspsed = new Date().getTime() - startTime;
    const elspsedFormated = formatTime(elspsed);
    log.info(
      '--> ' +
        `${ctx.request.method} ` +
        `${ctx.request.url} ` +
        `${ctx.status} ` +
        `${elspsedFormated}`,
    );
  };
}

function formatTime(sourceMS) {
  if (sourceMS < 1000) {
    return `${sourceMS}ms`;
  }

  const ms = sourceMS % 1000;
  const sec = Math.floor(sourceMS / 1000);
  if (sec < 60) {
    return `${sec}s,${ms}ms`;
  }

  return `${sourceMS}ms`;
}

module.exports = dev;
