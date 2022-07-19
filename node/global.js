// the global object

console.log(global);

console.log(1);
// don't need to do global.setTimeout
setTimeout(() => {
    console.log("In the timeout");
    clearInterval(int);
}, 5000);
console.log(2);

const int = setInterval(() => {
    console.log("In the interval");
}, 1000);

// full path of the working directory & the file name
console.log(__dirname);
console.log(__filename);
