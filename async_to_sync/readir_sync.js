var fs = require('fs');
console.log("start readdirSync");
var readDir = fs.readdirSync('/etc/');
console.log("readDir =", readDir);

/*
fs.readdirSync() 这种函数本身就是同步的，会导致一个问题。
因为 nodejs 是单线程的，这个同步的函数会导致整个线程卡住。

而使用 async, await 的话，还是异步执行的，只是在代码上看上去是同步的。
*/
