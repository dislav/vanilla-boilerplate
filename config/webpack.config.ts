import { Configuration } from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import ESLintWebpackPlugin from 'eslint-webpack-plugin';

import paths from './paths';
import pages from './pages';

const config: Configuration = {
    entry: {
        common: `${paths.common}/index.ts`,
        vendors: '@barba/core',
    },
    output: {
        filename: '[name].bundle.js',
        path: paths.dist,
    },
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: 'simple-pug-loader',
            },
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            '@common': paths.common,
            '@components': paths.components,
            '@layouts': paths.layouts,
            '@pages': paths.pages,
            '@styles': paths.styles
        },
    },
    plugins: [
        ...pages.plugins,
        new ESLintWebpackPlugin({
            extensions: ['ts'],
        }),
        new CleanWebpackPlugin(),
    ],
};

export default config;
