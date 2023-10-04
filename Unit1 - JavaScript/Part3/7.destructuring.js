"use strict";

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    toString() {
      return `${this.name} (${this.age})`;
    }
  
    valueOf() {
      // Compares Person using age
      return this.age;
    }
  }

function printInfo({name = "Nobody", age = 0}) {
    console.log(`Name: ${name}. Age: ${age}`);
}

let p = new Person("Peter", 43);

let {name} = p;
console.log(name); // Peter

printInfo(p);
printInfo({});

let p2 = new Person("Sam", 23);
let p3 = new Person("Ellie", 12);
let p4 = new Person("John", 17);

let people = [p, p2, p3, p4];
// let {age: ageSecond} = people[1];
// console.log(ageSecond);
let [,{age: ageSecond}] = people;
console.log(ageSecond);

