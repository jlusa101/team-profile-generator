const generateCard = (teamData) => {
    if (teamData.type === 'Engineer') {
        return `
    <div class="card">
        <div class="card-body">
            <h4 class="card-title">${teamData.name}</h4>
            <h6 class="card-subtitle mb-2 text-muted">${teamData.type}</h6>
            <p>Email: <a href="mailto:${teamData.email}" class="card-link">${teamData.email}</a></p>
            </br>
            <p>Github: <a href="#!" class="card-link">${teamData.github}</a></p>
        </div>
    </div>
    `;
    } else if (teamData.type === 'Intern') {
        return `
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">${teamData.name}</h4>
                <h6 class="card-subtitle mb-2 text-muted">${teamData.type}</h6>
                </br>
                <p>ID: ${teamData.id}</p>
                </br>
                <p>Email: <a href="mailto:${teamData.email}" class="card-link">${teamData.email}</a></p>
                </br>
                <p>School: ${teamData.school}</p>
            </div>
        </div>
        `;
    } else {
        return `
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">${teamData.name}</h4>
                <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
                <p>Email: <a href="mailto:${teamData.email}" class="card-link">${teamData.email}</a></p>
                <p>Office Number: ${teamData.officeNumber}</p>
            </div>
        </div>
        `;
    }
};

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
    </head>
    <body>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-3">My Team</h1>
            </div>
        </div>
        ${generateCard(data)}
    </body>
    </html>
    `;
};

module.exports = { generateSite };