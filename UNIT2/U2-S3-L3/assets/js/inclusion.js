// Questa funzione carica qualcosa nell'HTML, a seguito di una promise
function showPage(page) {
    document.getElementById('externalPage').innerHTML = page;
}

// Questa è la promise che cerca di recuperare il file da caricare
const myLoad = new Promise(function (resolve, reject) {
    let request = new XMLHttpRequest();
    request.open('GET', 'include.html');

    request.onload = () => {
        if (request.status == 200) {
            resolve(request.response);
        } else {
            reject('<h3>FILE NON TROVATO!</h3>');
        }
    };
    request.send();
});

myLoad.then(function (pagina) {
    // La promise eseguita con il metodo then() gestisce i due possibili casi, resolve e reject
    // RESOLVE: se la pagina viene trovata, il valore, cioè il nome del file, viene passato alla funzione showPage
    showPage(pagina);
}).catch(error => {
    // con catch(error) intercetto il REJECT della promise, e invio la stringa di errore
    showPage(error);
}).finally(() => {
    // le operazioni in FINALLY vengono eseguite comunque, sia in caso di resolve che di reject
    console.log('Promise completata');
});


document.getElementById('explain').innerText = 'Questa riga dimostra il funzionamento asincrono delle promise: nonostante sia scritta alla fine dello script, viene eseguita INDIPENDENTEMENTE dalla risoluzione o meno della promise e DURANTE la promise.'