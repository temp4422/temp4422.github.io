const path = require('path')
const MangleCssClassPlugin = require('mangle-css-class-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new MangleCssClassPlugin({
      classNameRegExp: '[cl]-[a-z][a-zA-Z0-9_]*',
      mangleCssVariables: true,
      log: true,
    }),
  ],
}
