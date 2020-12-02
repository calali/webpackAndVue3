const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'demo.js'
    },
    devServer: {
       contentBase: './dist',
       open:true
    },
    module: {
        rules: [
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
        new VueLoaderPlugin()
    ]
};