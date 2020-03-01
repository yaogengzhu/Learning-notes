# webpack 
## 什么是webpack
>  webpack是自动打包工具,可以做那些事情呢？
- 代码转换
- 文件优化
- 代码分割
- 模块合并
- 自动刷新
- 代码校验
- 自动发布

## webpack的使用
> 初始化一个工程
- npm init -y
- yarn add webpack webpack-cli -D


## webpack可以进行0配置

## 手动配置webpack
- 默认配置文件的名字是： webpack.config.js
- 名字可以定义为： webpack.config.js or webpackfile.js

```js
const path = require('path')
module.exports ={
    mode: 'development', // 模式：2种， production development
    entry: './src/index.js', //入口
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'), // 路径必须是一个绝对路径
    }
}

```

### 更改webpack.config.js 的默认名字
- npx webpack --config webpack.myconfig.js
- 通过pack.json的配置脚本
```json
"scripts": {
    "build": "webpack --config webpack.myconfig.js"
  },
```

```json
"scripts": {
    "build": "webpack"
  },
```
终端命令可以输出  多添加一个 -- 表示后面可以传递参数
-  MacBook-Pro:webpack yaogengzhu$ npm run build --  --config webpack.myconfig.js


