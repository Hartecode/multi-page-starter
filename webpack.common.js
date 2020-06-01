const HtmlWebpackPlugin = require('html-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    entry: {
        index: './src/pages/landing/index.js',
        landing: './src/pages/landing/index.js',
        about: './src/pages/about/about.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: true,
            chunks: ['index'],
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/landing/index.html',
            inject: true,
            chunks: ['landing'],
            filename: 'landing.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/about/index.html',
            inject: true,
            chunks: ['about'],
            filename: 'about.html'
        }),
        new StylelintPlugin(options)
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(svg|png|jpg|gif|jpeg)$/, // may need to expand this in the future
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "imgs"
                    }
                }
            }
        ],
    },
};