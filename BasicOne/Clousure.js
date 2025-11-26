// ===============================
// 1️⃣ Global, Function & Block Scope
// ===============================

let a = 10;
const b = 20;

if (true) {
    let d = 30; // Block scoped
    console.log("Inside block:", d); // OK
}

// console.log(d); // ❌ ReferenceError: d is block scoped


function greet() {
    let c = 30; // Function scoped
    var e = 90; // Function scoped (var)
    console.log("Inside function:", c, e);
}
greet();

// console.log(c); // ❌ ReferenceError
// console.log(e); // ❌ ReferenceError — e is scoped to function



// ===============================
// 2️⃣ Closure Example
// Lexical scope chain
// ===============================

let global = 30; // Global variable

function greetOuter() {
    let global = 40; // Shadowing global

    function meet() {
        let global = 10; // Shadowing again
        console.log("Inside meet:", global); // prints 10
    }

    meet();
}
greetOuter();



// ===============================
// 3️⃣ Closure Counter Example
// Private variable using closure
// ===============================

function createCounter() {

    let count = 0; // Private variable

    function increment() {
        count++;
        return count;
    }

    return increment; // Returning a function = closure
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3



// ===============================
// 4️⃣ Bank Account using Closure
// balance becomes private
// ===============================

function createBankAccount() {

    let balance = 500; // Private, not accessible outside

    return {
        deposit(amount) {
            if (typeof amount === "number" && amount > 0) {
                balance += amount;
                return balance;
            }
            return "Invalid deposit!";
        },
        withdraw(amount) {
            if (typeof amount === "number" && amount > 0 && balance >= amount) {
                balance -= amount;
                return balance;
            }
            return "Invalid withdraw!";
        },
        getBalance() {
            return balance;
        }
    }
}

const customer = createBankAccount();
console.log(customer.getBalance()); // 500
console.log(customer.withdraw(200)); // 300
console.log(customer.deposit(500)); // 800

// console.log(balance) ❌ Not accessible
// customer.balance = 0 ❌ Does NOT work



