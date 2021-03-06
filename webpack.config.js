var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'public/');
var APP_DIR = path.resolve(__dirname, 'build/src/js');

var config = {
  entry: ['babel-polyfill', APP_DIR + '/App.js'],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  devtool: "#eval-source-map",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['transform-class-properties', 'transform-decorators-legacy']
        }
      },
      { test: /\.json$/, loader: 'json-loader' },
      {
        test: /\.css$/,
        loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack-loader'
        ]

    }

      // {
      //   test: /\.scss$/,
      //   loaders: ExtractTextPlugin.extract(
      //       'style',
      //       'css?sourceMap!sass?sourceMap'
      //   )
      // }
    ],
  }
};

module.exports = config;