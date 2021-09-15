function shallowCopy(obj) {
    let newObj = {}

    for (let key in obj) {
        newObj[key] = obj[key]
    }

    return newObj
}

const a = { 
    c: 2,
    f: {
        a: 3
    }
}
const d = shallowCopy(a)