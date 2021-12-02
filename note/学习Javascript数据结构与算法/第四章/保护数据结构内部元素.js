// 使用es2015的限定
const _items = Symbol('stackItems');

class Stack {
    constructor() {
        this[_items] = [];
    }

    push(item) {
        this[_items].push(item);
    }

    pop() {
        return this[_items].pop();
    }

    // 然后栈的方法
}

const stack = new Stack();
stack.push(3);

console.log(stack.pop(), 'ooo');
let objectSymbols = Object.getOwnPropertySymbols(stack);
console.log(objectSymbols.length); // 输出1
console.log(objectSymbols); // [Symbol()]
console.log(objectSymbols[0]); // Symbol()
stack[objectSymbols[0]].push(1);

/**
 * 从以上代码可以看到，访问 stack[objectSymbols[0]]是可以得到_items 的。并且， 
 * _items 属性是一个数组，可以进行任意的数组操作，比如从中间删除或添加元素(使用对象进 行存储也是一样的)。但我们操作的是栈，不应该出现这种行为。
 */
