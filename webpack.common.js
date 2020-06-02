const HtmlWebpackPlugin = require('html-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const glob = require('glob');
const path = require('path');

const splitDirName = (p) => path.dirname(p).split('/');

const entryFiles = glob.sync('./src/pages/**/*.js').reduce((acc, cur) => {
    const pathArr = splitDirName(cur);
    const key = pathArr[pathArr.length - 1];
    return {
        ...acc,
        [key]: cur 
    }
}, {});

const htmlPages = glob.sync('./src/pages/**/*.html').map(p => {
    const pathArr = splitDirName(p);
    const folderName = pathArr[pathArr.length -1];
    return new HtmlWebpackPlugin({
        template: p,
        inject: true,
        chunks: [folderName],
        filename: `${folderName}.html`
    })
})

console.log(entryFiles)

module.exports = {
    entry: entryFiles,
    plugins: [
        ...htmlPages,
        new StylelintPlugin({})
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