document.getElementById('mySend').addEventListener('click', function(e) {
    e.preventDefault();
    let myName = document.getElementById('myName').value;
    localStorage.setItem('regName', myName);
    location.href = 'saluta.html';
});