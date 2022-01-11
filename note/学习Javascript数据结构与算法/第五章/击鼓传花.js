class Queue {
    constructor() {
        this.count = 0
        this.lowestCount = 0
        this.items = {}
    }

    /**
     * 向队列尾部添加一个(或多个)新的项。
     * @param {*} elment
     */
    enqueue(elment) {
        this.items[this.count] = elment
        this.count++
    }

    /**
     * 移除队列的第一项(即排在队列最前面的项)并返回被移除的元素。
     */
    dequeue() {
        if (this.isEmpty()) {
            return undefined
        }
        const result = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++
        return result
    }

    /**
     * 返回队列中第一个元素——最先被添加，也将是最先被移除的元素
     */
    peek() {
        if (this.isEmpty()) {
            return undefined
        }

        return this.items[this.lowestCount]
    }

    /***
     * 判断对列是否为空
     */
    isEmpty() {
        return this.count - this.lowestCount === 0
    }

    /**
     * 返回队列包含的元素个数
     */
    size() {
        return this.count - this.lowestCount
    }

    /**
     * 清空对列
     *
     * 要清空队列中的所有元素，我们可以调用 dequeue 方法直到它返回 undefined，也可以简 单地将队列中的属性值重设为和构造函数中的一样。
     */
    clear() {
        this.items = {}
        this.count = 0
        this.lowestCount = 0
    }

    toString() {
        if (this.isEmpty()) {
            return ''
        }

        let objString = `${this.items[this.lowestCount]}`

        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString += `${objString}, ${this.items[i]}`
        }

        return objString
    }
}

/**
 * 击鼓传花
 * 给一个数组结构，给一个终止数字，到谁谁剔除，下一轮继续，直到剩下的一个人
 */

function drinkingGame(list, num) {
    const queue = new Queue()
    // 将数据填入对列中
    for (let i = 0; i < list.length; i++) {
        queue.enqueue(list[i])
    }
    while (queue.size() > 1) {
        for (let i = 0; i < num - 1; i++) {
            queue.enqueue(queue.dequeue())
        }
        queue.dequeue()
    }
    return queue.peek()
}

const list = ['龙风', '张三', '罗翔', '说刑法']

console.log(drinkingGame(list, 2))
