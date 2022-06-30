// JS arrays can contain several data type
let simpleArray = ["one", 2, "three", true, false, undefined, null];
console.log(simpleArray.length); //7

// multidimensional array of objects
let complexArray = [
  [
    {
      one: 1,
      two: 2,
    },
    {
      three: 3,
      four: 4,
    },
  ],
  [
    {
      a: "a",
      b: "b",
    },
    {
      c: "c",
      d: "d",
    },
  ],
];

// js arrays have 0 based indexing
let myArray = ["a", "b", "c", "d"];
// array mutation
myArray[1] = "f";
console.log(myArray); // [ 'a', 'f', 'c', 'd' ]
// out of range indexes can be assigned
myArray[4] = "e";
console.log(myArray); // [ 'a', 'f', 'c', 'd', 'e' ]
myArray[7] = "z";
console.log(myArray); // [ 'a', 'f', 'c', 'd', 'e', , , 'z' ]

// adding elements using push() -> at end & unishift() -> at beginning
myArray.push("g");
console.log(myArray); // [ 'a', 'f', 'c', 'd', 'e', , , 'z', 'g' ]
myArray.unshift("x");
console.log(myArray); // [ 'x', 'a', 'f', 'c', 'd', 'e', , , 'z', 'g' ]
// removing elements using pop() -> at end & shift() -> at beginning, they return the popped/shifted element
let pp = myArray.pop();
console.log(myArray); // ['a', 'f', 'c', 'd', 'e', , , 'z' ]
let sft = myArray.shift();
console.log(myArray); // [ 'a', 'f', 'c', 'd', 'e', , , 'z' ]

// array as referance
let arrr = [1, 2, 3];
let newArr = arrr; // newArr is a reference to arrr and not a copy of arrr
let newArr2 = [...arrr]; // newArr2 is a copy of arrr
newArr[1] = 5;
newArr2[1] = 5;
// changes in newArr will also affect arrr
console.log(arrr);
console.log(newArr);
console.log(newArr2);

//CONCAT
const first = [1, 2, 3];
const second = [4, 5];
let third = first.concat(second);
console.log(third); // [ 1, 2, 3, 4, 5 ]

//difference between push and concat
const arry = [1, 2, 3];
arry.push([4, 5, 6]); // arry will change
arry.concat([4, 5, 6]); // arry will remain same

//SPLICE -> {CAUTION : It mutates the array}
//arrays splice method -> used if we want to remove an element from somewhere in the middle, Or remove more than one element at once
// It can take upto 3 parameters -> splice()'s first parameter represents the index on the array from which to begin removing elements, while the second parameter indicates the number of elements to delete.

// splice() not only modifies the array it's being called on, but it also returns a new array containing the value of the removed elements
let array = ["I", "am", "feeling", "really", "happy"];
let newArray = array.splice(3, 2);
console.log(newArray); // ['really', 'happy']

// The third parameter is an array of elements to add to the array.
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;
numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers); // [ 10, 11, 12, 13, 14, 15 ]

// adding elements at a given index using splice()
let arr = [1, 2, 7, 8, 9];
let arr2 = [3, 4, 5, 6];
// arr.splice(2, 0, 3, 4, 5, 6); or
arr.splice(2, 0, ...arr2);
console.log(arr); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

//SLICE
//Rather than modifying an array, slice() copies or extracts a given number of elements to a new array, leaving the array it is called upon untouched. slice() takes only 2 parameters — the first is the index at which to begin extraction, and the second is the index at which to stop extraction (extraction will occur up to, but not including the element at this index).

let weatherConditions = ["rain", "snow", "sleet", "hail", "clear"];
let todaysWeather = weatherConditions.slice(1, 3);
console.log(todaysWeather); // [ 'snow', 'sleet' ]

// copy an array with the spread operator
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
// Combine Arrays with the Spread Operator
thatArray = ["basil", "cilantro", ...thisArray, "coriander"];

// indexOf
let fruits = ["apples", "pears", "oranges", "peaches", "pears"];
fruits.indexOf("dates"); // -1
fruits.indexOf("oranges"); // 2
fruits.indexOf("pears"); // 1

// to check if an element is present in an array or not
fruits.includes("dates"); // false

// find() -> returns the value of the first element that passes a test.
let ar = [1, 2, 3, 4, 5, 6];
console.log(ar.find((i) => i > 3)); // 4

//The fill() method fills specified elements in an array with a value.
//The fill() method overwrites the original array.
let ar1 = [1, 2, 3, 4, 5, 6];
ar1.fill(1); // [ 1, 1, 1, 1, 1, 1 ]
//Start and end position can be specified. If not, all elements will be filled.
ar1.fill(1, 2, 4);
console.log(ar1); // [ 1, 2, 1, 1, 5, 6 ]

// create an array from a given range
// 0 to 10
let a = [...Array(11).keys()];
console.log(a);

// 5 to 20
let s1 = 5,
  e1 = 20;
let b = [...Array(e1 - s1 + 1).keys()].map((i) => i + s1);
console.log(b);

// 15 to 50 step 5
let e2 = 50,
  s2 = 15,
  step = 5;
let l = Math.floor((e2 - s2) / step) + 1;
let c = [...Array(l).keys()].map((i) => i * step + s2);
console.log(c);

// convert an array to string
let ar3 = [1, 2, 3, 4];
let str = ar3.toString();
console.log(str); // 1,2,3,4

// convert a string to an array
let str1 = "abcde";
let ar2 = Array.from(str1);
console.log(ar2);

// higher order array methods (HOAM)

// 1)MAP -> The map method iterates over each item in an array and returns a new array containing the results of calling the callback function on each element. It does this without mutating the original array.

const users = [
  { name: "John", age: 34 },
  { name: "Amy", age: 20 },
  { name: "camperCat", age: 10 },
];

// here we are passing only the 1st argument
const names = users.map((user) => user.name); // contain only the names of all the users
console.log(names); // [ 'John', 'Amy', 'camperCat' ]

// 2)FILTER -> The filter method iterates over each element in an array and returns a new array containing the elements for which the callback function returns a truthy value.
const usersUnder30 = users.filter((user) => user.age < 30); // contain only users under 30
console.log(usersUnder30); // [ { name: 'John', age: 34 }, { name: 'Amy', age: 20 } ]

// both are passed three arguments in the callback function. The first argument is the current element being processed. The second is the index of that element and the third is the array upon which the map method was called.

// 3)REDUCE -> it iterates over each item in an array and returns a single value (i.e. string, number, object, array).
const sumOfAges = users.reduce((sum, user) => sum + user.age, 0); // find the sum of all user's ages
console.log(sumOfAges); // 64

// it accepts 2 arguments, 1st is the callback function and second is an initial value for the accumulator. If this second parameter is not used, then the first element of array is skipped and used as accumulator's initial value.

// The callback function itself can accept four arguments. The first argument is known as the accumulator, which gets assigned the return value of the callback function from the previous iteration, the second is the current element being processed, the third is the index of that element and the fourth is the array upon which reduce is called.

// using reduce to return an object with name as property and age as value from users array
const usersObj = users.reduce((obj, user) => {
  obj[user.name] = user.age;
  return obj;
}, {});
console.log(usersObj);
// using a map here will not work coz map always returns an array (here an array of objects containg name: age)

// using a MAP, FILTER or REDUCE to return a new array containing the squares of only the positive integers from an array of real numbers.
// 1st method
const newArr1 = arr
  .filter((i) => i > 0 && Number.isInteger(i))
  .map((j) => j * j);

// 2nd method
const newArr = arr.reduce((a, i) => {
  if (i > 0 && Number.isInteger(i)) {
    a.push(i * i);
  }
  return a;
}, []);

const watchList = [
  {
    Title: "Inception",
    Year: "2010",
    Rated: "PG-13",
    Released: "16 Jul 2010",
    Runtime: "148 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Metascore: "74",
    imdbRating: "8.8",
  },
  {
    Title: "Interstellar",
    Year: "2014",
    Rated: "PG-13",
    Released: "07 Nov 2014",
    Runtime: "169 min",
    Genre: "Adventure, Drama, Sci-Fi",
    Director: "Christopher Nolan",
    Metascore: "74",
    imdbRating: "8.6",
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    Rated: "PG-13",
    Released: "18 Jul 2008",
    Runtime: "152 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Metascore: "82",
    imdbRating: "9.0",
  },
  {
    Title: "Batman Begins",
    Year: "2005",
    Rated: "PG-13",
    Released: "15 Jun 2005",
    Runtime: "140 min",
    Genre: "Action, Adventure",
    Director: "Christopher Nolan",
    Metascore: "70",
    imdbRating: "8.3",
  },
  {
    Title: "Avatar",
    Year: "2009",
    Rated: "PG-13",
    Released: "18 Dec 2009",
    Runtime: "162 min",
    Genre: "Action, Adventure, Fantasy",
    Director: "James Cameron",
    Metascore: "83",
    imdbRating: "7.9",
  },
];

// map and filter are special cases of reduce. Anything that can be done with map or filter can also be done with reduce

// Using a combination of filter and map on watchList to assign a new array of objects with only title and rating keys. The new array should only include objects where imdbRating is greater than or equal to 8.0.
const filteredList = watchList
  .map((j) => ({ title: j["Title"], rating: j["imdbRating"] }))
  .filter((i) => i.rating >= 8.0);
console.log(filteredList);

//Use reduce to find the average IMDB rating of the movies directed by Christopher Nolan.
const nolanData = watchList.reduce(
  (data, i) => {
    if (i.Director === "Christopher Nolan") {
      data.count++;
      data.sum += Number(i.imdbRating);
    }
    return data;
  },
  { sum: 0, count: 0 }
);
const averageRating = nolanData.sum / nolanData.count;
console.log(averageRating); // 8.4

// SORT -> sorts the elements of an array according to the callback function.
// JavaScript's default sorting method sorts by string value therefore a callback/comparator function is required to sort by number values.
// it modifies the array upon which it is called

let nums = [1, 5, 2, 3, 4];
nums.sort((a, b) => a - b); // ascending order
console.log(nums);
nums.sort((a, b) => b - a); // descending order
console.log(nums);

// if we don't want to change the original array
let nums2 = [1, 5, 2, 3, 4];
let nums3 = nums2.concat([]).sort((a, b) => a - b);
console.log(nums3);
console.log(nums2);

let chars = ["a", "x", "c", "z"];
chars.sort(); // ascending order
console.log(chars); // ["a", "c", "x", "z"]
chars.sort((a, b) => (a === b ? 0 : a < b ? 1 : -1)); // descending order
console.log(chars); // ["z", "x", "c", "a"]

// The every method works with arrays to check if every element passes a particular test. It returns a Boolean value - true if all values meet the criteria, false if not.
const num = [1, 2, -4, 0, 3];
console.log(num.every((i) => i > 0)); // check if all the elements in the array are positive

// The some method works with arrays to check if any element passes a particular test. It returns a Boolean value - true if any of the values meet the criteria, false if not.
console.log(num.some((i) => i > 0)); // check if any element in the array is positive

// The forEach() method calls a function for each element in an array.
let ax = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let s = 0;
ax.forEach((i) => (s += i));
console.log(s);
a.forEach((x, i, ax) => (ax[i] = x * 10)); // mutates the array
console.log(ax);
