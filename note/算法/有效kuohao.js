// (((((())))))
const str = "()()"
const stack = []
// 先处理数据结构
let str2 = ''
let str3 = ''
for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
        str2 += str[i]
    } else if (str[i] === ')') {
        str3 += str[i]
    }
}
const str4 = str2 + str3
// 如果 st2 !== str3 则不是闭合。
console.log(str4)
for(let i = 0; i < str4.length; i++) {
    if (str4[i] === '(') {
        stack.push('(')
    } else if (str4[i] === ')') {
        stack.pop('(')
    }

    console.log(stack)
}