const fs = require("fs");
const inquirer = require("inquirer");
//Supports the need of Node JS
const util = require("util");

//write README file
const generateAsyncFile = util.promisify(fs.writeFile);

//Accesses generateReadMe file 
const generateReadMe = require("./utils/generateReadMe.js");

//function to prompt user to answer the questions below
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
// to Initilize the program i added an async function
async function init() {
    try {
        //waits for the user to answer the questions before console logging the answers
        const answer = await askUser();
        console.log(answer);
    
        const readMe = generateReadMe(answer);
    
        //generates the readme if everything goes smoothly, otherwise it will create an error
        generateAsyncFile("README-Test.md", readMe).then(function() {
            console.log("Successfully created a README-Test.md");
        });
    }
    //creates an error if its not fully completed
    catch (err) {
        console.log(err);
    }
    }
    init();