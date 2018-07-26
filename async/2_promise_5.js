var promise = new Promise(function(resolve, reject) {
    // do a thing, possibly async, then...
    if (true/* everything turned out fine */) {
        resolve("Stuff worked!");
    } else {
        reject(Error("It broke"));
    }
});

promise.then(function(result) {
    console.log(result);
}, function(err) {
    console.log(err);
})