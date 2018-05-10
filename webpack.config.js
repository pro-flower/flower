const path = require('path')

module.exports = {
  //path.resolve拼接\解析路径专用包
  entry: path.resolve(__dirname, 'src/librarys/app/app.ts'),
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'dist/js')
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
    extensions: [' ', '.ts', '.js', '.styl']  //模块解析
  }
}