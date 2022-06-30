// understanding the different types of loops in javascript

// for-of vs for-in loop

let a = ["a", "b", "c"];
for (let i in a) console.log(i); // 0 1 2
for (let i of a) console.log(i); // a b c

let obj = {
  a: 1,
  b: 2,
  c: 3,
};
for (let i in obj) console.log(i); //[ 'a', 'b', 'c' ]
for (let i of obj) console.log(i); // wrong -> obj is not iterable, but obj.keys or obj.values or obj.entries are
