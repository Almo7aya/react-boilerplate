const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: path.resolve(__dirname, 'src', 'index'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            options: {
                sourceMap: true,
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                            browsers: ['last 2 versions', 'IE >= 9']
                        },
                        modules: false,
                        loose: true
                    }],
                    ['@babel/preset-react']
                ],
                plugins: [
                    ['@babel/plugin-transform-react-jsx'],
                    ['@babel/plugin-proposal-class-properties', {
                        loose: true
                    }],
                    ['@babel/plugin-proposal-decorators', {
                        legacy: true
                    }],
                    ['@babel/plugin-transform-react-constant-elements']
                ]
            }
        }]
    },
    devServer: {
        port: 3600,
        inline: true
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin()
    ]
};
