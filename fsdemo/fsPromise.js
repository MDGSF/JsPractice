/*
https://nodejs.org/docs/latest-v10.x/api/fs.html
*/
const fs = require('fs');
const fsPromises = fs.promises;

function parseJSON (data) {
  try {
    return JSON.parse(data);
  } catch (e) {
    console.log(data, e);
    return null;
  }
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
    const filehandle = await fsPromises.open('b', 'r+');
    console.log("filehandle =", filehandle);
    console.log("filehandle.fd =", filehandle.fd);

    const fileStat = await filehandle.stat();
    console.log(fileStat);

    const BUFSIZE = 10 * 1024 * 1024; // 10M

    // buffer is the buffer that the data will be written to.
    let buffer = new Buffer.alloc(BUFSIZE);

    // offset is the offset in the buffer to start writing at.
    const offset = 0;

    // length is an integer specifying the number of bytes to read.
    const length = min(fileStat.size, buffer.length);

    // position is an argument specifying where to begin reading from in the file.
    // If position is null, data will be read from the current file position,
    // and the file position will be updated.
    // If position is an integer, the file position will remain unchanged.
    const position = 0;

    // return data example:
    // {
    //   bytesRead: 14,
    //   buffer: <Buffer 49 27 6d 20 73 61 6d 70 6c 65 2e 74 78 74 ... 974 more bytes>
    // }
    const data = await filehandle.read(buffer, offset, length, position);
    console.log("data =", data);

    console.log(data.buffer.slice(0, data.bytesRead));

    const LF = '\n'.charCodeAt(0);
    let nextStartIndex = 0;
    let startIndex = 0;
    let endIndex = 0;
    let lastSuccessIndex = 0;
    for (let i = 0; i < data.bytesRead; i++) {
      if (buffer[i] !== LF) {
        continue;
      }

      startIndex = nextStartIndex;
      endIndex = i;
      nextStartIndex = i + 1;
      const lineBuf = buffer.slice(startIndex, endIndex);
      if (lineBuf.length === 0) {
        continue;
      }

      const lineStr = lineBuf.toString();
      if (lineStr.trim().length === 0) {
        continue;
      }

      const lineobj = parseJSON(lineStr);
      if (lineobj === null) {
        continue;
      }

      lastSuccessIndex = endIndex;

      console.log(lineobj);
    }

    console.log('lastSuccessIndex =', lastSuccessIndex);

  } finally {
    if (filehandle) {
      await filehandle.close();
    }
  }
}

test().catch(console.error);
