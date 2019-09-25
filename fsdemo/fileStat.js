const fs = require('fs');
const fsPromises = fs.promises;

function sleep(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

function min(a, b) {
  if (a < b) {
    return a;
  }
  return b;
}

async function test() {
  let filehandle = null;
  try {
    const filehandle = await fsPromises.open('fileStat.txt', 'r+');
    console.log("filehandle =", filehandle);
    console.log("filehandle.fd =", filehandle.fd);

    for (let i = 0; i < 10000; i++) {
      const fileStat = await filehandle.stat();
      console.log(fileStat);
      await sleep(20000);
    }

  } finally {
    if (filehandle) {
      await filehandle.close();
    }
  }
}

test().catch(console.error);
