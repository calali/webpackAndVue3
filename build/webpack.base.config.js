const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: {
        //webpack构建的入口文件
        app: path.join(__dirname, '../src/main.ts'),
        //把框架代码和业务代码分开打包
        vendor: ['vue']
    },
    output: {
        //打包后的文件的存放位置
        path: path.resolve(__dirname, '../dist'),

        // https://webpack.js.org/configuration/output/#outputfilename
        filename: '[name].[fullhash].js',
    },
    // https://webpack.js.org/configuration/module/#rule
    module: {
        rules: [
            {
                test: /\.ts?$/,
                loader: 'ts-loader',//调用typescript将ts转为js
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                }
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']//解析vue文件
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',//将es6+转为es5
                    // options: {
                    //     presets: ['es2015']
                    //     // presets: [
                    //     //     ['env', {
                    //     //         targets: {
                    //     //             browsers: ['> 1%', 'last 2 versions']
                    //     //         }
                    //     //     }]
                    //     // ]
                    // }
                },
                include: [path.resolve(__dirname, '../src')],
                exclude: '/node_modules/'
            },
            {
                test: /\.styl(us)?$/,
                use: [
                    'style-loader',//通过一个JS脚本创建一个style标签，里面包含一些样式
                    'css-loader',//处理 import / require（） @import / url 引入的内容
                    'stylus-loader'//解析stylus语法至css
                ]
            },
            {
                test: /.(png|jpg|gif|jpeg)$/,
                use: 'file-loader'//复制文件，将文件从相对于模板文件的地址拷贝到相对应的路径
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename:'index.html',//使用的的入口html文件名
            template: path.join(__dirname, '../src/index.html'),//入口html文件模板
        }),
        // 将你定义过的其它规则复制并应用到 .vue 文件里相应语言的块。例如，如果你有一条匹配 /\.js$/ 的规则，那么它会应用到 .vue 文件里的 <script> 块
        new VueLoaderPlugin()
    ]
};