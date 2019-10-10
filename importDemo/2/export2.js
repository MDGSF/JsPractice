var a = 1;
var b = 2;
var c = 3;
var d = 4;

exports = {
  a,
  b,
};

module.exports = {
  c,
  d,
};

/*
exports 和 module.exports 默认就是两个指向同一个 {} 的指针。
上面的代码让 export 和 module.exports 分别指向了两个新的对象 {}。
最终闭包返回的是 module.exports 指向的对象。
*/
