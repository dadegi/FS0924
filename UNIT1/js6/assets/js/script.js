// const subtitle = document.getElementById('subtitle');
const subtitle = document.querySelector('#subtitle');

subtitle.innerText =
	'La possibilità di JavaScript di intervenire sulla struttura del DOM';
subtitle.className = 'blue';

// const listElements = document.getElementsByTagName('li');
// console.log(listElements);

// for (let i = 0; i < listElements.length; i++) {
//     listElements[i].classList.add('red');
// }

const listElements = document.querySelectorAll('#list li');
console.log(listElements);

listElements.forEach((element) => {
	element.classList.add('red');
});

document.querySelector('div p').style.color = 'green';

const personsList = document.getElementById('personsList');
const personsArray = ['Mario', 'Aldo', 'Giovanna', 'Maria'];

if (personsArray.length > 0) {
    const newUl = document.createElement('ul');
    personsArray.forEach((element) => {
        const newLi = document.createElement('li');
        newLi.innerText = element;
        newUl.appendChild(newLi);
    });
    personsList.appendChild(newUl);
} else {
    const noPersons = document.createElement('h3');
    noPersons.innerText = 'Non ci sono persone';
    personsList.appendChild(noPersons);
}
