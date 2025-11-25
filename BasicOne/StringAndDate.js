// ---------------- STRING BASICS ----------------

const str1 = "Rohitboy";
const str2 = 'Rohit Negi';
const day = 18;

const str3 = `Strike is coming on ${day}`;
console.log(str3);

const str = `Hello Coder Army`;

console.log(str.length);
console.log(str[1]);

// ❌ Strings are immutable: this will NOT work
str[2] = "S";
console.log(str); // still "Hello Coder Army"

// Uppercase & Lowercase
const upper = str.toUpperCase();
const lower = str.toLowerCase();
console.log(lower);


// ---------------- STRING SEARCH METHODS ----------------

const text = `Hello Coder Army Coder`;

console.log(text.indexOf("Cod"));
console.log(text.lastIndexOf("Cod"));
console.log(text.includes("cod")); // false (case-sensitive)


// ---------------- SLICE ----------------

console.log(text.slice(2, 7));
console.log(text.slice(3));
console.log(text.slice(-5, -2)); // "ode"


// ---------------- SUBSTRING ----------------

console.log(text.substring(2, 5)); // "llo"


// ---------------- CONCAT ----------------

const fname = "Rohit";
const lname = "Negi";
const fullName = fname + " " + lname;
console.log(fullName);


// ---------------- STRING + NUMBER ----------------

console.log(24 + "Rohit");       // "24Rohit"
console.log(24 + "Rohit" + 10);  // "24Rohit10"
console.log(24 + 30 + "Rohit");  // "54Rohit"


// ---------------- REPLACE ----------------

console.log(text.replaceAll("ode", "iam"));


// ---------------- TRIM ----------------

const user = "  Rohit  Negi ";
console.log(user.trim());


// ---------------- SPLIT ----------------

const names = "Rohit Mohit Suraj Rohan Anjali";

console.log(names.split(" ")); // array of words
console.log(names.split(",")); // no comma = whole string


// ---------------- DATE ----------------

const now = new Date();

console.log(now);
console.log(now.toString());
console.log(now.toISOString());
console.log(now.toLocaleString());


// ---------------- LOCAL TIME VALUES ----------------

console.log(now.getDay());      // 0–6 (Sun=0)
console.log(now.getDate());     // 1–31
console.log(now.getFullYear()); // yyyy
console.log(now.getMonth());    // 0–11
console.log(now.getHours());
console.log(now.getSeconds());


// ---------------- CUSTOM DATE ----------------
// year, month(0-based), date, hour, minute, seconds, ms
const customDate = new Date(2025, 8, 20, 8, 25, 16, 125);

console.log(customDate.toString());


// ---------------- TIMESTAMP ----------------

const currentTimeStamp = Date.now();
const dates = new Date(1759275037293);

console.log(dates);
console.log(currentTimeStamp);
