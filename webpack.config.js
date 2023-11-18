const path = require("path");

module.exports = {
    mode: "development",
    devtool: "source-map",   //最慢
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),            //dirname指的是test_dev的完整路径
        filename: 'bundle.js',
    },
    module: {
        rules: [{
            test: /.css$/,
            use: ['style-loader', 'css-loader']
        }]
    }
}