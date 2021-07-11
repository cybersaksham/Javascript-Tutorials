// Making Symbol
const sym1 = Symbol();
console.log(sym1, typeof sym1);

// Two symbols are not equal although they are looking same
const sym2 = Symbol();
console.log(sym1 === sym2); // false

// Giving identifier for debugging
const sym3 = Symbol("Identifier");
console.log(sym3);

const k1 = Symbol();
const k2 = Symbol();

myObj = {};
myObj[k1] = "Symbol1";
myObj[k2] = "Symbol2";
myObj["item"] = "Item1";

console.log(myObj);
console.log(myObj[k1]); // Cannot do myobj.k1
console.log(myObj[k2]);

// When iterating Symbols are ignored in for-in loop & JSON
console.log("For-in loop");
for (item in myObj) {
    console.log(myObj[item]);
}

console.log(JSON.stringify(myObj));