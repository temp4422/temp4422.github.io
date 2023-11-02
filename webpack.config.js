const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MangleCssClassPlugin = require('mangle-css-class-webpack-plugin')

module.exports = {
  entry: {
    index: './src/index.js',
    print: './src/print.js',
  },

  output: {
    // filename: '[name][hash].bundle.js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  devServer: {
    static: './dist',
    port: 3000,
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: './src/template.html',
    }),
    // new MangleCssClassPlugin({
    //   classNameRegExp: '[cl]-[a-z][a-zA-Z0-9_]*',
    //   mangleCssVariables: true,
    //   log: true,
    // }),
  ],

  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            // options: {
            //   minimize: true,
            //   interpolation: false,
            // },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },

  mode: 'development',
}
