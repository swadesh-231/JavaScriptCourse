// ===============================
// forEach → Just iterate
// ===============================

const arr = [10, 20, 30, 5, 90, 87];
let sum = 0;

arr.forEach((number) => {
    sum += number;
});

console.log("forEach sum:", sum); // 242


// ===============================
// Object with method call
// ===============================

let obj = {
    name: "Rohit",
    deposit(amount) {
        console.log("Deposited:", amount);
    }
};

obj.deposit(100);


// ===============================
// filter → Select true values
// ===============================

const filteredArr = arr.filter((number) => number > 25);
console.log("Filtered > 25:", filteredArr);


// Custom filter implementation (polyfill)
Array.prototype.filtering = function (compare) {
    const ans = [];
    for (let num of this) {
        if (compare(num)) {
            ans.push(num);
        }
    }
    return ans;
};

const a = [80, 30, 15, 31, 42, 70];
const answer = a.filtering((num) => num > 25);
console.log("Custom filter result:", answer);


// ===============================
// map → transform values
// ===============================

const mappedArr = arr.map((num) => num * 3);
console.log("Map x3:", mappedArr);


// ===============================
// Complex data with filter + sort + map
// ===============================

const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
  { id: 2, name: "Headphones", category: "Electronics", price: 200, inStock: true },
  { id: 3, name: "Smartphone", category: "Electronics", price: 800, inStock: false },
  { id: 4, name: "Monitor", category: "Electronics", price: 300, inStock: true },
  { id: 5, name: "Keyboard", category: "Electronics", price: 75, inStock: true },

  { id: 6, name: "The Hobbit", category: "Books", price: 25, inStock: true },
  { id: 7, name: "A Brief History of Time", category: "Books", price: 30, inStock: true },
  { id: 8, name: "Dune", category: "Books", price: 28, inStock: false },

  { id: 9, name: "Coffee Maker", category: "Appliances", price: 150, inStock: false },
  { id: 10, name: "Blender", category: "Appliances", price: 80, inStock: true },
  { id: 11, name: "Toaster", category: "Appliances", price: 45, inStock: true },
  { id: 12, name: "Microwave Oven", category: "Appliances", price: 220, inStock: true },

  { id: 13, name: "T-Shirt", category: "Clothing", price: 20, inStock: true },
  { id: 14, name: "Jeans", category: "Clothing", price: 60, inStock: false },
  { id: 15, name: "Jacket", category: "Clothing", price: 110, inStock: true },

  { id: 16, name: "Desk Lamp", category: "Home Goods", price: 35, inStock: true },
  { id: 17, name: "Scented Candle", category: "Home Goods", price: 15, inStock: true },
  { id: 18, name: "Picture Frame", category: "Home Goods", price: 22, inStock: false },

  { id: 19, name: "Organic Apples", category: "Groceries", price: 5, inStock: true },
  { id: 20, name: "Artisan Bread", category: "Groceries", price: 8, inStock: true }
];

const premiumProducts = products
  .filter((product) => product.price > 50)
  .sort((a, b) => b.price - a.price)
  .map((product) => ({ name: product.name, price: product.price }));

console.log("Premium products:", premiumProducts);


// Only show name + price of all products
const productPriceList = products.map((product) => ({
    name: product.name,
    price: product.price
}));

console.log("Mapped product list:", productPriceList);


// ===============================
// reduce → Accumulation
// sum only in-stock products
// ===============================

const totalInStockPrice = products.reduce((accumulator, currentValue) => {
    if (currentValue.inStock)
        return accumulator + currentValue.price;
    return accumulator;
}, 0);

console.log("Total inStock price:", totalInStockPrice);


// ===============================
// Set → Unique values
// ===============================

const duplicateArr = [10, 20, 30, 10, 25, 15, 10, 20];
const s1 = new Set(duplicateArr);
s1.add(11);

console.log("Set has 23?", s1.has(23));

s1.delete(10);
console.log("Set after delete:", s1);


// Unique email list
const email = ["ro@gm", "ra@gm", "mo@gm", "ro@gm"];
const emailSet = new Set(email);

console.log("Unique emails:");
for (let mail of emailSet) {
    console.log(mail);
}


// ===============================
// Map → Key-value store
// ===============================

const m1 = new Map([
    ["Rohit", 40],
    [2, "Rohit"],
    [true, 11],
    [[10, 30, 11], "Mohit"]
]);

m1.set({ name: "Manish", age: 20 }, false);

console.log("Map entries:");
for (let [key, value] of m1) {
    console.log(key, value);
}
