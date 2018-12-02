const inquirer = require('inquirer');
const files = require('./files');

const validate = (msgIfEmpty) => (value) => {
  if (value.length) {
    return true;
  } else {
    return msgIfEmpty;
  }
}

module.exports = {
  askCredentials: () => {
    const questions = [
      {
        name: 'username',
        type: 'input',
        message: 'Enter your username or email address:',
        validate: validate('Please enter your username or e-mail address.')
      },
      {
        name: 'password',
        type: 'password',
        message: 'Enter your password:',
        validate: validate('Please enter your password.')
      }
    ];

    return inquirer.prompt(questions);
  }
}
