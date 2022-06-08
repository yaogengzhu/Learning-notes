function bubbleSort(list) {
  for (let i = 0; i < list.length - 1; i++) {
    for (let j = i; j < list.length; j++) {
      if (list[i] > list[j]) {
        [list[i], list[j]] = [list[j], list[i]]
      }
    }
  }
  return list
}
let arr = bubbleSort([1, 3, 4, 2, 10 , 8, 7])
console.log(arr)
