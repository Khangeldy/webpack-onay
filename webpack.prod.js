const webpack = require('webpack'),
      merge = require('webpack-merge'),
      uglify = require('uglifyjs-webpack-plugin'),
      common = require('./webpack.common.js'),
      CleanWebpackPlugin = require('clean-webpack-plugin'),
      ImageminPlugin = require('imagemin-webpack-plugin').default;

/* =====================imports=============================
*   = webpack-merge webpack конфигтерді біріктіру
*   = uglify js кодты сығу
*   = common  prod пен dev конфигтеріне ортақ настройкалар
*   = imagemin суреттерді сығу
*   =
========================================================= */

module.exports = merge(common, {
  module: {
    rules: [
      { // js кодты тексеру
        enforce: "pre",
        test: /\.js$/,
        include: /src/,
        loader: "eslint-loader"
      }
    ]
  },
  plugins: [
    // clienWebpack dist папканы әр сборка басталмас бұрын тазалайды
    // new CleanWebpackPlugin('dist/', {}),
    new uglify(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    /*
    * Cуреттерді компресс жасайды
    */
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      pngquant: {
        quality: '95-100'
      }
    })
  ]
});
