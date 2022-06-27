// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require('fs');

//array of questions for readme generator
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What do you want to call your application?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Description of application.'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What command should be run to install dependencies?',
      default: 'npm i'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What does the user need to know about your application?'
    },
    {
      type: 'list',
      message: 'What is your applications license(s)?',
      name: 'license',
      choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'none']
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Who were the contributors for this application?'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What are the testing instructions for this application?'
    },
    {
      type: 'input',
      name: 'questions',
      message: 'Enter any questions.'
    },
    {
      type: 'input',
      name: 'repo',
      message: 'Enter any the GitHub Repository name.'
    },
    {
      type: 'input',
      name: 'username',
      message: 'Enter the GitHub Username.'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter user Email.'
    },
  ]

// TODO: Create a function to write README file
function writeFile(fileName, response) {
  fs.writeFile("./example/README.md", response, err =>
  err ? console.log(err) : console.log('Success!')
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then((response) => {
      console.log(response);
      const markdown = generateMarkdown(response);
      writeFile ("./example/README.md", markdown);
    });
}

// Function call to initialize app
init();

