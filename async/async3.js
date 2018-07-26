
async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000);
    });

    let result = await promise; // wait till the promise resolves

    console.log(result);
}

f();
f();
f();

/*
Inside function f, code exec sync.
But there three function f, exec at the same time.
*/
