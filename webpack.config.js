const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: path.resolve(`${__dirname}/src`, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/html/index.html'
    }),
    new Dotenv()
  ]
};
