webpack5 +vue3一步步搭建vue项目

虽然vue提供了一步到位的vue项目搭建的脚手架，但为了更加熟悉webpack构建的过程，我选择一步步搭建vue项目。以下是搭建过程。



### 开发顺序：
1. vue文件打包成功,通过html文件地址在浏览器访问
    初始化配置webpack的entry、output、module和plugin。
    需要vue-loader、babel-loader等相关的解析器解析js和vue文件。
    需要style-loader、css-loader解析css文件。
2. 支持本地开发调试webpack-dev-server，自动打开页面
3.支持stylus、img等loader
4.支持ts、eslint
5.支持不同环境的打包配置

具体参考build文件夹下的配置


### 参考资料
1. https://bbs.huaweicloud.com/blogs/183533
2. https://github.com/vuejs/vue-loader
3. https://www.webpackjs.com/concepts/
4. https://juejin.cn/post/6844904166041600014