// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is the title of you project?"
    },
    {
        type: 'input',
        name: 'description',
        message: "Proved a brief description about your project"
    },
    {
        type: 'input',
        name: 'tableOfContents',
        message: "Table of Contents (optional)",
    },
    {
        type: 'input',
        name: 'installation',
        message: "How to install and use your project?",
    },
    {
        type: 'input',
        name: 'usage',
        message: "Usage information",
    },
    {
        type: 'input',
        name: 'contributors',
        message: "Who can contributed to this project?"
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose license',
        choices:['MIT License', 'Apache License 2.0', 'The Unlicense', 'Mozilla Public License' ]
    },
    {
        type: 'input',
        name: 'features',
        message: "List features in your project"
    },
 
    {
        type: 'input',
        name: 'tests',
        message: "provide examples on how to run or use your program."
    },
    {
        type: 'input',
        name: 'github',
        message: "add your github "
    },
    {
        type: 'input',
        name: 'Questions',
        message: "what is your email"
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if(err) {
            console.log(err);
        } else {
         console.log ('successfully wrote a README File.');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdownContent = generateMarkdown(answers);
        writeToFile('README.md', markdownContent); 
        
    });
}

// Function call to initialize app
// module.exports = generateMarkdown
init();
