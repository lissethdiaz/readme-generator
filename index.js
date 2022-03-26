const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description for your project'
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
