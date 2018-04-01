const path = require ('path')
const HtmlWebpackPlugin = require ('html-webpack-plugin')

const config = {
    entry: path.join (__dirname, 'src', 'index.js'),
    output: {
        path: path.join (__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader',
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        contentBase: path.join (__dirname, 'dist'),
        compress: true,
        port: 3000,
        stats: 'errors-only',
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin ({
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            template: path.join (__dirname, 'index.html')
        })
    ]
}

module.exports = config
