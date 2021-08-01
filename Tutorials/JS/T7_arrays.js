// In const arrays we can not intializ array again but can change values
const marks = [1, 2, 3, 4, 5, 6];
const fruits = ["Apple", "Orange", "PineApple"];
const mixed = ["String", true, 1, 3.14, [1, "saksham"]];
const arr = new Array(1, 2, 3, 4);

console.log(marks);
console.log(fruits);
console.log(mixed);
console.log(arr);

console.log(marks.length); // Return length of array
console.log(Array.isArray(mixed)); // Check for array or not

console.log(marks.indexOf(5)); // Return index of 5 if not present then -1

marks.push(100); // Insert at end of array
console.log(marks);

marks.unshift(200); // Insert at start of array
console.log(marks);

marks.pop(); // Delete element at end of array
console.log(marks);

marks.shift(); // Delete element at start of array
console.log(marks);

marks.splice(2, 3); // Delete 3 elements from index 2
console.log(marks);

marks.reverse(); // Reverse whole array
console.log(marks);

let marks2 = [100, 200, 300];
console.log(marks.concat(marks2)); // Concat at end