const { merge } = require('webpack-merge')
const base = require('./webpack.base.config')
const path = require('path')
const OptimizeCss = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = merge(base, {
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [
            //压缩CSS代码
            new OptimizeCss(),
            //压缩js代码
            new TerserPlugin(),
        ]
    },
    plugins: [new CleanWebpackPlugin({
        // cleanOnceBeforeBuildPatterns:['*/dist'],
        // dangerouslyAllowCleanPatternsOutsideProject:true
    })]
})
