const btnPrintHello = document.getElementById('printHello');
const list = document.getElementById('list');
const title = document.getElementById('title');
let newLi;
let newBtn;

const myArray = ['Mario', 'Aldo', 'Giovanna', 'Maria'];

document.addEventListener('load', init());

function init() {
    console.log(title.innerText);
	printList();
}

function printList() {
	for (let i = 0; i < myArray.length; i++) {
		newLi = document.createElement('li');
		newLi.innerText = myArray[i];
		list.appendChild(newLi);
	}
    newBtn = document.createElement('button');
    newBtn.setAttribute('type', 'button');
    newBtn.innerText = 'NUOVO BUTTON';
    newBtn.setAttribute('onclick', 'printAlert()');
    const myBody = document.querySelectorAll('body')[0];
    myBody.appendChild(newBtn);
}

// btnPrintHello.addEventListener('click', function () {
// 	let newName = 'Dario';
// 	newLi = document.createElement('li');
// 	newLi.innerText = newName;
// 	list.appendChild(newLi);
// });

// btnPrintHello.onclick = function () {
// 	let newName = 'Dario';
// 	newLi = document.createElement('li');
// 	newLi.innerText = newName;
// 	list.appendChild(newLi);
// };

function addList() {
	let newName = 'Dario';
	newLi = document.createElement('li');
	newLi.innerText = newName;
	list.appendChild(newLi);
}

console.log('Hello world');

function printAlert() {
    alert('Mi hai cliccato!');
}
