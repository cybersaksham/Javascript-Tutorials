// Set stores unique values

const mySet = new Set();
console.log(mySet);

// Adding values to set
mySet.add('this');
mySet.add('that');
mySet.add('those');
mySet.add('this');
mySet.add(34);
mySet.add(40);
mySet.add(34);
mySet.add(true);
mySet.add(false);
mySet.add(true);

console.log(mySet);

// Using Constructor
let mySet2 = new Set([1, 2, true, 1, { a: 4, b: 8 }, 2, "This", true, "This"])
console.log(mySet2);

// Getting size
console.log(mySet.size);

// Checking for elements
console.log(mySet.has(34)); // true
console.log(mySet2.has(34)); // false

// Remove elements
mySet.delete('those');
console.log(mySet);

// Iterating a set
console.log("For-of on set");
for (let item of mySet) {
    console.log(item);
}

console.log("For Each on set");
mySet.forEach((item) => {
    console.log(item);
})

// Converting into array
let myArr = Array.from(mySet);
console.log(myArr);

// Converting array into set
let myArr2 = [1, 2, 1, 5, 4, 1, 2, 6, 5];
let mySet3 = new Set(myArr2);
console.log(mySet3);