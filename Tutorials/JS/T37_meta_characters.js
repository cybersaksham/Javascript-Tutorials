let reg1 = /this/;
let str = "this is hello world. this is good. this is awesome."

/*
Some meta characters :
1. ^ -- starts with
2. $ -- ends with
3. . -- space for one character
4. * -- space for zero or more characters
5. ? -- for optional character
6. \ -- escape character
*/

// ^
let reg2 = /^thi/;
let reg3 = /^hello/;
console.log(reg2.test(str)); // start with thi
console.log(reg3.test(str)); // does not start with hello

// $
let reg4 = /ome.$/;
let reg5 = /hello$/;
console.log(reg4.test(str)); // ends with ome.
console.log(reg5.test(str)); // does not end with hello

// .
let reg6 = /h.ll/;
let reg7 = /h...o/;
let reg8 = /h..o/;
console.log(reg6.test(str)); // hell matches
console.log(reg7.test(str)); // hello matches
console.log(reg8.test(str)); // return false

// *
let reg9 = /h*ll/;
let reg10 = /h*o/;
let reg11 = /h*e/;
console.log(reg9.test(str)); // hell matches
console.log(reg10.test(str)); // hello matches
console.log(reg11.test(str)); // he matches

// ?
let reg12 = /heg?ll/;
let reg13 = /hellk?oj?/;
let reg14 = /helli?k/;
console.log(reg12.test(str)); // hell matches -- g is optional
console.log(reg13.test(str)); // hello matches -- k & j are optional
console.log(reg14.test(str)); // return false -- i is optional but k is not

// \
let reg15 = /hel\*lo/;
let reg16 = /hel*lo/;
console.log(reg15.test(str)); // check for hel*lo
console.log(reg16.test(str)); // check for hello