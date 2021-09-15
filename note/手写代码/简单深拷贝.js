function deepClone(obj) {
    let result = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object' && typeof obj[key] !== null) {
                result[key] = deepClone(obj[key])
            } else {
                result[key] = obj[key];
            }
        }
    }
    return result;
}

function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
}

const obj = {
    name: 'zyg',
    age: 19,
    address: {
        provice: '湖北',
        city: '武汉',
        location: ['1232323', '12123.32'],
    },
    hobby: ['平平'],
};

const obj1 = deepClone(obj, {});
obj1.address.provice = '湖南';
console.log(obj1);
console.log(obj);
