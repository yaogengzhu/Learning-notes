/***
 *  给你一个混合字符串 s ，请你返回 s 中 第二大 的数字，如果不存在第二大的数字，请你返回 -1 。
 *  输入：s = "dfa12321afd"
 *  输出：2
 *  解释：出现在 s 中的数字包括 [1, 2, 3] 。第二大的数字是 2 。
 */
/**
 * @param {string} s
 * @return {number}
 */
const secondHighest = function (s) {
    let arr = s.match(/\d/g)
    arr = [...new Set([...arr])]
    console.log(arr)
    if (arr.length === 0 || arr.length === 1) return -1
    const newArr = arr.filter((item) => +item !== Math.max.apply(null, arr))
    if (newArr.length === 1) return newArr[0]
    return Math.max.apply(null, newArr)
}

/**
 * 其他解题
 */

const secondHighest1 = function (s) {
    let max = -1
    let sec = -1
    for (let b of s) {
        if (b >= 0 && b <= 9) {
            if (b > max) (sec = max), (max = b)
            if (b < max && b > sec) sec = b
        }
    }
    return max === sec ? -1 : sec
}
