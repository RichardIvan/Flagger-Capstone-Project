'use strict'

const fs = require('fs')
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
  devtool: 'cheap-module-eval-source-map',
  entry: {

    // s: './src/js/s.js',
    index: './src/js/index.js',
    'service-worker': './src/js/service-worker.js',
    'dev-server': 'webpack-dev-server/client?https://0.0.0.0:443/',
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
    // modulesDirectories: [
    //   './node_modules'
    // ]
    descriptionFiles: ["package.json"],
    modules: [
      path.resolve('./'),
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
    new ExtractTextPlugin({ filename: './css/main.css', allChunks: true }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
  ],
  module: {
    loaders: [{
      //   test: /\.css$/,
      //   loaders: ['style', 'css'],
      //   include: path.join(__dirname, 'src'),
      // },
      test: /\.(css|scss|sass)$/,
      loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&sourceMap!postcss-loader!sass' }),
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
      test: /manifest.json$/,
      loader: 'file-loader?name=manifest.json!web-app-manifest-loader'
    },
    {
      test: /\.js$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/,
      include: path.join(__dirname, './'),
      query: {
        // cacheDirectory: true,
      }
      // query: {
      //   "presets":[
      //     // "es2015-native-modules",
      //     ["es2015", { "modules": false }],
      //     "stage-2"
      //  ],
      //  "plugins": [
      //      "transform-runtime",
      //      "transform-flow-strip-types",
      //      "transform-object-rest-spread"
      //    ],
      // }
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
  // devServer: {
    // watchOptions: {
    //   aggregateTimeout: 300,
    //   poll: 300
    // }
    // hot: true,
    // inline: true,
    // host: '0.0.0.0',
    // port: 8080,
    // contentBase: 'src/',
    // historyApiFallback: true,
    // quiet: false,
    // noInfo: false,
    // key: fs.readFileSync('./server/private/server.key'),
    // cert: fs.readFileSync('./server/private/server.cert'),
    // proxy: {
    //   '/data': {
    //     target: 'http://localhost:1337'
    //   // pathRewrite: {
    //   //   '^/api' : ''
    //   // }
    //   }
    // }
  // },
  postcss () {
    return [precss, autoprefixer]
  },
// sassLoader: {
//   includePaths: [path.resolve(__dirname, 'app')],
// },
  // devServer: {
    // contentBase: './dist',
    // hot: true,
    // quiet: false,
    // noInfo: false,
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
