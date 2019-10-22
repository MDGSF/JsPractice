# 正则表达式

## 创建一个正则表达式

const re = /ab+c/; // 会被提前编译

const re = new RegExp("ab+c"); // 运行时创建

## 编写一个正则表达式的模式

### 字符 `\`

`/[a-z]\s/i` 和 `new RegExp("[a-z]\\s", "i")` 等价

`/[a-z]:\\/i` 和 `new RegExp("[a-z]:\\\\", "i")` 等价

### 字符 `^`

匹配输入的开始。如果多行标识被设置为 true，那么也匹配换行符后紧跟的位置。

`/^A/` 并不会匹配 "an A" 中的 'A'，但是会匹配 "An E" 中的 'A'。

### 字符 `\$`

匹配输入的结束。如果多行标识被设置为 true，那么也匹配换行符前的位置。

`/t$/` 并不会匹配 "eater" 中的 't'，但是会匹配 "eat" 中的 't'。

### 字符 `×`

匹配前一个表达式 0 次或多次。等价于 `{0,}`。

`/bo*/` 会匹配 "A ghost boooooed" 中的 'booooo' 和 "A bird warbled" 中的 'b'，
但是在 "A goat grunted" 中不会匹配任何内容。

### 字符 `+`

匹配前一个表达式 1 次或多次。等价于 `{1,}`。

`/a+/` 会匹配 "candy" 中的 'a' 和 "caaaaaandy" 中所有的 'a'，但是在 "cndy" 中
不会匹配任何内容。

## 参考链接

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match
