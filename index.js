// Required packages
const inquirer = require('inquirer');
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer))
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Importing functionality from another source file
const { generateSite } = require('./src/generateHTML');

// file path we want to save the index.html in
const fileName = './dist/index.html';

// Questions to be asked from the Manager
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

// Function that instantiates new Manager, engineer, and inter objects. This then pushes the objects into an array
const generateEmployeeObj = function(teamInfo) {
    // Declaring an empty array that will hold the employee objects
    var teamMembers = [];
    const manager = new Manager(teamInfo.name, teamInfo.id, teamInfo.email, teamInfo.officeNumber);
    // Pushing into the teamMember array
    teamMembers.push(manager);

    // Loop through the new member array and instantiate new objects and then push them into the teamMember array
    for(var i = 0; i < teamInfo.newMember.length; i++){
        if(teamInfo.newMember[i].type === 'Engineer'){
            const engineer = new Engineer(teamInfo.newMember[i].name, teamInfo.newMember[i].id, teamInfo.newMember[i].email, teamInfo.newMember[i].github);
            teamMembers.push(engineer);
        }
        else if(teamInfo.newMember[i].type === 'Intern'){
            const intern = new Intern(teamInfo.newMember[i].name, teamInfo.newMember[i].id, teamInfo.newMember[i].email, teamInfo.newMember[i].school);
            teamMembers.push(intern);
        }
    }

    return teamMembers;
};

// Function that is called to generate an HTML page
const createTeamPage = function(htmlData) {
    fs.writeFile(fileName, htmlData.toString(), function(err) {

        if (err) {
            return console.log(err);
        }

        console.log("Your team page has been created!");

    });
};

// Function that starst the applicatiion by prompting user for input
const promptUser = function() {
    console.log("Hello Manager! Please begin by entering your information.");
    console.log("=========================================================");

    inquirer
        .prompt(teamQuestions)
        // Instantiate new employee objects
        .then(answers => {
            return generateEmployeeObj(answers);
        }) // generates the HTML code
        .then(teamMembers => {
            return generateSite(teamMembers);
        }) // passes the generated code to be written in index.html
        .then(generatedHTML => {
            return createTeamPage(generatedHTML);
        })
        .catch(err => {
            console.log(err);
        });

};



promptUser();