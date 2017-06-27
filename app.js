const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
const jsStandards = require('spike-js-standards')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  devtool: isProduction ? false : 'source-map',
  ignore: ['**/_*', '**/.*', 'readme.md', 'yarn.lock', 'package-lock.json', '**/.idea/**', 'LICENSE'],
  reshape: htmlStandards({
    parser: false,
    locals: {},
    minify: isProduction
  }),
  postcss: cssStandards({
    parser: false,
    minify: isProduction,
    warnForDuplicates: !isProduction
  }),
  babel: jsStandards({modules: false})
}
