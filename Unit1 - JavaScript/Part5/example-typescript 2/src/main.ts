import { Client, Person, User } from "./person.class";

const p = new Person("Peter", 35);
// console.log(p.role);
Object.entries(p).forEach(([k, v]) => console.log(`${k} => ${v}`)); // No error

interface IAddress {
    street: string;
    number: number;
    zip: string;
}
interface IPerson {
    name: string;
    age: number;
    address: IAddress;
    phones: string[];
}
const person: IPerson = {
    name: "Pedro",
    age: 35,
    address: {
        street: "Perico Palotes",
        number: 12,
        zip: "24353",
    },
    phones: ["9542345453", "6574352643"],
};
console.log(person);


const people: Person[] = [
    new User("Peter", 23, "pete@email.com", "1234"),
    new Client("John", 34, true)
];

people.forEach(p => {
    p.hello();
    if(p instanceof User) {
        console.log(p.email);
    }
});