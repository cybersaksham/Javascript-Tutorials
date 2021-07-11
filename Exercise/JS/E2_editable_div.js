/*
Create an editabel div & inject it into page which contains a heading.
Whenever someone clicks on div, it should be converted into an editable item.
Whenever user clicks away (blur), save the note to local storage.
*/

// Creating
let myDiv = document.createElement('div');
let val = localStorage.getItem('text');
let text;
if (val == null) {
    text = document.createTextNode('This is editable div. Click to edit.');
} else {
    text = document.createTextNode(val);
}
myDiv.appendChild(text);

// Setting Attributes
myDiv.setAttribute('id', 'div1');
myDiv.setAttribute('style', 'border : 2px solid black; width : 100px; margin : 34px; padding : 34px;');

// Inserting in html
let container = document.getElementById('container');
let heading = document.getElementById('heading');
container.appendChild(myDiv, heading);

// Adding event listener
let count = 0;
myDiv.addEventListener('click', function () {
    if (count == 0) {
        let html = myDiv.innerHTML;
        myDiv.innerHTML = `<textarea class="text-area" id="text-area" rows="3">${html}</textarea>`;
        count += 1;
    }

    // Listening the blur event
    let textarea = document.getElementById('text-area');
    textarea.addEventListener('blur', function () {
        myDiv.innerHTML = textarea.value;
        localStorage.setItem('text', textarea.value);
        count = 0;
    })
});