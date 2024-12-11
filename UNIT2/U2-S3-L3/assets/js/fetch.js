const url = 'https://jsonplaceholder.typicode.com/users/';

const retrieveData = () => {
    fetch(url, {
        headers: {
            "Authentication": "La mia chiave di autenticazione"
        }
    }).then((response) => {
        return response.json();
    }).then((data) => {
        let myList = data;
        console.log(myList);
    }).catch((error) => {
        console.log('Errore nel recupero dei dati: ', error);
    });
};

retrieveData();

const myPost =   {
    "userId": 1,
    "title": "Questo è il mio post",
    "body": "Sto aggiungendo un post tramite fetch"
  }

const addData = () => {
    fetch(url, {
        method: 'POST',
        headers: {
            "Authentication": "La mia chiave",
            "Content-Type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(myPost)
    }).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
    });
}

addData();

// async function response() {
//     await fetch(url).then((response) => {
//         if (response.ok) {
//             let myData = response.json();
//             console.log(myData);
//         } else {
//             console.log('Errore nel recupero dei dati: ' + response.status);
//             location.href = '404.html';
//         }
//     });
// };

// response();