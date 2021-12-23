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

    // 并集
    // intersection(ohterSet) {
    //     const intersectionSet = new Set();
    //     const values = this.values();
    //     for (let i = 0; i < values.length; i++) {
    //         if (ohterSet.has(values[i])) {
    //             intersectionSet.add(values[i]);
    //         }
    //     }
    //     return intersectionSet;
    // }

    // 更少的迭代方式
    intersection(ohterSet) {
        const intersectionSet = new Set();
        const values = this.values();
        const otherValues = ohterSet.values();
        let biggerSet = values;
        let smallSet = otherValues;

        if (otherValues.length - values.length > 0) {
            biggerSet = otherValues;
            smallSet = values;
        }
        smallSet.forEach((value) => {
            if (biggerSet.includes(value)) {
                intersectionSet.add(value);
            }
        });
        return intersectionSet;
    }
}

const set = new Set();
set.add(1);
set.add(2);
set.add(3);

const set1 = new Set();
set1.add(1);
set1.add(9);
set1.add(11);

console.log(set.intersection(set1));
