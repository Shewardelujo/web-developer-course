//TERNARY OPERATOR

//condition ? expr1 : expr2;

function isUserValid(bool) {
  return bool;
}
var answer = isUserValid(true) ? "You may enter" : "Access Denied";

//way1
var automatedAnswer =
  "Your account number is " + (isUserValid(false) ? "1234" : "not available");
//way2
function condition() {
  if (isUserValid(true)) {
    return "You may enter";
  } else {
    return "Access Denied";
  }
}
var answer2 = condition();

//SWITCH STATEMENT
function moveCommand(direction) {
  var whatHappens;
  switch (direction) {
    case "forward":
      whatHappens = "you encounter a monster";
      break;
    case "backward":
      whatHappens = "you arrived home";
      break;
    case "right":
      whatHappens = "you found a river";
      break;
    case "left":
      whatHappens = "you run into a troll";
      break;
    default:
      whatHappens = "please enter a valid direction";
  }
  return whatHappens;
}

//EXERCISE SOLUTION

//Change into a ternary operator and assign it to a variable called experiencePoints
function experiencePoints() {
  if (winBattle()) {
    return 10;
  } else {
    return 1;
  }
}

var experiencePoints = winBattle() ? 10 : 1;
