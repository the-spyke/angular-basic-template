const webpack = require('webpack');
const conf = require('./gulp.conf');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    module: {
        loaders: [
            {
                test: /.json$/,
                loaders: [
                    'json'
                ]
            },
            {
                test: /\.(css|less)$/,
                loaders: [
                    'style',
                    'css',
                    'less',
                    'postcss'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: [
                    'ng-annotate',
                    'babel'
                ]
            },
            {
                test: /\.(woff|woff2)$/,
                loader: 'url?limit=8192&mimetype=application/font-woff'
            },
            {
                test: /\.ttf$/,
                loader: 'file'
            },
            {
                test: /\.eot$/,
                loader: 'file'
            },
            {
                test: /\.svg$/,
                loader: 'file'
            }
        ]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: conf.path.src('index.html'),
            inject: true
        })
    ],
    postcss: [autoprefixer],
    debug: true,
    devtool: 'cheap-module-eval-source-map',
    output: {
        path: path.join(process.cwd(), conf.paths.tmp),
        filename: 'index.js'
    },
    entry: `./${conf.path.src('index')}`
};
