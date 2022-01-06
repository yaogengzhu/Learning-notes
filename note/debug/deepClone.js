function deeepClone(origin, hasMap = new WeakMap()) {
    if (typeof origin !== 'object' || typeof origin === 'undefined' || origin === null) {
        return origin
    }
    if (origin instanceof Date) {
        return new Date(origin)
    }
    if (origin instanceof RegExp) {
        return new RegExp(origin)
    }
    const hasKey = hasMap.get(origin)
    if (hasKey) {
        return hasKey
    }
    let target = new origin.constructor()
    hasMap.set(origin, target)
    for (let key in origin) {
        if (Object.prototype.hasOwnProperty.call(origin, key)) {
            target[key] = deeepClone(origin[key], hasMap)
        }
    }
    return target
}

const obj = {
    a: 1,
    b: {
        city: 'najing'
    },
    c: null
}

const obj1 = deeepClone(obj)
obj1.b.city = 'wuhan'
console.log(obj1)
console.log(obj)
