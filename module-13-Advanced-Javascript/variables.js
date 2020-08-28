// let + const

const player = "bobby";
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
  let wizardLevel = true;
}

//in 'let' any time it is wrapped inside a curly bracket, it creates a new scope, versus when its a 'variable', var doesn't create a new scope with every curly bracket except it is wrapped inside a function

//const doesn't allow reassigning, it can't be updated, use it for something which will not change

//one thing with 'const' is, you can change the property of the object
const obj = {
  player: "bobby",
  experience: 100,
  wizardLevel: false,
};

// obj = 5, gives an error
//obj.wizardLevel = true, works and gives true
// {player: "bobby", experience: 100, wizardLevel: true}
//therefore, one thing with 'const' is, you can change the property of the object

//DESTRUCTURING
const obj = {
  player: "bobby",
  experience: 100,
  wizardLevel: false,
};

const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

//line 36 and 37 can be represented as line 41 below
const { player, experience } = obj;
let { wizardLevel } = obj;

//OBJECT PROPERTIES
const name = "john  snow";
const obj = {
  [name]: "hello",
  ["ray" + "smith"]: "hihi",
  [1 + 1]: "Thumbelina",
};

const a = "Simon";
const b = true;
const c = {};

const obj = {
  a: a,
  b: b,
  c: c,
};
// if the property and value are the same, you can skip the property declaration and just write the value
const obj = {
  a,
  b,
  c,
};

//TEMPLATE STRINGS
const name = "Sally";
const age = 34;
const pet = "horse";

const greeting = "Hello " + name + "you seem to be doing" + greeting + "!";
const greetingBest = `Hello ${name}, you seem to be ${
  age - 10
}, What a lovely ${pet} you have`;
//`` allows you to use ' and "" anywhere

//DEFAULT ARGUMENT
function greet(name = "", age = 30, pet = "cat") {
  return `Hello ${name}, you seem to be ${
    age - 10
  }, What a lovely ${pet} you have`;
}
//I can still pass in a parameter
//greet('john', 50, 'monkey')

//SYMBOL
let sym1 = Symbol();
let sym2 = Symbol("foo");
let sym3 = Symbol("foo");
// the unique thing about this is sym2 === sym3 returns false, symbols create a uniquely different

//ARROW FUNCTION
function add(a, b) {
  return a + b;
}
// also written as
const add2 = (a, b) => a + b;
