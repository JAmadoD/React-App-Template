const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js',
        publicPath: '/',
    },
    devServer:{
        historyApiFallback: true
    },
    module: {
        rules:[
            {
                test: /\.m?js$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/,
              //  use: {
                 //  options: {
                      //  presets: ['@babel/preset-env'],
                     //   plugins: ['@babel/plugin-proposal-object-rest-spread']
                     //}
                     //}
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },  
              ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}