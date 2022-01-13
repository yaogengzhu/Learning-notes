function PriorityQueue() {
    this.items = []

    function PriorityItems(element, priority) {
        this.element = element
        this.priority = priority
    }

    /**
     * 添加优先级队列
     * @param {} element
     * @param {*} priority
     */
    PriorityQueue.prototype.enqueue = function (element, priority) {
        const priorityItems = new PriorityItems(element, priority)
        if (this.items.length === 0) {
            this.items.push(priorityItems)
        } else {
            let added = false
            for (let i = 0; i < this.items.length; i++) {
                if (priority < this.items[i].priority) {
                    this.items.splice(i, 0, priorityItems)
                    added = true
                    break
                }
            }
            console.log(added, 'added')
            if (!added) {
                this.items.push(priorityItems)
            }
        }
    }
}

const p = new PriorityQueue()
p.enqueue(1, 3)
p.enqueue(2, 10)
p.enqueue(5, 1)
p.enqueue(5, 1)
p.enqueue(5, 1)
p.enqueue(5, 1)

// console.log(p.items)
// p.items.forEach( i => {
//     console.log(i.element, 'xx')
// })
