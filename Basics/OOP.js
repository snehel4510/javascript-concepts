//ES5 and ES6

const s1 = 'hello';
// console.log(typeof s1);  //string

const s2 = new String('hello');
// console.log(typeof s2);  //object


// console.log(window);

// console.log(navigator.appVersion);

//---------------------------------------------------------------------------------------------------------------------------------//

// OBJECT LITERALS

const book = {
    name: 'javascript programming',
    author: 'snehel',
    year: '2021',
    get: function () {
        return `${this.name} was written by ${this.author} in the year ${this.year}`;
    }
}

// console.log(book.get());
// console.log(Object.values(book));  //gives an array of all the values of the object book
// console.log(Object.keys(book));  //gives an array of all the keys of the object book

//---------------------------------------------------------------------------------------------------------------------------------//

// CONSTRUCTOR FUNCTIONS

function books(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.get = function () {
        return `${this.title} was written by ${this.author} in the year ${this.year}`;
    }
}

//so by creating this constructor function/template... we can now instantiate as many objects as we want 
const book1 = new books('book one', 'snehel', 2020);
const book2 = new books('book two', 'ankur', 2021);

// console.log(book1.title);  //book one
// console.log(`${book2.title} was written by ${book2.author} in the year ${book2.year}`);
// console.log(book1.get());  //same thing as above

//---------------------------------------------------------------------------------------------------------------------------------//

//PROTOTYPES  -->  Instead of creating this.function() inside the constructor we can create protypes for those functions

books.prototype.get1 = function () {
    return `${this.title} was written by ${this.author} in the year ${this.year}`;
}

const book3 = new books('book three', 'vivek', 2022);
// console.log(book3.get1());   //now we can use both get and get1 function

//changing the values...
books.prototype.change = function (newyear) {
    this.year = newyear;
}

book3.change(2030);
// console.log(book3.get1());  //year is changed from 2022 to 2030

//---------------------------------------------------------------------------------------------------------------------------------//

//INHERITANCE  --> creating a new constructor inherited from books having all its properties + its own 

function magzine(title1, author1, year1, month1) {
    books.call(this, title1, author1, year1);    //this is the way we inherit the books properties inside the magzine
    this.month1 = month1;
}

magzine.prototype = Object.create(books.prototype);  //inheriting the books prototype functions

const book4 = new magzine("hello world", 'shamya', 2015, 'feb');
// console.log(book4);
// console.log(book4.get1());  //this would have been wrong if we didn't had inherited the prototype(get1)


//---------------------------------------------------------------------------------------------------------------------------------//

//Object.create


