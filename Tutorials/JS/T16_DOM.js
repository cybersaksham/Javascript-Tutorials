// DOM --> Document Object Model

let a = document; // Gives complete html
console.log(a);
console.log(a.all); // returns all elements of html file
console.log(a.head); // returns head elements of html file
console.log(a.body); // returns body elements of html file
console.log(a.forms); // returns forms elements of html file

// We can not run for-each loop on any array returned by above methods. For do that see below
Array.from(a.all).forEach(function (element) {
    console.log(element);
})

console.log(a.links[0]); // return link in website