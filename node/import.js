const xyz = require('./export.js'); // this line will simply run whatever is in the people.js file but returns an empty object to the caller (if nothing is exported)
//if we export something from the file, then it will be returned to the caller
console.log(xyz); // {}

console.log(xyz.people);
console.log(xyz.ages);

// object destructuring to import values from different source files
const { ages } = require('./export.js');
console.log(ages);