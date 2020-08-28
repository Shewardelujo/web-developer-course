//Advanced Arrays

const array = [1, 2, 10, 16];

const double = [];
const newArray = array.forEach((num) => {
  double.push(num * 2);
});
console.log(double);

//map, filter, reduce
//map
const mapArray = array.map((num) => {
  return num * 2;
});
console.log(mapArray);

//when you have a single parameter, for example num in 13-15, you can remove the bracket housing the parameter, ALSO since you are returning a single line, you can just do short hand where you remove the curly brackets and the return, as in the next line
const mapArray = array.map((num) => num * 2);
console.log(mapArray);

//filter
const filterArray = array.filter((num) => {
  return num > 5;
});
console.log(filterArray);
// filter short form for line 22-24, since it is on a straight line
const filterArray = array.filter((num) => num > 5);
console.log(filterArray);
//filterArray will on return 10 and 16, because 1, 2 are not greater than 5
// if we did num===5, it will return an empty array, for none is equal to 5

//REDUCE [YOU CAN DO FILTER AND MAP WITH REDUCE]
const reduceArray = array.reduce((accumulator, num) => {
  return accumulator + num;
}, 0);
console.log(reduceArray);
//accumulator is where we can store what happens in the body of the function, the 0 at the end of the function is what we specify our accumulator to start with, it can be any number.
