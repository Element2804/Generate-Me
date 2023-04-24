// attaches badges to the license depending on the user selection
function renderLicenseBadge(data) {
    const licenseType = data.license;    
    let licenseString = " "

    if (licenseType === "MIT") {
      licenseString = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
    };
   if (licenseType === "BSD") {
      licenseString = `![License: BSD](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`
   };
    if (licenseType === "Apache") {
       licenseString = `![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
      };
    if (licenseType === "AGPL") {
        licenseString = `![License:GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
      };
   
    return licenseString    
};

// creates the structure of the README
function generateMarkdown(data) {
  return `# <h1>${data.title}</h1>

## License
  This project is covered under the ${data.license} license.
  <br>
  ${renderLicenseBadge(data)} 
 
## Description
${data.description}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Test](#test)
- [Github](#github)
- [Contribution](#contribution)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Github
${data.github}

## Contribution
${data.contribution}

## Test
${data.test}

## Questions
If you have any questions feel free to email me at ${data.email}


`;
}

// exports the file so its accessible by index.js
module.exports = generateMarkdown;