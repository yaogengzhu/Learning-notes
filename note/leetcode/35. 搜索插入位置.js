// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

// 请必须使用时间复杂度为 O(log n) 的算法。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/search-insert-position
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    const idex = nums.findIndex((item) => item === target);
    if (idex !== -1) {
        return idex;
    }
    nums.push(target);
    nums.sort((a, b) => a - b);
    return nums.findIndex((item) => item === target);
};

const nums = [1, 3, 5, 6],
    target = 2;
const result = searchInsert(nums, target);

console.log(result);
