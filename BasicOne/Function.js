// -----------------------------
// BASIC FUNCTION
// -----------------------------
function greeting() {
    console.log("Hello Coder Army, Strike is coming on 18 October");
    return 10;
}

function addNumber(num1, num2, num3 = 0, num4 = 0) {
    const sum = num1 + num2 + num3 + num4;
    console.log(sum);
}

greeting();
addNumber(3, 4);


// -----------------------------
// REST OPERATOR
// -----------------------------
function addNumberRest(...nums) {
    let sum = 0;
    for (let n of nums) {
        sum += n;
    }
    console.log(sum);
}

addNumberRest(6, 7);
addNumberRest(6, 7, 8);
addNumberRest(6, 7, 8, 9);
addNumberRest(7, 8, 12, 12, 11, 12, 41, 12);

console.log(greeting());


// -----------------------------
// ARRAY DESTRUCTURING
// -----------------------------
const arr = [10, 20, 30, 40, 50];
const arr2 = [30, 70, 90, 10];

const [first, second, ...restNums] = arr;
console.log(first, second, restNums);

const ans = [arr, arr2];
console.log(ans);


// -----------------------------
// FUNCTION EXPRESSION
// -----------------------------
const addTwoNumbers = function (num1, num2) {
    return num1 + num2;
};

console.log(addTwoNumbers(3, 4));


// -----------------------------
// ARROW FUNCTION
// -----------------------------
const addArrow = (num1, num2) => num1 + num2;

let numbers = [10, 11, 19, 7, 50];
numbers.sort((a, b) => b - a);
console.log(numbers);


// Single parameter arrow function
const squareNumber = num => num * num;
console.log(squareNumber(6));


// Arrow function returning object
const greetingObj = () => ({ name: "Rohit", age: 20 });
console.log(greetingObj());


// -----------------------------
// IIFE (Immediately Invoked Function Expression)
// -----------------------------
(function greetingIIFE() {
    console.log("Helloji");
})();

(() => {
    console.log("hi");
})();


// -----------------------------
// CALLBACK EXAMPLE (meet)
// -----------------------------
function greet() {
    console.log("Hello Ji, Kaise ho");
}

function dance() {
    console.log("I am dancing");
}

function meet(callback) {
    console.log("I am going to meet someone");
    callback();
    console.log("I have finished meeting");
}

meet(greet);
meet(dance);


// -----------------------------
// CALLBACK REAL EXAMPLE (Blinkit & Zomato)
// -----------------------------
function blinkitOrderPlaced() {
    console.log("We have started packing your order");
}

function zomatoOrderPlaced() {
    console.log("We have started preparing your food");
}

function payment(amount, callback) {
    console.log(`${amount} payment has been initialized`);
    console.log("Payment is received");
    callback();
}

payment(500, zomatoOrderPlaced);
payment(300, blinkitOrderPlaced);
