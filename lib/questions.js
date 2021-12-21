// Contains all the questions required for the team building site
const questionsArray = [
    managerQuestions = [{
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
            type: 'list',
            name: 'newMember',
            message: "Add a new team member.",
            choices: ['Engineer', 'Intern', 'Finish Adding Team Members']
        }

    ],
    engineerQuestions = [{
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
            validate: githubUsername => {
                if (githubUsername) {
                    return true;
                } else {
                    console.log('Please enter an username!');
                    return false;
                }
            }
        }

    ],
    internQuestions = [{
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
            name: 'school',
            message: "What school are you currently attending? (Required)",
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

];

module.exports = JSON.stringify(questionsArray);