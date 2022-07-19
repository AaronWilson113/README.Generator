// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils')
// TODO: Create an array of questions for user input
const questions = inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'projectTitle',
                            message: 'What is your project title?',
                            // validates input
                            validate: (value)=>{ if(value){return true} else {return 'please input a project title to continue'}}
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
                    ]) 
                    .then((data => {
                        
                        Answers = data
                        console.log(Answers)
                        return Answers
                    }))
                    
                    

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}



// TODO: Create a function to initialize app
function init() {}


// Function call to initialize app
init()

    