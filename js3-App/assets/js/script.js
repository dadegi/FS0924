const studentsArray = [
	{
		name: 'Walter',
		surname: 'Antonelli',
		email: 'walter@antonelli.com',
	},
	{
		name: 'Gianluca',
		surname: 'Di Diego',
		email: 'gianluca@didiego.it',
	},
	{
		name: 'Valentina',
		surname: 'Rizzo',
		email: 'valentina@rizzo.net',
	},
	{
		name: 'Ninfa',
		surname: 'Carreno',
		email: 'ninfa@carreno.com',
	},
	{
		name: 'Federico',
		surname: 'Lepore',
		email: 'federico@lepore.it',
	},
	{
		name: 'Giuseppe',
		surname: 'Pomo',
		email: 'giuseppe@pomo.net',
	},
];

let studentsCount = 0;

if (studentsArray.length > 0) {
	studentsCount = studentsArray.length;
	for (let i = 0; i < studentsArray.length; i++) {
		document.getElementById('list').innerHTML +=
			'<tr><td>' +
			studentsArray[i].name +
			'</td><td>' +
			studentsArray[i].surname +
			'</td><td>' +
			studentsArray[i].email +
			'</td></tr>';
	}
	document.getElementById('listCount').innerText =
		'Numero studenti registrati: ' + studentsCount;
}
