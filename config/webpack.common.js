var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var helpers = require('./helpers');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
  context: helpers.root('src'),
  entry: {
    polyfills: './polyfills.ts',
    vendor: './vendor.ts',
    app: './main.ts'
  },
  resolve: {
    extensions: ['', '.js', '.ts', '.json'],
    // An array of directory names to be resolved to the current directory
    modules: [helpers.root('src'), 'node_modules']
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        exclude: [/(node_modules|bower_components)/, /libs/, /\.(spec|e2e)\.ts$/],
        loaders: ['ts', 'tslint-loader', 'angular2-template-loader']
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.html$/,
        loaders: ['html']
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico|svg)$/,
        loaders: ['file?name=assets/[name].[hash].[ext]']
      },
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss-loader')
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loaders: ['css-to-string-loader!', 'css', 'postcss-loader']
      },
      {
        test: /\.scss$/,
        loaders: ['css-to-string', 'css', 'sass', 'postcss-loader']
      }
    ]
  },

  postcss: function() {
    return [autoprefixer];
  },

  tslint: {
    // tslint errors are displayed by default as warnings
    // set emitErrors to true to display them as errors
    emitErrors: false,

    // tslint does not interrupt the compilation by default
    // if you want any file with tslint errors to fail
    // set failOnHint to true
    failOnHint: true,
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      //chunksSortMode: 'dependency'
    }),
    new CopyWebpackPlugin([
      /*{
        from: './libs',
        to: 'libs'
      }*/],
      {
        copyUnmodified: true
      }
    )
  ],

   /*
   * Include polyfills or mocks for various node stuff
   * Description: Node configuration
   *
   * See: https://webpack.github.io/docs/configuration.html#node
   */
  node: {
    global: true,
    crypto: 'empty',
    process: true,
    module: false,
    clearImmediate: false,
    setImmediate: false
  }
};
