const METHOD_NAME = 'm'
const symbol = Symbol()
let weirdMethods = {
    'method with spaces'(x){ return x + 1},
    [METHOD_NAME](x){ return x + 2},
    [symbol](x){return x + 3}
}

console.log(weirdMethods["method with spaces"](1))
console.log(weirdMethods[METHOD_NAME](1))
console.log(weirdMethods[symbol](1))


let p = {
    x: 1.0,
    y: 1.0,
    // get r() {
    //     return Math.hypot(this.x, this.y)
    // },
    // set r(newValue) {
    //     let oldValue = Math.hypot(this.x, this.y)
    //     let ratio = newValue / oldValue
    //     this.x *= ratio
    //     this.y *= ratio
    // },
    get theta() {
        return Math.atan2(this.y, this.x)
    }
}

console.log(p.x)
console.log(p.theta)

const q = Object.create(p)
q.x =  3
q.y = 4

console.log(q.theta)