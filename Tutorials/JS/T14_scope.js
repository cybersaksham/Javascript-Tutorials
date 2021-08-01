/*
Scope of var is global
Scope of let & const is in their block
*/

{
    var a = 34;
    let b = 34;
}

let i = 34;
function func1() {
    let i = 10;
}
console.log("i = " + i); // Will print 34
console.log("a =", a); // Will not give error
// console.log("b =", b); // Will give error