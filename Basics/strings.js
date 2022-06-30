let s1 = "abcdef ghijk";
let s2 = s1.slice(3, 8);
console.log(s2); // def g

// javascript strings are immutable, so we can use 2 methods -> split() and join() to process with strings
// split() -> splits a string into an array of substrings based on the given separator
// then we can process with the recieved array in whatever way we want to
// join() -> joins an array of strings into a single string along with a seperator present in b/w its elements

const s3 = "Hello World";
const bySpace = s3.split(" ");
const byChar = s3.split("");
console.log(bySpace);
console.log(byChar);

const s4 = "May-the-force-be-with-you";
console.log(s4.split("-").join(" "));

// The replace() method replaces a specified value with another value in a string:
// does not mutates the original string
let str1 = "hello world";
let str2 = str1.replace("l", "L");
console.log(str2); // will replace only the first occurence of 'l' with 'L'

// not only characters, but can also replace a word from the string
let str3 = "hello world hello";
let str4 = str3.replace("hello", "hi");
console.log(str4); // will replace only the first occurence of 'hello' with 'hi'

// If you want to replace all matches, use a regular expression with the /g flag set.
let s5 = "hello world hello";
let s6 = s5.replace(/hello/g, "hi");
console.log(s6); // will replace all occurences of 'hello' with 'hi'

// it is case sensitive, To replace case insensitive, use a regular expression with an /i flag
let s7 = "HellO world";
let s8 = s7.replace("hello", "hi"); // won't work
let s9 = s7.replace(/hello/i, "hi");
console.log(s8, s9);
