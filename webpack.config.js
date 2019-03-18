const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')
  },
   module: {
       rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    }
  ]
   },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 7001
  },  
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      hash: true
    },
    new CopyWebpackPlugin([{from: 'src/models/cellimg/'}])
  )
  ]
}