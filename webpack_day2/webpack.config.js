const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
    // 入口文件 string | array | object
    entry: {
        index: "./src/index.js"
    },
    // 模式
    mode: "development",
    // 输出文件
    output: {
        // 必须是绝对路径
        path: path.resolve(__dirname, "dist"),
        // []占位符
        filename: "[name].js"
    },
    devServer: {
        contentBase: "./dist", //资源文件目录
        open: true, //自动打开浏览器
        port: 9000 //端口号
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/,
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
            },
            // babel-loader
            {
                test: /.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: [[
						"@babel/preset-env",
						{ useBuiltIns: "usage" }
					]
				]
                }
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
        })
    ]
}
