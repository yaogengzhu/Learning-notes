function getNunmber(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return getNunmber(n - 1) + getNunmber(n - 2);
}

const s = getNunmber(6);
console.log(s);

function getNunmber1(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    // while()
    let fn1 = 1;
    let fn2 = 1;
    // for (let i = 2; i <= n; i++) {
    // let temp = fn1;
    // fn1 = fn2;
    // fn2 = temp + fn1;
    // }
    while (n > 1) {
        n--;
        let temp = fn1;
        fn1 = fn2;
        fn2 = temp + fn1;
    }
    return fn2;
}

const s1 = getNunmber1(6);
console.log(s1);
