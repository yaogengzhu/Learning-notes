// 有一种数据类型可以确保属性是私有的，这就是 WeakMap。
// 数组版本
const items = new WeakMap(); // 声明一个WeakMap 变量items

class Stack() {
    constructor() {
        itesm.set(this, []) // this. 作为健，把代表栈的数组存入items
    }

    push(element) {
        const s = items.get(this);
        s.push(element);
    }
    pop() {
        const s = items.get(this);
        const r = s.pop();
        return r
    }
}