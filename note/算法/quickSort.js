const arl = [10, 8, 10, 1, 2, 4];

// 快速排序
// 快速排序是一种O(n log n)的排序算法，它的基本思想是：
// 1. 先从数列中取出一个数作为基准数。
// 2. 分区过程，将比基准数大的放在右边，小于或等于基准数的数都放在左边。
// 3. 再对左右区间重复第二步，直到各区间只有一个数。
// 4. 最后合并
// 快速排序的时间复杂度为O(n log n)，空间复杂度为O(log n)。
// 快速排序的稳定性是不稳定的。

/**
 *
 * @param {number[]} arr
 */
function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    const pivot = arr[0];
    const mins = arr.slice(1).filter((x) => x <= pivot);
    const maxs = arr.slice(1).filter((x) => x > pivot);
    return [...quickSort(mins), pivot, ...quickSort(maxs)];
}

const result = quickSort(arl);

console.log(result);
