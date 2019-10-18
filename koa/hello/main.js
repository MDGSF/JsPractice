const http = require('http');
const Koa = require('koa');
const koaRouter = require('koa-router');
const koaBody = require('koa-body');

const requestLogger = require('./lib/middles/requestLogger');

const log = require('./lib/common/logger');
const config = require('./etc/config');
const defaultCtrl = require('./controllers/default');
const usersCtrl = require('./controllers/users');

class App {
  constructor() {
    this.app = new Koa();
    const router = new koaRouter();

    router.get('/', defaultCtrl.root);

    router.post('/users', usersCtrl.root);
    router.put('/users/:id', usersCtrl.root);
    router.del('/users/:id', usersCtrl.root);
    router.all('/users/:id', usersCtrl.root);

    this.app.use(async (ctx, next) => {
      try {
        await next();
      } catch (err) {
        ctx.status = 500;
        log.error(`catch err = ${err}`);
        console.error(err);
      }
    });

    this.app.use(requestLogger());
    this.app.use(
      koaBody({
        jsonLimit: '1kb',
      }),
    );
    this.app.use(router.routes());
    this.app.use(router.allowedMethods());
  }

  callback() {
    return this.app.callback();
  }
}

class Server {
  constructor() {
    this.app = new App();
  }

  start() {
    this.server = http.createServer(this.app.callback());
    this.server.listen(config.listen.port, config.listen.address, () => {
      const addr = this.server.address().address;
      const port = this.server.address().port;
      log.info('Listening on http://' + addr + ':' + port);
    });
  }
}

const server = new Server();
server.start();
