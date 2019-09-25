function sleep(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

async function test() {
  console.log('test start, ', new Date());
  await sleep(2000);
  console.log('test end, ', new Date());
}

test();
