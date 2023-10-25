// TODO: Include packages needed for this application
const inquirer = require("inquirer");
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
        name: 'contributors?',
        message: "Who contributed to this project?"
    },
    {
        type: 'input',
        name: 'License',
        message: "Choose license"
    },
    {
        type: 'input',
        name: 'Features',
        message: "List features in your project"
    },
    {
        type: 'input',
        name: 'How to contribute',
        message: "Who are you Contribution with?"
    },
    {
        type: 'input',
        name: 'Tests',
        message: "provide examples on how to run or use your program."
    },
];

function generateMarkDown(data){
    return`
    # ${data.title}

    ## Description
    ${data.description}

    ## Table of Content
    ${data.tableOfContents}

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

    ## How to contribute
    ${data.howToContribute}

    ## Tests
    ${data.test}
    `;
}

// TODO: Create a function to write README file
function writeToFile( fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if(err) console.log(err);
        console.log ('success README File has been created.');
    })
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdownCOntent = generateMarkDown(answers);
        writeToFile('README.md', markdownCOntent); 
        
    });
}

// Function call to initialize app
module.exports = generateMarkDown
init();
