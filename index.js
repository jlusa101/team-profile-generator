const inquirer = require('inquirer');
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer))
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamQuestions = [{
        type: 'input',
        name: 'name',
        message: "What is your name? (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your ID? (Required)",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter an ID!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email address? (Required)",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter an email!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is your office number? (Required)",
        validate: officeInput => {
            if (officeInput) {
                return true;
            } else {
                console.log('Please enter an office number!');
                return false;
            }
        }
    },
    {

        type: 'loop',
        name: 'newMember',
        message: "Add a new team member?",
        questions: [{
                type: 'list',
                name: 'type',
                message: "What type of employee would you like to add?",
                choices: ['Engineer', 'Intern']
            },
            {
                type: 'input',
                name: 'name',
                message: "What is your name? (Required)",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter a name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is your ID? (Required)",
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log('Please enter an ID!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is your email address? (Required)",
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('Please enter an email!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: "What is your github username? (Required)",
                when: (employee) => employee.type === 'Engineer',
                validate: githubUsername => {
                    if (githubUsername) {
                        return true;
                    } else {
                        console.log('Please enter an username!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: "What school are you currently attending? (Required)",
                when: (employee) => employee.type === 'Intern',
                validate: schoolName => {
                    if (schoolName) {
                        return true;
                    } else {
                        console.log('Please enter a school name!');
                        return false;
                    }
                }
            }

        ]

    }
]



const promptUser = function() {
    console.log("Hello Manager! Please begin by entering your information.");

    inquirer
        .prompt(teamQuestions)
        .then(answers => {
            console.log(answers);
        })
        .catch(err => {
            console.log(err);
        });

};



promptUser();