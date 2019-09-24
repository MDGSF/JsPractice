const util = require('util');
const fs = require('fs');

const readFile = util.promisify(fs.readFile);

async function test() {
  console.log('start to read file /etc/passwd');
  var result = await readFile('/etc/passwd');
  console.log('I will do something others here, result =', result);
}

test();
