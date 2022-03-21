import { Configuration } from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import ESLintWebpackPlugin from 'eslint-webpack-plugin';
import HtmlWebpackInlineSVGPlugin from 'html-webpack-inline-svg-plugin';

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
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.pug$/,
                use: 'simple-pug-loader',
            },
            {
                test: /\.svg$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'assets/icons',
                },
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                loader: 'file-loader',
                options: {
                    name: '[contenthash].[ext]',
                    outputPath: 'assets/images',
                },
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/font/[name].[ext]'
                }
            }
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            '@common': paths.common,
            '@components': paths.components,
            '@layouts': paths.layouts,
            '@pages': paths.pages,
            '@styles': paths.styles,
        },
    },
    plugins: [
        ...pages.plugins,
        new ESLintWebpackPlugin({ extensions: ['ts'] }),
        new HtmlWebpackInlineSVGPlugin({ runPreEmit: true }),
        new CleanWebpackPlugin(),
    ],
};

export default config;
