/**
 * 简单对象的实现
 */
const a = {
    a: 'a',
};
const b = {
    b: 'b',
};
const c = {
    ...a,
    ...b,
};
console.log(c, 'c');

/***
 *  多个类的混入
 */
function mix(...mixins) {
    class Mix {
        constructor() {
            for (let mixin of mixins) {
                copyProperties(this, new mixin()); // 拷贝实例属性
            }
        }
    }

    for (let mixin of mixins) {
        copyProperties(Mix, mixin); // 拷贝静态属性
        copyProperties(Mix.prototype, mixin.prototype); // 拷贝原型属性
    }
    return Mix;
}

function copyProperties(target, socure) {
    for (let key of Reflect.ownKeys(socure)) {
        if (key !== 'constructor' && key !== 'name' && key !== 'prototype') {
            let desc = Object.getOwnPropertyDescriptor(socure, key);
            Object.defineProperty(target, key, desc);
        }
    }
}

class Parent {}
class Child {}

// 混入多个类
class Demo extends mix(Parent, Child) {}

/**
 *
 * Object.defineProperty(obj, prop, descriptor)
 * Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。
 * 
 * 
 * Object.defineProperties(obj, props)
 * Object.defineProperties() 方法直接在一个对象上定义新的属性或修改现有属性，并返回该对象。
 * 
 * 区别是一个只能定义一个属性，一个可以定义多个属性。
 */
