2021 年 06 月 12 日 PM

# 版本环境 谨慎升级保持其运行无问题，升级或降级后可能会面临各种包不匹配的问题。

```
vue@2
vue-cli@4
node@14
npm@6
webpack@5
webpack-cli@4
element-ui@2
stylus@0.54.8
stylus-loader@3.0.2"
vuex@3
```

# vscode 开发环境下主要使用插件
```
ESLint
Vetur
language-stylus
Manta'a Stylus Supermacy
Todo Tree
```


# vue2-framework

```
此项目构建的目的是为了自己以后vue2项目的开发，可以不在从vue-cli从0构建，搭建一套大致框架，copy一下直接用。减少业余时间玩项目的时间投入。

此项目构建中，参照学习了vue-element-admin和antd-pro两个非常优秀的开源解决方案，包括UI设计，功能设计等，也有是直接的搬运，所以非常感谢以上两个解决方案。也非常值得大家去给他们点个star。他们无论是开箱即用用来开发自己的项目还是去学习他们的开发思想，都是非常好的选择。

吐一下槽:
vue2的项目主要是参照学习vue-element-admin实现。虽然由自己使用vue-cli构建项目，但是每周也只有个把小时构建此项目，人生苦短，就算抛开周末的休闲娱乐睡觉觉，要学要做的东西也都太多（见下）。大部分工作还是进行了搬运而非手敲，害。不过呢搬砖也是一门技术活，搬砖过程中能理解一个点的本质，其实也就够了，更多的时候用来做一个打字机器，还不如去把时间花在别处更好呢。

关于目前前端关联的知识点，除了html、css、js的语言知识，要学的东西太多了，vue react ts 小程序 uni-app 公众号 服务端渲染 微前端 等，还有不那么必须却也有很多使用场景的angular webgl flutter等。糟心的是框架版本更迭也太快了，vue2在市场上至少能作为主流版本4年左右，react17正式版好像是才发了一年不到，18就来了。。。

前端工程师只会前端还不行哦，至少要学会简单的后端知识，例如随便的一门后端语言，数据库，服务器，能进行简单的增删改查，线上部署等。    

想想工作中，一个一般大小的功能点，随随便便就要高饱和度干两天,并且一是可以在网上搬运代码，二是可以在公司内部项目代码中搬运。那在私人项目中，只有一，没有二，搬运公司代码就算不违国家的法也违公司的法。那对于业余时间构建一个项目的快速高效的要求就更高了。所以项目很多点上只能做到一个能用就行，例如响应式，国际化这种功能，就不会首先去跟近，甚至是永远不会跟近。

推荐开发工具为vscode，.eslintrc.js和.vscode文件夹下的私有settings.json配合，保存文件时会自动格式化代码，非常好用。

单页面组件（组件文件夹）采用横杠命名方式，单公用组件（组件文件夹）采用大驼峰命名方式。
如果单组件要分割若干文件，主文件命名为index。

双横杠 -- 开头文件一般是无实际用处的文件了，为个人的一个习惯，仅保留可做参考备份，觉得没有价值了也可以删除。

```

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
