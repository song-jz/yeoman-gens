var Generator = require('yeoman-generator'),
    log = console.log,
    chalk = require('yeoman-generator/node_modules/chalk'),
    fs = require('fs'),
    path = require('path');

module.exports = class extends Generator {
    // The name `constructor` is important here
    constructor(args, opts) {
        // Calling the super constructor is important so our generator is correctly set up
        super(args, opts);



    }
    method1() {
        log('method 1 just ran');
    }

    method2() {
        log('method 2 just ran');
    }
};