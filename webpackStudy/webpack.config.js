module.exports={
    //开发工具
    devtool:'eval-source-map',
    //唯一的入口文件
entry:__dirname + '/app/main.js',
//打包之后的文件该输出到哪个位置
    output:{
        path:__dirname + '/public',
        filename:'build_main.js'
    },
    //devServer 2.9.5 启动热命令自带热更新 并且他会检测所依赖的模块是否修改
    //updata code =>状态触发 =>重新打包=>触发刷新
    devServer:{
        //本地服务器 所加载的页面所在的目录
        contentBase:'./public',
    //    服务器端口 =>默认端口(8080)
        port:'8888',
    }
}
