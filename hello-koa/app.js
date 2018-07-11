const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
    console.log("app use 1");
    console.log(`${ctx.request.method} ${ctx.request.url}`);
    await next();
});

app.use(async (ctx, next) => {
    console.log("app use 2");
    const start = new Date().getTime();
    await next();
    const ms = new Date().getTime() - start;
    console.log(`Time: ${ms}ms`);
});

app.use(async (ctx, next) => {
    console.log("app use 3");
    await next();
    ctx.response.type = 'text.html';
    ctx.response.body = '<h1>Hello, koa2!</h1>';
});

app.listen(3000);
console.log('app started at port 3000...');

// 由async标记的函数称为异步函数，在异步函数中，可以用await调用另一个异步函数。

// 最后注意ctx对象有一些简写的方法，例如ctx.url相当于ctx.request.url，ctx.type相当于ctx.response.type