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

### 字符 `?`

匹配前一个表达式 0 次或 1 次。等价于 `{0,1}`。

`/e?le?/` 匹配 "angel" 中的 "el"，"angle" 中的 "le" 以及 "oslo" 中的 "l"。

如果**紧跟在任何量词 `*`、`+`、`?` 或者 `{}` 的后面**，将会使量词变为**非贪婪**
（匹配尽量少的字符），和缺省使用的**贪婪模式**（匹配尽可能多的字符）正好相反。
例如，对 "123abc" 使用 `/\d+/` 将会匹配 "123"，而使用 `/\d+?/` 则只会匹配到
"1"。

### 字符 `.`

（小数点）默认匹配换行符之外的任何单个字符。

例如，`/.n/` 将会匹配 "nay, an apple is on the tree" 中的 "an" 和 "on"，但是不会
匹配 "nay"。

如果 `s` (dotAll) 标志位被设置为 true，它也会匹配换行符。

### `(x)`

像下面的例子展示的那样，它会匹配 "x" 并且记住匹配项。其中括号被称为捕获括号。

模式 `/(foo) (bar) \1 \2/` 中的 "(foo)" 和 "(bar)" 匹配并记住字符串
"foo bar foo bar" 中的前两个单词。模式中的 `\1` 和 `\2` 表示第一个和第二个被
捕获括号匹配的子字符串，即 `foo` 和 `bar`，匹配了原字符串的后两个单词。

注意 `\1`，`\2`，...，`\n` 是用在正则表达式的匹配环节。

而在正则表达式的替换环节，则要使用 `$1`，`$2`，...，`$n` 这样的语法，
例如，`'bar foo'.replace(/(...) (...)/, '$2 $1')`。
`$&` 表示整个用于匹配的原字符串。

### `(?:x)`

## 参考链接

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match
