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


### 内置开发静态服务
> `webpack-dev-server`
- yarn add webpack-dev-server

安装html-webpack-server 插件！
- 使用命令模式启动： npx webpack-dev-server
- 配置pack.json: "dev": "webpack-dev-server"   , npm run dev 即可
- 配置config： 
  ```js
   devServer: {
        port: 3000,  // 端口号
        progress: true,  // 显示进度
        contentBase: './dist', // 指定目录
        compress: true, // gzip 压缩
        open: true // 自动打开浏览器, 热更新
    },
  ```

```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    devServer: {  // 静态服务配置选项
        port: 3000,
        progress: true,
        contentBase: './dist',
        compress: true, // gzip 压缩
    },
    mode: 'production',  // 开发模式
    entry: path.resolve(__dirname, './src/index.js'),  // 入口文件
    output: { // 出口文件
        filename: 'bundle.[hash:8].js', // 每次修改产生一个新的文件 :8 表示文件名变短
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [  // 插件配置
        new HtmlWebpackPlugin({
            template: './src/index.html', // 指定的模版
            filename: 'index.html', // 打包后的文件名字
            minify: {
                removeAttributeQuotes: true, //删除属性的双引号
                collapseWhitespace: true, // 变成一行
            },
            hash: true, // hash标识，缓存问题
        })
    ]
}
```

### 配置css样式模块
重点理解在于loader的使用及其配置
- loader 加载顺序， 从右到左, 从下到上
- css的loader 载入可以是字符串，可以是数组， 可以是对象（如果有额外配置需求的话）

需要安装的loader 有
- style-loader
- css-loader
- less-loader
- less (如果是less 文件则需要 yarn add less(依赖))

```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        filename: 'bundle.[hash:4].js', // 每次修改产生一个新的文件 :8 表示文件名变短
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            minify: {
                removeAttributeQuotes: true, //删除属性的双引号
                collapseWhitespace: true, // 变成一行
            },
            hash: true, // hash标识，缓存问题
        })
    ],
    module: {  // 模块
        rules: [ // 规则 css-loader 持续解析@import 这种语法, style-loader 是将css插入到head标签中， 
            { 
                test: /\.css$/, 
                use: [{ // 对象写css配置的方式更好在于可以配置
                loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }]
            }, // 字符串，单个loader [] 多个loader , 默认从右向左。 也可以使用对象, 从下到上执行
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader',
                }, {
                    loader: 'css-loader',
                }, {
                    loader: 'less-loader'
                }]
            }

        ]
    }
}
```

### 考虑将css 抽离到单独的文件夹中
>  默认情况下，css会打包js文件中，如何将css抽离到单独的文件中呢？

诞生了一个插件叫 `mini-css-extract-plugin`
- `yarn add mini-css-extract-plugin`

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// css默认不配置的化， 打包到main.css文件夹中
module.exports = {
    plugins: [
        new MiniCssExtractPlugin({ // 可以配置的一些选项
            filenane: 'main.[hash].css', // 自定义配置名字
        })
    ],
}
```

### 如何给css自动加上浏览器前缀
>  大多css有兼容浏览器兼容问题需要给css加上厂商前缀

诞生了一个插件叫 `autoprefixer`
- `yarn add autoprefixer`  安装
- `yarn add postcss-loader` 在webpack 只需要结合这个loader 一起使用
- 关键点： 还需要配合一个配置文件使用它

配置文件的名字叫： `postcss-config.js`
```js
module.exports = {
    plugins: [require('autoprefixer')]
}
```

```js

module.exports = {
    mudule: {
        rules: [
             {
                test: /\.less$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader
                }, {
                    loader: 'css-loader',
                }, {
                    loader: 'less-loader'
                },{
                    loader: 'postcss-loader' // 需要在less, css 之前就处理它
                }]
            }
        ]
    }
}
```

完成以上，就可以将所有需要配置厂商前缀的css就自动的加入

### 如何将css一样的压缩化处理 ( 当然webpack4.0之后， 会通过mode模式来自动的优化一些东西)
> 想将css 如同js一样压缩处理 ，那么会用到这个插件

诞生了 ` optimize-css-assets-webpack-plugin.`
- ` yarn add  optimize-css-assets-webpack-plugin` - css 压缩插件
- ` yarn add terser-webpack-plugin` - js 压缩插件， 两者用法一致

```js

// 需要引入该插件
// 当我们使用这个插件压缩css的时候，发现js为被压缩来
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const terserWebpackPlugin = require('terser-webpack-plugin')

// 这个时候为们必须使用 terser-webpack-plugin

module.exports = {
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin(),
            new terserWebpackPlugin()
        ]
    }
}

```

### 那么webpack是如何处理es6转成es5的， 如何处理高级语法
> es6转es5很常见， 都需要用到webpack去处理

诞生了 babel-loader ， 需要结合 @babel/core(核心模块), @babel/preset-env ()

- `yarn add babel-loader`
- `yarn add @babel/core`
- `yarn add @babel/preset-env`


处理高级的class语法时，需要引入`@babel/plugin-proposal-class-properties`插件
```js

module.exports = {
    rules: [
        {
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],  // 关键处理高级语法
                    plugins: [
                        ['@babel/plugin-proposal-decorators', {"legacy": true }], // 处理装饰器语法
                        ['@babel/plugin-proposal-class-properties']
                    ], // 处理class高级语法
                }
            }
        }
    ]
}
```

以上就是一些简单的处理es6语法