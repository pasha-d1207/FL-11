function addOne(x) {
    return x + 1;
}

function pipe() {
    let x = arguments[0]
    for (let i = 1; i < arguments.length; i++) {
        x = addOne(x);
    }
    return x;
}

pipe(1, addOne);