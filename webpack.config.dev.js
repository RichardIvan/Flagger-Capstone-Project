'use strict'

const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')
const precss = require('precss')
const autoprefixer = require('autoprefixer')
// var BrowserSyncPlugin = require('browser-sync-webpack-plugin')
// var proxyMiddleware = require('http-proxy-middleware')

// const target = {
//   target: 'http://localhost:1337'
// }
// const data = proxyMiddleware('/data', target)

module.exports = {
  cache: true,
  devtool: 'eval',
  entry: {

    // s: './src/js/s.js',
    index: './src/js/index.js',
    'service-worker': './src/js/service-worker.js',
    'dev-server': 'webpack-dev-server/client?https://0.0.0.0:8080/',
    // 'hot-dev-server': 'webpack/hot/only-dev-server',
  // common: [
  //   'lodash'
  //   // 'jquery'
  // ]
  },
  proxy: {
    '/data/*': 'http://localhost:1337/'
  },
  output: {
    path: path.join(__dirname, './dist'),
    // Template based on keys in entry above
    filename: './js/[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.json'],
    modulesDirectories: [
      './node_modules'
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer'
    }),
    // new BrowserSyncPlugin(
    //   // BrowserSync options
    //   {
    //     // browse to http://localhost:3000/ during development
    //     host: 'localhost',
    //     port: 3000,
    //     // proxy the Webpack Dev Server endpoint
    //     // (which should be serving on http://localhost:3100/)
    //     // through BrowserSync
    //     proxy: 'http://localhost:8080/',
    //     middleware: [data]
    //   },
    //   // plugin optionss
    //   {
    //     // prevent BrowserSync from reloading the page
    //     // and let Webpack Dev Server take care of this
    //     reload: false
    //   }
    // ),
    new ExtractTextPlugin('./css/main.css', { allChunks: true }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ],
  module: {
    loaders: [{
      //   test: /\.css$/,
      //   loaders: ['style', 'css'],
      //   include: path.join(__dirname, 'src'),
      // },
      test: /\.(css|scss)$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&sourceMap!postcss-loader!sass'),
      include: path.join(__dirname, './')
    },
    // {
    //   test: /\.scss$/,
    //   loader: ExtractTextPlugin.extract('style-loader', `css-loader?modules
    //     &importLoaders=1
    //     &localIdentName=[name]__[local]___[hash:base64:5]`),
    //     // &sourceMap!postcss-loader!sass`),
    //   include: path.join(__dirname, 'app'),
    // },
    {
      test: /\.js$/,
      loaders: ['buble-loader'],
      exclude: /node_modules/,
      include: path.join(__dirname, './'),
      cacheDirectory: true
    },
    {
      test: /\.json$/, loader: 'json-loader',
      include: path.join(__dirname, './')
    },
    {
      test: /\.(png|jpg|ttf)$/, loader: 'url-loader?limit=8192',
      include: path.join(__dirname, './')
    }]
  },
  devServer: {
    hot: true,
    host: '0.0.0.0',
    port: 8080,
    // contentBase: 'src/',
    // historyApiFallback: true,
    quiet: false,
    noInfo: false,
    proxy: {
      '/data': {
        target: 'http://localhost:1337'
      // pathRewrite: {
      //   '^/api' : ''
      // }
      }
    }
  },
  postcss () {
    return [precss, autoprefixer]
  }
// sassLoader: {
//   includePaths: [path.resolve(__dirname, 'app')],
// },
// devServer: {
//   contentBase: './dist',
//   hot: true,
//   quiet: false,
//   noInfo: false,
// },
// externals: {
//   jquery: {
//     root: 'jQuery',
//     commonjs: 'jquery',
//     commonjs2: 'jquery',
//     amd: 'jquery'
//   }
// }
}
