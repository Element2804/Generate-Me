// Includes packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./Utils/generateMarkdown.js');

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
    type: 'list',
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



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
    const content = generateMarkdown(data);
   fs.writeFile(fileName, content, function (error) {
        if (error) {
            return console.log(error)
        }
        console.log('success')
    });
} 

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
   .then((data) => {
    
        const fileName = "README.md";
     
        writeToFile(fileName, data);
      });
}

// Function call to initialize app
init();