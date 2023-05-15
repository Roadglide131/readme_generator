const fs = require("fs");
const inquirer = require("inquirer");
const gm = require("./utils/generateMarkdown");

// Array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a description of your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "Provide installation instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide usage information:",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your project:",
    choices: ["MIT", "Apache 2.0", "GPLv3", "None"],
  },
  {
    type: "input",
    name: "contributing",
    message: "Provide contribution guidelines:",
  },
  {
    type: "input",
    name: "tests",
    message: "Provide test instructions:",
  },
  { type: "input", name: "username", message: "Enter your GitHub username:" },
  {
    type: "input",
    name: "email",
    message: "Enter your email address:",
  },
];
function wf(data) {
  fs.writeFile("readme.md", data, (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log("readme.md has been generated");
    }
  });
}
function init() {
  inquirer.prompt(questions).then(function (data) {
    const md = generateMarkdown(data);
    wf(md);
  });
}
init();
