# 如何理解React的渲染流程

事务 -> 具有原子性不可分割

协调: react更新时，哪些内容需要变化

Stack Reconciler 是React15 以及以前版本的渲染方案 其核心是以前递归的方式逻辑调度栈中子节点到父节点渲染。

Fiber Reconciler 是React16以及后版本的渲染方案 核心设计是增量渲染，将渲染分割为多个模块，将其分散到多个帧中执行

### 挂载

ReactDOM.render()  

ReactDOM.render 调用之后，实际上是透传给ReactMount.render 

ReactDOM 是对外暴露的模块接口， 而ReactMount是实际的执行者，完成初始化React 组件的整个过程

1. App --> type function App ---> ReactComponetsite Component
2. <div> ---> type: div ---> ReactDOMComponent
3. “hello world" ---> '' ----> ReactDOMComponet

```js
if (typeof element.type === 'string') {
    instace = ReactHostComponet.createInternalComponent(element)
} else if (isInternalComponentType(element.type)) {
    instance = new element.type(element)
} else {
    instance = new ReactComponsiteComponentWrapper()
}
```

### Stack Reconciler
ReactUpdate 模块 --> 批量处理

React 事务都是基于Transaction 类 继承拓展 每个Transaction 实例都是一个封闭空间，保持不可变的任务常量，并提供对应的事务处理接口。

- 原子性
    事务作为一个整体被执行 要么全部整体被执行 要么都不执行

- 隔离性
    多个事务并发执行时，一个事务执行不应该影响其他事务的执行

- 一致性
    相同的输入 确定能到同样的执行结果

总结： 
React 渲染的整体策略时递归， 并通过事务建立React与虚拟DOM的联系并完成调度。


### FiberReconciler

协作式多任务

将渲染任务拆分成多段、分段执行

1. 在ReactElement 的基础上，通过createFiberFromElment 函数创建Fiber对象。
2. effect 是指在协调过程中必须执行计算的活动

render 阶段--> diff算法