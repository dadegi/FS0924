// Variabli globali
const myForm = document.getElementById('myForm');
const userName = document.getElementById('userName');
const userSurname = document.getElementById('userSurname');
const userPhone = document.getElementById('userPhone');
const userEmail = document.getElementById('userEmail');
const btnSendForm = document.getElementById('sendForm');
const btnResetForm = document.getElementById('resetForm');
const formError = document.getElementById('formError');
const empty = document.getElementById('empty');
const myList = document.getElementById('myList');

// Array per gestire l'elenco ottenuto dalla fetch in locale
let usersList = [];

let dataURL = 'https://61fb890c87801d0017a2c55c.mockapi.io/v1/persone/';

// Classe per gestire gli oggetti conformemente all'API
class User {
    constructor(_name, _surname, _phone, _email) {
        this.name = _name;
        this.surname = _surname;
        this.phone = _phone;
        this.email = _email;
    }
}

// Variabile per diversificare l'inserimento dalla modifica
let userMod;

document.addEventListener('load', init());

function init() {
    btnSendForm.setAttribute('disabled', 'true');
    readList();
}

// Funzione di lettura dell'API
async function readList() {
    try {
        let read = await fetch(dataURL);
        let response = await read.json();
        usersList = response;
        if (usersList.length > 0) {
            printData();
        } else {
            empty.innerText = 'Nessun utente presente';
            return;
        }
    } catch (error) {
        console.log('Errore nel recupero dei dati: ', error);
        empty.innerText = `Errore nel recupero dei dati: ${error}`;
    }
}

// Funzione di stampa in HTML dei risultati della GET
const printData = () => {
    empty.innerText = '';
    myList.innerHTML = '';
    usersList.forEach((element) => {
        let newLi = document.createElement('li');
        let btnModify = document.createElement('button');
        btnModify.classList.add('btn', 'btn-warning', 'me-3');
        btnModify.innerText = '🖌️';
        btnModify.setAttribute('type', 'button');
        btnModify.setAttribute('onclick', `manageItem("${element.id}")`);
        let btnDelete = document.createElement('button');
        btnDelete.classList.add('btn', 'btn-danger', 'me-3', 'fw-bold');
        btnDelete.innerText = 'X';
        btnDelete.setAttribute('type', 'button');
        btnDelete.setAttribute('onclick', `deleteItem("${element.id}")`);
        newLi.appendChild(btnModify);
        newLi.appendChild(btnDelete);
        if (element.phone === null) {
            newLi.innerHTML += `${element.name} ${element.surname}, telefono: non registrato - email: ${element.email}`;
        } else {
            newLi.innerHTML += `${element.name} ${element.surname}, telefono: ${element.phone} - email: ${element.email}`;
        }
        myList.appendChild(newLi);
    });
}

// EventHandler al click sul button di aggiunta/modifica record
btnSendForm.addEventListener('click', function (e) {
    e.preventDefault();
    if (checkValidity() && !userMod) {
        formError.innerText = '';
        manageItem();
    } else if (checkValidity() && userMod) {
        formError.innerText = '';
        modifyItem(userMod.id);
    } else {
        return;
    }
});

// CONTROLLI CAMPI OBBLIGATORI
// Controlli sul campo email
// controllo sulla digitazione
userEmail.addEventListener('keyup', function () {
    if (checkValidity()) {
        formError.innerText = '';
        btnSendForm.removeAttribute('disabled');
    }
});

// controllo sulla compilazione automatica
userEmail.addEventListener('input', function () {
    if (checkValidity()) {
        formError.innerText = '';
        btnSendForm.removeAttribute('disabled');
    }
});

// Controlli sul campo surname
// controllo sulla digitazione
userSurname.addEventListener('keyup', function () {
    if (checkValidity()) {
        formError.innerText = '';
        btnSendForm.removeAttribute('disabled');
    }
});

// controllo sulla compilazione automatica
userSurname.addEventListener('input', function () {
    if (checkValidity()) {
        formError.innerText = '';
        btnSendForm.removeAttribute('disabled');
    }
});

// Controlli di validazione generale
const checkValidity = () => {
    let validity = true;
    let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (userSurname.value == '') {
        formError.innerText = 'Campo cognome obbligatorio';
        validity = false;
        btnSendForm.setAttribute('disabled', 'true');
        return validity;
    } else if (userEmail.value == '') {
        formError.innerText = 'Campo email obbligatorio';
        validity = false;
        btnSendForm.setAttribute('disabled', 'true');
        return validity;
    } else if (!regexEmail.test(userEmail.value)) {
        formError.innerText = 'Inserire una email valida';
        validity = false;
        btnSendForm.setAttribute('disabled', 'true');
    }
    usersList.forEach((element) => {
        if (element.email == userEmail.value && !userMod) {
            formError.innerText = 'Email già presente';
            validity = false;
            btnSendForm.setAttribute('disabled', 'true');
            return validity;
        }
    });
    return validity;
}

// Funzione che gestisce l'aggiunta record O avvia il processo di modifica record
const manageItem = async id => {
    if (!id) { // Aggiunta record
        let newUser = new User(userName.value, userSurname.value, parseInt(userPhone.value), userEmail.value);
        try {
            await fetch(dataURL, {
                method: 'POST',
                body: JSON.stringify(newUser),
                headers: {
                    "Content-Type": "application/json"
                }
            });
        } catch (error) {
            console.log(error);
        }
        readList();
        myForm.reset();
        btnSendForm.setAttribute('disabled', 'true');
    } else { // Avvio del processo di modifica record
        printForm(id);
    }
}

// Funzione di cancellazione record
const deleteItem = async id => {
    try {
        await fetch(dataURL + id, {
            method: 'DELETE'
        });
    } catch (error) {
        console.log(error);
    }
    readList();
    myForm.reset();
    btnSendForm.setAttribute('disabled', 'true');
}

// Funzione di cancellazione record
const modifyItem = async id => {
    userMod.name = userName.value;
    userMod.surname = userSurname.value;
    userMod.phone = userPhone.value;
    userMod.email = userEmail.value;
    try {
        await fetch(dataURL + id, {
            method: 'PUT',
            body: JSON.stringify(userMod),
            headers: {
                "Content-Type": "application/json"
            }
        })
    } catch (error) {
        console.log(error);
    }
    userMod = '';
    readList();
    myForm.reset();
    btnSendForm.innerText = 'AGGIUNGI';
    btnSendForm.setAttribute('disabled', 'true');
}

// Funzione di riempimento del form con i dati del record da modificare
function printForm(id) {
    for (let i = 0; i < usersList.length; i++) {
        if (id == usersList[i].id) {
            userMod = new User(usersList[i].name, usersList[i].surname, usersList[i].phone, usersList[i].email);
            userMod.id = usersList[i].id;
        }
    }
    userName.value = userMod.name;
    userSurname.value = userMod.surname;
    userPhone.value = userMod.phone;
    userEmail.value = userMod.email;
    btnSendForm.innerText = 'MODIFICA';
    btnSendForm.removeAttribute('disabled');
}