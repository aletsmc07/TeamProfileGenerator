//Manager card
const generateManager = function (manager) {
  return `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h3 class="card-title">${manager.name}</h3>
            <p class="card-text">${manager.id}</p>
            <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
            <p class="office">Office Number: ${manager.officeNumber}</p>
        </div>
    </div>
    `;
};

//Engineer card

const generateEngineer = function (engineer) {
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h3 class="card-title">${engineer.name}</h3>
            <p class="card-text">${engineer.id}</p>
            <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
        </div>
    </div>
    `;
};

const generateIntern = function (intern) {
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h3 class="card-title">${intern.name}</h3>
            <p class="card-text">${intern.id}</p>
            <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
            <p class="github">Github: <a href="https://github.com/${intern.school}">${intern.school}</a></p>
        </div>
    </div>
    `;
};

generateHTML = (data) => {
 
    cardArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 

        if (role === 'Manager') {
            const managerCard = generateManager(employee);
            cardArray.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);
            cardArray.push(engineerCard);
        }
 
        if (role === 'Intern') {
            const internCard = generateIntern(employee);
            cardArray.push(internCard);
        }
        
    }

    const employeeCards = cardArray.join('')
    const generateTeam = generateTeamPage(employeeCards); 
    return generateTeam;
}

const generateTeamPage = function (employeeCards) {   
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
        <link rel="stylesheet" href="../dist/css/style.css">
    </head>
    <body>
        <header>
            <nav class="navbar" id="navbar">
                <span class="fs-1 text-center mb-0 h1 w-100" id="navbar-Text">TEAM BOOTCAMP</span>
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center">
                    ${employeeCards}
                </div>
            </div>
        </main>
        
    </body>
    <script src="https://code.jquery.com/jquery-3.6.1.js" integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    </html>
  `;
  }
  
  // export to index
  module.exports = generateHTML; 
  