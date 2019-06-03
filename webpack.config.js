const MiniCssExtractPlugin = require('mini-css-extract-plugin');
require('@babel/polyfill');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

module.exports = {
	entry: {
		timetableCustomQ: ['@babel/polyfill','./src/App.svelte']
	},
	resolve: {
		extensions: ['.mjs', '.js', '.svelte']
	},
	output: {
		path: __dirname + '/public',
		filename: '[name].js',
		chunkFilename: '[name].[id].js',
		library:'App',
        libraryExport: 'default'
    },
	module: {
		rules: [
			{
				test: /\.svelte$/,
				exclude: /node_modules/,
				use: [
			{
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
			},
			{
                loader: 'svelte-loader',
                options: {
                    emitCss: true,
                    hotReload: true
                }}
			]

			},
			{
				test: /\.css$/,
				use: [
					/**
					 * MiniCssExtractPlugin doesn't support HMR.
					 * For developing, use 'style-loader' instead.
					 * */
					prod ? MiniCssExtractPlugin.loader : 'style-loader',
					'css-loader'
				]
			},
            {
                test: /\.m?js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }

		]
	},
	mode,
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css'
		})
	],
	devtool: prod ? false: 'source-map'
};
