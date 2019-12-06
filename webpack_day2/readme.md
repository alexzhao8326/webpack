## sourceMap ##
源代码与打包后代码的映射关系  
在dev模式中，默认开启，关闭的话，可以在配置文件里  
```
devtool:none
```
eval:速度最快，使用eval包裹模块代码  
source-map:产生.map文件  
cheap:较快，不用管列的信息，也不包含loader的sourcemap  
Module:第三方模块，包含loader的sourcemap(eg,jsx to js,babel的sourcemap)  
inline:将.map作为DataURI嵌入，不单独生成.map文件  
配置推荐:  
```
devtool:"cheap-module-eval-source-map"  //开发环境配置  
devtool:"cheap-module-source-map"  //生产环境配置
```
## webpackDevServer ##
以前的操作：每次改完代码都需要重新打包一次，打开浏览器，刷新一次  
webpackDevServer就是解决此类痛点，webpackDevServer会将打包的文件贮存在内存中，提升速度

## Babel ##
将ES2015等高版本的语法转换成ES5