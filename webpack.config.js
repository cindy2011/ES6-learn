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
/*
把 src 下所有 demo 文件
生成的 entity 类似
{
    'arrow-function/demo': 'src/arrow-function/demo'
    // ...
}
*/
srcDirectories.forEach(function (directorName) {
    entry[directorName + '/demo'] = ['./src', directorName, 'demo'].join('/');
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
