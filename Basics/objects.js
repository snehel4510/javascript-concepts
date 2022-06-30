// same as maps in C++ or Dictionaries in python
// key(property) - value pairs
const tekkenCharacter = {
  "player name": "Hwoarang",
  fightingStyle: "Tae Kwon Doe",
  human: true,
};
// keys with a space in them are enclosed in quotes(like strings)
console.log(tekkenCharacter["player name"]);
console.log(tekkenCharacter.human);

// assigning a new property using dot and bracket notation
tekkenCharacter.origin = "South Korea";
tekkenCharacter["hair color"] = "dyed orange";
console.log(tekkenCharacter);

// Dot notation is preferred if your property is a single word.
// Bracket notation is required if your property has a space in it or if you want to use a variable to name the property.
const eyes = "eye color";
tekkenCharacter.eyes = "brown"; // will create a property called eyes with a value of "brown"
tekkenCharacter[eyes] = "brown"; // will create a property called 'eye color' with a value of "brown"
console.log(tekkenCharacter);

// nested objects
let nestedObject = {
  id: 28802695164,
  date: "December 31, 2016",
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13,
      busy: 8,
    },
  },
};
nestedObject.data.onlineStatus.busy = 10;
console.log(nestedObject.data.onlineStatus.away); // 13

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
};
// for-in loop
// iterate over the complete object
for (const i in foods) {
  console.log(i + ":" + foods[i]);
}
// for-of loop
// iterate over values
for (const i of Object.values(foods)) {
  console.log(i);
}
// iterate over keys
console.log(Object.keys(foods)); // ["apples", "oranges", "plums", "bananas", "grapes", "strawberries"]
for (const i of Object.keys(foods)) {
  console.log(i);
}
// iterate over both
console.log(Object.entries(foods)); // [["apples", 25], ["oranges", 32], ["plums", 28], ["bananas", 13], ["grapes", 35], ["strawberries", 27]]
console.log(Object.values(foods)); // [25, 32, 28, 13, 35, 27]
for (const [key, value] of Object.entries(foods)) {
  console.log(key + ":" + value);
}

let x = "apples",
  y = 25;
// check if a key is present or not
console.log(x in foods); // true
// or check if an object has a property
console.log(foods.hasOwnProperty(x)); // true

// check if a value is present or not
console.log(Object.values(foods)); // [25, 32, 28, 13, 35, 27] -> extracting all the values of the object as an array
console.log(Object.values(foods).includes(y)); //true

// delete object properties
delete foods.plums;

const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
};

// creating an array of keys from the object
const k = Object.keys(obj);
console.log(k);
// creating an array of values from the object
const v = Object.values(obj);
console.log(v);
