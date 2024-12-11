const myForm = document.getElementById('myForm');
const myName = document.getElementById('myName');
const mySurname = document.getElementById('mySurname');
const send = document.getElementById('send');
const users = document.getElementById('users');
const myError = document.getElementById('error');

let myusers;

const url = 'https://61fb890c87801d0017a2c55c.mockapi.io/v1/persone';

document.addEventListener('load', init());

function init() {
    loadList();
}

async function loadList() {
    await fetch(url, {
        method: 'GET', // Non è indispensabile quando la fetch deve solo interrogare una base dati
        // headers: {
        //     "Content-Type": "application/json; charset=UTF-8"
        // }
    }).then((response) => {
        return response.json();
    }).then((data) => {
        myusers = data;
        printData();
    }).catch((error) => {
        myError.innerText = 'Errore nel recupero dei dati: ' + error;
    });
}

function printData() {
    users.innerHTML = '';
    for (let i = 0; i < myusers.length; i++) {
        let newLi = document.createElement('li');
        newLi.setAttribute('id', myusers[i].id);
        newLi.innerText = `${myusers[i].name} ${myusers[i].surname}`;
        users.appendChild(newLi);
    }
}

send.addEventListener('click', function () {
    let userName = myName.value;
    let userSurname = mySurname.value;
    let newUser = {
        name: userName,
        surname: userSurname
    }
    addUser(newUser);
});

async function addUser(newUser) {
    await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(newUser)
    }).then(() => {
        loadList();
    }).catch((error) => {
        myError.innerText = 'Errore nella scritttura dei dati: ' + error;
    });
}

async function deleteItem() {
    const newUrl = 'https://61fb890c87801d0017a2c55c.mockapi.io/v1/persone/8'
    await fetch(newUrl, {
        method: 'DELETE'
    }).then((response) => {
        return response.status;
    }).then(() => {
        loadList();
    }).catch((error) => {
        myError.innerText = 'Errore nella cancellazione dei dati: ' + error;
    });
}

deleteItem();