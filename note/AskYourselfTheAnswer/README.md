A: require和import的区别?   [参考](https://segmentfault.com/a/1190000021911869)

Q: 可以看作为 commonjs 和 es6 的区别。 es6代码不能直接运行在node环境中，需要进行babel转换。
    - require方法用来加载模块。
    - Commonjs 规范规定，每个模块内部，module变量代表当前模块，这个变量是一个对象，exports即为它的属性，对外暴露的一个接口，加载模块其实就是加载module的属性。
    - Es6模块不是对象，而是export命令来显示输出代码，通过import命令来输入。 好处是 编译时加载，比commonjs效率高。主要有两个命令构成：export 和 import 构成



## 宏任务和微任务

任务队列还分为微任务队列和宏任务队列。对应的存放宏任务和任务。

- 宏任务和微任务都是异步任务 （两者的区别就是执行顺序）

- 同步任务中，任务的执行顺序按照代码的顺序执行。

- 异步任务也是需要按顺序的，队列的属性就是先进先出，因此异步任务会按照进入队列的顺序依次执行 （如果这么做会出一定的问题）因此，浏览器会将异步任务分为宏任务和微任务，按照事件循环的机制区执行，因此不同的任务会有不同的执行优先级。


## JSON.stringify的用法
JSON.stringify支持三个参数。 默认情况下，JSON.string将一个对象字符串化且缩进；

在JSON.stringify()方法一共能接受3个参数，其中两个可选的参数（分别是第二、第三个参数）。这两个可选参数可以用于指定其他序列化JavaScript对象的方式。第二个参数是过滤器，可以是数组或函数；第三个参数是用于缩进结果JSON字符串的选项。单独或组合使用这些参数可以更好地控制JSON序列化。

第二个参数是一个数组, 第三个参数是字符的缩进
```js
let json1 = {
    title: 'hello',
    author: ['yaogengzhu'],
    year: 2021,
    a: undefined,
    date: new Date(),
    regx: new RegExp(/^[1]/)
};
let jsonText = JSON.stringify(json1, ['title', 'author'], 4);
console.log(jsonText);
// {
//     "title": "hello",
//     "author": [
//         "yaogengzhu"
//     ]
// }
```

第二个参数是一个函数
如果第二个参数是一个函数，则行为又有不同。提供的函数接收两个参数：属性名（key）和属性值（value）。可以根据这个key决定要对相应属性执行什么操作。这个key始终是字符串，只是在值不属于某个键/值对时会是空字符串。

```js
const students = [
  {
    name: 'james',
    score: 100,
  }, {
    name: 'jordon',
    score: 60,
  }, {
    name: 'kobe',
    score: 90,
  }
];

function replacer (key, value) {
  if (key === 'score') {
    if (value === 100) {
      return 'S';
    } else if (value >= 90) {
      return 'A';
    } else if (value >= 70) {
      return 'B';
    } else if (value >= 50) {
      return 'C';
    } else {
      return 'E';
    }
  }
  return value;
}
console.log(JSON.stringify(students, replacer, 4))
```

注意点：
这种方法虽然可以实现数组或对象深拷贝,但不能处理函数和正则，因为这两者基于JSON.stringify和JSON.parse处理后，得到的正则就不再是正则（变为空对象），得到的函数就不再是函数（变为null）了。