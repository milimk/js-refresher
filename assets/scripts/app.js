// ./ same folder ../ upper folder

// Import Export Solution 1
// import { apiKey } from "./util.js";

// Import Export Solution 2
// import apiKey from "./util.js";
// console.log(apiKey);

// Import Export Solution 3
// import * as utils from "./util.js";
// console.log(utils.apiKey);

// Function 1
function greetUser(userName, message = "Hello!") {
  // console.log(userName);
  // console.log(message);
  return "Hi, my name is " + userName + ". " + message;
}

let greeting1 = greetUser("Max");
console.log(greeting1);

let greeting2 = greetUser("Amelia", "What's up?");
console.log(greeting2);

// Function 2
function combine(a, b, c) {
  return (a * b) / c;
}

let calculate = combine(5, 4, 2);
console.log(calculate);
