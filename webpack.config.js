// webpack --watch -d
module.exports = {
    entry: {
        'arrow-function': './src/arrow-function/demo.js',
        'module': './src/module/main.js'
    },
    output: {
        'path': 'dist',
        filename: '[name].js'
    },
    module: {
        loaders: [ { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}]
    }
};
