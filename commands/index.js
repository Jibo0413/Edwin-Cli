#!/usr/bin/env node
const chalk = require("chalk");
const program = require("commander");
const figlet = require("figlet");
const { name, version } = require("../package.json");

// 纯粹自嗨，加个Logo
figlet(name, function(err, data) {
  if (err) return console.log(chalk.red("Figlet went wrong"));
  console.log(chalk.green(data));
  main();
});

function main() {
  program
    .version(version, "-v --version")
    .command("newbranch [type]", "创建新分支")
    .command("init [projectName]", "初始化项目")
    .command("dev", "启动开发服务")
    .parse(process.argv);
}
