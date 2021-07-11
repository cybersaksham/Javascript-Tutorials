// Creating an element
let element = document.createElement('p');

// Adding class & id name
element.className = 'para';
element.id = 'para1';
element.setAttribute('title', 'myPara');

// Giving text
element.innerText = 'This is created by javascript'; // Directly insert text not html
element.innerHTML = 'This is created by <b>javascript</b>'; // Insert like html

// Inserting by DOM
let div = document.querySelector('div.container');
div.appendChild(element);

// Replacing an element
let elem2 = document.createElement('h3');
elem2.id = 'elem2';
elem2.className = 'elem2';
let tNode = document.createTextNode('This is created node for elem2');
elem2.appendChild(tNode);
element.replaceWith(elem2);

// Replacing child
let myDiv = document.querySelector('div.container');
let tNode2 = document.createTextNode('This is replaced child 1');
myDiv.replaceChild(tNode2, document.getElementById('div1'));

// Removing Child
myDiv.removeChild(document.getElementById('div2'));

// Getting, Setting & Removing Attributes
console.log(elem2);
console.log(elem2.getAttribute('id'));
console.log(elem2.getAttribute('class'));
console.log(elem2.hasAttribute('class'));
console.log(elem2.hasAttribute('njdcjs'));
elem2.removeAttribute('class');
elem2.setAttribute('title', 'elemTitle');
console.log(elem2);