"use strict";
const Generator = require("./node_modules/yeoman-generator");
const chalk = require("./node_modules/chalk");
const yosay = require("./node_modules/yosay");

module.exports = class extends Generator {
  prompting() {
    this.log(yosay(`Welcome to use ${chalk.green("edwin-cli")}!`));

    const prompts = [
      {
        type: "confirm",
        name: "someAnswer",
        message: "Would you like to enable this option?",
        default: true
      },
      {
        type: "input",
        name: "testInput",
        message: "input the project name",
        default: "123"
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath("dummyfile.txt"),
      this.destinationPath("dummyfile.txt")
    );
  }

  install() {
    this.installDependencies();
  }
};
