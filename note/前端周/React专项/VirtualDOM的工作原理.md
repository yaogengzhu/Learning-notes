# Virtual DOM 的工作原理

早期基于XHP开发、后期基于 javascript

2013年5月 react正式开源

初衷：
    1. 简化开发
    2. 防止XSS
   
因此有了Virtual DOM

1. JSX 会通过 react.createElement 返回一个 javascript Object 的结构
2. Diff 函数， 去计算变更状态前后虚拟DOM树差异
3. 渲染函数 渲染整个虚拟DOM树 或者处理差异点


React 主要工作是 组件实现、更新调度等
ReactDOM提供了 在网页上渲染的基础

优势
- 性能优越
- 规避XSS
- 可跨平台

大量直接操作DOM 容易引起网页性能下降 这时React基于虚拟DOM的diff 处理与批处理操作可降低 DOM 的操作范围与频次，提升页面性能

首次渲染- 微量操作（虚拟DOM比较慢）


缺点
- 内存占用高
- 无法进行极致优化