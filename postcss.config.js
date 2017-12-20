module.exports = {
  parser: 'sugarss', // https://github.com/postcss/postcss#syntaxes
  plugins: {
    'postcss-cssnext': {}, // Қалай қолдану керек http://cssnext.io/features/
    'postcss-easy-import': { extensions: ['.sss', '.css']}
    // ,'cssnano': {}
  }
}
