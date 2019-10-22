/*
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec

regexObj.exec(str)

exec() 方法在一个指定字符串中执行一个搜索匹配。返回一个结果数组或 null。
*/

const re = /quick\s(brown).+?(jumps)/gi;
const result = re.exec('The Quick Brown Fox Jumps Over The Lazy Dog');

console.log(result);

/*
上面脚本的返回值
result = [
  'Quick Brown Fox Jumps',
  'Brown',
  'Jumps',
  index: 4,
  input: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  groups: undefined
]
result[0]: 匹配的全部字符串
result[1],...result[n]: 括号中的分组捕获
result.index: 匹配到的字符位于原始字符串的基于 0 的索引值
result.input: 原始字符串
result.groups:

re = {
  lastIndex: 25,
  ignoreCase: true,
  global: true,
  multiline: false,
  source: "quick\s(brown).+?(jumps)",
  flags: "gi",
  dotAll: false,
  sticky: false,
  unicode: false,
}
re.lastIndex: 下一次匹配开始的位置
re.ignoreCase: 是否使用了 "i" 标记使正则匹配忽略大小写。
re.global: 是否使用了 "g" 标记来进行全局的匹配。
re.multiline: 是否使用了 "m" 标记使正则工作在多行模式（也就是，^ 和 $ 可以匹配
字符串中每一行的开始和结束（行是由 \n 或 \r 分割的），而不只是整个输入字符串的
最开始和最末尾处。）
re.source: 正则匹配的字符串
*/
