const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
    entry: {
        app: path.join(__dirname, './src/main.ts'),
        vendor: ['vue']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    devServer: {
       contentBase: './dist',
       open:true,
       useEslint: true,
    },
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
        new VueLoaderPlugin()
    ]
};