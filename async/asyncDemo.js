function resolveAfter2Seconds() {
    console.log("starting slow promise");
    return new Promise(resolve => {
        setTimeout(function() {
            resolve(20);
            console.log("slow promise is done");
        }, 2000);
    });
}

function resolveAfter1Seconds() {
    console.log("starting fast promise");
    return new Promise(resolve => {
        setTimeout(function() {
            resolve(10);
            console.log("fast promise is done");
        }, 1000);
    });
}

var sequentialStart = async function() {
    console.log('==Sequential start==');
    const slow = await resolveAfter2Seconds();
    const fast = await resolveAfter1Seconds();
    console.log(slow);
    console.log(fast);
}

var concurrentStart = async function() {
    console.log('==Concurrent start==');
    const slow = resolveAfter2Seconds();
    const fast = resolveAfter1Seconds();
    console.log(await slow);
    console.log(await fast);
}

var stillSerial = function() {
    console.log('==Concurrent start with Promise.all==');
    Promise.all([resolveAfter2Seconds(), resolveAfter1Seconds()]).then(([slow, fast]) => {
        console.log(slow);
        console.log(fast);
    });
};

var parallel = function() {
    console.log('==Parallel with Promise.then==');
    resolveAfter2Seconds().then((message)=>console.log(message));
    resolveAfter1Seconds().then((message)=>console.log(message));
}

sequentialStart(); // takes 2+1 seconds in total
setTimeout(concurrentStart, 4000); // takes 2 seconds in total
setTimeout(stillSerial, 7000); // takes 2 seconds in total
setTimeout(parallel, 10000); // trully parallel


