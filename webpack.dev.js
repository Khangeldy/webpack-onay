const path = require('path'),
      webpack = require('webpack'),
      merge = require('webpack-merge'),
      DashboardPlugin = require('webpack-dashboard/plugin'),
      GoogleFontsPlugin = require("google-fonts-webpack-plugin"),
      BrowserSyncPlugin = require('browser-sync-webpack-plugin'),
      common = require('./webpack.common.js');

/* =========================================================
*   - webpack-merge webpack конфигтерді біріктіру үшін қажет
*   - webpack-dashboard консольде әдемі логтарды көрсетеді
*   - common  prod пен dev конфигтеріне ортақ настройкалар
========================================================= */

// Келешекте webpack конфигінде production режимін тексеру үшін.
if (process.env.NODE_ENV !== 'production') {
  console.log('Webpack development режимінде!');
}

module.exports = merge(common, {
  devtool: 'inline-source-map',
  plugins: [
    // npm run start:dash командасын енгізсең түсінесің
    new DashboardPlugin(),
    new BrowserSyncPlugin({
      //  Браузерде http://localhost:3000/ локальный серверді іске қосады ,
      // ./dist папкасы корень
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['dist'] }
    }),
    new GoogleFontsPlugin({
      // Google Fonts cdn-нан автомматты түрде жүктейді қаріптерді
      // Жүктелген қаріптер dist/fonts папкасында орналасқан
      fonts: [
        { family: "Source Sans Pro" },
        { family: "Roboto", variants: [ "400", "700italic" ] }
      ]
    })
  ]
})
