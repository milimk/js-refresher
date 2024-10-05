// ./ same folder ../ upper folder

// Import Export Solution 1 --------------------
// import { apiKey } from "./util.js";

// Import Export Solution 2 --------------------
// import apiKey from "./util.js";
// console.log(apiKey);

// Import Export Solution 3 --------------------
// import * as utils from "./util.js";
// console.log(utils.apiKey);

// Function 1 --------------------
// function greetUser(userName, message = "Hello!") {
// console.log(userName);
// console.log(message);
// return "Hi, my name is " + userName + ". " + message;
// }

// let greeting1 = greetUser("Max");
// console.log(greeting1);

// let greeting2 = greetUser("Amelia", "What's up?");
// console.log(greeting2);

// Function 2 --------------------
// function combine(a, b, c) {
//   return (a * b) / c;
// }

// let calculate = combine(5, 4, 2);
// console.log(calculate);

// Arrow function --------------------

// When only one parameter (userName) => { ... } is same as userName => { ... }

// When there's only return statement in the function
// number => {return number * 3;} is same as number => number * 3;

// Objects --------------------

// const user = {
//   name: "Max",
//   age: 35,
//   greet() {
//     // function inside object
//     console.log("Hello!");
//     console.log(this.age); // 'this' method
//   },
// };

// console.log(user.name);
// user.greet();

// // Class and blueprints --------------------

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     console.log("Hi!");
//   }
// }

// let user1 = new User("Amelia", 29);
// console.log(user1);
// user1.greet();

// Arrays --------------------

// const hobbies = ["Sports", "Reading", "Cooking"];
// console.log(hobbies[0]);

// hobbies.push("Shopping"); // Add value to array
// console.log(hobbies);

// const hobbyIndex = hobbies.findIndex(
//   // findIndex needs a function inside
//   (item) => item === "Sports"
//   // if "Sports" is found in arrays, it return its index value
//   // since its only return, remove 'return' and { }
// );
// console.log(hobbyIndex);

// const hobbyUpdate = hobbies.map((item) => ({ text: item }));
// // map transforms item to other item
// console.log(hobbyUpdate);

// Destructuring --------------------

// const [firstName, lastName] = ["Max", "Sinoy"];
// console.log(firstName);

// const { name: userName, age } = {
//   name: "Maxwell",
//   age: 35,
// };
// console.log(userName);

// Spread Operator --------------------

// const hobbies = ["Reading", "Cooking"];
// const newHobbies = ["Shopping"];

// const mergedHobbies1 = [hobbies, newHobbies]; // create arrays inside array
// const mergedHobbies2 = [...hobbies, ...newHobbies]; // take out items from arrays, create a list of new arrays
// console.log(mergedHobbies1);
// console.log(mergedHobbies2);

// const user = {
//   name: "Max",
//   age: 35,
// };
// const expandUser = {
//   isAdmin: true,
//   ...user, // pull data from 'user' object and add here
// };
// console.log(expandUser);

// Control Structures --------------------

// const password = prompt("Type password");

// if (password === "Hello") {
//   console.log("Hello is correct");
// } else {
//   console.log("No access");
// }

// const hobbies = ["Reading", "Cooking"];

// // loop through arrays 'hobbies' by creating a new variable 'hobby'
// for (const hobby of hobbies) {
//   console.log(hobby);
// }

// Functions as Values --------------------

// function handleTimeOut() {
//   console.log("Time out");
// }

// const handleTimeOut2 = () => {
//   console.log("Time out 2");
// };

// // function takes another function as a value, no need ()
// setTimeout(handleTimeOut, 2000); // delay 2000 milliseconds
// setTimeout(handleTimeOut2, 3000);
// setTimeout(() => {
//   console.log("Time out 3");
// }, 4000);

// Function inside function --------------------

// function inside() {
//   function greet() {
//     console.log("Hello");
//   }
//   greet();
// }
// inside();

// Primitive Values vs Reference --------------------

let userMessage = "Hello";
userMessage = "Hello there!";
// primitive palues can change into new value, not editing existing value

const hobbies = ["Reading", "Cooking"];
hobbies.push("Shopping");
console.log(hobbies);
// object = reference original values can be editied cuz its referencing its address where its from
