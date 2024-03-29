// 一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶，求该青蛙跳上一个n级的台阶总共有多少种跳法？

//  第一次递归函数功能
function fn(n) {
  // 找到递归结束的条件
  if (n <= 2) return n
  // 找到函数的等价关系
  // 每次跳的时候，可以选择跳一级台阶，也可以选择跳两级台阶， 有两种跳法
  // 第一种跳法：第一次跳了一级台阶，那么剩下的n-1级台阶，就有fn(n-1)种跳法
  // 第二种跳法：第一次跳了两级台阶，那么剩下的n-2级台阶，就有fn(n-2)种跳法
  // 所以，n级台阶的跳法就是fn(n-1) + fn(n-2)
  return fn(n - 1) + fn(n - 2)
}

// const result = fn(5)
// console.log(result)

// 优化解法
function fn1(n) {
  const map = new Map()
  if (n <= 2) return n
  if (map.get(n)) {
    return map.get(n)
  }
  const ret = fn1(n - 1) + fn1(n - 2)
  map.set(n, ret)
  return ret
}


const result = fn1(315)
console.log(result)


// 循环解法
function fn3(n) {
  if (n === 1) return 1
  if (n === 2) return 2

  const result = 0
  let pre = 2
  let prepre = 1
  for (let i = 3; i <= n; i++) {
    result = pre + prepre
    prepre = pre
    pre = result
  }
  return result
}