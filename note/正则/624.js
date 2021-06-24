 
/**
 *  数字的千分分隔符号表示法  1000,000,000
 *  1. 匹配末尾3个数的前面加一个 $末尾必须是数字开头,
 *  2. 3个数字组合可能上多个(\d{3})+
 *  3. 全局进行匹配 /g
 *  4. 且要求匹配的这个位置不能是开头 (?!^) 开头不替换
 * 
 * 
 */
const regx = /(?!^)(?=(\d{3})+$)/g
const str = '0100123456789' // 如果开头是0过滤处理
const str1 = str.replace(/^0+/, '').replace(regx, ',')  // 123,456,789
console.log(str1)

// 支持 12345678 123456789
const regx1 = /(?!\b)(?=(\d{3})+\b)/g
const str2 = '12345678 123456789'.replace(regx1, ',')
console.log(str2)


/**
 *  货币的格式化  1888  格式化 成$1888.00
 */

function format(num) {
    if (typeof num !== "number") return 'num必须为数字'
    return num.toFixed(2).replace(/(?!^)(?=(\d{3})+$)/g, ',').replace(/^/, "$ ")
}
console.log(format('123243626'))