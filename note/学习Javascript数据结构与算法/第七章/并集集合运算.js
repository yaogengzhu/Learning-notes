class Set {
    constructor() {
        this.items = {};
    }

    add(element) {
        if (!this.has(element)) {
            this.items[element] = element;
            return true;
        }
        return false;
    }

    delete(element) {
        if (!this.has(element)) {
            delete this.items[element];
            return true;
        }
        return false;
    }

    // 第一个实现，添加和删除，其他方法都需要首先判断这个数是否存在对象中。唯一性
    has(element) {
        // return element in this.items

        // 方式1
        // return this.items.hasOwnProperty(element)
        /**
         * 方式2 --> 解决了不是所有的对象都继承了Object.prototype
         * 也有可能hasOwnProperty的方法被覆盖了，避免出现任何问题，使用Object.prototype.hasOwnProperty.call 是更安全的做法
         */
        return Object.prototype.hasOwnProperty.call(this.items, element);
    }

    clear() {
        this.items = {};
    }

    size() {
        return Object.keys(this.items).length;
    }

    values() {
        return Object.values(this.items);
    }

    // 实现Set类的union方法, 并集
    union(ohterSet) {
        const unionSet = new Set(); // 创建一个新的集合
        this.values().forEach((value) => unionSet.add(value));
        ohterSet.values().forEach((value) => unionSet.add(value));
        return unionSet;
    }
    // se5的实现方式
    // union(ohterSet) {
    //     const unionSet = new Set(); // 创建一个新的集合
    //     let values = this.values();
    //     for (let i = 0; i < values.length; i++) {
    //         unionSet.add(values[i]);
    //     }
    //     values = ohterSet.values();
    //     for (let i = 0; i < values.length; i++) {
    //         unionSet.add(values[i]);
    //     }
    //     return unionSet;
    // }
}

const set = new Set();
set.add(1);
set.add(5);

const set1 = new Set();
set1.add(1);
set1.add(2);
set1.add(3);
console.log(set);
console.log(set1);
console.log(set.union(set1));
