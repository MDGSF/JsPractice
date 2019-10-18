const http = require('http');

const Koa = require('koa');
const koaRouter = require('koa-router');
const koaBody = require('koa-body');
const koaSession = require('koa-session');

const catchAllError = require('./lib/middles/catchAllError');
const requestLogger = require('./lib/middles/requestLogger');

const log = require('./lib/common/logger');
const config = require('./etc/config');
const defaultCtrl = require('./controllers/default');
const usersCtrl = require('./controllers/users');
const sessionDemoCtrl = require('./controllers/sessionDemo');

class App {
  constructor() {
    this.app = new Koa();

    // init session
    this.app.keys = ['ksdajuicxzvbjt4t32218fsj1kluvndsalkfeqr1'];

    const sessionConfig = {
      key: 'koa:sess' /** (string) cookie key (default is koa:sess) */,
      /** (number || 'session') maxAge in ms (default is 1 days) */
      /** 'session' will result in a cookie that expires when session/browser is closed */
      /** Warning: If a session cookie is stolen, this cookie will never expire */
      maxAge: 86400000,
      autoCommit: true /** (boolean) automatically commit headers (default true) */,
      overwrite: true /** (boolean) can overwrite or not (default true) */,
      httpOnly: true /** (boolean) httpOnly or not (default true) */,
      signed: true /** (boolean) signed or not (default true) */,

      /* (boolean) Force a session identifier cookie to be set on every response.
       * The expiration is reset to the original maxAge, resetting the expiration
       * countdown. (default is false)
       */
      rolling: false,

      /** (boolean) renew session when session is nearly expired, so we can
       * always keep user logged in. (default is false)
       */
      renew: false,
    };

    const sessionMiddleware = koaSession(sessionConfig, this.app);

    // routers
    const router = new koaRouter();
    router.get('/', defaultCtrl.root);

    const apiV1Router = new koaRouter();
    const apiV2Router = new koaRouter();

    apiV1Router.post('/users', usersCtrl.createUser);
    apiV1Router.get('/users', usersCtrl.getUserList);
    apiV1Router.get('/users/:id', usersCtrl.getOneUserInfo);
    apiV1Router.put('/users/:id', usersCtrl.updateUser);
    apiV1Router.del('/users/:id', usersCtrl.deleteUser);
    apiV2Router.del('/users/:id', usersCtrl.deleteUserV2);

    apiV1Router.get('/sessiondemo/views', sessionDemoCtrl.getviews);

    const apiRouter = new koaRouter({
      prefix: '/api',
    });
    apiRouter.use('/v1', apiV1Router.routes(), apiV1Router.allowedMethods());
    apiRouter.use('/v2', apiV2Router.routes(), apiV2Router.allowedMethods());

    // add middlewares
    this.app.use(catchAllError());
    this.app.use(requestLogger());
    this.app.use(sessionMiddleware);
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
