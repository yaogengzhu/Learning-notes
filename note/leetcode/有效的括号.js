/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = [];
    const obj = {
        '(': ')',
        '[': ']',
        '{': '}',
    };
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i]); // 左边括号进栈  左(((
        } else {
            const key = stack.pop(); // 左边括号出栈 右)))
            if (obj[key] !== s[i]) {
                return false;
            }
        }
    }
    return stack.length === 0;
};

const s = '[([])]';
console.log(isValid(s));

/**
 * 解题思路
 * 1. 利用栈的先进后出的特点 左(((  右)))
 *
 */
