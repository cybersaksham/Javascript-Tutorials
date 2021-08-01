// Loacl Storage --> available till not changed threw javascipt

// Setting local storage
localStorage.setItem('i1', 'Item1');
localStorage.setItem('i2', 'Item2');

console.log(window.localStorage);

// Getting item from local storage
console.log(window.localStorage.getItem('i2')); // Item2
console.log(window.localStorage.getItem('i3')); // null

// Clearing local storage
localStorage.clear();
console.log(window.localStorage);

// Removing an particular item
localStorage.setItem('i1', 'Item1');
localStorage.setItem('i2', 'Item2');
localStorage.removeItem('i2');
console.log(window.localStorage);

// Storing array in local storage
let myArr = ['name1', 'name2', 'name3'];
localStorage.setItem('arr', JSON.stringify(myArr));
console.log(window.localStorage);

// Retrieve array from local storage
console.log(JSON.parse(localStorage.getItem('arr')));

// Session Storage --> only available till tab is open
sessionStorage.setItem('i1', 'Item1');
sessionStorage.setItem('i2', 'Item2');