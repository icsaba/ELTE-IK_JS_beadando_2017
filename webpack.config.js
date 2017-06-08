module.exports = {
	entry: './src/index.js',
	output: {
		filename: './src/bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
	 		},
			{
			   test: /\.css$/,
			   loader: 'css-loader'
			}
		]
	},
    devServer: {
        proxy: {
          '/api': {
            target: 'localhost:3000/',
            secure: false
          }
        }
  }
};
