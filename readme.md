webpack5 +vue3搭建项目

项目技术栈：vue3+webpack+typescript

主要实践webpack的各项配置。


### 开发顺序：
1. vue文件可以解析成功,通过html文件地址在浏览器访问
    需要vue-loader、babel-loader等相关的解析器解析js和vue文件。
    需要style-loader、css-loader解析css文件。
2. 支持本地开发调试webpack-dev-server，自动打开页面
3. 支持不同环境的打包配置
    测试环境有sourceTree
    线上环境没有
4. 支持stylus、img等loader
5. 支持ts、eslint
6. 支持tree-shaking[还没做]



### 问题

### todo
1把vue.js和业务代码分开打包


3线上和开发环境2个配置




### 参考资料
1. https://bbs.huaweicloud.com/blogs/183533
2. https://github.com/vuejs/vue-loader
3. https://www.webpackjs.com/concepts/
4. https://juejin.cn/post/6844904166041600014