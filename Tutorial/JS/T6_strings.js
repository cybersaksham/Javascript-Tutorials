const name = "Saksham";
const greet = "Good Morning!";
console.log(greet + " " + name);

/*
// This ia invalid syntax
let html;
html = "<h1>This is heading.</h1>
    <p> This is paragraph.</p> ";
*/

let html;
html = "<h1>This is heading.</h1>" +
    "<p> This is paragraph.</p>";
html = html.concat('hello', ' hi');
console.log(html);

let a = "Hello World";
console.log(a.length); // Return length of string
console.log(a.toLowerCase()); // Return string of lower cases
console.log(a.toUpperCase()); // Return string of upper cases
console.log(a); // This remains original

console.log(a.indexOf('l')); // Return first occurence of 'l'
console.log(a.lastIndexOf('l')); // Return last occurence of 'l'

console.log(a[1]); // Returns value at index 1 (e)
console.log(a.charAt(2)); // Returns value at index 2 (l)

console.log(a.endsWith('ld')); // Retrun true if string ends with 'ld'
console.log(a.includes('llo')); // Retrun true if string conatins 'llo'

console.log(a.substring(1, 7)); // Return substring form index 1 to 6
console.log(a.slice(0, 8)); // Return substring form index 0 to 7
console.log(a.slice(-3)); // Return substring of last 3 characters
console.log(a.substring(-3)); // Return whole string

console.log(a.split("l")); // Returns array after spliting at every "l"

console.log(a.replace('l', 'b')); // Returns string after replacing first occurence of "l" with "b"

// Template Literals
let fruit1 = 'Apple';
let fruit2 = 'Orange';
let myHtml = `Hello ${name}
            <h1>This is heading</h1>
            <p>You like ${fruit1} and ${fruit2}.</p>`;
console.log(myHtml);
// document.body.innerHTML = myHtml; --> Send HTML to document