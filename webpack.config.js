const webpack=require('webpack');
module.exports={
    entry: {
        "app":"./src/librarys/app.ts"
    },
    output: {
        filename: "[name].min.js",
        path: __dirname+"/dits/js"
    },
    module: {
        rules: [
            {
                test:/\.ts$/,
                use: "ts-loader"
            },
            {
                test:[/\.css$/,/\.stylus/],
                use: ['style-loader','css-loader','stylus-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.ts','.js','.stylus']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
}