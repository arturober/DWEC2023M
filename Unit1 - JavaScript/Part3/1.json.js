"use strict";

let obj = new Object();
obj.name = "Peter";
obj["age"] = 23;
obj.printInfo = function () {
  return `${this.name} - ${this.age}`;
};

console.log(obj);
console.log(obj.printInfo());

let obj2 = {
  name: "John",
  age: 48,
  jobs: [
    // jobs is an array of objects JSON)
    {
      description: "Circus clown",
      duration: "2003-2005",
    },
    {
      description: "Chicken sexer",
      duration: "2005-2015",
    },
  ],
  printInfo() {
    return `${this.name} - ${this.age}`;
  },
};

console.log(obj2);
console.log(obj2.printInfo());
console.log(obj2.jobs[1].description); // Chicken sexer
