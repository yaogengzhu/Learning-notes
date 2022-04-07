**1.CSS 盒模型，在不同浏览器的差异**

-   IE 盒模型
    包含 margin border padding content (包含 border 和 padding)
-   W3C 标准盒模型
    包含 margin border padding content (不包含其他) content 等于 宽度

**2.CSS 所有选择器及其优先级、使用场景，哪些可以继承，如何运用 at 规则**
[参考文章](https://www.jianshu.com/p/cd89de075079)

-   通用选择器\*
-   标签选择器
-   类选择器
-   ID 选择器
-   伪类选择器
-   属性、兄弟、后代选择器
    ...

优先级

-   import
-   内联
-   id 选择器
-   类、伪类、属性选择器
-   标签选择器、伪元素选择器
-   通配符选择器
-   浏览器自定义

**3.CSS 伪类和伪元素有哪些，它们的区别和实际应用**

[参考地址](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements#%E7%94%9F%E6%88%90%E5%B8%A6%E6%9C%89before%E5%92%8Cafter%E7%9A%84%E5%86%85%E5%AE%B9)

伪类是伪元素的一种。伪类是开头为冒号:的关键字
如： :first-child (用于 class 选择)
:last-child
用户行为伪类
:hover (鼠标指针行为)
:focus (键盘控制)

伪元素开头为双冒号::

-   伪类和伪元素可以结合使用

生成带有::before 和 ::after 的内容 与 content 属性一同使用，使用 css 将内容插入文档中。

**4.HTML 文档流的排版规则，CSS 几种定位的规则、定位参照物、对文档流的影响，如何选择最好的定位方式，雪碧图实现原理**

**5.水平垂直居中的方案、可以实现 6 种以上并对比它们的优缺点**

**6.BFC 实现原理，可以解决的问题，如何创建 BFC**

[参考文章](https://zhuanlan.zhihu.com/p/25321647)

定位方案：

-   普通流
-   定位
-   float 浮动

BFC(块级格式化上下文)

BFC 可以看成一个独立的容器，容器里的元素不会在布局上影响到外面的容器。

如何创建 BFC

浮动元素： 除了 none 以外所有的值
绝对定位元素： position(absolute fixed)
display: inline-block、flex、table-cells
overflow: 除了 visible 以外的值（hideen、auto、scroll)
body 根元素

特性：

-   同一个 BFC 外边距会发生重叠（使用两个 BFC 容器解决）
-   BFC 可以包含浮动元素 （清除浮动）
-   BFC 可以阻止元素被浮动覆盖

**7.可使用 CSS 函数复用代码，实现特殊效果**

**8.PostCSS、Sass、Less 的异同，以及使用配置，至少掌握一种**

**9.CSS 模块化方案、如何配置按需加载、如何防止 CSS 阻塞渲染**

**10.熟练使用 CSS 实现常见动画，如渐变、移动、旋转、缩放等等**

**11.CSS 浏览器兼容性写法，了解不同 API 在不同浏览器下的兼容性情况**

**12.掌握一套完整的响应式布局方案**

其他补充

**13 实现一个平行四边形**

css 中的属性

```css
transform: skew(10deg, 10deg);
```
