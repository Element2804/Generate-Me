// Includes packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'Please enter the project title.',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please enter a short description of your project.',    
     },
  {
    type: 'checkbox',
    message: 'Please select your preferred license.',
    name: 'license',
    choices: ['MIT', 'BSD', 'Apache', 'AGPL'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'Please enter your Github username.',    
     },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your Email address.',    
     },

];

//console.log(questions)

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)

    .then((data) => {
        
        console.log(data)
      });
}

// Function call to initialize app
init();