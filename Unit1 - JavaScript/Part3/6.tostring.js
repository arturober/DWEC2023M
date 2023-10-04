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

let p = new Person("Peter", 43);
console.log(`Person: ${p}`);

let p2 = new Person("Sam", 23);
let p3 = new Person("Ellie", 12);
let p4 = new Person("John", 17);

let people = [p, p2, p3, p4];
console.log(people.toString());

console.log(p > p2); // true (43 > 23)

// valueOf Doesn't work for sorting
console.log(people.toSorted((p1, p2) => p1.age - p2.age).toString());
console.log(
  people.toSorted((p1, p2) => p1.name.localeCompare(p2.name)).toString()
);
