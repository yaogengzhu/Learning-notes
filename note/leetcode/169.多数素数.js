/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement1 = function (nums) {
  // 可以先统计每个元素出现的次数， 比较 nums / 2 最多的
  const obj = nums.reduce((acc, cur) => {
    return (acc = { ...acc, [cur]: (acc[cur] || 0) + 1 });
  }, {});

  const max = Object.keys(obj).reduce((pre, cur) => {
    return obj[cur] > obj[pre] ? cur : pre;
  });
  return max;
};

const nums = [3, 2, 3];

const majorityElement2 = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  const len = nums.length;
  const map = new Map();
  for (let num of nums) {
    if (!map.get(num)) {
      map.set(num, 1);
    } else {
      map.set(num, map.get(num) + 1);
      if (map.get(num) > len / 2) {
        return num;
      }
    }
  }
};

console.log(majorityElement2(nums));

const majorityElement3 = function (nums) {
  let ret = nums[0];
  let count = 1;
  for (num of nums) {
    if (num !== ret) {
      count--;
      if (count === 0) {
        count = 1;
        ret = num;
      }
    } else {
      count++;
    }
  }
  return ret;
};
