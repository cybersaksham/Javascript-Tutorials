// Maps are like objects.
// We can use any type of key or value in maps.

const myMap = new Map();
console.log(myMap);

const key1 = 'Key 1',
    key2 = {},
    key3 = function () { };

// Setting map values
myMap.set(key1, 'This is a string');
myMap.set(key2, 'This is blank object');
myMap.set(key3, 'This is a function');

console.log(myMap);

// Getting map values
let value1 = myMap.get(key1);
let value2 = myMap.get(key2);
let value3 = myMap.get(key3);
console.log(value1);
console.log(value2);
console.log(value3);

// Getting size of map
console.log(myMap.size);

// Using for-of loop to get key & values
for (let [key, value] of myMap) {
    console.log(key, value);
}

// Getting only keys
for (let key of myMap.keys()) {
    console.log(key);
}

// Getting only values
for (let value of myMap.values()) {
    console.log(value);
}

// Using for-each loop to get key & values
myMap.forEach((value, key) => {
    console.log(key);
    console.log(value);
})

// Converting map to array
let myArr = Array.from(myMap);
console.log(myArr);

// Converting map keys to array
let myKeysArr = Array.from(myMap.keys());
console.log(myKeysArr);

// Converting map values to array
let myValueArr = Array.from(myMap.values());
console.log(myValueArr);