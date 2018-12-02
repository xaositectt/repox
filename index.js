const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const files = require('./lib/files');
const inquirer = require('./lib/inquirer');

clear();
console.log(chalk.green(figlet.textSync('REPOX', {horizontalLayout: 'full'})));

const run = async () => {
  const credentials = await inquirer.askCredentials();
  console.log(credentials);
}

run();

// if (files.dirExists('.git')) {
//   console.log(chalk.red('the git repository already exists'));
//   process.exit();
// }
