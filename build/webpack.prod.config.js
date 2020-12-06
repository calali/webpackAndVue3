const { merge } = require('webpack-merge')
const base = require('./webpack.base.config')
const path = require('path')
const OptimizeCss = require('optimize-css-assets-webpack-plugin')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// const webpack = require('webpack')

module.exports = merge(base, {
    mode: 'production',
    optimization: {
        minimizer: [
            //压缩CSS代码
            new OptimizeCss(),
            //压缩js代码
            // new UglifyJsPlugin()
        ]
    },
    plugins: [
        //使用插件定义全局变量DEV
        // new webpack.DefinePlugin({
        //     DEV: JSON.stringify('production')
        // })
    ]

})
