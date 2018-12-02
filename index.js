const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const files = require('./lib/files');

clear();
console.log(chalk.green(figlet.textSync('REPOX', {horizontalLayout: 'full'})));

if (files.dirExists('.git')) {
  console.log(chalk.red('the git repository already exists'));
  process.exit();
}
