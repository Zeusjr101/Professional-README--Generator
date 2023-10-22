// TODO: Include packages needed for this application
const generateMarkdown = require('./generateMarkdown')
const inquirer  = require("inquirer");
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the title of you project?"
    },
    {
        type: 'input',
        name: 'description',
        message: "Proved a brief description about your project"
    },
    {
        type: 'input',
        name: 'table of contents',
        message: "Table of Contents (optional)",
    },
    {
        type: 'input',
        name: 'Installation',
        message: "How to install and use your project?",
    },
    {
        type: 'input',
        name: 'usage',
        message: "Usage information",
    },
    {
        type: 'input',
        name: 'collaboatior?',
        message: "Who contributed to this project?"
    },
    {
        type: 'input',
        name: 'License',
        message: "Choose license"
    },
    {
        type: 'type',
        name: 'Features',
        message: "List features in your project"
    },
    {
        type: 'type',
        name: 'How to contribute',
        message: "Who are you Contribution with?"
    },
    {
        type: 'input',
        name: 'Tests',
        message: "provide examples on how to run or use your progame."
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if(err) console.log(err);
        console.log ('success README File has been created.')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answer => {
        var markdown = generateMarkdown(answer);
        fs.writeFile('README.md', markdown)
    })
}

// Function call to initialize app
init();
