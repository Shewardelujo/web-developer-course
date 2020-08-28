//PASS BY VALUE,
//primitive types are immutable, meaning that we can't really change them, if we have to change them we need to completely remove the primitive type.
//so, if I create var b = 5, I can't modify the 5, I just have to remove it from memory and create a new b
var a = 5; //a now has the address of where the primitive type sits in memory;
var b = a;
b++;
console.log(a); // returns 5
console.log(b); //returns 6, and this is what is called PASSED BY VALUE, and this means that we simply COPIED the value of a and placed it in a new memory space in our machine

//PASS BY REFERENCE
let obj1 = { name: "Yao", password: "123" };
let obj2 = obj1;
obj2.password = "easypeasy";
console.log(obj1); //returns the same value as console.log(obj2);
console.log(obj2); // returns the same value as console.log(obj1);
//and this is called PASS BY REFERENCE, we DON'T COPY the value as in PASS BY VALUE, they are both referencing the same place in memory

//PASS BY REFERENCE is a GOOD idea because it is saving memory, but BAD if when someone mistakenly change a property in the reference object.

var c = [1, 2, 3, 4, 5];
//var d = c;
d.push(123456789);
console.log(c); //returns the same as console.log(d);
//to make d = c and making c unchanged with updating d
//instead of var d = c, we rather do
var d = [].concat(c);

//for objects
//OBJECT CASE 1
let obj = { a: "a", b: "b", c: "c" };
//to have obj in a different location in memory, the best idea is not to let obj = obj1, but to do it in 2 ways;
let clone = Object.assign({}, obj); //way 1
obj.c = 5;
console.log(clone); //clone won't be affected by the change done to c

let clone2 = { ...obj }; //way 2

//OBJECT CASE 2
let obj = { a: "a", b: "b", c: { deep: "Try and copy me" } };
//another object in the main object
obj.c.deep = "hahaha";
let clone = Object.assign({}, obj);
let clone2 = { ...obj };
console.log(obj);
console.log(clone);
console.log(clone2);
//wow, the 3 console.log returns the same value, why? The inner object didn't get cloned, the solution is to;
let superClone = JSON.parse(JSON.stringify()); //you won't always see this in the wild, because it takes time to load
