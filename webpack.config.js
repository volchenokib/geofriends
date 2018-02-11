const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const PATHS = {
	source: path.join(__dirname, 'src'),
	build: path.join(__dirname, 'build')
};

const config =  {
	entry: {
		'script': PATHS.source + '/script.js'
	},
	output: {
		path: PATHS.build,
		filename: '[name].js'
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				include: /src/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ['env']
					}
				}
			}
		]
	},

	plugins: [
		new UglifyJsPlugin({
			uglifyOptions: {
				ie8: false,
				ecma: 5,
			},
			exclude: /node_modules/,
		})
	]
};
module.exports = config;