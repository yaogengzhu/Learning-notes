/**
 * 
 *  括号的作用
 *  1.分组
 *  2.分支
 */

// 1.分组
const regx1 = /a+/g 
const regx2 = /(ab)+/g

// 2. 分支
const regx3 = /^I love (javascript|java)$/g

// 3.分组引用
const regx4 = /(\d{4})-(\d{2})-(\d{2})/g
'2021-06-29'.replace(regx4, function(match, year, month, day) {
    console.log(match, year, month, day)
})

/**
 *  匹配 2021-12-12 2021/12/12 2021.12.12
 * 
 */
const regx5 = /^\d{4}(\/|\.|-)\d{2}\1\d{2}$/