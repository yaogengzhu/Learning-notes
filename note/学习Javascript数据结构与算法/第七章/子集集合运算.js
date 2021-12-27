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

    // 判断 Set 是否是 ohterSet的子集
    isSubsetOf(ohterSet) {
        if (this.size() > ohterSet.size()) {
            return false;
        }
        let isSubset = true;
        // 每一个值都要属于otherSet
        this.values().every((value) => {
            if (!ohterSet.has(value)) {
                isSubset = false;
                return false;
            }
            return true;
        });

        return isSubset;
    }
}
