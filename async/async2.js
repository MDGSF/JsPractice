// await only works inside async function.
// await makes Javascript wait until that promise settles and 
// returns its result.
async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000);
    });

    let result = await promise; // wait till the promise resolves

    console.log(result);
}

f();
