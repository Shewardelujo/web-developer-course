// // function name() {

// // }
// function sayHello() {
//   console.log("Hello");
// }

// sayHello();

// // Anonymous function
// var sayBye = function () {
//   console.log("Bye");
// };

// sayBye();

// function sing() {
//   console.log("AHHHHHHHHHHHHH");
//   console.log("TEEEEEEEEEEEEE");
// }

// sing();

// function sing(song) {
//   console.log(song);
// }
// sing("Laaa deee daaa");
// sing("helllllooooooo");
// sing("One love keeps us together");

// function multiply(a, b) {
//   return a * b;
//   return a;
//   // in the case of multiple return it follows only the first one
// }

// multiply(5, 10);

// function multiply(a, b) {
//   if (a > 10 || b > 10) {
//     return "thats too hard";
//   } else {
//     return a * b;
//   }
// }

// var a = function multiply(a, b) {
//   if (a > 10 || b > 10) {
//     return "thats too hard";
//   } else {
//     return a * b;
//   }
// };

// a(10, 20);

// alert(multiply(3, 4));

// function checkDriversAge() {
//   var age = prompt("What is your age?");
//   if (Number(age) < 18) {
//     alert("Sorry, you are too young to drive this car. Powering off");
//   } else if (Number(age) > 18) {
//     alert("Powering On. Enjoy the ride!");
//   } else if (Number(age) === 18) {
//     alert("Congratulations on your first year of driving. Enjoy the ride!");
//   }
// }

// checkDriversAge();

// var checkDriverAge2 = function () {
//   var age = prompt("What is your age?");
//   if (Number(age) < 18) {
//     alert("Sorry, you are too young to drive this car. Powering off");
//   } else if (Number(age) > 18) {
//     alert("Powering On. Enjoy the ride!");
//   } else if (Number(age) === 18) {
//     alert("Congratulations on your first year of driving. Enjoy the ride!");
//   }
// };

// checkDriverAge2();

// function checkDriversAge(age) {
//   if (age < 18) {
//     return "Sorry, you are too young to drive this car. Powering off";
//   } else if (age > 18) {
//     return "Powering On. Enjoy the ride!";
//   } else if (age === 18) {
//     return "Congratulations on your first year of driving. Enjoy the ride!";
//   }
// }
// checkDriversAge(92);

// var list = ["tiger", "cat", "bear", "bird"];

// list.shift(); removes the first index in the Array
// list.pop(); removes the last index in the Array
// list.push("elephant"); add this to the end of the Array
// list.concat(["bee", "deer"]); adds another array
// list.sort

// var user = {
//   name: "John",
//   age: 34,
//   hobby: "Soccer",
//   isMarried: false,
// };

// var list = ["tiger", "cat", "bear", "bird"];

var database = [
  {
    username: "Johnson",
    password: "malolos247",
  },
];

var newsFeed = [
  {
    username: "Bobby",
    timeline: "I want to see you",
  },
  {
    username: "Gold",
    timeline: "It's relatively much",
  },
  {
    username: "Silver",
    timeline: "Do you mind to help?",
  },
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");
function signIn(user, pass) {
  if (user === database[0].username && pass === database[0].password) {
    console.log(newsFeed);
  } else {
    alert("Sorry, wrong username and password!");
  }
}
signIn(userNamePrompt, passwordPrompt);

// var todos = [
//   "clean room",
//   "brush teeth",
//   "exercise",
//   "study javascript",
//   "eat healthy",
// ];

// for (var i = 0; i < todos.length; i++) {
//   todos[i] = todos[i] + "!";
// }
// for (var i = 0; i < todos.length; i++) {
//   todos[i] = todos[i] + "!";
// }

// var todosLength = todos.length;
// for (var i = 0; i < todosLength; i++) {
//   todos.pop();
// }

// var counterOne = 10;
// while (counterOne > 0) {
//   console.log(counterOne);
//   counterOne--;
// }

// var counterTwo = 10;
// do {
//   console.log(counterTwo);
//   counterTwo--;
// } while (counterTwo > 0);

// todos.forEach(function (todo, i) {
//   console.log(todo, i);
// });
// OR
// var todos = [
//   "clean room",
//   "brush teeth",
//   "exercise",
//   "study javascript",
//   "eat healthy",
// ];

// var todosImportant = [
//   "clean room!",
//   "brush teeth!",
//   "exercise!",
//   "study javascript!",
//   "eat healthy!",
// ];

// function logTodos(todo, i) {
//   console.log(todo, i);
// }
// todos.forEach(logTodos);
// todosImportant.forEach(logTodos);
