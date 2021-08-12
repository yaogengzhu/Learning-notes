// function doSometing<T>(arg: T): T {
//     return arg
// }
// const str: number = 4
// const result = doSometing(str)

function doSometing<T>(obj: { [ key: string ]: T }) {
    Object.entries(obj).forEach(([k, v]) => {
        delete obj[k];
    })
}

var obj = {
    a: 1,
    b: null,
    c: () => {}
}

doSometing(obj)

function tum<T, U>(arg: [T, U]): [T, U] {
    return [arg[0], arg[1]]
}

const s = tum([true, '3'])
s[1].big()