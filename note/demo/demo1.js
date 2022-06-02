const arr = [1, 2, 3, 4, 5]
const target = 5

function binarySearch(arr, target) {
  let left = 0
  let right = arr.length - 1
  let res = -1

  while (left <= right) {
    console.log(left, 'left')
    console.log(right, 'right')
    if (arr[0] === target) return (res = 0)
    let mind = Math.floor(left + right - left / 2)

    if (arr[mind] === target && arr[mind] > arr[mind - 1]) {
      res = mind
      break
    } else if (arr[mind] < target) {
      left = mind + 1
    } else {
      right = mind - 1
    }
  }

  return res
}

const result = binarySearch(arr, target)
console.log(result, 'result')
