// 移动0 
function removeZeroes(nums) {
  if (nums === null) return
  let j = 0
  // 首次遍历，J指针记录非0的个数
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j++] = nums[i]
    }
  }
  // 时间复杂度 O(n)
  for(; j < nums.length; j++) {
    nums[j] = 0
  }
}


// 使用replace
function removeZeroes2(nums) {
  let i = 0;
  let p = 0;
  while(i < nums.length) {
    if (nums[p] === 0) {
      nums.splice(p, 1)
      nums.push(0)
    } else p++;
    i++
  } 
}


// 数组交换
function removeZeroes3(nums) {
  let i = 0;
  let j = i + 1;

  while(j < nums.length) {
    if (nums[i] !== 0) {
      i++
      j++
    } else {
      if (nums[j] !== 0) {
        [nums[i], nums[j]] = [nums[j], nums[i]]
        i++
      }
      j++
    }
  }
}