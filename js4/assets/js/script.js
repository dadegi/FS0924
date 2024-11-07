const result = document.getElementById('result');
let total;

document.addEventListener('load', init());

// Event Handler
function init() {
	sum(12, 15);
	if (check()) {
		print();
	} else {
		result.innerText = 'Il risultato è maggiore di 30';
		return;
	}
}

function sum(number1, number2) {
	let mySum = number1 + number2;
	total = mySum;
}

function check() {
	if (total <= 30) {
		return true;
	} else {
		return false;
	}
}

function print() {
	result.innerText += total;
	return;
}
// Manipolazione delle stringhe

let myString = 'Ciao a tutto il corso FS0924, per tutto il 2024';

console.log(myString.indexOf('tutto', 10));
console.log(myString.indexOf('Epicode'));
console.log(myString.lastIndexOf('tutto'));
console.log(myString.length);
console.log(myString.slice(1, 10));

let newString = myString.replace('corso', 'batch');
console.log(newString);

let wrongString = '       Hello,       World!       ';
let correctString = wrongString.trim();
console.log(correctString);

console.log(myString.split(''));
console.log(myString.split(' '));
console.log(myString.split(','));

// Libreria Math
let casualNumber = Math.floor(Math.random() * 10) + 1;
console.log(casualNumber);

let myArray = ['Pippo', 'Pluto', 'Paperino', 'Gastone'];
let casualName = Math.floor(Math.random() * myArray.length);
console.log(myArray[casualName]);

// Costruttore Date()
let today = new Date();
console.log(today);
// console.log(today.getFullYear());
// today.setFullYear(2001);
// console.log(today);
// today.setMonth(3);
// console.log(today);

let myBirthday = new Date(2006, 10, 8);
console.log(myBirthday);

let myAge = Math.floor((today - myBirthday) / 1000 / 60 / 60 / 24);
myAge = Math.floor(myAge / 365.25);

if (myAge >= 18) {
	console.log('Sei maggiorenne');
} else {
	console.log('Sei minorenne');
}
