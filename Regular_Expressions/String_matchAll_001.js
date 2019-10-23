/*
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll

str.matchAll(regexp)

在 matchAll 出现之前，通过在循环中调用regexp.exec来获取所有匹配项信息
（regexp需使用/g标志）：
*/

const regexp = RegExp('foo[a-z]*', 'g');
