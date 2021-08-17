// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const { generateMarkdown, writeFile } = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [];
projectPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'Enter your Github Username (Required)',
            validate: username => {
              if (username) {
                return true;
              } else{
                console.log("Please enter your Github Username!");
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'email',
            message: 'Enter your email address (Required)',
            validate: email => {
              if (email) {
                return true;
              } else{
                console.log("Please enter your e-mail address!");
                return false;
              }
            }
          },
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project? (Required)',
            validate: title => {
              if (title) {
                return true;
              } else{
                console.log("Please enter your project name!");
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: description => {
              if (description) {
                return true;
              } else{
                console.log("Please enter your project description!");
                return false;
              }
            }
          },
          {
              type: 'input',
              name: 'installation',
              message: 'Please enter the installation instructions'
          },
          {
              type: 'input',
              name: 'usage',
              message: 'Enter usage information for your project (Required)',
              validate: usage => {
                if (usage) {
                  return true;
                } else{
                  console.log("Please enter your project usage information!");
                  return false;
                }
              }
          },
          {
            type: 'input',
            name: 'contributing',
            message: 'Enter the contribution guidelines of the project (Required)',
            validate: contribution => {
              if (contribution) {
                return true;
              } else{
                console.log("Please enter your project contribution guidelines");
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please enter the test instructions for your project',
        },
        {
            type: 'confirm',
            name: 'confirmLicense',
            message: 'Would you like to enter license information?',
            default: false
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Please choose the license type for your project',
            choices: ['dependency license', 'MIT license', 'GNU GPLv3'],
            when: ({ confirmLicense }) => {
                if (confirmLicense) {
                    return true;
                } else {
                    return false
                }
            }
        }
    ])
};

// PROMISE CHAIN
projectPrompt()
// take projectPrompt data and put into readme template
.then(readmeData => {
 return generateMarkdown(readmeData);
})
// create a file using the template
.then(markdown => {
    return writeFile(markdown);
    // confirm the file was created
}).then(writeFileResponse => {
    console.log(writeFileResponse.message)
// display error message if theres an error
}).catch(err => {
    console.log(err);
});
