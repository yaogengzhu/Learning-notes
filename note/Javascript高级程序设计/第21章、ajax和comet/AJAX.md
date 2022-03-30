# ajax

ajax 的核心技术是 XMLHttpRequet (简称 XHR)

```js
const xhr = new XMLHttpRequest()
xhr.onreadystatechange = function () {
    // readyState
    /**
     * readyState 状态值
     *  0: 未初始化
     *  1: 启动，已调用open()方法，但为发送send()方法
     *  2: 发送，已调用send()方法，但尚未收到相应
     *  3: 接收，已收到部分响应数据
     *  4: 完成，已经收到全部响应数据，而且已经可以在客户端使用了
     */
    if (xhr.readyState === 4) {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
            // 成功
        } else {
            // 失败
        }
    }

    // 在收到形响应之前可以调用 xhr.abort() 取消异步请求
}

/**
 *
 * open 方法接收三个参数 请求类型、请求URL、是否是异步
 *
 */
xhr.open('get', './index.txt', true)
/**
 *  send 接收一个参数，作为请求主体的参数
 *
 */
xhr.send(null)
// console.log(xhr.status)
// if ((xhr.status >= 200)) {
//     console.log(xhr.responseText)
// }
```
