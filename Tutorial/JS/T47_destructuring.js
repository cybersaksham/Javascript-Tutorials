let a, b, c, d, e, f;

// Syntax 1
[a, b] = [10, 20];
console.log(a, b);

// Syntax 2
[c, d, e, ...f] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(c, d, e, f);

// Syntax 3
({ a, b, c, ...d } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
console.log(a, b, c, d);

// Syntax 4
const nums = [1000, 2000, 3000];
[a, b, c] = nums;
console.log(a, b, c);

// Syntax 5
let obj = {
    i1: "Item1",
    i2: "Item2",
    i3: "Item3"
}
const { i1, i2, i3, i4 } = obj;
console.log(i1, i2, i3, i4); // i4 is undefined