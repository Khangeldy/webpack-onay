## Webpack-onay
[![Travis](https://travis-ci.org/Khangeldy/webpack-onay.svg?branch=master)](http://github.com/khangeldy/webpack-onay)

## Бұл не?
Қазақ бағдарламашыларына арналған webpack starter-kit, дайын құралдар саймыны. Сайтыңызды тез верстка жасауға, көптеген жұмысты автоматтазациялауға көмектеседі. Қазақ бағдарламашылардың қолымен қазақ бағдарламашылардың қолданылуы үшін.

## Webpack деген не?
 [Webpack](https://webpack.js.org/) фронтенд-бағдарламашылардың заманға сай пакеттік жинақтаушысы. Javascript файлдарыңызды біріктіріп, оптимизацияларды жасап бір `.js` файлды қайтарады.

#### Құрал саймандар

- livereload
- babel(es6)
- postcss
- imagemin
- eslint
- google fonts
- webpack-jarvis

### Қолдануы
`git clone git@github.com:Khangeldy/webpack-onay.git`

Одан кейін бума ішіне кіріп

`сd webpack-onay && npm install`

командасын орындаймыз.

`npm start`

Сосын [http://localhost:3000](http://localhost:3000) адресі бойынша сайтыңызды ашыңыз.

---

### Sugarss ұнатпасаңыз
postcss.config.js-ті келесі өзгерістерді қабылда.
```diff
  module.exports = {
-   parser: 'sugarss',
    plugins: {
      'postcss-cssnext': {},
-     'postcss-easy-import': { extensions: ['.sss', '.css']}
+     'postcss-easy-import': { extensions: ['.css']}
    }
  }

```

### Sugarss орнына Sass

Егер sass препроцессорға үйреніп қалсаңыз. Precss таңдауға кеңес беремін. Ол sass-қа ұқсас. Бірінші оны жүктейміз.
`npm i precss -D`
Сосын postcss.config.js келесі өзгерістерді қабылдаймыз
```diff
  module.exports = {
-   parser: 'sugarss',
    plugins: {
+     'precss': {},
      'postcss-cssnext': {},
-     'postcss-easy-import': { extensions: ['.sss', '.css']}
+     'postcss-easy-import': { extensions: ['.css']}
    }
  }
```
### WebpackDev serverді қалай қосамын
Бірінші команда арқылы оны `npm i -D webpack-dev-server`
жүктейміз

package.json
```diff
  "scripts": {
+   "serve": "webpack-dev-server --config webpack.dev.js"
  }
```
webpack.dev.js
```diff
module.exports = merge(common, {
  //...
  plugins: [
-    new BrowserSyncPlugin({
-      host: 'localhost',
-      port: 3000,
-      server: { baseDir: ['dist'] }
-    }),
  ]
})
```

`npm run serve` командасын тереміз.

### Суреттерді қосу,  public папкасы
Суреттерді `src/images` папкасына лақтырсаңдар автоматты түрде `dist/images` папкасына көшіріленеді. Ал `assets` папкасында басқа керек файлдарды сақтауға болады.

### Github та хостингке лақтыру үшін
Бірінші өз мынау репозиториядың remote-тан өшіреміз. `git remote remove origin`. Сосын `git remote add origin [github repo url]` арқылы өзімізге керек репозиторияды жазамыз.
Екінші `npm run build` артынан  `npm run deploy` жасап, Егер eslint қателері шығып жатса оларды фиксит етеміз. 
