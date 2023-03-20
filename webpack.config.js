const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // entry: './src/index.js',
    entry: path.resolve(__dirname, "./src/index.js"),
    output: {
        filename: 'apk.js',
        path: path.resolve(__dirname, "./dist"),
        clean: true,
        assetModuleFilename: 'images/[contenthash][ext]'
    },
    module: {
        rules:[
            {
                test: /\.jpg$/,
                type: 'asset/resource',
                generator:{
                    filename: 'images/[contenthash][ext]'
                }
            }
        ]
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'app.html',
            inject: 'head'
        })
    ],
    
}