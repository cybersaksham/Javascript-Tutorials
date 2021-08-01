// Non Returning function
function greet(name) {
    console.log(`Hello ${name} Happy Birthday!!!`);
}

let name = "Saksham";
let name2 = "Harry";

greet(name);
greet(name2);

// Returning Function
function add(a, b) {
    return a + b;
}
let sum = add(3, 4);
console.log("The sum is " + sum);

// Default Arguments
function func1(a, b = 4) {
    console.log("a is", a);
    console.log("b is", b);
}
func1(3); // a = 3, b = 4
func1(3, 5); // a = 3, b = 5

// Stroing function in variable
const myFunc = function subtract(a, b) { // No need to give name of function
    return a - b;
}
// let ans = subtract(3, 4); // Will throw an error
let ans = myFunc(3, 4);
console.log("The sum is " + ans);

// Function in object
let obj = {
    v1: 1,
    v2: function () {
        return "hello";
    }
}
console.log(obj.v2());

// Function in array
let arr = [1, 2, 3, 4, 5];
// arr.forEach(function (item) {
//     console.log(item);
// })

arr.forEach(function (item, index, array) {
    console.log(item, index, array);
})