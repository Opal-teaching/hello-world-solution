const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

let entry = [
	"./src/js/app.js",
	"./src/js/app.controllers.js"
];

module.exports = {
	entry: entry,
	devtool: 'eval-cheap-source-map',
	mode: 'development',
	devServer: {
		contentBase: './www',
		compress: true,
		hot: false,
		watchContentBase: true,
		liveReload: true,
		port: 9001
	},
	output: {
		path: path.resolve(__dirname, 'www'),
		filename: '[name].[hash].js',
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				loader: 'raw-loader',
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]'
						},
					}
				]
			},
		]
	},
	plugins: [
		new CopyPlugin({
			patterns: [
				{ from: './src/views', to: './views' },
			],
		}),
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
	]
};
