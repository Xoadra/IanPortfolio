



const HtmlWebpackPlugin = require( 'html-webpack-plugin' )
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' )
const CleanWebpackPlugin = require( 'clean-webpack-plugin' )



module.exports = ( ) => {
	const dev = process.env.NODE_ENV === 'development' ? true : false
	return {
		mode: process.env.NODE_ENV,
		entry: {
			main: './view/index.js'
		},
		module: {
			rules: [
				{ test: /\.css$/, use: [ MiniCssExtractPlugin.loader, 'css-loader' ] },
				{ test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' }
			]
		},
		plugins: [
			new HtmlWebpackPlugin( {
				inject: false,
				template: 'public/index.html',
				minify: {
					removeComments: true
				}
			} ),
			new MiniCssExtractPlugin( {
				filename: 'styles.css',
				chunkFilename: '[id].css'
			} ),
			new CleanWebpackPlugin( 'build' )
		],
		devtool: dev ? 'eval-source-map' : false,
		stats: {
			cachedAssets: false,
			colors: true,
			entrypoints: false,
			modules: false
		},
		watch: dev ? true : false,
		watchOptions: {
			ignored: /node_modules/
		},
		output: {
			filename: '[name].js',
			path: __dirname + '/build'
		}
	}
}



