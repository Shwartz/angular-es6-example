let path = require('path');

module.exports = {
	entry: path.join(__dirname, 'public', 'src', 'index.js'),
	output: {
		path: path.join(__dirname, 'public', 'dev/js'),
		filename: 'bundle.js'
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'stage-0'],
					"plugins": [
						"angular2-annotations",
						"transform-decorators-legacy",
						"transform-flow-strip-types"
					]
				}
			},
			{
				test: /\.(html|css)$/,
				loader: 'raw-loader',
				exclude: /\.async\.(html|css)$/
			},
		]
	}
};