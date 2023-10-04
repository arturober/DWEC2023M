"use strict";

class Person {
    #name;
    #age;
    
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    printInfo() {
        return `${this.#name} - ${this.#age}`;
    }
}

console.log(typeof Person);
let p = new Person("Peter", 23);
console.log(p);
console.log(p.printInfo());
// console.log(p.#name); // ERROR: Private field!

class Square {
    #side;

    constructor(side) {
        this.side = side; // Call to the setter!
    }

    get side() {
        return this.#side;
    }

    set side(side) {
        if(side <= 0) throw Error("Side must be positive!");
        this.#side = side;
    }

    get area() {
        return this.#side ** 2;
    }
}

const s = new Square(23);
console.log(s.side); // Implicit getter
s.side = 19; // Implicit setter
console.log(s.side);
console.log(`Area ${s.area}`);
s.side = -1; // Error: Side must be positive!
