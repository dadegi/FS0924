let studentName = "Walter";

if (studentName === "Giuseppe") {
    console.log("Il nome dello studente è Giuseppe");
} else if (studentName === "Camilla") {
    console.log("Il nome della studentessa è camilla");
} else if (studentName === "Jonathan") {
    console.log("Il nome dello studente è Jonathan");
} else if (studentName === "Walter") {
    console.log("Il nome dello studente è Walter");
} else {
    console.log("Il nome dello studente non è in elenco");
}

console.log("--------------------");

switch (studentName) {
    case "Giuseppe":
        console.log("Il nome dello studente è Giuseppe");
        break;

    case "Camilla":
        console.log("Il nome della studentessa è Camilla");
        break;

    case "Jonathan":
        console.log("Il nome dello studente è Jonathan");
        break;

    case "Walter":
        console.log("Il nome dello studente è Walter");
        break;

    default:
        console.log("Il nome dello studente non è in elenco");
        break;
}

let num1 = 25;
let num2 = 18;
let num3 = 47;

switch (true) {
    case num1 > num2 && num2 > num3:
        console.log(num1, num2, num3);
        break;

    case num1 > num3 && num3 > num2:
        console.log(num1, num3, num2);
        break;

    case num2 > num1 && num1 > num3:
        console.log(num2, num1, num3);
        break;

    case num2 > num3 && num3 > num1:
        console.log(num2, num3, num1);
        break;

    case num3 > num1 && num1 > num2:
        console.log(num3, num1, num2);
        break;

    default:
        console.log(num3, num2, num1);
        break;
}

const today = new Date();
console.log(today);

const todayName = today.getDay();
console.log(todayName);

switch (todayName) {
    case 0:
        console.log("Oggi è domenica " + today.getDate());
        break;

    case 1:
        console.log("Oggi è lunedì " + today.getDate());
        break;

    case 2:
        console.log("Oggi è martedì " + today.getDate());
        break;

    case 3:
        console.log("Oggi è mercoledì " + today.getDate());
        break;

    case 4:
        console.log("Oggi è giovedì " + today.getDate());
        break;

    case 5:
        console.log("Oggi è venerdì " + today.getDate());
        break;

    case 6:
        console.log("Oggi è sabato " + today.getDate());
        break;
}

const daysName = [
    "Domenica",
    "Lunedì",
    "Martedì",
    "Mercoledì",
    "Giovedì",
    "Venerdì",
    "Sabato",
];

console.log("Oggi è " + daysName[todayName]);

let numbersArray = [];
let i = 0;

while (i < 10) {
    numbersArray[i] = i + 1;
    i++;
}

console.log(numbersArray);

let whileLoop = 0;

while (whileLoop < 10) {
    document.getElementById("while").innerText += whileLoop + ", ";
    whileLoop++;
}

let doWhileLoop = 0;

do {
    document.getElementById("doWhile").innerText += doWhileLoop + ", ";
    doWhileLoop++;
} while (doWhileLoop < 10);

for (let i = 0; i < daysName.length; i++) {
    console.log(daysName[i]);
}

document.getElementById('title').innerText += 'del giorno 6 novembre 2024';

const numbers2 = [4, 9, 16, 25, 29];
let mySum = 0;

for (let i = 0; i < numbers2.length; i++) {
    mySum += numbers2[i]; // equivale a mySum = mySum + numbers2[i]
}
console.log(mySum);
