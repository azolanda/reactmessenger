const path = require("path");
const webpack = require('webpack');

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
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                  presets: ['@babel/env', '@babel/react'],
                }     
            },
        ],
    }, 
};