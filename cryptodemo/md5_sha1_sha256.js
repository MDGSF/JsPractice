const crypto = require('crypto');

const hashMd5 = crypto.createHash('md5');
hashMd5.update('Hello, world!');
hashMd5.update('Hello, nodejs!');
console.log(hashMd5.digest('hex'));

const hashSha1 = crypto.createHash('sha1');
hashSha1.update('Hello, world!');
hashSha1.update('Hello, nodejs!');
console.log(hashSha1.digest('hex'));

const hashSha256 = crypto.createHash('sha256');
hashSha256.update('Hello, world!');
hashSha256.update('Hello, nodejs!');
console.log(hashSha256.digest('hex'));

const hashSha512 = crypto.createHash('sha512');
hashSha512.update('Hello, world!');
hashSha512.update('Hello, nodejs!');
console.log(hashSha512.digest('hex'));