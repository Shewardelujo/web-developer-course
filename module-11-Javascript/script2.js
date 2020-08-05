var database = [
  {
    username: "Johnson",
    password: "malolos247",
  },
  {
    username: "Sally",
    password: "247",
  },
  {
    username: "Ingrin",
    password: "777",
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

// function signIn(username, password) {
//   for (var i = 0; i < database.length; i++) {
//     if (
//       database[i].username === username &&
//       database[i].password === password
//     ) {
//       console.log(newsfeed);
//     } else {
//       alert("Sorry, wrong username and password");
//     }
//   }
// }

function isUserValid(username, password) {
  for (var i = 0; i < database.length; i++) {
    if (
      database[i].username === username &&
      database[i].password === password
    ) {
      return true;
    }
  }
  return false;
}

function signIn(username, password) {
  if (isUserValid(username, password)) {
    console.log(newsFeed);
  } else {
    alert("Sorry, wrong username and password");
  }
}
signIn(userNamePrompt, passwordPrompt);
