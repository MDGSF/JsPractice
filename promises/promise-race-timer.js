function timerPromisefy(delay) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(delay);
    }, delay);
  });
}

var startDate = Date.now();

Promise.race([
  timerPromisefy(1),
  timerPromisefy(32),
  timerPromisefy(64),
  timerPromisefy(128),
]).then(function(values) {
  console.log(Date.now() - startDate + 'ms');
  console.log(values);
});
