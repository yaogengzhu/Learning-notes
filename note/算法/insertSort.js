/**
 * 插入排序
 * @param {[]} arr
 * @returns
 */

function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let temp = arr[i];
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  return arr;
}

const arr = [4, 3, 2, 1, 10, 9, 8, 7, 6, 5];

console.log(insertSort(arr));
