import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';

import commonConfig from './webpack.config';
import pages from './pages';

const PORT = 3000;

console.log('');
console.log('>> PAGES COMPLETED <<');
pages.pages.forEach((page) =>
    console.log(`— http://localhost:${PORT}/${page}.html`)
);
console.log('');

interface DevConfiguration extends Configuration {
    devServer?: {
        port?: number;
        hot?: boolean;
        open?: boolean;
    };
}

const developmentConfig: DevConfiguration = {
    mode: 'development',
    optimization: {
        runtimeChunk: 'single',
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    devServer: {
        port: PORT,
        hot: true,
        open: true,
    },
};

export default merge(commonConfig, developmentConfig);
