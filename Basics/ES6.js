// http://www.developer-cheatsheets.com/es6

// var is globally scoped
// let and const are locally scoped

const s = [5, 6, 7];
s = [1, 2, 3]; // wrong -> reassignment not allowed bcoz of const
s[2] = 45; // but mutability is still allowed in objects
console.log(s);

// const declaration alone doesn't really protect your data from mutation. To ensure your data doesn't change, JavaScript provides a function Object.freeze to prevent data mutation.
let obj = {
  name: "FreeCodeCamp",
  review: "Awesome",
};
Object.freeze(obj);
obj.review = "bad";
obj.newProp = "Test";
console.log(obj);

// arrow functions
const magic = () => {
  return new Date();
};
console.log(magic());

// single statement arrow functions, doesnt require return keyword
const myFunc = () => "value";
const sum = (a, b) => a + b;
sum(4, 5);

// If an arrow function has a single parameter, the parentheses enclosing the parameter may be omitted.
const doubler = (item) => item * 2;
doubler(4);

// default parameters
const greeting = (name = "Anonymous") => "Hello " + name;
console.log(greeting("John"));
console.log(greeting());

// rest parameters ->  create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function.
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], {}));

// spread operator -> spread out an array into single arguments.
// spread operator unpacks all contents of an array into a comma-separated list.
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); //89

const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;
arr2 = [...arr1];
console.log(arr2);

// destructuring
const user = { name: "John Doe", age: 34 };
//ES5
// const name = user.name;
// const age = user.age;
//ES6 -> variable name & object property should have exactly the same name
const { name, age } = user;
// if you want to assign new variable name
const { name: userName, age: userAge } = user;

// destructuring nested objects
const user2 = {
  johnDoe: {
    age2: 34,
    email: "johnDoe@freeCodeCamp.com",
  },
};
const {
  johnDoe: { age: userAge2, email: userEmail },
} = user;

// destructuring arrays
//using spread operators in arrays, we cannot pick or choose which elements you want to assign to variables. Destructuring an array lets us do exactly that:
const [a, b, , , c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);
//The console will display the values of a, b, and c as 1, 2, 5.

//The rest element only works correctly as the last variable in the list.
const [a2, b2, ...arr3] = [1, 2, 3, 4, 5, 7];
console.log(a2, b2);
console.log(arr3);
//The console would display the values 1, 2 and [3, 4, 5, 7]

// swapping values using array destructuring
let a1 = 8,
  b1 = 6;
[a1, b1] = [b1, a1];

// destructuring assignment passed as function parameter
const profileUpdate1 = (profileData) => {
  const { name, age, nationality, location } = profileData;
};
//  This effectively destructures the object sent into the function. This can also be done in-place:
const profileUpdate2 = ({ name, age, nationality, location }) => {};

// string template literals
const person = {
  name: "Zodiac Hasbro",
  age: 56,
};
// string is multi-line, both in the code and the output.
const greetings = `Hello, my name is ${person.name}!
  I am ${person.age} years old.`;
console.log(greetings);

//object property shorthand/assignment
// returns an object containing two properties
const getMousePosition = (x, y) => ({ x, y });
console.log(getMousePosition(2, 3)); // { x: 2, y: 3 }

// function inside objects
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  },
};
bicycle.setGear(3);
console.log(bicycle.gear); // 3

// ES6 introduced a way to easily share code among JavaScript files. This involves exporting parts of a file for use in one or more other files, and importing the parts you need, where you need them.
<script type="module" src="filename.js"></script>;

// importing and exporting functions between js files
const uppercaseString = (string) => {
  return string.toUpperCase();
};
const lowercaseString = (string) => {
  return string.toLowerCase();
};
export { uppercaseString, lowercaseString };

import { add, subtract } from "./math_functions.js";

// Use * to Import Everything from a File
import * as myMathModule from "./math_functions.js"; //will create an object called myMathModule with all the functions from the file as a property
myMathModule.add(2, 3);
myMathModule.subtract(5, 3);

// export default -> will use this syntax if only one value is being exported from a file.
export default function add(x, y) {
  return x + y;
}
import add from "./math_functions.js"; // no curly braces

// javascript template literals/strings

// uses backticks so we can use both single and double quotes inside a string
let text1 = `He's often called "Johnny"`;
console.log(text1);

//Template literals allows multiline strings -> it's multiline both in the code & output console
let text2 = `The quick
brown fox
jumps over
the lazy dog`;
console.log(text2);

// string interpolation -> allows us to insert variables inside a string
let firstName = "John";
let lastName = "Doe";
let text3 = `Welcome ${firstName}, ${lastName}!`;
console.log(text3);

//Template literals allow expressions in strings:
let price = 10;
let VAT = 0.25;
let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total);

// HTML templates
let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];
let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}
html += `</ul>`;
