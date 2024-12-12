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

let usersList = [];

let dataURL = 'https://61fb890c87801d0017a2c55c.mockapi.io/v1/persone/';

class User {
    constructor(_name, _surname, _phone, _email) {
        this.name = _name;
        this.surname = _surname;
        this.phone = _phone;
        this.email = _email;
    }
}

let userMod;

document.addEventListener('load', init());

function init() {
    // btnSendForm.setAttribute('disabled', 'true');
    readList();
}

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
        if (element.name === null) {
            newLi.innerHTML += `Nome non registrato, ${element.surname}, telefono: ${element.phone} - email: ${element.email}`;
        } else if (element.phone === null) {
            newLi.innerHTML += `${element.name} ${element.surname}, telefono: non registrato - email: ${element.email}`;
        } else {
            newLi.innerHTML += `${element.name} ${element.surname}, telefono: ${element.phone} - email: ${element.email}`;
        }
        myList.appendChild(newLi);
    });
}

btnSendForm.addEventListener('click', function (e) {
    e.preventDefault();
    if (checkValidity() && !userMod) {
        formError.innerText = '';
        // btnSendForm.removeAttribute('disabled');
        manageItem();
        // readList();
    } else if (checkValidity() && userMod) {
        formError.innerText = '';
        // btnSendForm.removeAttribute('disabled');
        modifyItem(userMod.id);
    } else {
        return;
    }
});

const checkValidity = () => {
    let validity = true;
    usersList.forEach((element) => {
        if (element.email == userEmail.value && !userMod) {
            formError.innerText = 'Email già presente';
            validity = false;
            // btnSendForm.setAttribute('disabled', 'true');
            return validity;
        }
    });
    return validity;
}

const manageItem = async id => {
    if (!id) {
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
    } else {
        printForm(id);
    }
}

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
}

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
}

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
}