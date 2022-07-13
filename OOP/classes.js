// creating multiple instances of the same object (ES6 classes)
class User {
    constructor(email, name){
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login(){
        console.log(this.email, 'just logged in');
        return this;
    }
    logout(){
        console.log(this.email, 'just logged out');
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.name, 'score is', this.score);
        return this;
    }
}

console.log(typeof User);  // function

var userOne = new User('snehel@gmail.com', 'snehel');
var userTwo = new User('ankur@gmail.com', 'ankur');

userOne.login();
userTwo.logout();

// method chaining
userOne.login().updateScore().updateScore().logout();



// inheritance
class Admin extends User {   // inherited classes do not have constructor() method
    deleteUser(user){
        users = users.filter(u => {
            return u.email != user.email;
        });
    }
}

var admin = new Admin('vivek@gmail.com', 'vivek');

console.log(admin);
admin.updateScore();

// array of all the users
var users = [userOne, userTwo, admin];

admin.deleteUser(userOne)
console.log(users);






