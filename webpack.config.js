const webpack=require('webpack');
module.exports={
    entry: {
        "app":"./src/librarys/app/app.ts"
    },
    output: {
        filename: "[name].min.js",
        path: __dirname+"/dist/js"
    },
    module: {
        rules: [
            {
                test:/\.ts$/,
                use: "ts-loader"
            },
            {
                test:/\.styl$/,
                use: ['style-loader','css-loader','stylus-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.ts','.js','.styl']  //模块解析
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
}