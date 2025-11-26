// ===============================
// 5️⃣ Higher-Order Function Example
// ===============================

function multiply(value) {
    return function (num) {
        return num * value;
    }
}

const result = multiply(20)(5);
console.log(result); // 100
