function renderLicenseBadge(license) {
  if (!license) {
    return "";
  } else {
    return `
    ![badge](https://img.shields.io/npm/l/${license})
    `;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

function generateMarkdown(data) {
  return `# ${data.projectTitle}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents 

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Future](#future)
  - [Questions](#questions)

  ## Description 
    ${data.description}

  ## Installation
    ${data.installation}

  ## Usage
    ${data.usage}

  ## License
    ${renderLicenseBadge(data.license)}
  
  ## Contributing
    ${data.contributors}

  ## Tests 
    ${data.test}
  
  ## Future
    ${data.future}

  ## Questions
    ${data.questions}
`;
}

module.exports = generateMarkdown;
