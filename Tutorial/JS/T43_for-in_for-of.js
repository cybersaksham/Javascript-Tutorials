// ITERATING ARRAY
const items = ["item1", "item2", "item3", "item4", "item5"];

// Traditional For Loop
console.log("Traditional For Loop in ARRAY");
for (let index = 0; index < items.length; index++) {
    const element = items[index];
    console.log(element);
}

// For-in Loop
console.log("For-in Loop in ARRAY");
for (let key in items) {
    console.log(items[key]);
}

// For-of Loop
console.log("For-of Loop in ARRAY");
for (let key of items) {
    console.log(key);
}

// ITERATING OBJECT
const obj = {
    name: "Name",
    id: "Id",
    number: "Number"
}

// Traditional For Loop
console.log("Traditional For Loop in OBJECT");
for (let index = 0; index < Object.keys(obj).length; index++) {
    const element = obj[Object.keys(obj)[index]];
    console.log(element);
}

// For-in Loop
console.log("For-in Loop in OBJECT");
for (let key in obj) {
    console.log(obj[key]);
}

// ITERATING STRING
const str = "This is a string."

// Traditional For Loop
console.log("Traditional For Loop in STRING");
for (let index = 0; index < str.length; index++) {
    const element = str[index];
    console.log(element);
}

// For-in Loop
console.log("For-in Loop in STRING");
for (let char in str) {
    console.log(str[char]);
}

// For-of Loop
console.log("For-of Loop in STRING");
for (let char of str) {
    console.log(char);
}