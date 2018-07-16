var path=require('path');
var webpack=require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var cleanWebpackPlugin=require('clean-webpack-plugin');
var ExtractTextPlugin=require('extract-text-webpack-plugin');

module.exports={
	entry:{
      app: ['./app/root.js']
  },
  //['webpack/hot/dev-server',path.resolve(__dirname,'./app/root.js')],
	output:{
		path:path.resolve(__dirname,'./dist'),
    publicPath: "",
		filename:'bundle.js'
	},
	module:{
		loaders:[   
           {
           	 test:/(\.js|\.jsx)$/,
           	 exclude:/node_modules/,
           	 loader:'babel-loader'
           },
           {
           	test:/\.css$/,
           	loader:'style!css'
            // use: ExtractTextPlugin.extract({
            //     fallback: 'style-loader',
            //     use: 'css-loader'
            //   })
           },
           {
           	test:/\.less$/,
           	loader:'style-loader!css-loader!less-loader'
            //loader:ExtractTextPlugin.extract('style-loader!css-loader!less-loader')
            // use: ExtractTextPlugin.extract({
            //     fallback: 'style-loader',
            //     use: ['css-loader', 'less-loader']
            //   })
           },
           {
            test:/\.scss$/,
            loader:'style-loader!css-loader!sass-loader'
            // use: ExtractTextPlugin.extract({
            //     fallback: 'style-loader',
            //     use: ['css-loader', 'sass-loader']
            //   })
           },
           {
            test:/\.(png|jpg)$/,
            loader:"url-loader?limit=8192&name=img/[name][hash:8].[ext]"
           }

		   ]
	},
    plugins: [

         //热更新
        new webpack.HotModuleReplacementPlugin(),

        //打包html文件
        new htmlWebpackPlugin({
            //注意传的参数是一个对象
            filename:'index.html',
            template:'index.html',   //传一个模板，就是根目录下的index.html
            inject:'head',
            title:'webpack is good'             //这个是传递的参数
        }),

        //编译后自动打开浏览器
        new OpenBrowserPlugin({ url: 'http://localhost:8099' }),

       // 复制publicCss文件到dist
         new CopyWebpackPlugin([{      
           from: __dirname + '/publicCss'
        }]),

       //每次打包的时候先清除掉dist文件
        //new cleanWebpackPlugin('./dist'),

        //将css文件打包到main.css
        //new ExtractTextPlugin('main.css')


    ],
      resolve: {
        //自动扩展文件后缀名
        extensions: ['.js', '.json', '.less','.scss','.jsx']
    }
}