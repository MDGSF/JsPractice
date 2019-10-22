/*
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

regexObj.test(str)

test() 方法执行一个检索，用来查看正则表达式与指定的字符串是否匹配。
返回 true 或 false。
*/

const str = 'hello world!';
const result = /^hello/.test(str);
console.log(result); // true
