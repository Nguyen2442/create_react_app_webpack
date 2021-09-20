const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js",
    },
    
    module: {
        rules: [
            {
                test: /\.(js||jsx)$/,
                exclude: /nodeModules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "./public/index.html"),
            
        }),
    ],
};