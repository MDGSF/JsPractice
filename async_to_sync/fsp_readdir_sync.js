const fs = require('fs');
const fsPromises = fs.promises;

async function test1() {
  console.log("test1 start");
  var files = await fsPromises.readdir('/etc/');
  console.log("test1 end, files =", files);
}
test1().catch(console.error);

async function test2() {
  console.log("test2 start");
  var files = await fsPromises.readdir('/etc1/').catch(console.error);
  console.log("test2 end, files =", typeof files);
}

async function test3() {
  await test2().catch(console.error);
}
test3();


