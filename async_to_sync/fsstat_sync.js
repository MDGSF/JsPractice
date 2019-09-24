const util = require('util');
const fs = require('fs');

const stat = util.promisify(fs.stat);

/*
stat('.').then((stats) => {
  // Do something with `stats`
}).catch((error) => {
  // Handle the error.
});
*/

async function testStat() {
  console.log('stat start');
  const stats = await stat('.');
  console.log('stat end, stats =', stats);
}

testStat();
