const productData = JSON.parse(teamData);
console.log(productData);

const container = document.querySelector('.container');

const template = (team) => {`
    <div>
        <h3>${team.name}</h3>
        <h5>${team.description}</h5>
        <div>
            <h5>Achievements: </h5>
            ${team.achievements.forEach = (achievement) => {
                `${achievement} </br>`
            }}
        </div>
    </div>`
}

const printOutData = (arr) => {
    let content = ""
    arr.forEach((team) => {
        content += template(team);
    });
    container.innerHTML =+ content;
}

document.addEventListener('DOMContentLoaded', () => {
    printOutData(productData);
  });