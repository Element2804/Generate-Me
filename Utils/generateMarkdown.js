// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
    const licenseType = data.license;
    
    
    let licenseString = " "

    if (licenseType === "MIT") {
      licenseString = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
    };
   if (licenseType === "BSD") {
      licenseString = `[![License: BSD](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]`
   };
    if (licenseType === "Apache") {
       licenseString = `[![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
      };
    if (licenseType === "AGPL") {
        licenseString = `[![License:GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`
      };
      console.log(data.license);
    return licenseString
    
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
/* function renderLicenseSection(license) {
    const licenses = {
        MIT: {
            badge:
        }
    }
} */

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 
## Description
${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

In order to run, Node.js and the Inquirer NPM need to be installed. Then open file in Visual Studio code and pull up the terminal.


## Usage

After all dependencies have been installed. Type "node index.js" in to the terminal. Then follow prompts to generate a custom README

## License
${renderLicenseBadge(data)}

## Github
${data.github}

## Email
${data.email}


`;
}


module.exports = generateMarkdown;