// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderBadge(license){
  if(license !== "none"){
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license){
  if(license !== "none"){
    return `* [License](#license)`
  }
  return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license){
  if(license !== "none"){
    return `## License

This project is licensed under the ${license} license.`;
  }
  return ""
}


// TODO: Create a function to generate markdown for README

function generateMarkdown(response){
  let readme =  `

  # ${response.title}

  ## Description
  
  ${response.description}
  
  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  ${renderBadge(response.license)}
  ${renderLicenseLink(response.license)} 
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Repo Name](#repo)
  * [GitHub Username](#username)
  * [Email](#email)
  
  ## Installation
  To install the necessary dependencies, run the following command:
  
  \`\`\`
  ${response.installation}
  \`\`\`
  
  ## Usage
  ${response.usage}
  
  ${renderLicenseSection(response.license)}
  
  ## Contribute
  ${response.contribute}
  
  ## Tests
  ${response.tests}

  ## Questions
  ${response.questions}

  ### GitHub Username
  [Github User](https://github.com/${response.username})  

  ### Repo Name
  [Github Repository](https://github.com/${response.username}/${response.repo})

  ## Email
  ${response.email}
  
  `;
  return readme;  
  }


module.exports = generateMarkdown;
