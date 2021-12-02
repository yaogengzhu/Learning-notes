class Stack {
    constructor() {
        this.count = 0; // 记录栈的大小
        this.items = {};
    }
    push(element) {
        this.items[this.count] = element;
        this.count++;
    }
    pop() {
        // 先判断栈里是否为空
        if (this.isEmpty()) {
            return undefined;
        }
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count]; // 利用对象删除一个特定的值
        return result;
    }
    isEmpty() {
        return this.count === 0;
    }

    size() {
        return this.count;
    }

    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        const result = this.items[this.count--];
    }
    clear() {
        this.count = 0;
        this.items = {};
        // 当然了，可以遵循LIFO原则
        while (!this.isEmpty()) {
            this.pop();
        }
    }
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let objString = `${this.items[0]}`; // 不是空的可以拿出一个初始值
        for (let i = 1; i < this.count; i++) {
            objString += this.items[i];
        }
        return objString;
    }
}

const stack = new Stack();
stack.push(5);
stack.push(8);
stack.push(8);
stack.push(8);

console.log(stack.items);

console.log(stack.toString());

// stack.clear();
// console.log(stack.size());
// const stack = new Stack();
console.log(Object.getOwnPropertyNames(stack)); // {1}
console.log(Object.keys(stack)); // {2} 可以拿到栈的属性
console.log(stack.items); // {3}
