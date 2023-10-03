"use strict";

class Person {
    name;
    age;
    
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    printInfo() {
        return `${this.name} - ${this.age}`;
    }
}

console.log(typeof Person);
let p = new Person("Peter", 23);
console.log(p);
console.log(p.printInfo());