// Required source files
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

// Generates the html for the employee profiles
const generateEmployeeCard = teamData => {
    // Instantiating new objects to access methods
    const mgrRole = new Manager();
    const engRole = new Engineer();
    const intRole = new Intern();
    
    // Return code depending on one of the unique attributes
    return `
    ${teamData
        .filter(({ officeNumber }) => officeNumber)
        .map(({ name, id, email, officeNumber }) => {
          return ` 
            <div class = "card mx-2 mt-2 shadow">
                <div class = "card-header" style = "background-color: #ffe5b4; color: black">
                    <h4 class = "card-title" > ${ name }</h4> 
                    <h6 class = "card-subtitle mb-2"><i class="bi bi-cup"></i> ${mgrRole.getRole()}</h6>
                </div>
                <div class = "card-body" style = "width: 240px; background-color: #F0F0F0">
                <table class="table table-bordered bg-white">
                    <tr>
                        <td>ID: ${ id }</td>
                    </tr>
                    <tr>
                        <td>Email: <a href = "mailto:${ email }" class ="card-link"> ${ email } </a></td>
                    </tr>
                    <tr>
                        <td>Office Number: ${ officeNumber }</td>
                    </tr>
                </table>
                </div>
            </div>
            `;
        })
        .join('')}

      ${teamData
        .filter(({ github }) => github)
        .map(({ name, id, email, github}) => {
          return `
            <div class = "card mx-2 mt-2 shadow">
                <div class = "card-header" style = "background-color: #ffe5b4; color: black">
                    <h4 class = "card-title">${ name }</h4>
                    <h6 class = "card-subtitle mb-2"><i class="bi bi-search"></i> ${engRole.getRole()}</h6>
                </div>
                <div class = "card-body" style = "width: 240px; background-color: #F0F0F0">
                    <table class="table table-bordered bg-white">
                        <tr>
                            <td>ID: ${ id }</td>
                        </tr>
                        <tr>
                            <td>Email: <a href = "mailto:${ email }" class ="card-link"> ${ email } </a></td>
                        </tr>
                        <tr>
                            <td>Github: <a href = "https://github.com/${ github }" target="_blank" class ="card-link"> ${ github }</a></td>
                        </tr>
                    </table>
                </div>
            </div >
            `;
        })
        .join('')}

        ${teamData
            .filter(({ school }) => school)
            .map(({ name, id, email, school }) => {
              return ` 
                <div class = "card mx-2 mt-2 shadow">
                    <div class = "card-header" style = "background-color: #ffe5b4; color: black">
                        <h4 class = "card-title"> ${ name }</h4> 
                        <h6 class = "card-subtitle mb-2"><i class = "bi bi-compass"></i> ${intRole.getRole()}</h6>
                    </div> 
                    <div class = "card-body" style = "width: 240px; background-color: #F0F0F0">
                    <table class="table table-bordered bg-white">
                        <tr>
                            <td>ID: ${ id }</td>
                        </tr>
                        <tr>
                            <td>Email: <a href = "mailto:${ email }" class ="card-link"> ${ email } </a></td>
                        </tr>
                        <tr>
                            <td>School: ${ school }</td>
                        </tr>
                    </table>
                    </div> 
                </div>
            `;
            })
            .join('')}
    `;
};

// Function that generates the HTML layout and includes all the necessary information
const generateSite = (data) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>My Team</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    </head>
    <body>
        <div class="container-fluid" style="height: 115px">
            <div class="d-flex text-black justify-content-center py-3 bg-info">
                <h1>My Team</h1>
            </div>
        </div>
        <div class="container">
            <div class="d-flex flex-wrap justify-content-center">
                ${generateEmployeeCard(data)}  
            </div>  
        </div>
    </body>
    </html>
    `;
};

module.exports = { generateSite };