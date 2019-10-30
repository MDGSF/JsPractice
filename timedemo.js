// new Date()
let now = new Date();
console.log(now);

// new Date(milliseconds)
// 参数是从 1970-01-01 00:00:00 UTC+0 开始所经过的毫秒数
let d_19700101 = new Date(0);
console.log(d_19700101); // 1970-01-01T00:00:00.000Z

// new Date(datestring)
let date_20191030 = new Date('2019-10-30');
console.log(date_20191030); // 2019-10-30T00:00:00.000Z

// new Date(year, month, date, hours, minutes, seconds, ms)
// 只有前两个参数是必须的。
// year 必须是四位数：2013 是合法的，98 是不合法的。
// month 计数从 0 （一月） 开始，到 11 （12月）。
// date 是当月的具体某一天，如果缺失，默认是 1。
// 如果 hours/minutes/seconds/ms 缺失的话，它们默认值是 0。

// 2011 年 1 月 1 号，自动从 utc 转成了本地时间，相差 8 小时
console.log(new Date(2011, 0, 1, 0, 0, 0, 0)); // 2010-12-31T16:00:00.000Z
console.log(new Date(2011, 0, 1)); // 2010-12-31T16:00:00.000Z

// ---------------------------------------------------

// 获取年份（4 位数）
console.log('local year =', now.getFullYear());

// 获取月份从 0 到 11。
console.log('loca month =', now.getMonth());

// 获取当月的日期，从 1 到 31，这个方法名称可能看起来有些令人疑惑。
console.log('local date =', now.getDate());

console.log('local hours =', now.getHours());
console.log('local minutes =', now.getMinutes());
console.log('local seconds =', now.getSeconds());
console.log('local milliseconds =', now.getMilliseconds());

// 获取一周中的第几天，从 0（星期天）到 6 （星期六）。
console.log('local day =', now.getDay());

// ---------------------------------------------------

// 获取年份（4 位数）
console.log('utc year =', now.getUTCFullYear());

// 获取月份从 0 到 11。
console.log('utc month =', now.getUTCMonth());

// 获取当月的日期，从 1 到 31，这个方法名称可能看起来有些令人疑惑。
console.log('utc date =', now.getUTCDate());

console.log('utc hours =', now.getUTCHours());
console.log('utc minutes =', now.getUTCMinutes());
console.log('utc seconds =', now.getUTCSeconds());
console.log('utc milliseconds =', now.getUTCMilliseconds());

// 获取一周中的第几天，从 0（星期天）到 6 （星期六）。
console.log('utc day =', now.getUTCDay());

// ---------------------------------------------------

// 返回日期的时间戳 —— 从 1970-1-1 00:00:00 UTC+0 开始的毫秒数。
console.log(now.getTime());

// 返回时区偏移数，以分钟为单位：
console.log(now.getTimezoneOffset()); // -480

// ---------------------------------------------------

// setFullYear(year [, month, date])
// setMonth(month [, date])
// setDate(date)
// setHours(hour [, min, sec, ms])
// setMinutes(min [, sec, ms])
// setSeconds(sec [, ms])
// setMilliseconds(ms)
// setTime(milliseconds) （使用自 1970-01-01 00:00:00 UTC+0 开始的毫秒数来设置整个日期对象）
// 以上方法除了 setTime() 都有 UTC 版本，比如 setUTCHours()。

let todayZero = new Date();
todayZero.setHours(0, 0, 0, 0);
console.log(todayZero); // 日期依然是今天，时间为 00:00:00。

// 自动校准
let d_20191102 = new Date(2019, 9, 33);
console.log(d_20191102);

let two_days_after = new Date(2016, 1, 28);
two_days_after.setDate(two_days_after.getDate() + 2);
console.log(two_days_after);

let ago_one_year = new Date();
ago_one_year.setDate(ago_one_year.getDate() - 365);
console.log(`ago_one_year = ${ago_one_year}`);

// 30 秒之前
const ago_30_seconds = new Date(new Date() - 30 * 1000);
console.log(`ago_30_seconds = ${ago_30_seconds}`);

// 5 分钟之前
const ago_5_minutes = new Date(new Date() - 5 * 60 * 1000);
console.log(`ago_5_minutes = ${ago_5_minutes}`);

// 获取某个月的最后一天
// new Date() 的第 3 个参数 date 默认是 1 开始的，这里填 0 就会自动往前推一天
function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}
console.log(`getLastDayOfMonth(2012, 0) = ${getLastDayOfMonth(2012, 0)}`);

// 返回今天已经过去了多少秒
function getSecondsToday() {
  let now = new Date();
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let diff = now - today;
  return Math.round(diff / 1000);
}
console.log(`getSecondsToday()  = ${getSecondsToday()}s`);

function getSecondsToday2() {
  let now = new Date();
  return now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
}
console.log(`getSecondsToday2() = ${getSecondsToday2()}s`);

// 距离明天还有多少秒
function getSecondsToTomorrow() {
  let now = new Date();
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  let diff = tomorrow - now;
  return Math.round(diff / 1000); // convert millisecond to second
}
console.log(`getSecondsToTomorrow()  = ${getSecondsToTomorrow()}s`);

function getSecondsToTomorrow2() {
  const now = new Date();
  const totalSecondsToday =
    now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
  const totalSecondsInADay = 86400;
  return totalSecondsInADay - totalSecondsToday;
}
console.log(`getSecondsToTomorrow2() = ${getSecondsToTomorrow2()}s`);

// ---------------------------------------------------

// 获取时间戳，毫秒数
console.log(+now);
console.log(now.getTime());

// Date 对象直接相减可以得到 毫秒数
const start = new Date();
for (let i = 0; i < 100000; i += 1) {
  let dosomething = i * i * i * i;
}
const end = new Date();
console.log(`The loop elpsed ${end - start}ms.`);

// Date.now()，它会返回当前的时间戳。
// 它相当于 new Date().getTime()，但它不会在中间创建一个 Date 对象。
// 因此它更快，而且不会对垃圾处理造成额外的压力。
const start2 = Date.now();
for (let i = 0; i < 100000; i += 1) {
  let dosomething = i * i * i * i;
}
const end2 = Date.now();
console.log(`The loop elpsed ${end2 - start2}ms.`);

// ---------------------------------------------------

/*
Date.parse(str) 方法可以从一个字符串中读取日期。
字符串的格式是：YYYY-MM-DDTHH:mm:ss.sssZ，其中：
YYYY-MM-DD —— 日期：年-月-日。
字符串 "T" 是一个分隔符。
HH:mm:ss.sss —— 时间：小时，分钟，秒，毫秒。
可选字符 'Z' 代表时区。单个字符 Z 代表 UTC+0。
*/
let d_20120126_ms = Date.parse('2012-01-26T13:51:50.417-07:00');
let d_20120126 = new Date(d_20120126_ms);
console.log(d_20120126_ms);
console.log(d_20120126);

// ---------------------------------------------------

function yesterday() {
  let now = new Date();
  now.setDate(now.getDate() - 1);
  return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
}

function today() {
  let now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
}

function day(dayOffset = 0) {
  let now = new Date();
  if (dayOffset !== 0) {
    now.setDate(now.getDate() + dayOffset);
  }
  return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
}

console.log(`yesterday = ${yesterday()}`);
console.log(`today = ${today()}`);
console.log(`day(-1) = ${day(-1)}`);
console.log(`day() = ${day()}`);
console.log(`day(1) = ${day(1)}`);
console.log(`day(2) = ${day(2)}`);
