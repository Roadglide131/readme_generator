class markDown {
  static generateReadme(answers) {
    return `
 # ${answers.title}  
 
 ## Table of Contents
 - [Project Description](#Description)
 - [Usage](#Usage)
 - [Contributions](#Contributions)
 -[Installation](#Installation)
- [Questions](#Questions)
- [License](#License)

## Description
${answers.description}

## Usage
${answers.usage}

## Installation
${answers.installation}

## Contributions
${answers.contributions}

## Questions
${answers.email}
${answers.github}

## License
#${answers.license}
 `;
  }
}

module.exports = markDown;
