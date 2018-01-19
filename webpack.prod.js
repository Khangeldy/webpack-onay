const webpack = require('webpack'),
      merge = require('webpack-merge'),
      uglify = require('uglifyjs-webpack-plugin'),
      common = require('./webpack.common.js'),
      CleanWebpackPlugin = require('clean-webpack-plugin'),
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
    new uglify(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      pngquant: {
        quality: '95-100'
      }
    })
  ]
});
