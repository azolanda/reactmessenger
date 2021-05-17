const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: path.join(__dirname, "static_src", "index.jsx"),
    output: {
       path: path.join(__dirname, "build"),
       filename: "bundle.js",
       publicPath: "/build/",
    },
    mode: 'development',
    devtool:'source-map',
    devServer: {
        https: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, "static_src"),
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env', '@babel/react'],
                }       
            },
            {
                test:/\.(css)$/,
                use:['style-loader', 'css-loader'],
            },
        ],
    }, 
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.join(__dirname, "./", "index.html"),
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
        }),
    ], 
};