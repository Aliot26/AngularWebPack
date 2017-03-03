const path = require('path');
const autoprefixer = require('autoprefixer');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const ProgressPlugin = require('webpack/lib/ProgressPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const HOST = 'localhost';
const PORT = 8080;

const loaders = {
    componentStyles: {
        test: /\.css$/,
        loader: 'style!css-loader'
    },
    html: {
        test: /\.html$/,
        loader: 'raw-loader'
    },
    json: {
        test: /\.json$/,
        loader: 'json-loader'
    },
    typescript: {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader?', 'angular2-template-loader'],
        exclude: /node_modules/
    }
};

const config = module.exports = {};

config.entry = {
    main: ['./src/main.ts'],
    polyfills: './src/polyfills.ts',
    vendor: './src/vendor.ts'
};

config.output = {
    filename: '[name].js',
    path: path.resolve('./dist'),
    publicPath: '/'
};

config.resolve = {
    extensions: ['.ts', '.js', '.json', '.css', '.html']
};

config.module = {
    loaders: [
        loaders.typescript,
        loaders.html,
        loaders.componentStyles
    ]
};

config.plugins = [
    new ContextReplacementPlugin(
        /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
        path.resolve('src')
    ),
    new LoaderOptionsPlugin({
        options: {
            tslint: {
                emitErrors: false,
                failOnHint: false
            },
            postcss: [
                autoprefixer({
                    browsers: ['last 2 version']
                })
            ]
        }
    })
];
config.plugins.push(
    new CommonsChunkPlugin({
        name: ['vendor', 'polyfills'],
        minChunks: Infinity
    }),
    new HtmlWebpackPlugin({
        chunkSortMode: 'dependency',
        filename: 'index.html',
        hash: false,
        inject: 'body',
        template: './src/public/index.html'
    })
);
