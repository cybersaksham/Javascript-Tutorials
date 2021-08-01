/*
Rule for variable :
1. Cannot start with numbers.
2. Can start with letters, _ or $
3. Variables are case sensitive
*/

// var, let, const

// var can be changed in their scope
var name = `saksham`; // If we put `..` for strings then we can give quotes also in string
var marks = 50;
console.log(name, marks);

// const cannot be changed anywhere
const a = 10;
// a = 20; --> will throw an error
console.log("a = " + a);

{
    // let has block level scope
    let marks = 100;
    console.log(marks);
}