A: require和import的区别?   [参考](https://segmentfault.com/a/1190000021911869)

Q: 可以看作为 commonjs 和 es6 的区别。 es6代码不能直接运行在node环境中，需要进行babel转换。
    - require方法用来加载模块。
    - Commonjs 规范规定，每个模块内部，module变量代表当前模块，这个变量是一个对象，exports即为它的属性，对外暴露的一个接口，加载模块其实就是加载module的属性。
    - Es6模块不是对象，而是export命令来显示输出代码，通过import命令来输入。 好处是 编译时加载，比commonjs效率高。主要有两个命令构成：export 和 import 构成

