var str = 'get-something-a-C'
function transformToUpperCase(str) {
    return str.replace(/\-./g, (s) => {
        return s.toLocaleUpperCase()
    }).replace(/\-/g, '')
}

// 提取url 参数

const url = 'https://www.baidu.com/?a=1&b=3&d=4&sa=?3'
function getParamsByUrl(url) {
    const s = url.match(/\?.*/g).join('').substr(1)
    const obj = {}
    s.split('&').map(item => {
        obj[item.split('=')[0]] = item.split('=')[1]
    })
    return obj
}

const result = getParamsByUrl(url)
console.log(result)

function findNum(str) {
    const result =  str.match(/(\d)+/g)
    return result
}
console.log("========数字提取=========");
console.log(findNum("asfs123fasde;lkjjiwdf2;kj;;l;io55fsa")); // [123,2,55]
