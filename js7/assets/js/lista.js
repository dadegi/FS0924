const frmList = document.getElementById('myList');
const insertItem = document.getElementById('insertItem');
const btninsert = document.getElementById('btnInsert');
const list = document.getElementById('list');
const listItems = [];

btninsert.addEventListener('click', function (e) {
	e.preventDefault();
	let myconfirm = confirm('Sei sicuro?');
	if (!myconfirm) return;
	if (!checkInput()) return;
	popolateArray();
	printList();
	frmList.reset();
});

function checkInput() {
	if (insertItem.value === '') {
		alert('Form non valido!\nCompila il campo di input!');
		return false;
	} else {
		return true;
	}
}

function popolateArray() {
	listItems.push(insertItem.value);
}

function printList() {
	list.innerHTML = '';
	for (let i = 0; i < listItems.length; i++) {
		let newLi = document.createElement('li');
		newLi.innerText = listItems[i];
		let btnDelete = document.createElement('button');
		btnDelete.setAttribute('type', 'button');
		btnDelete.setAttribute('onclick', `deleteItem(${i})`);
		btnDelete.innerText = '❌';
		newLi.appendChild(btnDelete);
		list.appendChild(newLi);
	}
}

function deleteItem(index) {
	listItems.splice(index, 1);
	printList();
}
