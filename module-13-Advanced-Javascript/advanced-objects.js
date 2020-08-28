//REFERENCE TYPE
var object1 = { value: 10 }; //this is storing in box 1
var object2 = object1; //this is like saying I want whatever is in the reference address box 1
var object3 = { value: 10 }; //this is storing in box 2

//CONTEXT
//context is more trickier and it used to be confused a lot with scope
//context tells us where we are within the object, that is what is the object environment that we are in right now
//when you simply do, console.log(this) not in an object; it gives the window. Also, when you do; console.log(this === window), it returns true, this is because the default object is window
//REMEMBER, this just refers to what object it is inside of. Can also be said as what is to the left of the dot.
example;
function a() {
  console.log(this);
}
a(); //it returns window, because the object we are in is window, I could also have written it as window.a();

const object4 = {
  a: function () {
    console.log(this);
  },
};
object4.a(); // returns {a: f}, that is the object4, what is to the left of the dot, since now we aren't in the default object any more, we have created another object (where we are now working from) in the default object
//it basically let you know, that is return the particular object you are in

//INSTANTIATION
//this is when you make a copy of an object and you reuse the code
class Player {
  constructor(name, type) {
    //console.log("player", this);
    this.name = name;
    this.type = type;
  } //anytime the code is run, the constructor gets run first and create (construct) these properties: name and type for the player object, and that's why introduce wil be able to access it
  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
    //console.log("Wizard", this);
  }
  play() {
    console.log(`WEEEEEEEE I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard("Shelly", "Healer");
const wizard2 = new Wizard("Shawn", "Dark Magic");
//this in wizard1 and wizard2 gives object wizard not player because the real object is wizard, which is simply extending player object
