const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');

module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.scss$/i,
                use: [
                    'style-loader', //3. injects styles into dom 
                    'css-loader', //2. turns css into commonjs
                    'postcss-loader',
                    "sass-loader" //1. turns sass into css
                ],
            },
        ],
    },
});