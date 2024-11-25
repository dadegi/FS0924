const tombolone = document.getElementById('tombolone');
const btnEstrai = document.getElementById('estrai');
const btnCancella = document.getElementById('cancella');
let arrayEstratti = [];
let extractNumber;

document.addEventListener('load', init());

function init() {
	griglia();
}

function griglia() {
	for (let i = 0; i < 90; i++) {
		const numberDiv = document.createElement('div');
		numberDiv.innerText = i + 1;
		tombolone.appendChild(numberDiv);
	}
}

btnEstrai.addEventListener('click', estrai);

btnCancella.addEventListener('click', ricomincia);

function estrai() {
	extractNumber = Math.floor(Math.random() * 90) + 1;
	if (arrayEstratti.length === 90) {
		alert('Hai estratto tutti i numeri');
		btnEstrai.setAttribute('disabled', 'true');
		return;
	} else if (arrayEstratti.includes(extractNumber)) {
		estrai();
	} else {
		arrayEstratti.push(extractNumber);
		colora(extractNumber);
        console.log(arrayEstratti);
	}
}

function colora(divNumber) {
	const cellsNumber = document.querySelectorAll('#tombolone div');
	cellsNumber.forEach((cell) => {
		if (cell.innerText == divNumber) {
			cell.classList.add('estratto');
		}
	});
}

function ricomincia() {
	const cellsNumber = document.querySelectorAll('#tombolone div');
	cellsNumber.forEach((cell) => {
		if (cell.classList.contains('estratto')) {
			cell.classList.remove('estratto');
		}
	});
	arrayEstratti = [];
    console.log(arrayEstratti);
}
