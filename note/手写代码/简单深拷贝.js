function deepClone(obj) {
    let result = {}
    for (let key in obj) {
        if (result.hasOwnProperty(key)) {
            result[key] = deepClone(obj[key])
        } else {
            result[key] = obj[key]
        }
    }
    return result
}

function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]'
}
