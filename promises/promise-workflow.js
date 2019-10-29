function asyncFunction() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      reject('Async Hello World');
    }, 16);
  });
}

asyncFunction()
  .then(function(value) {
    console.log(value);
  })
  .catch(function(error) {
    console.log('error =', error);
  });

asyncFunction().then(
  function(value) {
    console.log(value);
  },
  function(error) {
    console.log('error =', error);
  },
);
