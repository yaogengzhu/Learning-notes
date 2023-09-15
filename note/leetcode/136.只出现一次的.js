/**
 *
 * @param {number[]} nums
 * @return {number}
 */
//  给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

//  说明：

//  你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

//  来源：力扣（LeetCode）
//  链接：https://leetcode.cn/problems/single-number
//  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 超时
const singleNumber = function (nums) {
  const obj = nums.reduce((acc, cur) => {
    return (acc = { ...acc, [cur]: (acc[cur] || 0) + 1 });
  }, {});

  // obj 拿到key
  for (let key in obj) {
    if (obj[key] === 1) {
      return key;
    }
  }
};

const singleNumber1 = function (nums) {
  const set = new Set();
  for (num of nums) {
    set.has(num) ? set.delete(num) : set.add(num);
  }
  return [...set][0];
};
