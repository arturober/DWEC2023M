function add(n1, n2) {
    return n1 + n2;
}

const substract = function(n1, n2) {
    return n1 - n2;
};

function operate(n1, n2, f) {
    return f(n1, n2);
}

console.log(operate(7,2, add));
console.log(operate(7,2, substract));
console.log(operate(7,2, function(n1, n2) {
    return n1 * n2;
}));
console.log(operate(7,2, (n1, n2) =>  n1 / n2));

function sayHello(name = "Nobody") {
    console.log(`Hello ${name}`);
}

sayHello("John");
sayHello();