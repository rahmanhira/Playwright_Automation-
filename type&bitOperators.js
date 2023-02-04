/**** Type Operators *****/
/* 2 types of type operators - 
typeof - returns the type of a variable , we can use the 
typeof operator to find the data type of a JavaScript variable 
 */

// let firstName = 'Mustafizur';

// console.log(typeof firstName); // returns string 
// console.log(typeof 124.22); // returns number 
// console.log (typeof true); // returns boolean 
// console.log(typeof NaN); // returns number 
// console.log(typeof null); // returns object 
// console.log(typeof new Date()); // returns object
// console.log(typeof [1,2,3,4]); // returns object
// console.log(typeof function () {});  // returns function
// console.log(typeof myClass);    // returns undefined


// /* instanceof -  Returns true if an object is an instance if an object type 
// The instanceof operator returns a boolean value that 
// indicates if an object is an instance of a particular class */

// let lastName = new String ('Hira');
// let num1 = new Number(123)
// console.log(num1 instanceof Number);
// console.log(lastName instanceof String);


/********** Bitwise Operators ****************/

let A = 1;
let B = 2;
console.log(A & B);
console.log(A | B);