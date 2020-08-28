// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"],
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"],
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"],
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"],
  },
];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
//my solution
const newArray = [];
const forEachArray = array.forEach((user) => {
  newArray.push(user.username + "!");
});
console.log(exclaimed);

//andrei's solution
let newArray = [];
array.forEach((user) => {
  let { username } = user;
  username = username + "!";
  newArray.push(username);
});
console.log(newArray);

//Create an array using map that has all the usernames with a "? to each of the usernames
//attempt1
const newArray = array.map((user) => {
  let { username } = user;
  return username + "?";
});
console.log(newArray);
//attempt2
const newArray = array.map((user) => {
  return user.username + "?";
});
console.log(newArray);

//Filter the array to only include users who are on team: red
//my attempt
const newArray = array.filter((user) => {
  return user.team === "red";
});
console.log(newArray);

//my second attempt
const newArray = array.filter((user) => {
  let { team } = user;
  return team === "red";
});
console.log(newArray);
//andrei's solution, how interesting!!! It is same with my first attempt
const filterArray = array.filter((user) => {
  return user.team === "red";
});
console.log(filterArray);

//Find out the total score of all users using reduce
//my attempt, interestingly same with his also!
const newArray = array.reduce((accumulator, user) => {
  return accumulator + user.score;
}, 0);
console.log(newArray);

// (1), what is the value of i? That's the index
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
  console.log(num, i);
  alert(num);
  return num * 2;
});
//my attempt of map function made pure, interestingly, it's same as Andrei's
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
  return num * 2;
});

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
//my attempt
const answer = array.map((user) => {
  user.items = user.items.map((item) => {
    return item + "!";
  });
  return user;
});
console.log(answer);
//andrei's solution
const answer = array.map((user) => {
  user.items = user.items.map((item) => {
    return item + "!";
  });
  return user;
});
console.log(answer);