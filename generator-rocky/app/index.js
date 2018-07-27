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

        var dirs = glob.sync('+(web)');
        //now _.contains has been abandoned by lodash,use _.includes
        if (_.includes(dirs, 'web')) {
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
            if (item.name == 'projectName') {
                item.default = appname;
            }
            return item
        })

        return this.prompt(questions).then(
            function (answers) {
                console.log('我是answers', answers);
                for (var item in answers) {
                    console.log('我是answers item', item);
                    answers.hasOwnProperty(item) && (this[item] = answers[item]);
                }
            }.bind(this));
    }
    writing() {


        //copy templates
        this.fs.copy(
            this.templatePath(this.projectType),  //根据user选择的类型拷贝不同模板-->web,electron...
            this.destinationPath(),
            { globOptions: { dot: true } }  //拷贝包括点文件
        );


    }
    install() {
        this.npmInstall();
    }
    end() {
        if (this.projectType == 'web') {
            this.spawnCommand('npm', ['start']);
        }
    }
};