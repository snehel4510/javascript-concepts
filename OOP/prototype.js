// javascript doesn't really have a concept of classes but everything works as a prototype under the hood
function User(email, name){
    this.email = email;
    this.name = name;
    this.online = false;
    this.login = function(){
        this.online = true;
        console.log(this.email, 'has logged in');
        return this;
    };
}

console.log(typeof User);  // function

var userOne = new User('snehel@gmail.com', 'snehel');
var userTwo = new User('ankur@gmail.com', 'ankur');

console.log(typeof userOne);  // object

// console.log(userOne);
userOne.login();
// console.log(userOne);

// attaching methods to this function(emulated object) using prototype

User.prototype.logout = function(){
    this.online = false;
    console.log(this.email, 'has logged out');
    return this;
};

// console.log(userOne);
// console.log(userTwo);
userTwo.login().logout();

let users = [userOne, userTwo];

// prototype inheritance
function Admin(...args){
    User.apply(this, args);
    this.role = 'super admin';
}

admin.login() // won't work

// to inherit the prototype methods :-
Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(u){
    users = users.filter(user => {
        return user.email != u.email;
    });
    console.log(u.email, 'has been deleted');
    return this;
};

console.log(typeof Admin);  // function

var admin = new Admin('vivek@gmail.com', 'vivek');
console.log(admin, typeof admin);
admin.login().deleteUser(userOne).logout();
console.log(users);


