/*
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match

str.match(regexp)

参数 regexp: 一个正则表达式对象。如果传入一个非正则表达式对象，则会隐式地使用
new RegExp(obj) 将其转换为一个 RegExp 。

*/

const str = 'For more information, see Chapter 3.4.5.1';
const re = /see (chapter \d+(\.\d)*)/i;
const found = str.match(re);
console.log(found);

/*
found = [
  'see Chapter 3.4.5.1',
  'Chapter 3.4.5.1',
  '.1',
  index: 22,
  input: 'For more information, see Chapter 3.4.5.1',
  groups: undefined
]

// 'see Chapter 3.4.5.1' 是整个匹配。
// 'Chapter 3.4.5.1' 被'(chapter \d+(\.\d)*)'捕获。
// '.1' 是被'(\.\d)'捕获的最后一个值。
// 'index' 属性(22) 是整个匹配从零开始的索引。
// 'input' 属性是被解析的原始字符串。
*/
