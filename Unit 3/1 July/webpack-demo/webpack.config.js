const path = require("path");

module.exports = {
	mode: "development",
	entry: {
		index: "./src/index.js",
		search: "./src/search.js",
		// scripts: "./src/scripts.js",
	},
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
};
