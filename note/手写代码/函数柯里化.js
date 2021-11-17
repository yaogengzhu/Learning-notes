const foo = compose((a, b, c, d) => {
    console.log(a, b, c, d)
})
foo(1)(2)(3)(4)
function compose(fn) {
    const g = (...allArgs) => allArgs.length >= fn.length ?
        fn(...allArgs) :
        (...args) => g(...allArgs, ...args)
    return g
}