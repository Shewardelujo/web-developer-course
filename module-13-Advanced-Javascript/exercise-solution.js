//scope

// Root Scope (window)
var fun = 5;

function funFunction() {
  // child scope
  var fun = "hellooo"; //creates a new variable in the child scope
  console.log(1, fun);
}

function funerFunction() {
  // child scope
  var fun = "Byee"; //creates a new variable in the child scope
  console.log(2, fun);
}

function funestFunction() {
  // child scope
  fun = "AAHHHHH"; //this doesn't create a new variable, but rather overrides the value of the variable fun in the parent scope
  console.log(3, fun);
}

console.log("window", fun);
funFunction();
funerFunction();
funestFunction();

// For all of these, what is the value of a when the function gets called with the alert()
// #1
function q1() {
  var a = 5;
  if (a > 1) {
    a = 3;
  }
  alert(a); //3
}

//#2
// you must first run q2() in your console to add the new value. then run q22()
var a = 0;
function q2() {
  a = 5;
}

function q22() {
  alert(a); //5
}

// run in the console:
// q22() -- 0
// q2() -- undefined
// q22() -- 5, the 0 in line 51 changes to 5 in line 53 because, both the function q2(), var a and function q22() have the same parent, which is window, therefore: window.a exists, window.q2() exists and window.q22() exists, and the variable a in q2() upon it's call overrides the var a = 0, thereby a becomes 5, then q22() alerts 5.

//#3
function q3() {
  window.a = "hello";
}

// you must first run q3() in your console to add the a property to the window. then run q32()
function q32() {
  alert(a); //"hello"
}

//#4
var a = 1;
function q4() {
  var a = "test";
  alert(a); //"test"
}

//#5 with var keyword, if statements do not create a new scope
var a = 2;
if (true) {
  var a = 5;
  alert(a); // 5
}
alert(a); // 5

// change everything below to the newer Javascript!

// let + const
var a = "test";
var b = true;
var c = 789;
a = "test2";

let a = "test";
const b = true;
const c = 789;
a = "test2";

// Destructuring
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

const { firstName, lastName, age, eyeColor } = person;

// Object properties
var a = "test";
var b = true;
var c = 789;

var okObj = {
  a: a,
  b: b,
  c: c,
};

const a = "test";
const b = true;
const c = 789;

const okObj = { a, b, c };

// Template strings
var message =
  "Hello " +
  firstName +
  " have I met you before? I think we met in " +
  city +
  " last summer no???";

const message = `Hello ${firstName} have I met you before? I think we met in ${city}. last summer no???`;

// default arguments
// default age to 10;
function isValidAge(age) {
  return age;
}

const isValidAge = (age = 10) => age;

// Symbol
// Create a symbol: "This is my first Symbol"
const sym = Symbol("This is my first Symbol");

// Arrow functions
function whereAmI(username, location) {
  if (username && location) {
    return "I am not lost";
  } else {
    return "I am totally lost!";
  }
}

const whereAmI = (username, location) => {
  if (username && location) {
    return "I am not lost";
  } else {
    return "I am totally lost!";
  }
};


//Evaluate these:
//#1
[2] === [2]; //returns false
{} === {}; // returns false

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; // 4
const object2 = object1; //4
const object3 = object2; //4
const object4 = { a: 5}; //5
object1.a = 4;
l

//#3 create two classes: an Animal class and a Mammal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 
class Animal {
    constructor(name, type, color){
        this.name = name;
        this.type = type;
        this.color = color;
    }
}
class Mammal extends Animal{
    constructor(name, type, color){
        super(name, type, color);
    }
    sound(){
        console.log(`Moooooo, I am ${this.name}, with type ${this.type}, with color ${this.color}`)
    }
}
const cow = new Mammal("Molly", "cow", "black and white");