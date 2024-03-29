## 题目

### v-if 和 v-for 那个优先级更高？如果两个同时出现，应该怎么优化得到更好的性能？
解答：
- v-for 优先级高于 v-if (源码实现)
- 如果同时出现，每次渲染都会执行循环在判断条件，无论如何循环都不可避免，浪费性能
- 要避免这种情况的出现，则在外层嵌套templatem 在这一层进行v-if判断，然后在内部进行v-for循环

### Vue组件data为什么要函数形式
函数执行都会返回一个全新的对象实例

如果是是函数时，则执行并将其结构作为data选项的值返回

Vue组件可能存在多个实例，如果使用对象形式定义，则会导致它们共用一个data对象，那么状态将会影响所有的组件实例
这种事不合理的，采用函数形式定义，在initData时将其作为工厂函数返回全新的data对象，有效规避多实例之间状态污染问题，
而在vue根实例创建过程中则不存在该限制，也因为根实例只有一个，不需要担心这种问题。

[其他参考文章]https://juejin.cn/post/6844903478901358605

### Vue中key作用和原理
- key的作用主要是为了高效的更新虚拟DOM，其原理是Vue在patch过程中通过key可以精准判断两个节点是否是同一个，从而避免频繁更新不同元素，使得这个patch过程更加高效，减少DOM操作，提高性能。
- 若不设置Key，可能会引发列表更新时一些隐蔽的bug
- vue中使用相同的标签元素过度切换时，也会使用到key, 其目的也是为了让vue区分它们，否则Vue只会替换其颞部属性而不会出发过渡效果。


### Vue中的diff

### Vue组件化开发

### Vue设计理念

### Vue要求组件模版只有一个根元素

### MVC、MVP、和 MVVM 更多

### Vue组件之间的通信

### Vue优化相关

### Vue3 特性

### Vue扩展现有的组件

### Vue中的watch和Computed的区别

### Vue生命周期的理解

### Vuex使用及其理解

### nextTick 原理

### Vue数据双向绑定原理

### Vue-router 导航钩子

### 递归组件

### Vue响应式相关