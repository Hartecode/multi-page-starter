const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
    filename: 'main.[contentHash].js', // [contentHash] allows us to bust caching in the browser
    path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/i,
                use: [
                    'style-loader', //3. injects styles into dom 
                    'css-loader', //2. turns css into commonjs
                    "sass-loader" //1. turns sass into css
                ],
            },
        ],
    },
};