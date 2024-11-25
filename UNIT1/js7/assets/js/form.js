const myForm = document.getElementById('myForm');
const regName = document.getElementById('regName');
const regSurname = document.getElementById('regSurname');
const regEmail = document.getElementById('regEmail');
const regPassword = document.getElementById('regPassword');
const regAge = document.getElementById('regAge');
const btnSubmit = document.getElementById('btnSubmit');
const formError = document.getElementById('error');
const formThanks = document.getElementById('thanks');

// Variabili per compilare l'oggetto che conterrà i dati del form
let formName;
let formSurname;
let formEmail;
let formPassword;
let formAge;

// Oggetto che conterrà i dati del form
const regUser = {
	name: '',
	surname: '',
	email: '',
	password: '',
	age: 0,
};

// Regular expressions (RegEx) di verifica
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexPassword =
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&?])[A-Za-z\d!@#$%&?]{8,20}$/;

// Variabili booleane per la validazione in tempo reale
let validEmail = false;
let validPassword = false;
let validAge = false;
let validSurname = false;

// Operazioni da eseguire al caricamento della pagina
document.addEventListener('load', init());

function init() {
	formThanks.style.display = 'none';
	btnSubmit.setAttribute('disabled', 'true');
	// let myName = prompt('Scrivi il tuo nome');
	// document.getElementById('welcome').innerText = `Benvenuto ${myName}`;
}

// EVENTI
// Compilazione e verifica campi
regSurname.addEventListener('blur', function () {
	validSurname = false;
	verify();
	if (regSurname.value === '') {
		formError.innerText = 'Il campo cognome è obbligatorio!';
		return;
	} else {
		formError.innerText = '';
		validSurname = true;
		verify();
	}
});

regEmail.addEventListener('blur', function () {
	validEmail = false;
	verify();
	if (regEmail.value === '') {
		formError.innerText = 'Il campo email è obbligatorio!';
		return;
	} else if (!regexEmail.test(regEmail.value)) {
		formError.innerText = 'Inserire una email valida';
		return;
	} else {
		formError.innerText = '';
		validEmail = true;
		verify();
	}
});

regPassword.addEventListener('blur', function () {
	validPassword = false;
	verify();
	if (regPassword.value === '') {
		formError.innerText = 'Il campo password è obbligatorio!';
		return;
	} else if (!regexPassword.test(regPassword.value)) {
		formError.innerText =
			'Inserire una password tra 8 e 20 caratteri che contenga almeno una maiuscola, una minuscola, un numero e un carattere speciale tra ! # @ $ % ?';
		return;
	} else {
		formError.innerText = '';
		validPassword = true;
		verify();
	}
});

regAge.addEventListener('blur', function () {
	validAge = false;
	verify();
	console.log(regAge.value);
	if (regAge.value === '') {
		formError.innerText = 'Il campo età è obbligatorio!';
		return;
	} else if (regAge.value < 18) {
		formError.innerText = 'Devi essere maggiorenne per registrati!';
		return;
	} else {
		formError.innerText = '';
		validAge = true;
		verify();
	}
});

function verify() {
	if (validSurname && validEmail && validPassword && validAge) {
		btnSubmit.removeAttribute('disabled');
	} else {
		btnSubmit.setAttribute('disabled', 'true');
	}
}

btnSubmit.addEventListener('click', function (e) {
	e.preventDefault();
	compileObject();
	setTimeout(() => {
		printData();
	}, 2000);
	myForm.reset();
});

function compileObject() {
    formName = regName.value;
    formSurname = regSurname.value;
    formEmail = regEmail.value;
    formPassword = regPassword.value;
    formAge = regAge.value;

    regUser.name = formName;
    regUser.surname = formSurname;
    regUser.email = formEmail;
    regUser.password = formPassword;
    regUser.age = formAge;
}

function printData() {
    formThanks.style.display = 'block';
    if (regUser.name !== '') {
        document.getElementById('formName').innerText += formName;
    } else {
        document.getElementById('formName').innerText += '';
    }
    document.getElementById('formSurname').innerText += formSurname;
    document.getElementById('formEmail').innerText += formEmail;
    document.getElementById('formAge').innerText += formAge;
}
