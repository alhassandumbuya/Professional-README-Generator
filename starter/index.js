const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title your project.",
  },
  {
    type: "input",
    name: "description",
    message: "Please enter a describtion of your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "Please provide the installation instructions for your project.",
  },
  {
    type: "input",
    name: "useage",
    message: "Please provide useage information for your project.",
  },
  {
    type: "checkbox",
    name: "license",
    message: "Please select a license applicable to this project.",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "None"],
  },
  {
    type: "input",
    name: "contributors",
    message: "Please provide contribution guidelines.",
  },
  {
    type: "input",
    name: "test",
    message: "Please provide test instructions?",
    default: "npm test",
  },
  {
    type: "input",
    name: "creator",
    message: "Write your GitHub username.",
  },
  {
    type: "input",
    name: "email",
    message: "Provide a valid email address.",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((inquirerAnswers) => {
      console.log("Generating.... Please wait....");
      writeToFile("./dist/README.md", generateMarkdown({ ...inquirerAnswers }));
    });
}

// function call to initialize program
init();
