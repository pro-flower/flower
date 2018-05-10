const webpack = require('webpack')
//这种写法可以不用安装webpack-cli
//运行需要使用命令`node webpack.config.js`已在package.json里写好
webpack({
    entry: {
        'app': './src/librarys/app/app.ts'
    },
    output: {
        filename: '[name].min.js',
        path: __dirname + '/dist/js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader'
            },
            {
                test: /\.styl$/,
                use: ['style-loader', 'css-loader', 'stylus-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.styl']  //模块解析
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
})