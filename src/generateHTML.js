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
            <p class="github">Github: <a href="https://github.com/${intern.github}">${intern.github}</a></p>
        </div>
    </div>
    `;
};