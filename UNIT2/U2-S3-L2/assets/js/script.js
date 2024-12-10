const person = {
    name: 'Mario',
    surname: 'Rossi'
}

document.getElementById('recoverStorage').addEventListener('click', function(e) {
    e.preventDefault();
    printStorage();
    recovery();
});

function printStorage() {
    sessionStorage.setItem('persons', JSON.stringify(person));
}

function recovery() {
    let recovered = JSON.parse(sessionStorage.getItem('persons'));
    console.log(recovered);
    document.getElementById('recovered').innerText = `La persona si chiama ${recovered.name} ${recovered.surname}`;
}

class Person {
    constructor(_name, _surname, _birthDate, _skills) {
        this.name = _name;
        this.surname = _surname;
        this.birthDate = {
            day: _birthDate[0],
            month: _birthDate[1],
            year: _birthDate[2]
        };
        this.skills = _skills;
    }
}

const newPerson1 = new Person('Gastone', 'Paperone', [18, 3, 1965], ['Python', 'Ruby', 'C#', 'Java']);

console.log(newPerson1);

localStorage.setItem('persons', JSON.stringify(newPerson1));

document.getElementById('completeName').innerText = `${newPerson1.name} ${newPerson1.surname}`;
document.getElementById('birthDate').innerText = `Nato il ${newPerson1.birthDate.day}-${newPerson1.birthDate.month}-${newPerson1.birthDate.year}`;
document.getElementById('skills').innerHTML = 'Competenze:&nbsp;'
for (let i = 0; i < newPerson1.skills.length; i++) {
    if (i === newPerson1.skills.length - 1) {
        document.getElementById('skills').innerHTML += newPerson1.skills[i];
    } else {
        document.getElementById('skills').innerHTML += `${newPerson1.skills[i]},&nbsp;`;
    }
}

const personName = document.getElementById('personName');
const personSurname = document.getElementById('personSurname');
const personDay = document.getElementById('personDay');
const personMonth = document.getElementById('personMonth');
const personYear = document.getElementById('personYear');
const personSkill1 = document.getElementById('skill1');
const personSkill2 = document.getElementById('skill2');
const personSkill3 = document.getElementById('skill3');
const addPerson = document.getElementById('addPerson');
const personsList = document.getElementById('personsList');
const newPersons = [];

addPerson.addEventListener('click', function(e) {
    e.preventDefault();
    let name = personName.value;
    let surname = personSurname.value;
    let day = personDay.value;
    let month = personMonth.value;
    let year = personYear.value;
    let skill1 = personSkill1.value;
    let skill2 = personSkill2.value;
    let skill3 = personSkill3.value;
    createObject(name, surname, day, month, year, skill1, skill2, skill3);
});

function createObject(name, surname, day, month, year, skill1, skill2, skill3) {
    let birthDate = [day, month, year];
    let skills = [skill1, skill2, skill3];

    const newPerson = new Person(name, surname, birthDate, skills);
    newPersons.push(newPerson);
    console.log(newPersons);
    printPersons();
    document.getElementById('createPerson').reset();
}

function printPersons() {
    personsList.innerHTML = '';
    for (let i = 0; i < newPersons.length; i++) {
        let newLi = document.createElement('li');
        newLi.innerText = `${newPersons[i].name} ${newPersons[i].surname}, nato il ${newPersons[i].birthDate.day}-${newPersons[i].birthDate.month}-${newPersons[i].birthDate.year}; Competenze: ${newPersons[i].skills[0]}, ${newPersons[i].skills[1]}, ${newPersons[i].skills[2]}`;
        personsList.appendChild(newLi);
    }
}