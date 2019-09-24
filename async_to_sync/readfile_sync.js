var fs = require('fs');

let sync_readFile = async function(file) {
  return new Promise(function(resolve, reject) {
    fs.readFile(file, function(err, data) {
      console.log('successful read file /etc/passwd');
      console.log(data);
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

async function testSyncRead() {
  console.log('start to read file /etc/passwd');
  var result = await sync_readFile('/etc/passwd');
  console.log('I will do something others here, result =', result);
}

testSyncRead();

