/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');

const base = require('./webpack.base.js');

module.exports = merge(base, {
    mode: 'production',
    plugins: [
        new webpack.EnvironmentPlugin({
            DEBUG: false
        }),
    ],
    optimization: {
        minimize: true,
        usedExports: true,
        minimizer: [new TerserPlugin({
            extractComments: false
        })],
    }
});
