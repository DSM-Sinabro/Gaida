const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: "cheap-module-source-map",
    output: {
        path: __dirname + '/public',
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                options: {
                cacheDirectory: true,
                presets: ['es2015', 'react'],
            }
            },
            {
                test: /\.css$/,
                use: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        importLoaders: 1,
                        localldentName: '[name]__[local]___[hash:base64:5]'
                    }
                }]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" 
                }, {
                    loader: "css-loader",
                    options: {
                        modules: true,
                        importLoaders: 1,
                        localldentName: '[name]__[local]___[hash:base64:5]'
                    }
                }, {
                    loader: "sass-loader",
                    options: { sourceMap: true }
                }]
            },
            {
                test: /\.(gif|png|jpe?g|svg|mp4)$/i,
                use: [
                'file-loader',
                {
                  loader: 'image-webpack-loader',
                  options: {
                    bypassOnDebug: true,
                    publicPath: './dist',
                    name: '[name].[ext]?[hash]',
                },
              },
            ]
          }
        ]
    },
    devServer: {
        inline: true,
        port: 3000,
        contentBase: __dirname + '/public'
    }
}