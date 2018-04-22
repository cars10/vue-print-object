const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge');
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const config = {
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '../dist/',
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: true,
          minimize: true
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true,
      sourceMap: false,
      mangle: true,
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('vue-print-object.css')
  ]
}

/**
 * We create to different js bundles
 * * vue-print-object.min.js
 *      The minimized bundle registers the component globally on +window+ and should be used for setups without npm.
 *      You can include that file directly via script tag and use the component via +Vue.use(VueStaticTerminal)+
 *
 * * vue-print-object.js
 *      This is the umd library to use when including the component via npm.
 */
module.exports = [
  merge(config, {
    entry: path.resolve(__dirname + '/../src/plugin.js'),
    output: {
      filename: 'vue-print-object.min.js',
      libraryTarget: 'window',
      library: 'VueStaticTerminal',
    }
  }),
  merge(config, {
    entry: path.resolve(__dirname + '/../src/components/StaticTerminal.vue'),
    output: {
      filename: 'vue-print-object.js',
      libraryTarget: 'umd',
      library: 'vue-print-object',
      umdNamedDefine: true
    }
  })
];
