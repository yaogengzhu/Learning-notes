const arr = [2, 3,3 ,3 ,3, 3, ,5, 5, ,6, 9, 88]

console.log([...new Set([...arr])]) // 方式1

const arr1 = arr.reduce((acc, cur) => {
    if (!acc.includes(cur)) {
        acc.push(cur)
    }
    return acc
}, [])

console.log(arr1)