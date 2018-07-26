var Generator = require('yeoman-generator'),
    chalk = require('yeoman-generator/node_modules/chalk'),
    glob = require('yeoman-generator/node_modules/glob'),
    _ = require('yeoman-generator/node_modules/lodash'),
    fs = require('fs'),
    path = require('path');




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
        var a = this.destinationRoot();
        this.log('根目录', a)
        var b = this.sourceRoot();
        this.log('模板目录', b)

        var questions = require(b + '/configs/questionsConfig.json')
        //项目名字默认写成自己当前创建的文件夹
        var appname = this.appname;
        _.map(questions, function (item) {
            if (item.name == 'projectAuthor') {
                item.default = appname;
            }
        })

        return this.prompt(questions).then(
            function (answers) {
                for (var item in answers) {
                    answers.hasOwnProperty(item) && (this[item] = answers[item]);
                }
            }.bind(this));
    }
    writing() {


        //copy templates
        this.fs.copyTpl(
            this.templatePath(),
            this.destinationPath('rocky-web')
        );

        //package.json dependencies
        const pkgJson = require(b + '/configs/packageConfig.json')
        // Extend or create package.json file in destination path
        this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);

        const babelrcJson = require(b + '/configs/balbelrcConfig.json');
        this.fs.extendJSON(this.destinationPath('.babelrc'), babelrcJson);

        const tsConfigJson = require(b + '/configs/tsConfig.json');
        this.fs.extendJSON(this.destinationPath('tsconfig.json'), tsConfigJson);
    }
    install() {
        this.npmInstall();
    }
    end() {
        // this.spawnCommand('node', ['rocky-web/server.js']); //本地写的node脚本
        this.spawnCommand('npm', ['start']);
        // setTimeout(() => {
        //     require('child_process').exec('open http://localhost:6000/index.html'); //打开浏览器
        // }, 2000)
    }
};