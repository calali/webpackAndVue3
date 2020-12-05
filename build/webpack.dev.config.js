const { merge } = require('webpack-merge')
const base = require('./webpack.base.config')
// const webpack = require('webpack')
const path = require('path')

module.exports = merge(base, {
    //模块参数
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        //端口号
        port: '8080',
        inline: true,
        open: true,
        historyApiFallback: true,//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        hot: true//允许热加载
    },
    //启用source-map方便调试
    devtool: 'source-map',
    plugins: [
        //定义全局变量
        // new webpack.DefinePlugin({
        //     //这里必须要解析成字符串进行判断，不然将会被识别为一个变量
        //     DEV: JSON.stringify('dev')
        // })
    ]
})
