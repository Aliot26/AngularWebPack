var webpack = require('webpack');

module.exports = {
    entry: {
        'app': './src/main.ts'
    },
    output: {
        path: './dist',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {test: /\.ts$/, loader: 'ts'}
        ]
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    }
}