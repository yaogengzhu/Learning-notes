# 队列和双端队列

## 队列数据结构

队列是遵循先进先出(FIFO，也称为先来先服务)原则的一组有序的项。队列在尾部添加新元素，并从顶部移除元素。最新添加的元素必须排在队列的末尾。

使用class类创建一个队列
```js
class Queue {
    constructor(
        this.count = 0
        this.lowestCount = 0
        this.items = {}
    )

    /**
     * 向队列尾部添加一个(或多个)新的项。
     * @param {*} elment 
     */
    enqueue(elment) {
        this.items[this.count] = elment;
        this.count++;
    }

    /**
     * 移除队列的第一项(即排在队列最前面的项)并返回被移除的元素。
     */    
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
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
            return undefined;
        }

        return this.items[this.lowestCount];
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
```