var webpack = require('webpack');
var path = require('path');
const FooterPlugin = require("./plugin/FooterPlugin")

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
            use: ['style-loader', 'css-loader']              //倒叙使用loader打包,css-loader将css相关内容转化成module， style-loader通过操作dom将css转化后的module插入到dom中实现
        }]
    },
    plugins: [
        new webpack.BannerPlugin({
            banner: "第一次使用webpack的plugin"   //用作版权声明可以
        }),
        new FooterPlugin({
            banner: "sanm老师出品"
        }
        )
    ]

}