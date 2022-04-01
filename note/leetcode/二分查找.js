// 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/binary-search
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let res = -1; // 没有找到则返回为-1
    if (nums.length === 0) {
        //数组为空， 返回-1
        return res;
    }
    let right = nums.length - 1; // 右侧的长度值
    let mid; // 中间值
    let left = 0;
    while (left <= right) {
        if (nums[0] === target) {
            return (res = 0);
        }
        mid = Math.floor(left + (right - left) / 2); // 取中间值
        if (nums[mid] === target && nums[mid] > nums[mid - 1]) {
            res = mid;
            break; //一定要写，否则死循环
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return res
}

const nums = [-1, 0, 3, 5, 9, 12],
    target = 9
const result = search(nums, target)
console.log(result, 'result')
