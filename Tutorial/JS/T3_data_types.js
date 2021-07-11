/*
There are 2 types of data types in javascript :
1. Primitive Data Type
    --> String
    --> Number
    --> Boolean
    --> Null
    --> Undefined
    --> Symbol

2. Reference Data Types
    --> Arrays
    --> Object Literals
    --> Functions
    --> Dates
*/

// String
let str1 = "Saksham";
console.log("String is " + str1);
console.log("Data type of str1 is " + (typeof str1));
console.log();

// Numbers
let a = 10;
console.log("Number is " + a);
console.log("Data type of a is " + (typeof a));
console.log();

// Boolean
let b = true;
console.log("Boolean is " + b);
console.log("Data type of b is " + (typeof b));
console.log();

// Null
let c = null;
console.log("Null is " + c);
console.log("Data type of c is " + (typeof c));
console.log();

// Undefined
let d = undefined;
console.log("Undefined is " + d);
console.log("Data type of d is " + (typeof d));
console.log();

// Arrays
let e = [1, 2, 3.14, "saksham", true];
e.push(false);
console.log("Array is " + e);
console.log("Data type of e is " + (typeof e));
console.log();

// Object Literals
let f = {
    obj1: 1,
    obj2: 2,
    obj3: 3
};
console.log(f);
console.table(f);
console.log("Data type of f is " + (typeof f));
console.log();

// Functions
function g() {
}
console.log("Data type of g is " + (typeof g));
console.log();

// Dates
let h = new Date();
console.log("Date is " + h);
console.log("Data type of h is " + (typeof h));