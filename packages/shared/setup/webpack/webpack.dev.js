/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

const base = require('./webpack.base.js');

module.exports = merge(base, {
    mode: 'development',
    devtool: 'source-map',
    plugins: [
        new webpack.EnvironmentPlugin({
            DEBUG: true
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            extractComments: false
        })]
    }
});
