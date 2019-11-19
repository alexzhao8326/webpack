const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
    // 入口文件 string | array | object
    entry: {
        index: "./src/index.js",
        detail: "./src/detail.js",
        list: "./src/list.js"
    },
    // 模式
    mode: "development",
    // 输出文件
    output: {
        // 必须是绝对路径
        path: path.resolve(__dirname, "dist"),
        // []占位符
        filename: "[name]-[hash].js"
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/,
                // use: {
                //     loader: "file-loader",
                //     options:{
                //         name:'[name].[ext]'
                //     }
                // }
                use: {
                    loader: "url-loader",
                    options: {
                        name: "[name]_[hash].[ext]",
                        limit: 8192
                    }
                }
            },
            // style-loader css-loader postcss-loader
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: loader => [require("autoprefixer")()]
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: "index.html",
            chunks: ["index"]
        }),
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: "detail.html",
            chunks: ["detail"]
        }),
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: "list.html",
            chunks: ["list"]
        })
    ]
}
