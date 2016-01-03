# ES6 学习
## ES6 简介
ECMAScript 6（以下简称ES6）是 JavaScript 语言的下一代标准，已经在 2015 年 6 月正式发布了。它的目标，是使得 JavaScript 语言可以用来编写复杂的大型应用程序，成为企业级开发语言。因为当前版本的ES6是在2015年发布的，所以又称 ECMAScript 2015。

## 内容
* [块作用域变量定义：let 和 常量定义 const](src/let-and-const)
* [模板字符串](src/template-string)
* [解构（Destructing）](src/destructing)
* [不定参数和默认参数](src/rest-parameters-and-defaults)
* [for-of 循环](src/for-of)
* [迭代器](src/iterator)
* [箭头函数](src/arrow-function)
* 新的数据类型: Map 和 Set
* 生成器：Generators
* Symbols
* 集合
* 代理（Proxies）
* 类（Class）与继承
* 模块

## 运行本项目
* 安装依赖：`npm i` 以及 `npm install --global gulp`
* 编译：`gulp`
* 在浏览器中打开 `src/index.html`

注意：如果以前安装过 Gulp 的，需要将 Gulp 的版本升级到 3.9.0 以上。因为本项目用的是 gulpfile.babel.js。而只有 3.9.0 以上的 Gulp 才会读取 gulpfile.babel.js。

## 其他
* 如何将ES6 编译成 ES5？见[这里](how-to-compile.md)。


## 资源
* [ECMAScript 6入门](http://es6.ruanyifeng.com/) 阮一峰老师写的。
* [深入浅出 ES6 的中文版](http://www.infoq.com/cn/es6-in-depth/) [原文](https://hacks.mozilla.org/category/es6-in-depth/)。
* [ES6 Katas](http://es6katas.org/) 通过写ES6的代码来学习ES6。修复失败的测试来学习这些知识。
* [ES6 Overview in 350 Bullet Points](https://ponyfoo.com/articles/es6)

## 工具
* [Babel](http://babeljs.io/) JavaScript 编译器：指定当前代码转换转换成什么代码。例如可以将 ES6 的代码编译成 ES5的。
