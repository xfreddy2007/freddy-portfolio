const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        vendor: './src/vendor.js',
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            favicon: './src/assets/favicon.png',
        }),
        new CompressionPlugin(),
        new MiniCssExtractPlugin({
            filename: 'dist.bundle.css'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        }),
        new ImageMinimizerPlugin({
            minimizerOptions: {
              plugins: [
                ['gifsicle', { interlaced: true }],
                ['jpegtran', { progressive: true }],
                ['optipng', { optimizationLevel: 5 }],
                [
                  'svgo',
                  {
                    plugins: [
                      {
                        removeViewBox: false,
                      },
                    ],
                  },
                ],
              ],
            },
          }),
    ],

    module:{
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|jpeg|jpg|gif|svg)$/i,
                use: [
                    {
                      loader: 'file-loader', // Or `url-loader` or your other loader
                    },
                    {
                      loader: ImageMinimizerPlugin.loader,
                      options: {
                        severityError: 'warning', // Ignore errors on corrupted images
                        minimizerOptions: {
                          plugins: ['gifsicle'],
                        },
                      },
                    },
                ],
            },
        ]
    },

    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin(),
        ],
    },

    devtool: 'inline-source-map',

    devServer: {
        watchContentBase: true,
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        port: 8080,
        open: true
    }
}