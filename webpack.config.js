const webpack=require('webpack');
module.exports={
    entry: {
        "app":"./src/"
    },
    output: {
        filename: "[name].min.js",
        path: _dirname+"/dits/js"
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