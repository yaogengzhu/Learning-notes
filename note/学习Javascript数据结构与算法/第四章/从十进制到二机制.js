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

/**
 * 转二机制
 * @param {} decNumber
 */
function decimalToBinary(decNumber) {
    const remStack = new Stack();
    let number = decNumber;
    let rem;
    let binaryString = '';
    while (number > 0) {
        // 当除法结果不为0时，会拿到一个余数
        rem = Math.floor(number % 2);
        remStack.push(rem);
        number = Math.floor(number / 2);
    }
    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }
    return binaryString;
}

/**
 *  进制转换算法
 */
function baseConverter(decNumber, base) {
    const remStack = new Stack();
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let number = decNumber;
    let rem;
    let baseString = '';

    if (!(base >= 2 && base <= 36)) {
        return '';
    }

    while (number > 0) {
        rem = Math.floor(number % base);
        remStack.push(rem);
        number = Math.floor(number / base);
    }

    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()]; // {7}
    }
    return baseString;
}
