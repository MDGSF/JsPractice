async function f1() {
    return 1;
}

async function f2() {
    return Promise.resolve(1);
}

/*
The word “async” before a function means one simple thing: a function always returns a promise. 
If the code has return <non-promise> in it, then JavaScript automatically wraps it into a resolved promise with that value.
f1 and f2 is the same function.
*/