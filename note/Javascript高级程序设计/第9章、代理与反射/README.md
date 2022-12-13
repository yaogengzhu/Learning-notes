# 代理

## 创建空代理

最简单的代理是空代理，即除了作为一个抽象的目标对象。代理是通过Proxy构造函数来创建的。这个构造函数接收两个参数，目标对象和处理程序对象。两个参数必传。

```js
cosnt target = {
    id: 'target'
}
const handler = {};

const proxy = new Proxy(target, handler)
```