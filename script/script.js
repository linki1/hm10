
function write(a = 'hi') {
    console.log(a);

}

function main(a = 2, b = 3, c) {

    let res = sum(1, 2);
    if (typeof c === 'function') {
        c(res)

    }
    if (c !== undefined && typeof c === 'function') {

        return c();

    }
    else {
        return sum(1, 3);
    }
}

function sum(a, b) {
    return a + b;
}

console.log(main(1, 2, write));