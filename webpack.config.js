const resolve = require('path').resolve;
const HTMLWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

const inDevMode = process.env.NODE_ENV === 'development';

module.exports = {
  entry: './src/index.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'js/bundle.js',
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    historyApiFallback: true,
    open: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js||jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          inDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png||jpe?g||gif||svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/images',
            },
          },
        ],
      },
      {
        test: /\.(woff||woff2||ttf||otf||eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist'],
    }),
    new HTMLWebPackPlugin({
      template: resolve(__dirname, 'public/index.html'),
      inject: true,
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer()],
      },
    }),
  ],
};
