let s1 = 'abcd'  // a string (primitive type)
let s2 = new String('abcd') // an object (reference type)
console.log(typeof s1, typeof s2)
console.log(s1 == s2) // true
console.log(s1 === s2) // false

// creating an object with different properties

var userOne = {
    email: 'sahilrps31@gmail.com',
    name: 'snehel',
    login(){
        console.log(this.email, 'has logged in');   // 'this' keyword refers to the object itself
    },
    logout(){
        console.log(this.email, 'has logged out');
    }
};

console.log(typeof userOne);  // string object

userOne.login();
userOne.logout();

console.log(userOne)

// updating the properties
userOne.name = 'ankur'

// always use strings with bracket notation
console.log(userOne['name'])

// always use bracket notation when accessing properties with variables
let prop = 'email'
userOne[prop] = 'ankur@123'
console.log(userOne[prop])


