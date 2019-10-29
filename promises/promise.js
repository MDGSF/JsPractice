var promise = new Promise(function(resolve, reject) {
  console.log('inner promise');
  resolve(42);
});
console.log(promise);
