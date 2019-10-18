const http = require('http');
const Koa = require('koa');
const koaRouter = require('koa-router');
const koaBody = require('koa-body');

const catchAllError = require('./lib/middles/catchAllError');
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

    const apiV1Router = new koaRouter();
    const apiV2Router = new koaRouter();

    apiV1Router.post('/users', usersCtrl.createUser);
    apiV1Router.get('/users', usersCtrl.getUserList);
    apiV1Router.get('/users/:id', usersCtrl.getOneUserInfo);
    apiV1Router.put('/users/:id', usersCtrl.updateUser);
    apiV1Router.del('/users/:id', usersCtrl.deleteUser);

    const apiRouter = new koaRouter({
      prefix: '/api',
    });
    apiRouter.use('/v1', apiV1Router.routes(), apiV1Router.allowedMethods());
    apiRouter.use('/v2', apiV2Router.routes(), apiV2Router.allowedMethods());

    this.app.use(catchAllError());
    this.app.use(requestLogger());
    this.app.use(
      koaBody({
        jsonLimit: '1kb',
      }),
    );
    this.app.use(router.routes());
    this.app.use(router.allowedMethods());
    this.app.use(apiRouter.routes());
    this.app.use(apiRouter.allowedMethods());
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
