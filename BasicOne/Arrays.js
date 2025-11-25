// ---------------- BASIC ARRAYS ----------------

let marks1 = 100;
let marks2 = 50;
let marks3 = 70;
let marks4 = 80;

let marks = [100, 50, 70, 80, 90];
console.log(marks);
console.log(marks.length);


// ---------------- MIXED ARRAY ----------------

let arr1 = [100, 30, "Rohit", true];
console.log(arr1);

// Modify
arr1[1] = 90;
console.log(arr1);


// ---------------- PUSH & POP ----------------

// push → add end
arr1.push(90);
arr1.push("Strike");
console.log(arr1);

// pop → remove end
arr1.pop();
console.log(arr1);


// ---------------- UNSHIFT & SHIFT ----------------

// Starting add kar sakta hu
arr1.unshift(10);
arr1.unshift(50);
console.log(arr1);

// Starting delete kar sakta hu
arr1.shift();
console.log(arr1);


// ---------------- LOOPS ----------------

let nums = [10, 30, 50, 90, 11];

// basic for loop
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}

// for-of
for (let num of nums) {
  console.log(num);
}


// ---------------- REFERENCE COPY ----------------

let arr2 = [10, 30, 50, 90, 11];
let arr3 = arr2; // reference copy

arr3.push(30);
console.log(arr2); // changed (same memory)


// ---------------- PRIMITIVE COPY ----------------

let x = 10;
let y = x;
y = 20;

console.log(x, y);


// ---------------- SLICE & SPLICE ----------------

const arr4 = [10, 30, 50, 90, 11];

// slice → does NOT change original
const sliced = arr4.slice(2, 4);
console.log("slice:", sliced);

// splice → changes original
const spliced = arr4.splice(1, 3, "Rohit", 19);
console.log("removed:", spliced);
console.log("after splice:", arr4);


// ---------------- CONCAT & SPREAD ----------------

const arr5 = [10, 30, 50, 90, 11];
const arr6 = ["Rohit", 11, true];
const arr7 = [90, 4, false];

// concat
const merged1 = arr5.concat(arr6, arr7);
console.log(merged1);

// spread
const merged2 = [...arr5, ...arr6, ...arr7];
console.log(merged2);


// ---------------- STRING METHODS ----------------

const names = ["Alice", "Rohit", "Bob", "Mohit", "Charlie"];

console.log(names.toString());
console.log(names.join("-"));
console.log(names.lastIndexOf("Bob"));
console.log(names.includes("Bobs")); // false

names.sort();
names.reverse();

console.log(names);


// ---------------- SORTING ----------------

// Sorting strings as numbers (wrong way)
const numStrings = ["101", "90", "80", "32", "91"];

// Mixed array
const mixedArr = [10, "Rohit", "Mohan", true];
mixedArr.sort();
console.log(mixedArr);

const nums2 = [10, 40, 31, 71, 5, 11];

// ascending
nums2.sort((a, b) => a - b);
console.log(nums2);

// descending
nums2.sort((a, b) => b - a);
console.log(nums2);


// ---------------- NESTED ARRAY + FLAT ----------------

const bigArr = [10, 30, 50, [40, 90, [60, 19, 99], 11], 80];

const flat = bigArr.flat(Infinity);
console.log(flat);

console.log(bigArr[3][2][1]); // 19


// ---------------- ARRAY AS OBJECT ----------------

const specialArr = [10, 309, "Rohit", 9.3, true];
specialArr.name = "Mohan"; // array acting like object

console.log(specialArr);
