const fs = require("fs");
const inquirer = require("inquirer");
exports.printMsg = function() {
    console.log("This is a message from the demo package");
  }


inquirer
    .prompt([
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title",
        },
        {
            type: "input",
            message: "What is your Github user name?",
            name: "github_username",
        },
        {
            type: "input",
            message: "Describe your project.",
            name: "description",
        },
        {
            type: "input",
            message: "What steps are required to install your project?",
            name: "install_steps",
        },
        {
            type: "input",
            message: "Provide instructions and examples for use.",
            name: "usage",
        },
        {
            type: "input",
            message: "List your collaborators, third-party assets, and any tutorials used.",
            name: "collaborators",
        },
        {
            type: "input",
            message: "List your licenses.",
            name: "licenses",
        },

    ])
    .then(function (response) {
        if (response.confrim === response.description) {
            console.log("success");
        } else {
            console.log("no");
        }

    });







