/*
Element Selectors :
1. Single Element Selectors
2. Multi Element Selectors
*/

// 1. Single Element Selectors

let element = document.getElementById("div1");
console.log(element.className); // Return class name
console.log(element.childNode); // Returns childs
console.log(element.parentNode); // Return parent
element.style.color = 'red';
element.innerHTML = `<b>This is changed by javascript</b>`;

let element2 = document.querySelector('#div1'); // Selecting Id
console.log(element2);
element2 = document.querySelector('.child'); // Selecting first element of child class
console.log(element2);
element2 = document.querySelector('b'); // Selecting fist element with b tag
console.log(element2);

// 2. Multi Element Selectors
let elements = document.getElementsByClassName('child');
console.log(elements);
elements = document.getElementsByTagName('div');
console.log(elements);

Array.from(elements).forEach(element => {
    console.log(element);
    element.style.color = 'blue';
});