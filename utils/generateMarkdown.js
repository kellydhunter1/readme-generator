const fs  = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseType = {
  dependency: { "link" : "url" , "badge" : "png" },
  MIT: { "link" : "https://choosealicense.com/licenses/mit/#" , "badge" : "png" },
  GNU: { "link" : "https://choosealicense.com/licenses/gpl-3.0/" , "badge" : "png" }
}
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  } else {
    
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(readmeData) {
  const { title, description, installation, usage, contributing, test, license, ...githubInfo } = readmeData;
  return `
  # ${title}
  ## Description
   ${description}

  ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contributing](#contributing)
    * [Test](#test)
    
  ## Installation
    ${installation}

  ## Usage
    ${usage}

  ## Contributing
    ${contributing}
  
  ## Test
  ${test}

  ## Questions

  If you have any additional questions, please reach out to me at through github 
  https://github.com/${githubInfo.username} or via email at ${githubInfo.email}.
`;
}

const writeFile = markdown => {
  return new Promise((resolve, reject) => {
      fs.writeFile('./dist/README.md', markdown, err => {
          // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
          if (err) {
            reject(err);
            // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
            return;
          }
    // if everything went well, resolve the Promise and send the successful data to the `.then()` method
    resolve({
      ok: true,
      message: 'Markdown created!'
    });
  });
});
};


module.exports = { generateMarkdown, writeFile };
