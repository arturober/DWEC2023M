"use strict";

class User {
    static guestName = "guest";
    
    constructor(name, password) {
        this.name = name;
        this.password = password;
    } 

    static createGuest() {
        return new User(this.guestName, "1234");
    }
}

let u = new User("Pepe", "asdi43rih43");
let guest = User.createGuest();


