//closures - a function ran, the function gets executed. it is never going to execute again, BUT it is going to remember that there are references to that variable. so the child variable always has access to the parent scope, but the parent scope don't have access to the child scope

const first = () => {
  const greet = "Hi";
  const second = () => {
    alert(greet);
  };
  return second;
};
const newFunc = first();
newFunc();

//Currying - the process of converting a function that takes multiple arguments, into one that takes the arguments one at a time
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3)(4);
//this makes sense because I can create a multiplier
const multiplyBy5 = curriedMultiply(5);
multiplyBy5(2); //returns 10

//compose - the act of putting two functions together to form a third function, where the output of one function is the input of the other
const compose = (f, g) => (a) => f(g(a));
//example
const sum = (num) => num + 1;
compose(sum, sum)(5);
//f = sum, g = sum, a = 5, f(g(5)) = g(5) = 6, then f(6) gives 7

//avoiding side effects, functional purity
//that is, your function should always return a value
//What are the two elements of a pure function?
//1. Deterministic --> always produces the same results given the same inputs
//2. No Side Effects -->  It does not depend on any state, or data, change during a program’s execution. It must only depend on its input elements.
