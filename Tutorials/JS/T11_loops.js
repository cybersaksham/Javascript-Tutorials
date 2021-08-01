/*
There are 4 loops :
1. For Loop
2. While Loop
3. Do-While Loop
4. ForEach Loop
*/

// For Loop
console.log("For Loop");
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// While Loop
console.log("While Loop");
let j = 0
while (j < 10) {
    console.log(j);
    j++
}

// Do-While Loop
console.log("Do-While Loop");
let k = 0;
// Runs atleast once
do {
    console.log(k);
    k++;
} while (k < 0);

// ForEach Loop
console.log("ForEach Loop in arrray");
let arr = [1, 2, 3, 4, 5];
// arr.forEach(function (item) {
//     console.log(item);
// })

arr.forEach(function (item, index, array) {
    console.log(item, index, array);
})

console.log("Loop in objects");
let obj = {
    v1: 1,
    v2: true,
    v3: "saksham"
}
for (let key in obj) {
    console.log(`The ${key} of object is ${obj[key]}`);
}