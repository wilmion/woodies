const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname , 'dist/'),
        filename: '[fullhash].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js' , '.jsx' , '.ts' , '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.(ts|js|tsx|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.png|.jpe?g|.svg$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[hash].[ext]',
                        outputPath: "assets/images"
                    }
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname , 'public/index.html'),
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[fullhash].css',
            linkType: 'text/css'
        })
    ],
    devServer : {
        port: 8080,
        open: true,
        historyApiFallback: true
    }
}