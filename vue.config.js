const path = require('path');//引入path模块
function resolve(dir){
    return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径
}


module.exports={
     // 基本路径
     publicPath: './',
     // 输出文件目录
    outputDir: 'dist',
    devServer: {
        proxy: {
            '/boke': {    // search为转发路径
                target: 'http://localhost:3008/api',  // 目标地址
                ws: true, // 是否代理websockets
                changeOrigin: true,  // 设置同源  默认false，是否需要改变原始主机头为目标URL,               
                pathRewrite: {   //重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
                    '^/boke': ''
                }
            }
        }
    },
    chainWebpack:(config)=>{
        config.resolve.alias
        .set('@',resolve('./src'))
        .set('components',resolve('./src/components'))
        .set('~',resolve('./public'))
        //set第一个参数：设置的别名，第二个参数：设置的路径
　　　　
    },
    pwa: {
        iconPaths: {
            favicon32: 'favicon.ico',
            favicon16: 'favicon.ico',
            appleTouchIcon: 'favicon.ico',
            maskIcon: 'favicon.ico',
            msTileImage: 'favicon.ico'
        }
    },
     // 生产环境是否生成 sourceMap 文件
     productionSourceMap: false,
    configureWebpack: {
        //警告 webpack 的性能提示
	    performance: {
	    	hints:'warning',
	    	//入口起点的最大体积
	    	maxEntrypointSize: 50000000,
	    	//生成文件的最大体积
	    	maxAssetSize: 30000000,
	    	//只给出 js 文件的性能提示
	    	assetFilter: function(assetFilename) {
	    		return assetFilename.endsWith('.js');
            }
        }
    }
}