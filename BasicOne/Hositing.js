console.log(a); // undefined
var a = 10;
var b = 20;

function addNumber(num1, num2) {
    var sum = num1 + num2;
    return sum;
}

var sumResult1 = addNumber(a, b);
console.log(sumResult1); // 30

var sumResult2 = addNumber(4, 5);
console.log(sumResult2); // 9


const addNumber = function(num1, num2) {
    const sum = num1 + num2;
    return sum;
};

let a = 10;
const b = 20;

const result = addNumber(a, b);
console.log(result); // 30
