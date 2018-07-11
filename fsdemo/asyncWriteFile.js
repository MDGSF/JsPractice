'use strict';

var fs = require('fs');

var text = 'Hello, Node.js';
var buf = Buffer.from(text, 'utf-8');

fs.writeFile('outputText.txt', text, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('ok.');
    }
});

fs.writeFile('outputBinary.txt', buf, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('ok.');
    }
});

// 如果传入的数据是String，默认按UTF-8编码写入文本文件。
// 如果传入的参数是Buffer，则写入的是二进制文件。