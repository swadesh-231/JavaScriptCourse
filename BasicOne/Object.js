// ---------------- BASIC OBJECT ----------------

const user = {
  name: "Rohit",
  age: 20,
  emailId: "negi@gmail.com",
  amount: 3400,
  "home address": "dwarka"
};

console.log(user["name"]);
console.log(user.age);
console.log(user["home address"]);
console.log(typeof user);


// ---------------- CRUD OPERATIONS ----------------

// Update
user.aadhar = 1234;
user.amount = 5000;
console.log(user);

// Delete
delete user.emailId;
console.log(user);


// ---------------- REFERENCE COPY ----------------

const user1 = {
  name: "Rohit",
  age: 20,
  emailId: "negi@gmail.com",
  amount: 3400
};

const userCopy = user1; // reference copy
userCopy.age = 90;

console.log(user1); // updated


// ---------------- IMPORTANT OBJECT METHODS ----------------

console.log(Object.keys(user1));
console.log(Object.values(user1));
console.log(Object.entries(user1));

for (let key in user1) {
  console.log(key, user1[key]);
}


// ---------------- FOR OF (Object) ----------------

for (let key of Object.keys(user1)) {
  console.log(key);
}

for (let value of Object.values(user1)) {
  console.log(value);
}

for (let [key, value] of Object.entries(user1)) {
  console.log(key, value);
}


// ---------------- OBJECT DESTRUCTURING ----------------

const { name: userName, age: userAge } = user1;
console.log(userName, userAge);


// ---------------- ARRAY DESTRUCTURING ----------------

const arr = [10, 20, 40, 90, 11];
const [first, second] = arr;
console.log(first, second);


// ---------------- METHODS INSIDE OBJECT ----------------

const userObj = {
  name: "Rohit",
  age: 20,
  greeting: function () {
    console.log(`Strike is coming on 18 October ${this.name}`);
    return 20;
  }
};

const userObj2 = {
  name: "Mohan",
  account: 201,
  greeting: function () {
    console.log(`Strike is coming on 18 October ${this.name}`);
    return 20;
  }
};

// method borrowing
userObj2.greeting = userObj.greeting;

userObj2.greeting(); // for Mohan
const v = userObj.greeting(); // for Rohit
console.log(v);


// ---------------- NESTED OBJECT ----------------

const mainUser = {
  name: "Rohit",
  age: 20,
  address: {
    city: "kotdwar",
    state: "Uttarakhand"
  }
};


// ---------------- SHALLOW COPY ----------------

const shallow = { ...mainUser };
shallow.name = "Mohan";
shallow.address.city = "Dwarka";

console.log(shallow);
console.log(mainUser.address.city); // changed = Shallow copy issue


// ---------------- DEEP COPY ----------------

const deep = structuredClone(mainUser);
deep.address.city = "Dwarka";

console.log(deep);
console.log(mainUser.address.city); // NOT changed


// ---------------- SYMBOL AS KEY ----------------

const sym = Symbol("id");

const userWithSymbol = {
  name: "Rohit",
  age: 20,
  0: 100,
  2: "Mohan",
  [sym]: "Hello Ji"
};

console.log(userWithSymbol[sym]); // access symbol key


// ---------------- ARRAY AS OBJECT ----------------

const arrTest = [10, 20, 30, 40];
// internally:
// {
//   0: 10,
//   1: 20,
//   2: 30,
//   3: 40
// }
