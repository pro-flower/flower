const path = require('path')
const copyWebpackPlugin = require('copy-webpack-plugin')  //复制文件，处理静态资源，比如img
const htmlWebpackPlugin = require('html-webpack-plugin')

//path.resolve拼接\解析路径专用包
function resolve(src) {
    return path.resolve(__dirname, src)
}

module.exports = {
    // mode: 'development',//开发环境还是生产环境,决定代码是否压缩等其他功能,一般配置在命令行
    entry: {
        //多出口写法，js文件夹下为html就是文件，nodeServer文件夹下为node服务
        'js/app': resolve('src/librarys/app/app.ts'),
        'nodeServer/app':resolve('src/restful_api/main.ts')
    },
    output: {
        path: resolve('dist'),
        filename: '[name].js'
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
            },
            //同一片加载器，limit=8192为阀值，小于8192字节转base编码，大于则不打包
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf|jpeg)\??.*$/,
                use: 'url-loader?limit=8192&name=img/[hash:8].[name].[ext]'
            },
            {
                test: /\.png$/,
                use: 'file-loader?name=img/[hash:8].[name].[ext]'
            }
        ]
    },
    resolve: {
        alias: {//设置路径别名,js用了没事,ts用了报错
            '@': resolve('src')
        },
        //自动解析确定的扩展,能够使用户在引入模块时不带扩展
        extensions: ['.ts', '.js', '.styl']  //模块解析
    },
    plugins: [
        new htmlWebpackPlugin({
            title: '触手可及', //用于生成的HTML文档的标题。
            filename: resolve('dist/index.html'), // 生成的模板文件的名字 默认index.html
            template: resolve('src/librarys/htmltemplate/index.html'), //模板来源文件
            inject: true, //注入位置'head','body',true,false
            favicon: '', //指定页面图标
            minify: {
                caseSensitive: false, ////是否大小写敏感
                collapseBooleanAttributes: true, //是否简写boolean格式的属性如：disabled="disabled" 简写为disabled
                collapseWhitespace: true //是否去除空格
            },
            hash: true, //是否生成hash添加在引入文件地址的末尾，类似于我们常用的时间戳，这个可以避免缓存带来的麻烦
            cache: true, //是否需要缓存，如果填写true，则文件只有在改变时才会重新生成
            showErrors: true, //是否将错误信息写在页面里，默认true，出现错误信息则会包裹在一个pre标签内添加到页面上
            chunks: ['app'], //引入的a,b模块，这里指定的是entry中设置多个js时，在这里指定引入的js，如果不设置则默认全部引入,数组形式传入
            chunksSortMode: 'auto', //引入模块的排序方式
            //excludeChunks: ['a', 'b'], //排除的模块,引入的除a,b模块以外的模块，与chunks相反
            xhtml: false //生成的模板文档中标签是否自动关闭，针对xhtml的语法，会要求标签都关闭，默认false
        }),
        //处理静态资源
        new copyWebpackPlugin(
            [
                //处理图片
                {
                    from: resolve('src/librarys/img'),
                    to: resolve('dist/img')
                }
            ]
        )
    ]
}