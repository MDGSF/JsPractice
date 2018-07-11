'use strict';

var fs = require('fs');

try {
    var data = fs.readFileSync('sample.txt', 'utf-8');
    console.log(data);
} catch (err) {
    console.error(err)
}

// 如果同步读取文件发生错误，则需要用try...catch捕获该错误：