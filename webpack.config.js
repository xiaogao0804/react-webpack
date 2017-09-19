var path=require('path');
var webpack=require('webpack');

module.exports={
	entry:['webpack/hot/dev-server',path.resolve(__dirname,'./app/root.js')],
	output:{
		path:path.resolve(__dirname,'./dist'),
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
           },
           {
           	test:/\.less$/,
           	loader:'style-loader!css-loader!less-loader'
           },
           {
            test:/\.scss$/,
              loader:'style-loader!css-loader!sass-loader'
           },
           {
            test:/\.(png|jpg)$/,
            loader:"url-loader?limit=8192&name=img/[name][hash:8].[ext]"
           }

		   ]
	},
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
      resolve: {
        //自动扩展文件后缀名
        extensions: ['.js', '.json', '.less','.scss','.jsx']
    }
}