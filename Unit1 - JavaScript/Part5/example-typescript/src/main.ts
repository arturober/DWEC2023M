let v = "Hello";
v = "Bye";

console.log(v);

const a: string[] = [];
console.log(a);

function number2(n: number): number {
    if (n > 0) return n * 2;
    else {
        console.log("El numero es negativo");
        return 0;
    }
}

console.log(Math.pow(number2(2), 2));

const nums: number[] = [1, 2, 3, 4, 5, 6, 7];
console.log(nums.filter((n) => n % 2 == 0));

function long(input: number | string): number {
    return String(input).length;
}
console.log(long(345)); // 3
console.log(long("6546")); // 4
