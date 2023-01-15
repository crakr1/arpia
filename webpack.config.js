const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {

	mode: "development",

	entry: {
		main: path.join(__dirname, './src/index.js'),
	},

	output: {
		filename: "main.js",
		publicPath : "/",
		path: path.join(__dirname, "dist"),
	},

	devServer: {
		contentBase: path.join(__dirname, "dist"),
		writeToDisk: true,
		port: 9025,
		hot: false,
		liveReload: true,
		open: true,
},
    

	module: {
		rules: [
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader",
						options: {
							minimize: true,
						}
					}
				]
			},
			{

				test: /\.(sa|sc|c)ss$/,
		
				use: [
		
					  {
		
						loader: MiniCssExtractPlugin.loader, 
		
						options: {
		
						  publicPath: '../' 
		
						}
		
					  },
		
					  'css-loader',
		
					]
		
			  },
			  {

				test: require.resolve('jquery'),
		
				loader: 'expose-loader',
		
				options: {
		
				  exposes: ['$', 'jQuery'],
		
				}
		
			  },

		
		
			  
		 
			{

				test: /\.(png|svg|jpe?g|gif)$/,
		
				use: [
		
				  {
		
					loader: "file-loader", 
		
					options: {
		
					  name: '[name].[ext]',
		
					  outputPath: "images",
		
					}
		
				  }
		
				]
		
			  },
			  {

				test: /\.(svg|eot|woff2|ttf)$/,
		
				use: [
		
				  {
		
					loader: "file-loader", 
		
					options: {
		
					  name: '[name].[ext]',
		
					  outputPath: "fonts",
		
					}
		
				  }
		
				]
		
			  },



		]
	},


	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: "./src/index.html",
		}),
		new HtmlWebpackPlugin({
			filename: "product.html",
			template: "./src/product.html",
		}),
		new HtmlWebpackPlugin({
			filename: "checkout.html",
			template: "./src/checkout.html",
		}),
		new HtmlWebpackPlugin({
			filename: "payment.html",
			template: "./src/payment.html",
		}),
		new HtmlWebpackPlugin({
			filename: "search.html",
			template: "./src/search.html",
		}),
		new HtmlWebpackPlugin({
			filename: "contact.html",
			template: "./src/contact.html",
		}),
		new MiniCssExtractPlugin({
			filename: "css/style.css"
		})
	],
};