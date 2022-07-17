// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'projectTitle',
                            message: 'What is your project title?',
                        },
                        {
                            type: 'input',
                            name: 'description',
                            message: 'How would you describe your project?',
                        },
                        {
                            type: 'input',
                            name: 'installationInstructions',
                            message: 'What steps do you take to install your application?',
                        },
                        {
                            type: 'input',
                            name: 'usageInfo',
                            message: 'How do you use your application?',
                        },
                        {
                            type: 'input',
                            name: 'contributionGuide',
                            message: 'What are the guidelines for contribution?',
                        },
                        {
                            type: 'input',
                            name: 'testInstruction',
                            message: 'How can you test the application?',
                        }
                    ]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();