
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

let arr = [1, 2, 43, 2, 2, 2, 2]
const target = 4
var twoSum = function (nums, target) {
    let map = new Map()
    for (let i = 0, len = nums.length; i < len; i++) {
        console.log(map, '??/')
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i]
        } else {
            map.set(nums[i], i)
        }
    }
   
    return []
}




/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var ohterNums = function(nums, target) {
    let indexArr = [];
    let b = {};
    for(let i = 0;i<nums.length;i++){
        let val = target-nums[i];
        if(b[val]!==undefined){
            indexArr.push(i)
            indexArr.push(b[val])
        }
        b[nums[i]] = i
    }
    
    return indexArr
};
const list = ohterNums(arr, target)
console.log(list)
