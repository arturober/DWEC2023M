let v = "Hello";
v = "Bye";

console.log(v);

const a: string[] = [];
console.log(a);

function number2(n: number): number {
    if (n > 0) return n * 2;
    else throw Error("Negative numbers are not allowed");
}
console.log(number2(5));

const nums: number[] = [1, 2, 3, 4, 5, 6, 7];
console.log(nums.filter((n) => n % 2 == 0));

function long(input: number | string): number {
    return String(input).length;
}
console.log(long(345)); // 3
console.log(long("6546")); // 4

// Literal values can also be combined
// type Role = "admin" | "user" | "guest";

// class Person {
//     name: string;
//     role: Role; // Can only be "admin," "user," or "guest"
//     constructor(name: string, role: Role) {
//         this.name = name;
//         this.role = role;
//     }
// }
// const p = new Person("Juan", "admin"); // OK
// console.log(p);
// p = new Person("Pepe", "wizard"); // ERROR: Argument of type '"wizard"' is not assignable to parameter of type("Role");

type OperateFunc = (n1: number, n2: number) => number;
const sum: OperateFunc = (n1, n2) => n1 + n2;
console.log(sum(3, 5));

function operate(n1: number, n2: number, f: OperateFunc): number {
    return f(n1, n2);
}

console.log(operate(4, 7, sum));
console.log(operate(8, 4, (n1, n2) => n1 - n2));

const point: [number, number] = [4, 7];
console.log(point);

interface Person {
    name: string;
    age: number;
}
// Array of people
const people: Person[] = [
    {
        name: "Ana",
        age: 34,
    },
    {
        name: "Juan",
        age: 35,
    },
];
console.log(people);
