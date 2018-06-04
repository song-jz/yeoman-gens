var Generator = require('yeoman-generator'),
    chalk = require('yeoman-generator/node_modules/chalk'),
    glob = require('yeoman-generator/node_modules/glob'),
    _ = require('yeoman-generator/node_modules/lodash'),
    fs = require('fs'),
    path = require('path');

var open = require("open");

module.exports = class extends Generator {
    // The name `constructor` is important here
    constructor(args, opts) {
        // Calling the super constructor is important so our generator is correctly set up
        super(args, opts);

        var dirs = glob.sync('+(rocky-web)');
        //now _.contains has been abandoned by lodash,use _.includes
        if (_.includes(dirs, 'rocky-web')) {
            this.log(chalk.bold.green('资源已经初始化，退出...'));
            setTimeout(function () {
                process.exit(1);
            }, 200);
        }
    }

    prompting() {
        var questions = [
            {
                type: 'input',
                name: 'projectName',
                message: '输入项目名称',
                default: this.appname
            },
            {
                type: 'input',
                name: 'componentName',
                message: '输入插件名称',
                default: this.appname
            },
            {
                type: 'input',
                name: 'projectAuthor',
                message: '项目开发者',
                store: true,
                default: 'johnzhu'
            }, {
                type: 'input',
                name: 'projectVersion',
                message: '项目版本号',
                default: '0.0.1'
            }
        ]
        return this.prompt(questions).then(
            function (answers) {
                for (var item in answers) {
                    answers.hasOwnProperty(item) && (this[item] = answers[item]);
                }
            }.bind(this));
    }
    writing() {
        var a = this.destinationRoot();
        this.log('根目录', a)

        var b = this.sourceRoot();
        this.log('src', b)

        //copy templates
        this.fs.copyTpl(
            this.templatePath(),
            this.destinationPath('rocky-web')
        );

        //package.json dependencies
        const pkgJson = {
            devDependencies: {
                eslint: '^3.15.0',
                open: '^0.0.5'
            },
            dependencies: {
                react: '^16.2.0'
            }
        };

        // Extend or create package.json file in destination path
        this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
    }
    install() {
        this.npmInstall();
    }
    end() {
        this.spawnCommand('node', ['rocky-web/server.js']);

    }
};