/**
 *  多维数组展平
 *  递归方式实现
 */
const arr = [[1, 34, 5, [2, 4], [[1, 4]]]]
function flatten(arr) {
  return [].concat(
    ...arr.map((item) => {
      return Array.isArray(item) ? flatten(item) : item
    })
  )
}
const result = flatten(arr)
console.log(result)

function flatten1(arr) {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten1(cur) : cur)
  }, [])
}
const result1 = flatten1(arr)
console.log(result1)