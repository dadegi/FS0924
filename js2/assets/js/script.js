// OGGETTI

const book = {
    title: "Il nome della rosa",
    author: "Umberto Eco",
    year: 1978,
    editor: "Mondadori",
    published: true,
};

console.log(book);

document.getElementById("title").innerText = book.title;
document.getElementById("author").innerText = book["author"];
document.getElementById("year").innerText = book.year;
document.getElementById("editor").innerText = book["editor"];
document.getElementById("published").innerText = book.published;

book.reprint = false; // Aggiunta di una proprietà

console.log(book);

// Modifica del valore di proprietà
book.year = 1983;
book.reprint = true;

console.log(book);

delete book.reprint; // Eliminazione di una proprietà

console.log(book);

const book2 = { ...book };

book2.title = "Il pendolo di Foucault";
book2.year = 1982;

console.log(book);
console.log(book2);

console.log("------------------------");
console.log("Copia di un oggetto");

const student1 = {
    name: "Walter",
    surname: "Antonelli",
    batch: "FS0924",
};

console.log(student1);

const student2 = student1;

student2.name = "Antonio"; // Se cambia il valore di una proprietà nell'oggetto copiato, cambia anche nell'oggetto di partenza!!!

console.log(student1);

const student3 = {
    name: "Valentina",
    surname: "Rizzo",
    batch: "FS0924",
};

const student4 = { ...student3 }; // Con lo spread operator, la modifica delle proprietà dell'oggetto copiato NOPN INCIDE sull'oggetto di partenza

student4.name = "Camilla";
student4.surname = "Zicari";

console.log(student3);
console.log(student4);

// ARRAY

console.log("------------------------");
console.log("ARRAY");

const students = [
    "Walter Antonelli",
    "Rachele Barberis",
    "Camilla Zicari",
    "Alessandro Incalza",
];

console.log(students);
document.getElementById("studentArray").innerText = students;

console.log(students[2]);

students.sort();

console.log(students);
console.log(students[2]);

console.log("------------------------");
console.log("IF/ELSE IF/ELSE");

let age = 16;

if (age >= 18) {
    console.log("Sei maggiorenne");
} else {
    console.log("Sei minorenne");
}

let price = 72;

if (price <= 50) {
    console.log("Prezzo conveniente");
} else if (price <= 75) {
    console.log("Prezzo in linea");
} else if (price <= 90) {
    console.log("Prezzo alto");
} else {
    console.log("Carissimo");
}

const person = {
    name: "Aldo",
    surname: "Bianchi",
};

if (person.name === "Mario") {
    if (person.surname === "Rossi") {
        console.log("Utente: " + person.name + " " + person.surname);
    } else {
        console.log("L'utente non è Mario Rossi");
    }
} else {
    console.log("L'utente non si chiama Mario");
}
