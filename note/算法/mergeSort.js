/**
 * 归并排序
 * @param {[]} arr
 * @returns
 */
function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  function merge(left, right) {
    const arr = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        arr.push(left.shift());
      } else {
        arr.push(right.shift());
      }
    }
    return arr.concat(left, right);
  }
  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([1, 3, 5, 7, 9, 2, 4, 6, 8, 0]));
