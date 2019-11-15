# webpack工程化配置
---
## 知识点##
1.直接输入`webpack`会导致错误，因为webpack并不是全局安装的，解决方法可使用`npx webpack`代替
---
## 常用loader ##
### file-loader ###
用途：处理静态资源模块
原理：把打包入口中识别出资源模块，移动到输出目录，并且返回一个地址名称
使用场景：当我们需要模块，仅仅是从源代码挪移到打包目录，就可以使用file-loader来处理，txt,svg,csv,excel,图片资源等等