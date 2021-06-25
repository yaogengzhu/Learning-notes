/**
 *
 * @param {} data
 * 
 *  这种方式仅仅可以接受数组，如果data改成对象了，则会出现问题
 */
function appDiv(data) {
    for (var i = 0; i < data.length; i++) {
        const ele = document.createElement('div')
        ele.innerHTML = data[i]
        document.body.appendChild(ele)
    }
}
