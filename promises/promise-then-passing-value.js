function doubleUp(value) {
  return value * 2;
}

function increment(value) {
  return value + 1;
}

function output(value) {
  console.log(value);
}

var promise = Promise.resolve(1);
var p1 = promise.then(increment);
var p2 = p1.then(doubleUp);
var p3 = p2.then(output);
var p4 = p3.catch(function(error) {
  console.log(error);
});
