"use strict";

class User {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello from ${this.name}`);
  }

  sayType() {
    console.log("I'm a user");
  }
}

class Admin extends User {
    constructor(name, password) {
        super(name);
        this.password = password;
    }

    sayType() {
        super.sayType(); // User.sayType
        console.log("But also an admin");
    }
} 

const admin = new Admin("The boss");
admin.sayHello();
admin.sayType();
