const generateCard = (teamData) => {
    return `
      ${teamData
        .filter(({ type }) => type === 'Engineer')
        .map(({ name, type, id, email, github }) => {
          return `
          <div class="card">
                  <div class="card-body">   
                      <h4 class="card-title">${name}</h4>
                      <h6 class="card-subtitle mb-2 text-muted">${type}</h6>
                      <p>ID: ${id}</p>
                      <p>Email: <a href="mailto:${email}" class="card-link">${email}</a></p>
                      <p>Github: <a href="#!" class="card-link">${github}</a></p>
                  </div>
              </div>
        `;
        })
        .join('')}

        ${teamData
            .filter(({ type }) => type === 'Intern')
            .map(({ name, type, id, email, school }) => {
              return `
              <div class="card">
                      <div class="card-body">   
                          <h4 class="card-title">${name}</h4>
                          <h6 class="card-subtitle mb-2 text-muted">${type}</h6>
                          <p>ID: ${id}</p>
                          <p>Email: <a href="mailto:${email}" class="card-link">${email}</a></p>
                          <p>School: ${school}</p>
                      </div>
                  </div>
            `;
            })
            .join('')}
    `;
  };

const generateManagerCard = manager => {
    return `
    <div class="card">
        <div class="card-body">
            <h4 class="card-title">${manager.name}</h4>
            <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
            <p>ID: ${manager.id}</p>
            <p>Email: <a href="mailto:${manager.email}" class="card-link">${manager.email}</a></p>
            <p>Office Number: ${manager.officeNumber}</p>
        </div>
    </div>
    `;
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
        <div class="card-deck">
            ${generateManagerCard(data)}
            ${generateCard(data.newMember)}
        </div>
    </body>
    </html>
    `;
};

module.exports = { generateSite };