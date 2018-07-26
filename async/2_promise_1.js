var readFile = require('fs-readfile-promise');

var fileA = 'testfile1.txt';
var fileB = 'testfile2.txt';

readFile(fileA)
.then(function(data) {
    console.log(data.toString());
})
.then(function() {
    return readFile(fileB);
})
.then(function(data) {
    console.log(data.toString());
})
.catch(function(err) {
    console.log(err);
});
