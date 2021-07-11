const str = "hellop";
const str2 = "harhar1p2p5p";

const r1 = /hel{2}o/; // l can occur exactly 2 time
console.log(r1.test(str)); // true

const r2 = /hel{2}op{1,3}/; // p can occur exactly 1 to 3 times
console.log(r2.test(str)); // true

// Grouping
const r3 = /(har){2}([0-9]p){3}/; // (har) occurs 2 times then [0-9]p occurs 3 times
console.log(r3.test(str2)); // true