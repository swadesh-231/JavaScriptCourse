// Number
let a = 10;
let b = 345.6821;

let c = b.toFixed(1); // returns string
console.log(typeof c); // string

console.log(b.toPrecision(4)); // 345.7
console.log(b.toString()); // "345.6821"


// Comparing Number objects
let d = new Number(20);
let e = new Number(20);

console.log(d == e); // false (different objects)

console.log(Boolean(null)); // false

let f = 20;

console.log(typeof b); // number


// Object comparison (Reference based)
let obj1 = {
    name: "Rohit"
}

let obj2 = obj1; // same reference

// ❌ You wrote obj2 again — that causes syntax error
// let obj2 = { name: "Rohit" }

console.log(obj1 == obj2); // true (same reference)


// Primitive comparison (Copy by value)
let x = 10;
let y = x;

console.log(x == y); // true



// Math operations
console.log(Math.abs(-4));        // 4
console.log(Math.PI);             // 3.14159...
console.log(Math.LN10);           // 2.302...
console.log(Math.SQRT2);          // 1.414...
console.log(Math.ceil(6.3));      // 7
console.log(Math.floor(6.3));     // 6
console.log(Math.log10(20));      // 1.301...
console.log(Math.max(20, 11, 3421, 12)); // 3421
console.log(Math.random());       // 0-1 random


// Generate number between 1-10
console.log(Math.floor(Math.random() * 10) + 1);

// Dice (1-6)
console.log(Math.floor(Math.random() * 6) + 1);


// Generic formula:
// Math.floor(Math.random() * totalOutcomes) + minValue


// Example: Random between 15 and 25
console.log(Math.floor(Math.random() * 11) + 15);
// 25 - 15 + 1 = 11


// Generic formula for min–max range:
// Math.floor(Math.random() * (max - min + 1)) + min


// OTP Generate: 4-digit (1000–9999)
console.log(Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000);
