// 单例子模式 保证一个类中只有一个实例
/**
 *  使用场景，全局的蒙层
 */

class Window {
    constructor(name) {
        this.name = name;
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new Window();
        }

        return this.instance;
    }
}

let w1 = Window.getInstance();
let w2 = Window.getInstance();

console.log(w1 === w2);

function Singleton() {
    //
}

Singleton.getInstance = function (...args) {
    if (!Singleton.instance) {
        Singleton.instance = new Singleton();
    }

    return Singleton.instance;
};

Singleton.instance = null;

const a = Singleton.getInstance();
const b = Singleton.getInstance();

console.log(a === b);

const Singleton1 = (function () {
    let instance = null;
    return function () {
        if (instance) {
            return instance;
        }

        return (instance = this);
    };
})();

const c = new Singleton1();
const d = new Singleton1();

console.log(c === d);

const CreateDiv = (function () {
    let instance;
    let CreateDiv = function (html) {
        if (instance) {
            return instance;
        }
        this.html = html;
        this.init();
        return (instance = this);
    };

    CreateDiv.prototype.init = function () {
        const div = document.createElement('div');
        div.innerHTML = this.html;
        document.body.appendChild(div);
    };
    return CreateDiv;
})();

var e = new CreateDiv('sven1');
var f = new CreateDiv('sven2');
console.log( a === b)