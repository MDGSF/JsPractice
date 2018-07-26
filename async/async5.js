/*
async and await catch error.
*/

const fetch = require('node-fetch');

async function f1() {
    try {
        let response = await fetch('http://no-such-url');
    } catch(err) {
        console.log(err);
    }
}

f1();

async function f2() {
    let response = await fetch('http://no-such-url');
}

f2().catch(err => {
    console.log(err);
});


