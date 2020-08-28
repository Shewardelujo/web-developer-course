padStart();
padEnd();
"Turtle".padEnd(10);

const fun = (a, b, c, d) => {
  console.log(a);
};
fun(1, 2, 3, 4); //returns 1

let obj1 = {
  //property or key: value
  username0: "Santa",
  username1: "Rudolf",
  username2: "Mr. Grich",
};

Object.keys(obj1).forEach((key, index) => {
  console.log(key, obj1[key]);
});
// returns username0 Santa
//username1 Rudolf
//username2 Mr. Grich

Object.values(obj1).forEach((value) => {
  console.log(value);
});
//Santa
//Rudolf
//Mr. Grich

Object.entries(obj1).forEach((value) => {
  console.log(value);
});
//["username0", "Santa"]
//["username1", "Rudolf"]
//["username2", "Mr. Grich"]

//and since entries returns arrays, we can use map with entries to tweek the arrays
Object.entries(obj1).map((value) => {
  return value[1] + value[0].replace("username", "");
});
//["Santa0", "Rudolf1", "Mr. Grich2"]
