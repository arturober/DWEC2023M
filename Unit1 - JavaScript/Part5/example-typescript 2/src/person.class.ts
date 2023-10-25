// export class Person {
//     name: string;
//     age: number;
//     #role: string;

//     constructor(name: string, age: number, role: string) {
//         this.name = name;
//         this.age = age;
//         this.#role = role;
//     }
// }

export class Person {
    constructor(
        public name: string,
        public age: number,
    ) {}

    hello():void {
        console.log("Hello. I'm a person");
    }
}

export class User extends Person {
    constructor(
        name: string,
        age: number,
        public email: string,
        public password: string,
    ) {
        super(name, age);
    }

    hello():void {
        console.log("I'm a user");
    }
}
export class Client extends Person {
    constructor(name: string, age: number, public vip: boolean) {
        super(name, age);
    }

    hello():void {
        console.log("I', a client");
    }
}
