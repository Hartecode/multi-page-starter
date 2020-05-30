const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');

module.exports = merge(common, {
    mode: 'production',
    output: {
    filename: 'main.[contentHash].js', // [contentHash] allows us to bust caching in the browser
    path: path.resolve(__dirname, 'dist'),
    }
});