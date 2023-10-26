// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseName = 'mit license';

function renderLicenseBadge(license) {
  if (license === 'mit License'){
    return '` [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`';
    } else if (license === 'unlicense'){
      return ;
    }
  }
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'the unlicense'){
      return `https://choosealicense.com/licenses/${license}/`; 
  }
  }


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  #### Table of Contents
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contributors](#Contributors)
  - [License](#License)
  - [Features](#Features)
  - [Questions](#Questions)
  - [Test](#Test)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributors
  ${data.contributors}

  ## License
  - ${renderLicenseBadge(data.license)}

  ## Features
  ${data.features}

  ## Questions
  ${data.email}

  ##github userName
  ${data.github}

  ## Tests
  ${data.tests}
  `;
}


module.exports = generateMarkdown;