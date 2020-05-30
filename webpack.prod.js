const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: '[name].[contentHash].bundle.js', // [contentHash] allows us to bust caching in the browser
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [new CleanWebpackPlugin(),]
});