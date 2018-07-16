let envConf;
let env = process.env.NODE_ENV;

if (env) {
    envConf = require('./env/release.js');
} else {
    console.log('apply dev configs');
    envConf = require('./env/dev.js');
}

module.exports = envConf;