// webpack --watch -d
var fs = require('fs');
var path = require('path');
// 获取目录下所以的子目录
function getDirectories(srcpath) {
    return fs.readdirSync(srcpath).filter(function (file) {
        return fs.statSync(path.join(srcpath, file)).isDirectory();
    });
}

var srcDirectories = getDirectories('./src');
var entry = {};
srcDirectories.forEach(function (directorName) {
    entry[directorName] = ['./src', directorName, 'demo.js'].join('/');
});

module.exports = {
    entry: entry,
    output: {
        'path': 'dist',
        filename: '[name].js'
    },
    module: {
        loaders: [ { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}]
    }
};
