let element = document.querySelector('.container');
console.log(element.childNodes); // Show comments & newlines etc. also
console.log(element.children); // Show only elements

let nodeName = element.childNodes[1].nodeName;
console.log(nodeName);

/*
// Node Types :
1. Elements
2. Attribute
3. Text Node
8. Comment
9. document
10. docType
*/
let nodeType = element.childNodes[1].nodeType;
console.log(nodeType);

console.log(element.firstChild); // Gives first child in childNodes
console.log(element.firstElementChild); // Gives first child in children

console.log(element.lastChild); // Gives last child in childNodes
console.log(element.lastElementChild); // Gives last child in children

console.log(element.childElementCount); // Gives total no of elements in children

console.log(element.firstElementChild.parentNode); // Gives parent
console.log(element.firstElementChild.nextSibling); // Gives next child
console.log(element.firstElementChild.nextElementSibling); // Gives next element child