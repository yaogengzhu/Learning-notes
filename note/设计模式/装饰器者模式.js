const Plane = function (name) {
    this.name = name;
};

Plane.prototype.fire = function () {
    console.log('发射普通子弹');
};

// 新增两个装饰类
const MissileDecorator = function (plane) {
    this.plane = plane;
};

MissileDecorator.prototype.fire = function () {
    this.plane.fire();
    console.log(this.plane.name + '正在' + '发射导弹');
};

const AtomDecorator = function (plane) {
    this.plane = plane;
};

AtomDecorator.prototype.fire = function () {
    this.plane.fire();
    console.log(this.plane.name + '正在' + '发射原子弹');
};

var plane = new Plane('火星号');

const plane1 = new MissileDecorator(plane);
const plane2 = new AtomDecorator(plane);
// plane.fire();
plane1.fire();
plane2.fire();

/**
 * 导弹类和原子弹类，除了执行自身的方法之外，还调用了plane对象的fire方法
 */

// JavaScript 对象方式实现装饰器模式
const gun = {
    fire: function () {
        console.log('开枪');
    },
};
function missileDec() {
    console.log('用gun发射导弹');
}
const fire1 = gun.fire;
gun.fire = function () {
    fire1();
    missileDec();
};
gun.fire();

/***
 *  1. 保存原有的原有的函数， 在改写它
 */

let a = function () {
    console.log('ok');
};
const _a = a;
a = function () {
    _a();
    console.log('b');
};
console.log(a, _a);
console.log(a === _a);

/***
 *  缺点：该方式污染原型上的方法
 */
Function.prototype.before = function (beforeFn) {
    const self = this; // 保存原函数的引用
    return function () {
        beforeFn.apply(this, arguments); // 执行新函数，且保证this不被劫持，新函数接受的参数也原封不动的传入原函数，新函数在原函数之前执行
        return self.apply(this, arguments); // 执行原函数，并返回原函数的执行结果，且保证this不被劫持
    };
};

Function.prototype.after = function (afterFn) {
    const self = this;
    return function () {
        const result = self.apply(this, arguments);
        afterFn.apply(this, arguments);
        return result;
    };
};

const obj1 = {
    fn: function (name) {
        console.log(name);
    },
};
// function before () {}
const a = function () {
    console.log('no');
};
const obj2 = a.after(obj1.fn);
obj2('ok');


/***
 *  实际应用层： 数据上报层面
 */
