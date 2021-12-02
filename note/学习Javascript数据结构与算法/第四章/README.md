# 栈

## 栈数据结构
栈是一种遵从后进先出(LIFO)原则的有序集合。新添加或待删除的元素都保存在栈的同一端，称作栈顶，另一端就叫栈底。在栈里，新元素都靠近栈顶，旧元素都接近栈底。

#### 创建一个基于数组的栈,基于class
```js
class Stack {
    constructor() {
        this.items = [];
    }

    /**
     * 向栈添加元素
     * 添加一个新元素到栈顶
     */
    push(element) {
        this.items.push(element);
    }

    /**
     *  从栈移除元素
     *  移除栈顶的元素， 同时返回被移除的元素
     *  栈遵从 LIFO 原则，因此移 出的是最后添加进去的元素
     */
    pop() {
        return this.items.pop();
    }

    /**
     * 查看栈顶元素
     * 返回栈顶的元素，不对栈做任何修改(该方法不会移除栈顶的元素，仅仅返回它)
     */
    peek() {
        return this.items[this.items.length - 1];
    }

    /**
     * 检查栈是否为空
     * 如果栈里没有任何元素就返回true,否则返回false
     *
     * 下一个要实现的方法是 isEmpty，如果栈为空的话将返回 true，否则就返回 false。
     */
    isEmpty() {
        return this.items.length === 0;
    }

    /**
     * 清空栈元素
     *
     * 移除栈里的元素个数
     */
    clear() {
        this.items = [];
    }

    /**
     * 查看栈的长度
     * 返回栈里的元素个数，该方法和数组的length属性很类似
     */
    size() {
        return this.items.length;
    }
}
```

#### 基于javascript 对象创建一个stack 
```js
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

```