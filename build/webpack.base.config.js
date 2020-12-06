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
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                }
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['env', {
                                targets: {
                                    browsers: ['> 1%', 'last 2 versions']
                                }
                            }]
                        ]
                    }
                },
                exclude: '/node_modules/'
            },
            {
                test: /\.styl(us)?$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /.(png|jpg|gif|jpeg)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename:'index.html',
            template: path.join(__dirname, '../src/index.html'),
        }),
        new VueLoaderPlugin()
    ]
};