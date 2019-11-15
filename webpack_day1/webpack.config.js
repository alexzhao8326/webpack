const path = require("path")

module.exports = {
  // 入口文件 string | array | object
  entry: {
    index: "./src/index.js"
  },
  // 模式
  mode:'development',
  // 输出文件
  output: {
    // 必须是绝对路径
    path: path.resolve(__dirname, "dist"),
    // []占位符
    filename: "[name].js"
  }
}
