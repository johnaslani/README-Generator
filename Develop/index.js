// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

const inquirer = require("inquirer");
const fs = require("fs");

// const template = require("./template.js")

// const markdown = require("./generateMarkdown.js")

const generateMarkdown = ({
  title,
  description,
  installation,
  usage,
  contributing,
  tests,
  license,
  github,
  email,
}) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${name}</h1>
    <p class="lead">I am from ${location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${github}</li>
      <li class="list-group-item">LinkedIn: ${linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is your project title?",
    },
    {
      type: "input",
      name: "description",
      message: `Where is your project description?
      Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
        - What was your motivation?
        - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
        - What problem does it solve?
        - What did you learn?
      `,
    },
    {
      type: "input",
      name: "installation",
      message:
        "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
    },
    {
      type: "input",
      name: "usage",
      message: `What is usage of your project?\nProvide instructions and examples for use. Include screenshots as needed.
      To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    ```md
    ![alt text](assets/images/screenshot.png)
    ```
      `,
    },
    {
      type: "input",
      name: "contributing",
      message: `How did Contribut to your project?
      List your collaborators.
        If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
        If you followed tutorials, include links to those here as well.
      `,
    },
    {
      type: "input",
      name: "tests",
      message:
        "Please write a couple of tests for your application and provide examples on how to run them here.",
    },
    {
      type: "list",
      name: "license",
      message: "Chooose a license for your application?",
      choices: ['MIT', 'Apache', 'BSD', 'Apache 2', ' GNU AGPLv3', ' GNU GPLv3', ' GNU LGPLv3', 'Mozilla', 'The Unlicense'],
    },
    {
      type: "input",
      name: "gitHub",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "email",
      message: "WHat is your email address?",
    },
  ])
  .then((answers) => {
    const mdPageContent = generateMarkdown(answers);

    fs.writeFileSync("README.md", mdPageContent, (err) =>
      err ? console.log(err) : console.log("Successfully created README.md!")
    );
  });
