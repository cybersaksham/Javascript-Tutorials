// Type Conversion

let a = String(54); // Converting to string
console.log(a, (typeof a));
console.log();

let arr = String([1, 2, 3, 4, 5]);
console.log(arr, arr.length, (typeof arr));
console.log();

let c = Number("3434");
console.log(c, (typeof c));
console.log();

let d = Number("343f4"); // Will give NaN
console.log(d, (typeof d));
console.log();

let e = parseInt("3.14");
console.log(e, (typeof e)); // Will output 3 because it is integer
console.log();

let f = parseFloat("3.14");
console.log(f, (typeof f)); // Will output 3.14 because it is float
console.log(f.toFixed(30), (typeof f)); // Will give 30 digits after decimal
console.log();