// 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/majority-element
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    // const hasMap = new Map()
    // nums.forEach(item => {
    //     if (hasMap.get(item)) {
    //         hasMap.set(item, hasMap.get(item) + 1)
    //     } else {
    //         hasMap.set(item, 1)
    //     }
    // })

    // let map = new Map();
    // for (let i = 0; i < nums.length; i ++) {
    //     map.set(nums[i], (map.get((nums[i])) || 0) + 1);
    //     if(map.get(nums[i]) > nums.length / 2) {
    //         return nums[i];
    //     }
    // }
    let flag = 0
    nums.reduce((all, cur) => {
        if (cur in all) {
            all[cur]++
        } else {
            all[cur] = 1
        }
        if (all[cur] > nums.length / 2) {
            flag = cur
        }
        return all
    }, {})

    return flag
}
