const list = document.getElementById('list');

function sum(...numbers) {
	let mySum = 0;
	for (let i = 0; i < numbers.length; i++) {
		mySum += numbers[i];
	}
	return mySum;
}

console.log(sum(5, 5, 5));
console.log(sum(3, 3));
console.log(sum(5));
console.log(sum(1, 2, 3, 4));

function myList(...persons) {
	for (let i = 0; i < persons.length; i++) {
		// list.innerHTML += '<li>' + persons[i] + '</li>';
		list.innerHTML += `<li>${persons[i]}</li>`;
	}
}

myList('Spiderman', 'Hulk', 'Flash', 'Rockman');

const myPerson = {
	name: 'Mario',
	surname: 'Rossi',
	age: 30,
};

console.log('---Oggetti: Destrutturazione tradizionale----');
console.log(myPerson.name);
console.log(myPerson.surname);
console.log(myPerson.age);

console.log('---Oggetti: Destructuring Operator----');
const { name, surname, age } = myPerson;

console.log(name);
console.log(surname);
console.log(age);

const myArray = ['Direttore: Pippo', 'HR: Paperino', 'AD: Gastone'];

console.log('---Array: Destrutturazione tradizionale----');
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);

console.log('---Array: Destructuring Operator----');
const [direttore, hr, ad] = myArray;
console.log(direttore);
console.log(hr);
console.log(ad);

const myBirthDate = [1967, 9, 20];
const [anno, mese, giorno] = myBirthDate;

console.log('Sei nato il: ' + giorno + '/' + (mese + 1) + '/' + anno);

const myBirthday = new Date(anno, mese, giorno);
console.log(myBirthday);

// Template literals/Interpolazione di stringhe

const multiRow = document.getElementById('multiRow');

// Template literals - NELL'HTML FUNZIONA SOLTANTO CON innerText
multiRow.innerText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

<table>
    <tr>
        <td></td>
    </tr>
</table>

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

// Interpolazione di stringhe
const birthDate = document.getElementById('birthDate');

birthDate.innerText = `Sei nato il ${giorno}/${mese + 1}/${anno}`;

const students = [
	{
		name: 'Walter',
		surname: 'Antonelli',
		email: 'walter@antonelli.com',
	},
	{
		name: 'Alberto',
		surname: 'Savi',
		email: 'alberto@savi.com',
	},
	{
		name: 'Valentina',
		surname: 'Rizzo',
		email: 'valentina@rizzo.com',
	},
];

const studentList = document.getElementById('studentList');

for (let i = 0; i < students.length; i++) {
	// studentList.innerHTML += '<tr><td>' + students[i].name + '</td><td>' + students[i].surname + '</td><td>' + students[i].email + '</td></tr>';
	studentList.innerHTML += `<tr><td>${students[i].name}</td><td>${students[i].surname}</td><td>${students[i].email}</td></tr>`;
}

// Metodi degli array
const petsArray = ['Gatto', 'Cane', 'Coniglio'];
console.log(petsArray.indexOf('Cane'));

petsArray.reverse();
console.log(petsArray.indexOf('Coniglio'));

petsArray.sort().reverse();
console.log(petsArray.indexOf('Cane'));

let myPet = petsArray.pop(); // Salvo l'elemento eliminato in una variabile
console.log(petsArray);
console.log(myPet);
petsArray.pop(); // Elimino l'ultimo elemento dell'array senza salvarlo

petsArray.push('Leone');
let newPet = 'Tigre';
petsArray.push(newPet);
console.log(petsArray);

//SPLICE()
const myNames = document.getElementById('myNames');
const splice1 = document.getElementById('splice1');
const splice2 = document.getElementById('splice2');
const splice3 = document.getElementById('splice3');
const splice4 = document.getElementById('splice4');
const splice5 = document.getElementById('splice5');
const splice6 = document.getElementById('splice6');

const names = ['Mario', 'Aldo', 'Giovanna', 'Nicola', 'Maria', 'Elena'];
myNames.innerText = names;

names.splice(2, 2);
splice1.innerText = names;

names.splice(2, 1, 'Antonio');
splice2.innerText = names;

names.splice(1, 0, 'Gianluca', 'Valentina');
splice3.innerText = names;

let nameSpliced = 'Antonio';
for (let i = 0; i < names.length; i++) {
	if (names[i] === 'Antonio') {
		names.splice(i, 1);
	}
}
splice4.innerText = names;

const splicedNames = names.splice(2, 2); // Se serve il metodo splice() SALVA gli elementi eliminati in un nuovo array
console.log(splicedNames);
splice5.innerText = splicedNames;

names.splice(2, 1, ['Barbara', 'Giacomo', 'Federico']);
splice6.innerText = names;
console.log(names);

// slice()
const surnames = ['Savi', 'Turiaci', 'Zicari', 'Mazzotta', 'Carrano'];

const slicedSurnames = surnames.slice(1, 4);
console.log(slicedSurnames);

// forEach() e map()
const forEachIteration = document.getElementById('forEachIteration');
const mapEachIteration = document.getElementById('mapEachIteration');

// surnames.forEach(function(element) {
//     forEachIteration.innerHTML += `${element}<br />`;
// });

surnames.forEach((element) => {
	forEachIteration.innerHTML += `${element}<br />`;
});

// È come se avessi scritto:

// for (let i = 0; i < surnames.length; i++) {
//     forEachIteration.innerHTML += `${surnames[i]}<br />`;
// }

const myStudents = ['Pippo', 'Pluto', 'Paperino', 'Gastone'];

const listStudents = myStudents.map((element) => {
	return `Studente ${element}`;
});

mapEachIteration.innerText = listStudents;
console.log(listStudents);

const sumNumbers = [3, 4, 5, 6, 7];

const sumArray = sumNumbers.reduce((sum, element) => sum + element);

console.log(sumArray);
