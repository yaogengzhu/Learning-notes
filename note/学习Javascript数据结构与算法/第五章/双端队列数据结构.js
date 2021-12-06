class Deque {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
    isEmpty() {}

    clear() {}

    size() {}

    toString() {}

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
