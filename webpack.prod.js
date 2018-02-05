const webpack = require('webpack'),
      merge = require('webpack-merge'),
      uglify = require('uglifyjs-webpack-plugin'),
      common = require('./webpack.common.js'),
      CleanWebpackPlugin = require('clean-webpack-plugin'),
      CopyWebpackPlugin = require('copy-webpack-plugin'),
      ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = merge(common, {
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        include: /src/,
        loader: "eslint-loader"
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new CleanWebpackPlugin('dist', {exclude: 'dist/font'}),
    new CopyWebpackPlugin([
      {
        from: 'src/images/',
        to: 'images'
      },
      {
        from: 'src/assets/',
        to: 'assets'
      }
    ]),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i
    }),
    new uglify()
  ]
});
