// webpack.config.js
var path = require('path');

module.exports = {
	entry: "./frontend/keepster.jsx",
	output: {
		path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
		filename: "bundle.js"
	}
};