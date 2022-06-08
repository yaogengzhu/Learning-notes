/**
 *  使用场景，全局的蒙层
 *  基本原理： 就是通过一个变量来记住这个实例子是否存在，如果存在，则返回该实例，否则创建一个新的实例子
 */

class Window {
    constructor(name) {
        this.name = name
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new Window()
        }

        return this.instance
    }
}

let w1 = Window.getInstance()
let w2 = Window.getInstance()

console.log(w1 === w2)

function Singleton() {
    //
}

Singleton.getInstance = function (...args) {
    if (!Singleton.instance) {
        Singleton.instance = new Singleton()
    }

    return Singleton.instance
}

Singleton.instance = null

const a = Singleton.getInstance()
const b = Singleton.getInstance()

console.log(a === b)

const Singleton1 = (function () {
    let instance = null
    return function () {
        if (instance) {
            return instance
        }

        return (instance = this)
    }
})()

const c = new Singleton1()
const d = new Singleton1()

console.log(c === d)

const CreateDiv = (function () {
    let instance
    let CreateDiv = function (html) {
        if (instance) {
            return instance
        }
        this.html = html
        this.init()
        return (instance = this)
    }

    CreateDiv.prototype.init = function () {
        const div = document.createElement('div')
        div.innerHTML = this.html
        document.body.appendChild(div)
    }
    return CreateDiv
})()

var e = new CreateDiv('sven1')
var f = new CreateDiv('sven2')
console.log(a === b)

/**
 *
 * 代理类实现单例模式
 */

class SingleMode {
    constructor(name) {
        this.name = name
    }

    getName() {
        return this.name
    }
}

// class ProxySingleMode {
//     static instance
//     constructor() {
//         if (!ProxySingleMode.instance) {
//             ProxySingleMode.instance = new SingleMode()
//         }
//         return ProxySingleMode.instance;
//     }
// }
// const ProxySingleMode = (function(){
//     let instance
//     return function () {
//         if (!instance) {
//             instance = new SingleMode()
//         }
//         return instance
//     }
// })()

const single = new ProxySingleMode()
const single1 = new ProxySingleMode()
console.log(single1 === single)

// 惰性单列

const getSingle = function (fn) {
    let instance
    return function () {
        return instance || instance === fn.apply(this, arguments)
    }
}


let createLoginLayer = (function () {
    let div
    return function () {
        if (!div) {
            div = document.createElement('div')
            div.style = 'width: 100px;height:100px;background: red;display:none'
            document.body.appendChild(div)
        }
        return div
    }
})()
const btn = document.getElementById('btn')

btn.onclick = function() {
    const div = createLoginLayer()
    console.log(div)
    div.style.display = 'block'
}