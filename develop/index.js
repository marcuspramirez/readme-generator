const fs = require("fs");
const inquirer = require("inquirer");


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
            name: "username",
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

        }


    ]);







