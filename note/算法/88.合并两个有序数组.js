/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    const k = m + n;
    for (let i = k - 1, mums1Index = m - 1, nums2Index = n - 1; i >= 0; i--) {
        // 表示nums1 已经取完，完全取nums2的值即可
        if (mums1Index < 0) {
            nums1[i] = nums2[nums2Index--];
        } else if (nums2Index < 0) {
            // 表示nums2取完，完全取nums1的值即可
            break;
        } else if (nums1[mums1Index] > nums2[nums2Index]) {
            // nums1的值大于nums2的值，取nums1的值
            nums1[i] = nums1[mums1Index--];
        } else {
            // nums1的值小于nums2的值，取nums2的值
            nums1[i] = nums2[nums2Index--];
        }
    }
};


function merge2 = function (nums1, m, nums2, n) {
  const k = m + n; 
  const tem = [];
  for (let i = 0, mums1Index = 0, nums2Index = 0; i < k; i++) {
      // 表示nums1 已经取完，完全取nums2的值即可
      if (mums1Index >= m) {
          tem[i] = nums2[nums2Index++];
      } else if (nums2Index >= n) {
          // 表示nums2取完，完全取nums1的值即可
          tem[i] = nums1[mums1Index++];
      } else if (nums1[mums1Index] > nums2[nums2Index]) {
          // nums1的值大于nums2的值，取nums1的值
          tem[i] = nums2[nums2Index++];
      } else {
          // nums1的值小于nums2的值，取nums2的值
          tem[i] = nums1[mums1Index++];
      }
  }
  for (let i = 0; i < k; i++) {
    nums1[i] = tem[i];
  }
}


// 使用数组本身的方法
const merge3 = (nums1, m, nums2, n) => {
  // splice(start, deleteCount, item1, item2, ...)
  nums1.splice(m, n, ...nums2);
  nums1.sort((a, b) => a - b);
}


// 使用双指针
const merge4 = (nums1, m, nums2, n) => {
  let p1 = 0, p2 = 0;
  // 填满一个空组数
  const sorted = new Array(m + n).fill(0);
  let cur;
  while(p1 < m || p2 < n) {
    if (p1 === m) {
      cur = nums2[p2++];
    } else if (p2 === n) {
      cur = nums1[p1++];
    } else if (nums1[p1] < nums2[p2]) {
      cur = nums1[p1++];
    } else {
      cur = nums2[p2++];
    }
    sorted[p1 + p2 - 1] = cur;
  }
  for (let i = 0; i < m + n; i++) {
    nums1[i] = sorted[i];
  }
}
