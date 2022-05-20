/**
 * reduce 方法对数组的每个元素按属性执行一个您提供的reducer函数，每一次运行reducer会将前元素的计算结果作为参数传入， 最后将其汇总为单个返回值
 */

const arr = [1, 2, 3, 4]

const newList = arr.reduce((pre, cur, curIndex, self) => {
  return pre.concat(cur * 2)
}, [])

// console.log(newList)

/**
 *  重点注意 reduce() 行为 callbackFn 应是一个接受四个参数的函数
 *  callbackFn 传入四个参数
 *  1. previousValue (前一次调用callbackFn得到的值)
 *  2. currentValue （数组中正在处理的值）
 *  3. currentIndex (数组正在处理元素的索引)
 *  4. 被遍历的对象
 *
 */

// const getMax = (a, b) => Math.max(a, b)

const result = [1, 2].reduce((a, b) => {
  // console.log(b, '?')
  return Math.max(a, b)
}, 10) // 100

// console.log(result)

/**
 * 如果数组仅有一个元素，并且没有提供返回值时，或提供了返回值，但数组为空，那么此唯一值被返回且 callbackFn不会被调用
 */

const array = [15, 16, 17, 18, 19]

function reducer(previous, current, index, array) {
  const returns = previous + current
  console.log(
    `previous: ${previous}, current: ${current}, index: ${index}, returns: ${returns}`
  )
  return returns
}

array.reduce(reducer)

let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']
const calculate = (pre, cur) => {
  if (Reflect.has(pre, cur)) {
    pre[cur] += 1
  } else {
    pre[cur] = 1
  }
  return pre
}

const list = names.reduce(calculate, {})

const numbers = [-5, 6, 2, 0]

// 过滤小于的数据
const newNumbers = numbers.reduce((pre, cur) => {
  if (cur > 0) {
    console.log(pre, 'ok')
    return pre.concat(cur)
  }
  return pre
}, [])
// console.log(newNumbers)

const otherList = numbers.filter((item) => {
  console.log(item, '?')
  return item > 0
})

Array.prototype.mapUsingReduce = function (callbackFn, initialValue) {
  return this.reduce(function (pre, cur, index, arr) {
    pre[index] = callbackFn.call(initialValue, cur, index, arr)
    return pre
  }, [])
}
