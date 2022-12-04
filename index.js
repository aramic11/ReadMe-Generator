const fs = require("fs");
const inquirer = require("inquirer");

let askUser = () => {
    return inquirer.prompt(questions);
}

const questions = 
        [
            {
                type: "input",
                name: "title",
                message: "What is your README Title?"
            },
            {
                type: "input",
                name: "description",
                message: "What is your README Description?"
            },
            {
                type: 'input',
                name: 'installation',
                message: 'What is the installation process?'
            },
            {
                type: 'input',
                name: 'usage',
                message: 'What is the use for this app?'
            },
            {
                type: 'input',
                name: 'contributing',
                message: 'What is the contribution process like?'
            },
            {
                type: 'input',
                name: 'tests',
                message: 'What tests do you have for your application (if any)?'
            },
            {
                type: 'input',
                name: 'questions',
                message: 'Enter any instructions on how to contact you with questions here.'
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter your email here:'
            },
            {
                type: 'input',
                name: 'github',
                message: 'Enter your Github here:'
            },
            {
                type: 'list',
                choices: [
                    "MIT",
                    "GPL",
                    "APACHE"
                ],
                name: 'license',
                message: 'Please select a license for your project:'
            }
        ]