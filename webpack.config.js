const path = require('path');

module.exports = {
	mode: 'development'
};

module.exports = {
	entry: "./frontend/keepster.jsx",
	output: {
		path: path.resolve(__dirname), 
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: [/\.jsx?$/],
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/env", "@babel/react"]
					}
				}
			}
		]
	},
	devtool: "source-map",
	resolve: {
		extensions: [".js", ".jsx", "*"]
	}
};
