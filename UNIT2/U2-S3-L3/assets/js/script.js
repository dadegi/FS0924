let myScript = loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js');

function loadScript(src) {
    return new Promise((resolve, reject) => {
        console.log('Inizio caricamento script...');
        let script = document.createElement('script');
        script.src = src;

        script.onload = () => resolve(script, console.log('Promise risolta'));
        script.onerror = () => reject(new Error(`Errore di caricamento dello script ${src}`), console.log('Promise rifiutata'));

        document.head.append(script);
    });
}

console.log('Javascript va comunque avanti');