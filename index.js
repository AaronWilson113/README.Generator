// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils')
const liscences = ['MIT' , 'GPL' , 'APACHE' , 'None']
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt ([
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
             // validates input
             validate: (value)=>{ if(value){return true} else {return 'please describe your project to continue'}}
        },
        {
            type: 'input',
            name: 'installationInstructions',
            message: 'What steps do you take to install your application?',
             // validates input
             validate: (value)=>{ if(value){return true} else {return 'please add installation instructions to continue'}}
        },
        {
            type: 'input',
            name: 'usageInfo',
            message: 'How do you use your application?',
             // validates input
             validate: (value)=>{ if(value){return true} else {return 'please input usage instructions to continue'}}
        },
        {
            type: 'input',
            name: 'contributionGuide',
            message: 'What are the guidelines for contribution?',
             // validates input
             validate: (value)=>{ if(value){return true} else {return 'please input contribution guidelines to continue'}}
        },
        {
            type: 'input',
            name: 'testInstruction',
            message: 'How can you test the application?',
             // validates input
             validate: (value)=>{ if(value){return true} else {return 'please input test guidelines to continue'}}
        },
        {
            type: 'list',
            name: 'liscence',
            message: 'What liscence do you want for your project?',
            choices: liscences

        }
    ]);
};

                 
                    
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, generateMarkdown(data))
    
}

// TODO: Create a function to initialize app
function init() {
    questions()
    .then((answers) => writeToFile('README.md' , answers))
    .then(() => console.log('success!'))
    .catch((err) => console.error(err));
    
}

// Function call to initialize app
init()

    