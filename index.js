const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project? (Required)',
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
        console.log('Please enter a title for your project')
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description for your project. (Required)',
    validate: desciptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('Please enter a description for your project')
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use your application?'
  },
  {
    type: 'input',
    name: 'contributors',
    message: 'List those who contributed to your project'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter testing information for your project'
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your github username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?'
  },
];

function writeToFile(fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, data, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve ({ message: 'Your project README.md has been created! Please look in the dist folder.'})
    });
  });
};

function init() {
  return inquirer
    .prompt(questions)
    .then(inputData => {
      return generateMarkdown(inputData);
    })
    .then(data => {
      return writeToFile('./dist/README.md', data)
    })
    .then(writeToFileResponse => {
      console.log(writeToFileResponse)
    })
    .catch(err => {
      console.log(err)
    })
};

init();
