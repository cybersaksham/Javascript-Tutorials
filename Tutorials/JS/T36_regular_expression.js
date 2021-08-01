// Regular Expression Literals
let reg1 = /hello/;
let reg2 = /This/g; // Global
let reg3 = /tHis/i; // No case sensitivity
let reg4 = /dfs/;
let reg5 = /is/g;

console.log(reg1, typeof reg1);
console.log(reg1.source);

// Function to match expressions
/*
1. exec() -- return array for match or null for no match
2. test() -- returns false if exec returns null else true
3. match() -- return array for match or null for no match -- applied on string
4. search() -- return index of first match else -1 -- applied on string
5. replace() -- returns new replaced string with first replacement -- when global flag then all are replaced -- applied on string
*/
let s1 = "This is hello world. this is good";

// exec()
console.log(reg1.exec(s1)); // First occurence
console.log(reg1.exec(s1)); // First occurence

console.log(reg2.exec(s1)); // First occurence
console.log(reg2.exec(s1)); // Second occurence
console.log(reg2.exec(s1)); // Third occurence

console.log(reg3.exec(s1)); // No case sensitivity

// test()
console.log(reg1.test(s1));
console.log(reg4.test(s1));

// match()
console.log(s1.match(reg1));
console.log(s1.match(reg4));
console.log(s1.match(reg5));

// search()
console.log(s1.search(reg1));
console.log(s1.search(reg4));

// replace()
console.log(s1.replace(reg3, 'that'));