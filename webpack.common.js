const path = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      CopyWebpackPlugin = require('copy-webpack-plugin'),
      ExtractTextPlugin = require("extract-text-webpack-plugin"),
      CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/app.js', //  кіру нүктесі
  /*
  * entry -
  * Осы файлға импортталған басқа файлдар астыдағы
  * лоадерлер ден өтеді.
  * Мысалы ретінді src/app.js Бірінші строка.
  */
  output: {
    filename: 'bundle.js', // шығатын нүктесі
    path: path.resolve(__dirname, 'dist') // шығатын нүктенің толық жолы
    // publicPath: 'http:localhost:3000'
    /*
    *  pubcicPath - index.html да жазылатын путь
    * Мысалы <img src="http:localhost:3000/filename.jpg" />
    * немесе css тағы background-image: url(http:localhost:3000/filename.jpg);
    */
  },
  module: {
    rules: [ //  Мұнда лоадерлер және олардың конфигтары
      {
        test: /\.sss$/,
        /*
        * test - Регулярное выражениеға кірген файлдарды ғана фильтрден өткізеді
        * .sss Postcss тің sugarss деген синтаксисі https://github.com/postcss/sugarss
        */
        include: /src\/css/,
        /*
        * include пен exclude - бұлар test сияқты регулярное выраженияда өткен
        * файлдарды, папкаларды қосады немесе алып тастайды.
        * include параметрі орнатылған кезде басқа папкаларға автоматты түрде
        * exclude қолданылады.
        */
        use: [ // қолданылатын лоадерлер тізімі
          'style-loader', // конфигі жоқ лоадер осылай жазылады
          {
            loader: 'css-loader', // configпен бірге жазылған loader
            options: { importLoaders: 1 } // лоадердің конфигурациясы
          },
          'postcss-loader'// https://github.com/postcss/postcss-loader
        ]
        /* Егер css файлды шығару керек болса
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
        */
      },
      { // es6 компилятор
        test: /\.js$/,
        include: /src/,
        use: {
          loader: 'babel-loader', // https://github.com/babel/babel-loader
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      { test: /\.ejs$/, include: /src\/template/, use: ['ejs-loader'] },
      /*
      * Ejs шаблонизатор
      * https://github.com/okonet/ejs-loader
      */

      {
        test: /\.(jpe?g|png|gif|svg|webp|woff|woff2|eot|ttf|otf)$/,
        include: /src/,
        use: {
          loader: 'file-loader',
          options: {}
        }
      },
      /*
      * css-тің ішіндегі суреттерді, шрифтерді importтау үшін
      * https://github.com/webpack-contrib/file-loader
      */

    ]
  },
  plugins: [
    // index.html шаблоны
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/template/index.ejs')
    }),
    // Cуреттерді src/images-тан dist/images-ге көшіру
    new CopyWebpackPlugin([
      {
        from: 'src/images',
        to: 'images'
      },
      {
        from: 'src/assets',
        to: 'assets'
      }
    ]),
  ]
}
