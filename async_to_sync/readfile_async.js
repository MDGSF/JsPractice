var fs = require('fs');

console.log('start to read file /etc/passwd');
fs.readFile('/etc/passwd', function(err,data) {
    if (err) {
        throw err;
    }
    console.log('successful read file /etc/passwd');
    console.log(data);
});

console.log('I will do something others here');


