const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
var webpack = require('webpack');

module.exports = merge(baseConfig, {
    mode:'development',
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist')
    },
    devtool:'source-map',
    plugins: [
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
            DEBUG: false
        })
    ],
    watch: true,
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        watchContentBase: true,
        compress: true,
        port: 9000
      }
});