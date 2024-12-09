const person = {
    firstName: 'Paolino',
    lastName: 'Paperino',

    saluti: function () {
        return `Ciao, mi chiamo ${this.firstName} ${this.lastName}`;
    },
};

// console.log(typeof(person));

// console.log(person.hasOwnProperty('age'));

const person2 = { ...person };

// console.log(person2.firstName);

// console.log(person.saluti());

const Student = function () {
    this.studentName = '';
    this.studentSurname = '';

    this.course = () => {
        return `La persona ${this.studentName} ${this.studentSurname} frequenta il corso FS0924`;
    };

    // this.course = function() {
    //     return `La persona ${this.studentName} ${this.studentSurname} frequenta il corso FS0924`;
    // }
};

const student1 = new Student();

student1.studentName = 'Samuele';
student1.studentSurname = 'Converso';

// console.log(student1.course());

const student2 = new Student();

student2.studentName = 'Valentina';
student2.studentSurname = 'Rizzo';

// console.log(student2.course());

const Book = function (_title, _author) {
    this.title = _title;
    this.author = _author;
    this.bookstore = '';
    this.year = new Date();

    this.myBook = () => {
        if (this.bookstore === '') {
            return `Ho acquistato ${this.title} di ${this.author
                } nell'anno ${this.year.getFullYear()}`;
        } else {
            return `Ho acquistato ${this.title} di ${this.author
                } nella libreria ${this.bookstore
                } nell'anno ${this.year.getFullYear()}`;
        }
    };
};

const book1 = new Book('Il nome della rosa', 'Umberto Eco');
book1.bookstore = 'Feltrinelli';

console.log(book1.myBook());

const book2 = new Book('Oceano mare', 'Alessandro Baricco');

console.log(book2.myBook());

class Recording {
    constructor(_recordTitle) {
        this.recordTitle = _recordTitle;
    }

    myRecord() {
        return `Un mio disco: ${this.recordTitle}`;
    }
}

const record1 = new Recording('Ummagumma');

console.log(record1.myRecord());

class NewStudent {
    constructor(_name, _surname) {
        this.name = _name;
        this.surname = _surname;
    }

    printStudent() {
        return `Lo studente ${this.name} ${this.surname} `;
    }
}

class Course extends NewStudent {
    constructor(_batch, ...NewStudent) {
        super(...NewStudent);
        this.batch = _batch;
    }

    createBatch() {
        return `${this.printStudent()}frequenta il batch ${this.batch}`
    }
}

const subscribed = new Course('FS0924', 'Paolino', 'Paperino');

console.log(subscribed.createBatch());

class Frequence {
    constructor (_name, _surname) {
        this.name = _name;
        this.surname = _surname;
    }
    static course = 'FS0924';

    print() {
        return `Lo studente ${this.name} ${this.surname}`
    }
}

const myStudent = new Frequence('Paperon', 'De\'Paperoni');

console.log(`${myStudent.print()} frequenta il corso ${Frequence.course}`);
