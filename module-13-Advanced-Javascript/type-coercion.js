//Type coercion is when the operands are different types, one of them will be converted to an equivalent value by the javascript engine
1 == "1"; // returns true, why? The engine converts string 1 into number 1, saying I think you mean number 1, so it compares number 1 to number 1
//in JavaScript, type coercion happens when you have double equal ==
1 === "1"; //returns false, because type coercion only happens with ==

//TYPE COERCION WITH IF
if (1) {
  console.log(5);
}
// this logs 5, why? because Javascript coerces 1 to true and 0 to false

-0 === +0; //returns true, but they are technically different in JavaScript
Object.is(-0, +0); // returns false

NaN === NaN; //returns false;
Object.is(NaN, NaN); //returns true;

//  USE === IN YOUR CODE, UNLESS YOU HAVE A GOOD REASON TO USE ==, BECAUSE TYPE COERCION ARE VERY CONFUSING
