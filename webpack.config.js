const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = 'development'
}
module.exports = {
    mode: process.env.NODE_ENV,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'file-utils.js',
        // filename: 'turbo.[hash:5].js',
        library: 'fileUtils',
        libraryTarget: 'umd',
        libraryExport: 'default'
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
        ],
    },
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        port: 8888,
        open: true,
    },
    plugins: [new htmlWebpackPlugin()],
}