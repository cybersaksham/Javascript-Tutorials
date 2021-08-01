/*
Some Shortcuts :
\w -- word character -- _ or alphabate or numbers
\w+ -- one or more word characters

\W -- non word character
\W+ -- one or more non word characters

\d -- digit character -- numbers from 0 to 9
\d+ -- one or more digit chaarcetrs

\D -- non digit character
\D+ -- one or more non digit chaarcetrs

\s -- white space
\s+ -- one or more white space

\S -- non white space
\S+ -- one or more non white space

\t -- tab character

\b -- word boundary -- a word ends

// Assertions
a(?=b) -- b after a
a(?!b) -- anything except b after a
*/

let str = "h_llo %&%llo 123pj";

let r1 = /\w_ll/;
console.log(r1.test(str)); // true

let r2 = /\w+ll/;
console.log(r2.test(str)); // true

let r3 = /\Wll/;
console.log(r3.test(str)); // true for "%ll"

let r4 = /\W+ll/;
console.log(r4.test(str)); // true for " %&%ll"

let r5 = /\dpj/;
console.log(r5.test(str)); // true for "3pj"

let r6 = /\d+pj/;
console.log(r6.test(str)); // true for "123pj"