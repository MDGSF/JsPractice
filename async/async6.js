/*
When we need to wait for multiple promises, 
we can wrap them in Promise.all and the await.
*/

const fetch = require('node-fetch');

async function f() {
    try {
        let response = await Promise.all([
            fetch('http://www.baidu.com'),
            fetch('http://www.baidu.com'),
        ]);
        console.log(response);
    } catch(err) {
        console.log(err);
    }
}

f();


