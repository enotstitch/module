import path from 'path';
import TerserPlugin from 'terser-webpack-plugin';

const isDev = !process.argv.includes('--build');

export default {
	entry: {
		libs: './assets/js/libs.js',
		scripts: './assets/js/scripts.js',
	},
	output: {
		filename: '[name].min.js',
		path: path.resolve('./build/js'),
	},
	mode: isDev ? 'development' : 'production',
	devtool: isDev ? 'source-map' : false,
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					compress: false,
					mangle: false,
					format: {
						comments: false,
					},
				},
				extractComments: false,
			}),
		],
		splitChunks: false,
	},
	module: {
		rules: [],
	},
};
