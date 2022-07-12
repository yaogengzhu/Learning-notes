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

POST 请求

利用 XHR 模仿表单提交：首先将 Content-Type: application/x-www-form-urlencoded (表单提交时的内容)

## XMLHttpRequest 2 级

**FormData**

FormData 类型，FormData 为序列化表单以及创建与表单格式相同的数据（用于通过 XHR 传输）提供了便利

**超时设定**

IE8 为 XHR 对象添加了一个 timeout 属性，表示在请求在等待响应多少毫秒后就会终止。
xrh.timeout = 1000; // 仅适用 ie8

**进度事件**

Progress Events 规范是 W3C 的一个工作草案，定义了与客户端服务器通信相关的事件。

-   loadStart
-   progress (多次触发)
-   error
-   abort
-   load (接收到完整数据时触发)
-   loaded

**load 事件**

**跨资源共享**

CORS（Cross-Origin Resource Sharing, 跨资源共享)

-   对应出现的
    CSRF (跨站点请求伪造) XSS(跨脚本攻击)
