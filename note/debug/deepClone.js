function deepClone(origin, hasMap = new WeakMap()) {
    if (typeof origin !== 'object' || typeof origin === 'undefined') {
        return origin
    }

    let target = new origin.constructor()
    hasMap.set(origin, target)
    for (let k in origin) {
        if (Object.prototype.hasOwnProperty.call(origin, k)) {
            target[k] = deepClone(origin[k], hasMap)
        }
    }

    return target
}

const obj = {
    name: 'zs',
    city: {
        town: '武汉三镇',
    },
}

const obj1 = deepClone(obj)
obj1.city.town = '阳新'
console.log(obj1)
console.log(obj)
