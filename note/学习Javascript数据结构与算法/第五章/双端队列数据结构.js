class Deque {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    /***
     * 判断对列是否为空
     */
    isEmpty() {
        return this.count - this.lowestCount === 0;
    }

    /**
     * 返回队列包含的元素个数
     */
    size() {
        return this.count - this.lowestCount;
    }

    /**
     * 清空对列
     *
     * 要清空队列中的所有元素，我们可以调用 dequeue 方法直到它返回 undefined，也可以简 单地将队列中的属性值重设为和构造函数中的一样。
     */
    clear() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }

    toString() {
        if (this.isEmpty()) {
            return '';
        }

        let objString = `${this.items[this.lowestCount]}`;

        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString += `${objString}, ${this.items[i]}`;
        }

        return objString;
    }

    /**
     * 该方法在双端队列前端添加新的元素。
     * @param {*} element
     */
    addFront(element) {
        if (this.isEmpty()) {
            this.addBack(element);
        } else if (this.lowestCount > 0) {
            this.lowestCount--;
            this.items[this.lowestCount] = element;
        } else {
            for (let i = this.count; i > 0; i--) {
                this.items[i] = this.items[i - 1];
            }
            this.count++;
            this.lowestCount = 0;
            this.items[0] = element;
        }
    }

    /**
     * 该方法在双端队列后端添加新的元素(实现方法和 Queue 类中的 enqueue 方法相同)
     * @param {*} element
     */
    addBack(element) {}

    /**
     * 该方法会从双端队列前端移除第一个元素(实现方法和 Queue 类中的 dequeue 方法相同)。
     */
    removeFront() {}

    /**
     * 该方法会从双端队列后端移除第一个元素(实现方法和 Stack 类中的 pop 方法一样)。
     */
    removeBack() {}

    /**
     * 该方法返回双端队列前端的第一个元素(实现方法和 Queue 类中的 peek 方法一样)。
     */
    peekFront() {}

    /**
     * 该方法返回双端队列后端的第一个元素(实现方法和 Stack 类中的 peek 方法一样)。
     */
    peekBack() {}
}
