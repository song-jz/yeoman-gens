let merge = require('webpack-merge');
let perConf = require('../config/bizConfig.json');
let baseConf = require('./base.js');
let envConf = merge(baseConf, {
    devtool: 'inline-source-map',
    devServer: {
        // contentBase: './rocky-web',
        host: perConf.host || 'localhost',
        port: '6000',
        inline: true,//可以监控js变化
        hot: true,//热启动
        clientLogLevel: 'info',
        watchOptions: {
            ignore: /node_modules/
        },
        proxy: {

        }
    }
});

module.exports = envConf;