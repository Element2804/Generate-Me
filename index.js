// Includes packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./Utils/generateMarkdown.js');

// information to fill the README
const questions = [{
    type: 'input',
    name: 'title',
    message: 'Please enter the project title.',

  },
  {
    type: 'input',
    name: 'description',
    message: 'Please enter a description of your project.',    
     },
  {
    type: 'list',
    message: 'Please select your preferred license.',
    name: 'license',
    choices: ['MIT', 'BSD', 'Apache', 'AGPL'],
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please enter instructions on how to install the project',    
     },
  {
    type: 'input',
    name: 'usage',
    message: 'Please enter a brief description on how to use the project',    
     },
  {
    type: 'input',
    name: 'test',
    message: 'Please describe how to test the project',    
     },
  {
    type: 'input',
    name: 'github',
    message: 'Please enter your Github username.',    
     },
  {
    type: 'input',
    name: 'contribution',
    message: 'Please enter your Contribution guidelines',    
     },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your Email address.',
    validate: (value) => {
        const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); // 
  
        return valid ? true : "Please enter a valid email address.";

     
    },
},       
     

];



// writes README file with information included.
function writeToFile(fileName, data) {
    
    const content = generateMarkdown(data);
   fs.writeFile(fileName, content, function (error) {
        if (error) {
            return console.log(error)
        }
        console.log('success')
    });
} 

// initialize function that prompts the user for questions
function init() {
    inquirer
    .prompt(questions)
   .then((data) => {
         
        writeToFile("README.md", data);
      });
}

// Function call to initialize app
init();