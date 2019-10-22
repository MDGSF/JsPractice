/*
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec

查找所有匹配

当正则表达式使用 "g" 标志时，可以多次执行 exec 方法来查找同一个字符串中的成功匹配。
当你这样做时，查找将从正则表达式的 lastIndex 属性指定的位置开始。
（test() 也会更新 lastIndex 属性）。
*/
const re = /ab*/g;
const str = 'abbcdefabh';
var myArray;

while ((myArray = re.exec(str)) !== null) {
  console.log(`Found ${myArray[0]}. Next match starts at ${re.lastIndex}`);
}

// 输出：
// Found abb. Next match starts at 3
// Found ab. Next match starts at 9

/*
注意：不要把正则表达式字面量（或者RegExp构造器）放在 while 条件表达式里。
由于每次迭代时 lastIndex的属性都被重置，如果匹配，将会造成一个死循环。
并且要确保使用了'g'标记来进行全局的匹配，否则同样会造成死循环。
*/
