// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util")
const fileAsync = util.promisify(writeToFile);
const generateMarkdown = require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "projectTitle",
      message: "What is the title of your project?",
      validate: (projectName) => {
        if (projectName) {
          return true;
        } else {
          console.log("Please enter your project name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "White a brief description of your project:",
      validate: (projectDescription) => {
        if (projectDescription) {
          return true;
        } else {
          console.log("Please enter the description of your porject!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "installation",
      message: "Describe the installation process if any: ",
    },
    {
      type: "input",
      name: "usage",
      message: "What is the usage for your project?",
      validate: (projectUsage) => {
        if (projectUsage) {
          return true;
        } else {
          console.log("Please enter the usage for your project!");
          return false;
        }
      },
    },
    {
      type: "list",
      name: "license",
      message: "Choose the license(s) associated with your project: ",
      choices: ["npm", "GNU", "ISC", "Mozilla", "Eclipse", "Apache"],
      default: ["None"],
    },
    {
      type: "input",
      name: "contributors",
      message: "Who are the contributors for this project?",
      default: "I am a one person act!"
    },
    {
      type: "input",
      name: "test",
      message: "How is your project tested?",
      validate: (projectTest) => {
        if (projectTest) {
          return true;
        } else {
          console.log(
            "Please enter the description of how your project is tested!"
          );
          return false;
        }
      },
    },
    {
      type: "input",
      name: "future",
      message:
        "What are some future improvements that can be made from this project?",
    },
    {
      type: "input",
      name: "questions",
      message: "What do I do if I have an issue?",
      validate: (projectIssues) => {
        if (projectIssues) {
          return true;
        } else {
          console.log("Please enter some information if a user has an issue!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "username",
      message: "What is your GitHub username: ",
      validate: (githubUsername) => {
        if (githubUsername) {
          return true;
        } else {
          console.log("Please enter your github username!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email: ",
      validate: (email) => {
        if (email) {
          return true;
        } else {
          console.log("Please enter your email!");
          return false;
        }
      },
    },
  ]);
};

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Success!")
    }
  });
}

// TODO: Create a function to initialize app
async function init() {
  const answers = await questions();
  const content = generateMarkdown(answers);
  await fileAsync(`./dist/${answers.projectTitle}.md`, content);
}

// Function call to initialize app
init();
