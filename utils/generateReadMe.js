// function to generate markdown for README
function generateReadMe(data) {
    console.log(data);

    //looks at the answer the user inputs for the title and adds it
    return `# ${data.title}

    
## ${data.description}
            
## Table of Contents:

1. [Installation](#installation)
2. [Usage](#usage)
3. [Contribution](#contributing)
4. [Tests](#tests)
5. [Questions](#questions)
6. [License](#license)
            
## Installation:
${data.installation}
            
## Usage:
${data.usage}
            
## Contribution:
${data.contributing}
            
## Tests:
${data.tests}
    
## Questions:
Email: ${data.email}
\n
GitHub: 
[${data.github}](https://github.com/${data.github})
\n
${data.questions}


## License:
  ![${data.license}](https://img.shields.io/badge/license-${data.license}-blue)
  `;
}

// exporting function generateReadMe
module.exports = generateReadMe;