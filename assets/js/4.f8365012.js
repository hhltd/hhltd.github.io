(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{373:function(t,s,a){t.exports=a.p+"assets/img/errpic.61f2e8b0.jpeg"},374:function(t,s,a){t.exports=a.p+"assets/img/autoc.4fa7c6c0.jpg"},375:function(t,s,a){t.exports=a.p+"assets/img/bagde.71645d02.jpg"},376:function(t,s,a){t.exports=a.p+"assets/img/select.558d4fdc.jpg"},377:function(t,s,a){t.exports=a.p+"assets/img/select2.f7416a7a.jpg"},398:function(t,s,a){"use strict";a.r(s);var e=a(45),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"组件化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#组件化"}},[t._v("#")]),t._v(" 组件化")]),t._v(" "),e("p",[t._v("在校招述职中, 和评委老师交流了关于组件的知识, 接下来就从前端的组件化开发来聊聊怎样封装一个通用的前端组件")]),t._v(" "),e("blockquote",[e("p",[t._v("前端组件化开发, 已经有多年的历史了, 不管是服务端渲染, 还是前端SPA, 都有了比较成熟的组件化开发的方案。随着组件化开发的普及, 前端社区中贡献了很多不错的前端组件, 都提供开箱即用的方案, 使得更好的发挥组件化的优势。前端团队内, 如果有人对前端组件化的理解不够深入, 就不能开发出好的组件, 会给项目的维护带来更大的成本")])]),t._v(" "),e("h4",{attrs:{id:"什么是前端组件化开发"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是前端组件化开发"}},[t._v("#")]),t._v(" 什么是前端组件化开发")]),t._v(" "),e("p",[t._v("你应该遇到过, 将一个页面的几百行, 甚至上千行的代码逻辑写在一个js文件中的情况\n通常这种代码都很难读下去, 更别说要维护起来, 添加新功能、移除一些老功能了, 因为你不知道改动一个地方, 会不会出现意想不到的bug\n这个时候, 你就需要利用组件化开发, 拆分功能, 封装组件, 单独维护")]),t._v(" "),e("ul",[e("li",[t._v("现代化前端框架通常都是实现MVVM的方案, 数据层(M)和视图层(V)相互连接, 同时变更, 使得页面交互保持高度的一致性")]),t._v(" "),e("li",[t._v("前端的组件化在概念上与后端的package很相似, 只不过前端的组件涉及到更多的是展示和交互方面的逻辑。当然, 前端组件与后端架构的微服务概念类似, 可以理解成一个组件就是一个服务组件, 只提供某个服务")]),t._v(" "),e("li",[t._v("前端组件化开发, 就是将页面的某一部分独立出来, 将这一部分的数据层(M)、视图层(V)和 控制层(C)用黑盒的形式全部封装到一个组件内, 暴露出一些开箱即用的函数和属性供外部组件调用")]),t._v(" "),e("li",[t._v("前端组件, 包含了HTML、CSS、JavaScript, 包含了组件的模板、样式和交互等内容, 基本上涵盖了组件的所有的内容, 外部只要按照组件设定的属性、函数及事件处理等进行调用即可, 完全不用考虑组件的内部实现逻辑, 对外部来说, 组件是一个完全的黑盒")]),t._v(" "),e("li",[t._v("组件可以多层封装, 通过调用多个小组件, 最后封装成一个大组件, 供外部调用。比如: 一个"),e("strong",[t._v("Input")]),t._v("输入框是一个组件, 一个"),e("strong",[t._v("Select")]),t._v("下拉选择框也是一个组件, 可以用form在这两个组件上包装一层, 就是一个"),e("strong",[t._v("Form")]),t._v("的组件")]),t._v(" "),e("li",[t._v("一些比较常用的前端组件, 像 vue-router, vuex, react-router, redux, mobx等, 都是基于Vue和React的组件, 它们只专注于路由、状态存储的工作, 并且把这些事情做好")])]),t._v(" "),e("h4",{attrs:{id:"组件化开发的优点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#组件化开发的优点"}},[t._v("#")]),t._v(" 组件化开发的优点")]),t._v(" "),e("p",[t._v("说到底, 前端的组件化开发, 可以很大程度上降低系统各个功能的耦合性, 并且提高了功能内部的聚合性。这对前端工程化及降低代码的维护来说, 是有很大的好处的\n耦合性的降低, 提高了系统的伸展性, 降低了开发的复杂度, 提升开发效率, 降低开发成本\n组件封装的好, 加班也少了, bug也少了, 就有更多时间喝喝咖啡、打打农药了:)")]),t._v(" "),e("p",[e("img",{attrs:{src:a(373),alt:"",title:":size=440x388"}})]),t._v(" "),e("h4",{attrs:{id:"如何设计一个好的组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何设计一个好的组件"}},[t._v("#")]),t._v(" 如何设计一个好的组件")]),t._v(" "),e("ol",[e("li",[t._v("设计原则")])]),t._v(" "),e("ul",[e("li",[t._v("细粒度的考量")])]),t._v(" "),e("p",[t._v("在学习设计模式的时候会遇到很多种设计原则, 其中一个设计原则就是单一职责原则, 在组件库的开发中同样适用\n我们原则上一个组件只专注一件事情, 单一职责的组件的好处很明显, 由于职责单一就可以最大可能性地复用组件\n但是这也带来一个问题, 过度单一职责的组件也可能会导致过度抽象, 造成组件库的碎片化")]),t._v(" "),e("p",[t._v("以antd中的autocomplete组件为例, 它其实是由input和select组件组合而成\n因此我们完全可以复用之前的相关组件, 同时Calendar、Form等等一系列组件都复用了Select组件, 那么Select的细粒度就是合适的, 因为Select保持的这种细粒度很容易被复用")]),t._v(" "),e("p",[e("img",{attrs:{src:a(374),alt:"",title:":size=394x278"}})]),t._v(" "),e("p",[t._v("还有一个例子, 一个徽章数组件(Badge), 它的右上角会有红点提示, 可能是数字也可能是icon\n它的职责当然也很单一, 这个红点提示也理所当然也可以被单独抽象为一个独立组件, 但是我们通常不会将他作为独立组件, 因为在其他场景中这个组件是无法被复用的\n因为没有类似的场景再需要小红点这个小组件了, 所以作为独立组件就属于细粒度过小, 因此我们往往将它作为Badge的内部组件, 比如在antd中它以ScrollNumber的名称作为Badge的内部组件存在")]),t._v(" "),e("p",[e("img",{attrs:{src:a(375),alt:"",title:":size=370x126"}})]),t._v(" "),e("p",[t._v("所以, 所谓的单一职责组件要建立在可复用的基础上, 对于不可复用的单一职责组件我们仅仅作为独立组件的内部组件即可")]),t._v(" "),e("ul",[e("li",[t._v("通用性考量\n我们要设计的本身就是通用组件, 不同于我们常见的业务组件, 通用组件是与业务解耦但是又服务于业务开发的, 那么问题来了, 如何保证组件的通用性, 通用性高一定是好事吗？")])]),t._v(" "),e("p",[t._v("比如我们设计一个选择器(Select)组件,通常我们会设计成这样")]),t._v(" "),e("p",[e("img",{attrs:{src:a(376),alt:"",title:":size=400x276"}})]),t._v(" "),e("p",[t._v("这是一个我们最常见也最常用的选择器, 但是问题是其通用性大打折扣")]),t._v(" "),e("p",[t._v("当我们有一个需求是长这样的时候, 我们之前的选择器组件就不符合要求了, 因为这个Select组件的最下部需要有一个可拓展的条目的按钮")]),t._v(" "),e("p",[e("img",{attrs:{src:a(377),alt:"",title:":size=478x334"}})]),t._v(" "),e("p",[t._v("这个时候我们难道要重新修改之前的选择器组件, 甚至再造一个符合要求的选择器组件吗?一旦有这种情况发生, 那么只能说明之前的选择器组件通用性不够, 需要我们重新设计")]),t._v(" "),e("p",[t._v("antd的Select组件预留了dropdownRender来进行自定义渲染, 其依赖的rc-select组件中的代码如下")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dropdownRender"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("dropdownRender")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("menuNode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" props"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("blockquote",[e("p",[t._v("Antd依赖了大量以rc-开头的底层组件, 这些组件被react-component团队(同时也就是Antd团队)维护, 其主要实现组件的底层逻辑, Antd则是在此基础上添加Ant Design设计语言而实现的")])]),t._v(" "),e("p",[t._v("当然类似的设计还有很多, 通用性设计其实是一定意义上放弃对DOM的掌控, 而将 DOM 结构的决定权转移给开发者\ndropdownRender其实就是放弃对Select下拉菜单中条目的掌控, Antd的Select组件其实还有一个没有在文档中体现的方法getInputElement应该是对Input组件的自定义方法\nAntd整个Select的组件设计非常复杂, 基本将所有的DOM结构控制权全部暴露给了开发者, 其本身只负责底层逻辑和最基本的DOM结构")]),t._v(" "),e("p",[t._v("具体可以去看一下antd所依赖的re-select最终 jsx的结构, 这里不详细列出来了")]),t._v(" "),e("p",[t._v("那么这么多需要自定义的地方, 这个Select组件岂不是很难用?因为好像所有地方都需要开发者自定义\n通用性设计在将DOM结构决定权交给开发者的同时也保留了默认结构, 在开发者没有显示自定义的时候默认使用默认渲染结构, 其实 Select 的基本使用很方便,如下:")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Select defaultValue"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"zyb"')]),t._v(" style"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" width"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" disabled"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Option value"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"zyb"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("zyb"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Option"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Select"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),e("blockquote",[e("p",[t._v("组件的形态(DOM结构)永远是千变万化的, 但是其行为(逻辑)是固定的, 因此通用组件的秘诀之一就是将DOM结构的控制权交给开发者, 组件只负责行为和最基本的DOM结构")])]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("技术选型")])]),t._v(" "),e("ul",[e("li",[t._v("css解决方案")])]),t._v(" "),e("p",[t._v("由于css本身的众多缺陷, 如书写繁琐(不支持嵌套)、样式易冲突(没有作用域概念)、缺少变量(不便于一键换主题)等不一而足\n为了解决这些问题, 社区里的解决方案也是出了一茬又一茬, 从最早的css prepocessor(SASS、LESS、Stylus)到后来的后起之秀PostCSS, 再到CSS Modules、Styled-Components等")]),t._v(" "),e("p",[t._v("antd选择的是less, bootstrap选择的是scss, 这两种方案孰优孰劣已经争论了很多年了, 这里就不详细讲了")]),t._v(" "),e("p",[t._v("但是不管是哪种方案都有一个很烦人的点, 就是需要额外引入css, 比如antd需要这样显示引入")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Button "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'antd/lib/button'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'antd/lib/button/style'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])])]),e("p",[t._v("为了解决这种尴尬的情况, antd用Babel插件将这种情况Hack掉了")]),t._v(" "),e("p",[t._v("至于最优的方案, 我也没有找到具体的资料, 可能需要视实际的场景而定吧, 可以看一下material-ui库的使用\n另外还有styled-components可以了解一下")]),t._v(" "),e("p",[t._v("https://zhuanlan.zhihu.com/p/26878157")]),t._v(" "),e("ul",[e("li",[t._v("js解决方案")])]),t._v(" "),e("p",[t._v("啥也别说了, TypeScript走起, 因为巨硬大法好...")]),t._v(" "),e("h4",{attrs:{id:"组件开发项目的搭建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#组件开发项目的搭建"}},[t._v("#")]),t._v(" 组件开发项目的搭建")]),t._v(" "),e("ol",[e("li",[t._v("打包工具")])]),t._v(" "),e("p",[t._v("市面上打包工具数不胜数, 最火爆的当然是需要配置工程师专门配置的webpack, 但是在类库开发领域它有一个强大的对手就是rollup\n作为基础类库的打包工具rollup的优势如下:")]),t._v(" "),e("ul",[e("li",[t._v("Tree Shaking: 自动移除未使用的代码, 输出更小的文件")]),t._v(" "),e("li",[t._v("Scope Hoisting: 所有模块构建在一个函数内, 执行效率更高")]),t._v(" "),e("li",[t._v("Config 文件支持通过 ESM 模块格式书写 可以一次输出多种格式")]),t._v(" "),e("li",[t._v("模块规范: IIFE, AMD, CJS, UMD, ESM Development 与 production 版本: .js, .min.js")])]),t._v(" "),e("p",[t._v("虽然上面部分功能已经被webpack实现了, 但是rollup明显引入得更早, 而Scope Hoisting更是杀手锏\n由于webpack不得不在打包代码中构建模块系统来适应app开发(模块系统对于单一类库用处很小), Scope Hoisting将模块构建在一个函数内的做法更适合类库的打包")]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("代码检测")])]),t._v(" "),e("p",[t._v("啥也不说了, eslint走起")]),t._v(" "),e("p",[t._v("市面上最流行的代码检测风格应该是Airbnb出品的eslint-config-airbnb")]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[t._v("commit规范")])]),t._v(" "),e("p",[t._v("目前流行的方案是Angular团队的规范, 其关于head的大致规范如下:")]),t._v(" "),e("ul",[e("li",[t._v("type: commit 的类型")]),t._v(" "),e("li",[t._v("feat: 新特性")]),t._v(" "),e("li",[t._v("fix: 修改问题")]),t._v(" "),e("li",[t._v("refactor: 代码重构")]),t._v(" "),e("li",[t._v("docs: 文档修改")]),t._v(" "),e("li",[t._v("style: 代码格式修改, 注意不是css修改")]),t._v(" "),e("li",[t._v("test: 测试用例修改")]),t._v(" "),e("li",[t._v("chore: 其他修改, 比如构建流程, 依赖管理")]),t._v(" "),e("li",[t._v("scope: commit 影响的范围, 比如: route, component, utils, build...")]),t._v(" "),e("li",[t._v("subject: commit 的概述, 建议符合50/72formatting")]),t._v(" "),e("li",[t._v("body: commit 具体修改内容, 可以分为多行, 建议符合50/72formatting")]),t._v(" "),e("li",[t._v("footer: 一些备注, 通常是BREAKING CHANGE或修复的bug的链接")])]),t._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[t._v("其它")])]),t._v(" "),e("p",[t._v("单元测试, 代码美化, 持续集成等等")]),t._v(" "),e("h4",{attrs:{id:"如何设计一个轮播图组件-audio或者video组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何设计一个轮播图组件-audio或者video组件"}},[t._v("#")]),t._v(" 如何设计一个轮播图组件(Audio或者Video组件)")]),t._v(" "),e("p",[t._v("讲了这么多理论知识, 接下来可以动手自己尝试开发一个组件")]),t._v(" "),e("p",[t._v("未完待续...")])])}),[],!1,null,null,null);s.default=r.exports}}]);