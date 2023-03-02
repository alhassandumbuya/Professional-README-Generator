// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderBadge(data.license)}

## getting the Description
${data.description}

## Creating table of Contents 

* [Installations](#dependencies)

* [Usage](#usage)

${renderLink(data.license)}

* [Contributors](#contributors)

* [Test](#test)


## getting the installation (Dependencies) 

To install dependencies, run these commands:

\`\`\`
${data.dependencies}
\`\`\`


## geting usage 

${data.usage}

${renderSection(data.license)}


## getting the contributors 

${data.contributors}

Email at ${data.email}


## Tests 

To run tests, run these commands:

\`\`\`
${data.test}
\`\`\`

`;
}

// Function to get license
function renderBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`;
  }
  return "";
}

// Function to render link
function renderLink(license) {
  if (license !== "None") {
    return `\n* [License](#license)\n`;
  }
  return "";
}

// Function to render section
function renderSection(license) {
  if (license !== "None") {
    return `## License 

      Copyright © ${license}. All rights reserved. 
      
      Licensed under the ${license} license.`;
  }
  return "";
}

module.exports = generateMarkdown;
