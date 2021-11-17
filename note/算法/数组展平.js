/**
 *  多维数组展平
 *  递归方式实现
 */
const arr =  [[1,34,5, [2,4], [[1,4]]]]
function flatten(arr) {
    return [].concat(
        ...arr.map(item => {
            return Array.isArray(item) ? flatten(item) : item
        })
    )
}
const result = flatten(arr)
console.log(result)