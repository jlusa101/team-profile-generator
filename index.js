const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Questions = require('./lib/questions');



const promptUser = function() {
    console.log("Hello Manager! Please begin by entering your information.");
    const parsed = JSON.parse(Questions);
    const managerQuestions = parsed[0];
    const engineerQuestions = parsed[1];
    const internQuestions = parsed[2];

    inquirer
        .prompt(managerQuestions)
        .then(answers => {

            if (answers.newMember === 'Engineer') {
                inquirer.prompt(engineerQuestions);
            } else if (answers.newMember === 'Intern') {
                inquirer.prompt(internQuestions);
            } else {
                console.log('Finish Adding Team Members!');
            }

        })
        .catch(err => {
            console.log(err);
        });


};

promptUser();