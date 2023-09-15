// 找到所有消失的数字

/**
 *  遍历数组，将每个数字交换到它理应出现的位置上，下面情况不用换：
    当前数字本就出现在理应的位置上，跳过，不用换。
    当前数字理应出现的位置上，已经存在当前数字，跳过，不用换。
    再次遍历，如果当前位置没对应正确的数，如上图索引 4、5，则将对应的 5、6 加入 res。
    作者：笨猪爆破组
    链接：https://leetcode.cn/problems/find-all-numbers-disappeared-in-an-array/solutions/602135/shou-hua-tu-jie-jiao-huan-shu-zi-zai-ci-kzicg/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 * @param {*} nums 
 * @returns 
 */
function findDisappearedNumbers(nums) {
    let i = 0;
    while (i < nums.length) {
        if (nums[i] === i + 1) {
            i++;
            continue;
        }
        let j = nums[i] - 1;
        if (nums[i] === nums[j]) {
            i++;
            continue;
        }
        [nums[j], nums[i]] = [nums[i], nums[j]];
    }

    const res = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) res.push(i + 1);
    }
    return res;
}
