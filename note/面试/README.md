# 面试

[其他人笔记](https://blog.csdn.net/mus123/article/details/106499506)

## css部分

### 垂直居中的多种方案
- 定位方式三种
- display:flex
- javascript
- display: table-cell 

要求父级元素固定宽高
```css
.father {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
}
.box {
    display: inline-block;
}
```

### css3盒模型
content-box--->
```css
box-sizing: border-box;
```
- 标准盒模型 width = content;
- ie盒模型 width = content + padding + border (目前都在用怪异和模型, 用css3 box-sizing 解决)
- flex弹性伸缩模型
- 多列布局模型


### 掌握几大布局方案
- 圣杯布局
- 双飞翼布局
- 左右固定,中间自适应


## JS

### 堆栈
对象
- 对象中的属性名不能重复
- 数字盒字符串0是相等的
- symbol 
- 运行时转成字符串

```js
var a = { },
 b = '0',
 c = 0
 e = {
     n: 1
 }
 f = {
     m: 2
 }

 // e-> f 也是相等的

 a[b] = 'aa'
 a[c] = 'bb'
 console.log(a[b])



```


### JS中的微任务和宏任务

宏任务
- 新程序或子程序被直接执行
- 事件的回调函数
- setTimeout() 和 setInterval()

微任务
- Promise.then()  .catch() finally()
- process.nextTick()


eventloop 事件循环队列, 不断循环机制，寻找可以执行的任务（微任务队列清空后，才会执行宏任务）

宏任务 会被加入宏任务队列
微任务 会被加入任务队列中


```js
console.log(1)
setTimeout(() => {
    console.log(2)
}, 0)
Promise.resolve().then(() => {
    console.log(3)
})
console.log(4)

Promise.resolve().then(() => {
    console.log(5)
})

setTimeout(() => {
    console.log(6)
    console.log(7)
}, 0);

Promise.resolve().then(() => {
    console.log(8)
})

```
调用栈被清空以后，事件就会优先寻找微任务队列的任务，也就是说每次宏任务结束后 事件循环就会先执行微任务，直到微任务队列的任务被执行完成后，才会执行下一轮宏任务。

宏任务---> 微任务----> 渲染-----> 宏任务
