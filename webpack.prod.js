const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var webpack = require('webpack');


module.exports = merge(baseConfig, {
    mode:"production",
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'release')
    },
    devtool:'source-map',
    plugins: [
        // new UglifyJsPlugin({
        //     sourceMap:true
        // }),
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'production',
            DEBUG: false
        })
    ],
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
});