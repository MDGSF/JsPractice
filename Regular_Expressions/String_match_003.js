// 当参数是一个字符串或一个数字，它会使用new RegExp(obj)来隐式转换成一个 RegExp。
// 如果它是一个有正号的正数，RegExp() 方法将忽略正号。

var str1 =
    'NaN means not a number. Infinity contains -Infinity and +Infinity in JavaScript.',
  str2 = 'My grandfather is 65 years old and My grandmother is 63 years old.',
  str3 = 'The contract was declared null and void.';

console.log(str1.match('number'));
console.log(str1.match(NaN));
console.log(str1.match(Infinity));
console.log(str1.match(+Infinity));
console.log(str1.match(-Infinity));
console.log(str2.match(65));
console.log(str2.match(+65));
console.log(str3.match(null));
