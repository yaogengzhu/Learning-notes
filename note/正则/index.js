/**
 * 匹配16进制
 *
 * #ffbbad
 * #Fc01DF
 * #FFF
 * #ffE
 */
const regx = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g
const string = '#ffbbad #Fc01DF #FFF #ffE'
const res = string.match(regx)
console.log(res)

/**
 *  匹配时间
 *  01:59
 *  23:59
 *
 */
const rgex1 = /(([0][1-9])|([2][0-3]))[:]([0-5][0-9])/g // x
/**
 *  1. 必须以什么开头
 *  2. 必须以什么结尾
 *  3. 分支结构不需要每一个都是用()包裹，利用 | 即可
 *  4. 普通符号，不需要[]进行包
 */
// const regx1 = /^([01][0-9]|[2][0-3]):[0-5][0-9]$/
const regx2 = /^([01][0-9]|[2][0-3]):[0-5][0-9]$/
regx2.test('23:59')

/**
 *  匹配手机号
 *  1[3,5,7,8]********
 */
const regx3 = /^[1][3578][0-9]{9}$/

/**
 * 匹配邮箱
 * 455947455@qq.com
 * 455947455@163.cn
 * 455947455@bqn.com
 *
 * 操作思路
 * 1.以\w 单词数字符号开头,
 * 2.+ 匹配至少出现一次
 * 3.@ 匹配@符号
 * 4.[.]小数点需要[]包裹
 * 5 {m, } 至少出现m次
 */
const regx4 = /^\w+@\w+[.][a-zA-Z]{2,}$/

/**
 * ‘（112）(()22(  )（（））qqq()’
 *
 * 匹配() （）
 *
 * 操作思路
 * 1. 匹配() \( 英文符号需要转义
 * 2. 符号( 中间可能有多个空格 \s*
 * 3. 也有可能有（中文括号，需要采用多选分支处理, 中文符号不需要转义
 * 4. 同理 （中文括号 中间可能有多个空格 \s*
 * 5. 全局匹配使用 g
 */

const regx5 = /\(\s*\)|（\s*）/g

/**
 *  比如 yyyy-mm-dd 格式为例。
 *  2012-12-31
 */
const regx5 = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9][12][0-9]|3[0-1])$/g
const str = '_hello_world'
const res = str.replace(/[_]+(.)?/g, (match, s) => {
    return s ? s.toUpperCase() : ''
})

console.log(res)

// 将每个单词首字母 转成大写

const sentence = 'hello world'
// (?:^|\s) 表达开头｜或者是前面是空白符的->> \w
const sentenceRegx = /(?:^|\s)\w/g
const s1 = sentence.replace(sentenceRegx, (s) => {
    console.log(s, '?s')
    return s.toUpperCase()
})

console.log(s1)
