**1.JavaScript 规定了几种语言类型？**

-   基本类型（6 种）： string number boolen undefine null symbol -（新增 BigInt）
    访问： 值的访问
    存储： 存放在栈内存中的
-   引用类型: object
    访问： 引用访问
    存储： 存放在堆内存中

**2.JavaScript 对象的底层数据结构是什么？**
javascript 数据底层都是以二进制进行存储。 堆内存（引用类型） + 栈内存（基本类型）

**3.null 和 undefined 的区别**
在 Js 中 null 与 undefined 是两种基本数据类型，都可以用来表示"无"这个概念，但是在语义表达以及实际使用上是有所区别的。

区别：

-   `null` 表示的一个无的对象, `undefined` 是一个无的原始值
-   null 表示一个值被定义了，但是这个值是空值
-   undefined 表示不存在该值的定义
    -   变量被声明了还没有赋值，表现为 undefined。
    -   调用函数时应该提供的参数没有提供，参数值表现为 undefined。
    -   对象没有赋值的属性，该属性的值就表现为 undefined。
    -   函数没有返回值，默认返回 undefined。
