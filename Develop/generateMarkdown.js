// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseName = 'mit license';

function renderLicenseBadge(license) {
  if(license ==='mit license'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    } else if (license === 'unlicense'){
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';;
    }
  }
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'the unlicense'){
      return `https://choosealicense.com/licenses/${license}/`; 
      } else if (license === 'mit License'){
        return `https://choosealicense.com/licenses/${license}/`;
        }else{
          return'';
        }
  }


// TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {
//   if (!license) {
//     return '';
//   }

//   const licenseText = `${renderLicenseBadge(license)} 
//   ${renderLicenseLink(license)}`;

//   return licenseText;
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributors](#contributors)
  - [License](#license)
  - [Features](#features)
  - [Questions](#questions)
  - [Test](#tests)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributors
  ${data.contributors}

  ## License
  ${data.license}

  ## Features
  ${data.features}


  ## Questions
  if you have any question about the project or any issue please contact me [${data.email}](mailto:${data.email}@gmail.com). Here is my Github at [${data.github}](https://github.com/${data.github}/).


  ## Tests
  ${data.tests}
  `;
}


module.exports = generateMarkdown;