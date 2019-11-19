# webpack工程化配置
## 知识点 ##
1.直接输入`webpack`会导致错误，因为webpack并不是全局安装的，解决方法可使用`npx webpack`代替
---
## 常用loader ##
>loader的执行顺序是"从下至上，从右至左"

### file-loader ###
用途：处理静态资源模块
原理：把打包入口中识别出资源模块，移动到输出目录，并且返回一个地址名称
使用场景：当我们需要模块，仅仅是从源代码挪移到打包目录，就可以使用file-loader来处理，txt,svg,csv,excel,图片资源等等

### url-loader ###
可以处理file-loader所有的事情，但是遇到jpg等图片格式时，会将该图片转换成"base64"格式字符串，并打包到js代码中，这对小体积图片比较合适，对大图片会起到反作用

### css-loader style-loader ###
"css-loader"加载css模块，"style-loader"将解析出来的"css"代码，以内联标签`<style>`的方式注入到html中

### postcss-loader ###
css预处理，配合`autoprefixer`使用，可以添加css前缀

## 常用plugin ##
>所有的plugin都是类，所以使用时前面都需要加new关键字

### HtmlWebpackPlugin ###
常用配置：
title:用来生成页面的title元素
filename:输出HTML文件名，默认是index.html
template:模板文件路径
inject: true | 'head' | 'body' | false

>如果有多个js文件，要分别打包到不同html文件中，应使用"chunks"字段
